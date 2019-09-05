"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFRO0FBQ1IsU0FBUyxjQUFjLENBQUUsRUFBVztJQUNsQyxPQUFPLENBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1dBQzdCLENBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLEVBQUksQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDVCxDQUFDO0FBQ0osQ0FBQztBQUVELFFBQVE7QUFDUixTQUFTLHVCQUF1QjtJQUM5QixJQUFNLFlBQVksR0FBc0IsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXZFLElBQU0sU0FBUyxHQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVwRSxjQUFjLENBQUMsV0FBVyxDQUFDO1NBQ3hCLFlBQVksQ0FBQyxNQUFNLEVBQUUsaUJBQWUsU0FBVyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUVELFFBQVE7QUFDUixTQUFTLGNBQWM7SUFDckIsSUFBTSxlQUFlLEdBQStCO1FBQ2xELENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBaUI7Z0JBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQVksQ0FBQyxDQUFDLFFBQVEsRUFBSSxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFpQjtnQkFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBYSxDQUFDLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQWlCO2dCQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDO1lBQUMsQ0FBQyxDQUFDO0tBQ25ELENBQUM7SUFFRixJQUFNLE9BQU8sR0FBeUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWhGLEtBQWdCLFVBQWUsRUFBZixtQ0FBZSxFQUFmLDZCQUFlLEVBQWYsSUFBZSxFQUFFO1FBQTVCLElBQU0sQ0FBQyx3QkFBQTtRQUNWLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3REO0lBRUQsY0FBYyxDQUFDLGNBQWMsQ0FBQztTQUMzQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQWtCLHVCQUF1QixDQUFDLENBQUM7SUFFdkUsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1NBQzdCLGdCQUFnQixDQUFDLFFBQVEsRUFBbUIsbUJBQW1CLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRUQsUUFBUTtBQUNSLFNBQVMsSUFBSTtJQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsY0FBYyxFQUFFLENBQUM7SUFDakIsbUNBQW1DLEVBQUUsQ0FBQztBQUN4QyxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMifQ==