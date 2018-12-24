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
})({"component/pages/home/gallery/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/sevta/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"component/pages/home/gallery/galleryImg/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/sevta/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"component/pages/home/gallery/galleryImg/galleryImg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GalleryImg;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _thePlatform = require("the-platform");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Spinner() {
  return _react.default.createElement("img", {
    style: {
      width: 140,
      height: 140
    },
    src: "https://cdn.dribbble.com/users/372537/screenshots/2065624/icons_km_weather.gif"
  });
}

function GalleryImg(_ref) {
  var src = _ref.src;
  return _react.default.createElement(_react.default.Suspense, {
    fallback: _react.default.createElement(Spinner, null),
    maxDuration: 400
  }, _react.default.createElement(_thePlatform.Img, {
    className: "gallery-img m-2 w-full h-full flex-1 rounded",
    style: {
      objectFit: 'cover',
      objectPosition: 'center'
    },
    src: src
  }));
}
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","the-platform":"../node_modules/the-platform/index.js","./style.scss":"component/pages/home/gallery/galleryImg/style.scss"}],"component/pages/home/gallery/gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

require("./style.scss");

var _galleryImg = _interopRequireDefault(require("./galleryImg/galleryImg"));

var _provider = require("../../../utils/provider");

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

var Gallery =
/*#__PURE__*/
function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gallery).apply(this, arguments));
  }

  _createClass(Gallery, [{
    key: "render",
    value: function render() {
      var state = this.context.state;
      return _react.default.createElement("div", {
        className: "mt-4"
      }, _react.default.createElement("div", {
        className: "gallery-items-container w-100 flex flex-wrap"
      }, state.galleryItems.map(function (item, index) {
        return _react.default.createElement(_galleryImg.default, {
          key: index,
          src: item.src
        });
      })));
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

_defineProperty(Gallery, "contextType", _provider.AppContext);
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","./style.scss":"component/pages/home/gallery/style.scss","./galleryImg/galleryImg":"component/pages/home/gallery/galleryImg/galleryImg.js","../../../utils/provider":"component/utils/provider.js"}],"component/header/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/sevta/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"component/header/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

require("./style.scss");

var _thePlatform = require("the-platform");

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

var header =
/*#__PURE__*/
function (_Component) {
  _inherits(header, _Component);

  function header() {
    _classCallCheck(this, header);

    return _possibleConstructorReturn(this, _getPrototypeOf(header).apply(this, arguments));
  }

  _createClass(header, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "header w-full realtive h-screen flex items-center justify-center mt-10 mb-16"
      }, _react.default.createElement(_react.default.Suspense, {
        fallback: _react.default.createElement("h1", null, "Loading..."),
        maxDuration: 400
      }, _react.default.createElement(_thePlatform.Img, {
        className: "w-full h-full",
        style: {
          objectFit: 'cover',
          objectPosition: 'center'
        },
        src: 'https://images.pexels.com/photos/311716/pexels-photo-311716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      })));
    }
  }]);

  return header;
}(_react.Component);

exports.default = header;
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","./style.scss":"component/header/style.scss","the-platform":"../node_modules/the-platform/index.js"}],"component/section/Section.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Section;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Section(_ref) {
  var title = _ref.title,
      divider = _ref.divider,
      children = _ref.children,
      textLeft = _ref.textLeft,
      extendClass = _ref.extendClass,
      extendClassText = _ref.extendClassText,
      rest = _objectWithoutProperties(_ref, ["title", "divider", "children", "textLeft", "extendClass", "extendClassText"]);

  return _react.default.createElement("div", _extends({
    className: "section container mx-auto mt-20 ".concat(extendClass)
  }, rest), _react.default.createElement("div", {
    className: "text-3xl ".concat(textLeft ? 'text-left' : 'text-center', " text-grey-darkest font-sans font-bold uppercase mb-10 ").concat(extendClassText)
  }, title), divider && _react.default.createElement("div", {
    className: "divider my-16 w-16 h-2 bg-grey-dark mx-auto"
  }), children);
}
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js"}],"component/pages/home/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _provider = require("../../utils/provider");

var _gallery = _interopRequireDefault(require("./gallery/gallery"));

var _Layout = _interopRequireDefault(require("../../../component/layout/Layout"));

var _header = _interopRequireDefault(require("../../header/header"));

var _Section = _interopRequireDefault(require("../../section/Section"));

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

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      console.log(this.context);
      document.title = 'SV19';
      setTimeout(function () {
        _this.context.setState({
          username: 'sev'
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_Layout.default, null, _react.default.createElement(_header.default, null), _react.default.createElement("div", {
        className: "home-wrapper mt-10",
        divider: false
      }, _react.default.createElement(_Section.default, {
        title: "blog",
        textLeft: true,
        extendClassText: "pl-4"
      }, _react.default.createElement("div", {
        className: "blog-container flex"
      }, _react.default.createElement("div", {
        className: "mb-10 p-4"
      }, _react.default.createElement("div", {
        className: "text-xl font-sans capitalize font-bold mb-5 text-grey-darker"
      }, "Last day at aitindo"), _react.default.createElement("div", {
        className: "text-sm text-grey-dark font-sans leading-normal"
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ex. Eligendi, excepturi eaque exercitationem harum dolore magnam sed ab, voluptatibus molestiae ullam maxime, quo error necessitatibus a sint commodi veniam."), _react.default.createElement("button", {
        className: "rounded py-1 px-2 bg-grey-darker text-white cursor-pointer mt-5 text-sm capitalize",
        style: {
          backgroundColor: 'turquoise'
        }
      }, "continue reading")), _react.default.createElement("div", {
        className: "mb-10 p-4"
      }, _react.default.createElement("div", {
        className: "text-xl font-sans capitalize font-bold mb-5 text-grey-darker"
      }, "First day at Tokopedia"), _react.default.createElement("div", {
        className: "text-sm text-grey-dark font-sans leading-normal"
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ex. Eligendi, excepturi eaque exercitationem harum dolore magnam sed ab, voluptatibus molestiae ullam maxime, quo error necessitatibus a sint commodi veniam."), _react.default.createElement("button", {
        className: "rounded py-1 px-2 bg-grey-darker text-white cursor-pointer mt-5 text-sm capitalize",
        style: {
          backgroundColor: 'turquoise'
        }
      }, "continue reading")), _react.default.createElement("div", {
        className: "mb-10 p-4"
      }, _react.default.createElement("div", {
        className: "text-xl font-sans capitalize font-bold mb-5 text-grey-darker"
      }, "First day at Tokopedia"), _react.default.createElement("div", {
        className: "text-sm text-grey-dark font-sans leading-normal"
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ex. Eligendi, excepturi eaque exercitationem harum dolore magnam sed ab, voluptatibus molestiae ullam maxime, quo error necessitatibus a sint commodi veniam."), _react.default.createElement("button", {
        className: "rounded py-1 px-2 bg-grey-darker text-white cursor-pointer mt-5 text-sm capitalize",
        style: {
          backgroundColor: 'turquoise'
        }
      }, "continue reading")))), _react.default.createElement("div", {
        className: "flex items-center justify-center"
      }, _react.default.createElement("div", {
        className: "divider my-16 w-16 h-2 bg-grey-darker mr-3",
        style: {
          backgroundColor: 'black',
          borderRadius: 4
        }
      }), _react.default.createElement("div", {
        className: "divider my-16 w-6 mr-3 h-2 bg-grey-darker",
        style: {
          backgroundColor: 'black',
          borderRadius: 4
        }
      }), _react.default.createElement("div", {
        className: "divider my-16 w-3 h-2 bg-grey-darker",
        style: {
          backgroundColor: 'black',
          borderRadius: 4
        }
      })), _react.default.createElement(_Section.default, {
        title: "portofolio",
        divider: false,
        textLeft: true
      }, _react.default.createElement(_gallery.default, null))));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

_defineProperty(Home, "contextType", _provider.AppContext);
},{"@emotion/core":"../node_modules/@emotion/core/dist/core.esm.js","react":"../node_modules/react/index.js","../../utils/provider":"component/utils/provider.js","./gallery/gallery":"component/pages/home/gallery/gallery.js","../../../component/layout/Layout":"component/layout/Layout.js","../../header/header":"component/header/header.js","../../section/Section":"component/section/Section.js"}],"C:/Users/sevta/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/home.50513b02.map