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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
});
/*class ChainableElement extends Element {
  public setAttribute (name : string, value : { }) : ChainableElement {
    this.setAttribute(name, value);

    return this;
  }
}

class ChainableHTMLElement extends HTMLElement {
  public setAttribute (name : string, value : { }) : ChainableHTMLElement {
    this.setAttribute(name, value);

    return this;
  }
}
*/
define("lib/tsext", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /** Object.entries polyfill */
    function object_entries(obj) {
        var ownProps = Object.keys(obj);
        var i = ownProps.length;
        var resArray = new Array(i); // preallocate the Array
        while (i !== 0) {
            // tslint:disable-next-line
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
            i -= 1;
        }
        return resArray;
    }
    exports.object_entries = object_entries;
    /** a */
    function _native_map_from_object(obj) {
        return new Map(
        // tslint:disable-next-line
        Object['entries'](obj));
    }
    /** a */
    function _impl_map_from_object(obj) {
        return new Map(object_entries(obj));
    }
    /** {} -> Map<> */
    exports.map_from_object = (Object.hasOwnProperty('entries')
        ? _native_map_from_object
        : _impl_map_from_object);
});
define("i18n", ["require", "exports", "lib/dom", "lib/tsext"], function (require, exports, dom, tsext) {
    "use strict";
    exports.__esModule = true;
    dom = __importStar(dom);
    tsext = __importStar(tsext);
    // import dom = require('./lib/dom');
    /** a */
    var DOCUMENT_PATH_TEMPLATE = 'data/i18n/%s.json';
    /** a */
    exports.ROOT_DOCUMENT = 'i18n';
    /** a */
    var CLASS_TRANSLATABLE = 'i18n-able';
    /** a */
    var SPECIAL_DATA_ID = 'data-i18n-id';
    /** a */
    var ID_I18N_SELECTION = 'i18n-selection';
    /** a */
    var MISSING_TRANSLATION = '(missing translation)';
    /** a */
    var FORMAT_REPLACE = '%s';
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
        /** what if we could write this as an unbound function without a state modification? */
        LocaleHandler.prototype.translate_page = function () {
            return __awaiter(this, void 0, void 0, function () {
                var new_locale, _a, _b, candidates, max_split, candidates_1, candidates_1_1, c, data_attr, parts;
                var e_1, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            new_locale = dom.getElementById(ID_I18N_SELECTION)
                                .selectedOptions[0].getAttribute('name');
                            if ((null === new_locale)
                                || (undefined === this.manifest.available.get(new_locale))) {
                                return [2 /*return*/];
                            }
                            _a = this;
                            _b = LocaleState.bind;
                            return [4 /*yield*/, load_locale_document(new_locale)];
                        case 1:
                            _a.active = new (_b.apply(LocaleState, [void 0, _e.sent(),
                                this.active.fallback]))();
                            console.log('translating page to', this.active);
                            candidates = Array.from(dom.getElementsByClassName(CLASS_TRANSLATABLE));
                            max_split = 2;
                            try {
                                for (candidates_1 = __values(candidates), candidates_1_1 = candidates_1.next(); !candidates_1_1.done; candidates_1_1 = candidates_1.next()) {
                                    c = candidates_1_1.value;
                                    data_attr = c.getAttribute(SPECIAL_DATA_ID);
                                    if (data_attr !== null) {
                                        parts = data_attr.split(':', max_split);
                                        // console.log('translating element: ', parts, c);
                                        c.innerText = (_d = this.active).get_id.apply(_d, __spread(parts));
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (candidates_1_1 && !candidates_1_1.done && (_c = candidates_1["return"])) _c.call(candidates_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /** a */
        LocaleHandler.prototype.populate_locale_selection = function () {
            return __awaiter(this, void 0, void 0, function () {
                var i18n_selection, _a, _b, _c, id, human_str, option;
                var e_2, _d;
                return __generator(this, function (_e) {
                    i18n_selection = dom.getElementById(ID_I18N_SELECTION);
                    try {
                        for (_a = __values(this.manifest.available), _b = _a.next(); !_b.done; _b = _a.next()) {
                            _c = _b.value, id = _c["0"], human_str = _c["1"];
                            option = dom.createElement('option');
                            option.setAttribute('id', 'locale-' + id);
                            option.setAttribute('name', id);
                            option.appendChild(window.document.createTextNode(human_str));
                            i18n_selection.insertAdjacentElement('beforeend', option);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return [2 /*return*/];
                });
            });
        };
        return LocaleHandler;
    }());
    exports.LocaleHandler = LocaleHandler;
    /** a */
    function _make_gtt(igtt) {
        return ({
            noun: tsext.map_from_object(igtt.noun),
            dialogue: tsext.map_from_object(igtt.dialogue),
            description: tsext.map_from_object(igtt.description),
        });
    }
    /** a */
    function _load_i18n_document(id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DOCUMENT_PATH_TEMPLATE.replace(FORMAT_REPLACE, id))
                        .then(function (response) { return response.text(); })];
            });
        });
    }
    /** a  */
    function load_i18n_manifest() {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, _load_i18n_document(exports.ROOT_DOCUMENT)
                        .then(function (json) { return __awaiter(_this, void 0, void 0, function () {
                        var obj;
                        return __generator(this, function (_a) {
                            obj = JSON.parse(json);
                            // console.log('intermediate manifest: ', obj);
                            return [2 /*return*/, ({
                                    available: tsext.map_from_object(obj.available),
                                    "default": obj["default"],
                                })];
                        });
                    }); })];
            });
        });
    }
    exports.load_i18n_manifest = load_i18n_manifest;
    /** a */
    function load_locale_document(id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, _load_i18n_document(id)
                        .then(function (json) { return __awaiter(_this, void 0, void 0, function () {
                        var obj;
                        return __generator(this, function (_a) {
                            obj = JSON.parse(json);
                            // console.log('intermediate locale: ', obj);
                            return [2 /*return*/, ({
                                    complete: obj.complete,
                                    id: obj.id,
                                    input_words: tsext.map_from_object(obj.input_words),
                                    name: obj.name,
                                    output: _make_gtt(obj.output),
                                    page: tsext.map_from_object(obj.page),
                                })];
                        });
                    }); })];
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
    /** change which line the scroll-to anchor is a link */
    function change_scroll_to_anchor() {
        var scroll_input = dom.getElementById('scroll-input');
        var scrollpos = Math.abs(Number(scroll_input.value) - 1);
        dom.getElementById('scroll-to')
            .setAttribute('href', "#result-line" + scrollpos);
    }
    /** debug */
    function see_keyboardevent(k) {
        window.console.log(new Date()
            .getMilliseconds()
            .toString() + " key: " + k.key + " mod: " + k.getModifierState(k.key));
    }
    /** create event listeners for page elements */
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
    /** entry point */
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var manifest, dfault, locale_handler, listen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('started!');
                        return [4 /*yield*/, i18n.load_i18n_manifest()];
                    case 1:
                        manifest = _a.sent();
                        return [4 /*yield*/, i18n.load_locale_document(manifest["default"])];
                    case 2:
                        dfault = _a.sent(), locale_handler = new i18n.LocaleHandler(manifest, dfault), listen = make_listeners(locale_handler);
                        console.log(manifest);
                        return [4 /*yield*/, locale_handler.populate_locale_selection()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, locale_handler.translate_page()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, listen];
                    case 5:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvZG9tLnRzIiwiLi4vc3JjL2xpYi90c2V4dC50cyIsIi4uL3NyYy9pMThuLnRzIiwiLi4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxRQUFRO0lBQ1IsU0FBZ0IsY0FBYyxDQUFFLEVBQVc7UUFDekMsT0FBTyxDQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztlQUM3QixDQUFFLENBQUM7Z0JBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBbUMsRUFBSSxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxDQUNULENBQUM7SUFDSixDQUFDO0lBUEQsd0NBT0M7SUFFRCxRQUFRO0lBQ1IsU0FBZ0Isc0JBQXNCLENBQUUsSUFBYTtRQUNuRCxPQUFPLENBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7ZUFDdkMsQ0FBRSxDQUFDO2dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQThELElBQU0sQ0FBQyxDQUFDO1lBQ3hGLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQVBELHdEQU9DO0lBRUQsUUFBUTtJQUNSLFNBQWdCLGFBQWEsQ0FBRSxJQUFhO1FBQzFDLE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7ZUFDOUIsQ0FBRTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQUMsQ0FBQyxDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBTkQsc0NBTUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztFQWVFOzs7O0lDNUNG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