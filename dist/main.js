var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
        return (window.document.createElement(name)
            || (function () {
                throw new Error('can\'t create new element: ' + name);
            }));
    }
    exports.createElement = createElement;
    /** a */
    var ChainableElement = /** @class */ (function (_super) {
        __extends(ChainableElement, _super);
        function ChainableElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /** a */
        ChainableElement.prototype.setAttribute = function (name, value) {
            this.setAttribute(name, value);
            return this;
        };
        return ChainableElement;
    }(Element));
    /** a */
    var ChainableHTMLElement = /** @class */ (function (_super) {
        __extends(ChainableHTMLElement, _super);
        function ChainableHTMLElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /** a */
        ChainableHTMLElement.prototype.setAttribute = function (name, value) {
            this.setAttribute(name, value);
            return this;
        };
        return ChainableHTMLElement;
    }(HTMLElement));
});
define("i18n", ["require", "exports", "lib/dom"], function (require, exports, dom) {
    "use strict";
    exports.__esModule = true;
    dom = __importStar(dom);
    // import dom = require('./lib/dom');
    /** a */
    var DOCUMENT_PATH_TEMPLATE = 'data/i18n/%s.json';
    /** a */
    exports.ROOT_DOCUMENT = 'i18n';
    /** a */
    var CLASS_TRANSLATABLE = 'translatable';
    /** a */
    var SPECIAL_DATA_ID = 'data-i18n-id';
    /** a */
    var ID_I18N_SELECTION = 'i18n-selection';
    /** a */
    var MISSING_TRANSLATION = '(missing translation)';
    /** a */
    var FORMAT_REPLACE = '%s';
    // type LocaleID = string;
    /** data class describing the current page locale status */
    /* data */
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
                    return MISSING_TRANSLATION;
                }
                return fal;
            }
            return cur;
        };
        return LocaleState;
    }());
    /** non-data class handling current page locale */
    var LocaleHandler = /** @class */ (function () {
        function LocaleHandler(manifest, dfault) {
            this.manifest = manifest;
            this.active = new LocaleState(dfault, dfault);
        }
        /** a */
        LocaleHandler.prototype.translate_page = function () {
            var e_1, _a;
            // const locale : LocaleState = get_locale_from_dom_state();
            var candidates = Array.from(dom.getElementsByClassName(CLASS_TRANSLATABLE));
            try {
                for (var candidates_1 = __values(candidates), candidates_1_1 = candidates_1.next(); !candidates_1_1.done; candidates_1_1 = candidates_1.next()) {
                    var c = candidates_1_1.value;
                    var id = c.getAttribute(SPECIAL_DATA_ID);
                    if (id !== null) {
                        c.innerText = this.active.get_id('page', id);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (candidates_1_1 && !candidates_1_1.done && (_a = candidates_1["return"])) _a.call(candidates_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // populate all class=translatable nodes given their data-i18n-id value
        };
        /** a */
        LocaleHandler.prototype.populate_locale_selection = function () {
            var e_2, _a;
            console.log("available: " + this.manifest.available.toString());
            var i18n_selection = dom.getElementById(ID_I18N_SELECTION);
            try {
                for (var _b = __values(this.manifest.available), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = _c.value, id = _d["0"], human_str = _d["1"];
                    var option = dom.createElement('option')
                        .setAttribute('id', 'locale-' + id)
                        .setAttribute('name', id);
                    // want to display the human-readable name of the locale here but that
                    //  requires loading every locale just to get one field
                    //  maybe there's a better approach to the data, for now just the ID will appear
                    option.appendChild(window.document.createTextNode(human_str));
                    i18n_selection.insertAdjacentElement('beforeend', option);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        return LocaleHandler;
    }());
    exports.LocaleHandler = LocaleHandler;
    /** a */
    function _load_i18n_document(id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DOCUMENT_PATH_TEMPLATE.replace(FORMAT_REPLACE, id))
                        .then(function (response) { return response.json(); })
                        .then(function (x) { return x; })];
            });
        });
    }
    /** a  */
    function load_i18n_manifest() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _load_i18n_document(exports.ROOT_DOCUMENT)];
            });
        });
    }
    exports.load_i18n_manifest = load_i18n_manifest;
    /** a */
    function load_locale_document(id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _load_i18n_document(id)];
            });
        });
    }
    exports.load_locale_document = load_locale_document;
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
        window.console.log(new Date()
            .getMilliseconds()
            .toString() + " key: " + k.key + " mod: " + k.getModifierState(k.key));
    }
    /** a */
    function make_listeners(lh) {
        return __awaiter(this, void 0, void 0, function () {
            var input_listeners, primary, input_listeners_1, input_listeners_1_1, l;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        input_listeners = [
                            ['keydown', see_keyboardevent],
                            ['keypress', see_keyboardevent],
                            ['keyup', see_keyboardevent],
                        ];
                        primary = dom.getElementById('primary');
                        try {
                            for (input_listeners_1 = __values(input_listeners), input_listeners_1_1 = input_listeners_1.next(); !input_listeners_1_1.done; input_listeners_1_1 = input_listeners_1.next()) {
                                l = input_listeners_1_1.value;
                                primary.addEventListener(l[0], l[1]);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (input_listeners_1_1 && !input_listeners_1_1.done && (_a = input_listeners_1["return"])) _a.call(input_listeners_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        dom.getElementById('scroll-input')
                            .addEventListener('change', change_scroll_to_anchor);
                        dom.getElementById('i18n-selection')
                            // why is .bind necessary? it's already called on lh, a LocaleHandler() instance
                            //   NOT the LocaleHandler typename
                            .addEventListener('change', lh.translate_page.bind(lh));
                        // window.console.log('finished make_listeners');
                        return [4 /*yield*/, new Promise(function () { })];
                    case 1:
                        // window.console.log('finished make_listeners');
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    /** a */
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var manifest, dfault, locale_handler, listen, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, i18n.load_i18n_manifest()];
                    case 1:
                        manifest = _d.sent(), dfault = i18n.load_locale_document(manifest["default"]);
                        _b = (_a = i18n.LocaleHandler).bind;
                        _c = [void 0, manifest];
                        return [4 /*yield*/, dfault];
                    case 2:
                        locale_handler = new (_b.apply(_a, _c.concat([_d.sent()])))(), listen = make_listeners(locale_handler);
                        console.log(manifest.available);
                        console.log(manifest["default"]);
                        locale_handler.populate_locale_selection();
                        return [4 /*yield*/, listen];
                    case 3:
                        _d.sent();
                        console.log('done!');
                        return [2 /*return*/];
                }
            });
        });
    }
    main()
        .then()["catch"](function (err) { throw err; });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvZG9tLnRzIiwiLi4vc3JjL2kxOG4udHMiLCIuLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsUUFBUTtJQUNSLFNBQWdCLGNBQWMsQ0FBRSxFQUFXO1FBQ3pDLE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7ZUFDN0IsQ0FBRSxDQUFDO2dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLEVBQUksQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQVBELHdDQU9DO0lBRUQsUUFBUTtJQUNSLFNBQ0Esc0JBQXNCLENBQUUsSUFBYTtRQUNuQyxPQUE0QyxDQUMxQyxNQUFNLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQztlQUN2QyxDQUFFLENBQUM7Z0JBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxnRUFBOEQsSUFBTSxDQUFDLENBQUM7WUFDeEYsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxDQUNULENBQUM7SUFDSixDQUFDO0lBUkQsd0RBUUM7SUFFRCxRQUFRO0lBQ1IsU0FBZ0IsYUFBYSxDQUFFLElBQWE7UUFDMUMsT0FBOEIsQ0FDNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2VBQzlCLENBQUU7Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQyxDQUM5RCxDQUFDO0lBQ0osQ0FBQztJQU5ELHNDQU1DO0lBRUQsUUFBUTtJQUNSO1FBQStCLG9DQUFPO1FBQXRDOztRQU9BLENBQUM7UUFOQyxRQUFRO1FBQ0Qs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