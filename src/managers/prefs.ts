// you will write localstorage with 'prefs:' namespace

import * as dom   from '../lib/dom';
import * as tsext from '../lib/tsext';

/** a */
export class Preferences {



  constructor () {
    dom.getElementById('prefs-controls-sub').style.display = 'none';
  }

  /** a */
  public async make_listeners () : Promise<void> {
    // first-time set-up

    const click  = 'click';

    const listeners : Map<string, [string, EventListener]> = tsext.map_from_object<
      { [id : string] : [string, Function] },
      [string, EventListener]
    >({

        'prefs-reset': [click, ( async (e : MouseEvent) => {
          e.preventDefault();

          await this.reset_prefs_dom_state();
        } )],

        'prefs-save': [click, ( async (e : MouseEvent) => {
          e.preventDefault();

          await this.write_prefs_dom_state();
        } )],

        'prefs-telemetry': [click, ( (_ : MouseEvent) => {
          // show alert?
        } )],

        'prefs-use-localstorage': [click, ( (_ : MouseEvent) => {
          // show alert?
        } )],

        'prefs-visibility': [click, ( (e : MouseEvent) => {
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
  public async reset_prefs_dom_state () : Promise<void> { return; }
  /** a */
  public async write_prefs_dom_state () : Promise<void> { return; }
  // a
}
