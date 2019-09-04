"use strict";
function translate_page() {
}
function populate_translation_selection() {
}
function change_scroll_to_anchor() {
    var scroll_input = (window.document.getElementById('scroll-input')
        || ((function () { throw new Error('no element scroll-input'); })()));
    var v = (scroll_input.value === null) ? ((function () { throw new Error('no property HTMLInputElement.value'); })()) : scroll_input.value;
    var scrollpos = Math.abs((+v) - 1);
    (window.document.getElementById('scroll-to') || ((function () { throw new Error('no element scroll-to'); })())).setAttribute('href', "#result-line" + scrollpos);
}
function make_listeners() {
    var input_listeners = [
        ['keydown', function (k) { window.console.log("key down: " + k); }],
        ['keypress', function (k) { window.console.log("key press: " + k); }],
        ['keyup', function (k) { window.console.log("key up: " + k); }]
    ];
    var primary = (window.document.getElementById('primary')
        || ((function () { throw new Error('no primary input element'); })()));
    for (var _i = 0, input_listeners_1 = input_listeners; _i < input_listeners_1.length; _i++) {
        var l = input_listeners_1[_i];
        primary.addEventListener(l[0], l[1]);
    }
    (window.document.getElementById('scroll-input')
        || ((function () { throw new Error(); })())).addEventListener('change', change_scroll_to_anchor);
}
function main() {
    make_listeners();
    populate_translation_selection();
    //throw new Error("end of main");
}
window.onload = main;
//# sourceMappingURL=index.js.map