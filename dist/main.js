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
    function getElementById(id) {
        return (window.document.getElementById(id)
            || ((function () {
                throw new Error("getElementById: no such element " + id);
            })()));
    }
    exports.getElementById = getElementById;
    function getElementsByClassName(name) {
        return (window.document.getElementsByClassName(name)
            || ((function () {
                throw new Error("getElementsByClassName: ??? error happened when processing " + name);
            })()));
    }
    exports.getElementsByClassName = getElementsByClassName;
    function createElement(name) {
        return (window.document.createElement(name)
            || (function () {
                throw new Error('can\'t create new element: ' + name);
            }));
    }
    exports.createElement = createElement;
});
define("managers/game", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var GameState = (function () {
        function GameState() {
            this.last_kb_evt = new KeyboardEvent('a');
        }
        GameState.prototype.handle_keyboard = function (kbe) {
            console.log('previous last evt: ', this.last_kb_evt);
            this.last_kb_evt = kbe;
        };
        return GameState;
    }());
    exports.GameState = GameState;
});
define("lib/tsext", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function object_entries(obj) {
        var ownProps = Object.keys(obj);
        var i = ownProps.length;
        var resArray = new Array(i);
        while (i !== 0) {
            resArray[i] = [ownProps[i], Reflect.get(obj, ownProps[i])];
            i -= 1;
        }
        return resArray;
    }
    exports.object_entries = object_entries;
    function _native_map_from_object(obj) {
        return new Map(Reflect.get(Object, 'entries')(obj));
    }
    function _impl_map_from_object(obj) {
        return new Map(object_entries(obj));
    }
    exports.map_from_object = (Object.hasOwnProperty('entries')
        ? _native_map_from_object
        : _impl_map_from_object);
});
define("managers/i18n", ["require", "exports", "lib/dom", "lib/tsext"], function (require, exports, dom, tsext) {
    "use strict";
    exports.__esModule = true;
    dom = __importStar(dom);
    tsext = __importStar(tsext);
    var DOCUMENT_PATH_TEMPLATE = 'data/i18n/%s.json';
    var DOCUMENT_LOCALE_PATH = 'locale/';
    exports.ROOT_DOCUMENT = 'i18n';
    var CLASS_TRANSLATABLE = 'i18n-able';
    var SPECIAL_DATA_ID = 'data-i18n-id';
    var ID_I18N_SELECTION = 'i18n-selection';
    var MISSING_TRANSLATION = '(missing translation)';
    var FORMAT_REPLACE = '%s';
    var LocaleState = (function () {
        function LocaleState(current, fallback) {
            this.current = current;
            this.fallback = fallback;
        }
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
    var LocaleHandler = (function () {
        function LocaleHandler(manifest, dfault) {
            if (undefined === manifest.available.get(dfault.id)) {
                throw new Error("can't use an unknown locale: " + dfault.id);
            }
            this.manifest = manifest;
            this.active = new LocaleState(dfault, dfault);
            this.cache = new Map().set(dfault.id, dfault);
        }
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
                                return [2];
                            }
                            return [4, (function () { return __awaiter(_this, void 0, void 0, function () {
                                    var cache_val, _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                cache_val = this.cache.get(new_locale_id);
                                                if (!(new_locale_id === this.active.current.id)) return [3, 1];
                                                return [3, 4];
                                            case 1:
                                                if (!(undefined !== cache_val)) return [3, 2];
                                                this.active = new LocaleState(cache_val, this.active.fallback);
                                                return [3, 4];
                                            case 2:
                                                _a = this;
                                                _b = LocaleState.bind;
                                                return [4, load_locale_document(new_locale_id)];
                                            case 3:
                                                _a.active = new (_b.apply(LocaleState, [void 0, _c.sent(),
                                                    this.active.fallback]))();
                                                _c.label = 4;
                                            case 4: return [2];
                                        }
                                    });
                                }); })()];
                        case 1:
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
                            return [2];
                    }
                });
            });
        };
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
                    return [2];
                });
            });
        };
        return LocaleHandler;
    }());
    exports.LocaleHandler = LocaleHandler;
    function _make_gtt(igtt) {
        return ({
            noun: tsext.map_from_object(igtt.noun),
            dialogue: tsext.map_from_object(igtt.dialogue),
            description: tsext.map_from_object(igtt.description),
        });
    }
    function _load_i18n_document(id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, fetch(DOCUMENT_PATH_TEMPLATE.replace(FORMAT_REPLACE, id))
                        .then(function (response) { return response.text(); })];
            });
        });
    }
    function load_i18n_manifest() {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, _load_i18n_document(exports.ROOT_DOCUMENT)
                        .then(function (json) { return __awaiter(_this, void 0, void 0, function () {
                        var obj;
                        return __generator(this, function (_a) {
                            obj = JSON.parse(json);
                            return [2, ({
                                    available: tsext.map_from_object(obj.available),
                                    "default": obj["default"],
                                })];
                        });
                    }); })];
            });
        });
    }
    exports.load_i18n_manifest = load_i18n_manifest;
    function load_locale_document(id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, _load_i18n_document(DOCUMENT_LOCALE_PATH + id)
                        .then(function (json) { return __awaiter(_this, void 0, void 0, function () {
                        var obj;
                        return __generator(this, function (_a) {
                            obj = JSON.parse(json);
                            return [2, ({
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
define("managers/prefs", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Preferences = (function () {
        function Preferences() {
        }
        return Preferences;
    }());
    exports.Preferences = Preferences;
});
define("main", ["require", "exports", "lib/dom", "managers/game", "managers/i18n", "managers/prefs"], function (require, exports, dom, game_manager, i18n, prefs) {
    "use strict";
    exports.__esModule = true;
    dom = __importStar(dom);
    game_manager = __importStar(game_manager);
    i18n = __importStar(i18n);
    prefs = __importStar(prefs);
    function change_scroll_to_anchor() {
        var scroll_input = dom.getElementById('scroll-input');
        var scrollpos = Math.abs(Number(scroll_input.value) - 1);
        dom.getElementById('scroll-to')
            .setAttribute('href', "#result-line" + scrollpos);
    }
    function make_listeners(lh, gm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (function () {
                    var e_3, _a;
                    var input_listeners = ['keydown', 'keypress', 'keyup'];
                    var primary = dom.getElementById('primary');
                    try {
                        for (var input_listeners_1 = __values(input_listeners), input_listeners_1_1 = input_listeners_1.next(); !input_listeners_1_1.done; input_listeners_1_1 = input_listeners_1.next()) {
                            var l = input_listeners_1_1.value;
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
                })();
                dom.getElementById('scroll-input')
                    .addEventListener('change', change_scroll_to_anchor);
                dom.getElementById('i18n-selection')
                    .addEventListener('change', lh.translate_page.bind(lh));
                (function () {
                    dom.getElementById('prefs-controls-sub').style.display = 'none';
                    dom.getElementById('prefs-visibility')
                        .addEventListener('click', (function () {
                        var s = dom.getElementById('prefs-controls-sub');
                        s.style.display = (s.style.display === 'none')
                            ? 'inherit'
                            : 'none';
                    }));
                })();
                return [2];
            });
        });
    }
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var cfg, manifest, dfault, locale_handler, gman, listen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('started!');
                        cfg = new prefs.Preferences();
                        return [4, i18n.load_i18n_manifest()];
                    case 1:
                        manifest = _a.sent();
                        return [4, i18n.load_locale_document(manifest["default"])];
                    case 2:
                        dfault = _a.sent(), locale_handler = new i18n.LocaleHandler(manifest, dfault), gman = new game_manager.GameState(), listen = make_listeners(locale_handler, gman);
                        console.log(manifest);
                        return [4, listen];
                    case 3:
                        _a.sent();
                        return [4, locale_handler.populate_locale_selection()];
                    case 4:
                        _a.sent();
                        return [4, locale_handler.translate_page()];
                    case 5:
                        _a.sent();
                        console.log('done!', cfg);
                        return [2];
                }
            });
        });
    }
    main()
        .then()["catch"](function (err) { throw err; });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvZG9tLnRzIiwiLi4vc3JjL21hbmFnZXJzL2dhbWUudHMiLCIuLi9zcmMvbGliL3RzZXh0LnRzIiwiLi4vc3JjL21hbmFnZXJzL2kxOG4udHMiLCIuLi9zcmMvbWFuYWdlcnMvcHJlZnMudHMiLCIuLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNBLFNBQWdCLGNBQWMsQ0FBRSxFQUFXO1FBQ3pDLE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7ZUFDN0IsQ0FBRSxDQUFDO2dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLEVBQUksQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQVBELHdDQU9DO0lBR0QsU0FBZ0Isc0JBQXNCLENBQUUsSUFBYTtRQUNuRCxPQUFPLENBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7ZUFDdkMsQ0FBRSxDQUFDO2dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQThELElBQU0sQ0FBQyxDQUFDO1lBQ3hGLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQVBELHdEQU9DO0lBR0QsU0FBZ0IsYUFBYSxDQUFFLElBQWE7UUFDMUMsT0FBTyxDQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztlQUM5QixDQUFFO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7SUFORCxzQ0FNQzs7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