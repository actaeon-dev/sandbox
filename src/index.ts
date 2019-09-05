// import * as  i18n from './ i18n';

/** a */
const  i18n_document_template = 'data/i18n/%s.json';
/** a */
const  i18n_root_document = 'i18n';

/**
 * Blah
 */
interface I18nManifest {
  /** a */
  available : string[];
}

/** a  */

async function i18n_get_available_translations () : Promise<string[]> {
  return fetch( i18n_document_template.replace('%s', i18n_root_document) )
    .then( (response : Response) : { } =>
      response.json()
        .then( (x : { }) => <I18nManifest> x ) )
    .then( (manifest : I18nManifest) : string[] => manifest.available );
}

/**
 * Blah
 */
function i18n_translate_page () : void {
  // populate all class=translatable nodes given their data- i18n-id value
}

/** a */
function createElement (name : string) : Element {
  return (window.document.createElement(name) || ( () : never => {
    throw new Error('can\'t create new element: ' + name); }) );
}

/**
 * Blah
 */
function  i18n_populate_translation_selection () : void {
  // const data : string[] = async () => i18n_get_available_translations();
  // const sel: HTMLSelectElement =
  //  <HTMLSelectElement> getElementById(' i18n-selection');
  // for each locale listed in data/ i18n/ i18n.json, then add it as an
  //  <option> to the selector

  const available : string[] = i18n_get_available_translations()
    .then((x : string[]) : string[] => x )
    .catch((err : TypeError) : never => { throw err; } );

  const i18n_selection = getElementById('i18n-selection');

  for (const locale of available) {
    const option : HTMLOptionElement = <HTMLOptionElement> createElement('option');
    option.setAttribute('id', 'locale-' + locale);
    option.setAttribute('name', locale);
    option.appendChild(window.document.createTextNode( locale) );

    i18n_selection.insertAdjacentElement( 'beforeend', option );
  }
}

/** a */
function getElementById (id : string) : HTMLElement {
  return (
    window.document.getElementById(id)
      || ( (() : never => {
        throw new Error(`getElementById: no such element ${id}`);
      })() )
  );
}

/** a */
function change_scroll_to_anchor () : void {
  const scroll_input = <HTMLInputElement> getElementById('scroll-input');

  const scrollpos : number = Math.abs(Number(scroll_input.value) - 1);

  getElementById('scroll-to')
    .setAttribute('href', `#result-line${scrollpos}`);
}

/** a */
function make_listeners () : void {
  const input_listeners : Array<[string, Function]> = [
    ['keydown', (k : KeyboardEvent) : void => {
      window.console.log(`keydown: ${k.toString()}`); }],
    ['keypress', (k : KeyboardEvent) : void => {
      window.console.log(`keypress: ${k.toString()}`); }],
    ['keyup', (k : KeyboardEvent) : void => {
      window.console.log(`keyup: ${k.toString()}`); }],
  ];

  const primary : HTMLInputElement = <HTMLInputElement> getElementById('primary');

  for (const l of input_listeners) {
    primary.addEventListener(l[0], <EventListener> l[1]);
  }

  getElementById('scroll-input')
    .addEventListener('change', <EventListener> change_scroll_to_anchor);

  getElementById('i18n-selection')
    .addEventListener('change', <EventListener>  i18n_translate_page);
}

/** a */
function main () : void {
  console.log('hello');
  make_listeners();
  i18n_populate_translation_selection();
}

window.onload = main;
