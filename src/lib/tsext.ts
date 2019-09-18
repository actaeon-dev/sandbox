/** a */
type ObjectEntriesSignature = ( <T> (obj : { }) => Array<[string, T]> );

/** Object.entries polyfill */
export function _impl_object_entries <T> (obj : { }) : Array<[string, T]> {
  const ownProps = Object.keys( obj );
  let i = ownProps.length;
  const resArray = new Array(i); // preallocate the Array
  while (i !== 0) {
    resArray[i] = [ ownProps[i], <T> Reflect.get(obj, ownProps[i]) ];
    i -= 1;
  }

  return resArray;
}

/** a */
export const _native_object_entries : ObjectEntriesSignature
    = ( <ObjectEntriesSignature> Reflect.get(Object, 'entries') );

/** a */
export const object_entries : ObjectEntriesSignature = (
  Object.hasOwnProperty('entries')
    ? _native_object_entries
    : _impl_object_entries
);

/** a */
export function map_from_object <A, B> (obj : A) : Map<string, B> {

  return new Map<string, B>( object_entries<B>(obj) );
}


/** a */
export function zip <T, U> ( arr : [T[], U[]] ) : Array<[T, U]> {
  const new_len = Math.min( ...arr.map( (_ : Array<T | U>) => _.length ) );
  const res = new Array(new_len);

  for (let i = 0; i < new_len; i += 1) {
    res[i] = [ arr[0][i], arr[1][i] ];
  }

  return res;
}

/** a */
export function invert <T, U> ( m : Map<T, U> ) : Map<U, T> {
  return new Map<U, T>(
    // TODO: use native IterableIterator.prototype.map instead of slow Array.from.map
    Array.from( m.entries() )
      .map( (x : [T, U]) : [U, T] => [x[1], x[0]] ),
  );
}

/** a */
export class Map2D <A, B> {
  /** a */
  private readonly map_ab : Map<A, B>;
  /** a */
  private readonly map_ba : Map<B, A>;

  constructor (m : Map<A, B>) {
    this.map_ab = new Map<A, B>( m.entries() );

    this.map_ba = invert( m );

    /*zip<B, A>(
      <[B[], A[]]> [m.values(), m.keys()].map(
        (x : IterableIterator<B | A>) : Array<B | A> => Array.from(x),
      ),
    ),*/
  }

  /** a */
  public get ( key : A | B ) : A | B | undefined {
    const ab = this.map_ab.get( <A> key );
    if (ab !== undefined) {
      return ab;
    }
    const ba = this.map_ba.get( <B> key );
    if (ba !== undefined) {
      return ba;
    }

    return undefined;
  }

}

/** a */
export type Map2DOfString = Map2D<string, string>;

/** a */
export type Dict<T> = {
  [key : string] : T;
  [key : number] : T;
};

/** a */
export type DictOfString = Dict<string>;
