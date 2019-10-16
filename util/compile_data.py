#! /usr/bin/env python3
try:
    import ujson as json
except ImportError:
    import json
import os
import re
import sys
import typing

import fastjsonschema


class Constants:

    class Ext:
        JSON = ".json"
        SCHEMA = ".schema" + JSON

    class Data:
        _up_dir = os.path.join(os.path.dirname(__file__), "..")
        GAME = os.path.join(_up_dir, "data", "game")
        DIST = os.path.join(_up_dir, "dist", "data")
        INTERMEDIATE = "ir"

    class RootNames:
        BASE = "base"
        MANIFEST = "manifest"
        ALL = [BASE, MANIFEST]

    class Re:
        COMMENTS = re.compile(
            r'#.*?$|//.*?$|/\*.*?\*/|\'(?:\\.|[^\\\'])*\'|"(?:\\.|[^\\"])*"',
            re.DOTALL | re.MULTILINE
        )
        TRAILING_OBJECT_COMMAS = re.compile(
            r'(,)\s*}(?=([^"\\]*(\\.|"([^"\\]*\\.)*[^"\\]*"))*[^"]*$)')
        TRAILING_ARRAY_COMMAS = re.compile(
            r'(,)\s*\](?=([^"\\]*(\\.|"([^"\\]*\\.)*[^"\\]*"))*[^"]*$)')


# https://gist.github.com/liftoff/ee7b81659673eca23cd9fc0d8b8e68b7
def remove_comments(json_like):
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
    replacer = lambda match: "" if match.group(0)[0] == "/" else match.group(0)
    return Constants.Re.COMMENTS.sub(replacer, json_like)


def remove_trailing_commas(json_like):
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


def read_json_file (fname: str) -> str:
    with open(fname, "r") as fp:
        return transform_json( fp.read() )


def realize_json (fname: str) -> dict:
    return json.loads( read_json_file(fname) )


def write_json_file (obj: dict, fname: str) -> None:
    with open(fname, "w") as fp:
        json.dump(obj, fp, separators=(',', ':'))


def validate_json_file (
        fname: str,
        base_name: str,
        validator: typing.Callable[[str], None] ) -> dict:
    print("\t" + base_name)

    return (lambda c: validator(c) and json.loads(c))(
        read_json_file(fname)
    )


def compile_dir(dir_name: str, base_name: str) -> dict:
    print(dir_name)
    intermediate_dir = os.path.join(dir_name, Constants.Data.INTERMEDIATE)
    validator = fastjsonschema.compile( realize_json(
        os.path.join(dir_name, base_name + Constants.Ext.SCHEMA)
    ) )
    return {
        "root": {
            k:
                realize_json( os.path.join(dir_name, k + Constants.Ext.JSON) )
                for k in Constants.RootNames.ALL
        },
        "impl": {
            base_name: validate_json_file( full_path, base_name, validator )
                for base_name, full_path in map(
                    lambda x: (
                        x.split('.')[0],
                        os.path.join(intermediate_dir, x)
                    ),
                    os.listdir(intermediate_dir)
            )
                if os.path.isfile(full_path)
        },
    }


def write_dist_data(d: str, compiler: typing.Callable[[str], dict]) -> None:
    write_json_file(
        compiler( os.path.join(Constants.Data.GAME, d), d ),
        os.path.join(Constants.Data.DIST, d + Constants.Ext.JSON)
    )


def compile_data ():
    for d in os.listdir(Constants.Data.GAME):
        if os.path.isdir( os.path.join(Constants.Data.GAME, d) ):
            write_dist_data(d, compile_dir)
            # except ValueError as e:
            # print(e)
            # sys.exit(2)


def print_help ():
    print(f"Usage: {__file__} [-h] [-c|--cleanup-only file...]")
    print("\nThe default behaviour takes no inputs, reads from data/game and writes to dist/data")  # noqa
    print("\nWith -c, JSON with non-standard comments or trailing commas is turned into valid JSON")  # noqa
    print("\n-c  --cleanup-only   Simply remove JSON comments from STDIN or file parameters")  # noqa
    print("-h  --help           Show this help")  # noqa


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
        compile_data()


if __name__ == '__main__':
    main(sys.argv[-1])
