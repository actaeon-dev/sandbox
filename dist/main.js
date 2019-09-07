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
define("game-manager", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /** a */
    var GameState = /** @class */ (function () {
        function GameState() {
            this.last_kb_evt = new KeyboardEvent('a');
        }
        /** a */
        GameState.prototype.handle_keyboard = function (kbe) {
            console.log('previous last evt: ', this.last_kb_evt);
            this.last_kb_evt = kbe;
        };
        return GameState;
    }());
    exports.GameState = GameState;
});
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
            resArray[i] = [ownProps[i], Reflect.get(obj, ownProps[i])];
            i -= 1;
        }
        return resArray;
    }
    exports.object_entries = object_entries;
    /** a */
    function _native_map_from_object(obj) {
        return new Map(Reflect.get(Object, 'entries')(obj));
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
            if (undefined === manifest.available.get(dfault.id)) {
                throw new Error("can't use an unknown locale: " + dfault.id);
            }
            this.manifest = manifest;
            this.active = new LocaleState(dfault, dfault);
            this.cache = new Map().set(dfault.id, dfault);
        }
        /** what if we could write this as an unbound function without a state modification? */
        LocaleHandler.prototype.translate_page = function () {
            return __awaiter(this, void 0, void 0, function () {
                var new_locale_id, candidates, max_split, candidates_1, candidates_1_1, c, data_attr, parts;
                var e_1, _a, _b;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            new_locale_id = dom.getElementById(ID_I18N_SELECTION)
                                .selectedOptions[0].getAttribute('name');
                            if ((null === new_locale_id)
                                || (undefined === this.manifest.available.get(new_locale_id))) {
                                return [2 /*return*/];
                            }
                            // avoid scope pollution
                            return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                    var cache_val, _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                cache_val = this.cache.get(new_locale_id);
                                                if (!(new_locale_id === this.active.current.id)) return [3 /*break*/, 1];
                                                return [3 /*break*/, 4];
                                            case 1:
                                                if (!(undefined !== cache_val)) return [3 /*break*/, 2];
                                                this.active = new LocaleState(cache_val, this.active.fallback);
                                                return [3 /*break*/, 4];
                                            case 2:
                                                _a = this;
                                                _b = LocaleState.bind;
                                                return [4 /*yield*/, load_locale_document(new_locale_id)];
                                            case 3:
                                                _a.active = new (_b.apply(LocaleState, [void 0, _c.sent(),
                                                    this.active.fallback]))();
                                                _c.label = 4;
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); })()];
                        case 1:
                            // avoid scope pollution
                            _c.sent();
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
                                        c.innerText = (_b = this.active).get_id.apply(_b, __spread(parts));
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
            description: tsext.map_from_object(igtt.description)
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
                                    "default": obj["default"]
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
                                    page: tsext.map_from_object(obj.page)
                                })];
                        });
                    }); })];
            });
        });
    }
    exports.load_locale_document = load_locale_document;
});
define("main", ["require", "exports", "game-manager", "i18n", "lib/dom"], function (require, exports, game_manager, i18n, dom) {
    "use strict";
    exports.__esModule = true;
    game_manager = __importStar(game_manager);
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
    /* debug
    function see_keyboardevent (k : KeyboardEvent) : void {
      window.console.log(
        `${new Date()
            .getMilliseconds()
            .toString()} key: ${k.key} mod: ${k.getModifierState( k.key )}`);
    }
    */
    /** create event listeners for page elements */
    function make_listeners(lh, gm) {
        return __awaiter(this, void 0, void 0, function () {
            var input_listeners, primary, input_listeners_1, input_listeners_1_1, l;
            var e_3, _a;
            return __generator(this, function (_b) {
                input_listeners = ['keydown', 'keypress', 'keyup'];
                primary = dom.getElementById('primary');
                try {
                    for (input_listeners_1 = __values(input_listeners), input_listeners_1_1 = input_listeners_1.next(); !input_listeners_1_1.done; input_listeners_1_1 = input_listeners_1.next()) {
                        l = input_listeners_1_1.value;
                        primary.addEventListener(l, gm.handle_keyboard.bind(gm));
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
                return [2 /*return*/];
            });
        });
    }
    /** entry point */
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var manifest, dfault, locale_handler, gman, listen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('started!');
                        return [4 /*yield*/, i18n.load_i18n_manifest()];
                    case 1:
                        manifest = _a.sent();
                        return [4 /*yield*/, i18n.load_locale_document(manifest["default"])];
                    case 2:
                        dfault = _a.sent(), locale_handler = new i18n.LocaleHandler(manifest, dfault), gman = new game_manager.GameState(), listen = make_listeners(locale_handler, gman);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9nYW1lLW1hbmFnZXIudHMiLCIuLi9zcmMvbGliL2RvbS50cyIsIi4uL3NyYy9saWIvdHNleHQudHMiLCIuLi9zcmMvaTE4bi50cyIsIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsUUFBUTtJQUNSO1FBS0U7WUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRCxRQUFRO1FBQ0QsbUNBQWUsR0FBdEIsVUFBd0IsR0FBbUI7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDekIsQ0FBQztRQUNILGdCQUFDO0lBQUQsQ0FBQyxBQWRELElBY0M7SUFkWSw4QkFBUzs7Ozs7SUNEdEIsUUFBUTtJQUNSLFNBQWdCLGNBQWMsQ0FBRSxFQUFXO1FBQ3pDLE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7ZUFDN0IsQ0FBRSxDQUFDO2dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLEVBQUksQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQVBELHdDQU9DO0lBRUQsUUFBUTtJQUNSLFNBQWdCLHNCQUFzQixDQUFFLElBQWE7UUFDbkQsT0FBTyxDQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO2VBQ3ZDLENBQUUsQ0FBQztnQkFDSixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUE4RCxJ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