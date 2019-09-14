// you will write localstorage with 'prefs:' namespace

import * as dom   from '../lib/dom/interact';
import * as tsext from '../lib/tsext';

/** a */
const enum PrefsAction {
  SAVE = 'save',
  RESET = 'reset',
  IMPORT = 'import',
  EXPORT = 'export',
}

/** a */
export class Preferences {

  constructor () {
    dom.getElementById('prefs-controls-sub').style.display = 'none';
  }

  /** a */
  public async make_listeners () : Promise<void> {
    // first-time set-up

    const cl  = 'click';

    const make_sf = ((action : PrefsAction) => (
      async (e : MouseEvent) => {
        e.preventDefault();

        return this.state_change(action);
      })
    );

    const listeners : Map<string, [string, EventListener]>
      = tsext.map_from_object<
        { [key : string] : [string, Function] }, [string, EventListener]>
    ({
        'prefs-export': [cl, make_sf(PrefsAction.EXPORT)],
        'prefs-import': [cl, make_sf(PrefsAction.IMPORT)],
        'prefs-reset': [cl, make_sf(PrefsAction.RESET)],
        'prefs-save':  [cl, make_sf(PrefsAction.SAVE)],

        // 'prefs-i18n': [click, ]

        'prefs-telemetry': [cl, ( (_ : MouseEvent) => {
          // show alert?
        } )],

        'prefs-use-localstorage': [cl, ( (_ : MouseEvent) => {
          // show alert?
        } )],

        'prefs-visibility': [cl, ( (e : MouseEvent) => {
          e.preventDefault();
          const s = dom.getElementById('prefs-controls-sub');
          s.style.display = (s.style.display === 'none')
            ? 'inherit'
            : 'none';
        } )],
    });

    listeners.forEach( ((v : [string, EventListener], k : string, _) : void => {
      dom.getElementById(k)
        .addEventListener( ...v );
    }) );

    return;
  }

  /*** require confirmation */
  public async state_change ( action : PrefsAction ) : Promise<void> {

    const new_locale_id = (<HTMLSelectElement> dom.getElementById('prefs-i18n'))
      .selectedOptions[0].getAttribute('name');

    return (({

      [PrefsAction.SAVE]: (() : string => { 'a' }),
      [PrefsAction.RESET]: (() : string => { 'b' ),
      [PrefsAction.IMPORT]: (() : string  => { 'c' }),
      [PrefsAction.EXPORT]: (() : string => { 'd' }),

    })[action])();
  }
}
