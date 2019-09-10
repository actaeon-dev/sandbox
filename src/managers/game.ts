import * as dom from '../lib/dom';
// you will write localstorage with 'game:' namespace

/** need to be able to save/load states, from client or server */
export class GameState {

  /** a */
  // private last_kb_evt : KeyboardEvent;

/*  constructor () {
    this.last_kb_evt = new KeyboardEvent('');
  }
*/
  /** a */
  public handle_keyboard (kbe : KeyboardEvent) : void {
    // console.log('previous last evt: ', this.last_kb_evt);
    // this.last_kb_evt = kbe;
    const input = (<HTMLInputElement> dom.getElementById('stdin')).value;

    if (kbe.isTrusted) {
      if (kbe.key === 'Enter') {
        console.log('user submit: ', input);
        //
      }
    } else {
      // scripted
    }
  }

}
