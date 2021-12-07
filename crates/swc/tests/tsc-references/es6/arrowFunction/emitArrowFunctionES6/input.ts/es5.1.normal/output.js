function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// @target:es6
var f1 = function() {
};
var f2 = function(x, y) {
};
var f3 = function(x, y) {
    for(var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        rest[_key - 2] = arguments[_key];
    }
};
var f4 = function(x, y) {
    var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10;
};
function foo(func) {
}
foo(function() {
    return true;
});
foo(function() {
    return false;
});
// Binding patterns in arrow functions
var p1 = function(param) {
    var _param = _slicedToArray(param, 1), a = _param[0];
};
var p2 = function(param) {
    var _param = _toArray(param), a = _param.slice(0);
};
var p3 = function(param) {
    var _param = _slicedToArray(param, 2), a = _param[1];
};
var p4 = function(param) {
    var _param = _toArray(param), a = _param.slice(1);
};
var p5 = function(param) {
    var _param = _slicedToArray(param, 1), tmp = _param[0], a = tmp === void 0 ? 1 : tmp;
};
var p6 = function(param) {
    var a = param.a;
};
var p7 = function(param) {
    var b = param.a.b;
};
var p8 = function(param) {
    var _a = param.a, a = _a === void 0 ? 1 : _a;
};
var p9 = function(param) {
    var tmp = param.a, ref = tmp === void 0 ? {
        b: 1
    } : tmp, _b = ref.b, b = _b === void 0 ? 1 : _b;
};
var p10 = function(param) {
    var _param = _slicedToArray(param, 1), ref = _param[0], value = ref.value, done = ref.done;
};
