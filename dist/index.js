import * as i10n from './i10n';
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
    getElementById('i10n-selection')
        .addEventListener('change', i10n.translate_page);
}
/** a */
function main() {
    console.log('hello');
    make_listeners();
    i10n.populate_translation_selection();
    console.log(i10n.get_available_translations());
}
window.onload = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLElBQUksTUFBTSxRQUFRLENBQUM7QUFFL0IsUUFBUTtBQUNSLFNBQVMsY0FBYyxDQUFFLEVBQVc7SUFDbEMsT0FBTyxDQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztXQUM3QixDQUFFLENBQUM7WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFtQyxFQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFFLENBQ1QsQ0FBQztBQUNKLENBQUM7QUFFRCxRQUFRO0FBQ1IsU0FBUyx1QkFBdUI7SUFDOUIsSUFBTSxZQUFZLEdBQXNCLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2RSxJQUFNLFNBQVMsR0FBWSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFcEUsY0FBYyxDQUFDLFdBQVcsQ0FBQztTQUN4QixZQUFZLENBQUMsTUFBTSxFQUFFLGlCQUFlLFNBQVcsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFFRCxRQUFRO0FBQ1IsU0FBUyxjQUFjO0lBQ3JCLElBQU0sZUFBZSxHQUErQjtRQUNsRCxDQUFDLFNBQVMsRUFBRSxVQUFDLENBQWlCO2dCQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDO1lBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBaUI7Z0JBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBSSxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFpQjtnQkFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxDQUFDLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQztLQUNuRCxDQUFDO0lBRUYsSUFBTSxPQUFPLEdBQXlDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVoRixLQUFnQixVQUFlLEVBQWYsbUNBQWUsRUFBZiw2QkFBZSxFQUFmLElBQWUsRUFBRTtRQUE1QixJQUFNLENBQUMsd0JBQUE7UUFDVixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0RDtJQUVELGNBQWMsQ0FBQyxjQUFjLENBQUM7U0FDM0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFrQix1QkFBdUIsQ0FBQyxDQUFDO0lBRXZFLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQWtCLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBRUQsUUFBUTtBQUNSLFNBQVMsSUFBSTtJQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsY0FBYyxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyJ9