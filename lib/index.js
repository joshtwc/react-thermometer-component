"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Thermometer.css");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Thermometer = /*#__PURE__*/function (_Component) {
  function Thermometer() {
    _classCallCheck(this, Thermometer);
    return _callSuper(this, Thermometer, arguments);
  }
  _inherits(Thermometer, _Component);
  return _createClass(Thermometer, [{
    key: "render",
    value: function render() {
      this.options = this._generateOptions();
      var theme = "thermometer--theme-".concat(this.options.theme());
      var size = "thermometer--".concat(this.options.size());
      var height = {
        height: "".concat(this.options.height, "px")
      };
      var heightPercent = {
        height: "".concat(this.options.percent(), "%")
      };
      var heightBgColor = {
        height: "calc(".concat(this.options.height, "px - 57px)")
      };
      var reverse = this.options.reverseGradient ? 'Reverse' : '';
      var valstr = this.options.valstr();
      this._createIntervals();
      var stepIntervals = this._createIntervalsUI(this.options.intervals);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: height,
        className: "thermometer ".concat(size, " ").concat(theme)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "thermometer__draw-a"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "thermometer__draw-b".concat(reverse)
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "thermometer__meter"
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "thermometer__statistics"
      }, stepIntervals), /*#__PURE__*/_react["default"].createElement("div", {
        style: heightPercent,
        className: "thermometer__mercury"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "thermometer__percent-current"
      }, valstr), /*#__PURE__*/_react["default"].createElement("div", {
        className: "thermometer__mask"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "thermometer__bg-color".concat(reverse),
        style: heightBgColor
      })))));
    }
  }, {
    key: "_generateOptions",
    value: function _generateOptions() {
      var _this = this;
      return {
        theme: function theme() {
          return _this.props.theme === 'light' || _this.props.theme === 'dark' ? _this.props.theme : 'light';
        },
        value: this.props.value || 0,
        //default 0
        max: this.props.max || 100,
        //default 100
        steps: this.props.steps,
        format: this.props.format || '',
        size: function size() {
          return _this.props.size === 'small' || _this.props.size === 'normal' || _this.props.size === 'large' ? _this.props.size : 'normal';
        },
        height: this.props.height || 200,
        //default 200
        valstr: function valstr() {
          return _this.options.value + _this.options.format;
        },
        percent: function percent() {
          return _this.options.value / _this.options.max * 100;
        },
        reverseGradient: this.props.reverseGradient || false,
        // default false
        intervals: []
      };
    }
  }, {
    key: "_createIntervals",
    value: function _createIntervals() {
      if (this.options.steps) {
        for (var step = 0; step <= this.options.steps; step++) {
          var val = (this.options.max / this.options.steps * step).toFixed(2);
          var percent = val / this.options.max * 100;
          var interval = {
            percent: percent,
            label: val + this.options.format
          };
          this.options.intervals.push(interval);
        }
      }
    }
  }, {
    key: "_createIntervalsUI",
    value: function _createIntervalsUI(intervals) {
      return intervals.map(function (step, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: i,
          style: {
            bottom: "calc(".concat(step.percent, "% - 1px)")
          }
        }, step.label);
      });
    }
  }]);
}(_react.Component);
var _default = exports["default"] = Thermometer;
module.exports = exports.default;
//# sourceMappingURL=index.js.map