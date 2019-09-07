/** need to be able to save/load states, from client or server */
export class GameState {

  /** a */
  private last_kb_evt : KeyboardEvent;

  constructor () {
    this.last_kb_evt = new KeyboardEvent('a');
  }

  /** a */
  public handle_keyboard (kbe : KeyboardEvent) : void {
    console.log('previous last evt: ', this.last_kb_evt);
    this.last_kb_evt = kbe;
  }
}
