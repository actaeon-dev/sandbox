var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define("lib/dom", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /** a */
    function getElementById(id) {
        return (window.document.getElementById(id)
            || ((function () {
                throw new Error("getElementById: no such element " + id);
            })()));
    }
    exports.getElementById = getElementById;
    /** a */
    function getElementsByClassName(name) {
        return (window.document.getElementsByClassName(name)
            || ((function () {
                throw new Error("getElementsByClassName: ??? error happened when processing " + name);
            })()));
    }
    exports.getElementsByClassName = getElementsByClassName;
    /** a */
    function createElement(name) {
        return (window.document.createElement(name) || (function () {
            throw new Error('can\'t create new element: ' + name);
        }));
    }
    exports.createElement = createElement;
});
define("i18n", ["require", "exports", "lib/dom"], function (require, exports, dom) {
    "use strict";
    exports.__esModule = true;
    dom = __importStar(dom);
    // import dom = require('./lib/dom');
    /** a */
    var DOCUMENT_PATH_TEMPLATE = 'data/i18n/%s.json';
    /** a */
    var ROOT_DOCUMENT = 'i18n';
    /** a */
    var CLASS_TRANSLATABLE = 'translatable';
    /** a */
    var SPECIAL_DATA_ID = 'data-i18n-id';
    /** describes the current page locale status */
    var LocaleState = /** @class */ (function () {
        function LocaleState(current, fallback) {
            this.current = current;
            this.fallback = fallback;
        }
        /** get the page or input_words translation by id, not for output */
        LocaleState.prototype.get_id = function (field, id) {
            var cur = this.current[field].get(id);
            if (cur === undefined) {
                var fal = this.fallback[field].get(id);
                if (fal === undefined) {
                    console.error("ERROR: no translation found anywhere for field: " + field + " id: " + id);
                    return '(missing translation)';
                }
                return fal;
            }
            return cur;
        };
        return LocaleState;
    }());
    /** a */
    /** a  */
    function get_available_locales() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DOCUMENT_PATH_TEMPLATE.replace('%s', ROOT_DOCUMENT))
                        .then(function (response) { return response.json()
                        .then(function (x) { return x; }); })
                        .then(function (manifest) { return manifest.available; })];
            });
        });
    }
    exports.get_available_locales = get_available_locales;
    /**
     * Blah
     */
    function translate_page(locale) {
        var candidates = Array.from(dom.getElementsByClassName(CLASS_TRANSLATABLE));
        for (var _i = 0, candidates_1 = candidates; _i < candidates_1.length; _i++) {
            var c = candidates_1[_i];
            var id = c.getAttribute(SPECIAL_DATA_ID);
            if (id !== null) {
                c.innerText = locale.get_id('page', id);
            }
        }
        // populate all class=translatable nodes given their data-i18n-id value
    }
    exports.translate_page = translate_page;
    /**
     * Blah
     */
    function populate_locale_selection() {
        return __awaiter(this, void 0, void 0, function () {
            var available, i18n_selection, _i, available_1, locale, option;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_available_locales()];
                    case 1:
                        available = _a.sent();
                        // .then((x : string[]) : string[] => x )
                        // .catch((err : TypeError) : never => { throw err; } ) );
                        console.log("available: " + available.toString());
                        i18n_selection = dom.getElementById('i18n-selection');
                        for (_i = 0, available_1 = available; _i < available_1.length; _i++) {
                            locale = available_1[_i];
                            option = dom.createElement('option');
                            option.setAttribute('id', 'locale-' + locale);
                            option.setAttribute('name', locale);
                            // want to display the human-readable name of the locale here but that
                            //  requires loading every locale just to get one field
                            //  maybe there's a better approach to the data, for now just the ID will appear
                            option.appendChild(window.document.createTextNode(locale));
                            i18n_selection.insertAdjacentElement('beforeend', option);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.populate_locale_selection = populate_locale_selection;
});
define("main", ["require", "exports", "i18n", "lib/dom"], function (require, exports, i18n, dom) {
    "use strict";
    exports.__esModule = true;
    i18n = __importStar(i18n);
    dom = __importStar(dom);
    // import dom = require('./lib/dom');
    /** a */
    function change_scroll_to_anchor() {
        var scroll_input = dom.getElementById('scroll-input');
        var scrollpos = Math.abs(Number(scroll_input.value) - 1);
        dom.getElementById('scroll-to')
            .setAttribute('href', "#result-line" + scrollpos);
    }
    /** a */
    function see_keyboardevent(k) {
        window.console.log("key: " + k.key + " mod: " + k.getModifierState(k.key));
    }
    /** a */
    function make_listeners() {
        return __awaiter(this, void 0, void 0, function () {
            var input_listeners, primary, _i, input_listeners_1, l;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input_listeners = [
                            ['keydown', see_keyboardevent],
                            ['keypress', see_keyboardevent],
                            ['keyup', see_keyboardevent],
                        ];
                        primary = dom.getElementById('primary');
                        for (_i = 0, input_listeners_1 = input_listeners; _i < input_listeners_1.length; _i++) {
                            l = input_listeners_1[_i];
                            primary.addEventListener(l[0], l[1]);
                        }
                        dom.getElementById('scroll-input')
                            .addEventListener('change', change_scroll_to_anchor);
                        dom.getElementById('i18n-selection')
                            .addEventListener('change', i18n.translate_page);
                        // window.console.log('finished make_listeners');
                        return [4 /*yield*/, new Promise(function () { })];
                    case 1:
                        // window.console.log('finished make_listeners');
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    /** a */
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var l, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        l = make_listeners();
                        p = i18n.populate_translation_selection();
                        return [4 /*yield*/, l];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, p];
                    case 2:
                        _a.sent();
                        console.log('done!');
                        return [2 /*return*/];
                }
            });
        });
    }
    main()
        .then()["catch"](function (err) { throw err; });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvZG9tLnRzIiwiLi4vc3JjL2kxOG4udHMiLCIuLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsUUFBUTtJQUNSLFNBQWdCLGNBQWMsQ0FBRSxFQUFXO1FBQ3pDLE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7ZUFDN0IsQ0FBRSxDQUFDO2dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLEVBQUksQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQVBELHdDQU9DO0lBRUQsUUFBUTtJQUNSLFNBQWdCLHNCQUFzQixDQUFFLElBQWE7UUFDbkQsT0FBTyxDQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO2VBQ3ZDLENBQUUsQ0FBQztnQkFDSixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUE4RCxJQUFNLENBQUMsQ0FBQztZQUN4RixDQUFDLENBQUMsRUFBRSxDQUFFLENBQ1QsQ0FBQztJQUNKLENBQUM7SUFQRCx3REFPQztJQUVELFFBQVE7SUFDUixTQUFnQixhQUFhLENBQUUsSUFBYTtRQUMxQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtZQUMvQyxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxDQUFDO0lBSEQsc0NBR0M7Ozs7OztJQ3ZCRCxxQ0FBcUM7SUFFckMsUUFBUTtJQUNSLElBQU0sc0JBQXNCLEdBQUcsbUJBQW1CLENBQUM7SUFDbkQsUUFBUTtJQUNSLElBQU0sYUFB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