//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have
// one parameter that collects as many items as the function call provides, and it should print a summary of the
// sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var sandwiches = function () {
    var falvor = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        falvor[_i] = arguments[_i];
    }
    console.log(" Making a sandtich with : ".concat(falvor));
};
sandwiches("mayo", "ketchup", "butter");
sandwiches("chicken", "beef");
sandwiches("tikka", "fajita", "habenero", "arabic");
