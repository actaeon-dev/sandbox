import * as dom from './lib/dom';
// import dom = require('./lib/dom');

/** a */
const DOCUMENT_PATH_TEMPLATE = 'data/i18n/%s.json';
/** a */
const ROOT_DOCUMENT = 'i18n';
/** a */
const CLASS_TRANSLATABLE = 'translatable';
/** a */
const SPECIAL_DATA_ID = 'data-i18n-id';
/** a */
const ID_I18N_SELECTION = 'i18n-selection';

/**
 * Locale-describer
 */
interface I18nManifest {
  /** Available locales, not the total list of files in data/i18n */
  readonly available : string[];
  /** The default locale, for initialisation and fallback purposes. */
  readonly default   : string;
}

/** all properties map UIDs to their natural language content */
interface GameTranslationTarget {
  /** simple object names */
  readonly noun : Map<string, string>;
  /** speech, including narration */
  readonly dialogue : Map<string, string>;
  /** descriptions of items, places, emotions, etc */
  readonly description : Map<string, string>;
}

/** A translation target. */
interface Locale {
  /** human readable name */
  readonly name : string;
  /** ISO 639 */
  readonly id : string;
  /** whether the translation is "total" */
  readonly complete : boolean;
  /** map from HTML data-* ids to what text should be inside them */
  readonly page : Map<string, string>;
  /** user-input commands */
  readonly input_words : Map<string, string>;
  /** actual game content */
  readonly output : GameTranslationTarget;
}

/** describes the current page locale status */
class LocaleState {
  /** active locale */
  public readonly current : Locale;
  /** backup */
  public readonly fallback : Locale;

  constructor (current : Locale, fallback : Locale) {
    this.current = current;
    this.fallback = fallback;
  }

  /** get the page or input_words translation by id, not for output */
  public get_id (field : 'page' | 'input_words', id : string) : string {

    const cur : string | undefined = this.current[field].get(id);
    if (cur === undefined) {
      const fal : string | undefined = this.fallback[field].get(id);
      if (fal === undefined) {
        console.error(
          `ERROR: no translation found anywhere for field: ${field} id: ${id}`,
        );

        return '(missing translation)';
      }

      return fal;
    }

    return cur;
  }
}

/** a */

/** a  */
export async function get_available_locales () : Promise<string[]> {
  return fetch( DOCUMENT_PATH_TEMPLATE.replace('%s', ROOT_DOCUMENT) )
    .then( (response : Response) : Promise<I18nManifest> => response.json()
      .then( (x : { }) => <I18nManifest> x ) )
    .then( (manifest : I18nManifest) : string[] => manifest.available );
}

function get_locale_from_dom_state () : LocaleState {
  return new LocaleState(
    dom.getElementById(ID_I18N_SELECTION),

  );
}

/**
 * Blah
 */
export function translate_page () : void {
  const locale : LocaleState = get_locale_from_dom_state();
  const candidates : HTMLElement[] = <HTMLElement[]> Array.from(
    dom.getElementsByClassName(CLASS_TRANSLATABLE) );
  for (const c of candidates) {
    const id = c.getAttribute(SPECIAL_DATA_ID);
    if (id !== null) {
      c.innerText = locale.get_id('page', id);
    }
  }
  // populate all class=translatable nodes given their data-i18n-id value
}

/**
 * Blah
 */
export async function populate_locale_selection () : Promise<void> {
  // const data : string[] = async () => i18n_get_available_translations();
  // const sel: HTMLSelectElement =
  //  <HTMLSelectElement> getElementById(' i18n-selection');
  // for each locale listed in data/ i18n/ i18n.json, then add it as an
  //  <option> to the selector

  const available : string[] = await get_available_locales();
    // .then((x : string[]) : string[] => x )
    // .catch((err : TypeError) : never => { throw err; } ) );

  console.log(`available: ${available.toString()}`);

  const i18n_selection = dom.getElementById(ID_I18N_SELECTION);

  for (const locale of available) {
    const option : HTMLOptionElement = <HTMLOptionElement> dom.createElement('option');
    option.setAttribute('id', 'locale-' + locale);
    option.setAttribute('name', locale);
    // want to display the human-readable name of the locale here but that
    //  requires loading every locale just to get one field
    //  maybe there's a better approach to the data, for now just the ID will appear
    option.appendChild(window.document.createTextNode( locale ) );

    i18n_selection.insertAdjacentElement( 'beforeend', option );
  }

  // window.console.log('finished pop');
}
