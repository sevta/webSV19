parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"G+mb":[function(require,module,exports) {

},{}],"b9MX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("@emotion/core"),t=n(require("react")),r=require("../utils/provider");function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=u(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?b(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}require("./style.scss");var h=function(e){function r(){var e,t;c(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return m(b(b(t=f(this,(e=s(r)).call.apply(e,[this].concat(o))))),"state",{username:"",password:""}),m(b(b(t)),"handleChange",function(e){var r=e.target.name,n=e.target.value;t.setState(m({},r,n),function(){return console.log(t.state)})}),m(b(b(t)),"closePopup",function(){(0,t.context.setState)({showPopup:!1})}),t}return y(r,t.Component),p(r,[{key:"render",value:function(){return t.default.createElement("div",{className:"popup fixed pin-y pin-x flex items-center justify-center z-50",onClick:this.closePopup},t.default.createElement("div",{className:"inner-popup rounded bg-white w-64-sm py-3 px-5",onClick:function(e){return e.stopPropagation()}},t.default.createElement("div",{className:"form"},t.default.createElement("form",null,t.default.createElement(O,{type:"text",placeholder:"username",name:"username",onChange:this.handleChange}),t.default.createElement(O,{type:"password",placeholder:"password",name:"password",onChange:this.handleChange})))))}}]),r}();function O(e){var r=e.type,n=e.placeholder,u=a(e,["type","placeholder"]);return t.default.createElement("div",{className:"mb-2"},t.default.createElement("input",o({type:r,placeholder:n,className:"border p-3"},u)))}exports.default=h,m(h,"contextType",r.AppContext);
},{"@emotion/core":"SBTf","react":"1n8/","../utils/provider":"ZaPr","./style.scss":"G+mb"}]},{},[], null)
//# sourceMappingURL=Popup.dd48b152.map