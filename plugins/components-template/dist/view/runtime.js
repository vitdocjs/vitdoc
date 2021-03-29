var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __rest = (source, exclude) => {
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
const import_meta = {};
var modules$1 = window["React"];
const Fragment$1 = modules$1["Fragment"];
const StrictMode$1 = modules$1["StrictMode"];
const Profiler$1 = modules$1["Profiler"];
const Suspense$1 = modules$1["Suspense"];
const Children = modules$1["Children"];
const Component = modules$1["Component"];
const PureComponent = modules$1["PureComponent"];
const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = modules$1["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"];
const cloneElement = modules$1["cloneElement"];
const createContext = modules$1["createContext"];
const createElement$1 = modules$1["createElement"];
const createFactory = modules$1["createFactory"];
const createRef = modules$1["createRef"];
const forwardRef = modules$1["forwardRef"];
const isValidElement = modules$1["isValidElement"];
const lazy = modules$1["lazy"];
const memo = modules$1["memo"];
const useCallback = modules$1["useCallback"];
const useContext = modules$1["useContext"];
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
  Fragment: Fragment$1,
  StrictMode: StrictMode$1,
  Profiler: Profiler$1,
  Suspense: Suspense$1,
  Children,
  Component,
  PureComponent,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cloneElement,
  createContext,
  createElement: createElement$1,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  version,
  default: modules$1
});
var modules = window["ReactDOM"];
modules["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"];
modules["createPortal"];
modules["findDOMNode"];
modules["flushSync"];
modules["hydrate"];
const render = modules["render"];
modules["unmountComponentAtNode"];
modules["unstable_batchedUpdates"];
modules["unstable_createPortal"];
modules["unstable_renderSubtreeIntoContainer"];
modules["version"];
var _default$2 = mtopHook;
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i) {
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
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
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
      var _arg = _slicedToArray$1(arg, 2), url = _arg[1];
      var _ref = url.match(new RegExp("".concat(mtopDomain, "\\/h5\\/(.+?)\\/"))) || [], _ref2 = _slicedToArray$1(_ref, 2), mtopKey = _ref2[1];
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
const {Table} = window.antd;
function renderProperty({properties}) {
  if (!properties) {
    return null;
  }
  const {props = {}} = properties;
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
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", {value: true});
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
function createCommonjsModule(fn) {
  var module = {exports: {}};
  return fn(module, module.exports), module.exports;
}
function isObject(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
var isObject_1 = isObject;
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto2) {
    if (!isObject_1(proto2)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto2);
    }
    object.prototype = proto2;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate;
function baseLodash() {
}
var _baseLodash = baseLodash;
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = void 0;
}
LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
var _LodashWrapper = LodashWrapper;
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = _freeGlobal || freeSelf || Function("return this")();
var _root = root;
var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;
var objectProto$f = Object.prototype;
var hasOwnProperty$e = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$e.call(value, symToStringTag$1), tag = value[symToStringTag$1];
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
var _getRawTag = getRawTag;
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}
var _baseGetTag = baseGetTag;
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike;
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments;
var objectProto$d = Object.prototype;
var hasOwnProperty$d = objectProto$d.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$d.propertyIsEnumerable;
var isArguments = _baseIsArguments(function() {
  return arguments;
}()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$d.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments;
var isArray$1 = Array.isArray;
var isArray_1 = isArray$1;
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable;
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = _isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten;
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}
var flatten_1 = flatten;
function apply(func, thisArg, args) {
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
var _apply = apply;
var nativeMax = Math.max;
function overRest(func, start, transform2) {
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
    return _apply(func, this, otherArgs);
  };
}
var _overRest = overRest;
function constant(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction;
var coreJsData = _root["__core-js_shared__"];
var _coreJsData = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
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
var _toSource = toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$c = objectProto$c.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$c).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}
var _baseIsNative = baseIsNative;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : void 0;
}
var _getNative = getNative;
var defineProperty$2 = function() {
  try {
    var func = _getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var _defineProperty$2 = defineProperty$2;
function identity$1(value) {
  return value;
}
var identity_1 = identity$1;
var baseSetToString = !_defineProperty$2 ? identity_1 : function(func, string2) {
  return _defineProperty$2(func, "toString", {
    configurable: true,
    enumerable: false,
    value: constant_1(string2),
    writable: true
  });
};
var _baseSetToString = baseSetToString;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
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
var _shortOut = shortOut;
var setToString = _shortOut(_baseSetToString);
var _setToString = setToString;
function flatRest(func) {
  return _setToString(_overRest(func, void 0, flatten_1), func + "");
}
var _flatRest = flatRest;
var WeakMap$1 = _getNative(_root, "WeakMap");
var _WeakMap = WeakMap$1;
var metaMap = _WeakMap && new _WeakMap();
var _metaMap = metaMap;
function noop() {
}
var noop_1 = noop;
var getData = !_metaMap ? noop_1 : function(func) {
  return _metaMap.get(func);
};
var _getData = getData;
var realNames = {};
var _realNames = realNames;
var objectProto$b = Object.prototype;
var hasOwnProperty$b = objectProto$b.hasOwnProperty;
function getFuncName(func) {
  var result = func.name + "", array = _realNames[result], length = hasOwnProperty$b.call(_realNames, result) ? array.length : 0;
  while (length--) {
    var data = array[length], otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}
var _getFuncName = getFuncName;
var MAX_ARRAY_LENGTH = 4294967295;
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}
LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
var _LazyWrapper = LazyWrapper;
function copyArray(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray;
function wrapperClone(wrapper) {
  if (wrapper instanceof _LazyWrapper) {
    return wrapper.clone();
  }
  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = _copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}
var _wrapperClone = wrapperClone;
var objectProto$a = Object.prototype;
var hasOwnProperty$a = objectProto$a.hasOwnProperty;
function lodash(value) {
  if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
    if (value instanceof _LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$a.call(value, "__wrapped__")) {
      return _wrapperClone(value);
    }
  }
  return new _LodashWrapper(value);
}
lodash.prototype = _baseLodash.prototype;
lodash.prototype.constructor = lodash;
var wrapperLodash = lodash;
function isLaziable(func) {
  var funcName = _getFuncName(func), other = wrapperLodash[funcName];
  if (typeof other != "function" || !(funcName in _LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = _getData(other);
  return !!data && func === data[0];
}
var _isLaziable = isLaziable;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var WRAP_CURRY_FLAG = 8, WRAP_PARTIAL_FLAG = 32, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256;
function createFlow(fromRight) {
  return _flatRest(function(funcs) {
    var length = funcs.length, index2 = length, prereq = _LodashWrapper.prototype.thru;
    if (fromRight) {
      funcs.reverse();
    }
    while (index2--) {
      var func = funcs[index2];
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      if (prereq && !wrapper && _getFuncName(func) == "wrapper") {
        var wrapper = new _LodashWrapper([], true);
      }
    }
    index2 = wrapper ? index2 : length;
    while (++index2 < length) {
      func = funcs[index2];
      var funcName = _getFuncName(func), data = funcName == "wrapper" ? _getData(func) : void 0;
      if (data && _isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[_getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func.length == 1 && _isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments, value = args[0];
      if (wrapper && args.length == 1 && isArray_1(value)) {
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
var _createFlow = createFlow;
var flow$2 = _createFlow();
var flow_1$1 = flow$2;
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(react_1a37f6a0);
var translateByUIType_1 = translateByUIType;
var getComponent_1 = getComponent;
var getDefaultEvents_1 = getDefaultEvents;
var getSetter_1 = getSetter;
var transform_1 = transform;
var _react = _interopRequireDefault$1(require$$0);
var _flow$1 = _interopRequireDefault$1(flow_1$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols2);
  }
  return keys2;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
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
var GROUP_COMPOSITE = ["composite", "group"];
var VisionUiHelper = {};
try {
  VisionUiHelper = window.VisualEngineUtils;
} catch (e2) {
}
function translateByUIType(setter) {
  var uiType = setter.uiType, _setter$configure = setter.configure, configure2 = _setter$configure === void 0 ? [] : _setter$configure, restProps = _objectWithoutProperties(setter, ["uiType", "configure"]);
  var Setter = VisionUiHelper[uiType];
  return Setter ? _react.default.createElement(Setter, _objectSpread$1({
    configure: configure2.map(getSetter)
  }, restProps)) : null;
}
function getComponent(setter, floor) {
  if (typeof setter === "string") {
    var Setter = VisionUiHelper[setter];
    if (floor === 1 && VisionUiHelper.DadaSetter && VisionUiHelper.DadaSetter[setter]) {
      Setter = VisionUiHelper.DadaSetter[setter];
    }
    return Setter ? _react.default.createElement(Setter) : null;
  } else if (_typeof(setter) === "object" && "uiType" in setter) {
    return translateByUIType(setter);
  }
  return setter;
}
function getDefaultEvents(configure2) {
  var name = configure2.name;
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
    }, configure2);
  }
  return configure2;
}
function getSetter(configure2) {
  var setter = configure2.setter, items = configure2.items, type2 = configure2.type, floor = configure2.floor;
  if (setter) {
    configure2.setter = getComponent(configure2.setter, floor);
  }
  if (GROUP_COMPOSITE.indexOf(type2) > 0 && Array.isArray(items)) {
    configure2.items = items.map((0, _flow$1.default)(getDefaultEvents, getSetter));
  }
  return configure2;
}
function transform(prototypeSchema) {
  var _prototypeSchema$conf = prototypeSchema.configure, configure2 = _prototypeSchema$conf === void 0 ? [] : _prototypeSchema$conf, restProps = _objectWithoutProperties(prototypeSchema, ["configure"]);
  var setFloor = function setFloor2(configure3) {
    return _objectSpread$1({
      floor: 1
    }, configure3);
  };
  configure2 = configure2.map((0, _flow$1.default)(setFloor, getDefaultEvents, getSetter));
  return _objectSpread$1(_objectSpread$1({}, restProps), {}, {
    configure: configure2
  });
}
var utils$1 = /* @__PURE__ */ Object.defineProperty({
  translateByUIType: translateByUIType_1,
  getComponent: getComponent_1,
  getDefaultEvents: getDefaultEvents_1,
  getSetter: getSetter_1,
  transform: transform_1
}, "__esModule", {value: true});
var symbolTag$1 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1;
}
var isSymbol_1 = isSymbol;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type2 = typeof value;
  if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey;
var nativeCreate = _getNative(Object, "create");
var _nativeCreate = nativeCreate;
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}
var _hashClear = hashClear;
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$9 = Object.prototype;
var hasOwnProperty$9 = objectProto$9.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$9.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet;
var objectProto$8 = Object.prototype;
var hasOwnProperty$8 = objectProto$8.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== void 0 : hasOwnProperty$8.call(data, key);
}
var _hashHas = hashHas;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet;
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = _hashClear;
Hash.prototype["delete"] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
var _Hash = Hash;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear;
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq;
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf;
var arrayProto = Array.prototype;
var splice$2 = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = _assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice$2.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete;
function listCacheGet(key) {
  var data = this.__data__, index2 = _assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet;
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas;
function listCacheSet(key, value) {
  var data = this.__data__, index2 = _assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet;
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype["delete"] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
var _ListCache = ListCache;
var Map = _getNative(_root, "Map");
var _Map = Map;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    hash: new _Hash(),
    map: new (_Map || _ListCache)(),
    string: new _Hash()
  };
}
var _mapCacheClear = mapCacheClear;
function isKeyable(value) {
  var type2 = typeof value;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable;
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData;
function mapCacheDelete(key) {
  var result = _getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete;
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}
var _mapCacheGet = mapCacheGet;
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}
var _mapCacheHas = mapCacheHas;
function mapCacheSet(key, value) {
  var data = _getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet;
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype["delete"] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
var _MapCache = MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver2) {
  if (typeof func != "function" || resolver2 != null && typeof resolver2 != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver2 ? resolver2.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
}
memoize.Cache = _MapCache;
var memoize_1 = memoize;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = _memoizeCapped(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath;
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap;
var INFINITY$1 = 1 / 0;
var symbolProto$1 = _Symbol ? _Symbol.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_1(value)) {
    return _arrayMap(value, baseToString) + "";
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString;
function toString$2(value) {
  return value == null ? "" : _baseToString(value);
}
var toString_1 = toString$2;
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}
var _castPath = castPath;
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey;
function baseGet(object, path) {
  path = _castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[_toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet;
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : _baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get;
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && _defineProperty$2) {
    _defineProperty$2(object, key, {
      configurable: true,
      enumerable: true,
      value,
      writable: true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue;
var objectProto$7 = Object.prototype;
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$7.call(object, key) && eq_1(objValue, value)) || value === void 0 && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}
var _assignValue = assignValue;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type2 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex;
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = _toKey(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_1(objValue) ? objValue : _isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet = baseSet;
function set(object, path, value) {
  return object == null ? object : _baseSet(object, path, value);
}
var set_1 = set;
function stackClear() {
  this.__data__ = new _ListCache();
  this.size = 0;
}
var _stackClear = stackClear;
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete;
function stackGet(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet;
function stackHas(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet;
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = _stackClear;
Stack.prototype["delete"] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
var _Stack = Stack;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd;
function setCacheHas(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas;
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;
var _SetCache = SetCache;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome;
function cacheHas(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen2 = bitmask & COMPARE_UNORDERED_FLAG$3 ? new _SetCache() : void 0;
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
    if (seen2) {
      if (!_arraySome(other, function(othValue2, othIndex) {
        if (!_cacheHas(seen2, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen2.push(othIndex);
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
var _equalArrays = equalArrays;
var Uint8Array = _root.Uint8Array;
var _Uint8Array = Uint8Array;
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray;
function setToArray(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto = _Symbol ? _Symbol.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      return eq_1(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert2 = _mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert2 || (convert2 = _setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = _equalArrays(convert2(object), convert2(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys;
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter;
function stubArray() {
  return [];
}
var stubArray_1 = stubArray;
var objectProto$6 = Object.prototype;
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols;
function baseTimes(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes;
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
var isBuffer_1 = createCommonjsModule(function(module, exports) {
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? _root.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse_1;
  module.exports = isBuffer2;
});
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}
var _baseIsTypedArray = baseIsTypedArray;
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary;
var _nodeUtil = createCommonjsModule(function(module, exports) {
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && _freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e2) {
    }
  }();
  module.exports = nodeUtil;
});
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;
var objectProto$5 = Object.prototype;
var hasOwnProperty$6 = objectProto$5.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value), isArg = !isArr && isArguments_1(value), isBuff = !isArr && !isArg && isBuffer_1(value), isType = !isArr && !isArg && !isBuff && isTypedArray_1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? _baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || _isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys;
var objectProto$4 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto2;
}
var _isPrototype = isPrototype;
function overArg(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var _overArg = overArg;
var nativeKeys = _overArg(Object.keys, Object);
var _nativeKeys = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$5 = objectProto$3.hasOwnProperty;
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$5.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys;
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}
var isArrayLike_1 = isArrayLike;
function keys$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}
var keys_1 = keys$1;
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}
var _getAllKeys = getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$4 = objectProto$2.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = _getAllKeys(object), objLength = objProps.length, othProps = _getAllKeys(other), othLength = othProps.length;
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
var _equalObjects = equalObjects;
var DataView = _getNative(_root, "DataView");
var _DataView = DataView;
var Promise$1 = _getNative(_root, "Promise");
var _Promise = Promise$1;
var Set = _getNative(_root, "Set");
var _Set = Set;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = _toSource(_DataView), mapCtorString = _toSource(_Map), promiseCtorString = _toSource(_Promise), setCtorString = _toSource(_Set), weakMapCtorString = _toSource(_WeakMap);
var getTag = _baseGetTag;
if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag || _Map && getTag(new _Map()) != mapTag || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag || _WeakMap && getTag(new _WeakMap()) != weakMapTag) {
  getTag = function(value) {
    var result = _baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? _toSource(Ctor) : "";
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
var _getTag = getTag;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto$1 = Object.prototype;
var hasOwnProperty$3 = objectProto$1.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object), othIsArr = isArray_1(other), objTag = objIsArr ? arrayTag : _getTag(object), othTag = othIsArr ? arrayTag : _getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack());
    return objIsArr || isTypedArray_1(object) ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$3.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$3.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack());
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep;
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_1(value) && !isObjectLike_1(other)) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var _baseIsEqual = baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
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
      var stack = new _Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch;
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}
var _isStrictComparable = isStrictComparable;
function getMatchData(object) {
  var result = keys_1(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}
var _getMatchData = getMatchData;
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable;
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches;
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn;
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = _toKey(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
}
var _hasPath = hasPath;
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}
var hasIn_1 = hasIn;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_1(object, path) : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty;
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty;
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep;
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}
var property_1 = property;
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == "object") {
    return isArray_1(value) ? _baseMatchesProperty(value[0], value[1]) : _baseMatches(value);
  }
  return property_1(value);
}
var _baseIteratee = baseIteratee;
function basePickBy(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = _baseGet(object, path);
    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }
  return result;
}
var _basePickBy = basePickBy;
var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn;
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn;
var objectProto = Object.prototype;
var hasOwnProperty$2 = objectProto.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn;
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}
var keysIn_1 = keysIn;
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn;
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = _arrayMap(_getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = _baseIteratee(predicate);
  return _basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
var pickBy_1 = pickBy;
var _const = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BLOCK_PROPS = exports.HOC_PROPS = void 0;
  var HOC_PROPS = ["request", "label", "visible", "hotload", "tips", "labelPosition", "subLabel", "required"];
  exports.HOC_PROPS = HOC_PROPS;
  var BLOCK_PROPS = ["name", "renderComponent", "elements", "runAction", "actions", "itemData", "uiType", "componentKey", "itemData", "App"].concat(HOC_PROPS);
  exports.BLOCK_PROPS = BLOCK_PROPS;
});
var buildVisionFromTypes_1 = buildVisionFromTypes;
var _get = _interopRequireDefault(get_1);
var _set = _interopRequireDefault(set_1);
var _pickBy = _interopRequireDefault(pickBy_1);
var _flow = _interopRequireDefault(flow_1$1);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols2);
  }
  return keys2;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var DEFAULT_VISION_CONFIG = {
  category: "*",
  icon: "https://img.alicdn.com/tfs/TB1whTmvAL0gK0jSZFxXXXWHVXa-200-200.svg",
  isContainer: false
};
var STRING = "string";
var NUMBER = "number";
var BOOL = "boolean";
var Normal_Types = [STRING, NUMBER, BOOL];
var Null_TYPES = ["undefined", "null"];
var Composite_Types = ["any", "any[]", "string[]", "number[]", "object", "object[]"];
var isNotEnumTypes = function isNotEnumTypes2() {
  var types = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return types.split("|").some(function(str) {
    return Normal_Types.concat(Composite_Types).includes(str.trim());
  });
};
var isNumberTypes = function isNumberTypes2() {
  var types = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return types.split("|").every(function(str) {
    return [NUMBER].concat(Null_TYPES).includes(str.trim());
  });
};
var isTextTypes = function isTextTypes2() {
  var types = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return types.split("|").every(function(str) {
    return [STRING, NUMBER].concat(Null_TYPES).includes(str.trim());
  });
};
var isBoolTypes = function isBoolTypes2() {
  var types = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return types.split("|").every(function(str) {
    return [BOOL].concat(Null_TYPES).includes(str.trim());
  });
};
var strToObj = function strToObj2(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return str;
  }
};
var filterQuotaMarkAndUndefined = function filterQuotaMarkAndUndefined2(typeStr) {
  return typeStr.split("|").map(function(val) {
    return val.replace(/"/g, "").trim();
  }).filter(function(val) {
    return val !== "undefined";
  });
};
var REGEXP_ISMultipleTypes = /\S+(\[\])?\s*\|/g;
var REGEXP_ISFunction = /^\(.*\)\s*=>\s*.+$/;
var REGEXP_ISArray = /{.+}\[]$/;
var VisionSchemaTransfer = function() {
  _createClass(VisionSchemaTransfer2, [{
    key: "transformProps",
    value: function transformProps(propType) {
      var defaultConfig = this.defaultVisionConfig;
      var _defaultConfig$config = defaultConfig.configure, defaultConfigure = _defaultConfig$config === void 0 ? [] : _defaultConfig$config;
      var name = propType.name, description = propType.description;
      var defaultValue = VisionSchemaTransfer2.getDefaultPropByTypes(propType);
      var type2 = (0, _get.default)(propType, "type.name");
      var tags = Object.entries(propType.tags || {}).reduce(function(previousValue, _ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        return (0, _set.default)(previousValue, key, strToObj(value));
      }, {});
      if (tags.vision === false) {
        return null;
      }
      var visionJsonConfig = defaultConfigure.find(function(configure2) {
        return configure2.name === name;
      });
      var visionDocsConfig = (0, _get.default)(tags, "vision");
      return _objectSpread(_objectSpread({
        name,
        tip: description,
        initialValue: defaultValue,
        defaultValue,
        setter: VisionSchemaTransfer2.getSetterByTSType(type2)
      }, visionJsonConfig), visionDocsConfig);
    }
  }], [{
    key: "getObjectTypes",
    value: function getObjectTypes(typeStr) {
      if (!/^{.+}$/.test(typeStr.trim())) {
        return typeStr;
      }
      var reg = /(\w+)\??: ([\w\[\]]+|{.+});/g;
      var regResult, result = {};
      while (regResult = reg.exec(typeStr)) {
        var _regResult = regResult, _regResult2 = _slicedToArray(_regResult, 3), key = _regResult2[1], value = _regResult2[2];
        result[key] = value;
      }
      return result;
    }
  }, {
    key: "getSetterByTSType",
    value: function getSetterByTSType(tsType) {
      var typeStr = "".concat(tsType).trim();
      return (0, _flow.default)(this.getNumberSetterByTypes.bind(this), this.getBoolSetterByTypes.bind(this), this.getTextSetterByTypes.bind(this), this.getActionSetterByTypes.bind(this), this.getListSetterByTypes.bind(this), this.getChoiceSetterByTypes.bind(this), this.getSelectSetterByTypes.bind(this), function(type2) {
        return type2 === typeStr ? "JsonSetter" : type2;
      })(typeStr);
    }
  }, {
    key: "getBoolSetterByTypes",
    value: function getBoolSetterByTypes(types) {
      return isBoolTypes(types) ? "BoolSetter" : types;
    }
  }, {
    key: "getNumberSetterByTypes",
    value: function getNumberSetterByTypes(types) {
      return isNumberTypes(types) ? "NumberSetter" : types;
    }
  }, {
    key: "getTextSetterByTypes",
    value: function getTextSetterByTypes(types) {
      return isTextTypes(types) ? "TextSetter" : types;
    }
  }, {
    key: "getActionSetterByTypes",
    value: function getActionSetterByTypes(types) {
      return REGEXP_ISFunction.test(types) ? "ActionSetter" : types;
    }
  }, {
    key: "getListSetterByTypes",
    value: function getListSetterByTypes(typeStr) {
      var _this = this;
      if (REGEXP_ISArray.test(typeStr)) {
        var typeItemStr = typeStr.replace(/\[]$/, "").trim();
        var resultType = this.getObjectTypes(typeItemStr);
        var configure2 = resultType instanceof Object ? Object.entries(resultType).map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], item = _ref4[1];
          return {
            name: key,
            setter: _this.getSetterByTSType(item)
          };
        }) : void 0;
        return {
          uiType: "ListSetter",
          checkField: null,
          configure: configure2
        };
      }
      return typeStr;
    }
  }, {
    key: "getChoiceSetterByTypes",
    value: function getChoiceSetterByTypes(typeStr) {
      if (REGEXP_ISMultipleTypes.test(typeStr) && !isNotEnumTypes(typeStr) && filterQuotaMarkAndUndefined(typeStr).length <= 3) {
        return {
          uiType: "ChoiceSetter",
          options: filterQuotaMarkAndUndefined(typeStr)
        };
      }
      return typeStr;
    }
  }, {
    key: "getSelectSetterByTypes",
    value: function getSelectSetterByTypes(typeStr) {
      if (REGEXP_ISMultipleTypes.test(typeStr) && !isNotEnumTypes(typeStr)) {
        return {
          uiType: "SelectSetter",
          options: typeStr.split("|").map(function(val) {
            return val.replace(/"/g, "").trim();
          }).filter(function(val) {
            return val !== "undefined";
          }).map(function(val) {
            return {
              text: val,
              value: val
            };
          })
        };
      }
      return typeStr;
    }
  }, {
    key: "getDefaultPropByTypes",
    value: function getDefaultPropByTypes(propType) {
      var defaultValue = (0, _get.default)(propType, "defaultValue.value");
      try {
        if (!defaultValue) {
          return defaultValue;
        }
        defaultValue = new Function("global", 'return ("" + '.concat(defaultValue, ') in global ? (""+').concat(defaultValue, ") : ").concat(defaultValue))(commonjsGlobal);
      } catch (e2) {
      }
      return defaultValue;
    }
  }]);
  function VisionSchemaTransfer2(types, options) {
    _classCallCheck(this, VisionSchemaTransfer2);
    this.defaultVisionConfig = void 0;
    this.types = void 0;
    this.blockProps = void 0;
    this.types = types;
    var _ref5 = options || {}, _ref5$defaultConfig = _ref5.defaultConfig, defaultConfig = _ref5$defaultConfig === void 0 ? {} : _ref5$defaultConfig, _ref5$blockProps = _ref5.blockProps, blockProps = _ref5$blockProps === void 0 ? _const.BLOCK_PROPS : _ref5$blockProps;
    this.blockProps = blockProps;
    this.defaultVisionConfig = Object.assign({}, DEFAULT_VISION_CONFIG, defaultConfig);
  }
  _createClass(VisionSchemaTransfer2, [{
    key: "getDefaultProps",
    value: function getDefaultProps() {
      var props = this.types.props;
      return (0, _pickBy.default)(Object.values(props).reduce(function(prev, propType) {
        return Object.assign(prev, _defineProperty({}, propType.name, VisionSchemaTransfer2.getDefaultPropByTypes(propType)));
      }, {}), function(val) {
        return val !== void 0;
      });
    }
  }, {
    key: "mergeActionSetter",
    value: function mergeActionSetter(actionConfigs) {
      var events = [];
      actionConfigs.forEach(function(config) {
        var name = config.name, tip = config.tip;
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
  }, {
    key: "transformTypeSchema",
    value: function transformTypeSchema() {
      var _this2 = this;
      var defaultVisionConfig = this.defaultVisionConfig;
      var _this$types = this.types, displayName = _this$types.displayName, _this$types$props = _this$types.props, props = _this$types$props === void 0 ? {} : _this$types$props, _this$types$tags = _this$types.tags, tags = _this$types$tags === void 0 ? {} : _this$types$tags;
      var isVisionContainer = tags["vision.isContainer"];
      var configure2 = Object.values(props).filter(function(prop) {
        return !_this2.blockProps.includes((0, _get.default)(prop, "name", ""));
      }).map(this.transformProps.bind(this)).filter(Boolean);
      var actionConfig = this.mergeActionSetter(configure2.filter(function(conf) {
        return conf.setter === "ActionSetter";
      }));
      var restConfigs = configure2.filter(function(config) {
        return config.setter !== "ActionSetter" && config;
      });
      var isContainer;
      if (isVisionContainer !== void 0) {
        isContainer = JSON.parse(isVisionContainer);
      } else {
        isContainer = Object.keys(props).includes("elements") || false;
      }
      return Object.assign({}, defaultVisionConfig, {
        componentName: displayName,
        isContainer,
        configure: actionConfig ? [].concat(_toConsumableArray(restConfigs), [actionConfig]) : restConfigs
      });
    }
  }]);
  return VisionSchemaTransfer2;
}();
function buildVisionFromTypes(typeDesc, options) {
  return new VisionSchemaTransfer(typeDesc, options).transformTypeSchema();
}
var typefile = /* @__PURE__ */ Object.defineProperty({
  buildVisionFromTypes: buildVisionFromTypes_1
}, "__esModule", {value: true});
var lib$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _exportNames = {};
  exports.default = void 0;
  Object.keys(utils$1).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get2() {
        return utils$1[key];
      }
    });
  });
  var _default2 = {
    transform: utils$1.transform,
    buildVisionFromTypes: typefile.buildVisionFromTypes
  };
  exports.default = _default2;
});
var VisionTransfer = /* @__PURE__ */ getDefaultExportFromCjs(lib$1);
async function getVisionConfig(componentTypes) {
  const data = VisionTransfer.buildVisionFromTypes(componentTypes);
  return data;
}
var interopRequireDefault = createCommonjsModule(function(module) {
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  module.exports = _interopRequireDefault2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _typeof_1 = createCommonjsModule(function(module) {
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
    return _typeof2(obj);
  }
  module.exports = _typeof2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var interopRequireWildcard = createCommonjsModule(function(module) {
  var _typeof2 = _typeof_1["default"];
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
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
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  module.exports = _interopRequireWildcard;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var DoubleLeftOutlined$2 = {icon: {tag: "svg", attrs: {viewBox: "64 64 896 896", focusable: "false"}, children: [{tag: "path", attrs: {d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]}, name: "double-left", theme: "outlined"};
var _default$1 = DoubleLeftOutlined$2;
var DoubleLeftOutlined_1$1 = /* @__PURE__ */ Object.defineProperty({
  default: _default$1
}, "__esModule", {value: true});
var arrayWithHoles = createCommonjsModule(function(module) {
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  module.exports = _arrayWithHoles2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var iterableToArrayLimit = createCommonjsModule(function(module) {
  function _iterableToArrayLimit2(arr, i) {
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
  module.exports = _iterableToArrayLimit2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var arrayLikeToArray = createCommonjsModule(function(module) {
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
});
var unsupportedIterableToArray = createCommonjsModule(function(module) {
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return arrayLikeToArray(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return arrayLikeToArray(o, minLen);
  }
  module.exports = _unsupportedIterableToArray2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var nonIterableRest = createCommonjsModule(function(module) {
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var slicedToArray = createCommonjsModule(function(module) {
  function _slicedToArray3(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
  }
  module.exports = _slicedToArray3;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var defineProperty$1 = createCommonjsModule(function(module) {
  function _defineProperty2(obj, key, value) {
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
  module.exports = _defineProperty2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var objectWithoutPropertiesLoose = createCommonjsModule(function(module) {
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
});
var objectWithoutProperties = createCommonjsModule(function(module) {
  function _objectWithoutProperties2(source, excluded) {
    if (source == null)
      return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
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
  module.exports = _objectWithoutProperties2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
var _classnames_2_2_6_classnames = createCommonjsModule(function(module) {
  (function() {
    var hasOwn2 = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        } else if (argType === "object") {
          for (var key in arg) {
            if (hasOwn2.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});
var Context = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var IconContext = /* @__PURE__ */ (0, require$$0.createContext)({});
  var _default2 = IconContext;
  exports.default = _default2;
});
var objectSpread2 = createCommonjsModule(function(module) {
  function ownKeys2(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols2 = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols2 = symbols2.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols2);
    }
    return keys2;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys2(Object(source), true).forEach(function(key) {
          defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  module.exports = _objectSpread2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
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
  return {r: r2 * 255, g: g2 * 255, b: b2 * 255};
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
  return {h: h2, s, v: v2};
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
  return {r: r2 * 255, g: g2 * 255, b: b2 * 255};
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
  var rgb = {r: 0, g: 0, b: 0};
  var a = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok2 = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok2 = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v2);
      ok2 = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l2);
      ok2 = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok2,
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
    return {r: 0, g: 0, b: 0, a: 0, format: "name"};
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return {r: match[1], g: match[2], b: match[3]};
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return {r: match[1], g: match[2], b: match[3], a: match[4]};
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return {h: match[1], s: match[2], l: match[3]};
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return {h: match[1], s: match[2], l: match[3], a: match[4]};
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return {h: match[1], s: match[2], v: match[3]};
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return {h: match[1], s: match[2], v: match[3], a: match[4]};
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
function generate(color) {
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
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
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
  generate,
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
var warning_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.warning = warning;
  exports.note = note;
  exports.resetWarned = resetWarned;
  exports.call = call;
  exports.warningOnce = warningOnce;
  exports.noteOnce = noteOnce;
  exports.default = void 0;
  var warned = {};
  function warning(valid, message2) {
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
    call(warning, valid, message2);
  }
  function noteOnce(valid, message2) {
    call(note, valid, message2);
  }
  var _default2 = warningOnce;
  exports.default = _default2;
});
var containers = [];
var styleElements = [];
var usage = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function insertCss(css, options) {
  options = options || {};
  if (css === void 0) {
    throw new Error(usage);
  }
  var position2 = options.prepend === true ? "prepend" : "append";
  var container = options.container !== void 0 ? options.container : document.querySelector("head");
  var containerId = containers.indexOf(container);
  if (containerId === -1) {
    containerId = containers.push(container) - 1;
    styleElements[containerId] = {};
  }
  var styleElement;
  if (styleElements[containerId] !== void 0 && styleElements[containerId][position2] !== void 0) {
    styleElement = styleElements[containerId][position2];
  } else {
    styleElement = styleElements[containerId][position2] = createStyleElement();
    if (position2 === "prepend") {
      container.insertBefore(styleElement, container.childNodes[0]);
    } else {
      container.appendChild(styleElement);
    }
  }
  if (css.charCodeAt(0) === 65279) {
    css = css.substr(1, css.length);
  }
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css;
  } else {
    styleElement.textContent += css;
  }
  return styleElement;
}
function createStyleElement() {
  var styleElement = document.createElement("style");
  styleElement.setAttribute("type", "text/css");
  return styleElement;
}
var _insertCss_2_0_0_insertCss = insertCss;
var insertCss_1 = insertCss;
_insertCss_2_0_0_insertCss.insertCss = insertCss_1;
var _colors = /* @__PURE__ */ getAugmentedNamespace(index_esm);
var utils = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.warning = warning;
  exports.isIconDefinition = isIconDefinition;
  exports.normalizeAttrs = normalizeAttrs;
  exports.generate = generate2;
  exports.getSecondaryColor = getSecondaryColor;
  exports.normalizeTwoToneColors = normalizeTwoToneColors;
  exports.useInsertStyles = exports.iconStyles = exports.svgBaseProps = void 0;
  var _objectSpread2 = interopRequireDefault(objectSpread2);
  var _typeof2 = interopRequireDefault(_typeof_1);
  var _react2 = interopRequireWildcard(require$$0);
  var _warning = interopRequireDefault(warning_1);
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
  function generate2(node, key, rootProps) {
    if (!rootProps) {
      return /* @__PURE__ */ _react2.default.createElement(node.tag, (0, _objectSpread2.default)({
        key
      }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index2) {
        return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
      }));
    }
    return /* @__PURE__ */ _react2.default.createElement(node.tag, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      key
    }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index2) {
      return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
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
  exports.svgBaseProps = svgBaseProps;
  var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
  exports.iconStyles = iconStyles;
  var cssInjectedFlag = false;
  var useInsertStyles = function useInsertStyles2() {
    var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
    (0, _react2.useEffect)(function() {
      if (!cssInjectedFlag) {
        (0, _insertCss_2_0_0_insertCss.insertCss)(styleStr, {
          prepend: true
        });
        cssInjectedFlag = true;
      }
    }, []);
  };
  exports.useInsertStyles = useInsertStyles;
});
var IconBase_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);
  var _objectSpread2 = interopRequireDefault(objectSpread2);
  var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
  };
  function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || (0, utils.getSecondaryColor)(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
  }
  function getTwoToneColors() {
    return (0, _objectSpread2.default)({}, twoToneColorPalette);
  }
  var IconBase = function IconBase2(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = (0, _objectWithoutProperties2.default)(props, ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]);
    var colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || (0, utils.getSecondaryColor)(primaryColor)
      };
    }
    (0, utils.useInsertStyles)();
    (0, utils.warning)((0, utils.isIconDefinition)(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!(0, utils.isIconDefinition)(icon)) {
      return null;
    }
    var target = icon;
    if (target && typeof target.icon === "function") {
      target = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }
    return (0, utils.generate)(target.icon, "svg-".concat(target.name), (0, _objectSpread2.default)({
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
  var _default2 = IconBase;
  exports.default = _default2;
});
var setTwoToneColor_1 = setTwoToneColor;
var getTwoToneColor_1 = getTwoToneColor;
var _slicedToArray2 = interopRequireDefault(slicedToArray);
var _IconBase = interopRequireDefault(IconBase_1);
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = (0, utils.normalizeTwoToneColors)(twoToneColor), _normalizeTwoToneColo2 = (0, _slicedToArray2.default)(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return _IconBase.default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = _IconBase.default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
var twoTonePrimaryColor = /* @__PURE__ */ Object.defineProperty({
  setTwoToneColor: setTwoToneColor_1,
  getTwoToneColor: getTwoToneColor_1
}, "__esModule", {value: true});
var AntdIcon = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _slicedToArray22 = interopRequireDefault(slicedToArray);
  var _defineProperty2 = interopRequireDefault(defineProperty$1);
  var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);
  var React = interopRequireWildcard(require$$0);
  var _classnames = interopRequireDefault(_classnames_2_2_6_classnames);
  var _Context = interopRequireDefault(Context);
  var _IconBase2 = interopRequireDefault(IconBase_1);
  (0, twoTonePrimaryColor.setTwoToneColor)("#1890ff");
  var Icon = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var _classNames;
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = (0, _objectWithoutProperties2.default)(props, ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]);
    var _React$useContext = React.useContext(_Context.default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre;
    var classString = (0, _classnames.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === void 0 && onClick) {
      iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
      msTransform: "rotate(".concat(rotate, "deg)"),
      transform: "rotate(".concat(rotate, "deg)")
    } : void 0;
    var _normalizeTwoToneColo = (0, utils.normalizeTwoToneColors)(twoToneColor), _normalizeTwoToneColo2 = (0, _slicedToArray22.default)(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /* @__PURE__ */ React.createElement("span", Object.assign({
      role: "img",
      "aria-label": icon.name
    }, restProps, {
      ref,
      tabIndex: iconTabIndex,
      onClick,
      className: classString
    }), /* @__PURE__ */ React.createElement(_IconBase2.default, {
      icon,
      primaryColor,
      secondaryColor,
      style: svgStyle
    }));
  });
  Icon.displayName = "AntdIcon";
  Icon.getTwoToneColor = twoTonePrimaryColor.getTwoToneColor;
  Icon.setTwoToneColor = twoTonePrimaryColor.setTwoToneColor;
  var _default2 = Icon;
  exports.default = _default2;
});
var DoubleLeftOutlined_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var React = interopRequireWildcard(require$$0);
  var _DoubleLeftOutlined = interopRequireDefault(DoubleLeftOutlined_1$1);
  var _AntdIcon = interopRequireDefault(AntdIcon);
  var DoubleLeftOutlined2 = function DoubleLeftOutlined3(props, ref) {
    return /* @__PURE__ */ React.createElement(_AntdIcon.default, Object.assign({}, props, {
      ref,
      icon: _DoubleLeftOutlined.default
    }));
  };
  DoubleLeftOutlined2.displayName = "DoubleLeftOutlined";
  var _default2 = /* @__PURE__ */ React.forwardRef(DoubleLeftOutlined2);
  exports.default = _default2;
});
var DoubleLeftOutlined = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _DoubleLeftOutlined = _interopRequireDefault2(DoubleLeftOutlined_1);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var _default2 = _DoubleLeftOutlined;
  exports.default = _default2;
  module.exports = _default2;
});
var DoubleLeftOutlined$1 = /* @__PURE__ */ getDefaultExportFromCjs(DoubleLeftOutlined);
var CloseOutlined$2 = {icon: {tag: "svg", attrs: {viewBox: "64 64 896 896", focusable: "false"}, children: [{tag: "path", attrs: {d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]}, name: "close", theme: "outlined"};
var _default = CloseOutlined$2;
var CloseOutlined_1$1 = /* @__PURE__ */ Object.defineProperty({
  default: _default
}, "__esModule", {value: true});
var CloseOutlined_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var React = interopRequireWildcard(require$$0);
  var _CloseOutlined = interopRequireDefault(CloseOutlined_1$1);
  var _AntdIcon = interopRequireDefault(AntdIcon);
  var CloseOutlined2 = function CloseOutlined3(props, ref) {
    return /* @__PURE__ */ React.createElement(_AntdIcon.default, Object.assign({}, props, {
      ref,
      icon: _CloseOutlined.default
    }));
  };
  CloseOutlined2.displayName = "CloseOutlined";
  var _default2 = /* @__PURE__ */ React.forwardRef(CloseOutlined2);
  exports.default = _default2;
});
var CloseOutlined = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _CloseOutlined = _interopRequireDefault2(CloseOutlined_1);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var _default2 = _CloseOutlined;
  exports.default = _default2;
  module.exports = _default2;
});
var CloseOutlined$1 = /* @__PURE__ */ getDefaultExportFromCjs(CloseOutlined);
var index$5 = ".vision-property-container {\n  position: relative;\n  z-index: 999;\n}\n@media screen and (max-width: 750px) {\n  .vision-property-container {\n    position: fixed;\n    z-index: 3;\n    height: 100vh;\n    right: 0;\n    top: 0;\n  }\n}\n.vision-property-container .ant-drawer-header {\n  border-bottom: 0;\n}\n.vision-property-container .ant-drawer-title {\n  display: flex;\n  align-items: center;\n}\n.vision-property-container .ant-drawer-wrapper-body {\n  margin-left: 15px;\n  height: 100%;\n  width: 300px;\n}\n.vision-property-container .ant-drawer-wrapper-body > div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.vision-property-container .ant-drawer-wrapper-body .ant-drawer-body {\n  position: relative;\n  flex: 1;\n}\n.vision-property-container .vision-title-icon {\n  width: 1.2em;\n  margin-right: 0.3em;\n}\n.vision-property-container .icon-vision-property-show {\n  position: fixed;\n  top: 20px;\n  right: 30px;\n}";
const PANE_VISIBLE = "pane_visible";
const {Bundle, Node, ui} = window.VisualEngine;
const {Button} = window.antd;
class VisionPane extends modules$1.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      propertyDrawerShow: false,
      prototypeOptions: null
    };
    this.setPropertyDrawerShow = (visible) => {
      localStorage.setItem(PANE_VISIBLE, `${+visible}`);
      this.setState({propertyDrawerShow: visible});
    };
    const localStoryValue = +localStorage.getItem(PANE_VISIBLE);
    this.state.propertyDrawerShow = localStoryValue !== void 0 ? !!localStoryValue : true;
    this.init();
  }
  init() {
    const props = this.props;
    getVisionConfig(props.properties).then((prototypeOptions) => {
      this.prototype = Bundle.createPrototype(lib$1.transform(prototypeOptions));
      this.visionNode = new Node(null, this.prototype);
      const props2 = this.visionNode.getProps();
      this.props.defaultProps && Object.entries(this.props.defaultProps).forEach(([key, value]) => props2.setPropValue(key, value));
      const propItems = props2.getRealItems();
      this.setState({prototypeOptions});
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
    const {propertyDrawerShow, prototypeOptions} = this.state;
    const {properties} = this.props;
    if (!properties || !prototypeOptions) {
      return null;
    }
    const node = this.visionNode;
    const props = node.getProps();
    const stage = props.stage;
    const icon = node.getIcon();
    const title = prototypeOptions.title;
    const {Stage} = ui.Field;
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
    }, /* @__PURE__ */ modules$1.createElement(CloseOutlined$1, null))), /* @__PURE__ */ modules$1.createElement("div", {
      className: "ant-drawer-body"
    }, /* @__PURE__ */ modules$1.createElement(Stage, {
      stage
    })))) : /* @__PURE__ */ modules$1.createElement("div", {
      className: "icon-vision-property-show",
      onClick: () => this.setPropertyDrawerShow(true)
    }, /* @__PURE__ */ modules$1.createElement(Button, null, /* @__PURE__ */ modules$1.createElement(DoubleLeftOutlined$1, null), "Vision \u9762\u677F"))) : null;
  }
}
var index$4 = "#public-component-show-container {\n  display: flex;\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  background: #f2f3f7;\n  padding: 20px;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n#public-component-show-container .component-main {\n  position: relative;\n  display: flex;\n}\n#public-component-show-container .component-part {\n  flex: 1;\n  overflow: auto;\n}\n#public-component-show-container .component-name {\n  padding: 0;\n  border: 0;\n  margin: 0;\n  font-size: 3.5em;\n  font-weight: 800;\n  outline: 0;\n  vertical-align: baseline;\n  line-height: 1.2;\n}\n#public-component-show-container .component-sub-title {\n  font-size: 1em;\n  font-weight: 600;\n  vertical-align: baseline;\n  margin-bottom: 8px;\n  display: block;\n  color: #6f6f6f;\n}\n#public-component-show-container .component-sub-title > span {\n  margin-right: 1em;\n}\n#public-component-show-container .component-block {\n  background: #fff;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 1px #ccc solid;\n  border-bottom: unset;\n  border-top: unset;\n}\n#public-component-show-container .component-block:first-child {\n  border-radius: 7px 7px 0 0;\n  border-top: 1px #ccc solid;\n}\n#public-component-show-container .component-block:last-child {\n  border-radius: 0 0 7px 7px;\n  border-bottom: 1px #ccc solid;\n}\n#public-component-show-container .component-block:first-child:last-child {\n  border-radius: 7px;\n  border: 1px #ccc solid;\n}\n#public-component-show-container .component-container {\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#public-component-show-container .component-description {\n  border-top: 1px solid #eee;\n  font-size: 14px;\n  padding: 20px;\n}\n#public-component-show-container .component-description > .block-title {\n  font-size: 1.3em;\n  display: block;\n  line-height: 2;\n}\n#public-component-show-container .component-description > code {\n  border: 1px solid #e7e9ed;\n  background-color: #f8fafc;\n  display: block;\n  padding: 5px 10px;\n  margin: 5px 0;\n  word-break: break-all;\n  word-wrap: break-word;\n  border-radius: 2px;\n  color: #5b6169;\n  font-size: 13px;\n  line-height: 1.6em;\n}\n#public-component-show-container .ant-tabs-bottom .ant-tabs-bottom-bar {\n  margin-top: 0;\n}\n#public-component-show-container .ant-tabs-nav .ant-tabs-tab {\n  margin: 0;\n}\n#public-component-show-container .ant-tabs .ant-tabs-small-bar .ant-tabs-tab {\n  padding: 8px 16px;\n}\n@media screen and (max-width: 750px) {\n  #public-component-show-container {\n    padding: 20px 0;\n  }\n  #public-component-show-container .component-block {\n    border-radius: 0 !important;\n  }\n}";
let scriptRel;
const seen = {};
const __vitePreload = function preload(baseModule, deps) {
  if (!deps) {
    return baseModule();
  }
  if (scriptRel === void 0) {
    const relList = document.createElement("link").relList;
    scriptRel = relList && relList.supports && relList.supports("modulepreload") ? "modulepreload" : "preload";
  }
  return Promise.all(deps.map((dep) => {
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const queryRE = /\?.*$/;
const hashRE = /#.*$/;
const cleanUrl = (url) => url.replace(hashRE, "").replace(queryRE, "");
const addUrlParams = (url, params) => {
  const paramsStr = Object.entries(params).reduce((previousValue, [key, val]) => previousValue + val ? `${key}=${val}` : "", "");
  if (!paramsStr) {
    return url;
  }
  return /[?|&]/.test(url) ? `${url}&${paramsStr}` : `${url}?${paramsStr}`;
};
const lscWindowConfig = {
  route: window["pageConfig"].route
};
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    var value = array[index2];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
var _arrayAggregator = arrayAggregator;
function createBaseFor(fromRight) {
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
var _createBaseFor = createBaseFor;
var baseFor = _createBaseFor();
var _baseFor = baseFor;
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}
var _baseForOwn = baseForOwn;
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
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
var _createBaseEach = createBaseEach;
var baseEach = _createBaseEach(_baseForOwn);
var _baseEach = baseEach;
function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee(value), collection2);
  });
  return accumulator;
}
var _baseAggregator = baseAggregator;
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayAggregator : _baseAggregator, accumulator = initializer ? initializer() : {};
    return func(collection, setter, _baseIteratee(iteratee), accumulator);
  };
}
var _createAggregator = createAggregator;
var keyBy = _createAggregator(function(result, value, key) {
  _baseAssignValue(result, key, value);
});
var keyBy_1 = keyBy;
let dom;
const runEsModuleCode = (code) => {
  if (!!dom) {
    dom.remove();
  }
  const scriptDom = document.createElement("script");
  scriptDom.setAttribute("type", "module");
  dom = scriptDom;
  document.body.append(scriptDom);
  dom.innerHTML = code;
};
const isJsx = (lang) => /^[j|t]sx$/.test(lang);
const isCSSLang = (lang) => /^(css|less|sass|scss|styl|stylus|postcss)$/.test(lang);
const {route} = lscWindowConfig;
const registryMap = {};
const registryHashMap = {};
function addRegistry(p2, fn) {
  if (!registryMap[p2]) {
    registryMap[p2] = [];
  }
  registryMap[p2].push(fn);
}
if (import_meta["hot"]) {
  import_meta["hot"].on("packages-update", (payload) => {
    const {url} = payload, restPayload = __rest(payload, ["url"]);
    if (url in registryMap) {
      console.log(`[vite] hot updated: ${url}`);
      registryMap[url].forEach((fn) => {
        registryHashMap[url] = restPayload;
        fn(restPayload);
      });
    }
  });
}
class ModuleLoadError extends Error {
}
function useAsyncImport(path, cb = ({default: Comp}) => Comp) {
  const [Module, setModule] = useState();
  const [params, update] = useState({});
  useMemo(async () => {
    const paths = Array.isArray(path) ? path : [path];
    try {
      const result = await Promise.all(paths.map((p2) => {
        addRegistry(cleanUrl(p2), update);
        const hashParams = registryHashMap[p2] || {};
        return __vitePreload(() => import(
          /* @vite-ignore */
          addUrlParams(p2, hashParams)
        ), true ? void 0 : void 0);
      }));
      const Comp = cb(Array.isArray(path) ? result : result[0]);
      setModule(() => Comp);
    } catch (e2) {
      setModule({
        error: new ModuleLoadError([
          `Please make sure follow files exist in your project`,
          ...paths.map((path2) => `   -  ${path2}`)
        ].join("\n"))
      });
    }
  }, [params]);
  return Module;
}
function useRealComponent() {
  return useAsyncImport(`${route}/index.tsx`);
}
function useTypeFile() {
  return useAsyncImport(`${route}/index.tsx.type.json`, ({default: properties}) => {
    const {default: compProps} = keyBy_1(properties, "exportName");
    return compProps;
  });
}
function useComponentInfo() {
  return useAsyncImport(`/package.json?import`, ({default: packageInfo}) => {
    return {
      packageName: packageInfo.name,
      packageVersion: packageInfo.version
    };
  });
}
const RendererContext = createContext({
  setRenderIndex: () => {
  }
});
let moduleMaps = {};
function useMarkdown() {
  var _a, _b;
  const {renderIndex, setRenderIndex} = useContext(RendererContext);
  const results = useAsyncImport(/\.md$/.test(location.pathname) ? location.pathname : `${route}/README.md`, ({default: packageInfo}) => {
    return packageInfo;
  });
  if (results == null ? void 0 : results.error) {
    return results;
  }
  let moduleMap = moduleMaps[results == null ? void 0 : results.hash];
  if (!moduleMap && results) {
    const styleModules = results.modules.filter(({lang}) => isCSSLang(lang));
    moduleMap = results.modules.reduce((previousValue, currentValue) => {
      if (!isJsx(currentValue.lang)) {
        return previousValue;
      }
      return Object.assign(previousValue, {
        [currentValue.sourcesContent.trim()]: () => {
          runEsModuleCode(currentValue.code);
          styleModules.forEach((mod) => {
            runEsModuleCode(mod.code);
          });
        }
      });
    }, {});
    moduleMaps = {[results.hash]: moduleMap};
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
var index$3 = ".component-block > .ant-affix {\n  background: #fff;\n  border-radius: 0 0 6px 6px;\n  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.1);\n  border: 1px solid #eee;\n}";
const {Result} = window["antd"];
function ComponentArea(props) {
  const {componentProps, onSetDefaultProps} = props;
  const componentRef = useRef();
  const Components = useMarkdown();
  const invoked = useRef(false);
  const wrapProps = useCallback((Component2, {React: OutReact}) => (props2) => {
    if (!invoked.current) {
      onSetDefaultProps && onSetDefaultProps(props2);
      invoked.current = true;
    }
    const finalProps = Object.assign({}, props2, componentProps);
    return OutReact.createElement(Component2, finalProps);
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
      style: {whiteSpace: "pre-wrap", textAlign: "left"}
    }, Components == null ? void 0 : Components.error.message)
  }) : /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-container code-box-demo",
    ref: componentRef
  }));
}
var immutable = extend;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function extend() {
  var target = {};
  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (hasOwnProperty$1.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
var _bail_1_0_5_bail = bail;
function bail(err) {
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
var _isBuffer_2_0_5_isBuffer = function isBuffer(obj) {
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
var _extend_3_0_2_extend = function extend2() {
  var options, name, src, copy, copyIsArray, clone;
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
        copy = getProperty(options, name);
        if (target !== copy) {
          if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            }
            setProperty(target, {name, newValue: extend2(deep, clone, copy)});
          } else if (typeof copy !== "undefined") {
            setProperty(target, {name, newValue: copy});
          }
        }
      }
    }
  }
  return target;
};
var _isPlainObj_2_1_0_isPlainObj = (value) => {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
};
var slice$2 = [].slice;
var wrap_1 = wrap$1;
function wrap$1(fn, callback) {
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
var _trough_1_0_5_trough = trough;
trough.wrap = wrap_1;
var slice$1 = [].slice;
function trough() {
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
        wrap_1(fn, next).apply(null, input);
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
var own$3 = {}.hasOwnProperty;
var _unistUtilStringifyPosition_2_0_3_unistUtilStringifyPosition = stringify;
function stringify(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if (own$3.call(value, "position") || own$3.call(value, "type")) {
    return position(value.position);
  }
  if (own$3.call(value, "start") || own$3.call(value, "end")) {
    return position(value);
  }
  if (own$3.call(value, "line") || own$3.call(value, "column")) {
    return point(value);
  }
  return "";
}
function point(point2) {
  if (!point2 || typeof point2 !== "object") {
    point2 = {};
  }
  return index$2(point2.line) + ":" + index$2(point2.column);
}
function position(pos) {
  if (!pos || typeof pos !== "object") {
    pos = {};
  }
  return point(pos.start) + "-" + point(pos.end);
}
function index$2(value) {
  return value && typeof value === "number" ? value : 1;
}
var _vfileMessage_2_0_4_vfileMessage = VMessage;
function VMessagePrototype() {
}
VMessagePrototype.prototype = Error.prototype;
VMessage.prototype = new VMessagePrototype();
var proto = VMessage.prototype;
proto.file = "";
proto.name = "";
proto.reason = "";
proto.message = "";
proto.stack = "";
proto.fatal = null;
proto.column = null;
proto.line = null;
function VMessage(reason, position2, origin) {
  var parts;
  var range;
  var location2;
  if (typeof position2 === "string") {
    origin = position2;
    position2 = null;
  }
  parts = parseOrigin(origin);
  range = _unistUtilStringifyPosition_2_0_3_unistUtilStringifyPosition(position2) || "1:1";
  location2 = {
    start: {line: null, column: null},
    end: {line: null, column: null}
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
var basename_1 = basename;
var dirname_1 = dirname;
var extname_1 = extname;
var join_1 = join;
var sep = "/";
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
var minpath_browser = {
  basename: basename_1,
  dirname: dirname_1,
  extname: extname_1,
  join: join_1,
  sep
};
var cwd_1 = cwd;
function cwd() {
  return "/";
}
var minproc_browser = {
  cwd: cwd_1
};
var core = VFile;
var own$2 = {}.hasOwnProperty;
var order = ["history", "path", "basename", "stem", "extname", "dirname"];
VFile.prototype.toString = toString$1;
Object.defineProperty(VFile.prototype, "path", {get: getPath, set: setPath});
Object.defineProperty(VFile.prototype, "dirname", {
  get: getDirname,
  set: setDirname
});
Object.defineProperty(VFile.prototype, "basename", {
  get: getBasename,
  set: setBasename
});
Object.defineProperty(VFile.prototype, "extname", {
  get: getExtname,
  set: setExtname
});
Object.defineProperty(VFile.prototype, "stem", {get: getStem, set: setStem});
function VFile(options) {
  var prop;
  var index2;
  if (!options) {
    options = {};
  } else if (typeof options === "string" || _isBuffer_2_0_5_isBuffer(options)) {
    options = {contents: options};
  } else if ("message" in options && "messages" in options) {
    return options;
  }
  if (!(this instanceof VFile)) {
    return new VFile(options);
  }
  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = minproc_browser.cwd();
  index2 = -1;
  while (++index2 < order.length) {
    prop = order[index2];
    if (own$2.call(options, prop)) {
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
  return typeof this.path === "string" ? minpath_browser.dirname(this.path) : void 0;
}
function setDirname(dirname2) {
  assertPath(this.path, "dirname");
  this.path = minpath_browser.join(dirname2 || "", this.basename);
}
function getBasename() {
  return typeof this.path === "string" ? minpath_browser.basename(this.path) : void 0;
}
function setBasename(basename2) {
  assertNonEmpty(basename2, "basename");
  assertPart(basename2, "basename");
  this.path = minpath_browser.join(this.dirname || "", basename2);
}
function getExtname() {
  return typeof this.path === "string" ? minpath_browser.extname(this.path) : void 0;
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
  this.path = minpath_browser.join(this.dirname, this.stem + (extname2 || ""));
}
function getStem() {
  return typeof this.path === "string" ? minpath_browser.basename(this.path, this.extname) : void 0;
}
function setStem(stem) {
  assertNonEmpty(stem, "stem");
  assertPart(stem, "stem");
  this.path = minpath_browser.join(this.dirname || "", stem + (this.extname || ""));
}
function toString$1(encoding) {
  return (this.contents || "").toString(encoding);
}
function assertPart(part, name) {
  if (part && part.indexOf(minpath_browser.sep) > -1) {
    throw new Error("`" + name + "` cannot be a path: did not expect `" + minpath_browser.sep + "`");
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
var lib = core;
core.prototype.message = message;
core.prototype.info = info;
core.prototype.fail = fail;
function message(reason, position2, origin) {
  var message2 = new _vfileMessage_2_0_4_vfileMessage(reason, position2, origin);
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
var _vfile_4_2_1_vfile = lib;
var _unified_9_2_1_unified = unified().freeze();
var slice = [].slice;
var own$1 = {}.hasOwnProperty;
var pipeline = _trough_1_0_5_trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
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
  else if (typeof result === "string" || _isBuffer_2_0_5_isBuffer(result)) {
    ctx.file.contents = result;
  } else {
    ctx.file.result = result;
  }
}
function unified() {
  var attachers = [];
  var transformers = _trough_1_0_5_trough();
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
    var destination = unified();
    var index2 = -1;
    while (++index2 < attachers.length) {
      destination.use.apply(null, attachers[index2]);
    }
    destination.data(_extend_3_0_2_extend(true, {}, namespace));
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
      return own$1.call(namespace, key) && namespace[key] || null;
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
      namespace.settings = _extend_3_0_2_extend(namespace.settings || {}, settings);
    }
    return processor;
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = _extend_3_0_2_extend(settings || {}, result.settings);
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
        if (_isPlainObj_2_1_0_isPlainObj(entry[1]) && _isPlainObj_2_1_0_isPlainObj(value2)) {
          value2 = _extend_3_0_2_extend(true, entry[1], value2);
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
    var file = _vfile_4_2_1_vfile(doc);
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
      transformers.run(node, _vfile_4_2_1_vfile(file), done);
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
      _bail_1_0_5_bail(error);
    }
  }
  function stringify2(node, doc) {
    var file = _vfile_4_2_1_vfile(doc);
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
      var file = _vfile_4_2_1_vfile(doc);
      pipeline.run(processor, {file}, done);
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
    file = _vfile_4_2_1_vfile(doc);
    process(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      _bail_1_0_5_bail(error);
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
var _mdastUtilToString_2_0_0_mdastUtilToString = toString;
function toString(node) {
  return node && (node.value || node.alt || node.title || "children" in node && all(node.children) || "length" in node && all(node)) || "";
}
function all(values) {
  var result = [];
  var index2 = -1;
  while (++index2 < values.length) {
    result[index2] = toString(values[index2]);
  }
  return result.join("");
}
var assign = Object.assign;
var assign_1 = assign;
var own = {}.hasOwnProperty;
var hasOwnProperty = own;
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var normalizeIdentifier_1 = normalizeIdentifier;
var fromCharCode = String.fromCharCode;
var fromCharCode_1 = fromCharCode;
function safeFromInt(value, base) {
  var code = parseInt(value, base);
  if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) {
    return "\uFFFD";
  }
  return fromCharCode_1(code);
}
var safeFromInt_1 = safeFromInt;
function markdownLineEnding(code) {
  return code < -2;
}
var markdownLineEnding_1 = markdownLineEnding;
function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32;
}
var markdownSpace_1 = markdownSpace;
function spaceFactory(effects, ok2, type2, max) {
  var limit = max ? max - 1 : Infinity;
  var size = 0;
  return start;
  function start(code) {
    if (markdownSpace_1(code)) {
      effects.enter(type2);
      return prefix(code);
    }
    return ok2(code);
  }
  function prefix(code) {
    if (markdownSpace_1(code) && size++ < limit) {
      effects.consume(code);
      return prefix;
    }
    effects.exit(type2);
    return ok2(code);
  }
}
var factorySpace = spaceFactory;
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
    return factorySpace(effects, contentStart, "linePrefix");
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
    if (markdownLineEnding_1(code)) {
      effects.consume(code);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code);
    return data;
  }
}
var tokenize_1$2 = tokenize$2;
var content$1 = /* @__PURE__ */ Object.defineProperty({
  tokenize: tokenize_1$2
}, "__esModule", {value: true});
var partialBlankLine = {
  tokenize: tokenizePartialBlankLine,
  partial: true
};
function tokenizePartialBlankLine(effects, ok2, nok) {
  return factorySpace(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code) {
    return code === null || markdownLineEnding_1(code) ? ok2(code) : nok(code);
  }
}
var partialBlankLine_1 = partialBlankLine;
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
    if (markdownLineEnding_1(code)) {
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
        return effects2.attempt(containerConstruct, inspectFlowEnd, effects2.attempt(lazyFlowConstruct, inspectFlowEnd, effects2.check(partialBlankLine_1, inspectFlowEnd, inspectLazy)))(code);
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
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
}
function tokenizeLazyFlow(effects, ok2, nok) {
  return factorySpace(effects, effects.lazy(this.parser.constructs.flow, ok2, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
}
var tokenize_1$1 = tokenize$1;
var document$2 = /* @__PURE__ */ Object.defineProperty({
  tokenize: tokenize_1$1
}, "__esModule", {value: true});
function sizeChunks(chunks) {
  var index2 = -1;
  var size = 0;
  while (++index2 < chunks.length) {
    size += typeof chunks[index2] === "string" ? chunks[index2].length : 1;
  }
  return size;
}
var sizeChunks_1 = sizeChunks;
function prefixSize(events, type2) {
  var tail = events[events.length - 1];
  if (!tail || tail[1].type !== type2)
    return 0;
  return sizeChunks_1(tail[2].sliceStream(tail[1]));
}
var prefixSize_1 = prefixSize;
var splice$1 = [].splice;
var splice_1 = splice$1;
function chunkedSplice(list2, start, remove, items) {
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
    splice_1.apply(list2, parameters);
  } else {
    if (remove)
      splice_1.apply(list2, [start, remove]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      splice_1.apply(list2, parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
var chunkedSplice_1 = chunkedSplice;
function shallow(object) {
  return assign_1({}, object);
}
var shallow_1 = shallow;
function subtokenize(events) {
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
        assign_1(jumps, subcontent(events, index2));
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
        event[1].end = shallow_1(events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        chunkedSplice_1(events, lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  var token = events[eventIndex][1];
  var context = events[eventIndex][2];
  var startPosition = eventIndex - 1;
  var startPositions = [];
  var tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
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
      stream = context.sliceStream(token);
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
    chunkedSplice_1(events, start, 2, slice2);
  }
}
var subtokenize_1 = subtokenize;
var content = {
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
  subtokenize_1(events);
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
    if (markdownLineEnding_1(code)) {
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
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code) {
    if (code === null || markdownLineEnding_1(code)) {
      return nok(code);
    }
    if (self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 || prefixSize_1(self2.events, "linePrefix") < 4) {
      return effects.interrupt(self2.parser.constructs.flow, nok, ok2)(code);
    }
    return ok2(code);
  }
}
var content_1 = content;
var tokenize = initializeFlow;
function initializeFlow(effects) {
  var self2 = this;
  var initial = effects.attempt(partialBlankLine_1, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content_1, afterConstruct)), "linePrefix")));
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
var tokenize_1 = tokenize;
var flow$1 = /* @__PURE__ */ Object.defineProperty({
  tokenize: tokenize_1
}, "__esModule", {value: true});
var text$1 = initializeFactory("text");
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
  function resolveAllText(events, context) {
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
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
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
      chunks = context.sliceStream(data);
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
          end: shallow_1(data.end)
        };
        data.end = shallow_1(token.start);
        if (data.start.offset === data.end.offset) {
          assign_1(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}
var resolver_1 = resolver;
var string_1$1 = string$1;
var text_2 = text$1;
var text_1$1 = /* @__PURE__ */ Object.defineProperty({
  resolver: resolver_1,
  string: string_1$1,
  text: text_2
}, "__esModule", {value: true});
function miniflat(value) {
  return value === null || value === void 0 ? [] : "length" in value ? value : [value];
}
var miniflat_1 = miniflat;
function combineExtensions(extensions) {
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
      left[code] = constructs$1(miniflat_1(right[code]), hasOwnProperty.call(left, code) ? left[code] : []);
    }
  }
}
function constructs$1(list2, existing) {
  var index2 = -1;
  var before = [];
  while (++index2 < list2.length) {
    (list2[index2].add === "after" ? existing : before).push(list2[index2]);
  }
  chunkedSplice_1(existing, 0, 0, before);
  return existing;
}
var combineExtensions_1 = combineExtensions;
function chunkedPush(list2, items) {
  if (list2.length) {
    chunkedSplice_1(list2, list2.length, 0, items);
    return list2;
  }
  return items;
}
var chunkedPush_1 = chunkedPush;
function resolveAll(constructs2, events, context) {
  var called = [];
  var index2 = -1;
  var resolve;
  while (++index2 < constructs2.length) {
    resolve = constructs2[index2].resolveAll;
    if (resolve && called.indexOf(resolve) < 0) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
var resolveAll_1 = resolveAll;
function serializeChunks(chunks) {
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
      value = fromCharCode_1(chunk);
    }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}
var serializeChunks_1 = serializeChunks;
function sliceChunks(chunks, token) {
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
var sliceChunks_1 = sliceChunks;
function createTokenizer(parser, initialize, from) {
  var point2 = from ? shallow_1(from) : {
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
  var context = {
    previous: null,
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip: skip,
    write
  };
  var state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  point2._index = 0;
  point2._bufferIndex = -1;
  return context;
  function write(slice2) {
    chunks = chunkedPush_1(chunks, slice2);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll_1(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token) {
    return serializeChunks_1(sliceStream(token));
  }
  function sliceStream(token) {
    return sliceChunks_1(chunks, token);
  }
  function now() {
    return shallow_1(point2);
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
    if (markdownLineEnding_1(code)) {
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
    context.previous = code;
  }
  function enter(type2, fields) {
    var token = fields || {};
    token.type = type2;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit2(type2) {
    var token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
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
      return constructs2.tokenize || "length" in constructs2 ? handleListOfConstructs(miniflat_1(constructs2)) : handleMapOfConstructs;
      function handleMapOfConstructs(code) {
        if (code in constructs2 || null in constructs2) {
          return handleListOfConstructs(constructs2.null ? miniflat_1(constructs2[code]).concat(miniflat_1(constructs2.null)) : constructs2[code])(code);
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
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.indexOf(construct.name) > -1) {
            return nok();
          }
          return construct.tokenize.call(fields ? assign_1({}, context, fields) : context, effects, ok2, nok)(code);
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
      chunkedSplice_1(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    var startPoint = now();
    var startPrevious = context.previous;
    var startCurrentConstruct = context.currentConstruct;
    var startEventsIndex = context.events.length;
    var startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point2 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
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
var createTokenizer_1 = createTokenizer;
function markdownLineEndingOrSpace(code) {
  return code < 0 || code === 32;
}
var markdownLineEndingOrSpace_1 = markdownLineEndingOrSpace;
var unicodePunctuation$1 = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var unicodePunctuationRegex = unicodePunctuation$1;
function regexCheck(regex) {
  return check;
  function check(code) {
    return regex.test(fromCharCode_1(code));
  }
}
var regexCheck_1 = regexCheck;
var unicodePunctuation = regexCheck_1(unicodePunctuationRegex);
var unicodePunctuation_1 = unicodePunctuation;
var unicodeWhitespace = regexCheck_1(/\s/);
var unicodeWhitespace_1 = unicodeWhitespace;
function classifyCharacter(code) {
  if (code === null || markdownLineEndingOrSpace_1(code) || unicodeWhitespace_1(code)) {
    return 1;
  }
  if (unicodePunctuation_1(code)) {
    return 2;
  }
}
var classifyCharacter_1 = classifyCharacter;
function movePoint(point2, offset) {
  point2.column += offset;
  point2.offset += offset;
  point2._bufferIndex += offset;
  return point2;
}
var movePoint_1 = movePoint;
var attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
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
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: movePoint_1(shallow_1(events[open][1].end), -use),
            end: shallow_1(events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: shallow_1(events[index2][1].start),
            end: movePoint_1(shallow_1(events[index2][1].start), use)
          };
          text2 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: shallow_1(events[open][1].end),
            end: shallow_1(events[index2][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: shallow_1(openingSequence.start),
            end: shallow_1(closingSequence.end)
          };
          events[open][1].end = shallow_1(openingSequence.start);
          events[index2][1].start = shallow_1(closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = chunkedPush_1(nextEvents, [
              ["enter", events[open][1], context],
              ["exit", events[open][1], context]
            ]);
          }
          nextEvents = chunkedPush_1(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text2, context]
          ]);
          nextEvents = chunkedPush_1(nextEvents, resolveAll_1(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
          nextEvents = chunkedPush_1(nextEvents, [
            ["exit", text2, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = chunkedPush_1(nextEvents, [
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context]
            ]);
          } else {
            offset = 0;
          }
          chunkedSplice_1(events, open - 1, index2 - open + 3, nextEvents);
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
  var before = classifyCharacter_1(this.previous);
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
    after = classifyCharacter_1(code);
    open = !after || after === 2 && before;
    close = !before || before === 2 && after;
    token._open = marker === 42 ? open : open && (before || !close);
    token._close = marker === 42 ? close : close && (after || !open);
    return ok2(code);
  }
}
var attention_1 = attention;
var asciiAlpha = regexCheck_1(/[A-Za-z]/);
var asciiAlpha_1 = asciiAlpha;
var asciiAlphanumeric = regexCheck_1(/[\dA-Za-z]/);
var asciiAlphanumeric_1 = asciiAlphanumeric;
var asciiAtext = regexCheck_1(/[#-'*+\--9=?A-Z^-~]/);
var asciiAtext_1 = asciiAtext;
function asciiControl(code) {
  return code < 32 || code === 127;
}
var asciiControl_1 = asciiControl;
var autolink = {
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
    if (asciiAlpha_1(code)) {
      effects.consume(code);
      return schemeOrEmailAtext;
    }
    return asciiAtext_1(code) ? emailAtext(code) : nok(code);
  }
  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric_1(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
  }
  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      return urlInside;
    }
    if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric_1(code)) && size++ < 32) {
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
    if (code === 32 || code === 60 || asciiControl_1(code)) {
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
    if (asciiAtext_1(code)) {
      effects.consume(code);
      return emailAtext;
    }
    return nok(code);
  }
  function emailAtSignOrDot(code) {
    return asciiAlphanumeric_1(code) ? emailLabel(code) : nok(code);
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
    if ((code === 45 || asciiAlphanumeric_1(code)) && size++ < 63) {
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
var autolink_1 = autolink;
var blockQuote = {
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
    if (markdownSpace_1(code)) {
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
  return factorySpace(effects, effects.attempt(blockQuote, ok2, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
}
function exit(effects) {
  effects.exit("blockQuote");
}
var blockQuote_1 = blockQuote;
var asciiPunctuation = regexCheck_1(/[!-/:-@[-`{-~]/);
var asciiPunctuation_1 = asciiPunctuation;
var characterEscape = {
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
    if (asciiPunctuation_1(code)) {
      effects.enter("characterEscapeValue");
      effects.consume(code);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok2;
    }
    return nok(code);
  }
}
var characterEscape_1 = characterEscape;
var el;
var semicolon = 59;
var decodeEntity_browser = decodeEntity;
function decodeEntity(characters) {
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
var asciiDigit = regexCheck_1(/\d/);
var asciiDigit_1 = asciiDigit;
var asciiHexDigit = regexCheck_1(/[\dA-Fa-f]/);
var asciiHexDigit_1 = asciiHexDigit;
function _interopDefaultLegacy(e2) {
  return e2 && typeof e2 === "object" && "default" in e2 ? e2 : {default: e2};
}
var decodeEntity__default = /* @__PURE__ */ _interopDefaultLegacy(decodeEntity_browser);
var characterReference = {
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
    test = asciiAlphanumeric_1;
    return value(code);
  }
  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit_1;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit_1;
    return value(code);
  }
  function value(code) {
    var token;
    if (code === 59 && size) {
      token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric_1 && !decodeEntity__default["default"](self2.sliceSerialize(token))) {
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
var characterReference_1 = characterReference;
var codeFenced = {
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
  var initialPrefix = prefixSize_1(this.events, "linePrefix");
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
    return sizeOpen < 3 ? nok(code) : factorySpace(effects, infoOpen, "whitespace")(code);
  }
  function infoOpen(code) {
    if (code === null || markdownLineEnding_1(code)) {
      return openAfter(code);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info2(code);
  }
  function info2(code) {
    if (code === null || markdownLineEndingOrSpace_1(code)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, infoAfter, "whitespace")(code);
    }
    if (code === 96 && code === marker)
      return nok(code);
    effects.consume(code);
    return info2;
  }
  function infoAfter(code) {
    if (code === null || markdownLineEnding_1(code)) {
      return openAfter(code);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code);
  }
  function meta(code) {
    if (code === null || markdownLineEnding_1(code)) {
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
    if (markdownLineEnding_1(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, content2, "linePrefix", initialPrefix + 1) : content2);
    }
    effects.enter("codeFlowValue");
    return contentContinue(code);
  }
  function contentContinue(code) {
    if (code === null || markdownLineEnding_1(code)) {
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
    return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
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
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code);
    }
    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding_1(code)) {
        effects2.exit("codeFencedFence");
        return ok3(code);
      }
      return nok2(code);
    }
  }
}
var codeFenced_1 = codeFenced;
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented,
  resolve: resolveCodeIndented
};
var indentedContentConstruct = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
function resolveCodeIndented(events, context) {
  var code = {
    type: "codeIndented",
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  };
  chunkedSplice_1(events, 0, 0, [["enter", code, context]]);
  chunkedSplice_1(events, events.length, 0, [["exit", code, context]]);
  return events;
}
function tokenizeCodeIndented(effects, ok2, nok) {
  return effects.attempt(indentedContentConstruct, afterPrefix, nok);
  function afterPrefix(code) {
    if (code === null) {
      return ok2(code);
    }
    if (markdownLineEnding_1(code)) {
      return effects.attempt(indentedContentConstruct, afterPrefix, ok2)(code);
    }
    effects.enter("codeFlowValue");
    return content2(code);
  }
  function content2(code) {
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit("codeFlowValue");
      return afterPrefix(code);
    }
    effects.consume(code);
    return content2;
  }
}
function tokenizeIndentedContent(effects, ok2, nok) {
  var self2 = this;
  return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
  function afterPrefix(code) {
    if (markdownLineEnding_1(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
    }
    return prefixSize_1(self2.events, "linePrefix") < 4 ? nok(code) : ok2(code);
  }
}
var codeIndented_1 = codeIndented;
var codeText = {
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
    if (markdownLineEnding_1(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return gap;
    }
    effects.enter("codeTextData");
    return data(code);
  }
  function data(code) {
    if (code === null || code === 32 || code === 96 || markdownLineEnding_1(code)) {
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
var codeText_1 = codeText;
function destinationFactory(effects, ok2, nok, type2, literalType, literalMarkerType, rawType, stringType, max) {
  var limit = max || Infinity;
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
    if (asciiControl_1(code) || code === 41) {
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
    if (code === null || code === 60 || markdownLineEnding_1(code)) {
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
      if (++balance > limit)
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
    if (code === null || markdownLineEndingOrSpace_1(code)) {
      if (balance)
        return nok(code);
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type2);
      return ok2(code);
    }
    if (asciiControl_1(code))
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
var factoryDestination = destinationFactory;
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
    if (markdownLineEnding_1(code)) {
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
    if (code === null || code === 91 || code === 93 || markdownLineEnding_1(code) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code);
    }
    effects.consume(code);
    data = data || !markdownSpace_1(code);
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
var factoryLabel = labelFactory;
function whitespaceFactory(effects, ok2) {
  var seen2;
  return start;
  function start(code) {
    if (markdownLineEnding_1(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      seen2 = true;
      return start;
    }
    if (markdownSpace_1(code)) {
      return factorySpace(effects, start, seen2 ? "linePrefix" : "lineSuffix")(code);
    }
    return ok2(code);
  }
}
var factoryWhitespace = whitespaceFactory;
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
    if (markdownLineEnding_1(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return factorySpace(effects, atTitleBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return title(code);
  }
  function title(code) {
    if (code === marker || code === null || markdownLineEnding_1(code)) {
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
var factoryTitle = titleFactory;
var definition = {
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
    return factoryLabel.call(self2, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
  }
  function labelAfter(code) {
    identifier = normalizeIdentifier_1(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1));
    if (code === 58) {
      effects.enter("definitionMarker");
      effects.consume(code);
      effects.exit("definitionMarker");
      return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
    }
    return nok(code);
  }
  function after(code) {
    if (code === null || markdownLineEnding_1(code)) {
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
    return markdownLineEndingOrSpace_1(code) ? factoryWhitespace(effects, before)(code) : nok(code);
  }
  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
    }
    return nok(code);
  }
  function after(code) {
    return code === null || markdownLineEnding_1(code) ? ok2(code) : nok(code);
  }
}
var definition_1 = definition;
var hardBreakEscape = {
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
    if (markdownLineEnding_1(code)) {
      effects.exit("escapeMarker");
      effects.exit("hardBreakEscape");
      return ok2(code);
    }
    return nok(code);
  }
}
var hardBreakEscape_1 = hardBreakEscape;
var headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
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
    chunkedSplice_1(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content2, context],
      ["enter", text2, context],
      ["exit", text2, context],
      ["exit", content2, context]
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
    if (code === null || markdownLineEndingOrSpace_1(code)) {
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
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit("atxHeading");
      return ok2(code);
    }
    if (markdownSpace_1(code)) {
      return factorySpace(effects, headingBreak, "whitespace")(code);
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
    if (code === null || code === 35 || markdownLineEndingOrSpace_1(code)) {
      effects.exit("atxHeadingText");
      return headingBreak(code);
    }
    effects.consume(code);
    return data;
  }
}
var headingAtx_1 = headingAtx;
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
var htmlBlockNames = basics;
var raws = ["pre", "script", "style", "textarea"];
var htmlRawNames = raws;
var htmlFlow = {
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
  var buffer;
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
    if (asciiAlpha_1(code)) {
      effects.consume(code);
      buffer = fromCharCode_1(code);
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
      buffer = "CDATA[";
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha_1(code)) {
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
    if (code === buffer.charCodeAt(index2++)) {
      effects.consume(code);
      return index2 === buffer.length ? self2.interrupt ? ok2 : continuation : cdataOpenInside;
    }
    return nok(code);
  }
  function tagCloseStart(code) {
    if (asciiAlpha_1(code)) {
      effects.consume(code);
      buffer = fromCharCode_1(code);
      return tagName;
    }
    return nok(code);
  }
  function tagName(code) {
    if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace_1(code)) {
      if (code !== 47 && startTag && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
        kind = 1;
        return self2.interrupt ? ok2(code) : continuation(code);
      }
      if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
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
    if (code === 45 || asciiAlphanumeric_1(code)) {
      effects.consume(code);
      buffer += fromCharCode_1(code);
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
    if (markdownSpace_1(code)) {
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
    if (code === 58 || code === 95 || asciiAlpha_1(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    if (markdownSpace_1(code)) {
      effects.consume(code);
      return completeAttributeNameBefore;
    }
    return completeEnd(code);
  }
  function completeAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric_1(code)) {
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
    if (markdownSpace_1(code)) {
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
    if (markdownSpace_1(code)) {
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
    if (code === null || markdownLineEnding_1(code)) {
      return nok(code);
    }
    effects.consume(code);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace_1(code)) {
      return completeAttributeNameAfter(code);
    }
    effects.consume(code);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace_1(code)) {
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
    if (markdownSpace_1(code)) {
      effects.consume(code);
      return completeAfter;
    }
    return code === null || markdownLineEnding_1(code) ? continuation(code) : nok(code);
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
    if (markdownLineEnding_1(code) && (kind === 6 || kind === 7)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
    }
    if (code === null || markdownLineEnding_1(code)) {
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
    if (markdownLineEnding_1(code)) {
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
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code);
  }
  function continuationRawEndTag(code) {
    if (code === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
      effects.consume(code);
      return continuationClose;
    }
    if (asciiAlpha_1(code) && buffer.length < 8) {
      effects.consume(code);
      buffer += fromCharCode_1(code);
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
    if (code === null || markdownLineEnding_1(code)) {
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
    return effects.attempt(partialBlankLine_1, ok2, nok);
  }
}
var htmlFlow_1 = htmlFlow;
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  var self2 = this;
  var marker;
  var buffer;
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
    if (asciiAlpha_1(code)) {
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
      buffer = "CDATA[";
      index2 = 0;
      return cdataOpen;
    }
    if (asciiAlpha_1(code)) {
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
    if (markdownLineEnding_1(code)) {
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
    if (code === buffer.charCodeAt(index2++)) {
      effects.consume(code);
      return index2 === buffer.length ? cdata : cdataOpen;
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
    if (markdownLineEnding_1(code)) {
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
    if (markdownLineEnding_1(code)) {
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
    if (markdownLineEnding_1(code)) {
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
    if (asciiAlpha_1(code)) {
      effects.consume(code);
      return tagClose;
    }
    return nok(code);
  }
  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric_1(code)) {
      effects.consume(code);
      return tagClose;
    }
    return tagCloseBetween(code);
  }
  function tagCloseBetween(code) {
    if (markdownLineEnding_1(code)) {
      returnState = tagCloseBetween;
      return atLineEnding(code);
    }
    if (markdownSpace_1(code)) {
      effects.consume(code);
      return tagCloseBetween;
    }
    return end(code);
  }
  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric_1(code)) {
      effects.consume(code);
      return tagOpen;
    }
    if (code === 47 || code === 62 || markdownLineEndingOrSpace_1(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end;
    }
    if (code === 58 || code === 95 || asciiAlpha_1(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding_1(code)) {
      returnState = tagOpenBetween;
      return atLineEnding(code);
    }
    if (markdownSpace_1(code)) {
      effects.consume(code);
      return tagOpenBetween;
    }
    return end(code);
  }
  function tagOpenAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric_1(code)) {
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
    if (markdownLineEnding_1(code)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code);
    }
    if (markdownSpace_1(code)) {
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
    if (markdownLineEnding_1(code)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code);
    }
    if (markdownSpace_1(code)) {
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
    if (markdownLineEnding_1(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace_1(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  function tagOpenAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
      return nok(code);
    }
    if (code === 62 || markdownLineEndingOrSpace_1(code)) {
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
    return factorySpace(effects, afterPrefix, "linePrefix", self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
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
var htmlText_1 = htmlText;
var labelEnd = {
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
function resolveToLabelEnd(events, context) {
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
    start: shallow_1(events[open][1].start),
    end: shallow_1(events[events.length - 1][1].end)
  };
  label = {
    type: "label",
    start: shallow_1(events[open][1].start),
    end: shallow_1(events[close][1].end)
  };
  text2 = {
    type: "labelText",
    start: shallow_1(events[open + offset + 2][1].end),
    end: shallow_1(events[close - 2][1].start)
  };
  media = [
    ["enter", group, context],
    ["enter", label, context]
  ];
  media = chunkedPush_1(media, events.slice(open + 1, open + offset + 3));
  media = chunkedPush_1(media, [["enter", text2, context]]);
  media = chunkedPush_1(media, resolveAll_1(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
  media = chunkedPush_1(media, [
    ["exit", text2, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]);
  media = chunkedPush_1(media, events.slice(close + 1));
  media = chunkedPush_1(media, [["exit", group, context]]);
  chunkedSplice_1(events, open, events.length, media);
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
    defined = self2.parser.defined.indexOf(normalizeIdentifier_1(self2.sliceSerialize({
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
    return markdownLineEndingOrSpace_1(code) ? factoryWhitespace(effects, between)(code) : end(code);
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
    return self2.parser.defined.indexOf(normalizeIdentifier_1(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1))) < 0 ? nok(code) : ok2(code);
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
var labelEnd_1 = labelEnd;
var labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd_1.resolveAll
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
var labelStartImage_1 = labelStartImage;
var labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd_1.resolveAll
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
var labelStartLink_1 = labelStartLink;
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return factorySpace(effects, ok2, "linePrefix");
  }
}
var lineEnding_1 = lineEnding;
var thematicBreak = {
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
    if (markdownSpace_1(code)) {
      return factorySpace(effects, atBreak, "whitespace")(code);
    }
    if (size < 3 || code !== null && !markdownLineEnding_1(code)) {
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
var thematicBreak_1 = thematicBreak;
var list = {
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
  var initialSize = prefixSize_1(self2.events, "linePrefix");
  var size = 0;
  return start;
  function start(code) {
    var kind = self2.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self2.containerState.marker || code === self2.containerState.marker : asciiDigit_1(code)) {
      if (!self2.containerState.type) {
        self2.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code === 42 || code === 45 ? effects.check(thematicBreak_1, nok, atMarker)(code) : atMarker(code);
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
    if (asciiDigit_1(code) && ++size < 10) {
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
    return effects.check(partialBlankLine_1, self2.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code) {
    self2.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }
  function otherPrefix(code) {
    if (markdownSpace_1(code)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code);
  }
  function endOfPrefix(code) {
    self2.containerState.size = initialSize + sizeChunks_1(self2.sliceStream(effects.exit("listItemPrefix")));
    return ok2(code);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  var self2 = this;
  self2.containerState._closeFlow = void 0;
  return effects.check(partialBlankLine_1, onBlank, notBlank);
  function onBlank(code) {
    self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
    return factorySpace(effects, ok2, "listItemIndent", self2.containerState.size + 1)(code);
  }
  function notBlank(code) {
    if (self2.containerState.furtherBlankLines || !markdownSpace_1(code)) {
      self2.containerState.furtherBlankLines = self2.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code);
    }
    self2.containerState.furtherBlankLines = self2.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code);
  }
  function notInCurrentItem(code) {
    self2.containerState._closeFlow = true;
    self2.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list, ok2, nok), "linePrefix", self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(code);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  var self2 = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self2.containerState.size + 1);
  function afterPrefix(code) {
    return prefixSize_1(self2.events, "listItemIndent") === self2.containerState.size ? ok2(code) : nok(code);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  var self2 = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4 + 1);
  function afterPrefix(code) {
    return markdownSpace_1(code) || !prefixSize_1(self2.events, "listItemPrefixWhitespace") ? nok(code) : ok2(code);
  }
}
var list_1 = list;
var setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
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
    start: shallow_1(events[text2][1].start),
    end: shallow_1(events[events.length - 1][1].end)
  };
  events[text2][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text2, 0, ["enter", heading, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content2][1], context]);
    events[content2][1].end = shallow_1(events[definition2][1].end);
  } else {
    events[content2][1] = heading;
  }
  events.push(["exit", heading, context]);
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
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit("setextHeadingLine");
      return ok2(code);
    }
    return nok(code);
  }
}
var setextUnderline_1 = setextUnderline;
var document$1 = {
  42: list_1,
  43: list_1,
  45: list_1,
  48: list_1,
  49: list_1,
  50: list_1,
  51: list_1,
  52: list_1,
  53: list_1,
  54: list_1,
  55: list_1,
  56: list_1,
  57: list_1,
  62: blockQuote_1
};
var contentInitial = {
  91: definition_1
};
var flowInitial = {
  "-2": codeIndented_1,
  "-1": codeIndented_1,
  32: codeIndented_1
};
var flow = {
  35: headingAtx_1,
  42: thematicBreak_1,
  45: [setextUnderline_1, thematicBreak_1],
  60: htmlFlow_1,
  61: setextUnderline_1,
  95: thematicBreak_1,
  96: codeFenced_1,
  126: codeFenced_1
};
var string = {
  38: characterReference_1,
  92: characterEscape_1
};
var text = {
  "-5": lineEnding_1,
  "-4": lineEnding_1,
  "-3": lineEnding_1,
  33: labelStartImage_1,
  38: characterReference_1,
  42: attention_1,
  60: [autolink_1, htmlText_1],
  91: labelStartLink_1,
  92: [hardBreakEscape_1, characterEscape_1],
  93: labelEnd_1,
  95: attention_1,
  96: codeText_1
};
var insideSpan = {
  null: [attention_1, text_1$1.resolver]
};
var disable = {
  null: []
};
var contentInitial_1 = contentInitial;
var disable_1 = disable;
var document_1 = document$1;
var flow_1 = flow;
var flowInitial_1 = flowInitial;
var insideSpan_1 = insideSpan;
var string_1 = string;
var text_1 = text;
var constructs = /* @__PURE__ */ Object.defineProperty({
  contentInitial: contentInitial_1,
  disable: disable_1,
  document: document_1,
  flow: flow_1,
  flowInitial: flowInitial_1,
  insideSpan: insideSpan_1,
  string: string_1,
  text: text_1
}, "__esModule", {value: true});
function parse$1(options) {
  var settings = options || {};
  var parser = {
    defined: [],
    constructs: combineExtensions_1([constructs].concat(miniflat_1(settings.extensions))),
    content: create(content$1),
    document: create(document$2),
    flow: create(flow$1),
    string: create(text_1$1.string),
    text: create(text_1$1.text)
  };
  return parser;
  function create(initializer) {
    return creator;
    function creator(from) {
      return createTokenizer_1(parser, initializer, from);
    }
  }
}
var parse_1 = parse$1;
var search = /[\0\t\n\r]/g;
function preprocess() {
  var start = true;
  var column = 1;
  var buffer = "";
  var atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    var chunks = [];
    var match;
    var next;
    var startPosition;
    var endPosition;
    var code;
    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = "";
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
        buffer = value.slice(startPosition);
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
      if (buffer)
        chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}
var preprocess_1 = preprocess;
function postprocess(events) {
  while (!subtokenize_1(events)) {
  }
  return events;
}
var postprocess_1 = postprocess;
var dist$1 = fromMarkdown;
function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(postprocess_1(parse_1(options).document().write(preprocess_1()(value, encoding, true))));
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
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list2, onenterlistordered),
      listUnordered: opener(list2),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
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
  return compile;
  function compile(events) {
    var tree = {type: "root", children: []};
    var stack = [tree];
    var tokenStack = [];
    var listStack = [];
    var index2 = -1;
    var handler;
    var listStart;
    var context = {
      stack,
      tokenStack,
      config,
      enter,
      exit: exit2,
      buffer,
      resume,
      setData,
      getData: getData2
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
      if (hasOwnProperty.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(assign_1({sliceSerialize: events[index2][2].sliceSerialize}, context), events[index2][1]);
      }
    }
    if (tokenStack.length) {
      throw new Error("Cannot close document, a token (`" + tokenStack[tokenStack.length - 1].type + "`, " + _unistUtilStringifyPosition_2_0_3_unistUtilStringifyPosition({
        start: tokenStack[tokenStack.length - 1].start,
        end: tokenStack[tokenStack.length - 1].end
      }) + ") is still open");
    }
    tree.position = {
      start: point2(events.length ? events[0][1].start : {line: 1, column: 1, offset: 0}),
      end: point2(events.length ? events[events.length - 2][1].end : {line: 1, column: 1, offset: 0})
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
  function getData2(key) {
    return data[key];
  }
  function point2(d2) {
    return {line: d2.line, column: d2.column, offset: d2.offset};
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and)
        and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({type: "fragment", children: []});
  }
  function enter(node, token) {
    this.stack[this.stack.length - 1].children.push(node);
    this.stack.push(node);
    this.tokenStack.push(token);
    node.position = {start: point2(token.start)};
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
      throw new Error("Cannot close `" + token.type + "` (" + _unistUtilStringifyPosition_2_0_3_unistUtilStringifyPosition({start: token.start, end: token.end}) + "): it\u2019s not open");
    } else if (open.type !== token.type) {
      throw new Error("Cannot close `" + token.type + "` (" + _unistUtilStringifyPosition_2_0_3_unistUtilStringifyPosition({start: token.start, end: token.end}) + "): a different token (`" + open.type + "`, " + _unistUtilStringifyPosition_2_0_3_unistUtilStringifyPosition({start: open.start, end: open.end}) + ") is open");
    }
    node.position.end = point2(token.end);
    return node;
  }
  function resume() {
    return _mdastUtilToString_2_0_0_mdastUtilToString(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", true);
  }
  function onenterlistitemvalue(token) {
    if (getData2("expectingFirstListItemValue")) {
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
    if (getData2("flowCodeInside"))
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
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier_1(this.sliceSerialize(token)).toLowerCase();
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
      tail.position = {start: point2(token.start)};
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
    var context = this.stack[this.stack.length - 1];
    if (getData2("atHardBreak")) {
      context.children[context.children.length - 1].position.end = point2(token.end);
      setData("atHardBreak");
      return;
    }
    if (!getData2("setextHeadingSlurpLineEnding") && config.canContainEols.indexOf(context.type) > -1) {
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
    var context = this.stack[this.stack.length - 1];
    if (getData2("inReference")) {
      context.type += "Reference";
      context.referenceType = getData2("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
      delete context.referenceType;
    }
    setData("referenceType");
  }
  function onexitimage() {
    var context = this.stack[this.stack.length - 1];
    if (getData2("inReference")) {
      context.type += "Reference";
      context.referenceType = getData2("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
      delete context.referenceType;
    }
    setData("referenceType");
  }
  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = normalizeIdentifier_1(this.sliceSerialize(token)).toLowerCase();
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
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier_1(this.sliceSerialize(token)).toLowerCase();
    setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    var data2 = this.sliceSerialize(token);
    var type2 = getData2("characterReferenceType");
    var value;
    var tail;
    if (type2) {
      value = safeFromInt_1(data2, type2 === "characterReferenceMarkerNumeric" ? 10 : 16);
      setData("characterReferenceType");
    } else {
      value = decodeEntity_browser(data2);
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
    return {type: "blockquote", children: []};
  }
  function codeFlow() {
    return {type: "code", lang: null, meta: null, value: ""};
  }
  function codeText2() {
    return {type: "inlineCode", value: ""};
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
    return {type: "emphasis", children: []};
  }
  function heading() {
    return {type: "heading", depth: void 0, children: []};
  }
  function hardBreak() {
    return {type: "break"};
  }
  function html() {
    return {type: "html", value: ""};
  }
  function image() {
    return {type: "image", title: null, url: "", alt: null};
  }
  function link() {
    return {type: "link", title: null, url: "", children: []};
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
    return {type: "paragraph", children: []};
  }
  function strong() {
    return {type: "strong", children: []};
  }
  function text2() {
    return {type: "text", value: ""};
  }
  function thematicBreak2() {
    return {type: "thematicBreak"};
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
    left = hasOwnProperty.call(config, key) ? config[key] : config[key] = {};
    if (key === "canContainEols" || key === "transforms") {
      config[key] = [].concat(left, extension2[key]);
    } else {
      Object.assign(left, extension2[key]);
    }
  }
}
var _mdastUtilFromMarkdown_0_8_5_mdastUtilFromMarkdown = dist$1;
var _remarkParse_9_0_0_remarkParse = parse;
function parse(options) {
  var self2 = this;
  this.Parser = parse2;
  function parse2(doc) {
    return _mdastUtilFromMarkdown_0_8_5_mdastUtilFromMarkdown(doc, Object.assign({}, self2.data("settings"), options, {
      extensions: self2.data("micromarkExtensions") || [],
      mdastExtensions: self2.data("fromMarkdownExtensions") || []
    }));
  }
}
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location2, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
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
var _propTypes_15_7_2_propTypes = createCommonjsModule(function(module) {
  {
    module.exports = factoryWithThrowingShims();
  }
});
var _unistUtilVisitParents_1_1_2_unistUtilVisitParents = visitParents$1;
function visitParents$1(tree, type2, visitor) {
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
function addListMetadata() {
  return function(ast) {
    _unistUtilVisitParents_1_1_2_unistUtilVisitParents(ast, "list", function(listNode, parents) {
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
var _mdastAddListMetadata_1_0_1_mdastAddListMetadata = addListMetadata;
var convert_1 = convert;
function convert(test) {
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
    checks[index2] = convert(tests[index2]);
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
var _unistUtilVisitParents_3_1_1_unistUtilVisitParents = visitParents;
var CONTINUE$1 = true;
var SKIP$1 = "skip";
var EXIT$1 = false;
visitParents.CONTINUE = CONTINUE$1;
visitParents.SKIP = SKIP$1;
visitParents.EXIT = EXIT$1;
function visitParents(tree, test, visitor, reverse) {
  var step;
  var is;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  is = convert_1(test);
  step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index2, parents) {
    var value = typeof node === "object" && node !== null ? node : {};
    var name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      visit2.displayName = "node (" + color_browser(value.type + (name ? "<" + name + ">" : "")) + ")";
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
var _unistUtilVisit_2_0_3_unistUtilVisit = visit;
var CONTINUE = _unistUtilVisitParents_3_1_1_unistUtilVisitParents.CONTINUE;
var SKIP = _unistUtilVisitParents_3_1_1_unistUtilVisitParents.SKIP;
var EXIT = _unistUtilVisitParents_3_1_1_unistUtilVisitParents.EXIT;
visit.CONTINUE = CONTINUE;
visit.SKIP = SKIP;
visit.EXIT = EXIT;
function visit(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  _unistUtilVisitParents_3_1_1_unistUtilVisitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    var index2 = parent ? parent.children.indexOf(node) : null;
    return visitor(node, index2, parent);
  }
}
var type = "virtualHtml";
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;
var naiveHtml = function(tree) {
  var open;
  var currentParent;
  _unistUtilVisit_2_0_3_unistUtilVisit(tree, "html", function(node, index2, parent) {
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
var splice = [].splice;
var ofType = function(types, mode) {
  return ifNotMatch(allow, mode);
  function allow(node, index2, parent) {
    return !types.includes(node.type);
  }
};
var ifNotMatch_1 = ifNotMatch;
function ifNotMatch(allow, mode) {
  return transform2;
  function transform2(tree) {
    _unistUtilVisit_2_0_3_unistUtilVisit(tree, filter);
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
var disallowNode = {
  ofType,
  ifNotMatch: ifNotMatch_1
};
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
var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;
var isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
var isConcurrentMode = A;
var isContextConsumer = function(a) {
  return z(a) === k;
};
var isContextProvider = function(a) {
  return z(a) === h;
};
var isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === c;
};
var isForwardRef = function(a) {
  return z(a) === n;
};
var isFragment = function(a) {
  return z(a) === e;
};
var isLazy = function(a) {
  return z(a) === t;
};
var isMemo = function(a) {
  return z(a) === r;
};
var isPortal = function(a) {
  return z(a) === d;
};
var isProfiler = function(a) {
  return z(a) === g;
};
var isStrictMode = function(a) {
  return z(a) === f;
};
var isSuspense = function(a) {
  return z(a) === p;
};
var isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === e || a === m || a === g || a === f || a === p || a === q || typeof a === "object" && a !== null && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
var typeOf = z;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer,
  ContextProvider,
  Element,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var _reactIs_16_13_1_reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
function astToReact(node, options) {
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
  if (!_reactIs_16_13_1_reactIs.isValidElementType(renderer)) {
    throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
  }
  var nodeProps = getNodeProps(node, key, options, renderer, parent, index2);
  return require$$0.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || void 0);
  function resolveChildren() {
    return node.children && node.children.map(function(childNode, i) {
      return astToReact(childNode, options, {
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
  var isSimpleRenderer = typeof renderer === "string" || renderer === require$$0.Fragment;
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
        return astToReact(childNode, opts, {
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
      assignDefined(props, immutable(ref, {
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
          return astToReact(child, opts, {
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
      assignDefined(props, immutable(node, {
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
    var Fragment2 = require$$0.Fragment || "div";
    return require$$0.createElement(Fragment2, null, el2);
  }
  if (el2.props.children || parsedChildren) {
    var children = require$$0.Children.toArray(el2.props.children).concat(parsedChildren);
    return require$$0.cloneElement(el2, null, children);
  }
  return require$$0.cloneElement(el2, null);
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
var astToReact_1 = astToReact;
var wrapTableRows = function(node) {
  _unistUtilVisit_2_0_3_unistUtilVisit(node, "table", wrap);
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
var getDefinitions = function getDefinitions2(tree) {
  var definitions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  _unistUtilVisit_2_0_3_unistUtilVisit(tree, "definition", function(node) {
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
var uriTransformer = function uriTransformer2(uri) {
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
var supportsStringRender = parseInt((require$$0.version || "16").slice(0, 2), 10) >= 16;
var createElement = require$$0.createElement;
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
  var root2 = !className && require$$0.Fragment || "div";
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
  return createElement(props.isHeader ? "th" : "td", style ? immutable({
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
    return createElement(require$$0.Fragment || tag, null, props.value);
  }
  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement(tag, nodeProps);
}
function ParsedHtml(props) {
  return props["data-sourcepos"] ? require$$0.cloneElement(props.element, {
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
var HtmlParser = "__RMD_HTML_PARSER__";
var HtmlParser_1 = typeof Symbol === "undefined" ? HtmlParser : Symbol(HtmlParser);
var symbols = {
  HtmlParser: HtmlParser_1
};
var allTypes = Object.keys(renderers);
var ReactMarkdown = function ReactMarkdown2(props) {
  var src = props.source || props.children || "";
  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error("Only one of `allowedTypes` and `disallowedTypes` should be defined");
  }
  var renderers$1 = immutable(renderers, props.renderers);
  var processor = _unified_9_2_1_unified().use(_remarkParse_9_0_0_remarkParse).use(props.plugins || []);
  var tree = processor.runSync(processor.parse(src));
  var renderProps = immutable(props, {
    renderers: renderers$1,
    definitions: getDefinitions(tree)
  });
  determineAstToReactTransforms(props).forEach(function(transform2) {
    tree = transform2(tree, renderProps);
  });
  return tree;
};
function determineAstToReactTransforms(props) {
  var transforms = [wrapTableRows, _mdastAddListMetadata_1_0_1_mdastAddListMetadata()];
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
  var hasHtmlParser = (props.astPlugins || []).some(function(transform2) {
    return transform2.identity === symbols.HtmlParser;
  });
  if (renderHtml && !hasHtmlParser) {
    transforms.push(naiveHtml);
  }
  if (props.astPlugins) {
    transforms = transforms.concat(props.astPlugins);
  }
  transforms.push(astToReact_1);
  return transforms;
}
ReactMarkdown.defaultProps = {
  transformLinkUri: uriTransformer
};
ReactMarkdown.propTypes = {
  className: _propTypes_15_7_2_propTypes.string,
  source: _propTypes_15_7_2_propTypes.string,
  children: _propTypes_15_7_2_propTypes.string,
  sourcePos: _propTypes_15_7_2_propTypes.bool,
  rawSourcePos: _propTypes_15_7_2_propTypes.bool,
  escapeHtml: _propTypes_15_7_2_propTypes.bool,
  allowDangerousHtml: _propTypes_15_7_2_propTypes.bool,
  skipHtml: _propTypes_15_7_2_propTypes.bool,
  allowNode: _propTypes_15_7_2_propTypes.func,
  allowedTypes: _propTypes_15_7_2_propTypes.arrayOf(_propTypes_15_7_2_propTypes.oneOf(allTypes)),
  disallowedTypes: _propTypes_15_7_2_propTypes.arrayOf(_propTypes_15_7_2_propTypes.oneOf(allTypes)),
  transformLinkUri: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.func, _propTypes_15_7_2_propTypes.bool]),
  linkTarget: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.func, _propTypes_15_7_2_propTypes.string]),
  transformImageUri: _propTypes_15_7_2_propTypes.func,
  astPlugins: _propTypes_15_7_2_propTypes.arrayOf(_propTypes_15_7_2_propTypes.func),
  unwrapDisallowed: _propTypes_15_7_2_propTypes.bool,
  renderers: _propTypes_15_7_2_propTypes.object,
  plugins: _propTypes_15_7_2_propTypes.array
};
ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = renderers;
ReactMarkdown.uriTransformer = uriTransformer;
var reactMarkdown = ReactMarkdown;
var dist = createCommonjsModule(function(module, exports) {
  !function(e2, n2) {
    module.exports = n2(require$$0);
  }(window, function(e2) {
    return function(e3) {
      var n2 = {};
      function t2(r2) {
        if (n2[r2])
          return n2[r2].exports;
        var a = n2[r2] = {i: r2, l: false, exports: {}};
        return e3[r2].call(a.exports, a, a.exports, t2), a.l = true, a.exports;
      }
      return t2.m = e3, t2.c = n2, t2.d = function(e4, n3, r2) {
        t2.o(e4, n3) || Object.defineProperty(e4, n3, {enumerable: true, get: r2});
      }, t2.r = function(e4) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e4, "__esModule", {value: true});
      }, t2.t = function(e4, n3) {
        if (1 & n3 && (e4 = t2(e4)), 8 & n3)
          return e4;
        if (4 & n3 && typeof e4 == "object" && e4 && e4.__esModule)
          return e4;
        var r2 = Object.create(null);
        if (t2.r(r2), Object.defineProperty(r2, "default", {enumerable: true, value: e4}), 2 & n3 && typeof e4 != "string")
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
      }, t2.p = "https://dev.g.alicdn.com/code/npm/@alife/intl-comp-highLighter/1.0.15/", t2(t2.s = 51);
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
        (typeof window == "undefined" ? typeof self == "undefined" ? {} : self : window).Prism = {manual: true, disableWorkerMessageHandler: true};
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
            return {type: "text", value: e4};
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
          r3 = {type: e4.type, content: m2.Token.stringify(e4.content, n4, t3), tag: "span", classes: ["token", e4.type], attributes: {}, language: n4, parent: t3}, e4.alias && (r3.classes = r3.classes.concat(e4.alias));
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
          e5.languages.jsx = e5.languages.extend("markup", n3), e5.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i, e5.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, e5.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i, e5.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e5.languages.insertBefore("inside", "attr-name", {spread: {pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/, inside: {punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/}}}, e5.languages.jsx.tag), e5.languages.insertBefore("inside", "attr-value", {script: {pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i, inside: {"script-punctuation": {pattern: /^=(?={)/, alias: "punctuation"}, rest: e5.languages.jsx}, alias: "language-javascript"}}, e5.languages.jsx.tag);
          var t3 = function(e6) {
            return e6 ? typeof e6 == "string" ? e6 : typeof e6.content == "string" ? e6.content : e6.content.map(t3).join("") : "";
          }, r3 = function(n4) {
            for (var a = [], o = 0; o < n4.length; o++) {
              var l2 = n4[o], i = false;
              if (typeof l2 != "string" && (l2.type === "tag" && l2.content[0] && l2.content[0].type === "tag" ? l2.content[0].content[0].content === "</" ? a.length > 0 && a[a.length - 1].tagName === t3(l2.content[0].content[1]) && a.pop() : l2.content[l2.content.length - 1].content === "/>" || a.push({tagName: t3(l2.content[0].content[1]), openedBraces: 0}) : a.length > 0 && l2.type === "punctuation" && l2.content === "{" ? a[a.length - 1].openedBraces++ : a.length > 0 && a[a.length - 1].openedBraces > 0 && l2.type === "punctuation" && l2.content === "}" ? a[a.length - 1].openedBraces-- : i = true), (i || typeof l2 == "string") && a.length > 0 && a[a.length - 1].openedBraces === 0) {
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
        e4.languages.json = {property: {pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: true}, string: {pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: true}, comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, number: /-?\d+\.?\d*(e[+-]?\d+)?/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:true|false)\b/, null: {pattern: /\bnull\b/, alias: "keyword"}};
      }
      e3.exports = r2, r2.displayName = "json", r2.aliases = [];
    }, function(e3, n2, t2) {
      Object.defineProperty(n2, "__esModule", {value: true}), n2.CopyToClipboard = void 0;
      var r2 = o(t2(0)), a = o(t2(18));
      function o(e4) {
        return e4 && e4.__esModule ? e4 : {default: e4};
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
        return n3 in e4 ? Object.defineProperty(e4, n3, {value: t3, enumerable: true, configurable: true, writable: true}) : e4[n3] = t3, e4;
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
          e5.prototype = Object.create(n4 && n4.prototype, {constructor: {value: e5, writable: true, configurable: true}}), n4 && f2(e5, n4);
        }(n3, e4), t3 = n3, (o2 = [{key: "render", value: function() {
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
          }({}, t4, {onClick: this.onClick}));
        }}]) && c2(t3.prototype, o2), n3;
      }(r2.default.PureComponent);
      n2.CopyToClipboard = h2, m2(h2, "defaultProps", {onCopy: void 0, options: void 0});
    }, function(e3, n2, t2) {
      var r2 = t2(19), a = {"text/plain": "Text", "text/html": "Url", default: "Text"};
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
      e3.exports = r2({space: "xlink", transform: function(e4, n3) {
        return "xlink:" + n3.slice(5).toLowerCase();
      }, properties: {xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null}});
    }, function(e3, n2, t2) {
      var r2 = t2(1);
      e3.exports = r2({space: "xml", transform: function(e4, n3) {
        return "xml:" + n3.slice(3).toLowerCase();
      }, properties: {xmlLang: null, xmlBase: null, xmlSpace: null}});
    }, function(e3, n2, t2) {
      var r2 = t2(1), a = t2(11);
      e3.exports = r2({space: "xmlns", attributes: {xmlnsxlink: "xmlns:xlink"}, transform: a, properties: {xmlns: null, xmlnsXLink: null}});
    }, function(e3, n2, t2) {
      e3.exports = function(e4, n3) {
        return n3 in e4 ? e4[n3] : n3;
      };
    }, function(e3, n2, t2) {
      var r2 = t2(5), a = t2(1), o = r2.booleanish, l2 = r2.number, i = r2.spaceSeparated;
      e3.exports = a({transform: function(e4, n3) {
        return n3 === "role" ? n3 : "aria-" + n3.slice(4).toLowerCase();
      }, properties: {ariaActiveDescendant: null, ariaAtomic: o, ariaAutoComplete: null, ariaBusy: o, ariaChecked: o, ariaColCount: l2, ariaColIndex: l2, ariaColSpan: l2, ariaControls: i, ariaCurrent: null, ariaDescribedBy: i, ariaDetails: null, ariaDisabled: o, ariaDropEffect: i, ariaErrorMessage: null, ariaExpanded: o, ariaFlowTo: i, ariaGrabbed: o, ariaHasPopup: null, ariaHidden: o, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: i, ariaLevel: l2, ariaLive: null, ariaModal: o, ariaMultiLine: o, ariaMultiSelectable: o, ariaOrientation: null, ariaOwns: i, ariaPlaceholder: null, ariaPosInSet: l2, ariaPressed: o, ariaReadOnly: o, ariaRelevant: null, ariaRequired: o, ariaRoleDescription: i, ariaRowCount: l2, ariaRowIndex: l2, ariaRowSpan: l2, ariaSelected: o, ariaSetSize: l2, ariaSort: null, ariaValueMax: l2, ariaValueMin: l2, ariaValueNow: l2, ariaValueText: null, role: null}});
    }, function(e3, n2, t2) {
      var r2 = t2(5), a = t2(1), o = t2(11), l2 = r2.boolean, i = r2.overloadedBoolean, s = r2.booleanish, u = r2.number, c2 = r2.spaceSeparated, p2 = r2.commaSeparated;
      e3.exports = a({space: "html", attributes: {acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv"}, transform: o, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: {abbr: null, accept: p2, acceptCharset: c2, accessKey: c2, action: null, allow: null, allowFullScreen: l2, allowPaymentRequest: l2, allowUserMedia: l2, alt: null, as: null, async: l2, autoCapitalize: null, autoComplete: c2, autoFocus: l2, autoPlay: l2, capture: l2, charSet: null, checked: l2, cite: null, className: c2, cols: u, colSpan: null, content: null, contentEditable: s, controls: l2, controlsList: c2, coords: u | p2, crossOrigin: null, data: null, dateTime: null, decoding: null, default: l2, defer: l2, dir: null, dirName: null, disabled: l2, download: i, draggable: s, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: l2, formTarget: null, headers: c2, height: u, hidden: l2, high: u, href: null, hrefLang: null, htmlFor: c2, httpEquiv: c2, id: null, imageSizes: null, imageSrcSet: p2, inputMode: null, integrity: null, is: null, isMap: l2, itemId: null, itemProp: c2, itemRef: c2, itemScope: l2, itemType: c2, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: l2, low: u, manifest: null, max: null, maxLength: u, media: null, method: null, min: null, minLength: u, multiple: l2, muted: l2, name: null, nonce: null, noModule: l2, noValidate: l2, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: l2, optimum: u, pattern: null, ping: c2, placeholder: null, playsInline: l2, poster: null, preload: null, readOnly: l2, referrerPolicy: null, rel: c2, required: l2, reversed: l2, rows: u, rowSpan: u, sandbox: c2, scope: null, scoped: l2, seamless: l2, selected: l2, shape: null, size: u, sizes: null, slot: null, span: u, spellCheck: s, src: null, srcDoc: null, srcLang: null, srcSet: p2, start: u, step: null, style: null, tabIndex: u, target: null, title: null, translate: null, type: null, typeMustMatch: l2, useMap: null, value: s, width: u, wrap: null, align: null, aLink: null, archive: c2, axis: null, background: null, bgColor: null, border: u, borderColor: null, bottomMargin: u, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: l2, declare: l2, event: null, face: null, frame: null, frameBorder: null, hSpace: u, leftMargin: u, link: null, longDesc: null, lowSrc: null, marginHeight: u, marginWidth: u, noResize: l2, noHref: l2, noShade: l2, noWrap: l2, object: null, profile: null, prompt: null, rev: null, rightMargin: u, rules: null, scheme: null, scrolling: s, standby: null, summary: null, text: null, topMargin: u, valueType: null, version: null, vAlign: null, vLink: null, vSpace: u, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: l2, disableRemotePlayback: l2, prefix: null, property: null, results: u, security: null, unselectable: null}});
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
          c2(l3.children, i2), l3.tagName === "template" && (l3.content = {type: "root", children: l3.children}, l3.children = []);
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
          e4.push({type: "text", value: String(n3)});
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
        return {type: "element", tagName: i, properties: s, children: []};
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
              (l4 = e5.charCodeAt(_) === 59) && (_++, (o3 = A2 === g2 && s(d3)) && (t4 = d3, O = o3)), L = 1 + _ - P, (l4 || M) && (d3 ? A2 === g2 ? (l4 && !O ? k2(5, 1) : (t4 !== d3 && (_ = j + t4.length, L = 1 + _ - j, l4 = false), l4 || (S = t4 ? 1 : 3, n4.attribute ? (w2 = e5.charCodeAt(_)) === 61 ? (k2(S, L), O = null) : i(w2) ? O = null : k2(S, L) : k2(S, L))), x2 = O) : (l4 || k2(2, L), x2 = parseInt(d3, m2[A2]), (X = x2) >= 55296 && X <= 57343 || X > 1114111 ? (k2(7, L), x2 = c2(65533)) : x2 in a ? (k2(6, L), x2 = a[x2]) : (C = "", v2(x2) && k2(6, L), x2 > 65535 && (C += c2((x2 -= 65536) >>> 10 | 55296), x2 = 56320 | 1023 & x2), x2 = C + c2(x2))) : A2 !== g2 && k2(4, L)), x2 ? (Q(), F = Y(), G = _ - 1, Z += _ - P + 1, J.push(x2), (E = Y()).offset++, $ && $.call(B, x2, {start: F, end: E}, e5.slice(P - 1, _)), F = E) : (d3 = e5.slice(P - 1, _), K += d3, Z += d3.length, G = _ - 1);
            } else
              b2 === 10 && (V++, W++, Z = 0), b2 == b2 ? (K += c2(b2), Z++) : Q();
          var X;
          return J.join("");
          function Y() {
            return {line: V, column: Z, offset: G + (U.offset || 0)};
          }
          function Q() {
            K && (J.push(K), D && D.call(R, K, {start: F, end: Y()}), K = "");
          }
        }(e4, l3);
      };
      var u = {}.hasOwnProperty, c2 = String.fromCharCode, p2 = Function.prototype, d2 = {warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: false, nonTerminated: true}, g2 = "named", f2 = "hexadecimal", m2 = {hexadecimal: 16, decimal: 10}, h2 = {};
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
          var n4 = /\blang(?:uage)?-([\w-]+)\b/i, t4 = 0, r2 = {manual: e4.Prism && e4.Prism.manual, disableWorkerMessageHandler: e4.Prism && e4.Prism.disableWorkerMessageHandler, util: {encode: function(e5) {
            return e5 instanceof a ? new a(e5.type, r2.util.encode(e5.content), e5.alias) : Array.isArray(e5) ? e5.map(r2.util.encode) : e5.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }, type: function(e5) {
            return Object.prototype.toString.call(e5).slice(8, -1);
          }, objId: function(e5) {
            return e5.__id || Object.defineProperty(e5, "__id", {value: ++t4}), e5.__id;
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
          }}, languages: {extend: function(e5, n5) {
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
          }}, plugins: {}, highlightAll: function(e5, n5) {
            r2.highlightAllUnder(document, e5, n5);
          }, highlightAllUnder: function(e5, n5, t5) {
            var a2 = {callback: t5, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};
            r2.hooks.run("before-highlightall", a2);
            for (var o2, l2 = e5.querySelectorAll(a2.selector), i = 0; o2 = l2[i++]; )
              r2.highlightElement(o2, n5 === true, a2.callback);
          }, highlightElement: function(t5, a2, o2) {
            for (var l2, i = "none", s = t5; s && !n4.test(s.className); )
              s = s.parentNode;
            s && (i = (s.className.match(n4) || [, "none"])[1].toLowerCase(), l2 = r2.languages[i]), t5.className = t5.className.replace(n4, "").replace(/\s+/g, " ") + " language-" + i, t5.parentNode && (s = t5.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(n4, "").replace(/\s+/g, " ") + " language-" + i));
            var u = {element: t5, language: i, grammar: l2, code: t5.textContent}, c2 = function(e5) {
              u.highlightedCode = e5, r2.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r2.hooks.run("after-highlight", u), r2.hooks.run("complete", u), o2 && o2.call(u.element);
            };
            if (r2.hooks.run("before-sanity-check", u), u.code)
              if (r2.hooks.run("before-highlight", u), u.grammar)
                if (a2 && e4.Worker) {
                  var p2 = new Worker(r2.filename);
                  p2.onmessage = function(e5) {
                    c2(e5.data);
                  }, p2.postMessage(JSON.stringify({language: u.language, code: u.code, immediateClose: true}));
                } else
                  c2(r2.highlight(u.code, u.grammar, u.language));
              else
                c2(r2.util.encode(u.code));
            else
              r2.hooks.run("complete", u);
          }, highlight: function(e5, n5, t5) {
            var o2 = {code: e5, grammar: n5, language: t5};
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
          }, hooks: {all: {}, add: function(e5, n5) {
            var t5 = r2.hooks.all;
            t5[e5] = t5[e5] || [], t5[e5].push(n5);
          }, run: function(e5, n5) {
            var t5 = r2.hooks.all[e5];
            if (t5 && t5.length)
              for (var a2, o2 = 0; a2 = t5[o2++]; )
                a2(n5);
          }}, Token: a};
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
            var t5 = {type: e5.type, content: a.stringify(e5.content, n5), tag: "span", classes: ["token", e5.type], attributes: {}, language: n5};
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
        e4.languages.markup = {comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: {pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i, greedy: true, inside: {tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}}, "attr-value": {pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: {punctuation: [/^=/, {pattern: /^(\s*)["']|["']$/, lookbehind: true}]}}, punctuation: /\/?>/, "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}}}, entity: /&#?[\da-z]{1,8};/i}, e4.languages.markup.tag.inside["attr-value"].inside.entity = e4.languages.markup.entity, e4.hooks.add("wrap", function(e5) {
          e5.type === "entity" && (e5.attributes.title = e5.content.value.replace(/&amp;/, "&"));
        }), Object.defineProperty(e4.languages.markup.tag, "addInlined", {value: function(n3, t3) {
          var r3 = {};
          r3["language-" + t3] = {pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: e4.languages[t3]}, r3.cdata = /^<!\[CDATA\[|\]\]>$/i;
          var a = {"included-cdata": {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r3}};
          a["language-" + t3] = {pattern: /[\s\S]+/, inside: e4.languages[t3]};
          var o = {};
          o[n3] = {pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, n3), "i"), lookbehind: true, greedy: true, inside: a}, e4.languages.insertBefore("markup", "cdata", o);
        }}), e4.languages.xml = e4.languages.extend("markup", {}), e4.languages.html = e4.languages.markup, e4.languages.mathml = e4.languages.markup, e4.languages.svg = e4.languages.markup;
      }
      e3.exports = r2, r2.displayName = "markup", r2.aliases = ["xml", "html", "mathml", "svg"];
    }, function(e3, n2, t2) {
      function r2(e4) {
        !function(e5) {
          var n3 = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          e5.languages.css = {comment: /\/\*[\s\S]*?\*\//, atrule: {pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: {rule: /@[\w-]+/}}, url: {pattern: RegExp("url\\((?:" + n3.source + "|[^\n\r()]*)\\)", "i"), inside: {function: /^url/i, punctuation: /^\(|\)$/}}, selector: RegExp(`[^{}\\s](?:[^{};"']|` + n3.source + ")*?(?=\\s*\\{)"), string: {pattern: n3, greedy: true}, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/}, e5.languages.css.atrule.inside.rest = e5.languages.css;
          var t3 = e5.languages.markup;
          t3 && (t3.tag.addInlined("style", "css"), e5.languages.insertBefore("inside", "attr-value", {"style-attr": {pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: {"attr-name": {pattern: /^\s*style/i, inside: t3.tag.inside}, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": {pattern: /.+/i, inside: e5.languages.css}}, alias: "language-css"}}, t3.tag));
        }(e4);
      }
      e3.exports = r2, r2.displayName = "css", r2.aliases = [];
    }, function(e3, n2, t2) {
      function r2(e4) {
        e4.languages.clike = {comment: [{pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true}, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true}], string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true}, "class-name": {pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: {punctuation: /[.\\]/}}, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/};
      }
      e3.exports = r2, r2.displayName = "clike", r2.aliases = [];
    }, function(e3, n2, t2) {
      function r2(e4) {
        e4.languages.javascript = e4.languages.extend("clike", {"class-name": [e4.languages.clike["class-name"], {pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true}], keyword: [{pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true}, {pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true}], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}), e4.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, e4.languages.insertBefore("javascript", "keyword", {regex: {pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true}, "function-variable": {pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function"}, parameter: [{pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: e4.languages.javascript}, {pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: e4.languages.javascript}, {pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: e4.languages.javascript}, {pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: e4.languages.javascript}], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/}), e4.languages.insertBefore("javascript", "string", {"template-string": {pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: true, inside: {"template-punctuation": {pattern: /^`|`$/, alias: "string"}, interpolation: {pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: true, inside: {"interpolation-punctuation": {pattern: /^\${|}$/, alias: "punctuation"}, rest: e4.languages.javascript}}, string: /[\s\S]+/}}}), e4.languages.markup && e4.languages.markup.tag.addInlined("script", "javascript"), e4.languages.js = e4.languages.javascript;
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
        return n3 in e4 ? Object.defineProperty(e4, n3, {value: t2, enumerable: true, configurable: true, writable: true}) : e4[n3] = t2, e4;
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
                return f2({node: r5, stylesheet: e5, useInlineStyles: n4, key: "code-segment-".concat(t4, "-").concat(a2)});
              });
            };
          }(t3, l3), v3 = l3 && s2.className && s2.className.filter(function(e5) {
            return !t3[e5];
          }), b3 = v3 && v3.length ? v3 : void 0, x3 = l3 ? p2()({}, s2, {className: b3 && g2(b3)}, {style: d2(s2.className, Object.assign({}, s2.style, o2), t3)}) : p2()({}, s2, {className: g2(s2.className)}), w3 = y3(n3.children);
          return a.a.createElement(m3, u()({key: i2}, x3), w3);
        }
      }
      var m2 = /\n/g;
      function h2(e4) {
        var n3 = e4.codeString, t3 = e4.codeStyle, r3 = e4.containerProps, o2 = r3 === void 0 ? {} : r3, l3 = e4.numberProps, i2 = e4.startingLineNumber;
        return o2.style = o2.style || {float: "left", paddingRight: "10px"}, a.a.createElement("code", u()({}, o2, {style: Object.assign({}, t3, o2.style)}), function(e5) {
          var n4 = e5.lines, t4 = e5.startingLineNumber, r4 = e5.numberProps, o3 = r4 === void 0 ? {} : r4;
          return n4.map(function(e6, n5) {
            var r5 = n5 + t4, l4 = typeof o3 == "function" ? o3(r5) : o3;
            return a.a.createElement("span", u()({key: "line-".concat(n5), className: "react-syntax-highlighter-line-number"}, l4), "".concat(r5, "\n"));
          });
        }({lines: n3.replace(/\n$/, "").split("\n"), numberProps: l3, startingLineNumber: i2}));
      }
      function y2(e4) {
        var n3 = e4.children, t3 = e4.lineNumber, r3 = e4.lineProps, a2 = e4.className, o2 = a2 === void 0 ? [] : a2, l3 = (typeof r3 == "function" ? r3(t3) : r3) || {};
        return l3.className = l3.className ? o2.concat(l3.className) : o2, {type: "element", tagName: "span", properties: l3, children: n3};
      }
      function v2(e4, n3) {
        for (var t3 = function e5(n4) {
          for (var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], a3 = 0; a3 < n4.length; a3++) {
            var o3 = n4[a3];
            if (o3.type === "text")
              r4.push(y2({children: [o3], className: t4}));
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
              var u2 = r3.length + 1, c3 = {type: "text", value: "".concat(l5, "\n")};
              if (s2 === 0) {
                var p3 = t3.slice(a2 + 1, o2).concat(y2({children: [c3], className: e5.properties.className}));
                r3.push(y2({children: p3, lineNumber: u2, lineProps: n3}));
              } else if (s2 === i3.length - 1) {
                if (t3[o2 + 1] && t3[o2 + 1].children && t3[o2 + 1].children[0]) {
                  var d3 = y2({children: [{type: "text", value: "".concat(l5)}], className: e5.properties.className});
                  t3.splice(o2 + 1, 0, d3);
                } else
                  r3.push(y2({children: [c3], lineNumber: u2, lineProps: n3, className: e5.properties.className}));
              } else
                r3.push(y2({children: [c3], lineNumber: u2, lineProps: n3, className: e5.properties.className}));
            }), a2 = o2;
          }
          o2++;
        }; o2 < t3.length; )
          l3();
        if (a2 !== t3.length - 1) {
          var i2 = t3.slice(a2 + 1, t3.length);
          i2 && i2.length && r3.push(y2({children: i2, lineNumber: r3.length + 1, lineProps: n3}));
        }
        return r3;
      }
      function b2(e4) {
        var n3 = e4.rows, t3 = e4.stylesheet, r3 = e4.useInlineStyles;
        return n3.map(function(e5, n4) {
          return f2({node: e5, stylesheet: t3, useInlineStyles: r3, key: "code-segement".concat(n4)});
        });
      }
      var x2, w2, k2 = t2(6), S = t2.n(k2), C = (x2 = S.a, w2 = {}, function(e4) {
        var n3 = e4.language, t3 = e4.children, r3 = e4.style, o2 = r3 === void 0 ? w2 : r3, l3 = e4.customStyle, s2 = l3 === void 0 ? {} : l3, u2 = e4.codeTagProps, c3 = u2 === void 0 ? {style: o2['code[class*="language-"]']} : u2, p3 = e4.useInlineStyles, d3 = p3 === void 0 || p3, g3 = e4.showLineNumbers, f3 = g3 !== void 0 && g3, m3 = e4.startingLineNumber, y3 = m3 === void 0 ? 1 : m3, k3 = e4.lineNumberContainerProps, S2 = e4.lineNumberProps, C2 = e4.wrapLines, O2 = e4.lineProps, j2 = O2 === void 0 ? {} : O2, P2 = e4.renderer, A3 = e4.PreTag, N2 = A3 === void 0 ? "pre" : A3, F2 = e4.CodeTag, E2 = F2 === void 0 ? "code" : F2, L = e4.code, _ = L === void 0 ? Array.isArray(t3) ? t3[0] : t3 : L, T = e4.astGenerator, M = i()(e4, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "startingLineNumber", "lineNumberContainerProps", "lineNumberProps", "wrapLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
        T = T || x2;
        var D = f3 ? a.a.createElement(h2, {containerProps: k3, codeStyle: c3.style || {}, numberProps: S2, startingLineNumber: y3, codeString: _}) : null, $ = o2.hljs || o2['pre[class*="language-"]'] || {backgroundColor: "#fff"}, I = d3 ? Object.assign({}, M, {style: Object.assign({}, $, s2)}) : Object.assign({}, M, {className: "hljs"});
        if (!T)
          return a.a.createElement(N2, I, D, a.a.createElement(E2, c3, _));
        C2 = !(!P2 || C2 !== void 0) || C2, P2 = P2 || b2;
        var R = [{type: "text", value: _}], B = function(e5) {
          var n4 = e5.astGenerator, t4 = e5.language, r4 = e5.code, a2 = e5.defaultCodeValue;
          if (n4.getLanguage) {
            var o3 = t4 && n4.getLanguage(t4);
            return t4 === "text" ? {value: a2, language: "text"} : o3 ? n4.highlight(t4, r4) : n4.highlightAuto(r4);
          }
          try {
            return t4 && t4 !== "text" ? {value: n4.highlight(r4, t4)} : {value: a2};
          } catch (e6) {
            return {value: a2};
          }
        }({astGenerator: T, language: n3, code: _, defaultCodeValue: R});
        B.language === null && (B.value = R);
        var z2 = C2 ? v2(B, j2) : B.value;
        return a.a.createElement(N2, I, D, a.a.createElement(E2, c3, P2({rows: z2, stylesheet: o2, useInlineStyles: d3})));
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
          a2 = {error: e5};
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
        return a.a.createElement("div", {className: "code-pane language-" + n3}, a.a.createElement(o.CopyToClipboard, {text: t3, onCopy: function() {
          return s2(true);
        }}, a.a.createElement("span", {className: "icon-copy"}, i2 ? "Copied !" : "Copy")), a.a.createElement(O, {language: n3, useInlineStyles: false}, t3));
      }
      O.registerLanguage("jsx", P), O.registerLanguage("tsx", P), O.registerLanguage("json", N);
      try {
        E.__docsPath = "https://dev.g.alicdn.com/code/npm/@alife/intl-comp-highLighter/1.0.15/docs/index.js", E.displayName = "HighLighter", E.__displayName = "HighLighter";
      } catch (e4) {
      }
      E.registerLanguage = O.registerLanguage;
      n2.default = E;
      try {
        E.__docsPath = "https://dev.g.alicdn.com/code/npm/@alife/intl-comp-highLighter/1.0.15/docs/index.js", E.displayName = "HighLighter", E.__displayName = "HighLighter";
      } catch (e4) {
      }
    }]).default;
  });
});
var HighLight = /* @__PURE__ */ getDefaultExportFromCjs(dist);
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
var tsx_1 = tsx;
tsx.displayName = "tsx";
tsx.aliases = [];
function tsx(Prism) {
  Prism.register(jsx_1);
  Prism.register(typescript_1);
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
var index$1 = '.code-pane{position:relative;background-color:#282c34;border-radius:6px;font-size:15px}.code-pane:hover>.icon-copy{opacity:1}.code-pane>.icon-copy{opacity:0;transition:all .2s;position:absolute;z-index:3;top:.8em;right:1em;cursor:pointer;font-size:.75rem;color:hsla(0,0%,100%,.7);background:#282c34}.code-pane :not(pre)>code[class*=language-],.code-pane pre[class*=language-]{background:#2d2d2d}.code-pane :not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.code-pane .token.block-comment,.code-pane .token.cdata,.code-pane .token.comment,.code-pane .token.doctype,.code-pane .token.prolog{color:#999}.code-pane .language-css .token.string,.code-pane .style .token.string,.code-pane .token.entity,.code-pane .token.operator,.code-pane .token.url{background-color:transparent}.code-pane .token.punctuation{color:#ccc}.code-pane .token.attr-name,.code-pane .token.deleted,.code-pane .token.namespace,.code-pane .token.tag{color:#e2777a}.code-pane .token.function-name{color:#6196cc}.code-pane .token.boolean,.code-pane .token.function,.code-pane .token.number{color:#f08d49}.code-pane .token.class-name,.code-pane .token.constant,.code-pane .token.property,.code-pane .token.symbol{color:#f8c555}.code-pane .token.atrule,.code-pane .token.builtin,.code-pane .token.important,.code-pane .token.keyword,.code-pane .token.selector{color:#cc99cd}.code-pane .token.attr-value,.code-pane .token.char,.code-pane .token.regex,.code-pane .token.string,.code-pane .token.variable{color:#7ec699}.code-pane .token.entity,.code-pane .token.operator,.code-pane .token.url{color:#67cdcc}.code-pane .token.bold,.code-pane .token.important{font-weight:700}.code-pane .token.italic{font-style:italic}.code-pane .token.entity{cursor:help}.code-pane code .token.deleted{color:#ec5975}.code-pane code .token.inserted{color:#3eaf7c}.code-pane pre,.code-pane pre[class*=language-]{line-height:1.5;padding:1.25rem 1.5rem;margin:.85rem 0;background-color:#282c34;border-radius:6px}.code-pane pre[class*=language-] code,.code-pane pre code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;font-size:.9em;color:#fff;padding:0;background-color:transparent;border-radius:0}.code-pane[class*=language-] .highlight-lines{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:1.3rem;position:absolute;top:0;left:0;width:100%;line-height:1.4}.code-pane[class*=language-] .highlight-lines .highlighted{background-color:rgba(0,0,0,.66)}.code-pane[class*=language-] pre,.code-pane[class*=language-] pre[class*=language-]{background:transparent;position:relative;z-index:1}.code-pane[class*=language-]:before{position:absolute;z-index:3;top:.8em;right:1em;font-size:.75rem;color:hsla(0,0%,100%,.4)}.code-pane[class*=language-]:not(.line-numbers-mode) .line-numbers-wrapper{display:none}.code-pane[class*=language-].line-numbers-mode .highlight-lines .highlighted{position:relative}.code-pane[class*=language-].line-numbers-mode .highlight-lines .highlighted:before{content:" ";position:absolute;z-index:3;left:0;top:0;display:block;width:3.5rem;height:100%;background-color:rgba(0,0,0,.66)}.code-pane[class*=language-].line-numbers-mode pre{padding-left:4.5rem;vertical-align:middle}.code-pane[class*=language-].line-numbers-mode .line-numbers-wrapper{position:absolute;top:0;width:3.5rem;text-align:center;color:hsla(0,0%,100%,.3);padding:1.25rem 0;line-height:1.4}.code-pane[class*=language-].line-numbers-mode .line-numbers-wrapper .line-number,.code-pane[class*=language-].line-numbers-mode .line-numbers-wrapper br{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.code-pane[class*=language-].line-numbers-mode .line-numbers-wrapper .line-number{position:relative;z-index:4;font-size:.85em}.code-pane[class*=language-].line-numbers-mode:after{content:"";position:absolute;z-index:2;top:0;left:0;width:3.5rem;height:100%;border-radius:6px 0 0 6px;border-right:1px solid rgba(0,0,0,.66);background-color:#282c34}.code-pane[class~=language-js]:before{content:"js"}.code-pane[class~=language-ts]:before{content:"ts"}.code-pane[class~=language-html]:before{content:"html"}.code-pane[class~=language-md]:before{content:"md"}.code-pane[class~=language-vue]:before{content:"vue"}.code-pane[class~=language-css]:before{content:"css"}.code-pane[class~=language-sass]:before{content:"sass"}.code-pane[class~=language-scss]:before{content:"scss"}.code-pane[class~=language-less]:before{content:"less"}.code-pane[class~=language-stylus]:before{content:"stylus"}.code-pane[class~=language-go]:before{content:"go"}.code-pane[class~=language-java]:before{content:"java"}.code-pane[class~=language-c]:before{content:"c"}.code-pane[class~=language-sh]:before{content:"sh"}.code-pane[class~=language-yaml]:before{content:"yaml"}.code-pane[class~=language-py]:before{content:"py"}.code-pane[class~=language-docker]:before{content:"docker"}.code-pane[class~=language-dockerfile]:before{content:"dockerfile"}.code-pane[class~=language-makefile]:before{content:"makefile"}.code-pane[class~=language-javascript]:before{content:"js"}.code-pane[class~=language-jsx]:before{content:"jsx"}.code-pane[class~=language-typescript]:before{content:"ts"}.code-pane[class~=language-tsx]:before{content:"tsx"}.code-pane[class~=language-markup]:before{content:"html"}.code-pane[class~=language-markdown]:before{content:"md"}.code-pane[class~=language-json]:before{content:"json"}.code-pane[class~=language-ruby]:before{content:"rb"}.code-pane[class~=language-python]:before{content:"py"}.code-pane[class~=language-bash]:before{content:"sh"}.code-pane[class~=language-php]:before{content:"php"}@media screen and (max-width:769px){.code-pane[class*=language-]{margin:.85rem -1.5rem;border-radius:0}}.code-pane .token.number{background-color:transparent;border-radius:0;font-size:inherit;height:inherit;margin-right:inherit;min-width:auto;padding:0;text-align:center}';
var index = ".markdown-area {\n  margin-bottom: 15px;\n}\n.markdown-area .clickable-block {\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n.markdown-area .clickable-block:not(.selected-block):hover > .code-pane {\n  box-shadow: 0 2px 8px 0 #6495f9;\n}\n.markdown-area .selected-block {\n  position: relative;\n}\n.markdown-area .selected-block > .ant-tag {\n  position: absolute;\n  z-index: 1;\n  border-radius: 6px 0 6px 0;\n  top: 0;\n  background: #6495f9;\n  border-color: #6495f9;\n  color: #fff;\n  font-weight: 500;\n}\n.markdown-area .selected-block > .code-pane {\n  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.4);\n  border: 2px solid #6495f9;\n  margin-bottom: 1em;\n}\n.markdown-area .selected-block > .code-pane > pre.hljs {\n  margin-bottom: 0;\n}";
HighLight.registerLanguage("tsx", tsx_1);
HighLight.registerLanguage("scss", scss_1);
HighLight.registerLanguage("less", less_1);
const {Tag} = window.antd;
function MarkdownArea() {
  const component = useRealComponent();
  const res = useMarkdown();
  if (!res || !component) {
    return null;
  }
  const {moduleMap, content: content2, renderer, setRenderIndex} = res;
  let index2 = 0;
  const code = ({language, value = ""}) => {
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
      className: _classnames_2_2_6_classnames({
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
    className: "markdown-area"
  }, /* @__PURE__ */ modules$1.createElement(reactMarkdown, {
    renderers: {code}
  }, content2));
}
function ReadmePane() {
  const [visionProps, setVisionProps] = useState({});
  const [visionDefaultProps, setVisionDefaultProps] = useState();
  const propertyTypes = useTypeFile();
  const compInfo = useComponentInfo();
  const [renderIndex, setRenderIndex] = useState();
  return /* @__PURE__ */ modules$1.createElement("div", {
    id: "public-component-show-container"
  }, /* @__PURE__ */ modules$1.createElement(RendererContext.Provider, {
    value: {renderIndex, setRenderIndex}
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-page"
  }, /* @__PURE__ */ modules$1.createElement("h1", {
    className: "component-name"
  }, propertyTypes == null ? void 0 : propertyTypes.displayName), /* @__PURE__ */ modules$1.createElement("span", {
    className: "component-sub-title"
  }, /* @__PURE__ */ modules$1.createElement("span", null, "Package: ", compInfo == null ? void 0 : compInfo.packageName), /* @__PURE__ */ modules$1.createElement("span", null, "Version: ", compInfo == null ? void 0 : compInfo.packageVersion)), /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-main"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-part"
  }, /* @__PURE__ */ modules$1.createElement(ComponentArea, {
    componentProps: visionProps,
    onSetDefaultProps: setVisionDefaultProps
  }), /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-description component-block "
  }, /* @__PURE__ */ modules$1.createElement(MarkdownArea, null), /* @__PURE__ */ modules$1.createElement(renderProperty, {
    properties: propertyTypes
  }))), propertyTypes && visionDefaultProps && /* @__PURE__ */ modules$1.createElement(VisionPane, {
    properties: propertyTypes,
    defaultProps: visionDefaultProps,
    onPropsChange: setVisionProps
  })))));
}
_default$2();
render(/* @__PURE__ */ createElement$1(Fragment$1, null, /* @__PURE__ */ createElement$1(ReadmePane, null)), document.querySelector("#component-root"));
