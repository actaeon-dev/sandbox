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
export function
getElementsByClassName (name : string) : HTMLCollectionOf<ChainableElement> {
  return <HTMLCollectionOf<ChainableElement>> (
    window.document.getElementsByClassName(name)
      || ( (() : never => {
        throw new Error(`getElementsByClassName: ??? error happened when processing ${name}`);
      })() )
  );
}

/** a */
export function createElement (name : string) : ChainableHTMLElement {
  return <ChainableHTMLElement> (
    window.document.createElement(name)
      || ( () : never => {
        throw new Error('can\'t create new element: ' + name); })
  );
}

/** a */
class ChainableElement extends Element {
  /** a */
  public setAttribute (name : string, value : { }) : ChainableElement {
    this.setAttribute(name, value);

    return this;
  }
}

/** a */
class ChainableHTMLElement extends HTMLElement {
  /** a */
  public setAttribute (name : string, value : { }) : ChainableHTMLElement {
    this.setAttribute(name, value);

    return this;
  }
}
