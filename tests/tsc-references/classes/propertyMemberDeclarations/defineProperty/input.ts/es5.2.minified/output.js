function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var _key, _key1, A = function() {
    "use strict";
    var Constructor, protoProps, staticProps;
    function A(y) {
        _classCallCheck(this, A), this.y = y, this.a = this.y, this[_key] = 13, this[_key1] = 14, this.z = this.y;
    }
    return protoProps = [
        {
            key: "m",
            value: function() {
            }
        }
    ], _defineProperties((Constructor = A).prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), A;
}();
_key = "computed", _key1 = "p";
var B = function() {
    "use strict";
    _classCallCheck(this, B);
}, C = function(B) {
    "use strict";
    function C(ka) {
        var _this, self, call, obj;
        return _classCallCheck(this, C), (_this = (self = this, (call = _getPrototypeOf(C).call(this)) && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        })(self))).ka = ka, _this.z = _this.ka, _this.ki = _this.ka, _this;
    }
    return !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass);
    }(C, B), C;
}(B);