"use strict";
function make_listeners() {
    var input_listeners = [
        ['keydown', function (k) { window.console.log("key down: " + k); }],
        ['keypress', function (k) { window.console.log("key press: " + k); }],
        ['keyup', function (k) { window.console.log("key up: " + k); }]
    ];
    var primary = window.document.getElementById('primary') || ((function () { throw new Error('no primary input element'); })());
    for (var _i = 0, input_listeners_1 = input_listeners; _i < input_listeners_1.length; _i++) {
        var l = input_listeners_1[_i];
        primary.addEventListener(l[0], l[1]);
    }
}
function main() {
    make_listeners();
    throw new Error("end of main");
}
window.onload = main;
//# sourceMappingURL=index.js.map