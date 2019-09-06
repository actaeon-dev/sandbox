/** a */
export function getElementById (id : string) : HTMLElement {
  return (
    window.document.getElementById(id)
      || ( (() : never => {
        throw new Error(`getElementById: no such element ${id}`);
      })() )
  );
}

/** a */
export function getElementsByClassName (name : string) : HTMLCollectionOf<Element> {
  return (
    window.document.getElementsByClassName(name)
      || ( (() : never => {
        throw new Error(`getElementsByClassName: ??? error happened when processing ${name}`);
      })() )
  );
}

/** a */
export function createElement (name : string) : Element {
  return (window.document.createElement(name) || ( () : never => {
    throw new Error('can\'t create new element: ' + name); }) );
}
