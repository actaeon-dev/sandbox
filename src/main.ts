import * as dom           from './lib/dom';
import * as game_manager  from './managers/game';
import * as i18n          from './managers/i18n';
import * as prefs         from './managers/prefs';

/** change which line the scroll-to anchor is a link */
function change_scroll_to_anchor () : void {
  const scroll_input = <HTMLInputElement> dom.getElementById('scroll-input');

  const scrollpos : number = Math.abs(Number(scroll_input.value) - 1);

  dom.getElementById('scroll-to')
    .setAttribute('href', `#result-line${scrollpos}`);
}

/** create event listeners for page elements */
async function
make_listeners (lh : i18n.LocaleHandler, gm : game_manager.GameState) : Promise<void> {
  (() => {
    const input_listeners : string[] = ['keydown', 'keypress', 'keyup'];

    const primary = <HTMLInputElement> dom.getElementById('primary');

    for (const l of input_listeners) {
      primary.addEventListener(l, <EventListener> gm.handle_keyboard.bind(gm));
    }
  })();

  dom.getElementById('scroll-input')
    .addEventListener('change', <EventListener> change_scroll_to_anchor);

  dom.getElementById('i18n-selection')
    // why is .bind necessary? it's already called on lh, a LocaleHandler() instance
    //   NOT the LocaleHandler typename
    .addEventListener('change', <EventListener> lh.translate_page.bind(lh));

  (() => {
    // first-time set-up
    dom.getElementById('prefs-controls-sub').style.display = 'none';

    dom.getElementById('prefs-visibility')
      .addEventListener('click', <EventListener> (() => {
        const s = dom.getElementById('prefs-controls-sub');
        s.style.display = (s.style.display === 'none')
          ? 'inherit'
          : 'none';
      }));
  })();

  // window.console.log('finished make_listeners');
  return;
}

/** entry point */
async function main () : Promise<void> {
  console.log('started!');

  const
    cfg = new prefs.Preferences(),
    manifest = await i18n.load_i18n_manifest(),
    dfault = await i18n.load_locale_document(manifest.default),
    locale_handler = new i18n.LocaleHandler(manifest, dfault),

    gman = new game_manager.GameState(),

    listen = make_listeners(locale_handler, gman);

  console.log(manifest);

  await listen;

  await locale_handler.populate_locale_selection();

  await locale_handler.translate_page();

  // await gman.run();

  console.log('done!', cfg);
}

main()
  .then()
  .catch( (err : Error) => { throw err; });
