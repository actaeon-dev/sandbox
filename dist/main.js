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
define("i18n", ["require", "exports", "lib/dom", "lib/tsext"], function (require, exports, dom, tsext) {
    "use strict";
    exports.__esModule = true;
    dom = __importStar(dom);
    tsext = __importStar(tsext);
    var DOCUMENT_PATH_TEMPLATE = 'data/i18n/%s.json';
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
            description: tsext.map_from_object(igtt.description)
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
                                    "default": obj["default"]
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
                return [2, _load_i18n_document(id)
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
    function change_scroll_to_anchor() {
        var scroll_input = dom.getElementById('scroll-input');
        var scrollpos = Math.abs(Number(scroll_input.value) - 1);
        dom.getElementById('scroll-to')
            .setAttribute('href', "#result-line" + scrollpos);
    }
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
                    .addEventListener('change', lh.translate_page.bind(lh));
                return [2];
            });
        });
    }
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var manifest, dfault, locale_handler, gman, listen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('started!');
                        return [4, i18n.load_i18n_manifest()];
                    case 1:
                        manifest = _a.sent();
                        return [4, i18n.load_locale_document(manifest["default"])];
                    case 2:
                        dfault = _a.sent(), locale_handler = new i18n.LocaleHandler(manifest, dfault), gman = new game_manager.GameState(), listen = make_listeners(locale_handler, gman);
                        console.log(manifest);
                        return [4, locale_handler.populate_locale_selection()];
                    case 3:
                        _a.sent();
                        return [4, locale_handler.translate_page()];
                    case 4:
                        _a.sent();
                        return [4, listen];
                    case 5:
                        _a.sent();
                        console.log('done!');
                        return [2];
                }
            });
        });
    }
    main()
        .then()["catch"](function (err) { throw err; });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9nYW1lLW1hbmFnZXIudHMiLCIuLi9zcmMvbGliL2RvbS50cyIsIi4uL3NyYy9saWIvdHNleHQudHMiLCIuLi9zcmMvaTE4bi50cyIsIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0E7UUFLRTtZQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUdNLG1DQUFlLEdBQXRCLFVBQXdCLEdBQW1CO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLENBQUM7UUFDSCxnQkFBQztJQUFELENBQUMsQUFkRCxJQWNDO0lBZFksOEJBQVM7Ozs7O0lDQXRCLFNBQWdCLGNBQWMsQ0FBRSxFQUFXO1FBQ3pDLE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7ZUFDN0IsQ0FBRSxDQUFDO2dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLEVBQUksQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQVBELHdDQU9DO0lBR0QsU0FBZ0Isc0JBQXNCLENBQUUsSUFBYTtRQUNuRCxPQUFPLENBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7ZUFDdkMsQ0FBRSxDQUFDO2dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQThELElBQU0sQ0FBQyxDQUFDO1lBQ3hGLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQVBELHdEQU9DO0lBR0QsU0FBZ0IsYUFBYSxDQUFFLElBQWE7UUFDMUMsT0FBTyxDQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztlQUM5QixDQUFFO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7SUFORCxzQ0FNQzs7Ozs7SUMxQkQsU0FBZ0IsY0FBYyxDQUFPLEdBQVM7UUFDNUMsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQU0sUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUVkLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBQ25FLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDUjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFYRCx3Q0FXQztJQUdELFNBQVMsdUJBQXVCLENBQU0sR0FBUztRQUU3QyxPQUFPLElBQUksR0FBRyxDQUNzQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7SUFHRCxTQUFTLHFCQUFxQixDQUFNLEdBQVM7UUFFM0MsT0FBTyxJQUFJLEdBQUcsQ0FBYSxjQUFjLENBQUksR0FBRyxDQUFDLENBQUUsQ0FBQztJQUN0RCxDQUFDO0lBR1ksUUFBQSxlQUFlLEdBQUcsQ0FDN0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDOUIsQ0FBQyxDQUFDLHVCQUF1QjtRQUN6QixDQUFDLENBQUMscUJBQXFCLENBQzFCLENBQUM7Ozs7Ozs7SUM1QkYsSUFBTSxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQztJQUV0QyxRQUFBLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFFcEMsSUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUM7SUFFdkMsSUFBTSxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBRXZDLElBQU0saUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7SUFFM0MsSUFBTSxtQkFBbUIsR0FBRyx1QkFBdUIsQ0FBQztJQUVwRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7SUF5RTVCO1FBTUUscUJBQWEsT0FBZ0IsRUFBRSxRQUFpQjtZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMzQixDQUFDO1FBR00sNEJBQU0sR0FBYixVQUFlLEtBQTBCLEVBQUUsRUFBVztZQUVwRCxJQUFNLEdBQUcsR0FBd0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0QsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUNyQixJQUFNLEdBQUcsR0FBd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtvQkFDckIsT0FBTyxDQUFDLEtBQUssQ0FDWCxxREFBbUQsS0FBSyxhQUFRLEVBQUksQ0FDckUsQ0FBQztvQkFFRixPQUFPLG1CQUFtQixDQUFDO2lCQUM1QjtnQkFFRCxPQUFPLEdBQUcsQ0FBQzthQUNaO1lBRUQsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBQ0gsa0JBQUM7SUFBRCxDQUFDLEFBOUJELElBOEJDO0lBR0Q7UUFXRSx1QkFBYSxRQUF1QixFQUFFLE1BQWU7WUFDbkQsSUFBSSxTQUFTLEtBQUssUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5RDtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1lBRWhELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUdZLHNDQUFjLEdBQTNCOzs7Ozs7Ozs0QkFDUSxhQUFhLEdBQXdCLEdBQUcsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUU7aUNBQzlFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBRTNDLElBQ0UsQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDO21DQUNyQixDQUFFLFNBQVMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUUsRUFDL0Q7Z0NBQUUsV0FBTzs2QkFBRTs0QkFHYixXQUFNLENBQUM7Ozs7O2dEQUNDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztxREFDNUMsQ0FBQSxhQUFhLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBLEVBQXhDLGNBQXdDOzs7cURBRWpDLENBQUEsU0FBUyxLQUFLLFNBQVMsQ0FBQSxFQUF2QixjQUF1QjtnREFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7O2dEQUUvRCxLQUFBLElBQUksQ0FBQTtxREFBYyxXQUFXO2dEQUMzQixXQUFNLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxFQUFBOztnREFEM0MsR0FBSyxNQUFNLEdBQUcsY0FBSSxXQUFXLFdBQzNCLFNBQXlDO29EQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FDckIsQ0FBQzs7Ozs7cUNBRUwsQ0FBQyxFQUFFLEVBQUE7OzRCQVpKLFNBWUksQ0FBQzs0QkFFTCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFFMUMsVUFBVSxHQUFtQixLQUFLLENBQUMsSUFBSSxDQUMzQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsQ0FBRSxDQUFDOzRCQUU3QyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztnQ0FFcEIsS0FBZ0IsZUFBQSxTQUFBLFVBQVUsQ0FBQSxvR0FBRTtvQ0FBakIsQ0FBQztvQ0FFSixTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQ0FFbEQsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO3dDQUNoQixLQUFLLEdBQ1QsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUMvQixDQUFDO3dDQUdGLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQSxLQUFBLElBQUksQ0FBQyxNQUFNLENBQUEsQ0FBQyxNQUFNLG9CQUFJLEtBQUssRUFBQyxDQUFDO3FDQUM1QztpQ0FDRjs7Ozs7Ozs7Ozs7OztTQUVGO1FBR1ksaURBQXlCLEdBQXRDOzs7OztvQkFHUSxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzt3QkFFN0QsS0FBMEMsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFBLDRDQUFFOzRCQUF4RCxhQUEyQixFQUFwQixFQUFFLFVBQUEsRUFBTyxTQUFTLFVBQUE7NEJBRTVCLE1BQU0sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUMzQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7NEJBQzFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUVoQyxNQUFNLENBQUMsV0FBVyxDQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFFLFNBQVMsQ0FBRSxDQUFFLENBQUM7NEJBRWxFLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBRSxXQUFXLEVBQUUsTUFBTSxDQUFFLENBQUM7eUJBQzdEOzs7Ozs7Ozs7b0JBRUQsV0FBTzs7O1NBQ1I7UUFDSCxvQkFBQztJQUFELENBQUMsQUF6RkQsSUF5RkM7SUF6Rlksc0NBQWE7SUE0RjFCLFNBQVMsU0FBUyxDQUFFLElBQXdDO1FBRTFELE9BQU8sQ0FBQztZQUNOLElBQUksRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFTLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDOUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzdELENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxTQUFlLG1CQUFtQixDQUFFLEVBQVc7OztnQkFFN0MsV0FBTyxLQUFLLENBQUUsc0JBQXNCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBRTt5QkFDL0QsSUFBSSxDQUFFLFVBQUMsUUFBbUIsSUFBdUIsT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFFLEVBQUM7OztLQUN2RTtJQUdELFNBQXNCLGtCQUFrQjs7OztnQkFDdEMsV0FBTyxtQkFBbUIsQ0FBQyxxQkFBYSxDQUFDO3lCQUN0QyxJQUFJLENBQUUsVUFBTyxJQUFhOzs7NEJBQ25CLEdBQUcsR0FBOEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFHeEQsV0FBTyxDQUFDO29DQUNOLFNBQVMsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUM7b0NBRXZELFNBQU8sRUFBRSxHQUFHLENBQUMsU0FBTyxDQUFBO2lDQUNyQixDQUFDLEVBQUM7O3lCQUNKLENBQUMsRUFBQzs7O0tBQ047SUFaRCxnREFZQztJQUdELFNBQXNCLG9CQUFvQixDQUFFLEVBQVc7Ozs7Z0JBQ3JELFdBQU8sbUJBQW1CLENBQUMsRUFBRSxDQUFDO3lCQUMzQixJQUFJLENBQUUsVUFBTyxJQUFhOzs7NEJBQ25CLEdBQUcsR0FBd0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFHbEQsV0FBTyxDQUFDO29DQUNOLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQ0FDdEIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO29DQUNWLFdBQVcsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFTLEdBQUcsQ0FBQyxXQUFXLENBQUM7b0NBQzNELElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtvQ0FDZCxNQUFNLEVBQUUsU0FBUyxDQUFzQyxHQUFHLENBQUMsTUFBTSxDQUFDO29DQUNsRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDO2lDQUM5QyxDQUFDLEVBQUM7O3lCQUNKLENBQUMsRUFBQzs7O0tBQ047SUFmRCxvREFlQzs7Ozs7Ozs7SUMvUEQsU0FBUyx1QkFBdUI7UUFDOUIsSUFBTSxZQUFZLEdBQXNCLEdBQUcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFM0UsSUFBTSxTQUFTLEdBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBFLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO2FBQzVCLFlBQVksQ0FBQyxNQUFNLEVBQUUsaUJBQWUsU0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQVlELFNBQ0EsY0FBYyxDQUFFLEVBQXVCLEVBQUUsRUFBMkI7Ozs7O2dCQUM1RCxlQUFlLEdBQWMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUU5RCxPQUFPLEdBQXNCLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7O29CQUVqRSxLQUFnQixvQkFBQSxTQUFBLGVBQWUsQ0FBQSw2SEFBRTt3QkFBdEIsQ0FBQzt3QkFDVixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFrQixFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUMxRTs7Ozs7Ozs7O2dCQUVELEdBQUcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO3FCQUMvQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQWtCLHVCQUF1QixDQUFDLENBQUM7Z0JBRXZFLEdBQUcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7cUJBR2pDLGdCQUFnQixDQUFDLFFBQVEsRUFBa0IsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFHMUUsV0FBTzs7O0tBQ1I7SUFHRCxTQUFlLElBQUk7Ozs7Ozt3QkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFHWCxXQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFBOzt3QkFBMUMsUUFBUSxHQUFHLFNBQStCO3dCQUNqQyxXQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsU0FBTyxDQUFBLENBQUMsRUFBQTs7d0JBQTFELE1BQU0sR0FBRyxTQUFpRCxFQUMxRCxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFFekQsSUFBSSxHQUFHLElBQUksWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUVuQyxNQUFNLEdBQUcsY0FBYyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7d0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBRXRCLFdBQU0sY0FBYyxDQUFDLHlCQUF5QixFQUFFLEVBQUE7O3dCQUFoRCxTQUFnRCxDQUFDO3dCQUVqRCxXQUFNLGNBQWMsQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQXJDLFNBQXFDLENBQUM7d0JBRXRDLFdBQU0sTUFBTSxFQUFBOzt3QkFBWixTQUFZLENBQUM7d0JBRWIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7S0FDdEI7SUFFRCxJQUFJLEVBQUU7U0FDSCxJQUFJLEVBQUUsQ0FDTixPQUFLLENBQUEsQ0FBRSxVQUFDLEdBQVcsSUFBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIn0=
