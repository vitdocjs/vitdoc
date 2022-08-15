var modules$1 = window["React"];
const Fragment = modules$1["Fragment"];
const StrictMode = modules$1["StrictMode"];
const Profiler = modules$1["Profiler"];
const Suspense = modules$1["Suspense"];
const Children = modules$1["Children"];
const Component$1 = modules$1["Component"];
const PureComponent = modules$1["PureComponent"];
const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = modules$1["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"];
const cloneElement = modules$1["cloneElement"];
const createContext = modules$1["createContext"];
const createElement$2 = modules$1["createElement"];
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
const react_1a37f6a0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Fragment,
  StrictMode,
  Profiler,
  Suspense,
  Children,
  Component: Component$1,
  PureComponent,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cloneElement,
  createContext,
  createElement: createElement$2,
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
  default: modules$1
}, Symbol.toStringTag, { value: "Module" }));
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
const index$7 = "";
const queryRE = /\?.*$/;
const hashRE = /#.*$/;
const cleanUrl = (url) => url.replace(hashRE, "").replace(queryRE, "");
const isJsx = (lang) => /^[j|t]sx$/.test(lang);
function hasReact(str) {
  return /ReactDOM\.render/.test(str);
}
function isTypes(str) {
  return /renderType\$\(.+\)/.test(str);
}
const isCSSLang = (lang) => /^(css|less|sass|scss|styl|stylus|postcss)$/.test(lang);
function _setPrototypeOf$1(o, p2) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf$1(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$1(subClass, superClass);
}
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  var f = n.default;
  if (typeof f == "function") {
    var a = function() {
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var propTypes = { exports: {} };
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min)
    return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h2 = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p2 = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p2:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h2:
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
  reactIs_production_min.ContextProvider = h2;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p2;
  reactIs_production_min.isAsyncMode = function(a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function(a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return z(a) === h2;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
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
    return z(a) === p2;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p2 || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h2 || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}
var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development)
    return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type2) {
        return typeof type2 === "string" || typeof type2 === "function" || type2 === REACT_FRAGMENT_TYPE || type2 === REACT_CONCURRENT_MODE_TYPE || type2 === REACT_PROFILER_TYPE || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || typeof type2 === "object" && type2 !== null && (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_RESPONDER_TYPE || type2.$$typeof === REACT_SCOPE_TYPE || type2.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type2 = object.type;
              switch (type2) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type2;
                default:
                  var $$typeofType = type2 && type2.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment2 = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler2 = REACT_PROFILER_TYPE;
      var StrictMode2 = REACT_STRICT_MODE_TYPE;
      var Suspense2 = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment2;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler2;
      reactIs_development.StrictMode = StrictMode2;
      reactIs_development.Suspense = Suspense2;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}
var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs)
    return reactIs$1.exports;
  hasRequiredReactIs = 1;
  (function(module) {
    if (process.env.NODE_ENV === "production") {
      module.exports = requireReactIs_production_min();
    } else {
      module.exports = requireReactIs_development();
    }
  })(reactIs$1);
  return reactIs$1.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign)
    return objectAssign;
  hasRequiredObjectAssign = 1;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty2 = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols2;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty2.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols2 = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols2.length; i++) {
          if (propIsEnumerable.call(from, symbols2[i])) {
            to[symbols2[i]] = from[symbols2[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret)
    return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var has;
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas)
    return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}
var checkPropTypes_1;
var hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes)
    return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var printWarning = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has2 = requireHas();
    printWarning = function(text2) {
      var message2 = "Warning: " + text2;
      if (typeof console !== "undefined") {
        console.error(message2);
      }
      try {
        throw new Error(message2);
      } catch (x) {
      }
    };
  }
  function checkPropTypes(typeSpecs, values, location2, componentName, getStack) {
    if (process.env.NODE_ENV !== "production") {
      for (var typeSpecName in typeSpecs) {
        if (has2(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning((componentName || "React class") + ": type specification of " + location2 + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : "";
            printWarning("Failed " + location2 + " type: " + error.message + (stack != null ? stack : ""));
          }
        }
      }
    }
  }
  checkPropTypes.resetWarningCache = function() {
    if (process.env.NODE_ENV !== "production") {
      loggedTypeFailures = {};
    }
  };
  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}
var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers)
    return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs2 = requireReactIs();
  var assign2 = requireObjectAssign();
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has2 = requireHas();
  var checkPropTypes = requireCheckPropTypes();
  var printWarning = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    printWarning = function(text2) {
      var message2 = "Warning: " + text2;
      if (typeof console !== "undefined") {
        console.error(message2);
      }
      try {
        throw new Error(message2);
      } catch (x) {
      }
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  factoryWithTypeCheckers = function(isValidElement2, throwOnDirectAccess) {
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    var ANONYMOUS = "<<anonymous>>";
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bigint: createPrimitiveTypeChecker("bigint"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    function is(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function PropTypeError(message2, data2) {
      this.message = message2;
      this.data = data2 && typeof data2 === "object" ? data2 : {};
      this.stack = "";
    }
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== "production") {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location2, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
            err.name = "Invariant Violation";
            throw err;
          } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
            var cacheKey = componentName + ":" + propName;
            if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
              printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
            }
            return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location2, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location2, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          var preciseType = getPreciseType(propValue);
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location2, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location2, propFullName + "[" + i + "]", ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location2, propFullName) {
        var propValue = props[propName];
        if (!isValidElement2(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location2, propFullName) {
        var propValue = props[propName];
        if (!ReactIs2.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location2, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== "production") {
          if (arguments.length > 1) {
            printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
          } else {
            printWarning("Invalid argument supplied to oneOf, expected an array.");
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location2, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type2 = getPreciseType(value);
          if (type2 === "symbol") {
            return String(value);
          }
          return value;
        });
        return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location2, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
        }
        for (var key in propValue) {
          if (has2(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location2, propFullName) {
        var expectedTypes = [];
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker2 = arrayOfTypeCheckers[i2];
          var checkerResult = checker2(props, propName, componentName, location2, propFullName, ReactPropTypesSecret);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
        return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location2, propFullName) {
        if (!isNode2(props[propName])) {
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location2, propFullName, key, type2) {
      return new PropTypeError((componentName || "React class") + ": " + location2 + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type2 + "`.");
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location2, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== "function") {
            return invalidValidatorError(componentName, location2, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location2, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        var allKeys = assign2({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has2(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(componentName, location2, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
          }
          var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode2(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode2);
          }
          if (propValue === null || isValidElement2(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode2(step.value)) {
                  return false;
                }
              }
            } else {
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode2(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol2(propType, propValue) {
      if (propType === "symbol") {
        return true;
      }
      if (!propValue) {
        return false;
      }
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        return "object";
      }
      if (isSymbol2(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }
    function getPostfixForTypeWarning(value) {
      var type2 = getPreciseType(value);
      switch (type2) {
        case "array":
        case "object":
          return "an " + type2;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type2;
        default:
          return type2;
      }
    }
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims)
    return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
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
  return factoryWithThrowingShims;
}
if (process.env.NODE_ENV !== "production") {
  var ReactIs$1 = requireReactIs();
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs$1.isElement, throwOnDirectAccess);
} else {
  propTypes.exports = requireFactoryWithThrowingShims()();
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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
  for (var i = index2, k = i + 1, n = list2.length; k < n; i += 1, k += 1) {
    list2[i] = list2[k];
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
function valueEqual(a, b) {
  if (a === b)
    return true;
  if (a == null || b == null)
    return false;
  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function(item, index2) {
      return valueEqual(item, b[index2]);
    });
  }
  if (typeof a === "object" || typeof b === "object") {
    var aValue = valueOf(a);
    var bValue = valueOf(b);
    if (aValue !== a || bValue !== b)
      return valueEqual(aValue, bValue);
    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }
  return false;
}
var isProduction$1 = process.env.NODE_ENV === "production";
function warning$1(condition, message2) {
  if (!isProduction$1) {
    if (condition) {
      return;
    }
    var text2 = "Warning: " + message2;
    if (typeof console !== "undefined") {
      console.warn(text2);
    }
    try {
      throw Error(text2);
    } catch (x) {
    }
  }
}
var isProduction = process.env.NODE_ENV === "production";
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
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location2.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
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
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}
function createTransitionManager() {
  var prompt = null;
  function setPrompt(nextPrompt) {
    process.env.NODE_ENV !== "production" ? warning$1(prompt == null, "A history supports only one prompt at a time") : void 0;
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
          process.env.NODE_ENV !== "production" ? warning$1(false, "A history needs a getUserConfirmation function in order to use a prompt message") : void 0;
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
  } catch (e) {
    return {};
  }
}
function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, "Browser history needs a DOM") : invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props, _props$forceRefresh = _props.forceRefresh, forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename2 = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  function getDOMLocation(historyState) {
    var _ref = historyState || {}, key = _ref.key, state = _ref.state;
    var _window$location = window.location, pathname = _window$location.pathname, search2 = _window$location.search, hash = _window$location.hash;
    var path = pathname + search2 + hash;
    process.env.NODE_ENV !== "production" ? warning$1(!basename2 || hasBasename(path, basename2), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + path + '" to begin with "' + basename2 + '".') : void 0;
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
    process.env.NODE_ENV !== "production" ? warning$1(!(typeof path === "object" && path.state !== void 0 && state !== void 0), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored") : void 0;
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
        process.env.NODE_ENV !== "production" ? warning$1(state2 === void 0, "Browser history cannot push state in browsers that do not support HTML5 history") : void 0;
        window.location.href = href;
      }
    });
  }
  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning$1(!(typeof path === "object" && path.state !== void 0 && state !== void 0), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored") : void 0;
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
        process.env.NODE_ENV !== "production" ? warning$1(state2 === void 0, "Browser history cannot replace state in browsers that do not support HTML5 history") : void 0;
        window.location.replace(href);
      }
    });
  }
  function go(n) {
    globalHistory.go(n);
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
  !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, "Hash history needs a DOM") : invariant(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$hashType = _props.hashType, hashType = _props$hashType === void 0 ? "slash" : _props$hashType;
  var basename2 = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath2 = _HashPathCoders$hashT.encodePath, decodePath2 = _HashPathCoders$hashT.decodePath;
  function getDOMLocation() {
    var path2 = decodePath2(getHashPath());
    process.env.NODE_ENV !== "production" ? warning$1(!basename2 || hasBasename(path2, basename2), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + path2 + '" to begin with "' + basename2 + '".') : void 0;
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
  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
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
    process.env.NODE_ENV !== "production" ? warning$1(state === void 0, "Hash history cannot push state; it is ignored") : void 0;
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
        process.env.NODE_ENV !== "production" ? warning$1(false, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack") : void 0;
        setState();
      }
    });
  }
  function replace(path2, state) {
    process.env.NODE_ENV !== "production" ? warning$1(state === void 0, "Hash history cannot replace state; it is ignored") : void 0;
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
  function go(n) {
    process.env.NODE_ENV !== "production" ? warning$1(canGoWithoutReload, "Hash history go(n) causes a full page reload in this browser") : void 0;
    globalHistory.go(n);
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
function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
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
    process.env.NODE_ENV !== "production" ? warning$1(!(typeof path === "object" && path.state !== void 0 && state !== void 0), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored") : void 0;
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
    process.env.NODE_ENV !== "production" ? warning$1(!(typeof path === "object" && path.state !== void 0 && state !== void 0), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored") : void 0;
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
  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
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
  function canGo(n) {
    var nextIndex = history.index + n;
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
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
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
          if (process.env.NODE_ENV !== "production") {
            warning$1((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, "calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: " + changedBits);
          }
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
  }(Component$1);
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = propTypes.exports.object.isRequired, _Provider$childContex);
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
  }(Component$1);
  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = propTypes.exports.object, _Consumer$contextType);
  return {
    Provider,
    Consumer
  };
}
var index$6 = modules$1.createContext || createReactContext;
var pathToRegexp$1 = { exports: {} };
var isarray$1 = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
};
var isarray = isarray$1;
pathToRegexp$1.exports = pathToRegexp;
pathToRegexp$1.exports.parse = parse$7;
pathToRegexp$1.exports.compile = compile;
pathToRegexp$1.exports.tokensToFunction = tokensToFunction;
pathToRegexp$1.exports.tokensToRegExp = tokensToRegExp;
var PATH_REGEXP = new RegExp([
  "(\\\\.)",
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse$7(str, options) {
  var tokens = [];
  var key = 0;
  var index2 = 0;
  var path = "";
  var defaultDelimiter = options && options.delimiter || "/";
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index2, offset);
    index2 = offset + m.length;
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index2];
    var prefix2 = res[2];
    var name2 = res[3];
    var capture2 = res[4];
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
    var pattern = capture2 || group;
    tokens.push({
      name: name2 || key++,
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
  return tokensToFunction(parse$7(str, options), options);
}
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
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
    var data2 = obj || {};
    var options2 = opts || {};
    var encode2 = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data2[token.name];
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
          segment = encode2(value[j]);
          if (!matches[i2].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode2(value);
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
  return tokensToRegExp(parse$7(path, options), keys2, options);
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
      var capture2 = "(?:" + token.pattern + ")";
      keys2.push(token);
      if (token.repeat) {
        capture2 += "(?:" + prefix2 + capture2 + ")*";
      }
      if (token.optional) {
        if (!token.partial) {
          capture2 = "(?:" + prefix2 + "(" + capture2 + "))?";
        } else {
          capture2 = prefix2 + "(" + capture2 + ")?";
        }
      } else {
        capture2 = prefix2 + "(" + capture2 + ")";
      }
      route += capture2;
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
var reactIsExports = requireReactIs();
function _objectWithoutPropertiesLoose$1(source, excluded) {
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
var reactIs = requireReactIs();
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
var createNamedContext = function createNamedContext2(name2) {
  var context2 = index$6();
  context2.displayName = name2;
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
        _this._pendingLocation = location2;
      });
    }
    return _this;
  }
  var _proto = Router2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    this._isMounted = true;
    if (this.unlisten) {
      this.unlisten();
    }
    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function(location2) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location2
          });
        }
      });
    }
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
if (process.env.NODE_ENV !== "production") {
  Router.propTypes = {
    children: propTypes.exports.node,
    history: propTypes.exports.object.isRequired,
    staticContext: propTypes.exports.object
  };
  Router.prototype.componentDidUpdate = function(prevProps) {
    process.env.NODE_ENV !== "production" ? warning$1(prevProps.history === this.props.history, "You cannot change <Router history>") : void 0;
  };
}
var MemoryRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(MemoryRouter2, _React$Component);
  function MemoryRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }
  var _proto = MemoryRouter2.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ modules$1.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return MemoryRouter2;
}(modules$1.Component);
if (process.env.NODE_ENV !== "production") {
  MemoryRouter.propTypes = {
    initialEntries: propTypes.exports.array,
    initialIndex: propTypes.exports.number,
    getUserConfirmation: propTypes.exports.func,
    keyLength: propTypes.exports.number,
    children: propTypes.exports.node
  };
  MemoryRouter.prototype.componentDidMount = function() {
    process.env.NODE_ENV !== "production" ? warning$1(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.") : void 0;
  };
}
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
if (process.env.NODE_ENV !== "production") {
  var messageType = propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.string]);
  ({
    when: propTypes.exports.bool,
    message: messageType.isRequired
  });
}
var cache$1 = {};
var cacheLimit = 1e4;
var cacheCount = 0;
function compilePath(path) {
  if (cache$1[path])
    return cache$1[path];
  var generator = pathToRegexp$1.exports.compile(path);
  if (cacheCount < cacheLimit) {
    cache$1[path] = generator;
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
    !context2 ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Redirect> outside a <Router>") : invariant(false) : void 0;
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
if (process.env.NODE_ENV !== "production") {
  Redirect.propTypes = {
    push: propTypes.exports.bool,
    from: propTypes.exports.string,
    to: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.object]).isRequired
  };
}
var cache$1$1 = {};
var cacheLimit$1 = 1e4;
var cacheCount$1 = 0;
function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1$1[cacheKey] || (cache$1$1[cacheKey] = {});
  if (pathCache[path])
    return pathCache[path];
  var keys2 = [];
  var regexp = pathToRegexp$1.exports(path, keys2, options);
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
function evalChildrenDev(children, props, path) {
  var value = children(props);
  process.env.NODE_ENV !== "production" ? warning$1(value !== void 0, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? ' path="' + path + '"' : "") + ">, but you ") + "should have returned a React element or `null`") : void 0;
  return value || null;
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
      !context$1 ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Route> outside a <Router>") : invariant(false) : void 0;
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
      }, props.match ? children ? typeof children === "function" ? process.env.NODE_ENV !== "production" ? evalChildrenDev(children, props, _this.props.path) : children(props) : children : component ? /* @__PURE__ */ modules$1.createElement(component, props) : render2 ? render2(props) : null : typeof children === "function" ? process.env.NODE_ENV !== "production" ? evalChildrenDev(children, props, _this.props.path) : children(props) : null);
    });
  };
  return Route2;
}(modules$1.Component);
if (process.env.NODE_ENV !== "production") {
  Route.propTypes = {
    children: propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.node]),
    component: function component(props, propName) {
      if (props[propName] && !reactIsExports.isValidElementType(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: propTypes.exports.bool,
    location: propTypes.exports.object,
    path: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.arrayOf(propTypes.exports.string)]),
    render: propTypes.exports.func,
    sensitive: propTypes.exports.bool,
    strict: propTypes.exports.bool
  };
  Route.prototype.componentDidMount = function() {
    process.env.NODE_ENV !== "production" ? warning$1(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : void 0;
    process.env.NODE_ENV !== "production" ? warning$1(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : void 0;
    process.env.NODE_ENV !== "production" ? warning$1(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : void 0;
  };
  Route.prototype.componentDidUpdate = function(prevProps) {
    process.env.NODE_ENV !== "production" ? warning$1(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
    process.env.NODE_ENV !== "production" ? warning$1(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
  };
}
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
    process.env.NODE_ENV !== "production" ? invariant(false, "You cannot %s with <StaticRouter>") : invariant(false);
  };
}
function noop$1() {
}
var StaticRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(StaticRouter2, _React$Component);
  function StaticRouter2() {
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
      return noop$1;
    };
    _this.handleBlock = function() {
      return noop$1;
    };
    return _this;
  }
  var _proto = StaticRouter2.prototype;
  _proto.navigateTo = function navigateTo(location2, action) {
    var _this$props = this.props, _this$props$basename = _this$props.basename, basename2 = _this$props$basename === void 0 ? "" : _this$props$basename, _this$props$context = _this$props.context, context2 = _this$props$context === void 0 ? {} : _this$props$context;
    context2.action = action;
    context2.location = addBasename(basename2, createLocation(location2));
    context2.url = createURL(context2.location);
  };
  _proto.render = function render() {
    var _this$props2 = this.props, _this$props2$basename = _this$props2.basename, basename2 = _this$props2$basename === void 0 ? "" : _this$props2$basename, _this$props2$context = _this$props2.context, context2 = _this$props2$context === void 0 ? {} : _this$props2$context, _this$props2$location = _this$props2.location, location2 = _this$props2$location === void 0 ? "/" : _this$props2$location, rest = _objectWithoutPropertiesLoose$1(_this$props2, ["basename", "context", "location"]);
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
  return StaticRouter2;
}(modules$1.Component);
if (process.env.NODE_ENV !== "production") {
  StaticRouter.propTypes = {
    basename: propTypes.exports.string,
    context: propTypes.exports.object,
    location: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.object])
  };
  StaticRouter.prototype.componentDidMount = function() {
    process.env.NODE_ENV !== "production" ? warning$1(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.") : void 0;
  };
}
var Switch$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Switch2, _React$Component);
  function Switch2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Switch2.prototype;
  _proto.render = function render() {
    var _this = this;
    return /* @__PURE__ */ modules$1.createElement(context.Consumer, null, function(context2) {
      !context2 ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Switch> outside a <Router>") : invariant(false) : void 0;
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
if (process.env.NODE_ENV !== "production") {
  Switch$1.propTypes = {
    children: propTypes.exports.node,
    location: propTypes.exports.object
  };
  Switch$1.prototype.componentDidUpdate = function(prevProps) {
    process.env.NODE_ENV !== "production" ? warning$1(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
    process.env.NODE_ENV !== "production" ? warning$1(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
  };
}
var useContext = modules$1.useContext;
function useLocation() {
  if (process.env.NODE_ENV !== "production") {
    !(typeof useContext === "function") ? process.env.NODE_ENV !== "production" ? invariant(false, "You must use React >= 16.8 in order to use useLocation()") : invariant(false) : void 0;
  }
  return useContext(context).location;
}
function useRouteMatch(path) {
  if (process.env.NODE_ENV !== "production") {
    !(typeof useContext === "function") ? process.env.NODE_ENV !== "production" ? invariant(false, "You must use React >= 16.8 in order to use useRouteMatch()") : invariant(false) : void 0;
  }
  var location2 = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location2.pathname, path) : match;
}
if (process.env.NODE_ENV !== "production") {
  if (typeof window !== "undefined") {
    var global$1 = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };
    if (global$1[key] && global$1[key] !== "esm") {
      var initialBuildName = buildNames[global$1[key]];
      var secondaryBuildName = buildNames["esm"];
      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }
    global$1[key] = "esm";
  }
}
var BrowserRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(BrowserRouter2, _React$Component);
  function BrowserRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }
  var _proto = BrowserRouter2.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ modules$1.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return BrowserRouter2;
}(modules$1.Component);
if (process.env.NODE_ENV !== "production") {
  BrowserRouter.propTypes = {
    basename: propTypes.exports.string,
    children: propTypes.exports.node,
    forceRefresh: propTypes.exports.bool,
    getUserConfirmation: propTypes.exports.func,
    keyLength: propTypes.exports.number
  };
  BrowserRouter.prototype.componentDidMount = function() {
    process.env.NODE_ENV !== "production" ? warning$1(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.") : void 0;
  };
}
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
if (process.env.NODE_ENV !== "production") {
  HashRouter.propTypes = {
    basename: propTypes.exports.string,
    children: propTypes.exports.node,
    getUserConfirmation: propTypes.exports.func,
    hashType: propTypes.exports.oneOf(["hashbang", "noslash", "slash"])
  };
  HashRouter.prototype.componentDidMount = function() {
    process.env.NODE_ENV !== "production" ? warning$1(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.") : void 0;
  };
}
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
  var innerRef = _ref.innerRef, navigate = _ref.navigate, _onClick = _ref.onClick, rest = _objectWithoutPropertiesLoose$1(_ref, ["innerRef", "navigate", "onClick"]);
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
if (process.env.NODE_ENV !== "production") {
  LinkAnchor.displayName = "LinkAnchor";
}
var Link = forwardRef(function(_ref2, forwardedRef) {
  var _ref2$component = _ref2.component, component = _ref2$component === void 0 ? LinkAnchor : _ref2$component, replace = _ref2.replace, to = _ref2.to, innerRef = _ref2.innerRef, rest = _objectWithoutPropertiesLoose$1(_ref2, ["component", "replace", "to", "innerRef"]);
  return /* @__PURE__ */ modules$1.createElement(context.Consumer, null, function(context2) {
    !context2 ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Link> outside a <Router>") : invariant(false) : void 0;
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
if (process.env.NODE_ENV !== "production") {
  var toType = propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.object, propTypes.exports.func]);
  var refType = propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func, propTypes.exports.shape({
    current: propTypes.exports.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: propTypes.exports.func,
    replace: propTypes.exports.bool,
    target: propTypes.exports.string,
    to: toType.isRequired
  };
}
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
var NavLink = forwardRef$1(function(_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"], ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent, _ref$activeClassName = _ref.activeClassName, activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName, activeStyle = _ref.activeStyle, classNameProp = _ref.className, exact = _ref.exact, isActiveProp = _ref.isActive, locationProp = _ref.location, sensitive = _ref.sensitive, strict = _ref.strict, styleProp = _ref.style, to = _ref.to, innerRef = _ref.innerRef, rest = _objectWithoutPropertiesLoose$1(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return /* @__PURE__ */ modules$1.createElement(context.Consumer, null, function(context2) {
    !context2 ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <NavLink> outside a <Router>") : invariant(false) : void 0;
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
    var style2 = typeof styleProp === "function" ? styleProp(isActive) : styleProp;
    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style2 = _extends({}, style2, activeStyle);
    }
    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className,
      style: style2,
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
if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = propTypes.exports.oneOf(["page", "step", "location", "date", "time", "true", "false"]);
  NavLink.propTypes = _extends({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: propTypes.exports.string,
    activeStyle: propTypes.exports.object,
    className: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
    exact: propTypes.exports.bool,
    isActive: propTypes.exports.func,
    location: propTypes.exports.object,
    sensitive: propTypes.exports.bool,
    strict: propTypes.exports.bool,
    style: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.func])
  });
}
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
    } catch (e) {
      console.error(`Load module ${path} error:`, e);
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
function useRouteMap() {
  const flatRouteMap = (tree) => {
    const result = [];
    tree.forEach((child) => {
      if (Array.isArray(child.children)) {
        result.push(...flatRouteMap(child.children));
      } else {
        result.push(child);
      }
    });
    return result;
  };
  return useAsyncImport(`/route-map.json`, ({ default: items }) => ({
    ...items,
    flattenRoutes: flatRouteMap(items.tree)
  }));
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
      const sourceKey = currentValue.sourcesContent.trim();
      return Object.assign(previousValue, {
        [sourceKey]: (...args) => {
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
var hasOwnProperty$7 = Object.prototype.hasOwnProperty;
function extend$2() {
  var target = {};
  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (hasOwnProperty$7.call(source, key)) {
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
var defineProperty$3 = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray$4 = function isArray(arr) {
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
  if (defineProperty$3 && options.name === "__proto__") {
    defineProperty$3(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
};
var getProperty = function getProperty2(obj, name2) {
  if (name2 === "__proto__") {
    if (!hasOwn.call(obj, name2)) {
      return void 0;
    } else if (gOPD) {
      return gOPD(obj, name2).value;
    }
  }
  return obj[name2];
};
var extend$1 = function extend() {
  var options, name2, src, copy2, copyIsArray, clone;
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
      for (name2 in options) {
        src = getProperty(target, name2);
        copy2 = getProperty(options, name2);
        if (target !== copy2) {
          if (deep && copy2 && (isPlainObject(copy2) || (copyIsArray = isArray$4(copy2)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray$4(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            }
            setProperty(target, { name: name2, newValue: extend(deep, clone, copy2) });
          } else if (typeof copy2 !== "undefined") {
            setProperty(target, { name: name2, newValue: copy2 });
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
var vfile$1 = { exports: {} };
var own$7 = {}.hasOwnProperty;
var unistUtilStringifyPosition = stringify$4;
function stringify$4(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if (own$7.call(value, "position") || own$7.call(value, "type")) {
    return position(value.position);
  }
  if (own$7.call(value, "start") || own$7.call(value, "end")) {
    return position(value);
  }
  if (own$7.call(value, "line") || own$7.call(value, "column")) {
    return point(value);
  }
  return "";
}
function point(point2) {
  if (!point2 || typeof point2 !== "object") {
    point2 = {};
  }
  return index$5(point2.line) + ":" + index$5(point2.column);
}
function position(pos) {
  if (!pos || typeof pos !== "object") {
    pos = {};
  }
  return point(pos.start) + "-" + point(pos.end);
}
function index$5(value) {
  return value && typeof value === "number" ? value : 1;
}
var stringify$3 = unistUtilStringifyPosition;
var vfileMessage = VMessage$1;
function VMessagePrototype() {
}
VMessagePrototype.prototype = Error.prototype;
VMessage$1.prototype = new VMessagePrototype();
var proto$2 = VMessage$1.prototype;
proto$2.file = "";
proto$2.name = "";
proto$2.reason = "";
proto$2.message = "";
proto$2.stack = "";
proto$2.fatal = null;
proto$2.column = null;
proto$2.line = null;
function VMessage$1(reason, position2, origin) {
  var parts;
  var range;
  var location2;
  if (typeof position2 === "string") {
    origin = position2;
    position2 = null;
  }
  parts = parseOrigin(origin);
  range = stringify$3(position2) || "1:1";
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
  return joined === void 0 ? "." : normalize$4(joined);
}
function normalize$4(path) {
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
var p = minpath_browser;
var proc = minproc_browser;
var buffer$1 = isBuffer;
var core$1 = VFile$1;
var own$6 = {}.hasOwnProperty;
var order = ["history", "path", "basename", "stem", "extname", "dirname"];
VFile$1.prototype.toString = toString$4;
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
    if (own$6.call(options, prop)) {
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
  return typeof this.path === "string" ? p.dirname(this.path) : void 0;
}
function setDirname(dirname2) {
  assertPath(this.path, "dirname");
  this.path = p.join(dirname2 || "", this.basename);
}
function getBasename() {
  return typeof this.path === "string" ? p.basename(this.path) : void 0;
}
function setBasename(basename2) {
  assertNonEmpty(basename2, "basename");
  assertPart(basename2, "basename");
  this.path = p.join(this.dirname || "", basename2);
}
function getExtname() {
  return typeof this.path === "string" ? p.extname(this.path) : void 0;
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
  this.path = p.join(this.dirname, this.stem + (extname2 || ""));
}
function getStem() {
  return typeof this.path === "string" ? p.basename(this.path, this.extname) : void 0;
}
function setStem(stem) {
  assertNonEmpty(stem, "stem");
  assertPart(stem, "stem");
  this.path = p.join(this.dirname || "", stem + (this.extname || ""));
}
function toString$4(encoding) {
  return (this.contents || "").toString(encoding);
}
function assertPart(part, name2) {
  if (part && part.indexOf(p.sep) > -1) {
    throw new Error("`" + name2 + "` cannot be a path: did not expect `" + p.sep + "`");
  }
}
function assertNonEmpty(part, name2) {
  if (!part) {
    throw new Error("`" + name2 + "` cannot be empty");
  }
}
function assertPath(path, name2) {
  if (!path) {
    throw new Error("Setting `" + name2 + "` requires `path` to be set too");
  }
}
var VMessage = vfileMessage;
var VFile = core$1;
var lib$1 = VFile;
VFile.prototype.message = message$1;
VFile.prototype.info = info$1;
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
function info$1() {
  var message2 = this.message.apply(this, arguments);
  message2.fatal = null;
  return message2;
}
(function(module) {
  module.exports = lib$1;
})(vfile$1);
var bail = bail_1;
var buffer = isBuffer;
var extend2 = extend$1;
var plain = isPlainObj;
var trough = trough_1;
var vfile = vfile$1.exports;
var unified_1 = unified$1().freeze();
var slice = [].slice;
var own$5 = {}.hasOwnProperty;
var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
function pipelineParse(p2, ctx2) {
  ctx2.tree = p2.parse(ctx2.file);
}
function pipelineRun(p2, ctx2, next) {
  p2.run(ctx2.tree, ctx2.file, done);
  function done(error, tree, file) {
    if (error) {
      next(error);
    } else {
      ctx2.tree = tree;
      ctx2.file = file;
      next();
    }
  }
}
function pipelineStringify(p2, ctx2) {
  var result = p2.stringify(ctx2.tree, ctx2.file);
  if (result === void 0 || result === null)
    ;
  else if (typeof result === "string" || buffer(result)) {
    if ("value" in ctx2.file) {
      ctx2.file.value = result;
    }
    ctx2.file.contents = result;
  } else {
    ctx2.file.result = result;
  }
}
function unified$1() {
  var attachers = [];
  var transformers = trough();
  var namespace = {};
  var freezeIndex = -1;
  var frozen;
  processor.data = data2;
  processor.freeze = freeze;
  processor.attachers = attachers;
  processor.use = use;
  processor.parse = parse2;
  processor.stringify = stringify2;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process2;
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
  function data2(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", frozen);
        namespace[key] = value;
        return processor;
      }
      return own$5.call(namespace, key) && namespace[key] || null;
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
      var entry = find2(plugin);
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
  function find2(plugin) {
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
  function process2(doc, cb) {
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
    process2(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
function newable(value, name2) {
  return typeof value === "function" && value.prototype && (keys(value.prototype) || name2 in value.prototype);
}
function keys(value) {
  var key;
  for (key in value) {
    return true;
  }
  return false;
}
function assertParser(name2, Parser) {
  if (typeof Parser !== "function") {
    throw new Error("Cannot `" + name2 + "` without `Parser`");
  }
}
function assertCompiler(name2, Compiler) {
  if (typeof Compiler !== "function") {
    throw new Error("Cannot `" + name2 + "` without `Compiler`");
  }
}
function assertUnfrozen(name2, frozen) {
  if (frozen) {
    throw new Error("Cannot invoke `" + name2 + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.");
  }
}
function assertNode(node) {
  if (!node || typeof node.type !== "string") {
    throw new Error("Expected node, got `" + node + "`");
  }
}
function assertDone(name2, asyncName, complete) {
  if (!complete) {
    throw new Error("`" + name2 + "` finished async. Use `" + asyncName + "` instead");
  }
}
var mdastUtilFromMarkdown = { exports: {} };
var mdastUtilToString = toString$3;
function toString$3(node) {
  return node && (node.value || node.alt || node.title || "children" in node && all(node.children) || "length" in node && all(node)) || "";
}
function all(values) {
  var result = [];
  var index2 = -1;
  while (++index2 < values.length) {
    result[index2] = toString$3(values[index2]);
  }
  return result.join("");
}
var assign$5 = Object.assign;
var assign_1 = assign$5;
var own$4 = {}.hasOwnProperty;
var hasOwnProperty$6 = own$4;
function normalizeIdentifier$3(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var normalizeIdentifier_1 = normalizeIdentifier$3;
var fromCharCode$5 = String.fromCharCode;
var fromCharCode_1 = fromCharCode$5;
var fromCharCode$4 = fromCharCode_1;
function safeFromInt$1(value, base) {
  var code = parseInt(value, base);
  if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) {
    return "\uFFFD";
  }
  return fromCharCode$4(code);
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
    return data2(code);
  }
  function data2(code) {
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
    return data2;
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
var splice$3 = [].splice;
var splice_1 = splice$3;
var splice$2 = splice_1;
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
    splice$2.apply(list2, parameters);
  } else {
    if (remove)
      splice$2.apply(list2, [start, remove]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      splice$2.apply(list2, parameters);
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
    return data2(code);
  }
  function data2(code) {
    if (code === null) {
      return contentEnd(code);
    }
    if (markdownLineEnding$f(code)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
    }
    effects.consume(code);
    return data2;
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
    return data2;
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
      return data2;
    }
    function data2(code) {
      if (atBreak(code)) {
        effects.exit("data");
        return text2(code);
      }
      effects.consume(code);
      return data2;
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
  var data2;
  var chunk;
  var index2;
  var bufferIndex;
  var size;
  var tabs;
  var token;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      data2 = events[eventIndex - 1][1];
      chunks = context2.sliceStream(data2);
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
            line: data2.end.line,
            column: data2.end.column - size,
            offset: data2.end.offset - size,
            _index: data2.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data2.start._bufferIndex + bufferIndex
          },
          end: shallow$4(data2.end)
        };
        data2.end = shallow$4(token.start);
        if (data2.start.offset === data2.end.offset) {
          assign$2(data2, token);
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
var hasOwnProperty$5 = hasOwnProperty$6;
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
    left = hasOwnProperty$5.call(all2, hook) ? all2[hook] : all2[hook] = {};
    right = extension2[hook];
    for (code in right) {
      left[code] = constructs$2(miniflat$2(right[code]), hasOwnProperty$5.call(left, code) ? left[code] : []);
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
var fromCharCode$3 = fromCharCode_1;
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
      value = fromCharCode$3(chunk);
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
      restore: restore2,
      from: startEventsIndex
    };
    function restore2() {
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
var fromCharCode$2 = fromCharCode_1;
function regexCheck$8(regex) {
  return check;
  function check(code) {
    return regex.test(fromCharCode$2(code));
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
var semicolon$1 = 59;
var decodeEntity_browser = decodeEntity$2;
function decodeEntity$2(characters) {
  var entity = "&" + characters + ";";
  var char;
  el = el || document.createElement("i");
  el.innerHTML = entity;
  char = el.textContent;
  if (char.charCodeAt(char.length - 1) === semicolon$1 && characters !== "semi") {
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
var decodeEntity$1 = decodeEntity_browser;
var asciiAlphanumeric$2 = asciiAlphanumeric_1;
var asciiDigit$1 = asciiDigit_1;
var asciiHexDigit = asciiHexDigit_1;
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}
var decodeEntity__default = /* @__PURE__ */ _interopDefaultLegacy(decodeEntity$1);
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
    return data2(code);
  }
  function data2(code) {
    if (code === null || code === 32 || code === 96 || markdownLineEnding$b(code)) {
      effects.exit("codeTextData");
      return gap(code);
    }
    effects.consume(code);
    return data2;
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
    return data2(code);
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
  var data2;
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
    if (code === null || code === 91 || code === 93 && !data2 || code === 94 && !size && "_hiddenFootnoteSupport" in self2.parser.constructs || size > 999) {
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
    data2 = data2 || !markdownSpace$6(code);
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
    return data2(code);
  }
  function sequence(code) {
    if (code === 35) {
      effects.consume(code);
      return sequence;
    }
    effects.exit("atxHeadingSequence");
    return headingBreak(code);
  }
  function data2(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace$3(code)) {
      effects.exit("atxHeadingText");
      return headingBreak(code);
    }
    effects.consume(code);
    return data2;
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
var fromCharCode$1 = fromCharCode_1;
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
      buffer2 = fromCharCode$1(code);
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
      buffer2 = fromCharCode$1(code);
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
      buffer2 += fromCharCode$1(code);
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
      buffer2 += fromCharCode$1(code);
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
function parse$6(options) {
  var settings = options || {};
  var parser2 = {
    defined: [],
    constructs: combineExtensions([constructs].concat(miniflat(settings.extensions))),
    content: create2(content),
    document: create2(document$1),
    flow: create2(flow),
    string: create2(text.string),
    text: create2(text.text)
  };
  return parser2;
  function create2(initializer) {
    return creator;
    function creator(from) {
      return createTokenizer(parser2, initializer, from);
    }
  }
}
var parse_1 = parse$6;
var search$1 = /[\0\t\n\r]/g;
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
      search$1.lastIndex = startPosition;
      match = search$1.exec(value);
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
var dist = fromMarkdown$1;
var toString$2 = mdastUtilToString;
var assign = assign_1;
var own$3 = hasOwnProperty$6;
var normalizeIdentifier = normalizeIdentifier_1;
var safeFromInt = safeFromInt_1;
var parser = parse_1;
var preprocessor = preprocess_1;
var postprocess = postprocess_1;
var decode$1 = decodeEntity_browser;
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
      htmlFlow: opener(html2, buffer2),
      htmlFlowData: onenterdata,
      htmlText: opener(html2, buffer2),
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
  var data2 = {};
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
      if (own$3.call(handler, events[index2][1].type)) {
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
    data2[key] = value;
  }
  function getData(key) {
    return data2[key];
  }
  function point2(d) {
    return { line: d.line, column: d.column, offset: d.offset };
  }
  function opener(create2, and) {
    return open;
    function open(token) {
      enter.call(this, create2(token), token);
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
    return toString$2(this.stack.pop());
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
    var data3 = this.resume();
    this.stack[this.stack.length - 1].lang = data3;
  }
  function onexitcodefencedfencemeta() {
    var data3 = this.resume();
    this.stack[this.stack.length - 1].meta = data3;
  }
  function onexitcodefencedfence() {
    if (getData("flowCodeInside"))
      return;
    this.buffer();
    setData("flowCodeInside", true);
  }
  function onexitcodefenced() {
    var data3 = this.resume();
    this.stack[this.stack.length - 1].value = data3.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    setData("flowCodeInside");
  }
  function onexitcodeindented() {
    var data3 = this.resume();
    this.stack[this.stack.length - 1].value = data3;
  }
  function onexitdefinitionlabelstring(token) {
    var label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    var data3 = this.resume();
    this.stack[this.stack.length - 1].title = data3;
  }
  function onexitdefinitiondestinationstring() {
    var data3 = this.resume();
    this.stack[this.stack.length - 1].url = data3;
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
    var data3 = this.resume();
    this.stack[this.stack.length - 1].value = data3;
  }
  function onexithtmltext() {
    var data3 = this.resume();
    this.stack[this.stack.length - 1].value = data3;
  }
  function onexitcodetext() {
    var data3 = this.resume();
    this.stack[this.stack.length - 1].value = data3;
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
    var data3 = this.resume();
    this.stack[this.stack.length - 1].url = data3;
  }
  function onexitresourcetitlestring() {
    var data3 = this.resume();
    this.stack[this.stack.length - 1].title = data3;
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
    var data3 = this.sliceSerialize(token);
    var type2 = getData("characterReferenceType");
    var value;
    var tail;
    if (type2) {
      value = safeFromInt(data3, type2 === "characterReferenceMarkerNumeric" ? 10 : 16);
      setData("characterReferenceType");
    } else {
      value = decode$1(data3);
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
  function html2() {
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
    left = own$3.call(config, key) ? config[key] : config[key] = {};
    if (key === "canContainEols" || key === "transforms") {
      config[key] = [].concat(left, extension2[key]);
    } else {
      Object.assign(left, extension2[key]);
    }
  }
}
(function(module) {
  module.exports = dist;
})(mdastUtilFromMarkdown);
var remarkParse = parse$5;
var fromMarkdown = mdastUtilFromMarkdown.exports;
function parse$5(options) {
  var self2 = this;
  this.Parser = parse2;
  function parse2(doc) {
    return fromMarkdown(doc, Object.assign({}, self2.data("settings"), options, {
      extensions: self2.data("micromarkExtensions") || [],
      mdastExtensions: self2.data("fromMarkdownExtensions") || []
    }));
  }
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
      var depth = 0, i, n;
      for (i = 0, n = parents.length; i < n; i++) {
        if (parents[i].type === "list")
          depth += 1;
      }
      for (i = 0, n = listNode.children.length; i < n; i++) {
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
function anyFactory(tests2) {
  var checks2 = [];
  var index2 = -1;
  while (++index2 < tests2.length) {
    checks2[index2] = convert$1(tests2[index2]);
  }
  return any;
  function any() {
    var index3 = -1;
    while (++index3 < checks2.length) {
      if (checks2[index3].apply(this, arguments)) {
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
function identity(d) {
  return d;
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
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    var value = typeof node === "object" && node !== null ? node : {};
    var name2;
    if (typeof value.type === "string") {
      name2 = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      visit2.displayName = "node (" + color(value.type + (name2 ? "<" + name2 + ">" : "")) + ")";
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
          subresult = factory2(node.children[offset], offset, grandparents)();
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
var splice$1 = [].splice;
disallowNode$1.ofType = function(types2, mode) {
  return ifNotMatch(allow, mode);
  function allow(node, index2, parent) {
    return !types2.includes(node.type);
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
      splice$1.apply(parent.children, parameters);
      return index2;
    }
  }
}
const require$$3 = /* @__PURE__ */ getAugmentedNamespace(react_1a37f6a0);
var React$9 = require$$3;
var xtend$3 = immutable;
var ReactIs = requireReactIs();
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
  return React$9.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || void 0);
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
  var isSimpleRenderer = typeof renderer === "string" || renderer === React$9.Fragment;
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
      assignDefined(props, xtend$3(ref, {
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
      assignDefined(props, xtend$3(node, {
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
    var Fragment2 = React$9.Fragment || "div";
    return React$9.createElement(Fragment2, null, el2);
  }
  if (el2.props.children || parsedChildren) {
    var children = React$9.Children.toArray(el2.props.children).concat(parsedChildren);
    return React$9.cloneElement(el2, null, children);
  }
  return React$9.cloneElement(el2, null);
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
var xtend$2 = immutable;
var React$8 = require$$3;
var supportsStringRender = parseInt((React$8.version || "16").slice(0, 2), 10) >= 16;
var createElement$1 = React$8.createElement;
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
  list: List$2,
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
  return supportsStringRender ? children : createElement$1("span", null, children);
}
function Root(props) {
  var className = props.className;
  var root2 = !className && React$8.Fragment || "div";
  return createElement$1(root2, className ? {
    className
  } : null, props.children);
}
function SimpleRenderer(tag, props) {
  return createElement$1(tag, getCoreProps(props), props.children);
}
function TableCell(props) {
  var style2 = props.align ? {
    textAlign: props.align
  } : void 0;
  var coreProps = getCoreProps(props);
  return createElement$1(props.isHeader ? "th" : "td", style2 ? xtend$2({
    style: style2
  }, coreProps) : coreProps, props.children);
}
function Heading(props) {
  return createElement$1("h".concat(props.level), getCoreProps(props), props.children);
}
function List$2(props) {
  var attrs = getCoreProps(props);
  if (props.start !== null && props.start !== 1 && props.start !== void 0) {
    attrs.start = props.start.toString();
  }
  return createElement$1(props.ordered ? "ol" : "ul", attrs, props.children);
}
function ListItem(props) {
  var checkbox = null;
  if (props.checked !== null && props.checked !== void 0) {
    var checked = props.checked;
    checkbox = createElement$1("input", {
      type: "checkbox",
      checked,
      readOnly: true
    });
  }
  return createElement$1("li", getCoreProps(props), checkbox, props.children);
}
function CodeBlock(props) {
  var className = props.language && "language-".concat(props.language);
  var code = createElement$1("code", className ? {
    className
  } : null, props.value);
  return createElement$1("pre", getCoreProps(props), code);
}
function InlineCode(props) {
  return createElement$1("code", getCoreProps(props), props.children);
}
function Html(props) {
  if (props.skipHtml) {
    return null;
  }
  var dangerous = props.allowDangerousHtml || props.escapeHtml === false;
  var tag = props.isBlock ? "div" : "span";
  if (!dangerous) {
    return createElement$1(React$8.Fragment || tag, null, props.value);
  }
  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement$1(tag, nodeProps);
}
function ParsedHtml(props) {
  return props["data-sourcepos"] ? React$8.cloneElement(props.element, {
    "data-sourcepos": props["data-sourcepos"]
  }) : props.element;
}
function VirtualHtml(props) {
  return createElement$1(props.tag, getCoreProps(props), props.children);
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
var xtend$1 = immutable;
var unified = unified_1;
var parse$4 = remarkParse;
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
  var renderers2 = xtend$1(defaultRenderers, props.renderers);
  var processor = unified().use(parse$4).use(props.plugins || []);
  var tree = processor.runSync(processor.parse(src));
  var renderProps = xtend$1(props, {
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
const index$4 = "";
var Component = {};
var toggleSelection = function() {
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
var deselectCurrent = toggleSelection;
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
function copy$1(text2, options) {
  var debug, message2, reselectPrevious, range, selection, mark2, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark2 = document.createElement("span");
    mark2.textContent = text2;
    mark2.ariaHidden = "true";
    mark2.style.all = "unset";
    mark2.style.position = "fixed";
    mark2.style.top = 0;
    mark2.style.clip = "rect(0, 0, 0, 0)";
    mark2.style.whiteSpace = "pre";
    mark2.style.webkitUserSelect = "text";
    mark2.style.MozUserSelect = "text";
    mark2.style.msUserSelect = "text";
    mark2.style.userSelect = "text";
    mark2.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text2);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text2);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark2);
    range.selectNodeContents(mark2);
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
    if (mark2) {
      document.body.removeChild(mark2);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard$1 = copy$1;
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
Object.defineProperty(Component, "__esModule", {
  value: true
});
Component.CopyToClipboard = void 0;
var _react = _interopRequireDefault$8(require$$3);
var _copyToClipboard = _interopRequireDefault$8(copyToClipboard$1);
var _excluded$1 = ["text", "onCopy", "options", "children"];
function _interopRequireDefault$8(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function ownKeys$2(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols2);
  }
  return keys2;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CopyToClipboard$1 = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(CopyToClipboard2, _React$PureComponent);
  var _super = _createSuper(CopyToClipboard2);
  function CopyToClipboard2() {
    var _this;
    _classCallCheck(this, CopyToClipboard2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$1(_assertThisInitialized(_this), "onClick", function(event) {
      var _this$props = _this.props, text2 = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
      var elem = _react["default"].Children.only(children);
      var result = (0, _copyToClipboard["default"])(text2, options);
      if (onCopy) {
        onCopy(text2, result);
      }
      if (elem && elem.props && typeof elem.props.onClick === "function") {
        elem.props.onClick(event);
      }
    });
    return _this;
  }
  _createClass(CopyToClipboard2, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props;
      _this$props2.text;
      _this$props2.onCopy;
      _this$props2.options;
      var children = _this$props2.children, props = _objectWithoutProperties(_this$props2, _excluded$1);
      var elem = _react["default"].Children.only(children);
      return /* @__PURE__ */ _react["default"].cloneElement(elem, _objectSpread$2(_objectSpread$2({}, props), {}, {
        onClick: this.onClick
      }));
    }
  }]);
  return CopyToClipboard2;
}(_react["default"].PureComponent);
Component.CopyToClipboard = CopyToClipboard$1;
_defineProperty$1(CopyToClipboard$1, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var _require = Component, CopyToClipboard = _require.CopyToClipboard;
CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;
var objectWithoutProperties = { exports: {} };
var objectWithoutPropertiesLoose = { exports: {} };
var hasRequiredObjectWithoutPropertiesLoose;
function requireObjectWithoutPropertiesLoose() {
  if (hasRequiredObjectWithoutPropertiesLoose)
    return objectWithoutPropertiesLoose.exports;
  hasRequiredObjectWithoutPropertiesLoose = 1;
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
  return objectWithoutPropertiesLoose.exports;
}
var hasRequiredObjectWithoutProperties;
function requireObjectWithoutProperties() {
  if (hasRequiredObjectWithoutProperties)
    return objectWithoutProperties.exports;
  hasRequiredObjectWithoutProperties = 1;
  (function(module) {
    var objectWithoutPropertiesLoose2 = requireObjectWithoutPropertiesLoose();
    function _objectWithoutProperties2(source, excluded) {
      if (source == null)
        return {};
      var target = objectWithoutPropertiesLoose2(source, excluded);
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
    module.exports = _objectWithoutProperties2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(objectWithoutProperties);
  return objectWithoutProperties.exports;
}
var objectWithoutPropertiesExports = requireObjectWithoutProperties();
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var defineProperty$2 = { exports: {} };
var hasRequiredDefineProperty;
function requireDefineProperty() {
  if (hasRequiredDefineProperty)
    return defineProperty$2.exports;
  hasRequiredDefineProperty = 1;
  (function(module) {
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
    module.exports = _defineProperty2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(defineProperty$2);
  return defineProperty$2.exports;
}
var definePropertyExports = requireDefineProperty();
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols2);
  }
  return keys2;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      definePropertyExports(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1)
    return arr;
  if (arrLength === 2) {
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength === 3) {
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength >= 4) {
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}
var classNameCombinations = {};
function getClassNameCombinations(classNames2) {
  if (classNames2.length === 0 || classNames2.length === 1)
    return classNames2;
  var key = classNames2.join(".");
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames2);
  }
  return classNameCombinations[key];
}
function createStyleObject(classNames2) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : void 0;
  var nonTokenClassNames = classNames2.filter(function(className) {
    return className !== "token";
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function(styleObject, className) {
    return _objectSpread$1(_objectSpread$1({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames2) {
  return classNames2.join(" ");
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    childrenCount += 1;
    return children.map(function(child, i) {
      return createElement({
        node: child,
        stylesheet,
        useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style2 = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key;
  var properties = node.properties, type2 = node.type, TagName = node.tagName, value = node.value;
  if (type2 === "text") {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;
    if (!useInlineStyles) {
      props = _objectSpread$1(_objectSpread$1({}, properties), {}, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
        selector.split(".").forEach(function(className2) {
          if (!classes.includes(className2))
            classes.push(className2);
        });
        return classes;
      }, []);
      var startingClassName = properties.className && properties.className.includes("token") ? ["token"] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function(className2) {
        return !allStylesheetSelectors.includes(className2);
      }));
      props = _objectSpread$1(_objectSpread$1({}, properties), {}, {
        className: createClassNameString(className) || void 0,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style2), stylesheet)
      });
    }
    var children = childrenCreator(node.children);
    return /* @__PURE__ */ modules$1.createElement(TagName, _extends({
      key
    }, props), children);
  }
}
const checkForListedLanguage = function(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
};
var _excluded = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
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
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      definePropertyExports(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
  var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, style2 = _ref.style;
  return lines.map(function(_, i) {
    var number2 = i + startingLineNumber;
    return /* @__PURE__ */ modules$1.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof style2 === "function" ? style2(number2) : style2
    }, "".concat(number2, "\n"));
  });
}
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString, codeStyle = _ref2.codeStyle, _ref2$containerStyle = _ref2.containerStyle, containerStyle = _ref2$containerStyle === void 0 ? {
    "float": "left",
    paddingRight: "10px"
  } : _ref2$containerStyle, _ref2$numberStyle = _ref2.numberStyle, numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle, startingLineNumber = _ref2.startingLineNumber;
  return /* @__PURE__ */ modules$1.createElement("code", {
    style: Object.assign({}, codeStyle, containerStyle)
  }, getAllLineNumbers({
    lines: codeString.replace(/\n$/, "").split("\n"),
    style: numberStyle,
    startingLineNumber
  }));
}
function getEmWidthOfNumber(num) {
  return "".concat(num.toString().length, ".25em");
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: inlineLineNumberStyle
    },
    children: [{
      type: "text",
      value: lineNumber
    }]
  };
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  var defaultLineNumberStyle = {
    display: "inline-block",
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  };
  var customLineNumberStyle = typeof lineNumberStyle === "function" ? lineNumberStyle(lineNumber) : lineNumberStyle;
  var assembledStyle = _objectSpread(_objectSpread({}, defaultLineNumberStyle), customLineNumberStyle);
  return assembledStyle;
}
function createLineElement(_ref3) {
  var children = _ref3.children, lineNumber = _ref3.lineNumber, lineNumberStyle = _ref3.lineNumberStyle, largestLineNumber = _ref3.largestLineNumber, showInlineLineNumbers = _ref3.showInlineLineNumbers, _ref3$lineProps = _ref3.lineProps, lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className, showLineNumbers = _ref3.showLineNumbers, wrapLongLines = _ref3.wrapLongLines;
  var properties = typeof lineProps === "function" ? lineProps(lineNumber) : lineProps;
  properties["className"] = className;
  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  if (wrapLongLines & showLineNumbers) {
    properties.style = _objectSpread(_objectSpread({}, properties.style), {}, {
      display: "flex"
    });
  }
  return {
    type: "element",
    tagName: "span",
    properties,
    children
  };
}
function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === "text") {
      newTree.push(createLineElement({
        children: [node],
        className: _toConsumableArray(new Set(className))
      }));
    } else if (node.children) {
      var classNames2 = className.concat(node.properties.className);
      flattenCodeTree(node.children, classNames2).forEach(function(i2) {
        return newTree.push(i2);
      });
    }
  }
  return newTree;
}
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4;
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index2 = 0;
  function createWrappedLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return createLineElement({
      children: children2,
      lineNumber: lineNumber2,
      lineNumberStyle,
      largestLineNumber,
      showInlineLineNumbers,
      lineProps,
      className,
      showLineNumbers,
      wrapLongLines
    });
  }
  function createUnwrappedLine(children2, lineNumber2) {
    if (showLineNumbers && lineNumber2 && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber2, largestLineNumber);
      children2.unshift(getInlineLineNumber(lineNumber2, inlineLineNumberStyle));
    }
    return children2;
  }
  function createLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children2, lineNumber2, className) : createUnwrappedLine(children2, lineNumber2);
  }
  var _loop = function _loop2() {
    var node = tree[index2];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split("\n");
      splitValue.forEach(function(text2, i) {
        var lineNumber2 = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: "text",
          value: "".concat(text2, "\n")
        };
        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index2).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));
          var _line = createLine(_children, lineNumber2);
          newTree.push(_line);
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index2 + 1] && tree[index2 + 1].children && tree[index2 + 1].children[0];
          var lastLineInPreviousSpan = {
            type: "text",
            value: "".concat(text2)
          };
          if (stringChild) {
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index2 + 1, 0, newElem);
          } else {
            var _children2 = [lastLineInPreviousSpan];
            var _line2 = createLine(_children2, lineNumber2, node.properties.className);
            newTree.push(_line2);
          }
        } else {
          var _children3 = [newChild];
          var _line3 = createLine(_children3, lineNumber2, node.properties.className);
          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index2;
    }
    index2++;
  };
  while (index2 < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
  var rows = _ref5.rows, stylesheet = _ref5.stylesheet, useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function(node, i) {
    return createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
}
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== "undefined";
}
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator, language = _ref6.language, code = _ref6.code, defaultCodeValue = _ref6.defaultCodeValue;
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage(astGenerator, language);
    if (language === "text") {
      return {
        value: defaultCodeValue,
        language: "text"
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }
  try {
    return language && language !== "text" ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}
function highlight$1(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter2(_ref7) {
    var language = _ref7.language, children = _ref7.children, _ref7$style = _ref7.style, style2 = _ref7$style === void 0 ? defaultStyle : _ref7$style, _ref7$customStyle = _ref7.customStyle, customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle, _ref7$codeTagProps = _ref7.codeTagProps, codeTagProps = _ref7$codeTagProps === void 0 ? {
      className: language ? "language-".concat(language) : void 0,
      style: _objectSpread(_objectSpread({}, style2['code[class*="language-"]']), style2['code[class*="language-'.concat(language, '"]')])
    } : _ref7$codeTagProps, _ref7$useInlineStyles = _ref7.useInlineStyles, useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles, _ref7$showLineNumbers = _ref7.showLineNumbers, showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers, _ref7$showInlineLineN = _ref7.showInlineLineNumbers, showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN, _ref7$startingLineNum = _ref7.startingLineNumber, startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum, lineNumberContainerStyle = _ref7.lineNumberContainerStyle, _ref7$lineNumberStyle = _ref7.lineNumberStyle, lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle, wrapLines = _ref7.wrapLines, _ref7$wrapLongLines = _ref7.wrapLongLines, wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines, _ref7$lineProps = _ref7.lineProps, lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps, renderer = _ref7.renderer, _ref7$PreTag = _ref7.PreTag, PreTag = _ref7$PreTag === void 0 ? "pre" : _ref7$PreTag, _ref7$CodeTag = _ref7.CodeTag, CodeTag = _ref7$CodeTag === void 0 ? "code" : _ref7$CodeTag, _ref7$code = _ref7.code, code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || "" : _ref7$code, astGenerator = _ref7.astGenerator, rest = objectWithoutPropertiesExports(_ref7, _excluded);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? /* @__PURE__ */ modules$1.createElement(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style2.hljs || style2['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    };
    var generatorClassName = isHighlightJs(astGenerator) ? "hljs" : "prismjs";
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });
    if (wrapLongLines) {
      codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
        whiteSpace: "pre-wrap"
      });
    } else {
      codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
        whiteSpace: "pre"
      });
    }
    if (!astGenerator) {
      return /* @__PURE__ */ modules$1.createElement(PreTag, preProps, allLineNumbers, /* @__PURE__ */ modules$1.createElement(CodeTag, codeTagProps, code));
    }
    if (wrapLines === void 0 && renderer || wrapLongLines)
      wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: "text",
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator,
      language,
      code,
      defaultCodeValue
    });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }
    var largestLineNumber = codeTree.value.length + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
    return /* @__PURE__ */ modules$1.createElement(PreTag, preProps, /* @__PURE__ */ modules$1.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
      rows,
      stylesheet: style2,
      useInlineStyles
    })));
  };
}
var hastscript = { exports: {} };
var schema$1 = Schema$2;
var proto$1 = Schema$2.prototype;
proto$1.space = null;
proto$1.normal = {};
proto$1.property = {};
function Schema$2(property, normal, space2) {
  this.property = property;
  this.normal = normal;
  if (space2) {
    this.space = space2;
  }
}
var xtend = immutable;
var Schema$1 = schema$1;
var merge_1 = merge$1;
function merge$1(definitions) {
  var length = definitions.length;
  var property = [];
  var normal = [];
  var index2 = -1;
  var info2;
  var space2;
  while (++index2 < length) {
    info2 = definitions[index2];
    property.push(info2.property);
    normal.push(info2.normal);
    space2 = info2.space;
  }
  return new Schema$1(xtend.apply(null, property), xtend.apply(null, normal), space2);
}
var normalize_1 = normalize$3;
function normalize$3(value) {
  return value.toLowerCase();
}
var info = Info$2;
var proto = Info$2.prototype;
proto.space = null;
proto.attribute = null;
proto.property = null;
proto.boolean = false;
proto.booleanish = false;
proto.overloadedBoolean = false;
proto.number = false;
proto.commaSeparated = false;
proto.spaceSeparated = false;
proto.commaOrSpaceSeparated = false;
proto.mustUseProperty = false;
proto.defined = false;
function Info$2(property, attribute) {
  this.property = property;
  this.attribute = attribute;
}
var types$3 = {};
var powers = 0;
types$3.boolean = increment();
types$3.booleanish = increment();
types$3.overloadedBoolean = increment();
types$3.number = increment();
types$3.spaceSeparated = increment();
types$3.commaSeparated = increment();
types$3.commaOrSpaceSeparated = increment();
function increment() {
  return Math.pow(2, ++powers);
}
var Info$1 = info;
var types$2 = types$3;
var definedInfo = DefinedInfo$2;
DefinedInfo$2.prototype = new Info$1();
DefinedInfo$2.prototype.defined = true;
var checks = [
  "boolean",
  "booleanish",
  "overloadedBoolean",
  "number",
  "commaSeparated",
  "spaceSeparated",
  "commaOrSpaceSeparated"
];
var checksLength = checks.length;
function DefinedInfo$2(property, attribute, mask, space2) {
  var index2 = -1;
  var check;
  mark(this, "space", space2);
  Info$1.call(this, property, attribute);
  while (++index2 < checksLength) {
    check = checks[index2];
    mark(this, check, (mask & types$2[check]) === types$2[check]);
  }
}
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}
var normalize$2 = normalize_1;
var Schema = schema$1;
var DefinedInfo$1 = definedInfo;
var create_1 = create$5;
function create$5(definition2) {
  var space2 = definition2.space;
  var mustUseProperty = definition2.mustUseProperty || [];
  var attributes2 = definition2.attributes || {};
  var props = definition2.properties;
  var transform = definition2.transform;
  var property = {};
  var normal = {};
  var prop;
  var info2;
  for (prop in props) {
    info2 = new DefinedInfo$1(prop, transform(attributes2, prop), props[prop], space2);
    if (mustUseProperty.indexOf(prop) !== -1) {
      info2.mustUseProperty = true;
    }
    property[prop] = info2;
    normal[normalize$2(prop)] = prop;
    normal[normalize$2(info2.attribute)] = prop;
  }
  return new Schema(property, normal, space2);
}
var create$4 = create_1;
var xlink$1 = create$4({
  space: "xlink",
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
function xlinkTransform(_, prop) {
  return "xlink:" + prop.slice(5).toLowerCase();
}
var create$3 = create_1;
var xml$1 = create$3({
  space: "xml",
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});
function xmlTransform(_, prop) {
  return "xml:" + prop.slice(3).toLowerCase();
}
var caseSensitiveTransform_1 = caseSensitiveTransform$1;
function caseSensitiveTransform$1(attributes2, attribute) {
  return attribute in attributes2 ? attributes2[attribute] : attribute;
}
var caseSensitiveTransform = caseSensitiveTransform_1;
var caseInsensitiveTransform_1 = caseInsensitiveTransform$2;
function caseInsensitiveTransform$2(attributes2, property) {
  return caseSensitiveTransform(attributes2, property.toLowerCase());
}
var create$2 = create_1;
var caseInsensitiveTransform$1 = caseInsensitiveTransform_1;
var xmlns$1 = create$2({
  space: "xmlns",
  attributes: {
    xmlnsxlink: "xmlns:xlink"
  },
  transform: caseInsensitiveTransform$1,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
});
var types$1 = types$3;
var create$1 = create_1;
var booleanish$1 = types$1.booleanish;
var number$1 = types$1.number;
var spaceSeparated$1 = types$1.spaceSeparated;
var aria$1 = create$1({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish$1,
    ariaAutoComplete: null,
    ariaBusy: booleanish$1,
    ariaChecked: booleanish$1,
    ariaColCount: number$1,
    ariaColIndex: number$1,
    ariaColSpan: number$1,
    ariaControls: spaceSeparated$1,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated$1,
    ariaDetails: null,
    ariaDisabled: booleanish$1,
    ariaDropEffect: spaceSeparated$1,
    ariaErrorMessage: null,
    ariaExpanded: booleanish$1,
    ariaFlowTo: spaceSeparated$1,
    ariaGrabbed: booleanish$1,
    ariaHasPopup: null,
    ariaHidden: booleanish$1,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated$1,
    ariaLevel: number$1,
    ariaLive: null,
    ariaModal: booleanish$1,
    ariaMultiLine: booleanish$1,
    ariaMultiSelectable: booleanish$1,
    ariaOrientation: null,
    ariaOwns: spaceSeparated$1,
    ariaPlaceholder: null,
    ariaPosInSet: number$1,
    ariaPressed: booleanish$1,
    ariaReadOnly: booleanish$1,
    ariaRelevant: null,
    ariaRequired: booleanish$1,
    ariaRoleDescription: spaceSeparated$1,
    ariaRowCount: number$1,
    ariaRowIndex: number$1,
    ariaRowSpan: number$1,
    ariaSelected: booleanish$1,
    ariaSetSize: number$1,
    ariaSort: null,
    ariaValueMax: number$1,
    ariaValueMin: number$1,
    ariaValueNow: number$1,
    ariaValueText: null,
    role: null
  }
});
function ariaTransform(_, prop) {
  return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
}
var types = types$3;
var create = create_1;
var caseInsensitiveTransform = caseInsensitiveTransform_1;
var boolean = types.boolean;
var overloadedBoolean = types.overloadedBoolean;
var booleanish = types.booleanish;
var number = types.number;
var spaceSeparated = types.spaceSeparated;
var commaSeparated = types.commaSeparated;
var html$2 = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});
var merge = merge_1;
var xlink = xlink$1;
var xml = xml$1;
var xmlns = xmlns$1;
var aria = aria$1;
var html$1 = html$2;
var html_1$1 = merge([xml, xlink, xmlns, aria, html$1]);
var normalize$1 = normalize_1;
var DefinedInfo = definedInfo;
var Info = info;
var data = "data";
var find_1 = find$1;
var valid = /^data[-\w.:]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;
function find$1(schema2, value) {
  var normal = normalize$1(value);
  var prop = value;
  var Type = Info;
  if (normal in schema2.normal) {
    return schema2.property[schema2.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    if (value.charAt(4) === "-") {
      prop = datasetToProperty(value);
    } else {
      value = datasetToAttribute(value);
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase);
  return data + value.charAt(0).toUpperCase() + value.slice(1);
}
function datasetToAttribute(property) {
  var value = property.slice(4);
  if (dash.test(value)) {
    return property;
  }
  value = value.replace(cap, kebab);
  if (value.charAt(0) !== "-") {
    value = "-" + value;
  }
  return data + value;
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
var hastUtilParseSelector = parse$3;
var search = /[#.]/g;
function parse$3(selector, defaultTagName) {
  var value = selector || "";
  var name2 = defaultTagName || "div";
  var props = {};
  var start = 0;
  var subvalue;
  var previous2;
  var match;
  while (start < value.length) {
    search.lastIndex = start;
    match = search.exec(value);
    subvalue = value.slice(start, match ? match.index : value.length);
    if (subvalue) {
      if (!previous2) {
        name2 = subvalue;
      } else if (previous2 === "#") {
        props.id = subvalue;
      } else if (props.className) {
        props.className.push(subvalue);
      } else {
        props.className = [subvalue];
      }
      start += subvalue.length;
    }
    if (match) {
      previous2 = match[0];
      start++;
    }
  }
  return { type: "element", tagName: name2, properties: props, children: [] };
}
var spaceSeparatedTokens = {};
spaceSeparatedTokens.parse = parse$2;
spaceSeparatedTokens.stringify = stringify$2;
var empty$1 = "";
var space$2 = " ";
var whiteSpace = /[ \t\n\r\f]+/g;
function parse$2(value) {
  var input = String(value || empty$1).trim();
  return input === empty$1 ? [] : input.split(whiteSpace);
}
function stringify$2(values) {
  return values.join(space$2).trim();
}
var commaSeparatedTokens = {};
commaSeparatedTokens.parse = parse$1;
commaSeparatedTokens.stringify = stringify$1;
var comma = ",";
var space$1 = " ";
var empty = "";
function parse$1(value) {
  var values = [];
  var input = String(value || empty);
  var index2 = input.indexOf(comma);
  var lastIndex = 0;
  var end = false;
  var val;
  while (!end) {
    if (index2 === -1) {
      index2 = input.length;
      end = true;
    }
    val = input.slice(lastIndex, index2).trim();
    if (val || !end) {
      values.push(val);
    }
    lastIndex = index2 + 1;
    index2 = input.indexOf(comma, lastIndex);
  }
  return values;
}
function stringify$1(values, options) {
  var settings = options || {};
  var left = settings.padLeft === false ? empty : space$1;
  var right = settings.padRight ? space$1 : empty;
  if (values[values.length - 1] === empty) {
    values = values.concat(empty);
  }
  return values.join(right + comma + left).trim();
}
var find = find_1;
var normalize = normalize_1;
var parseSelector = hastUtilParseSelector;
var spaces = spaceSeparatedTokens.parse;
var commas = commaSeparatedTokens.parse;
var factory_1 = factory$1;
var own$2 = {}.hasOwnProperty;
function factory$1(schema2, defaultTagName, caseSensitive) {
  var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
  return h2;
  function h2(selector, properties) {
    var node = parseSelector(selector, defaultTagName);
    var children = Array.prototype.slice.call(arguments, 2);
    var name2 = node.tagName.toLowerCase();
    var property;
    node.tagName = adjust && own$2.call(adjust, name2) ? adjust[name2] : name2;
    if (properties && isChildren(properties, node)) {
      children.unshift(properties);
      properties = null;
    }
    if (properties) {
      for (property in properties) {
        addProperty(node.properties, property, properties[property]);
      }
    }
    addChild(node.children, children);
    if (node.tagName === "template") {
      node.content = { type: "root", children: node.children };
      node.children = [];
    }
    return node;
  }
  function addProperty(properties, key, value) {
    var info2;
    var property;
    var result;
    if (value === null || value === void 0 || value !== value) {
      return;
    }
    info2 = find(schema2, key);
    property = info2.property;
    result = value;
    if (typeof result === "string") {
      if (info2.spaceSeparated) {
        result = spaces(result);
      } else if (info2.commaSeparated) {
        result = commas(result);
      } else if (info2.commaOrSpaceSeparated) {
        result = spaces(commas(result).join(" "));
      }
    }
    if (property === "style" && typeof value !== "string") {
      result = style(result);
    }
    if (property === "className" && properties.className) {
      result = properties.className.concat(result);
    }
    properties[property] = parsePrimitives(info2, property, result);
  }
}
function isChildren(value, node) {
  return typeof value === "string" || "length" in value || isNode(node.tagName, value);
}
function isNode(tagName, value) {
  var type2 = value.type;
  if (tagName === "input" || !type2 || typeof type2 !== "string") {
    return false;
  }
  if (typeof value.children === "object" && "length" in value.children) {
    return true;
  }
  type2 = type2.toLowerCase();
  if (tagName === "button") {
    return type2 !== "menu" && type2 !== "submit" && type2 !== "reset" && type2 !== "button";
  }
  return "value" in value;
}
function addChild(nodes, value) {
  var index2;
  var length;
  if (typeof value === "string" || typeof value === "number") {
    nodes.push({ type: "text", value: String(value) });
    return;
  }
  if (typeof value === "object" && "length" in value) {
    index2 = -1;
    length = value.length;
    while (++index2 < length) {
      addChild(nodes, value[index2]);
    }
    return;
  }
  if (typeof value !== "object" || !("type" in value)) {
    throw new Error("Expected node, nodes, or string, got `" + value + "`");
  }
  nodes.push(value);
}
function parsePrimitives(info2, name2, value) {
  var index2;
  var length;
  var result;
  if (typeof value !== "object" || !("length" in value)) {
    return parsePrimitive(info2, name2, value);
  }
  length = value.length;
  index2 = -1;
  result = [];
  while (++index2 < length) {
    result[index2] = parsePrimitive(info2, name2, value[index2]);
  }
  return result;
}
function parsePrimitive(info2, name2, value) {
  var result = value;
  if (info2.number || info2.positiveNumber) {
    if (!isNaN(result) && result !== "") {
      result = Number(result);
    }
  } else if (info2.boolean || info2.overloadedBoolean) {
    if (typeof result === "string" && (result === "" || normalize(value) === normalize(name2))) {
      result = true;
    }
  }
  return result;
}
function style(value) {
  var result = [];
  var key;
  for (key in value) {
    result.push([key, value[key]].join(": "));
  }
  return result.join("; ");
}
function createAdjustMap(values) {
  var length = values.length;
  var index2 = -1;
  var result = {};
  var value;
  while (++index2 < length) {
    value = values[index2];
    result[value.toLowerCase()] = value;
  }
  return result;
}
var schema = html_1$1;
var factory = factory_1;
var html = factory(schema, "div");
html.displayName = "html";
var html_1 = html;
(function(module) {
  module.exports = html_1;
})(hastscript);
const AElig = "\xC6";
const AMP = "&";
const Aacute = "\xC1";
const Acirc = "\xC2";
const Agrave = "\xC0";
const Aring = "\xC5";
const Atilde = "\xC3";
const Auml = "\xC4";
const COPY = "\xA9";
const Ccedil = "\xC7";
const ETH = "\xD0";
const Eacute = "\xC9";
const Ecirc = "\xCA";
const Egrave = "\xC8";
const Euml = "\xCB";
const GT = ">";
const Iacute = "\xCD";
const Icirc = "\xCE";
const Igrave = "\xCC";
const Iuml = "\xCF";
const LT = "<";
const Ntilde = "\xD1";
const Oacute = "\xD3";
const Ocirc = "\xD4";
const Ograve = "\xD2";
const Oslash = "\xD8";
const Otilde = "\xD5";
const Ouml = "\xD6";
const QUOT = '"';
const REG = "\xAE";
const THORN = "\xDE";
const Uacute = "\xDA";
const Ucirc = "\xDB";
const Ugrave = "\xD9";
const Uuml = "\xDC";
const Yacute = "\xDD";
const aacute = "\xE1";
const acirc = "\xE2";
const acute = "\xB4";
const aelig = "\xE6";
const agrave = "\xE0";
const amp = "&";
const aring = "\xE5";
const atilde = "\xE3";
const auml = "\xE4";
const brvbar = "\xA6";
const ccedil = "\xE7";
const cedil = "\xB8";
const cent = "\xA2";
const copy = "\xA9";
const curren = "\xA4";
const deg = "\xB0";
const divide = "\xF7";
const eacute = "\xE9";
const ecirc = "\xEA";
const egrave = "\xE8";
const eth = "\xF0";
const euml = "\xEB";
const frac12 = "\xBD";
const frac14 = "\xBC";
const frac34 = "\xBE";
const gt = ">";
const iacute = "\xED";
const icirc = "\xEE";
const iexcl = "\xA1";
const igrave = "\xEC";
const iquest = "\xBF";
const iuml = "\xEF";
const laquo = "\xAB";
const lt = "<";
const macr = "\xAF";
const micro = "\xB5";
const middot = "\xB7";
const nbsp = "\xA0";
const not = "\xAC";
const ntilde = "\xF1";
const oacute = "\xF3";
const ocirc = "\xF4";
const ograve = "\xF2";
const ordf = "\xAA";
const ordm = "\xBA";
const oslash = "\xF8";
const otilde = "\xF5";
const ouml = "\xF6";
const para = "\xB6";
const plusmn = "\xB1";
const pound = "\xA3";
const quot = '"';
const raquo = "\xBB";
const reg = "\xAE";
const sect = "\xA7";
const shy = "\xAD";
const sup1 = "\xB9";
const sup2 = "\xB2";
const sup3 = "\xB3";
const szlig = "\xDF";
const thorn = "\xFE";
const times = "\xD7";
const uacute = "\xFA";
const ucirc = "\xFB";
const ugrave = "\xF9";
const uml = "\xA8";
const uuml = "\xFC";
const yacute = "\xFD";
const yen = "\xA5";
const yuml = "\xFF";
const require$$0 = {
  AElig,
  AMP,
  Aacute,
  Acirc,
  Agrave,
  Aring,
  Atilde,
  Auml,
  COPY,
  Ccedil,
  ETH,
  Eacute,
  Ecirc,
  Egrave,
  Euml,
  GT,
  Iacute,
  Icirc,
  Igrave,
  Iuml,
  LT,
  Ntilde,
  Oacute,
  Ocirc,
  Ograve,
  Oslash,
  Otilde,
  Ouml,
  QUOT,
  REG,
  THORN,
  Uacute,
  Ucirc,
  Ugrave,
  Uuml,
  Yacute,
  aacute,
  acirc,
  acute,
  aelig,
  agrave,
  amp,
  aring,
  atilde,
  auml,
  brvbar,
  ccedil,
  cedil,
  cent,
  copy,
  curren,
  deg,
  divide,
  eacute,
  ecirc,
  egrave,
  eth,
  euml,
  frac12,
  frac14,
  frac34,
  gt,
  iacute,
  icirc,
  iexcl,
  igrave,
  iquest,
  iuml,
  laquo,
  lt,
  macr,
  micro,
  middot,
  nbsp,
  not,
  ntilde,
  oacute,
  ocirc,
  ograve,
  ordf,
  ordm,
  oslash,
  otilde,
  ouml,
  para,
  plusmn,
  pound,
  quot,
  raquo,
  reg,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  thorn,
  times,
  uacute,
  ucirc,
  ugrave,
  uml,
  uuml,
  yacute,
  yen,
  yuml
};
const require$$1 = {
  "0": "\uFFFD",
  "128": "\u20AC",
  "130": "\u201A",
  "131": "\u0192",
  "132": "\u201E",
  "133": "\u2026",
  "134": "\u2020",
  "135": "\u2021",
  "136": "\u02C6",
  "137": "\u2030",
  "138": "\u0160",
  "139": "\u2039",
  "140": "\u0152",
  "142": "\u017D",
  "145": "\u2018",
  "146": "\u2019",
  "147": "\u201C",
  "148": "\u201D",
  "149": "\u2022",
  "150": "\u2013",
  "151": "\u2014",
  "152": "\u02DC",
  "153": "\u2122",
  "154": "\u0161",
  "155": "\u203A",
  "156": "\u0153",
  "158": "\u017E",
  "159": "\u0178"
};
var isDecimal = decimal$2;
function decimal$2(character) {
  var code = typeof character === "string" ? character.charCodeAt(0) : character;
  return code >= 48 && code <= 57;
}
var isHexadecimal = hexadecimal$1;
function hexadecimal$1(character) {
  var code = typeof character === "string" ? character.charCodeAt(0) : character;
  return code >= 97 && code <= 102 || code >= 65 && code <= 70 || code >= 48 && code <= 57;
}
var isAlphabetical = alphabetical$1;
function alphabetical$1(character) {
  var code = typeof character === "string" ? character.charCodeAt(0) : character;
  return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
var alphabetical = isAlphabetical;
var decimal$1 = isDecimal;
var isAlphanumerical = alphanumerical$1;
function alphanumerical$1(character) {
  return alphabetical(character) || decimal$1(character);
}
var legacy = require$$0;
var invalid = require$$1;
var decimal = isDecimal;
var hexadecimal = isHexadecimal;
var alphanumerical = isAlphanumerical;
var decodeEntity = decodeEntity_browser;
var parseEntities_1 = parseEntities;
var own$1 = {}.hasOwnProperty;
var fromCharCode = String.fromCharCode;
var noop = Function.prototype;
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
};
var tab = 9;
var lineFeed = 10;
var formFeed = 12;
var space = 32;
var ampersand = 38;
var semicolon = 59;
var lessThan = 60;
var equalsTo = 61;
var numberSign = 35;
var uppercaseX = 88;
var lowercaseX = 120;
var replacementCharacter = 65533;
var name = "named";
var hexa = "hexadecimal";
var deci = "decimal";
var bases = {};
bases[hexa] = 16;
bases[deci] = 10;
var tests = {};
tests[name] = alphanumerical;
tests[deci] = decimal;
tests[hexa] = hexadecimal;
var namedNotTerminated = 1;
var numericNotTerminated = 2;
var namedEmpty = 3;
var numericEmpty = 4;
var namedUnknown = 5;
var numericDisallowed = 6;
var numericProhibited = 7;
var messages = {};
messages[namedNotTerminated] = "Named character references must be terminated by a semicolon";
messages[numericNotTerminated] = "Numeric character references must be terminated by a semicolon";
messages[namedEmpty] = "Named character references cannot be empty";
messages[numericEmpty] = "Numeric character references cannot be empty";
messages[namedUnknown] = "Named character references must be known";
messages[numericDisallowed] = "Numeric character references cannot be disallowed";
messages[numericProhibited] = "Numeric character references cannot be outside the permissible Unicode range";
function parseEntities(value, options) {
  var settings = {};
  var option;
  var key;
  if (!options) {
    options = {};
  }
  for (key in defaults) {
    option = options[key];
    settings[key] = option === null || option === void 0 ? defaults[key] : option;
  }
  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || [];
    settings.position = settings.position.start;
  }
  return parse(value, settings);
}
function parse(value, settings) {
  var additional = settings.additional;
  var nonTerminated = settings.nonTerminated;
  var handleText = settings.text;
  var handleReference = settings.reference;
  var handleWarning = settings.warning;
  var textContext = settings.textContext;
  var referenceContext = settings.referenceContext;
  var warningContext = settings.warningContext;
  var pos = settings.position;
  var indent = settings.indent || [];
  var length = value.length;
  var index2 = 0;
  var lines = -1;
  var column = pos.column || 1;
  var line = pos.line || 1;
  var queue = "";
  var result = [];
  var entityCharacters;
  var namedEntity;
  var terminated;
  var characters;
  var character;
  var reference;
  var following;
  var warning2;
  var reason;
  var output;
  var entity;
  var begin;
  var start;
  var type2;
  var test;
  var prev;
  var next;
  var diff;
  var end;
  if (typeof additional === "string") {
    additional = additional.charCodeAt(0);
  }
  prev = now2();
  warning2 = handleWarning ? parseError : noop;
  index2--;
  length++;
  while (++index2 < length) {
    if (character === lineFeed) {
      column = indent[lines] || 1;
    }
    character = value.charCodeAt(index2);
    if (character === ampersand) {
      following = value.charCodeAt(index2 + 1);
      if (following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
        queue += fromCharCode(character);
        column++;
        continue;
      }
      start = index2 + 1;
      begin = start;
      end = start;
      if (following === numberSign) {
        end = ++begin;
        following = value.charCodeAt(end);
        if (following === uppercaseX || following === lowercaseX) {
          type2 = hexa;
          end = ++begin;
        } else {
          type2 = deci;
        }
      } else {
        type2 = name;
      }
      entityCharacters = "";
      entity = "";
      characters = "";
      test = tests[type2];
      end--;
      while (++end < length) {
        following = value.charCodeAt(end);
        if (!test(following)) {
          break;
        }
        characters += fromCharCode(following);
        if (type2 === name && own$1.call(legacy, characters)) {
          entityCharacters = characters;
          entity = legacy[characters];
        }
      }
      terminated = value.charCodeAt(end) === semicolon;
      if (terminated) {
        end++;
        namedEntity = type2 === name ? decodeEntity(characters) : false;
        if (namedEntity) {
          entityCharacters = characters;
          entity = namedEntity;
        }
      }
      diff = 1 + end - start;
      if (!terminated && !nonTerminated)
        ;
      else if (!characters) {
        if (type2 !== name) {
          warning2(numericEmpty, diff);
        }
      } else if (type2 === name) {
        if (terminated && !entity) {
          warning2(namedUnknown, 1);
        } else {
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          }
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty;
            if (settings.attribute) {
              following = value.charCodeAt(end);
              if (following === equalsTo) {
                warning2(reason, diff);
                entity = null;
              } else if (alphanumerical(following)) {
                entity = null;
              } else {
                warning2(reason, diff);
              }
            } else {
              warning2(reason, diff);
            }
          }
        }
        reference = entity;
      } else {
        if (!terminated) {
          warning2(numericNotTerminated, diff);
        }
        reference = parseInt(characters, bases[type2]);
        if (prohibited(reference)) {
          warning2(numericProhibited, diff);
          reference = fromCharCode(replacementCharacter);
        } else if (reference in invalid) {
          warning2(numericDisallowed, diff);
          reference = invalid[reference];
        } else {
          output = "";
          if (disallowed(reference)) {
            warning2(numericDisallowed, diff);
          }
          if (reference > 65535) {
            reference -= 65536;
            output += fromCharCode(reference >>> (10 & 1023) | 55296);
            reference = 56320 | reference & 1023;
          }
          reference = output + fromCharCode(reference);
        }
      }
      if (reference) {
        flush();
        prev = now2();
        index2 = end - 1;
        column += end - start + 1;
        result.push(reference);
        next = now2();
        next.offset++;
        if (handleReference) {
          handleReference.call(referenceContext, reference, { start: prev, end: next }, value.slice(start - 1, end));
        }
        prev = next;
      } else {
        characters = value.slice(start - 1, end);
        queue += characters;
        column += characters.length;
        index2 = end - 1;
      }
    } else {
      if (character === 10) {
        line++;
        lines++;
        column = 0;
      }
      if (character === character) {
        queue += fromCharCode(character);
        column++;
      } else {
        flush();
      }
    }
  }
  return result.join("");
  function now2() {
    return {
      line,
      column,
      offset: index2 + (pos.offset || 0)
    };
  }
  function parseError(code, offset) {
    var position2 = now2();
    position2.column += offset;
    position2.offset += offset;
    handleWarning.call(warningContext, messages[code], position2, code);
  }
  function flush() {
    if (queue) {
      result.push(queue);
      if (handleText) {
        handleText.call(textContext, queue, { start: prev, end: now2() });
      }
      queue = "";
    }
  }
}
function prohibited(code) {
  return code >= 55296 && code <= 57343 || code > 1114111;
}
function disallowed(code) {
  return code >= 1 && code <= 8 || code === 11 || code >= 13 && code <= 31 || code >= 127 && code <= 159 || code >= 64976 && code <= 65007 || (code & 65535) === 65535 || (code & 65535) === 65534;
}
var prismCore = { exports: {} };
(function(module) {
  var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism2 = function(_self2) {
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    var plainTextGrammar = {};
    var _ = {
      manual: _self2.Prism && _self2.Prism.manual,
      disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
      util: {
        encode: function encode2(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode2(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode2);
          } else {
            return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        },
        type: function(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },
        objId: function(obj) {
          if (!obj["__id"]) {
            Object.defineProperty(obj, "__id", { value: ++uniqueId });
          }
          return obj["__id"];
        },
        clone: function deepClone(o, visited) {
          visited = visited || {};
          var clone;
          var id;
          switch (_.util.type(o)) {
            case "Object":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = {};
              visited[id] = clone;
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }
              return clone;
            case "Array":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = [];
              visited[id] = clone;
              o.forEach(function(v, i) {
                clone[i] = deepClone(v, visited);
              });
              return clone;
            default:
              return o;
          }
        },
        getLanguage: function(element) {
          while (element) {
            var m = lang.exec(element.className);
            if (m) {
              return m[1].toLowerCase();
            }
            element = element.parentElement;
          }
          return "none";
        },
        setLanguage: function(element, language) {
          element.className = element.className.replace(RegExp(lang, "gi"), "");
          element.classList.add("language-" + language);
        },
        currentScript: function() {
          if (typeof document === "undefined") {
            return null;
          }
          if ("currentScript" in document && 1 < 2) {
            return document.currentScript;
          }
          try {
            throw new Error();
          } catch (err) {
            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
            if (src) {
              var scripts = document.getElementsByTagName("script");
              for (var i in scripts) {
                if (scripts[i].src == src) {
                  return scripts[i];
                }
              }
            }
            return null;
          }
        },
        isActive: function(element, className, defaultActivation) {
          var no = "no-" + className;
          while (element) {
            var classList = element.classList;
            if (classList.contains(className)) {
              return true;
            }
            if (classList.contains(no)) {
              return false;
            }
            element = element.parentElement;
          }
          return !!defaultActivation;
        }
      },
      languages: {
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,
        extend: function(id, redef) {
          var lang2 = _.util.clone(_.languages[id]);
          for (var key in redef) {
            lang2[key] = redef[key];
          }
          return lang2;
        },
        insertBefore: function(inside, before, insert, root2) {
          root2 = root2 || _.languages;
          var grammar = root2[inside];
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root2[inside];
          root2[inside] = ret;
          _.languages.DFS(_.languages, function(key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        },
        DFS: function DFS(o, callback, type2, visited) {
          visited = visited || {};
          var objId = _.util.objId;
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type2 || i);
              var property = o[i];
              var propertyType = _.util.type(property);
              if (propertyType === "Object" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === "Array" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},
      highlightAll: function(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },
      highlightAllUnder: function(container, async, callback) {
        var env = {
          callback,
          container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run("before-highlightall", env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _.hooks.run("before-all-elements-highlight", env);
        for (var i = 0, element; element = env.elements[i++]; ) {
          _.highlightElement(element, async === true, env.callback);
        }
      },
      highlightElement: function(element, async, callback) {
        var language = _.util.getLanguage(element);
        var grammar = _.languages[language];
        _.util.setLanguage(element, language);
        var parent = element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre") {
          _.util.setLanguage(parent, language);
        }
        var code = element.textContent;
        var env = {
          element,
          language,
          grammar,
          code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _.hooks.run("before-insert", env);
          env.element.innerHTML = env.highlightedCode;
          _.hooks.run("after-highlight", env);
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
        }
        _.hooks.run("before-sanity-check", env);
        parent = env.element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
          parent.setAttribute("tabindex", "0");
        }
        if (!env.code) {
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
          return;
        }
        _.hooks.run("before-highlight", env);
        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }
        if (async && _self2.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function(evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },
      highlight: function(text2, grammar, language) {
        var env = {
          code: text2,
          grammar,
          language
        };
        _.hooks.run("before-tokenize", env);
        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }
        env.tokens = _.tokenize(env.code, env.grammar);
        _.hooks.run("after-tokenize", env);
        return Token.stringify(_.util.encode(env.tokens), env.language);
      },
      tokenize: function(text2, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text2);
        matchGrammar(text2, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },
      hooks: {
        all: {},
        add: function(name2, callback) {
          var hooks = _.hooks.all;
          hooks[name2] = hooks[name2] || [];
          hooks[name2].push(callback);
        },
        run: function(name2, env) {
          var callbacks = _.hooks.all[name2];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i = 0, callback; callback = callbacks[i++]; ) {
            callback(env);
          }
        }
      },
      Token
    };
    _self2.Prism = _;
    function Token(type2, content2, alias2, matchedStr) {
      this.type = type2;
      this.content = content2;
      this.alias = alias2;
      this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify2(o, language) {
      if (typeof o == "string") {
        return o;
      }
      if (Array.isArray(o)) {
        var s = "";
        o.forEach(function(e) {
          s += stringify2(e, language);
        });
        return s;
      }
      var env = {
        type: o.type,
        content: stringify2(o.content, language),
        tag: "span",
        classes: ["token", o.type],
        attributes: {},
        language
      };
      var aliases = o.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _.hooks.run("wrap", env);
      var attributes2 = "";
      for (var name2 in env.attributes) {
        attributes2 += " " + name2 + '="' + (env.attributes[name2] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes2 + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text2, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text2);
      if (match && lookbehind && match[1]) {
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }
      return match;
    }
    function matchGrammar(text2, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + "," + j) {
            return;
          }
          var patternObj = patterns[j];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias2 = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags2 = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags2 + "g");
          }
          var pattern = patternObj.pattern || patternObj;
          for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text2.length) {
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1;
            var match;
            if (greedy) {
              match = matchPattern(pattern, pos, text2, lookbehind);
              if (!match || match.index >= text2.length) {
                break;
              }
              var from = match.index;
              var to = match.index + match[0].length;
              var p2 = pos;
              p2 += currentNode.value.length;
              while (from >= p2) {
                currentNode = currentNode.next;
                p2 += currentNode.value.length;
              }
              p2 -= currentNode.value.length;
              pos = p2;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k = currentNode; k !== tokenList.tail && (p2 < to || typeof k.value === "string"); k = k.next) {
                removeCount++;
                p2 += k.value.length;
              }
              removeCount--;
              str = text2.slice(pos, p2);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);
              if (!match) {
                continue;
              }
            }
            var from = match.index;
            var matchStr = match[0];
            var before = str.slice(0, from);
            var after = str.slice(from + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias2, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              var nestedRematch = {
                cause: token + "," + j,
                reach
              };
              matchGrammar(text2, tokenList, grammar, currentNode.prev, pos, nestedRematch);
              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }
    function LinkedList() {
      var head = { value: null, prev: null, next: null };
      var tail = { value: null, prev: head, next: null };
      head.next = tail;
      this.head = head;
      this.tail = tail;
      this.length = 0;
    }
    function addAfter(list2, node, value) {
      var next = node.next;
      var newNode = { value, prev: node, next };
      node.next = newNode;
      next.prev = newNode;
      list2.length++;
      return newNode;
    }
    function removeRange(list2, node, count) {
      var next = node.next;
      for (var i = 0; i < count && next !== list2.tail; i++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list2.length -= i;
    }
    function toArray(list2) {
      var array = [];
      var node = list2.head.next;
      while (node !== list2.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    if (!_self2.document) {
      if (!_self2.addEventListener) {
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        _self2.addEventListener("message", function(evt) {
          var message2 = JSON.parse(evt.data);
          var lang2 = message2.language;
          var code = message2.code;
          var immediateClose = message2.immediateClose;
          _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
          if (immediateClose) {
            _self2.close();
          }
        }, false);
      }
      return _;
    }
    var script = _.util.currentScript();
    if (script) {
      _.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    if (!_.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _;
  }(_self);
  if (module.exports) {
    module.exports = Prism2;
  }
  if (typeof commonjsGlobal$1 !== "undefined") {
    commonjsGlobal$1.Prism = Prism2;
  }
})(prismCore);
var markup_1 = markup$1;
markup$1.displayName = "markup";
markup$1.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
function markup$1(Prism2) {
  Prism2.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  };
  Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
  Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
  Prism2.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.value.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism2.languages[lang]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism2.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return tagName;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism2.languages.insertBefore("markup", "cdata", def);
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
    value: function(attrName, lang) {
      Prism2.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
        lookbehind: true,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, "language-" + lang],
                inside: Prism2.languages[lang]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  });
  Prism2.languages.html = Prism2.languages.markup;
  Prism2.languages.mathml = Prism2.languages.markup;
  Prism2.languages.svg = Prism2.languages.markup;
  Prism2.languages.xml = Prism2.languages.extend("markup", {});
  Prism2.languages.ssml = Prism2.languages.xml;
  Prism2.languages.atom = Prism2.languages.xml;
  Prism2.languages.rss = Prism2.languages.xml;
}
var css_1 = css$1;
css$1.displayName = "css";
css$1.aliases = [];
function css$1(Prism2) {
  (function(Prism3) {
    var string2 = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism3.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + string2.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: true,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + string2.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string2.source + ")*(?=\\s*\\{)"),
        lookbehind: true
      },
      string: {
        pattern: string2,
        greedy: true
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      punctuation: /[(){};:,]/
    };
    Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
    var markup2 = Prism3.languages.markup;
    if (markup2) {
      markup2.tag.addInlined("style", "css");
      markup2.tag.addAttribute("style", "css");
    }
  })(Prism2);
}
var clike_1 = clike$1;
clike$1.displayName = "clike";
clike$1.aliases = [];
function clike$1(Prism2) {
  Prism2.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
}
var javascript_1 = javascript;
javascript.displayName = "javascript";
javascript.aliases = ["js"];
function javascript(Prism2) {
  Prism2.languages.javascript = Prism2.languages.extend("clike", {
    "class-name": [
      Prism2.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
      lookbehind: true
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism2.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism2.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism2.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism2.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (Prism2.languages.markup) {
    Prism2.languages.markup.tag.addInlined("script", "javascript");
    Prism2.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
  }
  Prism2.languages.js = Prism2.languages.javascript;
}
var ctx = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof commonjsGlobal$1 === "object" ? commonjsGlobal$1 : {};
var restore = capture();
ctx.Prism = { manual: true, disableWorkerMessageHandler: true };
var h = hastscript.exports;
var decode = parseEntities_1;
var Prism = prismCore.exports;
var markup = markup_1;
var css = css_1;
var clike = clike_1;
var js = javascript_1;
restore();
var own = {}.hasOwnProperty;
function Refractor() {
}
Refractor.prototype = Prism;
var refract = new Refractor();
var core = refract;
refract.highlight = highlight;
refract.register = register;
refract.alias = alias;
refract.registered = registered;
refract.listLanguages = listLanguages;
register(markup);
register(css);
register(clike);
register(js);
refract.util.encode = encode;
refract.Token.stringify = stringify;
function register(grammar) {
  if (typeof grammar !== "function" || !grammar.displayName) {
    throw new Error("Expected `function` for `grammar`, got `" + grammar + "`");
  }
  if (refract.languages[grammar.displayName] === void 0) {
    grammar(refract);
  }
}
function alias(name2, alias2) {
  var languages = refract.languages;
  var map = name2;
  var key;
  var list2;
  var length;
  var index2;
  if (alias2) {
    map = {};
    map[name2] = alias2;
  }
  for (key in map) {
    list2 = map[key];
    list2 = typeof list2 === "string" ? [list2] : list2;
    length = list2.length;
    index2 = -1;
    while (++index2 < length) {
      languages[list2[index2]] = languages[key];
    }
  }
}
function highlight(value, name2) {
  var sup = Prism.highlight;
  var grammar;
  if (typeof value !== "string") {
    throw new Error("Expected `string` for `value`, got `" + value + "`");
  }
  if (refract.util.type(name2) === "Object") {
    grammar = name2;
    name2 = null;
  } else {
    if (typeof name2 !== "string") {
      throw new Error("Expected `string` for `name`, got `" + name2 + "`");
    }
    if (own.call(refract.languages, name2)) {
      grammar = refract.languages[name2];
    } else {
      throw new Error("Unknown language: `" + name2 + "` is not registered");
    }
  }
  return sup.call(this, value, grammar, name2);
}
function registered(language) {
  if (typeof language !== "string") {
    throw new Error("Expected `string` for `language`, got `" + language + "`");
  }
  return own.call(refract.languages, language);
}
function listLanguages() {
  var languages = refract.languages;
  var list2 = [];
  var language;
  for (language in languages) {
    if (own.call(languages, language) && typeof languages[language] === "object") {
      list2.push(language);
    }
  }
  return list2;
}
function stringify(value, language, parent) {
  var env;
  if (typeof value === "string") {
    return { type: "text", value };
  }
  if (refract.util.type(value) === "Array") {
    return stringifyAll(value, language);
  }
  env = {
    type: value.type,
    content: refract.Token.stringify(value.content, language, parent),
    tag: "span",
    classes: ["token", value.type],
    attributes: {},
    language,
    parent
  };
  if (value.alias) {
    env.classes = env.classes.concat(value.alias);
  }
  refract.hooks.run("wrap", env);
  return h(env.tag + "." + env.classes.join("."), attributes(env.attributes), env.content);
}
function stringifyAll(values, language) {
  var result = [];
  var length = values.length;
  var index2 = -1;
  var value;
  while (++index2 < length) {
    value = values[index2];
    if (value !== "" && value !== null && value !== void 0) {
      result.push(value);
    }
  }
  index2 = -1;
  length = result.length;
  while (++index2 < length) {
    value = result[index2];
    result[index2] = refract.Token.stringify(value, language, result);
  }
  return result;
}
function encode(tokens) {
  return tokens;
}
function attributes(attrs) {
  var key;
  for (key in attrs) {
    attrs[key] = decode(attrs[key]);
  }
  return attrs;
}
function capture() {
  var defined = "Prism" in ctx;
  var current = defined ? ctx.Prism : void 0;
  return restore2;
  function restore2() {
    if (defined) {
      ctx.Prism = current;
    } else {
      delete ctx.Prism;
    }
    defined = void 0;
    current = void 0;
  }
}
var SyntaxHighlighter = highlight$1(core, {});
SyntaxHighlighter.registerLanguage = function(_, language) {
  return core.register(language);
};
SyntaxHighlighter.alias = function(name2, aliases) {
  return core.alias(name2, aliases);
};
const SyntaxHighlighter$1 = SyntaxHighlighter;
var jsx_1 = jsx;
jsx.displayName = "jsx";
jsx.aliases = [];
function jsx(Prism2) {
  (function(Prism3) {
    var javascript2 = Prism3.util.clone(Prism3.languages.javascript);
    var space2 = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
    var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
    var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function re(source, flags2) {
      source = source.replace(/<S>/g, function() {
        return space2;
      }).replace(/<BRACES>/g, function() {
        return braces;
      }).replace(/<SPREAD>/g, function() {
        return spread;
      });
      return RegExp(source, flags2);
    }
    spread = re(spread).source;
    Prism3.languages.jsx = Prism3.languages.extend("markup", javascript2);
    Prism3.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
    Prism3.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
    Prism3.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
    Prism3.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
    Prism3.languages.jsx.tag.inside["comment"] = javascript2["comment"];
    Prism3.languages.insertBefore("inside", "attr-name", {
      spread: {
        pattern: re(/<SPREAD>/.source),
        inside: Prism3.languages.jsx
      }
    }, Prism3.languages.jsx.tag);
    Prism3.languages.insertBefore("inside", "special-attr", {
      script: {
        pattern: re(/=<BRACES>/.source),
        alias: "language-javascript",
        inside: {
          "script-punctuation": {
            pattern: /^=(?=\{)/,
            alias: "punctuation"
          },
          rest: Prism3.languages.jsx
        }
      }
    }, Prism3.languages.jsx.tag);
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
            tokens[i] = new Prism3.Token("plain-text", plainText, null, plainText);
          }
        }
        if (token.content && typeof token.content !== "string") {
          walkTokens(token.content);
        }
      }
    };
    Prism3.hooks.add("after-tokenize", function(env) {
      if (env.language !== "jsx" && env.language !== "tsx") {
        return;
      }
      walkTokens(env.tokens);
    });
  })(Prism2);
}
var typescript_1 = typescript;
typescript.displayName = "typescript";
typescript.aliases = ["ts"];
function typescript(Prism2) {
  (function(Prism3) {
    Prism3.languages.typescript = Prism3.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    });
    Prism3.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
    delete Prism3.languages.typescript["parameter"];
    delete Prism3.languages.typescript["literal-property"];
    var typeInside = Prism3.languages.extend("typescript", {});
    delete typeInside["class-name"];
    Prism3.languages.typescript["class-name"].inside = typeInside;
    Prism3.languages.insertBefore("typescript", "function", {
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
    Prism3.languages.ts = Prism3.languages.typescript;
  })(Prism2);
}
var refractorJsx = jsx_1;
var refractorTypescript = typescript_1;
var tsx_1 = tsx;
tsx.displayName = "tsx";
tsx.aliases = [];
function tsx(Prism2) {
  Prism2.register(refractorJsx);
  Prism2.register(refractorTypescript);
  (function(Prism3) {
    var typescript2 = Prism3.util.clone(Prism3.languages.typescript);
    Prism3.languages.tsx = Prism3.languages.extend("jsx", typescript2);
    delete Prism3.languages.tsx["parameter"];
    delete Prism3.languages.tsx["literal-property"];
    var tag = Prism3.languages.tsx.tag;
    tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
    tag.lookbehind = true;
  })(Prism2);
}
const tsx$1 = tsx_1;
var scss_1 = scss;
scss.displayName = "scss";
scss.aliases = [];
function scss(Prism2) {
  Prism2.languages.scss = Prism2.languages.extend("css", {
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
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
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
  Prism2.languages.insertBefore("scss", "atrule", {
    keyword: [
      /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
      {
        pattern: /( )(?:from|through)(?= )/,
        lookbehind: true
      }
    ]
  });
  Prism2.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  });
  Prism2.languages.insertBefore("scss", "function", {
    "module-modifier": {
      pattern: /\b(?:as|hide|show|with)\b/i,
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
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword"
    },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
      lookbehind: true
    }
  });
  Prism2.languages.scss["atrule"].inside.rest = Prism2.languages.scss;
}
const scss$1 = scss_1;
var less_1 = less;
less.displayName = "less";
less.aliases = [];
function less(Prism2) {
  Prism2.languages.less = Prism2.languages.extend("css", {
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
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
    operator: /[+\-*\/]/
  });
  Prism2.languages.insertBefore("less", "property", {
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
const less$1 = less_1;
var json_1 = json;
json.displayName = "json";
json.aliases = ["webmanifest"];
function json(Prism2) {
  Prism2.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: true,
      greedy: true
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true
    },
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword"
    }
  };
  Prism2.languages.webmanifest = Prism2.languages.json;
}
const json$1 = json_1;
const index$3 = "";
SyntaxHighlighter$1.registerLanguage("jsx", tsx$1);
SyntaxHighlighter$1.registerLanguage("json", json$1);
SyntaxHighlighter$1.registerLanguage("tsx", tsx$1);
SyntaxHighlighter$1.registerLanguage("scss", scss$1);
SyntaxHighlighter$1.registerLanguage("less", less$1);
function HighLighter({ lang, children }) {
  const [copied, setCopied] = useState(false);
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: `code-pane language-${lang}`
  }, /* @__PURE__ */ modules$1.createElement(lib.CopyToClipboard, {
    text: children,
    onCopy: () => setCopied(true)
  }, /* @__PURE__ */ modules$1.createElement("span", {
    className: "icon-copy"
  }, copied ? "Copied !" : "Copy")), /* @__PURE__ */ modules$1.createElement(SyntaxHighlighter$1, {
    language: lang,
    useInlineStyles: false
  }, children));
}
HighLighter.registerLanguage = SyntaxHighlighter$1.registerLanguage;
var createUpdateEffect = function createUpdateEffect2(hook) {
  return function(effect, deps) {
    var isMounted = useRef(false);
    hook(function() {
      return function() {
        isMounted.current = false;
      };
    }, []);
    hook(function() {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return effect();
      }
    }, deps);
  };
};
var isFunction$2 = function isFunction(value) {
  return typeof value === "function";
};
var isUndef = function isUndef2(value) {
  return typeof value === "undefined";
};
function useMemoizedFn(fn) {
  if (process.env.NODE_ENV === "development") {
    if (!isFunction$2(fn)) {
      console.error("useMemoizedFn expected parameter is a function, got " + typeof fn);
    }
  }
  var fnRef = useRef(fn);
  fnRef.current = useMemo(function() {
    return fn;
  }, [fn]);
  var memoizedFn = useRef();
  if (!memoizedFn.current) {
    memoizedFn.current = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current;
}
const useUpdateEffect = createUpdateEffect(useEffect);
var __read$b = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spread$7 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$b(arguments[i]));
  }
  return ar;
};
var useAutoRunPlugin = function useAutoRunPlugin2(fetchInstance, _a) {
  var manual = _a.manual, _b = _a.ready, ready = _b === void 0 ? true : _b, _c = _a.defaultParams, defaultParams = _c === void 0 ? [] : _c, _d = _a.refreshDeps, refreshDeps = _d === void 0 ? [] : _d, refreshDepsAction = _a.refreshDepsAction;
  var hasAutoRun = useRef(false);
  hasAutoRun.current = false;
  useUpdateEffect(function() {
    if (!manual && ready) {
      hasAutoRun.current = true;
      fetchInstance.run.apply(fetchInstance, __spread$7(defaultParams));
    }
  }, [ready]);
  useUpdateEffect(function() {
    if (hasAutoRun.current) {
      return;
    }
    if (!manual) {
      hasAutoRun.current = true;
      if (refreshDepsAction) {
        refreshDepsAction();
      } else {
        fetchInstance.refresh();
      }
    }
  }, __spread$7(refreshDeps));
  return {
    onBefore: function onBefore() {
      if (!ready) {
        return {
          stopNow: true
        };
      }
    }
  };
};
useAutoRunPlugin.onInit = function(_a) {
  var _b = _a.ready, ready = _b === void 0 ? true : _b, manual = _a.manual;
  return {
    loading: !manual && ready
  };
};
const useAutoRunPlugin$1 = useAutoRunPlugin;
function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps)
    return true;
  for (var i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i]))
      return false;
  }
  return true;
}
function useCreation(factory2, deps) {
  var current = useRef({
    deps,
    obj: void 0,
    initialized: false
  }).current;
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory2();
    current.initialized = true;
  }
  return current.obj;
}
function useLatest(value) {
  var ref = useRef(value);
  ref.current = value;
  return ref;
}
var useUnmount = function useUnmount2(fn) {
  if (process.env.NODE_ENV === "development") {
    if (!isFunction$2(fn)) {
      console.error("useUnmount expected parameter is a function, got " + typeof fn);
    }
  }
  var fnRef = useLatest(fn);
  useEffect(function() {
    return function() {
      fnRef.current();
    };
  }, []);
};
const useUnmount$1 = useUnmount;
var __assign$2 = globalThis && globalThis.__assign || function() {
  __assign$2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s) {
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
      }
    }
    return t;
  };
  return __assign$2.apply(this, arguments);
};
var cache = /* @__PURE__ */ new Map();
var setCache = function setCache2(key, cacheTime, cachedData) {
  var currentCache = cache.get(key);
  if (currentCache === null || currentCache === void 0 ? void 0 : currentCache.timer) {
    clearTimeout(currentCache.timer);
  }
  var timer = void 0;
  if (cacheTime > -1) {
    timer = setTimeout(function() {
      cache["delete"](key);
    }, cacheTime);
  }
  cache.set(key, __assign$2(__assign$2({}, cachedData), {
    timer
  }));
};
var getCache = function getCache2(key) {
  return cache.get(key);
};
var cachePromise = /* @__PURE__ */ new Map();
var getCachePromise = function getCachePromise2(cacheKey) {
  return cachePromise.get(cacheKey);
};
var setCachePromise = function setCachePromise2(cacheKey, promise) {
  cachePromise.set(cacheKey, promise);
  promise.then(function(res) {
    cachePromise["delete"](cacheKey);
    return res;
  })["catch"](function() {
    cachePromise["delete"](cacheKey);
  });
};
var listeners$2 = {};
var trigger = function trigger2(key, data2) {
  if (listeners$2[key]) {
    listeners$2[key].forEach(function(item) {
      return item(data2);
    });
  }
};
var subscribe$2 = function subscribe(key, listener) {
  if (!listeners$2[key]) {
    listeners$2[key] = [];
  }
  listeners$2[key].push(listener);
  return function unsubscribe() {
    var index2 = listeners$2[key].indexOf(listener);
    listeners$2[key].splice(index2, 1);
  };
};
var __read$a = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spread$6 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$a(arguments[i]));
  }
  return ar;
};
var useCachePlugin = function useCachePlugin2(fetchInstance, _a) {
  var cacheKey = _a.cacheKey, _b = _a.cacheTime, cacheTime = _b === void 0 ? 5 * 60 * 1e3 : _b, _c = _a.staleTime, staleTime = _c === void 0 ? 0 : _c, customSetCache = _a.setCache, customGetCache = _a.getCache;
  var unSubscribeRef = useRef();
  var currentPromiseRef = useRef();
  var _setCache = function _setCache2(key, cachedData) {
    if (customSetCache) {
      customSetCache(cachedData);
    } else {
      setCache(key, cacheTime, cachedData);
    }
    trigger(key, cachedData.data);
  };
  var _getCache = function _getCache2(key, params) {
    if (params === void 0) {
      params = [];
    }
    if (customGetCache) {
      return customGetCache(params);
    }
    return getCache(key);
  };
  useCreation(function() {
    if (!cacheKey) {
      return;
    }
    var cacheData = _getCache(cacheKey);
    if (cacheData && Object.hasOwnProperty.call(cacheData, "data")) {
      fetchInstance.state.data = cacheData.data;
      fetchInstance.state.params = cacheData.params;
      if (staleTime === -1 || new Date().getTime() - cacheData.time <= staleTime) {
        fetchInstance.state.loading = false;
      }
    }
    unSubscribeRef.current = subscribe$2(cacheKey, function(data2) {
      fetchInstance.setState({
        data: data2
      });
    });
  }, []);
  useUnmount$1(function() {
    var _a2;
    (_a2 = unSubscribeRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(unSubscribeRef);
  });
  if (!cacheKey) {
    return {};
  }
  return {
    onBefore: function onBefore(params) {
      var cacheData = _getCache(cacheKey, params);
      if (!cacheData || !Object.hasOwnProperty.call(cacheData, "data")) {
        return {};
      }
      if (staleTime === -1 || new Date().getTime() - cacheData.time <= staleTime) {
        return {
          loading: false,
          data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data,
          returnNow: true
        };
      } else {
        return {
          data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data
        };
      }
    },
    onRequest: function onRequest(service, args) {
      var servicePromise = getCachePromise(cacheKey);
      if (servicePromise && servicePromise !== currentPromiseRef.current) {
        return {
          servicePromise
        };
      }
      servicePromise = service.apply(void 0, __spread$6(args));
      currentPromiseRef.current = servicePromise;
      setCachePromise(cacheKey, servicePromise);
      return {
        servicePromise
      };
    },
    onSuccess: function onSuccess(data2, params) {
      var _a2;
      if (cacheKey) {
        (_a2 = unSubscribeRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(unSubscribeRef);
        _setCache(cacheKey, {
          data: data2,
          params,
          time: new Date().getTime()
        });
        unSubscribeRef.current = subscribe$2(cacheKey, function(d) {
          fetchInstance.setState({
            data: d
          });
        });
      }
    },
    onMutate: function onMutate(data2) {
      var _a2;
      if (cacheKey) {
        (_a2 = unSubscribeRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(unSubscribeRef);
        _setCache(cacheKey, {
          data: data2,
          params: fetchInstance.state.params,
          time: new Date().getTime()
        });
        unSubscribeRef.current = subscribe$2(cacheKey, function(d) {
          fetchInstance.setState({
            data: d
          });
        });
      }
    }
  };
};
const useCachePlugin$1 = useCachePlugin;
function isObject$6(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
var isObject_1 = isObject$6;
var freeGlobal$1 = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$4 = freeGlobal || freeSelf || Function("return this")();
var _root = root$4;
var root$3 = _root;
var now$1 = function() {
  return root$3.Date.now();
};
var now_1 = now$1;
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
var root$2 = _root;
var Symbol$4 = root$2.Symbol;
var _Symbol = Symbol$4;
var Symbol$3 = _Symbol;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var nativeObjectToString$1 = objectProto$5.toString;
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$4.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
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
var objectProto$4 = Object.prototype;
var nativeObjectToString = objectProto$4.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag$2(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$2;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag$1 = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag$1(value) == symbolTag;
}
var isSymbol_1 = isSymbol$4;
var baseTrim = _baseTrim, isObject$5 = isObject_1, isSymbol$3 = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$2(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$3(value)) {
    return NAN;
  }
  if (isObject$5(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$5(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$2;
var isObject$4 = isObject_1, now = now_1, toNumber$1 = toNumber_1;
var FUNC_ERROR_TEXT$2 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject$4(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber$1(options.maxWait) || 0, wait) : maxWait;
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
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
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
        clearTimeout(timerId);
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
var debounce_1 = debounce$1;
var __read$9 = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
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
var useDebouncePlugin = function useDebouncePlugin2(fetchInstance, _a) {
  var debounceWait = _a.debounceWait, debounceLeading = _a.debounceLeading, debounceTrailing = _a.debounceTrailing, debounceMaxWait = _a.debounceMaxWait;
  var debouncedRef = useRef();
  var options = useMemo(function() {
    var ret = {};
    if (debounceLeading !== void 0) {
      ret.leading = debounceLeading;
    }
    if (debounceTrailing !== void 0) {
      ret.trailing = debounceTrailing;
    }
    if (debounceMaxWait !== void 0) {
      ret.maxWait = debounceMaxWait;
    }
    return ret;
  }, [debounceLeading, debounceTrailing, debounceMaxWait]);
  useEffect(function() {
    if (debounceWait) {
      var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);
      debouncedRef.current = debounce_1(function(callback) {
        callback();
      }, debounceWait, options);
      fetchInstance.runAsync = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new Promise(function(resolve, reject) {
          var _a2;
          (_a2 = debouncedRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(debouncedRef, function() {
            _originRunAsync_1.apply(void 0, __spread$5(args)).then(resolve)["catch"](reject);
          });
        });
      };
      return function() {
        var _a2;
        (_a2 = debouncedRef.current) === null || _a2 === void 0 ? void 0 : _a2.cancel();
        fetchInstance.runAsync = _originRunAsync_1;
      };
    }
  }, [debounceWait, options]);
  if (!debounceWait) {
    return {};
  }
  return {
    onCancel: function onCancel() {
      var _a2;
      (_a2 = debouncedRef.current) === null || _a2 === void 0 ? void 0 : _a2.cancel();
    }
  };
};
const useDebouncePlugin$1 = useDebouncePlugin;
var useLoadingDelayPlugin = function useLoadingDelayPlugin2(fetchInstance, _a) {
  var loadingDelay = _a.loadingDelay;
  var timerRef = useRef();
  if (!loadingDelay) {
    return {};
  }
  var cancelTimeout = function cancelTimeout2() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };
  return {
    onBefore: function onBefore() {
      cancelTimeout();
      timerRef.current = setTimeout(function() {
        fetchInstance.setState({
          loading: true
        });
      }, loadingDelay);
      return {
        loading: false
      };
    },
    onFinally: function onFinally() {
      cancelTimeout();
    },
    onCancel: function onCancel() {
      cancelTimeout();
    }
  };
};
const useLoadingDelayPlugin$1 = useLoadingDelayPlugin;
var isBrowser = !!(typeof window !== "undefined" && window.document && window.document.createElement);
const isBrowser$1 = isBrowser;
function isDocumentVisible() {
  if (isBrowser$1) {
    return document.visibilityState !== "hidden";
  }
  return true;
}
var listeners$1 = [];
function subscribe$1(listener) {
  listeners$1.push(listener);
  return function unsubscribe() {
    var index2 = listeners$1.indexOf(listener);
    listeners$1.splice(index2, 1);
  };
}
if (isBrowser$1) {
  var revalidate$1 = function revalidate() {
    if (!isDocumentVisible())
      return;
    for (var i = 0; i < listeners$1.length; i++) {
      var listener = listeners$1[i];
      listener();
    }
  };
  window.addEventListener("visibilitychange", revalidate$1, false);
}
var usePollingPlugin = function usePollingPlugin2(fetchInstance, _a) {
  var pollingInterval = _a.pollingInterval, _b = _a.pollingWhenHidden, pollingWhenHidden = _b === void 0 ? true : _b, _c = _a.pollingErrorRetryCount, pollingErrorRetryCount = _c === void 0 ? -1 : _c;
  var timerRef = useRef();
  var unsubscribeRef = useRef();
  var countRef = useRef(0);
  var stopPolling = function stopPolling2() {
    var _a2;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    (_a2 = unsubscribeRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(unsubscribeRef);
  };
  useUpdateEffect(function() {
    if (!pollingInterval) {
      stopPolling();
    }
  }, [pollingInterval]);
  if (!pollingInterval) {
    return {};
  }
  return {
    onBefore: function onBefore() {
      stopPolling();
    },
    onError: function onError() {
      countRef.current += 1;
    },
    onSuccess: function onSuccess() {
      countRef.current = 0;
    },
    onFinally: function onFinally() {
      if (pollingErrorRetryCount === -1 || pollingErrorRetryCount !== -1 && countRef.current <= pollingErrorRetryCount) {
        timerRef.current = setTimeout(function() {
          if (!pollingWhenHidden && !isDocumentVisible()) {
            unsubscribeRef.current = subscribe$1(function() {
              fetchInstance.refresh();
            });
          } else {
            fetchInstance.refresh();
          }
        }, pollingInterval);
      } else {
        countRef.current = 0;
      }
    },
    onCancel: function onCancel() {
      stopPolling();
    }
  };
};
const usePollingPlugin$1 = usePollingPlugin;
var __read$8 = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
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
    fn.apply(void 0, __spread$4(args));
    setTimeout(function() {
      pending = false;
    }, timespan);
  };
}
function isOnline() {
  if (isBrowser$1 && typeof navigator.onLine !== "undefined") {
    return navigator.onLine;
  }
  return true;
}
var listeners = [];
function subscribe2(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index2 = listeners.indexOf(listener);
    listeners.splice(index2, 1);
  };
}
if (isBrowser$1) {
  var revalidate = function revalidate2() {
    if (!isDocumentVisible() || !isOnline())
      return;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };
  window.addEventListener("visibilitychange", revalidate, false);
  window.addEventListener("focus", revalidate, false);
}
var useRefreshOnWindowFocusPlugin = function useRefreshOnWindowFocusPlugin2(fetchInstance, _a) {
  var refreshOnWindowFocus = _a.refreshOnWindowFocus, _b = _a.focusTimespan, focusTimespan = _b === void 0 ? 5e3 : _b;
  var unsubscribeRef = useRef();
  var stopSubscribe = function stopSubscribe2() {
    var _a2;
    (_a2 = unsubscribeRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(unsubscribeRef);
  };
  useEffect(function() {
    if (refreshOnWindowFocus) {
      var limitRefresh_1 = limit(fetchInstance.refresh.bind(fetchInstance), focusTimespan);
      unsubscribeRef.current = subscribe2(function() {
        limitRefresh_1();
      });
    }
    return function() {
      stopSubscribe();
    };
  }, [refreshOnWindowFocus, focusTimespan]);
  useUnmount$1(function() {
    stopSubscribe();
  });
  return {};
};
const useRefreshOnWindowFocusPlugin$1 = useRefreshOnWindowFocusPlugin;
var useRetryPlugin = function useRetryPlugin2(fetchInstance, _a) {
  var retryInterval = _a.retryInterval, retryCount = _a.retryCount;
  var timerRef = useRef();
  var countRef = useRef(0);
  var triggerByRetry = useRef(false);
  if (!retryCount) {
    return {};
  }
  return {
    onBefore: function onBefore() {
      if (!triggerByRetry.current) {
        countRef.current = 0;
      }
      triggerByRetry.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    onSuccess: function onSuccess() {
      countRef.current = 0;
    },
    onError: function onError() {
      countRef.current += 1;
      if (retryCount === -1 || countRef.current <= retryCount) {
        var timeout = retryInterval !== null && retryInterval !== void 0 ? retryInterval : Math.min(1e3 * Math.pow(2, countRef.current), 3e4);
        timerRef.current = setTimeout(function() {
          triggerByRetry.current = true;
          fetchInstance.refresh();
        }, timeout);
      } else {
        countRef.current = 0;
      }
    },
    onCancel: function onCancel() {
      countRef.current = 0;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  };
};
const useRetryPlugin$1 = useRetryPlugin;
var debounce = debounce_1, isObject$3 = isObject_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject$3(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_1 = throttle;
var __read$7 = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
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
var useThrottlePlugin = function useThrottlePlugin2(fetchInstance, _a) {
  var throttleWait = _a.throttleWait, throttleLeading = _a.throttleLeading, throttleTrailing = _a.throttleTrailing;
  var throttledRef = useRef();
  var options = {};
  if (throttleLeading !== void 0) {
    options.leading = throttleLeading;
  }
  if (throttleTrailing !== void 0) {
    options.trailing = throttleTrailing;
  }
  useEffect(function() {
    if (throttleWait) {
      var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);
      throttledRef.current = throttle_1(function(callback) {
        callback();
      }, throttleWait, options);
      fetchInstance.runAsync = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new Promise(function(resolve, reject) {
          var _a2;
          (_a2 = throttledRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(throttledRef, function() {
            _originRunAsync_1.apply(void 0, __spread$3(args)).then(resolve)["catch"](reject);
          });
        });
      };
      return function() {
        var _a2;
        fetchInstance.runAsync = _originRunAsync_1;
        (_a2 = throttledRef.current) === null || _a2 === void 0 ? void 0 : _a2.cancel();
      };
    }
  }, [throttleWait, throttleLeading, throttleTrailing]);
  if (!throttleWait) {
    return {};
  }
  return {
    onCancel: function onCancel() {
      var _a2;
      (_a2 = throttledRef.current) === null || _a2 === void 0 ? void 0 : _a2.cancel();
    }
  };
};
const useThrottlePlugin$1 = useThrottlePlugin;
var useMount = function useMount2(fn) {
  if (process.env.NODE_ENV === "development") {
    if (!isFunction$2(fn)) {
      console.error('useMount: parameter `fn` expected to be a function, but got "' + typeof fn + '".');
    }
  }
  useEffect(function() {
    fn === null || fn === void 0 ? void 0 : fn();
  }, []);
};
const useMount$1 = useMount;
var __read$6 = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var useUpdate = function useUpdate2() {
  var _a = __read$6(useState({}), 2), setState = _a[1];
  return useCallback(function() {
    return setState({});
  }, []);
};
const useUpdate$1 = useUpdate;
var __assign$1 = globalThis && globalThis.__assign || function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s) {
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
      }
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var __awaiter = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = globalThis && globalThis.__generator || function(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  }, f, y, t, g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5)
      throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __rest$1 = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p2 in s) {
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t[p2] = s[p2];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t[p2[i]] = s[p2[i]];
    }
  return t;
};
var __read$5 = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spread$2 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$5(arguments[i]));
  }
  return ar;
};
var Fetch = function() {
  function Fetch2(serviceRef, options, subscribe3, initState) {
    if (initState === void 0) {
      initState = {};
    }
    this.serviceRef = serviceRef;
    this.options = options;
    this.subscribe = subscribe3;
    this.initState = initState;
    this.count = 0;
    this.state = {
      loading: false,
      params: void 0,
      data: void 0,
      error: void 0
    };
    this.state = __assign$1(__assign$1(__assign$1({}, this.state), {
      loading: !options.manual
    }), initState);
  }
  Fetch2.prototype.setState = function(s) {
    if (s === void 0) {
      s = {};
    }
    this.state = __assign$1(__assign$1({}, this.state), s);
    this.subscribe();
  };
  Fetch2.prototype.runPluginHandler = function(event) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }
    var r = this.pluginImpls.map(function(i) {
      var _a;
      return (_a = i[event]) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spread$2([i], rest));
    }).filter(Boolean);
    return Object.assign.apply(Object, __spread$2([{}], r));
  };
  Fetch2.prototype.runAsync = function() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function() {
      var currentCount, _l, _m, stopNow, _o, returnNow, state, servicePromise, res, error_1;
      var _p;
      return __generator(this, function(_q) {
        switch (_q.label) {
          case 0:
            this.count += 1;
            currentCount = this.count;
            _l = this.runPluginHandler("onBefore", params), _m = _l.stopNow, stopNow = _m === void 0 ? false : _m, _o = _l.returnNow, returnNow = _o === void 0 ? false : _o, state = __rest$1(_l, ["stopNow", "returnNow"]);
            if (stopNow) {
              return [
                2,
                new Promise(function() {
                })
              ];
            }
            this.setState(__assign$1({
              loading: true,
              params
            }, state));
            if (returnNow) {
              return [
                2,
                Promise.resolve(state.data)
              ];
            }
            (_b = (_a = this.options).onBefore) === null || _b === void 0 ? void 0 : _b.call(_a, params);
            _q.label = 1;
          case 1:
            _q.trys.push([1, 3, , 4]);
            servicePromise = this.runPluginHandler("onRequest", this.serviceRef.current, params).servicePromise;
            if (!servicePromise) {
              servicePromise = (_p = this.serviceRef).current.apply(_p, __spread$2(params));
            }
            return [
              4,
              servicePromise
            ];
          case 2:
            res = _q.sent();
            if (currentCount !== this.count) {
              return [
                2,
                new Promise(function() {
                })
              ];
            }
            this.setState({
              data: res,
              error: void 0,
              loading: false
            });
            (_d = (_c = this.options).onSuccess) === null || _d === void 0 ? void 0 : _d.call(_c, res, params);
            this.runPluginHandler("onSuccess", res, params);
            (_f = (_e = this.options).onFinally) === null || _f === void 0 ? void 0 : _f.call(_e, params, res, void 0);
            if (currentCount === this.count) {
              this.runPluginHandler("onFinally", params, res, void 0);
            }
            return [
              2,
              res
            ];
          case 3:
            error_1 = _q.sent();
            if (currentCount !== this.count) {
              return [
                2,
                new Promise(function() {
                })
              ];
            }
            this.setState({
              error: error_1,
              loading: false
            });
            (_h = (_g = this.options).onError) === null || _h === void 0 ? void 0 : _h.call(_g, error_1, params);
            this.runPluginHandler("onError", error_1, params);
            (_k = (_j = this.options).onFinally) === null || _k === void 0 ? void 0 : _k.call(_j, params, void 0, error_1);
            if (currentCount === this.count) {
              this.runPluginHandler("onFinally", params, void 0, error_1);
            }
            throw error_1;
          case 4:
            return [
              2
            ];
        }
      });
    });
  };
  Fetch2.prototype.run = function() {
    var _this = this;
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    this.runAsync.apply(this, __spread$2(params))["catch"](function(error) {
      if (!_this.options.onError) {
        console.error(error);
      }
    });
  };
  Fetch2.prototype.cancel = function() {
    this.count += 1;
    this.setState({
      loading: false
    });
    this.runPluginHandler("onCancel");
  };
  Fetch2.prototype.refresh = function() {
    this.run.apply(this, __spread$2(this.state.params || []));
  };
  Fetch2.prototype.refreshAsync = function() {
    return this.runAsync.apply(this, __spread$2(this.state.params || []));
  };
  Fetch2.prototype.mutate = function(data2) {
    var targetData;
    if (isFunction$2(data2)) {
      targetData = data2(this.state.data);
    } else {
      targetData = data2;
    }
    this.runPluginHandler("onMutate", targetData);
    this.setState({
      data: targetData
    });
  };
  return Fetch2;
}();
const Fetch$1 = Fetch;
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s) {
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p2 in s) {
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t[p2] = s[p2];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t[p2[i]] = s[p2[i]];
    }
  return t;
};
var __read$4 = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spread$1 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$4(arguments[i]));
  }
  return ar;
};
function useRequestImplement(service, options, plugins) {
  if (options === void 0) {
    options = {};
  }
  if (plugins === void 0) {
    plugins = [];
  }
  var _a = options.manual, manual = _a === void 0 ? false : _a, rest = __rest(options, ["manual"]);
  var fetchOptions = __assign({
    manual
  }, rest);
  var serviceRef = useLatest(service);
  var update = useUpdate$1();
  var fetchInstance = useCreation(function() {
    var initState = plugins.map(function(p2) {
      var _a2;
      return (_a2 = p2 === null || p2 === void 0 ? void 0 : p2.onInit) === null || _a2 === void 0 ? void 0 : _a2.call(p2, fetchOptions);
    }).filter(Boolean);
    return new Fetch$1(serviceRef, fetchOptions, update, Object.assign.apply(Object, __spread$1([{}], initState)));
  }, []);
  fetchInstance.options = fetchOptions;
  fetchInstance.pluginImpls = plugins.map(function(p2) {
    return p2(fetchInstance, fetchOptions);
  });
  useMount$1(function() {
    if (!manual) {
      var params = fetchInstance.state.params || options.defaultParams || [];
      fetchInstance.run.apply(fetchInstance, __spread$1(params));
    }
  });
  useUnmount$1(function() {
    fetchInstance.cancel();
  });
  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance))
  };
}
var __read$3 = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spread = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$3(arguments[i]));
  }
  return ar;
};
function useRequest(service, options, plugins) {
  return useRequestImplement(service, options, __spread(plugins || [], [useDebouncePlugin$1, useLoadingDelayPlugin$1, usePollingPlugin$1, useRefreshOnWindowFocusPlugin$1, useThrottlePlugin$1, useAutoRunPlugin$1, useCachePlugin$1, useRetryPlugin$1]));
}
var __read$2 = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
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
    var toggle = function toggle2() {
      return setState(function(s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };
    var set2 = function set3(value) {
      return setState(value);
    };
    var setLeft = function setLeft2() {
      return setState(defaultValue);
    };
    var setRight = function setRight2() {
      return setState(reverseValueOrigin);
    };
    return {
      toggle,
      set: set2,
      setLeft,
      setRight
    };
  }, []);
  return [state, actions];
}
var __read$1 = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
function useBoolean(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read$1(useToggle(defaultValue), 2), state = _a[0], _b = _a[1], toggle = _b.toggle, _set = _b.set;
  var actions = useMemo(function() {
    var setTrue = function setTrue2() {
      return _set(true);
    };
    var setFalse = function setFalse2() {
      return _set(false);
    };
    return {
      toggle,
      set: function set2(v) {
        return _set(!!v);
      },
      setTrue,
      setFalse
    };
  }, []);
  return [state, actions];
}
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
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
  var data2 = this.__data__, index2 = assocIndexOf$3(data2, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data2 = this.__data__, index2 = assocIndexOf$2(data2, key);
  return index2 < 0 ? void 0 : data2[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype["delete"] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;
var _ListCache = ListCache$1;
var baseGetTag = _baseGetTag, isObject$2 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$1;
var root$1 = _root;
var coreJsData$1 = root$1["__core-js_shared__"];
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
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction2 = isFunction_1, isMasked = _isMasked, isObject$1 = isObject_1, toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$2(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$2;
var baseIsNative = _baseIsNative, getValue$1 = _getValue;
function getNative$3(object, key) {
  var value = getValue$1(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$3;
var getNative$2 = _getNative, root = _root;
var Map$2 = getNative$2(root, "Map");
var _Map = Map$2;
var getNative$1 = _getNative;
var nativeCreate$4 = getNative$1(Object, "create");
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
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function hashGet$1(key) {
  var data2 = this.__data__;
  if (nativeCreate$2) {
    var result = data2[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$2.call(data2, key) ? data2[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashHas$1(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$1.call(data2, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
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
var Hash = _Hash, ListCache = _ListCache, Map$1 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
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
  var data2 = map.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
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
  var data2 = getMapData(this, key), size = data2.size;
  data2.set(key, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype["delete"] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;
var isArray$3 = Array.isArray;
var isArray_1 = isArray$3;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$1(value, length) {
  var type2 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$1;
var __values = globalThis && globalThis.__values || function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function next() {
        if (o && i >= o.length)
          o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var EventEmitter = function() {
  function EventEmitter2() {
    var _this = this;
    this.subscriptions = /* @__PURE__ */ new Set();
    this.emit = function(val) {
      var e_1, _a;
      try {
        for (var _b = __values(_this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
          var subscription = _c.value;
          subscription(val);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"]))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    this.useSubscription = function(callback) {
      var callbackRef = useRef();
      callbackRef.current = callback;
      useEffect(function() {
        function subscription(val) {
          if (callbackRef.current) {
            callbackRef.current(val);
          }
        }
        _this.subscriptions.add(subscription);
        return function() {
          _this.subscriptions["delete"](subscription);
        };
      }, []);
    };
  }
  return EventEmitter2;
}();
function useEventEmitter() {
  var ref = useRef();
  if (!ref.current) {
    ref.current = new EventEmitter();
  }
  return ref.current;
}
var __read = globalThis && globalThis.__read || function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
function createUseStorageState(getStorage) {
  function useStorageState(key, options) {
    var storage;
    try {
      storage = getStorage();
    } catch (err) {
      console.error(err);
    }
    var serializer = function serializer2(value) {
      if (options === null || options === void 0 ? void 0 : options.serializer) {
        return options === null || options === void 0 ? void 0 : options.serializer(value);
      }
      return JSON.stringify(value);
    };
    var deserializer = function deserializer2(value) {
      if (options === null || options === void 0 ? void 0 : options.deserializer) {
        return options === null || options === void 0 ? void 0 : options.deserializer(value);
      }
      return JSON.parse(value);
    };
    function getStoredValue() {
      try {
        var raw = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
        if (raw) {
          return deserializer(raw);
        }
      } catch (e) {
        console.error(e);
      }
      if (isFunction$2(options === null || options === void 0 ? void 0 : options.defaultValue)) {
        return options === null || options === void 0 ? void 0 : options.defaultValue();
      }
      return options === null || options === void 0 ? void 0 : options.defaultValue;
    }
    var _a = __read(useState(function() {
      return getStoredValue();
    }), 2), state = _a[0], setState = _a[1];
    useUpdateEffect(function() {
      setState(getStoredValue());
    }, [key]);
    var updateState = function updateState2(value) {
      var currentState = isFunction$2(value) ? value(state) : value;
      setState(currentState);
      if (isUndef(currentState)) {
        storage === null || storage === void 0 ? void 0 : storage.removeItem(key);
      } else {
        try {
          storage === null || storage === void 0 ? void 0 : storage.setItem(key, serializer(currentState));
        } catch (e) {
          console.error(e);
        }
      }
    };
    return [state, useMemoizedFn(updateState)];
  }
  return useStorageState;
}
var useLocalStorageState = createUseStorageState(function() {
  return isBrowser$1 ? localStorage : void 0;
});
const useLocalStorageState$1 = useLocalStorageState;
var CopyOutlined$4 = { exports: {} };
var CopyOutlined$3 = {};
var interopRequireWildcard = { exports: {} };
var _typeof = { exports: {} };
(function(module) {
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(obj);
  }
  module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);
(function(module) {
  var _typeof$12 = _typeof.exports["default"];
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
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
var hasRequiredObjectSpread2;
function requireObjectSpread2() {
  if (hasRequiredObjectSpread2)
    return objectSpread2.exports;
  hasRequiredObjectSpread2 = 1;
  (function(module) {
    var defineProperty2 = requireDefineProperty();
    function ownKeys2(object, enumerableOnly) {
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
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
          defineProperty2(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    module.exports = _objectSpread22, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(objectSpread2);
  return objectSpread2.exports;
}
var CopyOutlined$2 = {};
var hasRequiredCopyOutlined;
function requireCopyOutlined() {
  if (hasRequiredCopyOutlined)
    return CopyOutlined$2;
  hasRequiredCopyOutlined = 1;
  Object.defineProperty(CopyOutlined$2, "__esModule", { value: true });
  var CopyOutlined3 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
  CopyOutlined$2.default = CopyOutlined3;
  return CopyOutlined$2;
}
var AntdIcon = {};
var slicedToArray = { exports: {} };
var arrayWithHoles = { exports: {} };
var hasRequiredArrayWithHoles;
function requireArrayWithHoles() {
  if (hasRequiredArrayWithHoles)
    return arrayWithHoles.exports;
  hasRequiredArrayWithHoles = 1;
  (function(module) {
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(arrayWithHoles);
  return arrayWithHoles.exports;
}
var iterableToArrayLimit = { exports: {} };
var hasRequiredIterableToArrayLimit;
function requireIterableToArrayLimit() {
  if (hasRequiredIterableToArrayLimit)
    return iterableToArrayLimit.exports;
  hasRequiredIterableToArrayLimit = 1;
  (function(module) {
    function _iterableToArrayLimit(arr, i) {
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
    module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(iterableToArrayLimit);
  return iterableToArrayLimit.exports;
}
var unsupportedIterableToArray = { exports: {} };
var arrayLikeToArray = { exports: {} };
var hasRequiredArrayLikeToArray;
function requireArrayLikeToArray() {
  if (hasRequiredArrayLikeToArray)
    return arrayLikeToArray.exports;
  hasRequiredArrayLikeToArray = 1;
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
  return arrayLikeToArray.exports;
}
var hasRequiredUnsupportedIterableToArray;
function requireUnsupportedIterableToArray() {
  if (hasRequiredUnsupportedIterableToArray)
    return unsupportedIterableToArray.exports;
  hasRequiredUnsupportedIterableToArray = 1;
  (function(module) {
    var arrayLikeToArray2 = requireArrayLikeToArray();
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return arrayLikeToArray2(o, minLen);
    }
    module.exports = _unsupportedIterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(unsupportedIterableToArray);
  return unsupportedIterableToArray.exports;
}
var nonIterableRest = { exports: {} };
var hasRequiredNonIterableRest;
function requireNonIterableRest() {
  if (hasRequiredNonIterableRest)
    return nonIterableRest.exports;
  hasRequiredNonIterableRest = 1;
  (function(module) {
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(nonIterableRest);
  return nonIterableRest.exports;
}
var hasRequiredSlicedToArray;
function requireSlicedToArray() {
  if (hasRequiredSlicedToArray)
    return slicedToArray.exports;
  hasRequiredSlicedToArray = 1;
  (function(module) {
    var arrayWithHoles2 = requireArrayWithHoles();
    var iterableToArrayLimit2 = requireIterableToArrayLimit();
    var unsupportedIterableToArray2 = requireUnsupportedIterableToArray();
    var nonIterableRest2 = requireNonIterableRest();
    function _slicedToArray(arr, i) {
      return arrayWithHoles2(arr) || iterableToArrayLimit2(arr, i) || unsupportedIterableToArray2(arr, i) || nonIterableRest2();
    }
    module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(slicedToArray);
  return slicedToArray.exports;
}
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
const classNames = classnames.exports;
var Context = {};
var hasRequiredContext;
function requireContext() {
  if (hasRequiredContext)
    return Context;
  hasRequiredContext = 1;
  Object.defineProperty(Context, "__esModule", {
    value: true
  });
  Context.default = void 0;
  var _react2 = require$$3;
  var IconContext = /* @__PURE__ */ (0, _react2.createContext)({});
  var _default2 = IconContext;
  Context.default = _default2;
  return Context;
}
var IconBase = {};
var utils = {};
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }
  return n;
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function hue2rgb(p2, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p2 + (q - p2) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p2 + (q - p2) * (2 / 3 - t) * 6;
  }
  return p2;
}
function hslToRgb(h2, s, l) {
  var r;
  var g;
  var b;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p2 = 2 * l - q;
    r = hue2rgb(p2, q, h2 + 1 / 3);
    g = hue2rgb(p2, q, h2);
    b = hue2rgb(p2, q, h2 - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h2 = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v };
}
function hsvToRgb(h2, s, v) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h2);
  var f = h2 - i;
  var p2 = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p2, p2, t, v][mod];
  var g = [t, v, v, q, p2, p2][mod];
  var b = [p2, p2, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
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
  var v = null;
  var l = null;
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
      v = convertToPercentage(color2.v);
      rgb = hsvToRgb(color2.h, s, v);
      ok2 = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s = convertToPercentage(color2.s);
      l = convertToPercentage(color2.l);
      rgb = hslToRgb(color2.h, s, l);
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
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
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
  var r = _ref.r, g = _ref.g, b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g = _ref2.g, b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
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
function generate(color2) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color2);
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
const index_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
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
}, Symbol.toStringTag, { value: "Module" }));
const require$$4 = /* @__PURE__ */ getAugmentedNamespace(index_esm);
var warning = {};
var hasRequiredWarning;
function requireWarning() {
  if (hasRequiredWarning)
    return warning;
  hasRequiredWarning = 1;
  Object.defineProperty(warning, "__esModule", {
    value: true
  });
  warning.call = call;
  warning.default = void 0;
  warning.note = note;
  warning.noteOnce = noteOnce;
  warning.resetWarned = resetWarned;
  warning.warning = warning$12;
  warning.warningOnce = warningOnce;
  var warned = {};
  function warning$12(valid2, message2) {
    if (process.env.NODE_ENV !== "production" && !valid2 && console !== void 0) {
      console.error("Warning: ".concat(message2));
    }
  }
  function note(valid2, message2) {
    if (process.env.NODE_ENV !== "production" && !valid2 && console !== void 0) {
      console.warn("Note: ".concat(message2));
    }
  }
  function resetWarned() {
    warned = {};
  }
  function call(method, valid2, message2) {
    if (!valid2 && !warned[message2]) {
      method(false, message2);
      warned[message2] = true;
    }
  }
  function warningOnce(valid2, message2) {
    call(warning$12, valid2, message2);
  }
  function noteOnce(valid2, message2) {
    call(note, valid2, message2);
  }
  var _default2 = warningOnce;
  warning.default = _default2;
  return warning;
}
var dynamicCSS = {};
var canUseDom = {};
var hasRequiredCanUseDom;
function requireCanUseDom() {
  if (hasRequiredCanUseDom)
    return canUseDom;
  hasRequiredCanUseDom = 1;
  Object.defineProperty(canUseDom, "__esModule", {
    value: true
  });
  canUseDom.default = canUseDom$1;
  function canUseDom$1() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  return canUseDom;
}
var hasRequiredDynamicCSS;
function requireDynamicCSS() {
  if (hasRequiredDynamicCSS)
    return dynamicCSS;
  hasRequiredDynamicCSS = 1;
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(dynamicCSS, "__esModule", {
    value: true
  });
  dynamicCSS.injectCSS = injectCSS;
  dynamicCSS.removeCSS = removeCSS;
  dynamicCSS.updateCSS = updateCSS;
  var _canUseDom = _interopRequireDefault2(requireCanUseDom());
  var MARK_KEY = "rc-util-key";
  function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark2 = _ref.mark;
    if (mark2) {
      return mark2.startsWith("data-") ? mark2 : "data-".concat(mark2);
    }
    return MARK_KEY;
  }
  function getContainer(option) {
    if (option.attachTo) {
      return option.attachTo;
    }
    var head = document.querySelector("head");
    return head || document.body;
  }
  function injectCSS(css2) {
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
    styleNode.innerHTML = css2;
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
  var containerCache = /* @__PURE__ */ new Map();
  function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var container = getContainer(option);
    return Array.from(containerCache.get(container).children).find(function(node) {
      return node.tagName === "STYLE" && node.getAttribute(getMark(option)) === key;
    });
  }
  function removeCSS(key) {
    var _existNode$parentNode;
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    existNode === null || existNode === void 0 ? void 0 : (_existNode$parentNode = existNode.parentNode) === null || _existNode$parentNode === void 0 ? void 0 : _existNode$parentNode.removeChild(existNode);
  }
  function updateCSS(css2, key) {
    var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var container = getContainer(option);
    if (!containerCache.has(container)) {
      var placeholderStyle = injectCSS("", option);
      var parentNode = placeholderStyle.parentNode;
      containerCache.set(container, parentNode);
      parentNode.removeChild(placeholderStyle);
    }
    var existNode = findExistNode(key, option);
    if (existNode) {
      var _option$csp3, _option$csp4;
      if (((_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce) && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
        var _option$csp5;
        existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
      }
      if (existNode.innerHTML !== css2) {
        existNode.innerHTML = css2;
      }
      return existNode;
    }
    var newNode = injectCSS(css2, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
  }
  return dynamicCSS;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils)
    return utils;
  hasRequiredUtils = 1;
  var _interopRequireWildcard2 = interopRequireWildcard.exports;
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(utils, "__esModule", {
    value: true
  });
  utils.warning = warning2;
  utils.isIconDefinition = isIconDefinition;
  utils.normalizeAttrs = normalizeAttrs;
  utils.generate = generate2;
  utils.getSecondaryColor = getSecondaryColor;
  utils.normalizeTwoToneColors = normalizeTwoToneColors;
  utils.useInsertStyles = utils.iconStyles = utils.svgBaseProps = void 0;
  var _objectSpread22 = _interopRequireDefault2(requireObjectSpread2());
  var _typeof2 = _interopRequireDefault2(_typeof.exports);
  var _colors = require$$4;
  var _react2 = _interopRequireWildcard2(require$$3);
  var _warning = _interopRequireDefault2(requireWarning());
  var _dynamicCSS = requireDynamicCSS();
  var _Context = _interopRequireDefault2(requireContext());
  function warning2(valid2, message2) {
    (0, _warning.default)(valid2, "[@ant-design/icons] ".concat(message2));
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
      return /* @__PURE__ */ _react2.default.createElement(node.tag, (0, _objectSpread22.default)({
        key
      }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index2) {
        return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
      }));
    }
    return /* @__PURE__ */ _react2.default.createElement(node.tag, (0, _objectSpread22.default)((0, _objectSpread22.default)({
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
  utils.svgBaseProps = svgBaseProps;
  var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
  utils.iconStyles = iconStyles;
  var useInsertStyles = function useInsertStyles2() {
    var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
    var _useContext = (0, _react2.useContext)(_Context.default), csp = _useContext.csp;
    (0, _react2.useEffect)(function() {
      (0, _dynamicCSS.updateCSS)(styleStr, "@ant-design-icons", {
        prepend: true,
        csp
      });
    }, []);
  };
  utils.useInsertStyles = useInsertStyles;
  return utils;
}
var hasRequiredIconBase;
function requireIconBase() {
  if (hasRequiredIconBase)
    return IconBase;
  hasRequiredIconBase = 1;
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(IconBase, "__esModule", {
    value: true
  });
  IconBase.default = void 0;
  var _objectWithoutProperties2 = _interopRequireDefault2(requireObjectWithoutProperties());
  var _objectSpread22 = _interopRequireDefault2(requireObjectSpread2());
  var _utils = requireUtils();
  var _excluded2 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
  var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
  };
  function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || (0, _utils.getSecondaryColor)(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
  }
  function getTwoToneColors() {
    return (0, _objectSpread22.default)({}, twoToneColorPalette);
  }
  var IconBase$1 = function IconBase2(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = (0, _objectWithoutProperties2.default)(props, _excluded2);
    var colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || (0, _utils.getSecondaryColor)(primaryColor)
      };
    }
    (0, _utils.useInsertStyles)();
    (0, _utils.warning)((0, _utils.isIconDefinition)(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!(0, _utils.isIconDefinition)(icon)) {
      return null;
    }
    var target = icon;
    if (target && typeof target.icon === "function") {
      target = (0, _objectSpread22.default)((0, _objectSpread22.default)({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }
    return (0, _utils.generate)(target.icon, "svg-".concat(target.name), (0, _objectSpread22.default)({
      className,
      onClick,
      style: style2,
      "data-icon": target.name,
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, restProps));
  };
  IconBase$1.displayName = "IconReact";
  IconBase$1.getTwoToneColors = getTwoToneColors;
  IconBase$1.setTwoToneColors = setTwoToneColors;
  var _default2 = IconBase$1;
  IconBase.default = _default2;
  return IconBase;
}
var twoTonePrimaryColor = {};
var hasRequiredTwoTonePrimaryColor;
function requireTwoTonePrimaryColor() {
  if (hasRequiredTwoTonePrimaryColor)
    return twoTonePrimaryColor;
  hasRequiredTwoTonePrimaryColor = 1;
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(twoTonePrimaryColor, "__esModule", {
    value: true
  });
  twoTonePrimaryColor.setTwoToneColor = setTwoToneColor;
  twoTonePrimaryColor.getTwoToneColor = getTwoToneColor;
  var _slicedToArray2 = _interopRequireDefault2(requireSlicedToArray());
  var _IconBase = _interopRequireDefault2(requireIconBase());
  var _utils = requireUtils();
  function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor), _normalizeTwoToneColo2 = (0, _slicedToArray2.default)(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
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
  return twoTonePrimaryColor;
}
var hasRequiredAntdIcon;
function requireAntdIcon() {
  if (hasRequiredAntdIcon)
    return AntdIcon;
  hasRequiredAntdIcon = 1;
  var _interopRequireDefault2 = interopRequireDefault.exports;
  var _interopRequireWildcard2 = interopRequireWildcard.exports;
  Object.defineProperty(AntdIcon, "__esModule", {
    value: true
  });
  AntdIcon.default = void 0;
  var _objectSpread22 = _interopRequireDefault2(requireObjectSpread2());
  var _slicedToArray2 = _interopRequireDefault2(requireSlicedToArray());
  var _defineProperty2 = _interopRequireDefault2(requireDefineProperty());
  var _objectWithoutProperties2 = _interopRequireDefault2(requireObjectWithoutProperties());
  var React2 = _interopRequireWildcard2(require$$3);
  var _classnames = _interopRequireDefault2(classnames.exports);
  var _Context = _interopRequireDefault2(requireContext());
  var _IconBase = _interopRequireDefault2(requireIconBase());
  var _twoTonePrimaryColor = requireTwoTonePrimaryColor();
  var _utils = requireUtils();
  var _excluded2 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
  (0, _twoTonePrimaryColor.setTwoToneColor)("#1890ff");
  var Icon = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
    var _classNames;
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = (0, _objectWithoutProperties2.default)(props, _excluded2);
    var _React$useContext = React2.useContext(_Context.default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre;
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
    return /* @__PURE__ */ React2.createElement("span", (0, _objectSpread22.default)((0, _objectSpread22.default)({
      role: "img",
      "aria-label": icon.name
    }, restProps), {}, {
      ref,
      tabIndex: iconTabIndex,
      onClick,
      className: classString
    }), /* @__PURE__ */ React2.createElement(_IconBase.default, {
      icon,
      primaryColor,
      secondaryColor,
      style: svgStyle
    }));
  });
  Icon.displayName = "AntdIcon";
  Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
  Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
  var _default2 = Icon;
  AntdIcon.default = _default2;
  return AntdIcon;
}
var _interopRequireWildcard$7 = interopRequireWildcard.exports;
var _interopRequireDefault$7 = interopRequireDefault.exports;
Object.defineProperty(CopyOutlined$3, "__esModule", {
  value: true
});
CopyOutlined$3.default = void 0;
var _objectSpread2$7 = _interopRequireDefault$7(requireObjectSpread2());
var React$7 = _interopRequireWildcard$7(require$$3);
var _CopyOutlined = _interopRequireDefault$7(requireCopyOutlined());
var _AntdIcon$7 = _interopRequireDefault$7(requireAntdIcon());
var CopyOutlined$1 = function CopyOutlined(props, ref) {
  return /* @__PURE__ */ React$7.createElement(_AntdIcon$7.default, (0, _objectSpread2$7.default)((0, _objectSpread2$7.default)({}, props), {}, {
    ref,
    icon: _CopyOutlined.default
  }));
};
CopyOutlined$1.displayName = "CopyOutlined";
var _default$7 = /* @__PURE__ */ React$7.forwardRef(CopyOutlined$1);
CopyOutlined$3.default = _default$7;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _CopyOutlined2 = _interopRequireDefault2(CopyOutlined$3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _CopyOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(CopyOutlined$4, CopyOutlined$4.exports);
const CopyOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(CopyOutlined$4.exports);
var CodeOutlined$4 = { exports: {} };
var CodeOutlined$3 = {};
var CodeOutlined$2 = {};
var hasRequiredCodeOutlined;
function requireCodeOutlined() {
  if (hasRequiredCodeOutlined)
    return CodeOutlined$2;
  hasRequiredCodeOutlined = 1;
  Object.defineProperty(CodeOutlined$2, "__esModule", { value: true });
  var CodeOutlined3 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "code", "theme": "outlined" };
  CodeOutlined$2.default = CodeOutlined3;
  return CodeOutlined$2;
}
var _interopRequireWildcard$6 = interopRequireWildcard.exports;
var _interopRequireDefault$6 = interopRequireDefault.exports;
Object.defineProperty(CodeOutlined$3, "__esModule", {
  value: true
});
CodeOutlined$3.default = void 0;
var _objectSpread2$6 = _interopRequireDefault$6(requireObjectSpread2());
var React$6 = _interopRequireWildcard$6(require$$3);
var _CodeOutlined = _interopRequireDefault$6(requireCodeOutlined());
var _AntdIcon$6 = _interopRequireDefault$6(requireAntdIcon());
var CodeOutlined$1 = function CodeOutlined(props, ref) {
  return /* @__PURE__ */ React$6.createElement(_AntdIcon$6.default, (0, _objectSpread2$6.default)((0, _objectSpread2$6.default)({}, props), {}, {
    ref,
    icon: _CodeOutlined.default
  }));
};
CodeOutlined$1.displayName = "CodeOutlined";
var _default$6 = /* @__PURE__ */ React$6.forwardRef(CodeOutlined$1);
CodeOutlined$3.default = _default$6;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _CodeOutlined2 = _interopRequireDefault2(CodeOutlined$3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _CodeOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(CodeOutlined$4, CodeOutlined$4.exports);
const CodeOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(CodeOutlined$4.exports);
var CheckOutlined$4 = { exports: {} };
var CheckOutlined$3 = {};
var CheckOutlined$2 = {};
var hasRequiredCheckOutlined;
function requireCheckOutlined() {
  if (hasRequiredCheckOutlined)
    return CheckOutlined$2;
  hasRequiredCheckOutlined = 1;
  Object.defineProperty(CheckOutlined$2, "__esModule", { value: true });
  var CheckOutlined3 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
  CheckOutlined$2.default = CheckOutlined3;
  return CheckOutlined$2;
}
var _interopRequireWildcard$5 = interopRequireWildcard.exports;
var _interopRequireDefault$5 = interopRequireDefault.exports;
Object.defineProperty(CheckOutlined$3, "__esModule", {
  value: true
});
CheckOutlined$3.default = void 0;
var _objectSpread2$5 = _interopRequireDefault$5(requireObjectSpread2());
var React$5 = _interopRequireWildcard$5(require$$3);
var _CheckOutlined = _interopRequireDefault$5(requireCheckOutlined());
var _AntdIcon$5 = _interopRequireDefault$5(requireAntdIcon());
var CheckOutlined$1 = function CheckOutlined(props, ref) {
  return /* @__PURE__ */ React$5.createElement(_AntdIcon$5.default, (0, _objectSpread2$5.default)((0, _objectSpread2$5.default)({}, props), {}, {
    ref,
    icon: _CheckOutlined.default
  }));
};
CheckOutlined$1.displayName = "CheckOutlined";
var _default$5 = /* @__PURE__ */ React$5.forwardRef(CheckOutlined$1);
CheckOutlined$3.default = _default$5;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _CheckOutlined2 = _interopRequireDefault2(CheckOutlined$3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _CheckOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(CheckOutlined$4, CheckOutlined$4.exports);
const CheckOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(CheckOutlined$4.exports);
var BugOutlined$4 = { exports: {} };
var BugOutlined$3 = {};
var BugOutlined$2 = {};
var hasRequiredBugOutlined;
function requireBugOutlined() {
  if (hasRequiredBugOutlined)
    return BugOutlined$2;
  hasRequiredBugOutlined = 1;
  Object.defineProperty(BugOutlined$2, "__esModule", { value: true });
  var BugOutlined3 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 00123.2-149.5A120 120 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 01308 680V412h408v268z" } }] }, "name": "bug", "theme": "outlined" };
  BugOutlined$2.default = BugOutlined3;
  return BugOutlined$2;
}
var _interopRequireWildcard$4 = interopRequireWildcard.exports;
var _interopRequireDefault$4 = interopRequireDefault.exports;
Object.defineProperty(BugOutlined$3, "__esModule", {
  value: true
});
BugOutlined$3.default = void 0;
var _objectSpread2$4 = _interopRequireDefault$4(requireObjectSpread2());
var React$4 = _interopRequireWildcard$4(require$$3);
var _BugOutlined = _interopRequireDefault$4(requireBugOutlined());
var _AntdIcon$4 = _interopRequireDefault$4(requireAntdIcon());
var BugOutlined$1 = function BugOutlined(props, ref) {
  return /* @__PURE__ */ React$4.createElement(_AntdIcon$4.default, (0, _objectSpread2$4.default)((0, _objectSpread2$4.default)({}, props), {}, {
    ref,
    icon: _BugOutlined.default
  }));
};
BugOutlined$1.displayName = "BugOutlined";
var _default$4 = /* @__PURE__ */ React$4.forwardRef(BugOutlined$1);
BugOutlined$3.default = _default$4;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _BugOutlined2 = _interopRequireDefault2(BugOutlined$3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _BugOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(BugOutlined$4, BugOutlined$4.exports);
const BugOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(BugOutlined$4.exports);
var LinkOutlined$4 = { exports: {} };
var LinkOutlined$3 = {};
var LinkOutlined$2 = {};
var hasRequiredLinkOutlined;
function requireLinkOutlined() {
  if (hasRequiredLinkOutlined)
    return LinkOutlined$2;
  hasRequiredLinkOutlined = 1;
  Object.defineProperty(LinkOutlined$2, "__esModule", { value: true });
  var LinkOutlined3 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" } }] }, "name": "link", "theme": "outlined" };
  LinkOutlined$2.default = LinkOutlined3;
  return LinkOutlined$2;
}
var _interopRequireWildcard$3 = interopRequireWildcard.exports;
var _interopRequireDefault$3 = interopRequireDefault.exports;
Object.defineProperty(LinkOutlined$3, "__esModule", {
  value: true
});
LinkOutlined$3.default = void 0;
var _objectSpread2$3 = _interopRequireDefault$3(requireObjectSpread2());
var React$3 = _interopRequireWildcard$3(require$$3);
var _LinkOutlined = _interopRequireDefault$3(requireLinkOutlined());
var _AntdIcon$3 = _interopRequireDefault$3(requireAntdIcon());
var LinkOutlined$1 = function LinkOutlined(props, ref) {
  return /* @__PURE__ */ React$3.createElement(_AntdIcon$3.default, (0, _objectSpread2$3.default)((0, _objectSpread2$3.default)({}, props), {}, {
    ref,
    icon: _LinkOutlined.default
  }));
};
LinkOutlined$1.displayName = "LinkOutlined";
var _default$3 = /* @__PURE__ */ React$3.forwardRef(LinkOutlined$1);
LinkOutlined$3.default = _default$3;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _LinkOutlined2 = _interopRequireDefault2(LinkOutlined$3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _LinkOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(LinkOutlined$4, LinkOutlined$4.exports);
const LinkOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(LinkOutlined$4.exports);
const { message } = window.antd;
function copyToClipboard(str) {
  copyToClipboard$1(str);
  message.success("Copy successfully !");
}
function LinkCopy({ route }) {
  return /* @__PURE__ */ modules$1.createElement(LinkOutlined2, {
    className: "copy-link-icon",
    onClick: (e) => {
      e.stopPropagation();
      e.preventDefault();
      const { origin, pathname } = location;
      copyToClipboard(`${origin}${pathname}#${route}`);
    }
  });
}
const index$2 = "";
function baseSlice$1(array, start, end) {
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
var _baseSlice = baseSlice$1;
var toNumber = toNumber_1;
var INFINITY$2 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite$1;
var toFinite = toFinite_1;
function toInteger$1(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_1 = toInteger$1;
var baseSlice = _baseSlice, toInteger = toInteger_1;
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = guard || n === void 0 ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, 0, n < 0 ? 0 : n);
}
var dropRight_1 = dropRight;
const SUSPENSE_PROMISE = Symbol();
const isSuspensePromise = (promise) => !!promise[SUSPENSE_PROMISE];
const isSuspensePromiseAlreadyCancelled = (suspensePromise) => !suspensePromise[SUSPENSE_PROMISE].c;
const cancelSuspensePromise = (suspensePromise) => {
  var _a, _b;
  (_b = (_a = suspensePromise[SUSPENSE_PROMISE]).c) == null ? void 0 : _b.call(_a);
};
const isEqualSuspensePromise = (oldSuspensePromise, newSuspensePromise) => {
  const oldOriginalPromise = oldSuspensePromise[SUSPENSE_PROMISE].o;
  const newOriginalPromise = newSuspensePromise[SUSPENSE_PROMISE].o;
  return oldOriginalPromise === newOriginalPromise || oldSuspensePromise === newOriginalPromise || isSuspensePromise(oldOriginalPromise) && isEqualSuspensePromise(oldOriginalPromise, newSuspensePromise);
};
const createSuspensePromise = (promise) => {
  const objectToAttach = {
    o: promise,
    c: null
  };
  const suspensePromise = new Promise((resolve) => {
    objectToAttach.c = () => {
      objectToAttach.c = null;
      resolve();
    };
    promise.then(objectToAttach.c, objectToAttach.c);
  });
  suspensePromise[SUSPENSE_PROMISE] = objectToAttach;
  return suspensePromise;
};
const hasInitialValue = (atom2) => "init" in atom2;
const READ_ATOM = "r";
const WRITE_ATOM = "w";
const COMMIT_ATOM = "c";
const SUBSCRIBE_ATOM = "s";
const RESTORE_ATOMS = "h";
const DEV_SUBSCRIBE_STATE = "n";
const DEV_GET_MOUNTED_ATOMS = "l";
const DEV_GET_ATOM_STATE = "a";
const DEV_GET_MOUNTED = "m";
const createStore = (initialValues) => {
  const committedAtomStateMap = /* @__PURE__ */ new WeakMap();
  const mountedMap = /* @__PURE__ */ new WeakMap();
  const pendingMap = /* @__PURE__ */ new Map();
  let stateListeners;
  let mountedAtoms;
  if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
    stateListeners = /* @__PURE__ */ new Set();
    mountedAtoms = /* @__PURE__ */ new Set();
  }
  if (initialValues) {
    for (const [atom2, value] of initialValues) {
      const atomState = { v: value, r: 0, d: /* @__PURE__ */ new Map() };
      if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
        Object.freeze(atomState);
        if (!hasInitialValue(atom2)) {
          console.warn("Found initial value for derived atom which can cause unexpected behavior", atom2);
        }
      }
      committedAtomStateMap.set(atom2, atomState);
    }
  }
  const suspensePromiseCacheMap = /* @__PURE__ */ new WeakMap();
  const addSuspensePromiseToCache = (version2, atom2, suspensePromise) => {
    let cache2 = suspensePromiseCacheMap.get(atom2);
    if (!cache2) {
      cache2 = /* @__PURE__ */ new Map();
      suspensePromiseCacheMap.set(atom2, cache2);
    }
    suspensePromise.then(() => {
      if (cache2.get(version2) === suspensePromise) {
        cache2.delete(version2);
        if (!cache2.size) {
          suspensePromiseCacheMap.delete(atom2);
        }
      }
    });
    cache2.set(version2, suspensePromise);
  };
  const cancelAllSuspensePromiseInCache = (atom2) => {
    const versionSet = /* @__PURE__ */ new Set();
    const cache2 = suspensePromiseCacheMap.get(atom2);
    if (cache2) {
      suspensePromiseCacheMap.delete(atom2);
      cache2.forEach((suspensePromise, version2) => {
        cancelSuspensePromise(suspensePromise);
        versionSet.add(version2);
      });
    }
    return versionSet;
  };
  const versionedAtomStateMapMap = /* @__PURE__ */ new WeakMap();
  const getVersionedAtomStateMap = (version2) => {
    let versionedAtomStateMap = versionedAtomStateMapMap.get(version2);
    if (!versionedAtomStateMap) {
      versionedAtomStateMap = /* @__PURE__ */ new Map();
      versionedAtomStateMapMap.set(version2, versionedAtomStateMap);
    }
    return versionedAtomStateMap;
  };
  const getAtomState = (version2, atom2) => {
    if (version2) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version2);
      let atomState = versionedAtomStateMap.get(atom2);
      if (!atomState) {
        atomState = getAtomState(version2.p, atom2);
        if (atomState) {
          versionedAtomStateMap.set(atom2, atomState);
        }
      }
      return atomState;
    }
    return committedAtomStateMap.get(atom2);
  };
  const setAtomState = (version2, atom2, atomState) => {
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
      Object.freeze(atomState);
    }
    if (version2) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version2);
      versionedAtomStateMap.set(atom2, atomState);
    } else {
      const prevAtomState = committedAtomStateMap.get(atom2);
      committedAtomStateMap.set(atom2, atomState);
      if (!pendingMap.has(atom2)) {
        pendingMap.set(atom2, prevAtomState);
      }
    }
  };
  const createReadDependencies = (version2, prevReadDependencies = /* @__PURE__ */ new Map(), dependencies) => {
    if (!dependencies) {
      return prevReadDependencies;
    }
    const readDependencies = /* @__PURE__ */ new Map();
    let changed = false;
    dependencies.forEach((atom2) => {
      var _a;
      const revision = ((_a = getAtomState(version2, atom2)) == null ? void 0 : _a.r) || 0;
      readDependencies.set(atom2, revision);
      if (prevReadDependencies.get(atom2) !== revision) {
        changed = true;
      }
    });
    if (prevReadDependencies.size === readDependencies.size && !changed) {
      return prevReadDependencies;
    }
    return readDependencies;
  };
  const setAtomValue = (version2, atom2, value, dependencies, suspensePromise) => {
    const atomState = getAtomState(version2, atom2);
    if (atomState) {
      if (suspensePromise && (!("p" in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }
      if ("p" in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }
    const nextAtomState = {
      v: value,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version2, atomState == null ? void 0 : atomState.d, dependencies)
    };
    let changed = false;
    if (!atomState || !("v" in atomState) || !Object.is(atomState.v, value)) {
      changed = true;
      ++nextAtomState.r;
      if (nextAtomState.d.has(atom2)) {
        nextAtomState.d = new Map(nextAtomState.d).set(atom2, nextAtomState.r);
      }
    } else if ("i" in atomState || nextAtomState.d !== atomState.d && (nextAtomState.d.size !== atomState.d.size || !Array.from(nextAtomState.d.keys()).every((a) => atomState.d.has(a)))) {
      changed = true;
      Promise.resolve().then(() => {
        flushPending(version2);
      });
    }
    if (atomState && !changed) {
      return atomState;
    }
    setAtomState(version2, atom2, nextAtomState);
    return nextAtomState;
  };
  const setAtomReadError = (version2, atom2, error, dependencies, suspensePromise) => {
    const atomState = getAtomState(version2, atom2);
    if (atomState) {
      if (suspensePromise && (!("p" in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }
      if ("p" in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }
    const nextAtomState = {
      e: error,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version2, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version2, atom2, nextAtomState);
    return nextAtomState;
  };
  const setAtomSuspensePromise = (version2, atom2, suspensePromise, dependencies) => {
    const atomState = getAtomState(version2, atom2);
    if (atomState && "p" in atomState) {
      if (isEqualSuspensePromise(atomState.p, suspensePromise)) {
        return atomState;
      }
      cancelSuspensePromise(atomState.p);
    }
    addSuspensePromiseToCache(version2, atom2, suspensePromise);
    const nextAtomState = {
      p: suspensePromise,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version2, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version2, atom2, nextAtomState);
    return nextAtomState;
  };
  const setAtomPromiseOrValue = (version2, atom2, promiseOrValue, dependencies) => {
    if (promiseOrValue instanceof Promise) {
      const suspensePromise = createSuspensePromise(promiseOrValue.then((value) => {
        setAtomValue(version2, atom2, value, dependencies, suspensePromise);
      }).catch((e) => {
        if (e instanceof Promise) {
          if (isSuspensePromise(e)) {
            return e.then(() => {
              readAtomState(version2, atom2, true);
            });
          }
          return e;
        }
        setAtomReadError(version2, atom2, e, dependencies, suspensePromise);
      }));
      return setAtomSuspensePromise(version2, atom2, suspensePromise, dependencies);
    }
    return setAtomValue(version2, atom2, promiseOrValue, dependencies);
  };
  const setAtomInvalidated = (version2, atom2) => {
    const atomState = getAtomState(version2, atom2);
    if (atomState) {
      const nextAtomState = {
        ...atomState,
        i: atomState.r
      };
      setAtomState(version2, atom2, nextAtomState);
    } else if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
      console.warn("[Bug] could not invalidate non existing atom", atom2);
    }
  };
  const readAtomState = (version2, atom2, force) => {
    if (!force) {
      const atomState = getAtomState(version2, atom2);
      if (atomState) {
        if (atomState.r !== atomState.i && "p" in atomState && !isSuspensePromiseAlreadyCancelled(atomState.p)) {
          return atomState;
        }
        atomState.d.forEach((_, a) => {
          if (a !== atom2) {
            if (!mountedMap.has(a)) {
              readAtomState(version2, a);
            } else {
              const aState = getAtomState(version2, a);
              if (aState && aState.r === aState.i) {
                readAtomState(version2, a);
              }
            }
          }
        });
        if (Array.from(atomState.d).every(([a, r]) => {
          const aState = getAtomState(version2, a);
          return aState && "v" in aState && aState.r === r;
        })) {
          return atomState;
        }
      }
    }
    const dependencies = /* @__PURE__ */ new Set();
    try {
      const promiseOrValue = atom2.read((a) => {
        dependencies.add(a);
        const aState = a === atom2 ? getAtomState(version2, a) : readAtomState(version2, a);
        if (aState) {
          if ("e" in aState) {
            throw aState.e;
          }
          if ("p" in aState) {
            throw aState.p;
          }
          return aState.v;
        }
        if (hasInitialValue(a)) {
          return a.init;
        }
        throw new Error("no atom init");
      });
      return setAtomPromiseOrValue(version2, atom2, promiseOrValue, dependencies);
    } catch (errorOrPromise) {
      if (errorOrPromise instanceof Promise) {
        const suspensePromise = createSuspensePromise(errorOrPromise);
        return setAtomSuspensePromise(version2, atom2, suspensePromise, dependencies);
      }
      return setAtomReadError(version2, atom2, errorOrPromise, dependencies);
    }
  };
  const readAtom = (readingAtom, version2) => {
    const atomState = readAtomState(version2, readingAtom);
    return atomState;
  };
  const addAtom = (version2, addingAtom) => {
    let mounted = mountedMap.get(addingAtom);
    if (!mounted) {
      mounted = mountAtom(version2, addingAtom);
    }
    return mounted;
  };
  const canUnmountAtom = (atom2, mounted) => !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom2));
  const delAtom = (version2, deletingAtom) => {
    const mounted = mountedMap.get(deletingAtom);
    if (mounted && canUnmountAtom(deletingAtom, mounted)) {
      unmountAtom(version2, deletingAtom);
    }
  };
  const invalidateDependents = (version2, atom2) => {
    const mounted = mountedMap.get(atom2);
    mounted == null ? void 0 : mounted.t.forEach((dependent) => {
      if (dependent !== atom2) {
        setAtomInvalidated(version2, dependent);
        invalidateDependents(version2, dependent);
      }
    });
  };
  const writeAtomState = (version2, atom2, update) => {
    let isSync = true;
    const writeGetter = (a, options) => {
      const aState = readAtomState(version2, a);
      if ("e" in aState) {
        throw aState.e;
      }
      if ("p" in aState) {
        if (options == null ? void 0 : options.unstable_promise) {
          return aState.p.then(() => writeGetter(a, options));
        }
        if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
          console.info("Reading pending atom state in write operation. We throw a promise for now.", a);
        }
        throw aState.p;
      }
      if ("v" in aState) {
        return aState.v;
      }
      if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
        console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.", a);
      }
      throw new Error("no value found");
    };
    const setter = (a, v) => {
      let promiseOrVoid2;
      if (a === atom2) {
        if (!hasInitialValue(a)) {
          throw new Error("atom not writable");
        }
        const versionSet = cancelAllSuspensePromiseInCache(a);
        versionSet.forEach((cancelledVersion) => {
          if (cancelledVersion !== version2) {
            setAtomPromiseOrValue(cancelledVersion, a, v);
          }
        });
        const prevAtomState = getAtomState(version2, a);
        const nextAtomState = setAtomPromiseOrValue(version2, a, v);
        if (prevAtomState !== nextAtomState) {
          invalidateDependents(version2, a);
        }
      } else {
        promiseOrVoid2 = writeAtomState(version2, a, v);
      }
      if (!isSync) {
        flushPending(version2);
      }
      return promiseOrVoid2;
    };
    const promiseOrVoid = atom2.write(writeGetter, setter, update);
    isSync = false;
    return promiseOrVoid;
  };
  const writeAtom = (writingAtom, update, version2) => {
    const promiseOrVoid = writeAtomState(version2, writingAtom, update);
    flushPending(version2);
    return promiseOrVoid;
  };
  const isActuallyWritableAtom = (atom2) => !!atom2.write;
  const mountAtom = (version2, atom2, initialDependent) => {
    const mounted = {
      t: new Set(initialDependent && [initialDependent]),
      l: /* @__PURE__ */ new Set()
    };
    mountedMap.set(atom2, mounted);
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
      mountedAtoms.add(atom2);
    }
    const atomState = readAtomState(void 0, atom2);
    atomState.d.forEach((_, a) => {
      const aMounted = mountedMap.get(a);
      if (aMounted) {
        aMounted.t.add(atom2);
      } else {
        if (a !== atom2) {
          mountAtom(version2, a, atom2);
        }
      }
    });
    if (isActuallyWritableAtom(atom2) && atom2.onMount) {
      const setAtom = (update) => writeAtom(atom2, update, version2);
      const onUnmount = atom2.onMount(setAtom);
      version2 = void 0;
      if (onUnmount) {
        mounted.u = onUnmount;
      }
    }
    return mounted;
  };
  const unmountAtom = (version2, atom2) => {
    var _a;
    const onUnmount = (_a = mountedMap.get(atom2)) == null ? void 0 : _a.u;
    if (onUnmount) {
      onUnmount();
    }
    mountedMap.delete(atom2);
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
      mountedAtoms.delete(atom2);
    }
    const atomState = getAtomState(version2, atom2);
    if (atomState) {
      atomState.d.forEach((_, a) => {
        if (a !== atom2) {
          const mounted = mountedMap.get(a);
          if (mounted) {
            mounted.t.delete(atom2);
            if (canUnmountAtom(a, mounted)) {
              unmountAtom(version2, a);
            }
          }
        }
      });
    } else if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
      console.warn("[Bug] could not find atom state to unmount", atom2);
    }
  };
  const mountDependencies = (version2, atom2, atomState, prevReadDependencies) => {
    const dependencies = new Set(atomState.d.keys());
    prevReadDependencies == null ? void 0 : prevReadDependencies.forEach((_, a) => {
      if (dependencies.has(a)) {
        dependencies.delete(a);
        return;
      }
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.delete(atom2);
        if (canUnmountAtom(a, mounted)) {
          unmountAtom(version2, a);
        }
      }
    });
    dependencies.forEach((a) => {
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.add(atom2);
      } else if (mountedMap.has(atom2)) {
        mountAtom(version2, a, atom2);
      }
    });
  };
  const flushPending = (version2) => {
    if (version2) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version2);
      versionedAtomStateMap.forEach((atomState, atom2) => {
        const committedAtomState = committedAtomStateMap.get(atom2);
        if (atomState !== committedAtomState) {
          const mounted = mountedMap.get(atom2);
          mounted == null ? void 0 : mounted.l.forEach((listener) => listener(version2));
        }
      });
      return;
    }
    while (pendingMap.size) {
      const pending = Array.from(pendingMap);
      pendingMap.clear();
      pending.forEach(([atom2, prevAtomState]) => {
        const atomState = getAtomState(void 0, atom2);
        if (atomState && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(void 0, atom2, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
        if (prevAtomState && "i" in prevAtomState && atomState && !("i" in atomState)) {
          return;
        }
        const mounted = mountedMap.get(atom2);
        mounted == null ? void 0 : mounted.l.forEach((listener) => listener());
      });
    }
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
      stateListeners.forEach((l) => l());
    }
  };
  const commitVersionedAtomStateMap = (version2) => {
    const versionedAtomStateMap = getVersionedAtomStateMap(version2);
    versionedAtomStateMap.forEach((atomState, atom2) => {
      const prevAtomState = committedAtomStateMap.get(atom2);
      if (!prevAtomState || atomState.r > prevAtomState.r || "v" in atomState && atomState.r === prevAtomState.r && atomState.d !== prevAtomState.d) {
        committedAtomStateMap.set(atom2, atomState);
        if (atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(version2, atom2, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
      }
    });
  };
  const commitAtom = (_atom, version2) => {
    if (version2) {
      commitVersionedAtomStateMap(version2);
    }
    flushPending(void 0);
  };
  const subscribeAtom = (atom2, callback, version2) => {
    const mounted = addAtom(version2, atom2);
    const listeners2 = mounted.l;
    listeners2.add(callback);
    return () => {
      listeners2.delete(callback);
      delAtom(version2, atom2);
    };
  };
  const restoreAtoms = (values, version2) => {
    for (const [atom2, value] of values) {
      if (hasInitialValue(atom2)) {
        setAtomPromiseOrValue(version2, atom2, value);
        invalidateDependents(version2, atom2);
      }
    }
    flushPending(version2);
  };
  if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production") {
    return {
      [READ_ATOM]: readAtom,
      [WRITE_ATOM]: writeAtom,
      [COMMIT_ATOM]: commitAtom,
      [SUBSCRIBE_ATOM]: subscribeAtom,
      [RESTORE_ATOMS]: restoreAtoms,
      [DEV_SUBSCRIBE_STATE]: (l) => {
        stateListeners.add(l);
        return () => {
          stateListeners.delete(l);
        };
      },
      [DEV_GET_MOUNTED_ATOMS]: () => mountedAtoms.values(),
      [DEV_GET_ATOM_STATE]: (a) => committedAtomStateMap.get(a),
      [DEV_GET_MOUNTED]: (a) => mountedMap.get(a)
    };
  }
  return {
    [READ_ATOM]: readAtom,
    [WRITE_ATOM]: writeAtom,
    [COMMIT_ATOM]: commitAtom,
    [SUBSCRIBE_ATOM]: subscribeAtom,
    [RESTORE_ATOMS]: restoreAtoms
  };
};
const createScopeContainer = (initialValues, unstable_createStore) => {
  const store = unstable_createStore ? unstable_createStore(initialValues).SECRET_INTERNAL_store : createStore(initialValues);
  return { s: store };
};
const ScopeContextMap = /* @__PURE__ */ new Map();
const getScopeContext = (scope) => {
  if (!ScopeContextMap.has(scope)) {
    ScopeContextMap.set(scope, createContext(createScopeContainer()));
  }
  return ScopeContextMap.get(scope);
};
let keyCount = 0;
function atom(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString: () => key
  };
  if (typeof read === "function") {
    config.read = read;
  } else {
    config.init = read;
    config.read = (get2) => get2(config);
    config.write = (get2, set2, update) => set2(config, typeof update === "function" ? update(get2(config)) : update);
  }
  if (write) {
    config.write = write;
  }
  return config;
}
function useAtomValue(atom2, scope) {
  const ScopeContext = getScopeContext(scope);
  const scopeContainer = useContext$1(ScopeContext);
  const { s: store, v: versionFromProvider } = scopeContainer;
  const getAtomValue = (version22) => {
    const atomState = store[READ_ATOM](atom2, version22);
    if ("e" in atomState) {
      throw atomState.e;
    }
    if ("p" in atomState) {
      throw atomState.p;
    }
    if ("v" in atomState) {
      return atomState.v;
    }
    throw new Error("no atom value");
  };
  const [[version2, valueFromReducer, atomFromReducer], rerenderIfChanged] = useReducer((prev, nextVersion) => {
    const nextValue = getAtomValue(nextVersion);
    if (Object.is(prev[1], nextValue) && prev[2] === atom2) {
      return prev;
    }
    return [nextVersion, nextValue, atom2];
  }, versionFromProvider, (initialVersion) => {
    const initialValue = getAtomValue(initialVersion);
    return [initialVersion, initialValue, atom2];
  });
  let value = valueFromReducer;
  if (atomFromReducer !== atom2) {
    rerenderIfChanged(version2);
    value = getAtomValue(version2);
  }
  useEffect(() => {
    const { v: versionFromProvider2 } = scopeContainer;
    if (versionFromProvider2) {
      store[COMMIT_ATOM](atom2, versionFromProvider2);
    }
    const unsubscribe = store[SUBSCRIBE_ATOM](atom2, rerenderIfChanged, versionFromProvider2);
    rerenderIfChanged(versionFromProvider2);
    return unsubscribe;
  }, [store, atom2, scopeContainer]);
  useEffect(() => {
    store[COMMIT_ATOM](atom2, version2);
  });
  useDebugValue(value);
  return value;
}
function useSetAtom(atom2, scope) {
  const ScopeContext = getScopeContext(scope);
  const { s: store, w: versionedWrite } = useContext$1(ScopeContext);
  const setAtom = useCallback((update) => {
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true } && "production") !== "production" && !("write" in atom2)) {
      throw new Error("not writable atom");
    }
    const write = (version2) => store[WRITE_ATOM](atom2, update, version2);
    return versionedWrite ? versionedWrite(write) : write();
  }, [store, versionedWrite, atom2]);
  return setAtom;
}
function useAtom(atom2, scope) {
  if ("scope" in atom2) {
    console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead.");
    scope = atom2.scope;
  }
  return [
    useAtomValue(atom2, scope),
    useSetAtom(atom2, scope)
  ];
}
const propertiesStore = atom({});
const propertiesPropsStore = atom({
  current: void 0,
  defaultProps: {},
  props: {}
});
const useSetPartialProperties = () => {
  const [storeProps, setStore] = useAtom(propertiesPropsStore);
  return useMemoizedFn((props) => {
    setStore({
      ...storeProps,
      ...props
    });
  });
};
const { Result, Tooltip: Tooltip$1 } = window["antd"];
const ComponentBlock = (props) => {
  const { children, lang, value: content2, error, pathHash, renderer } = props;
  const beforeChildren = dropRight_1(children, 1);
  const [checkCode, { toggle }] = useBoolean();
  const [{ current }] = useAtom(propertiesPropsStore);
  const eventBus = useEventEmitter();
  const active = current !== void 0 && current === content2;
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: classNames("component-area", {
      active
    })
  }, !!beforeChildren.length && /* @__PURE__ */ modules$1.createElement("div", {
    className: "code-box-demo-description markdown-body"
  }, beforeChildren), /* @__PURE__ */ modules$1.createElement(ComponentArea, {
    pathHash,
    error,
    renderer,
    lang,
    content: content2,
    eventBus
  }), /* @__PURE__ */ modules$1.createElement("div", {
    className: "code-box-actions"
  }, /* @__PURE__ */ modules$1.createElement(Tooltip$1, {
    title: "Debug",
    onClick: eventBus.emit
  }, /* @__PURE__ */ modules$1.createElement(BugOutlined2, {
    className: classNames("code-box-code-action", { active })
  })), /* @__PURE__ */ modules$1.createElement(CopyIcon, {
    content: content2
  }), /* @__PURE__ */ modules$1.createElement(Tooltip$1, {
    title: checkCode ? "Hide Code" : "View Code",
    onClick: () => toggle()
  }, /* @__PURE__ */ modules$1.createElement(CodeOutlined2, {
    className: classNames("code-box-code-action", checkCode && "active")
  }))), checkCode && /* @__PURE__ */ modules$1.createElement(HighLighter, {
    lang,
    children: content2
  }));
};
function ComponentArea(props) {
  const { renderer, content: content2, eventBus, pathHash, error } = props;
  const componentRef = useRef();
  const invoked = useRef(false);
  const newComp = useRef(/* @__PURE__ */ new Map());
  let [{ defaultProps, props: componentStateProps, current }] = useAtom(propertiesPropsStore);
  const setPartialProps = useSetPartialProperties();
  const defaultPropsRef = useRef();
  const componentProps = useCreation(() => {
    if (!current) {
      return componentStateProps;
    }
    if (current === content2) {
      return componentStateProps;
    }
    return {};
  }, [componentStateProps, current]);
  eventBus.useSubscription(() => {
    let content22 = props.content;
    if (current !== void 0 && current === content22) {
      content22 = void 0;
    }
    setPartialProps({
      current: content22,
      defaultProps: defaultPropsRef.current || {}
    });
  });
  const setDefaultProps = useMemoizedFn((props2) => {
    defaultPropsRef.current = props2;
    if (!Object.keys(defaultProps).length) {
      setPartialProps({
        defaultProps: props2
      });
    }
  });
  const wrapProps = useMemoizedFn((Component2, { React: OutReact }) => {
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
    Object.assign(outputComp, Component2);
    outputComp.visionProps = componentProps;
    outputComp.origin$ = Component2;
    outputComp.wrap$ = (Component22) => wrapProps(Component22, { React: OutReact });
    newComp.current.set(Component2, outputComp);
    return outputComp;
  });
  useEffect(() => {
    renderer(componentRef.current, {
      wrap: wrapProps
    });
  }, [renderer, componentProps]);
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
  })));
}
function CopyIcon({ content: content2 }) {
  const [copied, { setTrue, setFalse }] = useBoolean();
  const copy2 = useMemoizedFn(() => {
    copyToClipboard(content2);
    setTrue();
  });
  return /* @__PURE__ */ modules$1.createElement(Tooltip$1, {
    title: copied ? "Copied!" : "Copy Code",
    onClick: copy2,
    onVisibleChange: (v) => {
      !v && setTimeout(() => {
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
const { Table } = window.antd;
function renderProperty({ loading = false, properties }) {
  const { props = {} } = properties;
  const dateSource = Object.values(props).map((val) => {
    if (!!val.defaultValue) {
      val.defaultValue.value = `${val.defaultValue.value}`;
    }
    return val;
  });
  return /* @__PURE__ */ modules$1.createElement(Table, {
    loading,
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
  }));
}
function PropertyArea(props) {
  const { renderer } = props;
  const componentRef = useRef();
  const [, setTypes] = useAtom(propertiesStore);
  useEffect(() => {
    renderer(componentRef.current, {
      renderType$: (types2, mountNode = componentRef.current) => {
        setTypes(types2);
        return modules.render(/* @__PURE__ */ modules$1.createElement(renderProperty, {
          properties: types2
        }), mountNode);
      }
    });
  }, [renderer]);
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: "property-container",
    ref: componentRef
  }, /* @__PURE__ */ modules$1.createElement(renderProperty, {
    properties: {},
    loading: true
  }));
}
function remarkFrontMatter(options) {
  return (tree, _file) => {
    const modules2 = [];
    let prevModules = [];
    tree.children.forEach((node) => {
      if (node.type === "thematicBreak") {
        modules2.push(...prevModules);
        prevModules = [];
        return;
      }
      if (node.type === "code" && isJsx(node.lang) && isTypes(node.value)) {
        modules2.push(...prevModules, {
          ...node,
          type: "property-code"
        });
        prevModules = [];
        return;
      }
      prevModules.push(node);
      if (node.type === "code" && hasReact(node.value) && isJsx(node.lang)) {
        modules2.push({
          ...node,
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
function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }
  const { moduleMap, content: content2, error, pathHash } = res;
  const getModule = useMemoizedFn((value) => moduleMap == null ? void 0 : moduleMap[value.trim()]);
  const code = useMemoizedFn(({ language, value = "" }) => {
    return /* @__PURE__ */ modules$1.createElement(HighLighter, {
      lang: language,
      children: value
    });
  });
  const componentBlock = useMemoizedFn((props) => {
    return /* @__PURE__ */ modules$1.createElement(ComponentBlock, {
      ...props,
      error,
      pathHash,
      renderer: getModule(props.value)
    });
  });
  const propertyCode = useMemoizedFn((props) => /* @__PURE__ */ modules$1.createElement(PropertyArea, {
    ...props,
    renderer: getModule(props.value)
  }));
  const markdownElements = useCreation(() => /* @__PURE__ */ modules$1.createElement(reactMarkdown, {
    className: "markdown-body",
    plugins: [remarkFrontMatter],
    renderers: {
      code,
      "component-block": componentBlock,
      "property-code": propertyCode
    }
  }, content2), [content2, moduleMap]);
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: "markdown-area"
  }, markdownElements);
}
function toName(name2) {
  if (!name2) {
    return null;
  }
  return name2.replace(/-/g, " ").replace(/\//g, " - ").replace(/^[a-z] /, "").replace(/^./, (s) => s.toUpperCase()).replace(/ \w/g, (s) => s.toUpperCase());
}
const { Typography } = window["antd"];
const { Title, Text } = Typography;
function PageTitle(props) {
  const compInfo = useComponentInfo();
  const { flattenRoutes = [] } = useRouteMap() || {};
  const route = props.route;
  const currentRoute = flattenRoutes.find(({ path }) => path === route);
  return /* @__PURE__ */ modules$1.createElement("a", {
    href: compInfo == null ? void 0 : compInfo.npmLink,
    className: "link-title"
  }, /* @__PURE__ */ modules$1.createElement(Title, {
    level: 1,
    className: "component-name"
  }, toName(currentRoute == null ? void 0 : currentRoute.name) || (compInfo == null ? void 0 : compInfo.packageName), /* @__PURE__ */ modules$1.createElement(LinkCopy, {
    route: props.route
  })), /* @__PURE__ */ modules$1.createElement("span", {
    className: "component-sub-title"
  }, /* @__PURE__ */ modules$1.createElement(Text, {
    type: "secondary"
  }, "Package: ", compInfo == null ? void 0 : compInfo.packageName), /* @__PURE__ */ modules$1.createElement(Text, {
    type: "secondary"
  }, "Version: ", compInfo == null ? void 0 : compInfo.packageVersion)));
}
var DoubleLeftOutlined$4 = { exports: {} };
var DoubleLeftOutlined$3 = {};
var DoubleLeftOutlined$2 = {};
var hasRequiredDoubleLeftOutlined;
function requireDoubleLeftOutlined() {
  if (hasRequiredDoubleLeftOutlined)
    return DoubleLeftOutlined$2;
  hasRequiredDoubleLeftOutlined = 1;
  Object.defineProperty(DoubleLeftOutlined$2, "__esModule", { value: true });
  var DoubleLeftOutlined3 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, "name": "double-left", "theme": "outlined" };
  DoubleLeftOutlined$2.default = DoubleLeftOutlined3;
  return DoubleLeftOutlined$2;
}
var _interopRequireWildcard$2 = interopRequireWildcard.exports;
var _interopRequireDefault$2 = interopRequireDefault.exports;
Object.defineProperty(DoubleLeftOutlined$3, "__esModule", {
  value: true
});
DoubleLeftOutlined$3.default = void 0;
var _objectSpread2$2 = _interopRequireDefault$2(requireObjectSpread2());
var React$2 = _interopRequireWildcard$2(require$$3);
var _DoubleLeftOutlined = _interopRequireDefault$2(requireDoubleLeftOutlined());
var _AntdIcon$2 = _interopRequireDefault$2(requireAntdIcon());
var DoubleLeftOutlined$1 = function DoubleLeftOutlined(props, ref) {
  return /* @__PURE__ */ React$2.createElement(_AntdIcon$2.default, (0, _objectSpread2$2.default)((0, _objectSpread2$2.default)({}, props), {}, {
    ref,
    icon: _DoubleLeftOutlined.default
  }));
};
DoubleLeftOutlined$1.displayName = "DoubleLeftOutlined";
var _default$2 = /* @__PURE__ */ React$2.forwardRef(DoubleLeftOutlined$1);
DoubleLeftOutlined$3.default = _default$2;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _DoubleLeftOutlined2 = _interopRequireDefault2(DoubleLeftOutlined$3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _DoubleLeftOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(DoubleLeftOutlined$4, DoubleLeftOutlined$4.exports);
const DoubleLeftOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(DoubleLeftOutlined$4.exports);
var CloseOutlined$4 = { exports: {} };
var CloseOutlined$3 = {};
var CloseOutlined$2 = {};
var hasRequiredCloseOutlined;
function requireCloseOutlined() {
  if (hasRequiredCloseOutlined)
    return CloseOutlined$2;
  hasRequiredCloseOutlined = 1;
  Object.defineProperty(CloseOutlined$2, "__esModule", { value: true });
  var CloseOutlined3 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
  CloseOutlined$2.default = CloseOutlined3;
  return CloseOutlined$2;
}
var _interopRequireWildcard$1 = interopRequireWildcard.exports;
var _interopRequireDefault$1 = interopRequireDefault.exports;
Object.defineProperty(CloseOutlined$3, "__esModule", {
  value: true
});
CloseOutlined$3.default = void 0;
var _objectSpread2$1 = _interopRequireDefault$1(requireObjectSpread2());
var React$1 = _interopRequireWildcard$1(require$$3);
var _CloseOutlined = _interopRequireDefault$1(requireCloseOutlined());
var _AntdIcon$1 = _interopRequireDefault$1(requireAntdIcon());
var CloseOutlined$1 = function CloseOutlined(props, ref) {
  return /* @__PURE__ */ React$1.createElement(_AntdIcon$1.default, (0, _objectSpread2$1.default)((0, _objectSpread2$1.default)({}, props), {}, {
    ref,
    icon: _CloseOutlined.default
  }));
};
CloseOutlined$1.displayName = "CloseOutlined";
var _default$1 = /* @__PURE__ */ React$1.forwardRef(CloseOutlined$1);
CloseOutlined$3.default = _default$1;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _CloseOutlined2 = _interopRequireDefault2(CloseOutlined$3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _CloseOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(CloseOutlined$4, CloseOutlined$4.exports);
const CloseOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(CloseOutlined$4.exports);
const PANE_VISIBLE = "pane_visible";
const form = "";
const { Input, Radio, InputNumber, Select, Switch } = window.antd;
const Setters = {
  NumberSetter: (props) => /* @__PURE__ */ modules$1.createElement(InputNumber, {
    ...props,
    style: { width: 120 }
  }),
  TextSetter: (props) => /* @__PURE__ */ modules$1.createElement(Input, {
    ...props,
    style: { width: 120 }
  }),
  ChoiceSetter: (props) => /* @__PURE__ */ modules$1.createElement(Radio.Group, {
    ...props,
    optionType: "button",
    size: "small"
  }),
  SelectSetter: (props) => /* @__PURE__ */ modules$1.createElement(Select, {
    ...props,
    style: { width: 120 },
    allowClear: true
  }),
  BoolSetter: (props) => /* @__PURE__ */ modules$1.createElement(Switch, {
    ...props,
    checked: props.value
  })
};
const { List: List$1, Tooltip, Form: Form$1 } = window.antd;
function SetterFormItem({ name: name2, tip, defaultValue, setter, ...rest }) {
  const Setter = Setters[setter];
  return /* @__PURE__ */ modules$1.createElement(List$1.Item, {
    className: "setter-form-item"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "setter-form-item-label"
  }, /* @__PURE__ */ modules$1.createElement(Tooltip, {
    className: classNames(!!tip && "has-tip"),
    title: tip
  }, name2)), /* @__PURE__ */ modules$1.createElement("div", {
    className: "setter-form-item-value"
  }, Setter && /* @__PURE__ */ modules$1.createElement(Form$1.Item, {
    name: name2,
    initialValue: defaultValue,
    style: { marginBottom: 0 }
  }, /* @__PURE__ */ modules$1.createElement(Setter, {
    ...rest
  }))));
}
const { List, Form } = window.antd;
function Stage({
  componentName,
  configure: configure2,
  initialValues,
  onValuesChange
}) {
  const [form2] = Form.useForm();
  const propertyDefaultValues = useCreation(() => configure2.reduce((prev, { name: name2, defaultValue }) => {
    defaultValue !== void 0 && Object.assign(prev, { [name2]: defaultValue });
    return prev;
  }, {}), [configure2]);
  useEffect(() => {
    form2.setFieldsValue({
      ...propertyDefaultValues,
      ...initialValues
    });
  }, [initialValues, propertyDefaultValues]);
  return /* @__PURE__ */ modules$1.createElement(Form, {
    form: form2,
    onValuesChange
  }, /* @__PURE__ */ modules$1.createElement(List, {
    className: "pane-stage",
    dataSource: configure2,
    renderItem: (item) => {
      return /* @__PURE__ */ modules$1.createElement(SetterFormItem, {
        ...item
      });
    }
  }));
}
var isArray$2 = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$1(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type2 = typeof value;
  if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$1;
var MapCache = _MapCache;
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
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
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
  string2.replace(rePropName, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
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
var Symbol$1 = _Symbol, arrayMap = _arrayMap, isArray$1 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString$1) + "";
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
var isArray2 = isArray_1, isKey = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$2(value, object) {
  if (isArray2(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$2;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$2(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$2;
var castPath$1 = _castPath, toKey$1 = _toKey;
function baseGet$1(object, path) {
  path = castPath$1(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey$1(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$1;
var baseGet = _baseGet;
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get;
var getNative = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$1;
var defineProperty = _defineProperty;
function baseAssignValue$1(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$1;
var baseAssignValue = _baseAssignValue, eq = eq_1;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
var _assignValue = assignValue$1;
var assignValue = _assignValue, castPath = _castPath, isIndex = _isIndex, isObject = isObject_1, toKey = _toKey;
function baseSet$1(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = toKey(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
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
  icon: "//img.alicdn.com/tfs/TB1whTmvAL0gK0jSZFxXXXWHVXa-200-200.svg",
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
const isNotEnumTypes = (types2 = "") => {
  return types2.split("|").some((str) => Normal_Types.concat(Composite_Types).includes(str.trim()));
};
const isNumberTypes = (types2 = "") => {
  return types2.split("|").every((str) => [NUMBER].concat(Null_TYPES).includes(str.trim()));
};
const isTextTypes = (types2 = "") => {
  return types2.split("|").every((str) => [STRING, NUMBER].concat(Null_TYPES).includes(str.trim()));
};
const isBoolTypes = (types2 = "") => {
  return types2.split("|").every((str) => [BOOL].concat(Null_TYPES).includes(str.trim()));
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
const REGEXP_ISObject = /^\{.+}$/;
const REGEXP_ISArray = /{.+}\[]$/;
class VisionSchemaTransfer {
  transformProps(propType) {
    const defaultConfig = this.defaultVisionConfig;
    const { configure: defaultConfigure = [] } = defaultConfig;
    const { name: name2, description } = propType;
    const defaultValue = VisionSchemaTransfer.getDefaultPropByTypes(propType);
    const type2 = get_1(propType, "type.name");
    const tags = Object.entries(propType.tags || {}).reduce((previousValue, [key, value]) => set_1(previousValue, key, strToObj(value)), {});
    if (tags.vision === false) {
      return null;
    }
    const visionJsonConfig = defaultConfigure.find((configure2) => configure2.name === name2);
    const setterInfo = VisionSchemaTransfer.getSetterByTSType(type2);
    if (!setterInfo) {
      return false;
    }
    const visionDocsConfig = get_1(tags, "vision");
    return {
      name: name2,
      tip: description,
      defaultValue,
      ...setterInfo,
      ...visionJsonConfig,
      ...visionDocsConfig
    };
  }
  static getObjectTypes(typeStr) {
    if (!/^{.+}$/.test(typeStr.trim())) {
      return typeStr;
    }
    const reg2 = /(\w+)\??: ([\w\[\]]+|{.+});/g;
    let regResult, result = {};
    while (regResult = reg2.exec(typeStr)) {
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
  static getBoolSetterByTypes(types2) {
    return isBoolTypes(types2) && { setter: "BoolSetter" };
  }
  static getNumberSetterByTypes(types2) {
    return isNumberTypes(types2) && { setter: "NumberSetter" };
  }
  static getTextSetterByTypes(types2) {
    return isTextTypes(types2) && { setter: "TextSetter" };
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
    if (!REGEXP_ISFunction.test(typeStr) && !REGEXP_ISObject.test(typeStr) && REGEXP_ISMultipleTypes.test(typeStr) && !isNotEnumTypes(typeStr) && filterQuotaMarkAndUndefined(typeStr).length <= 3) {
      return {
        setter: "ChoiceSetter",
        options: filterQuotaMarkAndUndefined(typeStr)
      };
    }
    return false;
  }
  static getSelectSetterByTypes(typeStr) {
    if (!REGEXP_ISFunction.test(typeStr) && !REGEXP_ISObject.test(typeStr) && REGEXP_ISMultipleTypes.test(typeStr) && !isNotEnumTypes(typeStr)) {
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
    } catch (e) {
    }
    return defaultValue;
  }
  constructor(types2, options) {
    this.types = types2;
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
const index$1 = "";
const { Button: Button$1, Anchor } = window.antd;
function PropertyPane() {
  const [properties] = useAtom(propertiesStore);
  const [propertyDrawerShow, setPropertyDrawerShow] = useLocalStorageState$1(PANE_VISIBLE, {});
  const [storeProps, setStore] = useAtom(propertiesPropsStore);
  const { defaultProps } = storeProps;
  const onPropsChange = useMemoizedFn((props) => {
    setStore({
      ...storeProps,
      props: {
        ...storeProps.props,
        ...props
      }
    });
  });
  const { data: prototypeOptions } = useRequest(async () => {
    return buildVisionFromTypes(properties);
  }, {
    refreshDeps: [properties]
  });
  const renderIndex = useRef(0);
  useUpdateEffect(() => {
    renderIndex.current++;
    if (renderIndex.current > 1) {
      setPropertyDrawerShow("1");
    }
  }, [defaultProps]);
  if (!Object.keys(properties).length) {
    return null;
  }
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
  }, /* @__PURE__ */ modules$1.createElement(Stage, {
    ...prototypeOptions,
    initialValues: defaultProps,
    onValuesChange: onPropsChange
  }))))) : /* @__PURE__ */ modules$1.createElement("div", {
    className: "icon-vision-property-show",
    onClick: () => setPropertyDrawerShow("1")
  }, /* @__PURE__ */ modules$1.createElement(Button$1, null, /* @__PURE__ */ modules$1.createElement(DoubleLeftOutlined2, null), "Debug Panel")));
}
function ReadmePane() {
  const { route } = useRoute();
  const Components = useMarkdown();
  const setProperties = useSetAtom(propertiesStore);
  const setDefaultProps = useSetAtom(propertiesPropsStore);
  useUnmount$1(() => {
    setProperties({});
    setDefaultProps({
      current: void 0,
      defaultProps: {},
      props: {}
    });
  });
  return /* @__PURE__ */ modules$1.createElement("div", {
    id: "public-component-show-container"
  }, Components ? /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-page"
  }, /* @__PURE__ */ modules$1.createElement(PageTitle, {
    route
  }), /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-main"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-part"
  }, /* @__PURE__ */ modules$1.createElement("div", {
    className: "component-description"
  }, /* @__PURE__ */ modules$1.createElement(MarkdownArea, {
    data: Components
  }))), /* @__PURE__ */ modules$1.createElement(PropertyPane, null))) : "Loading...");
}
const index = "";
var DoubleRightOutlined$4 = { exports: {} };
var DoubleRightOutlined$3 = {};
var DoubleRightOutlined$2 = {};
var hasRequiredDoubleRightOutlined;
function requireDoubleRightOutlined() {
  if (hasRequiredDoubleRightOutlined)
    return DoubleRightOutlined$2;
  hasRequiredDoubleRightOutlined = 1;
  Object.defineProperty(DoubleRightOutlined$2, "__esModule", { value: true });
  var DoubleRightOutlined3 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, "name": "double-right", "theme": "outlined" };
  DoubleRightOutlined$2.default = DoubleRightOutlined3;
  return DoubleRightOutlined$2;
}
var _interopRequireWildcard = interopRequireWildcard.exports;
var _interopRequireDefault = interopRequireDefault.exports;
Object.defineProperty(DoubleRightOutlined$3, "__esModule", {
  value: true
});
DoubleRightOutlined$3.default = void 0;
var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
var React = _interopRequireWildcard(require$$3);
var _DoubleRightOutlined = _interopRequireDefault(requireDoubleRightOutlined());
var _AntdIcon = _interopRequireDefault(requireAntdIcon());
var DoubleRightOutlined$1 = function DoubleRightOutlined(props, ref) {
  return /* @__PURE__ */ React.createElement(_AntdIcon.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    ref,
    icon: _DoubleRightOutlined.default
  }));
};
DoubleRightOutlined$1.displayName = "DoubleRightOutlined";
var _default = /* @__PURE__ */ React.forwardRef(DoubleRightOutlined$1);
DoubleRightOutlined$3.default = _default;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _DoubleRightOutlined2 = _interopRequireDefault2(DoubleRightOutlined$3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _default2 = _DoubleRightOutlined2;
  exports.default = _default2;
  module.exports = _default2;
})(DoubleRightOutlined$4, DoubleRightOutlined$4.exports);
const DoubleRightOutlined2 = /* @__PURE__ */ getDefaultExportFromCjs(DoubleRightOutlined$4.exports);
const { Menu, Button } = window.antd;
const { SubMenu } = Menu;
function MenuLink(item) {
  return /* @__PURE__ */ modules$1.createElement("div", {
    className: "nav-menu-link-item"
  }, /* @__PURE__ */ modules$1.createElement(Link, {
    to: item.path
  }, /* @__PURE__ */ modules$1.createElement("span", {
    style: { flex: 1 }
  }, toName(item.name))), /* @__PURE__ */ modules$1.createElement(LinkCopy, {
    route: item.path
  }));
}
function RouterSwitch() {
  const { tree: menuData, routes } = useRouteMap() || {};
  const { npmLink, logo } = useComponentInfo() || {};
  const [showMenu, { toggle, setFalse }] = useBoolean(false);
  const { url: route } = useRouteMatch();
  useUpdateEffect(() => {
    setFalse();
  }, [route]);
  if (!routes || (routes == null ? void 0 : routes.length) <= 1) {
    return /* @__PURE__ */ modules$1.createElement(modules$1.Fragment, null);
  }
  const openKeys = menuData == null ? void 0 : menuData.filter(({ children }) => !!children).map(({ name: name2 }) => name2);
  return /* @__PURE__ */ modules$1.createElement(modules$1.Fragment, null, /* @__PURE__ */ modules$1.createElement("div", {
    className: "route-switch-placeholder"
  }), /* @__PURE__ */ modules$1.createElement("div", {
    className: classNames("route-switch-scope", showMenu && "router-switch-open")
  }, /* @__PURE__ */ modules$1.createElement("a", {
    className: "logo",
    href: npmLink
  }, /* @__PURE__ */ modules$1.createElement("img", {
    alt: "Vite Docs",
    src: logo || "//img.alicdn.com/imgextra/i1/O1CN01yPg2Vc1gAJ2EFm5iG_!!6000000004101-55-tps-1058-237.svg",
    style: { width: 178 }
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
      }, /* @__PURE__ */ modules$1.createElement(MenuLink, {
        ...item
      }));
    }
    return /* @__PURE__ */ modules$1.createElement(SubMenu, {
      title: item.name,
      className: "capitalize",
      key: item.name
    }, (_a = item.children) == null ? void 0 : _a.map((item2) => /* @__PURE__ */ modules$1.createElement(Menu.Item, {
      className: "nav-item-link",
      key: item2.path
    }, /* @__PURE__ */ modules$1.createElement(MenuLink, {
      ...item2
    }))));
  }))));
}
function App() {
  const { routes } = useRouteMap() || {};
  if (!routes) {
    return null;
  }
  return /* @__PURE__ */ createElement$2(Switch$1, null, routes.map((route) => {
    return /* @__PURE__ */ createElement$2(Route, {
      path: route
    }, /* @__PURE__ */ createElement$2("div", {
      style: { display: "flex" },
      className: "code-box-demo"
    }, /* @__PURE__ */ createElement$2(RouterSwitch, null), /* @__PURE__ */ createElement$2(ReadmePane, {
      key: `${route}_readme_pane`
    })));
  }), /* @__PURE__ */ createElement$2(Redirect, {
    to: routes[0]
  }));
}
modules.render(/* @__PURE__ */ createElement$2(HashRouter, null, /* @__PURE__ */ createElement$2(App, null)), document.querySelector("#component-root"));
export {
  App
};
