// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/react-switch/dist/react-switch.dev.js":[function(require,module,exports) {
var React = require('react');
var PropTypes = require('prop-types');

/*
The MIT License (MIT)

Copyright (c) 2015 instructure-react

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var uncheckedIcon = (
  React.createElement( 'svg', {
    viewBox: "-2 -5 14 20", height: "100%", width: "100%", style: { position: "absolute", top: 0 } },
    React.createElement( 'path', {
      /* eslint-disable max-len */
      d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12", fill: "#fff", fillRule: "evenodd" })
  )
);

var checkedIcon = (
  React.createElement( 'svg', {
    height: "100%", width: "100%", viewBox: "-2 -5 17 21", style: { position: "absolute", top: 0 } },
    React.createElement( 'path', {
      d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0", fill: "#fff", fillRule: "evenodd" })
  )
);

function createBackgroundColor(
  pos,
  checkedPos,
  uncheckedPos,
  offColor,
  onColor
) {
  var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);
  if (relativePos === 0) {
    return offColor;
  }
  if (relativePos === 1) {
    return onColor;
  }

  var newColor = "#";
  for (var i = 1; i < 6; i += 2) {
    var offComponent = parseInt(offColor.substr(i, 2), 16);
    var onComponent = parseInt(onColor.substr(i, 2), 16);
    var weightedValue = Math.round(
      (1 - relativePos) * offComponent + relativePos * onComponent
    );
    var newComponent = weightedValue.toString(16);
    if (newComponent.length === 1) {
      newComponent = "0" + newComponent;
    }
    newColor += newComponent;
  }
  return newColor;
}

function convertShorthandColor(color) {
  if (color.length === 7) {
    return color;
  }
  var sixDigitColor = "#";
  for (var i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }
  return sixDigitColor;
}

function getBackgroundColor(
  pos,
  checkedPos,
  uncheckedPos,
  offColor,
  onColor
) {
  var sixDigitOffColor = convertShorthandColor(offColor);
  var sixDigitOnColor = convertShorthandColor(onColor);
  return createBackgroundColor(
    pos,
    checkedPos,
    uncheckedPos,
    sixDigitOffColor,
    sixDigitOnColor
  );
}

// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
var hexColorPropType = function (props, propName, componentName) {
  var prop = props[propName];
  if (
    typeof prop !== "string" ||
    prop[0] !== "#" ||
    (prop.length !== 4 && prop.length !== 7)
  ) {
    return new Error(
      ("Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" + propName + "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'")
    );
  }
  return null;
};

var ReactSwitch = (function (Component) {
  function ReactSwitch(props) {
    Component.call(this, props);
    var height = props.height;
    var width = props.width;
    var handleDiameter = props.handleDiameter;
    var checked = props.checked;
    this.$handleDiameter = handleDiameter || height - 2;
    this.$checkedPos = Math.max(
      width - height,
      width - (height + this.$handleDiameter) / 2
    );
    this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
    this.state = {
      $pos: checked ? this.$checkedPos : this.$uncheckedPos
    };

    this.$onMouseDown = this.$onMouseDown.bind(this);
    this.$onMouseMove = this.$onMouseMove.bind(this);
    this.$onMouseUp = this.$onMouseUp.bind(this);

    this.$onTouchStart = this.$onTouchStart.bind(this);
    this.$onTouchMove = this.$onTouchMove.bind(this);
    this.$onTouchEnd = this.$onTouchEnd.bind(this);
    this.$onTouchCancel = this.$onTouchCancel.bind(this);

    this.$onClick = this.$onClick.bind(this);
    this.$onKeyDown = this.$onKeyDown.bind(this);
  }

  if ( Component ) ReactSwitch.__proto__ = Component;
  ReactSwitch.prototype = Object.create( Component && Component.prototype );
  ReactSwitch.prototype.constructor = ReactSwitch;

  ReactSwitch.prototype.componentWillReceiveProps = function componentWillReceiveProps (ref) {
    var checked = ref.checked;

    var $pos = checked ? this.$checkedPos : this.$uncheckedPos;
    this.setState({ $pos: $pos });
  };

  ReactSwitch.prototype.$onDragStart = function $onDragStart (clientX) {
    this.setState({ $startX: clientX, $hasOutline: true });
  };

  ReactSwitch.prototype.$onDrag = function $onDrag (clientX) {
    var ref = this.state;
    var $startX = ref.$startX;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
    var newPos = startPos + clientX - $startX;
    var $pos = Math.min(
      this.$checkedPos,
      Math.max(this.$uncheckedPos, newPos)
    );
    this.setState({ $pos: $pos, $isDragging: true });
  };

  ReactSwitch.prototype.$onDragStop = function $onDragStop (event) {
    var ref = this.state;
    var $pos = ref.$pos;
    var $isDragging = ref.$isDragging;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var onChange = ref$1.onChange;
    var id = ref$1.id;

    // Simulate clicking the handle
    if (!$isDragging) {
      this.setState({ $hasOutline: false });
      onChange(!checked, event, id);
      return;
    }
    if (checked) {
      if ($pos > (this.$checkedPos + this.$uncheckedPos) / 2) {
        this.setState({
          $pos: this.$checkedPos,
          $isDragging: false,
          $hasOutline: false
        });
        return;
      }
      this.setState({ $isDragging: false, $hasOutline: false });
      onChange(false, event, id);
      return;
    }
    if ($pos < (this.$checkedPos + this.$uncheckedPos) / 2) {
      this.setState({
        $pos: this.$uncheckedPos,
        $isDragging: false,
        $hasOutline: false
      });
      return;
    }
    this.setState({ $isDragging: false, $hasOutline: false });
    onChange(true, event, id);
  };

  ReactSwitch.prototype.$onMouseDown = function $onMouseDown (event) {
    // Ignore right click and scroll
    if (typeof event.button === "number" && event.button !== 0) {
      return;
    }

    this.$onDragStart(event.clientX);
    window.addEventListener("mousemove", this.$onMouseMove);
    window.addEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onMouseMove = function $onMouseMove (event) {
    event.preventDefault();
    this.$onDrag(event.clientX);
  };

  ReactSwitch.prototype.$onMouseUp = function $onMouseUp (event) {
    this.$onDragStop(event);
    window.removeEventListener("mousemove", this.$onMouseMove);
    window.removeEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onTouchStart = function $onTouchStart (event) {
    this.$onDragStart(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchMove = function $onTouchMove (event) {
    this.$onDrag(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchEnd = function $onTouchEnd (event) {
    event.preventDefault();
    this.$onDragStop(event);
  };

  ReactSwitch.prototype.$onTouchCancel = function $onTouchCancel () {
    this.setState({ $hasOutline: false });
  };

  ReactSwitch.prototype.$onClick = function $onClick (event) {
    var ref = this.props;
    var checked = ref.checked;
    var onChange = ref.onChange;
    var id = ref.id;
    onChange(!checked, event, id);
  };

  ReactSwitch.prototype.$onKeyDown = function $onKeyDown (event) {
    var ref = this.props;
    var checked = ref.checked;
    var onChange = ref.onChange;
    var id = ref.id;
    var ref$1 = this.state;
    var $isDragging = ref$1.$isDragging;
    // Trigger change on spacebar and enter keys (in violation of wai-aria spec).
    if ((event.keyCode === 32 || event.keyCode === 13) && !$isDragging) {
      event.preventDefault();
      onChange(!checked, event, id);
    }
  };

  ReactSwitch.prototype.render = function render () {
    var this$1 = this;

    var ref = this.props;
    var checked = ref.checked;
    var disabled = ref.disabled;
    var className = ref.className;
    var offColor = ref.offColor;
    var onColor = ref.onColor;
    var offHandleColor = ref.offHandleColor;
    var onHandleColor = ref.onHandleColor;
    var checkedIcon$$1 = ref.checkedIcon;
    var uncheckedIcon$$1 = ref.uncheckedIcon;
    var boxShadow = ref.boxShadow;
    var activeBoxShadow = ref.activeBoxShadow;
    var height = ref.height;
    var width = ref.width;
    var id = ref.id;
    var ariaLabelledby = ref["aria-labelledby"];
    var ariaLabel = ref["aria-label"];

    var ref$1 = this.state;
    var $pos = ref$1.$pos;
    var $isDragging = ref$1.$isDragging;
    var $hasOutline = ref$1.$hasOutline;

    var rootStyle = {
      position: "relative",
      display: "inline-block",
      textAlign: "left",
      opacity: disabled ? 0.5 : 1,
      borderRadius: height / 2,
      WebkitTransition: "opacity 0.25s",
      MozTransition: "opacity 0.25s",
      transition: "opacity 0.25s",
      touchAction: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };

    var backgroundStyle = {
      height: height,
      width: width,
      margin: Math.max(0, (this.$handleDiameter - height) / 2),
      position: "relative",
      background: getBackgroundColor(
        $pos,
        this.$checkedPos,
        this.$uncheckedPos,
        offColor,
        onColor
      ),
      borderRadius: height / 2,
      cursor: disabled ? "default" : "pointer",
      WebkitTransition: $isDragging ? null : "background 0.25s",
      MozTransition: $isDragging ? null : "background 0.25s",
      transition: $isDragging ? null : "background 0.25s"
    };

    var checkedIconStyle = {
      height: height,
      width: Math.min(
        height * 1.5,
        width - (this.$handleDiameter + height) / 2 + 1
      ),
      position: "relative",
      opacity:
        ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };

    var uncheckedIconStyle = {
      height: height,
      width: Math.min(
        height * 1.5,
        width - (this.$handleDiameter + height) / 2 + 1
      ),
      position: "absolute",
      opacity:
        1 -
        ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      right: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };

    var handleStyle = {
      height: this.$handleDiameter,
      width: this.$handleDiameter,
      background: getBackgroundColor(
        $pos,
        this.$checkedPos,
        this.$uncheckedPos,
        offHandleColor,
        onHandleColor
      ),
      cursor: disabled ? "default" : "pointer",
      display: "inline-block",
      borderRadius: "50%",
      position: "absolute",
      transform: ("translateX(" + $pos + "px)"),
      top: Math.max(0, (height - this.$handleDiameter) / 2),
      outline: 0,
      boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
      border: 0,
      WebkitTransition: $isDragging
        ? null
        : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      MozTransition: $isDragging
        ? null
        : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      transition: $isDragging
        ? null
        : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
    };

    return (
      React.createElement( 'div', { className: className, style: rootStyle },
        React.createElement( 'div', {
          className: "react-switch-bg", style: backgroundStyle, onClick: disabled ? null : this.$onClick },
          checkedIcon$$1 && React.createElement( 'div', { style: checkedIconStyle }, checkedIcon$$1),
          uncheckedIcon$$1 && (
            React.createElement( 'div', { style: uncheckedIconStyle }, uncheckedIcon$$1)
          )
        ),
        React.createElement( 'div', {
          className: "react-switch-handle", role: "checkbox", tabIndex: disabled ? null : 0, onMouseDown: disabled ? null : this.$onMouseDown, onTouchStart: disabled ? null : this.$onTouchStart, onTouchMove: disabled ? null : this.$onTouchMove, onTouchEnd: disabled ? null : this.$onTouchEnd, onTouchCancel: disabled ? null : this.$onTouchCancel, onKeyDown: this.$onKeyDown, onFocus: function () { return this$1.setState({ $hasOutline: true }); }, onBlur: function () { return this$1.setState({ $hasOutline: false }); }, style: handleStyle, id: id, 'aria-checked': checked, 'aria-disabled': disabled, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel })
      )
    );
  };

  return ReactSwitch;
}(React.Component));
ReactSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  offColor: hexColorPropType,
  onColor: hexColorPropType,
  offHandleColor: hexColorPropType,
  onHandleColor: hexColorPropType,
  handleDiameter: PropTypes.number,
  uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  boxShadow: PropTypes.string,
  activeBoxShadow: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  "aria-labelledby": PropTypes.string,
  "aria-label": PropTypes.string
};

ReactSwitch.defaultProps = {
  disabled: false,
  offColor: "#888",
  onColor: "#080",
  offHandleColor: "#fff",
  onHandleColor: "#fff",
  uncheckedIcon: uncheckedIcon,
  checkedIcon: checkedIcon,
  boxShadow: null,
  activeBoxShadow: "0 0 2px 3px #3bf",
  height: 28,
  width: 56
};

module.exports = ReactSwitch;

},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js"}],"../node_modules/react-switch/index.js":[function(require,module,exports) {
if ("development" === "production") {
  module.exports = require("./dist/react-switch.min.js");
} else {
  module.exports = require("./dist/react-switch.dev.js");
}
},{"./dist/react-switch.dev.js":"../node_modules/react-switch/dist/react-switch.dev.js"}],"component/lockscreen/Lockscreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _provider = require("../utils/provider");

var _thePlatform = require("the-platform");

var _reactSwitch = _interopRequireDefault(require("react-switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Lockscreen =
/*#__PURE__*/
function (_Component) {
  _inherits(Lockscreen, _Component);

  function Lockscreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Lockscreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Lockscreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      var setState = _this.context.setState;
      var value = e.target.value;
      setState({
        username: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (e) {
      var setState = _this.context.setState;
      e.preventDefault();
      setState({
        lock: false,
        hasRegister: true
      }, function (currentState) {
        console.log('statee after uupdate', currentState);
        var user = {
          username: currentState.username,
          hasRegister: currentState.hasRegister
        };
        localStorage.setItem('user', JSON.stringify(user));
      });
    });

    return _this;
  }

  _createClass(Lockscreen, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          state = _this$context.state,
          setState = _this$context.setState;
      var lockscreenClasses = "\n      lockscreen\n      bg-grey-lighter\n      w-full\n      h-screen\n      flex items-center justify-center\n    ";
      var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var month = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];
      var d = new Date();
      return _react.default.createElement("div", {
        className: lockscreenClasses
      }, _react.default.createElement(Background, {
        src: state.selectedWallpaper
      }), _react.default.createElement("div", {
        className: "lockscreen-inner relative py-4 px-10 pb-16 z-20 text-black bg-white shadow flex flex-col items-center justify-center"
      }, _react.default.createElement(Clock, {
        hours: "".concat(d.getHours(), ".").concat(d.getMinutes()),
        day: day[d.getDay()],
        date: d.getDate(),
        month: month[d.getMonth()]
      }), _react.default.createElement(SwitchConfig, {
        checked: state.configMode,
        title: "enable web config",
        onChange: function onChange() {
          return setState({
            configMode: !state.configMode
          });
        }
      }), _react.default.createElement(SwitchConfig, {
        checked: state.enableContextMenu,
        title: "enable context menu",
        onChange: function onChange() {
          return setState({
            enableContextMenu: !state.enableContextMenu
          });
        }
      }), _react.default.createElement(SwitchConfig, {
        checked: state.OSMode,
        title: "OS Mode",
        onChange: function onChange() {
          return setState({
            OSMode: !state.OSMode
          });
        }
      }), state.hasRegister ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h2", {
        className: "mt-10 capitalize"
      }, "hellow ", state.username), _react.default.createElement("button", {
        className: "w-full absolute pin-b pin-x py-3 bg-teal text-white capitalize text-sm mt-10",
        onClick: function onClick() {
          return setState({
            lock: false
          });
        }
      }, "unlock")) : _react.default.createElement("form", {
        onSubmit: this.onSubmit
      }, _react.default.createElement(Input, {
        onChange: this.onChange
      }))));
    }
  }]);

  return Lockscreen;
}(_react.Component);

exports.default = Lockscreen;

_defineProperty(Lockscreen, "contextType", _provider.AppContext);

function Background(_ref) {
  var src = _ref.src;
  return _react.default.createElement(_react.default.Suspense, {
    fallback: _react.default.createElement("h1", null, "loading...")
  }, _react.default.createElement(_thePlatform.Img, {
    src: src,
    className: "w-full h-full absolute pin-t pin-l",
    style: {
      objectFit: 'cover',
      objectPosition: 'center'
    }
  }));
}

function Input(_ref2) {
  var rest = Object.assign({}, _ref2);
  return _react.default.createElement("div", {
    className: "mb-4"
  }, _react.default.createElement("input", _extends({
    type: "text",
    placeholder: "username"
  }, rest, {
    className: "w-full focus:outline-none border-b py-2 px-3 capitalize font-sans"
  })));
}

function SwitchConfig(_ref3) {
  var onChange = _ref3.onChange,
      title = _ref3.title,
      checked = _ref3.checked,
      rest = _objectWithoutProperties(_ref3, ["onChange", "title", "checked"]);

  return _react.default.createElement("div", {
    className: "self-start w-full mb-4 font-bold flex justify-between"
  }, _react.default.createElement("span", {
    className: "text-sm mr-5 font-sans capitalize"
  }, title), _react.default.createElement(_reactSwitch.default, _extends({
    onChange: onChange,
    checked: checked,
    onColor: "#86d3ff",
    onHandleColor: "#2693e6",
    handleDiameter: 20,
    uncheckedIcon: false,
    checkedIcon: false,
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
    activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
    height: 10,
    width: 28,
    className: "react-switch",
    id: "material-switch"
  }, rest)));
}

function Clock(_ref4) {
  var hours = _ref4.hours,
      day = _ref4.day,
      date = _ref4.date,
      month = _ref4.month;
  return _react.default.createElement("div", {
    className: "lockscreen-clock flex flex-col items-center"
  }, _react.default.createElement("div", {
    className: "clock font-sans mb-5",
    style: {
      fontSize: 60
    }
  }, hours), _react.default.createElement("div", {
    className: "date mb-10"
  }, day, " , ", date, " ", month, "r"));
}
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","../utils/provider":"component/utils/provider.js","the-platform":"../node_modules/the-platform/index.js","react-switch":"../node_modules/react-switch/index.js"}],"C:/Users/sevta/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59958" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/sevta/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Lockscreen.e10fc59a.map