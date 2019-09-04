function getElementById (id: string): HTMLElement {
  return <HTMLElement>(
    window.document.getElementById(id)
      || ( ((): never => { throw new Error(`no element ${id}`) })() )
  );
}

function translate_page (): void {
  // populate all class=translatable nodes given their data-i10n-id value
}

function populate_translation_selection (): void {
  const sel: HTMLSelectElement = <HTMLSelectElement> getElementById('i10n-selection');
  // for each locale listed in data/i10n/i10n.json, then add it as an <option> to the selector
}

function change_scroll_to_anchor (): void {
  const scroll_input: HTMLInputElement = <HTMLInputElement> getElementById('scroll-input');

  const v: string = (scroll_input.value === null) ? ( ((): never => { throw new Error ('no property HTMLInputElement.value') })() ) : scroll_input.value;

  const scrollpos: number = Math.abs((+v) - 1);

  getElementById('scroll-to').setAttribute('href', `#result-line${scrollpos}`);
}

function make_listeners (): void {
  const input_listeners: Array<[string, Function]> = [
    ['keydown', function (k: KeyboardEvent): void { window.console.log(`key down: ${k}`) }],
    ['keypress', function (k: KeyboardEvent): void { window.console.log(`key press: ${k}`) }],
    ['keyup', function (k: KeyboardEvent): void { window.console.log(`key up: ${k}`) }]
  ];

  const primary: HTMLInputElement = <HTMLInputElement> getElementById('primary');

  for (const l of input_listeners) {
    primary.addEventListener(l[0], <EventListener> l[1]);
  }

  ( ( window.document.getElementById('scroll-input')
      || ( ((): never => { throw new Error() })() )
    ) as HTMLInputElement
  ).addEventListener('change', <EventListener> change_scroll_to_anchor);
}

function main (): void {
  make_listeners();
  populate_translation_selection();
  //throw new Error("end of main");
}

window.onload = main;
