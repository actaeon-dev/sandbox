import * as i18n from './i18n';
// import i18n = require('./i18n');
import * as dom from './lib/dom';
// import dom = require('./lib/dom');

/** a */
function change_scroll_to_anchor () : void {
  const scroll_input = <HTMLInputElement> dom.getElementById('scroll-input');

  const scrollpos : number = Math.abs(Number(scroll_input.value) - 1);

  dom.getElementById('scroll-to')
    .setAttribute('href', `#result-line${scrollpos}`);
}

/** a */
function see_keyboardevent (k : KeyboardEvent) : void {
  window.console.log(`key: ${k.key} mod: ${k.getModifierState(k.key)}`);
}

/** a */
async function make_listeners () : Promise<void> {
  const input_listeners : Array<[string, Function]> = [
    ['keydown', see_keyboardevent],
    ['keypress', see_keyboardevent],
    ['keyup', see_keyboardevent],
  ];

  const primary : HTMLInputElement = <HTMLInputElement> dom.getElementById('primary');

  for (const l of input_listeners) {
    primary.addEventListener(l[0], <EventListener> l[1]);
  }

  dom.getElementById('scroll-input')
    .addEventListener('change', <EventListener> change_scroll_to_anchor);

  dom.getElementById('i18n-selection')
    .addEventListener('change', <EventListener> i18n.translate_page);

  // window.console.log('finished make_listeners');
  await new Promise(() => { /* */ });
}

/** a */
async function main () : Promise<void> {
  const l = make_listeners();
  const p = i18n.populate_locale_selection();

  await l;
  await p;

  console.log('done!');
}

main()
  .then()
  .catch( (err : Error) => { throw err; });
