#! /usr/bin/env python3
try:
    import ujson as json
except ImportError:
    import json  # type: ignore mypy bug
from pathlib import Path
import re
import sys
from typing import (Callable, Union, Dict, List,
                    Iterable, Mapping, Optional, cast)

import fastjsonschema  # type: ignore


class Constants:

    class Paths:
        _my_dir_abs = Path(__file__).parent.resolve()
        _up_dir_abs = _my_dir_abs.parent
        D_GAME = _up_dir_abs / "data" / "game"
        D_DIST = _up_dir_abs / "dist" / "data"
        D_INTERMEDIATE = Path("ir")

        E_JSON = ".json"

        F_BASE = Path("base").with_suffix(E_JSON)
        F_MANIFEST = Path("manifest").with_suffix(E_JSON)
        F_SCHEMA = Path("schema").with_suffix(E_JSON)
        F_ROOTS = [F_BASE, F_MANIFEST]

    class Re:
        COMMENTS = re.compile(
            r'#.*?$|//.*?$|/\*.*?\*/|\'(?:\\.|[^\\\'])*\'|"(?:\\.|[^\\"])*"',
            re.DOTALL | re.MULTILINE
        )
        TRAILING_OBJECT_COMMAS = re.compile(
            r'(,)\s*}(?=([^"\\]*(\\.|"([^"\\]*\\.)*[^"\\]*"))*[^"]*$)')
        TRAILING_ARRAY_COMMAS = re.compile(
            r'(,)\s*\](?=([^"\\]*(\\.|"([^"\\]*\\.)*[^"\\]*"))*[^"]*$)')


JSONPrimitive = Union[str, int, bool, None]
JSONType = Union[JSONPrimitive, 'JSONList', 'JSONDict']
JSONTypeIterable = Iterable[JSONType]
FJSValidator = Callable[['JSONDict'], 'JSONDict']
PathLibTest = Callable[[Path], bool]
CompiledDir = Dict[str, Dict[str, 'JSONDict']]


# work around mypy#731: no recursive structural types yet
class JSONList(List[JSONType]):
    def __init__(self, iterable: JSONTypeIterable) -> None:
        super().__init__(iterable)


class JSONDict(Dict[str, JSONType]):
    def __init__(
            self,
            mapping: Optional[Mapping[str, JSONType]] = None,
            **kwargs: JSONType ) -> None:
        if mapping is None:
            super().__init__(**kwargs)
        else:
            super().__init__(mapping, **kwargs)


# https://gist.github.com/liftoff/ee7b81659673eca23cd9fc0d8b8e68b7
def remove_comments(json_like: str) -> str:
    """
    Removes C-style comments from *json_like* and returns the result.
    Example::

        >>> test_json = '''\
        {
            "foo": "bar", // This is a single-line comment
            "baz": "blah" /* Multi-line
            Comment */
        }'''
        >>> remove_comments('{"foo":"bar","baz":"blah",}')
        '{\n    "foo":"bar",\n    "baz":"blah"\n}'
    """
    replacer: (  # type: ignore
        Callable[[re.Match], str]
    ) = (lambda match:
         "" if match.group(0)[0] == "/" else match.group(0))  # type: ignore

    return Constants.Re.COMMENTS.sub(replacer, json_like)


def remove_trailing_commas(json_like: str) -> str:
    """
    Removes trailing commas from *json_like* and returns the result.
    Example::

        >>> remove_trailing_commas('{"foo":"bar","baz":["blah",],}')
        '{"foo":"bar","baz":["blah"]}'
    """
    # Now fix arrays/lists [] and return the result
    return Constants.Re.TRAILING_ARRAY_COMMAS.sub(
        "]",
        # Fix objects {} first
        Constants.Re.TRAILING_OBJECT_COMMAS.sub("}", json_like)
    )


def transform_json (s: str) -> str:
    return remove_trailing_commas( remove_comments(s) )


def realize_json (f: Path) -> JSONDict:
    with open(f, "r") as fp:
        return cast(JSONDict, json.loads( transform_json( fp.read() ) ))


def write_json_file (obj: CompiledDir, f: Path) -> None:
    with open(f, "w") as fp:
        json.dump(obj, fp, separators=(',', ':'))  # type: ignore


def validate_json_file (
        f: Path,
        validator: FJSValidator ) -> JSONDict:
    print("\t" + f.stem)

    return validator( realize_json(f) )


def compile_dir(dir_name: Path) -> CompiledDir:
    print(dir_name.relative_to(Constants.Paths._up_dir_abs))

    is_file: PathLibTest = lambda x: x.is_file()
    return (lambda validator: {
        "root": {
            k.stem:
                realize_json( dir_name / k )
                for k in Constants.Paths.F_ROOTS
        },
        "impl": {
            p.stem: validate_json_file( p, validator )
                for p in filter(
                    is_file,
                    (dir_name / Constants.Paths.D_INTERMEDIATE).iterdir()
            )
        },
    })( cast(FJSValidator, fastjsonschema.compile(  # type: ignore
        realize_json( (dir_name / Constants.Paths.F_SCHEMA) )
    ) ) )


def write_dist_data(
        d: Path,
        compiler: Callable[[Path], CompiledDir] ) -> None:
    write_json_file(
        compiler( d ),
        (Constants.Paths.D_DIST / d.stem).with_suffix(Constants.Paths.E_JSON)
    )


def compile_data () -> List[ Callable[[], None] ]:
    curry_wdd: Callable[[Path], Callable[[], None]] = \
        lambda d: lambda: write_dist_data(d, compile_dir)

    dirfilter: PathLibTest = lambda d: d.is_dir()

    return list(map(
        curry_wdd,
        filter( dirfilter, Constants.Paths.D_GAME.iterdir() )
    ))


def print_help () -> None:
    print(f"\tUsage: {__file__} [-h] [-c|--cleanup-only files...]")
    print("\nThe default behaviour takes no inputs, reads from data/game \
           \n\tand writes to dist/data")
    print("\nWith -c, JSON with non-standard comments or trailing commas \
           \n\tis turned into valid JSON")
    print("\n  -c files...  --cleanup-only   Cleanup JSON from STDIN or files")
    print("  -h           --help           Show this help")


def main(opt: str) -> None:
    if opt in ("-h", "--help"):
        print_help()
    elif opt in ("-c", "--cleanup-only"):
        import fileinput
        transform_json( "\n".join( fileinput.input() ) )
    elif opt != __file__:
        print(f"don't know option {opt}")
        print_help()
        sys.exit(1)

    else:
        caller: Callable[[ Callable[[], None] ], None] = \
            lambda x: x()
        map(caller, compile_data())


if __name__ == '__main__':
    main(sys.argv[-1])
