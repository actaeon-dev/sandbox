import * as dom from './lib/dom';
// import dom = require('./lib/dom');

/** a */
const DOCUMENT_PATH_TEMPLATE = 'data/i18n/%s.json';
/** a */
export const ROOT_DOCUMENT = 'i18n';
/** a */
const CLASS_TRANSLATABLE = 'translatable';
/** a */
const SPECIAL_DATA_ID = 'data-i18n-id';
/** a */
const ID_I18N_SELECTION = 'i18n-selection';
/** a */
const MISSING_TRANSLATION = '(missing translation)';
/** a */
const FORMAT_REPLACE = '%s';

/** manifest structure directly from JSON, before unmangling object -> Map etc */
/* private */
interface IntermediateI18nManifest {
  /** The default locale, for initialisation and fallback purposes. */
  readonly default   : string;
  /** a */
  readonly available : { };
}

/**
 * Locale-describer
 */
export interface I18nManifest extends IntermediateI18nManifest {
  /** Available locales, not the total list of files in data/i18n */
  readonly available : Map<string, string>;
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

/** locale structure directly from JSON, before complex types are unmangled from object */
/* private */
interface IntermediateLocale {
  /** human readable name */
  readonly name : string;
  /** ISO 639 */
  readonly id : string;
  /** whether the translation is "total" */
  readonly complete : boolean;
  /** a */
  readonly page : { };
  /** a */
  readonly input_words : { };
  /** a */
  readonly output : { };
}
/** A translation target. */
interface Locale extends IntermediateLocale {
  /** map from HTML data-* ids to what text should be inside them */
  readonly page : Map<string, string>;
  /** user-input commands */
  readonly input_words : Map<string, string>;
  /** actual game content */
  readonly output : GameTranslationTarget;
}

/** any document in data/i18n other than the schema */
export type I18nDocument = I18nManifest | Locale;

// type LocaleID = string;

/** data class describing the current page locale status */
/* data */
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

        return MISSING_TRANSLATION;
      }

      return fal;
    }

    return cur;
  }
}

/** non-data class handling current page locale */
export class LocaleHandler {

  /** a */
  private readonly active : LocaleState;

  /** a */
  private readonly manifest : I18nManifest;

  constructor (manifest : I18nManifest, dfault : Locale) {
    this.manifest = manifest;
    this.active = new LocaleState( dfault, dfault );
  }

  /** a */
  public translate_page () : void {
    // const locale : LocaleState = get_locale_from_dom_state();
    const candidates = <HTMLElement[]> Array.from(
      <HTMLCollectionOf<Element>> dom.getElementsByClassName(CLASS_TRANSLATABLE) );

    for (const c of candidates) {
      const id = c.getAttribute(SPECIAL_DATA_ID);
      if (id !== null) {
        c.innerText = this.active.get_id('page', id);
      }
    }
    // populate all class=translatable nodes given their data-i18n-id value
  }

  /** a */
  public populate_locale_selection () : void {
    console.log(`available: ${this.manifest.available.toString()}`);

    const i18n_selection = dom.getElementById(ID_I18N_SELECTION);

    for (const { '0': id, '1': human_str } of this.manifest.available) {

      const option = dom.createElement('option')
          .setAttribute('id', 'locale-' + id)
          .setAttribute('name', id);
      // want to display the human-readable name of the locale here but that
      //  requires loading every locale just to get one field
      //  maybe there's a better approach to the data, for now just the ID will appear
      option.appendChild( window.document.createTextNode( human_str ) );

      i18n_selection.insertAdjacentElement( 'beforeend', option );
    }
  }
}

/** a */
function map_from_object <A, B> (obj : { }) : Map<A, B> {

  return new Map<A, B>();
}

/** a */
async function _load_i18n_document (id : string) : Promise<string> {

  return fetch( DOCUMENT_PATH_TEMPLATE.replace(FORMAT_REPLACE, id) )
    .then( (response : Response) : Promise<string> => response.text() );
}

/** a  */
export async function load_i18n_manifest () : Promise<I18nManifest> {
  return _load_i18n_document(ROOT_DOCUMENT)
    .then( async (json : string) : Promise<I18nManifest> => {
      const obj = <IntermediateI18nManifest> JSON.parse(json);

      return new Promise<I18nManifest>(
        () => ({
          available: map_from_object<string, string>(obj.available),

          default: obj.default,
        }),
      );
    });
}

/** a */
export async function load_locale_document (id : string) : Promise<Locale> {
  return _load_i18n_document(id)
    .then( async (json : string) : Promise<Locale> => {
      const obj = <IntermediateLocale> JSON.parse(json);

      return new Promise<Locale>(
        () => ({
          complete: obj.complete,
          id: obj.id,
          input_words: map_from_object<string, string>(obj.input_words),
          name: obj.name,
          output: map_from_object<string, string>(obj.output),
          page: map_from_object<string, string>(obj.page),
        }),
      );
    });
}
