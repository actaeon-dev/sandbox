import * as i10n from './i10n';

/** a */
function getElementById (id : string) : HTMLElement {
  return (
    window.document.getElementById(id)
      || ( (() : never => {
        throw new Error(`getElementById: no such element ${id}`);
      })() )
  );
}

/** a */
function change_scroll_to_anchor () : void {
  const scroll_input = <HTMLInputElement> getElementById('scroll-input');

  const scrollpos : number = Math.abs(Number(scroll_input.value) - 1);

  getElementById('scroll-to')
    .setAttribute('href', `#result-line${scrollpos}`);
}

/** a */
function make_listeners () : void {
  const input_listeners : Array<[string, Function]> = [
    ['keydown', (k : KeyboardEvent) : void => {
      window.console.log(`keydown: ${k.toString()}`); }],
    ['keypress', (k : KeyboardEvent) : void => {
      window.console.log(`keypress: ${k.toString()}`); }],
    ['keyup', (k : KeyboardEvent) : void => {
      window.console.log(`keyup: ${k.toString()}`); }],
  ];

  const primary : HTMLInputElement = <HTMLInputElement> getElementById('primary');

  for (const l of input_listeners) {
    primary.addEventListener(l[0], <EventListener> l[1]);
  }

  getElementById('scroll-input')
    .addEventListener('change', <EventListener> change_scroll_to_anchor);

  getElementById('i10n-selection')
    .addEventListener('change', <EventListener> i10n.translate_page);
}

/** a */
function main () : void {
  console.log('hello');
  make_listeners();
  i10n.populate_translation_selection();
  console.log(i10n.get_available_translations());
}

window.onload = main;
