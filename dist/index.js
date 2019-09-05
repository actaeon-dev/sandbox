"use strict";
// import * as  i18n from './ i18n';
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
/** a */
var i18n_document_template = 'data/i18n/%s.json';
/** a */
var i18n_root_document = 'i18n';
/** a  */
function i18n_get_available_translations() {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = i18n_document_template.replace('%s', i18n_root_document);
            console.log("url: " + url);
            return [2 /*return*/, fetch(url)
                    .then(function (response) { return response.json(); })
                    .then(function (obj) { return obj.available; })];
        });
    });
}
/**
 * Blah
 */
function i18n_translate_page() {
    // populate all class=translatable nodes given their data- i18n-id value
}
/**
 * Blah
 */
function i18n_populate_translation_selection() {
    // const data : string[] = async () => i18n_get_available_translations();
    // const sel: HTMLSelectElement =
    //  <HTMLSelectElement> getElementById(' i18n-selection');
    // for each locale listed in data/ i18n/ i18n.json, then add it as an
    //  <option> to the selector
    i18n_get_available_translations()
        .then(function (x) { return x; })["catch"](function (err) { throw err; });
}
/** a */
function getElementById(id) {
    return (window.document.getElementById(id)
        || ((function () {
            throw new Error("getElementById: no such element " + id);
        })()));
}
/** a */
function change_scroll_to_anchor() {
    var scroll_input = getElementById('scroll-input');
    var scrollpos = Math.abs(Number(scroll_input.value) - 1);
    getElementById('scroll-to')
        .setAttribute('href', "#result-line" + scrollpos);
}
/** a */
function make_listeners() {
    var input_listeners = [
        ['keydown', function (k) {
                window.console.log("keydown: " + k.toString());
            }],
        ['keypress', function (k) {
                window.console.log("keypress: " + k.toString());
            }],
        ['keyup', function (k) {
                window.console.log("keyup: " + k.toString());
            }],
    ];
    var primary = getElementById('primary');
    for (var _i = 0, input_listeners_1 = input_listeners; _i < input_listeners_1.length; _i++) {
        var l = input_listeners_1[_i];
        primary.addEventListener(l[0], l[1]);
    }
    getElementById('scroll-input')
        .addEventListener('change', change_scroll_to_anchor);
    getElementById('i18n-selection')
        .addEventListener('change', i18n_translate_page);
}
/** a */
function main() {
    console.log('hello');
    make_listeners();
    i18n_populate_translation_selection();
}
window.onload = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxRQUFRO0FBQ1IsSUFBTyxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQztBQUNwRCxRQUFRO0FBQ1IsSUFBTyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7QUFVbkMsU0FBUztBQUVULFNBQWUsK0JBQStCOzs7O1lBQ3RDLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLEdBQUssQ0FBQyxDQUFDO1lBRTNCLHNCQUFPLEtBQUssQ0FBRSxHQUFHLENBQUU7cUJBQ2hCLElBQUksQ0FBRSxVQUFDLFFBQW1CLElBQVcsT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFFO3FCQUN0RCxJQUFJLENBQUUsVUFBQyxHQUFTLElBQWdCLE9BQWlCLEdBQUksQ0FBQyxTQUFTLEVBQS9CLENBQStCLENBQUMsRUFBQzs7O0NBQ3JFO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLG1CQUFtQjtJQUMxQix3RUFBd0U7QUFDMUUsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBVSxtQ0FBbUM7SUFDM0MseUVBQXlFO0lBQ3pFLGlDQUFpQztJQUNqQywwREFBMEQ7SUFDMUQscUVBQXFFO0lBQ3JFLDRCQUE0QjtJQUU1QiwrQkFBK0IsRUFBRTtTQUM5QixJQUFJLENBQUMsVUFBQyxDQUFZLElBQWdCLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBRSxDQUNyQyxPQUFLLENBQUEsQ0FBQyxVQUFDLEdBQWUsSUFBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0FBQ2pELENBQUM7QUFFRCxRQUFRO0FBQ1IsU0FBUyxjQUFjLENBQUUsRUFBVztJQUNsQyxPQUFPLENBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1dBQzdCLENBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLEVBQUksQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0FBQ0osQ0FBQztBQUVELFFBQVE7QUFDUixTQUFTLHVCQUF1QjtJQUM5QixJQUFNLFlBQVksR0FBc0IsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXZFLElBQU0sU0FBUyxHQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVwRSxjQUFjLENBQUMsV0FBVyxDQUFDO1NBQ3hCLFlBQVksQ0FBQyxNQUFNLEVBQUUsaUJBQWUsU0FBVyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUVELFFBQVE7QUFDUixTQUFTLGNBQWM7SUFDckIsSUFBTSxlQUFlLEdBQStCO1FBQ2xELENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBaUI7Z0JBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQVksQ0FBQyxDQUFDLFFBQVEsRUFBSSxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFpQjtnQkFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBYSxDQUFDLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQWlCO2dCQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDO1lBQUMsQ0FBQyxDQUFDO0tBQ25ELENBQUM7SUFFRixJQUFNLE9BQU8sR0FBeUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWhGLEtBQWdCLFVBQWUsRUFBZixtQ0FBZSxFQUFmLDZCQUFlLEVBQWYsSUFBZSxFQUFFO1FBQTVCLElBQU0sQ0FBQyx3QkFBQTtRQUNWLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3REO0lBRUQsY0FBYyxDQUFDLGNBQWMsQ0FBQztTQUMzQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQWtCLHVCQUF1QixDQUFDLENBQUM7SUFFdkUsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1NBQzdCLGdCQUFnQixDQUFDLFFBQVEsRUFBbUIsbUJBQW1CLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRUQsUUFBUTtBQUNSLFNBQVMsSUFBSTtJQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsY0FBYyxFQUFFLENBQUM7SUFDakIsbUNBQW1DLEVBQUUsQ0FBQztBQUN4QyxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMifQ==