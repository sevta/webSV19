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
})({"component/OS/menubar/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/sevta/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"component/OS/tooltip/Tooltip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tooltip =
/*#__PURE__*/
function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "os-tool-tip p-3 bg-white rounded absolute pin-r text-blue-darker text-sm font-sans"
      }, this.props.children);
    }
  }]);

  return Tooltip;
}(_react.Component);

exports.default = Tooltip;
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js"}],"component/OS/CV/CV.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CV =
/*#__PURE__*/
function (_Component) {
  _inherits(CV, _Component);

  function CV() {
    _classCallCheck(this, CV);

    return _possibleConstructorReturn(this, _getPrototypeOf(CV).apply(this, arguments));
  }

  _createClass(CV, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "w-64 h-64 shadow-lg bg-white rounded p-3 z-40",
        style: {
          width: 400,
          height: 600
        }
      }, _react.default.createElement("div", {
        className: "cv-username"
      }, _react.default.createElement("div", {
        className: "text-xl uppercase border-2 border-grey-dark mx-auto text-center p-3"
      }, "sevta saputra")));
    }
  }]);

  return CV;
}(_react.Component);

exports.default = CV;
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js"}],"component/OS/menubar/Menubar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

require("./style.scss");

var _fi = require("react-icons/fi");

var _provider = require("../../utils/provider");

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

var _CV = _interopRequireDefault(require("../CV/CV"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var Menubar =
/*#__PURE__*/
function (_Component) {
  _inherits(Menubar, _Component);

  function Menubar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Menubar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Menubar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openResume", function () {
      var setState = _this.context.setState;
      setState({
        showWindow: true,
        windowContent: _react.default.createElement("div", {
          className: "resume-container"
        }, _react.default.createElement(_CV.default, null))
      });
    });

    return _this;
  }

  _createClass(Menubar, [{
    key: "render",
    value: function render() {
      var setState = this.context.setState;
      var classes = {
        menubar: "\n        menubar\n        w-full\n        fixed\n        pin-t pin-l\n        z-30\n        text-white px-6\n        font-sans\n        capitalize\n        flex \n        items-center\n      "
      };
      return _react.default.createElement("div", {
        className: classes.menubar
      }, _react.default.createElement("div", {
        className: "menubar-overlay"
      }), _react.default.createElement("div", {
        className: "text w-full list-menu flex items center justify-between "
      }, _react.default.createElement("div", {
        className: "menu-left flex items-center text-sm"
      }, _react.default.createElement(Menu, {
        name: _react.default.createElement(_fi.FiCircle, null),
        style: {
          paddingTop: 3
        }
      }), _react.default.createElement(Menu, {
        bold: true,
        name: "finder"
      }), _react.default.createElement(Menu, {
        name: "file"
      }), _react.default.createElement(Menu, {
        name: "photos"
      }), _react.default.createElement(Menu, {
        name: "about"
      }), _react.default.createElement(Menu, {
        name: "resume",
        onClick: this.openResume
      })), _react.default.createElement("div", {
        className: "menu-right"
      }, _react.default.createElement(Menu, {
        name: _react.default.createElement(_fi.FiLock, null),
        onClick: function onClick() {
          return setState({
            lock: true
          });
        },
        style: {
          paddingTop: 3
        }
      }))));
    }
  }]);

  return Menubar;
}(_react.Component);

exports.default = Menubar;

_defineProperty(Menubar, "contextType", _provider.AppContext);

function Menu(_ref) {
  var name = _ref.name,
      showSubMenu = _ref.showSubMenu,
      bold = _ref.bold,
      extendClasses = _ref.extendClasses,
      rest = _objectWithoutProperties(_ref, ["name", "showSubMenu", "bold", "extendClasses"]);

  return _react.default.createElement("div", _extends({
    className: "mr-8 relative cursor-pointer ".concat(bold ? 'font-bold' : null, " ").concat(extendClasses)
  }, rest), name, showSubMenu ? _react.default.createElement(_Tooltip.default, null) : null);
}
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","./style.scss":"component/OS/menubar/style.scss","react-icons/fi":"../node_modules/react-icons/fi/index.js","../../utils/provider":"component/utils/provider.js","../tooltip/Tooltip":"component/OS/tooltip/Tooltip.js","../CV/CV":"component/OS/CV/CV.js"}],"component/OS/dock/Dock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Dock =
/*#__PURE__*/
function (_Component) {
  _inherits(Dock, _Component);

  function Dock() {
    _classCallCheck(this, Dock);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dock).apply(this, arguments));
  }

  _createClass(Dock, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "os-dock-container fixed flex justify-center pin-b w-full text-center"
      }, _react.default.createElement("div", {
        className: "os-dock bg-white p-3 rounded"
      }, "dock"));
    }
  }]);

  return Dock;
}(_react.Component);

exports.default = Dock;
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js"}],"component/OS/contextmenu/ContextMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenuItem = ContextMenuItem;
exports.ContextMenu = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _provider = require("../../utils/provider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ContextMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(ContextMenu, _Component);

  function ContextMenu() {
    _classCallCheck(this, ContextMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContextMenu).apply(this, arguments));
  }

  _createClass(ContextMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y;
      return _react.default.createElement("div", {
        className: "rounded-sm text-xs shadow bg-white px-5 ",
        style: {
          position: 'absolute',
          top: "".concat(y, "px"),
          left: "".concat(x, "px")
        }
      }, this.props.children);
    }
  }]);

  return ContextMenu;
}(_react.Component);

exports.ContextMenu = ContextMenu;

_defineProperty(ContextMenu, "contextType", _provider.AppContext);

function ContextMenuItem(_ref) {
  var name = _ref.name,
      rest = _objectWithoutProperties(_ref, ["name"]);

  return _react.default.createElement("div", _extends({
    className: "contextmenu-item cursor-pointer my-3 font-sans"
  }, rest), name);
}
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","../../utils/provider":"component/utils/provider.js"}],"component/OS/desktopIcon/w-1.jpg":[function(require,module,exports) {
module.exports = "/w-1.1b949ef8.jpg";
},{}],"component/OS/desktopIcon/w-2.jpg":[function(require,module,exports) {
module.exports = "/w-2.525700bc.jpg";
},{}],"component/OS/desktopIcon/w-3.jpg":[function(require,module,exports) {
module.exports = "/w-3.2a676943.jpg";
},{}],"component/OS/desktopIcon/w-4.jpg":[function(require,module,exports) {
module.exports = "/w-4.c0353b21.jpg";
},{}],"component/OS/desktopIcon/w-5.jpg":[function(require,module,exports) {
module.exports = "/w-5.03510c1d.jpg";
},{}],"component/OS/desktopIcon/*.jpg":[function(require,module,exports) {
module.exports = {
  "w-1": require("./w-1.jpg"),
  "w-2": require("./w-2.jpg"),
  "w-3": require("./w-3.jpg"),
  "w-4": require("./w-4.jpg"),
  "w-5": require("./w-5.jpg")
};
},{"./w-1.jpg":"component/OS/desktopIcon/w-1.jpg","./w-2.jpg":"component/OS/desktopIcon/w-2.jpg","./w-3.jpg":"component/OS/desktopIcon/w-3.jpg","./w-4.jpg":"component/OS/desktopIcon/w-4.jpg","./w-5.jpg":"component/OS/desktopIcon/w-5.jpg"}],"component/OS/desktopIcon/DesktopIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _ = _interopRequireDefault(require("./*.jpg"));

var _provider = require("../../utils/provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var DesktopIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(DesktopIcon, _Component);

  function DesktopIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DesktopIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DesktopIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      thumbnail: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      Object.keys(_.default).map(function (key) {
        _this.state.thumbnail.push({
          name: key,
          img: _.default[key]
        });
      });
      console.log('thumb', _.default);

      _this.setState({
        thumbnail: _this.state.thumbnail
      }, function () {
        setTimeout(function () {
          var el = document.querySelector('#thumbnail');
          console.log('el', el);
        }, 1000);
      });

      document.body.addEventListener('drop', _this.onDrop, false);
      document.body.addEventListener('dragover', _this.onDragOver, false);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDragOver", function (e) {
      console.log('dragover', e);
      e.preventDefault();
      return false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "preview", function (e) {
      var _this$context = _this.context,
          setState = _this$context.setState,
          state = _this$context.state;
      var selectImgSrc = e.target.getAttribute('src');
      var origin = window.location.origin;
      var imgPath = origin + selectImgSrc;
      console.log('state task', state.taskBackground);

      if (state.taskBackground.length !== 0) {
        state.taskBackground.map(function (task, i) {
          console.log('task', task);

          if (task.type == 'img') {
            // state.taskBackground.type['img'].component = 'bleh'
            console.log(task.type);
            state.taskBackground[i].component = 'bleh';
          } else {
            state.taskBackground.push({
              id: state.taskBackground.length + 1,
              type: 'img',
              component: null
            });
          }

          setState({
            taskBackground: state.taskBackground
          }, function (currState) {
            return console.log('taskbar', currState);
          });
        });
      } else {
        console.log('push here');
        state.taskBackground.push({
          id: state.taskBackground.length + 1,
          type: 'img',
          component: null
        });
        setState({
          taskBackground: state.taskBackground
        }, function (currState) {
          return console.log('taskbar', currState);
        });
      }

      setState({
        previewWallpaper: imgPath
      }, function (currentState) {
        setState({
          showWindow: true,
          windowContent: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
            className: "window-layout-preview mt-5 px-3 rounded overflow-hidden",
            style: {
              width: 550,
              height: 300
            }
          }, _react.default.createElement("img", {
            src: currentState.previewWallpaper,
            className: "w-full h-full rounded",
            style: {
              objectFit: 'cover',
              objectPosition: 'center'
            }
          })), _react.default.createElement("div", {
            className: "w-full text-center mt-5 font-bold img-name"
          }, "w-1"), _react.default.createElement("button", {
            onClick: function onClick() {
              return setState({
                selectedWallpaper: currentState.previewWallpaper
              });
            },
            className: "w-full focus:outline-none text-sm font-sans text-center mt-5 capitalize mx-auto"
          }, "set as wallpaper"))
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDrop", function (e) {
      console.log('drop', e);
      var offset = e.dataTransfer.getData('text/plain').split(',');
      console.log('offset', offset);
      var dm = document.querySelector('#thumbnail');
      console.log('dm', dm);
      dm.style.left = e.clientX + parseInt(offset[0], 10) + 'px';
      dm.style.top = e.clientY + parseInt(offset[1], 10) + 'px';
      e.preventDefault();
      return false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDragStart", function (e) {
      console.log('drag start');
      var style = window.getComputedStyle(e.target, null);
      e.dataTransfer.setData('text/plain', parseInt(style.getPropertyValue('left'), 10) - e.clientX + ',' + (parseInt(style.getPropertyValue('top'), 10) - e.clientY) + ',' + e.target.getAttribute('data-item'));
      console.log('event', e);
      console.log('dragStart()', style);
    });

    return _this;
  }

  _createClass(DesktopIcon, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var thumbnail = this.state.thumbnail;
      return _react.default.createElement("div", {
        className: "os-desktopicon mt-5 ml-5 w-full flex flex-col flex-wrap fixed",
        style: {
          height: '90vh',
          width: 'auto'
        }
      }, thumbnail.map(function (thumb, i) {
        return _react.default.createElement(Thumbnail, {
          draggable: true,
          onClick: _this2.preview,
          extendClasses: "thumb-dekstop",
          "data-item": "0",
          ondrag: _this2.onDragStart,
          name: thumb.name,
          img: thumb.img,
          key: i + 1
        });
      }));
    }
  }]);

  return DesktopIcon;
}(_react.Component);

exports.default = DesktopIcon;

_defineProperty(DesktopIcon, "contextType", _provider.AppContext);

function Thumbnail(_ref) {
  var name = _ref.name,
      img = _ref.img,
      extendClasses = _ref.extendClasses,
      ondrag = _ref.ondrag,
      rest = _objectWithoutProperties(_ref, ["name", "img", "extendClasses", "ondrag"]);

  return _react.default.createElement("div", _extends({
    id: "thumbnail",
    draggable: true,
    onDragStart: ondrag,
    className: "w-10 z-20 relative flex items-center justify-center h-10 cursor-pointer rounded bg-white ".concat(extendClasses),
    style: {
      margin: 20
    }
  }, rest), _react.default.createElement("div", {
    className: "thumb-img-container overflow-hidden rounded shadow w-full h-full"
  }, _react.default.createElement("img", {
    src: img,
    alt: "",
    className: "w-full h-full",
    style: {
      objectFit: 'cover',
      objectPosition: 'center'
    }
  })), _react.default.createElement("div", {
    className: "thumb-name absolute pin-b -mb-6 text-sm font-sans"
  }, name));
}
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","./*.jpg":"component/OS/desktopIcon/*.jpg","../../utils/provider":"component/utils/provider.js"}],"component/OS/windowLayout/WindowLayout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _provider = require("../../utils/provider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WindowLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(WindowLayout, _Component);

  function WindowLayout() {
    _classCallCheck(this, WindowLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindowLayout).apply(this, arguments));
  }

  _createClass(WindowLayout, [{
    key: "render",
    value: function render() {
      var setState = this.context.setState;
      var windowLayoutStyle = {
        position: 'absolute ',
        top: "".concat(this.props.y, "px"),
        left: "".concat(this.props.x, "px"),
        backgroundColor: 'whitesmoke'
      };
      return _react.default.createElement("div", {
        className: "window-layout bg-white absolute px-3 pb-5 pt-8 rounded shadow-lg overflow-hidden",
        style: windowLayoutStyle
      }, _react.default.createElement(WindowBar, {
        close: function close() {
          return setState({
            showWindow: false,
            windowContent: null
          });
        }
      }), this.props.children);
    }
  }]);

  return WindowLayout;
}(_react.Component);

exports.default = WindowLayout;

_defineProperty(WindowLayout, "contextType", _provider.AppContext);

function WindowBar(_ref) {
  var close = _ref.close;
  return _react.default.createElement("div", {
    className: "window-bar flex w-full justify-end px-2 absolute pin-t pin-l font-bold",
    style: {
      background: 'steelblue',
      color: 'white'
    }
  }, _react.default.createElement("div", {
    className: "mx-2 my-1 cursor-pointer",
    onClick: close
  }, "x"));
}
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","../../utils/provider":"component/utils/provider.js"}],"component/OS/layout/OsLayout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _reactSpring = require("react-spring");

var _Menubar = _interopRequireDefault(require("../menubar/Menubar"));

var _Dock = _interopRequireDefault(require("../dock/Dock"));

var _ContextMenu = require("../contextmenu/ContextMenu");

var _provider = require("../../utils/provider");

var _DesktopIcon = _interopRequireDefault(require("../desktopIcon/DesktopIcon"));

var _WindowLayout = _interopRequireDefault(require("../windowLayout/WindowLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var OsLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(OsLayout, _Component);

  function OsLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OsLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OsLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showContextMenuDesktop: false,
      contextMenu: 'desktop',
      x: 0,
      y: 0,
      selectedWallpaper: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      var state = _this.context.state;

      if (state.enableContextMenu) {
        document.querySelector('.os-desktopicon').addEventListener('contextmenu', _this.contextMenuThumbnail, false);
        document.querySelector('.desktop-background').addEventListener('contextmenu', _this.contextMenu, false);
        document.addEventListener('click', _this.removeContextMenu, false);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      document.querySelector('.desktop-background').removeEventListener('contextmenu', _this.contextMenu);
      document.querySelector('.os-desktopicon').removeEventListener('contextmenu', _this.contextMenu);
      document.removeEventListener('click', _this.removeContextMenu);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeContextMenu", function () {
      _this.setState({
        showContextMenuDesktop: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "contextMenuThumbnail", function (e) {
      e.preventDefault();
      var selectImgSrc = e.target.getAttribute('src');
      var origin = window.location.origin;
      var imgPath = origin + selectImgSrc;
      console.log('event', imgPath);

      _this.setState({
        showContextMenuDesktop: true,
        selectedWallpaper: imgPath,
        contextMenu: 'desktop icon',
        x: e.x,
        y: e.y
      }, function () {
        return console.log(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "contextMenu", function (e) {
      e.preventDefault();

      _this.setState({
        showContextMenuDesktop: true,
        contextMenu: 'desktop',
        x: e.x,
        y: e.y
      }, function () {
        return console.log(_this.state);
      });

      console.log(e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "preview", function () {
      var _this$context = _this.context,
          setState = _this$context.setState,
          state = _this$context.state;
      setState({
        showWindow: true,
        windowContent: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: "window-layout-preview mt-5 px-3 rounded overflow-hidden",
          style: {
            width: 550,
            height: 300
          }
        }, _react.default.createElement("img", {
          src: _this.state.selectedWallpaper,
          className: "w-full h-full rounded",
          style: {
            objectFit: 'cover',
            objectPosition: 'center'
          }
        })), _react.default.createElement("div", {
          className: "w-full text-center mt-5 font-bold img-name"
        }, "w-1"), _react.default.createElement("button", {
          onClick: function onClick() {
            return setState({
              selectedWallpaper: _this.state.selectedWallpaper
            });
          },
          className: "w-full focus:outline-none text-sm font-sans text-center mt-5 capitalize mx-auto"
        }, "set as wallpaper"))
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openProperties", function () {
      var setState = _this.context.setState;
      setState({
        showWindow: true,
        windowContent: _react.default.createElement("div", {
          className: "p-10"
        }, _react.default.createElement("div", {
          className: "text-xl font-sans font-bold"
        }, "S-OS 0.2"))
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showContextMenu", function () {
      var setState = _this.context.setState;

      switch (_this.state.contextMenu) {
        case 'desktop':
          {
            return _react.default.createElement(_ContextMenu.ContextMenu, {
              x: _this.state.x,
              y: _this.state.y
            }, _react.default.createElement(_ContextMenu.ContextMenuItem, {
              name: "context"
            }), _react.default.createElement(_ContextMenu.ContextMenuItem, {
              name: "shut down",
              onClick: function onClick() {
                return setState({
                  lock: true
                });
              }
            }), _react.default.createElement(_ContextMenu.ContextMenuItem, {
              name: "properties",
              onClick: function onClick() {
                return _this.openProperties();
              }
            }));
          }

        case 'desktop icon':
          {
            return _react.default.createElement(_ContextMenu.ContextMenu, {
              x: _this.state.x,
              y: _this.state.y
            }, _react.default.createElement(_ContextMenu.ContextMenuItem, {
              name: "preview",
              onClick: function onClick() {
                return _this.preview();
              }
            }), _react.default.createElement(_ContextMenu.ContextMenuItem, {
              name: "set wallpaper",
              onClick: function onClick() {
                return setState({
                  selectedWallpaper: _this.state.selectedWallpaper
                }, function (state) {
                  return console.log(state);
                });
              }
            }));
          }

        default:
          {
            return _react.default.createElement(_ContextMenu.ContextMenu, {
              x: _this.state.x,
              y: _this.state.y
            }, _react.default.createElement(_ContextMenu.ContextMenuItem, {
              name: "context"
            }), _react.default.createElement(_ContextMenu.ContextMenuItem, {
              name: "shut down",
              onClick: function onClick() {
                return setState({
                  lock: true
                });
              }
            }), _react.default.createElement(_ContextMenu.ContextMenuItem, {
              name: "properties"
            }));
          }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animatedOnStart", function () {
      document.body.style.overflow = 'hidden';
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animatedEnd", function () {
      document.body.style.overflow = 'auto';
    });

    return _this;
  }

  _createClass(OsLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var state = this.context.state;
      var springConfig = {
        config: _reactSpring.config.slow,
        from: {
          opacity: 0,
          transform: 'scale(1.9)',
          transformOrigin: 'center'
        },
        to: {
          opacity: 1,
          transform: 'scale(1)',
          transformOrigin: 'center'
        },
        onStart: function onStart() {
          return _this2.animatedOnStart();
        },
        onRest: function onRest() {
          return _this2.animatedEnd();
        }
      };
      return _react.default.createElement(_reactSpring.Spring, springConfig, function (props) {
        return _react.default.createElement(_reactSpring.animated.div, {
          style: props,
          className: "oslayout pt-10 h-screen"
        }, _react.default.createElement(_Menubar.default, null), _react.default.createElement(_DesktopIcon.default, null), state.showWindow && _react.default.createElement(_WindowLayout.default, {
          x: "300",
          y: "100"
        }, state.windowContent), _this2.state.showContextMenuDesktop && _this2.showContextMenu(), _this2.props.children);
      });
    }
  }]);

  return OsLayout;
}(_react.Component);

exports.default = OsLayout;

_defineProperty(OsLayout, "contextType", _provider.AppContext);
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","react-spring":"../node_modules/react-spring/web.js","../menubar/Menubar":"component/OS/menubar/Menubar.js","../dock/Dock":"component/OS/dock/Dock.js","../contextmenu/ContextMenu":"component/OS/contextmenu/ContextMenu.js","../../utils/provider":"component/utils/provider.js","../desktopIcon/DesktopIcon":"component/OS/desktopIcon/DesktopIcon.js","../windowLayout/WindowLayout":"component/OS/windowLayout/WindowLayout.js"}],"component/osPages/wallpaper.jpeg":[function(require,module,exports) {
module.exports = "/wallpaper.84d27197.jpeg";
},{}],"component/OS/notepad/Notepad.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _provider = require("../../utils/provider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Notepad =
/*#__PURE__*/
function (_Component) {
  _inherits(Notepad, _Component);

  function Notepad() {
    _classCallCheck(this, Notepad);

    return _possibleConstructorReturn(this, _getPrototypeOf(Notepad).apply(this, arguments));
  }

  _createClass(Notepad, [{
    key: "render",
    value: function render() {
      var state = this.context.state;
      return _react.default.createElement("div", {
        className: "fixed pin-r mt-20 p-5 s-notepad bg-yellow-dark shadow mr-10 text-grey-darkest"
      }, _react.default.createElement("div", {
        className: "notepad-text text-sm rounded-sm capitalize leading-normal"
      }, _react.default.createElement("div", null, "Hii ", state.username), _react.default.createElement("div", null, "im front end developer based on jakarta"), _react.default.createElement("div", null, "nice to meet you")));
    }
  }]);

  return Notepad;
}(_react.Component);

exports.default = Notepad;

_defineProperty(Notepad, "contextType", _provider.AppContext);
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","../../utils/provider":"component/utils/provider.js"}],"component/osPages/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _OsLayout = _interopRequireDefault(require("../OS/layout/OsLayout"));

var _wallpaper = _interopRequireDefault(require("./wallpaper.jpeg"));

var _provider = require("../utils/provider");

var _Notepad = _interopRequireDefault(require("../OS/notepad/Notepad"));

var _CV = _interopRequireDefault(require("../OS/CV/CV"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var wall1 = 'https://i.imgur.com/aodIB86.jpg';
var wall2 = 'https://images3.alphacoders.com/621/621682.jpg';

var OsPage =
/*#__PURE__*/
function (_Component) {
  _inherits(OsPage, _Component);

  function OsPage() {
    _classCallCheck(this, OsPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(OsPage).apply(this, arguments));
  }

  _createClass(OsPage, [{
    key: "render",
    value: function render() {
      var state = this.context.state;
      var desktopStyle = {
        position: 'absolute',
        top: 0,
        height: '100vh',
        width: '100%',
        zIndex: -1
      };
      return _react.default.createElement(_OsLayout.default, null, _react.default.createElement("div", {
        className: "desktop-background",
        style: desktopStyle
      }, _react.default.createElement("img", {
        src: state.selectedWallpaper,
        alt: "",
        className: "w-full h-full absolute pin-t pin-l",
        style: {
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1
        }
      }), _react.default.createElement(_Notepad.default, null)));
    }
  }]);

  return OsPage;
}(_react.Component);

exports.default = OsPage;

_defineProperty(OsPage, "contextType", _provider.AppContext);
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","../OS/layout/OsLayout":"component/OS/layout/OsLayout.js","./wallpaper.jpeg":"component/osPages/wallpaper.jpeg","../utils/provider":"component/utils/provider.js","../OS/notepad/Notepad":"component/OS/notepad/Notepad.js","../OS/CV/CV":"component/OS/CV/CV.js"}],"C:/Users/sevta/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/osPages.77d7fc04.map