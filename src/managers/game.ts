import * as dom from '../lib/dom/interact';
// you will write localstorage with 'game:' namespace

/** need to be able to save/load states, from client or server */
export class GameState {

  /** a */
  // private last_kb_evt : KeyboardEvent;

/*  constructor () {
    this.last_kb_evt = new KeyboardEvent('');
  }
*/
  public async make_listeners () : Promise<void> {
    const input_listeners : string[] = ['keydown', 'keypress', 'keyup'];

    const stdin = <HTMLInputElement> dom.getElementById('stdin');

    for (const l of input_listeners) {
      stdin.addEventListener(l, <EventListener> this.handle_keyboard.bind(this));
    }

    return;
  }

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
