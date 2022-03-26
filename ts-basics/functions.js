"use strict";
exports.__esModule = true;
exports.getName = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = "default"; }
    return str1 + " " + str2;
};
exports.addStrings = addStrings;
//the | indicates a union type
var format = function (title, param) {
    return title + " " + param; //its fine to use type coersion
};
exports.format = format;
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
//the ... is the rest operator for overloading
// https://www.tutorialsandyou.com/javascript/rest-operator-in-javascript-1.html
function introduce(salutaion) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutaion, " ").concat(names.join(" "));
}
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
} //the ? operator makes sure user is defined before you dereference it
exports.getName = getName;
// the ?? is the null coellese operator which sets the output to a default value if not defined
exports["default"] = introduce;
