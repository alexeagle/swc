function _arrayLikeToArray(arr, len) {
    (null == len || len > arr.length) && (len = arr.length);
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _toConsumableArray(arr) {
    return (function(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    })(arr) || (function(iter) {
        if ("undefined" != typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
    })(arr) || _unsupportedIterableToArray(arr) || (function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
}
function _unsupportedIterableToArray(o, minLen) {
    if (o) {
        if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if ("Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
}
var a0 = [
    ,
    ,
    2,
    3,
    4
];
[
    ,
    ,
].concat(_toConsumableArray(a0), [
    "hello"
]), [
    ,
].concat(_toConsumableArray(a0)), _toConsumableArray(a0).concat([
    , 
]);
var ref = [
    1,
    2,
    !0
];
ref[0], ref[1];
var temp = [
    "s",
    "t",
    "r"
], temp1 = [
    1,
    2,
    3
];
[
    1,
    !0, 
].concat(_toConsumableArray(temp)), _toConsumableArray(temp), _toConsumableArray(temp1), _toConsumableArray(temp1), _toConsumableArray(temp).concat(_toConsumableArray(temp1)), _toConsumableArray([
    void 0,
    null,
    void 0
]), _toConsumableArray([]), _toConsumableArray(_toConsumableArray(temp1)), _toConsumableArray(temp1), [
    _toConsumableArray(temp1)
].concat(_toConsumableArray([
    "hello"
]));
