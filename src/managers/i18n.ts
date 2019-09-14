import * as construct from '../lib/dom/construct';
import * as dom       from '../lib/dom/interact';
import * as tsext     from '../lib/tsext';
// import dom = require('./lib/dom');

/** a */
const DOCUMENT_PATH_TEMPLATE = 'data/i18n/%s.json';
/** a */
const DOCUMENT_LOCALE_PATH = 'locale/';
/** a */
export const ROOT_DOCUMENT = 'i18n';
/** a */
const CLASS_TRANSLATABLE = 'i18n-able';
/** a */
const SPECIAL_DATA_ID = 'data-i18n-id';
/** a */
// const ID_I18N_SELECTION = 'i18n-selection';
/** a */
const MISSING_TRANSLATION = '(missing translation)';
/** a */
const FORMAT_REPLACE = '%s';

/** a */
type TranslateFieldName = 'page';

/** manifest structure directly from JSON, before unmangling object -> Map etc */
/* private */
interface IntermediateI18nManifest {
  /** The default locale, for initialisation and fallback purposes. */
  readonly default   : string;
  /** stub for the map of available locale ids to their names */
  readonly available : tsext.DictOfString;
}

/**
 * Locale-describer
 */
export interface I18nManifest {
  /** The default locale, for initialisation and fallback purposes. */
  readonly default   : string;
  /** Available locale ids to names, not the total list of files in data/i18n */
  // could become a map2d later to allow searching
  readonly available : Map<string, string>;
}

/** a */
/* private */
interface IntermediateGameTranslationTarget {
  /** simple object names */
  readonly noun : tsext.DictOfString;
  /** speech, including narration */
  readonly dialogue : tsext.DictOfString;
  /** descriptions of items, places, emotions, etc */
  readonly description : tsext.DictOfString;
}
/** all properties map UIDs to their natural language content */
interface GameTranslationTarget /* extends IntermediateGameTranslationTarget */ {
  /** simple object names */
  readonly noun : tsext.Map2DOfString;
  /** speech, including narration */
  readonly dialogue : tsext.Map2DOfString;
  /** descriptions of items, places, emotions, etc */
  readonly description : tsext.Map2DOfString;
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
  /** stub */
  readonly page : tsext.DictOfString;
  /** stub */
  readonly input_words : tsext.DictOfString;
  /** stub */
  readonly output : IntermediateGameTranslationTarget;
}
/** A translation target. */
interface Locale /* extends IntermediateLocale */ {
  /** human readable name */
  readonly name : string;
  /** ISO 639 */
  readonly id : string;
  /** whether the translation is "total" */
  readonly complete : boolean;
  /** map from HTML data-* ids to what text should be inside them */
  readonly page : tsext.Map2DOfString;
  /** user-input commands */
  readonly input_words : tsext.Map2DOfString;
  /** actual game content */
  readonly output : GameTranslationTarget;
}

/** any document in data/i18n other than the schema */
export type I18nDocument = I18nManifest | Locale;

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
  public get_id (field : TranslateFieldName, id : string) : string {

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

  /** mutable current and fallback locales for the page and game to use */
  private /* readonly */ active : LocaleState;

  /** root document, only loaded once */
  private readonly manifest : I18nManifest;

  /** history of loaded locales, to prevent replays */
  private readonly cache : Map<string, Locale>;

  constructor (manifest : I18nManifest, dfault : Locale) {
    if (undefined === manifest.available.get(dfault.id)) {
      throw new Error("can't use an unknown locale: " + dfault.id);
    }

    this.manifest = manifest;
    this.active = new LocaleState( dfault, dfault );

    this.cache = new Map<string, Locale>().set(dfault.id, dfault);
  }

  /**
   * what if we could write this as an unbound function without a state modification?
   * populate all class=translatable nodes given their data-i18n-id value
   */
  public async translate_page (new_locale_id : string) : Promise<void> {
    if (
      //(null === new_locale_id)
      undefined === this.manifest.available.get(new_locale_id)
    ) { return; }

    console.log('translating page to', this.active);
    // const locale : LocaleState = get_locale_from_dom_state();
    const candidates = <HTMLElement[]> Array.from(
      dom.getElementsByClassName(CLASS_TRANSLATABLE) );

    const max_split = 2;

    await this._do_cache(new_locale_id);

    for (const c of candidates) {

      const data_attr = c.getAttribute(SPECIAL_DATA_ID);

      if (data_attr !== null) {
        const parts = (<[TranslateFieldName, TranslateFieldName]>
          data_attr.split(':', max_split)
        );

        // console.log('translating element: ', parts, c);
        c.innerText = this.active.get_id(...parts);
      }
    }
  }

  /** a */
  public async populate_locale_selection () : Promise<void> {
    // console.log('available:', this.manifest.available);

    const i18n_selection = dom.getElementById(ID_I18N_SELECTION);

    for (const [id, human_str] of this.manifest.available) {

      const option = construct.element('option', {
        id: 'locale-' + id,
        name: id,
      });

      option.appendChild( window.document.createTextNode( human_str ) );

      i18n_selection.insertAdjacentElement( 'beforeend', option );
    }

    return;
  }

  /** a */
  private async _do_cache (new_locale_id : string) : Promise<void> {
    const cache_val = this.cache.get(new_locale_id);
    if (new_locale_id === this.active.current.id) {
      // nothing needs to happen
    } else if (undefined !== cache_val) {
      this.active = new LocaleState(cache_val, this.active.fallback);
    } else {
      this.active = new LocaleState(
        await load_locale_document(new_locale_id),
        this.active.fallback,
      );
    }
  }
}

/** a */
function _make_gtt (igtt : IntermediateGameTranslationTarget) : GameTranslationTarget {

  return ({
    noun: tsext.map_from_object<tsext.DictOfString, string>(igtt.noun),
    dialogue: tsext.map_from_object<tsext.DictOfString, string>(igtt.dialogue),
    description: tsext.map_from_object<tsext.DictOfString, string>(igtt.description),
  });
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
      // console.log('intermediate manifest: ', obj);

      return ({
        available: tsext.map_from_object<tsext.DictOfString, string>(
          obj.available),

        default: obj.default,
      });
    });
}

/** a */
export async function load_locale_document (id : string) : Promise<Locale> {
  return _load_i18n_document(DOCUMENT_LOCALE_PATH + id)
    .then( async (json : string) : Promise<Locale> => {
      const obj = <IntermediateLocale> JSON.parse(json);
      // console.log('intermediate locale: ', obj);

      return ({
        complete: obj.complete,
        id: obj.id,
        input_words: tsext.map_from_object<
          tsext.DictOfString, string>(obj.input_words),
        name: obj.name,
        output: _make_gtt(obj.output),
        page: tsext.map_from_object<tsext.DictOfString, string>(obj.page),
      });
    });
}
