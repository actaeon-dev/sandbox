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
define("lib/dom/interact", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function getElementById(id) {
        return (window.document.getElementById(id)
            || (function () {
                throw new Error("getElementById: no such element " + id);
            })());
    }
    exports.getElementById = getElementById;
    function getElementsByClassName(name) {
        return (window.document.getElementsByClassName(name)
            || (function () {
                throw new Error("getElementsByClassName: ??? error happened when processing " + name);
            })());
    }
    exports.getElementsByClassName = getElementsByClassName;
    function createElement(name) {
        return (window.document.createElement(name)
            || (function () {
                throw new Error('can\'t create new element: ' + name);
            })());
    }
    exports.createElement = createElement;
});
define("managers/game", ["require", "exports", "lib/dom/interact"], function (require, exports, dom) {
    "use strict";
    exports.__esModule = true;
    dom = __importStar(dom);
    var GameState = (function () {
        function GameState() {
        }
        GameState.prototype.make_listeners = function () {
            return __awaiter(this, void 0, void 0, function () {
                var input_listeners, stdin, input_listeners_1, input_listeners_1_1, l;
                var e_1, _a;
                return __generator(this, function (_b) {
                    input_listeners = ['keydown', 'keypress', 'keyup'];
                    stdin = dom.getElementById('stdin');
                    try {
                        for (input_listeners_1 = __values(input_listeners), input_listeners_1_1 = input_listeners_1.next(); !input_listeners_1_1.done; input_listeners_1_1 = input_listeners_1.next()) {
                            l = input_listeners_1_1.value;
                            stdin.addEventListener(l, this.handle_keyboard.bind(this));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (input_listeners_1_1 && !input_listeners_1_1.done && (_a = input_listeners_1["return"])) _a.call(input_listeners_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [2];
                });
            });
        };
        GameState.prototype.handle_keyboard = function (kbe) {
            var input = dom.getElementById('stdin').value;
            if (kbe.isTrusted) {
                if (kbe.key === 'Enter') {
                    console.log('user submit: ', input);
                }
            }
            else {
            }
        };
        return GameState;
    }());
    exports.GameState = GameState;
});
define("lib/tsext", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function _impl_object_entries(obj) {
        var ownProps = Object.keys(obj);
        var i = ownProps.length;
        var resArray = new Array(i);
        while (i !== 0) {
            resArray[i] = [ownProps[i], Reflect.get(obj, ownProps[i])];
            i -= 1;
        }
        return resArray;
    }
    exports._impl_object_entries = _impl_object_entries;
    exports._native_object_entries = Reflect.get(Object, 'entries');
    exports.object_entries = (Object.hasOwnProperty('entries')
        ? exports._native_object_entries
        : _impl_object_entries);
    function map_from_object(obj) {
        return new Map(exports.object_entries(obj));
    }
    exports.map_from_object = map_from_object;
    function zip(arr) {
        var new_len = Math.min.apply(Math, __spread(arr.map(function (_) { return _.length; })));
        var res = new Array(new_len);
        for (var i = 0; i < new_len; i += 1) {
            res[i] = [arr[0][i], arr[1][i]];
        }
        return res;
    }
    exports.zip = zip;
    function invert(m) {
        return new Map(Array.from(m.entries())
            .map(function (x) { return [x[1], x[0]]; }));
    }
    exports.invert = invert;
    var Map2D = (function () {
        function Map2D(m) {
            this.map_ab = new Map(m.entries());
            this.map_ba = invert(m);
        }
        Map2D.prototype.get = function (key) {
            var ab = this.map_ab.get(key);
            if (ab !== undefined) {
                return ab;
            }
            var ba = this.map_ba.get(key);
            if (ba !== undefined) {
                return ba;
            }
            return undefined;
        };
        return Map2D;
    }());
    exports.Map2D = Map2D;
});
define("lib/dom/construct", ["require", "exports", "lib/tsext", "lib/dom/interact"], function (require, exports, tsext, dom) {
    "use strict";
    exports.__esModule = true;
    tsext = __importStar(tsext);
    dom = __importStar(dom);
    function element(kind, attrs) {
        var e_2, _a;
        var elt = dom.createElement(kind);
        try {
            for (var _b = __values(tsext.object_entries(attrs)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
                elt.setAttribute(k, v);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return elt;
    }
    exports.element = element;
});
define("managers/i18n", ["require", "exports", "lib/dom/construct", "lib/dom/interact", "lib/tsext"], function (require, exports, construct, dom, tsext) {
    "use strict";
    exports.__esModule = true;
    construct = __importStar(construct);
    dom = __importStar(dom);
    tsext = __importStar(tsext);
    var DOCUMENT_PATH_TEMPLATE = 'data/i18n/%s.json';
    var DOCUMENT_LOCALE_PATH = 'locale/';
    exports.ROOT_DOCUMENT = 'i18n';
    var CLASS_TRANSLATABLE = 'i18n-able';
    var SPECIAL_DATA_ID = 'data-i18n-id';
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
        LocaleHandler.prototype.translate_page = function (new_locale_id) {
            return __awaiter(this, void 0, void 0, function () {
                var candidates, max_split, candidates_1, candidates_1_1, c, data_attr, parts;
                var e_3, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (undefined === this.manifest.available.get(new_locale_id)) {
                                return [2];
                            }
                            console.log('translating page to', this.active);
                            candidates = Array.from(dom.getElementsByClassName(CLASS_TRANSLATABLE));
                            max_split = 2;
                            return [4, this._do_cache(new_locale_id)];
                        case 1:
                            _c.sent();
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
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (candidates_1_1 && !candidates_1_1.done && (_a = candidates_1["return"])) _a.call(candidates_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            return [2];
                    }
                });
            });
        };
        LocaleHandler.prototype.populate_locale_selection = function () {
            return __awaiter(this, void 0, void 0, function () {
                var i18n_selection, _a, _b, _c, id, human_str, option;
                var e_4, _d;
                return __generator(this, function (_e) {
                    i18n_selection = dom.getElementById(ID_I18N_SELECTION);
                    try {
                        for (_a = __values(this.manifest.available), _b = _a.next(); !_b.done; _b = _a.next()) {
                            _c = __read(_b.value, 2), id = _c[0], human_str = _c[1];
                            option = construct.element('option', {
                                id: 'locale-' + id,
                                name: id,
                            });
                            option.appendChild(window.document.createTextNode(human_str));
                            i18n_selection.insertAdjacentElement('beforeend', option);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    return [2];
                });
            });
        };
        LocaleHandler.prototype._do_cache = function (new_locale_id) {
            return __awaiter(this, void 0, void 0, function () {
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
define("managers/prefs", ["require", "exports", "lib/dom/interact", "lib/tsext"], function (require, exports, dom, tsext) {
    "use strict";
    exports.__esModule = true;
    dom = __importStar(dom);
    tsext = __importStar(tsext);
    var PrefsAction;
    (function (PrefsAction) {
        PrefsAction["SAVE"] = "save";
        PrefsAction["RESET"] = "reset";
        PrefsAction["IMPORT"] = "import";
        PrefsAction["EXPORT"] = "export";
    })(PrefsAction || (PrefsAction = {}));
    var Preferences = (function () {
        function Preferences() {
            dom.getElementById('prefs-controls-sub').style.display = 'none';
        }
        Preferences.prototype.make_listeners = function () {
            return __awaiter(this, void 0, void 0, function () {
                var cl, make_sf, listeners;
                var _this = this;
                return __generator(this, function (_a) {
                    cl = 'click';
                    make_sf = (function (action) { return (function (e) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            e.preventDefault();
                            return [2, this.state_change(action)];
                        });
                    }); }); });
                    listeners = tsext.map_from_object({
                        'prefs-export': [cl, make_sf("export")],
                        'prefs-import': [cl, make_sf("import")],
                        'prefs-reset': [cl, make_sf("reset")],
                        'prefs-save': [cl, make_sf("save")],
                        'prefs-telemetry': [cl, (function (_) {
                            })],
                        'prefs-use-localstorage': [cl, (function (_) {
                            })],
                        'prefs-visibility': [cl, (function (e) {
                                e.preventDefault();
                                var s = dom.getElementById('prefs-controls-sub');
                                s.style.display = (s.style.display === 'none')
                                    ? 'inherit'
                                    : 'none';
                            })],
                    });
                    listeners.forEach((function (v, k, _) {
                        var _a;
                        (_a = dom.getElementById(k)).addEventListener.apply(_a, __spread(v));
                    }));
                    return [2];
                });
            });
        };
        Preferences.prototype.state_change = function (action) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new tsext.Dict({})[action]()];
                });
            });
        };
        return Preferences;
    }());
    exports.Preferences = Preferences;
});
define("main", ["require", "exports", "lib/dom/interact", "managers/game", "managers/i18n", "managers/prefs"], function (require, exports, dom, game_manager, i18n, prefs) {
    "use strict";
    exports.__esModule = true;
    dom = __importStar(dom);
    game_manager = __importStar(game_manager);
    i18n = __importStar(i18n);
    prefs = __importStar(prefs);
    function change_scroll_to_anchor(e) {
        e.preventDefault();
        var scroll_input = dom.getElementById('scroll-input');
        var scrollpos = Math.abs(Number(scroll_input.value) - 1);
        dom.getElementById('scroll-to')
            .setAttribute('href', "#result-line" + scrollpos);
    }
    function make_listeners(lh) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                dom.getElementById('scroll-input')
                    .addEventListener('change', change_scroll_to_anchor);
                dom.getElementById('i18n-selection')
                    .addEventListener('change', lh.translate_page.bind(lh));
                return [2];
            });
        });
    }
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var cfg, manifest, dfault, locale_handler, gman, listen, glisten, plisten;
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
                        dfault = _a.sent(), locale_handler = new i18n.LocaleHandler(manifest, dfault), gman = new game_manager.GameState(), listen = make_listeners(locale_handler), glisten = gman.make_listeners(), plisten = cfg.make_listeners();
                        console.log(manifest);
                        return [4, listen];
                    case 3:
                        _a.sent();
                        return [4, glisten];
                    case 4:
                        _a.sent();
                        return [4, plisten];
                    case 5:
                        _a.sent();
                        return [4, locale_handler.populate_locale_selection()];
                    case 6:
                        _a.sent();
                        return [4, locale_handler.translate_page()];
                    case 7:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvZG9tL2ludGVyYWN0LnRzIiwiLi4vc3JjL21hbmFnZXJzL2dhbWUudHMiLCIuLi9zcmMvbGliL3RzZXh0LnRzIiwiLi4vc3JjL2xpYi9kb20vY29uc3RydWN0LnRzIiwiLi4vc3JjL21hbmFnZXJzL2kxOG4udHMiLCIuLi9zcmMvbWFuYWdlcnMvcHJlZnMudHMiLCIuLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNBLFNBQWdCLGNBQWMsQ0FBRSxFQUFXO1FBQ3pDLE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7ZUFDN0IsQ0FBQztnQkFDRixNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFtQyxFQUFJLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsRUFBRSxDQUNQLENBQUM7SUFDSixDQUFDO0lBUEQsd0NBT0M7SUFHRCxTQUFnQixzQkFBc0IsQ0FBRSxJQUFhO1FBQ25ELE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQztlQUN2QyxDQUFDO2dCQUNGLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQThELElBQU0sQ0FBQyxDQUFDO1lBQ3hGLENBQUMsQ0FBQyxFQUFFLENBQ1AsQ0FBQztJQUNKLENBQUM7SUFQRCx3REFPQztJQUdELFNBQWdCLGFBQWEsQ0FBRSxJQUFhO1FBQzFDLE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7ZUFDOUIsQ0FBRTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxFQUFFLENBQ1AsQ0FB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