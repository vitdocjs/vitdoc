var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var modules$1 = window["React"];
const Fragment = modules$1["Fragment"];
const StrictMode = modules$1["StrictMode"];
const Profiler = modules$1["Profiler"];
const Suspense = modules$1["Suspense"];
const Children = modules$1["Children"];
const Component = modules$1["Component"];
const PureComponent = modules$1["PureComponent"];
const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = modules$1["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"];
const cloneElement = modules$1["cloneElement"];
const createContext = modules$1["createContext"];
const createElement$1 = modules$1["createElement"];
const createFactory = modules$1["createFactory"];
const createRef = modules$1["createRef"];
const forwardRef$2 = modules$1["forwardRef"];
const isValidElement = modules$1["isValidElement"];
const lazy = modules$1["lazy"];
const memo = modules$1["memo"];
const useCallback = modules$1["useCallback"];
const useContext$1 = modules$1["useContext"];
const useDebugValue = modules$1["useDebugValue"];
const useEffect = modules$1["useEffect"];
const useImperativeHandle = modules$1["useImperativeHandle"];
const useLayoutEffect = modules$1["useLayoutEffect"];
const useMemo = modules$1["useMemo"];
const useReducer = modules$1["useReducer"];
const useRef = modules$1["useRef"];
const useState = modules$1["useState"];
const version = modules$1["version"];
var react_1a37f6a0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Fragment,
  StrictMode,
  Profiler,
  Suspense,
  Children,
  Component,
  PureComponent,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cloneElement,
  createContext,
  createElement: createElement$1,
  createFactory,
  createRef,
  forwardRef: forwardRef$2,
  isValidElement,
  lazy,
  memo,
  useCallback,
  useContext: useContext$1,
  useDebugValue,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  version,
  "default": modules$1
});
var modules = window["ReactDOM"];
modules["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"];
modules["createPortal"];
modules["findDOMNode"];
modules["flushSync"];
modules["hydrate"];
modules["render"];
modules["unmountComponentAtNode"];
modules["unstable_batchedUpdates"];
modules["unstable_createPortal"];
modules["unstable_renderSubtreeIntoContainer"];
modules["version"];
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a;
}
var lib$1 = {};
Object.defineProperty(lib$1, "__esModule", {
  value: true
});
lib$1.makeXMLhttp = makeXMLhttp;
lib$1.getMockPath = getMockPath;
var _default$c = lib$1.default = mtopHook;
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function makeXMLhttp(ob) {
  var realXhr = "RealXMLHttpRequest";
  ob.hookAjax = function(proxy) {
    window[realXhr] = window[realXhr] || XMLHttpRequest;
    window.XMLHttpRequest = function() {
      var xhr = new window[realXhr]();
      for (var attr in xhr) {
        var type2 = "";
        try {
          type2 = _typeof$1(xhr[attr]);
        } catch (e2) {
        }
        if (type2 === "function") {
          this[attr] = hookFunction(attr);
        } else {
          Object.defineProperty(this, attr, {
            get: getterFactory(attr),
            set: setterFactory(attr),
            enumerable: true
          });
        }
      }
      this.xhr = xhr;
    };
    function getterFactory(attr) {
      return function() {
        var v2 = this.hasOwnProperty(attr + "_") ? this[attr + "_"] : this.xhr[attr];
        var attrGetterHook = (proxy[attr] || {})["getter"];
        return attrGetterHook && attrGetterHook(v2, this) || v2;
      };
    }
    function setterFactory(attr) {
      return function(v2) {
        var xhr = this.xhr;
        var that = this;
        var hook = proxy[attr];
        if (typeof hook === "function") {
          xhr[attr] = function() {
            proxy[attr](that) || v2.apply(xhr, arguments);
          };
        } else {
          var attrSetterHook = (hook || {})["setter"];
          v2 = attrSetterHook && attrSetterHook(v2, that) || v2;
          try {
            xhr[attr] = v2;
          } catch (e2) {
            this[attr + "_"] = v2;
          }
        }
      };
    }
    function hookFunction(fun) {
      return function() {
        var args = [].slice.call(arguments);
        if (proxy[fun] && proxy[fun].call(this, args, this.xhr)) {
          return;
        }
        return this.xhr[fun].apply(this.xhr, args);
      };
    }
    return window[realXhr];
  };
  ob.unHookAjax = function() {
    if (window[realXhr])
      window.XMLHttpRequest = window[realXhr];
    window[realXhr] = void 0;
  };
  ob["default"] = ob;
}
function getMockPath() {
  var key = "_LSC_COMP_MOCK_HOST";
  var mockPath = localStorage.getItem(key) || window.__mockPath || "https://mocks.alibaba-inc.com/mock/astore4dada/";
  console.log("\u7EC4\u4EF6\u4E2D\u8BF7\u6C42\u5C06\u4F1AMock\u8F6C\u53D1\u5230\u3010 ".concat(mockPath, " \u3011"));
  console.log("\u53EF\u4EE5\u4F7F\u7528 setMockPath(path) \u8FDB\u884C\u8BBE\u7F6E");
  window.setMockPath = function(value) {
    localStorage.setItem(key, value);
  };
  return mockPath;
}
function mtopHook() {
  var xmlModule = {};
  makeXMLhttp(xmlModule);
  var hooks = {};
  var requestArr = [];
  var mtopArr = [];
  var mockPath = getMockPath();
  var responseHandler = function responseHandler2(res, xhr) {
    var responseURL = xhr.responseURL;
    if (/apps\/mtop\/metadata/.test(responseURL)) {
      return '{"errMsg":"null. ErrTrace:null","module":{"mainDomain":"' + location.host + '","prefix":"mock_mtop","subDomain":""},"success":true,"successAndHasValue":true}';
    }
    if (requestArr.some(function(requestUrl) {
      return responseURL.includes(requestUrl);
    })) {
      var isMtop = mtopArr.some(function(url) {
        return new RegExp(url).test(responseURL);
      });
      if (!isMtop) {
        return res;
      }
      try {
        var responseResult = JSON.parse(res);
        return JSON.stringify({
          api: responseURL,
          data: responseResult,
          ret: ["SUCCESS::MOCK\u6570\u636E"],
          v: "1.0"
        });
      } catch (e2) {
        return res;
      }
    }
  };
  hooks.open = function(arg) {
    var mtopDomain = "mock_mtop." + location.host;
    if (new RegExp(mtopDomain).test(arg[1])) {
      var _arg = _slicedToArray(arg, 2), url = _arg[1];
      var _ref = url.match(new RegExp("".concat(mtopDomain, "\\/h5\\/(.+?)\\/"))) || [], _ref2 = _slicedToArray(_ref, 2), mtopKey = _ref2[1];
      var forwardUrl = "".concat(mockPath).concat(mtopKey);
      console.log("Mtop\u8BF7\u6C42\u5C06\u88AB\u52AB\u6301\u8F6C\u53D1\u81F3\uFF1A", forwardUrl);
      requestArr.push(forwardUrl);
      if (/mock_mtop/.test(arg[1])) {
        mtopArr.push(forwardUrl);
      }
      arg[1] = forwardUrl;
    }
  };
  hooks.status = {
    getter: function getter(res, xhr) {
      var responseURL = xhr.responseURL;
      if (/apps\/mtop\/metadata/.test(responseURL)) {
        return 200;
      }
      return res;
    }
  };
  hooks.response = {
    getter: responseHandler
  };
  hooks.responseText = {
    getter: responseHandler
  };
  xmlModule.hookAjax(hooks);
}
const { Table } = window.antd;
function renderProperty({ properties }) {
  if (!properties) {
    return null;
  }
  const { props = {} } = properties;
  const dateSource = Object.values(props).map((val) => {
    if (!!val.defaultValue) {
      val.defaultValue.value = `${val.defaultValue.value}`;
    }
    return val;
  });
  return /* @__PURE__ */ modules$1.createElement(modules$1.Fragment, null, /* @__PURE__ */ modules$1.createElement("b", {
    className: "block-title"
  }, "API"), /* @__PURE__ */ modules$1.createElement(Table, {
    scroll: { x: "100%" },
    dataSource: dateSource,
    pagination: false,
    bordered: true
  }, /* @__PURE__ */ modules$1.createElement(Table.Column, {
    dataIndex: "name",
    title: "Property"
  }), /* @__PURE__ */ modules$1.createElement(Table.Column, {
    dataIndex: "description",
    title: "Description"
  }), /* @__PURE__ */ modules$1.createElement(Table.Column, {
    dataIndex: ["type", "name"],
    title: "Type"
  }), /* @__PURE__ */ modules$1.createElement(Table.Column, {
    dataIndex: ["defaultValue", "value"],
    title: "Default"
  })));
}
var DoubleLeftOutlined$5 = { exports: {} };
var DoubleLeftOutlined$4 = {};
var interopRequireWildcard = { exports: {} };
var _typeof = { exports: {} };
(function(module) {
  function _typeof3(obj) {
    "@babel/helpers - typeof";
    return module.exports = _typeof3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof3(obj);
  }
  module.exports = _typeof3, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);
(function(module) {
  var _typeof$12 = _typeof.exports["default"];
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard2(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof$12(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache2 = _getRequireWildcardCache(nodeInterop);
    if (cache2 && cache2.has(obj)) {
      return cache2.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache2) {
      cache2.set(obj, newObj);
    }
    return newObj;
  }
  module.exports = _interopRequireWildcard2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(interopRequireWildcard);
var interopRequireDefault = { exports: {} };
(function(module) {
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  module.exports = _interopRequireDefault2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(interopRequireDefault);
var objectSpread2 = { exports: {} };
var defineProperty$3 = { exports: {} };
(function(module) {
  function _defineProperty3(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  module.exports = _defineProperty3, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(defineProperty$3);
(function(module) {
  var defineProperty2 = defineProperty$3.exports;
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols2 = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols2);
    }
    return keys2;
  }
  function _objectSpread22(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        defineProperty2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  module.exports = _objectSpread22, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(objectSpread2);
var require$$3 = /* @__PURE__ */ getAugmentedNamespace(react_1a37f6a0);
var DoubleLeftOutlined$3 = {};
Object.defineProperty(DoubleLeftOutlined$3, "__esModule", { value: true });
var DoubleLeftOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, "name": "double-left", "theme": "outlined" };
DoubleLeftOutlined$3.default = DoubleLeftOutlined$2;
var AntdIcon = {};
var slicedToArray = { exports: {} };
var arrayWithHoles = { exports: {} };
(function(module) {
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  module.exports = _arrayWithHoles2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayWithHoles);
var iterableToArrayLimit = { exports: {} };
(function(module) {
  function _iterableToArrayLimit2(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  module.exports = _iterableToArrayLimit2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(iterableToArrayLimit);
var unsupportedIterableToArray = { exports: {} };
var arrayLikeToArray = { exports: {} };
(function(module) {
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  module.exports = _arrayLikeToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayLikeToArray);
(function(module) {
  var arrayLikeToArray$1 = arrayLikeToArray.exports;
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return arrayLikeToArray$1(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return arrayLikeToArray$1(o, minLen);
  }
  module.exports = _unsupportedIterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(unsupportedIterableToArray);
var nonIterableRest = { exports: {} };
(function(module) {
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(nonIterableRest);
(function(module) {
  var arrayWithHoles$1 = arrayWithHoles.exports;
  var iterableToArrayLimit$1 = iterableToArrayLimit.exports;
  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
  var nonIterableRest$1 = nonIterableRest.exports;
  function _slicedToArray3(arr, i) {
    return arrayWithHoles$1(arr) || iterableToArrayLimit$1(arr, i) || unsupportedIterableToArray$1(arr, i) || nonIterableRest$1();
  }
  module.exports = _slicedToArray3, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(slicedToArray);
var objectWithoutProperties = { exports: {} };
var objectWithoutPropertiesLoose = { exports: {} };
(function(module) {
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  module.exports = _objectWithoutPropertiesLoose2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(objectWithoutPropertiesLoose);
(function(module) {
  var objectWithoutPropertiesLoose$1 = objectWithoutPropertiesLoose.exports;
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = objectWithoutPropertiesLoose$1(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(objectWithoutProperties);
var classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn2 = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn2.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
var Context = {};
Object.defineProperty(Context, "__esModule", {
  value: true
});
Context.default = void 0;
var _react$1 = require$$3;
var IconContext = /* @__PURE__ */ (0, _react$1.createContext)({});
var _default$b = IconContext;
Context.default = _default$b;
var IconBase$1 = {};
var utils = {};
function bound01(n2, max) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max), 10) / 100;
  }
  if (Math.abs(n2 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
  } else {
    n2 = n2 % max / parseFloat(String(max));
  }
  return n2;
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return Number(n2) * 100 + "%";
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r2, g2, b2) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function hue2rgb(p2, q2, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p2 + (q2 - p2) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q2;
  }
  if (t2 < 2 / 3) {
    return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
  }
  return p2;
}
function hslToRgb(h2, s, l2) {
  var r2;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  if (s === 0) {
    g2 = l2;
    b2 = l2;
    r2 = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p2 = 2 * l2 - q2;
    r2 = hue2rgb(p2, q2, h2 + 1 / 3);
    g2 = hue2rgb(p2, q2, h2);
    b2 = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHsv(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g2, b2);
  var min = Math.min(r2, g2, b2);
  var h2 = 0;
  var v2 = max;
  var d2 = max - min;
  var s = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v: v2 };
}
function hsvToRgb(h2, s, v2) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v2 = bound01(v2, 100);
  var i = Math.floor(h2);
  var f2 = h2 - i;
  var p2 = v2 * (1 - s);
  var q2 = v2 * (1 - f2 * s);
  var t2 = v2 * (1 - (1 - f2) * s);
  var mod = i % 6;
  var r2 = [v2, q2, p2, p2, t2, v2][mod];
  var g2 = [t2, v2, v2, q2, p2, p2][mod];
  var b2 = [p2, p2, t2, v2, v2, q2][mod];
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHex(r2, g2, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color2) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok2 = false;
  var format2 = false;
  if (typeof color2 === "string") {
    color2 = stringInputToObject(color2);
  }
  if (typeof color2 === "object") {
    if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
      rgb = rgbToRgb(color2.r, color2.g, color2.b);
      ok2 = true;
      format2 = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
      s = convertToPercentage(color2.s);
      v2 = convertToPercentage(color2.v);
      rgb = hsvToRgb(color2.h, s, v2);
      ok2 = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s = convertToPercentage(color2.s);
      l2 = convertToPercentage(color2.l);
      rgb = hslToRgb(color2.h, s, l2);
      ok2 = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color2, "a")) {
      a = color2.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok2,
    format: color2.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color2) {
  color2 = color2.trim().toLowerCase();
  if (color2.length === 0) {
    return false;
  }
  var named = false;
  if (names[color2]) {
    color2 = names[color2];
    named = true;
  } else if (color2 === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color2);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color2);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color2) {
  return Boolean(matchers.CSS_UNIT.exec(String(color2)));
}
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r2 = _ref.r, g2 = _ref.g, b2 = _ref.b;
  var hsv = rgbToHsv(r2, g2, b2);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r2 = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
  return "#".concat(rgbToHex(r2, g2, b2, false));
}
function mix(rgb1, rgb2, amount) {
  var p2 = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue$2(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate$1(color2) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color2);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue$2(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue$2(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index2 = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var index_esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  blue,
  cyan,
  geekblue,
  generate: generate$1,
  gold,
  green,
  grey,
  lime,
  magenta,
  orange,
  presetDarkPalettes,
  presetPalettes,
  presetPrimaryColors,
  purple,
  red,
  volcano,
  yellow
});
var require$$4 = /* @__PURE__ */ getAugmentedNamespace(index_esm);
var warning$2 = {};
Object.defineProperty(warning$2, "__esModule", {
  value: true
});
warning$2.warning = warning$1;
warning$2.note = note;
warning$2.resetWarned = resetWarned;
warning$2.call = call;
warning$2.warningOnce = warningOnce;
warning$2.noteOnce = noteOnce;
warning$2.default = void 0;
var warned = {};
function warning$1(valid, message2) {
}
function note(valid, message2) {
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message2) {
  if (!valid && !warned[message2]) {
    method(false, message2);
    warned[message2] = true;
  }
}
function warningOnce(valid, message2) {
  call(warning$1, valid, message2);
}
function noteOnce(valid, message2) {
  call(note, valid, message2);
}
var _default$a = warningOnce;
warning$2.default = _default$a;
var dynamicCSS = {};
var canUseDom$1 = {};
Object.defineProperty(canUseDom$1, "__esModule", {
  value: true
});
canUseDom$1.default = canUseDom;
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var _interopRequireDefault$c = interopRequireDefault.exports;
Object.defineProperty(dynamicCSS, "__esModule", {
  value: true
});
dynamicCSS.injectCSS = injectCSS;
dynamicCSS.updateCSS = updateCSS;
var _canUseDom = _interopRequireDefault$c(canUseDom$1);
var MARK_KEY = "rc-util-key";
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function injectCSS(css) {
  var _option$csp;
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!(0, _canUseDom.default)()) {
    return null;
  }
  var styleNode = document.createElement("style");
  if ((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) {
    var _option$csp2;
    styleNode.nonce = (_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (option.prepend && container.prepend) {
    container.prepend(styleNode);
  } else if (option.prepend && firstChild) {
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
var containerCache = new Map();
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option);
  if (!containerCache.has(container)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }
  var existNode = Array.from(containerCache.get(container).children).find(function(node) {
    return node.tagName === "STYLE" && node[MARK_KEY] === key;
  });
  if (existNode) {
    var _option$csp3, _option$csp4;
    if (((_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce) && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
      var _option$csp5;
      existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode[MARK_KEY] = key;
  return newNode;
}
var _interopRequireWildcard$9 = interopRequireWildcard.exports;
var _interopRequireDefault$b = interopRequireDefault.exports;
Object.defineProperty(utils, "__esModule", {
  value: true
});
utils.warning = warning;
utils.isIconDefinition = isIconDefinition;
utils.normalizeAttrs = normalizeAttrs;
utils.generate = generate;
utils.getSecondaryColor = getSecondaryColor;
utils.normalizeTwoToneColors = normalizeTwoToneColors;
utils.useInsertStyles = utils.iconStyles = utils.svgBaseProps = void 0;
var _objectSpread2$a = _interopRequireDefault$b(objectSpread2.exports);
var _typeof2 = _interopRequireDefault$b(_typeof.exports);
var _colors = require$$4;
var _react = _interopRequireWildcard$9(require$$3);
var _warning = _interopRequireDefault$b(warning$2);
var _dynamicCSS = dynamicCSS;
var _Context$1 = _interopRequireDefault$b(Context);
function warning(valid, message2) {
  (0, _warning.default)(valid, "[@ant-design/icons] ".concat(message2));
}
function isIconDefinition(target) {
  return (0, _typeof2.default)(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && ((0, _typeof2.default)(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        acc[key] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ _react.default.createElement(node.tag, (0, _objectSpread2$a.default)({
      key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index2) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
    }));
  }
  return /* @__PURE__ */ _react.default.createElement(node.tag, (0, _objectSpread2$a.default)((0, _objectSpread2$a.default)({
    key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index2) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
  }));
}
function getSecondaryColor(primaryColor) {
  return (0, _colors.generate)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var svgBaseProps = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
};
utils.svgBaseProps = svgBaseProps;
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
utils.iconStyles = iconStyles;
var useInsertStyles = function useInsertStyles2() {
  var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
  var _useContext = (0, _react.useContext)(_Context$1.default), csp = _useContext.csp;
  (0, _react.useEffect)(function() {
    (0, _dynamicCSS.updateCSS)(styleStr, "@ant-design-icons", {
      prepend: true,
      csp
    });
  }, []);
};
utils.useInsertStyles = useInsertStyles;
var _interopRequireDefault$a = interopRequireDefault.exports;
Object.defineProperty(IconBase$1, "__esModule", {
  value: true
});
IconBase$1.default = void 0;
var _objectWithoutProperties2$1 = _interopRequireDefault$a(objectWithoutProperties.exports);
var _objectSpread2$9 = _interopRequireDefault$a(objectSpread2.exports);
var _utils$2 = utils;
var _excluded$1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || (0, _utils$2.getSecondaryColor)(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return (0, _objectSpread2$9.default)({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = (0, _objectWithoutProperties2$1.default)(props, _excluded$1);
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || (0, _utils$2.getSecondaryColor)(primaryColor)
    };
  }
  (0, _utils$2.useInsertStyles)();
  (0, _utils$2.warning)((0, _utils$2.isIconDefinition)(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!(0, _utils$2.isIconDefinition)(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = (0, _objectSpread2$9.default)((0, _objectSpread2$9.default)({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return (0, _utils$2.generate)(target.icon, "svg-".concat(target.name), (0, _objectSpread2$9.default)({
    className,
    onClick,
    style,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var _default$9 = IconBase;
IconBase$1.default = _default$9;
var twoTonePrimaryColor = {};
var _interopRequireDefault$9 = interopRequireDefault.exports;
Object.defineProperty(twoTonePrimaryColor, "__esModule", {
  value: true
});
twoTonePrimaryColor.setTwoToneColor = setTwoToneColor;
twoTonePrimaryColor.getTwoToneColor = getTwoToneColor;
var _slicedToArray2$1 = _interopRequireDefault$9(slicedToArray.exports);
var _IconBase$1 = _interopRequireDefault$9(IconBase$1);
var _utils$1 = utils;
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = (0, _utils$1.normalizeTwoToneColors)(twoToneColor), _normalizeTwoToneColo2 = (0, _slicedToArray2$1.default)(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return _IconBase$1.default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = _IconBase$1.default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
var _interopRequireDefault$8 = interopRequireDefault.exports;
var _interopRequireWildcard$8 = interopRequireWildcard.exports;
Object.defineProperty(AntdIcon, "__esModule", {
  value: true
});
AntdIcon.default = void 0;
var _objectSpread2$8 = _interopRequireDefault$8(objectSpread2.exports);
var _slicedToArray2 = _interopRequireDefault$8(slicedToArray.exports);
var _defineProperty2 = _interopRequireDefault$8(defineProperty$3.exports);
var _objectWithoutProperties2 = _interopRequireDefault$8(objectWithoutProperties.exports);
var React$a = _interopRequireWildcard$8(require$$3);
var _classnames = _interopRequireDefault$8(classnames.exports);
var _Context = _interopRequireDefault$8(Context);
var _IconBase = _interopRequireDefault$8(IconBase$1);
var _twoTonePrimaryColor = twoTonePrimaryColor;
var _utils = utils;
var _excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
(0, _twoTonePrimaryColor.setTwoToneColor)("#1890ff");
var Icon = /* @__PURE__ */ React$a.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _React$useContext = React$a.useContext(_Context.default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre;
  var classString = (0, _classnames.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor), _normalizeTwoToneColo2 = (0, _slicedToArray2.default)(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ React$a.createElement("span", (0, _objectSpread2$8.default)((0, _objectSpread2$8.default)({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ React$a.createElement(_IconBase.default, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
var _default$8 = Icon;
AntdIcon.default = _default$8;
var _interopRequireWildcard$7 = interopRequireWildcard.exports;
var _interopRequireDefault$7 = interopRequireDefault.exports;
Object.defineProperty(DoubleLeftOutlined$4, "__esModule", {
  value: true
});
DoubleLeftOutlined$4.default = void 0;
var _objectSpread2$7 = _interopRequireDefault$7(objectSpread2.exports);
var React$9 = _interopRequireWildcard$7(require$$3);
var _DoubleLeftOutlined = _interopRequireDefault$7(DoubleLeftOutlined$3);
var _AntdIcon$7 = _interopRequireDefault$7(AntdIcon);
var DoubleLeftOutlined$1 = function DoubleLeftOutlined(props, ref) {
  return /* @__PURE__ */ React$9.createElement(_AntdIcon$7.default, (0, _objectSpread2$7.default)((0, _objectSpread2$7.default)({}, props), {}, {
    ref,
    icon: _DoubleLeftOutlined.default
  }));
};
DoubleLeftOutlined$1.displayName = "DoubleLeftOutlined";
var _default$7 = /* @__PURE__ */ React$9.forwardRef(DoubleLeftOutlined$1);
DoubleLeftOutlined$4.default = _default$7;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _DoubleLeftOutlined2 = _interopRequireDefault2(DoubleLeftOutlined$4);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _DoubleLeftOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(DoubleLeftOutlined$5, DoubleLeftOutlined$5.exports);
var DoubleLeftOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(DoubleLeftOutlined$5.exports);
var CloseOutlined$5 = { exports: {} };
var CloseOutlined$4 = {};
var CloseOutlined$3 = {};
Object.defineProperty(CloseOutlined$3, "__esModule", { value: true });
var CloseOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
CloseOutlined$3.default = CloseOutlined$2;
var _interopRequireWildcard$6 = interopRequireWildcard.exports;
var _interopRequireDefault$6 = interopRequireDefault.exports;
Object.defineProperty(CloseOutlined$4, "__esModule", {
  value: true
});
CloseOutlined$4.default = void 0;
var _objectSpread2$6 = _interopRequireDefault$6(objectSpread2.exports);
var React$8 = _interopRequireWildcard$6(require$$3);
var _CloseOutlined = _interopRequireDefault$6(CloseOutlined$3);
var _AntdIcon$6 = _interopRequireDefault$6(AntdIcon);
var CloseOutlined$1 = function CloseOutlined(props, ref) {
  return /* @__PURE__ */ React$8.createElement(_AntdIcon$6.default, (0, _objectSpread2$6.default)((0, _objectSpread2$6.default)({}, props), {}, {
    ref,
    icon: _CloseOutlined.default
  }));
};
CloseOutlined$1.displayName = "CloseOutlined";
var _default$6 = /* @__PURE__ */ React$8.forwardRef(CloseOutlined$1);
CloseOutlined$4.default = _default$6;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _CloseOutlined2 = _interopRequireDefault2(CloseOutlined$4);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _CloseOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(CloseOutlined$5, CloseOutlined$5.exports);
var CloseOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(CloseOutlined$5.exports);
const PANE_VISIBLE = "pane_visible";
var form = "";
const { Input, Radio, InputNumber, Select, Switch: Switch$1 } = window.antd;
const Setters = {
  NumberSetter: (props) => /* @__PURE__ */ modules$1.createElement(InputNumber, __spreadProps(__spreadValues({}, props), {
    style: { width: 120 }
  })),
  TextSetter: (props) => /* @__PURE__ */ modules$1.createElement(Input, __spreadProps(__spreadValues({}, props), {
    style: { width: 120 }
  })),
  ChoiceSetter: (props) => /* @__PURE__ */ modules$1.createElement(Radio.Group, __spreadProps(__spreadValues({}, props), {
    optionType: "button",
    size: "small"
  })),
  SelectSetter: (props) => /* @__PURE__ */ modules$1.createElement(Select, __spreadProps(__spreadValues({}, props), {
    style: { width: 120 },
    allowClear: true
  })),
  BoolSetter: (props) => /* @__PURE__ */ modules$1.createElement(Switch$1, __spreadProps(__spreadValues({}, props), {
    checked: props.value
  }))
};
const { List: List$2, Tooltip: Tooltip$1, Form: Form$1 } = window.antd;
function SetterFormItem(_a) {
  var _b = _a, { name, tip, defaultValue, setter } = _b, rest = __objRest(_b, ["name", "tip", "defaultValue", "setter"]);
  const Setter = Setters[setter];
  return /* @__PURE__ */ modules$1.createElement(List$2.Item, {
    className: "setter-form-item"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "setter-form-item-label"
  }, /* @__PURE__ */ modules$1.createElement(Tooltip$1, {
    className: classNames(!!tip && "has-tip"),
    title: tip
  }, name)), /* @__PURE__ */ modules$1.createElement("div", {
    className: "setter-form-item-value"
  }, Setter && /* @__PURE__ */ modules$1.createElement(Form$1.Item, {
    name,
    initialValue: defaultValue,
    style: { marginBottom: 0 }
  }, /* @__PURE__ */ modules$1.createElement(Setter, __spreadValues({}, rest)))));
}
var FUNC_ERROR_TEXT$2 = "Expected a function";
var NAN$2 = 0 / 0;
var symbolTag$3 = "[object Symbol]";
var reTrim$1 = /^\s+|\s+$/g;
var reIsBadHex$2 = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary$2 = /^0b[01]+$/i;
var reIsOctal$2 = /^0o[0-7]+$/i;
var freeParseInt$2 = parseInt;
var freeGlobal$3 = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
var freeSelf$2 = typeof self == "object" && self && self.Object === Object && self;
var root$a = freeGlobal$3 || freeSelf$2 || Function("return this")();
var objectProto$e = Object.prototype;
var objectToString$3 = objectProto$e.toString;
var nativeMax$1 = Math.max, nativeMin$1 = Math.min;
var now$1 = function() {
  return root$a.Date.now();
};
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber$3(wait) || 0;
  if (isObject$7(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax$1(toNumber$3(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin$1(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function isObject$7(value) {
  var type2 = typeof value;
  return !!value && (type2 == "object" || type2 == "function");
}
function isObjectLike$7(value) {
  return !!value && typeof value == "object";
}
function isSymbol$6(value) {
  return typeof value == "symbol" || isObjectLike$7(value) && objectToString$3.call(value) == symbolTag$3;
}
function toNumber$3(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$6(value)) {
    return NAN$2;
  }
  if (isObject$7(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$7(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, "");
  var isBinary = reIsBinary$2.test(value);
  return isBinary || reIsOctal$2.test(value) ? freeParseInt$2(value.slice(2), isBinary ? 2 : 8) : reIsBadHex$2.test(value) ? NAN$2 : +value;
}
var _lodash_debounce_4_0_8_lodash_debounce = debounce$1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var NAN$1 = 0 / 0;
var symbolTag$2 = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary$1 = /^0b[01]+$/i;
var reIsOctal$1 = /^0o[0-7]+$/i;
var freeParseInt$1 = parseInt;
var freeGlobal$2 = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
var root$9 = freeGlobal$2 || freeSelf$1 || Function("return this")();
var objectProto$d = Object.prototype;
var objectToString$2 = objectProto$d.toString;
var nativeMax = Math.max, nativeMin = Math.min;
var now = function() {
  return root$9.Date.now();
};
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber$2(wait) || 0;
  if (isObject$6(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber$2(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject$6(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
function isObject$6(value) {
  var type2 = typeof value;
  return !!value && (type2 == "object" || type2 == "function");
}
function isObjectLike$6(value) {
  return !!value && typeof value == "object";
}
function isSymbol$5(value) {
  return typeof value == "symbol" || isObjectLike$6(value) && objectToString$2.call(value) == symbolTag$2;
}
function toNumber$2(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$5(value)) {
    return NAN$1;
  }
  if (isObject$6(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$6(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary$1.test(value);
  return isBinary || reIsOctal$1.test(value) ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8) : reIsBadHex$1.test(value) ? NAN$1 : +value;
}
var _lodash_throttle_4_1_1_lodash_throttle = throttle;
function isDocumentVisible() {
  if (typeof document !== "undefined" && typeof document.visibilityState !== "undefined") {
    return document.visibilityState !== "hidden";
  }
  return true;
}
function isOnline() {
  if (typeof navigator.onLine !== "undefined") {
    return navigator.onLine;
  }
  return true;
}
var cache$2 = new Map();
var setCache = function setCache2(key, cacheTime, data) {
  var currentCache = cache$2.get(key);
  if (currentCache === null || currentCache === void 0 ? void 0 : currentCache.timer) {
    clearTimeout(currentCache.timer);
  }
  var timer = void 0;
  if (cacheTime > -1) {
    timer = setTimeout(function() {
      cache$2["delete"](key);
    }, cacheTime);
  }
  cache$2.set(key, {
    data,
    timer,
    startTime: new Date().getTime()
  });
};
var getCache = function getCache2(key) {
  var currentCache = cache$2.get(key);
  return {
    data: currentCache === null || currentCache === void 0 ? void 0 : currentCache.data,
    startTime: currentCache === null || currentCache === void 0 ? void 0 : currentCache.startTime
  };
};
var __read$9 = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread$5 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$9(arguments[i]));
  }
  return ar;
};
function limit(fn, timespan) {
  var pending = false;
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (pending)
      return;
    pending = true;
    fn.apply(void 0, __spread$5(args));
    setTimeout(function() {
      pending = false;
    }, timespan);
  };
}
var __read$8 = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread$4 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$8(arguments[i]));
  }
  return ar;
};
function usePersistFn$1(fn) {
  var ref = useRef(function() {
    throw new Error("Cannot call an event handler while rendering.");
  });
  ref.current = fn;
  var persist = useCallback(function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var refFn = ref.current;
    if (refFn) {
      return refFn.apply(void 0, __spread$4(args));
    }
  }, [ref]);
  if (typeof fn === "function") {
    return persist;
  }
  return void 0;
}
var useUpdateEffect$2 = function useUpdateEffect(effect, deps) {
  var isMounted = useRef(false);
  useEffect(function() {
    return function() {
      isMounted.current = false;
    };
  }, []);
  useEffect(function() {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};
var listeners$1 = [];
function subscribe$1(listener) {
  listeners$1.push(listener);
  return function unsubscribe() {
    var index2 = listeners$1.indexOf(listener);
    listeners$1.splice(index2, 1);
  };
}
var eventsBinded$1 = false;
if (typeof window !== "undefined" && window.addEventListener && !eventsBinded$1) {
  var revalidate$1 = function revalidate() {
    if (!isDocumentVisible() || !isOnline())
      return;
    for (var i = 0; i < listeners$1.length; i++) {
      var listener = listeners$1[i];
      listener();
    }
  };
  window.addEventListener("visibilitychange", revalidate$1, false);
  window.addEventListener("focus", revalidate$1, false);
  eventsBinded$1 = true;
}
var listeners = [];
function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index2 = listeners.indexOf(listener);
    listeners.splice(index2, 1);
  };
}
var eventsBinded = false;
if (typeof window !== "undefined" && window.addEventListener && !eventsBinded) {
  var revalidate = function revalidate2() {
    if (!isDocumentVisible())
      return;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };
  window.addEventListener("visibilitychange", revalidate, false);
  eventsBinded = true;
}
var __assign$3 = globalThis && globalThis.__assign || function() {
  __assign$3 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s) {
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
      }
    }
    return t2;
  };
  return __assign$3.apply(this, arguments);
};
var __read$7 = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread$3 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$7(arguments[i]));
  }
  return ar;
};
var DEFAULT_KEY = "AHOOKS_USE_REQUEST_DEFAULT_KEY";
var Fetch = function() {
  function Fetch2(service, config, subscribe$2, initState) {
    this.count = 0;
    this.pollingWhenVisibleFlag = false;
    this.pollingTimer = void 0;
    this.loadingDelayTimer = void 0;
    this.unsubscribe = [];
    this.that = this;
    this.state = {
      loading: false,
      params: [],
      data: void 0,
      error: void 0,
      run: this.run.bind(this.that),
      mutate: this.mutate.bind(this.that),
      refresh: this.refresh.bind(this.that),
      cancel: this.cancel.bind(this.that),
      unmount: this.unmount.bind(this.that)
    };
    this.service = service;
    this.config = config;
    this.subscribe = subscribe$2;
    if (initState) {
      this.state = __assign$3(__assign$3({}, this.state), initState);
    }
    this.debounceRun = this.config.debounceInterval ? _lodash_debounce_4_0_8_lodash_debounce(this._run, this.config.debounceInterval) : void 0;
    this.throttleRun = this.config.throttleInterval ? _lodash_throttle_4_1_1_lodash_throttle(this._run, this.config.throttleInterval) : void 0;
    this.limitRefresh = limit(this.refresh.bind(this), this.config.focusTimespan);
    if (this.config.pollingInterval) {
      this.unsubscribe.push(subscribe(this.rePolling.bind(this)));
    }
    if (this.config.refreshOnWindowFocus) {
      this.unsubscribe.push(subscribe$1(this.limitRefresh.bind(this)));
    }
  }
  Fetch2.prototype.setState = function(s) {
    if (s === void 0) {
      s = {};
    }
    this.state = __assign$3(__assign$3({}, this.state), s);
    this.subscribe(this.state);
  };
  Fetch2.prototype._run = function() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.pollingTimer) {
      clearTimeout(this.pollingTimer);
    }
    if (this.loadingDelayTimer) {
      clearTimeout(this.loadingDelayTimer);
    }
    this.count += 1;
    var currentCount = this.count;
    this.setState({
      loading: !this.config.loadingDelay,
      params: args
    });
    if (this.config.loadingDelay) {
      this.loadingDelayTimer = setTimeout(function() {
        _this.setState({
          loading: true
        });
      }, this.config.loadingDelay);
    }
    return this.service.apply(this, __spread$3(args)).then(function(res) {
      if (currentCount !== _this.count) {
        return new Promise(function() {
        });
      }
      if (_this.loadingDelayTimer) {
        clearTimeout(_this.loadingDelayTimer);
      }
      var formattedResult = _this.config.formatResult ? _this.config.formatResult(res) : res;
      _this.setState({
        data: formattedResult,
        error: void 0,
        loading: false
      });
      if (_this.config.onSuccess) {
        _this.config.onSuccess(formattedResult, args);
      }
      return formattedResult;
    })["catch"](function(error) {
      if (currentCount !== _this.count) {
        return new Promise(function() {
        });
      }
      if (_this.loadingDelayTimer) {
        clearTimeout(_this.loadingDelayTimer);
      }
      _this.setState({
        data: void 0,
        error,
        loading: false
      });
      if (_this.config.onError) {
        _this.config.onError(error, args);
      }
      if (_this.config.throwOnError) {
        throw error;
      }
      console.error(error);
      return Promise.reject("useRequest has caught the exception, if you need to handle the exception yourself, you can set options.throwOnError to true.");
    })["finally"](function() {
      if (currentCount === _this.count) {
        if (_this.config.pollingInterval) {
          if (!isDocumentVisible() && !_this.config.pollingWhenHidden) {
            _this.pollingWhenVisibleFlag = true;
            return;
          }
          _this.pollingTimer = setTimeout(function() {
            _this._run.apply(_this, __spread$3(args));
          }, _this.config.pollingInterval);
        }
      }
    });
  };
  Fetch2.prototype.run = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.debounceRun) {
      this.debounceRun.apply(this, __spread$3(args));
      return Promise.resolve(null);
    }
    if (this.throttleRun) {
      this.throttleRun.apply(this, __spread$3(args));
      return Promise.resolve(null);
    }
    return this._run.apply(this, __spread$3(args));
  };
  Fetch2.prototype.cancel = function() {
    if (this.debounceRun) {
      this.debounceRun.cancel();
    }
    if (this.throttleRun) {
      this.throttleRun.cancel();
    }
    if (this.loadingDelayTimer) {
      clearTimeout(this.loadingDelayTimer);
    }
    if (this.pollingTimer) {
      clearTimeout(this.pollingTimer);
    }
    this.pollingWhenVisibleFlag = false;
    this.count += 1;
    this.setState({
      loading: false
    });
  };
  Fetch2.prototype.refresh = function() {
    return this.run.apply(this, __spread$3(this.state.params));
  };
  Fetch2.prototype.rePolling = function() {
    if (this.pollingWhenVisibleFlag) {
      this.pollingWhenVisibleFlag = false;
      this.refresh();
    }
  };
  Fetch2.prototype.mutate = function(data) {
    if (typeof data === "function") {
      this.setState({
        data: data(this.state.data) || {}
      });
    } else {
      this.setState({
        data
      });
    }
  };
  Fetch2.prototype.unmount = function() {
    this.cancel();
    this.unsubscribe.forEach(function(s) {
      s();
    });
  };
  return Fetch2;
}();
function useAsync(service, options) {
  var _options = options || {};
  var _a = _options.refreshDeps, refreshDeps = _a === void 0 ? [] : _a, _b = _options.manual, manual = _b === void 0 ? false : _b, _c = _options.onSuccess, onSuccess = _c === void 0 ? function() {
  } : _c, _d = _options.onError, onError = _d === void 0 ? function() {
  } : _d, _e = _options.defaultLoading, defaultLoading = _e === void 0 ? false : _e, loadingDelay = _options.loadingDelay, _f = _options.pollingInterval, pollingInterval = _f === void 0 ? 0 : _f, _g = _options.pollingWhenHidden, pollingWhenHidden = _g === void 0 ? true : _g, _h = _options.defaultParams, defaultParams = _h === void 0 ? [] : _h, _j = _options.refreshOnWindowFocus, refreshOnWindowFocus = _j === void 0 ? false : _j, _k = _options.focusTimespan, focusTimespan = _k === void 0 ? 5e3 : _k, fetchKey = _options.fetchKey, cacheKey = _options.cacheKey, _l = _options.cacheTime, cacheTime = _l === void 0 ? 5 * 60 * 1e3 : _l, _m = _options.staleTime, staleTime = _m === void 0 ? 0 : _m, debounceInterval = _options.debounceInterval, throttleInterval = _options.throttleInterval, initialData = _options.initialData, _o = _options.ready, ready = _o === void 0 ? true : _o, _p = _options.throwOnError, throwOnError = _p === void 0 ? false : _p;
  var newstFetchKey = useRef(DEFAULT_KEY);
  var servicePersist = usePersistFn$1(service);
  var onSuccessPersist = usePersistFn$1(onSuccess);
  var onErrorPersist = usePersistFn$1(onError);
  var fetchKeyPersist = usePersistFn$1(fetchKey);
  var formatResult;
  if ("formatResult" in _options) {
    formatResult = _options.formatResult;
  }
  var formatResultPersist = usePersistFn$1(formatResult);
  var config = {
    formatResult: formatResultPersist,
    onSuccess: onSuccessPersist,
    onError: onErrorPersist,
    loadingDelay,
    pollingInterval,
    pollingWhenHidden,
    refreshOnWindowFocus: !manual && refreshOnWindowFocus,
    focusTimespan,
    debounceInterval,
    throttleInterval,
    throwOnError
  };
  var subscribe2 = usePersistFn$1(function(key, data) {
    setFetches(function(s) {
      s[key] = data;
      return __assign$3({}, s);
    });
  });
  var _q = __read$7(useState(function() {
    var _a2;
    if (cacheKey) {
      var cacheData_1 = (_a2 = getCache(cacheKey)) === null || _a2 === void 0 ? void 0 : _a2.data;
      if (cacheData_1) {
        newstFetchKey.current = cacheData_1.newstFetchKey;
        var newFetches_1 = {};
        Object.keys(cacheData_1.fetches).forEach(function(key) {
          var cacheFetch = cacheData_1.fetches[key];
          var newFetch = new Fetch(servicePersist, config, subscribe2.bind(null, key), {
            loading: cacheFetch.loading,
            params: cacheFetch.params,
            data: cacheFetch.data,
            error: cacheFetch.error
          });
          newFetches_1[key] = newFetch.state;
        });
        return newFetches_1;
      }
    }
    return {};
  }), 2), fetches = _q[0], setFetches = _q[1];
  var fetchesRef = useRef(fetches);
  fetchesRef.current = fetches;
  var readyMemoryParams = useRef();
  var run = useCallback(function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (!ready) {
      readyMemoryParams.current = args;
      return;
    }
    if (fetchKeyPersist) {
      var key = fetchKeyPersist.apply(void 0, __spread$3(args));
      newstFetchKey.current = key === void 0 ? DEFAULT_KEY : key;
    }
    var currentFetchKey = newstFetchKey.current;
    var currentFetch = fetchesRef.current[currentFetchKey];
    if (!currentFetch) {
      var newFetch = new Fetch(servicePersist, config, subscribe2.bind(null, currentFetchKey), {
        data: initialData
      });
      currentFetch = newFetch.state;
      setFetches(function(s) {
        s[currentFetchKey] = currentFetch;
        return __assign$3({}, s);
      });
    }
    return currentFetch.run.apply(currentFetch, __spread$3(args));
  }, [fetchKey, subscribe2, ready]);
  var runRef = useRef(run);
  runRef.current = run;
  useUpdateEffect$2(function() {
    if (cacheKey) {
      setCache(cacheKey, cacheTime, {
        fetches,
        newstFetchKey: newstFetchKey.current
      });
    }
  }, [cacheKey, fetches]);
  var hasTriggeredByReady = useRef(false);
  useUpdateEffect$2(function() {
    if (ready) {
      if (!hasTriggeredByReady.current && readyMemoryParams.current) {
        runRef.current.apply(runRef, __spread$3(readyMemoryParams.current));
      }
      hasTriggeredByReady.current = true;
    }
  }, [ready]);
  useEffect(function() {
    var _a2;
    if (!manual) {
      if (Object.keys(fetches).length > 0) {
        var cacheStartTime = cacheKey && ((_a2 = getCache(cacheKey)) === null || _a2 === void 0 ? void 0 : _a2.startTime) || 0;
        if (!(staleTime === -1 || new Date().getTime() - cacheStartTime <= staleTime)) {
          Object.values(fetches).forEach(function(f2) {
            f2.refresh();
          });
        }
      } else {
        runRef.current.apply(runRef, __spread$3(defaultParams));
      }
    }
  }, []);
  var reset = useCallback(function() {
    Object.values(fetchesRef.current).forEach(function(f2) {
      f2.unmount();
    });
    newstFetchKey.current = DEFAULT_KEY;
    setFetches({});
    fetchesRef.current = {};
  }, [setFetches]);
  useUpdateEffect$2(function() {
    if (!manual) {
      Object.values(fetchesRef.current).forEach(function(f2) {
        f2.refresh();
      });
    }
  }, __spread$3(refreshDeps));
  useEffect(function() {
    return function() {
      Object.values(fetchesRef.current).forEach(function(f2) {
        f2.unmount();
      });
    };
  }, []);
  var notExecutedWarning = useCallback(function(name) {
    return function() {
      console.warn("You should't call " + name + " when service not executed once.");
    };
  }, []);
  return __assign$3(__assign$3({
    loading: ready && !manual || defaultLoading,
    data: initialData,
    error: void 0,
    params: [],
    cancel: notExecutedWarning("cancel"),
    refresh: notExecutedWarning("refresh"),
    mutate: notExecutedWarning("mutate")
  }, fetches[newstFetchKey.current] || {}), {
    run,
    fetches,
    reset
  });
}
var __assign$2 = globalThis && globalThis.__assign || function() {
  __assign$2 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s) {
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
      }
    }
    return t2;
  };
  return __assign$2.apply(this, arguments);
};
var __rest$2 = globalThis && globalThis.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s) {
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
var __read$6 = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread$2 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$6(arguments[i]));
  }
  return ar;
};
function useLoadMore(service, options) {
  var _a = options.refreshDeps, refreshDeps = _a === void 0 ? [] : _a, ref = options.ref, isNoMore = options.isNoMore, _b = options.threshold, threshold = _b === void 0 ? 100 : _b;
  options.fetchKey;
  var restOptions = __rest$2(options, ["refreshDeps", "ref", "isNoMore", "threshold", "fetchKey"]);
  var _c = __read$6(useState(false), 2), loadingMore = _c[0], setLoadingMore = _c[1];
  useEffect(function() {
    if (options.fetchKey) {
      console.warn("useRequest loadMore mode don't need fetchKey!");
    }
  }, []);
  var result = useAsync(service, __assign$2(__assign$2({}, restOptions), {
    fetchKey: function fetchKey(d2) {
      var _a2;
      return ((_a2 = d2 === null || d2 === void 0 ? void 0 : d2.list) === null || _a2 === void 0 ? void 0 : _a2.length) || 0;
    },
    onSuccess: function onSuccess() {
      var params2 = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        params2[_i] = arguments[_i];
      }
      setLoadingMore(false);
      if (options.onSuccess) {
        options.onSuccess.apply(options, __spread$2(params2));
      }
    }
  }));
  var data = result.data, run = result.run, params = result.params, reset = result.reset, loading = result.loading, fetches = result.fetches;
  var reload = useCallback(function() {
    reset();
    var _a2 = __read$6(params), restParams = _a2.slice(1);
    run.apply(void 0, __spread$2([void 0], restParams));
  }, [run, reset, params]);
  var reloadRef = useRef(reload);
  reloadRef.current = reload;
  useUpdateEffect$2(function() {
    if (!options.manual) {
      reloadRef.current();
    }
  }, __spread$2(refreshDeps));
  var dataGroup = useMemo(function() {
    var listGroup = [];
    var lastNoLoadingData = data;
    Object.values(fetches).forEach(function(h2) {
      var _a2, _b2;
      if ((_a2 = h2.data) === null || _a2 === void 0 ? void 0 : _a2.list) {
        listGroup = listGroup.concat((_b2 = h2.data) === null || _b2 === void 0 ? void 0 : _b2.list);
      }
      if (!h2.loading) {
        lastNoLoadingData = h2.data;
      }
    });
    return __assign$2(__assign$2({}, lastNoLoadingData), {
      list: listGroup
    });
  }, [fetches, data]);
  var noMore = isNoMore ? !loading && !loadingMore && isNoMore(dataGroup) : false;
  var loadMore = useCallback(function() {
    if (noMore) {
      return;
    }
    setLoadingMore(true);
    var _a2 = __read$6(params), restParams = _a2.slice(1);
    run.apply(void 0, __spread$2([dataGroup], restParams));
  }, [noMore, run, dataGroup, params]);
  var scrollMethod = function scrollMethod2() {
    if (loading || loadingMore || !ref || !ref.current) {
      return;
    }
    if (ref.current.scrollHeight - ref.current.scrollTop <= ref.current.clientHeight + threshold) {
      loadMore();
    }
  };
  var scrollMethodRef = useRef(scrollMethod);
  scrollMethodRef.current = scrollMethod;
  useEffect(function() {
    if (!ref || !ref.current) {
      return function() {
      };
    }
    var scrollTrigger = function scrollTrigger2() {
      return scrollMethodRef.current();
    };
    ref.current.addEventListener("scroll", scrollTrigger);
    return function() {
      if (ref && ref.current) {
        ref.current.removeEventListener("scroll", scrollTrigger);
      }
    };
  }, [scrollMethodRef]);
  return __assign$2(__assign$2({}, result), {
    data: dataGroup,
    reload,
    loading: loading && dataGroup.list.length === 0,
    loadMore,
    loadingMore,
    noMore
  });
}
var __assign$1 = globalThis && globalThis.__assign || function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s) {
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
      }
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var __rest$1 = globalThis && globalThis.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s) {
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
var __read$5 = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread$1 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$5(arguments[i]));
  }
  return ar;
};
function usePaginated(service, options) {
  options.paginated;
  var _a = options.defaultPageSize, defaultPageSize = _a === void 0 ? 10 : _a, _b = options.refreshDeps, refreshDeps = _b === void 0 ? [] : _b, fetchKey = options.fetchKey, restOptions = __rest$1(options, ["paginated", "defaultPageSize", "refreshDeps", "fetchKey"]);
  useEffect(function() {
    if (fetchKey) {
      console.error("useRequest pagination's fetchKey will not work!");
    }
  }, []);
  var _c = useAsync(service, __assign$1({
    defaultParams: [{
      current: 1,
      pageSize: defaultPageSize
    }]
  }, restOptions)), data = _c.data, params = _c.params, run = _c.run, loading = _c.loading, rest = __rest$1(_c, ["data", "params", "run", "loading"]);
  var _d = params && params[0] ? params[0] : {}, _e = _d.current, current = _e === void 0 ? 1 : _e, _f = _d.pageSize, pageSize = _f === void 0 ? defaultPageSize : _f, _g = _d.sorter, sorter = _g === void 0 ? {} : _g, _h = _d.filters, filters = _h === void 0 ? {} : _h;
  var runChangePagination = useCallback(function(paginationParams) {
    var _a2 = __read$5(params), oldPaginationParams = _a2[0], restParams = _a2.slice(1);
    run.apply(void 0, __spread$1([__assign$1(__assign$1({}, oldPaginationParams), paginationParams)], restParams));
  }, [run, params]);
  var total = (data === null || data === void 0 ? void 0 : data.total) || 0;
  var totalPage = useMemo(function() {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]);
  var onChange = useCallback(function(c2, p2) {
    var toCurrent = c2 <= 0 ? 1 : c2;
    var toPageSize = p2 <= 0 ? 1 : p2;
    var tempTotalPage = Math.ceil(total / toPageSize);
    if (toCurrent > tempTotalPage) {
      toCurrent = Math.max(1, tempTotalPage);
    }
    runChangePagination({
      current: toCurrent,
      pageSize: toPageSize
    });
  }, [total, runChangePagination]);
  var changeCurrent = useCallback(function(c2) {
    onChange(c2, pageSize);
  }, [onChange, pageSize]);
  var changePageSize = useCallback(function(p2) {
    onChange(current, p2);
  }, [onChange, current]);
  var changeCurrentRef = useRef(changeCurrent);
  changeCurrentRef.current = changeCurrent;
  useUpdateEffect$2(function() {
    if (!options.manual) {
      changeCurrentRef.current(1);
    }
  }, __spread$1(refreshDeps));
  var changeTable = useCallback(function(p2, f2, s) {
    runChangePagination({
      current: p2.current,
      pageSize: p2.pageSize || defaultPageSize,
      filters: f2,
      sorter: s
    });
  }, [filters, sorter, runChangePagination]);
  return __assign$1({
    loading,
    data,
    params,
    run,
    pagination: {
      current,
      pageSize,
      total,
      totalPage,
      onChange,
      changeCurrent,
      changePageSize
    },
    tableProps: {
      dataSource: (data === null || data === void 0 ? void 0 : data.list) || [],
      loading,
      onChange: changeTable,
      pagination: {
        current,
        pageSize,
        total
      }
    },
    sorter,
    filters
  }, rest);
}
var ConfigContext = /* @__PURE__ */ modules$1.createContext({});
ConfigContext.displayName = "UseRequestConfigContext";
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s) {
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
      }
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __rest = globalThis && globalThis.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s) {
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
var __read$4 = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$4(arguments[i]));
  }
  return ar;
};
function useRequest(service, options) {
  if (options === void 0) {
    options = {};
  }
  var contextConfig = useContext$1(ConfigContext);
  var finalOptions = __assign(__assign({}, contextConfig), options);
  var paginated = finalOptions.paginated, loadMore = finalOptions.loadMore, requestMethod = finalOptions.requestMethod;
  var paginatedRef = useRef(paginated);
  var loadMoreRef = useRef(loadMore);
  if (paginatedRef.current !== paginated) {
    throw Error("You should not modify the paginated of options");
  }
  if (loadMoreRef.current !== loadMore) {
    throw Error("You should not modify the loadMore of options");
  }
  paginatedRef.current = paginated;
  loadMoreRef.current = loadMore;
  var fetchProxy = function fetchProxy2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return fetch.apply(void 0, __spread(args)).then(function(res) {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    });
  };
  var finalRequestMethod = requestMethod || fetchProxy;
  var promiseService;
  switch (typeof service) {
    case "string":
      promiseService = function promiseService2() {
        return finalRequestMethod(service);
      };
      break;
    case "object":
      var url_1 = service.url, rest_1 = __rest(service, ["url"]);
      promiseService = function promiseService2() {
        return requestMethod ? requestMethod(service) : fetchProxy(url_1, rest_1);
      };
      break;
    default:
      promiseService = function promiseService2() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new Promise(function(resolve, reject) {
          var s = service.apply(void 0, __spread(args));
          var fn = s;
          if (!s.then) {
            switch (typeof s) {
              case "string":
                fn = finalRequestMethod(s);
                break;
              case "object":
                var url_2 = s.url, rest_2 = __rest(s, ["url"]);
                fn = requestMethod ? requestMethod(s) : fetchProxy(url_2, rest_2);
                break;
            }
          }
          fn.then(resolve)["catch"](reject);
        });
      };
  }
  if (loadMore) {
    return useLoadMore(promiseService, finalOptions);
  }
  if (paginated) {
    return usePaginated(promiseService, finalOptions);
  }
  return useAsync(promiseService, finalOptions);
}
ConfigContext.Provider;
var useUpdateEffect2 = function useUpdateEffect3(effect, deps) {
  var isMounted = useRef(false);
  useEffect(function() {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};
var useUpdateEffect$1 = useUpdateEffect2;
function usePersistFn(fn) {
  var fnRef = useRef(fn);
  fnRef.current = fn;
  var persistFn = useRef();
  if (!persistFn.current) {
    persistFn.current = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return persistFn.current;
}
var __read$3 = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
function isFunction$3(obj) {
  return typeof obj === "function";
}
function createUseStorageState(nullishStorage) {
  function useStorageState(key, defaultValue) {
    var storage = nullishStorage;
    var _a = __read$3(useState(function() {
      return getStoredValue();
    }), 2), state = _a[0], setState = _a[1];
    useUpdateEffect$1(function() {
      setState(getStoredValue());
    }, [key]);
    function getStoredValue() {
      try {
        var raw = storage.getItem(key);
        if (raw) {
          return JSON.parse(raw);
        }
      } catch (e2) {
        console.error(e2);
      }
      if (isFunction$3(defaultValue)) {
        return defaultValue();
      }
      return defaultValue;
    }
    var updateState = useCallback(function(value) {
      if (typeof value === "undefined") {
        storage.removeItem(key);
        setState(void 0);
      } else if (isFunction$3(value)) {
        var previousState = getStoredValue();
        var currentState = value(previousState);
        try {
          storage.setItem(key, JSON.stringify(currentState));
          setState(currentState);
        } catch (e2) {
          console.error(e2);
        }
      } else {
        try {
          storage.setItem(key, JSON.stringify(value));
          setState(value);
        } catch (e2) {
          console.error(e2);
        }
      }
    }, [key]);
    return [state, updateState];
  }
  if (!nullishStorage) {
    return function(_, defaultValue) {
      return [isFunction$3(defaultValue) ? defaultValue() : defaultValue, function() {
      }];
    };
  }
  return useStorageState;
}
var useLocalStorageState = createUseStorageState(typeof window === "object" ? window.localStorage : null);
var useLocalStorageState$1 = useLocalStorageState;
var __read$2 = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read$2(useState(defaultValue), 2), state = _a[0], setState = _a[1];
  var actions = useMemo(function() {
    var reverseValueOrigin = reverseValue === void 0 ? !defaultValue : reverseValue;
    var toggle = function toggle2(value) {
      if (value !== void 0) {
        setState(value);
        return;
      }
      setState(function(s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };
    var setLeft = function setLeft2() {
      return setState(defaultValue);
    };
    var setRight = function setRight2() {
      return setState(reverseValueOrigin);
    };
    return {
      toggle,
      setLeft,
      setRight
    };
  }, [defaultValue, reverseValue]);
  return [state, actions];
}
var __read$1 = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
function useBoolean(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read$1(useToggle(defaultValue), 2), state = _a[0], toggle = _a[1].toggle;
  var actions = useMemo(function() {
    var setTrue = function setTrue2() {
      return toggle(true);
    };
    var setFalse = function setFalse2() {
      return toggle(false);
    };
    return {
      toggle,
      setTrue,
      setFalse
    };
  }, [toggle]);
  return [state, actions];
}
function useCreation(factory, deps) {
  var current = useRef({
    deps,
    obj: void 0,
    initialized: false
  }).current;
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }
  return current.obj;
}
function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps)
    return true;
  for (var i = 0; i < oldDeps.length; i++) {
    if (oldDeps[i] !== deps[i])
      return false;
  }
  return true;
}
var __read = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }
  return ar;
};
const { List: List$1, Form } = window.antd;
function Stage({
  componentName,
  configure: configure2,
  initialValues,
  onValuesChange
}) {
  const [form2] = Form.useForm();
  const propertyDefaultValues = useCreation(() => configure2.reduce((prev, { name, defaultValue }) => {
    defaultValue !== void 0 && Object.assign(prev, { [name]: defaultValue });
    return prev;
  }, {}), [configure2]);
  useEffect(() => {
    form2.setFieldsValue(__spreadValues(__spreadValues({}, propertyDefaultValues), initialValues));
  }, [initialValues, propertyDefaultValues]);
  return /* @__PURE__ */ modules$1.createElement(Form, {
    form: form2,
    onValuesChange
  }, /* @__PURE__ */ modules$1.createElement(List$1, {
    className: "pane-stage",
    dataSource: configure2,
    renderItem: (item) => {
      return /* @__PURE__ */ modules$1.createElement(SetterFormItem, __spreadValues({}, item));
    }
  }));
}
var BugOutlined$5 = { exports: {} };
var BugOutlined$4 = {};
var BugOutlined$3 = {};
Object.defineProperty(BugOutlined$3, "__esModule", { value: true });
var BugOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 00123.2-149.5A120 120 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 01308 680V412h408v268z" } }] }, "name": "bug", "theme": "outlined" };
BugOutlined$3.default = BugOutlined$2;
var _interopRequireWildcard$5 = interopRequireWildcard.exports;
var _interopRequireDefault$5 = interopRequireDefault.exports;
Object.defineProperty(BugOutlined$4, "__esModule", {
  value: true
});
BugOutlined$4.default = void 0;
var _objectSpread2$5 = _interopRequireDefault$5(objectSpread2.exports);
var React$7 = _interopRequireWildcard$5(require$$3);
var _BugOutlined = _interopRequireDefault$5(BugOutlined$3);
var _AntdIcon$5 = _interopRequireDefault$5(AntdIcon);
var BugOutlined$1 = function BugOutlined(props, ref) {
  return /* @__PURE__ */ React$7.createElement(_AntdIcon$5.default, (0, _objectSpread2$5.default)((0, _objectSpread2$5.default)({}, props), {}, {
    ref,
    icon: _BugOutlined.default
  }));
};
BugOutlined$1.displayName = "BugOutlined";
var _default$5 = /* @__PURE__ */ React$7.forwardRef(BugOutlined$1);
BugOutlined$4.default = _default$5;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _BugOutlined2 = _interopRequireDefault2(BugOutlined$4);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _BugOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(BugOutlined$5, BugOutlined$5.exports);
var BugOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(BugOutlined$5.exports);
var isArray$a = Array.isArray;
var isArray_1 = isArray$a;
var freeGlobal$1 = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$5 = root$7.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$c = Object.prototype;
var hasOwnProperty$c = objectProto$c.hasOwnProperty;
var nativeObjectToString$1 = objectProto$c.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$b = Object.prototype;
var nativeObjectToString = objectProto$b.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObjectLike$5(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$5;
var baseGetTag$4 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var symbolTag$1 = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike$4(value) && baseGetTag$4(value) == symbolTag$1;
}
var isSymbol_1 = isSymbol$4;
var isArray$9 = isArray_1, isSymbol$3 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$9(value)) {
    return false;
  }
  var type2 = typeof value;
  if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
function isObject$5(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
var isObject_1 = isObject$5;
var baseGetTag$3 = _baseGetTag, isObject$4 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$4(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$3 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$a = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$b = objectProto$a.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$3(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var nativeCreate$4 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$9 = Object.prototype;
var hasOwnProperty$a = objectProto$9.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$a.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$8 = Object.prototype;
var hasOwnProperty$9 = objectProto$8.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$9.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$3(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$3;
var eq$2 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$2(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice$3 = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice$3.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var getNative$5 = _getNative, root$5 = _root;
var Map$4 = getNative$5(root$5, "Map");
var _Map = Map$4;
var Hash = _Hash, ListCache$3 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$3)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type2 = typeof value;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var MapCache$2 = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver2) {
  if (typeof func != "function" || resolver2 != null && typeof resolver2 != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver2 ? resolver2.apply(this, args) : args[0], cache2 = memoized.cache;
    if (cache2.has(key)) {
      return cache2.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache2.set(key, result) || cache2;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2)();
  return memoized;
}
memoize$1.Cache = MapCache$2;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache2.size === MAX_MEMOIZE_SIZE) {
      cache2.clear();
    }
    return key;
  });
  var cache2 = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$2 = _Symbol, arrayMap = _arrayMap, isArray$8 = isArray_1, isSymbol$2 = isSymbol_1;
var INFINITY$2 = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$8(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$4(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$4;
var isArray$7 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString$3 = toString_1;
function castPath$3(value, object) {
  if (isArray$7(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString$3(value));
}
var _castPath = castPath$3;
var isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
function toKey$5(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _toKey = toKey$5;
var castPath$2 = _castPath, toKey$4 = _toKey;
function baseGet$2(object, path) {
  path = castPath$2(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey$4(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$2;
var baseGet$1 = _baseGet;
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$1(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$2(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$8 = objectProto$7.hasOwnProperty;
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$8.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$1;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value, length) {
  var type2 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$3;
var assignValue = _assignValue, castPath$1 = _castPath, isIndex$2 = _isIndex, isObject$2 = isObject_1, toKey$3 = _toKey;
function baseSet$1(object, path, value, customizer) {
  if (!isObject$2(object)) {
    return object;
  }
  path = castPath$1(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = toKey$3(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$2(objValue) ? objValue : isIndex$2(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet = baseSet$1;
var baseSet = _baseSet;
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
var set_1 = set;
const HOC_PROPS = [
  "request",
  "label",
  "visible",
  "hotload",
  "tips",
  "labelPosition",
  "subLabel",
  "required"
];
const BLOCK_PROPS = [
  "name",
  "renderComponent",
  "elements",
  "runAction",
  "actions",
  "itemData",
  "uiType",
  "componentKey",
  "itemData",
  "App",
  ...HOC_PROPS
];
const DEFAULT_VISION_CONFIG = {
  category: "*",
  icon: "https://img.alicdn.com/tfs/TB1whTmvAL0gK0jSZFxXXXWHVXa-200-200.svg",
  isContainer: false
};
const STRING = "string";
const NUMBER = "number";
const BOOL = "boolean";
const Normal_Types = [STRING, NUMBER, BOOL];
const Null_TYPES = ["undefined", "null"];
const Composite_Types = [
  "any",
  "any[]",
  "string[]",
  "number[]",
  "object",
  "object[]"
];
const isNotEnumTypes = (types = "") => {
  return types.split("|").some((str) => Normal_Types.concat(Composite_Types).includes(str.trim()));
};
const isNumberTypes = (types = "") => {
  return types.split("|").every((str) => [NUMBER].concat(Null_TYPES).includes(str.trim()));
};
const isTextTypes = (types = "") => {
  return types.split("|").every((str) => [STRING, NUMBER].concat(Null_TYPES).includes(str.trim()));
};
const isBoolTypes = (types = "") => {
  return types.split("|").every((str) => [BOOL].concat(Null_TYPES).includes(str.trim()));
};
const strToObj = (str) => {
  try {
    return JSON.parse(str);
  } catch (error) {
    return str;
  }
};
const filterQuotaMarkAndUndefined = (typeStr) => typeStr.split("|").map((val) => val.replace(/"/g, "").trim()).filter((val) => val !== "undefined");
const REGEXP_ISMultipleTypes = /\S+(\[\])?\s*\|/g;
const REGEXP_ISFunction = /\(.*\)\s*=>\s*.+/;
const REGEXP_ISArray = /{.+}\[]$/;
class VisionSchemaTransfer {
  transformProps(propType) {
    const defaultConfig = this.defaultVisionConfig;
    const { configure: defaultConfigure = [] } = defaultConfig;
    const { name, description } = propType;
    const defaultValue = VisionSchemaTransfer.getDefaultPropByTypes(propType);
    const type2 = get_1(propType, "type.name");
    const tags = Object.entries(propType.tags || {}).reduce((previousValue, [key, value]) => set_1(previousValue, key, strToObj(value)), {});
    if (tags.vision === false) {
      return null;
    }
    const visionJsonConfig = defaultConfigure.find((configure2) => configure2.name === name);
    const setterInfo = VisionSchemaTransfer.getSetterByTSType(type2);
    if (!setterInfo) {
      return false;
    }
    const visionDocsConfig = get_1(tags, "vision");
    return __spreadValues(__spreadValues(__spreadValues({
      name,
      tip: description,
      defaultValue
    }, setterInfo), visionJsonConfig), visionDocsConfig);
  }
  static getObjectTypes(typeStr) {
    if (!/^{.+}$/.test(typeStr.trim())) {
      return typeStr;
    }
    const reg = /(\w+)\??: ([\w\[\]]+|{.+});/g;
    let regResult, result = {};
    while (regResult = reg.exec(typeStr)) {
      const [, key, value] = regResult;
      result[key] = value;
    }
    return result;
  }
  static getSetterByTSType(tsType) {
    const typeStr = `${tsType}`.trim();
    let result;
    [
      this.getNumberSetterByTypes.bind(this),
      this.getBoolSetterByTypes.bind(this),
      this.getTextSetterByTypes.bind(this),
      this.getChoiceSetterByTypes.bind(this),
      this.getSelectSetterByTypes.bind(this)
    ].some((fn) => {
      const item = fn(typeStr);
      if (item) {
        result = item;
      }
      return item;
    });
    return result;
  }
  static getBoolSetterByTypes(types) {
    return isBoolTypes(types) && { setter: "BoolSetter" };
  }
  static getNumberSetterByTypes(types) {
    return isNumberTypes(types) && { setter: "NumberSetter" };
  }
  static getTextSetterByTypes(types) {
    return isTextTypes(types) && { setter: "TextSetter" };
  }
  static getListSetterByTypes(typeStr) {
    if (REGEXP_ISArray.test(typeStr)) {
      const typeItemStr = typeStr.replace(/\[]$/, "").trim();
      const resultType = this.getObjectTypes(typeItemStr);
      const configure2 = resultType instanceof Object ? Object.entries(resultType).map(([key, item]) => ({
        name: key,
        setter: this.getSetterByTSType(item)
      })) : void 0;
      return {
        setter: "ListSetter",
        checkField: null,
        configure: configure2
      };
    }
    return typeStr;
  }
  static getChoiceSetterByTypes(typeStr) {
    if (!REGEXP_ISFunction.test(typeStr) && REGEXP_ISMultipleTypes.test(typeStr) && !isNotEnumTypes(typeStr) && filterQuotaMarkAndUndefined(typeStr).length <= 3) {
      return {
        setter: "ChoiceSetter",
        options: filterQuotaMarkAndUndefined(typeStr)
      };
    }
    return false;
  }
  static getSelectSetterByTypes(typeStr) {
    if (!REGEXP_ISFunction.test(typeStr) && REGEXP_ISMultipleTypes.test(typeStr) && !isNotEnumTypes(typeStr)) {
      return {
        setter: "SelectSetter",
        options: typeStr.split("|").map((val) => val.replace(/"/g, "").trim()).filter((val) => val !== "undefined").map((val) => {
          return {
            text: val,
            value: val
          };
        })
      };
    }
    return false;
  }
  static getDefaultPropByTypes(propType) {
    let defaultValue = get_1(propType, "defaultValue.value");
    try {
      if (!defaultValue) {
        return defaultValue;
      }
      defaultValue = new Function("global", `return ("" + ${defaultValue}) in global ? (""+${defaultValue}) : ${defaultValue}`)(globalThis);
    } catch (e2) {
    }
    return defaultValue;
  }
  constructor(types, options) {
    this.types = types;
    const { defaultConfig = {}, blockProps = BLOCK_PROPS } = options || {};
    this.blockProps = blockProps;
    this.defaultVisionConfig = Object.assign({}, DEFAULT_VISION_CONFIG, defaultConfig);
  }
  transformTypeSchema() {
    const defaultVisionConfig = this.defaultVisionConfig;
    const { displayName, props = {}, tags = {} } = this.types;
    const isVisionContainer = tags["vision.isContainer"];
    const configure2 = Object.values(props).filter((prop) => !this.blockProps.includes(get_1(prop, "name", ""))).map(this.transformProps.bind(this)).filter(Boolean);
    const restConfigs = configure2.filter((config) => config.setter !== "ActionSetter" && config);
    let isContainer;
    if (isVisionContainer !== void 0) {
      isContainer = JSON.parse(isVisionContainer);
    } else {
      isContainer = Object.keys(props).includes("elements") || false;
    }
    return Object.assign({}, defaultVisionConfig, {
      componentName: displayName,
      isContainer,
      configure: restConfigs
    });
  }
}
function buildVisionFromTypes(typeDesc, options) {
  return new VisionSchemaTransfer(typeDesc, options).transformTypeSchema();
}
var index$7 = "";
const { Button: Button$1, Anchor } = window.antd;
function VisionPane({
  properties,
  defaultProps,
  onPropsChange
}) {
  const [propertyDrawerShow, setPropertyDrawerShow] = useLocalStorageState$1(PANE_VISIBLE, "");
  const { data: prototypeOptions } = useRequest(async () => {
    return buildVisionFromTypes(properties);
  }, {
    refreshDeps: [properties]
  });
  const renderIndex = useRef(0);
  useUpdateEffect$1(() => {
    renderIndex.current++;
    if (renderIndex.current > 1) {
      setPropertyDrawerShow("1");
    }
  }, [defaultProps]);
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: "vision-property-container"
  }, propertyDrawerShow && prototypeOptions ? /* @__PURE__ */ modules$1.createElement(Anchor, {
    offsetTop: 20,
    style: { backgroundColor: "unset" }
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "ant-drawer-wrapper-body "
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-block"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "ant-drawer-header"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "ant-drawer-title"
  }, /* @__PURE__ */ modules$1.createElement(BugOutlined2, {
    className: "code-box-code-action",
    style: { marginRight: 8 }
  }), "Debug Panel"), /* @__PURE__ */ modules$1.createElement("button", {
    "aria-label": "Close",
    className: "ant-drawer-close",
    onClick: () => setPropertyDrawerShow("")
  }, /* @__PURE__ */ modules$1.createElement(CloseOutlined2, null))), /* @__PURE__ */ modules$1.createElement("div", {
    className: "ant-drawer-body"
  }, /* @__PURE__ */ modules$1.createElement(Stage, __spreadProps(__spreadValues({}, prototypeOptions), {
    initialValues: defaultProps,
    onValuesChange: onPropsChange
  })))))) : /* @__PURE__ */ modules$1.createElement("div", {
    className: "icon-vision-property-show",
    onClick: () => setPropertyDrawerShow("1")
  }, /* @__PURE__ */ modules$1.createElement(Button$1, null, /* @__PURE__ */ modules$1.createElement(DoubleLeftOutlined2, null), "Debug Panel")));
}
var index$6 = "";
const queryRE = /\?.*$/;
const hashRE = /#.*$/;
const cleanUrl = (url) => url.replace(hashRE, "").replace(queryRE, "");
function arrayAggregator$1(array, setter, iteratee, accumulator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    var value = array[index2];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
var _arrayAggregator = arrayAggregator$1;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
function baseTimes$1(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var baseGetTag$2 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$2 = isObjectLike_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$7 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$7.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var isBuffer$3 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer3 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer3;
})(isBuffer$3, isBuffer$3.exports);
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var baseGetTag$1 = _baseGetTag, isLength$2 = isLength_1, isObjectLike$1 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) && isLength$2(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e2) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$6 = isArray_1, isBuffer$2 = isBuffer$3.exports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$6 = objectProto$5.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$6(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$4 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto2;
}
var _isPrototype = isPrototype$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$5 = objectProto$3.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$5.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$2(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$2;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$1 = isArrayLike_1;
function keys$4(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$4;
var baseFor = _baseFor, keys$3 = keys_1;
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys$3);
}
var _baseForOwn = baseForOwn$1;
var isArrayLike = isArrayLike_1;
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index2-- : ++index2 < length) {
      if (iteratee(iterable[index2], index2, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$1;
var baseForOwn = _baseForOwn, createBaseEach = _createBaseEach;
var baseEach$1 = createBaseEach(baseForOwn);
var _baseEach = baseEach$1;
var baseEach = _baseEach;
function baseAggregator$1(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee(value), collection2);
  });
  return accumulator;
}
var _baseAggregator = baseAggregator$1;
var ListCache$2 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$2();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache2, key) {
  return cache2.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$1 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$1;
function mapToArray$1(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$1 = _Symbol, Uint8Array2 = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag$1:
      var convert2 = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert2 || (convert2 = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert2(object), convert2(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$1;
var arrayPush = _arrayPush, isArray$5 = isArray_1;
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$5(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$2 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$2, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$4 = objectProto$1.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$4.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$1 = getNative$1(root$1, "Set");
var _Set = Set$1;
var getNative = _getNative, root = _root;
var WeakMap$2 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$2;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set = _Set, WeakMap$1 = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap$1);
var getTag$1 = baseGetTag;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set && getTag$1(new Set()) != setTag || WeakMap$1 && getTag$1(new WeakMap$1()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$4 = isArray_1, isBuffer$1 = isBuffer$3.exports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty$3 = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$4(object), othIsArr = isArray$4(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$3.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$3.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$1 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$1(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys$1 = keys_1;
function getMatchData$1(object) {
  var result = keys$1(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath = _castPath, isArguments = isArguments_1, isArray$3 = isArray_1, isIndex = _isIndex, isLength = isLength_1, toKey$2 = _toKey;
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey$2(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$3(object) || isArguments(object));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity$1 = identity_1, isArray$2 = isArray_1, property = property_1;
function baseIteratee$1(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity$1;
  }
  if (typeof value == "object") {
    return isArray$2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$1;
var arrayAggregator = _arrayAggregator, baseAggregator = _baseAggregator, baseIteratee = _baseIteratee, isArray$1 = isArray_1;
function createAggregator$1(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray$1(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
    return func(collection, setter, baseIteratee(iteratee), accumulator);
  };
}
var _createAggregator = createAggregator$1;
var baseAssignValue = _baseAssignValue, createAggregator = _createAggregator;
var keyBy = createAggregator(function(result, value, key) {
  baseAssignValue(result, key, value);
});
var keyBy_1 = keyBy;
const isJsx = (lang) => /^[j|t]sx$/.test(lang);
const isCSSLang = (lang) => /^(css|less|sass|scss|styl|stylus|postcss)$/.test(lang);
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var _propTypes_15_8_1_propTypes = { exports: {} };
var ReactPropTypesSecret$3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1$1 = ReactPropTypesSecret$3;
var ReactPropTypesSecret$2 = ReactPropTypesSecret_1$1;
function emptyFunction$1() {
}
function emptyFunctionWithReset$1() {
}
emptyFunctionWithReset$1.resetWarningCache = emptyFunction$1;
var factoryWithThrowingShims$1 = function() {
  function shim(props, propName, componentName, location2, propFullName, secret) {
    if (secret === ReactPropTypesSecret$2) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset$1,
    resetWarningCache: emptyFunction$1
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  _propTypes_15_8_1_propTypes.exports = factoryWithThrowingShims$1();
}
var PropTypes$1 = _propTypes_15_8_1_propTypes.exports;
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function isAbsolute(pathname) {
  return pathname.charAt(0) === "/";
}
function spliceOne(list2, index2) {
  for (var i = index2, k2 = i + 1, n2 = list2.length; k2 < n2; i += 1, k2 += 1) {
    list2[i] = list2[k2];
  }
  list2.pop();
}
function resolvePathname(to, from) {
  if (from === void 0)
    from = "";
  var toParts = to && to.split("/") || [];
  var fromParts = from && from.split("/") || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;
  if (to && isAbsolute(to)) {
    fromParts = toParts;
  } else if (toParts.length) {
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }
  if (!fromParts.length)
    return "/";
  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === "." || last === ".." || last === "";
  } else {
    hasTrailingSlash = false;
  }
  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];
    if (part === ".") {
      spliceOne(fromParts, i);
    } else if (part === "..") {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }
  if (!mustEndAbs)
    for (; up--; up)
      fromParts.unshift("..");
  if (mustEndAbs && fromParts[0] !== "" && (!fromParts[0] || !isAbsolute(fromParts[0])))
    fromParts.unshift("");
  var result = fromParts.join("/");
  if (hasTrailingSlash && result.substr(-1) !== "/")
    result += "/";
  return result;
}
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}
function valueEqual(a, b2) {
  if (a === b2)
    return true;
  if (a == null || b2 == null)
    return false;
  if (Array.isArray(a)) {
    return Array.isArray(b2) && a.length === b2.length && a.every(function(item, index2) {
      return valueEqual(item, b2[index2]);
    });
  }
  if (typeof a === "object" || typeof b2 === "object") {
    var aValue = valueOf(a);
    var bValue = valueOf(b2);
    if (aValue !== a || bValue !== b2)
      return valueEqual(aValue, bValue);
    return Object.keys(Object.assign({}, a, b2)).every(function(key) {
      return valueEqual(a[key], b2[key]);
    });
  }
  return false;
}
var isProduction = true;
var prefix = "Invariant failed";
function invariant(condition, message2) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message2 === "function" ? message2() : message2;
  var value = provided ? prefix + ": " + provided : prefix;
  throw new Error(value);
}
function addLeadingSlash$1(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === "/" ? path.substr(1) : path;
}
function hasBasename(path, prefix2) {
  return path.toLowerCase().indexOf(prefix2.toLowerCase()) === 0 && "/?#".indexOf(path.charAt(prefix2.length)) !== -1;
}
function stripBasename$1(path, prefix2) {
  return hasBasename(path, prefix2) ? path.substr(prefix2.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || "/";
  var search2 = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }
  var searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search2 = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }
  return {
    pathname,
    search: search2 === "?" ? "" : search2,
    hash: hash === "#" ? "" : hash
  };
}
function createPath(location2) {
  var pathname = location2.pathname, search2 = location2.search, hash = location2.hash;
  var path = pathname || "/";
  if (search2 && search2 !== "?")
    path += search2.charAt(0) === "?" ? search2 : "?" + search2;
  if (hash && hash !== "#")
    path += hash.charAt(0) === "#" ? hash : "#" + hash;
  return path;
}
function createLocation(path, state, key, currentLocation) {
  var location2;
  if (typeof path === "string") {
    location2 = parsePath(path);
    location2.state = state;
  } else {
    location2 = _extends({}, path);
    if (location2.pathname === void 0)
      location2.pathname = "";
    if (location2.search) {
      if (location2.search.charAt(0) !== "?")
        location2.search = "?" + location2.search;
    } else {
      location2.search = "";
    }
    if (location2.hash) {
      if (location2.hash.charAt(0) !== "#")
        location2.hash = "#" + location2.hash;
    } else {
      location2.hash = "";
    }
    if (state !== void 0 && location2.state === void 0)
      location2.state = state;
  }
  try {
    location2.pathname = decodeURI(location2.pathname);
  } catch (e2) {
    if (e2 instanceof URIError) {
      throw new URIError('Pathname "' + location2.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
    } else {
      throw e2;
    }
  }
  if (key)
    location2.key = key;
  if (currentLocation) {
    if (!location2.pathname) {
      location2.pathname = currentLocation.pathname;
    } else if (location2.pathname.charAt(0) !== "/") {
      location2.pathname = resolvePathname(location2.pathname, currentLocation.pathname);
    }
  } else {
    if (!location2.pathname) {
      location2.pathname = "/";
    }
  }
  return location2;
}
function locationsAreEqual(a, b2) {
  return a.pathname === b2.pathname && a.search === b2.search && a.hash === b2.hash && a.key === b2.key && valueEqual(a.state, b2.state);
}
function createTransitionManager() {
  var prompt = null;
  function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    return function() {
      if (prompt === nextPrompt)
        prompt = null;
    };
  }
  function confirmTransitionTo(location2, action, getUserConfirmation, callback) {
    if (prompt != null) {
      var result = typeof prompt === "function" ? prompt(location2, action) : prompt;
      if (typeof result === "string") {
        if (typeof getUserConfirmation === "function") {
          getUserConfirmation(result, callback);
        } else {
          callback(true);
        }
      } else {
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }
  var listeners2 = [];
  function appendListener(fn) {
    var isActive = true;
    function listener() {
      if (isActive)
        fn.apply(void 0, arguments);
    }
    listeners2.push(listener);
    return function() {
      isActive = false;
      listeners2 = listeners2.filter(function(item) {
        return item !== listener;
      });
    };
  }
  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    listeners2.forEach(function(listener) {
      return listener.apply(void 0, args);
    });
  }
  return {
    setPrompt,
    confirmTransitionTo,
    appendListener,
    notifyListeners
  };
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function getConfirmation(message2, callback) {
  callback(window.confirm(message2));
}
function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf("Android 2.") !== -1 || ua.indexOf("Android 4.0") !== -1) && ua.indexOf("Mobile Safari") !== -1 && ua.indexOf("Chrome") === -1 && ua.indexOf("Windows Phone") === -1)
    return false;
  return window.history && "pushState" in window.history;
}
function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function isExtraneousPopstateEvent(event) {
  return event.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var PopStateEvent = "popstate";
var HashChangeEvent = "hashchange";
function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e2) {
    return {};
  }
}
function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props, _props$forceRefresh = _props.forceRefresh, forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename2 = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  function getDOMLocation(historyState) {
    var _ref = historyState || {}, key = _ref.key, state = _ref.state;
    var _window$location = window.location, pathname = _window$location.pathname, search2 = _window$location.search, hash = _window$location.hash;
    var path = pathname + search2 + hash;
    if (basename2)
      path = stripBasename$1(path, basename2);
    return createLocation(path, state, key);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function handlePopState(event) {
    if (isExtraneousPopstateEvent(event))
      return;
    handlePop(getDOMLocation(event.state));
  }
  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }
  var forceNextPop = false;
  function handlePop(location2) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState({
            action,
            location: location2
          });
        } else {
          revertPop(location2);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];
  function createHref(location2) {
    return basename2 + createPath(location2);
  }
  function push(path, state) {
    var action = "PUSH";
    var location2 = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location2);
      var key = location2.key, state2 = location2.state;
      if (canUseHistory) {
        globalHistory.pushState({
          key,
          state: state2
        }, null, href);
        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location2.key);
          allKeys = nextKeys;
          setState({
            action,
            location: location2
          });
        }
      } else {
        window.location.href = href;
      }
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location2 = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location2);
      var key = location2.key, state2 = location2.state;
      if (canUseHistory) {
        globalHistory.replaceState({
          key,
          state: state2
        }, null, href);
        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1)
            allKeys[prevIndex] = location2.key;
          setState({
            action,
            location: location2
          });
        }
      } else {
        window.location.replace(href);
      }
    });
  }
  function go(n2) {
    globalHistory.go(n2);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
var HashChangeEvent$1 = "hashchange";
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === "!" ? path : "!/" + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === "!" ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash$1
  },
  slash: {
    encodePath: addLeadingSlash$1,
    decodePath: addLeadingSlash$1
  }
};
function stripHash(url) {
  var hashIndex = url.indexOf("#");
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}
function getHashPath() {
  var href = window.location.href;
  var hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.substring(hashIndex + 1);
}
function pushHashPath(path) {
  window.location.hash = path;
}
function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + "#" + path);
}
function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  supportsGoWithoutReloadUsingHash();
  var _props = props, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$hashType = _props.hashType, hashType = _props$hashType === void 0 ? "slash" : _props$hashType;
  var basename2 = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath2 = _HashPathCoders$hashT.encodePath, decodePath2 = _HashPathCoders$hashT.decodePath;
  function getDOMLocation() {
    var path2 = decodePath2(getHashPath());
    if (basename2)
      path2 = stripBasename$1(path2, basename2);
    return createLocation(path2);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  var forceNextPop = false;
  var ignorePath = null;
  function locationsAreEqual$$1(a, b2) {
    return a.pathname === b2.pathname && a.search === b2.search && a.hash === b2.hash;
  }
  function handleHashChange() {
    var path2 = getHashPath();
    var encodedPath2 = encodePath2(path2);
    if (path2 !== encodedPath2) {
      replaceHashPath(encodedPath2);
    } else {
      var location2 = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location2))
        return;
      if (ignorePath === createPath(location2))
        return;
      ignorePath = null;
      handlePop(location2);
    }
  }
  function handlePop(location2) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState({
            action,
            location: location2
          });
        } else {
          revertPop(location2);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var path = getHashPath();
  var encodedPath = encodePath2(path);
  if (path !== encodedPath)
    replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];
  function createHref(location2) {
    var baseTag = document.querySelector("base");
    var href = "";
    if (baseTag && baseTag.getAttribute("href")) {
      href = stripHash(window.location.href);
    }
    return href + "#" + encodePath2(basename2 + createPath(location2));
  }
  function push(path2, state) {
    var action = "PUSH";
    var location2 = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location2);
      var encodedPath2 = encodePath2(basename2 + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        pushHashPath(encodedPath2);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path3);
        allPaths = nextPaths;
        setState({
          action,
          location: location2
        });
      } else {
        setState();
      }
    });
  }
  function replace(path2, state) {
    var action = "REPLACE";
    var location2 = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location2);
      var encodedPath2 = encodePath2(basename2 + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        replaceHashPath(encodedPath2);
      }
      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1)
        allPaths[prevIndex] = path3;
      setState({
        action,
        location: location2
      });
    });
  }
  function go(n2) {
    globalHistory.go(n2);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
function clamp(n2, lowerBound, upperBound) {
  return Math.min(Math.max(n2, lowerBound), upperBound);
}
function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, getUserConfirmation = _props.getUserConfirmation, _props$initialEntries = _props.initialEntries, initialEntries = _props$initialEntries === void 0 ? ["/"] : _props$initialEntries, _props$initialIndex = _props.initialIndex, initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var index2 = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function(entry) {
    return typeof entry === "string" ? createLocation(entry, void 0, createKey()) : createLocation(entry, void 0, entry.key || createKey());
  });
  var createHref = createPath;
  function push(path, state) {
    var action = "PUSH";
    var location2 = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location2);
      } else {
        nextEntries.push(location2);
      }
      setState({
        action,
        location: location2,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location2 = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      history.entries[history.index] = location2;
      setState({
        action,
        location: location2
      });
    });
  }
  function go(n2) {
    var nextIndex = clamp(history.index + n2, 0, history.entries.length - 1);
    var action = "POP";
    var location2 = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (ok2) {
        setState({
          action,
          location: location2,
          index: nextIndex
        });
      } else {
        setState();
      }
    });
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  function canGo(n2) {
    var nextIndex = history.index + n2;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    return transitionManager.setPrompt(prompt);
  }
  function listen(listener) {
    return transitionManager.appendListener(listener);
  }
  var history = {
    length: entries.length,
    action: "POP",
    location: entries[index2],
    index: index2,
    entries,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    canGo,
    block,
    listen
  };
  return history;
}
var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
function getUniqueId() {
  var key = "__global_unique_id__";
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}
function objectIs(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function(h2) {
        return h2 !== handler;
      });
    },
    get: function get2() {
      return value;
    },
    set: function set2(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function(handler) {
        return handler(value, changedBits);
      });
    }
  };
}
function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}
function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;
  var contextProp = "__create-react-context-" + getUniqueId() + "__";
  var Provider = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Provider2, _Component);
    function Provider2() {
      var _this;
      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }
    var _proto = Provider2.prototype;
    _proto.getChildContext = function getChildContext() {
      var _ref;
      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };
    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;
        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          changedBits |= 0;
          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };
    _proto.render = function render() {
      return this.props.children;
    };
    return Provider2;
  }(Component);
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = PropTypes$1.object.isRequired, _Provider$childContex);
  var Consumer = /* @__PURE__ */ function(_Component2) {
    _inheritsLoose(Consumer2, _Component2);
    function Consumer2() {
      var _this2;
      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };
      _this2.onUpdate = function(newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };
      return _this2;
    }
    var _proto2 = Consumer2.prototype;
    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };
    _proto2.getValue = function getValue2() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };
    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };
    return Consumer2;
  }(Component);
  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = PropTypes$1.object, _Consumer$contextType);
  return {
    Provider,
    Consumer
  };
}
var index$5 = modules$1.createContext || createReactContext;
var _pathToRegexp_1_8_0_pathToRegexp = { exports: {} };
var _isarray_0_0_1_isarray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
};
var isarray = _isarray_0_0_1_isarray;
_pathToRegexp_1_8_0_pathToRegexp.exports = pathToRegexp;
_pathToRegexp_1_8_0_pathToRegexp.exports.parse = parse$3;
_pathToRegexp_1_8_0_pathToRegexp.exports.compile = compile;
_pathToRegexp_1_8_0_pathToRegexp.exports.tokensToFunction = tokensToFunction;
_pathToRegexp_1_8_0_pathToRegexp.exports.tokensToRegExp = tokensToRegExp;
var PATH_REGEXP = new RegExp([
  "(\\\\.)",
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse$3(str, options) {
  var tokens = [];
  var key = 0;
  var index2 = 0;
  var path = "";
  var defaultDelimiter = options && options.delimiter || "/";
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m2 = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index2, offset);
    index2 = offset + m2.length;
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index2];
    var prefix2 = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];
    if (path) {
      tokens.push(path);
      path = "";
    }
    var partial = prefix2 != null && next != null && next !== prefix2;
    var repeat = modifier === "+" || modifier === "*";
    var optional = modifier === "?" || modifier === "*";
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix2 || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
    });
  }
  if (index2 < str.length) {
    path += str.substr(index2);
  }
  if (path) {
    tokens.push(path);
  }
  return tokens;
}
function compile(str, options) {
  return tokensToFunction(parse$3(str, options), options);
}
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function(c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function(c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function tokensToFunction(tokens, options) {
  var matches = new Array(tokens.length);
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === "object") {
      matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
    }
  }
  return function(obj, opts) {
    var path = "";
    var data = obj || {};
    var options2 = opts || {};
    var encode = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data[token.name];
      var segment;
      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i2].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i2].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, "\\$1");
}
function attachKeys(re, keys2) {
  re.keys = keys2;
  return re;
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys2) {
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys2.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }
  return attachKeys(path, keys2);
}
function arrayToRegexp(path, keys2, options) {
  var parts = [];
  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys2, options).source);
  }
  var regexp = new RegExp("(?:" + parts.join("|") + ")", flags(options));
  return attachKeys(regexp, keys2);
}
function stringToRegexp(path, keys2, options) {
  return tokensToRegExp(parse$3(path, options), keys2, options);
}
function tokensToRegExp(tokens, keys2, options) {
  if (!isarray(keys2)) {
    options = keys2 || options;
    keys2 = [];
  }
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = "";
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token === "string") {
      route += escapeString(token);
    } else {
      var prefix2 = escapeString(token.prefix);
      var capture = "(?:" + token.pattern + ")";
      keys2.push(token);
      if (token.repeat) {
        capture += "(?:" + prefix2 + capture + ")*";
      }
      if (token.optional) {
        if (!token.partial) {
          capture = "(?:" + prefix2 + "(" + capture + "))?";
        } else {
          capture = prefix2 + "(" + capture + ")?";
        }
      } else {
        capture = prefix2 + "(" + capture + ")";
      }
      route += capture;
    }
  }
  var delimiter = escapeString(options.delimiter || "/");
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
  }
  if (end) {
    route += "$";
  } else {
    route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
  }
  return attachKeys(new RegExp("^" + route, flags(options)), keys2);
}
function pathToRegexp(path, keys2, options) {
  if (!isarray(keys2)) {
    options = keys2 || options;
    keys2 = [];
  }
  options = options || {};
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys2);
  }
  if (isarray(path)) {
    return arrayToRegexp(path, keys2, options);
  }
  return stringToRegexp(path, keys2, options);
}
var pathToRegexp$1 = _pathToRegexp_1_8_0_pathToRegexp.exports;
var _reactIs_16_13_1_reactIs = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = typeof Symbol === "function" && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$1 = b$1 ? Symbol.for("react.fragment") : 60107, f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$1 = b$1 ? Symbol.for("react.provider") : 60109, k$1 = b$1 ? Symbol.for("react.context") : 60110, l$1 = b$1 ? Symbol.for("react.async_mode") : 60111, m$1 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$2 = b$1 ? Symbol.for("react.suspense") : 60113, q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$1 ? Symbol.for("react.memo") : 60115, t$1 = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w$1 = b$1 ? Symbol.for("react.fundamental") : 60117, x$1 = b$1 ? Symbol.for("react.responder") : 60118, y$1 = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a) {
  if (typeof a === "object" && a !== null) {
    var u = a.$$typeof;
    switch (u) {
      case c$1:
        switch (a = a.type, a) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$2:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k$1:
              case n$1:
              case t$1:
              case r$1:
              case h$1:
                return a;
              default:
                return u;
            }
        }
      case d$1:
        return u;
    }
  }
}
function A$1(a) {
  return z$1(a) === m$1;
}
reactIs_production_min$1.AsyncMode = l$1;
reactIs_production_min$1.ConcurrentMode = m$1;
reactIs_production_min$1.ContextConsumer = k$1;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$1;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t$1;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$2;
reactIs_production_min$1.isAsyncMode = function(a) {
  return A$1(a) || z$1(a) === l$1;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a) {
  return z$1(a) === k$1;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return z$1(a) === h$1;
};
reactIs_production_min$1.isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return z$1(a) === n$1;
};
reactIs_production_min$1.isFragment = function(a) {
  return z$1(a) === e$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return z$1(a) === t$1;
};
reactIs_production_min$1.isMemo = function(a) {
  return z$1(a) === r$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return z$1(a) === d$1;
};
reactIs_production_min$1.isProfiler = function(a) {
  return z$1(a) === g$1;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return z$1(a) === f$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return z$1(a) === p$2;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === e$1 || a === m$1 || a === g$1 || a === f$1 || a === p$2 || a === q$1 || typeof a === "object" && a !== null && (a.$$typeof === t$1 || a.$$typeof === r$1 || a.$$typeof === h$1 || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w$1 || a.$$typeof === x$1 || a.$$typeof === y$1 || a.$$typeof === v$1);
};
reactIs_production_min$1.typeOf = z$1;
{
  _reactIs_16_13_1_reactIs.exports = reactIs_production_min$1;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var reactIs$1 = _reactIs_16_13_1_reactIs.exports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
var createNamedContext = function createNamedContext2(name) {
  var context2 = index$5();
  context2.displayName = name;
  return context2;
};
var historyContext = /* @__PURE__ */ createNamedContext("Router-History");
var context = /* @__PURE__ */ createNamedContext("Router");
var Router = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Router2, _React$Component);
  Router2.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };
  function Router2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    };
    _this._isMounted = false;
    _this._pendingLocation = null;
    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function(location2) {
        if (_this._isMounted) {
          _this.setState({
            location: location2
          });
        } else {
          _this._pendingLocation = location2;
        }
      });
    }
    return _this;
  }
  var _proto = Router2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };
  _proto.render = function render() {
    return /* @__PURE__ */ modules$1.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router2.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /* @__PURE__ */ modules$1.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };
  return Router2;
}(modules$1.Component);
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(MemoryRouter, _React$Component);
  function MemoryRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }
  var _proto = MemoryRouter.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ modules$1.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return MemoryRouter;
})(modules$1.Component);
var Lifecycle = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Lifecycle2, _React$Component);
  function Lifecycle2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Lifecycle2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount)
      this.props.onMount.call(this, this);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate)
      this.props.onUpdate.call(this, this, prevProps);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount)
      this.props.onUnmount.call(this, this);
  };
  _proto.render = function render() {
    return null;
  };
  return Lifecycle2;
}(modules$1.Component);
var cache = {};
var cacheLimit = 1e4;
var cacheCount = 0;
function compilePath(path) {
  if (cache[path])
    return cache[path];
  var generator = pathToRegexp$1.compile(path);
  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }
  return generator;
}
function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }
  if (params === void 0) {
    params = {};
  }
  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}
function Redirect(_ref) {
  var computedMatch = _ref.computedMatch, to = _ref.to, _ref$push = _ref.push, push = _ref$push === void 0 ? false : _ref$push;
  return /* @__PURE__ */ modules$1.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history, staticContext = context2.staticContext;
    var method = push ? history.push : history.replace;
    var location2 = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to);
    if (staticContext) {
      method(location2);
      return null;
    }
    return /* @__PURE__ */ modules$1.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location2);
      },
      onUpdate: function onUpdate(self2, prevProps) {
        var prevLocation = createLocation(prevProps.to);
        if (!locationsAreEqual(prevLocation, _extends({}, location2, {
          key: prevLocation.key
        }))) {
          method(location2);
        }
      },
      to
    });
  });
}
var cache$1 = {};
var cacheLimit$1 = 1e4;
var cacheCount$1 = 0;
function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path])
    return pathCache[path];
  var keys2 = [];
  var regexp = pathToRegexp$1(path, keys2, options);
  var result = {
    regexp,
    keys: keys2
  };
  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }
  return result;
}
function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }
  var _options = options, path = _options.path, _options$exact = _options.exact, exact = _options$exact === void 0 ? false : _options$exact, _options$strict = _options.strict, strict = _options$strict === void 0 ? false : _options$strict, _options$sensitive = _options.sensitive, sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function(matched, path2) {
    if (!path2 && path2 !== "")
      return null;
    if (matched)
      return matched;
    var _compilePath = compilePath$1(path2, {
      end: exact,
      strict,
      sensitive
    }), regexp = _compilePath.regexp, keys2 = _compilePath.keys;
    var match = regexp.exec(pathname);
    if (!match)
      return null;
    var url = match[0], values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact)
      return null;
    return {
      path: path2,
      url: path2 === "/" && url === "" ? "/" : url,
      isExact,
      params: keys2.reduce(function(memo2, key, index2) {
        memo2[key.name] = values[index2];
        return memo2;
      }, {})
    };
  }, null);
}
function isEmptyChildren(children) {
  return modules$1.Children.count(children) === 0;
}
var Route = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Route2, _React$Component);
  function Route2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Route2.prototype;
  _proto.render = function render() {
    var _this = this;
    return /* @__PURE__ */ modules$1.createElement(context.Consumer, null, function(context$1) {
      !context$1 ? invariant(false) : void 0;
      var location2 = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch : _this.props.path ? matchPath(location2.pathname, _this.props) : context$1.match;
      var props = _extends({}, context$1, {
        location: location2,
        match
      });
      var _this$props = _this.props, children = _this$props.children, component = _this$props.component, render2 = _this$props.render;
      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }
      return /* @__PURE__ */ modules$1.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ? children(props) : children : component ? /* @__PURE__ */ modules$1.createElement(component, props) : render2 ? render2(props) : null : typeof children === "function" ? children(props) : null);
    });
  };
  return Route2;
}(modules$1.Component);
function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function addBasename(basename2, location2) {
  if (!basename2)
    return location2;
  return _extends({}, location2, {
    pathname: addLeadingSlash(basename2) + location2.pathname
  });
}
function stripBasename(basename2, location2) {
  if (!basename2)
    return location2;
  var base = addLeadingSlash(basename2);
  if (location2.pathname.indexOf(base) !== 0)
    return location2;
  return _extends({}, location2, {
    pathname: location2.pathname.substr(base.length)
  });
}
function createURL(location2) {
  return typeof location2 === "string" ? location2 : createPath(location2);
}
function staticHandler(methodName) {
  return function() {
    invariant(false);
  };
}
function noop() {
}
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(StaticRouter, _React$Component);
  function StaticRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handlePush = function(location2) {
      return _this.navigateTo(location2, "PUSH");
    };
    _this.handleReplace = function(location2) {
      return _this.navigateTo(location2, "REPLACE");
    };
    _this.handleListen = function() {
      return noop;
    };
    _this.handleBlock = function() {
      return noop;
    };
    return _this;
  }
  var _proto = StaticRouter.prototype;
  _proto.navigateTo = function navigateTo(location2, action) {
    var _this$props = this.props, _this$props$basename = _this$props.basename, basename2 = _this$props$basename === void 0 ? "" : _this$props$basename, _this$props$context = _this$props.context, context2 = _this$props$context === void 0 ? {} : _this$props$context;
    context2.action = action;
    context2.location = addBasename(basename2, createLocation(location2));
    context2.url = createURL(context2.location);
  };
  _proto.render = function render() {
    var _this$props2 = this.props, _this$props2$basename = _this$props2.basename, basename2 = _this$props2$basename === void 0 ? "" : _this$props2$basename, _this$props2$context = _this$props2.context, context2 = _this$props2$context === void 0 ? {} : _this$props2$context, _this$props2$location = _this$props2.location, location2 = _this$props2$location === void 0 ? "/" : _this$props2$location, rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);
    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename2 + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename2, createLocation(location2)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler(),
      goBack: staticHandler(),
      goForward: staticHandler(),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /* @__PURE__ */ modules$1.createElement(Router, _extends({}, rest, {
      history,
      staticContext: context2
    }));
  };
  return StaticRouter;
})(modules$1.Component);
var Switch = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Switch2, _React$Component);
  function Switch2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Switch2.prototype;
  _proto.render = function render() {
    var _this = this;
    return /* @__PURE__ */ modules$1.createElement(context.Consumer, null, function(context2) {
      !context2 ? invariant(false) : void 0;
      var location2 = _this.props.location || context2.location;
      var element, match;
      modules$1.Children.forEach(_this.props.children, function(child) {
        if (match == null && /* @__PURE__ */ modules$1.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location2.pathname, _extends({}, child.props, {
            path
          })) : context2.match;
        }
      });
      return match ? /* @__PURE__ */ modules$1.cloneElement(element, {
        location: location2,
        computedMatch: match
      }) : null;
    });
  };
  return Switch2;
}(modules$1.Component);
var useContext = modules$1.useContext;
function useLocation() {
  return useContext(context).location;
}
function useRouteMatch(path) {
  var location2 = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location2.pathname, path) : match;
}
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);
  function BrowserRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }
  var _proto = BrowserRouter.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ modules$1.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return BrowserRouter;
})(modules$1.Component);
var HashRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(HashRouter2, _React$Component);
  function HashRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }
  var _proto = HashRouter2.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ modules$1.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return HashRouter2;
}(modules$1.Component);
var resolveToLocation = function resolveToLocation2(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation2(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};
var forwardRefShim = function forwardRefShim2(C) {
  return C;
};
var forwardRef = modules$1.forwardRef;
if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var LinkAnchor = forwardRef(function(_ref, forwardedRef) {
  var innerRef = _ref.innerRef, navigate = _ref.navigate, _onClick = _ref.onClick, rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);
  var target = rest.target;
  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick)
          _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }
      if (!event.defaultPrevented && event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
        event.preventDefault();
        navigate();
      }
    }
  });
  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  return /* @__PURE__ */ modules$1.createElement("a", props);
});
var Link = forwardRef(function(_ref2, forwardedRef) {
  var _ref2$component = _ref2.component, component = _ref2$component === void 0 ? LinkAnchor : _ref2$component, replace = _ref2.replace, to = _ref2.to, innerRef = _ref2.innerRef, rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);
  return /* @__PURE__ */ modules$1.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history;
    var location2 = normalizeToLocation(resolveToLocation(to, context2.location), context2.location);
    var href = location2 ? history.createHref(location2) : "";
    var props = _extends({}, rest, {
      href,
      navigate: function navigate() {
        var location3 = resolveToLocation(to, context2.location);
        var isDuplicateNavigation = createPath(context2.location) === createPath(normalizeToLocation(location3));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location3);
      }
    });
    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return /* @__PURE__ */ modules$1.createElement(component, props);
  });
});
var forwardRefShim$1 = function forwardRefShim3(C) {
  return C;
};
var forwardRef$1 = modules$1.forwardRef;
if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}
function joinClassnames() {
  for (var _len = arguments.length, classnames2 = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames2[_key] = arguments[_key];
  }
  return classnames2.filter(function(i) {
    return i;
  }).join(" ");
}
forwardRef$1(function(_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"], ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent, _ref$activeClassName = _ref.activeClassName, activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName, activeStyle = _ref.activeStyle, classNameProp = _ref.className, exact = _ref.exact, isActiveProp = _ref.isActive, locationProp = _ref.location, sensitive = _ref.sensitive, strict = _ref.strict, styleProp = _ref.style, to = _ref.to, innerRef = _ref.innerRef, rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return /* @__PURE__ */ modules$1.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var currentLocation = locationProp || context2.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname;
    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact,
      sensitive,
      strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;
    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = _extends({}, style, activeStyle);
    }
    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className,
      style,
      to: toLocation
    }, rest);
    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return /* @__PURE__ */ modules$1.createElement(Link, props);
  });
});
function addRegistry(file, fn) {
  var _a;
  (_a = window.HotReloadRegister$) == null ? void 0 : _a.call(window, file, fn);
}
function useRoute() {
  const { url: route } = useRouteMatch();
  return { route };
}
class ModuleLoadError extends Error {
}
function useAsyncImport(path, cb = ({ default: Comp }) => Comp) {
  const [Module, setModule] = useState();
  useMemo(async () => {
    var _a, _b;
    try {
      const setNewModule = (newModule) => {
        const Comp = cb(newModule);
        setModule(() => Comp);
      };
      const cUrl = cleanUrl(path);
      if (!window.RuntimeModuleMap$[cUrl]) {
        throw `'${cUrl}' is not in runtime module map...`;
      }
      const result = await ((_b = (_a = window.RuntimeModuleMap$)[cUrl]) == null ? void 0 : _b.call(_a, (filePath) => {
        addRegistry(filePath, setNewModule);
      }));
      setNewModule(result);
    } catch (e2) {
      console.error(`Load module ${path} error:`, e2);
      setModule({
        error: new ModuleLoadError([
          `Please make sure follow files exist in your project`,
          `-  ${path}`
        ].join("\n"))
      });
    }
  }, [path]);
  return Module;
}
function useTypeFile() {
  const { route } = useRoute();
  const typeFile = route.replace(".md", ".tsx.type$.json");
  return useAsyncImport(typeFile, ({ default: properties }) => {
    const { default: compProps } = keyBy_1(properties, "exportName");
    return compProps || (properties == null ? void 0 : properties[0]);
  });
}
function useRouteMap() {
  return useAsyncImport(`/route-map.json`);
}
function useComponentInfo() {
  return useAsyncImport(`/package.json`, ({ default: packageInfo }) => {
    var _a, _b;
    const packageName = packageInfo.name;
    const packageVersion = packageInfo.version;
    const registry = (((_a = packageInfo.publishConfig) == null ? void 0 : _a.registry) || "https://npmjs.com").replace("registry.", "");
    return {
      packageName,
      packageVersion,
      registry,
      npmLink: `${registry}/package/${packageName}/v/${packageVersion}`,
      logo: (_b = packageInfo.componentConfig) == null ? void 0 : _b.logo
    };
  });
}
function useMarkdown() {
  const { route } = useRoute();
  const readmeFile = route.replace(".html", ".md");
  const disposeArr = useRef([]);
  useEffect(() => () => {
    let fn;
    while (fn = disposeArr.current.pop()) {
      fn();
    }
  }, []);
  const results = useAsyncImport(readmeFile, ({ default: packageInfo }) => {
    return packageInfo;
  });
  if (results == null ? void 0 : results.error) {
    return results;
  }
  let moduleMap;
  if (results) {
    const styleModules = results.modules.filter(({ lang }) => isCSSLang(lang));
    moduleMap = results.modules.reduce((previousValue, currentValue) => {
      if (!isJsx(currentValue.lang)) {
        return previousValue;
      }
      return Object.assign(previousValue, {
        [currentValue.sourcesContent.trim()]: (...args) => {
          currentValue.load(...args);
          styleModules.forEach((mod) => {
            mod.load();
          });
        }
      });
    }, {});
  }
  if (!results) {
    return null;
  }
  let error;
  return {
    error,
    content: results.content,
    pathHash: results.pathHash,
    moduleMap
  };
}
var immutable = extend$2;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function extend$2() {
  var target = {};
  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (hasOwnProperty$2.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
var bail_1 = bail$1;
function bail$1(err) {
  if (err) {
    throw err;
  }
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var isBuffer = function isBuffer2(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};
var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray2(arr) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(arr);
  }
  return toStr.call(arr) === "[object Array]";
};
var isPlainObject = function isPlainObject2(obj) {
  if (!obj || toStr.call(obj) !== "[object Object]") {
    return false;
  }
  var hasOwnConstructor = hasOwn.call(obj, "constructor");
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }
  var key;
  for (key in obj) {
  }
  return typeof key === "undefined" || hasOwn.call(obj, key);
};
var setProperty = function setProperty2(target, options) {
  if (defineProperty && options.name === "__proto__") {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
};
var getProperty = function getProperty2(obj, name) {
  if (name === "__proto__") {
    if (!hasOwn.call(obj, name)) {
      return void 0;
    } else if (gOPD) {
      return gOPD(obj, name).value;
    }
  }
  return obj[name];
};
var extend$1 = function extend() {
  var options, name, src, copy2, copyIsArray, clone;
  var target = arguments[0];
  var i = 1;
  var length = arguments.length;
  var deep = false;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }
  if (target == null || typeof target !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i < length; ++i) {
    options = arguments[i];
    if (options != null) {
      for (name in options) {
        src = getProperty(target, name);
        copy2 = getProperty(options, name);
        if (target !== copy2) {
          if (deep && copy2 && (isPlainObject(copy2) || (copyIsArray = isArray(copy2)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            }
            setProperty(target, { name, newValue: extend(deep, clone, copy2) });
          } else if (typeof copy2 !== "undefined") {
            setProperty(target, { name, newValue: copy2 });
          }
        }
      }
    }
  }
  return target;
};
var isPlainObj = (value) => {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
};
var slice$2 = [].slice;
var wrap_1 = wrap$2;
function wrap$2(fn, callback) {
  var invoked;
  return wrapped;
  function wrapped() {
    var params = slice$2.call(arguments, 0);
    var callback2 = fn.length > params.length;
    var result;
    if (callback2) {
      params.push(done);
    }
    try {
      result = fn.apply(null, params);
    } catch (error) {
      if (callback2 && invoked) {
        throw error;
      }
      return done(error);
    }
    if (!callback2) {
      if (result && typeof result.then === "function") {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done() {
    if (!invoked) {
      invoked = true;
      callback.apply(null, arguments);
    }
  }
  function then(value) {
    done(null, value);
  }
}
var wrap$1 = wrap_1;
var trough_1 = trough$1;
trough$1.wrap = wrap$1;
var slice$1 = [].slice;
function trough$1() {
  var fns = [];
  var middleware = {};
  middleware.run = run;
  middleware.use = use;
  return middleware;
  function run() {
    var index2 = -1;
    var input = slice$1.call(arguments, 0, -1);
    var done = arguments[arguments.length - 1];
    if (typeof done !== "function") {
      throw new Error("Expected function as last argument, not " + done);
    }
    next.apply(null, [null].concat(input));
    function next(err) {
      var fn = fns[++index2];
      var params = slice$1.call(arguments, 0);
      var values = params.slice(1);
      var length = input.length;
      var pos = -1;
      if (err) {
        done(err);
        return;
      }
      while (++pos < length) {
        if (values[pos] === null || values[pos] === void 0) {
          values[pos] = input[pos];
        }
      }
      input = values;
      if (fn) {
        wrap$1(fn, next).apply(null, input);
      } else {
        done.apply(null, [null].concat(input));
      }
    }
  }
  function use(fn) {
    if (typeof fn !== "function") {
      throw new Error("Expected `fn` to be a function, not " + fn);
    }
    fns.push(fn);
    return middleware;
  }
}
var own$4 = {}.hasOwnProperty;
var unistUtilStringifyPosition = stringify$1;
function stringify$1(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if (own$4.call(value, "position") || own$4.call(value, "type")) {
    return position(value.position);
  }
  if (own$4.call(value, "start") || own$4.call(value, "end")) {
    return position(value);
  }
  if (own$4.call(value, "line") || own$4.call(value, "column")) {
    return point(value);
  }
  return "";
}
function point(point2) {
  if (!point2 || typeof point2 !== "object") {
    point2 = {};
  }
  return index$4(point2.line) + ":" + index$4(point2.column);
}
function position(pos) {
  if (!pos || typeof pos !== "object") {
    pos = {};
  }
  return point(pos.start) + "-" + point(pos.end);
}
function index$4(value) {
  return value && typeof value === "number" ? value : 1;
}
var stringify = unistUtilStringifyPosition;
var vfileMessage = VMessage$1;
function VMessagePrototype() {
}
VMessagePrototype.prototype = Error.prototype;
VMessage$1.prototype = new VMessagePrototype();
var proto = VMessage$1.prototype;
proto.file = "";
proto.name = "";
proto.reason = "";
proto.message = "";
proto.stack = "";
proto.fatal = null;
proto.column = null;
proto.line = null;
function VMessage$1(reason, position2, origin) {
  var parts;
  var range;
  var location2;
  if (typeof position2 === "string") {
    origin = position2;
    position2 = null;
  }
  parts = parseOrigin(origin);
  range = stringify(position2) || "1:1";
  location2 = {
    start: { line: null, column: null },
    end: { line: null, column: null }
  };
  if (position2 && position2.position) {
    position2 = position2.position;
  }
  if (position2) {
    if (position2.start) {
      location2 = position2;
      position2 = position2.start;
    } else {
      location2.start = position2;
    }
  }
  if (reason.stack) {
    this.stack = reason.stack;
    reason = reason.message;
  }
  this.message = reason;
  this.name = range;
  this.reason = reason;
  this.line = position2 ? position2.line : null;
  this.column = position2 ? position2.column : null;
  this.location = location2;
  this.source = parts[0];
  this.ruleId = parts[1];
}
function parseOrigin(origin) {
  var result = [null, null];
  var index2;
  if (typeof origin === "string") {
    index2 = origin.indexOf(":");
    if (index2 === -1) {
      result[1] = origin;
    } else {
      result[0] = origin.slice(0, index2);
      result[1] = origin.slice(index2 + 1);
    }
  }
  return result;
}
var minpath_browser = {};
minpath_browser.basename = basename;
minpath_browser.dirname = dirname;
minpath_browser.extname = extname;
minpath_browser.join = join;
minpath_browser.sep = "/";
function basename(path, ext) {
  var start = 0;
  var end = -1;
  var index2;
  var firstNonSlashEnd;
  var seenNonSlash;
  var extIndex;
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath$1(path);
  index2 = path.length;
  if (ext === void 0 || !ext.length || ext.length > path.length) {
    while (index2--) {
      if (path.charCodeAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index2 + 1;
      }
    }
    return end < 0 ? "" : path.slice(start, end);
  }
  if (ext === path) {
    return "";
  }
  firstNonSlashEnd = -1;
  extIndex = ext.length - 1;
  while (index2--) {
    if (path.charCodeAt(index2) === 47) {
      if (seenNonSlash) {
        start = index2 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index2 + 1;
      }
      if (extIndex > -1) {
        if (path.charCodeAt(index2) === ext.charCodeAt(extIndex--)) {
          if (extIndex < 0) {
            end = index2;
          }
        } else {
          extIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path.length;
  }
  return path.slice(start, end);
}
function dirname(path) {
  var end;
  var unmatchedSlash;
  var index2;
  assertPath$1(path);
  if (!path.length) {
    return ".";
  }
  end = -1;
  index2 = path.length;
  while (--index2) {
    if (path.charCodeAt(index2) === 47) {
      if (unmatchedSlash) {
        end = index2;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path.charCodeAt(0) === 47 ? "/" : "." : end === 1 && path.charCodeAt(0) === 47 ? "//" : path.slice(0, end);
}
function extname(path) {
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var preDotState = 0;
  var unmatchedSlash;
  var code;
  var index2;
  assertPath$1(path);
  index2 = path.length;
  while (index2--) {
    code = path.charCodeAt(index2);
    if (code === 47) {
      if (unmatchedSlash) {
        startPart = index2 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index2 + 1;
    }
    if (code === 46) {
      if (startDot < 0) {
        startDot = index2;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path.slice(startDot, end);
}
function join() {
  var index2 = -1;
  var joined;
  while (++index2 < arguments.length) {
    assertPath$1(arguments[index2]);
    if (arguments[index2]) {
      joined = joined === void 0 ? arguments[index2] : joined + "/" + arguments[index2];
    }
  }
  return joined === void 0 ? "." : normalize(joined);
}
function normalize(path) {
  var absolute;
  var value;
  assertPath$1(path);
  absolute = path.charCodeAt(0) === 47;
  value = normalizeString(path, !absolute);
  if (!value.length && !absolute) {
    value = ".";
  }
  if (value.length && path.charCodeAt(path.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path, allowAboveRoot) {
  var result = "";
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var index2 = -1;
  var code;
  var lastSlashIndex;
  while (++index2 <= path.length) {
    if (index2 < path.length) {
      code = path.charCodeAt(index2);
    } else if (code === 47) {
      break;
    } else {
      code = 47;
    }
    if (code === 47) {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (lastSlash !== index2 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46 || result.charCodeAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index2;
              dots = 0;
              continue;
            }
          } else if (result.length) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length) {
          result += "/" + path.slice(lastSlash + 1, index2);
        } else {
          result = path.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (code === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath$1(path) {
  if (typeof path !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
  }
}
var minproc_browser = {};
minproc_browser.cwd = cwd;
function cwd() {
  return "/";
}
var p$1 = minpath_browser;
var proc = minproc_browser;
var buffer$1 = isBuffer;
var core = VFile$1;
var own$3 = {}.hasOwnProperty;
var order = ["history", "path", "basename", "stem", "extname", "dirname"];
VFile$1.prototype.toString = toString$2;
Object.defineProperty(VFile$1.prototype, "path", { get: getPath, set: setPath });
Object.defineProperty(VFile$1.prototype, "dirname", {
  get: getDirname,
  set: setDirname
});
Object.defineProperty(VFile$1.prototype, "basename", {
  get: getBasename,
  set: setBasename
});
Object.defineProperty(VFile$1.prototype, "extname", {
  get: getExtname,
  set: setExtname
});
Object.defineProperty(VFile$1.prototype, "stem", { get: getStem, set: setStem });
function VFile$1(options) {
  var prop;
  var index2;
  if (!options) {
    options = {};
  } else if (typeof options === "string" || buffer$1(options)) {
    options = { contents: options };
  } else if ("message" in options && "messages" in options) {
    return options;
  }
  if (!(this instanceof VFile$1)) {
    return new VFile$1(options);
  }
  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = proc.cwd();
  index2 = -1;
  while (++index2 < order.length) {
    prop = order[index2];
    if (own$3.call(options, prop)) {
      this[prop] = options[prop];
    }
  }
  for (prop in options) {
    if (order.indexOf(prop) < 0) {
      this[prop] = options[prop];
    }
  }
}
function getPath() {
  return this.history[this.history.length - 1];
}
function setPath(path) {
  assertNonEmpty(path, "path");
  if (this.path !== path) {
    this.history.push(path);
  }
}
function getDirname() {
  return typeof this.path === "string" ? p$1.dirname(this.path) : void 0;
}
function setDirname(dirname2) {
  assertPath(this.path, "dirname");
  this.path = p$1.join(dirname2 || "", this.basename);
}
function getBasename() {
  return typeof this.path === "string" ? p$1.basename(this.path) : void 0;
}
function setBasename(basename2) {
  assertNonEmpty(basename2, "basename");
  assertPart(basename2, "basename");
  this.path = p$1.join(this.dirname || "", basename2);
}
function getExtname() {
  return typeof this.path === "string" ? p$1.extname(this.path) : void 0;
}
function setExtname(extname2) {
  assertPart(extname2, "extname");
  assertPath(this.path, "extname");
  if (extname2) {
    if (extname2.charCodeAt(0) !== 46) {
      throw new Error("`extname` must start with `.`");
    }
    if (extname2.indexOf(".", 1) > -1) {
      throw new Error("`extname` cannot contain multiple dots");
    }
  }
  this.path = p$1.join(this.dirname, this.stem + (extname2 || ""));
}
function getStem() {
  return typeof this.path === "string" ? p$1.basename(this.path, this.extname) : void 0;
}
function setStem(stem) {
  assertNonEmpty(stem, "stem");
  assertPart(stem, "stem");
  this.path = p$1.join(this.dirname || "", stem + (this.extname || ""));
}
function toString$2(encoding) {
  return (this.contents || "").toString(encoding);
}
function assertPart(part, name) {
  if (part && part.indexOf(p$1.sep) > -1) {
    throw new Error("`" + name + "` cannot be a path: did not expect `" + p$1.sep + "`");
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath(path, name) {
  if (!path) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
var VMessage = vfileMessage;
var VFile = core;
var lib = VFile;
VFile.prototype.message = message$1;
VFile.prototype.info = info;
VFile.prototype.fail = fail;
function message$1(reason, position2, origin) {
  var message2 = new VMessage(reason, position2, origin);
  if (this.path) {
    message2.name = this.path + ":" + message2.name;
    message2.file = this.path;
  }
  message2.fatal = false;
  this.messages.push(message2);
  return message2;
}
function fail() {
  var message2 = this.message.apply(this, arguments);
  message2.fatal = true;
  throw message2;
}
function info() {
  var message2 = this.message.apply(this, arguments);
  message2.fatal = null;
  return message2;
}
var vfile$1 = lib;
var bail = bail_1;
var buffer = isBuffer;
var extend2 = extend$1;
var plain = isPlainObj;
var trough = trough_1;
var vfile = vfile$1;
var unified_1 = unified$1().freeze();
var slice = [].slice;
var own$2 = {}.hasOwnProperty;
var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
function pipelineParse(p2, ctx) {
  ctx.tree = p2.parse(ctx.file);
}
function pipelineRun(p2, ctx, next) {
  p2.run(ctx.tree, ctx.file, done);
  function done(error, tree, file) {
    if (error) {
      next(error);
    } else {
      ctx.tree = tree;
      ctx.file = file;
      next();
    }
  }
}
function pipelineStringify(p2, ctx) {
  var result = p2.stringify(ctx.tree, ctx.file);
  if (result === void 0 || result === null)
    ;
  else if (typeof result === "string" || buffer(result)) {
    if ("value" in ctx.file) {
      ctx.file.value = result;
    }
    ctx.file.contents = result;
  } else {
    ctx.file.result = result;
  }
}
function unified$1() {
  var attachers = [];
  var transformers = trough();
  var namespace = {};
  var freezeIndex = -1;
  var frozen;
  processor.data = data;
  processor.freeze = freeze;
  processor.attachers = attachers;
  processor.use = use;
  processor.parse = parse2;
  processor.stringify = stringify2;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process;
  processor.processSync = processSync;
  return processor;
  function processor() {
    var destination = unified$1();
    var index2 = -1;
    while (++index2 < attachers.length) {
      destination.use.apply(null, attachers[index2]);
    }
    destination.data(extend2(true, {}, namespace));
    return destination;
  }
  function freeze() {
    var values;
    var transformer;
    if (frozen) {
      return processor;
    }
    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex];
      if (values[1] === false) {
        continue;
      }
      if (values[1] === true) {
        values[1] = void 0;
      }
      transformer = values[0].apply(processor, values.slice(1));
      if (typeof transformer === "function") {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Infinity;
    return processor;
  }
  function data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", frozen);
        namespace[key] = value;
        return processor;
      }
      return own$2.call(namespace, key) && namespace[key] || null;
    }
    if (key) {
      assertUnfrozen("data", frozen);
      namespace = key;
      return processor;
    }
    return namespace;
  }
  function use(value) {
    var settings;
    assertUnfrozen("use", frozen);
    if (value === null || value === void 0)
      ;
    else if (typeof value === "function") {
      addPlugin.apply(null, arguments);
    } else if (typeof value === "object") {
      if ("length" in value) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new Error("Expected usable value, not `" + value + "`");
    }
    if (settings) {
      namespace.settings = extend2(namespace.settings || {}, settings);
    }
    return processor;
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = extend2(settings || {}, result.settings);
      }
    }
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2);
      } else if (typeof value2 === "object") {
        if ("length" in value2) {
          addPlugin.apply(null, value2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new Error("Expected usable value, not `" + value2 + "`");
      }
    }
    function addList(plugins) {
      var index2 = -1;
      if (plugins === null || plugins === void 0)
        ;
      else if (typeof plugins === "object" && "length" in plugins) {
        while (++index2 < plugins.length) {
          add(plugins[index2]);
        }
      } else {
        throw new Error("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, value2) {
      var entry = find(plugin);
      if (entry) {
        if (plain(entry[1]) && plain(value2)) {
          value2 = extend2(true, entry[1], value2);
        }
        entry[1] = value2;
      } else {
        attachers.push(slice.call(arguments));
      }
    }
  }
  function find(plugin) {
    var index2 = -1;
    while (++index2 < attachers.length) {
      if (attachers[index2][0] === plugin) {
        return attachers[index2];
      }
    }
  }
  function parse2(doc) {
    var file = vfile(doc);
    var Parser;
    freeze();
    Parser = processor.Parser;
    assertParser("parse", Parser);
    if (newable(Parser, "parse")) {
      return new Parser(String(file), file).parse();
    }
    return Parser(String(file), file);
  }
  function run(node, file, cb) {
    assertNode(node);
    freeze();
    if (!cb && typeof file === "function") {
      cb = file;
      file = null;
    }
    if (!cb) {
      return new Promise(executor);
    }
    executor(null, cb);
    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done);
      function done(error, tree, file2) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          cb(null, tree, file2);
        }
      }
    }
  }
  function runSync(node, file) {
    var result;
    var complete;
    run(node, file, done);
    assertDone("runSync", "run", complete);
    return result;
    function done(error, tree) {
      complete = true;
      result = tree;
      bail(error);
    }
  }
  function stringify2(node, doc) {
    var file = vfile(doc);
    var Compiler;
    freeze();
    Compiler = processor.Compiler;
    assertCompiler("stringify", Compiler);
    assertNode(node);
    if (newable(Compiler, "compile")) {
      return new Compiler(node, file).compile();
    }
    return Compiler(node, file);
  }
  function process(doc, cb) {
    freeze();
    assertParser("process", processor.Parser);
    assertCompiler("process", processor.Compiler);
    if (!cb) {
      return new Promise(executor);
    }
    executor(null, cb);
    function executor(resolve, reject) {
      var file = vfile(doc);
      pipeline.run(processor, { file }, done);
      function done(error) {
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(file);
        } else {
          cb(null, file);
        }
      }
    }
  }
  function processSync(doc) {
    var file;
    var complete;
    freeze();
    assertParser("processSync", processor.Parser);
    assertCompiler("processSync", processor.Compiler);
    file = vfile(doc);
    process(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value === "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  var key;
  for (key in value) {
    return true;
  }
  return false;
}
function assertParser(name, Parser) {
  if (typeof Parser !== "function") {
    throw new Error("Cannot `" + name + "` without `Parser`");
  }
}
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== "function") {
    throw new Error("Cannot `" + name + "` without `Compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error("Cannot invoke `" + name + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.");
  }
}
function assertNode(node) {
  if (!node || typeof node.type !== "string") {
    throw new Error("Expected node, got `" + node + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
  }
}
var mdastUtilToString = toString$1;
function toString$1(node) {
  return node && (node.value || node.alt || node.title || "children" in node && all(node.children) || "length" in node && all(node)) || "";
}
function all(values) {
  var result = [];
  var index2 = -1;
  while (++index2 < values.length) {
    result[index2] = toString$1(values[index2]);
  }
  return result.join("");
}
var assign$5 = Object.assign;
var assign_1 = assign$5;
var own$1 = {}.hasOwnProperty;
var hasOwnProperty$1 = own$1;
function normalizeIdentifier$3(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var normalizeIdentifier_1 = normalizeIdentifier$3;
var fromCharCode$4 = String.fromCharCode;
var fromCharCode_1 = fromCharCode$4;
var fromCharCode$3 = fromCharCode_1;
function safeFromInt$1(value, base) {
  var code = parseInt(value, base);
  if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) {
    return "\uFFFD";
  }
  return fromCharCode$3(code);
}
var safeFromInt_1 = safeFromInt$1;
var content$3 = {};
function markdownLineEnding$j(code) {
  return code < -2;
}
var markdownLineEnding_1 = markdownLineEnding$j;
function markdownSpace$9(code) {
  return code === -2 || code === -1 || code === 32;
}
var markdownSpace_1 = markdownSpace$9;
var markdownSpace$8 = markdownSpace_1;
function spaceFactory(effects, ok2, type2, max) {
  var limit2 = max ? max - 1 : Infinity;
  var size = 0;
  return start;
  function start(code) {
    if (markdownSpace$8(code)) {
      effects.enter(type2);
      return prefix2(code);
    }
    return ok2(code);
  }
  function prefix2(code) {
    if (markdownSpace$8(code) && size++ < limit2) {
      effects.consume(code);
      return prefix2;
    }
    effects.exit(type2);
    return ok2(code);
  }
}
var factorySpace$h = spaceFactory;
Object.defineProperty(content$3, "__esModule", { value: true });
var markdownLineEnding$i = markdownLineEnding_1;
var factorySpace$g = factorySpace$h;
var tokenize$2 = initializeContent;
function initializeContent(effects) {
  var contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  var previous2;
  return contentStart;
  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return factorySpace$g(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code) {
    effects.enter("paragraph");
    return lineStart(code);
  }
  function lineStart(code) {
    var token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous2
    });
    if (previous2) {
      previous2.next = token;
    }
    previous2 = token;
    return data(code);
  }
  function data(code) {
    if (code === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code);
      return;
    }
    if (markdownLineEnding$i(code)) {
      effects.consume(code);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code);
    return data;
  }
}
content$3.tokenize = tokenize$2;
var document$3 = {};
var markdownLineEnding$h = markdownLineEnding_1;
var factorySpace$f = factorySpace$h;
var partialBlankLine$4 = {
  tokenize: tokenizePartialBlankLine,
  partial: true
};
function tokenizePartialBlankLine(effects, ok2, nok) {
  return factorySpace$f(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code) {
    return code === null || markdownLineEnding$h(code) ? ok2(code) : nok(code);
  }
}
var partialBlankLine_1 = partialBlankLine$4;
Object.defineProperty(document$3, "__esModule", { value: true });
var markdownLineEnding$g = markdownLineEnding_1;
var factorySpace$e = factorySpace$h;
var partialBlankLine$3 = partialBlankLine_1;
var tokenize$1 = initializeDocument;
var containerConstruct = {
  tokenize: tokenizeContainer
};
var lazyFlowConstruct = {
  tokenize: tokenizeLazyFlow
};
function initializeDocument(effects) {
  var self2 = this;
  var stack = [];
  var continued = 0;
  var inspectConstruct = {
    tokenize: tokenizeInspect,
    partial: true
  };
  var inspectResult;
  var childFlow;
  var childToken;
  return start;
  function start(code) {
    if (continued < stack.length) {
      self2.containerState = stack[continued][1];
      return effects.attempt(stack[continued][0].continuation, documentContinue, documentContinued)(code);
    }
    return documentContinued(code);
  }
  function documentContinue(code) {
    continued++;
    return start(code);
  }
  function documentContinued(code) {
    if (inspectResult && inspectResult.flowContinue) {
      return flowStart(code);
    }
    self2.interrupt = childFlow && childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
    self2.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
  }
  function containerContinue(code) {
    stack.push([self2.currentConstruct, self2.containerState]);
    self2.containerState = void 0;
    return documentContinued(code);
  }
  function flowStart(code) {
    if (code === null) {
      exitContainers(0, true);
      effects.consume(code);
      return;
    }
    childFlow = childFlow || self2.parser.flow(self2.now());
    effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code);
  }
  function flowContinue(code) {
    if (code === null) {
      continueFlow(effects.exit("chunkFlow"));
      return flowStart(code);
    }
    if (markdownLineEnding$g(code)) {
      effects.consume(code);
      continueFlow(effects.exit("chunkFlow"));
      return effects.check(inspectConstruct, documentAfterPeek);
    }
    effects.consume(code);
    return flowContinue;
  }
  function documentAfterPeek(code) {
    exitContainers(inspectResult.continued, inspectResult && inspectResult.flowEnd);
    continued = 0;
    return start(code);
  }
  function continueFlow(token) {
    if (childToken)
      childToken.next = token;
    childToken = token;
    childFlow.lazy = inspectResult && inspectResult.lazy;
    childFlow.defineSkip(token.start);
    childFlow.write(self2.sliceStream(token));
  }
  function exitContainers(size, end) {
    var index2 = stack.length;
    if (childFlow && end) {
      childFlow.write([null]);
      childToken = childFlow = void 0;
    }
    while (index2-- > size) {
      self2.containerState = stack[index2][1];
      stack[index2][0].exit.call(self2, effects);
    }
    stack.length = size;
  }
  function tokenizeInspect(effects2, ok2) {
    var subcontinued = 0;
    inspectResult = {};
    return inspectStart;
    function inspectStart(code) {
      if (subcontinued < stack.length) {
        self2.containerState = stack[subcontinued][1];
        return effects2.attempt(stack[subcontinued][0].continuation, inspectContinue, inspectLess)(code);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        inspectResult.flowContinue = true;
        return inspectDone(code);
      }
      self2.interrupt = childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
      self2.containerState = {};
      return effects2.attempt(containerConstruct, inspectFlowEnd, inspectDone)(code);
    }
    function inspectContinue(code) {
      subcontinued++;
      return self2.containerState._closeFlow ? inspectFlowEnd(code) : inspectStart(code);
    }
    function inspectLess(code) {
      if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
        self2.containerState = {};
        return effects2.attempt(containerConstruct, inspectFlowEnd, effects2.attempt(lazyFlowConstruct, inspectFlowEnd, effects2.check(partialBlankLine$3, inspectFlowEnd, inspectLazy)))(code);
      }
      return inspectFlowEnd(code);
    }
    function inspectLazy(code) {
      subcontinued = stack.length;
      inspectResult.lazy = true;
      inspectResult.flowContinue = true;
      return inspectDone(code);
    }
    function inspectFlowEnd(code) {
      inspectResult.flowEnd = true;
      return inspectDone(code);
    }
    function inspectDone(code) {
      inspectResult.continued = subcontinued;
      self2.interrupt = self2.containerState = void 0;
      return ok2(code);
    }
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace$e(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
}
function tokenizeLazyFlow(effects, ok2, nok) {
  return factorySpace$e(effects, effects.lazy(this.parser.constructs.flow, ok2, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
}
document$3.tokenize = tokenize$1;
var flow$2 = {};
function sizeChunks$2(chunks) {
  var index2 = -1;
  var size = 0;
  while (++index2 < chunks.length) {
    size += typeof chunks[index2] === "string" ? chunks[index2].length : 1;
  }
  return size;
}
var sizeChunks_1 = sizeChunks$2;
var sizeChunks$1 = sizeChunks_1;
function prefixSize$4(events, type2) {
  var tail = events[events.length - 1];
  if (!tail || tail[1].type !== type2)
    return 0;
  return sizeChunks$1(tail[2].sliceStream(tail[1]));
}
var prefixSize_1 = prefixSize$4;
var splice$2 = [].splice;
var splice_1 = splice$2;
var splice$1 = splice_1;
function chunkedSplice$8(list2, start, remove, items) {
  var end = list2.length;
  var chunkStart = 0;
  var parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    splice$1.apply(list2, parameters);
  } else {
    if (remove)
      splice$1.apply(list2, [start, remove]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      splice$1.apply(list2, parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
var chunkedSplice_1 = chunkedSplice$8;
var assign$4 = assign_1;
function shallow$6(object) {
  return assign$4({}, object);
}
var shallow_1 = shallow$6;
var assign$3 = assign_1;
var chunkedSplice$7 = chunkedSplice_1;
var shallow$5 = shallow_1;
function subtokenize$2(events) {
  var jumps = {};
  var index2 = -1;
  var event;
  var lineIndex;
  var otherIndex;
  var otherEvent;
  var parameters;
  var subevents;
  var more;
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events[index2];
    if (index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1].isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        assign$3(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container || event[1]._movePreviousLineEndings) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events[lineIndex][1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = shallow$5(events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        chunkedSplice$7(events, lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  var token = events[eventIndex][1];
  var context2 = events[eventIndex][2];
  var startPosition = eventIndex - 1;
  var startPositions = [];
  var tokenizer = token._tokenizer || context2.parser[token.contentType](token.start);
  var childEvents = tokenizer.events;
  var jumps = [];
  var gaps = {};
  var stream;
  var previous2;
  var index2;
  var entered;
  var end;
  var adjust;
  while (token) {
    while (events[++startPosition][1] !== token) {
    }
    startPositions.push(startPosition);
    if (!token._tokenizer) {
      stream = context2.sliceStream(token);
      if (!token.next) {
        stream.push(null);
      }
      if (previous2) {
        tokenizer.defineSkip(token.start);
      }
      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous2 = token;
    token = token.next;
  }
  token = previous2;
  index2 = childEvents.length;
  while (index2--) {
    if (childEvents[index2][0] === "enter") {
      entered = true;
    } else if (entered && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line) {
      add(childEvents.slice(index2 + 1, end));
      token._tokenizer = token.next = void 0;
      token = token.previous;
      end = index2 + 1;
    }
  }
  tokenizer.events = token._tokenizer = token.next = void 0;
  add(childEvents.slice(0, end));
  index2 = -1;
  adjust = 0;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
  function add(slice2) {
    var start = startPositions.pop();
    jumps.unshift([start, start + slice2.length - 1]);
    chunkedSplice$7(events, start, 2, slice2);
  }
}
var subtokenize_1 = subtokenize$2;
var markdownLineEnding$f = markdownLineEnding_1;
var prefixSize$3 = prefixSize_1;
var subtokenize$1 = subtokenize_1;
var factorySpace$d = factorySpace$h;
var content$2 = {
  tokenize: tokenizeContent,
  resolve: resolveContent,
  interruptible: true,
  lazy: true
};
var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
function resolveContent(events) {
  subtokenize$1(events);
  return events;
}
function tokenizeContent(effects, ok2) {
  var previous2;
  return start;
  function start(code) {
    effects.enter("content");
    previous2 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return data(code);
  }
  function data(code) {
    if (code === null) {
      return contentEnd(code);
    }
    if (markdownLineEnding$f(code)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
    }
    effects.consume(code);
    return data;
  }
  function contentEnd(code) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok2(code);
  }
  function contentContinue(code) {
    effects.consume(code);
    effects.exit("chunkContent");
    previous2 = previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    });
    return data;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  var self2 = this;
  return startLookahead;
  function startLookahead(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return factorySpace$d(effects, prefixed, "linePrefix");
  }
  function prefixed(code) {
    if (code === null || markdownLineEnding$f(code)) {
      return nok(code);
    }
    if (self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 || prefixSize$3(self2.events, "linePrefix") < 4) {
      return effects.interrupt(self2.parser.constructs.flow, nok, ok2)(code);
    }
    return ok2(code);
  }
}
var content_1 = content$2;
Object.defineProperty(flow$2, "__esModule", { value: true });
var content$1 = content_1;
var factorySpace$c = factorySpace$h;
var partialBlankLine$2 = partialBlankLine_1;
var tokenize = initializeFlow;
function initializeFlow(effects) {
  var self2 = this;
  var initial = effects.attempt(partialBlankLine$2, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace$c(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content$1, afterConstruct)), "linePrefix")));
  return initial;
  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code);
    effects.exit("lineEndingBlank");
    self2.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    self2.currentConstruct = void 0;
    return initial;
  }
}
flow$2.tokenize = tokenize;
var text$4 = {};
Object.defineProperty(text$4, "__esModule", { value: true });
var assign$2 = assign_1;
var shallow$4 = shallow_1;
var text$3 = initializeFactory("text");
var string$1 = initializeFactory("string");
var resolver = {
  resolveAll: createResolver()
};
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
  };
  function initializeText(effects) {
    var self2 = this;
    var constructs2 = this.parser.constructs[field];
    var text2 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code) {
      return atBreak(code) ? text2(code) : notText(code);
    }
    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return;
      }
      effects.enter("data");
      effects.consume(code);
      return data;
    }
    function data(code) {
      if (atBreak(code)) {
        effects.exit("data");
        return text2(code);
      }
      effects.consume(code);
      return data;
    }
    function atBreak(code) {
      var list2 = constructs2[code];
      var index2 = -1;
      if (code === null) {
        return true;
      }
      if (list2) {
        while (++index2 < list2.length) {
          if (!list2[index2].previous || list2[index2].previous.call(self2, self2.previous)) {
            return true;
          }
        }
      }
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context2) {
    var index2 = -1;
    var enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context2) : events;
  }
}
function resolveAllLineSuffixes(events, context2) {
  var eventIndex = -1;
  var chunks;
  var data;
  var chunk;
  var index2;
  var bufferIndex;
  var size;
  var tabs;
  var token;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      data = events[eventIndex - 1][1];
      chunks = context2.sliceStream(data);
      index2 = chunks.length;
      bufferIndex = -1;
      size = 0;
      tabs = void 0;
      while (index2--) {
        chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1)
          ;
        else {
          index2++;
          break;
        }
      }
      if (size) {
        token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: shallow$4(data.end)
        };
        data.end = shallow$4(token.start);
        if (data.start.offset === data.end.offset) {
          assign$2(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context2], ["exit", token, context2]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}
text$4.resolver = resolver;
text$4.string = string$1;
text$4.text = text$3;
function miniflat$3(value) {
  return value === null || value === void 0 ? [] : "length" in value ? value : [value];
}
var miniflat_1 = miniflat$3;
var hasOwnProperty = hasOwnProperty$1;
var chunkedSplice$6 = chunkedSplice_1;
var miniflat$2 = miniflat_1;
function combineExtensions$1(extensions) {
  var all2 = {};
  var index2 = -1;
  while (++index2 < extensions.length) {
    extension$1(all2, extensions[index2]);
  }
  return all2;
}
function extension$1(all2, extension2) {
  var hook;
  var left;
  var right;
  var code;
  for (hook in extension2) {
    left = hasOwnProperty.call(all2, hook) ? all2[hook] : all2[hook] = {};
    right = extension2[hook];
    for (code in right) {
      left[code] = constructs$2(miniflat$2(right[code]), hasOwnProperty.call(left, code) ? left[code] : []);
    }
  }
}
function constructs$2(list2, existing) {
  var index2 = -1;
  var before = [];
  while (++index2 < list2.length) {
    (list2[index2].add === "after" ? existing : before).push(list2[index2]);
  }
  chunkedSplice$6(existing, 0, 0, before);
  return existing;
}
var combineExtensions_1 = combineExtensions$1;
var chunkedSplice$5 = chunkedSplice_1;
function chunkedPush$3(list2, items) {
  if (list2.length) {
    chunkedSplice$5(list2, list2.length, 0, items);
    return list2;
  }
  return items;
}
var chunkedPush_1 = chunkedPush$3;
function resolveAll$3(constructs2, events, context2) {
  var called = [];
  var index2 = -1;
  var resolve;
  while (++index2 < constructs2.length) {
    resolve = constructs2[index2].resolveAll;
    if (resolve && called.indexOf(resolve) < 0) {
      events = resolve(events, context2);
      called.push(resolve);
    }
  }
  return events;
}
var resolveAll_1 = resolveAll$3;
var fromCharCode$2 = fromCharCode_1;
function serializeChunks$1(chunks) {
  var index2 = -1;
  var result = [];
  var chunk;
  var value;
  var atTab;
  while (++index2 < chunks.length) {
    chunk = chunks[index2];
    if (typeof chunk === "string") {
      value = chunk;
    } else if (chunk === -5) {
      value = "\r";
    } else if (chunk === -4) {
      value = "\n";
    } else if (chunk === -3) {
      value = "\r\n";
    } else if (chunk === -2) {
      value = "	";
    } else if (chunk === -1) {
      if (atTab)
        continue;
      value = " ";
    } else {
      value = fromCharCode$2(chunk);
    }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}
var serializeChunks_1 = serializeChunks$1;
function sliceChunks$1(chunks, token) {
  var startIndex = token.start._index;
  var startBufferIndex = token.start._bufferIndex;
  var endIndex = token.end._index;
  var endBufferIndex = token.end._bufferIndex;
  var view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
var sliceChunks_1 = sliceChunks$1;
var assign$1 = assign_1;
var markdownLineEnding$e = markdownLineEnding_1;
var chunkedPush$2 = chunkedPush_1;
var chunkedSplice$4 = chunkedSplice_1;
var miniflat$1 = miniflat_1;
var resolveAll$2 = resolveAll_1;
var serializeChunks = serializeChunks_1;
var shallow$3 = shallow_1;
var sliceChunks = sliceChunks_1;
function createTokenizer$1(parser2, initialize, from) {
  var point2 = from ? shallow$3(from) : {
    line: 1,
    column: 1,
    offset: 0
  };
  var columnStart = {};
  var resolveAllConstructs = [];
  var chunks = [];
  var stack = [];
  var effects = {
    consume,
    enter,
    exit: exit2,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    }),
    lazy: constructFactory(onsuccessfulcheck, {
      lazy: true
    })
  };
  var context2 = {
    previous: null,
    events: [],
    parser: parser2,
    sliceStream,
    sliceSerialize,
    now: now2,
    defineSkip: skip,
    write
  };
  var state = initialize.tokenize.call(context2, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  point2._index = 0;
  point2._bufferIndex = -1;
  return context2;
  function write(slice2) {
    chunks = chunkedPush$2(chunks, slice2);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context2.events = resolveAll$2(resolveAllConstructs, context2.events, context2);
    return context2.events;
  }
  function sliceSerialize(token) {
    return serializeChunks(sliceStream(token));
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now2() {
    return shallow$3(point2);
  }
  function skip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    var chunkIndex;
    var chunk;
    while (point2._index < chunks.length) {
      chunk = chunks[point2._index];
      if (typeof chunk === "string") {
        chunkIndex = point2._index;
        if (point2._bufferIndex < 0) {
          point2._bufferIndex = 0;
        }
        while (point2._index === chunkIndex && point2._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point2._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding$e(code)) {
      point2.line++;
      point2.column = 1;
      point2.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point2.column++;
      point2.offset++;
    }
    if (point2._bufferIndex < 0) {
      point2._index++;
    } else {
      point2._bufferIndex++;
      if (point2._bufferIndex === chunks[point2._index].length) {
        point2._bufferIndex = -1;
        point2._index++;
      }
    }
    context2.previous = code;
  }
  function enter(type2, fields) {
    var token = fields || {};
    token.type = type2;
    token.start = now2();
    context2.events.push(["enter", token, context2]);
    stack.push(token);
    return token;
  }
  function exit2(type2) {
    var token = stack.pop();
    token.end = now2();
    context2.events.push(["exit", token, context2]);
    return token;
  }
  function onsuccessfulconstruct(construct, info2) {
    addResult(construct, info2.from);
  }
  function onsuccessfulcheck(construct, info2) {
    info2.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      var listOfConstructs;
      var constructIndex;
      var currentConstruct;
      var info2;
      return constructs2.tokenize || "length" in constructs2 ? handleListOfConstructs(miniflat$1(constructs2)) : handleMapOfConstructs;
      function handleMapOfConstructs(code) {
        if (code in constructs2 || null in constructs2) {
          return handleListOfConstructs(constructs2.null ? miniflat$1(constructs2[code]).concat(miniflat$1(constructs2.null)) : constructs2[code])(code);
        }
        return bogusState(code);
      }
      function handleListOfConstructs(list2) {
        listOfConstructs = list2;
        constructIndex = 0;
        return handleConstruct(list2[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info2 = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context2.currentConstruct = construct;
          }
          if (construct.name && context2.parser.constructs.disable.null.indexOf(construct.name) > -1) {
            return nok();
          }
          return construct.tokenize.call(fields ? assign$1({}, context2, fields) : context2, effects, ok2, nok)(code);
        }
      }
      function ok2(code) {
        onreturn(currentConstruct, info2);
        return returnState;
      }
      function nok(code) {
        info2.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      chunkedSplice$4(context2.events, from2, context2.events.length - from2, construct.resolve(context2.events.slice(from2), context2));
    }
    if (construct.resolveTo) {
      context2.events = construct.resolveTo(context2.events, context2);
    }
  }
  function store() {
    var startPoint = now2();
    var startPrevious = context2.previous;
    var startCurrentConstruct = context2.currentConstruct;
    var startEventsIndex = context2.events.length;
    var startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point2 = startPoint;
      context2.previous = startPrevious;
      context2.currentConstruct = startCurrentConstruct;
      context2.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point2.line in columnStart && point2.column < 2) {
      point2.column = columnStart[point2.line];
      point2.offset += columnStart[point2.line] - 1;
    }
  }
}
var createTokenizer_1 = createTokenizer$1;
var constructs$1 = {};
function markdownLineEndingOrSpace$8(code) {
  return code < 0 || code === 32;
}
var markdownLineEndingOrSpace_1 = markdownLineEndingOrSpace$8;
var unicodePunctuation$2 = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var unicodePunctuationRegex$1 = unicodePunctuation$2;
var fromCharCode$1 = fromCharCode_1;
function regexCheck$8(regex) {
  return check;
  function check(code) {
    return regex.test(fromCharCode$1(code));
  }
}
var regexCheck_1 = regexCheck$8;
var unicodePunctuationRegex = unicodePunctuationRegex$1;
var regexCheck$7 = regexCheck_1;
var unicodePunctuation$1 = regexCheck$7(unicodePunctuationRegex);
var unicodePunctuation_1 = unicodePunctuation$1;
var regexCheck$6 = regexCheck_1;
var unicodeWhitespace$1 = regexCheck$6(/\s/);
var unicodeWhitespace_1 = unicodeWhitespace$1;
var markdownLineEndingOrSpace$7 = markdownLineEndingOrSpace_1;
var unicodePunctuation = unicodePunctuation_1;
var unicodeWhitespace = unicodeWhitespace_1;
function classifyCharacter$1(code) {
  if (code === null || markdownLineEndingOrSpace$7(code) || unicodeWhitespace(code)) {
    return 1;
  }
  if (unicodePunctuation(code)) {
    return 2;
  }
}
var classifyCharacter_1 = classifyCharacter$1;
function movePoint$1(point2, offset) {
  point2.column += offset;
  point2.offset += offset;
  point2._bufferIndex += offset;
  return point2;
}
var movePoint_1 = movePoint$1;
var chunkedPush$1 = chunkedPush_1;
var chunkedSplice$3 = chunkedSplice_1;
var classifyCharacter = classifyCharacter_1;
var movePoint = movePoint_1;
var resolveAll$1 = resolveAll_1;
var shallow$2 = shallow_1;
var attention$1 = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context2) {
  var index2 = -1;
  var open;
  var group;
  var text2;
  var openingSequence;
  var closingSequence;
  var use;
  var nextEvents;
  var offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context2.sliceSerialize(events[open][1]).charCodeAt(0) === context2.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: movePoint(shallow$2(events[open][1].end), -use),
            end: shallow$2(events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: shallow$2(events[index2][1].start),
            end: movePoint(shallow$2(events[index2][1].start), use)
          };
          text2 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: shallow$2(events[open][1].end),
            end: shallow$2(events[index2][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: shallow$2(openingSequence.start),
            end: shallow$2(closingSequence.end)
          };
          events[open][1].end = shallow$2(openingSequence.start);
          events[index2][1].start = shallow$2(closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = chunkedPush$1(nextEvents, [
              ["enter", events[open][1], context2],
              ["exit", events[open][1], context2]
            ]);
          }
          nextEvents = chunkedPush$1(nextEvents, [
            ["enter", group, context2],
            ["enter", openingSequence, context2],
            ["exit", openingSequence, context2],
            ["enter", text2, context2]
          ]);
          nextEvents = chunkedPush$1(nextEvents, resolveAll$1(context2.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context2));
          nextEvents = chunkedPush$1(nextEvents, [
            ["exit", text2, context2],
            ["enter", closingSequence, context2],
            ["exit", closingSequence, context2],
            ["exit", group, context2]
          ]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = chunkedPush$1(nextEvents, [
              ["enter", events[index2][1], context2],
              ["exit", events[index2][1], context2]
            ]);
          } else {
            offset = 0;
          }
          chunkedSplice$3(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok2) {
  var before = classifyCharacter(this.previous);
  var marker;
  return start;
  function start(code) {
    effects.enter("attentionSequence");
    marker = code;
    return sequence(code);
  }
  function sequence(code) {
    var token;
    var after;
    var open;
    var close;
    if (code === marker) {
      effects.consume(code);
      return sequence;
    }
    token = effects.exit("attentionSequence");
    after = classifyCharacter(code);
    open = !after || after === 2 && before;
    close = !before || before === 2 && after;
    token._open = marker === 42 ? open : open && (before || !close);
    token._close = marker === 42 ? close : close && (after || !open);
    return ok2(code);
  }
}
var attention_1 = attention$1;
var regexCheck$5 = regexCheck_1;
var asciiAlpha$3 = regexCheck$5(/[A-Za-z]/);
var asciiAlpha_1 = asciiAlpha$3;
var regexCheck$4 = regexCheck_1;
var asciiAlphanumeric$4 = regexCheck$4(/[\dA-Za-z]/);
var asciiAlphanumeric_1 = asciiAlphanumeric$4;
var regexCheck$3 = regexCheck_1;
var asciiAtext$1 = regexCheck$3(/[#-'*+\--9=?A-Z^-~]/);
var asciiAtext_1 = asciiAtext$1;
function asciiControl$2(code) {
  return code < 32 || code === 127;
}
var asciiControl_1 = asciiControl$2;
var asciiAlpha$2 = asciiAlpha_1;
var asciiAlphanumeric$3 = asciiAlphanumeric_1;
var asciiAtext = asciiAtext_1;
var asciiControl$1 = asciiControl_1;
var autolink$1 = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  var size = 1;
  return start;
  function start(code) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code) {
    if (asciiAlpha$2(code)) {
      effects.consume(code);
      return schemeOrEmailAtext;
    }
    return asciiAtext(code) ? emailAtext(code) : nok(code);
  }
  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric$3(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
  }
  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      return urlInside;
    }
    if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric$3(code)) && size++ < 32) {
      effects.consume(code);
      return schemeInsideOrEmailAtext;
    }
    return emailAtext(code);
  }
  function urlInside(code) {
    if (code === 62) {
      effects.exit("autolinkProtocol");
      return end(code);
    }
    if (code === 32 || code === 60 || asciiControl$1(code)) {
      return nok(code);
    }
    effects.consume(code);
    return urlInside;
  }
  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }
    if (asciiAtext(code)) {
      effects.consume(code);
      return emailAtext;
    }
    return nok(code);
  }
  function emailAtSignOrDot(code) {
    return asciiAlphanumeric$3(code) ? emailLabel(code) : nok(code);
  }
  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      return end(code);
    }
    return emailValue(code);
  }
  function emailValue(code) {
    if ((code === 45 || asciiAlphanumeric$3(code)) && size++ < 63) {
      effects.consume(code);
      return code === 45 ? emailValue : emailLabel;
    }
    return nok(code);
  }
  function end(code) {
    effects.enter("autolinkMarker");
    effects.consume(code);
    effects.exit("autolinkMarker");
    effects.exit("autolink");
    return ok2;
  }
}
var autolink_1 = autolink$1;
var markdownSpace$7 = markdownSpace_1;
var factorySpace$b = factorySpace$h;
var blockQuote$1 = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  var self2 = this;
  return start;
  function start(code) {
    if (code === 62) {
      if (!self2.containerState.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        self2.containerState.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code);
  }
  function after(code) {
    if (markdownSpace$7(code)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok2;
    }
    effects.exit("blockQuotePrefix");
    return ok2(code);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  return factorySpace$b(effects, effects.attempt(blockQuote$1, ok2, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
}
function exit(effects) {
  effects.exit("blockQuote");
}
var blockQuote_1 = blockQuote$1;
var regexCheck$2 = regexCheck_1;
var asciiPunctuation$1 = regexCheck$2(/[!-/:-@[-`{-~]/);
var asciiPunctuation_1 = asciiPunctuation$1;
var asciiPunctuation = asciiPunctuation_1;
var characterEscape$1 = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code);
    effects.exit("escapeMarker");
    return open;
  }
  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter("characterEscapeValue");
      effects.consume(code);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok2;
    }
    return nok(code);
  }
}
var characterEscape_1 = characterEscape$1;
var el;
var semicolon = 59;
var decodeEntity_browser = decodeEntity$1;
function decodeEntity$1(characters) {
  var entity = "&" + characters + ";";
  var char;
  el = el || document.createElement("i");
  el.innerHTML = entity;
  char = el.textContent;
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== "semi") {
    return false;
  }
  return char === entity ? false : char;
}
var regexCheck$1 = regexCheck_1;
var asciiDigit$2 = regexCheck$1(/\d/);
var asciiDigit_1 = asciiDigit$2;
var regexCheck = regexCheck_1;
var asciiHexDigit$1 = regexCheck(/[\dA-Fa-f]/);
var asciiHexDigit_1 = asciiHexDigit$1;
var decodeEntity = decodeEntity_browser;
var asciiAlphanumeric$2 = asciiAlphanumeric_1;
var asciiDigit$1 = asciiDigit_1;
var asciiHexDigit = asciiHexDigit_1;
function _interopDefaultLegacy(e2) {
  return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { default: e2 };
}
var decodeEntity__default = /* @__PURE__ */ _interopDefaultLegacy(decodeEntity);
var characterReference$1 = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  var self2 = this;
  var size = 0;
  var max;
  var test;
  return start;
  function start(code) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code) {
    if (code === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric$2;
    return value(code);
  }
  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit$1;
    return value(code);
  }
  function value(code) {
    var token;
    if (code === 59 && size) {
      token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric$2 && !decodeEntity__default["default"](self2.sliceSerialize(token))) {
        return nok(code);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok2;
    }
    if (test(code) && size++ < max) {
      effects.consume(code);
      return value;
    }
    return nok(code);
  }
}
var characterReference_1 = characterReference$1;
var markdownLineEnding$d = markdownLineEnding_1;
var markdownLineEndingOrSpace$6 = markdownLineEndingOrSpace_1;
var prefixSize$2 = prefixSize_1;
var factorySpace$a = factorySpace$h;
var codeFenced$1 = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: true
};
function tokenizeCodeFenced(effects, ok2, nok) {
  var self2 = this;
  var closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  var initialPrefix = prefixSize$2(this.events, "linePrefix");
  var sizeOpen = 0;
  var marker;
  return start;
  function start(code) {
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    marker = code;
    return sequenceOpen(code);
  }
  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeFencedFenceSequence");
    return sizeOpen < 3 ? nok(code) : factorySpace$a(effects, infoOpen, "whitespace")(code);
  }
  function infoOpen(code) {
    if (code === null || markdownLineEnding$d(code)) {
      return openAfter(code);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info2(code);
  }
  function info2(code) {
    if (code === null || markdownLineEndingOrSpace$6(code)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace$a(effects, infoAfter, "whitespace")(code);
    }
    if (code === 96 && code === marker)
      return nok(code);
    effects.consume(code);
    return info2;
  }
  function infoAfter(code) {
    if (code === null || markdownLineEnding$d(code)) {
      return openAfter(code);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code);
  }
  function meta(code) {
    if (code === null || markdownLineEnding$d(code)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return openAfter(code);
    }
    if (code === 96 && code === marker)
      return nok(code);
    effects.consume(code);
    return meta;
  }
  function openAfter(code) {
    effects.exit("codeFencedFence");
    return self2.interrupt ? ok2(code) : content2(code);
  }
  function content2(code) {
    if (code === null) {
      return after(code);
    }
    if (markdownLineEnding$d(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace$a(effects, content2, "linePrefix", initialPrefix + 1) : content2);
    }
    effects.enter("codeFlowValue");
    return contentContinue(code);
  }
  function contentContinue(code) {
    if (code === null || markdownLineEnding$d(code)) {
      effects.exit("codeFlowValue");
      return content2(code);
    }
    effects.consume(code);
    return contentContinue;
  }
  function after(code) {
    effects.exit("codeFenced");
    return ok2(code);
  }
  function tokenizeClosingFence(effects2, ok3, nok2) {
    var size = 0;
    return factorySpace$a(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
    function closingSequenceStart(code) {
      effects2.enter("codeFencedFence");
      effects2.enter("codeFencedFenceSequence");
      return closingSequence(code);
    }
    function closingSequence(code) {
      if (code === marker) {
        effects2.consume(code);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen)
        return nok2(code);
      effects2.exit("codeFencedFenceSequence");
      return factorySpace$a(effects2, closingSequenceEnd, "whitespace")(code);
    }
    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding$d(code)) {
        effects2.exit("codeFencedFence");
        return ok3(code);
      }
      return nok2(code);
    }
  }
}
var codeFenced_1 = codeFenced$1;
var markdownLineEnding$c = markdownLineEnding_1;
var chunkedSplice$2 = chunkedSplice_1;
var prefixSize$1 = prefixSize_1;
var factorySpace$9 = factorySpace$h;
var codeIndented$1 = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented,
  resolve: resolveCodeIndented
};
var indentedContentConstruct = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
function resolveCodeIndented(events, context2) {
  var code = {
    type: "codeIndented",
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  };
  chunkedSplice$2(events, 0, 0, [["enter", code, context2]]);
  chunkedSplice$2(events, events.length, 0, [["exit", code, context2]]);
  return events;
}
function tokenizeCodeIndented(effects, ok2, nok) {
  return effects.attempt(indentedContentConstruct, afterPrefix, nok);
  function afterPrefix(code) {
    if (code === null) {
      return ok2(code);
    }
    if (markdownLineEnding$c(code)) {
      return effects.attempt(indentedContentConstruct, afterPrefix, ok2)(code);
    }
    effects.enter("codeFlowValue");
    return content2(code);
  }
  function content2(code) {
    if (code === null || markdownLineEnding$c(code)) {
      effects.exit("codeFlowValue");
      return afterPrefix(code);
    }
    effects.consume(code);
    return content2;
  }
}
function tokenizeIndentedContent(effects, ok2, nok) {
  var self2 = this;
  return factorySpace$9(effects, afterPrefix, "linePrefix", 4 + 1);
  function afterPrefix(code) {
    if (markdownLineEnding$c(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return factorySpace$9(effects, afterPrefix, "linePrefix", 4 + 1);
    }
    return prefixSize$1(self2.events, "linePrefix") < 4 ? nok(code) : ok2(code);
  }
}
var codeIndented_1 = codeIndented$1;
var markdownLineEnding$b = markdownLineEnding_1;
var codeText$1 = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  var tailExitIndex = events.length - 4;
  var headEnterIndex = 3;
  var index2;
  var enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[tailExitIndex][1].type = events[headEnterIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code) {
  return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  var sizeOpen = 0;
  var size;
  var token;
  return start;
  function start(code) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return openingSequence(code);
  }
  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return openingSequence;
    }
    effects.exit("codeTextSequence");
    return gap(code);
  }
  function gap(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return closingSequence(code);
    }
    if (code === 32) {
      effects.enter("space");
      effects.consume(code);
      effects.exit("space");
      return gap;
    }
    if (markdownLineEnding$b(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return gap;
    }
    effects.enter("codeTextData");
    return data(code);
  }
  function data(code) {
    if (code === null || code === 32 || code === 96 || markdownLineEnding$b(code)) {
      effects.exit("codeTextData");
      return gap(code);
    }
    effects.consume(code);
    return data;
  }
  function closingSequence(code) {
    if (code === 96) {
      effects.consume(code);
      size++;
      return closingSequence;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok2(code);
    }
    token.type = "codeTextData";
    return data(code);
  }
}
var codeText_1 = codeText$1;
var asciiControl = asciiControl_1;
var markdownLineEndingOrSpace$5 = markdownLineEndingOrSpace_1;
var markdownLineEnding$a = markdownLineEnding_1;
function destinationFactory(effects, ok2, nok, type2, literalType, literalMarkerType, rawType, stringType, max) {
  var limit2 = max || Infinity;
  var balance = 0;
  return start;
  function start(code) {
    if (code === 60) {
      effects.enter(type2);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }
    if (asciiControl(code) || code === 41) {
      return nok(code);
    }
    effects.enter(type2);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationRaw(code);
  }
  function destinationEnclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type2);
      return ok2;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationEnclosed(code);
  }
  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return destinationEnclosedBefore(code);
    }
    if (code === null || code === 60 || markdownLineEnding$a(code)) {
      return nok(code);
    }
    effects.consume(code);
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }
  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return destinationEnclosed;
    }
    return destinationEnclosed(code);
  }
  function destinationRaw(code) {
    if (code === 40) {
      if (++balance > limit2)
        return nok(code);
      effects.consume(code);
      return destinationRaw;
    }
    if (code === 41) {
      if (!balance--) {
        effects.exit("chunkString");
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type2);
        return ok2(code);
      }
      effects.consume(code);
      return destinationRaw;
    }
    if (code === null || markdownLineEndingOrSpace$5(code)) {
      if (balance)
        return nok(code);
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type2);
      return ok2(code);
    }
    if (asciiControl(code))
      return nok(code);
    effects.consume(code);
    return code === 92 ? destinationRawEscape : destinationRaw;
  }
  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return destinationRaw;
    }
    return destinationRaw(code);
  }
}
var factoryDestination$2 = destinationFactory;
var markdownLineEnding$9 = markdownLineEnding_1;
var markdownSpace$6 = markdownSpace_1;
function labelFactory(effects, ok2, nok, type2, markerType, stringType) {
  var self2 = this;
  var size = 0;
  var data;
  return start;
  function start(code) {
    effects.enter(type2);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code) {
    if (code === null || code === 91 || code === 93 && !data || code === 94 && !size && "_hiddenFootnoteSupport" in self2.parser.constructs || size > 999) {
      return nok(code);
    }
    if (code === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type2);
      return ok2;
    }
    if (markdownLineEnding$9(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return label(code);
  }
  function label(code) {
    if (code === null || code === 91 || code === 93 || markdownLineEnding$9(code) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code);
    }
    effects.consume(code);
    data = data || !markdownSpace$6(code);
    return code === 92 ? labelEscape : label;
  }
  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return label;
    }
    return label(code);
  }
}
var factoryLabel$2 = labelFactory;
var markdownLineEnding$8 = markdownLineEnding_1;
var markdownSpace$5 = markdownSpace_1;
var factorySpace$8 = factorySpace$h;
function whitespaceFactory(effects, ok2) {
  var seen;
  return start;
  function start(code) {
    if (markdownLineEnding$8(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace$5(code)) {
      return factorySpace$8(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
    }
    return ok2(code);
  }
}
var factoryWhitespace$2 = whitespaceFactory;
var markdownLineEnding$7 = markdownLineEnding_1;
var factorySpace$7 = factorySpace$h;
function titleFactory(effects, ok2, nok, type2, markerType, stringType) {
  var marker;
  return start;
  function start(code) {
    effects.enter(type2);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === 40 ? 41 : code;
    return atFirstTitleBreak;
  }
  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type2);
      return ok2;
    }
    effects.enter(stringType);
    return atTitleBreak(code);
  }
  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }
    if (code === null) {
      return nok(code);
    }
    if (markdownLineEnding$7(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return factorySpace$7(effects, atTitleBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return title(code);
  }
  function title(code) {
    if (code === marker || code === null || markdownLineEnding$7(code)) {
      effects.exit("chunkString");
      return atTitleBreak(code);
    }
    effects.consume(code);
    return code === 92 ? titleEscape : title;
  }
  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return title;
    }
    return title(code);
  }
}
var factoryTitle$2 = titleFactory;
var markdownLineEnding$6 = markdownLineEnding_1;
var markdownLineEndingOrSpace$4 = markdownLineEndingOrSpace_1;
var normalizeIdentifier$2 = normalizeIdentifier_1;
var factoryDestination$1 = factoryDestination$2;
var factoryLabel$1 = factoryLabel$2;
var factorySpace$6 = factorySpace$h;
var factoryWhitespace$1 = factoryWhitespace$2;
var factoryTitle$1 = factoryTitle$2;
var definition$1 = {
  name: "definition",
  tokenize: tokenizeDefinition
};
var titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
};
function tokenizeDefinition(effects, ok2, nok) {
  var self2 = this;
  var identifier;
  return start;
  function start(code) {
    effects.enter("definition");
    return factoryLabel$1.call(self2, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
  }
  function labelAfter(code) {
    identifier = normalizeIdentifier$2(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1));
    if (code === 58) {
      effects.enter("definitionMarker");
      effects.consume(code);
      effects.exit("definitionMarker");
      return factoryWhitespace$1(effects, factoryDestination$1(effects, effects.attempt(titleConstruct, factorySpace$6(effects, after, "whitespace"), factorySpace$6(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
    }
    return nok(code);
  }
  function after(code) {
    if (code === null || markdownLineEnding$6(code)) {
      effects.exit("definition");
      if (self2.parser.defined.indexOf(identifier) < 0) {
        self2.parser.defined.push(identifier);
      }
      return ok2(code);
    }
    return nok(code);
  }
}
function tokenizeTitle(effects, ok2, nok) {
  return start;
  function start(code) {
    return markdownLineEndingOrSpace$4(code) ? factoryWhitespace$1(effects, before)(code) : nok(code);
  }
  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle$1(effects, factorySpace$6(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
    }
    return nok(code);
  }
  function after(code) {
    return code === null || markdownLineEnding$6(code) ? ok2(code) : nok(code);
  }
}
var definition_1 = definition$1;
var markdownLineEnding$5 = markdownLineEnding_1;
var hardBreakEscape$1 = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code) {
    effects.enter("hardBreakEscape");
    effects.enter("escapeMarker");
    effects.consume(code);
    return open;
  }
  function open(code) {
    if (markdownLineEnding$5(code)) {
      effects.exit("escapeMarker");
      effects.exit("hardBreakEscape");
      return ok2(code);
    }
    return nok(code);
  }
}
var hardBreakEscape_1 = hardBreakEscape$1;
var markdownLineEnding$4 = markdownLineEnding_1;
var markdownLineEndingOrSpace$3 = markdownLineEndingOrSpace_1;
var markdownSpace$4 = markdownSpace_1;
var chunkedSplice$1 = chunkedSplice_1;
var factorySpace$5 = factorySpace$h;
var headingAtx$1 = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context2) {
  var contentEnd = events.length - 2;
  var contentStart = 3;
  var content2;
  var text2;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content2 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text2 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    chunkedSplice$1(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content2, context2],
      ["enter", text2, context2],
      ["exit", text2, context2],
      ["exit", content2, context2]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  var self2 = this;
  var size = 0;
  return start;
  function start(code) {
    effects.enter("atxHeading");
    effects.enter("atxHeadingSequence");
    return fenceOpenInside(code);
  }
  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return fenceOpenInside;
    }
    if (code === null || markdownLineEndingOrSpace$3(code)) {
      effects.exit("atxHeadingSequence");
      return self2.interrupt ? ok2(code) : headingBreak(code);
    }
    return nok(code);
  }
  function headingBreak(code) {
    if (code === 35) {
      effects.enter("atxHeadingSequence");
      return sequence(code);
    }
    if (code === null || markdownLineEnding$4(code)) {
      effects.exit("atxHeading");
      return ok2(code);
    }
    if (markdownSpace$4(code)) {
      return factorySpace$5(effects, headingBreak, "whitespace")(code);
    }
    effects.enter("atxHeadingText");
    return data(code);
  }
  function sequence(code) {
    if (code === 35) {
      effects.consume(code);
      return sequence;
    }
    effects.exit("atxHeadingSequence");
    return headingBreak(code);
  }
  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace$3(code)) {
      effects.exit("atxHeadingText");
      return headingBreak(code);
    }
    effects.consume(code);
    return data;
  }
}
var headingAtx_1 = headingAtx$1;
var basics = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var htmlBlockNames$1 = basics;
var raws = ["pre", "script", "style", "textarea"];
var htmlRawNames$1 = raws;
var asciiAlpha$1 = asciiAlpha_1;
var asciiAlphanumeric$1 = asciiAlphanumeric_1;
var markdownLineEnding$3 = markdownLineEnding_1;
var markdownLineEndingOrSpace$2 = markdownLineEndingOrSpace_1;
var markdownSpace$3 = markdownSpace_1;
var fromCharCode = fromCharCode_1;
var htmlBlockNames = htmlBlockNames$1;
var htmlRawNames = htmlRawNames$1;
var partialBlankLine$1 = partialBlankLine_1;
var htmlFlow$1 = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
var nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
function resolveToHtmlFlow(events) {
  var index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  var self2 = this;
  var kind;
  var startTag;
  var buffer2;
  var index2;
  var marker;
  return start;
  function start(code) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code);
    return open;
  }
  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationStart;
    }
    if (code === 47) {
      effects.consume(code);
      return tagCloseStart;
    }
    if (code === 63) {
      effects.consume(code);
      kind = 3;
      return self2.interrupt ? ok2 : continuationDeclarationInside;
    }
    if (asciiAlpha$1(code)) {
      effects.consume(code);
      buffer2 = fromCharCode(code);
      startTag = true;
      return tagName;
    }
    return nok(code);
  }
  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code);
      kind = 2;
      return commentOpenInside;
    }
    if (code === 91) {
      effects.consume(code);
      kind = 5;
      buffer2 = "CDATA[";
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha$1(code)) {
      effects.consume(code);
      kind = 4;
      return self2.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code);
  }
  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return self2.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code);
  }
  function cdataOpenInside(code) {
    if (code === buffer2.charCodeAt(index2++)) {
      effects.consume(code);
      return index2 === buffer2.length ? self2.interrupt ? ok2 : continuation : cdataOpenInside;
    }
    return nok(code);
  }
  function tagCloseStart(code) {
    if (asciiAlpha$1(code)) {
      effects.consume(code);
      buffer2 = fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }
  function tagName(code) {
    if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace$2(code)) {
      if (code !== 47 && startTag && htmlRawNames.indexOf(buffer2.toLowerCase()) > -1) {
        kind = 1;
        return self2.interrupt ? ok2(code) : continuation(code);
      }
      if (htmlBlockNames.indexOf(buffer2.toLowerCase()) > -1) {
        kind = 6;
        if (code === 47) {
          effects.consume(code);
          return basicSelfClosing;
        }
        return self2.interrupt ? ok2(code) : continuation(code);
      }
      kind = 7;
      return self2.interrupt ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
    }
    if (code === 45 || asciiAlphanumeric$1(code)) {
      effects.consume(code);
      buffer2 += fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }
  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      return self2.interrupt ? ok2 : continuation;
    }
    return nok(code);
  }
  function completeClosingTagAfter(code) {
    if (markdownSpace$3(code)) {
      effects.consume(code);
      return completeClosingTagAfter;
    }
    return completeEnd(code);
  }
  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd;
    }
    if (code === 58 || code === 95 || asciiAlpha$1(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    if (markdownSpace$3(code)) {
      effects.consume(code);
      return completeAttributeNameBefore;
    }
    return completeEnd(code);
  }
  function completeAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric$1(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code);
  }
  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    if (markdownSpace$3(code)) {
      effects.consume(code);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code);
  }
  function completeAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace$3(code)) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    marker = void 0;
    return completeAttributeValueUnquoted(code);
  }
  function completeAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return completeAttributeValueQuotedAfter;
    }
    if (code === null || markdownLineEnding$3(code)) {
      return nok(code);
    }
    effects.consume(code);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace$2(code)) {
      return completeAttributeNameAfter(code);
    }
    effects.consume(code);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace$3(code)) {
      return completeAttributeNameBefore(code);
    }
    return nok(code);
  }
  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter;
    }
    return nok(code);
  }
  function completeAfter(code) {
    if (markdownSpace$3(code)) {
      effects.consume(code);
      return completeAfter;
    }
    return code === null || markdownLineEnding$3(code) ? continuation(code) : nok(code);
  }
  function continuation(code) {
    if (code === 45 && kind === 2) {
      effects.consume(code);
      return continuationCommentInside;
    }
    if (code === 60 && kind === 1) {
      effects.consume(code);
      return continuationRawTagOpen;
    }
    if (code === 62 && kind === 4) {
      effects.consume(code);
      return continuationClose;
    }
    if (code === 63 && kind === 3) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    if (code === 93 && kind === 5) {
      effects.consume(code);
      return continuationCharacterDataInside;
    }
    if (markdownLineEnding$3(code) && (kind === 6 || kind === 7)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
    }
    if (code === null || markdownLineEnding$3(code)) {
      return continuationAtLineEnding(code);
    }
    effects.consume(code);
    return continuation;
  }
  function continuationAtLineEnding(code) {
    effects.exit("htmlFlowData");
    return htmlContinueStart(code);
  }
  function htmlContinueStart(code) {
    if (code === null) {
      return done(code);
    }
    if (markdownLineEnding$3(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return htmlContinueStart;
    }
    effects.enter("htmlFlowData");
    return continuation(code);
  }
  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer2 = "";
      return continuationRawEndTag;
    }
    return continuation(code);
  }
  function continuationRawEndTag(code) {
    if (code === 62 && htmlRawNames.indexOf(buffer2.toLowerCase()) > -1) {
      effects.consume(code);
      return continuationClose;
    }
    if (asciiAlpha$1(code) && buffer2.length < 8) {
      effects.consume(code);
      buffer2 += fromCharCode(code);
      return continuationRawEndTag;
    }
    return continuation(code);
  }
  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose;
    }
    return continuation(code);
  }
  function continuationClose(code) {
    if (code === null || markdownLineEnding$3(code)) {
      effects.exit("htmlFlowData");
      return done(code);
    }
    effects.consume(code);
    return continuationClose;
  }
  function done(code) {
    effects.exit("htmlFlow");
    return ok2(code);
  }
}
function tokenizeNextBlank(effects, ok2, nok) {
  return start;
  function start(code) {
    effects.exit("htmlFlowData");
    effects.enter("lineEndingBlank");
    effects.consume(code);
    effects.exit("lineEndingBlank");
    return effects.attempt(partialBlankLine$1, ok2, nok);
  }
}
var htmlFlow_1 = htmlFlow$1;
var asciiAlpha = asciiAlpha_1;
var asciiAlphanumeric = asciiAlphanumeric_1;
var markdownLineEnding$2 = markdownLineEnding_1;
var markdownLineEndingOrSpace$1 = markdownLineEndingOrSpace_1;
var markdownSpace$2 = markdownSpace_1;
var factorySpace$4 = factorySpace$h;
var htmlText$1 = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  var self2 = this;
  var marker;
  var buffer2;
  var index2;
  var returnState;
  return start;
  function start(code) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code);
    return open;
  }
  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen;
    }
    if (code === 47) {
      effects.consume(code);
      return tagCloseStart;
    }
    if (code === 63) {
      effects.consume(code);
      return instruction;
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagOpen;
    }
    return nok(code);
  }
  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentOpen;
    }
    if (code === 91) {
      effects.consume(code);
      buffer2 = "CDATA[";
      index2 = 0;
      return cdataOpen;
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      return declaration;
    }
    return nok(code);
  }
  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentStart;
    }
    return nok(code);
  }
  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code);
    }
    if (code === 45) {
      effects.consume(code);
      return commentStartDash;
    }
    return comment(code);
  }
  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code);
    }
    return comment(code);
  }
  function comment(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 45) {
      effects.consume(code);
      return commentClose;
    }
    if (markdownLineEnding$2(code)) {
      returnState = comment;
      return atLineEnding(code);
    }
    effects.consume(code);
    return comment;
  }
  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return end;
    }
    return comment(code);
  }
  function cdataOpen(code) {
    if (code === buffer2.charCodeAt(index2++)) {
      effects.consume(code);
      return index2 === buffer2.length ? cdata : cdataOpen;
    }
    return nok(code);
  }
  function cdata(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 93) {
      effects.consume(code);
      return cdataClose;
    }
    if (markdownLineEnding$2(code)) {
      returnState = cdata;
      return atLineEnding(code);
    }
    effects.consume(code);
    return cdata;
  }
  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }
  function cdataEnd(code) {
    if (code === 62) {
      return end(code);
    }
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }
  function declaration(code) {
    if (code === null || code === 62) {
      return end(code);
    }
    if (markdownLineEnding$2(code)) {
      returnState = declaration;
      return atLineEnding(code);
    }
    effects.consume(code);
    return declaration;
  }
  function instruction(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 63) {
      effects.consume(code);
      return instructionClose;
    }
    if (markdownLineEnding$2(code)) {
      returnState = instruction;
      return atLineEnding(code);
    }
    effects.consume(code);
    return instruction;
  }
  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code);
  }
  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagClose;
    }
    return nok(code);
  }
  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagClose;
    }
    return tagCloseBetween(code);
  }
  function tagCloseBetween(code) {
    if (markdownLineEnding$2(code)) {
      returnState = tagCloseBetween;
      return atLineEnding(code);
    }
    if (markdownSpace$2(code)) {
      effects.consume(code);
      return tagCloseBetween;
    }
    return end(code);
  }
  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpen;
    }
    if (code === 47 || code === 62 || markdownLineEndingOrSpace$1(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end;
    }
    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding$2(code)) {
      returnState = tagOpenBetween;
      return atLineEnding(code);
    }
    if (markdownSpace$2(code)) {
      effects.consume(code);
      return tagOpenBetween;
    }
    return end(code);
  }
  function tagOpenAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code);
  }
  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding$2(code)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code);
    }
    if (markdownSpace$2(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code);
  }
  function tagOpenAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding$2(code)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code);
    }
    if (markdownSpace$2(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code);
    marker = void 0;
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code === null) {
      return nok(code);
    }
    if (markdownLineEnding$2(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace$1(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  function tagOpenAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
      return nok(code);
    }
    if (code === 62 || markdownLineEndingOrSpace$1(code)) {
      return tagOpenBetween(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  }
  function atLineEnding(code) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return factorySpace$4(effects, afterPrefix, "linePrefix", self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
  }
  function afterPrefix(code) {
    effects.enter("htmlTextData");
    return returnState(code);
  }
  function end(code) {
    if (code === 62) {
      effects.consume(code);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok2;
    }
    return nok(code);
  }
}
var htmlText_1 = htmlText$1;
var markdownLineEndingOrSpace = markdownLineEndingOrSpace_1;
var chunkedPush = chunkedPush_1;
var chunkedSplice = chunkedSplice_1;
var normalizeIdentifier$1 = normalizeIdentifier_1;
var resolveAll = resolveAll_1;
var shallow$1 = shallow_1;
var factoryDestination = factoryDestination$2;
var factoryLabel = factoryLabel$2;
var factoryTitle = factoryTitle$2;
var factoryWhitespace = factoryWhitespace$2;
var labelEnd$3 = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var fullReferenceConstruct = {
  tokenize: tokenizeFullReference
};
var collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
  var index2 = -1;
  var token;
  while (++index2 < events.length) {
    token = events[index2][1];
    if (!token._used && (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd")) {
      events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
      token.type = "data";
      index2++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context2) {
  var index2 = events.length;
  var offset = 0;
  var group;
  var label;
  var text2;
  var token;
  var open;
  var close;
  var media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: shallow$1(events[open][1].start),
    end: shallow$1(events[events.length - 1][1].end)
  };
  label = {
    type: "label",
    start: shallow$1(events[open][1].start),
    end: shallow$1(events[close][1].end)
  };
  text2 = {
    type: "labelText",
    start: shallow$1(events[open + offset + 2][1].end),
    end: shallow$1(events[close - 2][1].start)
  };
  media = [
    ["enter", group, context2],
    ["enter", label, context2]
  ];
  media = chunkedPush(media, events.slice(open + 1, open + offset + 3));
  media = chunkedPush(media, [["enter", text2, context2]]);
  media = chunkedPush(media, resolveAll(context2.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context2));
  media = chunkedPush(media, [
    ["exit", text2, context2],
    events[close - 2],
    events[close - 1],
    ["exit", label, context2]
  ]);
  media = chunkedPush(media, events.slice(close + 1));
  media = chunkedPush(media, [["exit", group, context2]]);
  chunkedSplice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  var self2 = this;
  var index2 = self2.events.length;
  var labelStart;
  var defined;
  while (index2--) {
    if ((self2.events[index2][1].type === "labelImage" || self2.events[index2][1].type === "labelLink") && !self2.events[index2][1]._balanced) {
      labelStart = self2.events[index2][1];
      break;
    }
  }
  return start;
  function start(code) {
    if (!labelStart) {
      return nok(code);
    }
    if (labelStart._inactive)
      return balanced(code);
    defined = self2.parser.defined.indexOf(normalizeIdentifier$1(self2.sliceSerialize({
      start: labelStart.end,
      end: self2.now()
    }))) > -1;
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return afterLabelEnd;
  }
  function afterLabelEnd(code) {
    if (code === 40) {
      return effects.attempt(resourceConstruct, ok2, defined ? ok2 : balanced)(code);
    }
    if (code === 91) {
      return effects.attempt(fullReferenceConstruct, ok2, defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced)(code);
    }
    return defined ? ok2(code) : balanced(code);
  }
  function balanced(code) {
    labelStart._balanced = true;
    return nok(code);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return start;
  function start(code) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code);
    effects.exit("resourceMarker");
    return factoryWhitespace(effects, open);
  }
  function open(code) {
    if (code === 41) {
      return end(code);
    }
    return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(code);
  }
  function destinationAfter(code) {
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, between)(code) : end(code);
  }
  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
    }
    return end(code);
  }
  function end(code) {
    if (code === 41) {
      effects.enter("resourceMarker");
      effects.consume(code);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok2;
    }
    return nok(code);
  }
}
function tokenizeFullReference(effects, ok2, nok) {
  var self2 = this;
  return start;
  function start(code) {
    return factoryLabel.call(self2, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code);
  }
  function afterLabel(code) {
    return self2.parser.defined.indexOf(normalizeIdentifier$1(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1))) < 0 ? nok(code) : ok2(code);
  }
}
function tokenizeCollapsedReference(effects, ok2, nok) {
  return start;
  function start(code) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code);
    effects.exit("referenceMarker");
    return open;
  }
  function open(code) {
    if (code === 93) {
      effects.enter("referenceMarker");
      effects.consume(code);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok2;
    }
    return nok(code);
  }
}
var labelEnd_1 = labelEnd$3;
var labelEnd$2 = labelEnd_1;
var labelStartImage$1 = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd$2.resolveAll
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  var self2 = this;
  return start;
  function start(code) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code) {
    if (code === 91) {
      effects.enter("labelMarker");
      effects.consume(code);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code);
  }
  function after(code) {
    return code === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code) : ok2(code);
  }
}
var labelStartImage_1 = labelStartImage$1;
var labelEnd$1 = labelEnd_1;
var labelStartLink$1 = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd$1.resolveAll
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  var self2 = this;
  return start;
  function start(code) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code) {
    return code === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code) : ok2(code);
  }
}
var labelStartLink_1 = labelStartLink$1;
var factorySpace$3 = factorySpace$h;
var lineEnding$1 = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return factorySpace$3(effects, ok2, "linePrefix");
  }
}
var lineEnding_1 = lineEnding$1;
var markdownLineEnding$1 = markdownLineEnding_1;
var markdownSpace$1 = markdownSpace_1;
var factorySpace$2 = factorySpace$h;
var thematicBreak$2 = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  var size = 0;
  var marker;
  return start;
  function start(code) {
    effects.enter("thematicBreak");
    marker = code;
    return atBreak(code);
  }
  function atBreak(code) {
    if (code === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code);
    }
    if (markdownSpace$1(code)) {
      return factorySpace$2(effects, atBreak, "whitespace")(code);
    }
    if (size < 3 || code !== null && !markdownLineEnding$1(code)) {
      return nok(code);
    }
    effects.exit("thematicBreak");
    return ok2(code);
  }
  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return atBreak(code);
  }
}
var thematicBreak_1 = thematicBreak$2;
var asciiDigit = asciiDigit_1;
var markdownSpace = markdownSpace_1;
var prefixSize = prefixSize_1;
var sizeChunks = sizeChunks_1;
var factorySpace$1 = factorySpace$h;
var partialBlankLine = partialBlankLine_1;
var thematicBreak$1 = thematicBreak_1;
var list$1 = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
function tokenizeListStart(effects, ok2, nok) {
  var self2 = this;
  var initialSize = prefixSize(self2.events, "linePrefix");
  var size = 0;
  return start;
  function start(code) {
    var kind = self2.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self2.containerState.marker || code === self2.containerState.marker : asciiDigit(code)) {
      if (!self2.containerState.type) {
        self2.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code === 42 || code === 45 ? effects.check(thematicBreak$1, nok, atMarker)(code) : atMarker(code);
      }
      if (!self2.interrupt || code === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code);
      }
    }
    return nok(code);
  }
  function inside(code) {
    if (asciiDigit(code) && ++size < 10) {
      effects.consume(code);
      return inside;
    }
    if ((!self2.interrupt || size < 2) && (self2.containerState.marker ? code === self2.containerState.marker : code === 41 || code === 46)) {
      effects.exit("listItemValue");
      return atMarker(code);
    }
    return nok(code);
  }
  function atMarker(code) {
    effects.enter("listItemMarker");
    effects.consume(code);
    effects.exit("listItemMarker");
    self2.containerState.marker = self2.containerState.marker || code;
    return effects.check(partialBlankLine, self2.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code) {
    self2.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }
  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code);
  }
  function endOfPrefix(code) {
    self2.containerState.size = initialSize + sizeChunks(self2.sliceStream(effects.exit("listItemPrefix")));
    return ok2(code);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  var self2 = this;
  self2.containerState._closeFlow = void 0;
  return effects.check(partialBlankLine, onBlank, notBlank);
  function onBlank(code) {
    self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
    return factorySpace$1(effects, ok2, "listItemIndent", self2.containerState.size + 1)(code);
  }
  function notBlank(code) {
    if (self2.containerState.furtherBlankLines || !markdownSpace(code)) {
      self2.containerState.furtherBlankLines = self2.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code);
    }
    self2.containerState.furtherBlankLines = self2.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code);
  }
  function notInCurrentItem(code) {
    self2.containerState._closeFlow = true;
    self2.interrupt = void 0;
    return factorySpace$1(effects, effects.attempt(list$1, ok2, nok), "linePrefix", self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(code);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  var self2 = this;
  return factorySpace$1(effects, afterPrefix, "listItemIndent", self2.containerState.size + 1);
  function afterPrefix(code) {
    return prefixSize(self2.events, "listItemIndent") === self2.containerState.size ? ok2(code) : nok(code);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  var self2 = this;
  return factorySpace$1(effects, afterPrefix, "listItemPrefixWhitespace", self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4 + 1);
  function afterPrefix(code) {
    return markdownSpace(code) || !prefixSize(self2.events, "listItemPrefixWhitespace") ? nok(code) : ok2(code);
  }
}
var list_1 = list$1;
var markdownLineEnding = markdownLineEnding_1;
var shallow = shallow_1;
var factorySpace = factorySpace$h;
var setextUnderline$1 = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context2) {
  var index2 = events.length;
  var content2;
  var text2;
  var definition2;
  var heading;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content2 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text2 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition2 && events[index2][1].type === "definition") {
        definition2 = index2;
      }
    }
  }
  heading = {
    type: "setextHeading",
    start: shallow(events[text2][1].start),
    end: shallow(events[events.length - 1][1].end)
  };
  events[text2][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text2, 0, ["enter", heading, context2]);
    events.splice(definition2 + 1, 0, ["exit", events[content2][1], context2]);
    events[content2][1].end = shallow(events[definition2][1].end);
  } else {
    events[content2][1] = heading;
  }
  events.push(["exit", heading, context2]);
  return events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  var self2 = this;
  var index2 = self2.events.length;
  var marker;
  var paragraph;
  while (index2--) {
    if (self2.events[index2][1].type !== "lineEnding" && self2.events[index2][1].type !== "linePrefix" && self2.events[index2][1].type !== "content") {
      paragraph = self2.events[index2][1].type === "paragraph";
      break;
    }
  }
  return start;
  function start(code) {
    if (!self2.lazy && (self2.interrupt || paragraph)) {
      effects.enter("setextHeadingLine");
      effects.enter("setextHeadingLineSequence");
      marker = code;
      return closingSequence(code);
    }
    return nok(code);
  }
  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code);
      return closingSequence;
    }
    effects.exit("setextHeadingLineSequence");
    return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code);
  }
  function closingSequenceEnd(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("setextHeadingLine");
      return ok2(code);
    }
    return nok(code);
  }
}
var setextUnderline_1 = setextUnderline$1;
Object.defineProperty(constructs$1, "__esModule", { value: true });
var text$1 = text$4;
var attention = attention_1;
var autolink = autolink_1;
var blockQuote = blockQuote_1;
var characterEscape = characterEscape_1;
var characterReference = characterReference_1;
var codeFenced = codeFenced_1;
var codeIndented = codeIndented_1;
var codeText = codeText_1;
var definition = definition_1;
var hardBreakEscape = hardBreakEscape_1;
var headingAtx = headingAtx_1;
var htmlFlow = htmlFlow_1;
var htmlText = htmlText_1;
var labelEnd = labelEnd_1;
var labelStartImage = labelStartImage_1;
var labelStartLink = labelStartLink_1;
var lineEnding = lineEnding_1;
var list = list_1;
var setextUnderline = setextUnderline_1;
var thematicBreak = thematicBreak_1;
var document$2 = {
  42: list,
  43: list,
  45: list,
  48: list,
  49: list,
  50: list,
  51: list,
  52: list,
  53: list,
  54: list,
  55: list,
  56: list,
  57: list,
  62: blockQuote
};
var contentInitial = {
  91: definition
};
var flowInitial = {
  "-2": codeIndented,
  "-1": codeIndented,
  32: codeIndented
};
var flow$1 = {
  35: headingAtx,
  42: thematicBreak,
  45: [setextUnderline, thematicBreak],
  60: htmlFlow,
  61: setextUnderline,
  95: thematicBreak,
  96: codeFenced,
  126: codeFenced
};
var string = {
  38: characterReference,
  92: characterEscape
};
var text$2 = {
  "-5": lineEnding,
  "-4": lineEnding,
  "-3": lineEnding,
  33: labelStartImage,
  38: characterReference,
  42: attention,
  60: [autolink, htmlText],
  91: labelStartLink,
  92: [hardBreakEscape, characterEscape],
  93: labelEnd,
  95: attention,
  96: codeText
};
var insideSpan = {
  null: [attention, text$1.resolver]
};
var disable = {
  null: []
};
constructs$1.contentInitial = contentInitial;
constructs$1.disable = disable;
constructs$1.document = document$2;
constructs$1.flow = flow$1;
constructs$1.flowInitial = flowInitial;
constructs$1.insideSpan = insideSpan;
constructs$1.string = string;
constructs$1.text = text$2;
var content = content$3;
var document$1 = document$3;
var flow = flow$2;
var text = text$4;
var combineExtensions = combineExtensions_1;
var createTokenizer = createTokenizer_1;
var miniflat = miniflat_1;
var constructs = constructs$1;
function parse$2(options) {
  var settings = options || {};
  var parser2 = {
    defined: [],
    constructs: combineExtensions([constructs].concat(miniflat(settings.extensions))),
    content: create(content),
    document: create(document$1),
    flow: create(flow),
    string: create(text.string),
    text: create(text.text)
  };
  return parser2;
  function create(initializer) {
    return creator;
    function creator(from) {
      return createTokenizer(parser2, initializer, from);
    }
  }
}
var parse_1 = parse$2;
var search = /[\0\t\n\r]/g;
function preprocess() {
  var start = true;
  var column = 1;
  var buffer2 = "";
  var atCarriageReturn;
  return preprocessor2;
  function preprocessor2(value, encoding, end) {
    var chunks = [];
    var match;
    var next;
    var startPosition;
    var endPosition;
    var code;
    value = buffer2 + value.toString(encoding);
    startPosition = 0;
    buffer2 = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match ? match.index : value.length;
      code = value.charCodeAt(endPosition);
      if (!match) {
        buffer2 = value.slice(startPosition);
        break;
      }
      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        if (code === 0) {
          chunks.push(65533);
          column++;
        } else if (code === 9) {
          next = Math.ceil(column / 4) * 4;
          chunks.push(-2);
          while (column++ < next)
            chunks.push(-1);
        } else if (code === 10) {
          chunks.push(-4);
          column = 1;
        } else {
          atCarriageReturn = true;
          column = 1;
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn)
        chunks.push(-5);
      if (buffer2)
        chunks.push(buffer2);
      chunks.push(null);
    }
    return chunks;
  }
}
var preprocess_1 = preprocess;
var subtokenize = subtokenize_1;
function postprocess$1(events) {
  while (!subtokenize(events)) {
  }
  return events;
}
var postprocess_1 = postprocess$1;
var dist$1 = fromMarkdown$1;
var toString = mdastUtilToString;
var assign = assign_1;
var own = hasOwnProperty$1;
var normalizeIdentifier = normalizeIdentifier_1;
var safeFromInt = safeFromInt_1;
var parser = parse_1;
var preprocessor = preprocess_1;
var postprocess = postprocess_1;
var decode = decodeEntity_browser;
var stringifyPosition = unistUtilStringifyPosition;
function fromMarkdown$1(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(postprocess(parser(options).document().write(preprocessor()(value, encoding, true))));
}
function compiler(options) {
  var settings = options || {};
  var config = configure({
    transforms: [],
    canContainEols: [
      "emphasis",
      "fragment",
      "heading",
      "paragraph",
      "strong"
    ],
    enter: {
      autolink: opener(link),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer2,
      codeFencedFenceMeta: buffer2,
      codeIndented: opener(codeFlow, buffer2),
      codeText: opener(codeText2, buffer2),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer2,
      definitionLabelString: buffer2,
      definitionTitleString: buffer2,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer2),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer2),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer2,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list2, onenterlistordered),
      listUnordered: opener(list2),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer2,
      resourceDestinationString: buffer2,
      resourceTitleString: buffer2,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak2)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, settings.mdastExtensions || []);
  var data = {};
  return compile2;
  function compile2(events) {
    var tree = { type: "root", children: [] };
    var stack = [tree];
    var tokenStack = [];
    var listStack = [];
    var index2 = -1;
    var handler;
    var listStart;
    var context2 = {
      stack,
      tokenStack,
      config,
      enter,
      exit: exit2,
      buffer: buffer2,
      resume,
      setData,
      getData
    };
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          listStart = listStack.pop(index2);
          index2 = prepareList(events, listStart, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      handler = config[events[index2][0]];
      if (own.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(assign({ sliceSerialize: events[index2][2].sliceSerialize }, context2), events[index2][1]);
      }
    }
    if (tokenStack.length) {
      throw new Error("Cannot close document, a token (`" + tokenStack[tokenStack.length - 1].type + "`, " + stringifyPosition({
        start: tokenStack[tokenStack.length - 1].start,
        end: tokenStack[tokenStack.length - 1].end
      }) + ") is still open");
    }
    tree.position = {
      start: point2(events.length ? events[0][1].start : { line: 1, column: 1, offset: 0 }),
      end: point2(events.length ? events[events.length - 2][1].end : { line: 1, column: 1, offset: 0 })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    var index2 = start - 1;
    var containerBalance = -1;
    var listSpread = false;
    var listItem2;
    var tailIndex;
    var lineIndex;
    var tailEvent;
    var event;
    var firstBlankLineIndex;
    var atMarker;
    while (++index2 <= length) {
      event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
        if (event[0] === "enter") {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = void 0;
      } else if (event[1].type === "lineEndingBlank") {
        if (event[0] === "enter") {
          if (listItem2 && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index2;
          }
          atMarker = void 0;
        }
      } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace")
        ;
      else {
        atMarker = void 0;
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem2) {
          tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent")
              ;
            else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem2._spread = true;
          }
          listItem2.end = point2(lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem2, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          listItem2 = {
            type: "listItem",
            _spread: false,
            start: point2(event[1].start)
          };
          events.splice(index2, 0, ["enter", listItem2, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point2(d2) {
    return { line: d2.line, column: d2.column, offset: d2.offset };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and)
        and.call(this, token);
    }
  }
  function buffer2() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function enter(node, token) {
    this.stack[this.stack.length - 1].children.push(node);
    this.stack.push(node);
    this.tokenStack.push(token);
    node.position = { start: point2(token.start) };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and)
        and.call(this, token);
      exit2.call(this, token);
    }
  }
  function exit2(token) {
    var node = this.stack.pop();
    var open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({ start: token.start, end: token.end }) + "): it\u2019s not open");
    } else if (open.type !== token.type) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({ start: token.start, end: token.end }) + "): a different token (`" + open.type + "`, " + stringifyPosition({ start: open.start, end: open.end }) + ") is open");
    }
    node.position.end = point2(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", true);
  }
  function onenterlistitemvalue(token) {
    if (getData("expectingFirstListItemValue")) {
      this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(token), 10);
      setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].lang = data2;
  }
  function onexitcodefencedfencemeta() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].meta = data2;
  }
  function onexitcodefencedfence() {
    if (getData("flowCodeInside"))
      return;
    this.buffer();
    setData("flowCodeInside", true);
  }
  function onexitcodefenced() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    setData("flowCodeInside");
  }
  function onexitcodeindented() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].value = data2;
  }
  function onexitdefinitionlabelstring(token) {
    var label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].title = data2;
  }
  function onexitdefinitiondestinationstring() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].url = data2;
  }
  function onexitatxheadingsequence(token) {
    if (!this.stack[this.stack.length - 1].depth) {
      this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).length;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", true);
  }
  function onexitsetextheadinglinesequence(token) {
    this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token) {
    var siblings = this.stack[this.stack.length - 1].children;
    var tail = siblings[siblings.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text2();
      tail.position = { start: point2(token.start) };
      this.stack[this.stack.length - 1].children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    var tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    var context2 = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      context2.children[context2.children.length - 1].position.end = point2(token.end);
      setData("atHardBreak");
      return;
    }
    if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.indexOf(context2.type) > -1) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    setData("atHardBreak", true);
  }
  function onexithtmlflow() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].value = data2;
  }
  function onexithtmltext() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].value = data2;
  }
  function onexitcodetext() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].value = data2;
  }
  function onexitlink() {
    var context2 = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context2.type += "Reference";
      context2.referenceType = getData("referenceType") || "shortcut";
      delete context2.url;
      delete context2.title;
    } else {
      delete context2.identifier;
      delete context2.label;
      delete context2.referenceType;
    }
    setData("referenceType");
  }
  function onexitimage() {
    var context2 = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context2.type += "Reference";
      context2.referenceType = getData("referenceType") || "shortcut";
      delete context2.url;
      delete context2.title;
    } else {
      delete context2.identifier;
      delete context2.label;
      delete context2.referenceType;
    }
    setData("referenceType");
  }
  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitlabel() {
    var fragment = this.stack[this.stack.length - 1];
    var value = this.resume();
    this.stack[this.stack.length - 1].label = value;
    setData("inReference", true);
    if (this.stack[this.stack.length - 1].type === "link") {
      this.stack[this.stack.length - 1].children = fragment.children;
    } else {
      this.stack[this.stack.length - 1].alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].url = data2;
  }
  function onexitresourcetitlestring() {
    var data2 = this.resume();
    this.stack[this.stack.length - 1].title = data2;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token) {
    var label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    var data2 = this.sliceSerialize(token);
    var type2 = getData("characterReferenceType");
    var value;
    var tail;
    if (type2) {
      value = safeFromInt(data2, type2 === "characterReferenceMarkerNumeric" ? 10 : 16);
      setData("characterReferenceType");
    } else {
      value = decode(data2);
    }
    tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return { type: "blockquote", children: [] };
  }
  function codeFlow() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function codeText2() {
    return { type: "inlineCode", value: "" };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis() {
    return { type: "emphasis", children: [] };
  }
  function heading() {
    return { type: "heading", depth: void 0, children: [] };
  }
  function hardBreak() {
    return { type: "break" };
  }
  function html() {
    return { type: "html", value: "" };
  }
  function image() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function link() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function list2(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph() {
    return { type: "paragraph", children: [] };
  }
  function strong() {
    return { type: "strong", children: [] };
  }
  function text2() {
    return { type: "text", value: "" };
  }
  function thematicBreak2() {
    return { type: "thematicBreak" };
  }
}
function configure(config, extensions) {
  var index2 = -1;
  while (++index2 < extensions.length) {
    extension(config, extensions[index2]);
  }
  return config;
}
function extension(config, extension2) {
  var key;
  var left;
  for (key in extension2) {
    left = own.call(config, key) ? config[key] : config[key] = {};
    if (key === "canContainEols" || key === "transforms") {
      config[key] = [].concat(left, extension2[key]);
    } else {
      Object.assign(left, extension2[key]);
    }
  }
}
var mdastUtilFromMarkdown = dist$1;
var remarkParse = parse$1;
var fromMarkdown = mdastUtilFromMarkdown;
function parse$1(options) {
  var self2 = this;
  this.Parser = parse2;
  function parse2(doc) {
    return fromMarkdown(doc, Object.assign({}, self2.data("settings"), options, {
      extensions: self2.data("micromarkExtensions") || [],
      mdastExtensions: self2.data("fromMarkdownExtensions") || []
    }));
  }
}
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location2, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var unistUtilVisitParents$1 = visitParents$2;
function visitParents$2(tree, type2, visitor) {
  var stack = [];
  if (typeof type2 === "function") {
    visitor = type2;
    type2 = null;
  }
  one(tree);
  function one(node) {
    var result;
    if (!type2 || node.type === type2) {
      result = visitor(node, stack.concat());
    }
    if (node.children && result !== false) {
      return all2(node.children, node);
    }
    return result;
  }
  function all2(children, parent) {
    var length = children.length;
    var index2 = -1;
    var child;
    stack.push(parent);
    while (++index2 < length) {
      child = children[index2];
      if (child && one(child) === false) {
        return false;
      }
    }
    stack.pop();
    return true;
  }
}
var visitWithParents = unistUtilVisitParents$1;
function addListMetadata$1() {
  return function(ast) {
    visitWithParents(ast, "list", function(listNode, parents) {
      var depth = 0, i, n2;
      for (i = 0, n2 = parents.length; i < n2; i++) {
        if (parents[i].type === "list")
          depth += 1;
      }
      for (i = 0, n2 = listNode.children.length; i < n2; i++) {
        var child = listNode.children[i];
        child.index = i;
        child.ordered = listNode.ordered;
      }
      listNode.depth = depth;
    });
    return ast;
  };
}
var mdastAddListMetadata = addListMetadata$1;
var convert_1 = convert$1;
function convert$1(test) {
  if (test == null) {
    return ok;
  }
  if (typeof test === "string") {
    return typeFactory(test);
  }
  if (typeof test === "object") {
    return "length" in test ? anyFactory(test) : allFactory(test);
  }
  if (typeof test === "function") {
    return test;
  }
  throw new Error("Expected function, string, or object as test");
}
function allFactory(test) {
  return all2;
  function all2(node) {
    var key;
    for (key in test) {
      if (node[key] !== test[key])
        return false;
    }
    return true;
  }
}
function anyFactory(tests) {
  var checks = [];
  var index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert$1(tests[index2]);
  }
  return any;
  function any() {
    var index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].apply(this, arguments)) {
        return true;
      }
    }
    return false;
  }
}
function typeFactory(test) {
  return type2;
  function type2(node) {
    return Boolean(node && node.type === test);
  }
}
function ok() {
  return true;
}
var color_browser = identity;
function identity(d2) {
  return d2;
}
var unistUtilVisitParents = visitParents$1;
var convert = convert_1;
var color = color_browser;
var CONTINUE$1 = true;
var SKIP$1 = "skip";
var EXIT$1 = false;
visitParents$1.CONTINUE = CONTINUE$1;
visitParents$1.SKIP = SKIP$1;
visitParents$1.EXIT = EXIT$1;
function visitParents$1(tree, test, visitor, reverse) {
  var step;
  var is;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  is = convert(test);
  step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index2, parents) {
    var value = typeof node === "object" && node !== null ? node : {};
    var name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      visit2.displayName = "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")";
    }
    return visit2;
    function visit2() {
      var grandparents = parents.concat(node);
      var result = [];
      var subresult;
      var offset;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT$1) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP$1) {
        offset = (reverse ? node.children.length : -1) + step;
        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT$1) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (value !== null && typeof value === "object" && "length" in value) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE$1, value];
  }
  return [value];
}
var unistUtilVisit = visit$4;
var visitParents = unistUtilVisitParents;
var CONTINUE = visitParents.CONTINUE;
var SKIP = visitParents.SKIP;
var EXIT = visitParents.EXIT;
visit$4.CONTINUE = CONTINUE;
visit$4.SKIP = SKIP;
visit$4.EXIT = EXIT;
function visit$4(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    var index2 = parent ? parent.children.indexOf(node) : null;
    return visitor(node, index2, parent);
  }
}
var visit$3 = unistUtilVisit;
var type = "virtualHtml";
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;
var naiveHtml$1 = function(tree) {
  var open;
  var currentParent;
  visit$3(tree, "html", function(node, index2, parent) {
    if (currentParent !== parent) {
      open = [];
      currentParent = parent;
    }
    var selfClosing = getSelfClosing(node);
    if (selfClosing) {
      parent.children.splice(index2, 1, {
        type,
        tag: selfClosing,
        position: node.position
      });
      return true;
    }
    var current = getSimpleTag(node);
    if (!current) {
      return true;
    }
    var matching = findAndPull(open, current.tag);
    if (matching) {
      parent.children.splice(index2, 0, virtual(current, matching, parent));
    } else if (!current.opening) {
      open.push(current);
    }
    return true;
  }, true);
  return tree;
};
function findAndPull(open, matchingTag) {
  var i = open.length;
  while (i--) {
    if (open[i].tag === matchingTag) {
      return open.splice(i, 1)[0];
    }
  }
  return false;
}
function getSimpleTag(node, parent) {
  var match = node.value.match(simpleTagRe);
  return match ? {
    tag: match[2],
    opening: !match[1],
    node
  } : false;
}
function getSelfClosing(node) {
  var match = node.value.match(selfClosingRe);
  return match ? match[1] : false;
}
function virtual(fromNode, toNode, parent) {
  var fromIndex = parent.children.indexOf(fromNode.node);
  var toIndex = parent.children.indexOf(toNode.node);
  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
  var children = extracted.slice(1, -1);
  return {
    type,
    children,
    tag: fromNode.tag,
    position: {
      start: fromNode.node.position.start,
      end: toNode.node.position.end,
      indent: []
    }
  };
}
var disallowNode$1 = {};
var visit$2 = unistUtilVisit;
var splice = [].splice;
disallowNode$1.ofType = function(types, mode) {
  return ifNotMatch(allow, mode);
  function allow(node, index2, parent) {
    return !types.includes(node.type);
  }
};
disallowNode$1.ifNotMatch = ifNotMatch;
function ifNotMatch(allow, mode) {
  return transform;
  function transform(tree) {
    visit$2(tree, filter);
    return tree;
  }
  function filter(node, index2, parent) {
    if (parent && !allow(node, index2, parent)) {
      var parameters = [index2, 1];
      if (mode === "unwrap" && node.children) {
        parameters = parameters.concat(node.children);
      }
      splice.apply(parent.children, parameters);
      return index2;
    }
  }
}
var reactIs = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if (typeof a === "object" && a !== null) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a) {
  return z(a) === k;
};
reactIs_production_min.isContextProvider = function(a) {
  return z(a) === h;
};
reactIs_production_min.isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a) {
  return z(a) === n;
};
reactIs_production_min.isFragment = function(a) {
  return z(a) === e;
};
reactIs_production_min.isLazy = function(a) {
  return z(a) === t;
};
reactIs_production_min.isMemo = function(a) {
  return z(a) === r;
};
reactIs_production_min.isPortal = function(a) {
  return z(a) === d;
};
reactIs_production_min.isProfiler = function(a) {
  return z(a) === g;
};
reactIs_production_min.isStrictMode = function(a) {
  return z(a) === f;
};
reactIs_production_min.isSuspense = function(a) {
  return z(a) === p;
};
reactIs_production_min.isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === e || a === m || a === g || a === f || a === p || a === q || typeof a === "object" && a !== null && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
reactIs_production_min.typeOf = z;
{
  reactIs.exports = reactIs_production_min;
}
var React$6 = require$$3;
var xtend$2 = immutable;
var ReactIs = reactIs.exports;
function astToReact$1(node, options) {
  var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var index2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  var renderer = options.renderers[node.type];
  if (!node.position) {
    node.position = {
      start: {
        line: null,
        column: null,
        offset: null
      },
      end: {
        line: null,
        column: null,
        offset: null
      }
    };
  }
  var pos = node.position.start;
  var key = [node.type, pos.line, pos.column, index2].join("-");
  if (!ReactIs.isValidElementType(renderer)) {
    throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
  }
  var nodeProps = getNodeProps(node, key, options, renderer, parent, index2);
  return React$6.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || void 0);
  function resolveChildren() {
    return node.children && node.children.map(function(childNode, i) {
      return astToReact$1(childNode, options, {
        node,
        props: nodeProps
      }, i);
    });
  }
}
function getNodeProps(node, key, opts, renderer, parent, index2) {
  var props = {
    key
  };
  var isSimpleRenderer = typeof renderer === "string" || renderer === React$6.Fragment;
  if (opts.sourcePos && node.position) {
    props["data-sourcepos"] = flattenPosition(node.position);
  }
  if (opts.rawSourcePos && !isSimpleRenderer) {
    props.sourcePosition = node.position;
  }
  if (opts.includeNodeIndex && parent.node && parent.node.children && !isSimpleRenderer) {
    props.index = parent.node.children.indexOf(node);
    props.parentChildCount = parent.node.children.length;
  }
  var ref = node.identifier !== null && node.identifier !== void 0 ? opts.definitions[node.identifier.toUpperCase()] || {} : null;
  switch (node.type) {
    case "root":
      assignDefined(props, {
        className: opts.className
      });
      break;
    case "text":
      props.nodeKey = key;
      props.children = node.value;
      break;
    case "heading":
      props.level = node.depth;
      break;
    case "list":
      props.start = node.start;
      props.ordered = node.ordered;
      props.spread = node.spread;
      props.depth = node.depth;
      break;
    case "listItem":
      props.checked = node.checked;
      props.spread = node.spread;
      props.ordered = node.ordered;
      props.index = node.index;
      props.children = getListItemChildren(node, parent).map(function(childNode, i) {
        return astToReact$1(childNode, opts, {
          node,
          props
        }, i);
      });
      break;
    case "definition":
      assignDefined(props, {
        identifier: node.identifier,
        title: node.title,
        url: node.url
      });
      break;
    case "code":
      assignDefined(props, {
        language: node.lang && node.lang.split(/\s/, 1)[0]
      });
      break;
    case "inlineCode":
      props.children = node.value;
      props.inline = true;
      break;
    case "link":
      assignDefined(props, {
        title: node.title || void 0,
        target: typeof opts.linkTarget === "function" ? opts.linkTarget(node.url, node.children, node.title) : opts.linkTarget,
        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
      });
      break;
    case "image":
      assignDefined(props, {
        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url,
        alt: node.alt || "",
        title: node.title || void 0
      });
      break;
    case "linkReference":
      assignDefined(props, xtend$2(ref, {
        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
      }));
      break;
    case "imageReference":
      assignDefined(props, {
        src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
        alt: node.alt || "",
        title: ref.title || void 0
      });
      break;
    case "table":
    case "tableHead":
    case "tableBody":
      props.columnAlignment = node.align;
      break;
    case "tableRow":
      props.isHeader = parent.node.type === "tableHead";
      props.columnAlignment = parent.props.columnAlignment;
      break;
    case "tableCell":
      assignDefined(props, {
        isHeader: parent.props.isHeader,
        align: parent.props.columnAlignment[index2]
      });
      break;
    case "virtualHtml":
      props.tag = node.tag;
      break;
    case "html":
      props.isBlock = node.position.start.line !== node.position.end.line;
      props.allowDangerousHtml = opts.allowDangerousHtml;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;
    case "parsedHtml": {
      var parsedChildren;
      if (node.children) {
        parsedChildren = node.children.map(function(child, i) {
          return astToReact$1(child, opts, {
            node,
            props
          }, i);
        });
      }
      props.allowDangerousHtml = opts.allowDangerousHtml;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      props.element = node.element ? mergeNodeChildren(node, parsedChildren) : null;
      break;
    }
    default:
      assignDefined(props, xtend$2(node, {
        type: void 0,
        position: void 0,
        children: void 0
      }));
  }
  if (!isSimpleRenderer && node.value) {
    props.value = node.value;
  }
  if (!isSimpleRenderer) {
    props.node = node;
  }
  return props;
}
function assignDefined(target, attrs) {
  for (var key in attrs) {
    if (typeof attrs[key] !== "undefined") {
      target[key] = attrs[key];
    }
  }
}
function mergeNodeChildren(node, parsedChildren) {
  var el2 = node.element;
  if (Array.isArray(el2)) {
    var Fragment2 = React$6.Fragment || "div";
    return React$6.createElement(Fragment2, null, el2);
  }
  if (el2.props.children || parsedChildren) {
    var children = React$6.Children.toArray(el2.props.children).concat(parsedChildren);
    return React$6.cloneElement(el2, null, children);
  }
  return React$6.cloneElement(el2, null);
}
function flattenPosition(pos) {
  return [pos.start.line, ":", pos.start.column, "-", pos.end.line, ":", pos.end.column].map(String).join("");
}
function getListItemChildren(node, parent) {
  var loose = parent && parent.node ? listLoose(parent.node) : listItemLoose(node);
  return loose ? node.children : unwrapParagraphs(node);
}
function unwrapParagraphs(node) {
  return node.children.reduce(function(array, child) {
    return array.concat(child.type === "paragraph" ? child.children : [child]);
  }, []);
}
function listLoose(node) {
  var children = node.children;
  var loose = node.spread;
  var index2 = -1;
  while (!loose && ++index2 < children.length) {
    loose = listItemLoose(children[index2]);
  }
  return loose;
}
function listItemLoose(node) {
  var spread = node.spread;
  return spread === void 0 || spread === null ? node.children.length > 1 : spread;
}
var astToReact_1 = astToReact$1;
var visit$1 = unistUtilVisit;
var wrapTableRows$1 = function(node) {
  visit$1(node, "table", wrap);
  return node;
};
function wrap(table) {
  var children = table.children;
  table.children = [{
    type: "tableHead",
    align: table.align,
    children: [children[0]],
    position: children[0].position
  }];
  if (children.length > 1) {
    table.children.push({
      type: "tableBody",
      align: table.align,
      children: children.slice(1),
      position: {
        start: children[1].position.start,
        end: children[children.length - 1].position.end
      }
    });
  }
}
var visit = unistUtilVisit;
var getDefinitions$1 = function getDefinitions(tree) {
  var definitions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  visit(tree, "definition", function(node) {
    var identifier = node.identifier.toUpperCase();
    if (identifier in definitions)
      return;
    definitions[identifier] = {
      href: node.url,
      title: node.title
    };
  });
  return definitions;
};
var protocols = ["http", "https", "mailto", "tel"];
var uriTransformer$1 = function uriTransformer(uri) {
  var url = (uri || "").trim();
  var first = url.charAt(0);
  if (first === "#" || first === "/") {
    return url;
  }
  var colon = url.indexOf(":");
  if (colon === -1) {
    return url;
  }
  var length = protocols.length;
  var index2 = -1;
  while (++index2 < length) {
    var protocol = protocols[index2];
    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }
  index2 = url.indexOf("?");
  if (index2 !== -1 && colon > index2) {
    return url;
  }
  index2 = url.indexOf("#");
  if (index2 !== -1 && colon > index2) {
    return url;
  }
  return "javascript:void(0)";
};
var xtend$1 = immutable;
var React$5 = require$$3;
var supportsStringRender = parseInt((React$5.version || "16").slice(0, 2), 10) >= 16;
var createElement = React$5.createElement;
var renderers = {
  break: "br",
  paragraph: "p",
  emphasis: "em",
  strong: "strong",
  thematicBreak: "hr",
  blockquote: "blockquote",
  delete: "del",
  link: "a",
  image: "img",
  linkReference: "a",
  imageReference: "img",
  table: SimpleRenderer.bind(null, "table"),
  tableHead: SimpleRenderer.bind(null, "thead"),
  tableBody: SimpleRenderer.bind(null, "tbody"),
  tableRow: SimpleRenderer.bind(null, "tr"),
  tableCell: TableCell,
  root: Root,
  text: TextRenderer,
  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml,
  parsedHtml: ParsedHtml
};
function TextRenderer(props) {
  var children = props.children || "";
  return supportsStringRender ? children : createElement("span", null, children);
}
function Root(props) {
  var className = props.className;
  var root2 = !className && React$5.Fragment || "div";
  return createElement(root2, className ? {
    className
  } : null, props.children);
}
function SimpleRenderer(tag, props) {
  return createElement(tag, getCoreProps(props), props.children);
}
function TableCell(props) {
  var style = props.align ? {
    textAlign: props.align
  } : void 0;
  var coreProps = getCoreProps(props);
  return createElement(props.isHeader ? "th" : "td", style ? xtend$1({
    style
  }, coreProps) : coreProps, props.children);
}
function Heading(props) {
  return createElement("h".concat(props.level), getCoreProps(props), props.children);
}
function List(props) {
  var attrs = getCoreProps(props);
  if (props.start !== null && props.start !== 1 && props.start !== void 0) {
    attrs.start = props.start.toString();
  }
  return createElement(props.ordered ? "ol" : "ul", attrs, props.children);
}
function ListItem(props) {
  var checkbox = null;
  if (props.checked !== null && props.checked !== void 0) {
    var checked = props.checked;
    checkbox = createElement("input", {
      type: "checkbox",
      checked,
      readOnly: true
    });
  }
  return createElement("li", getCoreProps(props), checkbox, props.children);
}
function CodeBlock(props) {
  var className = props.language && "language-".concat(props.language);
  var code = createElement("code", className ? {
    className
  } : null, props.value);
  return createElement("pre", getCoreProps(props), code);
}
function InlineCode(props) {
  return createElement("code", getCoreProps(props), props.children);
}
function Html(props) {
  if (props.skipHtml) {
    return null;
  }
  var dangerous = props.allowDangerousHtml || props.escapeHtml === false;
  var tag = props.isBlock ? "div" : "span";
  if (!dangerous) {
    return createElement(React$5.Fragment || tag, null, props.value);
  }
  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement(tag, nodeProps);
}
function ParsedHtml(props) {
  return props["data-sourcepos"] ? React$5.cloneElement(props.element, {
    "data-sourcepos": props["data-sourcepos"]
  }) : props.element;
}
function VirtualHtml(props) {
  return createElement(props.tag, getCoreProps(props), props.children);
}
function NullRenderer() {
  return null;
}
function getCoreProps(props) {
  var source = props["data-sourcepos"];
  return source ? {
    "data-sourcepos": source
  } : {};
}
var symbols$1 = {};
var HtmlParser = "__RMD_HTML_PARSER__";
symbols$1.HtmlParser = typeof Symbol === "undefined" ? HtmlParser : Symbol(HtmlParser);
var xtend = immutable;
var unified = unified_1;
var parse = remarkParse;
var PropTypes = propTypes.exports;
var addListMetadata = mdastAddListMetadata;
var naiveHtml = naiveHtml$1;
var disallowNode = disallowNode$1;
var astToReact = astToReact_1;
var wrapTableRows = wrapTableRows$1;
var getDefinitions2 = getDefinitions$1;
var uriTransformer2 = uriTransformer$1;
var defaultRenderers = renderers;
var symbols = symbols$1;
var allTypes = Object.keys(defaultRenderers);
var ReactMarkdown = function ReactMarkdown2(props) {
  var src = props.source || props.children || "";
  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error("Only one of `allowedTypes` and `disallowedTypes` should be defined");
  }
  var renderers2 = xtend(defaultRenderers, props.renderers);
  var processor = unified().use(parse).use(props.plugins || []);
  var tree = processor.runSync(processor.parse(src));
  var renderProps = xtend(props, {
    renderers: renderers2,
    definitions: getDefinitions2(tree)
  });
  determineAstToReactTransforms(props).forEach(function(transform) {
    tree = transform(tree, renderProps);
  });
  return tree;
};
function determineAstToReactTransforms(props) {
  var transforms = [wrapTableRows, addListMetadata()];
  var disallowedTypes = props.disallowedTypes;
  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function(type2) {
      return type2 !== "root" && props.allowedTypes.indexOf(type2) === -1;
    });
  }
  var removalMethod = props.unwrapDisallowed ? "unwrap" : "remove";
  if (disallowedTypes && disallowedTypes.length > 0) {
    transforms.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }
  if (props.allowNode) {
    transforms.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  }
  var renderHtml = (props.allowDangerousHtml || props.escapeHtml === false) && !props.skipHtml;
  var hasHtmlParser = (props.astPlugins || []).some(function(transform) {
    return transform.identity === symbols.HtmlParser;
  });
  if (renderHtml && !hasHtmlParser) {
    transforms.push(naiveHtml);
  }
  if (props.astPlugins) {
    transforms = transforms.concat(props.astPlugins);
  }
  transforms.push(astToReact);
  return transforms;
}
ReactMarkdown.defaultProps = {
  transformLinkUri: uriTransformer2
};
ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  allowDangerousHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  plugins: PropTypes.array
};
ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer2;
var reactMarkdown = ReactMarkdown;
var dist = { exports: {} };
(function(module, exports) {
  !function(e2, n2) {
    module.exports = n2(require$$3);
  }(window, function(e2) {
    return function(e3) {
      var n2 = {};
      function t2(r2) {
        if (n2[r2])
          return n2[r2].exports;
        var a = n2[r2] = { i: r2, l: false, exports: {} };
        return e3[r2].call(a.exports, a, a.exports, t2), a.l = true, a.exports;
      }
      return t2.m = e3, t2.c = n2, t2.d = function(e4, n3, r2) {
        t2.o(e4, n3) || Object.defineProperty(e4, n3, { enumerable: true, get: r2 });
      }, t2.r = function(e4) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
      }, t2.t = function(e4, n3) {
        if (1 & n3 && (e4 = t2(e4)), 8 & n3)
          return e4;
        if (4 & n3 && typeof e4 == "object" && e4 && e4.__esModule)
          return e4;
        var r2 = Object.create(null);
        if (t2.r(r2), Object.defineProperty(r2, "default", { enumerable: true, value: e4 }), 2 & n3 && typeof e4 != "string")
          for (var a in e4)
            t2.d(r2, a, function(n4) {
              return e4[n4];
            }.bind(null, a));
        return r2;
      }, t2.n = function(e4) {
        var n3 = e4 && e4.__esModule ? function() {
          return e4.default;
        } : function() {
          return e4;
        };
        return t2.d(n3, "a", n3), n3;
      }, t2.o = function(e4, n3) {
        return Object.prototype.hasOwnProperty.call(e4, n3);
      }, t2.p = "https://g.alicdn.com/code/npm/@alife/intl-comp-highLighter/1.0.15/", t2(t2.s = 51);
    }([function(n2, t2) {
      n2.exports = e2;
    }, function(e3, n2, t2) {
      var r2 = t2(4), a = t2(8), o = t2(9);
      e3.exports = function(e4) {
        var n3, t3, l2 = e4.space, i = e4.mustUseProperty || [], s = e4.attributes || {}, u = e4.properties, c2 = e4.transform, p2 = {}, d2 = {};
        for (n3 in u)
          t3 = new o(n3, c2(s, n3), u[n3], l2), i.indexOf(n3) !== -1 && (t3.mustUseProperty = true), p2[n3] = t3, d2[r2(n3)] = n3, d2[r2(t3.attribute)] = n3;
        return new a(p2, d2, l2);
      };
    }, function(e3, n2) {
      function t2() {
        return e3.exports = t2 = Object.assign || function(e4) {
          for (var n3 = 1; n3 < arguments.length; n3++) {
            var t3 = arguments[n3];
            for (var r2 in t3)
              Object.prototype.hasOwnProperty.call(t3, r2) && (e4[r2] = t3[r2]);
          }
          return e4;
        }, e3.exports.default = e3.exports, e3.exports.__esModule = true, t2.apply(this, arguments);
      }
      e3.exports = t2, e3.exports.default = e3.exports, e3.exports.__esModule = true;
    }, function(e3, n2, t2) {
      var r2 = t2(50);
      e3.exports = function(e4) {
        for (var n3 = 1; n3 < arguments.length; n3++) {
          var t3 = arguments[n3] != null ? Object(arguments[n3]) : {}, a = Object.keys(t3);
          typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t3).filter(function(e5) {
            return Object.getOwnPropertyDescriptor(t3, e5).enumerable;
          }))), a.forEach(function(n4) {
            r2(e4, n4, t3[n4]);
          });
        }
        return e4;
      }, e3.exports.default = e3.exports, e3.exports.__esModule = true;
    }, function(e3, n2, t2) {
      e3.exports = function(e4) {
        return e4.toLowerCase();
      };
    }, function(e3, n2, t2) {
      var r2 = 0;
      function a() {
        return Math.pow(2, ++r2);
      }
      n2.boolean = a(), n2.booleanish = a(), n2.overloadedBoolean = a(), n2.number = a(), n2.spaceSeparated = a(), n2.commaSeparated = a(), n2.commaOrSpaceSeparated = a();
    }, function(e3, n2, t2) {
      (function(n3) {
        var r2, a, o = (a = (r2 = "Prism" in n3) ? n3.Prism : void 0, function() {
          r2 ? n3.Prism = a : delete n3.Prism, r2 = void 0, a = void 0;
        });
        (typeof window == "undefined" ? typeof self == "undefined" ? {} : self : window).Prism = { manual: true, disableWorkerMessageHandler: true };
        var l2 = t2(21), i = t2(37), s = t2(44), u = t2(45), c2 = t2(46), p2 = t2(47), d2 = t2(48);
        o();
        var g2 = {}.hasOwnProperty;
        function f2() {
        }
        f2.prototype = s;
        var m2 = new f2();
        function h2(e4) {
          if (typeof e4 != "function" || !e4.displayName)
            throw new Error("Expected `function` for `grammar`, got `" + e4 + "`");
          m2.languages[e4.displayName] === void 0 && e4(m2);
        }
        e3.exports = m2, m2.highlight = function(e4, n4) {
          var t3, r3 = s.highlight;
          if (typeof e4 != "string")
            throw new Error("Expected `string` for `value`, got `" + e4 + "`");
          if (m2.util.type(n4) === "Object")
            t3 = n4, n4 = null;
          else {
            if (typeof n4 != "string")
              throw new Error("Expected `string` for `name`, got `" + n4 + "`");
            if (!g2.call(m2.languages, n4))
              throw new Error("Unknown language: `" + n4 + "` is not registered");
            t3 = m2.languages[n4];
          }
          return r3.call(this, e4, t3, n4);
        }, m2.register = h2, m2.alias = function(e4, n4) {
          var t3, r3, a2, o2, l3 = m2.languages, i2 = e4;
          n4 && ((i2 = {})[e4] = n4);
          for (t3 in i2)
            for (r3 = i2[t3], a2 = (r3 = typeof r3 == "string" ? [r3] : r3).length, o2 = -1; ++o2 < a2; )
              l3[r3[o2]] = l3[t3];
        }, m2.registered = function(e4) {
          if (typeof e4 != "string")
            throw new Error("Expected `string` for `language`, got `" + e4 + "`");
          return g2.call(m2.languages, e4);
        }, m2.listLanguages = function() {
          var e4, n4 = m2.languages, t3 = [];
          for (e4 in n4)
            g2.call(n4, e4) && typeof n4[e4] == "object" && t3.push(e4);
          return t3;
        }, h2(u), h2(c2), h2(p2), h2(d2), m2.util.encode = function(e4) {
          return e4;
        }, m2.Token.stringify = function(e4, n4, t3) {
          var r3;
          if (typeof e4 == "string")
            return { type: "text", value: e4 };
          if (m2.util.type(e4) === "Array")
            return function(e5, n5) {
              var t4, r4 = [], a2 = e5.length, o2 = -1;
              for (; ++o2 < a2; )
                (t4 = e5[o2]) !== "" && t4 != null && r4.push(t4);
              o2 = -1, a2 = r4.length;
              for (; ++o2 < a2; )
                t4 = r4[o2], r4[o2] = m2.Token.stringify(t4, n5, r4);
              return r4;
            }(e4, n4);
          r3 = { type: e4.type, content: m2.Token.stringify(e4.content, n4, t3), tag: "span", classes: ["token", e4.type], attributes: {}, language: n4, parent: t3 }, e4.alias && (r3.classes = r3.classes.concat(e4.alias));
          return m2.hooks.run("wrap", r3), l2(r3.tag + "." + r3.classes.join("."), function(e5) {
            var n5;
            for (n5 in e5)
              e5[n5] = i(e5[n5]);
            return e5;
          }(r3.attributes), r3.content);
        };
      }).call(this, t2(7));
    }, function(e3, n2) {
      var t2;
      t2 = function() {
        return this;
      }();
      try {
        t2 = t2 || new Function("return this")();
      } catch (e4) {
        typeof window == "object" && (t2 = window);
      }
      e3.exports = t2;
    }, function(e3, n2, t2) {
      e3.exports = a;
      var r2 = a.prototype;
      function a(e4, n3, t3) {
        this.property = e4, this.normal = n3, t3 && (this.space = t3);
      }
      r2.space = null, r2.normal = {}, r2.property = {};
    }, function(e3, n2, t2) {
      var r2 = t2(10), a = t2(5);
      e3.exports = i, i.prototype = new r2(), i.prototype.defined = true;
      var o = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], l2 = o.length;
      function i(e4, n3, t3, i2) {
        var u, c2 = -1;
        for (s(this, "space", i2), r2.call(this, e4, n3); ++c2 < l2; )
          s(this, u = o[c2], (t3 & a[u]) === a[u]);
      }
      function s(e4, n3, t3) {
        t3 && (e4[n3] = t3);
      }
    }, function(e3, n2, t2) {
      e3.exports = a;
      var r2 = a.prototype;
      function a(e4, n3) {
        this.property = e4, this.attribute = n3;
      }
      r2.space = null, r2.attribute = null, r2.property = null, r2.boolean = false, r2.booleanish = false, r2.overloadedBoolean = false, r2.number = false, r2.commaSeparated = false, r2.spaceSeparated = false, r2.commaOrSpaceSeparated = false, r2.mustUseProperty = false, r2.defined = false;
    }, function(e3, n2, t2) {
      var r2 = t2(29);
      e3.exports = function(e4, n3) {
        return r2(e4, n3.toLowerCase());
      };
    }, function(e3, n2, t2) {
      e3.exports = function(e4) {
        var n3 = typeof e4 == "string" ? e4.charCodeAt(0) : e4;
        return n3 >= 48 && n3 <= 57;
      };
    }, function(e3, n2, t2) {
      var r2 = t2(17).CopyToClipboard;
      r2.CopyToClipboard = r2, e3.exports = r2;
    }, function(e3, n2, t2) {
      var r2 = t2(49);
      e3.exports = function(e4, n3) {
        if (e4 == null)
          return {};
        var t3, a, o = r2(e4, n3);
        if (Object.getOwnPropertySymbols) {
          var l2 = Object.getOwnPropertySymbols(e4);
          for (a = 0; a < l2.length; a++)
            t3 = l2[a], n3.indexOf(t3) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, t3) && (o[t3] = e4[t3]);
        }
        return o;
      }, e3.exports.default = e3.exports, e3.exports.__esModule = true;
    }, function(e3, n2, t2) {
      function r2(e4) {
        !function(e5) {
          var n3 = e5.util.clone(e5.languages.javascript);
          e5.languages.jsx = e5.languages.extend("markup", n3), e5.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i, e5.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, e5.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i, e5.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e5.languages.insertBefore("inside", "attr-name", { spread: { pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/, inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ } } }, e5.languages.jsx.tag), e5.languages.insertBefore("inside", "attr-value", { script: { pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i, inside: { "script-punctuation": { pattern: /^=(?={)/, alias: "punctuation" }, rest: e5.languages.jsx }, alias: "language-javascript" } }, e5.languages.jsx.tag);
          var t3 = function(e6) {
            return e6 ? typeof e6 == "string" ? e6 : typeof e6.content == "string" ? e6.content : e6.content.map(t3).join("") : "";
          }, r3 = function(n4) {
            for (var a = [], o = 0; o < n4.length; o++) {
              var l2 = n4[o], i = false;
              if (typeof l2 != "string" && (l2.type === "tag" && l2.content[0] && l2.content[0].type === "tag" ? l2.content[0].content[0].content === "</" ? a.length > 0 && a[a.length - 1].tagName === t3(l2.content[0].content[1]) && a.pop() : l2.content[l2.content.length - 1].content === "/>" || a.push({ tagName: t3(l2.content[0].content[1]), openedBraces: 0 }) : a.length > 0 && l2.type === "punctuation" && l2.content === "{" ? a[a.length - 1].openedBraces++ : a.length > 0 && a[a.length - 1].openedBraces > 0 && l2.type === "punctuation" && l2.content === "}" ? a[a.length - 1].openedBraces-- : i = true), (i || typeof l2 == "string") && a.length > 0 && a[a.length - 1].openedBraces === 0) {
                var s = t3(l2);
                o < n4.length - 1 && (typeof n4[o + 1] == "string" || n4[o + 1].type === "plain-text") && (s += t3(n4[o + 1]), n4.splice(o + 1, 1)), o > 0 && (typeof n4[o - 1] == "string" || n4[o - 1].type === "plain-text") && (s = t3(n4[o - 1]) + s, n4.splice(o - 1, 1), o--), n4[o] = new e5.Token("plain-text", s, null, s);
              }
              l2.content && typeof l2.content != "string" && r3(l2.content);
            }
          };
          e5.hooks.add("after-tokenize", function(e6) {
            e6.language !== "jsx" && e6.language !== "tsx" || r3(e6.tokens);
          });
        }(e4);
      }
      e3.exports = r2, r2.displayName = "jsx", r2.aliases = [];
    }, function(e3, n2, t2) {
      function r2(e4) {
        e4.languages.json = { property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: true }, string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: true }, comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, number: /-?\d+\.?\d*(e[+-]?\d+)?/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } };
      }
      e3.exports = r2, r2.displayName = "json", r2.aliases = [];
    }, function(e3, n2, t2) {
      Object.defineProperty(n2, "__esModule", { value: true }), n2.CopyToClipboard = void 0;
      var r2 = o(t2(0)), a = o(t2(18));
      function o(e4) {
        return e4 && e4.__esModule ? e4 : { default: e4 };
      }
      function l2(e4) {
        return (l2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
          return typeof e5;
        } : function(e5) {
          return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
        })(e4);
      }
      function i(e4, n3) {
        var t3 = Object.keys(e4);
        if (Object.getOwnPropertySymbols) {
          var r3 = Object.getOwnPropertySymbols(e4);
          n3 && (r3 = r3.filter(function(n4) {
            return Object.getOwnPropertyDescriptor(e4, n4).enumerable;
          })), t3.push.apply(t3, r3);
        }
        return t3;
      }
      function s(e4, n3) {
        if (e4 == null)
          return {};
        var t3, r3, a2 = function(e5, n4) {
          if (e5 == null)
            return {};
          var t4, r4, a3 = {}, o3 = Object.keys(e5);
          for (r4 = 0; r4 < o3.length; r4++)
            t4 = o3[r4], n4.indexOf(t4) >= 0 || (a3[t4] = e5[t4]);
          return a3;
        }(e4, n3);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(e4);
          for (r3 = 0; r3 < o2.length; r3++)
            t3 = o2[r3], n3.indexOf(t3) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, t3) && (a2[t3] = e4[t3]);
        }
        return a2;
      }
      function u(e4, n3) {
        if (!(e4 instanceof n3))
          throw new TypeError("Cannot call a class as a function");
      }
      function c2(e4, n3) {
        for (var t3 = 0; t3 < n3.length; t3++) {
          var r3 = n3[t3];
          r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
        }
      }
      function p2(e4, n3) {
        return !n3 || l2(n3) !== "object" && typeof n3 != "function" ? g2(e4) : n3;
      }
      function d2(e4) {
        return (d2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e5) {
          return e5.__proto__ || Object.getPrototypeOf(e5);
        })(e4);
      }
      function g2(e4) {
        if (e4 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e4;
      }
      function f2(e4, n3) {
        return (f2 = Object.setPrototypeOf || function(e5, n4) {
          return e5.__proto__ = n4, e5;
        })(e4, n3);
      }
      function m2(e4, n3, t3) {
        return n3 in e4 ? Object.defineProperty(e4, n3, { value: t3, enumerable: true, configurable: true, writable: true }) : e4[n3] = t3, e4;
      }
      var h2 = function(e4) {
        function n3() {
          var e5, t4;
          u(this, n3);
          for (var o3 = arguments.length, l3 = new Array(o3), i2 = 0; i2 < o3; i2++)
            l3[i2] = arguments[i2];
          return m2(g2(t4 = p2(this, (e5 = d2(n3)).call.apply(e5, [this].concat(l3)))), "onClick", function(e6) {
            var n4 = t4.props, o4 = n4.text, l4 = n4.onCopy, i3 = n4.children, s2 = n4.options, u2 = r2.default.Children.only(i3), c3 = (0, a.default)(o4, s2);
            l4 && l4(o4, c3), u2 && u2.props && typeof u2.props.onClick == "function" && u2.props.onClick(e6);
          }), t4;
        }
        var t3, o2;
        return function(e5, n4) {
          if (typeof n4 != "function" && n4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          e5.prototype = Object.create(n4 && n4.prototype, { constructor: { value: e5, writable: true, configurable: true } }), n4 && f2(e5, n4);
        }(n3, e4), t3 = n3, (o2 = [{ key: "render", value: function() {
          var e5 = this.props, n4 = (e5.text, e5.onCopy, e5.options, e5.children), t4 = s(e5, ["text", "onCopy", "options", "children"]), a2 = r2.default.Children.only(n4);
          return r2.default.cloneElement(a2, function(e6) {
            for (var n5 = 1; n5 < arguments.length; n5++) {
              var t5 = arguments[n5] != null ? arguments[n5] : {};
              n5 % 2 ? i(t5, true).forEach(function(n6) {
                m2(e6, n6, t5[n6]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t5)) : i(t5).forEach(function(n6) {
                Object.defineProperty(e6, n6, Object.getOwnPropertyDescriptor(t5, n6));
              });
            }
            return e6;
          }({}, t4, { onClick: this.onClick }));
        } }]) && c2(t3.prototype, o2), n3;
      }(r2.default.PureComponent);
      n2.CopyToClipboard = h2, m2(h2, "defaultProps", { onCopy: void 0, options: void 0 });
    }, function(e3, n2, t2) {
      var r2 = t2(19), a = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e3.exports = function(e4, n3) {
        var t3, o, l2, i, s, u, c2 = false;
        n3 || (n3 = {}), t3 = n3.debug || false;
        try {
          if (l2 = r2(), i = document.createRange(), s = document.getSelection(), (u = document.createElement("span")).textContent = e4, u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "pre", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener("copy", function(r3) {
            if (r3.stopPropagation(), n3.format)
              if (r3.preventDefault(), r3.clipboardData === void 0) {
                t3 && console.warn("unable to use e.clipboardData"), t3 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                var o2 = a[n3.format] || a.default;
                window.clipboardData.setData(o2, e4);
              } else
                r3.clipboardData.clearData(), r3.clipboardData.setData(n3.format, e4);
            n3.onCopy && (r3.preventDefault(), n3.onCopy(r3.clipboardData));
          }), document.body.appendChild(u), i.selectNodeContents(u), s.addRange(i), !document.execCommand("copy"))
            throw new Error("copy command was unsuccessful");
          c2 = true;
        } catch (r3) {
          t3 && console.error("unable to copy using execCommand: ", r3), t3 && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(n3.format || "text", e4), n3.onCopy && n3.onCopy(window.clipboardData), c2 = true;
          } catch (r4) {
            t3 && console.error("unable to copy using clipboardData: ", r4), t3 && console.error("falling back to prompt"), o = function(e5) {
              var n4 = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
              return e5.replace(/#{\s*key\s*}/g, n4);
            }("message" in n3 ? n3.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e4);
          }
        } finally {
          s && (typeof s.removeRange == "function" ? s.removeRange(i) : s.removeAllRanges()), u && document.body.removeChild(u), l2();
        }
        return c2;
      };
    }, function(e3, n2) {
      e3.exports = function() {
        var e4 = document.getSelection();
        if (!e4.rangeCount)
          return function() {
          };
        for (var n3 = document.activeElement, t2 = [], r2 = 0; r2 < e4.rangeCount; r2++)
          t2.push(e4.getRangeAt(r2));
        switch (n3.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            n3.blur();
            break;
          default:
            n3 = null;
        }
        return e4.removeAllRanges(), function() {
          e4.type === "Caret" && e4.removeAllRanges(), e4.rangeCount || t2.forEach(function(n4) {
            e4.addRange(n4);
          }), n3 && n3.focus();
        };
      };
    }, function(e3, n2, t2) {
    }, function(e3, n2, t2) {
      e3.exports = t2(22);
    }, function(e3, n2, t2) {
      var r2 = t2(23), a = t2(32)(r2, "div");
      a.displayName = "html", e3.exports = a;
    }, function(e3, n2, t2) {
      var r2 = t2(24), a = t2(26), o = t2(27), l2 = t2(28), i = t2(30), s = t2(31);
      e3.exports = r2([o, a, l2, i, s]);
    }, function(e3, n2, t2) {
      var r2 = t2(25), a = t2(8);
      e3.exports = function(e4) {
        var n3, t3, o = e4.length, l2 = [], i = [], s = -1;
        for (; ++s < o; )
          n3 = e4[s], l2.push(n3.property), i.push(n3.normal), t3 = n3.space;
        return new a(r2.apply(null, l2), r2.apply(null, i), t3);
      };
    }, function(e3, n2) {
      e3.exports = function() {
        for (var e4 = {}, n3 = 0; n3 < arguments.length; n3++) {
          var r2 = arguments[n3];
          for (var a in r2)
            t2.call(r2, a) && (e4[a] = r2[a]);
        }
        return e4;
      };
      var t2 = Object.prototype.hasOwnProperty;
    }, function(e3, n2, t2) {
      var r2 = t2(1);
      e3.exports = r2({ space: "xlink", transform: function(e4, n3) {
        return "xlink:" + n3.slice(5).toLowerCase();
      }, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } });
    }, function(e3, n2, t2) {
      var r2 = t2(1);
      e3.exports = r2({ space: "xml", transform: function(e4, n3) {
        return "xml:" + n3.slice(3).toLowerCase();
      }, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
    }, function(e3, n2, t2) {
      var r2 = t2(1), a = t2(11);
      e3.exports = r2({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: a, properties: { xmlns: null, xmlnsXLink: null } });
    }, function(e3, n2, t2) {
      e3.exports = function(e4, n3) {
        return n3 in e4 ? e4[n3] : n3;
      };
    }, function(e3, n2, t2) {
      var r2 = t2(5), a = t2(1), o = r2.booleanish, l2 = r2.number, i = r2.spaceSeparated;
      e3.exports = a({ transform: function(e4, n3) {
        return n3 === "role" ? n3 : "aria-" + n3.slice(4).toLowerCase();
      }, properties: { ariaActiveDescendant: null, ariaAtomic: o, ariaAutoComplete: null, ariaBusy: o, ariaChecked: o, ariaColCount: l2, ariaColIndex: l2, ariaColSpan: l2, ariaControls: i, ariaCurrent: null, ariaDescribedBy: i, ariaDetails: null, ariaDisabled: o, ariaDropEffect: i, ariaErrorMessage: null, ariaExpanded: o, ariaFlowTo: i, ariaGrabbed: o, ariaHasPopup: null, ariaHidden: o, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: i, ariaLevel: l2, ariaLive: null, ariaModal: o, ariaMultiLine: o, ariaMultiSelectable: o, ariaOrientation: null, ariaOwns: i, ariaPlaceholder: null, ariaPosInSet: l2, ariaPressed: o, ariaReadOnly: o, ariaRelevant: null, ariaRequired: o, ariaRoleDescription: i, ariaRowCount: l2, ariaRowIndex: l2, ariaRowSpan: l2, ariaSelected: o, ariaSetSize: l2, ariaSort: null, ariaValueMax: l2, ariaValueMin: l2, ariaValueNow: l2, ariaValueText: null, role: null } });
    }, function(e3, n2, t2) {
      var r2 = t2(5), a = t2(1), o = t2(11), l2 = r2.boolean, i = r2.overloadedBoolean, s = r2.booleanish, u = r2.number, c2 = r2.spaceSeparated, p2 = r2.commaSeparated;
      e3.exports = a({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: o, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: p2, acceptCharset: c2, accessKey: c2, action: null, allow: null, allowFullScreen: l2, allowPaymentRequest: l2, allowUserMedia: l2, alt: null, as: null, async: l2, autoCapitalize: null, autoComplete: c2, autoFocus: l2, autoPlay: l2, capture: l2, charSet: null, checked: l2, cite: null, className: c2, cols: u, colSpan: null, content: null, contentEditable: s, controls: l2, controlsList: c2, coords: u | p2, crossOrigin: null, data: null, dateTime: null, decoding: null, default: l2, defer: l2, dir: null, dirName: null, disabled: l2, download: i, draggable: s, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: l2, formTarget: null, headers: c2, height: u, hidden: l2, high: u, href: null, hrefLang: null, htmlFor: c2, httpEquiv: c2, id: null, imageSizes: null, imageSrcSet: p2, inputMode: null, integrity: null, is: null, isMap: l2, itemId: null, itemProp: c2, itemRef: c2, itemScope: l2, itemType: c2, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: l2, low: u, manifest: null, max: null, maxLength: u, media: null, method: null, min: null, minLength: u, multiple: l2, muted: l2, name: null, nonce: null, noModule: l2, noValidate: l2, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: l2, optimum: u, pattern: null, ping: c2, placeholder: null, playsInline: l2, poster: null, preload: null, readOnly: l2, referrerPolicy: null, rel: c2, required: l2, reversed: l2, rows: u, rowSpan: u, sandbox: c2, scope: null, scoped: l2, seamless: l2, selected: l2, shape: null, size: u, sizes: null, slot: null, span: u, spellCheck: s, src: null, srcDoc: null, srcLang: null, srcSet: p2, start: u, step: null, style: null, tabIndex: u, target: null, title: null, translate: null, type: null, typeMustMatch: l2, useMap: null, value: s, width: u, wrap: null, align: null, aLink: null, archive: c2, axis: null, background: null, bgColor: null, border: u, borderColor: null, bottomMargin: u, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: l2, declare: l2, event: null, face: null, frame: null, frameBorder: null, hSpace: u, leftMargin: u, link: null, longDesc: null, lowSrc: null, marginHeight: u, marginWidth: u, noResize: l2, noHref: l2, noShade: l2, noWrap: l2, object: null, profile: null, prompt: null, rev: null, rightMargin: u, rules: null, scheme: null, scrolling: s, standby: null, summary: null, text: null, topMargin: u, valueType: null, version: null, vAlign: null, vLink: null, vSpace: u, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: l2, disableRemotePlayback: l2, prefix: null, property: null, results: u, security: null, unselectable: null } });
    }, function(e3, n2, t2) {
      var r2 = t2(33), a = t2(4), o = t2(34), l2 = t2(35).parse, i = t2(36).parse;
      e3.exports = function(e4, n3, t3) {
        var a2 = t3 ? function(e5) {
          var n4, t4 = e5.length, r3 = -1, a3 = {};
          for (; ++r3 < t4; )
            n4 = e5[r3], a3[n4.toLowerCase()] = n4;
          return a3;
        }(t3) : null;
        return function(e5, t4) {
          var r3, l3 = o(e5, n3), i2 = Array.prototype.slice.call(arguments, 2), p3 = l3.tagName.toLowerCase();
          l3.tagName = a2 && s.call(a2, p3) ? a2[p3] : p3, t4 && u(t4, l3) && (i2.unshift(t4), t4 = null);
          if (t4)
            for (r3 in t4)
              d2(l3.properties, r3, t4[r3]);
          c2(l3.children, i2), l3.tagName === "template" && (l3.content = { type: "root", children: l3.children }, l3.children = []);
          return l3;
        };
        function d2(n4, t4, a3) {
          var o2, s2, u2;
          a3 != null && a3 == a3 && (s2 = (o2 = r2(e4, t4)).property, typeof (u2 = a3) == "string" && (o2.spaceSeparated ? u2 = l2(u2) : o2.commaSeparated ? u2 = i(u2) : o2.commaOrSpaceSeparated && (u2 = l2(i(u2).join(" ")))), s2 === "style" && typeof a3 != "string" && (u2 = function(e5) {
            var n5, t5 = [];
            for (n5 in e5)
              t5.push([n5, e5[n5]].join(": "));
            return t5.join("; ");
          }(u2)), s2 === "className" && n4.className && (u2 = n4.className.concat(u2)), n4[s2] = function(e5, n5, t5) {
            var r3, a4, o3;
            if (typeof t5 != "object" || !("length" in t5))
              return p2(e5, n5, t5);
            a4 = t5.length, r3 = -1, o3 = [];
            for (; ++r3 < a4; )
              o3[r3] = p2(e5, n5, t5[r3]);
            return o3;
          }(o2, s2, u2));
        }
      };
      var s = {}.hasOwnProperty;
      function u(e4, n3) {
        return typeof e4 == "string" || "length" in e4 || function(e5, n4) {
          var t3 = n4.type;
          if (e5 === "input" || !t3 || typeof t3 != "string")
            return false;
          if (typeof n4.children == "object" && "length" in n4.children)
            return true;
          if (t3 = t3.toLowerCase(), e5 === "button")
            return t3 !== "menu" && t3 !== "submit" && t3 !== "reset" && t3 !== "button";
          return "value" in n4;
        }(n3.tagName, e4);
      }
      function c2(e4, n3) {
        var t3, r3;
        if (typeof n3 != "string" && typeof n3 != "number")
          if (typeof n3 == "object" && "length" in n3)
            for (t3 = -1, r3 = n3.length; ++t3 < r3; )
              c2(e4, n3[t3]);
          else {
            if (typeof n3 != "object" || !("type" in n3))
              throw new Error("Expected node, nodes, or string, got `" + n3 + "`");
            e4.push(n3);
          }
        else
          e4.push({ type: "text", value: String(n3) });
      }
      function p2(e4, n3, t3) {
        var r3 = t3;
        return e4.number || e4.positiveNumber ? isNaN(r3) || r3 === "" || (r3 = Number(r3)) : (e4.boolean || e4.overloadedBoolean) && (typeof r3 != "string" || r3 !== "" && a(t3) !== a(n3) || (r3 = true)), r3;
      }
    }, function(e3, n2, t2) {
      var r2 = t2(4), a = t2(9), o = t2(10);
      e3.exports = function(e4, n3) {
        var t3 = r2(n3), p2 = n3, d2 = o;
        if (t3 in e4.normal)
          return e4.property[e4.normal[t3]];
        t3.length > 4 && t3.slice(0, 4) === "data" && l2.test(n3) && (n3.charAt(4) === "-" ? p2 = function(e5) {
          var n4 = e5.slice(5).replace(i, c2);
          return "data" + n4.charAt(0).toUpperCase() + n4.slice(1);
        }(n3) : n3 = function(e5) {
          var n4 = e5.slice(4);
          if (i.test(n4))
            return e5;
          (n4 = n4.replace(s, u)).charAt(0) !== "-" && (n4 = "-" + n4);
          return "data" + n4;
        }(n3), d2 = a);
        return new d2(p2, n3);
      };
      var l2 = /^data[-\w.:]+$/i, i = /-[a-z]/g, s = /[A-Z]/g;
      function u(e4) {
        return "-" + e4.toLowerCase();
      }
      function c2(e4) {
        return e4.charAt(1).toUpperCase();
      }
    }, function(e3, n2, t2) {
      e3.exports = function(e4, n3) {
        var t3, a, o, l2 = e4 || "", i = n3 || "div", s = {}, u = 0;
        for (; u < l2.length; )
          r2.lastIndex = u, o = r2.exec(l2), (t3 = l2.slice(u, o ? o.index : l2.length)) && (a ? a === "#" ? s.id = t3 : s.className ? s.className.push(t3) : s.className = [t3] : i = t3, u += t3.length), o && (a = o[0], u++);
        return { type: "element", tagName: i, properties: s, children: [] };
      };
      var r2 = /[#.]/g;
    }, function(e3, n2, t2) {
      n2.parse = function(e4) {
        var n3 = String(e4 || "").trim();
        return n3 === "" ? [] : n3.split(r2);
      }, n2.stringify = function(e4) {
        return e4.join(" ").trim();
      };
      var r2 = /[ \t\n\r\f]+/g;
    }, function(e3, n2, t2) {
      n2.parse = function(e4) {
        var n3, t3 = [], r2 = String(e4 || ""), a = r2.indexOf(","), o = 0, l2 = false;
        for (; !l2; )
          a === -1 && (a = r2.length, l2 = true), !(n3 = r2.slice(o, a).trim()) && l2 || t3.push(n3), o = a + 1, a = r2.indexOf(",", o);
        return t3;
      }, n2.stringify = function(e4, n3) {
        var t3 = n3 || {}, r2 = t3.padLeft === false ? "" : " ", a = t3.padRight ? " " : "";
        e4[e4.length - 1] === "" && (e4 = e4.concat(""));
        return e4.join(a + "," + r2).trim();
      };
    }, function(e3, n2, t2) {
      var r2 = t2(38), a = t2(39), o = t2(12), l2 = t2(40), i = t2(41), s = t2(43);
      e3.exports = function(e4, n3) {
        var t3, o2, l3 = {};
        n3 || (n3 = {});
        for (o2 in d2)
          t3 = n3[o2], l3[o2] = t3 == null ? d2[o2] : t3;
        (l3.position.indent || l3.position.start) && (l3.indent = l3.position.indent || [], l3.position = l3.position.start);
        return function(e5, n4) {
          var t4, o3, l4, d3, b2, x2, w2, k2, S, C, O, j, P, A2, N, F, E, L, _, T = n4.additional, M = n4.nonTerminated, D = n4.text, $ = n4.reference, I = n4.warning, R = n4.textContext, B = n4.referenceContext, z2 = n4.warningContext, U = n4.position, H = n4.indent || [], q2 = e5.length, G = 0, W = -1, Z = U.column || 1, V = U.line || 1, K = "", J = [];
          typeof T == "string" && (T = T.charCodeAt(0));
          F = Y(), k2 = I ? function(e6, n5) {
            var t5 = Y();
            t5.column += n5, t5.offset += n5, I.call(z2, y2[e6], t5, e6);
          } : p2, G--, q2++;
          for (; ++G < q2; )
            if (b2 === 10 && (Z = H[W] || 1), (b2 = e5.charCodeAt(G)) === 38) {
              if ((w2 = e5.charCodeAt(G + 1)) === 9 || w2 === 10 || w2 === 12 || w2 === 32 || w2 === 38 || w2 === 60 || w2 != w2 || T && w2 === T) {
                K += c2(b2), Z++;
                continue;
              }
              for (j = P = G + 1, _ = P, w2 === 35 ? (_ = ++j, (w2 = e5.charCodeAt(_)) === 88 || w2 === 120 ? (A2 = f2, _ = ++j) : A2 = "decimal") : A2 = g2, t4 = "", O = "", d3 = "", N = h2[A2], _--; ++_ < q2 && (w2 = e5.charCodeAt(_), N(w2)); )
                d3 += c2(w2), A2 === g2 && u.call(r2, d3) && (t4 = d3, O = r2[d3]);
              (l4 = e5.charCodeAt(_) === 59) && (_++, (o3 = A2 === g2 && s(d3)) && (t4 = d3, O = o3)), L = 1 + _ - P, (l4 || M) && (d3 ? A2 === g2 ? (l4 && !O ? k2(5, 1) : (t4 !== d3 && (_ = j + t4.length, L = 1 + _ - j, l4 = false), l4 || (S = t4 ? 1 : 3, n4.attribute ? (w2 = e5.charCodeAt(_)) === 61 ? (k2(S, L), O = null) : i(w2) ? O = null : k2(S, L) : k2(S, L))), x2 = O) : (l4 || k2(2, L), x2 = parseInt(d3, m2[A2]), (X = x2) >= 55296 && X <= 57343 || X > 1114111 ? (k2(7, L), x2 = c2(65533)) : x2 in a ? (k2(6, L), x2 = a[x2]) : (C = "", v2(x2) && k2(6, L), x2 > 65535 && (C += c2((x2 -= 65536) >>> 10 | 55296), x2 = 56320 | 1023 & x2), x2 = C + c2(x2))) : A2 !== g2 && k2(4, L)), x2 ? (Q(), F = Y(), G = _ - 1, Z += _ - P + 1, J.push(x2), (E = Y()).offset++, $ && $.call(B, x2, { start: F, end: E }, e5.slice(P - 1, _)), F = E) : (d3 = e5.slice(P - 1, _), K += d3, Z += d3.length, G = _ - 1);
            } else
              b2 === 10 && (V++, W++, Z = 0), b2 == b2 ? (K += c2(b2), Z++) : Q();
          var X;
          return J.join("");
          function Y() {
            return { line: V, column: Z, offset: G + (U.offset || 0) };
          }
          function Q() {
            K && (J.push(K), D && D.call(R, K, { start: F, end: Y() }), K = "");
          }
        }(e4, l3);
      };
      var u = {}.hasOwnProperty, c2 = String.fromCharCode, p2 = Function.prototype, d2 = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: false, nonTerminated: true }, g2 = "named", f2 = "hexadecimal", m2 = { hexadecimal: 16, decimal: 10 }, h2 = {};
      h2[g2] = i, h2.decimal = o, h2[f2] = l2;
      var y2 = {};
      function v2(e4) {
        return e4 >= 1 && e4 <= 8 || e4 === 11 || e4 >= 13 && e4 <= 31 || e4 >= 127 && e4 <= 159 || e4 >= 64976 && e4 <= 65007 || (65535 & e4) == 65535 || (65535 & e4) == 65534;
      }
      y2[1] = "Named character references must be terminated by a semicolon", y2[2] = "Numeric character references must be terminated by a semicolon", y2[3] = "Named character references cannot be empty", y2[4] = "Numeric character references cannot be empty", y2[5] = "Named character references must be known", y2[6] = "Numeric character references cannot be disallowed", y2[7] = "Numeric character references cannot be outside the permissible Unicode range";
    }, function(e3) {
      e3.exports = JSON.parse('{"AElig":"\xC6","AMP":"&","Aacute":"\xC1","Acirc":"\xC2","Agrave":"\xC0","Aring":"\xC5","Atilde":"\xC3","Auml":"\xC4","COPY":"\xA9","Ccedil":"\xC7","ETH":"\xD0","Eacute":"\xC9","Ecirc":"\xCA","Egrave":"\xC8","Euml":"\xCB","GT":">","Iacute":"\xCD","Icirc":"\xCE","Igrave":"\xCC","Iuml":"\xCF","LT":"<","Ntilde":"\xD1","Oacute":"\xD3","Ocirc":"\xD4","Ograve":"\xD2","Oslash":"\xD8","Otilde":"\xD5","Ouml":"\xD6","QUOT":"\\"","REG":"\xAE","THORN":"\xDE","Uacute":"\xDA","Ucirc":"\xDB","Ugrave":"\xD9","Uuml":"\xDC","Yacute":"\xDD","aacute":"\xE1","acirc":"\xE2","acute":"\xB4","aelig":"\xE6","agrave":"\xE0","amp":"&","aring":"\xE5","atilde":"\xE3","auml":"\xE4","brvbar":"\xA6","ccedil":"\xE7","cedil":"\xB8","cent":"\xA2","copy":"\xA9","curren":"\xA4","deg":"\xB0","divide":"\xF7","eacute":"\xE9","ecirc":"\xEA","egrave":"\xE8","eth":"\xF0","euml":"\xEB","frac12":"\xBD","frac14":"\xBC","frac34":"\xBE","gt":">","iacute":"\xED","icirc":"\xEE","iexcl":"\xA1","igrave":"\xEC","iquest":"\xBF","iuml":"\xEF","laquo":"\xAB","lt":"<","macr":"\xAF","micro":"\xB5","middot":"\xB7","nbsp":"\xA0","not":"\xAC","ntilde":"\xF1","oacute":"\xF3","ocirc":"\xF4","ograve":"\xF2","ordf":"\xAA","ordm":"\xBA","oslash":"\xF8","otilde":"\xF5","ouml":"\xF6","para":"\xB6","plusmn":"\xB1","pound":"\xA3","quot":"\\"","raquo":"\xBB","reg":"\xAE","sect":"\xA7","shy":"\xAD","sup1":"\xB9","sup2":"\xB2","sup3":"\xB3","szlig":"\xDF","thorn":"\xFE","times":"\xD7","uacute":"\xFA","ucirc":"\xFB","ugrave":"\xF9","uml":"\xA8","uuml":"\xFC","yacute":"\xFD","yen":"\xA5","yuml":"\xFF"}');
    }, function(e3) {
      e3.exports = JSON.parse('{"0":"\uFFFD","128":"\u20AC","130":"\u201A","131":"\u0192","132":"\u201E","133":"\u2026","134":"\u2020","135":"\u2021","136":"\u02C6","137":"\u2030","138":"\u0160","139":"\u2039","140":"\u0152","142":"\u017D","145":"\u2018","146":"\u2019","147":"\u201C","148":"\u201D","149":"\u2022","150":"\u2013","151":"\u2014","152":"\u02DC","153":"\u2122","154":"\u0161","155":"\u203A","156":"\u0153","158":"\u017E","159":"\u0178"}');
    }, function(e3, n2, t2) {
      e3.exports = function(e4) {
        var n3 = typeof e4 == "string" ? e4.charCodeAt(0) : e4;
        return n3 >= 97 && n3 <= 102 || n3 >= 65 && n3 <= 70 || n3 >= 48 && n3 <= 57;
      };
    }, function(e3, n2, t2) {
      var r2 = t2(42), a = t2(12);
      e3.exports = function(e4) {
        return r2(e4) || a(e4);
      };
    }, function(e3, n2, t2) {
      e3.exports = function(e4) {
        var n3 = typeof e4 == "string" ? e4.charCodeAt(0) : e4;
        return n3 >= 97 && n3 <= 122 || n3 >= 65 && n3 <= 90;
      };
    }, function(e3, n2, t2) {
      var r2;
      e3.exports = function(e4) {
        var n3, t3 = "&" + e4 + ";";
        if ((r2 = r2 || document.createElement("i")).innerHTML = t3, (n3 = r2.textContent).charCodeAt(n3.length - 1) === 59 && e4 !== "semi")
          return false;
        return n3 !== t3 && n3;
      };
    }, function(e3, n2, t2) {
      (function(n3) {
        var t3 = function(e4) {
          var n4 = /\blang(?:uage)?-([\w-]+)\b/i, t4 = 0, r2 = { manual: e4.Prism && e4.Prism.manual, disableWorkerMessageHandler: e4.Prism && e4.Prism.disableWorkerMessageHandler, util: { encode: function(e5) {
            return e5 instanceof a ? new a(e5.type, r2.util.encode(e5.content), e5.alias) : Array.isArray(e5) ? e5.map(r2.util.encode) : e5.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }, type: function(e5) {
            return Object.prototype.toString.call(e5).slice(8, -1);
          }, objId: function(e5) {
            return e5.__id || Object.defineProperty(e5, "__id", { value: ++t4 }), e5.__id;
          }, clone: function e5(n5, t5) {
            var a2, o2, l2 = r2.util.type(n5);
            switch (t5 = t5 || {}, l2) {
              case "Object":
                if (o2 = r2.util.objId(n5), t5[o2])
                  return t5[o2];
                for (var i in a2 = {}, t5[o2] = a2, n5)
                  n5.hasOwnProperty(i) && (a2[i] = e5(n5[i], t5));
                return a2;
              case "Array":
                return o2 = r2.util.objId(n5), t5[o2] ? t5[o2] : (a2 = [], t5[o2] = a2, n5.forEach(function(n6, r3) {
                  a2[r3] = e5(n6, t5);
                }), a2);
              default:
                return n5;
            }
          } }, languages: { extend: function(e5, n5) {
            var t5 = r2.util.clone(r2.languages[e5]);
            for (var a2 in n5)
              t5[a2] = n5[a2];
            return t5;
          }, insertBefore: function(e5, n5, t5, a2) {
            var o2 = (a2 = a2 || r2.languages)[e5], l2 = {};
            for (var i in o2)
              if (o2.hasOwnProperty(i)) {
                if (i == n5)
                  for (var s in t5)
                    t5.hasOwnProperty(s) && (l2[s] = t5[s]);
                t5.hasOwnProperty(i) || (l2[i] = o2[i]);
              }
            var u = a2[e5];
            return a2[e5] = l2, r2.languages.DFS(r2.languages, function(n6, t6) {
              t6 === u && n6 != e5 && (this[n6] = l2);
            }), l2;
          }, DFS: function e5(n5, t5, a2, o2) {
            o2 = o2 || {};
            var l2 = r2.util.objId;
            for (var i in n5)
              if (n5.hasOwnProperty(i)) {
                t5.call(n5, i, n5[i], a2 || i);
                var s = n5[i], u = r2.util.type(s);
                u !== "Object" || o2[l2(s)] ? u !== "Array" || o2[l2(s)] || (o2[l2(s)] = true, e5(s, t5, i, o2)) : (o2[l2(s)] = true, e5(s, t5, null, o2));
              }
          } }, plugins: {}, highlightAll: function(e5, n5) {
            r2.highlightAllUnder(document, e5, n5);
          }, highlightAllUnder: function(e5, n5, t5) {
            var a2 = { callback: t5, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
            r2.hooks.run("before-highlightall", a2);
            for (var o2, l2 = e5.querySelectorAll(a2.selector), i = 0; o2 = l2[i++]; )
              r2.highlightElement(o2, n5 === true, a2.callback);
          }, highlightElement: function(t5, a2, o2) {
            for (var l2, i = "none", s = t5; s && !n4.test(s.className); )
              s = s.parentNode;
            s && (i = (s.className.match(n4) || [, "none"])[1].toLowerCase(), l2 = r2.languages[i]), t5.className = t5.className.replace(n4, "").replace(/\s+/g, " ") + " language-" + i, t5.parentNode && (s = t5.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(n4, "").replace(/\s+/g, " ") + " language-" + i));
            var u = { element: t5, language: i, grammar: l2, code: t5.textContent }, c2 = function(e5) {
              u.highlightedCode = e5, r2.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r2.hooks.run("after-highlight", u), r2.hooks.run("complete", u), o2 && o2.call(u.element);
            };
            if (r2.hooks.run("before-sanity-check", u), u.code)
              if (r2.hooks.run("before-highlight", u), u.grammar)
                if (a2 && e4.Worker) {
                  var p2 = new Worker(r2.filename);
                  p2.onmessage = function(e5) {
                    c2(e5.data);
                  }, p2.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: true }));
                } else
                  c2(r2.highlight(u.code, u.grammar, u.language));
              else
                c2(r2.util.encode(u.code));
            else
              r2.hooks.run("complete", u);
          }, highlight: function(e5, n5, t5) {
            var o2 = { code: e5, grammar: n5, language: t5 };
            return r2.hooks.run("before-tokenize", o2), o2.tokens = r2.tokenize(o2.code, o2.grammar), r2.hooks.run("after-tokenize", o2), a.stringify(r2.util.encode(o2.tokens), o2.language);
          }, matchGrammar: function(e5, n5, t5, o2, l2, i, s) {
            for (var u in t5)
              if (t5.hasOwnProperty(u) && t5[u]) {
                if (u == s)
                  return;
                var c2 = t5[u];
                c2 = r2.util.type(c2) === "Array" ? c2 : [c2];
                for (var p2 = 0; p2 < c2.length; ++p2) {
                  var d2 = c2[p2], g2 = d2.inside, f2 = !!d2.lookbehind, m2 = !!d2.greedy, h2 = 0, y2 = d2.alias;
                  if (m2 && !d2.pattern.global) {
                    var v2 = d2.pattern.toString().match(/[imuy]*$/)[0];
                    d2.pattern = RegExp(d2.pattern.source, v2 + "g");
                  }
                  d2 = d2.pattern || d2;
                  for (var b2 = o2, x2 = l2; b2 < n5.length; x2 += n5[b2].length, ++b2) {
                    var w2 = n5[b2];
                    if (n5.length > e5.length)
                      return;
                    if (!(w2 instanceof a)) {
                      if (m2 && b2 != n5.length - 1) {
                        if (d2.lastIndex = x2, !(P = d2.exec(e5)))
                          break;
                        for (var k2 = P.index + (f2 ? P[1].length : 0), S = P.index + P[0].length, C = b2, O = x2, j = n5.length; C < j && (O < S || !n5[C].type && !n5[C - 1].greedy); ++C)
                          k2 >= (O += n5[C].length) && (++b2, x2 = O);
                        if (n5[b2] instanceof a)
                          continue;
                        A2 = C - b2, w2 = e5.slice(x2, O), P.index -= x2;
                      } else {
                        d2.lastIndex = 0;
                        var P = d2.exec(w2), A2 = 1;
                      }
                      if (P) {
                        f2 && (h2 = P[1] ? P[1].length : 0);
                        S = (k2 = P.index + h2) + (P = P[0].slice(h2)).length;
                        var N = w2.slice(0, k2), F = w2.slice(S), E = [b2, A2];
                        N && (++b2, x2 += N.length, E.push(N));
                        var L = new a(u, g2 ? r2.tokenize(P, g2) : P, y2, P, m2);
                        if (E.push(L), F && E.push(F), Array.prototype.splice.apply(n5, E), A2 != 1 && r2.matchGrammar(e5, n5, t5, b2, x2, true, u), i)
                          break;
                      } else if (i)
                        break;
                    }
                  }
                }
              }
          }, tokenize: function(e5, n5) {
            var t5 = [e5], a2 = n5.rest;
            if (a2) {
              for (var o2 in a2)
                n5[o2] = a2[o2];
              delete n5.rest;
            }
            return r2.matchGrammar(e5, t5, n5, 0, 0, false), t5;
          }, hooks: { all: {}, add: function(e5, n5) {
            var t5 = r2.hooks.all;
            t5[e5] = t5[e5] || [], t5[e5].push(n5);
          }, run: function(e5, n5) {
            var t5 = r2.hooks.all[e5];
            if (t5 && t5.length)
              for (var a2, o2 = 0; a2 = t5[o2++]; )
                a2(n5);
          } }, Token: a };
          function a(e5, n5, t5, r3, a2) {
            this.type = e5, this.content = n5, this.alias = t5, this.length = 0 | (r3 || "").length, this.greedy = !!a2;
          }
          if (e4.Prism = r2, a.stringify = function(e5, n5) {
            if (typeof e5 == "string")
              return e5;
            if (Array.isArray(e5))
              return e5.map(function(e6) {
                return a.stringify(e6, n5);
              }).join("");
            var t5 = { type: e5.type, content: a.stringify(e5.content, n5), tag: "span", classes: ["token", e5.type], attributes: {}, language: n5 };
            if (e5.alias) {
              var o2 = Array.isArray(e5.alias) ? e5.alias : [e5.alias];
              Array.prototype.push.apply(t5.classes, o2);
            }
            r2.hooks.run("wrap", t5);
            var l2 = Object.keys(t5.attributes).map(function(e6) {
              return e6 + '="' + (t5.attributes[e6] || "").replace(/"/g, "&quot;") + '"';
            }).join(" ");
            return "<" + t5.tag + ' class="' + t5.classes.join(" ") + '"' + (l2 ? " " + l2 : "") + ">" + t5.content + "</" + t5.tag + ">";
          }, !e4.document)
            return e4.addEventListener ? (r2.disableWorkerMessageHandler || e4.addEventListener("message", function(n5) {
              var t5 = JSON.parse(n5.data), a2 = t5.language, o2 = t5.code, l2 = t5.immediateClose;
              e4.postMessage(r2.highlight(o2, r2.languages[a2], a2)), l2 && e4.close();
            }, false), r2) : r2;
          var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
          return o && (r2.filename = o.src, r2.manual || o.hasAttribute("data-manual") || (document.readyState !== "loading" ? window.requestAnimationFrame ? window.requestAnimationFrame(r2.highlightAll) : window.setTimeout(r2.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r2.highlightAll))), r2;
        }(typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope ? self : {});
        e3.exports && (e3.exports = t3), n3 !== void 0 && (n3.Prism = t3);
      }).call(this, t2(7));
    }, function(e3, n2, t2) {
      function r2(e4) {
        e4.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: true }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, e4.languages.markup.tag.inside["attr-value"].inside.entity = e4.languages.markup.entity, e4.hooks.add("wrap", function(e5) {
          e5.type === "entity" && (e5.attributes.title = e5.content.value.replace(/&amp;/, "&"));
        }), Object.defineProperty(e4.languages.markup.tag, "addInlined", { value: function(n3, t3) {
          var r3 = {};
          r3["language-" + t3] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: e4.languages[t3] }, r3.cdata = /^<!\[CDATA\[|\]\]>$/i;
          var a = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r3 } };
          a["language-" + t3] = { pattern: /[\s\S]+/, inside: e4.languages[t3] };
          var o = {};
          o[n3] = { pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, n3), "i"), lookbehind: true, greedy: true, inside: a }, e4.languages.insertBefore("markup", "cdata", o);
        } }), e4.languages.xml = e4.languages.extend("markup", {}), e4.languages.html = e4.languages.markup, e4.languages.mathml = e4.languages.markup, e4.languages.svg = e4.languages.markup;
      }
      e3.exports = r2, r2.displayName = "markup", r2.aliases = ["xml", "html", "mathml", "svg"];
    }, function(e3, n2, t2) {
      function r2(e4) {
        !function(e5) {
          var n3 = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          e5.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /@[\w-]+/ } }, url: { pattern: RegExp("url\\((?:" + n3.source + "|[^\n\r()]*)\\)", "i"), inside: { function: /^url/i, punctuation: /^\(|\)$/ } }, selector: RegExp(`[^{}\\s](?:[^{};"']|` + n3.source + ")*?(?=\\s*\\{)"), string: { pattern: n3, greedy: true }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, e5.languages.css.atrule.inside.rest = e5.languages.css;
          var t3 = e5.languages.markup;
          t3 && (t3.tag.addInlined("style", "css"), e5.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: t3.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: e5.languages.css } }, alias: "language-css" } }, t3.tag));
        }(e4);
      }
      e3.exports = r2, r2.displayName = "css", r2.aliases = [];
    }, function(e3, n2, t2) {
      function r2(e4) {
        e4.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
      }
      e3.exports = r2, r2.displayName = "clike", r2.aliases = [];
    }, function(e3, n2, t2) {
      function r2(e4) {
        e4.languages.javascript = e4.languages.extend("clike", { "class-name": [e4.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), e4.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, e4.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: e4.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: e4.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: e4.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: e4.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), e4.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: e4.languages.javascript } }, string: /[\s\S]+/ } } }), e4.languages.markup && e4.languages.markup.tag.addInlined("script", "javascript"), e4.languages.js = e4.languages.javascript;
      }
      e3.exports = r2, r2.displayName = "javascript", r2.aliases = ["js"];
    }, function(e3, n2) {
      e3.exports = function(e4, n3) {
        if (e4 == null)
          return {};
        var t2, r2, a = {}, o = Object.keys(e4);
        for (r2 = 0; r2 < o.length; r2++)
          t2 = o[r2], n3.indexOf(t2) >= 0 || (a[t2] = e4[t2]);
        return a;
      }, e3.exports.default = e3.exports, e3.exports.__esModule = true;
    }, function(e3, n2) {
      e3.exports = function(e4, n3, t2) {
        return n3 in e4 ? Object.defineProperty(e4, n3, { value: t2, enumerable: true, configurable: true, writable: true }) : e4[n3] = t2, e4;
      }, e3.exports.default = e3.exports, e3.exports.__esModule = true;
    }, function(e3, n2, t2) {
      t2.r(n2), t2.d(n2, "HighLighter", function() {
        return E;
      });
      var r2 = t2(0), a = t2.n(r2), o = t2(13), l2 = t2(14), i = t2.n(l2), s = t2(2), u = t2.n(s), c2 = t2(3), p2 = t2.n(c2);
      function d2(e4) {
        var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t3 = arguments.length > 2 ? arguments[2] : void 0;
        return e4.reduce(function(e5, n4) {
          return p2()({}, e5, t3[n4]);
        }, n3);
      }
      function g2(e4) {
        return e4.join(" ");
      }
      function f2(e4) {
        var n3 = e4.node, t3 = e4.stylesheet, r3 = e4.style, o2 = r3 === void 0 ? {} : r3, l3 = e4.useInlineStyles, i2 = e4.key, s2 = n3.properties, c3 = n3.type, m3 = n3.tagName, h3 = n3.value;
        if (c3 === "text")
          return h3;
        if (m3) {
          var y3 = function(e5, n4) {
            var t4 = 0;
            return function(r4) {
              return t4 += 1, r4.map(function(r5, a2) {
                return f2({ node: r5, stylesheet: e5, useInlineStyles: n4, key: "code-segment-".concat(t4, "-").concat(a2) });
              });
            };
          }(t3, l3), v3 = l3 && s2.className && s2.className.filter(function(e5) {
            return !t3[e5];
          }), b3 = v3 && v3.length ? v3 : void 0, x3 = l3 ? p2()({}, s2, { className: b3 && g2(b3) }, { style: d2(s2.className, Object.assign({}, s2.style, o2), t3) }) : p2()({}, s2, { className: g2(s2.className) }), w3 = y3(n3.children);
          return a.a.createElement(m3, u()({ key: i2 }, x3), w3);
        }
      }
      var m2 = /\n/g;
      function h2(e4) {
        var n3 = e4.codeString, t3 = e4.codeStyle, r3 = e4.containerProps, o2 = r3 === void 0 ? {} : r3, l3 = e4.numberProps, i2 = e4.startingLineNumber;
        return o2.style = o2.style || { float: "left", paddingRight: "10px" }, a.a.createElement("code", u()({}, o2, { style: Object.assign({}, t3, o2.style) }), function(e5) {
          var n4 = e5.lines, t4 = e5.startingLineNumber, r4 = e5.numberProps, o3 = r4 === void 0 ? {} : r4;
          return n4.map(function(e6, n5) {
            var r5 = n5 + t4, l4 = typeof o3 == "function" ? o3(r5) : o3;
            return a.a.createElement("span", u()({ key: "line-".concat(n5), className: "react-syntax-highlighter-line-number" }, l4), "".concat(r5, "\n"));
          });
        }({ lines: n3.replace(/\n$/, "").split("\n"), numberProps: l3, startingLineNumber: i2 }));
      }
      function y2(e4) {
        var n3 = e4.children, t3 = e4.lineNumber, r3 = e4.lineProps, a2 = e4.className, o2 = a2 === void 0 ? [] : a2, l3 = (typeof r3 == "function" ? r3(t3) : r3) || {};
        return l3.className = l3.className ? o2.concat(l3.className) : o2, { type: "element", tagName: "span", properties: l3, children: n3 };
      }
      function v2(e4, n3) {
        for (var t3 = function e5(n4) {
          for (var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], a3 = 0; a3 < n4.length; a3++) {
            var o3 = n4[a3];
            if (o3.type === "text")
              r4.push(y2({ children: [o3], className: t4 }));
            else if (o3.children) {
              var l4 = t4.concat(o3.properties.className);
              r4 = r4.concat(e5(o3.children, l4));
            }
          }
          return r4;
        }(e4.value), r3 = [], a2 = -1, o2 = 0, l3 = function() {
          var e5 = t3[o2], l4 = e5.children[0].value;
          if (l4.match(m2)) {
            var i3 = l4.split("\n");
            i3.forEach(function(l5, s2) {
              var u2 = r3.length + 1, c3 = { type: "text", value: "".concat(l5, "\n") };
              if (s2 === 0) {
                var p3 = t3.slice(a2 + 1, o2).concat(y2({ children: [c3], className: e5.properties.className }));
                r3.push(y2({ children: p3, lineNumber: u2, lineProps: n3 }));
              } else if (s2 === i3.length - 1) {
                if (t3[o2 + 1] && t3[o2 + 1].children && t3[o2 + 1].children[0]) {
                  var d3 = y2({ children: [{ type: "text", value: "".concat(l5) }], className: e5.properties.className });
                  t3.splice(o2 + 1, 0, d3);
                } else
                  r3.push(y2({ children: [c3], lineNumber: u2, lineProps: n3, className: e5.properties.className }));
              } else
                r3.push(y2({ children: [c3], lineNumber: u2, lineProps: n3, className: e5.properties.className }));
            }), a2 = o2;
          }
          o2++;
        }; o2 < t3.length; )
          l3();
        if (a2 !== t3.length - 1) {
          var i2 = t3.slice(a2 + 1, t3.length);
          i2 && i2.length && r3.push(y2({ children: i2, lineNumber: r3.length + 1, lineProps: n3 }));
        }
        return r3;
      }
      function b2(e4) {
        var n3 = e4.rows, t3 = e4.stylesheet, r3 = e4.useInlineStyles;
        return n3.map(function(e5, n4) {
          return f2({ node: e5, stylesheet: t3, useInlineStyles: r3, key: "code-segement".concat(n4) });
        });
      }
      var x2, w2, k2 = t2(6), S = t2.n(k2), C = (x2 = S.a, w2 = {}, function(e4) {
        var n3 = e4.language, t3 = e4.children, r3 = e4.style, o2 = r3 === void 0 ? w2 : r3, l3 = e4.customStyle, s2 = l3 === void 0 ? {} : l3, u2 = e4.codeTagProps, c3 = u2 === void 0 ? { style: o2['code[class*="language-"]'] } : u2, p3 = e4.useInlineStyles, d3 = p3 === void 0 || p3, g3 = e4.showLineNumbers, f3 = g3 !== void 0 && g3, m3 = e4.startingLineNumber, y3 = m3 === void 0 ? 1 : m3, k3 = e4.lineNumberContainerProps, S2 = e4.lineNumberProps, C2 = e4.wrapLines, O2 = e4.lineProps, j2 = O2 === void 0 ? {} : O2, P2 = e4.renderer, A3 = e4.PreTag, N2 = A3 === void 0 ? "pre" : A3, F2 = e4.CodeTag, E2 = F2 === void 0 ? "code" : F2, L = e4.code, _ = L === void 0 ? Array.isArray(t3) ? t3[0] : t3 : L, T = e4.astGenerator, M = i()(e4, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "startingLineNumber", "lineNumberContainerProps", "lineNumberProps", "wrapLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
        T = T || x2;
        var D = f3 ? a.a.createElement(h2, { containerProps: k3, codeStyle: c3.style || {}, numberProps: S2, startingLineNumber: y3, codeString: _ }) : null, $ = o2.hljs || o2['pre[class*="language-"]'] || { backgroundColor: "#fff" }, I = d3 ? Object.assign({}, M, { style: Object.assign({}, $, s2) }) : Object.assign({}, M, { className: "hljs" });
        if (!T)
          return a.a.createElement(N2, I, D, a.a.createElement(E2, c3, _));
        C2 = !(!P2 || C2 !== void 0) || C2, P2 = P2 || b2;
        var R = [{ type: "text", value: _ }], B = function(e5) {
          var n4 = e5.astGenerator, t4 = e5.language, r4 = e5.code, a2 = e5.defaultCodeValue;
          if (n4.getLanguage) {
            var o3 = t4 && n4.getLanguage(t4);
            return t4 === "text" ? { value: a2, language: "text" } : o3 ? n4.highlight(t4, r4) : n4.highlightAuto(r4);
          }
          try {
            return t4 && t4 !== "text" ? { value: n4.highlight(r4, t4) } : { value: a2 };
          } catch (e6) {
            return { value: a2 };
          }
        }({ astGenerator: T, language: n3, code: _, defaultCodeValue: R });
        B.language === null && (B.value = R);
        var z2 = C2 ? v2(B, j2) : B.value;
        return a.a.createElement(N2, I, D, a.a.createElement(E2, c3, P2({ rows: z2, stylesheet: o2, useInlineStyles: d3 })));
      });
      C.registerLanguage = function(e4, n3) {
        return S.a.register(n3);
      };
      var O = C, j = t2(15), P = t2.n(j).a, A2 = t2(16), N = t2.n(A2).a, F = (t2(20), function(e4, n3) {
        var t3 = typeof Symbol == "function" && e4[Symbol.iterator];
        if (!t3)
          return e4;
        var r3, a2, o2 = t3.call(e4), l3 = [];
        try {
          for (; (n3 === void 0 || n3-- > 0) && !(r3 = o2.next()).done; )
            l3.push(r3.value);
        } catch (e5) {
          a2 = { error: e5 };
        } finally {
          try {
            r3 && !r3.done && (t3 = o2.return) && t3.call(o2);
          } finally {
            if (a2)
              throw a2.error;
          }
        }
        return l3;
      });
      function E(e4) {
        var n3 = e4.lang, t3 = e4.children, l3 = F(Object(r2.useState)(false), 2), i2 = l3[0], s2 = l3[1];
        return a.a.createElement("div", { className: "code-pane language-" + n3 }, a.a.createElement(o.CopyToClipboard, { text: t3, onCopy: function() {
          return s2(true);
        } }, a.a.createElement("span", { className: "icon-copy" }, i2 ? "Copied !" : "Copy")), a.a.createElement(O, { language: n3, useInlineStyles: false }, t3));
      }
      O.registerLanguage("jsx", P), O.registerLanguage("tsx", P), O.registerLanguage("json", N);
      try {
        E.__docsPath = "https://g.alicdn.com/code/npm/@alife/intl-comp-highLighter/1.0.15/docs/index.js", E.displayName = "HighLighter", E.__displayName = "HighLighter";
      } catch (e4) {
      }
      E.registerLanguage = O.registerLanguage;
      n2.default = E;
      try {
        E.__docsPath = "https://g.alicdn.com/code/npm/@alife/intl-comp-highLighter/1.0.15/docs/index.js", E.displayName = "HighLighter", E.__displayName = "HighLighter";
      } catch (e4) {
      }
    }]).default;
  });
})(dist);
var HighLight = /* @__PURE__ */ getDefaultExportFromCjs(dist.exports);
var jsx_1 = jsx;
jsx.displayName = "jsx";
jsx.aliases = [];
function jsx(Prism) {
  (function(Prism2) {
    var javascript = Prism2.util.clone(Prism2.languages.javascript);
    var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
    var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
    var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function re(source, flags2) {
      source = source.replace(/<S>/g, function() {
        return space;
      }).replace(/<BRACES>/g, function() {
        return braces;
      }).replace(/<SPREAD>/g, function() {
        return spread;
      });
      return RegExp(source, flags2);
    }
    spread = re(spread).source;
    Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
    Prism2.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
    Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/i;
    Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i;
    Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
    Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
    Prism2.languages.insertBefore("inside", "attr-name", {
      spread: {
        pattern: re(/<SPREAD>/.source),
        inside: Prism2.languages.jsx
      }
    }, Prism2.languages.jsx.tag);
    Prism2.languages.insertBefore("inside", "special-attr", {
      script: {
        pattern: re(/=<BRACES>/.source),
        inside: {
          "script-punctuation": {
            pattern: /^=(?=\{)/,
            alias: "punctuation"
          },
          rest: Prism2.languages.jsx
        },
        alias: "language-javascript"
      }
    }, Prism2.languages.jsx.tag);
    var stringifyToken = function(token) {
      if (!token) {
        return "";
      }
      if (typeof token === "string") {
        return token;
      }
      if (typeof token.content === "string") {
        return token.content;
      }
      return token.content.map(stringifyToken).join("");
    };
    var walkTokens = function(tokens) {
      var openedTags = [];
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        var notTagNorBrace = false;
        if (typeof token !== "string") {
          if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
            if (token.content[0].content[0].content === "</") {
              if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
                openedTags.pop();
              }
            } else {
              if (token.content[token.content.length - 1].content === "/>")
                ;
              else {
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                });
              }
            }
          } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
            openedTags[openedTags.length - 1].openedBraces++;
          } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
            openedTags[openedTags.length - 1].openedBraces--;
          } else {
            notTagNorBrace = true;
          }
        }
        if (notTagNorBrace || typeof token === "string") {
          if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
            var plainText = stringifyToken(token);
            if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
              plainText += stringifyToken(tokens[i + 1]);
              tokens.splice(i + 1, 1);
            }
            if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
              plainText = stringifyToken(tokens[i - 1]) + plainText;
              tokens.splice(i - 1, 1);
              i--;
            }
            tokens[i] = new Prism2.Token("plain-text", plainText, null, plainText);
          }
        }
        if (token.content && typeof token.content !== "string") {
          walkTokens(token.content);
        }
      }
    };
    Prism2.hooks.add("after-tokenize", function(env) {
      if (env.language !== "jsx" && env.language !== "tsx") {
        return;
      }
      walkTokens(env.tokens);
    });
  })(Prism);
}
var typescript_1 = typescript;
typescript.displayName = "typescript";
typescript.aliases = ["ts"];
function typescript(Prism) {
  (function(Prism2) {
    Prism2.languages.typescript = Prism2.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
    });
    Prism2.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
    delete Prism2.languages.typescript["parameter"];
    var typeInside = Prism2.languages.extend("typescript", {});
    delete typeInside["class-name"];
    Prism2.languages.typescript["class-name"].inside = typeInside;
    Prism2.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: "operator"
          },
          function: /^[\s\S]+/
        }
      },
      "generic-function": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: true,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: typeInside
          }
        }
      }
    });
    Prism2.languages.ts = Prism2.languages.typescript;
  })(Prism);
}
var refractorJsx = jsx_1;
var refractorTypescript = typescript_1;
var tsx_1 = tsx;
tsx.displayName = "tsx";
tsx.aliases = [];
function tsx(Prism) {
  Prism.register(refractorJsx);
  Prism.register(refractorTypescript);
  (function(Prism2) {
    var typescript2 = Prism2.util.clone(Prism2.languages.typescript);
    Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript2);
    var tag = Prism2.languages.tsx.tag;
    tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
    tag.lookbehind = true;
  })(Prism);
}
var tsx$1 = tsx_1;
var scss_1 = scss;
scss.displayName = "scss";
scss.aliases = [];
function scss(Prism) {
  Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    atrule: {
      pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,
      inside: {
        parent: {
          pattern: /&/,
          alias: "important"
        },
        placeholder: /%[-\w]+/,
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    },
    property: {
      pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
      inside: {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    }
  });
  Prism.languages.insertBefore("scss", "atrule", {
    keyword: [
      /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
      {
        pattern: /( )(?:from|through)(?= )/,
        lookbehind: true
      }
    ]
  });
  Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  });
  Prism.languages.insertBefore("scss", "function", {
    "module-modifier": {
      pattern: /\b(?:as|with|show|hide)\b/i,
      alias: "keyword"
    },
    placeholder: {
      pattern: /%[-\w]+/,
      alias: "selector"
    },
    statement: {
      pattern: /\B!(?:default|optional)\b/i,
      alias: "keyword"
    },
    boolean: /\b(?:true|false)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword"
    },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: true
    }
  });
  Prism.languages.scss["atrule"].inside.rest = Prism.languages.scss;
}
var scss$1 = scss_1;
var less_1 = less;
less.displayName = "less";
less.aliases = [];
function less(Prism) {
  Prism.languages.less = Prism.languages.extend("css", {
    comment: [
      /\/\*[\s\S]*?\*\//,
      {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: true
      }
    ],
    atrule: {
      pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        punctuation: /[:()]/
      }
    },
    selector: {
      pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        variable: /@+[\w-]+/
      }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
    operator: /[+\-*\/]/
  });
  Prism.languages.insertBefore("less", "property", {
    variable: [
      {
        pattern: /@[\w-]+\s*:/,
        inside: {
          punctuation: /:/
        }
      },
      /@@?[\w-]+/
    ],
    "mixin-usage": {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: true,
      alias: "function"
    }
  });
}
var less$1 = less_1;
var index$3 = "";
var index$2 = "";
var index$1 = "";
const ComponentPropsContext = createContext({});
var CopyOutlined$5 = { exports: {} };
var CopyOutlined$4 = {};
var CopyOutlined$3 = {};
Object.defineProperty(CopyOutlined$3, "__esModule", { value: true });
var CopyOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
CopyOutlined$3.default = CopyOutlined$2;
var _interopRequireWildcard$4 = interopRequireWildcard.exports;
var _interopRequireDefault$4 = interopRequireDefault.exports;
Object.defineProperty(CopyOutlined$4, "__esModule", {
  value: true
});
CopyOutlined$4.default = void 0;
var _objectSpread2$4 = _interopRequireDefault$4(objectSpread2.exports);
var React$4 = _interopRequireWildcard$4(require$$3);
var _CopyOutlined = _interopRequireDefault$4(CopyOutlined$3);
var _AntdIcon$4 = _interopRequireDefault$4(AntdIcon);
var CopyOutlined$1 = function CopyOutlined(props, ref) {
  return /* @__PURE__ */ React$4.createElement(_AntdIcon$4.default, (0, _objectSpread2$4.default)((0, _objectSpread2$4.default)({}, props), {}, {
    ref,
    icon: _CopyOutlined.default
  }));
};
CopyOutlined$1.displayName = "CopyOutlined";
var _default$4 = /* @__PURE__ */ React$4.forwardRef(CopyOutlined$1);
CopyOutlined$4.default = _default$4;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _CopyOutlined2 = _interopRequireDefault2(CopyOutlined$4);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _CopyOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(CopyOutlined$5, CopyOutlined$5.exports);
var CopyOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(CopyOutlined$5.exports);
var CodeOutlined$5 = { exports: {} };
var CodeOutlined$4 = {};
var CodeOutlined$3 = {};
Object.defineProperty(CodeOutlined$3, "__esModule", { value: true });
var CodeOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "code", "theme": "outlined" };
CodeOutlined$3.default = CodeOutlined$2;
var _interopRequireWildcard$3 = interopRequireWildcard.exports;
var _interopRequireDefault$3 = interopRequireDefault.exports;
Object.defineProperty(CodeOutlined$4, "__esModule", {
  value: true
});
CodeOutlined$4.default = void 0;
var _objectSpread2$3 = _interopRequireDefault$3(objectSpread2.exports);
var React$3 = _interopRequireWildcard$3(require$$3);
var _CodeOutlined = _interopRequireDefault$3(CodeOutlined$3);
var _AntdIcon$3 = _interopRequireDefault$3(AntdIcon);
var CodeOutlined$1 = function CodeOutlined(props, ref) {
  return /* @__PURE__ */ React$3.createElement(_AntdIcon$3.default, (0, _objectSpread2$3.default)((0, _objectSpread2$3.default)({}, props), {}, {
    ref,
    icon: _CodeOutlined.default
  }));
};
CodeOutlined$1.displayName = "CodeOutlined";
var _default$3 = /* @__PURE__ */ React$3.forwardRef(CodeOutlined$1);
CodeOutlined$4.default = _default$3;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _CodeOutlined2 = _interopRequireDefault2(CodeOutlined$4);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _CodeOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(CodeOutlined$5, CodeOutlined$5.exports);
var CodeOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(CodeOutlined$5.exports);
var CheckOutlined$5 = { exports: {} };
var CheckOutlined$4 = {};
var CheckOutlined$3 = {};
Object.defineProperty(CheckOutlined$3, "__esModule", { value: true });
var CheckOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
CheckOutlined$3.default = CheckOutlined$2;
var _interopRequireWildcard$2 = interopRequireWildcard.exports;
var _interopRequireDefault$2 = interopRequireDefault.exports;
Object.defineProperty(CheckOutlined$4, "__esModule", {
  value: true
});
CheckOutlined$4.default = void 0;
var _objectSpread2$2 = _interopRequireDefault$2(objectSpread2.exports);
var React$2 = _interopRequireWildcard$2(require$$3);
var _CheckOutlined = _interopRequireDefault$2(CheckOutlined$3);
var _AntdIcon$2 = _interopRequireDefault$2(AntdIcon);
var CheckOutlined$1 = function CheckOutlined(props, ref) {
  return /* @__PURE__ */ React$2.createElement(_AntdIcon$2.default, (0, _objectSpread2$2.default)((0, _objectSpread2$2.default)({}, props), {}, {
    ref,
    icon: _CheckOutlined.default
  }));
};
CheckOutlined$1.displayName = "CheckOutlined";
var _default$2 = /* @__PURE__ */ React$2.forwardRef(CheckOutlined$1);
CheckOutlined$4.default = _default$2;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _CheckOutlined2 = _interopRequireDefault2(CheckOutlined$4);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _CheckOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(CheckOutlined$5, CheckOutlined$5.exports);
var CheckOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(CheckOutlined$5.exports);
var LinkOutlined$5 = { exports: {} };
var LinkOutlined$4 = {};
var LinkOutlined$3 = {};
Object.defineProperty(LinkOutlined$3, "__esModule", { value: true });
var LinkOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" } }] }, "name": "link", "theme": "outlined" };
LinkOutlined$3.default = LinkOutlined$2;
var _interopRequireWildcard$1 = interopRequireWildcard.exports;
var _interopRequireDefault$1 = interopRequireDefault.exports;
Object.defineProperty(LinkOutlined$4, "__esModule", {
  value: true
});
LinkOutlined$4.default = void 0;
var _objectSpread2$1 = _interopRequireDefault$1(objectSpread2.exports);
var React$1 = _interopRequireWildcard$1(require$$3);
var _LinkOutlined = _interopRequireDefault$1(LinkOutlined$3);
var _AntdIcon$1 = _interopRequireDefault$1(AntdIcon);
var LinkOutlined$1 = function LinkOutlined(props, ref) {
  return /* @__PURE__ */ React$1.createElement(_AntdIcon$1.default, (0, _objectSpread2$1.default)((0, _objectSpread2$1.default)({}, props), {}, {
    ref,
    icon: _LinkOutlined.default
  }));
};
LinkOutlined$1.displayName = "LinkOutlined";
var _default$1 = /* @__PURE__ */ React$1.forwardRef(LinkOutlined$1);
LinkOutlined$4.default = _default$1;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _LinkOutlined2 = _interopRequireDefault2(LinkOutlined$4);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _LinkOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(LinkOutlined$5, LinkOutlined$5.exports);
var LinkOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(LinkOutlined$5.exports);
var _toggleSelection_1_0_6_toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = _toggleSelection_1_0_6_toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message2) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return message2.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text2, options) {
  var debug, message2, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text2;
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e2) {
      e2.stopPropagation();
      if (options.format) {
        e2.preventDefault();
        if (typeof e2.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text2);
        } else {
          e2.clipboardData.clearData();
          e2.clipboardData.setData(options.format, text2);
        }
      }
      if (options.onCopy) {
        e2.preventDefault();
        options.onCopy(e2.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text2);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message2 = format("message" in options ? options.message : defaultMessage);
      window.prompt(message2, text2);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var _copyToClipboard_3_3_1_copyToClipboard = copy;
const { message } = window.antd;
function copyToClipboard(str) {
  _copyToClipboard_3_3_1_copyToClipboard(str);
  message.success("Copy successfully !");
}
function LinkCopy({ route }) {
  return /* @__PURE__ */ modules$1.createElement(LinkOutlined2, {
    className: "copy-link-icon",
    onClick: (e2) => {
      e2.stopPropagation();
      e2.preventDefault();
      const { origin, pathname } = location;
      copyToClipboard(`${origin}${pathname}#${route}`);
    }
  });
}
function baseSlice$2(array, start, end) {
  var index2 = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start];
  }
  return result;
}
var _baseSlice = baseSlice$2;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string2) {
  var index2 = string2.length;
  while (index2-- && reWhitespace.test(string2.charAt(index2))) {
  }
  return index2;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string2) {
  return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
}
var _baseTrim = baseTrim$1;
var baseTrim = _baseTrim, isObject = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var toNumber = toNumber_1;
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite$1;
var toFinite = toFinite_1;
function toInteger$2(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_1 = toInteger$2;
var baseSlice$1 = _baseSlice, toInteger$1 = toInteger_1;
function dropRight(array, n2, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n2 = guard || n2 === void 0 ? 1 : toInteger$1(n2);
  n2 = length - n2;
  return baseSlice$1(array, 0, n2 < 0 ? 0 : n2);
}
var dropRight_1 = dropRight;
var baseSlice = _baseSlice, toInteger = toInteger_1;
function takeRight(array, n2, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n2 = guard || n2 === void 0 ? 1 : toInteger(n2);
  n2 = length - n2;
  return baseSlice(array, n2 < 0 ? 0 : n2, length);
}
var takeRight_1 = takeRight;
const { Result, Tooltip } = window["antd"];
const componentBlockRender = (props) => {
  const { children } = props;
  const beforeChildren = dropRight_1(children, 1);
  const lastChild = takeRight_1(children, 1);
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-area"
  }, !!beforeChildren.length && /* @__PURE__ */ modules$1.createElement("div", {
    className: "code-box-demo-description markdown-body"
  }, beforeChildren), lastChild);
};
function ComponentArea(props) {
  const { renderer, lang, content: content2, defaultCodePanel } = props;
  const componentRef = useRef();
  const invoked = useRef(false);
  const newComp = useRef(new Map());
  const { componentProps, onSetDefaultProps, error, pathHash } = useContext$1(ComponentPropsContext);
  const defaultPropsRef = useRef();
  const setDefaultProps = usePersistFn((props2) => {
    defaultPropsRef.current = props2;
    defaultCodePanel && (onSetDefaultProps == null ? void 0 : onSetDefaultProps(__spreadValues({}, props2 || {})));
  });
  const wrapProps = usePersistFn((Component2, { React: OutReact }) => {
    var _a;
    if (((_a = newComp.current.get(Component2)) == null ? void 0 : _a.visionProps) === componentProps) {
      return newComp.current.get(Component2);
    }
    const outputComp = (props2) => {
      if (!invoked.current) {
        setDefaultProps(props2);
        invoked.current = true;
      }
      const finalProps = Object.assign({}, props2, componentProps);
      return OutReact.createElement(Component2, finalProps);
    };
    outputComp.visionProps = componentProps;
    outputComp.origin$ = Component2;
    outputComp.wrap$ = (Component22) => wrapProps(Component22, { React: OutReact });
    newComp.current.set(Component2, outputComp);
    return outputComp;
  });
  useEffect(() => {
    renderer && renderer(componentRef.current, wrapProps);
  }, [renderer, componentProps]);
  const [checkCode, { toggle }] = useBoolean();
  const handlerDebugComponent = usePersistFn(() => {
    onSetDefaultProps == null ? void 0 : onSetDefaultProps(__spreadValues({}, defaultPropsRef.current || {}));
  });
  return /* @__PURE__ */ modules$1.createElement(modules$1.Fragment, null, error ? /* @__PURE__ */ modules$1.createElement(Result, {
    status: "warning",
    title: "Resource load failed",
    subTitle: /* @__PURE__ */ modules$1.createElement("span", {
      style: { whiteSpace: "pre-wrap", textAlign: "left" }
    }, error.message)
  }) : /* @__PURE__ */ modules$1.createElement("div", {
    className: pathHash
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-container",
    id: "vite-component-container",
    ref: componentRef
  })), /* @__PURE__ */ modules$1.createElement("div", {
    className: "code-box-actions"
  }, /* @__PURE__ */ modules$1.createElement(Tooltip, {
    title: "Debug",
    onClick: handlerDebugComponent
  }, /* @__PURE__ */ modules$1.createElement(BugOutlined2, {
    className: "code-box-code-action"
  })), /* @__PURE__ */ modules$1.createElement(CopyIcon, {
    content: content2
  }), /* @__PURE__ */ modules$1.createElement(Tooltip, {
    title: checkCode ? "Hide Code" : "View Code",
    onClick: () => toggle()
  }, /* @__PURE__ */ modules$1.createElement(CodeOutlined2, {
    className: classNames("code-box-code-action", checkCode && "active")
  }))), checkCode && /* @__PURE__ */ modules$1.createElement(HighLight, {
    lang,
    children: content2
  }));
}
function CopyIcon({ content: content2 }) {
  const [copied, { setTrue, setFalse }] = useBoolean();
  const copy2 = usePersistFn(() => {
    copyToClipboard(content2);
    setTrue();
  });
  return /* @__PURE__ */ modules$1.createElement(Tooltip, {
    title: copied ? "Copied!" : "Copy Code",
    onClick: copy2,
    onVisibleChange: (v2) => {
      !v2 && setTimeout(() => {
        setFalse();
      }, 500);
    }
  }, copied ? /* @__PURE__ */ modules$1.createElement(CheckOutlined2, {
    className: "code-box-code-action",
    style: { color: "#52c41a" }
  }) : /* @__PURE__ */ modules$1.createElement(CopyOutlined2, {
    className: "code-box-code-action"
  }));
}
function remarkFrontMatter() {
  return (tree, _file) => {
    const modules2 = [];
    let prevModules = [];
    tree.children.forEach((node) => {
      if (node.type === "thematicBreak") {
        modules2.push(...prevModules);
        prevModules = [];
        return;
      }
      prevModules.push(node);
      if (node.type === "code" && isJsx(node.lang)) {
        modules2.push({
          type: "component-block",
          children: prevModules
        });
        prevModules = [];
        return;
      }
    });
    if (!!prevModules.length) {
      modules2.push(...prevModules);
    }
    tree.children = modules2;
    return tree;
  };
}
HighLight.registerLanguage("tsx", tsx$1);
HighLight.registerLanguage("scss", scss$1);
HighLight.registerLanguage("less", less$1);
function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }
  const { moduleMap, content: content2 } = res;
  const isCodeRenderIndexRef = useRef(0);
  const code = usePersistFn(({ language, value = "", node }) => {
    const jsx2 = /^[j|t]sx$/.test(language);
    if (!jsx2) {
      return /* @__PURE__ */ modules$1.createElement(HighLight, {
        lang: language,
        children: value
      });
    }
    const index2 = isCodeRenderIndexRef.current;
    isCodeRenderIndexRef.current++;
    const fn = moduleMap == null ? void 0 : moduleMap[value.trim()];
    return /* @__PURE__ */ modules$1.createElement(ComponentArea, {
      renderer: fn,
      lang: language,
      content: value,
      defaultCodePanel: index2 === 0
    });
  });
  const markdownComponent = useCreation(() => /* @__PURE__ */ modules$1.createElement(reactMarkdown, {
    className: "markdown-body",
    plugins: [remarkFrontMatter],
    renderers: {
      code,
      "component-block": componentBlockRender
    }
  }, content2), [content2, moduleMap]);
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: "markdown-area"
  }, markdownComponent);
}
const { Typography } = window["antd"];
const { Title, Text } = Typography;
function ReadmePane() {
  const [visionProps, setVisionProps] = useState({});
  const [visionDefaultProps, setVisionDefaultProps] = useState();
  const { route } = useRoute();
  const propertyTypes = useTypeFile();
  const compInfo = useComponentInfo();
  const Components = useMarkdown();
  return /* @__PURE__ */ modules$1.createElement("div", {
    id: "public-component-show-container"
  }, Components ? /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-page"
  }, /* @__PURE__ */ modules$1.createElement("a", {
    href: compInfo == null ? void 0 : compInfo.npmLink,
    className: "link-title"
  }, /* @__PURE__ */ modules$1.createElement(Title, {
    level: 1,
    className: "component-name"
  }, (propertyTypes == null ? void 0 : propertyTypes.displayName) || (compInfo == null ? void 0 : compInfo.packageName), /* @__PURE__ */ modules$1.createElement(LinkCopy, {
    route
  })), /* @__PURE__ */ modules$1.createElement("span", {
    className: "component-sub-title"
  }, /* @__PURE__ */ modules$1.createElement(Text, {
    type: "secondary"
  }, "Package: ", compInfo == null ? void 0 : compInfo.packageName), /* @__PURE__ */ modules$1.createElement(Text, {
    type: "secondary"
  }, "Version: ", compInfo == null ? void 0 : compInfo.packageVersion))), /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-main"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-part"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-description"
  }, /* @__PURE__ */ modules$1.createElement(ComponentPropsContext.Provider, {
    value: {
      pathHash: Components == null ? void 0 : Components.pathHash,
      error: Components == null ? void 0 : Components.error,
      componentProps: visionProps,
      onSetDefaultProps: setVisionDefaultProps
    }
  }, /* @__PURE__ */ modules$1.createElement(MarkdownArea, {
    data: Components
  })), /* @__PURE__ */ modules$1.createElement(renderProperty, {
    properties: propertyTypes
  }))), propertyTypes && /* @__PURE__ */ modules$1.createElement(VisionPane, {
    key: `vision-default-props`,
    properties: propertyTypes,
    defaultProps: visionDefaultProps,
    onPropsChange: setVisionProps
  }))) : "Loading...");
}
var index = "";
var DoubleRightOutlined$5 = { exports: {} };
var DoubleRightOutlined$4 = {};
var DoubleRightOutlined$3 = {};
Object.defineProperty(DoubleRightOutlined$3, "__esModule", { value: true });
var DoubleRightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, "name": "double-right", "theme": "outlined" };
DoubleRightOutlined$3.default = DoubleRightOutlined$2;
var _interopRequireWildcard = interopRequireWildcard.exports;
var _interopRequireDefault = interopRequireDefault.exports;
Object.defineProperty(DoubleRightOutlined$4, "__esModule", {
  value: true
});
DoubleRightOutlined$4.default = void 0;
var _objectSpread2 = _interopRequireDefault(objectSpread2.exports);
var React = _interopRequireWildcard(require$$3);
var _DoubleRightOutlined = _interopRequireDefault(DoubleRightOutlined$3);
var _AntdIcon = _interopRequireDefault(AntdIcon);
var DoubleRightOutlined$1 = function DoubleRightOutlined(props, ref) {
  return /* @__PURE__ */ React.createElement(_AntdIcon.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    ref,
    icon: _DoubleRightOutlined.default
  }));
};
DoubleRightOutlined$1.displayName = "DoubleRightOutlined";
var _default = /* @__PURE__ */ React.forwardRef(DoubleRightOutlined$1);
DoubleRightOutlined$4.default = _default;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _DoubleRightOutlined2 = _interopRequireDefault2(DoubleRightOutlined$4);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _DoubleRightOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(DoubleRightOutlined$5, DoubleRightOutlined$5.exports);
var DoubleRightOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(DoubleRightOutlined$5.exports);
const { Menu, Button } = window.antd;
const { SubMenu } = Menu;
function MenuLink(item) {
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: "nav-menu-link-item"
  }, /* @__PURE__ */ modules$1.createElement(Link, {
    to: item.path
  }, /* @__PURE__ */ modules$1.createElement("span", {
    style: { flex: 1 }
  }, item.name.replace(/-/g, " ").replace(/\//g, " - ").replace(/^[a-z] /, ""))), /* @__PURE__ */ modules$1.createElement(LinkCopy, {
    route: item.path
  }));
}
function RouterSwitch() {
  const { tree: menuData, routes } = useRouteMap() || {};
  const { npmLink, logo } = useComponentInfo() || {};
  const [showMenu, { toggle, setFalse }] = useBoolean(false);
  const { url: route } = useRouteMatch();
  useUpdateEffect$1(() => {
    setFalse();
  }, [route]);
  if (!routes || (routes == null ? void 0 : routes.length) <= 1) {
    return /* @__PURE__ */ modules$1.createElement(modules$1.Fragment, null);
  }
  const openKeys = menuData == null ? void 0 : menuData.filter(({ children }) => !!children).map(({ name }) => name);
  return /* @__PURE__ */ modules$1.createElement(modules$1.Fragment, null, /* @__PURE__ */ modules$1.createElement("div", {
    className: "route-switch-placeholder"
  }), /* @__PURE__ */ modules$1.createElement("div", {
    className: classNames("route-switch-scope", showMenu && "router-switch-open")
  }, /* @__PURE__ */ modules$1.createElement("a", {
    className: "logo",
    href: npmLink
  }, /* @__PURE__ */ modules$1.createElement("img", {
    src: logo || "https://img.alicdn.com/tfs/TB1Zs2ouQL0gK0jSZFAXXcA9pXa-1142-200.png",
    style: { width: 178, height: 31 }
  })), /* @__PURE__ */ modules$1.createElement(Button, {
    className: "responsive-btn",
    onClick: () => toggle()
  }, showMenu ? /* @__PURE__ */ modules$1.createElement(DoubleLeftOutlined2, null) : /* @__PURE__ */ modules$1.createElement(DoubleRightOutlined2, null)), /* @__PURE__ */ modules$1.createElement(Menu, {
    mode: "inline",
    className: "router-switch",
    defaultSelectedKeys: [route],
    defaultOpenKeys: openKeys
  }, menuData && menuData.map((item) => {
    var _a;
    if (item.path) {
      return /* @__PURE__ */ modules$1.createElement(Menu.Item, {
        className: "capitalize nav-item-link",
        key: item.path
      }, /* @__PURE__ */ modules$1.createElement(MenuLink, __spreadValues({}, item)));
    }
    return /* @__PURE__ */ modules$1.createElement(SubMenu, {
      title: item.name,
      className: "capitalize",
      key: item.name
    }, (_a = item.children) == null ? void 0 : _a.map((item2) => /* @__PURE__ */ modules$1.createElement(Menu.Item, {
      className: "nav-item-link",
      key: item2.path
    }, /* @__PURE__ */ modules$1.createElement(MenuLink, __spreadValues({}, item2)))));
  }))));
}
_default$c();
function App() {
  const { routes } = useRouteMap() || {};
  if (!routes) {
    return null;
  }
  return /* @__PURE__ */ createElement$1(Switch, null, routes.map((route) => {
    return /* @__PURE__ */ createElement$1(Route, {
      path: route
    }, /* @__PURE__ */ createElement$1("div", {
      style: { display: "flex" },
      className: "code-box-demo"
    }, /* @__PURE__ */ createElement$1(RouterSwitch, null), /* @__PURE__ */ createElement$1(ReadmePane, {
      key: `${route}_readme_pane`
    })));
  }), /* @__PURE__ */ createElement$1(Redirect, {
    to: routes[0]
  }));
}
modules.render(/* @__PURE__ */ createElement$1(HashRouter, null, /* @__PURE__ */ createElement$1(App, null)), document.querySelector("#component-root"));
export { App };
