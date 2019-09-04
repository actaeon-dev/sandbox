/** a */
const i10n_document_template = 'data/i10n/%s.json';
/** a */
const i10n_root_document = 'i10n';

/**
 * Blah
 */
interface I10nManifest {
  /** a */
  available : string[];
}

/** a  */

export async function get_available_translations () : Promise<string[]> {
  return fetch(i10n_document_template.replace('%s', i10n_root_document))
    .then( (response : Response) => response.json() )
    .then( (json : string) : string[] => ( <I10nManifest> JSON.parse(json)).available);
}

/**
 * Blah
 */
export function translate_page () : void {
  // populate all class=translatable nodes given their data-i10n-id value
}

/**
 * Blah
 */
export function populate_translation_selection () : void {
  // const sel: HTMLSelectElement =
  //  <HTMLSelectElement> getElementById('i10n-selection');
  // for each locale listed in data/i10n/i10n.json, then add it as an
  //  <option> to the selector
}
