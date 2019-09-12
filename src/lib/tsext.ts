/** Object.entries polyfill */
export function object_entries<rhs> (obj : { }) : Array<[string, rhs]> {
  const ownProps = Object.keys( obj );
  let i = ownProps.length;
  const resArray = new Array(i); // preallocate the Array
  while (i !== 0) {
    // tslint:disable-next-line
    resArray[i] = [ ownProps[i], <rhs> Reflect.get(obj, ownProps[i]) ];
    i -= 1;
  }

  return resArray;
}

/** a */
function _native_map_from_object <A, B> (obj : A) : Map<string, B> {

  return new Map<string, B>(
    <Array<[string, B]>> ( <Function> Reflect.get(Object, 'entries') )(obj),
  );
}

/** a */
function _impl_map_from_object <A, B> (obj : A) : Map<string, B> {

  return new Map<string, B>( object_entries<B>(obj) );
}

/** {} -> Map<> */
export const map_from_object = (
  Object.hasOwnProperty('entries')
    ? _native_map_from_object
    : _impl_map_from_object
);
