var v = function() {
    return 1;
};
var v = a;
var v = function(a) {
    return 1;
};
var v = function(a, b) {
    return 1;
};
var v = function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    return 1;
};
var v = a;
var v = (a, b);
var v = (a = 1, b = 2);
