/** @license React vundefined
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const exports = {};

function debounce(fn, delay) {
  let handle;
  return () => {
    clearTimeout(handle);
    handle = setTimeout(fn, delay);
  };
}

(function () {
  "use strict";

  // ATTENTION
  // When adding new symbols to this file,
  // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var REACT_ELEMENT_TYPE = 0xeac7;
  var REACT_PORTAL_TYPE = 0xeaca;
  var REACT_FRAGMENT_TYPE = 0xeacb;
  var REACT_STRICT_MODE_TYPE = 0xeacc;
  var REACT_PROFILER_TYPE = 0xead2;
  var REACT_PROVIDER_TYPE = 0xeacd;
  var REACT_CONTEXT_TYPE = 0xeace;
  var REACT_FORWARD_REF_TYPE = 0xead0;
  var REACT_SUSPENSE_TYPE = 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = 0xead8;
  var REACT_MEMO_TYPE = 0xead3;
  var REACT_LAZY_TYPE = 0xead4;
  var REACT_SCOPE_TYPE = 0xead7;
  var REACT_OPAQUE_ID_TYPE = 0xeae0;
  var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
  var REACT_OFFSCREEN_TYPE = 0xeae2;
  var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
  var REACT_CACHE_TYPE = 0xeae4;

  if (typeof Symbol === "function" && Symbol.for) {
    var symbolFor = Symbol.for;
    REACT_ELEMENT_TYPE = symbolFor("react.element");
    REACT_PORTAL_TYPE = symbolFor("react.portal");
    REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
    REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
    REACT_PROFILER_TYPE = symbolFor("react.profiler");
    REACT_PROVIDER_TYPE = symbolFor("react.provider");
    REACT_CONTEXT_TYPE = symbolFor("react.context");
    REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
    REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
    REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
    REACT_MEMO_TYPE = symbolFor("react.memo");
    REACT_LAZY_TYPE = symbolFor("react.lazy");
    REACT_SCOPE_TYPE = symbolFor("react.scope");
    REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
    REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
    REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
    REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
    REACT_CACHE_TYPE = symbolFor("react.cache");
  }

  var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map; // We never remove these associations.
  // It's OK to reference families, but use WeakMap/Set for types.

  var allFamiliesByID = new Map();
  var allFamiliesByType = new PossiblyWeakMap();
  var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
  // that have actually been edited here. This keeps checks fast.
  // $FlowIssue

  var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
  // It is an array of [Family, NextType] tuples.

  var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.

  var helpersByRendererID = new Map();
  var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
  const updateEventMap = new PossiblyWeakMap();

  var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.

  var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
  // It needs to be weak because we do this even for roots that failed to mount.
  // If there is no WeakMap, we won't attempt to do retrying.
  // $FlowIssue

  var rootElements = typeof WeakMap === "function" ? new WeakMap() : null; // $FlowIssue
  var isPerformingRefresh = false;

  function computeFullKey(signature) {
    if (signature.fullKey !== null) {
      return signature.fullKey;
    }

    var fullKey = signature.ownKey;
    var hooks;

    try {
      hooks = signature.getCustomHooks();
    } catch (err) {
      // This can happen in an edge case, e.g. if expression like Foo.useSomething
      // depends on Foo which is lazily initialized during rendering.
      // In that case just assume we'll have to remount.
      signature.forceReset = true;
      signature.fullKey = fullKey;
      return fullKey;
    }

    for (var i = 0; i < hooks.length; i++) {
      var hook = hooks[i];

      if (typeof hook !== "function") {
        // Something's wrong. Assume we need to remount.
        signature.forceReset = true;
        signature.fullKey = fullKey;
        return fullKey;
      }

      var nestedHookSignature = allSignaturesByType.get(hook);

      if (nestedHookSignature === undefined) {
        // No signature means Hook wasn't in the source code, e.g. in a library.
        // We'll skip it because we can assume it won't change during this session.
        continue;
      }

      var nestedHookKey = computeFullKey(nestedHookSignature);

      if (nestedHookSignature.forceReset) {
        signature.forceReset = true;
      }

      fullKey += "\n---\n" + nestedHookKey;
    }

    signature.fullKey = fullKey;
    return fullKey;
  }

  function haveEqualSignatures(prevType, nextType) {
    var prevSignature = allSignaturesByType.get(prevType);
    var nextSignature = allSignaturesByType.get(nextType);

    if (prevSignature === undefined && nextSignature === undefined) {
      return true;
    }

    if (prevSignature === undefined || nextSignature === undefined) {
      return false;
    }

    if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
      return false;
    }

    if (nextSignature.forceReset) {
      return false;
    }

    return true;
  }

  function isReactClass(type) {
    return type.prototype && type.prototype.isReactComponent;
  }

  function canPreserveStateBetween(prevType, nextType) {
    if (isReactClass(prevType) || isReactClass(nextType)) {
      return false;
    }

    if (haveEqualSignatures(prevType, nextType)) {
      return true;
    }

    return false;
  }

  function resolveFamily(type) {
    // Only check updated types to keep lookups fast.
    return updatedFamiliesByType.get(type);
  } // If we didn't care about IE11, we could use new Map/Set(iterable).

  function cloneMap(map) {
    var clone = new Map();
    map.forEach(function (value, key) {
      clone.set(key, value);
    });
    return clone;
  }

  function cloneSet(set) {
    var clone = new Set();
    set.forEach(function (value) {
      clone.add(value);
    });
    return clone;
  } // This is a safety mechanism to protect against rogue getters and Proxies.

  function getProperty(object, property) {
    try {
      return object[property];
    } catch (err) {
      // Intentionally ignore.
      return undefined;
    }
  }

  function performReactRefresh() {
    if (pendingUpdates.length === 0) {
      return null;
    }

    if (isPerformingRefresh) {
      return null;
    }

    isPerformingRefresh = true;

    try {
      var staleFamilies = new Set();
      var updatedFamilies = new Set();
      var updates = pendingUpdates;
      pendingUpdates = [];

      updates.forEach(function (_ref) {
        var family = _ref[0],
          nextType = _ref[1];
        // Now that we got a real edit, we can create associations
        // that will be read by the React reconciler.
        var prevType = family.current;
        updatedFamiliesByType.set(prevType, family);
        updatedFamiliesByType.set(nextType, family);
        family.current = nextType; // Determine whether this should be a re-render or a re-mount.

        if (canPreserveStateBetween(prevType, nextType)) {
          updatedFamilies.add([prevType, family]);
        } else {
          staleFamilies.add(family);
        }
      });

      updatedFamilies.forEach(([type, family]) => {
        const callbacks = updateEventMap.get(type);
        callbacks && callbacks.reverse().forEach((cb) => cb(family.current));
      });

      // return update;
    } finally {
      isPerformingRefresh = false;
    }
  }
  function register(type, id) {
    {
      if (type === null) {
        return;
      }

      if (typeof type !== "function" && typeof type !== "object") {
        return;
      } // This can happen in an edge case, e.g. if we register
      // return value of a HOC but it returns a cached component.
      // Ignore anything but the first registration for each type.

      if (allFamiliesByType.has(type)) {
        return;
      } // Create family or remember to update it.
      // None of this bookkeeping affects reconciliation
      // until the first performReactRefresh() call above.

      var family = allFamiliesByID.get(id);

      if (family === undefined) {
        family = {
          current: type,
        };
        allFamiliesByID.set(id, family);
      } else {
        pendingUpdates.push([family, type]);
      }

      allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.

      if (typeof type === "object" && type !== null) {
        switch (getProperty(type, "$$typeof")) {
          case REACT_FORWARD_REF_TYPE:
            register(type.render, id + "$render");
            break;

          case REACT_MEMO_TYPE:
            register(type.type, id + "$type");
            break;
        }
      }
    }
  }
  function setSignature(type, key) {
    var forceReset =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;

    {
      if (!allSignaturesByType.has(type)) {
        allSignaturesByType.set(type, {
          forceReset: forceReset,
          ownKey: key,
          fullKey: null,
          getCustomHooks:
            getCustomHooks ||
            function () {
              return [];
            },
        });
      } // Visit inner types because we might not have signed them.

      if (typeof type === "object" && type !== null) {
        switch (getProperty(type, "$$typeof")) {
          case REACT_FORWARD_REF_TYPE:
            setSignature(type.render, key, forceReset, getCustomHooks);
            break;

          case REACT_MEMO_TYPE:
            setSignature(type.type, key, forceReset, getCustomHooks);
            break;
        }
      }
    }
  } // This is lazily called during first render for a type.
  // It captures Hook list at that time so inline requires don't break comparisons.

  function collectCustomHooksForSignature(type) {
    {
      var signature = allSignaturesByType.get(type);

      if (signature !== undefined) {
        computeFullKey(signature);
      }
    }
  }
  function getFamilyByID(id) {
    {
      return allFamiliesByID.get(id);
    }
  }
  function getFamilyByType(type) {
    {
      return allFamiliesByType.get(type);
    }
  }
  function findAffectedHostInstances(families) {
    {
      var affectedInstances = new Set();
      mountedRoots.forEach(function (root) {
        var helpers = helpersByRoot.get(root);

        if (helpers === undefined) {
          throw new Error(
            "Could not find helpers for a root. This is a bug in React Refresh."
          );
        }

        var instancesForRoot = helpers.findHostInstancesForRefresh(
          root,
          families
        );
        instancesForRoot.forEach(function (inst) {
          affectedInstances.add(inst);
        });
      });
      return affectedInstances;
    }
  }
  function injectIntoGlobalHook(globalObject) {}
  function hasUnrecoverableErrors() {
    // TODO: delete this after removing dependency in RN.
    return false;
  } // Exposed for testing.

  function _getMountedRootCount() {
    {
      return mountedRoots.size;
    }
  } // This is a wrapper over more primitive functions for setting signature.
  // Signatures let us decide whether the Hook order has changed on refresh.
  //
  // This function is intended to be used as a transform target, e.g.:
  // var _s = createSignatureFunctionForTransform()
  //
  // function Hello() {
  //   const [foo, setFoo] = useState(0);
  //   const value = useCustomHook();
  //   _s(); /* Call without arguments triggers collecting the custom Hook list.
  //          * This doesn't happen during the module evaluation because we
  //          * don't want to change the module order with inline requires.
  //          * Next calls are noops. */
  //   return <h1>Hi</h1>;
  // }
  //
  // /* Call with arguments attaches the signature to the type: */
  // _s(
  //   Hello,
  //   'useState{[foo, setFoo]}(0)',
  //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
  // );

  function createSignatureFunctionForTransform() {
    {
      var savedType;
      var hasCustomHooks;
      var didCollectHooks = false;
      return function (type, key, forceReset, getCustomHooks) {
        if (typeof key === "string") {
          // We're in the initial phase that associates signatures
          // with the functions. Note this may be called multiple times
          // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).
          if (!savedType) {
            // We're in the innermost call, so this is the actual type.
            savedType = type;
            hasCustomHooks = typeof getCustomHooks === "function";
          } // Set the signature for all types (even wrappers!) in case
          // they have no signatures of their own. This is to prevent
          // problems like https://github.com/facebook/react/issues/20417.

          if (
            type != null &&
            (typeof type === "function" || typeof type === "object")
          ) {
            setSignature(type, key, forceReset, getCustomHooks);
          }

          return type;
        } else {
          // We're in the _s() call without arguments, which means
          // this is the time to collect custom Hook signatures.
          // Only do this once. This path is hot and runs *inside* every render!
          if (!didCollectHooks && hasCustomHooks) {
            didCollectHooks = true;
            collectCustomHooksForSignature(savedType);
          }
        }
      };
    }
  }
  function isLikelyComponentType(type) {
    {
      switch (typeof type) {
        case "function": {
          // First, deal with classes.
          if (type.prototype != null) {
            if (type.prototype.isReactComponent) {
              // React class.
              return true;
            }

            var ownNames = Object.getOwnPropertyNames(type.prototype);

            if (ownNames.length > 1 || ownNames[0] !== "constructor") {
              // This looks like a class.
              return false;
            } // eslint-disable-next-line no-proto

            if (type.prototype.__proto__ !== Object.prototype) {
              // It has a superclass.
              return false;
            } // Pass through.
            // This looks like a regular function with empty prototype.
          } // For plain functions and arrows, use name as a heuristic.

          var name = type.name || type.displayName;
          return typeof name === "string" && /^[A-Z]/.test(name);
        }

        case "object": {
          if (type != null) {
            switch (getProperty(type, "$$typeof")) {
              case REACT_FORWARD_REF_TYPE:
              case REACT_MEMO_TYPE:
                // Definitely React components.
                return true;

              default:
                return false;
            }
          }

          return false;
        }

        default: {
          return false;
        }
      }
    }
  }

  const allComponentsMap = new PossiblyWeakMap();

  function subscribe(Component, callback) {
    if (getFamilyByType(Component)) {
      if (updateEventMap.has(Component)) {
        updateEventMap.get(Component).push(callback);
      } else {
        updateEventMap.set(Component, [callback]);
      }
    }

    return () => {
      updateEventMap
        .get(Component)
        .splice(updateEventMap.get(Component).indexOf(callback), 1);
    };
  }

  exports.createElement = function () {
    const Component = arguments[0];

    const OriginComponent = Component.origin$ || Component;
    if (exports.getFamilyByType(OriginComponent)) {
      const gotComponent = allComponentsMap.get(OriginComponent);

      arguments[0] =
        gotComponent ??
        ((props) => {
          const [NextComponent, _setNextComponent] = React.useState(
            () => Component
          );

          const setNextComponent = (nextComponent) => {
            _setNextComponent(() =>
              Component.wrap$ ? Component.wrap$(nextComponent) : nextComponent
            );
          };

          React.useEffect(() => {
            subscribe(NextComponent.origin$ || NextComponent, setNextComponent);
          }, [NextComponent]);

          return React.createElement(NextComponent, props);
        });

      if (!gotComponent) {
        allComponentsMap.set(Component, arguments[0]);
      }
    }
    return React.createElement.apply(this, arguments);
  };

  exports._getMountedRootCount = _getMountedRootCount;
  exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
  exports.createSignatureFunctionForTransform =
    createSignatureFunctionForTransform;
  exports.findAffectedHostInstances = findAffectedHostInstances;
  exports.getFamilyByID = getFamilyByID;
  exports.getFamilyByType = getFamilyByType;
  exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
  exports.injectIntoGlobalHook = injectIntoGlobalHook;
  exports.isLikelyComponentType = isLikelyComponentType;
  exports.performReactRefresh = debounce(performReactRefresh, 16);
  exports.register = register;
  exports.setSignature = setSignature;
})();

export default exports;
