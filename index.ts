function make_listeners (): void {
  const input_listeners: Array<[string, Function]> = [
    ['keydown', function (k: string): void { window.console.log(`key down: ${k}`) }],
    ['keypress', function (k: string): void { window.console.log(`key press: ${k}`) }],
    ['keyup', function (k: string): void { window.console.log(`key up: ${k}`) }]
  ];

  const primary: HTMLElement = window.document.getElementById('primary') || ( ((): never => { throw new Error('no primary input element') })() );

  for (const l of input_listeners) {
    primary.addEventListener(l[0], <EventListener> l[1]);
  }
}

function main (): void {
  make_listeners();
  throw new Error("end of main");
}

window.onload = main;
