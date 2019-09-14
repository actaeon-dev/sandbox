import * as tsext from '../tsext';

import * as dom from './interact';
/** a */
type ElementKind = 'option';
/** a */
export function
element (kind : ElementKind, attrs : { [ key : string ] : string }) : Element {
  const elt = dom.createElement(kind);

  for ( const [k, v] of tsext.object_entries<string>(attrs) ) {
    elt.setAttribute(k, v);
  }

  return elt;
}
