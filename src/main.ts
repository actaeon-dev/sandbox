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
async function make_listeners (lh : i18n.LocaleHandler) : Promise<void> {
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
    // why is .bind necessary? it's already called on lh, a LocaleHandler() instance
    //   NOT the LocaleHandler typename
    .addEventListener('change', <EventListener> lh.translate_page.bind(lh));

  // window.console.log('finished make_listeners');
  await new Promise(() => { /* */ });
}

/** a */
async function main () : Promise<void> {

  const
    manifest = await i18n.load_i18n_manifest(),
    dfault = i18n.load_locale_document(manifest.default),
    locale_handler = new i18n.LocaleHandler(manifest, await dfault),

    listen = make_listeners(locale_handler);

  locale_handler.populate_locale_selection();

  await listen;

  console.log('done!');
}

main()
  .then()
  .catch( (err : Error) => { throw err; });
