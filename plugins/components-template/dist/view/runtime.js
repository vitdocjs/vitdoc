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
const createElement = modules$1["createElement"];
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
  createElement,
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
var lib = {};
Object.defineProperty(lib, "__esModule", {
  value: true
});
lib.makeXMLhttp = makeXMLhttp;
lib.getMockPath = getMockPath;
var _default$6 = lib.default = mtopHook;
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
        var type = "";
        try {
          type = _typeof$1(xhr[attr]);
        } catch (e2) {
        }
        if (type === "function") {
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
  }, "Props"), /* @__PURE__ */ modules$1.createElement(Table, {
    dataSource: dateSource
  }, /* @__PURE__ */ modules$1.createElement(Table.Column, {
    dataIndex: "name",
    title: "property"
  }), /* @__PURE__ */ modules$1.createElement(Table.Column, {
    dataIndex: ["type", "name"],
    title: "propType"
  }), /* @__PURE__ */ modules$1.createElement(Table.Column, {
    dataIndex: ["defaultValue", "value"],
    title: "default"
  }), /* @__PURE__ */ modules$1.createElement(Table.Column, {
    dataIndex: "description",
    title: "description"
  })));
}
function isObject$6(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$6;
var isObject$5 = isObject_1;
var objectCreate = Object.create;
var baseCreate$2 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$5(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$2;
function baseLodash$3() {
}
var _baseLodash = baseLodash$3;
var baseCreate$1 = _baseCreate, baseLodash$2 = _baseLodash;
function LodashWrapper$3(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = void 0;
}
LodashWrapper$3.prototype = baseCreate$1(baseLodash$2.prototype);
LodashWrapper$3.prototype.constructor = LodashWrapper$3;
var _LodashWrapper = LodashWrapper$3;
function arrayPush$3(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var freeGlobal$1 = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$6 = root$7.Symbol;
var _Symbol = Symbol$6;
var Symbol$5 = _Symbol;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : void 0;
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
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$4 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObjectLike$6(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$6;
var baseGetTag$4 = _baseGetTag, isObjectLike$5 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$5(value) && baseGetTag$4(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$4 = isObjectLike_1;
var objectProto$d = Object.prototype;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$d.propertyIsEnumerable;
var isArguments$3 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$4(value) && hasOwnProperty$b.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$3;
var isArray$c = Array.isArray;
var isArray_1 = isArray$c;
var Symbol$3 = _Symbol, isArguments$2 = isArguments_1, isArray$b = isArray_1;
var spreadableSymbol = Symbol$3 ? Symbol$3.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray$b(value) || isArguments$2(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush$2 = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$2(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform2) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform2(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
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
var funcProto = Function.prototype, objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$3(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$2(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$2;
var baseIsNative = _baseIsNative, getValue$1 = _getValue;
function getNative$7(object, key) {
  var value = getValue$1(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var defineProperty$3 = function() {
  try {
    var func = getNative$6(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var _defineProperty = defineProperty$3;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
var constant = constant_1, defineProperty$2 = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty$2 ? identity$1 : function(func, string) {
  return defineProperty$2(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$1(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$1;
var getNative$5 = _getNative, root$5 = _root;
var WeakMap$3 = getNative$5(root$5, "WeakMap");
var _WeakMap = WeakMap$3;
var WeakMap$2 = _WeakMap;
var metaMap$1 = WeakMap$2 && new WeakMap$2();
var _metaMap = metaMap$1;
function noop$2() {
}
var noop_1 = noop$2;
var metaMap = _metaMap, noop$1 = noop_1;
var getData$2 = !metaMap ? noop$1 : function(func) {
  return metaMap.get(func);
};
var _getData = getData$2;
var realNames$1 = {};
var _realNames = realNames$1;
var realNames = _realNames;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function getFuncName$2(func) {
  var result = func.name + "", array = realNames[result], length = hasOwnProperty$9.call(realNames, result) ? array.length : 0;
  while (length--) {
    var data = array[length], otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}
var _getFuncName = getFuncName$2;
var baseCreate = _baseCreate, baseLodash$1 = _baseLodash;
var MAX_ARRAY_LENGTH = 4294967295;
function LazyWrapper$3(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}
LazyWrapper$3.prototype = baseCreate(baseLodash$1.prototype);
LazyWrapper$3.prototype.constructor = LazyWrapper$3;
var _LazyWrapper = LazyWrapper$3;
function copyArray$1(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$1;
var LazyWrapper$2 = _LazyWrapper, LodashWrapper$2 = _LodashWrapper, copyArray = _copyArray;
function wrapperClone$1(wrapper) {
  if (wrapper instanceof LazyWrapper$2) {
    return wrapper.clone();
  }
  var result = new LodashWrapper$2(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}
var _wrapperClone = wrapperClone$1;
var LazyWrapper$1 = _LazyWrapper, LodashWrapper$1 = _LodashWrapper, baseLodash = _baseLodash, isArray$a = isArray_1, isObjectLike$3 = isObjectLike_1, wrapperClone = _wrapperClone;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function lodash$1(value) {
  if (isObjectLike$3(value) && !isArray$a(value) && !(value instanceof LazyWrapper$1)) {
    if (value instanceof LodashWrapper$1) {
      return value;
    }
    if (hasOwnProperty$8.call(value, "__wrapped__")) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper$1(value);
}
lodash$1.prototype = baseLodash.prototype;
lodash$1.prototype.constructor = lodash$1;
var wrapperLodash = lodash$1;
var LazyWrapper = _LazyWrapper, getData$1 = _getData, getFuncName$1 = _getFuncName, lodash = wrapperLodash;
function isLaziable$1(func) {
  var funcName = getFuncName$1(func), other = lodash[funcName];
  if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData$1(other);
  return !!data && func === data[0];
}
var _isLaziable = isLaziable$1;
var LodashWrapper = _LodashWrapper, flatRest = _flatRest, getData = _getData, getFuncName = _getFuncName, isArray$9 = isArray_1, isLaziable = _isLaziable;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var WRAP_CURRY_FLAG = 8, WRAP_PARTIAL_FLAG = 32, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256;
function createFlow$1(fromRight) {
  return flatRest(function(funcs) {
    var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
    if (fromRight) {
      funcs.reverse();
    }
    while (index2--) {
      var func = funcs[index2];
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      if (prereq && !wrapper && getFuncName(func) == "wrapper") {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index2 = wrapper ? index2 : length;
    while (++index2 < length) {
      func = funcs[index2];
      var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
      if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments, value = args[0];
      if (wrapper && args.length == 1 && isArray$9(value)) {
        return wrapper.plant(value).value();
      }
      var index3 = 0, result = length ? funcs[index3].apply(this, args) : value;
      while (++index3 < length) {
        result = funcs[index3].call(this, result);
      }
      return result;
    };
  });
}
var _createFlow = createFlow$1;
var createFlow = _createFlow;
var flow = createFlow();
var flow_1 = flow;
const GROUP_COMPOSITE = ["composite", "group"];
let VisionUiHelper = {};
try {
  VisionUiHelper = window.VisualEngineUtils;
} catch (e2) {
}
function translateByUIType(setter, floor) {
  const _a = setter, { uiType, configure = [] } = _a, restProps = __objRest(_a, ["uiType", "configure"]);
  let Setter = VisionUiHelper[uiType];
  if (floor === 1 && VisionUiHelper.DadaSetter && VisionUiHelper.DadaSetter[uiType]) {
    Setter = VisionUiHelper.DadaSetter[uiType];
  }
  return Setter ? modules$1.createElement(Setter, __spreadValues({
    configure: configure.map(getSetter)
  }, restProps)) : null;
}
function getComponent(setter, floor) {
  if (typeof setter === "string") {
    let Setter = VisionUiHelper[setter];
    if (floor === 1 && VisionUiHelper.DadaSetter && VisionUiHelper.DadaSetter[setter]) {
      Setter = VisionUiHelper.DadaSetter[setter];
    }
    return Setter ? modules$1.createElement(Setter) : null;
  } else if (typeof setter === "object" && "uiType" in setter) {
    return translateByUIType(setter, floor);
  }
  return setter;
}
function getDefaultEvents(configure) {
  const { name } = configure;
  if (name === "events") {
    return Object.assign({
      name: "events",
      title: "Action Set",
      tip: {
        url: "https://yuque.antfin-inc.com/globalfe/intl-dada/actions",
        content: "Click ? view how to set actions for component"
      },
      display: "accordion",
      initialValue: []
    }, configure);
  }
  return configure;
}
function getSetter(configure) {
  const { setter, items, type, floor } = configure;
  if (setter) {
    configure.setter = getComponent(configure.setter, floor);
  }
  if (GROUP_COMPOSITE.indexOf(type) > 0 && Array.isArray(items)) {
    configure.items = items.map(flow_1(getDefaultEvents, getSetter));
  }
  return configure;
}
function transform(prototypeSchema) {
  let _a = prototypeSchema, { configure = [] } = _a, restProps = __objRest(_a, ["configure"]);
  const setFloor = (configure2) => {
    return __spreadValues({
      floor: 1
    }, configure2);
  };
  configure = configure.map(flow_1(setFloor, getDefaultEvents, getSetter));
  return __spreadProps(__spreadValues({}, restProps), {
    configure
  });
}
var baseGetTag$2 = _baseGetTag, isObjectLike$2 = isObjectLike_1;
var symbolTag$1 = "[object Symbol]";
function isSymbol$3(value) {
  return typeof value == "symbol" || isObjectLike$2(value) && baseGetTag$2(value) == symbolTag$1;
}
var isSymbol_1 = isSymbol$3;
var isArray$8 = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$8(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
var getNative$4 = _getNative;
var nativeCreate$4 = getNative$4(Object, "create");
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
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$6.call(data, key);
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
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
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
var getNative$3 = _getNative, root$4 = _root;
var Map$4 = getNative$3(root$4, "Map");
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
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
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
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
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
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$2(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap$2;
var Symbol$2 = _Symbol, arrayMap$1 = _arrayMap, isArray$7 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$7(value)) {
    return arrayMap$1(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$6 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$4(value, object) {
  if (isArray$6(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$4;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$5(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$5;
var castPath$3 = _castPath, toKey$4 = _toKey;
function baseGet$3(object, path) {
  path = castPath$3(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey$4(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$3;
var baseGet$2 = _baseGet;
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$2(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
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
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$1;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$3;
var assignValue = _assignValue, castPath$2 = _castPath, isIndex$2 = _isIndex, isObject$2 = isObject_1, toKey$3 = _toKey;
function baseSet$2(object, path, value, customizer) {
  if (!isObject$2(object)) {
    return object;
  }
  path = castPath$2(path, object);
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
var _baseSet = baseSet$2;
var baseSet$1 = _baseSet;
function set(object, path, value) {
  return object == null ? object : baseSet$1(object, path, value);
}
var set_1 = set;
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
var root$3 = _root;
var Uint8Array$1 = root$3.Uint8Array;
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
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
        return false;
      }
      return true;
    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      return eq(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
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
var arrayPush$1 = _arrayPush, isArray$5 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$5(object) ? result : arrayPush$1(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
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
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$6 = Object.prototype;
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$2 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$2;
function baseTimes$1(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var isBuffer$2 = { exports: {} };
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
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var baseGetTag$1 = _baseGetTag, isLength$2 = isLength_1, isObjectLike$1 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
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
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isBuffer$1 = isBuffer$2.exports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$4(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$4 = Object.prototype;
function isPrototype$2(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
var _isPrototype = isPrototype$2;
function overArg$2(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$1 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$1(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$3(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$3;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$2 = isArrayLike_1;
function keys$3(object) {
  return isArrayLike$2(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$3;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols$1 = _getSymbols, keys$2 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$2, getSymbols$1);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
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
var getNative$2 = _getNative, root$2 = _root;
var DataView$1 = getNative$2(root$2, "DataView");
var _DataView = DataView$1;
var getNative$1 = _getNative, root$1 = _root;
var Promise$2 = getNative$1(root$1, "Promise");
var _Promise = Promise$2;
var getNative = _getNative, root = _root;
var Set$1 = getNative(root, "Set");
var _Set = Set$1;
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
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$3 = isArray_1, isBuffer = isBuffer$2.exports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$3(object), othIsArr = isArray$3(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
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
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
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
var castPath$1 = _castPath, isArguments = isArguments_1, isArray$2 = isArray_1, isIndex = _isIndex, isLength = isLength_1, toKey$2 = _toKey;
function hasPath$1(object, path, hasFunc) {
  path = castPath$1(path, object);
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
  return !!length && isLength(length) && isIndex(key, length) && (isArray$2(object) || isArguments(object));
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
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet$1 = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$1(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray$1 = isArray_1, property = property_1;
function baseIteratee$2(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$2;
var baseGet = _baseGet, baseSet = _baseSet, castPath = _castPath;
function basePickBy$1(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
var overArg = _overArg;
var getPrototype$1 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$1;
var arrayPush = _arrayPush, getPrototype = _getPrototype, getSymbols = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$1 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject = isObject_1, isPrototype = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$1 = isArrayLike_1;
function keysIn$1(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var arrayMap = _arrayMap, baseIteratee$1 = _baseIteratee, basePickBy = _basePickBy, getAllKeysIn = _getAllKeysIn;
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee$1(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
var pickBy_1 = pickBy;
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
const Composite_Types = ["any", "any[]", "string[]", "number[]", "object", "object[]"];
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
const REGEXP_ISFunction = /^\(.*\)\s*=>\s*.+$/;
const REGEXP_ISArray = /{.+}\[]$/;
class VisionSchemaTransfer {
  transformProps(propType) {
    const defaultConfig = this.defaultVisionConfig;
    const { configure: defaultConfigure = [] } = defaultConfig;
    const { name, description } = propType;
    const defaultValue = VisionSchemaTransfer.getDefaultPropByTypes(propType);
    const type = get_1(propType, "type.name");
    const tags = Object.entries(propType.tags || {}).reduce((previousValue, [key, value]) => set_1(previousValue, key, strToObj(value)), {});
    if (tags.vision === false) {
      return null;
    }
    const visionJsonConfig = defaultConfigure.find((configure) => configure.name === name);
    const visionDocsConfig = get_1(tags, "vision");
    return __spreadValues(__spreadValues({
      name,
      tip: description,
      initialValue: defaultValue,
      defaultValue,
      setter: VisionSchemaTransfer.getSetterByTSType(type)
    }, visionJsonConfig), visionDocsConfig);
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
    return flow_1(this.getNumberSetterByTypes.bind(this), this.getBoolSetterByTypes.bind(this), this.getTextSetterByTypes.bind(this), this.getActionSetterByTypes.bind(this), this.getListSetterByTypes.bind(this), this.getChoiceSetterByTypes.bind(this), this.getSelectSetterByTypes.bind(this), (type) => type === typeStr ? "JsonSetter" : type)(typeStr);
  }
  static getBoolSetterByTypes(types) {
    return isBoolTypes(types) ? "BoolSetter" : types;
  }
  static getNumberSetterByTypes(types) {
    return isNumberTypes(types) ? "NumberSetter" : types;
  }
  static getTextSetterByTypes(types) {
    return isTextTypes(types) ? "TextSetter" : types;
  }
  static getActionSetterByTypes(types) {
    return REGEXP_ISFunction.test(types) ? "ActionSetter" : types;
  }
  static getListSetterByTypes(typeStr) {
    if (REGEXP_ISArray.test(typeStr)) {
      const typeItemStr = typeStr.replace(/\[]$/, "").trim();
      const resultType = this.getObjectTypes(typeItemStr);
      const configure = resultType instanceof Object ? Object.entries(resultType).map(([key, item]) => ({
        name: key,
        setter: this.getSetterByTSType(item)
      })) : void 0;
      return {
        uiType: "ListSetter",
        checkField: null,
        configure
      };
    }
    return typeStr;
  }
  static getChoiceSetterByTypes(typeStr) {
    if (REGEXP_ISMultipleTypes.test(typeStr) && !isNotEnumTypes(typeStr) && filterQuotaMarkAndUndefined(typeStr).length <= 3) {
      return {
        uiType: "ChoiceSetter",
        options: filterQuotaMarkAndUndefined(typeStr)
      };
    }
    return typeStr;
  }
  static getSelectSetterByTypes(typeStr) {
    if (REGEXP_ISMultipleTypes.test(typeStr) && !isNotEnumTypes(typeStr)) {
      return {
        uiType: "SelectSetter",
        options: typeStr.split("|").map((val) => val.replace(/"/g, "").trim()).filter((val) => val !== "undefined").map((val) => {
          return {
            text: val,
            value: val
          };
        })
      };
    }
    return typeStr;
  }
  static getDefaultPropByTypes(propType) {
    let defaultValue = get_1(propType, "defaultValue.value");
    try {
      if (!defaultValue) {
        return defaultValue;
      }
      defaultValue = new Function("global", `return ("" + ${defaultValue}) in global ? (""+${defaultValue}) : ${defaultValue}`)(global);
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
  getDefaultProps() {
    const { props } = this.types;
    return pickBy_1(Object.values(props).reduce((prev, propType) => {
      return Object.assign(prev, {
        [propType.name]: VisionSchemaTransfer.getDefaultPropByTypes(propType)
      });
    }, {}), (val) => val !== void 0);
  }
  mergeActionSetter(actionConfigs) {
    const events = [];
    actionConfigs.forEach((config) => {
      const { name, tip } = config;
      name.indexOf("on") === 0 && events.push({
        name,
        title: tip || name
      });
    });
    if (events.length > 0) {
      return {
        name: "actions",
        setter: {
          uiType: "ActionSetter",
          events
        }
      };
    }
    return void 0;
  }
  transformTypeSchema() {
    const defaultVisionConfig = this.defaultVisionConfig;
    const { displayName, props = {}, tags = {} } = this.types;
    const isVisionContainer = tags["vision.isContainer"];
    const configure = Object.values(props).filter((prop) => !this.blockProps.includes(get_1(prop, "name", ""))).map(this.transformProps.bind(this)).filter(Boolean);
    const actionConfig = this.mergeActionSetter(configure.filter((conf) => conf.setter === "ActionSetter"));
    const restConfigs = configure.filter((config) => config.setter !== "ActionSetter" && config);
    let isContainer;
    if (isVisionContainer !== void 0) {
      isContainer = JSON.parse(isVisionContainer);
    } else {
      isContainer = Object.keys(props).includes("elements") || false;
    }
    return Object.assign({}, defaultVisionConfig, {
      componentName: displayName,
      isContainer,
      configure: actionConfig ? [...restConfigs, actionConfig] : restConfigs
    });
  }
}
function buildVisionFromTypes(typeDesc, options) {
  return new VisionSchemaTransfer(typeDesc, options).transformTypeSchema();
}
var VisionTransfer = {
  transform,
  buildVisionFromTypes
};
async function getVisionConfig(componentTypes) {
  const data = VisionTransfer.buildVisionFromTypes(componentTypes);
  return data;
}
var DoubleLeftOutlined$5 = { exports: {} };
var DoubleLeftOutlined$4 = {};
var interopRequireDefault = { exports: {} };
(function(module) {
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  module.exports = _interopRequireDefault2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(interopRequireDefault);
var interopRequireWildcard = { exports: {} };
var _typeof = { exports: {} };
(function(module) {
  function _typeof3(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof3 = function _typeof4(obj2) {
        return typeof obj2;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof3 = function _typeof4(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
    return _typeof3(obj);
  }
  module.exports = _typeof3;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(_typeof);
(function(module) {
  var _typeof$12 = _typeof.exports["default"];
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache2 = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache2;
    };
    return cache2;
  }
  function _interopRequireWildcard2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof$12(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache2 = _getRequireWildcardCache();
    if (cache2 && cache2.has(obj)) {
      return cache2.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
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
  module.exports = _interopRequireWildcard2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(interopRequireWildcard);
var require$$2 = /* @__PURE__ */ getAugmentedNamespace(react_1a37f6a0);
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
  module.exports = _arrayWithHoles2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(arrayWithHoles);
var iterableToArrayLimit = { exports: {} };
(function(module) {
  function _iterableToArrayLimit2(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
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
  module.exports = _iterableToArrayLimit2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
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
  module.exports = _arrayLikeToArray2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
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
  module.exports = _unsupportedIterableToArray2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(unsupportedIterableToArray);
var nonIterableRest = { exports: {} };
(function(module) {
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(nonIterableRest);
(function(module) {
  var arrayWithHoles$1 = arrayWithHoles.exports;
  var iterableToArrayLimit$1 = iterableToArrayLimit.exports;
  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
  var nonIterableRest$1 = nonIterableRest.exports;
  function _slicedToArray3(arr, i) {
    return arrayWithHoles$1(arr) || iterableToArrayLimit$1(arr, i) || unsupportedIterableToArray$1(arr, i) || nonIterableRest$1();
  }
  module.exports = _slicedToArray3;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(slicedToArray);
var defineProperty = { exports: {} };
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
  module.exports = _defineProperty3;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(defineProperty);
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
  module.exports = _objectWithoutPropertiesLoose2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
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
  module.exports = _objectWithoutProperties;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(objectWithoutProperties);
var _classnames_2_3_1_classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
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
              if (hasOwn.call(arg, key) && arg[key]) {
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
})(_classnames_2_3_1_classnames);
var classNames = _classnames_2_3_1_classnames.exports;
var Context = {};
Object.defineProperty(Context, "__esModule", {
  value: true
});
Context.default = void 0;
var _react$1 = require$$2;
var IconContext = /* @__PURE__ */ (0, _react$1.createContext)({});
var _default$5 = IconContext;
Context.default = _default$5;
var IconBase$1 = {};
var objectSpread2 = { exports: {} };
(function(module) {
  var defineProperty$12 = defineProperty.exports;
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread22(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          defineProperty$12(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  module.exports = _objectSpread22;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(objectSpread2);
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
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l2);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
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
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
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
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
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
function getValue(hsv, i, light) {
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
function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
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
function warning$1(valid, message) {
}
function note(valid, message) {
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$1, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
var _default$4 = warningOnce;
warning$2.default = _default$4;
var dynamicCSS = {};
var canUseDom$1 = {};
Object.defineProperty(canUseDom$1, "__esModule", {
  value: true
});
canUseDom$1.default = canUseDom;
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var _interopRequireDefault$6 = interopRequireDefault.exports;
Object.defineProperty(dynamicCSS, "__esModule", {
  value: true
});
dynamicCSS.injectCSS = injectCSS;
dynamicCSS.updateCSS = updateCSS;
var _canUseDom = _interopRequireDefault$6(canUseDom$1);
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
  if (option.prepend && firstChild) {
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
var _interopRequireWildcard$3 = interopRequireWildcard.exports;
var _interopRequireDefault$5 = interopRequireDefault.exports;
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
var _objectSpread2$1 = _interopRequireDefault$5(objectSpread2.exports);
var _typeof2 = _interopRequireDefault$5(_typeof.exports);
var _colors = require$$4;
var _react = _interopRequireWildcard$3(require$$2);
var _warning = _interopRequireDefault$5(warning$2);
var _dynamicCSS = dynamicCSS;
var _Context$1 = _interopRequireDefault$5(Context);
function warning(valid, message) {
  (0, _warning.default)(valid, "[@ant-design/icons] ".concat(message));
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
    return /* @__PURE__ */ _react.default.createElement(node.tag, (0, _objectSpread2$1.default)({
      key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index2) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
    }));
  }
  return /* @__PURE__ */ _react.default.createElement(node.tag, (0, _objectSpread2$1.default)((0, _objectSpread2$1.default)({
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
var _interopRequireDefault$4 = interopRequireDefault.exports;
Object.defineProperty(IconBase$1, "__esModule", {
  value: true
});
IconBase$1.default = void 0;
var _objectWithoutProperties2$1 = _interopRequireDefault$4(objectWithoutProperties.exports);
var _objectSpread2 = _interopRequireDefault$4(objectSpread2.exports);
var _utils$2 = utils;
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
  return (0, _objectSpread2.default)({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = (0, _objectWithoutProperties2$1.default)(props, ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]);
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
    target = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return (0, _utils$2.generate)(target.icon, "svg-".concat(target.name), (0, _objectSpread2.default)({
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
var _default$3 = IconBase;
IconBase$1.default = _default$3;
var twoTonePrimaryColor = {};
var _interopRequireDefault$3 = interopRequireDefault.exports;
Object.defineProperty(twoTonePrimaryColor, "__esModule", {
  value: true
});
twoTonePrimaryColor.setTwoToneColor = setTwoToneColor;
twoTonePrimaryColor.getTwoToneColor = getTwoToneColor;
var _slicedToArray2$1 = _interopRequireDefault$3(slicedToArray.exports);
var _IconBase$1 = _interopRequireDefault$3(IconBase$1);
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
var _interopRequireWildcard$2 = interopRequireWildcard.exports;
var _interopRequireDefault$2 = interopRequireDefault.exports;
Object.defineProperty(AntdIcon, "__esModule", {
  value: true
});
AntdIcon.default = void 0;
var _slicedToArray2 = _interopRequireDefault$2(slicedToArray.exports);
var _defineProperty2 = _interopRequireDefault$2(defineProperty.exports);
var _objectWithoutProperties2 = _interopRequireDefault$2(objectWithoutProperties.exports);
var React$2 = _interopRequireWildcard$2(require$$2);
var _classnames = _interopRequireDefault$2(_classnames_2_3_1_classnames.exports);
var _Context = _interopRequireDefault$2(Context);
var _IconBase = _interopRequireDefault$2(IconBase$1);
var _twoTonePrimaryColor = twoTonePrimaryColor;
var _utils = utils;
(0, _twoTonePrimaryColor.setTwoToneColor)("#1890ff");
var Icon = /* @__PURE__ */ React$2.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = (0, _objectWithoutProperties2.default)(props, ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]);
  var _React$useContext = React$2.useContext(_Context.default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre;
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
  return /* @__PURE__ */ React$2.createElement("span", Object.assign({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ React$2.createElement(_IconBase.default, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
var _default$2 = Icon;
AntdIcon.default = _default$2;
var _interopRequireDefault$1 = interopRequireDefault.exports;
var _interopRequireWildcard$1 = interopRequireWildcard.exports;
Object.defineProperty(DoubleLeftOutlined$4, "__esModule", {
  value: true
});
DoubleLeftOutlined$4.default = void 0;
var React$1 = _interopRequireWildcard$1(require$$2);
var _DoubleLeftOutlined = _interopRequireDefault$1(DoubleLeftOutlined$3);
var _AntdIcon$1 = _interopRequireDefault$1(AntdIcon);
var DoubleLeftOutlined$1 = function DoubleLeftOutlined(props, ref) {
  return /* @__PURE__ */ React$1.createElement(_AntdIcon$1.default, Object.assign({}, props, {
    ref,
    icon: _DoubleLeftOutlined.default
  }));
};
DoubleLeftOutlined$1.displayName = "DoubleLeftOutlined";
var _default$1 = /* @__PURE__ */ React$1.forwardRef(DoubleLeftOutlined$1);
DoubleLeftOutlined$4.default = _default$1;
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
var _interopRequireDefault = interopRequireDefault.exports;
var _interopRequireWildcard = interopRequireWildcard.exports;
Object.defineProperty(CloseOutlined$4, "__esModule", {
  value: true
});
CloseOutlined$4.default = void 0;
var React = _interopRequireWildcard(require$$2);
var _CloseOutlined = _interopRequireDefault(CloseOutlined$3);
var _AntdIcon = _interopRequireDefault(AntdIcon);
var CloseOutlined$1 = function CloseOutlined(props, ref) {
  return /* @__PURE__ */ React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref,
    icon: _CloseOutlined.default
  }));
};
CloseOutlined$1.displayName = "CloseOutlined";
var _default = /* @__PURE__ */ React.forwardRef(CloseOutlined$1);
CloseOutlined$4.default = _default;
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
var index$5 = ".vision-property-container {\n  position: relative;\n  z-index: 999;\n}\n@media screen and (max-width: 750px) {\n  .vision-property-container {\n    position: fixed;\n    z-index: 3;\n    height: 100vh;\n    right: 0;\n    top: 0;\n  }\n}\n.vision-property-container .ant-drawer-header {\n  border-bottom: 0;\n}\n.vision-property-container .ant-drawer-title {\n  display: flex;\n  align-items: center;\n}\n.vision-property-container .ant-drawer-wrapper-body {\n  margin-left: 15px;\n  height: 100%;\n  width: 300px;\n}\n.vision-property-container .ant-drawer-wrapper-body > div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.vision-property-container .ant-drawer-wrapper-body .ant-drawer-body {\n  position: relative;\n  flex: 1;\n}\n.vision-property-container .vision-title-icon {\n  width: 1.2em;\n  margin-right: 0.3em;\n}\n.vision-property-container .icon-vision-property-show {\n  position: fixed;\n  top: 20px;\n  right: 30px;\n}";
const PANE_VISIBLE = "pane_visible";
const { Bundle, Node, ui } = window.VisualEngine;
const { Button } = window.antd;
class VisionPane extends modules$1.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      propertyDrawerShow: false,
      prototypeOptions: null
    };
    this.setPropertyDrawerShow = (visible) => {
      localStorage.setItem(PANE_VISIBLE, `${+visible}`);
      this.setState({ propertyDrawerShow: visible });
    };
    const localStoryValue = +localStorage.getItem(PANE_VISIBLE);
    this.state.propertyDrawerShow = localStoryValue !== void 0 ? !!localStoryValue : true;
    this.init();
  }
  init() {
    const props = this.props;
    getVisionConfig(props.properties).then((prototypeOptions) => {
      this.prototype = Bundle.createPrototype(transform(prototypeOptions));
      this.visionNode = new Node(null, this.prototype);
      const props2 = this.visionNode.getProps();
      this.props.defaultProps && Object.entries(this.props.defaultProps).forEach(([key, value]) => props2.setPropValue(key, value));
      const propItems = props2.getRealItems();
      this.setState({ prototypeOptions });
      const changedData = {};
      this.disposeArr = propItems.map((item) => item.onValueChange(() => {
        changedData[item.getKey()] = item.getValue();
        this.props.onPropsChange && this.props.onPropsChange(Object.assign({}, changedData));
      }));
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.properties !== this.props.properties) {
      this.disposeArr && this.disposeArr.forEach((dispose) => dispose());
      this.init();
    }
  }
  componentWillUnmount() {
    this.disposeArr && this.disposeArr.forEach((dispose) => dispose());
  }
  render() {
    const { propertyDrawerShow, prototypeOptions } = this.state;
    const { properties } = this.props;
    if (!properties || !prototypeOptions) {
      return null;
    }
    const node = this.visionNode;
    const props = node.getProps();
    const stage = props.stage;
    const icon = node.getIcon();
    const title = prototypeOptions.title;
    const { Stage } = ui.Field;
    return stage ? /* @__PURE__ */ modules$1.createElement("div", {
      className: "vision-property-container"
    }, propertyDrawerShow && Object.keys(prototypeOptions) ? /* @__PURE__ */ modules$1.createElement("div", {
      className: "ant-drawer-wrapper-body "
    }, /* @__PURE__ */ modules$1.createElement("div", {
      className: "component-block"
    }, /* @__PURE__ */ modules$1.createElement("div", {
      className: "ant-drawer-header"
    }, /* @__PURE__ */ modules$1.createElement("div", {
      className: "ant-drawer-title"
    }, /* @__PURE__ */ modules$1.createElement("img", {
      className: "vision-title-icon",
      src: icon,
      alt: ""
    }), title || "Vision \u5C5E\u6027\u9762\u677F"), /* @__PURE__ */ modules$1.createElement("button", {
      "aria-label": "Close",
      className: "ant-drawer-close",
      onClick: () => this.setPropertyDrawerShow(false)
    }, /* @__PURE__ */ modules$1.createElement(CloseOutlined2, null))), /* @__PURE__ */ modules$1.createElement("div", {
      className: "ant-drawer-body"
    }, /* @__PURE__ */ modules$1.createElement(Stage, {
      stage
    })))) : /* @__PURE__ */ modules$1.createElement("div", {
      className: "icon-vision-property-show",
      onClick: () => this.setPropertyDrawerShow(true)
    }, /* @__PURE__ */ modules$1.createElement(Button, null, /* @__PURE__ */ modules$1.createElement(DoubleLeftOutlined2, null), "Vision \u9762\u677F"))) : null;
  }
}
var index$4 = "#public-component-show-container {\n  display: flex;\n  position: relative;\n  min-height: 100vh;\n  overflow: auto;\n  width: 100%;\n  flex: 1;\n  background: #f2f3f7;\n  padding: 20px;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n#public-component-show-container .link-title {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n}\n#public-component-show-container .component-main {\n  position: relative;\n  display: flex;\n}\n#public-component-show-container .component-part {\n  flex: 1;\n  overflow: auto;\n}\n#public-component-show-container .component-name {\n  padding: 0;\n  border: 0;\n  margin: 0;\n  font-size: 3.5em;\n  font-weight: 800;\n  outline: 0;\n  vertical-align: baseline;\n  line-height: 1.2;\n}\n#public-component-show-container .component-sub-title {\n  font-size: 1em;\n  font-weight: 600;\n  vertical-align: baseline;\n  margin-bottom: 8px;\n  display: block;\n  color: #6f6f6f;\n}\n#public-component-show-container .component-sub-title > span {\n  margin-right: 1em;\n}\n#public-component-show-container .component-block {\n  background: #fff;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 1px #ccc solid;\n  border-bottom: unset;\n  border-top: unset;\n}\n#public-component-show-container .component-block:first-child {\n  border-radius: 7px 7px 0 0;\n  border-top: 1px #ccc solid;\n}\n#public-component-show-container .component-block:last-child {\n  border-radius: 0 0 7px 7px;\n  border-bottom: 1px #ccc solid;\n}\n#public-component-show-container .component-block:first-child:last-child {\n  border-radius: 7px;\n  border: 1px #ccc solid;\n}\n#public-component-show-container .component-container {\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#public-component-show-container .component-description {\n  border-top: 1px solid #eee;\n  font-size: 14px;\n  padding: 20px;\n}\n#public-component-show-container .component-description > .block-title {\n  font-size: 1.3em;\n  display: block;\n  line-height: 2;\n}\n#public-component-show-container .component-description > code {\n  border: 1px solid #e7e9ed;\n  background-color: #f8fafc;\n  display: block;\n  padding: 5px 10px;\n  margin: 5px 0;\n  word-break: break-all;\n  word-wrap: break-word;\n  border-radius: 2px;\n  color: #5b6169;\n  font-size: 13px;\n  line-height: 1.6em;\n}\n#public-component-show-container .ant-tabs-bottom .ant-tabs-bottom-bar {\n  margin-top: 0;\n}\n#public-component-show-container .ant-tabs-nav .ant-tabs-tab {\n  margin: 0;\n}\n#public-component-show-container .ant-tabs .ant-tabs-small-bar .ant-tabs-tab {\n  padding: 8px 16px;\n}\n@media screen and (max-width: 750px) {\n  #public-component-show-container {\n    padding: 20px 0;\n  }\n  #public-component-show-container .component-block {\n    border-radius: 0 !important;\n  }\n}";
var index$3 = ".component-block > .ant-affix {\n  background: #fff;\n  border-radius: 0 0 6px 6px;\n  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.1);\n  border: 1px solid #eee;\n}";
const { Result } = window["antd"];
function ComponentArea(props) {
  const { componentProps, onSetDefaultProps, data: Components } = props;
  const componentRef = useRef();
  const invoked = useRef(false);
  const newComp = useRef(new Map());
  const wrapProps = useCallback((Component2, { React: OutReact }) => {
    var _a;
    if (((_a = newComp.current.get(Component2)) == null ? void 0 : _a.visionProps) === componentProps) {
      return newComp.current.get(Component2);
    }
    const outputComp = (props2) => {
      if (!invoked.current) {
        onSetDefaultProps && onSetDefaultProps(props2);
        invoked.current = true;
      }
      const finalProps = Object.assign({}, props2, componentProps);
      return OutReact.createElement(Component2, finalProps);
    };
    outputComp.visionProps = componentProps;
    newComp.current.set(Component2, outputComp);
    return outputComp;
  }, [componentProps]);
  useEffect(() => {
    window.$_ComponentWrap = wrapProps;
  }, [componentProps]);
  useEffect(() => {
    const renderer = Components == null ? void 0 : Components.renderer;
    window.mountNode = componentRef.current;
    renderer && renderer();
  }, [Components == null ? void 0 : Components.renderer, componentProps]);
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-block"
  }, (Components == null ? void 0 : Components.error) ? /* @__PURE__ */ modules$1.createElement(Result, {
    status: "warning",
    title: "Resource load failed",
    subTitle: /* @__PURE__ */ modules$1.createElement("span", {
      style: { whiteSpace: "pre-wrap", textAlign: "left" }
    }, Components == null ? void 0 : Components.error.message)
  }) : /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-container",
    id: "vite-component-container",
    ref: componentRef
  }));
}
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
var baseFor = _baseFor, keys = keys_1;
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
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
var arrayAggregator = _arrayAggregator, baseAggregator = _baseAggregator, baseIteratee = _baseIteratee, isArray = isArray_1;
function createAggregator$1(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
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
var _propTypes_15_7_2_propTypes = { exports: {} };
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
  _propTypes_15_7_2_propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = _propTypes_15_7_2_propTypes.exports;
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
function spliceOne(list, index2) {
  for (var i = index2, k2 = i + 1, n2 = list.length; k2 < n2; i += 1, k2 += 1) {
    list[i] = list[k2];
  }
  list.pop();
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
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  throw new Error(prefix + ": " + (message || ""));
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
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }
  var searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }
  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}
function createPath(location2) {
  var pathname = location2.pathname, search = location2.search, hash = location2.hash;
  var path = pathname || "/";
  if (search && search !== "?")
    path += search.charAt(0) === "?" ? search : "?" + search;
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
  var listeners = [];
  function appendListener(fn) {
    var isActive = true;
    function listener() {
      if (isActive)
        fn.apply(void 0, arguments);
    }
    listeners.push(listener);
    return function() {
      isActive = false;
      listeners = listeners.filter(function(item) {
        return item !== listener;
      });
    };
  }
  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    listeners.forEach(function(listener) {
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
function getConfirmation(message, callback) {
  callback(window.confirm(message));
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
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  function getDOMLocation(historyState) {
    var _ref = historyState || {}, key = _ref.key, state = _ref.state;
    var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var path = pathname + search + hash;
    if (basename)
      path = stripBasename$1(path, basename);
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
      transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
        if (ok) {
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
    return basename + createPath(location2);
  }
  function push(path, state) {
    var action = "PUSH";
    var location2 = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
      if (!ok)
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
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
      if (!ok)
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
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath2 = _HashPathCoders$hashT.encodePath, decodePath2 = _HashPathCoders$hashT.decodePath;
  function getDOMLocation() {
    var path2 = decodePath2(getHashPath());
    if (basename)
      path2 = stripBasename$1(path2, basename);
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
      transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
        if (ok) {
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
    return href + "#" + encodePath2(basename + createPath(location2));
  }
  function push(path2, state) {
    var action = "PUSH";
    var location2 = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
      if (!ok)
        return;
      var path3 = createPath(location2);
      var encodedPath2 = encodePath2(basename + path3);
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
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
      if (!ok)
        return;
      var path3 = createPath(location2);
      var encodedPath2 = encodePath2(basename + path3);
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
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
      if (!ok)
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
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
      if (!ok)
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
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
      if (ok) {
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
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = PropTypes.object.isRequired, _Provider$childContex);
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
  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = PropTypes.object, _Consumer$contextType);
  return {
    Provider,
    Consumer
  };
}
var index$2 = modules$1.createContext || createReactContext;
var _pathToRegexp_1_8_0_pathToRegexp = { exports: {} };
var _isarray_0_0_1_isarray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
};
var isarray = _isarray_0_0_1_isarray;
_pathToRegexp_1_8_0_pathToRegexp.exports = pathToRegexp;
_pathToRegexp_1_8_0_pathToRegexp.exports.parse = parse;
_pathToRegexp_1_8_0_pathToRegexp.exports.compile = compile;
_pathToRegexp_1_8_0_pathToRegexp.exports.tokensToFunction = tokensToFunction;
_pathToRegexp_1_8_0_pathToRegexp.exports.tokensToRegExp = tokensToRegExp;
var PATH_REGEXP = new RegExp([
  "(\\\\.)",
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse(str, options) {
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
  return tokensToFunction(parse(str, options), options);
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
  return tokensToRegExp(parse(path, options), keys2, options);
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
  _reactIs_16_13_1_reactIs.exports = reactIs_production_min;
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
var reactIs = _reactIs_16_13_1_reactIs.exports;
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
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var createNamedContext = function createNamedContext2(name) {
  var context2 = index$2();
  context2.displayName = name;
  return context2;
};
var historyContext = /* @__PURE__ */ createNamedContext("Router-History");
var createNamedContext$1 = function createNamedContext3(name) {
  var context2 = index$2();
  context2.displayName = name;
  return context2;
};
var context = /* @__PURE__ */ createNamedContext$1("Router");
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
    if (this.unlisten)
      this.unlisten();
  };
  _proto.render = function render() {
    return modules$1.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router2.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, modules$1.createElement(historyContext.Provider, {
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
    return modules$1.createElement(Router, {
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
  return modules$1.createElement(context.Consumer, null, function(context2) {
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
    return modules$1.createElement(Lifecycle, {
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
var Route = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Route2, _React$Component);
  function Route2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Route2.prototype;
  _proto.render = function render() {
    var _this = this;
    return modules$1.createElement(context.Consumer, null, function(context$1) {
      !context$1 ? invariant(false) : void 0;
      var location2 = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch : _this.props.path ? matchPath(location2.pathname, _this.props) : context$1.match;
      var props = _extends({}, context$1, {
        location: location2,
        match
      });
      var _this$props = _this.props, children = _this$props.children, component = _this$props.component, render2 = _this$props.render;
      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }
      return modules$1.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ? children(props) : children : component ? modules$1.createElement(component, props) : render2 ? render2(props) : null : typeof children === "function" ? children(props) : null);
    });
  };
  return Route2;
}(modules$1.Component);
function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function addBasename(basename, location2) {
  if (!basename)
    return location2;
  return _extends({}, location2, {
    pathname: addLeadingSlash(basename) + location2.pathname
  });
}
function stripBasename(basename, location2) {
  if (!basename)
    return location2;
  var base = addLeadingSlash(basename);
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
    var _this$props = this.props, _this$props$basename = _this$props.basename, basename = _this$props$basename === void 0 ? "" : _this$props$basename, _this$props$context = _this$props.context, context2 = _this$props$context === void 0 ? {} : _this$props$context;
    context2.action = action;
    context2.location = addBasename(basename, createLocation(location2));
    context2.url = createURL(context2.location);
  };
  _proto.render = function render() {
    var _this$props2 = this.props, _this$props2$basename = _this$props2.basename, basename = _this$props2$basename === void 0 ? "" : _this$props2$basename, _this$props2$context = _this$props2.context, context2 = _this$props2$context === void 0 ? {} : _this$props2$context, _this$props2$location = _this$props2.location, location2 = _this$props2$location === void 0 ? "/" : _this$props2$location, rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);
    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, createLocation(location2)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler(),
      goBack: staticHandler(),
      goForward: staticHandler(),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return modules$1.createElement(Router, _extends({}, rest, {
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
    return modules$1.createElement(context.Consumer, null, function(context2) {
      !context2 ? invariant(false) : void 0;
      var location2 = _this.props.location || context2.location;
      var element, match;
      modules$1.Children.forEach(_this.props.children, function(child) {
        if (match == null && modules$1.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location2.pathname, _extends({}, child.props, {
            path
          })) : context2.match;
        }
      });
      return match ? modules$1.cloneElement(element, {
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
    return modules$1.createElement(Router, {
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
    return modules$1.createElement(Router, {
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
  return modules$1.createElement("a", props);
});
var Link = forwardRef(function(_ref2, forwardedRef) {
  var _ref2$component = _ref2.component, component = _ref2$component === void 0 ? LinkAnchor : _ref2$component, replace = _ref2.replace, to = _ref2.to, innerRef = _ref2.innerRef, rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);
  return modules$1.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history;
    var location2 = normalizeToLocation(resolveToLocation(to, context2.location), context2.location);
    var href = location2 ? history.createHref(location2) : "";
    var props = _extends({}, rest, {
      href,
      navigate: function navigate() {
        var location3 = resolveToLocation(to, context2.location);
        var method = replace ? history.replace : history.push;
        method(location3);
      }
    });
    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return modules$1.createElement(component, props);
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
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }
  return classnames.filter(function(i) {
    return i;
  }).join(" ");
}
forwardRef$1(function(_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"], ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent, _ref$activeClassName = _ref.activeClassName, activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName, activeStyle = _ref.activeStyle, classNameProp = _ref.className, exact = _ref.exact, isActiveProp = _ref.isActive, locationProp = _ref.location, sensitive = _ref.sensitive, strict = _ref.strict, styleProp = _ref.style, to = _ref.to, innerRef = _ref.innerRef, rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return modules$1.createElement(context.Consumer, null, function(context2) {
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
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;
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
    return modules$1.createElement(Link, props);
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
    return compProps || properties[0];
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
  var _a, _b;
  const [renderIndex, setRenderIndex] = useState(0);
  const { route } = useRoute();
  const readmeFile = route.replace(".html", ".md");
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
        [currentValue.sourcesContent.trim()]: () => {
          currentValue.load();
          styleModules.forEach((mod) => {
            mod.load();
          });
        }
      });
    }, {});
    if (renderIndex === void 0) {
      setRenderIndex(0);
    }
  }
  if (!results) {
    return null;
  }
  const renderer = (_a = Object.values(moduleMap)) == null ? void 0 : _a[renderIndex || 0];
  let error;
  if (!((_b = results == null ? void 0 : results.modules) == null ? void 0 : _b.length)) {
    error = new ModuleLoadError("You should add some code block in your .md file.\n Support `jsx` or `tsx` language for now.");
  }
  return {
    error,
    content: results.content,
    moduleMap,
    renderer,
    setRenderIndex
  };
}
var jsx_1 = jsx;
jsx.displayName = "jsx";
jsx.aliases = [];
function jsx(Prism) {
  (function(Prism2) {
    var javascript = Prism2.util.clone(Prism2.languages.javascript);
    Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
    Prism2.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;
    Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/i;
    Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
    Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
    Prism2.languages.insertBefore("inside", "attr-name", {
      spread: {
        pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
        inside: {
          punctuation: /\.{3}|[{}.]/,
          "attr-value": /\w+/
        }
      }
    }, Prism2.languages.jsx.tag);
    Prism2.languages.insertBefore("inside", "attr-value", {
      script: {
        pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
        inside: {
          "script-punctuation": {
            pattern: /^=(?={)/,
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
  Prism.languages.typescript = Prism.languages.extend("javascript", {
    keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
  });
  Prism.languages.ts = Prism.languages.typescript;
}
var refractorJsx = jsx_1;
var refractorTypescript = typescript_1;
var tsx_1 = tsx;
tsx.displayName = "tsx";
tsx.aliases = [];
function tsx(Prism) {
  Prism.register(refractorJsx);
  Prism.register(refractorTypescript);
  var typescript2 = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend("jsx", typescript2);
}
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
      pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
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
      pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
      inside: {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    }
  });
  Prism.languages.insertBefore("scss", "atrule", {
    keyword: [
      /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
      {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: true
      }
    ]
  });
  Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  });
  Prism.languages.insertBefore("scss", "function", {
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
      pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
      inside: {
        punctuation: /[:()]/
      }
    },
    selector: {
      pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
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
      pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
      lookbehind: true,
      alias: "function"
    }
  });
}
var index$1 = '@font-face {\n  font-family: octicons-anchor;\n  src: url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAYcAA0AAAAACjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABwAAAAca8vGTk9TLzIAAAFMAAAARAAAAFZG1VHVY21hcAAAAZAAAAA+AAABQgAP9AdjdnQgAAAB0AAAAAQAAAAEACICiGdhc3AAAAHUAAAACAAAAAj//wADZ2x5ZgAAAdwAAADRAAABEKyikaNoZWFkAAACsAAAAC0AAAA2AtXoA2hoZWEAAALgAAAAHAAAACQHngNFaG10eAAAAvwAAAAQAAAAEAwAACJsb2NhAAADDAAAAAoAAAAKALIAVG1heHAAAAMYAAAAHwAAACABEAB2bmFtZQAAAzgAAALBAAAFu3I9x/Nwb3N0AAAF/AAAAB0AAAAvaoFvbwAAAAEAAAAAzBdyYwAAAADP2IQvAAAAAM/bz7t4nGNgZGFgnMDAysDB1Ml0hoGBoR9CM75mMGLkYGBgYmBlZsAKAtJcUxgcPsR8iGF2+O/AEMPsznAYKMwIkgMA5REMOXicY2BgYGaAYBkGRgYQsAHyGMF8FgYFIM0ChED+h5j//yEk/3KoSgZGNgYYk4GRCUgwMaACRoZhDwCs7QgGAAAAIgKIAAAAAf//AAJ4nHWMMQrCQBBF/0zWrCCIKUQsTDCL2EXMohYGSSmorScInsRGL2DOYJe0Ntp7BK+gJ1BxF1stZvjz/v8DRghQzEc4kIgKwiAppcA9LtzKLSkdNhKFY3HF4lK69ExKslx7Xa+vPRVS43G98vG1DnkDMIBUgFN0MDXflU8tbaZOUkXUH0+U27RoRpOIyCKjbMCVejwypzJJG4jIwb43rfl6wbwanocrJm9XFYfskuVC5K/TPyczNU7b84CXcbxks1Un6H6tLH9vf2LRnn8Ax7A5WQAAAHicY2BkYGAA4teL1+yI57f5ysDNwgAC529f0kOmWRiYVgEpDgYmEA8AUzEKsQAAAHicY2BkYGB2+O/AEMPCAAJAkpEBFbAAADgKAe0EAAAiAAAAAAQAAAAEAAAAAAAAKgAqACoAiAAAeJxjYGRgYGBhsGFgYgABEMkFhAwM/xn0QAIAD6YBhwB4nI1Ty07cMBS9QwKlQapQW3VXySvEqDCZGbGaHULiIQ1FKgjWMxknMfLEke2A+IJu+wntrt/QbVf9gG75jK577Lg8K1qQPCfnnnt8fX1NRC/pmjrk/zprC+8D7tBy9DHgBXoWfQ44Av8t4Bj4Z8CLtBL9CniJluPXASf0Lm4CXqFX8Q84dOLnMB17N4c7tBo1AS/Qi+hTwBH4rwHHwN8DXqQ30XXAS7QaLwSc0Gn8NuAVWou/gFmnjLrEaEh9GmDdDGgL3B4JsrRPDU2hTOiMSuJUIdKQQayiAth69r6akSSFqIJuA19TrzCIaY8sIoxyrNIrL//pw7A2iMygkX5vDj+G+kuoLdX4GlGK/8Lnlz6/h9MpmoO9rafrz7ILXEHHaAx95s9lsI7AHNMBWEZHULnfAXwG9/ZqdzLI08iuwRloXE8kfhXYAvE23+23DU3t626rbs8/8adv+9DWknsHp3E17oCf+Z48rvEQNZ78paYM38qfk3v/u3l3u3GXN2Dmvmvpf1Srwk3pB/VSsp512bA/GG5i2WJ7wu430yQ5K3nFGiOqgtmSB5pJVSizwaacmUZzZhXLlZTq8qGGFY2YcSkqbth6aW1tRmlaCFs2016m5qn36SbJrqosG4uMV4aP2PHBmB3tjtmgN2izkGQyLWprekbIntJFing32a5rKWCN/SdSoga45EJykyQ7asZvHQ8PTm6cslIpwyeyjbVltNikc2HTR7YKh9LBl9DADC0U/jLcBZDKrMhUBfQBvXRzLtFtjU9eNHKin0x5InTqb8lNpfKv1s1xHzTXRqgKzek/mb7nB8RZTCDhGEX3kK/8Q75AmUM/eLkfA+0Hi908Kx4eNsMgudg5GLdRD7a84npi+YxNr5i5KIbW5izXas7cHXIMAau1OueZhfj+cOcP3P8MNIWLyYOBuxL6DRylJ4cAAAB4nGNgYoAALjDJyIAOWMCiTIxMLDmZedkABtIBygAAAA==)\n    format("woff");\n}\n\n.markdown-body {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  color: #333;\n  overflow: hidden;\n  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans,\n    sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  word-wrap: break-word;\n}\n\n.markdown-body a {\n  background: transparent;\n}\n\n.markdown-body a:active,\n.markdown-body a:hover {\n  outline: 0;\n}\n\n.markdown-body strong {\n  font-weight: bold;\n}\n\n.markdown-body h1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n.markdown-body img {\n  border: 0;\n}\n\n.markdown-body hr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n.markdown-body pre {\n  overflow: auto;\n}\n\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n.markdown-body input {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\n.markdown-body html input[disabled] {\n  cursor: default;\n}\n\n.markdown-body input {\n  line-height: normal;\n}\n\n.markdown-body input[type="checkbox"] {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0;\n}\n\n.markdown-body table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.markdown-body td,\n.markdown-body th {\n  padding: 0;\n}\n\n.markdown-body * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.markdown-body input {\n  font: 13px/1.4 Helvetica, arial, freesans, clean, sans-serif, "Segoe UI Emoji",\n    "Segoe UI Symbol";\n}\n\n.markdown-body a {\n  color: #4183c4;\n  text-decoration: none;\n}\n\n.markdown-body a:hover,\n.markdown-body a:focus,\n.markdown-body a:active {\n  text-decoration: underline;\n}\n\n.markdown-body hr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #ddd;\n}\n\n.markdown-body hr:before {\n  display: table;\n  content: "";\n}\n\n.markdown-body hr:after {\n  display: table;\n  clear: both;\n  content: "";\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  line-height: 1.1;\n}\n\n.markdown-body h1 {\n  font-size: 30px;\n}\n\n.markdown-body h2 {\n  font-size: 21px;\n}\n\n.markdown-body h3 {\n  font-size: 16px;\n}\n\n.markdown-body h4 {\n  font-size: 14px;\n}\n\n.markdown-body h5 {\n  font-size: 12px;\n}\n\n.markdown-body h6 {\n  font-size: 11px;\n}\n\n.markdown-body blockquote {\n  margin: 0;\n}\n\n.markdown-body ul,\n.markdown-body ol {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body ol ol,\n.markdown-body ul ol {\n  list-style-type: lower-roman;\n}\n\n.markdown-body ul ul ol,\n.markdown-body ul ol ol,\n.markdown-body ol ul ol,\n.markdown-body ol ol ol {\n  list-style-type: lower-alpha;\n}\n\n.markdown-body dd {\n  margin-left: 0;\n}\n\n.markdown-body code {\n  font: 12px Consolas, "Liberation Mono", Menlo, Courier, monospace;\n}\n\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n  font: 12px Consolas, "Liberation Mono", Menlo, Courier, monospace;\n}\n\n.markdown-body kbd {\n  background-color: #e7e7e7;\n  background-image: -webkit-linear-gradient(#fefefe, #e7e7e7);\n  background-image: linear-gradient(#fefefe, #e7e7e7);\n  background-repeat: repeat-x;\n  border-radius: 2px;\n  border: 1px solid #cfcfcf;\n  color: #000;\n  padding: 3px 5px;\n  line-height: 10px;\n  font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;\n  display: inline-block;\n}\n\n.markdown-body > *:first-child {\n  margin-top: 0 !important;\n}\n\n.markdown-body > *:last-child {\n  margin-bottom: 0 !important;\n}\n\n.markdown-body .anchor {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: block;\n  padding-right: 6px;\n  padding-left: 30px;\n  margin-left: -30px;\n}\n\n.markdown-body .anchor:focus {\n  outline: none;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  position: relative;\n  margin-top: 1em;\n  margin-bottom: 16px;\n  font-weight: bold;\n  line-height: 1.4;\n}\n\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n  display: none;\n  color: #000;\n  vertical-align: middle;\n}\n\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n  height: 1em;\n  padding-left: 8px;\n  margin-left: -30px;\n  line-height: 1;\n  text-decoration: none;\n}\n\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n  display: inline-block;\n}\n\n.markdown-body h1 {\n  padding-bottom: 0.3em;\n  font-size: 2.25em;\n  line-height: 1.2;\n  border-bottom: 1px solid #eee;\n}\n\n.markdown-body h2 {\n  padding-bottom: 0.3em;\n  font-size: 1.75em;\n  line-height: 1.225;\n  border-bottom: 1px solid #eee;\n}\n\n.markdown-body h3 {\n  font-size: 1.5em;\n  line-height: 1.43;\n}\n\n.markdown-body h4 {\n  font-size: 1.25em;\n}\n\n.markdown-body h5 {\n  font-size: 1em;\n}\n\n.markdown-body h6 {\n  font-size: 1em;\n  color: #777;\n}\n\n.markdown-body p,\n.markdown-body blockquote,\n.markdown-body ul,\n.markdown-body ol,\n.markdown-body dl,\n.markdown-body table,\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.markdown-body hr {\n  height: 4px;\n  padding: 0;\n  margin: 16px 0;\n  background-color: #e7e7e7;\n  border: 0 none;\n}\n\n.markdown-body ul,\n.markdown-body ol {\n  padding-left: 2em;\n}\n\n.markdown-body ul ul,\n.markdown-body ul ol,\n.markdown-body ol ol,\n.markdown-body ol ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body li > p {\n  margin-top: 16px;\n}\n\n.markdown-body dl {\n  padding: 0;\n}\n\n.markdown-body dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: bold;\n}\n\n.markdown-body dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n\n.markdown-body blockquote {\n  padding: 0 15px;\n  color: #777;\n  border-left: 4px solid #ddd;\n}\n\n.markdown-body blockquote > :first-child {\n  margin-top: 0;\n}\n\n.markdown-body blockquote > :last-child {\n  margin-bottom: 0;\n}\n\n.markdown-body table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n  word-break: normal;\n  word-break: keep-all;\n}\n\n.markdown-body table th {\n  font-weight: bold;\n}\n\n.markdown-body table th,\n.markdown-body table td {\n  padding: 6px 13px;\n  border: 1px solid #ddd;\n}\n\n.markdown-body table tr {\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n}\n\n.markdown-body table tr:nth-child(2n) {\n  background-color: #f8f8f8;\n}\n\n.markdown-body img {\n  max-width: 100%;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.markdown-body code {\n  padding: 0;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(0, 0, 0, 0.04);\n  border-radius: 3px;\n}\n\n.markdown-body code:before,\n.markdown-body code:after {\n  letter-spacing: -0.2em;\n  content: "\\00a0";\n}\n\n.markdown-body pre > code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.markdown-body .highlight {\n  margin-bottom: 16px;\n}\n\n.markdown-body .highlight pre,\n.markdown-body pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f7f7f7;\n  border-radius: 3px;\n}\n\n.markdown-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.markdown-body pre {\n  word-wrap: normal;\n}\n\n.markdown-body pre code {\n  display: inline;\n  max-width: initial;\n  padding: 0;\n  margin: 0;\n  overflow: initial;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n\n.markdown-body pre code:before,\n.markdown-body pre code:after {\n  content: normal;\n}\n\n.markdown-body .highlight {\n  background: #fff;\n}\n\n.markdown-body .highlight .mf,\n.markdown-body .highlight .mh,\n.markdown-body .highlight .mi,\n.markdown-body .highlight .mo,\n.markdown-body .highlight .il,\n.markdown-body .highlight .m {\n  color: #945277;\n}\n\n.markdown-body .highlight .s,\n.markdown-body .highlight .sb,\n.markdown-body .highlight .sc,\n.markdown-body .highlight .sd,\n.markdown-body .highlight .s2,\n.markdown-body .highlight .se,\n.markdown-body .highlight .sh,\n.markdown-body .highlight .si,\n.markdown-body .highlight .sx,\n.markdown-body .highlight .s1 {\n  color: #df5000;\n}\n\n.markdown-body .highlight .kc,\n.markdown-body .highlight .kd,\n.markdown-body .highlight .kn,\n.markdown-body .highlight .kp,\n.markdown-body .highlight .kr,\n.markdown-body .highlight .kt,\n.markdown-body .highlight .k,\n.markdown-body .highlight .o {\n  font-weight: bold;\n}\n\n.markdown-body .highlight .kt {\n  color: #458;\n}\n\n.markdown-body .highlight .c,\n.markdown-body .highlight .cm,\n.markdown-body .highlight .c1 {\n  color: #998;\n  font-style: italic;\n}\n\n.markdown-body .highlight .cp,\n.markdown-body .highlight .cs {\n  color: #999;\n  font-weight: bold;\n}\n\n.markdown-body .highlight .cs {\n  font-style: italic;\n}\n\n.markdown-body .highlight .n {\n  color: #333;\n}\n\n.markdown-body .highlight .na,\n.markdown-body .highlight .nv,\n.markdown-body .highlight .vc,\n.markdown-body .highlight .vg,\n.markdown-body .highlight .vi {\n  color: #008080;\n}\n\n.markdown-body .highlight .nb {\n  color: #0086b3;\n}\n\n.markdown-body .highlight .nc {\n  color: #458;\n  font-weight: bold;\n}\n\n.markdown-body .highlight .no {\n  color: #094e99;\n}\n\n.markdown-body .highlight .ni {\n  color: #800080;\n}\n\n.markdown-body .highlight .ne {\n  color: #990000;\n  font-weight: bold;\n}\n\n.markdown-body .highlight .nf {\n  color: #945277;\n  font-weight: bold;\n}\n\n.markdown-body .highlight .nn {\n  color: #555;\n}\n\n.markdown-body .highlight .nt {\n  color: #000080;\n}\n\n.markdown-body .highlight .err {\n  color: #a61717;\n  background-color: #e3d2d2;\n}\n\n.markdown-body .highlight .gd {\n  color: #000;\n  background-color: #fdd;\n}\n\n.markdown-body .highlight .gd .x {\n  color: #000;\n  background-color: #faa;\n}\n\n.markdown-body .highlight .ge {\n  font-style: italic;\n}\n\n.markdown-body .highlight .gr {\n  color: #aa0000;\n}\n\n.markdown-body .highlight .gh {\n  color: #999;\n}\n\n.markdown-body .highlight .gi {\n  color: #000;\n  background-color: #dfd;\n}\n\n.markdown-body .highlight .gi .x {\n  color: #000;\n  background-color: #afa;\n}\n\n.markdown-body .highlight .go {\n  color: #888;\n}\n\n.markdown-body .highlight .gp {\n  color: #555;\n}\n\n.markdown-body .highlight .gs {\n  font-weight: bold;\n}\n\n.markdown-body .highlight .gu {\n  color: #800080;\n  font-weight: bold;\n}\n\n.markdown-body .highlight .gt {\n  color: #aa0000;\n}\n\n.markdown-body .highlight .ow {\n  font-weight: bold;\n}\n\n.markdown-body .highlight .w {\n  color: #bbb;\n}\n\n.markdown-body .highlight .sr {\n  color: #017936;\n}\n\n.markdown-body .highlight .ss {\n  color: #8b467f;\n}\n\n.markdown-body .highlight .bp {\n  color: #999;\n}\n\n.markdown-body .highlight .gc {\n  color: #999;\n  background-color: #eaf2f5;\n}\n\n.markdown-body .octicon {\n  font: normal normal 16px octicons-anchor;\n  line-height: 1;\n  display: inline-block;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.markdown-body .octicon-link:before {\n  content: "\\f05c";\n}\n\n.markdown-body .task-list-item {\n  list-style-type: none;\n}\n\n.markdown-body .task-list-item + .task-list-item {\n  margin-top: 3px;\n}\n\n.markdown-body .task-list-item input {\n  float: left;\n  margin: 0.3em 0 0.25em -1.6em;\n  vertical-align: middle;\n}\n\n.markdown-area {\n  margin-bottom: 15px;\n}\n\n.markdown-area .clickable-block {\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n\n.markdown-area .clickable-block:not(.selected-block):hover > .code-pane {\n  box-shadow: 0 2px 8px 0 #6495f9;\n}\n\n.markdown-area .selected-block {\n  position: relative;\n  margin-bottom: 0.85rem;\n}\n\n.markdown-area .selected-block > .ant-tag {\n  position: absolute;\n  z-index: 1;\n  border-radius: 6px 0 6px 0;\n  top: 0;\n  background: #6495f9;\n  border-color: #6495f9;\n  color: #fff;\n  font-weight: 500;\n}\n\n.markdown-area .selected-block > .code-pane {\n  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.4);\n  border: 2px solid #6495f9;\n}\n\n.markdown-area .selected-block > .code-pane > pre.hljs {\n  margin-bottom: 0;\n}\n\n.markdown-area ul > li,\n.markdown-area dl > li,\n.markdown-area ol > li {\n  list-style-type: inherit;\n}\n\n.markdown-area ul {\n  list-style-type: disc;\n  list-style-position: inside;\n}\n\n.markdown-area ol {\n  list-style-type: decimal;\n  list-style-position: inside;\n}\n\n.markdown-area ul ul,\n.markdown-area ol ul {\n  list-style-type: circle;\n  list-style-position: inside;\n}\n\n.markdown-area ol ol,\n.markdown-area ul ol {\n  list-style-type: lower-latin;\n  list-style-position: inside;\n}';
const { HighLighter: HighLight, ReactMarkdown } = window;
HighLight.registerLanguage("tsx", tsx_1);
HighLight.registerLanguage("scss", scss_1);
HighLight.registerLanguage("less", less_1);
const { Tag } = window.antd;
function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }
  const { moduleMap, content, renderer, setRenderIndex } = res;
  let index2 = 0;
  const code = ({ language, value = "" }) => {
    const fn = moduleMap == null ? void 0 : moduleMap[value.trim()];
    const clickable = /^[j|t]sx$/.test(language);
    let onChange = () => {
    };
    if (clickable) {
      onChange = function(tabIndex) {
        setRenderIndex(tabIndex);
      }.bind(null, index2);
      index2++;
    }
    return /* @__PURE__ */ modules$1.createElement("div", {
      className: classNames({
        "clickable-block": clickable,
        "selected-block": renderer === fn
      }),
      onClick: onChange
    }, renderer === fn && /* @__PURE__ */ modules$1.createElement(Tag, null, "Showing"), /* @__PURE__ */ modules$1.createElement(HighLight, {
      lang: language,
      children: value
    }));
  };
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: "markdown-area markdown-body"
  }, /* @__PURE__ */ modules$1.createElement(ReactMarkdown, {
    renderers: { code }
  }, content));
}
function ReadmePane() {
  const [visionProps, setVisionProps] = useState({});
  const [visionDefaultProps, setVisionDefaultProps] = useState();
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
  }, /* @__PURE__ */ modules$1.createElement("h1", {
    className: "component-name"
  }, propertyTypes == null ? void 0 : propertyTypes.displayName), /* @__PURE__ */ modules$1.createElement("span", {
    className: "component-sub-title"
  }, /* @__PURE__ */ modules$1.createElement("span", null, "Package: ", compInfo == null ? void 0 : compInfo.packageName), /* @__PURE__ */ modules$1.createElement("span", null, "Version: ", compInfo == null ? void 0 : compInfo.packageVersion))), /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-main"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-part"
  }, /* @__PURE__ */ modules$1.createElement(ComponentArea, {
    data: Components,
    componentProps: visionProps,
    onSetDefaultProps: setVisionDefaultProps
  }), /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-description component-block"
  }, /* @__PURE__ */ modules$1.createElement(MarkdownArea, {
    data: Components
  }), /* @__PURE__ */ modules$1.createElement(renderProperty, {
    properties: propertyTypes
  }))), propertyTypes && /* @__PURE__ */ modules$1.createElement(VisionPane, {
    key: `vision-default-props-${!!visionDefaultProps}`,
    properties: propertyTypes,
    defaultProps: visionDefaultProps,
    onPropsChange: setVisionProps
  }))) : "Loading...");
}
var index = ".ant-menu-root.router-switch {\n  width: 230px;\n  height: 100%;\n  z-index: 90;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n}\n.ant-menu-root.router-switch > .logo {\n  margin: 16px auto;\n  display: flex;\n  align-items: center;\n}\n.ant-menu-root.router-switch .fold-btn {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-menu-root.router-switch .capitalize {\n  text-transform: capitalize;\n}\n.ant-menu-root.router-switch a {\n  color: inherit;\n}\n.ant-menu-root.router-switch .menu-content {\n  width: 100%;\n  flex: 1;\n  padding: 16px;\n}";
const { Menu } = window.antd;
const { SubMenu } = Menu;
function MenuLink(item) {
  return /* @__PURE__ */ modules$1.createElement(Link, {
    to: item.path
  }, item.name.replace(/-/g, " ").replace(/\//g, " - "));
}
function RouterSwitch() {
  const { tree: menuData } = useRouteMap() || {};
  const { npmLink, logo } = useComponentInfo() || {};
  if (!menuData || (menuData == null ? void 0 : menuData.length) <= 1) {
    return /* @__PURE__ */ modules$1.createElement(modules$1.Fragment, null);
  }
  const { url: route } = useRouteMatch();
  const openKeys = menuData == null ? void 0 : menuData.filter(({ children }) => !!children).map(({ name }) => name);
  return /* @__PURE__ */ modules$1.createElement(Menu, {
    mode: "inline",
    className: "router-switch",
    defaultSelectedKeys: [route],
    defaultOpenKeys: openKeys
  }, /* @__PURE__ */ modules$1.createElement("a", {
    className: "logo",
    href: npmLink
  }, /* @__PURE__ */ modules$1.createElement("img", {
    src: logo || "https://img.alicdn.com/tfs/TB1Zs2ouQL0gK0jSZFAXXcA9pXa-1142-200.png",
    style: { width: 178, height: 31 }
  })), menuData && menuData.map((item) => {
    var _a;
    if (item.path) {
      return /* @__PURE__ */ modules$1.createElement(Menu.Item, {
        key: item.path
      }, /* @__PURE__ */ modules$1.createElement(MenuLink, __spreadValues({}, item)));
    }
    return /* @__PURE__ */ modules$1.createElement(SubMenu, {
      title: item.name,
      className: "capitalize",
      key: item.name
    }, (_a = item.children) == null ? void 0 : _a.map((item2) => /* @__PURE__ */ modules$1.createElement(Menu.Item, {
      key: item2.path
    }, /* @__PURE__ */ modules$1.createElement(MenuLink, __spreadValues({}, item2)))));
  }));
}
_default$6();
function App() {
  const { routes } = useRouteMap() || {};
  if (!routes) {
    return null;
  }
  return /* @__PURE__ */ createElement(Switch, null, routes.map((route) => {
    return /* @__PURE__ */ createElement(Route, {
      path: route
    }, /* @__PURE__ */ createElement("div", {
      style: { display: "flex" },
      className: "code-box-demo"
    }, /* @__PURE__ */ createElement(RouterSwitch, null), /* @__PURE__ */ createElement(ReadmePane, {
      key: `${route}_readme_pane`
    })));
  }), /* @__PURE__ */ createElement(Redirect, {
    to: routes[0]
  }));
}
modules.render(/* @__PURE__ */ createElement(HashRouter, null, /* @__PURE__ */ createElement(App, null)), document.querySelector("#component-root"));
export { App };
