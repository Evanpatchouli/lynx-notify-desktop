/** build time: Mon, 20 Jul 2026 08:59:45 GMT, commit: e38c894467d1184df4a761b59d58d19984dc4c1e */
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true,
  configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports,
    mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(
          from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(
  mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod,
    enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/global.js
  var require_global = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/globa\
l.js"(exports, module2) {
      var check = function(it) {
        return it && it.Math == Math && it;
      };
      module2.exports = // eslint-disable-next-line no-undef
      check(typeof globalThis == "object" && globalThis) || check(typeof window ==
      "object" && window) || check(typeof self == "object" && self) || check(typeof global ==
      "object" && global) || // eslint-disable-next-line no-new-func
      Function("return this")();
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/fails\
.js"(exports, module2) {
      module2.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/descr\
iptors.js"(exports, module2) {
      var fails = require_fails();
      module2.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-property-is-enumerable.js"(exports) {
      "use strict";
      var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.
      call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : nativePropertyIsEnumerable;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/creat\
e-property-descriptor.js"(exports, module2) {
      module2.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/class\
of-raw.js"(exports, module2) {
      var toString = {}.toString;
      module2.exports = function(it) {
        return toString.call(it).slice(8, -1);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/index\
ed-object.js"(exports, module2) {
      var fails = require_fails();
      var classof = require_classof_raw();
      var split = "".split;
      module2.exports = fails(function() {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) == "String" ? split.call(it, "") : Object(it);
      } : Object;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/requi\
re-object-coercible.js"(exports, module2) {
      module2.exports = function(it) {
        if (it == void 0)
          throw TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-in\
dexed-object.js"(exports, module2) {
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module2.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-ob\
ject.js"(exports, module2) {
      module2.exports = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-pr\
imitive.js"(exports, module2) {
      var isObject2 = require_is_object();
      module2.exports = function(input, PREFERRED_STRING) {
        if (!isObject2(input))
          return input;
        var fn, val;
        if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject2(
        val = fn.call(input)))
          return val;
        if (typeof (fn = input.valueOf) == "function" && !isObject2(val = fn.call(
        input)))
          return val;
        if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject2(
        val = fn.call(input)))
          return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/has.js
  var require_has = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/has.j\
s"(exports, module2) {
      var hasOwnProperty = {}.hasOwnProperty;
      module2.exports = function(it, key) {
        return hasOwnProperty.call(it, key);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/docum\
ent-create-element.js"(exports, module2) {
      var global2 = require_global();
      var isObject2 = require_is_object();
      var document2 = global2.document;
      var EXISTS = isObject2(document2) && isObject2(document2.createElement);
      module2.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/ie8-d\
om-define.js"(exports, module2) {
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module2.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-get-own-property-descriptor.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPrimitive = require_to_primitive();
      var has = require_has();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE)
          try {
            return nativeGetOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
        if (has(O, P))
          return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P),
          O[P]);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/an-ob\
ject.js"(exports, module2) {
      var isObject2 = require_is_object();
      module2.exports = function(it) {
        if (!isObject2(it)) {
          throw TypeError(String(it) + " is not an object");
        }
        return it;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-define-property.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var anObject = require_an_object();
      var toPrimitive = require_to_primitive();
      var nativeDefineProperty = Object.defineProperty;
      exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return nativeDefineProperty(O, P, Attributes);
          } catch (error) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError("Accessors not supported");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/creat\
e-non-enumerable-property.js"(exports, module2) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module2.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/set-global.js
  var require_set_global = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/set-g\
lobal.js"(exports, module2) {
      var global2 = require_global();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      module2.exports = function(key, value) {
        try {
          createNonEnumerableProperty(global2, key, value);
        } catch (error) {
          global2[key] = value;
        }
        return value;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/share\
d-store.js"(exports, module2) {
      var global2 = require_global();
      var setGlobal = require_set_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || setGlobal(SHARED, {});
      module2.exports = store;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/inspe\
ct-source.js"(exports, module2) {
      var store = require_shared_store();
      var functionToString = Function.toString;
      if (typeof store.inspectSource != "function") {
        store.inspectSource = function(it) {
          return functionToString.call(it);
        };
      }
      module2.exports = store.inspectSource;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/native-weak-map.js
  var require_native_weak_map = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/nativ\
e-weak-map.js"(exports, module2) {
      var global2 = require_global();
      var inspectSource = require_inspect_source();
      var WeakMap = global2.WeakMap;
      module2.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(
      WeakMap));
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-pu\
re.js"(exports, module2) {
      module2.exports = false;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/share\
d.js"(exports, module2) {
      var IS_PURE = require_is_pure();
      var store = require_shared_store();
      (module2.exports = function(key, value) {
        return store[key] || (store[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: "3.6.4",
        mode: IS_PURE ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/uid.j\
s"(exports, module2) {
      var id = 0;
      var postfix = Math.random();
      module2.exports = function(key) {
        return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).
        toString(36);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/share\
d-key.js"(exports, module2) {
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module2.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/hidde\
n-keys.js"(exports, module2) {
      module2.exports = {};
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/inter\
nal-state.js"(exports, module2) {
      var NATIVE_WEAK_MAP = require_native_weak_map();
      var global2 = require_global();
      var isObject2 = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var objectHas = require_has();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var WeakMap = global2.WeakMap;
      var set;
      var get;
      var has;
      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject2(it) || (state = get(it)).type !== TYPE) {
            throw TypeError("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP) {
        store = new WeakMap();
        wmget = store.get;
        wmhas = store.has;
        wmset = store.set;
        set = function(it, metadata) {
          wmset.call(store, it, metadata);
          return metadata;
        };
        get = function(it) {
          return wmget.call(store, it) || {};
        };
        has = function(it) {
          return wmhas.call(store, it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return objectHas(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return objectHas(it, STATE);
        };
      }
      var store;
      var wmget;
      var wmhas;
      var wmset;
      var STATE;
      module2.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/redefine.js
  var require_redefine = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/redef\
ine.js"(exports, module2) {
      var global2 = require_global();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var has = require_has();
      var setGlobal = require_set_global();
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split("String");
      (module2.exports = function(O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        if (typeof value == "function") {
          if (typeof key == "string" && !has(value, "name"))
            createNonEnumerableProperty(value, "name", key);
          enforceInternalState(value).source = TEMPLATE.join(typeof key == "stri\
ng" ? key : "");
        }
        if (O === global2) {
          if (simple)
            O[key] = value;
          else
            setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple)
          O[key] = value;
        else
          createNonEnumerableProperty(O, key, value);
      })(Function.prototype, "toString", function toString() {
        return typeof this == "function" && getInternalState(this).source || inspectSource(
        this);
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/path.js
  var require_path = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/path.\
js"(exports, module2) {
      var global2 = require_global();
      module2.exports = global2;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/get-b\
uilt-in.js"(exports, module2) {
      var path2 = require_path();
      var global2 = require_global();
      var aFunction = function(variable) {
        return typeof variable == "function" ? variable : void 0;
      };
      module2.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(path2[namespace]) || aFunction(global2[namespace]) :
        path2[namespace] && path2[namespace][method] || global2[namespace] && global2[namespace][method];
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-integer.js
  var require_to_integer = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-in\
teger.js"(exports, module2) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module2.exports = function(argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-le\
ngth.js"(exports, module2) {
      var toInteger = require_to_integer();
      var min = Math.min;
      module2.exports = function(argument) {
        return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-ab\
solute-index.js"(exports, module2) {
      var toInteger = require_to_integer();
      var max = Math.max;
      var min = Math.min;
      module2.exports = function(index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array\
-includes.js"(exports, module2) {
      var toIndexedObject = require_to_indexed_object();
      var toLength = require_to_length();
      var toAbsoluteIndex = require_to_absolute_index();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value)
                return true;
            }
          else
            for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el)
                return IS_INCLUDES || index || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };
      module2.exports = {
        // `Array.prototype.includes` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-keys-internal.js"(exports, module2) {
      var has = require_has();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      module2.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          !has(hiddenKeys, key) && has(O, key) && result.push(key);
        while (names.length > i)
          if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key);
          }
        return result;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/enum-\
bug-keys.js"(exports, module2) {
      module2.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-get-own-property-names.js"(exports) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-get-own-property-symbols.js"(exports) {
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/own-k\
eys.js"(exports, module2) {
      var getBuiltIn = require_get_built_in();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/copy-\
constructor-properties.js"(exports, module2) {
      var has = require_has();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module2.exports = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!has(target, key))
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-fo\
rced.js"(exports, module2) {
      var fails = require_fails();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : typeof detection ==
        "function" ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module2.exports = isForced;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/expor\
t.js"(exports, module2) {
      var global2 = require_global();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().
      f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var setGlobal = require_set_global();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module2.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global2;
        } else if (STATIC) {
          target = global2[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global2[TARGET] || {}).prototype;
        }
        if (target)
          for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else
              targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key,
            options.forced);
            if (!FORCED && targetProperty !== void 0) {
              if (typeof sourceProperty === typeof targetProperty)
                continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            redefine(target, key, sourceProperty, options);
          }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.symbol.description.js
  var require_es_symbol_description = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.symb\
ol.description.js"() {
      "use strict";
      var $ = require_export();
      var DESCRIPTORS = require_descriptors();
      var global2 = require_global();
      var has = require_has();
      var isObject2 = require_is_object();
      var defineProperty = require_object_define_property().f;
      var copyConstructorProperties = require_copy_constructor_properties();
      var NativeSymbol = global2.Symbol;
      if (DESCRIPTORS && typeof NativeSymbol == "function" && (!("description" in
      NativeSymbol.prototype) || // Safari 12 bug
      NativeSymbol().description !== void 0)) {
        EmptyStringDescriptionStore = {};
        SymbolWrapper = function Symbol2() {
          var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 :
          String(arguments[0]);
          var result = this instanceof SymbolWrapper ? new NativeSymbol(description) :
          description === void 0 ? NativeSymbol() : NativeSymbol(description);
          if (description === "")
            EmptyStringDescriptionStore[result] = true;
          return result;
        };
        copyConstructorProperties(SymbolWrapper, NativeSymbol);
        symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
        symbolPrototype.constructor = SymbolWrapper;
        symbolToString = symbolPrototype.toString;
        native = String(NativeSymbol("test")) == "Symbol(test)";
        regexp = /^Symbol\((.*)\)[^)]+$/;
        defineProperty(symbolPrototype, "description", {
          configurable: true,
          get: function description() {
            var symbol = isObject2(this) ? this.valueOf() : this;
            var string = symbolToString.call(symbol);
            if (has(EmptyStringDescriptionStore, symbol))
              return "";
            var desc = native ? string.slice(7, -1) : string.replace(regexp, "$1");
            return desc === "" ? void 0 : desc;
          }
        });
        $({ global: true, forced: true }, {
          Symbol: SymbolWrapper
        });
      }
      var EmptyStringDescriptionStore;
      var SymbolWrapper;
      var symbolPrototype;
      var symbolToString;
      var native;
      var regexp;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/native-symbol.js
  var require_native_symbol = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/nativ\
e-symbol.js"(exports, module2) {
      var fails = require_fails();
      module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        return !String(Symbol());
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/use-s\
ymbol-as-uid.js"(exports, module2) {
      var NATIVE_SYMBOL = require_native_symbol();
      module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator ==
      "symbol";
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/well-\
known-symbol.js"(exports, module2) {
      var global2 = require_global();
      var shared = require_shared();
      var has = require_has();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_native_symbol();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var WellKnownSymbolsStore = shared("wks");
      var Symbol2 = global2.Symbol;
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.
      withoutSetter || uid;
      module2.exports = function(name) {
        if (!has(WellKnownSymbolsStore, name)) {
          if (NATIVE_SYMBOL && has(Symbol2, name))
            WellKnownSymbolsStore[name] = Symbol2[name];
          else
            WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/well-known-symbol-wrapped.js
  var require_well_known_symbol_wrapped = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/well-\
known-symbol-wrapped.js"(exports) {
      var wellKnownSymbol = require_well_known_symbol();
      exports.f = wellKnownSymbol;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/define-well-known-symbol.js
  var require_define_well_known_symbol = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/defin\
e-well-known-symbol.js"(exports, module2) {
      var path2 = require_path();
      var has = require_has();
      var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
      var defineProperty = require_object_define_property().f;
      module2.exports = function(NAME) {
        var Symbol2 = path2.Symbol || (path2.Symbol = {});
        if (!has(Symbol2, NAME))
          defineProperty(Symbol2, NAME, {
            value: wrappedWellKnownSymbolModule.f(NAME)
          });
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.symbol.async-iterator.js
  var require_es_symbol_async_iterator = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.symb\
ol.async-iterator.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("asyncIterator");
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.symbol.match-all.js
  var require_es_symbol_match_all = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.symb\
ol.match-all.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("matchAll");
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-array.js
  var require_is_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-ar\
ray.js"(exports, module2) {
      var classof = require_classof_raw();
      module2.exports = Array.isArray || function isArray(arg) {
        return classof(arg) == "Array";
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/a-function.js
  var require_a_function = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/a-fun\
ction.js"(exports, module2) {
      module2.exports = function(it) {
        if (typeof it != "function") {
          throw TypeError(String(it) + " is not a function");
        }
        return it;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/funct\
ion-bind-context.js"(exports, module2) {
      var aFunction = require_a_function();
      module2.exports = function(fn, that2, length) {
        aFunction(fn);
        if (that2 === void 0)
          return fn;
        switch (length) {
          case 0:
            return function() {
              return fn.call(that2);
            };
          case 1:
            return function(a) {
              return fn.call(that2, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that2, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn.call(that2, a, b, c);
            };
        }
        return function() {
          return fn.apply(that2, arguments);
        };
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/flatten-into-array.js
  var require_flatten_into_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/flatt\
en-into-array.js"(exports, module2) {
      "use strict";
      var isArray = require_is_array();
      var toLength = require_to_length();
      var bind = require_function_bind_context();
      var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        var targetIndex = start;
        var sourceIndex = 0;
        var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
        var element;
        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) :
            source[sourceIndex];
            if (depth > 0 && isArray(element)) {
              targetIndex = flattenIntoArray(target, original, element, toLength(
              element.length), targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 9007199254740991)
                throw TypeError("Exceed the acceptable array length");
              target[targetIndex] = element;
            }
            targetIndex++;
          }
          sourceIndex++;
        }
        return targetIndex;
      };
      module2.exports = flattenIntoArray;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-ob\
ject.js"(exports, module2) {
      var requireObjectCoercible = require_require_object_coercible();
      module2.exports = function(argument) {
        return Object(requireObjectCoercible(argument));
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array-species-create.js
  var require_array_species_create = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array\
-species-create.js"(exports, module2) {
      var isObject2 = require_is_object();
      var isArray = require_is_array();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      module2.exports = function(originalArray, length) {
        var C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          if (typeof C == "function" && (C === Array || isArray(C.prototype)))
            C = void 0;
          else if (isObject2(C)) {
            C = C[SPECIES];
            if (C === null)
              C = void 0;
          }
        }
        return new (C === void 0 ? Array : C)(length === 0 ? 0 : length);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.array.flat.js
  var require_es_array_flat = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.arra\
y.flat.js"() {
      "use strict";
      var $ = require_export();
      var flattenIntoArray = require_flatten_into_array();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var toInteger = require_to_integer();
      var arraySpeciesCreate = require_array_species_create();
      $({ target: "Array", proto: true }, {
        flat: function flat() {
          var depthArg = arguments.length ? arguments[0] : void 0;
          var O = toObject(this);
          var sourceLen = toLength(O.length);
          var A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ?
          1 : toInteger(depthArg));
          return A;
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.array.flat-map.js
  var require_es_array_flat_map = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.arra\
y.flat-map.js"() {
      "use strict";
      var $ = require_export();
      var flattenIntoArray = require_flatten_into_array();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var aFunction = require_a_function();
      var arraySpeciesCreate = require_array_species_create();
      $({ target: "Array", proto: true }, {
        flatMap: function flatMap(callbackfn) {
          var O = toObject(this);
          var sourceLen = toLength(O.length);
          var A;
          aFunction(callbackfn);
          A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.
          length > 1 ? arguments[1] : void 0);
          return A;
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.array.reverse.js
  var require_es_array_reverse = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.arra\
y.reverse.js"() {
      "use strict";
      var $ = require_export();
      var isArray = require_is_array();
      var nativeReverse = [].reverse;
      var test = [1, 2];
      $({ target: "Array", proto: true, forced: String(test) === String(test.reverse()) },
      {
        reverse: function reverse() {
          if (isArray(this))
            this.length = this.length;
          return nativeReverse.call(this);
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array-method-is-strict.js
  var require_array_method_is_strict = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array\
-method-is-strict.js"(exports, module2) {
      "use strict";
      var fails = require_fails();
      module2.exports = function(METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function() {
          method.call(null, argument || function() {
            throw 1;
          }, 1);
        });
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.array.sort.js
  var require_es_array_sort = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.arra\
y.sort.js"() {
      "use strict";
      var $ = require_export();
      var aFunction = require_a_function();
      var toObject = require_to_object();
      var fails = require_fails();
      var arrayMethodIsStrict = require_array_method_is_strict();
      var test = [];
      var nativeSort = test.sort;
      var FAILS_ON_UNDEFINED = fails(function() {
        test.sort(void 0);
      });
      var FAILS_ON_NULL = fails(function() {
        test.sort(null);
      });
      var STRICT_METHOD = arrayMethodIsStrict("sort");
      var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;
      $({ target: "Array", proto: true, forced: FORCED }, {
        sort: function sort(comparefn) {
          return comparefn === void 0 ? nativeSort.call(toObject(this)) : nativeSort.
          call(toObject(this), aFunction(comparefn));
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-keys.js"(exports, module2) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module2.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-define-properties.js"(exports, module2) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var objectKeys = require_object_keys();
      module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index)
          definePropertyModule.f(O, key = keys[index++], Properties[key]);
        return O;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/html.\
js"(exports, module2) {
      var getBuiltIn = require_get_built_in();
      module2.exports = getBuiltIn("document", "documentElement");
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-create.js"(exports, module2) {
      var anObject = require_an_object();
      var defineProperties = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = document.domain && new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) :
        NullProtoObjectViaIFrame();
        var length = enumBugKeys.length;
        while (length--)
          delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module2.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = NullProtoObject();
        return Properties === void 0 ? result : defineProperties(result, Properties);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/add-t\
o-unscopables.js"(exports, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var create = require_object_create();
      var definePropertyModule = require_object_define_property();
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] == void 0) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      }
      module2.exports = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.array.unscopables.flat.js
  var require_es_array_unscopables_flat = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.arra\
y.unscopables.flat.js"() {
      var addToUnscopables = require_add_to_unscopables();
      addToUnscopables("flat");
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.array.unscopables.flat-map.js
  var require_es_array_unscopables_flat_map = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.arra\
y.unscopables.flat-map.js"() {
      var addToUnscopables = require_add_to_unscopables();
      addToUnscopables("flatMap");
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array-buffer-native.js
  var require_array_buffer_native = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array\
-buffer-native.js"(exports, module2) {
      module2.exports = typeof ArrayBuffer !== "undefined" && typeof DataView !==
      "undefined";
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/redefine-all.js
  var require_redefine_all = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/redef\
ine-all.js"(exports, module2) {
      var redefine = require_redefine();
      module2.exports = function(target, src, options) {
        for (var key in src)
          redefine(target, key, src[key], options);
        return target;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/an-instance.js
  var require_an_instance = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/an-in\
stance.js"(exports, module2) {
      module2.exports = function(it, Constructor, name) {
        if (!(it instanceof Constructor)) {
          throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
        }
        return it;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-index.js
  var require_to_index = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-in\
dex.js"(exports, module2) {
      var toInteger = require_to_integer();
      var toLength = require_to_length();
      module2.exports = function(it) {
        if (it === void 0)
          return 0;
        var number = toInteger(it);
        var length = toLength(number);
        if (number !== length)
          throw RangeError("Wrong length or index");
        return length;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/ieee754.js
  var require_ieee754 = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/ieee7\
54.js"(exports, module2) {
      var Infinity = 1 / 0;
      var abs = Math.abs;
      var pow = Math.pow;
      var floor = Math.floor;
      var log = Math.log;
      var LN2 = Math.LN2;
      var pack = function(number, mantissaLength, bytes) {
        var buffer = new Array(bytes);
        var exponentLength = bytes * 8 - mantissaLength - 1;
        var eMax = (1 << exponentLength) - 1;
        var eBias = eMax >> 1;
        var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
        var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
        var index = 0;
        var exponent, mantissa, c;
        number = abs(number);
        if (number != number || number === Infinity) {
          mantissa = number != number ? 1 : 0;
          exponent = eMax;
        } else {
          exponent = floor(log(number) / LN2);
          if (number * (c = pow(2, -exponent)) < 1) {
            exponent--;
            c *= 2;
          }
          if (exponent + eBias >= 1) {
            number += rt / c;
          } else {
            number += rt * pow(2, 1 - eBias);
          }
          if (number * c >= 2) {
            exponent++;
            c /= 2;
          }
          if (exponent + eBias >= eMax) {
            mantissa = 0;
            exponent = eMax;
          } else if (exponent + eBias >= 1) {
            mantissa = (number * c - 1) * pow(2, mantissaLength);
            exponent = exponent + eBias;
          } else {
            mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
            exponent = 0;
          }
        }
        for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /=
        256, mantissaLength -= 8)
          ;
        exponent = exponent << mantissaLength | mantissa;
        exponentLength += mantissaLength;
        for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /=
        256, exponentLength -= 8)
          ;
        buffer[--index] |= sign * 128;
        return buffer;
      };
      var unpack = function(buffer, mantissaLength) {
        var bytes = buffer.length;
        var exponentLength = bytes * 8 - mantissaLength - 1;
        var eMax = (1 << exponentLength) - 1;
        var eBias = eMax >> 1;
        var nBits = exponentLength - 7;
        var index = bytes - 1;
        var sign = buffer[index--];
        var exponent = sign & 127;
        var mantissa;
        sign >>= 7;
        for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -=
        8)
          ;
        mantissa = exponent & (1 << -nBits) - 1;
        exponent >>= -nBits;
        nBits += mantissaLength;
        for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -=
        8)
          ;
        if (exponent === 0) {
          exponent = 1 - eBias;
        } else if (exponent === eMax) {
          return mantissa ? NaN : sign ? -Infinity : Infinity;
        } else {
          mantissa = mantissa + pow(2, mantissaLength);
          exponent = exponent - eBias;
        }
        return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
      };
      module2.exports = {
        pack,
        unpack
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/corre\
ct-prototype-getter.js"(exports, module2) {
      var fails = require_fails();
      module2.exports = !fails(function() {
        function F() {
        }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-get-prototype-of.js"(exports, module2) {
      var has = require_has();
      var toObject = require_to_object();
      var sharedKey = require_shared_key();
      var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
      var IE_PROTO = sharedKey("IE_PROTO");
      var ObjectPrototype = Object.prototype;
      module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
        O = toObject(O);
        if (has(O, IE_PROTO))
          return O[IE_PROTO];
        if (typeof O.constructor == "function" && O instanceof O.constructor) {
          return O.constructor.prototype;
        }
        return O instanceof Object ? ObjectPrototype : null;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/a-possible-prototype.js
  var require_a_possible_prototype = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/a-pos\
sible-prototype.js"(exports, module2) {
      var isObject2 = require_is_object();
      module2.exports = function(it) {
        if (!isObject2(it) && it !== null) {
          throw TypeError("Can't set " + String(it) + " as a prototype");
        }
        return it;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/object-set-prototype-of.js
  var require_object_set_prototype_of = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/objec\
t-set-prototype-of.js"(exports, module2) {
      var anObject = require_an_object();
      var aPossiblePrototype = require_a_possible_prototype();
      module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").
          set;
          setter.call(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
        }
        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER)
            setter.call(O, proto);
          else
            O.__proto__ = proto;
          return O;
        };
      }() : void 0);
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array-fill.js
  var require_array_fill = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array\
-fill.js"(exports, module2) {
      "use strict";
      var toObject = require_to_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      module2.exports = function fill(value) {
        var O = toObject(this);
        var length = toLength(O.length);
        var argumentsLength = arguments.length;
        var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : void 0,
        length);
        var end = argumentsLength > 2 ? arguments[2] : void 0;
        var endPos = end === void 0 ? length : toAbsoluteIndex(end, length);
        while (endPos > index)
          O[index++] = value;
        return O;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/set-t\
o-string-tag.js"(exports, module2) {
      var defineProperty = require_object_define_property().f;
      var has = require_has();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module2.exports = function(it, TAG, STATIC) {
        if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array-buffer.js
  var require_array_buffer = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array\
-buffer.js"(exports, module2) {
      "use strict";
      var global2 = require_global();
      var DESCRIPTORS = require_descriptors();
      var NATIVE_ARRAY_BUFFER = require_array_buffer_native();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefineAll = require_redefine_all();
      var fails = require_fails();
      var anInstance = require_an_instance();
      var toInteger = require_to_integer();
      var toLength = require_to_length();
      var toIndex = require_to_index();
      var IEEE754 = require_ieee754();
      var getPrototypeOf = require_object_get_prototype_of();
      var setPrototypeOf = require_object_set_prototype_of();
      var getOwnPropertyNames = require_object_get_own_property_names().f;
      var defineProperty = require_object_define_property().f;
      var arrayFill = require_array_fill();
      var setToStringTag = require_set_to_string_tag();
      var InternalStateModule = require_internal_state();
      var getInternalState = InternalStateModule.get;
      var setInternalState = InternalStateModule.set;
      var ARRAY_BUFFER = "ArrayBuffer";
      var DATA_VIEW = "DataView";
      var PROTOTYPE = "prototype";
      var WRONG_LENGTH = "Wrong length";
      var WRONG_INDEX = "Wrong index";
      var NativeArrayBuffer = global2[ARRAY_BUFFER];
      var $ArrayBuffer = NativeArrayBuffer;
      var $DataView = global2[DATA_VIEW];
      var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
      var ObjectPrototype = Object.prototype;
      var RangeError2 = global2.RangeError;
      var packIEEE754 = IEEE754.pack;
      var unpackIEEE754 = IEEE754.unpack;
      var packInt8 = function(number) {
        return [number & 255];
      };
      var packInt16 = function(number) {
        return [number & 255, number >> 8 & 255];
      };
      var packInt32 = function(number) {
        return [number & 255, number >> 8 & 255, number >> 16 & 255, number >> 24 &
        255];
      };
      var unpackInt32 = function(buffer) {
        return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
      };
      var packFloat32 = function(number) {
        return packIEEE754(number, 23, 4);
      };
      var packFloat64 = function(number) {
        return packIEEE754(number, 52, 8);
      };
      var addGetter = function(Constructor, key2) {
        defineProperty(Constructor[PROTOTYPE], key2, { get: function() {
          return getInternalState(this)[key2];
        } });
      };
      var get = function(view, count, index, isLittleEndian) {
        var intIndex = toIndex(index);
        var store = getInternalState(view);
        if (intIndex + count > store.byteLength)
          throw RangeError2(WRONG_INDEX);
        var bytes = getInternalState(store.buffer).bytes;
        var start = intIndex + store.byteOffset;
        var pack = bytes.slice(start, start + count);
        return isLittleEndian ? pack : pack.reverse();
      };
      var set = function(view, count, index, conversion, value, isLittleEndian) {
        var intIndex = toIndex(index);
        var store = getInternalState(view);
        if (intIndex + count > store.byteLength)
          throw RangeError2(WRONG_INDEX);
        var bytes = getInternalState(store.buffer).bytes;
        var start = intIndex + store.byteOffset;
        var pack = conversion(+value);
        for (var i = 0; i < count; i++)
          bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
      };
      if (!NATIVE_ARRAY_BUFFER) {
        $ArrayBuffer = function ArrayBuffer2(length) {
          anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
          var byteLength = toIndex(length);
          setInternalState(this, {
            bytes: arrayFill.call(new Array(byteLength), 0),
            byteLength
          });
          if (!DESCRIPTORS)
            this.byteLength = byteLength;
        };
        $DataView = function DataView2(buffer, byteOffset, byteLength) {
          anInstance(this, $DataView, DATA_VIEW);
          anInstance(buffer, $ArrayBuffer, DATA_VIEW);
          var bufferLength = getInternalState(buffer).byteLength;
          var offset = toInteger(byteOffset);
          if (offset < 0 || offset > bufferLength)
            throw RangeError2("Wrong offset");
          byteLength = byteLength === void 0 ? bufferLength - offset : toLength(
          byteLength);
          if (offset + byteLength > bufferLength)
            throw RangeError2(WRONG_LENGTH);
          setInternalState(this, {
            buffer,
            byteLength,
            byteOffset: offset
          });
          if (!DESCRIPTORS) {
            this.buffer = buffer;
            this.byteLength = byteLength;
            this.byteOffset = offset;
          }
        };
        if (DESCRIPTORS) {
          addGetter($ArrayBuffer, "byteLength");
          addGetter($DataView, "buffer");
          addGetter($DataView, "byteLength");
          addGetter($DataView, "byteOffset");
        }
        redefineAll($DataView[PROTOTYPE], {
          getInt8: function getInt8(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
          },
          getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
          },
          getInt16: function getInt16(byteOffset) {
            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] :
            void 0);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
          },
          getUint16: function getUint16(byteOffset) {
            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] :
            void 0);
            return bytes[1] << 8 | bytes[0];
          },
          getInt32: function getInt32(byteOffset) {
            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] :
            void 0));
          },
          getUint32: function getUint32(byteOffset) {
            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] :
            void 0)) >>> 0;
          },
          getFloat32: function getFloat32(byteOffset) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ?
            arguments[1] : void 0), 23);
          },
          getFloat64: function getFloat64(byteOffset) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ?
            arguments[1] : void 0), 52);
          },
          setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packInt8, value);
          },
          setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packInt8, value);
          },
          setInt16: function setInt16(byteOffset, value) {
            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] :
            void 0);
          },
          setUint16: function setUint16(byteOffset, value) {
            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] :
            void 0);
          },
          setInt32: function setInt32(byteOffset, value) {
            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] :
            void 0);
          },
          setUint32: function setUint32(byteOffset, value) {
            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] :
            void 0);
          },
          setFloat32: function setFloat32(byteOffset, value) {
            set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] :
            void 0);
          },
          setFloat64: function setFloat64(byteOffset, value) {
            set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] :
            void 0);
          }
        });
      } else {
        if (!fails(function() {
          NativeArrayBuffer(1);
        }) || !fails(function() {
          new NativeArrayBuffer(-1);
        }) || fails(function() {
          new NativeArrayBuffer();
          new NativeArrayBuffer(1.5);
          new NativeArrayBuffer(NaN);
          return NativeArrayBuffer.name != ARRAY_BUFFER;
        })) {
          $ArrayBuffer = function ArrayBuffer2(length) {
            anInstance(this, $ArrayBuffer);
            return new NativeArrayBuffer(toIndex(length));
          };
          ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
          for (keys = getOwnPropertyNames(NativeArrayBuffer), j = 0; keys.length >
          j; ) {
            if (!((key = keys[j++]) in $ArrayBuffer)) {
              createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
            }
          }
          ArrayBufferPrototype.constructor = $ArrayBuffer;
        }
        if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
          setPrototypeOf($DataViewPrototype, ObjectPrototype);
        }
        testView = new $DataView(new $ArrayBuffer(2));
        nativeSetInt8 = $DataViewPrototype.setInt8;
        testView.setInt8(0, 2147483648);
        testView.setInt8(1, 2147483649);
        if (testView.getInt8(0) || !testView.getInt8(1))
          redefineAll($DataViewPrototype, {
            setInt8: function setInt8(byteOffset, value) {
              nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
            },
            setUint8: function setUint8(byteOffset, value) {
              nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
            }
          }, { unsafe: true });
      }
      var ArrayBufferPrototype;
      var keys;
      var j;
      var key;
      var testView;
      var nativeSetInt8;
      setToStringTag($ArrayBuffer, ARRAY_BUFFER);
      setToStringTag($DataView, DATA_VIEW);
      module2.exports = {
        ArrayBuffer: $ArrayBuffer,
        DataView: $DataView
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/set-species.js
  var require_set_species = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/set-s\
pecies.js"(exports, module2) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var definePropertyModule = require_object_define_property();
      var wellKnownSymbol = require_well_known_symbol();
      var DESCRIPTORS = require_descriptors();
      var SPECIES = wellKnownSymbol("species");
      module2.exports = function(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = definePropertyModule.f;
        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function() {
              return this;
            }
          });
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.array-buffer.constructor.js
  var require_es_array_buffer_constructor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.arra\
y-buffer.constructor.js"() {
      "use strict";
      var $ = require_export();
      var global2 = require_global();
      var arrayBufferModule = require_array_buffer();
      var setSpecies = require_set_species();
      var ARRAY_BUFFER = "ArrayBuffer";
      var ArrayBuffer2 = arrayBufferModule[ARRAY_BUFFER];
      var NativeArrayBuffer = global2[ARRAY_BUFFER];
      $({ global: true, forced: NativeArrayBuffer !== ArrayBuffer2 }, {
        ArrayBuffer: ArrayBuffer2
      });
      setSpecies(ARRAY_BUFFER);
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/species-constructor.js
  var require_species_constructor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/speci\
es-constructor.js"(exports, module2) {
      var anObject = require_an_object();
      var aFunction = require_a_function();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      module2.exports = function(O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? defaultConstructor :
        aFunction(S);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.array-buffer.slice.js
  var require_es_array_buffer_slice = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.arra\
y-buffer.slice.js"() {
      "use strict";
      var $ = require_export();
      var fails = require_fails();
      var ArrayBufferModule = require_array_buffer();
      var anObject = require_an_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      var speciesConstructor = require_species_constructor();
      var ArrayBuffer2 = ArrayBufferModule.ArrayBuffer;
      var DataView2 = ArrayBufferModule.DataView;
      var nativeArrayBufferSlice = ArrayBuffer2.prototype.slice;
      var INCORRECT_SLICE = fails(function() {
        return !new ArrayBuffer2(2).slice(1, void 0).byteLength;
      });
      $({ target: "ArrayBuffer", proto: true, unsafe: true, forced: INCORRECT_SLICE },
      {
        slice: function slice(start, end) {
          if (nativeArrayBufferSlice !== void 0 && end === void 0) {
            return nativeArrayBufferSlice.call(anObject(this), start);
          }
          var length = anObject(this).byteLength;
          var first = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
          var result = new (speciesConstructor(this, ArrayBuffer2))(toLength(fin -
          first));
          var viewSource = new DataView2(this);
          var viewTarget = new DataView2(result);
          var index = 0;
          while (first < fin) {
            viewTarget.setUint8(index++, viewSource.getUint8(first++));
          }
          return result;
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.global-this.js
  var require_es_global_this = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.glob\
al-this.js"() {
      var $ = require_export();
      var global2 = require_global();
      $({ global: true }, {
        globalThis: global2
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.json.stringify.js
  var require_es_json_stringify = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.json\
.stringify.js"() {
      var $ = require_export();
      var getBuiltIn = require_get_built_in();
      var fails = require_fails();
      var $stringify = getBuiltIn("JSON", "stringify");
      var re = /[\uD800-\uDFFF]/g;
      var low = /^[\uD800-\uDBFF]$/;
      var hi = /^[\uDC00-\uDFFF]$/;
      var fix = function(match, offset, string) {
        var prev = string.charAt(offset - 1);
        var next = string.charAt(offset + 1);
        if (low.test(match) && !hi.test(next) || hi.test(match) && !low.test(prev)) {
          return "\\u" + match.charCodeAt(0).toString(16);
        }
        return match;
      };
      var FORCED = fails(function() {
        return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\
\uDEAD") !== '"\\udead"';
      });
      if ($stringify) {
        $({ target: "JSON", stat: true, forced: FORCED }, {
          // eslint-disable-next-line no-unused-vars
          stringify: function stringify(it, replacer, space) {
            var result = $stringify.apply(null, arguments);
            return typeof result == "string" ? result.replace(re, fix) : result;
          }
        });
      }
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/iterators.js
  var require_iterators = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/itera\
tors.js"(exports, module2) {
      module2.exports = {};
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-ar\
ray-iterator-method.js"(exports, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module2.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] ===
        it);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-st\
ring-tag-support.js"(exports, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test = {};
      test[TO_STRING_TAG] = "z";
      module2.exports = String(test) === "[object z]";
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/classof.js
  var require_classof = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/class\
of.js"(exports, module2) {
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var classofRaw = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
        return arguments;
      }()) == "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (error) {
        }
      };
      module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag =
        tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ?
        classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee ==
        "function" ? "Arguments" : result;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/get-iterator-method.js
  var require_get_iterator_method = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/get-i\
terator-method.js"(exports, module2) {
      var classof = require_classof();
      var Iterators = require_iterators();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      module2.exports = function(it) {
        if (it != void 0)
          return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/call-with-safe-iteration-closing.js
  var require_call_with_safe_iteration_closing = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/call-\
with-safe-iteration-closing.js"(exports, module2) {
      var anObject = require_an_object();
      module2.exports = function(iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
          var returnMethod = iterator["return"];
          if (returnMethod !== void 0)
            anObject(returnMethod.call(iterator));
          throw error;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/iterate.js
  var require_iterate = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/itera\
te.js"(exports, module2) {
      var anObject = require_an_object();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var toLength = require_to_length();
      var bind = require_function_bind_context();
      var getIteratorMethod = require_get_iterator_method();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var Result = function(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };
      var iterate = module2.exports = function(iterable, fn, that2, AS_ENTRIES, IS_ITERATOR) {
        var boundFunction = bind(fn, that2, AS_ENTRIES ? 2 : 1);
        var iterator, iterFn, index, length, result, next, step;
        if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (typeof iterFn != "function")
            throw TypeError("Target is not iterable");
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = toLength(iterable.length); length > index; index++) {
              result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0],
              step[1]) : boundFunction(iterable[index]);
              if (result && result instanceof Result)
                return result;
            }
            return new Result(false);
          }
          iterator = iterFn.call(iterable);
        }
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          result = callWithSafeIterationClosing(iterator, boundFunction, step.value,
          AS_ENTRIES);
          if (typeof result == "object" && result && result instanceof Result)
            return result;
        }
        return new Result(false);
      };
      iterate.stop = function(result) {
        return new Result(true, result);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/create-property.js
  var require_create_property = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/creat\
e-property.js"(exports, module2) {
      "use strict";
      var toPrimitive = require_to_primitive();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module2.exports = function(object, key, value) {
        var propertyKey = toPrimitive(key);
        if (propertyKey in object)
          definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0,
          value));
        else
          object[propertyKey] = value;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.object.from-entries.js
  var require_es_object_from_entries = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.obje\
ct.from-entries.js"() {
      var $ = require_export();
      var iterate = require_iterate();
      var createProperty = require_create_property();
      $({ target: "Object", stat: true }, {
        fromEntries: function fromEntries(iterable) {
          var obj = {};
          iterate(iterable, function(k, v) {
            createProperty(obj, k, v);
          }, void 0, true);
          return obj;
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/itera\
tors-core.js"(exports, module2) {
      "use strict";
      var getPrototypeOf = require_object_get_prototype_of();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var has = require_has();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      var BUGGY_SAFARI_ITERATORS = false;
      var returnThis = function() {
        return this;
      };
      var IteratorPrototype;
      var PrototypeOfArrayIteratorPrototype;
      var arrayIterator;
      if ([].keys) {
        arrayIterator = [].keys();
        if (!("next" in arrayIterator))
          BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
            IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }
      if (IteratorPrototype == void 0)
        IteratorPrototype = {};
      if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
        createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
      }
      module2.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/create-iterator-constructor.js
  var require_create_iterator_constructor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/creat\
e-iterator-constructor.js"(exports, module2) {
      "use strict";
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var create = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var setToStringTag = require_set_to_string_tag();
      var Iterators = require_iterators();
      var returnThis = function() {
        return this;
      };
      module2.exports = function(IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + " Iterator";
        IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(
        1, next) });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-regexp.js
  var require_is_regexp = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/is-re\
gexp.js"(exports, module2) {
      var isObject2 = require_is_object();
      var classof = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var MATCH = wellKnownSymbol("match");
      module2.exports = function(it) {
        var isRegExp;
        return isObject2(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp :
        classof(it) == "RegExp");
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/regexp-flags.js
  var require_regexp_flags = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/regex\
p-flags.js"(exports, module2) {
      "use strict";
      var anObject = require_an_object();
      module2.exports = function() {
        var that2 = anObject(this);
        var result = "";
        if (that2.global)
          result += "g";
        if (that2.ignoreCase)
          result += "i";
        if (that2.multiline)
          result += "m";
        if (that2.dotAll)
          result += "s";
        if (that2.unicode)
          result += "u";
        if (that2.sticky)
          result += "y";
        return result;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/string-multibyte.js
  var require_string_multibyte = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/strin\
g-multibyte.js"(exports, module2) {
      var toInteger = require_to_integer();
      var requireObjectCoercible = require_require_object_coercible();
      var createMethod = function(CONVERT_TO_STRING) {
        return function($this, pos) {
          var S = String(requireObjectCoercible($this));
          var position = toInteger(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size)
            return CONVERT_TO_STRING ? "" : void 0;
          first = S.charCodeAt(position);
          return first < 55296 || first > 56319 || position + 1 === size || (second =
          S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ?
          S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position +
          2) : (first - 55296 << 10) + (second - 56320) + 65536;
        };
      };
      module2.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/advance-string-index.js
  var require_advance_string_index = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/advan\
ce-string-index.js"(exports, module2) {
      "use strict";
      var charAt = require_string_multibyte().charAt;
      module2.exports = function(S, index, unicode) {
        return index + (unicode ? charAt(S, index).length : 1);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.string.match-all.js
  var require_es_string_match_all = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.stri\
ng.match-all.js"() {
      "use strict";
      var $ = require_export();
      var createIteratorConstructor = require_create_iterator_constructor();
      var requireObjectCoercible = require_require_object_coercible();
      var toLength = require_to_length();
      var aFunction = require_a_function();
      var anObject = require_an_object();
      var classof = require_classof_raw();
      var isRegExp = require_is_regexp();
      var getRegExpFlags = require_regexp_flags();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var fails = require_fails();
      var wellKnownSymbol = require_well_known_symbol();
      var speciesConstructor = require_species_constructor();
      var advanceStringIndex = require_advance_string_index();
      var InternalStateModule = require_internal_state();
      var IS_PURE = require_is_pure();
      var MATCH_ALL = wellKnownSymbol("matchAll");
      var REGEXP_STRING = "RegExp String";
      var REGEXP_STRING_ITERATOR = REGEXP_STRING + " Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);
      var RegExpPrototype = RegExp.prototype;
      var regExpBuiltinExec = RegExpPrototype.exec;
      var nativeMatchAll = "".matchAll;
      var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function() {
        "a".matchAll(/./);
      });
      var regExpExec = function(R, S) {
        var exec = R.exec;
        var result;
        if (typeof exec == "function") {
          result = exec.call(R, S);
          if (typeof result != "object")
            throw TypeError("Incorrect exec result");
          return result;
        }
        return regExpBuiltinExec.call(R, S);
      };
      var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, global2, fullUnicode) {
        setInternalState(this, {
          type: REGEXP_STRING_ITERATOR,
          regexp,
          string,
          global: global2,
          unicode: fullUnicode,
          done: false
        });
      }, REGEXP_STRING, function next() {
        var state = getInternalState(this);
        if (state.done)
          return { value: void 0, done: true };
        var R = state.regexp;
        var S = state.string;
        var match = regExpExec(R, S);
        if (match === null)
          return { value: void 0, done: state.done = true };
        if (state.global) {
          if (String(match[0]) == "")
            R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
          return { value: match, done: false };
        }
        state.done = true;
        return { value: match, done: false };
      });
      var $matchAll = function(string) {
        var R = anObject(this);
        var S = String(string);
        var C, flagsValue, flags, matcher, global2, fullUnicode;
        C = speciesConstructor(R, RegExp);
        flagsValue = R.flags;
        if (flagsValue === void 0 && R instanceof RegExp && !("flags" in RegExpPrototype)) {
          flagsValue = getRegExpFlags.call(R);
        }
        flags = flagsValue === void 0 ? "" : String(flagsValue);
        matcher = new C(C === RegExp ? R.source : R, flags);
        global2 = !!~flags.indexOf("g");
        fullUnicode = !!~flags.indexOf("u");
        matcher.lastIndex = toLength(R.lastIndex);
        return new $RegExpStringIterator(matcher, S, global2, fullUnicode);
      };
      $({ target: "String", proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
        matchAll: function matchAll(regexp) {
          var O = requireObjectCoercible(this);
          var flags, S, matcher, rx;
          if (regexp != null) {
            if (isRegExp(regexp)) {
              flags = String(requireObjectCoercible(
                "flags" in RegExpPrototype ? regexp.flags : getRegExpFlags.call(
                regexp)
              ));
              if (!~flags.indexOf("g"))
                throw TypeError("`.matchAll` does not allow non-global regexes");
            }
            if (WORKS_WITH_NON_GLOBAL_REGEX)
              return nativeMatchAll.apply(O, arguments);
            matcher = regexp[MATCH_ALL];
            if (matcher === void 0 && IS_PURE && classof(regexp) == "RegExp")
              matcher = $matchAll;
            if (matcher != null)
              return aFunction(matcher).call(regexp, O);
          } else if (WORKS_WITH_NON_GLOBAL_REGEX)
            return nativeMatchAll.apply(O, arguments);
          S = String(O);
          rx = new RegExp(regexp, "g");
          return IS_PURE ? $matchAll.call(rx, S) : rx[MATCH_ALL](S);
        }
      });
      IS_PURE || MATCH_ALL in RegExpPrototype || createNonEnumerableProperty(RegExpPrototype,
      MATCH_ALL, $matchAll);
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/regexp-sticky-helpers.js
  var require_regexp_sticky_helpers = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/regex\
p-sticky-helpers.js"(exports) {
      "use strict";
      var fails = require_fails();
      function RE(s, f) {
        return RegExp(s, f);
      }
      exports.UNSUPPORTED_Y = fails(function() {
        var re = RE("a", "y");
        re.lastIndex = 2;
        return re.exec("abcd") != null;
      });
      exports.BROKEN_CARET = fails(function() {
        var re = RE("^r", "gy");
        re.lastIndex = 2;
        return re.exec("str") != null;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/regexp-exec.js
  var require_regexp_exec = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/regex\
p-exec.js"(exports, module2) {
      "use strict";
      var regexpFlags = require_regexp_flags();
      var stickyHelpers = require_regexp_sticky_helpers();
      var nativeExec = RegExp.prototype.exec;
      var nativeReplace = String.prototype.replace;
      var patchedExec = nativeExec;
      var UPDATES_LAST_INDEX_WRONG = function() {
        var re1 = /a/;
        var re2 = /b*/g;
        nativeExec.call(re1, "a");
        nativeExec.call(re2, "a");
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
      }();
      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;
      var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
      if (PATCH) {
        patchedExec = function exec(str) {
          var re = this;
          var lastIndex, reCopy, match, i;
          var sticky = UNSUPPORTED_Y && re.sticky;
          var flags = regexpFlags.call(re);
          var source = re.source;
          var charsAdded = 0;
          var strCopy = str;
          if (sticky) {
            flags = flags.replace("y", "");
            if (flags.indexOf("g") === -1) {
              flags += "g";
            }
            strCopy = String(str).slice(re.lastIndex);
            if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex -
            1] !== "\n")) {
              source = "(?: " + source + ")";
              strCopy = " " + strCopy;
              charsAdded++;
            }
            reCopy = new RegExp("^(?:" + source + ")", flags);
          }
          if (NPCG_INCLUDED) {
            reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
          }
          if (UPDATES_LAST_INDEX_WRONG)
            lastIndex = re.lastIndex;
          match = nativeExec.call(sticky ? reCopy : re, strCopy);
          if (sticky) {
            if (match) {
              match.input = match.input.slice(charsAdded);
              match[0] = match[0].slice(charsAdded);
              match.index = re.lastIndex;
              re.lastIndex += match[0].length;
            } else
              re.lastIndex = 0;
          } else if (UPDATES_LAST_INDEX_WRONG && match) {
            re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            nativeReplace.call(match[0], reCopy, function() {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === void 0)
                  match[i] = void 0;
              }
            });
          }
          return match;
        };
      }
      module2.exports = patchedExec;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.regexp.exec.js
  var require_es_regexp_exec = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.rege\
xp.exec.js"() {
      "use strict";
      var $ = require_export();
      var exec = require_regexp_exec();
      $({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
        exec
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js
  var require_fix_regexp_well_known_symbol_logic = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/fix-r\
egexp-well-known-symbol-logic.js"(exports, module2) {
      "use strict";
      require_es_regexp_exec();
      var redefine = require_redefine();
      var fails = require_fails();
      var wellKnownSymbol = require_well_known_symbol();
      var regexpExec = require_regexp_exec();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var SPECIES = wellKnownSymbol("species");
      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
        var re = /./;
        re.exec = function() {
          var result = [];
          result.groups = { a: "7" };
          return result;
        };
        return "".replace(re, "$<a>") !== "7";
      });
      var REPLACE_KEEPS_$0 = function() {
        return "a".replace(/./, "$0") === "$0";
      }();
      var REPLACE = wellKnownSymbol("replace");
      var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
        if (/./[REPLACE]) {
          return /./[REPLACE]("a", "$0") === "";
        }
        return false;
      }();
      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
        var re = /(?:)/;
        var originalExec = re.exec;
        re.exec = function() {
          return originalExec.apply(this, arguments);
        };
        var result = "ab".split(re);
        return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
      });
      module2.exports = function(KEY, length, exec, sham) {
        var SYMBOL = wellKnownSymbol(KEY);
        var DELEGATES_TO_SYMBOL = !fails(function() {
          var O = {};
          O[SYMBOL] = function() {
            return 7;
          };
          return ""[KEY](O) != 7;
        });
        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
          var execCalled = false;
          var re = /a/;
          if (KEY === "split") {
            re = {};
            re.constructor = {};
            re.constructor[SPECIES] = function() {
              return re;
            };
            re.flags = "";
            re[SYMBOL] = /./[SYMBOL];
          }
          re.exec = function() {
            execCalled = true;
            return null;
          };
          re[SYMBOL]("");
          return !execCalled;
        });
        if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !(REPLACE_SUPPORTS_NAMED_GROUPS &&
        REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY ===
        "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
          var nativeRegExpMethod = /./[SYMBOL];
          var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === regexpExec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                return { done: true, value: nativeRegExpMethod.call(regexp, str,
                arg2) };
              }
              return { done: true, value: nativeMethod.call(str, regexp, arg2) };
            }
            return { done: false };
          }, {
            REPLACE_KEEPS_$0,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          });
          var stringMethod = methods[0];
          var regexMethod = methods[1];
          redefine(String.prototype, KEY, stringMethod);
          redefine(
            RegExp.prototype,
            SYMBOL,
            length == 2 ? function(string, arg) {
              return regexMethod.call(string, this, arg);
            } : function(string) {
              return regexMethod.call(string, this);
            }
          );
        }
        if (sham)
          createNonEnumerableProperty(RegExp.prototype[SYMBOL], "sham", true);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/regexp-exec-abstract.js
  var require_regexp_exec_abstract = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/regex\
p-exec-abstract.js"(exports, module2) {
      var classof = require_classof_raw();
      var regexpExec = require_regexp_exec();
      module2.exports = function(R, S) {
        var exec = R.exec;
        if (typeof exec === "function") {
          var result = exec.call(R, S);
          if (typeof result !== "object") {
            throw TypeError("RegExp exec method returned something other than an\
 Object or null");
          }
          return result;
        }
        if (classof(R) !== "RegExp") {
          throw TypeError("RegExp#exec called on incompatible receiver");
        }
        return regexpExec.call(R, S);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.string.replace.js
  var require_es_string_replace = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.stri\
ng.replace.js"() {
      "use strict";
      var fixRegExpWellKnownSymbolLogic = require_fix_regexp_well_known_symbol_logic();
      var anObject = require_an_object();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var toInteger = require_to_integer();
      var requireObjectCoercible = require_require_object_coercible();
      var advanceStringIndex = require_advance_string_index();
      var regExpExec = require_regexp_exec_abstract();
      var max = Math.max;
      var min = Math.min;
      var floor = Math.floor;
      var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;
      var maybeToString = function(it) {
        return it === void 0 ? it : String(it);
      };
      fixRegExpWellKnownSymbolLogic("replace", 2, function(REPLACE, nativeReplace, maybeCallNative, reason) {
        var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
        var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
        var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "\
$" : "$0";
        return [
          // `String.prototype.replace` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = searchValue == void 0 ? void 0 : searchValue[REPLACE];
            return replacer !== void 0 ? replacer.call(searchValue, O, replaceValue) :
            nativeReplace.call(String(O), searchValue, replaceValue);
          },
          // `RegExp.prototype[@@replace]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
          function(regexp, replaceValue) {
            if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 ||
            typeof replaceValue === "string" && replaceValue.indexOf(UNSAFE_SUBSTITUTE) ===
            -1) {
              var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
              if (res.done)
                return res.value;
            }
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === "function";
            if (!functionalReplace)
              replaceValue = String(replaceValue);
            var global2 = rx.global;
            if (global2) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }
            var results = [];
            while (true) {
              var result = regExpExec(rx, S);
              if (result === null)
                break;
              results.push(result);
              if (!global2)
                break;
              var matchStr = String(result[0]);
              if (matchStr === "")
                rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = "";
            var nextSourcePosition = 0;
            for (var i = 0; i < results.length; i++) {
              result = results[i];
              var matched = String(result[0]);
              var position = max(min(toInteger(result.index), S.length), 0);
              var captures = [];
              for (var j = 1; j < result.length; j++)
                captures.push(maybeToString(result[j]));
              var namedCaptures = result.groups;
              if (functionalReplace) {
                var replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== void 0)
                  replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(void 0, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures,
                replaceValue);
              }
              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
          }
        ];
        function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
          var tailPos = position + matched.length;
          var m = captures.length;
          var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
          if (namedCaptures !== void 0) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
          }
          return nativeReplace.call(replacement, symbols, function(match, ch) {
            var capture;
            switch (ch.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return matched;
              case "`":
                return str.slice(0, position);
              case "'":
                return str.slice(tailPos);
              case "<":
                capture = namedCaptures[ch.slice(1, -1)];
                break;
              default:
                var n = +ch;
                if (n === 0)
                  return match;
                if (n > m) {
                  var f = floor(n / 10);
                  if (f === 0)
                    return match;
                  if (f <= m)
                    return captures[f - 1] === void 0 ? ch.charAt(1) : captures[f -
                    1] + ch.charAt(1);
                  return match;
                }
                capture = captures[n - 1];
            }
            return capture === void 0 ? "" : capture;
          });
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/whitespaces.js
  var require_whitespaces = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/white\
spaces.js"(exports, module2) {
      module2.exports = "	\n\v\f\r                　\u2028\u2029\uFEFF";
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/string-trim.js
  var require_string_trim = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/strin\
g-trim.js"(exports, module2) {
      var requireObjectCoercible = require_require_object_coercible();
      var whitespaces = require_whitespaces();
      var whitespace = "[" + whitespaces + "]";
      var ltrim = RegExp("^" + whitespace + whitespace + "*");
      var rtrim = RegExp(whitespace + whitespace + "*$");
      var createMethod = function(TYPE) {
        return function($this) {
          var string = String(requireObjectCoercible($this));
          if (TYPE & 1)
            string = string.replace(ltrim, "");
          if (TYPE & 2)
            string = string.replace(rtrim, "");
          return string;
        };
      };
      module2.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim
        trim: createMethod(3)
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/string-trim-forced.js
  var require_string_trim_forced = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/strin\
g-trim-forced.js"(exports, module2) {
      var fails = require_fails();
      var whitespaces = require_whitespaces();
      var non = "​᠎";
      module2.exports = function(METHOD_NAME) {
        return fails(function() {
          return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].
          name !== METHOD_NAME;
        });
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.string.trim.js
  var require_es_string_trim = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.stri\
ng.trim.js"() {
      "use strict";
      var $ = require_export();
      var $trim = require_string_trim().trim;
      var forcedStringTrimMethod = require_string_trim_forced();
      $({ target: "String", proto: true, forced: forcedStringTrimMethod("trim") },
      {
        trim: function trim() {
          return $trim(this);
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.string.trim-end.js
  var require_es_string_trim_end = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.stri\
ng.trim-end.js"() {
      "use strict";
      var $ = require_export();
      var $trimEnd = require_string_trim().end;
      var forcedStringTrimMethod = require_string_trim_forced();
      var FORCED = forcedStringTrimMethod("trimEnd");
      var trimEnd = FORCED ? function trimEnd2() {
        return $trimEnd(this);
      } : "".trimEnd;
      $({ target: "String", proto: true, forced: FORCED }, {
        trimEnd,
        trimRight: trimEnd
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.string.trim-start.js
  var require_es_string_trim_start = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.stri\
ng.trim-start.js"() {
      "use strict";
      var $ = require_export();
      var $trimStart = require_string_trim().start;
      var forcedStringTrimMethod = require_string_trim_forced();
      var FORCED = forcedStringTrimMethod("trimStart");
      var trimStart = FORCED ? function trimStart2() {
        return $trimStart(this);
      } : "".trimStart;
      $({ target: "String", proto: true, forced: FORCED }, {
        trimStart,
        trimLeft: trimStart
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/check-correctness-of-iteration.js
  var require_check_correctness_of_iteration = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/check\
-correctness-of-iteration.js"(exports, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var SAFE_CLOSING = false;
      try {
        called = 0;
        iteratorWithReturn = {
          next: function() {
            return { done: !!called++ };
          },
          "return": function() {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function() {
          return this;
        };
        Array.from(iteratorWithReturn, function() {
          throw 2;
        });
      } catch (error) {
      }
      var called;
      var iteratorWithReturn;
      module2.exports = function(exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING)
          return false;
        var ITERATION_SUPPORT = false;
        try {
          var object = {};
          object[ITERATOR] = function() {
            return {
              next: function() {
                return { done: ITERATION_SUPPORT = true };
              }
            };
          };
          exec(object);
        } catch (error) {
        }
        return ITERATION_SUPPORT;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array-buffer-view-core.js
  var require_array_buffer_view_core = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array\
-buffer-view-core.js"(exports, module2) {
      "use strict";
      var NATIVE_ARRAY_BUFFER = require_array_buffer_native();
      var DESCRIPTORS = require_descriptors();
      var global2 = require_global();
      var isObject2 = require_is_object();
      var has = require_has();
      var classof = require_classof();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var defineProperty = require_object_define_property().f;
      var getPrototypeOf = require_object_get_prototype_of();
      var setPrototypeOf = require_object_set_prototype_of();
      var wellKnownSymbol = require_well_known_symbol();
      var uid = require_uid();
      var Int8Array = global2.Int8Array;
      var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
      var Uint8ClampedArray = global2.Uint8ClampedArray;
      var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
      var TypedArray = Int8Array && getPrototypeOf(Int8Array);
      var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
      var ObjectPrototype = Object.prototype;
      var isPrototypeOf = ObjectPrototype.isPrototypeOf;
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
      var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf &&
      classof(global2.opera) !== "Opera";
      var TYPED_ARRAY_TAG_REQIRED = false;
      var NAME;
      var TypedArrayConstructorsList = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
      };
      var isView = function isView2(it) {
        var klass = classof(it);
        return klass === "DataView" || has(TypedArrayConstructorsList, klass);
      };
      var isTypedArray = function(it) {
        return isObject2(it) && has(TypedArrayConstructorsList, classof(it));
      };
      var aTypedArray = function(it) {
        if (isTypedArray(it))
          return it;
        throw TypeError("Target is not a typed array");
      };
      var aTypedArrayConstructor = function(C) {
        if (setPrototypeOf) {
          if (isPrototypeOf.call(TypedArray, C))
            return C;
        } else
          for (var ARRAY in TypedArrayConstructorsList)
            if (has(TypedArrayConstructorsList, NAME)) {
              var TypedArrayConstructor = global2[ARRAY];
              if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.
              call(TypedArrayConstructor, C))) {
                return C;
              }
            }
        throw TypeError("Target is not a typed array constructor");
      };
      var exportTypedArrayMethod = function(KEY, property, forced) {
        if (!DESCRIPTORS)
          return;
        if (forced)
          for (var ARRAY in TypedArrayConstructorsList) {
            var TypedArrayConstructor = global2[ARRAY];
            if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
              delete TypedArrayConstructor.prototype[KEY];
            }
          }
        if (!TypedArrayPrototype[KEY] || forced) {
          redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS &&
          Int8ArrayPrototype[KEY] || property);
        }
      };
      var exportTypedArrayStaticMethod = function(KEY, property, forced) {
        var ARRAY, TypedArrayConstructor;
        if (!DESCRIPTORS)
          return;
        if (setPrototypeOf) {
          if (forced)
            for (ARRAY in TypedArrayConstructorsList) {
              TypedArrayConstructor = global2[ARRAY];
              if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
                delete TypedArrayConstructor[KEY];
              }
            }
          if (!TypedArray[KEY] || forced) {
            try {
              return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS &&
              Int8Array[KEY] || property);
            } catch (error) {
            }
          } else
            return;
        }
        for (ARRAY in TypedArrayConstructorsList) {
          TypedArrayConstructor = global2[ARRAY];
          if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
            redefine(TypedArrayConstructor, KEY, property);
          }
        }
      };
      for (NAME in TypedArrayConstructorsList) {
        if (!global2[NAME])
          NATIVE_ARRAY_BUFFER_VIEWS = false;
      }
      if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != "function" || TypedArray ===
      Function.prototype) {
        TypedArray = function TypedArray2() {
          throw TypeError("Incorrect invocation");
        };
        if (NATIVE_ARRAY_BUFFER_VIEWS)
          for (NAME in TypedArrayConstructorsList) {
            if (global2[NAME])
              setPrototypeOf(global2[NAME], TypedArray);
          }
      }
      if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype ===
      ObjectPrototype) {
        TypedArrayPrototype = TypedArray.prototype;
        if (NATIVE_ARRAY_BUFFER_VIEWS)
          for (NAME in TypedArrayConstructorsList) {
            if (global2[NAME])
              setPrototypeOf(global2[NAME].prototype, TypedArrayPrototype);
          }
      }
      if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !==
      TypedArrayPrototype) {
        setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
      }
      if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
        TYPED_ARRAY_TAG_REQIRED = true;
        defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function() {
          return isObject2(this) ? this[TYPED_ARRAY_TAG] : void 0;
        } });
        for (NAME in TypedArrayConstructorsList)
          if (global2[NAME]) {
            createNonEnumerableProperty(global2[NAME], TYPED_ARRAY_TAG, NAME);
          }
      }
      module2.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS,
        TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
        aTypedArray,
        aTypedArrayConstructor,
        exportTypedArrayMethod,
        exportTypedArrayStaticMethod,
        isView,
        isTypedArray,
        TypedArray,
        TypedArrayPrototype
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/typed-array-constructors-require-wrappers.js
  var require_typed_array_constructors_require_wrappers = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/typed\
-array-constructors-require-wrappers.js"(exports, module2) {
      var global2 = require_global();
      var fails = require_fails();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var NATIVE_ARRAY_BUFFER_VIEWS = require_array_buffer_view_core().NATIVE_ARRAY_BUFFER_VIEWS;
      var ArrayBuffer2 = global2.ArrayBuffer;
      var Int8Array = global2.Int8Array;
      module2.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function() {
        Int8Array(1);
      }) || !fails(function() {
        new Int8Array(-1);
      }) || !checkCorrectnessOfIteration(function(iterable) {
        new Int8Array();
        new Int8Array(null);
        new Int8Array(1.5);
        new Int8Array(iterable);
      }, true) || fails(function() {
        return new Int8Array(new ArrayBuffer2(2), 1, void 0).length !== 1;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-positive-integer.js
  var require_to_positive_integer = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-po\
sitive-integer.js"(exports, module2) {
      var toInteger = require_to_integer();
      module2.exports = function(it) {
        var result = toInteger(it);
        if (result < 0)
          throw RangeError("The argument can't be less than 0");
        return result;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-offset.js
  var require_to_offset = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/to-of\
fset.js"(exports, module2) {
      var toPositiveInteger = require_to_positive_integer();
      module2.exports = function(it, BYTES) {
        var offset = toPositiveInteger(it);
        if (offset % BYTES)
          throw RangeError("Wrong offset");
        return offset;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/typed-array-from.js
  var require_typed_array_from = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/typed\
-array-from.js"(exports, module2) {
      var toObject = require_to_object();
      var toLength = require_to_length();
      var getIteratorMethod = require_get_iterator_method();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var bind = require_function_bind_context();
      var aTypedArrayConstructor = require_array_buffer_view_core().aTypedArrayConstructor;
      module2.exports = function from(source) {
        var O = toObject(source);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var mapping = mapfn !== void 0;
        var iteratorMethod = getIteratorMethod(O);
        var i, length, result, step, iterator, next;
        if (iteratorMethod != void 0 && !isArrayIteratorMethod(iteratorMethod)) {
          iterator = iteratorMethod.call(O);
          next = iterator.next;
          O = [];
          while (!(step = next.call(iterator)).done) {
            O.push(step.value);
          }
        }
        if (mapping && argumentsLength > 2) {
          mapfn = bind(mapfn, arguments[2], 2);
        }
        length = toLength(O.length);
        result = new (aTypedArrayConstructor(this))(length);
        for (i = 0; length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }
        return result;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array-iteration.js
  var require_array_iteration = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/array\
-iteration.js"(exports, module2) {
      var bind = require_function_bind_context();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var arraySpeciesCreate = require_array_species_create();
      var push = [].push;
      var createMethod = function(TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function($this, callbackfn, that2, specificCreate) {
          var O = toObject($this);
          var self2 = IndexedObject(O);
          var boundFunction = bind(callbackfn, that2, 3);
          var length = toLength(self2.length);
          var index = 0;
          var create = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this,
          0) : void 0;
          var value, result;
          for (; length > index; index++)
            if (NO_HOLES || index in self2) {
              value = self2[index];
              result = boundFunction(value, index, O);
              if (TYPE) {
                if (IS_MAP)
                  target[index] = result;
                else if (result)
                  switch (TYPE) {
                    case 3:
                      return true;
                    case 5:
                      return value;
                    case 6:
                      return index;
                    case 2:
                      push.call(target, value);
                  }
                else if (IS_EVERY)
                  return false;
              }
            }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };
      module2.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6)
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/inherit-if-required.js
  var require_inherit_if_required = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/inher\
it-if-required.js"(exports, module2) {
      var isObject2 = require_is_object();
      var setPrototypeOf = require_object_set_prototype_of();
      module2.exports = function($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if (
          // it can work only with native `setPrototypeOf`
          setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
          typeof (NewTarget = dummy.constructor) == "function" && NewTarget !== Wrapper &&
          isObject2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !==
          Wrapper.prototype
        )
          setPrototypeOf($this, NewTargetPrototype);
        return $this;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/typed-array-constructor.js
  var require_typed_array_constructor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/internals/typed\
-array-constructor.js"(exports, module2) {
      "use strict";
      var $ = require_export();
      var global2 = require_global();
      var DESCRIPTORS = require_descriptors();
      var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require_typed_array_constructors_require_wrappers();
      var ArrayBufferViewCore = require_array_buffer_view_core();
      var ArrayBufferModule = require_array_buffer();
      var anInstance = require_an_instance();
      var createPropertyDescriptor = require_create_property_descriptor();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var toLength = require_to_length();
      var toIndex = require_to_index();
      var toOffset = require_to_offset();
      var toPrimitive = require_to_primitive();
      var has = require_has();
      var classof = require_classof();
      var isObject2 = require_is_object();
      var create = require_object_create();
      var setPrototypeOf = require_object_set_prototype_of();
      var getOwnPropertyNames = require_object_get_own_property_names().f;
      var typedArrayFrom = require_typed_array_from();
      var forEach = require_array_iteration().forEach;
      var setSpecies = require_set_species();
      var definePropertyModule = require_object_define_property();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var InternalStateModule = require_internal_state();
      var inheritIfRequired = require_inherit_if_required();
      var getInternalState = InternalStateModule.get;
      var setInternalState = InternalStateModule.set;
      var nativeDefineProperty = definePropertyModule.f;
      var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var round = Math.round;
      var RangeError2 = global2.RangeError;
      var ArrayBuffer2 = ArrayBufferModule.ArrayBuffer;
      var DataView2 = ArrayBufferModule.DataView;
      var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
      var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
      var TypedArray = ArrayBufferViewCore.TypedArray;
      var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
      var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
      var isTypedArray = ArrayBufferViewCore.isTypedArray;
      var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
      var WRONG_LENGTH = "Wrong length";
      var fromList = function(C, list) {
        var index = 0;
        var length = list.length;
        var result = new (aTypedArrayConstructor(C))(length);
        while (length > index)
          result[index] = list[index++];
        return result;
      };
      var addGetter = function(it, key) {
        nativeDefineProperty(it, key, { get: function() {
          return getInternalState(this)[key];
        } });
      };
      var isArrayBuffer = function(it) {
        var klass;
        return it instanceof ArrayBuffer2 || (klass = classof(it)) == "ArrayBuff\
er" || klass == "SharedArrayBuffer";
      };
      var isTypedArrayIndex = function(target, key) {
        return isTypedArray(target) && typeof key != "symbol" && key in target &&
        String(+key) == String(key);
      };
      var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
        return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(
        2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
      };
      var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
        if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject2(
        descriptor) && has(descriptor, "value") && !has(descriptor, "get") && !has(
        descriptor, "set") && !descriptor.configurable && (!has(descriptor, "wri\
table") || descriptor.writable) && (!has(descriptor, "enumerable") || descriptor.
        enumerable)) {
          target[key] = descriptor.value;
          return target;
        }
        return nativeDefineProperty(target, key, descriptor);
      };
      if (DESCRIPTORS) {
        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
          getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
          definePropertyModule.f = wrappedDefineProperty;
          addGetter(TypedArrayPrototype, "buffer");
          addGetter(TypedArrayPrototype, "byteOffset");
          addGetter(TypedArrayPrototype, "byteLength");
          addGetter(TypedArrayPrototype, "length");
        }
        $({ target: "Object", stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
          getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
          defineProperty: wrappedDefineProperty
        });
        module2.exports = function(TYPE, wrapper, CLAMPED) {
          var BYTES = TYPE.match(/\d+$/)[0] / 8;
          var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? "Clamped" : "") + "Array";
          var GETTER = "get" + TYPE;
          var SETTER = "set" + TYPE;
          var NativeTypedArrayConstructor = global2[CONSTRUCTOR_NAME];
          var TypedArrayConstructor = NativeTypedArrayConstructor;
          var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.
          prototype;
          var exported = {};
          var getter = function(that2, index) {
            var data = getInternalState(that2);
            return data.view[GETTER](index * BYTES + data.byteOffset, true);
          };
          var setter = function(that2, index, value) {
            var data = getInternalState(that2);
            if (CLAMPED)
              value = (value = round(value)) < 0 ? 0 : value > 255 ? 255 : value &
              255;
            data.view[SETTER](index * BYTES + data.byteOffset, value, true);
          };
          var addElement = function(that2, index) {
            nativeDefineProperty(that2, index, {
              get: function() {
                return getter(this, index);
              },
              set: function(value) {
                return setter(this, index, value);
              },
              enumerable: true
            });
          };
          if (!NATIVE_ARRAY_BUFFER_VIEWS) {
            TypedArrayConstructor = wrapper(function(that2, data, offset, $length) {
              anInstance(that2, TypedArrayConstructor, CONSTRUCTOR_NAME);
              var index = 0;
              var byteOffset = 0;
              var buffer, byteLength, length;
              if (!isObject2(data)) {
                length = toIndex(data);
                byteLength = length * BYTES;
                buffer = new ArrayBuffer2(byteLength);
              } else if (isArrayBuffer(data)) {
                buffer = data;
                byteOffset = toOffset(offset, BYTES);
                var $len = data.byteLength;
                if ($length === void 0) {
                  if ($len % BYTES)
                    throw RangeError2(WRONG_LENGTH);
                  byteLength = $len - byteOffset;
                  if (byteLength < 0)
                    throw RangeError2(WRONG_LENGTH);
                } else {
                  byteLength = toLength($length) * BYTES;
                  if (byteLength + byteOffset > $len)
                    throw RangeError2(WRONG_LENGTH);
                }
                length = byteLength / BYTES;
              } else if (isTypedArray(data)) {
                return fromList(TypedArrayConstructor, data);
              } else {
                return typedArrayFrom.call(TypedArrayConstructor, data);
              }
              setInternalState(that2, {
                buffer,
                byteOffset,
                byteLength,
                length,
                view: new DataView2(buffer)
              });
              while (index < length)
                addElement(that2, index++);
            });
            if (setPrototypeOf)
              setPrototypeOf(TypedArrayConstructor, TypedArray);
            TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(
            TypedArrayPrototype);
          } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
            TypedArrayConstructor = wrapper(function(dummy, data, typedArrayOffset, $length) {
              anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
              return inheritIfRequired(function() {
                if (!isObject2(data))
                  return new NativeTypedArrayConstructor(toIndex(data));
                if (isArrayBuffer(data))
                  return $length !== void 0 ? new NativeTypedArrayConstructor(data,
                  toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !==
                  void 0 ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset,
                  BYTES)) : new NativeTypedArrayConstructor(data);
                if (isTypedArray(data))
                  return fromList(TypedArrayConstructor, data);
                return typedArrayFrom.call(TypedArrayConstructor, data);
              }(), dummy, TypedArrayConstructor);
            });
            if (setPrototypeOf)
              setPrototypeOf(TypedArrayConstructor, TypedArray);
            forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function(key) {
              if (!(key in TypedArrayConstructor)) {
                createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
              }
            });
            TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
          }
          if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
            createNonEnumerableProperty(TypedArrayConstructorPrototype, "constru\
ctor", TypedArrayConstructor);
          }
          if (TYPED_ARRAY_TAG) {
            createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG,
            CONSTRUCTOR_NAME);
          }
          exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
          $({
            global: true,
            forced: TypedArrayConstructor != NativeTypedArrayConstructor,
            sham: !NATIVE_ARRAY_BUFFER_VIEWS
          }, exported);
          if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
            createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT,
            BYTES);
          }
          if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
            createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT,
            BYTES);
          }
          setSpecies(CONSTRUCTOR_NAME);
        };
      } else
        module2.exports = function() {
        };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.float32-array.js
  var require_es_typed_array_float32_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.float32-array.js"() {
      var createTypedArrayConstructor = require_typed_array_constructor();
      createTypedArrayConstructor("Float32", function(init) {
        return function Float32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.float64-array.js
  var require_es_typed_array_float64_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.float64-array.js"() {
      var createTypedArrayConstructor = require_typed_array_constructor();
      createTypedArrayConstructor("Float64", function(init) {
        return function Float64Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.int8-array.js
  var require_es_typed_array_int8_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.int8-array.js"() {
      var createTypedArrayConstructor = require_typed_array_constructor();
      createTypedArrayConstructor("Int8", function(init) {
        return function Int8Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.int16-array.js
  var require_es_typed_array_int16_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.int16-array.js"() {
      var createTypedArrayConstructor = require_typed_array_constructor();
      createTypedArrayConstructor("Int16", function(init) {
        return function Int16Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.int32-array.js
  var require_es_typed_array_int32_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.int32-array.js"() {
      var createTypedArrayConstructor = require_typed_array_constructor();
      createTypedArrayConstructor("Int32", function(init) {
        return function Int32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.uint8-array.js
  var require_es_typed_array_uint8_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.uint8-array.js"() {
      var createTypedArrayConstructor = require_typed_array_constructor();
      createTypedArrayConstructor("Uint8", function(init) {
        return function Uint8Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js
  var require_es_typed_array_uint8_clamped_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.uint8-clamped-array.js"() {
      var createTypedArrayConstructor = require_typed_array_constructor();
      createTypedArrayConstructor("Uint8", function(init) {
        return function Uint8ClampedArray(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      }, true);
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.uint16-array.js
  var require_es_typed_array_uint16_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.uint16-array.js"() {
      var createTypedArrayConstructor = require_typed_array_constructor();
      createTypedArrayConstructor("Uint16", function(init) {
        return function Uint16Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.uint32-array.js
  var require_es_typed_array_uint32_array = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.uint32-array.js"() {
      var createTypedArrayConstructor = require_typed_array_constructor();
      createTypedArrayConstructor("Uint32", function(init) {
        return function Uint32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.from.js
  var require_es_typed_array_from = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.from.js"() {
      "use strict";
      var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require_typed_array_constructors_require_wrappers();
      var exportTypedArrayStaticMethod = require_array_buffer_view_core().exportTypedArrayStaticMethod;
      var typedArrayFrom = require_typed_array_from();
      exportTypedArrayStaticMethod("from", typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);
    }
  });

  // ../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.typed-array.of.js
  var require_es_typed_array_of = __commonJS({
    "../../node_modules/.pnpm/core-js@3.6.4/node_modules/core-js/modules/es.type\
d-array.of.js"() {
      "use strict";
      var ArrayBufferViewCore = require_array_buffer_view_core();
      var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require_typed_array_constructors_require_wrappers();
      var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
      var exportTypedArrayStaticMethod = ArrayBufferViewCore.exportTypedArrayStaticMethod;
      exportTypedArrayStaticMethod("of", function of() {
        var index = 0;
        var length = arguments.length;
        var result = new (aTypedArrayConstructor(this))(length);
        while (length > index)
          result[index] = arguments[index++];
        return result;
      }, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);
    }
  });

  // ../lynx-promise/src/core.js
  var require_core = __commonJS({
    "../lynx-promise/src/core.js"(exports, module2) {
      "use strict";
      function noop2() {
      }
      var LAST_ERROR = null;
      var IS_ERROR = {};
      function getThen(obj) {
        try {
          return obj.then;
        } catch (ex) {
          LAST_ERROR = ex;
          return IS_ERROR;
        }
      }
      function tryCallOne(fn, a) {
        try {
          return fn(a);
        } catch (ex) {
          LAST_ERROR = ex;
          return IS_ERROR;
        }
      }
      function tryCallTwo(fn, a, b) {
        try {
          fn(a, b);
        } catch (ex) {
          LAST_ERROR = ex;
          return IS_ERROR;
        }
      }
      function trimStack(stack) {
        if (!stack) {
          return "";
        }
        const index = stack.indexOf("\n");
        if (index === -1) {
          return stack;
        }
        return stack.substring(index + 1);
      }
      module2.exports = (opt) => {
        var nextTick = opt.nextTick;
        function Promise2(fn) {
          this.__createStack = trimStack(new Error("Promise creation stack").stack);
          if (typeof this !== "object") {
            throw new TypeError("Promises must be constructed via new");
          }
          if (typeof fn !== "function") {
            throw new TypeError("Promise constructor's argument is not a functio\
n");
          }
          this._deferredState = 0;
          this._state = 0;
          this._value = null;
          this._deferreds = null;
          if (fn === noop2)
            return;
          doResolve(fn, this);
        }
        Promise2._onHandle = null;
        Promise2._onReject = null;
        Promise2._noop = noop2;
        Promise2.prototype.then = function(onFulfilled, onRejected) {
          if (this.constructor !== Promise2) {
            return safeThen(this, onFulfilled, onRejected);
          }
          var res = new Promise2(noop2);
          handle(this, new Handler(onFulfilled, onRejected, res));
          return res;
        };
        function safeThen(self2, onFulfilled, onRejected) {
          return new self2.constructor(function(resolve2, reject2) {
            var res = new Promise2(noop2);
            res.then(resolve2, reject2);
            handle(self2, new Handler(onFulfilled, onRejected, res));
          });
        }
        function handle(self2, deferred) {
          while (self2._state === 3) {
            self2 = self2._value;
          }
          if (Promise2._onHandle) {
            Promise2._onHandle(self2);
          }
          if (self2._state === 0) {
            if (self2._deferredState === 0) {
              self2._deferredState = 1;
              self2._deferreds = deferred;
              return;
            }
            if (self2._deferredState === 1) {
              self2._deferredState = 2;
              self2._deferreds = [self2._deferreds, deferred];
              return;
            }
            self2._deferreds.push(deferred);
            return;
          }
          handleResolved(self2, deferred);
        }
        function handleResolved(self2, deferred) {
          nextTick(function() {
            var cb = self2._state === 1 ? deferred.onFulfilled : deferred.onRejected;
            if (cb === null) {
              if (self2._state === 1) {
                resolve(deferred.promise, self2._value);
              } else {
                reject(deferred.promise, self2._value);
              }
              return;
            }
            var ret = tryCallOne(cb, self2._value);
            if (ret === IS_ERROR) {
              reject(deferred.promise, LAST_ERROR);
            } else {
              resolve(deferred.promise, ret);
            }
          });
        }
        function resolve(self2, newValue) {
          if (newValue === self2) {
            return reject(self2, new TypeError("A promise cannot be resolved wit\
h itself."));
          }
          if (newValue && (typeof newValue === "object" || typeof newValue === "\
function")) {
            var then = getThen(newValue);
            if (then === IS_ERROR) {
              return reject(self2, LAST_ERROR);
            }
            if (then === self2.then && newValue instanceof Promise2) {
              self2._state = 3;
              self2._value = newValue;
              finale(self2);
              return;
            } else if (typeof then === "function") {
              doResolve(then.bind(newValue), self2);
              return;
            }
          }
          self2._state = 1;
          self2._value = newValue;
          finale(self2);
        }
        function reject(self2, newValue) {
          self2._state = 2;
          self2._value = newValue;
          if (Promise2._onReject) {
            Promise2._onReject(self2, newValue);
          }
          finale(self2);
        }
        function finale(self2) {
          if (self2._deferredState === 1) {
            handle(self2, self2._deferreds);
            self2._deferreds = null;
          }
          if (self2._deferredState === 2) {
            for (var i = 0; i < self2._deferreds.length; i++) {
              handle(self2, self2._deferreds[i]);
            }
            self2._deferreds = null;
          }
        }
        function Handler(onFulfilled, onRejected, promise) {
          this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
          this.onRejected = typeof onRejected === "function" ? onRejected : null;
          this.promise = promise;
        }
        function doResolve(fn, promise) {
          var done = false;
          var res = tryCallTwo(
            fn,
            function(value) {
              if (done)
                return;
              done = true;
              resolve(promise, value);
            },
            function(reason) {
              if (done)
                return;
              done = true;
              reject(promise, reason);
            }
          );
          if (!done && res === IS_ERROR) {
            done = true;
            reject(promise, LAST_ERROR);
          }
        }
        return Promise2;
      };
    }
  });

  // ../lynx-promise/src/es6-extensions.js
  var require_es6_extensions = __commonJS({
    "../lynx-promise/src/es6-extensions.js"(exports, module2) {
      "use strict";
      module2.exports = (Promise2) => {
        var TRUE = valuePromise(true);
        var FALSE = valuePromise(false);
        var NULL = valuePromise(null);
        var UNDEFINED = valuePromise(void 0);
        var ZERO = valuePromise(0);
        var EMPTYSTRING = valuePromise("");
        function valuePromise(value) {
          var p = new Promise2(Promise2._noop);
          p._state = 1;
          p._value = value;
          return p;
        }
        Promise2.resolve = function(value) {
          if (value instanceof Promise2)
            return value;
          if (value === null)
            return NULL;
          if (value === void 0)
            return UNDEFINED;
          if (value === true)
            return TRUE;
          if (value === false)
            return FALSE;
          if (value === 0)
            return ZERO;
          if (value === "")
            return EMPTYSTRING;
          if (typeof value === "object" || typeof value === "function") {
            try {
              var then = value.then;
              if (typeof then === "function") {
                return new Promise2(then.bind(value));
              }
            } catch (ex) {
              return new Promise2(function(resolve, reject) {
                reject(ex);
              });
            }
          }
          return valuePromise(value);
        };
        var iterableToArray = function(iterable) {
          if (typeof Array.from === "function") {
            iterableToArray = Array.from;
            return Array.from(iterable);
          }
          iterableToArray = function(x) {
            return Array.prototype.slice.call(x);
          };
          return Array.prototype.slice.call(iterable);
        };
        Promise2.all = function(arr) {
          var args = iterableToArray(arr);
          return new Promise2(function(resolve, reject) {
            if (args.length === 0)
              return resolve([]);
            var remaining = args.length;
            function res(i2, val) {
              if (val && (typeof val === "object" || typeof val === "function")) {
                if (val instanceof Promise2 && val.then === Promise2.prototype.then) {
                  while (val._state === 3) {
                    val = val._value;
                  }
                  if (val._state === 1)
                    return res(i2, val._value);
                  if (val._state === 2)
                    reject(val._value);
                  val.then(function(val2) {
                    res(i2, val2);
                  }, reject);
                  return;
                } else {
                  var then = val.then;
                  if (typeof then === "function") {
                    var p = new Promise2(then.bind(val));
                    p.then(function(val2) {
                      res(i2, val2);
                    }, reject);
                    return;
                  }
                }
              }
              args[i2] = val;
              if (--remaining === 0) {
                resolve(args);
              }
            }
            for (var i = 0; i < args.length; i++) {
              res(i, args[i]);
            }
          });
        };
        Promise2.reject = function(value) {
          return new Promise2(function(resolve, reject) {
            reject(value);
          });
        };
        Promise2.race = function(values) {
          return new Promise2(function(resolve, reject) {
            iterableToArray(values).forEach(function(value) {
              Promise2.resolve(value).then(resolve, reject);
            });
          });
        };
        Promise2.prototype["catch"] = function(onRejected) {
          return this.then(null, onRejected);
        };
        Promise2.prototype.done = function(onFulfilled, onRejected) {
          var self2 = arguments.length ? this.then.apply(this, arguments) : this;
          self2.then(null, function(err) {
            setTimeout(function() {
              throw err;
            }, 0);
          });
        };
        Promise2.prototype.finally = function(f) {
          return this.then(
            function(value) {
              return Promise2.resolve(f()).then(function() {
                return value;
              });
            },
            function(err) {
              return Promise2.resolve(f()).then(function() {
                throw err;
              });
            }
          );
        };
        return Promise2;
      };
    }
  });

  // ../lynx-promise/src/rejection-tracking.js
  var require_rejection_tracking = __commonJS({
    "../lynx-promise/src/rejection-tracking.js"(exports, module2) {
      "use strict";
      module2.exports = (Promise2, setTimeout2, clearTimeout) => {
        var DEFAULT_WHITELIST = [ReferenceError, TypeError, RangeError];
        var enabled = false;
        function disable() {
          enabled = false;
          Promise2._onHandle = null;
          Promise2._onReject = null;
        }
        function enable(options) {
          options = options || {};
          if (enabled)
            disable();
          enabled = true;
          var id = 0;
          var displayId = 0;
          var rejections = {};
          Promise2._onHandle = function(promise) {
            if (promise._state === 2 && // IS REJECTED
            rejections[promise._rejectionId]) {
              if (rejections[promise._rejectionId].logged) {
                onHandled(promise._rejectionId);
              } else {
                clearTimeout && clearTimeout(rejections[promise._rejectionId].timeout);
              }
              delete rejections[promise._rejectionId];
            }
          };
          Promise2._onReject = function(promise, err) {
            if (promise._deferredState === 0) {
              promise._rejectionId = id++;
              rejections[promise._rejectionId] = {
                displayId: null,
                error: err,
                timeout: setTimeout2(
                  onUnhandled.bind(null, promise),
                  0
                ),
                logged: false
              };
            }
          };
          function onUnhandled(promise) {
            const id2 = promise._rejectionId;
            if (options.allRejections || matchWhitelist(rejections[id2].error, options.
            whitelist || DEFAULT_WHITELIST)) {
              rejections[id2].displayId = displayId++;
              if (options.onUnhandled) {
                rejections[id2].logged = true;
                if (rejections[id2].error && !(rejections[id2].error instanceof Error)) {
                  const error = new Error(JSON.stringify(rejections[id2].error));
                  error.stack = promise.__createStack;
                  rejections[id2].error = error;
                }
                options.onUnhandled(rejections[id2].displayId, rejections[id2].error);
              } else {
                rejections[id2].logged = true;
                logError(rejections[id2].displayId, rejections[id2].error);
              }
            }
          }
          function onHandled(id2) {
            if (rejections[id2].logged) {
              if (options.onHandled) {
                options.onHandled(rejections[id2].displayId, rejections[id2].error);
              } else if (!rejections[id2].onUnhandled) {
                console.warn("Promise Rejection Handled (id: " + rejections[id2].
                displayId + "):");
                console.warn(
                  '  This means you can ignore any previous messages of the form\
 "Possible Unhandled Promise Rejection" with id ' + rejections[id2].displayId + "\
."
                );
              }
            }
          }
          return Promise2;
        }
        function logError(id, error) {
          console.warn("Possible Unhandled Promise Rejection (id: " + id + "):");
          var errStr = (error && (error.stack || error)) + "";
          errStr.split("\n").forEach(function(line) {
            console.warn("  " + line);
          });
        }
        function matchWhitelist(error, list) {
          return list.some(function(cls) {
            return error instanceof cls;
          });
        }
        return {
          enable,
          disable
        };
      };
    }
  });

  // ../lynx-promise/src/index.js
  var require_src = __commonJS({
    "../lynx-promise/src/index.js"(exports, module2) {
      "use strict";
      var promiseFactor = require_core();
      var es6 = require_es6_extensions();
      var rejectionHandle = require_rejection_tracking();
      var gg = new Function("return this")();
      gg.getPromise = module2.exports.getPromise = (opt) => {
        var setTimeout2 = opt.setTimeout;
        var onUnhandled = opt.onUnhandled;
        var clearTimeout = opt.clearTimeout;
        var nextTick = opt.nextTick || ((fn) => {
          setTimeout2(fn, 0);
        });
        var Promise2 = promiseFactor({ nextTick });
        Promise2 = es6(Promise2);
        Promise2 = rejectionHandle(Promise2, setTimeout2, clearTimeout).enable({
          allRejections: true,
          onUnhandled
        });
        return Promise2;
      };
    }
  });

  // ../../node_modules/.pnpm/regenerator-runtime@0.13.7/node_modules/regenerator-runtime/runtime.js
  var require_runtime = __commonJS({
    "../../node_modules/.pnpm/regenerator-runtime@0.13.7/node_modules/regenerato\
r-runtime/runtime.js"(exports, module2) {
      var runtime = function(exports2) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined2;
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }
        try {
          define({}, "");
        } catch (err) {
          define = function(obj, key, value) {
            return obj[key] = value;
          };
        }
        function wrap(innerFn, outerFn, self2, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ?
          outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);
          generator._invoke = makeInvokeMethod(innerFn, self2, context);
          return generator;
        }
        exports2.wrap = wrap;
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
          return this;
        };
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.
        call(NativeIteratorPrototype, iteratorSymbol)) {
          IteratorPrototype = NativeIteratorPrototype;
        }
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.
        create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(
          GeneratorFunctionPrototype,
          toStringTagSymbol,
          "GeneratorFunction"
        );
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function(method) {
            define(prototype, method, function(arg) {
              return this._invoke(method, arg);
            });
          });
        }
        exports2.isGeneratorFunction = function(genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports2.mark = function(genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };
        exports2.awrap = function(arg) {
          return { __await: arg };
        };
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (value && typeof value === "object" && hasOwn.call(value, "__aw\
ait")) {
                return PromiseImpl.resolve(value.__await).then(function(value2) {
                  invoke("next", value2, resolve, reject);
                }, function(err) {
                  invoke("throw", err, resolve, reject);
                });
              }
              return PromiseImpl.resolve(value).then(function(unwrapped) {
                result.value = unwrapped;
                resolve(result);
              }, function(error) {
                return invoke("throw", error, resolve, reject);
              });
            }
          }
          var previousPromise;
          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
          }
          this._invoke = enqueue;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
          return this;
        };
        exports2.AsyncIterator = AsyncIterator;
        exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0)
            PromiseImpl = Promise;
          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self2, tryLocsList),
            PromiseImpl
          );
          return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(
          function(result) {
            return result.done ? result.value : iter.next();
          });
        };
        function makeInvokeMethod(innerFn, self2, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }
            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }
              return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel)
                    continue;
                  return delegateResult;
                }
              }
              if (context.method === "next") {
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }
                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }
              state = GenStateExecuting;
              var record = tryCatch(innerFn, self2, context);
              if (record.type === "normal") {
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                if (record.arg === ContinueSentinel) {
                  continue;
                }
                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted;
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (method === undefined2) {
            context.delegate = null;
            if (context.method === "throw") {
              if (delegate.iterator["return"]) {
                context.method = "return";
                context.arg = undefined2;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") {
                  return ContinueSentinel;
                }
              }
              context.method = "throw";
              context.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              );
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }
          var info = record.arg;
          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined2;
            }
          } else {
            return info;
          }
          context.delegate = null;
          return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator");
        Gp[iteratorSymbol] = function() {
          return this;
        };
        Gp.toString = function() {
          return "[object Generator]";
        };
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          if (1 in locs) {
            entry.catchLoc = locs[1];
          }
          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }
          this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [{ tryLoc: "root" }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }
        exports2.keys = function(object) {
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();
          return function next() {
            while (keys.length) {
              var key2 = keys.pop();
              if (key2 in object) {
                next.value = key2;
                next.done = false;
                return next;
              }
            }
            next.done = true;
            return next;
          };
        };
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }
            if (typeof iterable.next === "function") {
              return iterable;
            }
            if (!isNaN(iterable.length)) {
              var i = -1, next = function next2() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next2.value = iterable[i];
                    next2.done = false;
                    return next2;
                  }
                }
                next2.value = undefined2;
                next2.done = true;
                return next2;
              };
              return next.next = next;
            }
          }
          return { next: doneResult };
        }
        exports2.values = values;
        function doneResult() {
          return { value: undefined2, done: true };
        }
        Context.prototype = {
          constructor: Context,
          reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined2;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined2;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
              for (var name in this) {
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(
                +name.slice(1))) {
                  this[name] = undefined2;
                }
              }
            }
          },
          stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }
            return this.rval;
          },
          dispatchException: function(exception) {
            if (this.done) {
              throw exception;
            }
            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;
              if (caught) {
                context.method = "next";
                context.arg = undefined2;
              }
              return !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;
              if (entry.tryLoc === "root") {
                return handle("end");
              }
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.
            tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              finallyEntry = null;
            }
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }
            return this.complete(record);
          },
          complete: function(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }
            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }
            return ContinueSentinel;
          },
          finish: function(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc
            };
            if (this.method === "next") {
              this.arg = undefined2;
            }
            return ContinueSentinel;
          }
        };
        return exports2;
      }(
        // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        typeof module2 === "object" ? module2.exports : {}
      );
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  });

  // ../lynx-polyfill/src/index.js
  require_es_symbol_description();
  require_es_symbol_async_iterator();
  require_es_symbol_match_all();
  require_es_array_flat();
  require_es_array_flat_map();
  require_es_array_reverse();
  require_es_array_sort();
  require_es_array_unscopables_flat();
  require_es_array_unscopables_flat_map();
  require_es_array_buffer_constructor();
  require_es_array_buffer_slice();
  require_es_global_this();
  require_es_json_stringify();
  require_es_object_from_entries();
  require_es_string_match_all();
  require_es_string_replace();
  require_es_string_trim();
  require_es_string_trim_end();
  require_es_string_trim_start();
  require_es_typed_array_float32_array();
  require_es_typed_array_float64_array();
  require_es_typed_array_int8_array();
  require_es_typed_array_int16_array();
  require_es_typed_array_int32_array();
  require_es_typed_array_uint8_array();
  require_es_typed_array_uint8_clamped_array();
  require_es_typed_array_uint16_array();
  require_es_typed_array_uint32_array();
  require_es_typed_array_from();
  require_es_typed_array_of();

  // src/index.build.ts
  var import_ios_polyfill_promise = __toESM(require_src(), 1);
  var import_runtime8 = __toESM(require_runtime(), 1);

  // ../lynx-runtime-shared/dist/nativeGlobal.js
  var _global = function() {
    return this || (0, eval)("this");
  }();
  var nativeGlobal_default = _global;

  // ../lynx-runtime-shared/dist/utils.js
  function getDataType(data) {
    const type = typeof data;
    if (type !== "object")
      return type;
    if (Array.isArray(data))
      return "array";
    if (data == null)
      return "null";
    if (data instanceof Date)
      return "date";
    if (data instanceof RegExp)
      return "regExp";
    return "object";
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isObject(val) {
    return getDataType(val) === "object";
  }
  function isFunction(obj) {
    const dataType = getDataType(obj);
    return dataType === "function";
  }
  function isError(o) {
    switch (Object.prototype.toString.call(o)) {
      case "[object Error]":
        return true;
      case "[object Exception]":
        return true;
      case "[object DOMException]":
        return true;
      default:
        return isInstanceOf(o, Error);
    }
  }
  function isInstanceOf(o, base) {
    try {
      return o instanceof base;
    } catch (_e) {
      return false;
    }
  }
  function noop() {
  }

  // src/modules/report/errors.ts
  var BaseError = class extends Error {
    constructor(message, stack) {
      super(message);
      if (stack) {
        this.stack = stack;
      }
    }
  };
  var InternalError = class extends BaseError {
    constructor() {
      super(...arguments);
      this.kind = "INTERNAL_ERROR";
    }
  };
  var UserError = class extends BaseError {
    constructor() {
      super(...arguments);
      this.kind = "USER_ERROR";
    }
  };
  var UserRuntimeError = class extends UserError {
    constructor() {
      super(...arguments);
      this.name = "USER_RUNTIME_ERROR";
    }
  };
  var InternalRuntimeError = class extends InternalError {
    constructor() {
      super(...arguments);
      this.name = "INTERNAL_RUNTIME_ERROR";
    }
  };
  var InvokeError = class extends InternalError {
    constructor() {
      super(...arguments);
      this.name = "INVOKE_ERROR";
    }
  };

  // src/common/constants.ts
  var DEFAULT_ENTRY = "__Card__";
  var APP_SERVICE_NAME = "app-service.js";
  var SOURCE_MAP_RELEASE_ERROR_NAME = "LynxGetSourceMapReleaseError";
  var LYNX_CORE = {
    filename: "lynx_core",
    slot: "e38c894467d1184df4a761b59d58d19984dc4c1e",
    release: "unknown_version"
  };

  // src/modules/sharedData/ShareDataSubject.ts
  var ShareDataSubject = class {
    constructor() {
      /**
       * @type {Observer[]} List of subscribers.
       *
       */
      this.observersFunc = [];
    }
    /**
     * The subscription management methods.
     */
    registerObserver(observer) {
      const isExist = this.observersFunc.includes(observer);
      if (isExist) {
        return nativeConsole.log("Subject: Observer has been attached already.");
      }
      this.observersFunc.push(observer);
    }
    removeObserver(observer) {
      const observerIndex = this.observersFunc.indexOf(observer);
      if (observerIndex === -1) {
        return nativeConsole.log("Subject: Nonexistent observer.");
      }
      this.observersFunc.splice(observerIndex, 1);
    }
    notifyDataChange(value) {
      this.observersFunc.forEach((toObserver) => {
        if (typeof toObserver === "function") {
          try {
            toObserver(value);
          } catch (error) {
            nativeConsole.log(
              "SharedData change and notifyDataChange error info:" + error
            );
          }
        }
      });
    }
  };

  // src/common/nativeGlobal.ts
  nativeGlobal_default.multiApps = {};
  nativeGlobal_default.currentAppId = "";
  nativeGlobal_default.globComponentRegistPath = "";
  nativeGlobal_default.sharedData = {};
  nativeGlobal_default.globDynamicComponentEntry = DEFAULT_ENTRY;
  nativeGlobal_default.shareDataSubject = new ShareDataSubject();
  nativeGlobal_default.TaroLynx = {};
  nativeGlobal_default.bundleSupportLoadScript = true;
  nativeGlobal_default.getNapiLoader = () => {
    return nativeGlobal_default.__lynxNapiLoader;
  };
  var { loadScript } = nativeGlobal_default;
  var nativeGlobal_default2 = nativeGlobal_default;

  // src/common/log.ts
  var isNativeConsoleHasALog;
  function alog(str) {
    if (true) {
      return;
    }
    if (isNativeConsoleHasALog === void 0) {
      isNativeConsoleHasALog = typeof nativeConsole.alog === "function";
    }
    if (isNativeConsoleHasALog) {
      nativeConsole.alog("[LynxJSSDK]" + str);
    }
  }

  // src/common/version.ts
  var numberRegExp = /\d+/;
  var Version = class _Version {
    // version: major.minor.revision.build
    constructor(version) {
      this.major = 0;
      this.minor = 0;
      this.revision = 0;
      this.build = 0;
      version = String(version);
      [
        this.major = 0,
        this.minor = 0,
        this.revision = 0,
        this.build = 0
      ] = version.split(".").map((v) => {
        const result = numberRegExp.exec(v);
        if (result && result.length > 0) {
          return +result[0];
        }
        return 0;
      });
    }
    /**
     * Greater Than
     * @param version the version to be compared
     * @returns this > version
     */
    gt(version) {
      if (typeof version === "string") {
        version = new _Version(version);
      }
      if (this.major > version.major) {
        return true;
      } else if (this.major < version.major) {
        return false;
      }
      if (this.minor > version.minor) {
        return true;
      } else if (this.minor < version.minor) {
        return false;
      }
      if (this.revision > version.revision) {
        return true;
      } else if (this.revision < version.revision) {
        return false;
      }
      if (this.build > version.build) {
        return true;
      } else if (this.build < version.build) {
        return false;
      }
      return false;
    }
    /**
     * EQual
     * @param version the version to be compared
     * @returns this == version
     */
    eq(version) {
      if (typeof version === "string") {
        version = new _Version(version);
      }
      return this.major === version.major && this.minor === version.minor && this.
      revision === version.revision && this.build === version.build;
    }
    /**
     * Less Than
     * @param version the version to be compared
     * @returns this < version
     */
    lt(version) {
      if (this.eq(version)) {
        return false;
      }
      return !this.gt(version);
    }
    /**
     * Greater Than or Equal
     * @param version the version to be compared
     * @returns this >= version
     */
    gte(version) {
      return this.eq(version) || this.gt(version);
    }
    /**
     * Less Than or Equal
     * @param version the version to be compared
     * @returns this <= version
     */
    lte(version) {
      return this.eq(version) || this.lt(version);
    }
  };
  var version2_4 = new Version("2.4");
  var version2_7 = new Version("2.7");
  var version2_9 = new Version("2.9");
  var version2_12 = new Version("2.12");
  var version2_14 = new Version("2.14");

  // src/modules/report/report-error.ts
  function reportError(error, nativeApp, options) {
    const { originError, errorCode, errorLevel, runType = LYNX_CORE } = options !=
    null ? options : {};
    nativeConsole.error("The following error occurred in the JSRuntime:");
    nativeConsole.error("".concat(error == null ? void 0 : error.message, "\n").
    concat(error == null ? void 0 : error.stack));
    error.cause = isObject(error.cause) ? JSON.stringify(error.cause) : error.cause;
    try {
      nativeApp.reportException(error, __spreadProps(__spreadValues({}, runType),
      {
        buildVersion: "unknown_version",
        versionCode: "unknown_version",
        errorCode,
        errorLevel
      }));
    } catch (error2) {
      nativeConsole.error("reportError err:\n", error2);
    }
  }
  function legacyReportError(error, nativeApp, runType = LYNX_CORE, originError, proxy) {
    return reportError(error, nativeApp, {
      runType,
      originError,
      __sourcemap__release__: proxy.__sourcemap__release__
    });
  }

  // src/modules/report/wrapper.ts
  function wrapUserFunction(desc, instance, callback, runType = LYNX_CORE) {
    if (!isFunction(callback))
      return noop;
    return wrapFunction("USER_ERROR", desc, callback, instance, runType);
  }
  function wrapFunction(errorKind = "INTERNAL_ERROR", desc, callback, instance, runType) {
    return function wrapFunctionInner(...args) {
      try {
        return callback.apply(this, args);
      } catch (error) {
        const message = "".concat(desc, " \n").concat(error.message);
        if (callback.name !== "onError" && typeof instance.onError === "function") {
          instance.onError(
            "Card ".concat(callback.name, " exec error:").concat(message, "\n").
            concat(error.stack),
            error
          );
        }
        const err = errorKind === "INTERNAL_ERROR" ? new InternalRuntimeError(message,
        error.stack) : new UserRuntimeError(message, error.stack);
        nativeConsole.log("wrapError-".concat(desc), err);
        reportError(err, instance._nativeApp, {
          runType,
          __sourcemap__release__: instance.__sourcemap__release__,
          getSourceMapRelease: instance.getSourceMapRelease
        });
      }
    };
  }
  function wrapInnerFunction(desc, instance, callback, runType = LYNX_CORE) {
    if (!isFunction(callback))
      return noop;
    return wrapFunction("INTERNAL_ERROR", desc, callback, instance, runType);
  }

  // src/modules/report/reporter.ts
  var Reporter = class {
    constructor(getApp, getNativeApp) {
      this.getApp = getApp;
      this.getNativeApp = getNativeApp;
      // /**
      //  * key url -> value sourcemap
      //  * support different sourcemap for external js
      //  */
      // sourcemaps: Record<string, string> = {};
      /**
       * Set sourcemap release with a newly thrown error
       * @param {Error} error
       * The error thrown from the file that wants to set sourcemap release.
       * The top frame of `error.stack` **must be** the filename.
       * The `error.name` **must be** `'LynxGetSourceMapReleaseError'`.
       * The `error.message` **must be** the sourcemap release.
       *
       * @example
       * (function () {
       *   try {
       *     throw new Error(sourcemapRelease);
       *   } catch (e) {
       *     e.name = 'LynxGetSourceMapReleaseError';
       *     tt.setSourceMapRelease(e);
       *   }
       * })()
       */
      this.setSourceMapRelease = (error) => {
        if (isError(error) && error.name === BaseApp.kGetSourceMapReleaseErrorName &&
        isString(error.message) && isString(error.stack)) {
          this.getNativeApp().__SetSourceMapRelease({
            name: error.name,
            message: error.message,
            stack: error.stack
          });
          return;
        }
        alog("setSourceMapRelease failed with error: ".concat(JSON.stringify(error)));
      };
      this.getSourceMapRelease = (url) => {
        let ret = this.getNativeApp().__GetSourceMapRelease(url);
        if (!ret) {
          ret = this.getNativeApp().__GetSourceMapRelease(
            BaseApp.kDefaultSourceMapURL
          );
        }
        return ret;
      };
      this.getApp = getApp;
      this.getNativeApp = getNativeApp;
    }
    rebind(getApp) {
      this.getApp = getApp;
    }
  };

  // src/modules/animation/animation.ts
  var _Animation = class _Animation {
    constructor(effect) {
      this.effect = effect;
      this.id = "__lynx-inner-js-animation-" + _Animation.count++;
    }
    cancel() {
      this.effect.target.cancelAnimate(this);
    }
    pause() {
      this.effect.target.pauseAnimate(this);
    }
    play() {
      this.effect.target.playAnimate(this);
    }
  };
  _Animation.count = 0;
  var Animation = _Animation;

  // src/modules/animation/effect.ts
  var KeyframeEffect = class {
    constructor(target, keyframes, options) {
      this.target = target;
      this.keyframes = keyframes;
      this.options = options;
    }
  };
  var KeyframeEffectV2 = class {
    constructor(keyframes, options) {
      this.keyframes = keyframes;
      this.options = options;
    }
  };

  // src/modules/animation/animationV2.ts
  var AnimationV2 = class {
    constructor(id, keyframes, options) {
      this.id = id;
      this.effect = new KeyframeEffectV2(keyframes, options);
    }
  };

  // src/modules/element/element.ts
  var Element = class {
    constructor(root, id, lynxProxy) {
      this._root = root;
      this._idSelector = "#" + id;
      this._lynx = lynxProxy;
      this._element = void 0;
    }
    ensureElement() {
      if (!this._element) {
        this._element = this._lynx.createElement(this._root, this._idSelector);
      }
    }
    // keyframes: see https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
    //  Either an array of keyframe objects, or a keyframe object whose property are arrays of values to iterate over. See Keyframe Formats for more details.
    //
    // timingOptions: see https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
    //  id Optional: A property unique to animate(): a DOMString with which to reference the animation.
    //  delay Optional: The number of milliseconds to delay the start of the animation. Defaults to 0.
    //  direction Optional: Whether the animation runs forwards (normal), backwards (reverse), switches direction after each iteration (alternate), or runs backwards and switches direction after each iteration (alternate-reverse). Defaults to "normal".
    //  duration Optional: The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.
    //  easing Optional: The rate of the animation's change over time. Accepts the pre-defined values "linear", "ease", "ease-in", "ease-out", and "ease-in-out", or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)". Defaults to "linear".
    //  endDelay Optional: The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0.
    //  fill Optional: Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none".
    //  iterationStart Optional: Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.
    // iterations Optional: The number of times the animation should repeat. Defaults to 1, and can also take a value of Infinity to make it repeat for as long as the element exists.
    animate(keyframes, timingOptions) {
      this.ensureElement();
      let ani = new Animation(new KeyframeEffect(this, keyframes, timingOptions));
      this._element.animate(0, ani.id, keyframes, timingOptions);
      return ani;
    }
    playAnimate(ani) {
      this._element.animate(1, ani.id, void 0, void 0);
    }
    pauseAnimate(ani) {
      this._element.animate(2, ani.id, void 0, void 0);
    }
    cancelAnimate(ani) {
      this._element.animate(3, ani.id, void 0, void 0);
    }
    finishAnimate(ani) {
      this._element.animate(4, ani.id, void 0, void 0);
    }
    setProperty(propsObj, propsVal) {
      this.ensureElement();
      if (typeof propsObj === "string" && typeof propsVal === "string") {
        this._element.setProperty({
          [propsObj]: propsVal
        });
      } else if (typeof propsObj === "object") {
        this._element.setProperty(propsObj);
      } else {
        throw new Error(
          "setProperty's param must be string or object. While current type is ".
          concat(typeof propsObj, " and ").concat(typeof propsVal, ".")
        );
      }
    }
  };

  // src/modules/element/index.ts
  var element_default = Element;

  // src/modules/fetch/TextDecoder.ts
  var TextDecoder = class {
    constructor() {
    }
    decode(buffer) {
      if (buffer.byteLength === 0) {
        return "";
      }
      if (buffer instanceof DataView) {
        buffer = buffer.buffer.slice(
          buffer.byteOffset,
          buffer.byteOffset + buffer.byteLength
        );
      } else if (ArrayBuffer.isView(buffer)) {
        buffer = buffer.buffer;
      }
      return globalThis.TextCodecHelper.decode(buffer);
    }
    encodeInto() {
      throw TypeError("TextEncoder().encodeInto not supported");
    }
    get encoding() {
      return "utf-8";
    }
    get fatal() {
      return false;
    }
    get ignoreBOM() {
      return true;
    }
  };

  // src/modules/fetch/TextEncoder.ts
  var TextEncoder = class {
    constructor() {
    }
    encode(str) {
      return new Uint8Array(globalThis.TextCodecHelper.encode(str));
    }
    encodeInto() {
      throw TypeError("TextEncoder().encodeInto not supported");
    }
    get encoding() {
      return "utf-8";
    }
  };

  // src/modules/event/eventEmitter.ts
  var EventEmitter = class {
    constructor(callLynxSetModule) {
      this._internal_callLynxSetModule = callLynxSetModule;
      this._events = /* @__PURE__ */ new Map();
    }
    getEventsSize(eventType) {
      var _a3;
      return (_a3 = this._events.get(eventType)) == null ? void 0 : _a3.length;
    }
    setCallLynxSetModule(callLynxSetModule) {
      this._internal_callLynxSetModule = callLynxSetModule;
    }
    addListener(eventName, listener, context) {
      const event = this._events.get(eventName);
      if (eventName == "keyboardstatuschanged") {
        if (this._internal_callLynxSetModule) {
          this._internal_callLynxSetModule("switchKeyBoardDetect", [true]);
        }
      }
      if (event) {
        event.push({
          listener,
          context
        });
      } else {
        this._events.set(eventName, [
          {
            listener,
            context
          }
        ]);
      }
    }
    removeListener(eventName, listener) {
      if (typeof listener !== "function") {
        throw new Error("removeListener only takes instances of Function");
      }
      const events = this._events.get(eventName);
      let index = 0;
      if (Array.isArray(events)) {
        const flag = events.some((item) => {
          if (listener === item.listener) {
            return true;
          }
          index++;
        });
        flag && events.splice(index, 1);
      }
      if (eventName == "keyboardstatuschanged") {
        if (this._internal_callLynxSetModule) {
          this._internal_callLynxSetModule("switchKeyBoardDetect", [false]);
        }
      }
    }
    emit(eventName, data) {
      const events = this._events.get(eventName);
      if (Array.isArray(events)) {
        events.forEach((item) => {
          const { listener, context } = item;
          if (typeof listener === "function") {
            listener.apply(context || this, data);
          }
        });
      }
    }
    removeAllListeners(eventName) {
      if (typeof eventName === "string") {
        this._events.delete(eventName);
        return;
      }
      this._events = /* @__PURE__ */ new Map();
    }
    trigger(eventName, params2) {
      const events = this._events.get(eventName);
      if (Array.isArray(events)) {
        if (typeof params2 === "string") {
          params2 = JSON.parse(params2);
        }
        events.forEach((item) => {
          const { listener, context } = item;
          if (typeof listener === "function") {
            listener.call(context || this, params2);
          }
        });
      }
    }
    toggle(eventName, ...data) {
      this.emit(eventName, data);
    }
  };
  function createEventEmitter() {
    return new EventEmitter();
  }

  // src/modules/event/aop.ts
  var AopManager = class {
    constructor() {
      this._beforePublishEvent = new BeforePublishEvent();
    }
  };
  var BeforePublishEvent = class extends EventEmitter {
    add(eventName, callback, context) {
      super.addListener(eventName, callback, context);
      return this;
    }
    remove(eventName, callback) {
      super.removeListener(eventName, callback);
      return this;
    }
  };

  // src/modules/event/index.ts
  var event_default = EventEmitter;

  // src/modules/fetch/ReadableStream.ts
  var LynxReadableStream = class {
  };
  function resolvePromiseCtor(provider) {
    if (typeof provider === "function") {
      return provider;
    }
    return provider.getPromise();
  }
  function createReadableStreamClass(provider) {
    return class ReadableStream extends LynxReadableStream {
      constructor() {
        super();
        this.__Promise = resolvePromiseCtor(provider);
        this.__dataReceived = [];
        this.__done = false;
        this.__cancelled = false;
        this.__locked = false;
        this.__eventCenter = new event_default();
      }
      onData(data) {
        if (this.__cancelled) {
          return;
        }
        this.__dataReceived.push(data);
        this.__eventCenter.emit("waitSignal", null);
      }
      onEnd() {
        this.__done = true;
        this.__eventCenter.emit("waitSignal", null);
      }
      onError(error) {
        this.__error = new Error(error);
        this.__eventCenter.emit("waitSignal", null);
      }
      processRead(resolve, reject) {
        if (this.__error) {
          return reject(this.__error);
        }
        if (this.__cancelled || this.__done && this.__dataReceived.length == 0) {
          return resolve({ done: true, value: void 0 });
        }
        if (this.__dataReceived.length > 0) {
          const currData = this.__dataReceived.shift();
          return resolve({ done: false, value: currData });
        }
        const waitSignal = () => {
          this.__eventCenter.removeListener("waitSignal", waitSignal);
          this.processRead(resolve, reject);
        };
        this.__eventCenter.addListener("waitSignal", waitSignal, this);
      }
      __read() {
        return new this.__Promise((resolve, reject) => {
          this.processRead(resolve, reject);
        });
      }
      get locked() {
        return this.__locked;
      }
      cancel(reason) {
        this.__cancelled = true;
        this.__dataReceived = null;
        this.__eventCenter.emit("waitSignal", null);
        return this.__Promise.resolve(reason);
      }
      getReader() {
        if (this.__locked) {
          return null;
        }
        this.__locked = true;
        return new ReadableStreamDefaultReader(this);
      }
    };
  }
  var ReadableStreamDefaultReader = class {
    constructor(stream) {
      this.__stream = stream;
    }
    cancel(reason) {
      return this.__stream.cancel(reason);
    }
    read() {
      return this.__stream.__read();
    }
  };

  // src/modules/fetch/BodyMixin.ts
  var BodyMixin = class _BodyMixin {
    constructor() {
      this._arrayBuffer = new ArrayBuffer(0);
      this._bodyStream = null;
      this._bodyUsed = false;
      this._enableFetchAPIStandardStreaming = false;
    }
    safeUseBody(use) {
      if (this._bodyUsed) {
        return void 0;
      }
      const ret = use(this._arrayBuffer);
      this._bodyUsed = true;
      this._arrayBuffer = null;
      return ret;
    }
    cloneArrayBuffer(src) {
      return src.slice(0);
    }
    setBody(body, enableFetchAPIStandardStreaming) {
      if (body instanceof _BodyMixin) {
        if (body._bodyUsed || body._bodyStream) {
          throw new Error("body used, or try to copy body stream");
        }
        this._arrayBuffer = this.cloneArrayBuffer(body._arrayBuffer);
      } else {
        if (body instanceof ArrayBuffer) {
          this._arrayBuffer = this.cloneArrayBuffer(body);
        } else if (body instanceof DataView) {
          this._arrayBuffer = this.cloneArrayBuffer(
            body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength)
          );
        } else if (ArrayBuffer.isView(body)) {
          this._arrayBuffer = this.cloneArrayBuffer(body.buffer);
        } else if (body) {
          this._arrayBuffer = new TextEncoder().encode(body.toString()).buffer;
        }
        if (body instanceof LynxReadableStream) {
          this._bodyStream = body;
          this._enableFetchAPIStandardStreaming = enableFetchAPIStandardStreaming;
        }
      }
    }
    async arrayBuffer() {
      if (this._enableFetchAPIStandardStreaming && this._bodyStream != null) {
        const buffer = await this.consumeStream();
        if (buffer === null) {
          return new ArrayBuffer(0);
        }
        return buffer;
      } else {
        return Promise.resolve(this.safeUseBody((body) => body));
      }
    }
    get body() {
      if (this._bodyUsed) {
        throw new Error("body used");
      }
      this._bodyUsed = true;
      return this._bodyStream;
    }
    async text() {
      if (this._enableFetchAPIStandardStreaming && this._bodyStream != null) {
        const buffer = await this.consumeStream();
        if (buffer === null) {
          return "";
        }
        return new TextDecoder().decode(buffer);
      } else {
        const result = await this.safeUseBody(
          (body) => new TextDecoder().decode(body)
        );
        return result;
      }
    }
    async json() {
      if (this._enableFetchAPIStandardStreaming && this._bodyStream != null) {
        const buffer = await this.consumeStream();
        if (buffer === null) {
          return null;
        }
        const text = new TextDecoder().decode(buffer);
        return JSON.parse(text);
      } else {
        const result = this.safeUseBody((body) => new TextDecoder().decode(body));
        return Promise.resolve(result).then((text) => JSON.parse(text));
      }
    }
    // TODO(huzhanbo.luc): these APIs rely on foundamental types
    // which require extra works to support, we will support these
    // later when we have implemented these types.
    // blob(): Blob;
    // formData(): FormData;
    // cloneStream(): ReadableStream;
    get bodyUsed() {
      return this._bodyUsed;
    }
    async getArrayBufferOfStreaming() {
      const chunks = [];
      let totalLength = 0;
      const reader = this._bodyStream.getReader();
      {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          chunks.push(new Uint8Array(value));
          totalLength += value.byteLength;
        }
        const finalBuffer = new Uint8Array(totalLength);
        let offset = 0;
        for (const chunk of chunks) {
          finalBuffer.set(chunk, offset);
          offset += chunk.byteLength;
        }
        return finalBuffer.buffer;
      }
    }
    async consumeStream() {
      if (this._bodyUsed) {
        return null;
      }
      this._bodyUsed = true;
      return await this.getArrayBufferOfStreaming();
    }
  };

  // src/modules/fetch/Headers.ts
  var _a;
  var Headers2 = class _Headers {
    constructor(init) {
      this._headers_map = /* @__PURE__ */ new Map();
      this[_a] = "Headers";
      if (init === null || typeof init === "number") {
        throw new TypeError("Headers init with null/number");
      }
      if (init instanceof _Headers) {
        for (const [key, value] of init) {
          this.append(key, value);
        }
      } else if (Array.isArray(init)) {
        init.forEach(([name, value]) => {
          this.append(name, Array.isArray(value) ? value.join(" ") : value);
        });
      } else if (init) {
        Object.getOwnPropertyNames(init).forEach((name) => {
          const value = init[name];
          this.append(name, Array.isArray(value) ? value.join(" ") : value);
        });
      }
    }
    [(_a = Symbol.toStringTag, Symbol.iterator)]() {
      return this.entries();
    }
    *keys() {
      for (const [key, value] of this._headers_map) {
        yield key;
      }
    }
    *values() {
      for (const [key, value] of this._headers_map) {
        yield value;
      }
    }
    *entries() {
      for (const entry of this._headers_map) {
        yield entry;
      }
    }
    /**
     * Returns a boolean stating whether a `Headers` object contains a certain header.
     */
    has(name) {
      return this._headers_map.has(name);
    }
    /**
     * Returns a `ByteString` sequence of all the values of a header with a given name.
     */
    get(name) {
      var _a3;
      return (_a3 = this._headers_map.get(name)) != null ? _a3 : null;
    }
    /**
     * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    set(name, value) {
      this._headers_map.set(name, String(value));
    }
    /**
     * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    append(name, value) {
      let resolvedValue = this.has(name) ? "".concat(this.get(name), ", ").concat(
      value) : value;
      this.set(name, resolvedValue);
    }
    /**
     * Deletes a header from the `Headers` object.
     */
    delete(name) {
      if (!this.has(name)) {
        return;
      }
      this._headers_map.delete(name);
    }
    /**
     * Traverses the `Headers` object,
     * calling the given callback for each header.
     */
    forEach(callback, thisArg) {
      for (const [name, value] of this.entries()) {
        callback.call(thisArg, value, name, this);
      }
    }
  };

  // src/modules/fetch/AbortController.ts
  var AbortSignal = class _AbortSignal extends event_default {
    get aborted() {
      return this._aborted;
    }
    get reason() {
      return this._reason;
    }
    constructor() {
      super();
      this._aborted = false;
    }
    get [Symbol.toStringTag]() {
      return "[object AbortSignal]";
    }
    dispatchEvent(event) {
      if (event.type === "abort") {
        this._aborted = true;
        this._reason = event.reason;
        if (typeof this.onabort === "function") {
          this.onabort.call(this, event);
        }
      }
      super.emit(event.type, event);
    }
    addEventListener(type, listener) {
      super.addListener(type, listener);
    }
    removeEventListener(type, listener) {
      super.removeListener(type, listener);
    }
    static __create() {
      return new _AbortSignal();
    }
  };
  var AbortController = class {
    get signal() {
      return this._signal;
    }
    constructor() {
      this._signal = AbortSignal.__create();
    }
    abort(reason) {
      let signalReason = reason;
      if (signalReason === void 0) {
        signalReason = new Error("This operation was aborted");
        signalReason.name = "AbortError";
      }
      const event = {
        type: "abort",
        reason: signalReason
      };
      this.signal.dispatchEvent(event);
    }
    get [Symbol.toStringTag]() {
      return "[object AbortController]";
    }
  };

  // src/modules/fetch/Request.ts
  var Request = class _Request extends BodyMixin {
    get url() {
      return this._url;
    }
    get headers() {
      return this._headers;
    }
    get method() {
      return this._method;
    }
    get signal() {
      return this._signal;
    }
    get lynxExtension() {
      return this._lynxExtension;
    }
    constructor(input, options) {
      super();
      options = options || {};
      if (input instanceof _Request) {
        if (input.bodyUsed) {
          throw new TypeError("Already read");
        }
        this._url = input.url;
        if (!options.headers) {
          this._headers = new Headers2(input.headers);
        }
        this._method = input.method;
        this._signal = input.signal;
        this.setBody(input._arrayBuffer);
      } else {
        this._url = String(input);
      }
      if (options.headers || !this.headers) {
        this._headers = new Headers2(options.headers);
      }
      this._method = options.method || this.method || "GET";
      this._method = this._method.toUpperCase();
      if ((this.method === "GET" || this.method === "HEAD") && options.body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      if (typeof options.signal !== "undefined") {
        this._signal = options.signal;
      }
      this._signal = this._signal || AbortSignal.__create();
      this._lynxExtension = options.lynxExtension || {};
      if (!this._headers.get("Content-Type")) {
        if (typeof options.body === "string") {
          this._headers.set("Content-Type", "text/plain;charset=UTF-8");
        } else if (globalThis.URLSearchParams && options.body instanceof URLSearchParams) {
          this._headers.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=UTF-8"
          );
        } else if (options.body instanceof ArrayBuffer) {
        } else {
          this._headers.set("Content-Type", "text/plain;charset=UTF-8");
        }
      }
      this.setBody(options.body);
    }
    clone() {
      const cloned = new _Request(this, {
        method: this.method
      });
      cloned.setBody(this);
      return cloned;
    }
  };

  // src/modules/fetch/Response.ts
  var Response = class _Response extends BodyMixin {
    get url() {
      return this._url;
    }
    get status() {
      return this._status;
    }
    get statusText() {
      return this._statusText;
    }
    get ok() {
      return this._ok;
    }
    get headers() {
      return this._headers;
    }
    get lynxExtension() {
      return this._lynxExtension;
    }
    constructor(bodyInit, options, enableFetchAPIStandardStreaming) {
      super();
      options = options || {};
      this._status = options.status === void 0 ? 200 : options.status;
      if (this._status < 200 || this._status > 599) {
        throw new RangeError(
          "Failed to construct 'Response': The status provided (0) is outside th\
e range [200, 599]."
        );
      }
      this._ok = this._status >= 200 && this._status < 300;
      this._statusText = options.statusText === void 0 ? "" : "" + options.statusText;
      this._headers = new Headers(options.headers);
      this._url = options.url || "";
      this._lynxExtension = options.lynxExtension || {};
      this.setBody(bodyInit, enableFetchAPIStandardStreaming);
    }
    clone() {
      const cloned = new _Response(null, {
        status: this._status,
        statusText: this._statusText,
        headers: new Headers(this._headers),
        url: this._url
      });
      cloned.setBody(this);
      return cloned;
    }
  };

  // src/modules/fetch/URL.js
  function validateBaseUrl(url) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)*(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/.
    test(
      url
    );
  }
  var URL = class {
    constructor(url, base) {
      __publicField(this, "_url");
      __publicField(this, "_searchParamsInstance", null);
      let baseUrl = null;
      if (!base || validateBaseUrl(url)) {
        this._url = url;
        if (!this._url.endsWith("/")) {
          this._url += "/";
        }
      } else {
        if (typeof base === "string") {
          baseUrl = base;
          if (!validateBaseUrl(baseUrl)) {
            throw new TypeError("Invalid base URL: ".concat(baseUrl));
          }
        } else {
          baseUrl = base.toString();
        }
        if (baseUrl.endsWith("/")) {
          baseUrl = baseUrl.slice(0, baseUrl.length - 1);
        }
        if (!url.startsWith("/")) {
          url = "/".concat(url);
        }
        if (baseUrl.endsWith(url)) {
          url = "";
        }
        this._url = "".concat(baseUrl).concat(url);
      }
    }
    get href() {
      return this.toString();
    }
    get searchParams() {
      if (this._searchParamsInstance == null) {
        this._searchParamsInstance = new URLSearchParams();
      }
      return this._searchParamsInstance;
    }
    toJSON() {
      return this.toString();
    }
    toString() {
      if (this._searchParamsInstance === null) {
        return this._url;
      }
      const instanceString = this._searchParamsInstance.toString();
      const separator = this._url.indexOf("?") > -1 ? "&" : "?";
      return this._url + separator + instanceString;
    }
  };

  // src/modules/fetch/UrlSearchParamsPolyfill.js
  function URLSearchParamsPolyfill(self2) {
    "use strict";
    var _a3;
    const __URLSearchParams__ = "__URLSearchParams__";
    function URLSearchParamsPolyfill2(search) {
      search = search || "";
      if (search instanceof URLSearchParams) {
        search = search.toString();
      }
      this[__URLSearchParams__] = parseToDict(search);
    }
    const prototype = URLSearchParamsPolyfill2.prototype;
    prototype.append = function(name, value) {
      appendTo(this[__URLSearchParams__], name, value);
    };
    prototype["delete"] = function(name) {
      delete this[__URLSearchParams__][name];
    };
    prototype.get = function(name) {
      var dict = this[__URLSearchParams__];
      return this.has(name) ? dict[name][0] : null;
    };
    prototype.getAll = function(name) {
      var dict = this[__URLSearchParams__];
      return this.has(name) ? dict[name].slice(0) : [];
    };
    prototype.has = function(name) {
      return hasOwnProperty(this[__URLSearchParams__], name);
    };
    prototype.set = function set(name, value) {
      this[__URLSearchParams__][name] = ["" + value];
    };
    prototype.toString = function() {
      var dict = this[__URLSearchParams__], query = [], i, key, name, value;
      for (key in dict) {
        name = encode(key);
        for (i = 0, value = dict[key]; i < value.length; i++) {
          query.push(name + "=" + encode(value[i]));
        }
      }
      return query.join("&");
    };
    prototype.polyfill = true;
    prototype[Symbol.toStringTag] = "URLSearchParams";
    prototype.forEach = function(callback, thisArg) {
      var dict = parseToDict(this.toString());
      Object.getOwnPropertyNames(dict).forEach(function(name) {
        dict[name].forEach(function(value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    };
    prototype.sort = function() {
      var dict = parseToDict(this.toString()), keys = [], k, i, j;
      for (k in dict) {
        keys.push(k);
      }
      keys.sort();
      for (i = 0; i < keys.length; i++) {
        this["delete"](keys[i]);
      }
      for (i = 0; i < keys.length; i++) {
        var key = keys[i], values = dict[key];
        for (j = 0; j < values.length; j++) {
          this.append(key, values[j]);
        }
      }
    };
    prototype.keys = function() {
      var items = [];
      this.forEach(function(item, name) {
        items.push(name);
      });
      return makeIterator(items);
    };
    prototype.values = function() {
      var items = [];
      this.forEach(function(item) {
        items.push(item);
      });
      return makeIterator(items);
    };
    prototype.entries = function() {
      var items = [];
      this.forEach(function(item, name) {
        items.push([name, item]);
      });
      return makeIterator(items);
    };
    prototype[Symbol.iterator] = prototype.entries;
    Object.defineProperty(prototype, "size", {
      get: function() {
        var dict = parseToDict(this.toString());
        if (prototype === this) {
          throw new TypeError("Illegal invocation at URLSearchParams.invokeGette\
r");
        }
        return Object.keys(dict).reduce(function(prev, cur) {
          return prev + dict[cur].length;
        }, 0);
      }
    });
    function encode(str) {
      var replace = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
      };
      return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function(match) {
        return replace[match];
      });
    }
    function decode(str) {
      return str.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/ig, function(match) {
        return decodeURIComponent(match);
      });
    }
    function makeIterator(arr) {
      var iterator = {
        next: function() {
          var value = arr.shift();
          return { done: value === void 0, value };
        }
      };
      iterator[Symbol.iterator] = function() {
        return iterator;
      };
      return iterator;
    }
    function parseToDict(search) {
      var dict = {};
      if (typeof search === "object") {
        if (isArray(search)) {
          for (var i = 0; i < search.length; i++) {
            var item = search[i];
            if (isArray(item) && item.length === 2) {
              appendTo(dict, item[0], item[1]);
            } else {
              throw new TypeError("Failed to construct 'URLSearchParams': Sequen\
ce initializer must only contain pair elements");
            }
          }
        } else {
          for (var key in search) {
            if (search.hasOwnProperty(key)) {
              appendTo(dict, key, search[key]);
            }
          }
        }
      } else {
        if (search.indexOf("?") === 0) {
          search = search.slice(1);
        }
        var pairs = search.split("&");
        for (var j = 0; j < pairs.length; j++) {
          var value = pairs[j], index = value.indexOf("=");
          if (-1 < index) {
            appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index +
            1)));
          } else {
            if (value) {
              appendTo(dict, decode(value), "");
            }
          }
        }
      }
      return dict;
    }
    function appendTo(dict, name, value) {
      var val = typeof value === "string" ? value : value !== null && value !== void 0 &&
      typeof value.toString === "function" ? value.toString() : JSON.stringify(value);
      if (hasOwnProperty(dict, name)) {
        dict[name].push(val);
      } else {
        dict[name] = [val];
      }
    }
    function isArray(val) {
      return !!val && "[object Array]" === Object.prototype.toString.call(val);
    }
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    self2.URLSearchParams = (_a3 = self2.URLSearchParams) != null ? _a3 : URLSearchParamsPolyfill2;
  }

  // src/modules/fetch/EventSource.ts
  function createEventSource(fetch) {
    return class EventSource {
      constructor(url, options = {}) {
        this.listeners = {};
        this.url = url;
        this.options = options;
        this._closed = false;
        this._connect();
      }
      close() {
        this._closed = true;
      }
      _dispatchEvent(type, event) {
        const eventToDispatch = {
          type,
          detail: event,
          timestamp: Date.now(),
          target: {},
          currentTarget: {},
          preventDefault: () => {
          },
          stopPropagation: () => {
          }
        };
        if (type === "message" && this.onmessage) {
          this.onmessage(event);
        } else if (type === "error" && this.onerror) {
          this.onerror(eventToDispatch);
        } else if (type === "open" && this.onopen) {
          this.onopen(eventToDispatch);
        }
        const listeners = this.listeners[type] || [];
        listeners.forEach((listener) => listener(event));
      }
      addEventListener(type, listener) {
        this.listeners[type] = this.listeners[type] || [];
        this.listeners[type].push(listener);
      }
      removeEventListener(type, listener) {
        this.listeners[type] = this.listeners[type] || [];
        this.listeners[type] = this.listeners[type].filter((l) => l !== listener);
      }
      async _connect() {
        try {
          const response = await fetch(this.url, __spreadProps(__spreadValues({},
          this.options), {
            lynxExtension: {
              useStreaming: true
            }
          }));
          this._dispatchEvent("open", { data: "" });
          const reader = response.body.getReader();
          while (true) {
            const { done, value } = await reader.read();
            if (done)
              break;
            const rawEvent = globalThis.TextCodecHelper.decode(value);
            const event = this._parseEvent(rawEvent);
            if (event) {
              this._dispatchEvent(event.event || "message", event);
            }
          }
        } catch (err) {
          this._dispatchEvent("error", { data: "", error: err });
        }
      }
      _parseEvent(raw) {
        const lines = raw.split("\n");
        let event = { data: "" };
        for (const line of lines) {
          if (line.startsWith("data:")) {
            event.data += line.slice(5).trim() + "\n";
          } else if (line.startsWith("event:")) {
            event.event = line.slice(6).trim();
          } else if (line.startsWith("id:")) {
            event.id = line.slice(3).trim();
          }
        }
        if (event.data)
          event.data = event.data.slice(0, -1);
        return event.data ? event : null;
      }
    };
  }

  // src/modules/selectorQuery/SelectorQuery.ts
  var SelectorQuery = class _SelectorQuery {
    constructor(component, taskQueue, proxy) {
      this._component = component;
      this._taskQueue = taskQueue;
      this._native_proxy = proxy;
      this._fire_immediately = false;
      this._root_unique_id = void 0;
    }
    static fromQuery(prevQuery, component) {
      return new _SelectorQuery(
        component != null ? component : prevQuery._component,
        prevQuery._taskQueue.slice(),
        prevQuery._native_proxy
      );
    }
    static newEmptyQuery(proxy, component) {
      return new _SelectorQuery(component != null ? component : "", [], proxy);
    }
    /**
     * According to `this._fire_immediately`,
     * either execute the query immediately or add it to the task queue of the SelectorQuery.
     * In the latter case, a new query is returned, and `this` is not modified.
     * @param task the task to commit
     */
    commitTask(task) {
      let new_query = _SelectorQuery.fromQuery(this, this._component);
      new_query._taskQueue.push(task);
      if (this._fire_immediately) {
        new_query.exec();
        return void 0;
      }
      return new_query;
    }
    in(component) {
      return component.createSelectorQuery(this);
    }
    /**
     * Selects a single node by CSS selector.
     * @param selector CSS selector
     */
    select(selector) {
      return new NodesRef(this, {
        type: 0 /* ID_SELECTOR */,
        identifier: selector,
        component_id: this._component,
        root_unique_id: this._root_unique_id,
        first_only: true
      });
    }
    /**
     * Selects all nodes satisfying CSS selector.
     * @param selector CSS selector
     */
    selectAll(selector) {
      return new NodesRef(this, {
        type: 0 /* ID_SELECTOR */,
        identifier: selector,
        component_id: this._component,
        root_unique_id: this._root_unique_id,
        first_only: false
      });
    }
    /**
     * Selects a single node as React ref.
     * When works as ReactRef, SelectorQuery should act like getNodeRef, which means:
     * 1. cascade query is disabled.
     * 2. tasks are executed immediately without calling exec().
     */
    selectReactRef(ref_string) {
      if (this._taskQueue.length) {
        const errorMessage = "selectReactRef() should be called before any other\
 selector query methods";
        nativeConsole.warn(errorMessage);
        const error = new Error(errorMessage);
        reportError(
          new InvokeError(errorMessage, error.stack),
          this._native_proxy.nativeApp
        );
        return;
      }
      this._fire_immediately = true;
      return new NodesRef(this, {
        type: 1 /* REF_ID */,
        identifier: ref_string,
        component_id: this._component,
        root_unique_id: this._root_unique_id,
        first_only: true
      });
    }
    /**
     * Select root node of the component.
     */
    selectRoot() {
      return this.select("");
    }
    /**
     * Selects a single node by element id.
     * When a touch event is triggered, the element id of the node is passed to the event handler as 'uid',
     * by which can a node be selected in its event handler.
     */
    selectUniqueID(uniqueId) {
      return new NodesRef(this, {
        type: 2 /* UNIQUE_ID */,
        identifier: uniqueId.toString(),
        component_id: this._component,
        root_unique_id: this._root_unique_id,
        first_only: true
      });
    }
    /**
     * Execute all tasks in the task queue.
     * When `this._fire_immediately` is set to true, this method is called automatically.
     */
    exec() {
      for (let i = 0; i < this._taskQueue.length; ++i) {
        this._taskQueue[i](this._native_proxy);
      }
    }
    setRoot(uniqueId) {
      this._root_unique_id = Number(uniqueId);
      return this;
    }
  };
  var NodesRef = class {
    constructor(selectorQuery, nodeSelectToken) {
      this._nodeSelectToken = nodeSelectToken;
      this._selectorQuery = selectorQuery;
    }
    invoke(options) {
      let errorStack;
      if (true) {
        errorStack = new Error("");
      }
      let task = (proxy) => {
        var _a3;
        let callback = (res) => {
          if (res.code === 0 /* SUCCESS */) {
            options.success && options.success(res.data);
          } else {
            if (options.fail) {
              options.fail(res);
            } else {
              if (true) {
                if (!proxy.lynx._switches.disableSelectorQueryWarningWhenFailed) {
                  const errorMessage = "Failed to exec createSelectorQuery().inv\
oke() on NodesRef ".concat(JSON.stringify(
                    this._nodeSelectToken
                  ), ". Add a fail callback to suppress this warning. Msg: ").concat(
                  JSON.stringify(
                    res
                  ));
                  nativeConsole.warn(errorMessage);
                  reportError(
                    new InvokeError(errorMessage, errorStack.stack),
                    proxy.nativeApp
                  );
                }
              }
            }
          }
        };
        if (!this._nodeSelectToken.first_only) {
          callback({
            code: 5 /* SELECTOR_NOT_SUPPORTED */,
            data: "selectAll not supported for invoke method"
          });
          return;
        }
        proxy.nativeApp.invokeUIMethod(
          this._nodeSelectToken.type,
          this._nodeSelectToken.identifier,
          this._nodeSelectToken.component_id,
          options.method,
          (_a3 = options.params) != null ? _a3 : {},
          callback,
          this._nodeSelectToken.root_unique_id
        );
      };
      return this._selectorQuery.commitTask(task);
    }
    path(cb) {
      let task = (proxy) => {
        let callback = (res) => {
          cb && cb(res.data, res.status);
        };
        proxy.nativeApp.getPathInfo(
          this._nodeSelectToken.type,
          this._nodeSelectToken.identifier,
          this._nodeSelectToken.component_id,
          this._nodeSelectToken.first_only,
          callback,
          this._nodeSelectToken.root_unique_id
        );
      };
      return this._selectorQuery.commitTask(task);
    }
    fields(fields, cb) {
      let task = (proxy) => {
        let callback = (res) => {
          if (fields.query) {
            const addQueryObject = (result) => {
              result.query = SelectorQuery.newEmptyQuery(proxy);
              result.query.setRoot(result.unique_id.toString());
              if (!fields.unique_id) {
                delete result.unique_id;
              }
            };
            if (this._nodeSelectToken.first_only) {
              let result = res.data;
              if (result) {
                addQueryObject(result);
              }
            } else {
              for (let result of res.data) {
                addQueryObject(result);
              }
            }
          }
          cb && cb(res.data, res.status);
        };
        let fields_array = [];
        for (let key in fields) {
          if (key == "query" && fields[key] == true && !fields.unique_id) {
            fields_array.push("unique_id");
            continue;
          }
          if (fields[key]) {
            fields_array.push(key);
          }
        }
        proxy.nativeApp.getFields(
          this._nodeSelectToken.type,
          this._nodeSelectToken.identifier,
          this._nodeSelectToken.component_id,
          this._nodeSelectToken.first_only,
          fields_array,
          callback,
          this._nodeSelectToken.root_unique_id
        );
      };
      return this._selectorQuery.commitTask(task);
    }
    animate(animations) {
      let animationsArray = [];
      if (Array.isArray(animations)) {
        animationsArray = animations;
      } else {
        animationsArray.push(animations);
      }
      let task = (proxy) => {
        animationsArray.forEach((animation) => {
          var _a3, _b2;
          proxy.nativeApp.animate(
            this._nodeSelectToken.type,
            this._nodeSelectToken.identifier,
            this._nodeSelectToken.component_id,
            0 /* START */,
            animation == null ? void 0 : animation.id,
            (_a3 = animation == null ? void 0 : animation.effect) == null ? void 0 :
            _a3.keyframes,
            (_b2 = animation == null ? void 0 : animation.effect) == null ? void 0 :
            _b2.options
          );
        });
      };
      return this._selectorQuery.commitTask(task);
    }
    animationOperate(operation, ids) {
      let idArray = [];
      if (Array.isArray(ids)) {
        idArray = ids;
      } else {
        idArray.push(ids);
      }
      let task = (proxy) => {
        idArray.forEach((id) => {
          proxy.nativeApp.animate(
            this._nodeSelectToken.type,
            this._nodeSelectToken.identifier,
            this._nodeSelectToken.component_id,
            operation,
            id,
            null,
            null
          );
        });
      };
      return this._selectorQuery.commitTask(task);
    }
    playAnimation(ids) {
      return this.animationOperate(1 /* PLAY */, ids);
    }
    pauseAnimation(ids) {
      return this.animationOperate(2 /* PAUSE */, ids);
    }
    cancelAnimation(ids) {
      return this.animationOperate(3 /* CANCEL */, ids);
    }
    finishAnimation(ids) {
      return this.animationOperate(4 /* FINISH */, ids);
    }
    setNativeProps(nativeProps) {
      let task = (proxy) => {
        proxy.nativeApp.setNativeProps(
          this._nodeSelectToken.type,
          this._nodeSelectToken.identifier,
          this._nodeSelectToken.component_id,
          this._nodeSelectToken.first_only,
          nativeProps,
          this._nodeSelectToken.root_unique_id
        );
      };
      return this._selectorQuery.commitTask(task);
    }
  };
  NodesRef.nodePool = {};

  // src/lynx/lynx.ts
  var _a2, _b;
  var _Lynx = class _Lynx {
    constructor(getNativeApp, getApp, Promise2, getNativeLynx) {
      this.getNativeApp = getNativeApp;
      this.getApp = getApp;
      this.Promise = Promise2;
      this.getNativeLynx = getNativeLynx;
      this.setTimeout = this.getApp().wrapReport(
        this.getNativeApp().setTimeout,
        "setTimeout Error"
      );
      this.setInterval = this.getApp().wrapReport(
        this.getNativeApp().setInterval,
        "setInterval Error"
      );
      this.clearInterval = this.getNativeApp().clearInterval;
      this.clearTimeout = this.getNativeApp().clearTimeout;
      this.resumeExposure = this.getApp()._apiList["resumeExposure"];
      this.requireModule = (path2, entryName2, options) => {
        if (this.requireModule.cache[path2]) {
          return this.requireModule.cache[path2];
        }
        const exports = this.getApp().requireModule(path2, entryName2, options);
        this.requireModule.cache[path2] = exports;
        return exports;
      };
      this.requireModuleAsync = (path2, callback) => {
        callback != null ? callback : callback = (error) => {
          if (!error) {
            return;
          }
          this.getApp().handleUserError(error);
        };
        if (this.requireModuleAsync.cache[path2]) {
          callback(null, this.requireModuleAsync.cache[path2]);
          return;
        }
        this.getApp().requireModuleAsync(path2, (error, exports) => {
          if (!error) {
            this.requireModuleAsync.cache[path2] = exports;
          }
          callback(error, exports);
        });
      };
      this.createElement = (rootId, id) => this.getNativeLynx().createElement(rootId,
      id);
      this.getElementById = (id) => {
        return new element_default("", id, this);
      };
      this.reportError = (error, options) => {
        let errorObj;
        if (isError(error)) {
          errorObj = error;
        } else {
          let message;
          if (typeof error !== "string") {
            message = JSON.stringify(error);
          } else {
            message = error;
          }
          errorObj = new Error(message);
        }
        const { level = "error" } = options || {};
        let errorLevel;
        switch (level) {
          case "error":
            errorLevel = 1 /* Error */;
            break;
          case "warning":
            errorLevel = 2 /* Warn */;
            break;
          case "fatal":
            errorLevel = 0 /* Fatal */;
            break;
          default:
            errorLevel = 1 /* Error */;
        }
        this.getApp().handleUserError(errorObj, errorObj.cause, errorLevel);
      };
      this.registerModule = (name, module2) => this.getApp().registerModule(name,
      module2);
      this.getJSModule = (name) => {
        return this.getApp().getJSModule(name);
      };
      this.getTextInfo = this.getApp()._apiList["getTextInfo"];
      this.addFont = (font, callback) => {
        if (!isObject(font)) {
          throw new Error("The first argument must be object type");
        }
        if (!isString(font["font-family"]) || !isString(font["src"])) {
          throw new Error("The font value must have font-family and src");
        }
        if (!isFunction(callback)) {
          throw new Error("The second argument must be function type");
        }
        this.getNativeLynx().addFont(font, callback);
      };
      this.stopExposure = this.getApp()._apiList["stopExposure"];
      this.setObserverFrameRate = this.getApp()._apiList["setObserverFrameRate"];
      this.performance = this.getApp().performance;
      this.beforePublishEvent = this.getApp()._aopManager._beforePublishEvent;
      // sessionStorage Api
      this.setSessionStorageItem = (key, value) => {
        this.dispatchSessionStorageEvent({
          type: "__SetSessionStorageItem" /* EVENT_SET_SESSION_STORAGE */,
          data: {
            key,
            value
          }
        });
      };
      this.getSessionStorageItem = (key, callback) => {
        this.getNativeApp().getSessionStorageItem(key, callback);
      };
      this.subscribeSessionStorage = (key, callback) => {
        let listenerId = _Lynx.__registerSharedDataCounter++;
        this.getNativeApp().subscribeSessionStorage(key, listenerId, callback);
        return listenerId;
      };
      this.unsubscribeSessionStorage = (key, listenerId) => {
        this.dispatchSessionStorageEvent({
          type: "__UnSubscribeSessionStorage" /* EVENT_UNSUBSCRIBE_SESSION_STORAGE */,
          data: {
            key,
            listenerId
          }
        });
      };
      this.getDevtool = this.getNativeLynx().getDevtool;
      this.getCoreContext = this.getNativeLynx().getCoreContext;
      this.getJSContext = this.getNativeLynx().getJSContext;
      this.getUIContext = this.getNativeLynx().getUIContext;
      this.getNative = this.getNativeLynx().getNative;
      this.getEngine = this.getNativeLynx().getEngine;
      this.getCustomSectionSync = this.getNativeLynx().getCustomSectionSync;
      this.accessibilityAnnounce = (_a2 = this.getNativeApp().nativeModuleProxy.
      LynxAccessibilityModule) == null ? void 0 : _a2.accessibilityAnnounce;
      this.requestResourcePrefetch = (data, callback, config) => {
        var _a3;
        if (!isObject(data) || !Array.isArray(data.data)) {
          const res = {
            code: 32101,
            msg: "Parameters error in Lynx resource prefetch module! Value of 'd\
ata' should be an array.",
            details: []
          };
          if (callback) {
            callback(res);
          }
          return;
        }
        if (config && (!Number.isInteger(config.awaitTimeout) || config.awaitTimeout <=
        0)) {
          config = __spreadProps(__spreadValues({}, config), { awaitTimeout: 6e4 });
        }
        const nativeMethod = (_a3 = this.getNativeApp().nativeModuleProxy.LynxResourceModule) ==
        null ? void 0 : _a3.requestResourcePrefetch;
        if (nativeMethod) {
          nativeMethod(data, callback, config != null ? config : {});
        }
      };
      this.cancelResourcePrefetch = (_b = this.getNativeApp().nativeModuleProxy.
      LynxResourceModule) == null ? void 0 : _b.cancelResourcePrefetch;
      this.setSharedData = (dataKey, dataVal) => {
        nativeGlobal_default2.sharedData[dataKey] = dataVal;
        let variable = {};
        variable[dataKey] = dataVal;
        nativeGlobal_default2.shareDataSubject.notifyDataChange(variable);
      };
      this.getSharedData = (dataKey) => {
        var _a3;
        let data = nativeGlobal_default2.sharedData[dataKey];
        if (true) {
          if (data === void 0) {
            data = (_a3 = this.getApp().NativeModules.LynxRecorderReplayDataModule) ==
            null ? void 0 : _a3.getSharedData(
              dataKey
            ).value;
          } else {
            this.getNativeApp().recordSharedData(dataKey, data);
          }
        }
        return data;
      };
      this.registerSharedDataObserver = (callback) => nativeGlobal_default2.shareDataSubject.
      registerObserver(callback);
      this.removeSharedDataObserver = (callback) => nativeGlobal_default2.shareDataSubject.
      removeObserver(callback);
      this.triggerLepusGlobalEvent = (event, params2) => this.getNativeApp().triggerLepusGlobalEvent(
      event, params2);
      // for reload
      this.reload = (value, callback) => {
        this.getNativeLynx().reload(value, callback);
      };
      this.startRecording = (value) => {
        this.getNativeLynx().startRecording(value);
      };
      this.stopRecording = (value) => {
        this.getNativeLynx().stopRecording(value);
      };
      this.fetchDynamicComponent = (url, options, callback, id) => this.getNativeLynx().
      fetchDynamicComponent(url, options, callback, id);
      // Wrapper QueryComponent to decide if component has loaded.
      this.QueryComponent = (source, callback) => {
        const innerInvokeCallback = () => {
          callback({
            code: 0,
            data: { url: source, sync: true, error_message: "", mode: "cache" },
            detail: { schema: source, cache: false, errMsg: "" }
          });
        };
        if (this.getApp().loadedDynamicComponentsSet.has(source)) {
          innerInvokeCallback();
          return;
        }
        const innerCallback = (result) => {
          if (result.__hasReady === true) {
            nativeGlobal_default2.loadDynamicComponent(this.getApp(), source);
            innerInvokeCallback();
          } else {
            callback(result);
          }
        };
        this.getNativeLynx().QueryComponent(source, innerCallback);
      };
      this.loadDynamicComponent = (idOrUrl, urlOrOptions, options = {}) => {
        return new this.Promise((resolve, reject) => {
          let ids = [];
          let url;
          if (Array.isArray(idOrUrl)) {
            ids = idOrUrl;
            url = urlOrOptions;
          } else if (typeof urlOrOptions === "string") {
            ids = [idOrUrl];
            url = urlOrOptions;
          } else {
            url = idOrUrl;
            options = urlOrOptions;
          }
          if (this.getApp().loadedDynamicComponentsSet.has(url)) {
            resolve({
              code: 0,
              data: { url, sync: false, error_message: "", mode: "normal" },
              detail: { schema: url, cache: false, errMsg: "" }
            });
            return;
          }
          this.getNativeLynx().fetchDynamicComponent(
            url,
            options,
            (res) => {
              if (res && res.code == 0) {
                resolve(res);
              } else {
                reject(res);
              }
            },
            ids
          );
        });
      };
      this.fetch = (input, init) => {
        return new this.Promise((resolve, reject) => {
          var _a3, _b2;
          const request = new nativeGlobal_default2.Request(input, init);
          const signal = request.signal;
          if (signal.aborted) {
            return reject(signal.reason);
          }
          signal.addEventListener("abort", (event) => {
            reject(signal.reason);
          });
          const enableFetchAPIStandardStreaming = (_b2 = (_a3 = this.getApp().params) ==
          null ? void 0 : _a3.pageConfigSubset) == null ? void 0 : _b2.enableFetchAPIStandardStreaming;
          request.lynxExtension["enableFetchAPIStandardStreaming"] = enableFetchAPIStandardStreaming;
          const fetchArg = {
            method: request.method,
            url: request.url,
            origin: this.getNativeApp().__pageUrl,
            headers: Object.fromEntries(request.headers.entries()),
            body: request._arrayBuffer,
            lynxExtension: request.lynxExtension
          };
          const useStreaming = request.lynxExtension["useStreaming"] || enableFetchAPIStandardStreaming;
          this.getApp().NativeModules.LynxFetchModule.fetch(
            fetchArg,
            (response) => {
              if (signal.aborted) {
                return;
              }
              try {
                const streamingBodyReceiver = new (this.getApp())._ReadableStreamClass();
                const resp = new nativeGlobal_default2.Response(
                  useStreaming ? streamingBodyReceiver : response.body,
                  response,
                  enableFetchAPIStandardStreaming
                );
                if (useStreaming) {
                  const id = resp.lynxExtension["streamingId"];
                  this.getApp().GlobalEventEmitter.addListener(
                    id,
                    (result) => {
                      const event = result.event;
                      if (event === "onData") {
                        streamingBodyReceiver.onData(result.data);
                      } else if (event === "onEnd") {
                        streamingBodyReceiver.onEnd();
                      } else if (event === "onError") {
                        streamingBodyReceiver.onError(result.error);
                      }
                    }
                  );
                }
                resolve(resp);
              } catch (_) {
                reject(new TypeError(response.statusText));
              }
            },
            (error) => {
              if (signal.aborted) {
                return;
              }
              reject(new TypeError(error.message));
            }
          );
        });
      };
      this.EventSource = createEventSource(this.fetch);
      this.createSelectorQuery = (component) => {
        return SelectorQuery.newEmptyQuery(
          {
            nativeApp: this.getNativeApp(),
            lynx: this
          },
          component
        );
      };
      this.requestAnimationFrame = (callback) => this.getNativeApp().requestAnimationFrame(
      callback);
      this.cancelAnimationFrame = (animationId) => this.getNativeApp().cancelAnimationFrame(
      animationId);
      this.loadScript = (url, options) => {
        const { bundleName = DEFAULT_ENTRY } = options;
        const cacheKey = bundleName + ":" + url;
        if (this.loadScript.cache[cacheKey]) {
          return this.loadScript.cache[cacheKey];
        }
        const exports = this.getApp().loadScript(url, options);
        this.loadScript.cache[cacheKey] = exports;
        return exports;
      };
      this.fetchBundle = this.getNativeLynx().fetchBundle;
      this.__addReporterCustomInfo = (info) => {
        this.getNativeApp().__addReporterCustomInfo(info);
      };
      this.getModuleLoader = () => {
        return nativeGlobal_default2["napiLoaderOnRT" + this.getApp().nativeAppId];
      };
      this.createAnimation = (id, keyframes, options) => {
        return new AnimationV2(id, keyframes, options);
      };
      this.init(void 0);
    }
    rebind(getApp) {
      this.init(getApp);
    }
    init(getApp) {
      if (getApp) {
        this.getApp = getApp;
        this.__globalProps = this.getNativeLynx().__globalProps || {};
        this.__presetData = this.getNativeLynx().__presetData || {};
      } else {
        const cache = {};
        this.requireModule.cache = cache;
        this.requireModuleAsync.cache = cache;
        this.loadScript.cache = {};
        this.__globalProps = this.getNativeLynx().__globalProps || {};
        this.__presetData = this.getNativeLynx().__presetData || {};
        this._switches = {};
      }
    }
    dispatchSessionStorageEvent(event) {
      var eventResult = this.getCoreContext().dispatchEvent(event);
      if (eventResult == 0) {
        return;
      }
      this.getJSContext().dispatchEvent(event);
    }
    get ReadableStream() {
      return this.getApp()._ReadableStreamClass;
    }
    queueMicrotask(callback) {
      this.getNativeLynx().queueMicrotask(callback);
    }
    destroy() {
      this.__globalProps = {};
      this.__presetData = {};
      this._switches = {};
      this.targetSdkVersion = void 0;
      this.getNativeApp = null;
      this.getApp = null;
      this.Promise = null;
      this.getNativeLynx = null;
      this.setTimeout = null;
      this.setInterval = null;
      this.clearInterval = null;
      this.clearTimeout = null;
      this.resumeExposure = null;
      this.requireModule = null;
      this.requireModuleAsync = null;
      this.createElement = null;
      this.getElementById = null;
      this.reportError = null;
      this.registerModule = null;
      this.getJSModule = null;
      this.getTextInfo = null;
      this.addFont = null;
      this.stopExposure = null;
      this.setObserverFrameRate = null;
      this.performance = null;
      this.beforePublishEvent = null;
      this.setSessionStorageItem = null;
      this.getSessionStorageItem = null;
      this.subscribeSessionStorage = null;
      this.unsubscribeSessionStorage = null;
      this.getDevtool = null;
      this.getCoreContext = null;
      this.getJSContext = null;
      this.getUIContext = null;
      this.getNative = null;
      this.getEngine = null;
      this.getCustomSectionSync = null;
      this.accessibilityAnnounce = null;
      this.requestResourcePrefetch = null;
      this.cancelResourcePrefetch = null;
      this.setSharedData = null;
      this.getSharedData = null;
      this.registerSharedDataObserver = null;
      this.removeSharedDataObserver = null;
      this.triggerLepusGlobalEvent = null;
      this.reload = null;
      this.startRecording = null;
      this.stopRecording = null;
      this.createIntersectionObserver = null;
      this.fetchDynamicComponent = null;
      this.QueryComponent = null;
      this.loadDynamicComponent = null;
      this.fetch = null;
      this.EventSource = null;
      this.createSelectorQuery = null;
      this.requestAnimationFrame = null;
      this.cancelAnimationFrame = null;
      this.loadScript = null;
      this.fetchBundle = null;
      this.__addReporterCustomInfo = null;
      this.getModuleLoader = null;
      this.createAnimation = null;
    }
  };
  _Lynx.__registerSharedDataCounter = 0;
  var Lynx = _Lynx;

  // src/modules/nativeModules/textInfo.ts
  var TextInfoManager = class {
    constructor(nativeModules) {
      this._textInfoModule = void 0;
      this.getTextInfo = (param, options) => {
        if (this._textInfoModule === void 0) {
          this._textInfoModule = this._nativeModules.LynxTextInfoModule;
        }
        if (this._textInfoModule && this._textInfoModule.getTextInfo) {
          return this._textInfoModule.getTextInfo(param, options);
        } else {
          return {
            width: param.length
          };
        }
      };
      this._nativeModules = nativeModules;
    }
  };

  // src/modules/nativeModules/exposure.ts
  var ExposureManager = class {
    constructor(nativeModules) {
      this.resumeExposure = () => {
        this._exposureModule.resumeExposure();
      };
      this.stopExposure = (options) => {
        this._exposureModule.stopExposure(options);
      };
      this.setObserverFrameRate = (options) => {
        this._exposureModule.setObserverFrameRate(options);
      };
      this._nativeModules = nativeModules;
      this._exposureModule = this._nativeModules.LynxExposureModule;
    }
  };

  // src/modules/nativeModules/intersectionObserver.ts
  var IntersectionObservationTarget = class {
    constructor(selector, callback) {
      this._selector = selector;
      this._callback = callback;
    }
    invokeCallback(data) {
      this._callback(data);
    }
  };
  var IntersectionObserver = class {
    constructor(id, intersectionObserverModule, manager) {
      this._id = id;
      this._intersectionObserverModule = intersectionObserverModule;
      this._manager = manager;
      this._observationTargets = [];
      this._defaultMargins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
    }
    relativeTo(selector, margins) {
      this._intersectionObserverModule.relativeTo(
        this._id,
        selector,
        margins || this._defaultMargins
      );
      return this;
    }
    relativeToViewport(margins) {
      this._intersectionObserverModule.relativeToViewport(
        this._id,
        margins || this._defaultMargins
      );
      return this;
    }
    relativeToScreen(margins) {
      this._intersectionObserverModule.relativeToScreen(
        this._id,
        margins || this._defaultMargins
      );
      return this;
    }
    observe(selector, callback) {
      this._observationTargets.push(
        new IntersectionObservationTarget(selector, callback)
      );
      this._intersectionObserverModule.observe(
        this._id,
        selector,
        this._observationTargets.length - 1
      );
    }
    disconnect() {
      this._intersectionObserverModule.disconnect(this._id);
      this._manager.removeObserver(this._id);
    }
    invokeCallback(callbackId, data) {
      if (callbackId < this._observationTargets.length) {
        this._observationTargets[callbackId].invokeCallback(data);
      }
    }
  };
  var IntersectionObserverManager = class {
    constructor(nativeModules) {
      this._nativeModules = nativeModules;
      this._observerId = 0;
      this._observers = {};
      this._defaultOptions = {
        thresholds: [0],
        initialRatio: 0,
        observeAll: false
      };
    }
    createIntersectionObserver(componentId, options) {
      let intersectionObserverModule = this._nativeModules["IntersectionObserver\
Module"];
      const observer = new IntersectionObserver(
        this._observerId,
        intersectionObserverModule,
        this
      );
      this._observers[this._observerId] = observer;
      intersectionObserverModule.createIntersectionObserver(
        this._observerId,
        componentId,
        options || this._defaultOptions
      );
      this._observerId++;
      return observer;
    }
    getObserver(observerId) {
      return this._observers[observerId];
    }
    removeObserver(observerId) {
      this._observers[observerId] = null;
    }
  };

  // src/modules/performance/performanceObserver.ts
  var ListenerKeys = {
    onPerformance: "lynx.performance.onPerformanceEvent"
  };
  var PerformanceObserver = class {
    constructor(emitter, callback) {
      this._emitter = emitter;
      this._onPerformance = callback;
      this._observedNames = [];
    }
    observe(names) {
      if (this._observedNames.length > 0) {
        return;
      }
      this._observedNames = names;
      this._emitter.addListener(
        ListenerKeys.onPerformance,
        this.onPerformanceEvent.bind(this)
      );
    }
    disconnect() {
      this._observedNames = [];
      this._emitter.removeListener(
        ListenerKeys.onPerformance,
        this.onPerformanceEvent.bind(this)
      );
    }
    onPerformanceEvent(entry) {
      if (this._observedNames.length === 0) {
        return;
      }
      let entryName2 = entry.entryType + "." + entry.name;
      if (this._observedNames.includes(entryName2) || this._observedNames.includes(
      entry.entryType)) {
        this._onPerformance(entry);
      }
    }
  };

  // src/modules/performance/performance.ts
  var ListenerKeys2 = {
    onSetup: "lynx.performance.timing.onSetup",
    onUpdate: "lynx.performance.timing.onUpdate"
  };
  var Performance = class {
    constructor(emitter, nativeApp) {
      this._emitter = emitter;
      this._generatePipelineOptions = nativeApp.generatePipelineOptions;
      this._onPipelineStart = nativeApp.onPipelineStart;
      this._markTiming = nativeApp.markPipelineTiming;
      this._profileStart = nativeApp.profileStart;
      this._profileEnd = nativeApp.profileEnd;
      this._profileMark = nativeApp.profileMark;
      this._profileFlowId = nativeApp.profileFlowId;
      this._isProfileRecording = nativeApp.isProfileRecording;
      this._bindPipelineIdWithTimingFlag = nativeApp.bindPipelineIdWithTimingFlag;
    }
    profileStart(traceName, option) {
      this._profileStart(traceName, option);
    }
    profileEnd() {
      this._profileEnd();
    }
    profileMark(traceName, option) {
      this._profileMark(traceName, option);
    }
    profileFlowId() {
      return this._profileFlowId();
    }
    createObserver(callback) {
      return new PerformanceObserver(this._emitter, callback);
    }
    isProfileRecording() {
      return this._isProfileRecording();
    }
    addTimingListener(listener) {
      this._emitter.addListener(ListenerKeys2.onSetup, listener.onSetup, listener);
      this._emitter.addListener(
        ListenerKeys2.onUpdate,
        listener.onUpdate,
        listener
      );
    }
    removeTimingListener(listener) {
      this._emitter.removeListener(ListenerKeys2.onSetup, listener.onSetup);
      this._emitter.removeListener(ListenerKeys2.onUpdate, listener.onUpdate);
    }
    removeAllTimingListener() {
      this._emitter.removeAllListeners(ListenerKeys2.onSetup);
      this._emitter.removeAllListeners(ListenerKeys2.onUpdate);
    }
    _initializeAndStartPipeline() {
      const pipelineOptions = this._generatePipelineOptions();
      if (pipelineOptions) {
        this._onPipelineStart(pipelineOptions.pipelineID);
      }
      return pipelineOptions;
    }
    _checkAndBindTimingFlag(pipelineOptions, data) {
      if (!pipelineOptions) {
        return;
      }
      const PerformanceTimingFlag = "__lynx_timing_flag";
      if (data[PerformanceTimingFlag]) {
        this._bindPipelineIdWithTimingFlag(
          pipelineOptions.pipelineID,
          data[PerformanceTimingFlag]
        );
        this._markTiming(pipelineOptions.pipelineID, "update_set_state_trigger");
        pipelineOptions.needTimestamps = true;
      }
    }
  };

  // src/modules/performance/index.ts
  var performance_default = Performance;

  // src/common/jsbi.ts
  var jsbi_default = nativeGlobal_default2.LynxJSBI;

  // src/util/cachedFunctionProxy.ts
  var CachedFunctionProxy = class _CachedFunctionProxy {
    constructor(obj) {
      this._cachedFunctions = {};
      for (const key in obj) {
        Object.defineProperty(this, key, {
          get() {
            if (this._cachedFunctions[key]) {
              return this._cachedFunctions[key];
            }
            const value = obj[key];
            if (typeof value === "function") {
              this._cachedFunctions[key] = value;
            }
            return value;
          }
        });
      }
    }
    static create(obj) {
      return new _CachedFunctionProxy(obj);
    }
  };

  // src/util/setup-promise.ts
  function getPromiseMaybePolyfill(setTimeout2, onUnhandled, clearTimeout, queueMicrotask = void 0, enableMicrotaskPromisePolyfill = false) {
    const { getPromise } = nativeGlobal_default2;
    if (typeof getPromise === "function") {
      const nextTick = enableMicrotaskPromisePolyfill ? queueMicrotask : (fn) => setTimeout2(
      fn, 0);
      return getPromise({ nextTick, setTimeout: setTimeout2, onUnhandled, clearTimeout });
    } else {
      return nativeGlobal_default2.Promise;
    }
  }

  // src/util/TraceEventDef.ts
  var TraceEventDef = class {
  };
  TraceEventDef.EXECUTE_LOADED_SCRIPT = "executeLoadedScript";

  // src/app/app.ts
  var _BaseApp = class _BaseApp {
    constructor(options, otherApp) {
      this.dataTypeSet = /* @__PURE__ */ new Set([
        "string",
        "number",
        "array",
        "object",
        "boolean",
        "null",
        "function"
      ]);
      this.removeInternalEventListenersCallbacks = [];
      /**
       * Set sourcemap release with a newly thrown error
       * @param {Error} error
       * The error thrown from the file that wants to set sourcemap release.
       * The top frame of `error.stack` **must be** the filename.
       * The `error.name` **must be** `'LynxGetSourceMapReleaseError'`.
       * The `error.message` **must be** the sourcemap release.
       *
       * @example
       * (function () {
       *   try {
       *     throw new Error(sourcemapRelease);
       *   } catch (e) {
       *     e.name = 'LynxGetSourceMapReleaseError';
       *     tt.setSourceMapRelease(e);
       *   }
       * })()
       */
      this.setSourceMapRelease = (error) => {
        this.Reporter.setSourceMapRelease(error);
      };
      this.getSourceMapRelease = (url) => {
        return this.Reporter.getSourceMapRelease(url);
      };
      this.setupGetTextInfoApi = () => {
        this._apiList["getTextInfo"] = (text, options) => {
          return this._textInfoManager.getTextInfo(text, options);
        };
      };
      this.setupExposureApi = () => {
        this._apiList["resumeExposure"] = () => {
          this._exposureManager.resumeExposure();
        };
        this._apiList["stopExposure"] = (options) => {
          this._exposureManager.stopExposure(
            options ? options : { sendEvent: true }
          );
        };
        this._apiList["setObserverFrameRate"] = (options) => {
          this._exposureManager.setObserverFrameRate(
            options ? options : { forPageRect: 20, forExposureCheck: 20 }
          );
        };
      };
      this.requestAnimationFrame = (callback) => this._nativeApp.requestAnimationFrame(
      callback);
      this.cancelAnimationFrame = (animationId) => this._nativeApp.cancelAnimationFrame(
      animationId);
      this.__removeInternalEventListeners = () => {
        this.removeInternalEventListenersCallbacks.forEach((f) => {
          f();
        });
      };
      this.initBase(options);
      this.initWithReusedApp(options, otherApp);
      this.addInternalEventListeners();
      nativeGlobal_default2["notifyRuntimeReadyOnRT" + this.nativeAppId] && nativeGlobal_default2["\
notifyRuntimeReadyOnRT" + this.nativeAppId](this.lynx);
    }
    initWithReusedApp(options, otherApp) {
      if (otherApp) {
        this._nativeApp = otherApp.nativeApp;
        this.sharedConsole = otherApp.sharedConsole;
        this.dynamicComponentExports = otherApp.dynamicComponentExports;
        this.loadedDynamicComponentsSet = otherApp.loadedDynamicComponentsSet;
        this._apiList = otherApp._apiList;
        this._intersectionObserverManager = otherApp._intersectionObserverManager;
        this._exposureManager = otherApp._exposureManager;
        this._textInfoManager = otherApp._textInfoManager;
        otherApp.GlobalEventEmitter.setCallLynxSetModule(
          this.__internal__callLynxSetModule.bind(this)
        );
        this.GlobalEventEmitter = otherApp.GlobalEventEmitter;
        this._aopManager = otherApp._aopManager;
        this.performance = otherApp.performance;
        this.modules = otherApp.modules;
        this._lazyCallableModules = otherApp._lazyCallableModules;
        otherApp.lynx.rebind(() => this);
        this.lynx = otherApp.lynx;
        otherApp.Reporter.rebind(() => this);
        this.Reporter = otherApp.Reporter;
        this.setTimeout = otherApp.setTimeout;
        this.setInterval = otherApp.setInterval;
        this.clearInterval = otherApp.clearInterval;
        this.clearTimeout = otherApp.clearTimeout;
        this.resolvedPromise = otherApp.resolvedPromise;
        this._createReadableStreamClass = otherApp._createReadableStreamClass;
        this._ReadableStreamClass = otherApp._ReadableStreamClass;
      } else {
        const { lynx } = options;
        this.setTimeout = this.nativeApp.setTimeout;
        this.setInterval = this.nativeApp.setInterval;
        this.clearInterval = this.nativeApp.clearInterval;
        this.clearTimeout = this.nativeApp.clearTimeout;
        this.modules = {};
        this._apiList = {};
        this._textInfoManager = new TextInfoManager(this.NativeModules);
        this.setupGetTextInfoApi();
        this._lazyCallableModules = /* @__PURE__ */ new Map();
        this._nativeApp = CachedFunctionProxy.create(
          this._nativeApp
        );
        this.sharedConsole = nativeConsole;
        this.dynamicComponentExports = {};
        this.loadedDynamicComponentsSet = /* @__PURE__ */ new Set();
        this._lazyCallableModules = /* @__PURE__ */ new Map();
        this.Reporter = new Reporter(
          () => this,
          () => this.nativeApp
        );
        this.GlobalEventEmitter = new event_default(
          this.__internal__callLynxSetModule.bind(this)
        );
        this._intersectionObserverManager = new IntersectionObserverManager(
          this.NativeModules
        );
        this._exposureManager = new ExposureManager(this.NativeModules);
        this.setupExposureApi();
        this._aopManager = new AopManager();
        this.beforePublishEvent = this._aopManager._beforePublishEvent;
        this.performance = new performance_default(
          this.GlobalEventEmitter,
          this.nativeApp
        );
        const promiseCtor = this.setupPromise(
          this.nativeApp.setTimeout,
          this.nativeApp.clearTimeout,
          lynx
        );
        this.lynx = this.createLynx(lynx, promiseCtor);
        this.setupJSModule();
        this.setupIntersectionApi();
        this.setupFetchAPI(promiseCtor);
      }
    }
    initBase(options) {
      const { nativeApp, params: params2 } = options;
      this.nativeAppId = nativeApp.id;
      this._params = params2;
      this._nativeApp = nativeApp;
      this.NativeModules = nativeApp.nativeModuleProxy;
      this.LynxUIMethodModule = nativeApp.nativeModuleProxy.LynxUIMethodModule;
      this.LynxTestModule = nativeApp.nativeModuleProxy.LynxTestModule;
      this.LynxResourceModule = nativeApp.nativeModuleProxy.LynxResourceModule;
      this.LynxAccessibilityModule = nativeApp.nativeModuleProxy.LynxAccessibilityModule;
      this.LynxSetModule = nativeApp.nativeModuleProxy.LynxSetModule;
    }
    /**
     * legacy sourcemap release use url default
     * used for backward compatibility
     *
     * new template should use setSourceMapRelease
     */
    set __sourcemap__release__(release) {
      let error = new Error();
      error.name = "LynxGetSourceMapReleaseError";
      error.message = release;
      error.stack = "at <anonymous> (".concat(_BaseApp.kDefaultSourceMapURL, ":1\
:1)");
      this.setSourceMapRelease(error);
    }
    destroy() {
      this.__removeInternalEventListeners();
      this._nativeApp = null;
      this.nativeAppId = null;
      this._params = null;
      if (this.lynx) {
        this.lynx.destroy();
      }
      this.lynx = null;
      this.modules = null;
      this.sharedConsole = null;
      this.dynamicComponentExports = null;
      this.loadedDynamicComponentsSet = null;
      this.resolvedPromise = null;
      this.Reporter = null;
      this._lazyCallableModules = null;
      this.GlobalEventEmitter = null;
      this.NativeModules = null;
      this.LynxUIMethodModule = null;
      this.LynxTestModule = null;
      this.LynxResourceModule = null;
      this.LynxAccessibilityModule = null;
      this.LynxSetModule = null;
      this._apiList = null;
      this._intersectionObserverManager = null;
      this._exposureManager = null;
      this._textInfoManager = null;
      this._aopManager = null;
      this.beforePublishEvent = null;
      this.performance = null;
      this.setTimeout = null;
      this.setInterval = null;
      this.clearInterval = null;
      this.clearTimeout = null;
      this._createReadableStreamClass = null;
      this._ReadableStreamClass = null;
      this.dataTypeSet = null;
      this.contextProxyTypeToMethod = null;
      this.removeInternalEventListenersCallbacks = [];
    }
    registerModule(name, module2) {
      this._lazyCallableModules[name] = module2;
    }
    getJSModule(name) {
      return this._lazyCallableModules[name];
    }
    setupJSModule() {
      this.registerModule("GlobalEventEmitter", this.GlobalEventEmitter);
      this.registerModule("Reporter", this.Reporter);
    }
    setupFetchAPI(Promise2) {
      var _a3, _b2, _c;
      this._createReadableStreamClass = createReadableStreamClass;
      this._ReadableStreamClass = createReadableStreamClass(Promise2);
      const enableReadableStreamMemoryFix = (_c = (_b2 = (_a3 = this.params) == null ?
      void 0 : _a3.pageConfigSubset) == null ? void 0 : _b2.enableReadableStreamMemoryFix) !=
      null ? _c : true;
      if (!nativeGlobal_default2.Request) {
        nativeGlobal_default2.Request = Request;
      }
      if (!nativeGlobal_default2.Response) {
        nativeGlobal_default2.Response = Response;
      }
      if (!nativeGlobal_default2.ReadableStream) {
        if (!enableReadableStreamMemoryFix) {
          nativeGlobal_default2.ReadableStream = this._ReadableStreamClass;
          return;
        }
        let fixedPromise;
        nativeGlobal_default2.ReadableStream = createReadableStreamClass({
          getPromise: () => {
            var _a4;
            if (fixedPromise) {
              return fixedPromise;
            }
            const app = Object.values(nativeGlobal_default2.multiApps)[0];
            if (!((_a4 = app == null ? void 0 : app.lynx) == null ? void 0 : _a4.
            Promise)) {
              throw new Error("ReadableStream Promise is unavailable");
            }
            fixedPromise = app.lynx.Promise;
            return fixedPromise;
          }
        });
      }
    }
    __internal__callLynxSetModule(functionName, payload) {
      const nativeFunction = this.LynxSetModule[functionName];
      if (nativeFunction) {
        Function.prototype.apply.call(nativeFunction, void 0, payload);
      }
    }
    get nativeApp() {
      return this._nativeApp;
    }
    set nativeApp(nativeApp) {
      this._nativeApp = nativeApp;
    }
    get params() {
      return this._params;
    }
    set apiList(api) {
      this._apiList = __spreadValues(__spreadValues({}, this._apiList), api);
    }
    setupIntersectionApi() {
      let self2 = this;
      this._apiList["createIntersectionObserver"] = function(component, options) {
        const { componentId = "" } = component;
        return self2._intersectionObserverManager.createIntersectionObserver(
          componentId,
          options
        );
      };
      this.lynx["createIntersectionObserver"] = this._apiList["createIntersectio\
nObserver"];
    }
    onIntersectionObserverEvent(observerId, callbackId, data) {
      const observer = this._intersectionObserverManager.getObserver(observerId);
      if (observer) {
        observer.invokeCallback(callbackId, data);
      }
    }
    reportError(error) {
      return this.lynx.reportError(error);
    }
    handleError(error, originError, errorLevel) {
      reportError(error, this.nativeApp, {
        originError,
        getSourceMapRelease: this.getSourceMapRelease,
        errorLevel
      });
    }
    handleUserError(error, outerCause, errorLevel, prefix) {
      let { message, name, stack, cause } = error || {};
      if (!message) {
        ({ message, name, stack } = new Error(JSON.stringify(error)));
      }
      cause = cause != null ? cause : outerCause;
      const userError = new UserRuntimeError(
        prefix ? "".concat(prefix, " ").concat(name, ": ").concat(message) : "".
        concat(name, ": ").concat(message),
        stack
      );
      userError.cause = cause;
      this.handleError(userError, error, errorLevel);
    }
    /**
     * @internal
     */
    handleInternalError(error, cause) {
      let { message, name, stack } = error || {};
      if (!message) {
        ({ message, name, stack } = new Error(JSON.stringify(error)));
      }
      const internalError = new InternalRuntimeError(
        "".concat(name, ": ").concat(message),
        stack
      );
      internalError.cause = cause;
      this.handleError(internalError, error);
    }
    /**
     * Get a external env with boolean value.
     * The same as `base::LynxEnv::GetInstance().GetBoolEnv`
     *
     * @param {EnvKey} key The {@link EnvKey}, should be placed in `lynx_env.h`
     */
    getBoolEnv(key) {
      const env = this.nativeApp.getEnv(key);
      return (env == null ? void 0 : env.toLowerCase()) === "true";
    }
    /**
     * @internal
     * Execute the loaded JS module ,  Called by {@link requireModule} & {@link requireModuleAsync}
     * @throws {UserRuntimeError} when loading or evaluating failed
     * @throws {Error} when executing failed
     */
    _$executeInit(exports, {
      path: path2,
      entryName: entryName2,
      shouldCacheFactory = true,
      cacheKey
    }) {
      let factory;
      if (exports && exports.init) {
        factory = exports.init.bind(exports);
      } else if (nativeGlobal_default2.initBundle) {
        factory = nativeGlobal_default2.initBundle.bind(nativeGlobal_default2.initBundle);
        delete nativeGlobal_default2.initBundle;
      } else {
        throw new UserRuntimeError(
          "load failed. path:".concat(path2, ",entryName:").concat(entryName2)
        );
      }
      try {
        this.lynx.performance.profileStart(TraceEventDef.EXECUTE_LOADED_SCRIPT, {
          args: { path: path2 }
        });
        const ret = factory({ tt: this });
        if (shouldCacheFactory) {
          _BaseApp._$factoryCache[path2] = factory;
        }
        addLoadScriptCache(cacheKey, exports);
        return ret;
      } finally {
        this.lynx.performance.profileEnd();
      }
    }
    /**
     * @internal
     * Used to load the json module. Called by {@link requireModule} & {@link requireModuleAsync}
     * @param content
     * @param path
     * @private
     */
    _$executeJSON(content, { path: path2 }) {
      const ret = JSON.parse(content);
      const init = () => ret;
      _BaseApp._$factoryCache[path2] = init;
      return ret;
    }
    requireModule(path2, entryName2, options) {
      const init = _BaseApp._$factoryCache[path2];
      if (this.shouldUseModuleCache() && init) {
        return this._$executeInit({ init }, { path: path2, entryName: entryName2 });
      }
      if (path2.split("?")[0].endsWith(".json")) {
        const content = this.nativeApp.readScript(path2, __spreadValues({
          dynamicComponentEntry: entryName2 != null ? entryName2 : DEFAULT_ENTRY
        }, options));
        return this._$executeJSON(content, { path: path2, entryName: entryName2 });
      }
      const cacheKey = this.getLoadScriptCacheKey(
        path2,
        entryName2,
        this.params.srcName
      );
      const cache = tryGetLoadScriptCache(cacheKey);
      if (cache) {
        return this._$executeInit(cache, {
          path: path2,
          entryName: entryName2
        });
      } else {
        const exports = this.nativeApp.loadScript(path2, entryName2, options);
        return this._$executeInit(exports, { path: path2, entryName: entryName2,
        cacheKey });
      }
    }
    requireModuleAsync(path2, callback) {
      const init = _BaseApp._$factoryCache[path2];
      if (this.shouldUseModuleCache() && init) {
        callback(null, this._$executeInit({ init }, { path: path2 }));
        return;
      }
      if (path2.split("?")[0].endsWith(".json")) {
        try {
          const content = this.nativeApp.readScript(path2);
          const ret = this._$executeJSON(content, { path: path2 });
          callback(null, ret);
        } catch (e) {
          callback(e);
        }
        return;
      }
      const cacheKey = this.getLoadScriptCacheKey(path2, this.params.srcName);
      const cache = tryGetLoadScriptCache(cacheKey);
      if (cache) {
        try {
          return callback(
            null,
            this._$executeInit(cache, { path: path2 })
          );
        } catch (e) {
          callback(e);
        }
      }
      const error = new Error();
      this.nativeApp.loadScriptAsync(path2, (message, exports) => {
        if (message) {
          error.message = message;
          return callback(error);
        }
        try {
          return callback(null, this._$executeInit(exports, { path: path2, cacheKey }));
        } catch (e) {
          return callback(e);
        }
      });
    }
    require(path, params) {
      const that = this;
      if (typeof path !== "string") {
        throw new Error("require args must be a string");
      }
      const entryName = params && params.dynamicComponentEntry ? params.dynamicComponentEntry :
      DEFAULT_ENTRY;
      if (!that.modules[entryName]) {
        that.modules[entryName] = {};
      }
      let module = that.modules[entryName][path];
      if (!module) {
        try {
          const tt = that;
          const jsContent = that._nativeApp.readScript(path, {
            dynamicComponentEntry: entryName
          });
          eval(jsContent);
          module = that.modules[entryName][path];
        } catch (e) {
          this.handleError(
            new UserRuntimeError(
              "eval user: ".concat(that._nativeApp.id, " error: ").concat(e.message),
              e.stack
            ),
            e
          );
        }
        if (!that.modules[entryName][path]) {
          throw new Error(
            "module ".concat(path, " in ").concat(entryName, " is not defined in\
 card: ").concat(that._nativeApp.id)
          );
        }
      }
      if (!module.hasRun) {
        const { factory } = module;
        const _module = {
          exports: {}
        };
        let res;
        module.hasRun = true;
        module.exports = _module.exports;
        if (typeof factory === "function") {
          const inRequireCopy = inRequire.call(that, path);
          const tt2 = that;
          res = factory(
            inRequireCopy,
            _module,
            _module.exports,
            that.Card.bind(tt2),
            that.setTimeout,
            that.setInterval,
            that.clearInterval,
            that.clearTimeout,
            that.NativeModules,
            that._apiList,
            that.sharedConsole,
            that.Component.bind(tt2),
            params == null ? void 0 : params.ReactLynx,
            that.nativeAppId,
            that.Behavior.bind(tt2),
            jsbi_default,
            that.lynx,
            void 0,
            // window
            void 0,
            // document
            void 0,
            // frames
            void 0,
            // self
            void 0,
            // location
            void 0,
            // navigator
            void 0,
            // localStorage
            void 0,
            // history
            void 0,
            // Caches
            void 0,
            // screen
            void 0,
            // alert
            void 0,
            // confirm
            void 0,
            // prompt
            that.lynx.fetch,
            // fetch
            void 0,
            // XMLHttpRequest
            void 0,
            // WebSocket
            void 0,
            // webkit
            void 0,
            // Reporter
            void 0,
            // print
            void 0,
            // global
            that.requestAnimationFrame,
            that.cancelAnimationFrame
          );
          module.exports = _module.exports || res;
        }
      }
      return module.exports;
    }
    define(path2, factory, entryName2) {
      entryName2 = entryName2 ? entryName2 : DEFAULT_ENTRY;
      if (!this.modules[entryName2]) {
        this.modules[entryName2] = {};
      }
      this.modules[entryName2][path2] = {
        hasRun: false,
        factory: factory.bind(this)
      };
    }
    loadScript(url, options) {
      const { bundleName = DEFAULT_ENTRY, useModuleWrapper = false } = options ||
      {};
      const cacheKey = this.getLoadScriptCacheKey(
        url,
        bundleName,
        this.params.srcName,
        true
      );
      let exports = tryGetLoadScriptCache(cacheKey);
      if (!this.shouldUseModuleCache() || !exports) {
        let maybeExports = this.lynx.getNativeLynx().loadScript(url, options);
        if (maybeExports && typeof maybeExports.init === "function") {
          exports = maybeExports;
        } else if (useModuleWrapper && maybeExports && typeof maybeExports === "\
function") {
          exports = maybeExports;
        } else {
          return maybeExports;
        }
      }
      if (useModuleWrapper) {
        const module2 = { exports: {} };
        let that2 = this;
        const inRequireCopy = inRequire.call(that2, url);
        const args = [
          inRequireCopy,
          module2,
          module2.exports,
          that2.setTimeout,
          that2.setInterval,
          that2.clearInterval,
          that2.clearTimeout,
          that2.NativeModules,
          that2.sharedConsole,
          that2.nativeAppId,
          jsbi_default,
          that2.lynx,
          that2.requestAnimationFrame,
          that2.cancelAnimationFrame,
          that2.lynx.fetch
        ];
        exports.apply(module2.exports, args);
        addLoadScriptCache(cacheKey, exports);
        return module2.exports;
      } else {
        return this._$executeInit(exports, {
          path: url,
          entryName: options == null ? void 0 : options.bundleName,
          shouldCacheFactory: false,
          cacheKey
        });
      }
    }
    /**
     * Call By Native js_app
     * @internal
     * @param module
     * @param method
     * @param args
     */
    callFunction(module2, method, args) {
      try {
        const moduleMethods = this.getJSModule(module2);
        if (typeof moduleMethods[method] === "function") {
          moduleMethods[method].apply(moduleMethods, args);
        }
      } catch (e) {
        this.handleUserError(e, { by: "".concat(module2, ".").concat(method) });
      }
    }
    /**
     * Call By Native js_app
     * @internal
     * @param {never} _ Used for backward compatiblity, DO NOT USE.
     * @param {Error} error the Error object emit by native.
     */
    onAppError(_, error) {
      this.handleInternalError(error);
    }
    saveDynamicComponentExports(componentUrl, moduleExports) {
      this.dynamicComponentExports[componentUrl] = moduleExports;
    }
    getDynamicComponentExports(componentUrl) {
      return this.dynamicComponentExports[componentUrl];
    }
    Component(...args) {
    }
    Card(...args) {
    }
    Behavior(...args) {
    }
    /**
     * @param setTimeout
     */
    wrapReport(setTimeout2, desc) {
      const that2 = this;
      function wrapReport(fn) {
        return function wrapReportInner(...args) {
          try {
            return fn.apply(this, args);
          } catch (e) {
            that2.handleUserError(e, { by: desc });
          }
        };
      }
      return function WrapTimeout(fn, ...args) {
        return Function.prototype.apply.call(setTimeout2, void 0, [
          wrapReport(fn),
          ...args
        ]);
      };
    }
    setupPromise(setTimeout2, clearTimeout, lynx) {
      var _a3, _b2, _c;
      const PromiseConstructor = getPromiseMaybePolyfill(
        setTimeout2,
        (id, reason) => {
          try {
            if (reason) {
              if (!reason.stack) {
                reason = new Error(JSON.stringify(reason));
              }
              reason.name = "unhandled rejection";
              this.handleUserError(reason);
            }
          } catch (err) {
          }
        },
        clearTimeout,
        lynx.queueMicrotask,
        (_c = (_b2 = (_a3 = this._params) == null ? void 0 : _a3.pageConfigSubset) ==
        null ? void 0 : _b2.enableMicrotaskPromisePolyfill) != null ? _c : false
      );
      this.resolvedPromise = PromiseConstructor.resolve();
      return PromiseConstructor;
    }
    addInternalEventListener(contextProxyType, type, listener) {
      this.contextProxyTypeToMethod[contextProxyType]().addEventListener(
        type,
        listener
      );
      this.removeInternalEventListenersCallbacks.push(() => {
        this.contextProxyTypeToMethod[contextProxyType]().removeEventListener(
          type,
          listener
        );
      });
    }
    addInternalEventListeners() {
      if (!this.contextProxyTypeToMethod) {
        this.contextProxyTypeToMethod = {
          [0 /* CoreContext */]: () => this.lynx.getCoreContext(),
          [1 /* DevTool */]: () => this.lynx.getDevtool(),
          [2 /* JSContext */]: () => this.lynx.getJSContext(),
          [3 /* UIContext */]: () => this.lynx.getUIContext(),
          [4 /* Native */]: () => this.lynx.getNative(),
          [5 /* Engine */]: () => this.lynx.getEngine()
        };
      }
      this.addInternalEventListener(
        0 /* CoreContext */,
        "__OnNativeAppReady" /* ON_NATIVE_APP_READY */,
        () => {
          this.onNativeAppReady();
        }
      );
      this.addInternalEventListener(
        0 /* CoreContext */,
        "__NotifyGlobalPropsUpdated" /* NOTIFY_GLOBAL_PROPS_UPDATED */,
        (event) => {
          this.updateGlobalProps(event.data);
        }
      );
      this.addInternalEventListener(
        0 /* CoreContext */,
        "__OnLifecycleEvent" /* ON_LIFECYCLE_EVENT */,
        (event) => {
          this.OnLifecycleEvent(event.data);
        }
      );
      this.addInternalEventListener(
        0 /* CoreContext */,
        "__OnAppFirstScreen" /* ON_APP_FIRST_SCREEN */,
        () => {
          this.onAppFirstScreen();
        }
      );
      this.addInternalEventListener(
        0 /* CoreContext */,
        "__OnDynamicJSSourcePrepared" /* ON_DYNAMIC_JS_SOURCE_PREPARED */,
        (event) => {
          nativeGlobal_default2.loadDynamicComponent(this, event.data);
        }
      );
      this.addInternalEventListener(
        0 /* CoreContext */,
        "__OnAppEnterForeground" /* ON_APP_ENTER_FOREGROUND */,
        () => {
          this.onAppEnterForeground();
        }
      );
      this.addInternalEventListener(
        0 /* CoreContext */,
        "__OnAppEnterBackground" /* ON_APP_ENTER_BACKGROUND */,
        () => {
          this.onAppEnterBackground();
        }
      );
    }
    getLoadScriptCacheKey(path2, entryName2, templateUrl, ignoreConfig = false) {
      var _a3, _b2;
      if (!templateUrl || !this.shouldUseModuleCache() || !((_b2 = (_a3 = this.params) ==
      null ? void 0 : _a3.pageConfigSubset) == null ? void 0 : _b2.enableReuseLoadScriptExports) &&
      !ignoreConfig) {
        return void 0;
      }
      let cacheKey = (entryName2 ? entryName2 : DEFAULT_ENTRY) + path2;
      if (path2.startsWith("/") || path2.startsWith("lynx_assets")) {
        cacheKey = templateUrl + cacheKey;
      }
      return cacheKey;
    }
    shouldUseModuleCache() {
      return false;
    }
    isModuleCacheDisabled() {
      return typeof __lynxDisableModuleCache !== "undefined" && __lynxDisableModuleCache ===
      true;
    }
    /**
     *  override by subclass
     * @param newData
     */
    updateGlobalProps(newData) {
    }
    /**
     *  override by subclass
     * @param newData
     */
    OnLifecycleEvent(args) {
    }
    /**
     *  override by subclass
     * @param newData
     */
    onNativeAppReady() {
    }
    /**
     *  override by subclass
     * @param newData
     */
    onAppFirstScreen() {
    }
    /**
     *  override by subclass
     * @param newData
     */
    onAppEnterBackground() {
    }
    /**
     *  override by subclass
     * @param newData
     */
    onAppEnterForeground() {
    }
  };
  _BaseApp.kDefaultSourceMapURL = "default";
  _BaseApp.kGetSourceMapReleaseErrorName = SOURCE_MAP_RELEASE_ERROR_NAME;
  /**
   * @internal
   * @static
   * The LynxGroup level cache for requireModule , {@link registerModule}
   */
  _BaseApp._$factoryCache = {};
  /**
   * @internal
   * @static
   * The LynxGroup level cache for loadScript
   */
  _BaseApp._$loadScriptCache = {};
  var BaseApp = _BaseApp;
  function pathProcess(path2) {
    const match = path2.match(/(.*)\/([^/]+)?$/);
    return (match == null ? void 0 : match[1]) ? match[1] : "./";
  }
  function inRequire(path2) {
    const that2 = this;
    const pwd = pathProcess(path2);
    return function(path3) {
      const t = [];
      const r = "".concat(pwd, "/").concat(path3).split("/");
      const i = r.length;
      if (typeof path3 !== "string") {
        throw new Error("require args must be a string");
      }
      for (let o = 0; o < i; ++o) {
        const a = r[o];
        if (a !== "" && a !== ".") {
          if (a === "..") {
            if (t.length === 0) {
              throw new Error(
                "can't find module ".concat(path3, " in app: ").concat(that2._nativeApp.
                id)
              );
            }
            t.pop();
          } else {
            o + 1 < i && r[o + 1] === ".." ? o++ : t.push(a);
          }
        }
      }
      let c = t.join("/");
      return c.endsWith(".js") || (c += ".js"), that2.require(c);
    };
  }
  function tryGetLoadScriptCache(cacheKey) {
    if (!cacheKey) {
      return void 0;
    }
    return BaseApp._$loadScriptCache[cacheKey];
  }
  function addLoadScriptCache(cacheKey, exports) {
    if (!cacheKey || !exports) {
      return;
    }
    BaseApp._$loadScriptCache[cacheKey] = exports;
  }

  // src/react/reactApp.ts
  var ReactApp = class extends BaseApp {
    createLynx(nativeLynx, promiseCtor) {
      const lynx_proxy = CachedFunctionProxy.create(nativeLynx);
      return new Lynx(
        () => this.nativeApp,
        () => this,
        promiseCtor,
        () => lynx_proxy
      );
    }
    callBeforePublishEvent(eventData) {
      if (this._aopManager._beforePublishEvent.getEventsSize(eventData.type) !==
      0) {
        const copyData = __spreadValues({}, eventData);
        try {
          this._aopManager._beforePublishEvent.emit(copyData.type, [copyData]);
        } catch (e) {
          this.handleUserError(e, {
            by: "callBeforePublishEvent",
            type: copyData.type
          });
        }
      }
    }
  };

  // src/standalone/StandaloneApp.ts
  var StandaloneApp = class extends BaseApp {
    constructor(options, params2) {
      super(options, void 0);
      try {
        if (params2.srcName) {
          delete this.lynx.requireModule.cache[params2.srcName];
          delete BaseApp._$factoryCache[params2.srcName];
          this.lynx.requireModule(params2.srcName, DEFAULT_ENTRY);
          this.dataTypeSet.add("undefined");
        }
      } catch (e) {
        this.handleUserError(e);
      }
    }
    createLynx(nativeLynx, promise) {
      const lynx_proxy = CachedFunctionProxy.create(nativeLynx);
      return new Lynx(
        () => this.nativeApp,
        () => this,
        promise,
        () => lynx_proxy
      );
    }
  };

  // src/appManager.ts
  function loadCard(nativeApp, params2, lynx) {
    var _a3;
    const { id } = nativeApp;
    const { cardType } = params2;
    alog("load card native app id: ".concat(id));
    let loadSuccess = true;
    let tt2;
    try {
      if (cardType == "standalone") {
        tt2 = new StandaloneApp({ nativeApp, params: params2, lynx }, params2);
      } else {
        tt2 = new ReactApp(
          {
            nativeApp,
            params: params2,
            lynx
          },
          (_a3 = nativeGlobal_default2) == null ? void 0 : _a3.multiApps[id]
        );
      }
      nativeGlobal_default2.currentAppId = id;
      nativeGlobal_default2.multiApps[id] = tt2;
      if (cardType === "standalone") {
        nativeApp.setCard(tt2);
        return true;
      }
      alog(
        "load card native app load app-service.js params.bundleSupportLoadScript\
 ".concat(params2.bundleSupportLoadScript)
      );
      loadSuccess = true;
      try {
        delete tt2.lynx.requireModule.cache[APP_SERVICE_NAME];
        delete BaseApp._$factoryCache[APP_SERVICE_NAME];
        tt2.lynx.requireModule(APP_SERVICE_NAME, DEFAULT_ENTRY);
        if (tt2.lynx._switches["allowUndefinedInNativeDataTypeSet"]) {
          tt2.dataTypeSet.add("undefined");
        }
      } catch (e) {
        loadSuccess = false;
        tt2.handleUserError(e, void 0, void 0, "loadCard failed");
      }
      nativeApp.setCard(tt2);
    } catch (e) {
      handleLoadCardError(nativeApp, e);
      loadSuccess = false;
    }
    return loadSuccess;
  }
  function destroyCard(id) {
    alog("destroy ".concat(id));
    const appInstance = nativeGlobal_default2.multiApps[id];
    appInstance.destroy();
    delete nativeGlobal_default2.multiApps[id];
  }
  function callDestroyLifetimeFun(id) {
    alog("callDestroyLifetimeFun ".concat(id));
    const appInstance = nativeGlobal_default2.multiApps[id];
    appInstance.callDestroyLifetimeFun();
  }
  function loadDynamicComponent(tt2, componentUrl) {
    if (tt2.loadedDynamicComponentsSet.has(componentUrl)) {
      return tt2.getDynamicComponentExports(componentUrl);
    }
    const preEntry = nativeGlobal_default2.globDynamicComponentEntry;
    nativeGlobal_default2.globDynamicComponentEntry = componentUrl;
    try {
      delete tt2.lynx.requireModule.cache[APP_SERVICE_NAME];
      delete BaseApp._$factoryCache[APP_SERVICE_NAME];
      const ret = tt2.lynx.requireModule(APP_SERVICE_NAME, componentUrl);
      tt2.saveDynamicComponentExports(componentUrl, ret);
      tt2.loadedDynamicComponentsSet.add(componentUrl);
      return ret;
    } catch (error) {
      tt2.handleUserError(error);
    } finally {
      nativeGlobal_default2.globDynamicComponentEntry = preEntry;
    }
  }
  function handleLoadCardError(nativeApp, error, cause) {
    let { message, name, stack } = error || {};
    if (!message) {
      ({ message, name, stack } = new Error(JSON.stringify(error)));
    }
    const internalError = new InternalRuntimeError(
      "loadCard failed ".concat(name, ": ").concat(message),
      stack
    );
    internalError.cause = cause;
    reportError(internalError, nativeApp, {
      originError: error,
      getSourceMapRelease: (url) => {
        let ret = nativeApp.__GetSourceMapRelease(url);
        if (!ret) {
          return nativeApp.__GetSourceMapRelease(BaseApp.kDefaultSourceMapURL);
        }
      }
    });
  }

  // src/polyfill/arraybuffer.ts
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var lookup = new Uint8Array(256);
  for (let i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }
  function arrayBufferToBase64(buffer) {
    var bytes = new Uint8Array(buffer);
    var i;
    var len = bytes.length;
    var base64 = "";
    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }
    return base64;
  }
  function base64ToArrayBuffer(base64) {
    let bufferLength = base64.length * 0.75;
    const len = base64.length;
    let i;
    let p = 0;
    let encoded1;
    let encoded2;
    let encoded3;
    let encoded4;
    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }
    let arraybuffer = new ArrayBuffer(bufferLength);
    let bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
  }

  // src/index.card.ts
  nativeGlobal_default2.loadCard = loadCard;
  nativeGlobal_default2.destroyCard = destroyCard;
  nativeGlobal_default2.callDestroyLifetimeFun = callDestroyLifetimeFun;
  nativeGlobal_default2.loadDynamicComponent = loadDynamicComponent;
  nativeGlobal_default2.__createEventEmitter = createEventEmitter;
  nativeGlobal_default2.__lynxArrayBufferToBase64 = arrayBufferToBase64;
  nativeGlobal_default2.__lynxBase64ToArrayBuffer = base64ToArrayBuffer;
  nativeGlobal_default2.LynxSDKCore = {
    report: legacyReportError,
    reportInner: wrapInnerFunction,
    reportUser: wrapUserFunction
  };
  nativeGlobal_default2.Headers = Headers2;
  nativeGlobal_default2.AbortController = AbortController;
  nativeGlobal_default2.AbortSignal = AbortSignal;
  nativeGlobal_default2.URL = URL;
  URLSearchParamsPolyfill(nativeGlobal_default2);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1sZW5ndGguanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1mb3JjZWQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wubWF0Y2gtYWxsLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mbGF0dGVuLWludG8tYXJyYXkuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mbGF0LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmxhdC1tYXAuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5yZXZlcnNlLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc29ydC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkudW5zY29wYWJsZXMuZmxhdC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnVuc2NvcGFibGVzLmZsYXQtbWFwLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1idWZmZXItbmF0aXZlLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS1hbGwuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLWluc3RhbmNlLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWVlZTc1NC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1maWxsLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LWJ1ZmZlci5jb25zdHJ1Y3Rvci5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LWJ1ZmZlci5zbGljZS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmdsb2JhbC10aGlzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuanNvbi5zdHJpbmdpZnkuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRlLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZnJvbS1lbnRyaWVzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1mbGFncy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcubWF0Y2gtYWxsLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnRyaW0uanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS1lbmQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS1zdGFydC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90eXBlZC1hcnJheS1jb25zdHJ1Y3RvcnMtcmVxdWlyZS13cmFwcGVycy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcG9zaXRpdmUtaW50ZWdlci5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2Zmc2V0LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90eXBlZC1hcnJheS1mcm9tLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3R5cGVkLWFycmF5LWNvbnN0cnVjdG9yLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuZmxvYXQzMi1hcnJheS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmZsb2F0NjQtYXJyYXkuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5pbnQ4LWFycmF5LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuaW50MTYtYXJyYXkuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5pbnQzMi1hcnJheS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnVpbnQ4LWFycmF5LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNi40L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkudWludDgtY2xhbXBlZC1hcnJheS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnVpbnQxNi1hcnJheS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnVpbnQzMi1hcnJheS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjYuNC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmZyb20uanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy42LjQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5vZi5qcyIsICIuLi8uLi9seW54LXByb21pc2Uvc3JjL2NvcmUuanMiLCAiLi4vLi4vbHlueC1wcm9taXNlL3NyYy9lczYtZXh0ZW5zaW9ucy5qcyIsICIuLi8uLi9seW54LXByb21pc2Uvc3JjL3JlamVjdGlvbi10cmFja2luZy5qcyIsICIuLi8uLi9seW54LXByb21pc2Uvc3JjL2luZGV4LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdlbmVyYXRvci1ydW50aW1lQDAuMTMuNy9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwgIi4uLy4uL2x5bngtcG9seWZpbGwvc3JjL2luZGV4LmpzIiwgIi4uL3NyYy9pbmRleC5idWlsZC50cyIsICIuLi8uLi9seW54LXJ1bnRpbWUtc2hhcmVkL3NyYy9uYXRpdmVHbG9iYWwudHMiLCAiLi4vLi4vbHlueC1ydW50aW1lLXNoYXJlZC9zcmMvdXRpbHMudHMiLCAiLi4vc3JjL21vZHVsZXMvcmVwb3J0L2Vycm9ycy50cyIsICIuLi9zcmMvY29tbW9uL2NvbnN0YW50cy50cyIsICIuLi9zcmMvbW9kdWxlcy9zaGFyZWREYXRhL1NoYXJlRGF0YVN1YmplY3QudHMiLCAiLi4vc3JjL2NvbW1vbi9uYXRpdmVHbG9iYWwudHMiLCAiLi4vc3JjL2NvbW1vbi9sb2cudHMiLCAiLi4vc3JjL2NvbW1vbi92ZXJzaW9uLnRzIiwgIi4uL3NyYy9tb2R1bGVzL3JlcG9ydC9yZXBvcnQtZXJyb3IudHMiLCAiLi4vc3JjL21vZHVsZXMvcmVwb3J0L3dyYXBwZXIudHMiLCAiLi4vc3JjL21vZHVsZXMvcmVwb3J0L3JlcG9ydGVyLnRzIiwgIi4uL3NyYy9tb2R1bGVzL2FuaW1hdGlvbi9hbmltYXRpb24udHMiLCAiLi4vc3JjL21vZHVsZXMvYW5pbWF0aW9uL2VmZmVjdC50cyIsICIuLi9zcmMvbW9kdWxlcy9hbmltYXRpb24vYW5pbWF0aW9uVjIudHMiLCAiLi4vc3JjL21vZHVsZXMvZWxlbWVudC9lbGVtZW50LnRzIiwgIi4uL3NyYy9tb2R1bGVzL2VsZW1lbnQvaW5kZXgudHMiLCAiLi4vc3JjL21vZHVsZXMvZmV0Y2gvVGV4dERlY29kZXIudHMiLCAiLi4vc3JjL21vZHVsZXMvZmV0Y2gvVGV4dEVuY29kZXIudHMiLCAiLi4vc3JjL21vZHVsZXMvZXZlbnQvZXZlbnRFbWl0dGVyLnRzIiwgIi4uL3NyYy9tb2R1bGVzL2V2ZW50L2FvcC50cyIsICIuLi9zcmMvbW9kdWxlcy9ldmVudC9pbmRleC50cyIsICIuLi9zcmMvbW9kdWxlcy9mZXRjaC9SZWFkYWJsZVN0cmVhbS50cyIsICIuLi9zcmMvbW9kdWxlcy9mZXRjaC9Cb2R5TWl4aW4udHMiLCAiLi4vc3JjL21vZHVsZXMvZmV0Y2gvSGVhZGVycy50cyIsICIuLi9zcmMvbW9kdWxlcy9mZXRjaC9BYm9ydENvbnRyb2xsZXIudHMiLCAiLi4vc3JjL21vZHVsZXMvZmV0Y2gvUmVxdWVzdC50cyIsICIuLi9zcmMvbW9kdWxlcy9mZXRjaC9SZXNwb25zZS50cyIsICIuLi9zcmMvbW9kdWxlcy9mZXRjaC9VUkwuanMiLCAiLi4vc3JjL21vZHVsZXMvZmV0Y2gvVXJsU2VhcmNoUGFyYW1zUG9seWZpbGwuanMiLCAiLi4vc3JjL21vZHVsZXMvZmV0Y2gvRXZlbnRTb3VyY2UudHMiLCAiLi4vc3JjL21vZHVsZXMvc2VsZWN0b3JRdWVyeS9TZWxlY3RvclF1ZXJ5LnRzIiwgIi4uL3NyYy9seW54L2x5bngudHMiLCAiLi4vc3JjL21vZHVsZXMvbmF0aXZlTW9kdWxlcy90ZXh0SW5mby50cyIsICIuLi9zcmMvbW9kdWxlcy9uYXRpdmVNb2R1bGVzL2V4cG9zdXJlLnRzIiwgIi4uL3NyYy9tb2R1bGVzL25hdGl2ZU1vZHVsZXMvaW50ZXJzZWN0aW9uT2JzZXJ2ZXIudHMiLCAiLi4vc3JjL21vZHVsZXMvcGVyZm9ybWFuY2UvcGVyZm9ybWFuY2VPYnNlcnZlci50cyIsICIuLi9zcmMvbW9kdWxlcy9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS50cyIsICIuLi9zcmMvbW9kdWxlcy9wZXJmb3JtYW5jZS9pbmRleC50cyIsICIuLi9zcmMvY29tbW9uL2pzYmkudHMiLCAiLi4vc3JjL3V0aWwvY2FjaGVkRnVuY3Rpb25Qcm94eS50cyIsICIuLi9zcmMvdXRpbC9zZXR1cC1wcm9taXNlLnRzIiwgIi4uL3NyYy91dGlsL1RyYWNlRXZlbnREZWYudHMiLCAiLi4vc3JjL2FwcC9hcHAudHMiLCAiLi4vc3JjL3JlYWN0L3JlYWN0QXBwLnRzIiwgIi4uL3NyYy9zdGFuZGFsb25lL1N0YW5kYWxvbmVBcHAudHMiLCAiLi4vc3JjL2FwcE1hbmFnZXIudHMiLCAiLi4vc3JjL3BvbHlmaWxsL2FycmF5YnVmZmVyLnRzIiwgIi4uL3NyYy9pbmRleC5jYXJkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsICJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG4iLCAiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsICJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgUFJFRkVSUkVEX1NUUklORykge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaW5wdXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwgInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCAidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsICJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwgInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGdsb2JhbCwga2V5LCB2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwgInZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGAzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICh0eXBlb2Ygc3RvcmUuaW5zcGVjdFNvdXJjZSAhPSAnZnVuY3Rpb24nKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChpbnNwZWN0U291cmNlKFdlYWtNYXApKTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjYuNCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwgInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcbiIsICJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCkge1xuICB2YXIgc3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59KTtcbiIsICJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbiIsICJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT0gJ2Z1bmN0aW9uJyA/IHZhcmlhYmxlIDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKHBhdGhbbmFtZXNwYWNlXSkgfHwgYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcbiIsICJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXModGFyZ2V0LCBrZXkpKSBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gIH1cbn07XG4iLCAidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiLy8gYFN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25gIGdldHRlclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvblxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG5cbnZhciBOYXRpdmVTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xuXG5pZiAoREVTQ1JJUFRPUlMgJiYgdHlwZW9mIE5hdGl2ZVN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICghKCdkZXNjcmlwdGlvbicgaW4gTmF0aXZlU3ltYm9sLnByb3RvdHlwZSkgfHxcbiAgLy8gU2FmYXJpIDEyIGJ1Z1xuICBOYXRpdmVTeW1ib2woKS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkXG4pKSB7XG4gIHZhciBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUgPSB7fTtcbiAgLy8gd3JhcCBTeW1ib2wgY29uc3RydWN0b3IgZm9yIGNvcnJlY3Qgd29yayB3aXRoIHVuZGVmaW5lZCBkZXNjcmlwdGlvblxuICB2YXIgU3ltYm9sV3JhcHBlciA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciByZXN1bHQgPSB0aGlzIGluc3RhbmNlb2YgU3ltYm9sV3JhcHBlclxuICAgICAgPyBuZXcgTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKVxuICAgICAgLy8gaW4gRWRnZSAxMywgU3RyaW5nKFN5bWJvbCh1bmRlZmluZWQpKSA9PT0gJ1N5bWJvbCh1bmRlZmluZWQpJ1xuICAgICAgOiBkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkID8gTmF0aXZlU3ltYm9sKCkgOiBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pO1xuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZVtyZXN1bHRdID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKFN5bWJvbFdyYXBwZXIsIE5hdGl2ZVN5bWJvbCk7XG4gIHZhciBzeW1ib2xQcm90b3R5cGUgPSBTeW1ib2xXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZVN5bWJvbC5wcm90b3R5cGU7XG4gIHN5bWJvbFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bWJvbFdyYXBwZXI7XG5cbiAgdmFyIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgbmF0aXZlID0gU3RyaW5nKE5hdGl2ZVN5bWJvbCgndGVzdCcpKSA9PSAnU3ltYm9sKHRlc3QpJztcbiAgdmFyIHJlZ2V4cCA9IC9eU3ltYm9sXFwoKC4qKVxcKVteKV0rJC87XG4gIGRlZmluZVByb3BlcnR5KHN5bWJvbFByb3RvdHlwZSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgdmFyIHN5bWJvbCA9IGlzT2JqZWN0KHRoaXMpID8gdGhpcy52YWx1ZU9mKCkgOiB0aGlzO1xuICAgICAgdmFyIHN0cmluZyA9IHN5bWJvbFRvU3RyaW5nLmNhbGwoc3ltYm9sKTtcbiAgICAgIGlmIChoYXMoRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlLCBzeW1ib2wpKSByZXR1cm4gJyc7XG4gICAgICB2YXIgZGVzYyA9IG5hdGl2ZSA/IHN0cmluZy5zbGljZSg3LCAtMSkgOiBzdHJpbmcucmVwbGFjZShyZWdleHAsICckMScpO1xuICAgICAgcmV0dXJuIGRlc2MgPT09ICcnID8gdW5kZWZpbmVkIDogZGVzYztcbiAgICB9XG4gIH0pO1xuXG4gICQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgU3ltYm9sOiBTeW1ib2xXcmFwcGVyXG4gIH0pO1xufVxuIiwgInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgcmV0dXJuICFTdHJpbmcoU3ltYm9sKCkpO1xufSk7XG4iLCAidmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmICFTeW1ib2wuc2hhbVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBpZiAoTkFUSVZFX1NZTUJPTCAmJiBoYXMoU3ltYm9sLCBuYW1lKSkgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gU3ltYm9sW25hbWVdO1xuICAgIGVsc2UgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuZXhwb3J0cy5mID0gd2VsbEtub3duU3ltYm9sO1xuIiwgInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgdmFyIFN5bWJvbCA9IHBhdGguU3ltYm9sIHx8IChwYXRoLlN5bWJvbCA9IHt9KTtcbiAgaWYgKCFoYXMoU3ltYm9sLCBOQU1FKSkgZGVmaW5lUHJvcGVydHkoU3ltYm9sLCBOQU1FLCB7XG4gICAgdmFsdWU6IHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZihOQU1FKVxuICB9KTtcbn07XG4iLCAidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5hc3luY0l0ZXJhdG9yYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLmFzeW5jaXRlcmF0b3JcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnYXN5bmNJdGVyYXRvcicpO1xuIiwgInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wubWF0Y2hBbGxgIHdlbGwta25vd24gc3ltYm9sXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ21hdGNoQWxsJyk7XG4iLCAidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCAibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsICJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG5cbi8vIGBGbGF0dGVuSW50b0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtZmxhdE1hcC8jc2VjLUZsYXR0ZW5JbnRvQXJyYXlcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gZnVuY3Rpb24gKHRhcmdldCwgb3JpZ2luYWwsIHNvdXJjZSwgc291cmNlTGVuLCBzdGFydCwgZGVwdGgsIG1hcHBlciwgdGhpc0FyZykge1xuICB2YXIgdGFyZ2V0SW5kZXggPSBzdGFydDtcbiAgdmFyIHNvdXJjZUluZGV4ID0gMDtcbiAgdmFyIG1hcEZuID0gbWFwcGVyID8gYmluZChtYXBwZXIsIHRoaXNBcmcsIDMpIDogZmFsc2U7XG4gIHZhciBlbGVtZW50O1xuXG4gIHdoaWxlIChzb3VyY2VJbmRleCA8IHNvdXJjZUxlbikge1xuICAgIGlmIChzb3VyY2VJbmRleCBpbiBzb3VyY2UpIHtcbiAgICAgIGVsZW1lbnQgPSBtYXBGbiA/IG1hcEZuKHNvdXJjZVtzb3VyY2VJbmRleF0sIHNvdXJjZUluZGV4LCBvcmlnaW5hbCkgOiBzb3VyY2Vbc291cmNlSW5kZXhdO1xuXG4gICAgICBpZiAoZGVwdGggPiAwICYmIGlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICAgICAgdGFyZ2V0SW5kZXggPSBmbGF0dGVuSW50b0FycmF5KHRhcmdldCwgb3JpZ2luYWwsIGVsZW1lbnQsIHRvTGVuZ3RoKGVsZW1lbnQubGVuZ3RoKSwgdGFyZ2V0SW5kZXgsIGRlcHRoIC0gMSkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRhcmdldEluZGV4ID49IDB4MUZGRkZGRkZGRkZGRkYpIHRocm93IFR5cGVFcnJvcignRXhjZWVkIHRoZSBhY2NlcHRhYmxlIGFycmF5IGxlbmd0aCcpO1xuICAgICAgICB0YXJnZXRbdGFyZ2V0SW5kZXhdID0gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0SW5kZXgrKztcbiAgICB9XG4gICAgc291cmNlSW5kZXgrKztcbiAgfVxuICByZXR1cm4gdGFyZ2V0SW5kZXg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsYXR0ZW5JbnRvQXJyYXk7XG4iLCAidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZsYXR0ZW4taW50by1hcnJheScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmxhdGAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1mbGF0TWFwXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGZsYXQ6IGZ1bmN0aW9uIGZsYXQoLyogZGVwdGhBcmcgPSAxICovKSB7XG4gICAgdmFyIGRlcHRoQXJnID0gYXJndW1lbnRzLmxlbmd0aCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBzb3VyY2VMZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgQS5sZW5ndGggPSBmbGF0dGVuSW50b0FycmF5KEEsIE8sIE8sIHNvdXJjZUxlbiwgMCwgZGVwdGhBcmcgPT09IHVuZGVmaW5lZCA/IDEgOiB0b0ludGVnZXIoZGVwdGhBcmcpKTtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmxhdHRlbkludG9BcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mbGF0dGVuLWludG8tYXJyYXknKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZsYXRNYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZmxhdE1hcFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBmbGF0TWFwOiBmdW5jdGlvbiBmbGF0TWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgc291cmNlTGVuID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBBO1xuICAgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgICBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIEEubGVuZ3RoID0gZmxhdHRlbkludG9BcnJheShBLCBPLCBPLCBzb3VyY2VMZW4sIDAsIDEsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgbmF0aXZlUmV2ZXJzZSA9IFtdLnJldmVyc2U7XG52YXIgdGVzdCA9IFsxLCAyXTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5yZXZlcnNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZXZlcnNlXG4vLyBmaXggZm9yIFNhZmFyaSAxMi4wIGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4ODc5NFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU3RyaW5nKHRlc3QpID09PSBTdHJpbmcodGVzdC5yZXZlcnNlKCkpIH0sIHtcbiAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1hc3NpZ25cbiAgICBpZiAoaXNBcnJheSh0aGlzKSkgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICByZXR1cm4gbmF0aXZlUmV2ZXJzZS5jYWxsKHRoaXMpO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIHRlc3QgPSBbXTtcbnZhciBuYXRpdmVTb3J0ID0gdGVzdC5zb3J0O1xuXG4vLyBJRTgtXG52YXIgRkFJTFNfT05fVU5ERUZJTkVEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pO1xuLy8gVjggYnVnXG52YXIgRkFJTFNfT05fTlVMTCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KG51bGwpO1xufSk7XG4vLyBPbGQgV2ViS2l0XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ3NvcnQnKTtcblxudmFyIEZPUkNFRCA9IEZBSUxTX09OX1VOREVGSU5FRCB8fCAhRkFJTFNfT05fTlVMTCB8fCAhU1RSSUNUX01FVEhPRDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb3J0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbikge1xuICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuICAgICAgPyBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSwgYUZ1bmN0aW9uKGNvbXBhcmVmbikpO1xuICB9XG59KTtcbiIsICJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsICJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCAidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCAidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsICJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCAiLy8gdGhpcyBtZXRob2Qgd2FzIGFkZGVkIHRvIHVuc2NvcGFibGVzIGFmdGVyIGltcGxlbWVudGF0aW9uXG4vLyBpbiBwb3B1bGFyIGVuZ2luZXMsIHNvIGl0J3MgbW92ZWQgdG8gYSBzZXBhcmF0ZSBtb2R1bGVcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdmbGF0Jyk7XG4iLCAiLy8gdGhpcyBtZXRob2Qgd2FzIGFkZGVkIHRvIHVuc2NvcGFibGVzIGFmdGVyIGltcGxlbWVudGF0aW9uXG4vLyBpbiBwb3B1bGFyIGVuZ2luZXMsIHNvIGl0J3MgbW92ZWQgdG8gYSBzZXBhcmF0ZSBtb2R1bGVcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdmbGF0TWFwJyk7XG4iLCAibW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBEYXRhVmlldyAhPT0gJ3VuZGVmaW5lZCc7XG4iLCAidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgb3B0aW9ucyk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwgIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0ICcgKyAobmFtZSA/IG5hbWUgKyAnICcgOiAnJykgKyAnaW52b2NhdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCAidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBUb0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMDtcbiAgdmFyIG51bWJlciA9IHRvSW50ZWdlcihpdCk7XG4gIHZhciBsZW5ndGggPSB0b0xlbmd0aChudW1iZXIpO1xuICBpZiAobnVtYmVyICE9PSBsZW5ndGgpIHRocm93IFJhbmdlRXJyb3IoJ1dyb25nIGxlbmd0aCBvciBpbmRleCcpO1xuICByZXR1cm4gbGVuZ3RoO1xufTtcbiIsICIvLyBJRUVFNzU0IGNvbnZlcnNpb25zIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvaWVlZTc1NFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG52YXIgSW5maW5pdHkgPSAxIC8gMDtcbnZhciBhYnMgPSBNYXRoLmFicztcbnZhciBwb3cgPSBNYXRoLnBvdztcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgbG9nID0gTWF0aC5sb2c7XG52YXIgTE4yID0gTWF0aC5MTjI7XG5cbnZhciBwYWNrID0gZnVuY3Rpb24gKG51bWJlciwgbWFudGlzc2FMZW5ndGgsIGJ5dGVzKSB7XG4gIHZhciBidWZmZXIgPSBuZXcgQXJyYXkoYnl0ZXMpO1xuICB2YXIgZXhwb25lbnRMZW5ndGggPSBieXRlcyAqIDggLSBtYW50aXNzYUxlbmd0aCAtIDE7XG4gIHZhciBlTWF4ID0gKDEgPDwgZXhwb25lbnRMZW5ndGgpIC0gMTtcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICB2YXIgcnQgPSBtYW50aXNzYUxlbmd0aCA9PT0gMjMgPyBwb3coMiwgLTI0KSAtIHBvdygyLCAtNzcpIDogMDtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwIHx8IG51bWJlciA9PT0gMCAmJiAxIC8gbnVtYmVyIDwgMCA/IDEgOiAwO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgZXhwb25lbnQsIG1hbnRpc3NhLCBjO1xuICBudW1iZXIgPSBhYnMobnVtYmVyKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICBpZiAobnVtYmVyICE9IG51bWJlciB8fCBudW1iZXIgPT09IEluZmluaXR5KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIG1hbnRpc3NhID0gbnVtYmVyICE9IG51bWJlciA/IDEgOiAwO1xuICAgIGV4cG9uZW50ID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBleHBvbmVudCA9IGZsb29yKGxvZyhudW1iZXIpIC8gTE4yKTtcbiAgICBpZiAobnVtYmVyICogKGMgPSBwb3coMiwgLWV4cG9uZW50KSkgPCAxKSB7XG4gICAgICBleHBvbmVudC0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZXhwb25lbnQgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBudW1iZXIgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICBudW1iZXIgKz0gcnQgKiBwb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKG51bWJlciAqIGMgPj0gMikge1xuICAgICAgZXhwb25lbnQrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG4gICAgaWYgKGV4cG9uZW50ICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbWFudGlzc2EgPSAwO1xuICAgICAgZXhwb25lbnQgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZXhwb25lbnQgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtYW50aXNzYSA9IChudW1iZXIgKiBjIC0gMSkgKiBwb3coMiwgbWFudGlzc2FMZW5ndGgpO1xuICAgICAgZXhwb25lbnQgPSBleHBvbmVudCArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYW50aXNzYSA9IG51bWJlciAqIHBvdygyLCBlQmlhcyAtIDEpICogcG93KDIsIG1hbnRpc3NhTGVuZ3RoKTtcbiAgICAgIGV4cG9uZW50ID0gMDtcbiAgICB9XG4gIH1cbiAgZm9yICg7IG1hbnRpc3NhTGVuZ3RoID49IDg7IGJ1ZmZlcltpbmRleCsrXSA9IG1hbnRpc3NhICYgMjU1LCBtYW50aXNzYSAvPSAyNTYsIG1hbnRpc3NhTGVuZ3RoIC09IDgpO1xuICBleHBvbmVudCA9IGV4cG9uZW50IDw8IG1hbnRpc3NhTGVuZ3RoIHwgbWFudGlzc2E7XG4gIGV4cG9uZW50TGVuZ3RoICs9IG1hbnRpc3NhTGVuZ3RoO1xuICBmb3IgKDsgZXhwb25lbnRMZW5ndGggPiAwOyBidWZmZXJbaW5kZXgrK10gPSBleHBvbmVudCAmIDI1NSwgZXhwb25lbnQgLz0gMjU2LCBleHBvbmVudExlbmd0aCAtPSA4KTtcbiAgYnVmZmVyWy0taW5kZXhdIHw9IHNpZ24gKiAxMjg7XG4gIHJldHVybiBidWZmZXI7XG59O1xuXG52YXIgdW5wYWNrID0gZnVuY3Rpb24gKGJ1ZmZlciwgbWFudGlzc2FMZW5ndGgpIHtcbiAgdmFyIGJ5dGVzID0gYnVmZmVyLmxlbmd0aDtcbiAgdmFyIGV4cG9uZW50TGVuZ3RoID0gYnl0ZXMgKiA4IC0gbWFudGlzc2FMZW5ndGggLSAxO1xuICB2YXIgZU1heCA9ICgxIDw8IGV4cG9uZW50TGVuZ3RoKSAtIDE7XG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMTtcbiAgdmFyIG5CaXRzID0gZXhwb25lbnRMZW5ndGggLSA3O1xuICB2YXIgaW5kZXggPSBieXRlcyAtIDE7XG4gIHZhciBzaWduID0gYnVmZmVyW2luZGV4LS1dO1xuICB2YXIgZXhwb25lbnQgPSBzaWduICYgMTI3O1xuICB2YXIgbWFudGlzc2E7XG4gIHNpZ24gPj49IDc7XG4gIGZvciAoOyBuQml0cyA+IDA7IGV4cG9uZW50ID0gZXhwb25lbnQgKiAyNTYgKyBidWZmZXJbaW5kZXhdLCBpbmRleC0tLCBuQml0cyAtPSA4KTtcbiAgbWFudGlzc2EgPSBleHBvbmVudCAmICgxIDw8IC1uQml0cykgLSAxO1xuICBleHBvbmVudCA+Pj0gLW5CaXRzO1xuICBuQml0cyArPSBtYW50aXNzYUxlbmd0aDtcbiAgZm9yICg7IG5CaXRzID4gMDsgbWFudGlzc2EgPSBtYW50aXNzYSAqIDI1NiArIGJ1ZmZlcltpbmRleF0sIGluZGV4LS0sIG5CaXRzIC09IDgpO1xuICBpZiAoZXhwb25lbnQgPT09IDApIHtcbiAgICBleHBvbmVudCA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChleHBvbmVudCA9PT0gZU1heCkge1xuICAgIHJldHVybiBtYW50aXNzYSA/IE5hTiA6IHNpZ24gPyAtSW5maW5pdHkgOiBJbmZpbml0eTtcbiAgfSBlbHNlIHtcbiAgICBtYW50aXNzYSA9IG1hbnRpc3NhICsgcG93KDIsIG1hbnRpc3NhTGVuZ3RoKTtcbiAgICBleHBvbmVudCA9IGV4cG9uZW50IC0gZUJpYXM7XG4gIH0gcmV0dXJuIChzaWduID8gLTEgOiAxKSAqIG1hbnRpc3NhICogcG93KDIsIGV4cG9uZW50IC0gbWFudGlzc2FMZW5ndGgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhY2s6IHBhY2ssXG4gIHVucGFjazogdW5wYWNrXG59O1xuIiwgInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwgInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCAidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsICJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWxsYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWxsXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyogLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpO1xuICB2YXIgZW5kID0gYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuZ3RoKTtcbiAgd2hpbGUgKGVuZFBvcyA+IGluZGV4KSBPW2luZGV4KytdID0gdmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBOQVRJVkVfQVJSQVlfQlVGRkVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci1uYXRpdmUnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4Jyk7XG52YXIgSUVFRTc1NCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZWVlNzU0Jyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGFycmF5RmlsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1maWxsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIEFSUkFZX0JVRkZFUiA9ICdBcnJheUJ1ZmZlcic7XG52YXIgREFUQV9WSUVXID0gJ0RhdGFWaWV3JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBXUk9OR19MRU5HVEggPSAnV3JvbmcgbGVuZ3RoJztcbnZhciBXUk9OR19JTkRFWCA9ICdXcm9uZyBpbmRleCc7XG52YXIgTmF0aXZlQXJyYXlCdWZmZXIgPSBnbG9iYWxbQVJSQVlfQlVGRkVSXTtcbnZhciAkQXJyYXlCdWZmZXIgPSBOYXRpdmVBcnJheUJ1ZmZlcjtcbnZhciAkRGF0YVZpZXcgPSBnbG9iYWxbREFUQV9WSUVXXTtcbnZhciAkRGF0YVZpZXdQcm90b3R5cGUgPSAkRGF0YVZpZXcgJiYgJERhdGFWaWV3W1BST1RPVFlQRV07XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBSYW5nZUVycm9yID0gZ2xvYmFsLlJhbmdlRXJyb3I7XG5cbnZhciBwYWNrSUVFRTc1NCA9IElFRUU3NTQucGFjaztcbnZhciB1bnBhY2tJRUVFNzU0ID0gSUVFRTc1NC51bnBhY2s7XG5cbnZhciBwYWNrSW50OCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgcmV0dXJuIFtudW1iZXIgJiAweEZGXTtcbn07XG5cbnZhciBwYWNrSW50MTYgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIHJldHVybiBbbnVtYmVyICYgMHhGRiwgbnVtYmVyID4+IDggJiAweEZGXTtcbn07XG5cbnZhciBwYWNrSW50MzIgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIHJldHVybiBbbnVtYmVyICYgMHhGRiwgbnVtYmVyID4+IDggJiAweEZGLCBudW1iZXIgPj4gMTYgJiAweEZGLCBudW1iZXIgPj4gMjQgJiAweEZGXTtcbn07XG5cbnZhciB1bnBhY2tJbnQzMiA9IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlclszXSA8PCAyNCB8IGJ1ZmZlclsyXSA8PCAxNiB8IGJ1ZmZlclsxXSA8PCA4IHwgYnVmZmVyWzBdO1xufTtcblxudmFyIHBhY2tGbG9hdDMyID0gZnVuY3Rpb24gKG51bWJlcikge1xuICByZXR1cm4gcGFja0lFRUU3NTQobnVtYmVyLCAyMywgNCk7XG59O1xuXG52YXIgcGFja0Zsb2F0NjQgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIHJldHVybiBwYWNrSUVFRTc1NChudW1iZXIsIDUyLCA4KTtcbn07XG5cbnZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIGtleSkge1xuICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvcltQUk9UT1RZUEVdLCBrZXksIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpW2tleV07IH0gfSk7XG59O1xuXG52YXIgZ2V0ID0gZnVuY3Rpb24gKHZpZXcsIGNvdW50LCBpbmRleCwgaXNMaXR0bGVFbmRpYW4pIHtcbiAgdmFyIGludEluZGV4ID0gdG9JbmRleChpbmRleCk7XG4gIHZhciBzdG9yZSA9IGdldEludGVybmFsU3RhdGUodmlldyk7XG4gIGlmIChpbnRJbmRleCArIGNvdW50ID4gc3RvcmUuYnl0ZUxlbmd0aCkgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBieXRlcyA9IGdldEludGVybmFsU3RhdGUoc3RvcmUuYnVmZmVyKS5ieXRlcztcbiAgdmFyIHN0YXJ0ID0gaW50SW5kZXggKyBzdG9yZS5ieXRlT2Zmc2V0O1xuICB2YXIgcGFjayA9IGJ5dGVzLnNsaWNlKHN0YXJ0LCBzdGFydCArIGNvdW50KTtcbiAgcmV0dXJuIGlzTGl0dGxlRW5kaWFuID8gcGFjayA6IHBhY2sucmV2ZXJzZSgpO1xufTtcblxudmFyIHNldCA9IGZ1bmN0aW9uICh2aWV3LCBjb3VudCwgaW5kZXgsIGNvbnZlcnNpb24sIHZhbHVlLCBpc0xpdHRsZUVuZGlhbikge1xuICB2YXIgaW50SW5kZXggPSB0b0luZGV4KGluZGV4KTtcbiAgdmFyIHN0b3JlID0gZ2V0SW50ZXJuYWxTdGF0ZSh2aWV3KTtcbiAgaWYgKGludEluZGV4ICsgY291bnQgPiBzdG9yZS5ieXRlTGVuZ3RoKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcbiAgdmFyIGJ5dGVzID0gZ2V0SW50ZXJuYWxTdGF0ZShzdG9yZS5idWZmZXIpLmJ5dGVzO1xuICB2YXIgc3RhcnQgPSBpbnRJbmRleCArIHN0b3JlLmJ5dGVPZmZzZXQ7XG4gIHZhciBwYWNrID0gY29udmVyc2lvbigrdmFsdWUpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIGJ5dGVzW3N0YXJ0ICsgaV0gPSBwYWNrW2lzTGl0dGxlRW5kaWFuID8gaSA6IGNvdW50IC0gaSAtIDFdO1xufTtcblxuaWYgKCFOQVRJVkVfQVJSQVlfQlVGRkVSKSB7XG4gICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCkge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuICAgIHZhciBieXRlTGVuZ3RoID0gdG9JbmRleChsZW5ndGgpO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgYnl0ZXM6IGFycmF5RmlsbC5jYWxsKG5ldyBBcnJheShieXRlTGVuZ3RoKSwgMCksXG4gICAgICBieXRlTGVuZ3RoOiBieXRlTGVuZ3RoXG4gICAgfSk7XG4gICAgaWYgKCFERVNDUklQVE9SUykgdGhpcy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aDtcbiAgfTtcblxuICAkRGF0YVZpZXcgPSBmdW5jdGlvbiBEYXRhVmlldyhidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICREYXRhVmlldywgREFUQV9WSUVXKTtcbiAgICBhbkluc3RhbmNlKGJ1ZmZlciwgJEFycmF5QnVmZmVyLCBEQVRBX1ZJRVcpO1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBnZXRJbnRlcm5hbFN0YXRlKGJ1ZmZlcikuYnl0ZUxlbmd0aDtcbiAgICB2YXIgb2Zmc2V0ID0gdG9JbnRlZ2VyKGJ5dGVPZmZzZXQpO1xuICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCA+IGJ1ZmZlckxlbmd0aCkgdGhyb3cgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0Jyk7XG4gICAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPT09IHVuZGVmaW5lZCA/IGJ1ZmZlckxlbmd0aCAtIG9mZnNldCA6IHRvTGVuZ3RoKGJ5dGVMZW5ndGgpO1xuICAgIGlmIChvZmZzZXQgKyBieXRlTGVuZ3RoID4gYnVmZmVyTGVuZ3RoKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgICBidWZmZXI6IGJ1ZmZlcixcbiAgICAgIGJ5dGVMZW5ndGg6IGJ5dGVMZW5ndGgsXG4gICAgICBieXRlT2Zmc2V0OiBvZmZzZXRcbiAgICB9KTtcbiAgICBpZiAoIURFU0NSSVBUT1JTKSB7XG4gICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgIHRoaXMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGg7XG4gICAgICB0aGlzLmJ5dGVPZmZzZXQgPSBvZmZzZXQ7XG4gICAgfVxuICB9O1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGFkZEdldHRlcigkQXJyYXlCdWZmZXIsICdieXRlTGVuZ3RoJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgJ2J1ZmZlcicpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsICdieXRlTGVuZ3RoJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgJ2J5dGVPZmZzZXQnKTtcbiAgfVxuXG4gIHJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgZ2V0SW50ODogZnVuY3Rpb24gZ2V0SW50OChieXRlT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdIDw8IDI0ID4+IDI0O1xuICAgIH0sXG4gICAgZ2V0VWludDg6IGZ1bmN0aW9uIGdldFVpbnQ4KGJ5dGVPZmZzZXQpIHtcbiAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF07XG4gICAgfSxcbiAgICBnZXRJbnQxNjogZnVuY3Rpb24gZ2V0SW50MTYoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgdmFyIGJ5dGVzID0gZ2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICAgIHJldHVybiAoYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdKSA8PCAxNiA+PiAxNjtcbiAgICB9LFxuICAgIGdldFVpbnQxNjogZnVuY3Rpb24gZ2V0VWludDE2KGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgICByZXR1cm4gYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MzI6IGZ1bmN0aW9uIGdldEludDMyKGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJbnQzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpKTtcbiAgICB9LFxuICAgIGdldFVpbnQzMjogZnVuY3Rpb24gZ2V0VWludDMyKGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJbnQzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpKSA+Pj4gMDtcbiAgICB9LFxuICAgIGdldEZsb2F0MzI6IGZ1bmN0aW9uIGdldEZsb2F0MzIoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKSwgMjMpO1xuICAgIH0sXG4gICAgZ2V0RmxvYXQ2NDogZnVuY3Rpb24gZ2V0RmxvYXQ2NChieXRlT2Zmc2V0IC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICByZXR1cm4gdW5wYWNrSUVFRTc1NChnZXQodGhpcywgOCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpLCA1Mik7XG4gICAgfSxcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKSB7XG4gICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0ludDgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgc2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQsIHBhY2tJbnQ4LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZXRJbnQxNjogZnVuY3Rpb24gc2V0SW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSW50MTYsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBzZXRVaW50MTY6IGZ1bmN0aW9uIHNldFVpbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJbnQxNiwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHNldEludDMyOiBmdW5jdGlvbiBzZXRJbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJbnQzMiwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHNldFVpbnQzMjogZnVuY3Rpb24gc2V0VWludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0ludDMyLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc2V0RmxvYXQzMjogZnVuY3Rpb24gc2V0RmxvYXQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tGbG9hdDMyLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc2V0RmxvYXQ2NDogZnVuY3Rpb24gc2V0RmxvYXQ2NChieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDgsIGJ5dGVPZmZzZXQsIHBhY2tGbG9hdDY0LCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfSk7XG59IGVsc2Uge1xuICBpZiAoIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBOYXRpdmVBcnJheUJ1ZmZlcigxKTtcbiAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgTmF0aXZlQXJyYXlCdWZmZXIoLTEpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICB9KSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IE5hdGl2ZUFycmF5QnVmZmVyKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbmV3IE5hdGl2ZUFycmF5QnVmZmVyKDEuNSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbmV3IE5hdGl2ZUFycmF5QnVmZmVyKE5hTik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgcmV0dXJuIE5hdGl2ZUFycmF5QnVmZmVyLm5hbWUgIT0gQVJSQVlfQlVGRkVSO1xuICB9KSkge1xuICAgICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCkge1xuICAgICAgYW5JbnN0YW5jZSh0aGlzLCAkQXJyYXlCdWZmZXIpO1xuICAgICAgcmV0dXJuIG5ldyBOYXRpdmVBcnJheUJ1ZmZlcih0b0luZGV4KGxlbmd0aCkpO1xuICAgIH07XG4gICAgdmFyIEFycmF5QnVmZmVyUHJvdG90eXBlID0gJEFycmF5QnVmZmVyW1BST1RPVFlQRV0gPSBOYXRpdmVBcnJheUJ1ZmZlcltQUk9UT1RZUEVdO1xuICAgIGZvciAodmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKE5hdGl2ZUFycmF5QnVmZmVyKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOykge1xuICAgICAgaWYgKCEoKGtleSA9IGtleXNbaisrXSkgaW4gJEFycmF5QnVmZmVyKSkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoJEFycmF5QnVmZmVyLCBrZXksIE5hdGl2ZUFycmF5QnVmZmVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBBcnJheUJ1ZmZlclByb3RvdHlwZS5jb25zdHJ1Y3RvciA9ICRBcnJheUJ1ZmZlcjtcbiAgfVxuXG4gIC8vIFdlYktpdCBidWcgLSB0aGUgc2FtZSBwYXJlbnQgcHJvdG90eXBlIGZvciB0eXBlZCBhcnJheXMgYW5kIGRhdGEgdmlld1xuICBpZiAoc2V0UHJvdG90eXBlT2YgJiYgZ2V0UHJvdG90eXBlT2YoJERhdGFWaWV3UHJvdG90eXBlKSAhPT0gT2JqZWN0UHJvdG90eXBlKSB7XG4gICAgc2V0UHJvdG90eXBlT2YoJERhdGFWaWV3UHJvdG90eXBlLCBPYmplY3RQcm90b3R5cGUpO1xuICB9XG5cbiAgLy8gaU9TIFNhZmFyaSA3LnggYnVnXG4gIHZhciB0ZXN0VmlldyA9IG5ldyAkRGF0YVZpZXcobmV3ICRBcnJheUJ1ZmZlcigyKSk7XG4gIHZhciBuYXRpdmVTZXRJbnQ4ID0gJERhdGFWaWV3UHJvdG90eXBlLnNldEludDg7XG4gIHRlc3RWaWV3LnNldEludDgoMCwgMjE0NzQ4MzY0OCk7XG4gIHRlc3RWaWV3LnNldEludDgoMSwgMjE0NzQ4MzY0OSk7XG4gIGlmICh0ZXN0Vmlldy5nZXRJbnQ4KDApIHx8ICF0ZXN0Vmlldy5nZXRJbnQ4KDEpKSByZWRlZmluZUFsbCgkRGF0YVZpZXdQcm90b3R5cGUsIHtcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKSB7XG4gICAgICBuYXRpdmVTZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuICAgIH0sXG4gICAgc2V0VWludDg6IGZ1bmN0aW9uIHNldFVpbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKSB7XG4gICAgICBuYXRpdmVTZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuICAgIH1cbiAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG59XG5cbnNldFRvU3RyaW5nVGFnKCRBcnJheUJ1ZmZlciwgQVJSQVlfQlVGRkVSKTtcbnNldFRvU3RyaW5nVGFnKCREYXRhVmlldywgREFUQV9WSUVXKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFycmF5QnVmZmVyOiAkQXJyYXlCdWZmZXIsXG4gIERhdGFWaWV3OiAkRGF0YVZpZXdcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SX05BTUUpIHtcbiAgdmFyIENvbnN0cnVjdG9yID0gZ2V0QnVpbHRJbihDT05TVFJVQ1RPUl9OQU1FKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgQ29uc3RydWN0b3IgJiYgIUNvbnN0cnVjdG9yW1NQRUNJRVNdKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFNQRUNJRVMsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICAgIH0pO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcnJheUJ1ZmZlck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXInKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG5cbnZhciBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xudmFyIEFycmF5QnVmZmVyID0gYXJyYXlCdWZmZXJNb2R1bGVbQVJSQVlfQlVGRkVSXTtcbnZhciBOYXRpdmVBcnJheUJ1ZmZlciA9IGdsb2JhbFtBUlJBWV9CVUZGRVJdO1xuXG4vLyBgQXJyYXlCdWZmZXJgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheWJ1ZmZlci1jb25zdHJ1Y3RvclxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBOYXRpdmVBcnJheUJ1ZmZlciAhPT0gQXJyYXlCdWZmZXIgfSwge1xuICBBcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXJcbn0pO1xuXG5zZXRTcGVjaWVzKEFSUkFZX0JVRkZFUik7XG4iLCAidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBTcGVjaWVzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gZGVmYXVsdENvbnN0cnVjdG9yIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIEFycmF5QnVmZmVyTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbnZhciBBcnJheUJ1ZmZlciA9IEFycmF5QnVmZmVyTW9kdWxlLkFycmF5QnVmZmVyO1xudmFyIERhdGFWaWV3ID0gQXJyYXlCdWZmZXJNb2R1bGUuRGF0YVZpZXc7XG52YXIgbmF0aXZlQXJyYXlCdWZmZXJTbGljZSA9IEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZTtcblxudmFyIElOQ09SUkVDVF9TTElDRSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICFuZXcgQXJyYXlCdWZmZXIoMikuc2xpY2UoMSwgdW5kZWZpbmVkKS5ieXRlTGVuZ3RoO1xufSk7XG5cbi8vIGBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXlidWZmZXIucHJvdG90eXBlLnNsaWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXlCdWZmZXInLCBwcm90bzogdHJ1ZSwgdW5zYWZlOiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9TTElDRSB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgaWYgKG5hdGl2ZUFycmF5QnVmZmVyU2xpY2UgIT09IHVuZGVmaW5lZCAmJiBlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5hdGl2ZUFycmF5QnVmZmVyU2xpY2UuY2FsbChhbk9iamVjdCh0aGlzKSwgc3RhcnQpOyAvLyBGRiBmaXhcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IGFuT2JqZWN0KHRoaXMpLmJ5dGVMZW5ndGg7XG4gICAgdmFyIGZpcnN0ID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIEFycmF5QnVmZmVyKSkodG9MZW5ndGgoZmluIC0gZmlyc3QpKTtcbiAgICB2YXIgdmlld1NvdXJjZSA9IG5ldyBEYXRhVmlldyh0aGlzKTtcbiAgICB2YXIgdmlld1RhcmdldCA9IG5ldyBEYXRhVmlldyhyZXN1bHQpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgd2hpbGUgKGZpcnN0IDwgZmluKSB7XG4gICAgICB2aWV3VGFyZ2V0LnNldFVpbnQ4KGluZGV4KyssIHZpZXdTb3VyY2UuZ2V0VWludDgoZmlyc3QrKykpO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCAidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBgZ2xvYmFsVGhpc2Agb2JqZWN0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcbiQoeyBnbG9iYWw6IHRydWUgfSwge1xuICBnbG9iYWxUaGlzOiBnbG9iYWxcbn0pO1xuIiwgInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyICRzdHJpbmdpZnkgPSBnZXRCdWlsdEluKCdKU09OJywgJ3N0cmluZ2lmeScpO1xudmFyIHJlID0gL1tcXHVEODAwLVxcdURGRkZdL2c7XG52YXIgbG93ID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvO1xudmFyIGhpID0gL15bXFx1REMwMC1cXHVERkZGXSQvO1xuXG52YXIgZml4ID0gZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQsIHN0cmluZykge1xuICB2YXIgcHJldiA9IHN0cmluZy5jaGFyQXQob2Zmc2V0IC0gMSk7XG4gIHZhciBuZXh0ID0gc3RyaW5nLmNoYXJBdChvZmZzZXQgKyAxKTtcbiAgaWYgKChsb3cudGVzdChtYXRjaCkgJiYgIWhpLnRlc3QobmV4dCkpIHx8IChoaS50ZXN0KG1hdGNoKSAmJiAhbG93LnRlc3QocHJldikpKSB7XG4gICAgcmV0dXJuICdcXFxcdScgKyBtYXRjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTtcbiAgfSByZXR1cm4gbWF0Y2g7XG59O1xuXG52YXIgRk9SQ0VEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJHN0cmluZ2lmeSgnXFx1REYwNlxcdUQ4MzQnKSAhPT0gJ1wiXFxcXHVkZjA2XFxcXHVkODM0XCInXG4gICAgfHwgJHN0cmluZ2lmeSgnXFx1REVBRCcpICE9PSAnXCJcXFxcdWRlYWRcIic7XG59KTtcblxuaWYgKCRzdHJpbmdpZnkpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtd2VsbC1mb3JtZWQtc3RyaW5naWZ5XG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0LCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICAgIHZhciByZXN1bHQgPSAkc3RyaW5naWZ5LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gdHlwZW9mIHJlc3VsdCA9PSAnc3RyaW5nJyA/IHJlc3VsdC5yZXBsYWNlKHJlLCBmaXgpIDogcmVzdWx0O1xuICAgIH1cbiAgfSk7XG59XG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsICJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsICJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCAidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIGl0ZXJhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZm4sIHRoYXQsIEFTX0VOVFJJRVMsIElTX0lURVJBVE9SKSB7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChmbiwgdGhhdCwgQVNfRU5UUklFUyA/IDIgOiAxKTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IEFTX0VOVFJJRVNcbiAgICAgICAgICA/IGJvdW5kRnVuY3Rpb24oYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pXG4gICAgICAgICAgOiBib3VuZEZ1bmN0aW9uKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpO1xuICB9XG5cbiAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgcmVzdWx0ID0gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgYm91bmRGdW5jdGlvbiwgc3RlcC52YWx1ZSwgQVNfRU5UUklFUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuXG5pdGVyYXRlLnN0b3AgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIHJlc3VsdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCAidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZnJvbUVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LWZyb20tZW50cmllc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUgfSwge1xuICBmcm9tRW50cmllczogZnVuY3Rpb24gZnJvbUVudHJpZXMoaXRlcmFibGUpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KG9iaiwgaywgdik7XG4gICAgfSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG5pZiAoSXRlcmF0b3JQcm90b3R5cGUgPT0gdW5kZWZpbmVkKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuaWYgKCFJU19QVVJFICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIEl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UsIHRydWUpO1xuICBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3Rvcjtcbn07XG4iLCAidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4vLyBgSXNSZWdFeHBgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNyZWdleHBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNsYXNzb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LmRvdEFsbCkgcmVzdWx0ICs9ICdzJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IGNvZGVQb2ludEF0LCBhdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKENPTlZFUlRfVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuICAgIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICB2YXIgcG9zaXRpb24gPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgZmlyc3QgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICAgIHx8IChzZWNvbmQgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSkgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGXG4gICAgICAgID8gQ09OVkVSVF9UT19TVFJJTkcgPyBTLmNoYXJBdChwb3NpdGlvbikgOiBmaXJzdFxuICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HID8gUy5zbGljZShwb3NpdGlvbiwgcG9zaXRpb24gKyAyKSA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmNvZGVwb2ludGF0XG4gIGNvZGVBdDogY3JlYXRlTWV0aG9kKGZhbHNlKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuYXRgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG4gIGNoYXJBdDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xudmFyIGdldFJlZ0V4cEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgTUFUQ0hfQUxMID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaEFsbCcpO1xudmFyIFJFR0VYUF9TVFJJTkcgPSAnUmVnRXhwIFN0cmluZyc7XG52YXIgUkVHRVhQX1NUUklOR19JVEVSQVRPUiA9IFJFR0VYUF9TVFJJTkcgKyAnIEl0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFJFR0VYUF9TVFJJTkdfSVRFUkFUT1IpO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG52YXIgcmVnRXhwQnVpbHRpbkV4ZWMgPSBSZWdFeHBQcm90b3R5cGUuZXhlYztcbnZhciBuYXRpdmVNYXRjaEFsbCA9ICcnLm1hdGNoQWxsO1xuXG52YXIgV09SS1NfV0lUSF9OT05fR0xPQkFMX1JFR0VYID0gISFuYXRpdmVNYXRjaEFsbCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAnYScubWF0Y2hBbGwoLy4vKTtcbn0pO1xuXG52YXIgcmVnRXhwRXhlYyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICB2YXIgcmVzdWx0O1xuICBpZiAodHlwZW9mIGV4ZWMgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPSAnb2JqZWN0JykgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgZXhlYyByZXN1bHQnKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IHJldHVybiByZWdFeHBCdWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbnZhciAkUmVnRXhwU3RyaW5nSXRlcmF0b3IgPSBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKGZ1bmN0aW9uIFJlZ0V4cFN0cmluZ0l0ZXJhdG9yKHJlZ2V4cCwgc3RyaW5nLCBnbG9iYWwsIGZ1bGxVbmljb2RlKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IFJFR0VYUF9TVFJJTkdfSVRFUkFUT1IsXG4gICAgcmVnZXhwOiByZWdleHAsXG4gICAgc3RyaW5nOiBzdHJpbmcsXG4gICAgZ2xvYmFsOiBnbG9iYWwsXG4gICAgdW5pY29kZTogZnVsbFVuaWNvZGUsXG4gICAgZG9uZTogZmFsc2VcbiAgfSk7XG59LCBSRUdFWFBfU1RSSU5HLCBmdW5jdGlvbiBuZXh0KCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB2YXIgUiA9IHN0YXRlLnJlZ2V4cDtcbiAgdmFyIFMgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBtYXRjaCA9IHJlZ0V4cEV4ZWMoUiwgUyk7XG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogc3RhdGUuZG9uZSA9IHRydWUgfTtcbiAgaWYgKHN0YXRlLmdsb2JhbCkge1xuICAgIGlmIChTdHJpbmcobWF0Y2hbMF0pID09ICcnKSBSLmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChSLmxhc3RJbmRleCksIHN0YXRlLnVuaWNvZGUpO1xuICAgIHJldHVybiB7IHZhbHVlOiBtYXRjaCwgZG9uZTogZmFsc2UgfTtcbiAgfVxuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgcmV0dXJuIHsgdmFsdWU6IG1hdGNoLCBkb25lOiBmYWxzZSB9O1xufSk7XG5cbnZhciAkbWF0Y2hBbGwgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciBTID0gU3RyaW5nKHN0cmluZyk7XG4gIHZhciBDLCBmbGFnc1ZhbHVlLCBmbGFncywgbWF0Y2hlciwgZ2xvYmFsLCBmdWxsVW5pY29kZTtcbiAgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihSLCBSZWdFeHApO1xuICBmbGFnc1ZhbHVlID0gUi5mbGFncztcbiAgaWYgKGZsYWdzVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBSIGluc3RhbmNlb2YgUmVnRXhwICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpKSB7XG4gICAgZmxhZ3NWYWx1ZSA9IGdldFJlZ0V4cEZsYWdzLmNhbGwoUik7XG4gIH1cbiAgZmxhZ3MgPSBmbGFnc1ZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IFN0cmluZyhmbGFnc1ZhbHVlKTtcbiAgbWF0Y2hlciA9IG5ldyBDKEMgPT09IFJlZ0V4cCA/IFIuc291cmNlIDogUiwgZmxhZ3MpO1xuICBnbG9iYWwgPSAhIX5mbGFncy5pbmRleE9mKCdnJyk7XG4gIGZ1bGxVbmljb2RlID0gISF+ZmxhZ3MuaW5kZXhPZigndScpO1xuICBtYXRjaGVyLmxhc3RJbmRleCA9IHRvTGVuZ3RoKFIubGFzdEluZGV4KTtcbiAgcmV0dXJuIG5ldyAkUmVnRXhwU3RyaW5nSXRlcmF0b3IobWF0Y2hlciwgUywgZ2xvYmFsLCBmdWxsVW5pY29kZSk7XG59O1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaEFsbGAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctbWF0Y2hhbGxcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBXT1JLU19XSVRIX05PTl9HTE9CQUxfUkVHRVggfSwge1xuICBtYXRjaEFsbDogZnVuY3Rpb24gbWF0Y2hBbGwocmVnZXhwKSB7XG4gICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgIHZhciBmbGFncywgUywgbWF0Y2hlciwgcng7XG4gICAgaWYgKHJlZ2V4cCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNSZWdFeHAocmVnZXhwKSkge1xuICAgICAgICBmbGFncyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCdmbGFncycgaW4gUmVnRXhwUHJvdG90eXBlXG4gICAgICAgICAgPyByZWdleHAuZmxhZ3NcbiAgICAgICAgICA6IGdldFJlZ0V4cEZsYWdzLmNhbGwocmVnZXhwKVxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCF+ZmxhZ3MuaW5kZXhPZignZycpKSB0aHJvdyBUeXBlRXJyb3IoJ2AubWF0Y2hBbGxgIGRvZXMgbm90IGFsbG93IG5vbi1nbG9iYWwgcmVnZXhlcycpO1xuICAgICAgfVxuICAgICAgaWYgKFdPUktTX1dJVEhfTk9OX0dMT0JBTF9SRUdFWCkgcmV0dXJuIG5hdGl2ZU1hdGNoQWxsLmFwcGx5KE8sIGFyZ3VtZW50cyk7XG4gICAgICBtYXRjaGVyID0gcmVnZXhwW01BVENIX0FMTF07XG4gICAgICBpZiAobWF0Y2hlciA9PT0gdW5kZWZpbmVkICYmIElTX1BVUkUgJiYgY2xhc3NvZihyZWdleHApID09ICdSZWdFeHAnKSBtYXRjaGVyID0gJG1hdGNoQWxsO1xuICAgICAgaWYgKG1hdGNoZXIgIT0gbnVsbCkgcmV0dXJuIGFGdW5jdGlvbihtYXRjaGVyKS5jYWxsKHJlZ2V4cCwgTyk7XG4gICAgfSBlbHNlIGlmIChXT1JLU19XSVRIX05PTl9HTE9CQUxfUkVHRVgpIHJldHVybiBuYXRpdmVNYXRjaEFsbC5hcHBseShPLCBhcmd1bWVudHMpO1xuICAgIFMgPSBTdHJpbmcoTyk7XG4gICAgcnggPSBuZXcgUmVnRXhwKHJlZ2V4cCwgJ2cnKTtcbiAgICByZXR1cm4gSVNfUFVSRSA/ICRtYXRjaEFsbC5jYWxsKHJ4LCBTKSA6IHJ4W01BVENIX0FMTF0oUyk7XG4gIH1cbn0pO1xuXG5JU19QVVJFIHx8IE1BVENIX0FMTCBpbiBSZWdFeHBQcm90b3R5cGUgfHwgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cFByb3RvdHlwZSwgTUFUQ0hfQUxMLCAkbWF0Y2hBbGwpO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9mYWlscycpO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvcixcbi8vIHNvIHdlIHVzZSBhbiBpbnRlcm1lZGlhdGUgZnVuY3Rpb24uXG5mdW5jdGlvbiBSRShzLCBmKSB7XG4gIHJldHVybiBSZWdFeHAocywgZik7XG59XG5cbmV4cG9ydHMuVU5TVVBQT1JURURfWSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbiAgdmFyIHJlID0gUkUoJ2EnLCAneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnYWJjZCcpICE9IG51bGw7XG59KTtcblxuZXhwb3J0cy5CUk9LRU5fQ0FSRVQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc3MzY4N1xuICB2YXIgcmUgPSBSRSgnXnInLCAnZ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ3N0cicpICE9IG51bGw7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuL3JlZ2V4cC1mbGFncycpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuL3JlZ2V4cC1zdGlja3ktaGVscGVycycpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbi8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4vLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG52YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS87XG4gIHZhciByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMS5sYXN0SW5kZXggIT09IDAgfHwgcmUyLmxhc3RJbmRleCAhPT0gMDtcbn0pKCk7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5VTlNVUFBPUlRFRF9ZIHx8IHN0aWNreUhlbHBlcnMuQlJPS0VOX0NBUkVUO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRCB8fCBVTlNVUFBPUlRFRF9ZO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcbiAgICB2YXIgc3RpY2t5ID0gVU5TVVBQT1JURURfWSAmJiByZS5zdGlja3k7XG4gICAgdmFyIGZsYWdzID0gcmVnZXhwRmxhZ3MuY2FsbChyZSk7XG4gICAgdmFyIHNvdXJjZSA9IHJlLnNvdXJjZTtcbiAgICB2YXIgY2hhcnNBZGRlZCA9IDA7XG4gICAgdmFyIHN0ckNvcHkgPSBzdHI7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBmbGFncyA9IGZsYWdzLnJlcGxhY2UoJ3knLCAnJyk7XG4gICAgICBpZiAoZmxhZ3MuaW5kZXhPZignZycpID09PSAtMSkge1xuICAgICAgICBmbGFncyArPSAnZyc7XG4gICAgICB9XG5cbiAgICAgIHN0ckNvcHkgPSBTdHJpbmcoc3RyKS5zbGljZShyZS5sYXN0SW5kZXgpO1xuICAgICAgLy8gU3VwcG9ydCBhbmNob3JlZCBzdGlja3kgYmVoYXZpb3IuXG4gICAgICBpZiAocmUubGFzdEluZGV4ID4gMCAmJiAoIXJlLm11bHRpbGluZSB8fCByZS5tdWx0aWxpbmUgJiYgc3RyW3JlLmxhc3RJbmRleCAtIDFdICE9PSAnXFxuJykpIHtcbiAgICAgICAgc291cmNlID0gJyg/OiAnICsgc291cmNlICsgJyknO1xuICAgICAgICBzdHJDb3B5ID0gJyAnICsgc3RyQ29weTtcbiAgICAgICAgY2hhcnNBZGRlZCsrO1xuICAgICAgfVxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIHN0ciBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXig/OicgKyBzb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICB9XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyBzb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwoc3RpY2t5ID8gcmVDb3B5IDogcmUsIHN0ckNvcHkpO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG1hdGNoLmlucHV0ID0gbWF0Y2guaW5wdXQuc2xpY2UoY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoLmluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgICByZS5sYXN0SW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfSBlbHNlIHJlLmxhc3RJbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlLmxhc3RJbmRleCA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBleGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG5cbiQoeyB0YXJnZXQ6ICdSZWdFeHAnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAvLi8uZXhlYyAhPT0gZXhlYyB9LCB7XG4gIGV4ZWM6IGV4ZWNcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbi8vIElFIDw9IDExIHJlcGxhY2VzICQwIHdpdGggdGhlIHdob2xlIG1hdGNoLCBhcyBpZiBpdCB3YXMgJCZcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwMjQ2NjYvZ2V0dGluZy1pZS10by1yZXBsYWNlLWEtcmVnZXgtd2l0aC10aGUtbGl0ZXJhbC1zdHJpbmctMFxudmFyIFJFUExBQ0VfS0VFUFNfJDAgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2EnLnJlcGxhY2UoLy4vLCAnJDAnKSA9PT0gJyQwJztcbn0pKCk7XG5cbnZhciBSRVBMQUNFID0gd2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG4vLyBTYWZhcmkgPD0gMTMuMC4zKD8pIHN1YnN0aXR1dGVzIG50aCBjYXB0dXJlIHdoZXJlIG4+bSB3aXRoIGFuIGVtcHR5IHN0cmluZ1xudmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKC8uL1tSRVBMQUNFXSkge1xuICAgIHJldHVybiAvLi9bUkVQTEFDRV0oJ2EnLCAnJDAnKSA9PT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkoKTtcblxuLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4vLyBXZWV4IEpTIGhhcyBmcm96ZW4gYnVpbHQtaW4gcHJvdG90eXBlcywgc28gdXNlIHRyeSAvIGNhdGNoIHdyYXBwZXJcbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMsIHNoYW0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhKFxuICAgICAgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgJiZcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDAgJiZcbiAgICAgICFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgICkpIHx8XG4gICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICApIHtcbiAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgfSwge1xuICAgICAgUkVQTEFDRV9LRUVQU18kMDogUkVQTEFDRV9LRUVQU18kMCxcbiAgICAgIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFOiBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgIH0pO1xuICAgIHZhciBzdHJpbmdNZXRob2QgPSBtZXRob2RzWzBdO1xuICAgIHZhciByZWdleE1ldGhvZCA9IG1ldGhvZHNbMV07XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmluZ01ldGhvZCk7XG4gICAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cblxuICBpZiAoc2hhbSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCAidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL2NsYXNzb2YtcmF3Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vcmVnZXhwLWV4ZWMnKTtcblxuLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgfVxuXG4gIHJldHVybiByZWdleHBFeGVjLmNhbGwoUiwgUyk7XG59O1xuXG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSwgcmVhc29uKSB7XG4gIHZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IHJlYXNvbi5SRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTtcbiAgdmFyIFJFUExBQ0VfS0VFUFNfJDAgPSByZWFzb24uUkVQTEFDRV9LRUVQU18kMDtcbiAgdmFyIFVOU0FGRV9TVUJTVElUVVRFID0gUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPyAnJCcgOiAnJDAnO1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgcmVwbGFjZXIgPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiByZXBsYWNlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcmVwbGFjZXIuY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6IG5hdGl2ZVJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKCFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSAmJiBSRVBMQUNFX0tFRVBTXyQwKSB8fFxuICAgICAgICAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVwbGFjZVZhbHVlLmluZGV4T2YoVU5TQUZFX1NVQlNUSVRVVEUpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuIG5hdGl2ZVJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwgIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCAidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwgInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW1FbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS5lbmQ7XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxudmFyIEZPUkNFRCA9IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW1FbmQnKTtcblxudmFyIHRyaW1FbmQgPSBGT1JDRUQgPyBmdW5jdGlvbiB0cmltRW5kKCkge1xuICByZXR1cm4gJHRyaW1FbmQodGhpcyk7XG59IDogJycudHJpbUVuZDtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltRW5kLCB0cmltUmlnaHQgfWAgbWV0aG9kc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgdHJpbUVuZDogdHJpbUVuZCxcbiAgdHJpbVJpZ2h0OiB0cmltRW5kXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbVN0YXJ0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykuc3RhcnQ7XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxudmFyIEZPUkNFRCA9IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW1TdGFydCcpO1xuXG52YXIgdHJpbVN0YXJ0ID0gRk9SQ0VEID8gZnVuY3Rpb24gdHJpbVN0YXJ0KCkge1xuICByZXR1cm4gJHRyaW1TdGFydCh0aGlzKTtcbn0gOiAnJy50cmltU3RhcnQ7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVN0YXJ0LCB0cmltTGVmdCB9YCBtZXRob2RzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICB0cmltU3RhcnQ6IHRyaW1TdGFydCxcbiAgdHJpbUxlZnQ6IHRyaW1TdGFydFxufSk7XG4iLCAidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhlYyhvYmplY3QpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9BUlJBWV9CVUZGRVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLW5hdGl2ZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIgSW50OEFycmF5ID0gZ2xvYmFsLkludDhBcnJheTtcbnZhciBJbnQ4QXJyYXlQcm90b3R5cGUgPSBJbnQ4QXJyYXkgJiYgSW50OEFycmF5LnByb3RvdHlwZTtcbnZhciBVaW50OENsYW1wZWRBcnJheSA9IGdsb2JhbC5VaW50OENsYW1wZWRBcnJheTtcbnZhciBVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSA9IFVpbnQ4Q2xhbXBlZEFycmF5ICYmIFVpbnQ4Q2xhbXBlZEFycmF5LnByb3RvdHlwZTtcbnZhciBUeXBlZEFycmF5ID0gSW50OEFycmF5ICYmIGdldFByb3RvdHlwZU9mKEludDhBcnJheSk7XG52YXIgVHlwZWRBcnJheVByb3RvdHlwZSA9IEludDhBcnJheVByb3RvdHlwZSAmJiBnZXRQcm90b3R5cGVPZihJbnQ4QXJyYXlQcm90b3R5cGUpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgaXNQcm90b3R5cGVPZiA9IE9iamVjdFByb3RvdHlwZS5pc1Byb3RvdHlwZU9mO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBUWVBFRF9BUlJBWV9UQUcgPSB1aWQoJ1RZUEVEX0FSUkFZX1RBRycpO1xuLy8gRml4aW5nIG5hdGl2ZSB0eXBlZCBhcnJheXMgaW4gT3BlcmEgUHJlc3RvIGNyYXNoZXMgdGhlIGJyb3dzZXIsIHNlZSAjNTk1XG52YXIgTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyA9IE5BVElWRV9BUlJBWV9CVUZGRVIgJiYgISFzZXRQcm90b3R5cGVPZiAmJiBjbGFzc29mKGdsb2JhbC5vcGVyYSkgIT09ICdPcGVyYSc7XG52YXIgVFlQRURfQVJSQVlfVEFHX1JFUUlSRUQgPSBmYWxzZTtcbnZhciBOQU1FO1xuXG52YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QgPSB7XG4gIEludDhBcnJheTogMSxcbiAgVWludDhBcnJheTogMSxcbiAgVWludDhDbGFtcGVkQXJyYXk6IDEsXG4gIEludDE2QXJyYXk6IDIsXG4gIFVpbnQxNkFycmF5OiAyLFxuICBJbnQzMkFycmF5OiA0LFxuICBVaW50MzJBcnJheTogNCxcbiAgRmxvYXQzMkFycmF5OiA0LFxuICBGbG9hdDY0QXJyYXk6IDhcbn07XG5cbnZhciBpc1ZpZXcgPSBmdW5jdGlvbiBpc1ZpZXcoaXQpIHtcbiAgdmFyIGtsYXNzID0gY2xhc3NvZihpdCk7XG4gIHJldHVybiBrbGFzcyA9PT0gJ0RhdGFWaWV3JyB8fCBoYXMoVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QsIGtsYXNzKTtcbn07XG5cbnZhciBpc1R5cGVkQXJyYXkgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiBoYXMoVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QsIGNsYXNzb2YoaXQpKTtcbn07XG5cbnZhciBhVHlwZWRBcnJheSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNUeXBlZEFycmF5KGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgYSB0eXBlZCBhcnJheScpO1xufTtcblxudmFyIGFUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoQykge1xuICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICBpZiAoaXNQcm90b3R5cGVPZi5jYWxsKFR5cGVkQXJyYXksIEMpKSByZXR1cm4gQztcbiAgfSBlbHNlIGZvciAodmFyIEFSUkFZIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSBpZiAoaGFzKFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0LCBOQU1FKSkge1xuICAgIHZhciBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBnbG9iYWxbQVJSQVldO1xuICAgIGlmIChUeXBlZEFycmF5Q29uc3RydWN0b3IgJiYgKEMgPT09IFR5cGVkQXJyYXlDb25zdHJ1Y3RvciB8fCBpc1Byb3RvdHlwZU9mLmNhbGwoVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBDKSkpIHtcbiAgICAgIHJldHVybiBDO1xuICAgIH1cbiAgfSB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgYSB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcicpO1xufTtcblxudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBmdW5jdGlvbiAoS0VZLCBwcm9wZXJ0eSwgZm9yY2VkKSB7XG4gIGlmICghREVTQ1JJUFRPUlMpIHJldHVybjtcbiAgaWYgKGZvcmNlZCkgZm9yICh2YXIgQVJSQVkgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIHtcbiAgICB2YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZ2xvYmFsW0FSUkFZXTtcbiAgICBpZiAoVHlwZWRBcnJheUNvbnN0cnVjdG9yICYmIGhhcyhUeXBlZEFycmF5Q29uc3RydWN0b3IucHJvdG90eXBlLCBLRVkpKSB7XG4gICAgICBkZWxldGUgVHlwZWRBcnJheUNvbnN0cnVjdG9yLnByb3RvdHlwZVtLRVldO1xuICAgIH1cbiAgfVxuICBpZiAoIVR5cGVkQXJyYXlQcm90b3R5cGVbS0VZXSB8fCBmb3JjZWQpIHtcbiAgICByZWRlZmluZShUeXBlZEFycmF5UHJvdG90eXBlLCBLRVksIGZvcmNlZCA/IHByb3BlcnR5XG4gICAgICA6IE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgJiYgSW50OEFycmF5UHJvdG90eXBlW0tFWV0gfHwgcHJvcGVydHkpO1xuICB9XG59O1xuXG52YXIgZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZCA9IGZ1bmN0aW9uIChLRVksIHByb3BlcnR5LCBmb3JjZWQpIHtcbiAgdmFyIEFSUkFZLCBUeXBlZEFycmF5Q29uc3RydWN0b3I7XG4gIGlmICghREVTQ1JJUFRPUlMpIHJldHVybjtcbiAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgaWYgKGZvcmNlZCkgZm9yIChBUlJBWSBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZ2xvYmFsW0FSUkFZXTtcbiAgICAgIGlmIChUeXBlZEFycmF5Q29uc3RydWN0b3IgJiYgaGFzKFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgS0VZKSkge1xuICAgICAgICBkZWxldGUgVHlwZWRBcnJheUNvbnN0cnVjdG9yW0tFWV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghVHlwZWRBcnJheVtLRVldIHx8IGZvcmNlZCkge1xuICAgICAgLy8gVjggfiBDaHJvbWUgNDktNTAgYCVUeXBlZEFycmF5JWAgbWV0aG9kcyBhcmUgbm9uLXdyaXRhYmxlIG5vbi1jb25maWd1cmFibGVcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiByZWRlZmluZShUeXBlZEFycmF5LCBLRVksIGZvcmNlZCA/IHByb3BlcnR5IDogTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyAmJiBJbnQ4QXJyYXlbS0VZXSB8fCBwcm9wZXJ0eSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgfSBlbHNlIHJldHVybjtcbiAgfVxuICBmb3IgKEFSUkFZIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZ2xvYmFsW0FSUkFZXTtcbiAgICBpZiAoVHlwZWRBcnJheUNvbnN0cnVjdG9yICYmICghVHlwZWRBcnJheUNvbnN0cnVjdG9yW0tFWV0gfHwgZm9yY2VkKSkge1xuICAgICAgcmVkZWZpbmUoVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBLRVksIHByb3BlcnR5KTtcbiAgICB9XG4gIH1cbn07XG5cbmZvciAoTkFNRSBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICBpZiAoIWdsb2JhbFtOQU1FXSkgTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyA9IGZhbHNlO1xufVxuXG4vLyBXZWJLaXQgYnVnIC0gdHlwZWQgYXJyYXlzIGNvbnN0cnVjdG9ycyBwcm90b3R5cGUgaXMgT2JqZWN0LnByb3RvdHlwZVxuaWYgKCFOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTIHx8IHR5cGVvZiBUeXBlZEFycmF5ICE9ICdmdW5jdGlvbicgfHwgVHlwZWRBcnJheSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgVHlwZWRBcnJheSA9IGZ1bmN0aW9uIFR5cGVkQXJyYXkoKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xuICB9O1xuICBpZiAoTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUykgZm9yIChOQU1FIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gICAgaWYgKGdsb2JhbFtOQU1FXSkgc2V0UHJvdG90eXBlT2YoZ2xvYmFsW05BTUVdLCBUeXBlZEFycmF5KTtcbiAgfVxufVxuXG5pZiAoIU5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgfHwgIVR5cGVkQXJyYXlQcm90b3R5cGUgfHwgVHlwZWRBcnJheVByb3RvdHlwZSA9PT0gT2JqZWN0UHJvdG90eXBlKSB7XG4gIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5LnByb3RvdHlwZTtcbiAgaWYgKE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MpIGZvciAoTkFNRSBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICAgIGlmIChnbG9iYWxbTkFNRV0pIHNldFByb3RvdHlwZU9mKGdsb2JhbFtOQU1FXS5wcm90b3R5cGUsIFR5cGVkQXJyYXlQcm90b3R5cGUpO1xuICB9XG59XG5cbi8vIFdlYktpdCBidWcgLSBvbmUgbW9yZSBvYmplY3QgaW4gVWludDhDbGFtcGVkQXJyYXkgcHJvdG90eXBlIGNoYWluXG5pZiAoTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyAmJiBnZXRQcm90b3R5cGVPZihVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSkgIT09IFR5cGVkQXJyYXlQcm90b3R5cGUpIHtcbiAgc2V0UHJvdG90eXBlT2YoVWludDhDbGFtcGVkQXJyYXlQcm90b3R5cGUsIFR5cGVkQXJyYXlQcm90b3R5cGUpO1xufVxuXG5pZiAoREVTQ1JJUFRPUlMgJiYgIWhhcyhUeXBlZEFycmF5UHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkge1xuICBUWVBFRF9BUlJBWV9UQUdfUkVRSVJFRCA9IHRydWU7XG4gIGRlZmluZVByb3BlcnR5KFR5cGVkQXJyYXlQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMpID8gdGhpc1tUWVBFRF9BUlJBWV9UQUddIDogdW5kZWZpbmVkO1xuICB9IH0pO1xuICBmb3IgKE5BTUUgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIGlmIChnbG9iYWxbTkFNRV0pIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsW05BTUVdLCBUWVBFRF9BUlJBWV9UQUcsIE5BTUUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTOiBOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTLFxuICBUWVBFRF9BUlJBWV9UQUc6IFRZUEVEX0FSUkFZX1RBR19SRVFJUkVEICYmIFRZUEVEX0FSUkFZX1RBRyxcbiAgYVR5cGVkQXJyYXk6IGFUeXBlZEFycmF5LFxuICBhVHlwZWRBcnJheUNvbnN0cnVjdG9yOiBhVHlwZWRBcnJheUNvbnN0cnVjdG9yLFxuICBleHBvcnRUeXBlZEFycmF5TWV0aG9kOiBleHBvcnRUeXBlZEFycmF5TWV0aG9kLFxuICBleHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kOiBleHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kLFxuICBpc1ZpZXc6IGlzVmlldyxcbiAgaXNUeXBlZEFycmF5OiBpc1R5cGVkQXJyYXksXG4gIFR5cGVkQXJyYXk6IFR5cGVkQXJyYXksXG4gIFR5cGVkQXJyYXlQcm90b3R5cGU6IFR5cGVkQXJyYXlQcm90b3R5cGVcbn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xudmFyIE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpLk5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1M7XG5cbnZhciBBcnJheUJ1ZmZlciA9IGdsb2JhbC5BcnJheUJ1ZmZlcjtcbnZhciBJbnQ4QXJyYXkgPSBnbG9iYWwuSW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIEludDhBcnJheSgxKTtcbn0pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIG5ldyBJbnQ4QXJyYXkoLTEpO1xufSkgfHwgIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgbmV3IEludDhBcnJheSgpO1xuICBuZXcgSW50OEFycmF5KG51bGwpO1xuICBuZXcgSW50OEFycmF5KDEuNSk7XG4gIG5ldyBJbnQ4QXJyYXkoaXRlcmFibGUpO1xufSwgdHJ1ZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBTYWZhcmkgKDExKykgYnVnIC0gYSByZWFzb24gd2h5IGV2ZW4gU2FmYXJpIDEzIHNob3VsZCBsb2FkIGEgdHlwZWQgYXJyYXkgcG9seWZpbGxcbiAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkobmV3IEFycmF5QnVmZmVyKDIpLCAxLCB1bmRlZmluZWQpLmxlbmd0aCAhPT0gMTtcbn0pO1xuIiwgInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gdG9JbnRlZ2VyKGl0KTtcbiAgaWYgKHJlc3VsdCA8IDApIHRocm93IFJhbmdlRXJyb3IoXCJUaGUgYXJndW1lbnQgY2FuJ3QgYmUgbGVzcyB0aGFuIDBcIik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgInZhciB0b1Bvc2l0aXZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wb3NpdGl2ZS1pbnRlZ2VyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBCWVRFUykge1xuICB2YXIgb2Zmc2V0ID0gdG9Qb3NpdGl2ZUludGVnZXIoaXQpO1xuICBpZiAob2Zmc2V0ICUgQllURVMpIHRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCcpO1xuICByZXR1cm4gb2Zmc2V0O1xufTtcbiIsICJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGFUeXBlZEFycmF5Q29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpLmFUeXBlZEFycmF5Q29uc3RydWN0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShzb3VyY2UgLyogLCBtYXBmbiwgdGhpc0FyZyAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHNvdXJjZSk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgbWFwZm4gPSBhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICB2YXIgaSwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yLCBuZXh0O1xuICBpZiAoaXRlcmF0b3JNZXRob2QgIT0gdW5kZWZpbmVkICYmICFpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvck1ldGhvZC5jYWxsKE8pO1xuICAgIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICAgIE8gPSBbXTtcbiAgICB3aGlsZSAoIShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgICAgTy5wdXNoKHN0ZXAudmFsdWUpO1xuICAgIH1cbiAgfVxuICBpZiAobWFwcGluZyAmJiBhcmd1bWVudHNMZW5ndGggPiAyKSB7XG4gICAgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNbMl0sIDIpO1xuICB9XG4gIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgcmVzdWx0ID0gbmV3IChhVHlwZWRBcnJheUNvbnN0cnVjdG9yKHRoaXMpKShsZW5ndGgpO1xuICBmb3IgKGkgPSAwOyBsZW5ndGggPiBpOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBtYXBwaW5nID8gbWFwZm4oT1tpXSwgaSkgOiBPW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgInZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxudmFyIHB1c2ggPSBbXS5wdXNoO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXggfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHRhcmdldFtpbmRleF0gPSByZXN1bHQ7IC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsdWU7ICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7ICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4gIG1hcDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuICBldmVyeTogY3JlYXRlTWV0aG9kKDQpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KVxufTtcbiIsICJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcblxuLy8gbWFrZXMgc3ViY2xhc3Npbmcgd29yayBjb3JyZWN0IGZvciB3cmFwcGVkIGJ1aWx0LWluc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHRoaXMsIGR1bW15LCBXcmFwcGVyKSB7XG4gIHZhciBOZXdUYXJnZXQsIE5ld1RhcmdldFByb3RvdHlwZTtcbiAgaWYgKFxuICAgIC8vIGl0IGNhbiB3b3JrIG9ubHkgd2l0aCBuYXRpdmUgYHNldFByb3RvdHlwZU9mYFxuICAgIHNldFByb3RvdHlwZU9mICYmXG4gICAgLy8gd2UgaGF2ZW4ndCBjb21wbGV0ZWx5IGNvcnJlY3QgcHJlLUVTNiB3YXkgZm9yIGdldHRpbmcgYG5ldy50YXJnZXRgLCBzbyB1c2UgdGhpc1xuICAgIHR5cGVvZiAoTmV3VGFyZ2V0ID0gZHVtbXkuY29uc3RydWN0b3IpID09ICdmdW5jdGlvbicgJiZcbiAgICBOZXdUYXJnZXQgIT09IFdyYXBwZXIgJiZcbiAgICBpc09iamVjdChOZXdUYXJnZXRQcm90b3R5cGUgPSBOZXdUYXJnZXQucHJvdG90eXBlKSAmJlxuICAgIE5ld1RhcmdldFByb3RvdHlwZSAhPT0gV3JhcHBlci5wcm90b3R5cGVcbiAgKSBzZXRQcm90b3R5cGVPZigkdGhpcywgTmV3VGFyZ2V0UHJvdG90eXBlKTtcbiAgcmV0dXJuICR0aGlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBUWVBFRF9BUlJBWVNfQ09OU1RSVUNUT1JTX1JFUVVJUkVTX1dSQVBQRVJTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3R5cGVkLWFycmF5LWNvbnN0cnVjdG9ycy1yZXF1aXJlLXdyYXBwZXJzJyk7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgQXJyYXlCdWZmZXJNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4Jyk7XG52YXIgdG9PZmZzZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2Zmc2V0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciB0eXBlZEFycmF5RnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1mcm9tJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG52YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xudmFyIFJhbmdlRXJyb3IgPSBnbG9iYWwuUmFuZ2VFcnJvcjtcbnZhciBBcnJheUJ1ZmZlciA9IEFycmF5QnVmZmVyTW9kdWxlLkFycmF5QnVmZmVyO1xudmFyIERhdGFWaWV3ID0gQXJyYXlCdWZmZXJNb2R1bGUuRGF0YVZpZXc7XG52YXIgTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyA9IEFycmF5QnVmZmVyVmlld0NvcmUuTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUztcbnZhciBUWVBFRF9BUlJBWV9UQUcgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLlRZUEVEX0FSUkFZX1RBRztcbnZhciBUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5UeXBlZEFycmF5O1xudmFyIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLlR5cGVkQXJyYXlQcm90b3R5cGU7XG52YXIgYVR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXlDb25zdHJ1Y3RvcjtcbnZhciBpc1R5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmlzVHlwZWRBcnJheTtcbnZhciBCWVRFU19QRVJfRUxFTUVOVCA9ICdCWVRFU19QRVJfRUxFTUVOVCc7XG52YXIgV1JPTkdfTEVOR1RIID0gJ1dyb25nIGxlbmd0aCc7XG5cbnZhciBmcm9tTGlzdCA9IGZ1bmN0aW9uIChDLCBsaXN0KSB7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IG5ldyAoYVR5cGVkQXJyYXlDb25zdHJ1Y3RvcihDKSkobGVuZ3RoKTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSByZXN1bHRbaW5kZXhdID0gbGlzdFtpbmRleCsrXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShpdCwga2V5LCB7IGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpW2tleV07XG4gIH0gfSk7XG59O1xuXG52YXIgaXNBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIga2xhc3M7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoaXQpKSA9PSAnQXJyYXlCdWZmZXInIHx8IGtsYXNzID09ICdTaGFyZWRBcnJheUJ1ZmZlcic7XG59O1xuXG52YXIgaXNUeXBlZEFycmF5SW5kZXggPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgcmV0dXJuIGlzVHlwZWRBcnJheSh0YXJnZXQpXG4gICAgJiYgdHlwZW9mIGtleSAhPSAnc3ltYm9sJ1xuICAgICYmIGtleSBpbiB0YXJnZXRcbiAgICAmJiBTdHJpbmcoK2tleSkgPT0gU3RyaW5nKGtleSk7XG59O1xuXG52YXIgd3JhcHBlZEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkge1xuICByZXR1cm4gaXNUeXBlZEFycmF5SW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuICAgID8gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDIsIHRhcmdldFtrZXldKVxuICAgIDogbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbn07XG5cbnZhciB3cmFwcGVkRGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICBpZiAoaXNUeXBlZEFycmF5SW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuICAgICYmIGlzT2JqZWN0KGRlc2NyaXB0b3IpXG4gICAgJiYgaGFzKGRlc2NyaXB0b3IsICd2YWx1ZScpXG4gICAgJiYgIWhhcyhkZXNjcmlwdG9yLCAnZ2V0JylcbiAgICAmJiAhaGFzKGRlc2NyaXB0b3IsICdzZXQnKVxuICAgIC8vIFRPRE86IGFkZCB2YWxpZGF0aW9uIGRlc2NyaXB0b3Igdy9vIGNhbGxpbmcgYWNjZXNzb3JzXG4gICAgJiYgIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlXG4gICAgJiYgKCFoYXMoZGVzY3JpcHRvciwgJ3dyaXRhYmxlJykgfHwgZGVzY3JpcHRvci53cml0YWJsZSlcbiAgICAmJiAoIWhhcyhkZXNjcmlwdG9yLCAnZW51bWVyYWJsZScpIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSlcbiAgKSB7XG4gICAgdGFyZ2V0W2tleV0gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0gcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcbn07XG5cbmlmIChERVNDUklQVE9SUykge1xuICBpZiAoIU5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MpIHtcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZiA9IHdyYXBwZWRHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZiA9IHdyYXBwZWREZWZpbmVQcm9wZXJ0eTtcbiAgICBhZGRHZXR0ZXIoVHlwZWRBcnJheVByb3RvdHlwZSwgJ2J1ZmZlcicpO1xuICAgIGFkZEdldHRlcihUeXBlZEFycmF5UHJvdG90eXBlLCAnYnl0ZU9mZnNldCcpO1xuICAgIGFkZEdldHRlcihUeXBlZEFycmF5UHJvdG90eXBlLCAnYnl0ZUxlbmd0aCcpO1xuICAgIGFkZEdldHRlcihUeXBlZEFycmF5UHJvdG90eXBlLCAnbGVuZ3RoJyk7XG4gIH1cblxuICAkKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyB9LCB7XG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiB3cmFwcGVkR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIGRlZmluZVByb3BlcnR5OiB3cmFwcGVkRGVmaW5lUHJvcGVydHlcbiAgfSk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgd3JhcHBlciwgQ0xBTVBFRCkge1xuICAgIHZhciBCWVRFUyA9IFRZUEUubWF0Y2goL1xcZCskLylbMF0gLyA4O1xuICAgIHZhciBDT05TVFJVQ1RPUl9OQU1FID0gVFlQRSArIChDTEFNUEVEID8gJ0NsYW1wZWQnIDogJycpICsgJ0FycmF5JztcbiAgICB2YXIgR0VUVEVSID0gJ2dldCcgKyBUWVBFO1xuICAgIHZhciBTRVRURVIgPSAnc2V0JyArIFRZUEU7XG4gICAgdmFyIE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IGdsb2JhbFtDT05TVFJVQ1RPUl9OQU1FXTtcbiAgICB2YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yO1xuICAgIHZhciBUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUgPSBUeXBlZEFycmF5Q29uc3RydWN0b3IgJiYgVHlwZWRBcnJheUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB2YXIgZXhwb3J0ZWQgPSB7fTtcblxuICAgIHZhciBnZXR0ZXIgPSBmdW5jdGlvbiAodGhhdCwgaW5kZXgpIHtcbiAgICAgIHZhciBkYXRhID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgIHJldHVybiBkYXRhLnZpZXdbR0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5ieXRlT2Zmc2V0LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh0aGF0LCBpbmRleCwgdmFsdWUpIHtcbiAgICAgIHZhciBkYXRhID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgIGlmIChDTEFNUEVEKSB2YWx1ZSA9ICh2YWx1ZSA9IHJvdW5kKHZhbHVlKSkgPCAwID8gMCA6IHZhbHVlID4gMHhGRiA/IDB4RkYgOiB2YWx1ZSAmIDB4RkY7XG4gICAgICBkYXRhLnZpZXdbU0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5ieXRlT2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHZhciBhZGRFbGVtZW50ID0gZnVuY3Rpb24gKHRoYXQsIGluZGV4KSB7XG4gICAgICBuYXRpdmVEZWZpbmVQcm9wZXJ0eSh0aGF0LCBpbmRleCwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoaXMsIGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc2V0dGVyKHRoaXMsIGluZGV4LCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoIU5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MpIHtcbiAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGRhdGEsIG9mZnNldCwgJGxlbmd0aCkge1xuICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBieXRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdmFyIGJ1ZmZlciwgYnl0ZUxlbmd0aCwgbGVuZ3RoO1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgbGVuZ3RoID0gdG9JbmRleChkYXRhKTtcbiAgICAgICAgICBieXRlTGVuZ3RoID0gbGVuZ3RoICogQllURVM7XG4gICAgICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVMZW5ndGgpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXlCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgICBidWZmZXIgPSBkYXRhO1xuICAgICAgICAgIGJ5dGVPZmZzZXQgPSB0b09mZnNldChvZmZzZXQsIEJZVEVTKTtcbiAgICAgICAgICB2YXIgJGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICBpZiAoJGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoJGxlbiAlIEJZVEVTKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgICAgICBieXRlTGVuZ3RoID0gJGxlbiAtIGJ5dGVPZmZzZXQ7XG4gICAgICAgICAgICBpZiAoYnl0ZUxlbmd0aCA8IDApIHRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9IHRvTGVuZ3RoKCRsZW5ndGgpICogQllURVM7XG4gICAgICAgICAgICBpZiAoYnl0ZUxlbmd0aCArIGJ5dGVPZmZzZXQgPiAkbGVuKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxlbmd0aCA9IGJ5dGVMZW5ndGggLyBCWVRFUztcbiAgICAgICAgfSBlbHNlIGlmIChpc1R5cGVkQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICByZXR1cm4gZnJvbUxpc3QoVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHlwZWRBcnJheUZyb20uY2FsbChUeXBlZEFycmF5Q29uc3RydWN0b3IsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHNldEludGVybmFsU3RhdGUodGhhdCwge1xuICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyLFxuICAgICAgICAgIGJ5dGVPZmZzZXQ6IGJ5dGVPZmZzZXQsXG4gICAgICAgICAgYnl0ZUxlbmd0aDogYnl0ZUxlbmd0aCxcbiAgICAgICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgICAgICB2aWV3OiBuZXcgRGF0YVZpZXcoYnVmZmVyKVxuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSBhZGRFbGVtZW50KHRoYXQsIGluZGV4KyspO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzZXRQcm90b3R5cGVPZikgc2V0UHJvdG90eXBlT2YoVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBUeXBlZEFycmF5KTtcbiAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZSA9IFR5cGVkQXJyYXlDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoVHlwZWRBcnJheVByb3RvdHlwZSk7XG4gICAgfSBlbHNlIGlmIChUWVBFRF9BUlJBWVNfQ09OU1RSVUNUT1JTX1JFUVVJUkVTX1dSQVBQRVJTKSB7XG4gICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uIChkdW1teSwgZGF0YSwgdHlwZWRBcnJheU9mZnNldCwgJGxlbmd0aCkge1xuICAgICAgICBhbkluc3RhbmNlKGR1bW15LCBUeXBlZEFycmF5Q29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUpO1xuICAgICAgICByZXR1cm4gaW5oZXJpdElmUmVxdWlyZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHJldHVybiBuZXcgTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yKHRvSW5kZXgoZGF0YSkpO1xuICAgICAgICAgIGlmIChpc0FycmF5QnVmZmVyKGRhdGEpKSByZXR1cm4gJGxlbmd0aCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG5ldyBOYXRpdmVUeXBlZEFycmF5Q29uc3RydWN0b3IoZGF0YSwgdG9PZmZzZXQodHlwZWRBcnJheU9mZnNldCwgQllURVMpLCAkbGVuZ3RoKVxuICAgICAgICAgICAgOiB0eXBlZEFycmF5T2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBuZXcgTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yKGRhdGEsIHRvT2Zmc2V0KHR5cGVkQXJyYXlPZmZzZXQsIEJZVEVTKSlcbiAgICAgICAgICAgICAgOiBuZXcgTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yKGRhdGEpO1xuICAgICAgICAgIGlmIChpc1R5cGVkQXJyYXkoZGF0YSkpIHJldHVybiBmcm9tTGlzdChUeXBlZEFycmF5Q29uc3RydWN0b3IsIGRhdGEpO1xuICAgICAgICAgIHJldHVybiB0eXBlZEFycmF5RnJvbS5jYWxsKFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgZGF0YSk7XG4gICAgICAgIH0oKSwgZHVtbXksIFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcik7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSBzZXRQcm90b3R5cGVPZihUeXBlZEFycmF5Q29uc3RydWN0b3IsIFR5cGVkQXJyYXkpO1xuICAgICAgZm9yRWFjaChnZXRPd25Qcm9wZXJ0eU5hbWVzKE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvciksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBrZXksIE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvcltrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IucHJvdG90eXBlID0gVHlwZWRBcnJheUNvbnN0cnVjdG9yUHJvdG90eXBlO1xuICAgIH1cblxuICAgIGlmIChUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUuY29uc3RydWN0b3IgIT09IFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcikge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgVHlwZWRBcnJheUNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBpZiAoVFlQRURfQVJSQVlfVEFHKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoVHlwZWRBcnJheUNvbnN0cnVjdG9yUHJvdG90eXBlLCBUWVBFRF9BUlJBWV9UQUcsIENPTlNUUlVDVE9SX05BTUUpO1xuICAgIH1cblxuICAgIGV4cG9ydGVkW0NPTlNUUlVDVE9SX05BTUVdID0gVHlwZWRBcnJheUNvbnN0cnVjdG9yO1xuXG4gICAgJCh7XG4gICAgICBnbG9iYWw6IHRydWUsIGZvcmNlZDogVHlwZWRBcnJheUNvbnN0cnVjdG9yICE9IE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3Rvciwgc2hhbTogIU5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1NcbiAgICB9LCBleHBvcnRlZCk7XG5cbiAgICBpZiAoIShCWVRFU19QRVJfRUxFTUVOVCBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3IpKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBCWVRFU19QRVJfRUxFTUVOVCwgQllURVMpO1xuICAgIH1cblxuICAgIGlmICghKEJZVEVTX1BFUl9FTEVNRU5UIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUsIEJZVEVTX1BFUl9FTEVNRU5ULCBCWVRFUyk7XG4gICAgfVxuXG4gICAgc2V0U3BlY2llcyhDT05TVFJVQ1RPUl9OQU1FKTtcbiAgfTtcbn0gZWxzZSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsICJ2YXIgY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3R5cGVkLWFycmF5LWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBGbG9hdDMyQXJyYXlgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlZGFycmF5LW9iamVjdHNcbmNyZWF0ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvcignRmxvYXQzMicsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBGbG9hdDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuIiwgInZhciBjcmVhdGVUeXBlZEFycmF5Q29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHlwZWQtYXJyYXktY29uc3RydWN0b3InKTtcblxuLy8gYEZsb2F0NjRBcnJheWAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVkYXJyYXktb2JqZWN0c1xuY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yKCdGbG9hdDY0JywgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEZsb2F0NjRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG4iLCAidmFyIGNyZWF0ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1jb25zdHJ1Y3RvcicpO1xuXG4vLyBgSW50OEFycmF5YCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdHlwZWRhcnJheS1vYmplY3RzXG5jcmVhdGVUeXBlZEFycmF5Q29uc3RydWN0b3IoJ0ludDgnLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gSW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbiIsICJ2YXIgY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3R5cGVkLWFycmF5LWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBJbnQxNkFycmF5YCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdHlwZWRhcnJheS1vYmplY3RzXG5jcmVhdGVUeXBlZEFycmF5Q29uc3RydWN0b3IoJ0ludDE2JywgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuIiwgInZhciBjcmVhdGVUeXBlZEFycmF5Q29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHlwZWQtYXJyYXktY29uc3RydWN0b3InKTtcblxuLy8gYEludDMyQXJyYXlgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlZGFycmF5LW9iamVjdHNcbmNyZWF0ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvcignSW50MzInLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gSW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG4iLCAidmFyIGNyZWF0ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1jb25zdHJ1Y3RvcicpO1xuXG4vLyBgVWludDhBcnJheWAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVkYXJyYXktb2JqZWN0c1xuY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yKCdVaW50OCcsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbiIsICJ2YXIgY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3R5cGVkLWFycmF5LWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBVaW50OENsYW1wZWRBcnJheWAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVkYXJyYXktb2JqZWN0c1xuY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yKCdVaW50OCcsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OENsYW1wZWRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSwgdHJ1ZSk7XG4iLCAidmFyIGNyZWF0ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1jb25zdHJ1Y3RvcicpO1xuXG4vLyBgVWludDE2QXJyYXlgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlZGFycmF5LW9iamVjdHNcbmNyZWF0ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvcignVWludDE2JywgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQxNkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbiIsICJ2YXIgY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3R5cGVkLWFycmF5LWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBVaW50MzJBcnJheWAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVkYXJyYXktb2JqZWN0c1xuY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yKCdVaW50MzInLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gVWludDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBUWVBFRF9BUlJBWVNfQ09OU1RSVUNUT1JTX1JFUVVJUkVTX1dSQVBQRVJTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3R5cGVkLWFycmF5LWNvbnN0cnVjdG9ycy1yZXF1aXJlLXdyYXBwZXJzJyk7XG52YXIgZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJykuZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZDtcbnZhciB0eXBlZEFycmF5RnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1mcm9tJyk7XG5cbi8vIGAlVHlwZWRBcnJheSUuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUuZnJvbVxuZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZCgnZnJvbScsIHR5cGVkQXJyYXlGcm9tLCBUWVBFRF9BUlJBWVNfQ09OU1RSVUNUT1JTX1JFUVVJUkVTX1dSQVBQRVJTKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgVFlQRURfQVJSQVlTX0NPTlNUUlVDVE9SU19SRVFVSVJFU19XUkFQUEVSUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1jb25zdHJ1Y3RvcnMtcmVxdWlyZS13cmFwcGVycycpO1xuXG52YXIgYVR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXlDb25zdHJ1Y3RvcjtcbnZhciBleHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLm9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5vZlxuZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZCgnb2YnLCBmdW5jdGlvbiBvZigvKiAuLi5pdGVtcyAqLykge1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IG5ldyAoYVR5cGVkQXJyYXlDb25zdHJ1Y3Rvcih0aGlzKSkobGVuZ3RoKTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSByZXN1bHRbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xuICByZXR1cm4gcmVzdWx0O1xufSwgVFlQRURfQVJSQVlTX0NPTlNUUlVDVE9SU19SRVFVSVJFU19XUkFQUEVSUyk7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE0IEZvcmJlcyBMaW5kZXNheVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vIFN0YXRlczpcbi8vXG4vLyAwIC0gcGVuZGluZ1xuLy8gMSAtIGZ1bGZpbGxlZCB3aXRoIF92YWx1ZVxuLy8gMiAtIHJlamVjdGVkIHdpdGggX3ZhbHVlXG4vLyAzIC0gYWRvcHRlZCB0aGUgc3RhdGUgb2YgYW5vdGhlciBwcm9taXNlLCBfdmFsdWVcbi8vXG4vLyBvbmNlIHRoZSBzdGF0ZSBpcyBubyBsb25nZXIgcGVuZGluZyAoMCkgaXQgaXMgaW1tdXRhYmxlXG5cbi8vIEFsbCBgX2AgcHJlZml4ZWQgcHJvcGVydGllcyB3aWxsIGJlIHJlZHVjZWQgdG8gYF97cmFuZG9tIG51bWJlcn1gXG4vLyBhdCBidWlsZCB0aW1lIHRvIG9iZnVzY2F0ZSB0aGVtIGFuZCBkaXNjb3VyYWdlIHRoZWlyIHVzZS5cbi8vIFdlIGRvbid0IHVzZSBzeW1ib2xzIG9yIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0byBmdWxseSBoaWRlIHRoZW1cbi8vIGJlY2F1c2UgdGhlIHBlcmZvcm1hbmNlIGlzbid0IGdvb2QgZW5vdWdoLlxuXG4vLyB0byBhdm9pZCB1c2luZyB0cnkvY2F0Y2ggaW5zaWRlIGNyaXRpY2FsIGZ1bmN0aW9ucywgd2Vcbi8vIGV4dHJhY3QgdGhlbSB0byBoZXJlLlxudmFyIExBU1RfRVJST1IgPSBudWxsO1xudmFyIElTX0VSUk9SID0ge307XG5mdW5jdGlvbiBnZXRUaGVuKG9iaikge1xuICB0cnkge1xuICAgIHJldHVybiBvYmoudGhlbjtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBMQVNUX0VSUk9SID0gZXg7XG4gICAgcmV0dXJuIElTX0VSUk9SO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyeUNhbGxPbmUoZm4sIGEpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZm4oYSk7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgTEFTVF9FUlJPUiA9IGV4O1xuICAgIHJldHVybiBJU19FUlJPUjtcbiAgfVxufVxuZnVuY3Rpb24gdHJ5Q2FsbFR3byhmbiwgYSwgYikge1xuICB0cnkge1xuICAgIGZuKGEsIGIpO1xuICB9IGNhdGNoIChleCkge1xuICAgIExBU1RfRVJST1IgPSBleDtcbiAgICByZXR1cm4gSVNfRVJST1I7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJpbVN0YWNrKHN0YWNrKSB7XG4gICAgaWYgKCFzdGFjaykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gc3RhY2suaW5kZXhPZignXFxuJyk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgfVxuICAgIC8vIHJlbW92ZSBcImF0IFByb21pc2UyXCIgc3RhY2suXG4gICAgcmV0dXJuIHN0YWNrLnN1YnN0cmluZyhpbmRleCArIDEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IChvcHQpID0+IHtcbiAgdmFyIG5leHRUaWNrID0gb3B0Lm5leHRUaWNrO1xuICBmdW5jdGlvbiBQcm9taXNlKGZuKSB7XG4gICAgICB0aGlzLl9fY3JlYXRlU3RhY2sgPSB0cmltU3RhY2sobmV3IEVycm9yKCdQcm9taXNlIGNyZWF0aW9uIHN0YWNrJykuc3RhY2spO1xuICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZSBjb25zdHJ1Y3RvcidzIGFyZ3VtZW50IGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICB0aGlzLl9kZWZlcnJlZFN0YXRlID0gMDtcbiAgICB0aGlzLl9zdGF0ZSA9IDA7XG4gICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX2RlZmVycmVkcyA9IG51bGw7XG4gICAgaWYgKGZuID09PSBub29wKSByZXR1cm47XG4gICAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcbiAgfVxuICBQcm9taXNlLl9vbkhhbmRsZSA9IG51bGw7XG4gIFByb21pc2UuX29uUmVqZWN0ID0gbnVsbDtcbiAgUHJvbWlzZS5fbm9vcCA9IG5vb3A7XG5cbiAgUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IgIT09IFByb21pc2UpIHtcbiAgICAgIHJldHVybiBzYWZlVGhlbih0aGlzLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICAgIHZhciByZXMgPSBuZXcgUHJvbWlzZShub29wKTtcbiAgICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHJlcykpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2FmZVRoZW4oc2VsZiwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gbmV3IHNlbGYuY29uc3RydWN0b3IoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVzID0gbmV3IFByb21pc2Uobm9vcCk7XG4gICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgaGFuZGxlKHNlbGYsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCByZXMpKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGUoc2VsZiwgZGVmZXJyZWQpIHtcbiAgICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcbiAgICB9XG4gICAgaWYgKFByb21pc2UuX29uSGFuZGxlKSB7XG4gICAgICBQcm9taXNlLl9vbkhhbmRsZShzZWxmKTtcbiAgICB9XG4gICAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgICBpZiAoc2VsZi5fZGVmZXJyZWRTdGF0ZSA9PT0gMCkge1xuICAgICAgICBzZWxmLl9kZWZlcnJlZFN0YXRlID0gMTtcbiAgICAgICAgc2VsZi5fZGVmZXJyZWRzID0gZGVmZXJyZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxmLl9kZWZlcnJlZFN0YXRlID09PSAxKSB7XG4gICAgICAgIHNlbGYuX2RlZmVycmVkU3RhdGUgPSAyO1xuICAgICAgICBzZWxmLl9kZWZlcnJlZHMgPSBbc2VsZi5fZGVmZXJyZWRzLCBkZWZlcnJlZF07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlbGYuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGFuZGxlUmVzb2x2ZWQoc2VsZiwgZGVmZXJyZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzb2x2ZWQoc2VsZiwgZGVmZXJyZWQpIHtcbiAgICBuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjYiA9IHNlbGYuX3N0YXRlID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuICAgICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMSkge1xuICAgICAgICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgc2VsZi5fdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJldCA9IHRyeUNhbGxPbmUoY2IsIHNlbGYuX3ZhbHVlKTtcbiAgICAgIGlmIChyZXQgPT09IElTX0VSUk9SKSB7XG4gICAgICAgIHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBMQVNUX0VSUk9SKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZXNvbHZlKHNlbGYsIG5ld1ZhbHVlKSB7XG4gICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL3Byb21pc2VzLWFwbHVzL3Byb21pc2VzLXNwZWMjdGhlLXByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcbiAgICBpZiAobmV3VmFsdWUgPT09IHNlbGYpIHtcbiAgICAgIHJldHVybiByZWplY3Qoc2VsZiwgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKSk7XG4gICAgfVxuICAgIGlmIChuZXdWYWx1ZSAmJiAodHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICB2YXIgdGhlbiA9IGdldFRoZW4obmV3VmFsdWUpO1xuICAgICAgaWYgKHRoZW4gPT09IElTX0VSUk9SKSB7XG4gICAgICAgIHJldHVybiByZWplY3Qoc2VsZiwgTEFTVF9FUlJPUik7XG4gICAgICB9XG4gICAgICBpZiAodGhlbiA9PT0gc2VsZi50aGVuICYmIG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBzZWxmLl9zdGF0ZSA9IDM7XG4gICAgICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGZpbmFsZShzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkb1Jlc29sdmUodGhlbi5iaW5kKG5ld1ZhbHVlKSwgc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VsZi5fc3RhdGUgPSAxO1xuICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmluYWxlKHNlbGYpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gICAgc2VsZi5fc3RhdGUgPSAyO1xuICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgaWYgKFByb21pc2UuX29uUmVqZWN0KSB7XG4gICAgICBQcm9taXNlLl9vblJlamVjdChzZWxmLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGZpbmFsZShzZWxmKTtcbiAgfVxuICBmdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICAgIGlmIChzZWxmLl9kZWZlcnJlZFN0YXRlID09PSAxKSB7XG4gICAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzKTtcbiAgICAgIHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XG4gICAgfVxuICAgIGlmIChzZWxmLl9kZWZlcnJlZFN0YXRlID09PSAyKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSkge1xuICAgIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gICAgdGhpcy5vblJlamVjdGVkID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBvblJlamVjdGVkIDogbnVsbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwb3RlbnRpYWxseSBtaXNiZWhhdmluZyByZXNvbHZlciBmdW5jdGlvbiBhbmQgbWFrZSBzdXJlXG4gICAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICAgKlxuICAgKiBNYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IGFzeW5jaHJvbnkuXG4gICAqL1xuICBmdW5jdGlvbiBkb1Jlc29sdmUoZm4sIHByb21pc2UpIHtcbiAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgIHZhciByZXMgPSB0cnlDYWxsVHdvKFxuICAgICAgZm4sXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICAgIGlmICghZG9uZSAmJiByZXMgPT09IElTX0VSUk9SKSB7XG4gICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIHJlamVjdChwcm9taXNlLCBMQVNUX0VSUk9SKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFByb21pc2U7XG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNCBGb3JiZXMgTGluZGVzYXlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbi8vVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBFUzYgZXh0ZW5zaW9ucyB0byB0aGUgY29yZSBQcm9taXNlcy9BKyBBUElcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlID0+IHtcbiAgLyogU3RhdGljIEZ1bmN0aW9ucyAqL1xuXG4gIHZhciBUUlVFID0gdmFsdWVQcm9taXNlKHRydWUpO1xuICB2YXIgRkFMU0UgPSB2YWx1ZVByb21pc2UoZmFsc2UpO1xuICB2YXIgTlVMTCA9IHZhbHVlUHJvbWlzZShudWxsKTtcbiAgdmFyIFVOREVGSU5FRCA9IHZhbHVlUHJvbWlzZSh1bmRlZmluZWQpO1xuICB2YXIgWkVSTyA9IHZhbHVlUHJvbWlzZSgwKTtcbiAgdmFyIEVNUFRZU1RSSU5HID0gdmFsdWVQcm9taXNlKCcnKTtcblxuICBmdW5jdGlvbiB2YWx1ZVByb21pc2UodmFsdWUpIHtcbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKFByb21pc2UuX25vb3ApO1xuICAgIHAuX3N0YXRlID0gMTtcbiAgICBwLl92YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiBwO1xuICB9XG4gIFByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gTlVMTDtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFVOREVGSU5FRDtcbiAgICBpZiAodmFsdWUgPT09IHRydWUpIHJldHVybiBUUlVFO1xuICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHJldHVybiBGQUxTRTtcbiAgICBpZiAodmFsdWUgPT09IDApIHJldHVybiBaRVJPO1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHJldHVybiBFTVBUWVNUUklORztcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHRoZW4gPSB2YWx1ZS50aGVuO1xuICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UodGhlbi5iaW5kKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZWplY3QoZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlUHJvbWlzZSh2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIGl0ZXJhYmxlVG9BcnJheSA9IGZ1bmN0aW9uKGl0ZXJhYmxlKSB7XG4gICAgaWYgKHR5cGVvZiBBcnJheS5mcm9tID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFUzIwMTUrLCBpdGVyYWJsZXMgZXhpc3RcbiAgICAgIGl0ZXJhYmxlVG9BcnJheSA9IEFycmF5LmZyb207XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShpdGVyYWJsZSk7XG4gICAgfVxuXG4gICAgLy8gRVM1LCBvbmx5IGFycmF5cyBhbmQgYXJyYXktbGlrZXMgZXhpc3RcbiAgICBpdGVyYWJsZVRvQXJyYXkgPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoeCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaXRlcmFibGUpO1xuICB9O1xuXG4gIFByb21pc2UuYWxsID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgdmFyIGFyZ3MgPSBpdGVyYWJsZVRvQXJyYXkoYXJyKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuICAgICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBQcm9taXNlICYmIHZhbC50aGVuID09PSBQcm9taXNlLnByb3RvdHlwZS50aGVuKSB7XG4gICAgICAgICAgICB3aGlsZSAodmFsLl9zdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgICB2YWwgPSB2YWwuX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbC5fc3RhdGUgPT09IDEpIHJldHVybiByZXMoaSwgdmFsLl92YWx1ZSk7XG4gICAgICAgICAgICBpZiAodmFsLl9zdGF0ZSA9PT0gMikgcmVqZWN0KHZhbC5fdmFsdWUpO1xuICAgICAgICAgICAgdmFsLnRoZW4oZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKHRoZW4uYmluZCh2YWwpKTtcbiAgICAgICAgICAgICAgcC50aGVuKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlamVjdCh2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaXRlcmFibGVUb0FycmF5KHZhbHVlcykuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qIFByb3RvdHlwZSBNZXRob2RzICovXG5cbiAgUHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgfTtcbiAgUHJvbWlzZS5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgdmFyIHNlbGYgPSBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50aGVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB0aGlzO1xuICAgIHNlbGYudGhlbihudWxsLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9O1xuICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiB0aGlzLnRoZW4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYoKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYoKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH07XG4gIHJldHVybiBQcm9taXNlO1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTQgRm9yYmVzIExpbmRlc2F5XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChQcm9taXNlLCBzZXRUaW1lb3V0LCBjbGVhclRpbWVvdXQpID0+IHtcbiAgdmFyIERFRkFVTFRfV0hJVEVMSVNUID0gW1JlZmVyZW5jZUVycm9yLCBUeXBlRXJyb3IsIFJhbmdlRXJyb3JdO1xuXG4gIHZhciBlbmFibGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICBlbmFibGVkID0gZmFsc2U7XG4gICAgUHJvbWlzZS5fb25IYW5kbGUgPSBudWxsO1xuICAgIFByb21pc2UuX29uUmVqZWN0ID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZShvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKGVuYWJsZWQpIGRpc2FibGUoKTtcbiAgICBlbmFibGVkID0gdHJ1ZTtcbiAgICB2YXIgaWQgPSAwO1xuICAgIHZhciBkaXNwbGF5SWQgPSAwO1xuICAgIHZhciByZWplY3Rpb25zID0ge307XG4gICAgUHJvbWlzZS5fb25IYW5kbGUgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb21pc2UuX3N0YXRlID09PSAyICYmIC8vIElTIFJFSkVDVEVEXG4gICAgICAgIHJlamVjdGlvbnNbcHJvbWlzZS5fcmVqZWN0aW9uSWRdXG4gICAgICApIHtcbiAgICAgICAgaWYgKHJlamVjdGlvbnNbcHJvbWlzZS5fcmVqZWN0aW9uSWRdLmxvZ2dlZCkge1xuICAgICAgICAgIG9uSGFuZGxlZChwcm9taXNlLl9yZWplY3Rpb25JZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICYmIGNsZWFyVGltZW91dChyZWplY3Rpb25zW3Byb21pc2UuX3JlamVjdGlvbklkXS50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgcmVqZWN0aW9uc1twcm9taXNlLl9yZWplY3Rpb25JZF07XG4gICAgICB9XG4gICAgfTtcbiAgICBQcm9taXNlLl9vblJlamVjdCA9IGZ1bmN0aW9uKHByb21pc2UsIGVycikge1xuICAgICAgaWYgKHByb21pc2UuX2RlZmVycmVkU3RhdGUgPT09IDApIHtcbiAgICAgICAgLy8gbm90IHlldCBoYW5kbGVkXG4gICAgICAgIHByb21pc2UuX3JlamVjdGlvbklkID0gaWQrKztcbiAgICAgICAgcmVqZWN0aW9uc1twcm9taXNlLl9yZWplY3Rpb25JZF0gPSB7XG4gICAgICAgICAgZGlzcGxheUlkOiBudWxsLFxuICAgICAgICAgIGVycm9yOiBlcnIsXG4gICAgICAgICAgdGltZW91dDogc2V0VGltZW91dChcbiAgICAgICAgICAgIG9uVW5oYW5kbGVkLmJpbmQobnVsbCwgcHJvbWlzZSksIDApLFxuICAgICAgICAgIGxvZ2dlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBvblVuaGFuZGxlZChwcm9taXNlKSB7XG4gICAgICBjb25zdCBpZCA9IHByb21pc2UuX3JlamVjdGlvbklkO1xuICAgICAgaWYgKG9wdGlvbnMuYWxsUmVqZWN0aW9ucyB8fCBtYXRjaFdoaXRlbGlzdChyZWplY3Rpb25zW2lkXS5lcnJvciwgb3B0aW9ucy53aGl0ZWxpc3QgfHwgREVGQVVMVF9XSElURUxJU1QpKSB7XG4gICAgICAgIHJlamVjdGlvbnNbaWRdLmRpc3BsYXlJZCA9IGRpc3BsYXlJZCsrO1xuICAgICAgICBpZiAob3B0aW9ucy5vblVuaGFuZGxlZCkge1xuICAgICAgICAgIHJlamVjdGlvbnNbaWRdLmxvZ2dlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHJlamVjdGlvbnNbaWRdLmVycm9yICYmICEocmVqZWN0aW9uc1tpZF0uZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHJlamVjdGlvbnNbaWRdLmVycm9yKSk7XG4gICAgICAgICAgICBlcnJvci5zdGFjayA9IHByb21pc2UuX19jcmVhdGVTdGFjaztcbiAgICAgICAgICAgIHJlamVjdGlvbnNbaWRdLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbnMub25VbmhhbmRsZWQocmVqZWN0aW9uc1tpZF0uZGlzcGxheUlkLCByZWplY3Rpb25zW2lkXS5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0aW9uc1tpZF0ubG9nZ2VkID0gdHJ1ZTtcbiAgICAgICAgICBsb2dFcnJvcihyZWplY3Rpb25zW2lkXS5kaXNwbGF5SWQsIHJlamVjdGlvbnNbaWRdLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbkhhbmRsZWQoaWQpIHtcbiAgICAgIGlmIChyZWplY3Rpb25zW2lkXS5sb2dnZWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMub25IYW5kbGVkKSB7XG4gICAgICAgICAgb3B0aW9ucy5vbkhhbmRsZWQocmVqZWN0aW9uc1tpZF0uZGlzcGxheUlkLCByZWplY3Rpb25zW2lkXS5lcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJlamVjdGlvbnNbaWRdLm9uVW5oYW5kbGVkKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdQcm9taXNlIFJlamVjdGlvbiBIYW5kbGVkIChpZDogJyArIHJlamVjdGlvbnNbaWRdLmRpc3BsYXlJZCArICcpOicpO1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICcgIFRoaXMgbWVhbnMgeW91IGNhbiBpZ25vcmUgYW55IHByZXZpb3VzIG1lc3NhZ2VzIG9mIHRoZSBmb3JtIFwiUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uXCIgd2l0aCBpZCAnICtcbiAgICAgICAgICAgICAgcmVqZWN0aW9uc1tpZF0uZGlzcGxheUlkICtcbiAgICAgICAgICAgICAgJy4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ0Vycm9yKGlkLCBlcnJvcikge1xuICAgIGNvbnNvbGUud2FybignUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uIChpZDogJyArIGlkICsgJyk6Jyk7XG4gICAgdmFyIGVyclN0ciA9IChlcnJvciAmJiAoZXJyb3Iuc3RhY2sgfHwgZXJyb3IpKSArICcnO1xuICAgIGVyclN0ci5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICBjb25zb2xlLndhcm4oJyAgJyArIGxpbmUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hXaGl0ZWxpc3QoZXJyb3IsIGxpc3QpIHtcbiAgICByZXR1cm4gbGlzdC5zb21lKGZ1bmN0aW9uKGNscykge1xuICAgICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgY2xzO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlLFxuICAgIGRpc2FibGUsXG4gIH07XG59O1xuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbnZhciBwcm9taXNlRmFjdG9yID0gcmVxdWlyZSgnLi9jb3JlJyk7XG52YXIgZXM2ID0gcmVxdWlyZSgnLi9lczYtZXh0ZW5zaW9ucycpO1xudmFyIHJlamVjdGlvbkhhbmRsZSA9IHJlcXVpcmUoJy4vcmVqZWN0aW9uLXRyYWNraW5nJyk7XG52YXIgZ2cgPSBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cbmdnLmdldFByb21pc2UgPSBtb2R1bGUuZXhwb3J0cy5nZXRQcm9taXNlID0gKG9wdCkgPT4ge1xuICB2YXIgc2V0VGltZW91dCA9IG9wdC5zZXRUaW1lb3V0O1xuICB2YXIgb25VbmhhbmRsZWQgPSBvcHQub25VbmhhbmRsZWQ7XG4gIHZhciBjbGVhclRpbWVvdXQgPSBvcHQuY2xlYXJUaW1lb3V0O1xuICB2YXIgbmV4dFRpY2sgPSBvcHQubmV4dFRpY2sgfHwgKGZuID0+IHsgc2V0VGltZW91dChmbiwgMCk7IH0pO1xuICB2YXIgUHJvbWlzZSA9IHByb21pc2VGYWN0b3IoeyBuZXh0VGljazogbmV4dFRpY2sgfSk7XG4gIFByb21pc2UgPSBlczYoUHJvbWlzZSk7XG4gIFByb21pc2UgPSByZWplY3Rpb25IYW5kbGUoUHJvbWlzZSwgc2V0VGltZW91dCwgY2xlYXJUaW1lb3V0KS5lbmFibGUoe1xuICAgIGFsbFJlamVjdGlvbnM6IHRydWUsXG4gICAgb25VbmhhbmRsZWQsXG4gIH0pO1xuXG4gIHJldHVybiBQcm9taXNlO1xufTtcbiIsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMyBEZW5pcyBQdXNoa2FyZXZcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuICovO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbicpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5tYXRjaC1hbGwnKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mbGF0Jyk7XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmxhdC1tYXAnKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5yZXZlcnNlJyk7XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc29ydCcpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnVuc2NvcGFibGVzLmZsYXQnKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS51bnNjb3BhYmxlcy5mbGF0LW1hcCcpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LWJ1ZmZlci5jb25zdHJ1Y3RvcicpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LWJ1ZmZlci5zbGljZScpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLmdsb2JhbC10aGlzJyk7XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXMuanNvbi5zdHJpbmdpZnknKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZnJvbS1lbnRyaWVzJyk7XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLm1hdGNoLWFsbCcpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlJyk7XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnRyaW0nKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS1lbmQnKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS1zdGFydCcpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmZsb2F0MzItYXJyYXknKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5mbG9hdDY0LWFycmF5Jyk7XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuaW50OC1hcnJheScpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuaW50MzItYXJyYXknKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS51aW50OC1hcnJheScpO1xucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnVpbnQ4LWNsYW1wZWQtYXJyYXknKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS51aW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS51aW50MzItYXJyYXknKTtcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5mcm9tJyk7XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkub2YnKTtcbiIsICIvLyBDb3B5cmlnaHQgMjAyNCBUaGUgTHlueCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuaW1wb3J0ICdAbHlueC1qcy9pb3MtcG9seWZpbGwnO1xuaW1wb3J0ICdAbHlueC1qcy9pb3MtcG9seWZpbGwtcHJvbWlzZSc7XG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgJy4vaW5kZXguY2FyZCc7XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblxuLy8gR2V0IHRoZSBnbG9iYWwgdmFyaWFibGUgb2YgdGhlIGN1cnJlbnQgSlMgcnVudGltZS5cbmNvbnN0IF9nbG9iYWwgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuICByZXR1cm4gdGhpcyB8fCAoMCwgZXZhbCkoJ3RoaXMnKTtcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBfZ2xvYmFsO1xuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KTogYm9vbGVhbiB7XG4gIC8vIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCksIHByb3BlcnR5KVxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCB8fCB7fSwgcHJvcGVydHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVR5cGUoZGF0YTogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBkYXRhO1xuICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHJldHVybiB0eXBlO1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkgcmV0dXJuICdhcnJheSc7XG4gIGlmIChkYXRhID09IG51bGwpIHJldHVybiAnbnVsbCc7XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuICdkYXRlJztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiAncmVnRXhwJztcbiAgcmV0dXJuICdvYmplY3QnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsOiB1bmtub3duKTogdmFsIGlzIHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbDogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0RGF0YVR5cGUodmFsKSA9PT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iajogdW5rbm93bik6IG9iaiBpcyBBbnlGdW5jdGlvbiB7XG4gIGNvbnN0IGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUob2JqKTtcbiAgcmV0dXJuIGRhdGFUeXBlID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShhcnJheTogdW5rbm93bik6IGFycmF5IGlzIEFycmF5PHVua25vd24+IHtcbiAgcmV0dXJuIGdldERhdGFUeXBlKGFycmF5KSA9PT0gJ2FycmF5Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbChvOiB1bmtub3duKTogbyBpcyBudWxsIHtcbiAgcmV0dXJuIG8gPT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChvOiB1bmtub3duKTogbyBpcyB1bmRlZmluZWQge1xuICByZXR1cm4gbyA9PT0gdm9pZCAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JVbmRlZihvOiB1bmtub3duKTogbyBpcyBudWxsIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlzVW5kZWZpbmVkKG8pIHx8IGlzTnVsbChvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXJyb3IobzogdW5rbm93bik6IG8gaXMgRXJyb3Ige1xuICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSkge1xuICAgIGNhc2UgJ1tvYmplY3QgRXJyb3JdJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgJ1tvYmplY3QgRXhjZXB0aW9uXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlICdbb2JqZWN0IERPTUV4Y2VwdGlvbl0nOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0luc3RhbmNlT2YobywgRXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luc3RhbmNlT2Y8VCBleHRlbmRzIEZ1bmN0aW9uPihvOiB1bmtub3duLCBiYXNlOiBUKTogbyBpcyBUIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbyBpbnN0YW5jZW9mIGJhc2U7XG4gIH0gY2F0Y2ggKF9lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaGlyZFNjcmlwdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICB0eXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKG1zZzogYW55KSB7XG4gICAgc3VwZXIoYCR7bXNnfWApO1xuICAgIHRoaXMudHlwZSA9ICdUaGlyZFNjcmlwdEVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZVNka0tub3duRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHR5cGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgc3VwZXIoYEFQUC1TRVJWSUNFLVNESzogKyAke21zZ31gKTtcbiAgICB0aGlzLnR5cGUgPSAnQXBwU2VydmljZVNka0tub3duRXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWlkKCk6IHN0cmluZyB7XG4gIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjaGFyKSA9PiB7XG4gICAgY29uc3QgcmFuZCA9ICgxNiAqIE1hdGgucmFuZG9tKCkpIHwgMDtcbiAgICByZXR1cm4gKGNoYXIgPT09ICd4JyA/IHJhbmQgOiAoMyAmIHJhbmQpIHwgOCkudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKTogdm9pZCB7fVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaFJpZ2h0PFQ+KGFycjogQXJyYXk8VD4sIGNiOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIGZvciAobGV0IGluZGV4ID0gbGVuIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgY2IoYXJyW2luZGV4XSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignZm9yRWFjaFJpZ2h0IEVSUk9SOiBmaXJzdCBwYXJhbXMgbXVzdCBiZSBhcnJheS4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2tNZXJnZShfY2JzKTogdm9pZCB7XG4gIGlmIChBcnJheS5pc0FycmF5KF9jYnMpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IF9jYnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIF9jYnNbaV0oKTtcbiAgICB9XG4gIH1cbn1cbiIsICIvLyBDb3B5cmlnaHQgMjAyNCBUaGUgTHlueCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXG5leHBvcnQgdHlwZSBFcnJvck5hbWUgPVxuICB8ICdJTlRFUk5BTF9QQVJTRV9FUlJPUidcbiAgfCAnSU5URVJOQUxfUlVOVElNRV9FUlJPUidcbiAgfCAnVVNFUl9WQUxJREFURV9FUlJPUidcbiAgfCAnVVNFUl9SVU5USU1FX0VSUk9SJ1xuICB8ICdEQVRBX0NIQU5HRV9IQU5ETEVfRVJST1InXG4gIHwgJ0lOVk9LRV9FUlJPUic7XG5cbmV4cG9ydCB0eXBlIEVycm9yS2luZCA9ICdJTlRFUk5BTF9FUlJPUicgfCAnVVNFUl9FUlJPUic7XG5leHBvcnQgdHlwZSBFcnJvckVudiA9ICdTRVJWSUNFJztcblxuLyoqXG4gKiBUaGUgZW51bSB2YWx1ZXMgc2hvdWxkIGJlIHN5bmMgd2l0aCBgbHlueF9lcnJvci5oYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gTHlueEVycm9yTGV2ZWwge1xuICBGYXRhbCA9IDAsXG4gIEVycm9yLFxuICBXYXJuLFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBhYnN0cmFjdCBraW5kOiBFcnJvcktpbmQ7XG4gIGFic3RyYWN0IG5hbWU6IEVycm9yTmFtZTtcbiAgZW52PzogRXJyb3JFbnY7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3RhY2s/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBpZiAoc3RhY2spIHtcbiAgICAgIHRoaXMuc3RhY2sgPSBzdGFjaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEludGVybmFsRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xuICBraW5kID0gJ0lOVEVSTkFMX0VSUk9SJyBhcyBjb25zdDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVzZXJFcnJvciBleHRlbmRzIEJhc2VFcnJvciB7XG4gIGtpbmQgPSAnVVNFUl9FUlJPUicgYXMgY29uc3Q7XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyVmFsaWRhdGVFcnJvciBleHRlbmRzIFVzZXJFcnJvciB7XG4gIG5hbWUgPSAnVVNFUl9WQUxJREFURV9FUlJPUicgYXMgY29uc3Q7XG59XG5cbi8qKiBlcnJvciBjb21lcyBmb3JtIHVzZSBjb2RlICovXG5leHBvcnQgY2xhc3MgVXNlclJ1bnRpbWVFcnJvciBleHRlbmRzIFVzZXJFcnJvciB7XG4gIG5hbWUgPSAnVVNFUl9SVU5USU1FX0VSUk9SJyBhcyBjb25zdDtcbn1cblxuLyoqXG4gKiBlcnJvciBmcm9tIGludGVybmFsIGZyYW1ld29ya1xuICovXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxSdW50aW1lRXJyb3IgZXh0ZW5kcyBJbnRlcm5hbEVycm9yIHtcbiAgbmFtZSA9ICdJTlRFUk5BTF9SVU5USU1FX0VSUk9SJyBhcyBjb25zdDtcbn1cblxuLyoqXG4gKiBlcnJvciBmcm9tIGxlcHVzTkdcbiAqL1xuZXhwb3J0IGNsYXNzIEludGVybmFsTGVwdXNOZ0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0YWNrOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3RhY2s/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBpZiAoc3RhY2spIHtcbiAgICAgIHRoaXMuc3RhY2sgPSBzdGFjaztcbiAgICB9XG4gIH1cbn1cblxuLyoqIGVycm9yIGNvbWVzIGZyb20ganNiIGludm9rZSAgKi9cbmV4cG9ydCBjbGFzcyBJbnZva2VFcnJvciBleHRlbmRzIEludGVybmFsRXJyb3Ige1xuICBuYW1lID0gJ0lOVk9LRV9FUlJPUicgYXMgY29uc3Q7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlRW5naW5lS25vd25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgdHlwZTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICBzdXBlcihgQVBQLVNFUlZJQ0UtRW5naW5lOiAke21zZ31gKTtcbiAgICB0aGlzLnR5cGUgPSAnQXBwU2VydmljZUVuZ2luZUtub3duRXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2Ugc291cmNlTWFwUmVsZWFzZU9iaiB7XG4gIG5hbWU6IHN0cmluZztcbiAgc3RhY2s6IHN0cmluZzsgLy8gZGV0YWlsIHN0YWNrIG9mIGVycm9yXG4gIG1lc3NhZ2U6IHN0cmluZzsgLy8gdGhlIHNvdXJjZU1hcFJlbGVhc2VJZCwgc3VjaCBhcyBcImQ3MzE2MDExOWVmN2U3Nzc3NjI0NmNhY2EyYTdiOThlXCJcbn1cbiIsICIvLyBDb3B5cmlnaHQgMjAyNCBUaGUgTHlueCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FTlRSWSA9ICdfX0NhcmRfXyc7XG5leHBvcnQgY29uc3QgQVBQX1NFUlZJQ0VfTkFNRSA9ICdhcHAtc2VydmljZS5qcyc7XG5leHBvcnQgY29uc3QgU09VUkNFX01BUF9SRUxFQVNFX0VSUk9SX05BTUUgPSAnTHlueEdldFNvdXJjZU1hcFJlbGVhc2VFcnJvcic7XG5leHBvcnQgaW50ZXJmYWNlIFJVTl9UWVBFIHtcbiAgZmlsZW5hbWU6IHN0cmluZztcbiAgLyoqIFJlcGxhY2UgdGhlIGNvZGUgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBjb21taXRIYXNoIGFmdGVyIGNvbXBpbGF0aW9uICovXG4gIHNsb3Q6IHN0cmluZztcblxuICAvKiogc291cmNlbWFwIHJlbGVhc2UgZm9yIGtlcm5lbCAqL1xuICByZWxlYXNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMWU5YX0NPUkU6IFJVTl9UWVBFID0ge1xuICBmaWxlbmFtZTogJ2x5bnhfY29yZScsXG4gIHNsb3Q6IF9fQ09NTUlUX0hBU0hfXyxcbiAgcmVsZWFzZTogX19CVUlMRF9WRVJTSU9OX18sXG59O1xuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbi8qKlxuICogVGhlIFN1YmplY3QgaW50ZXJmYWNlIGRlY2xhcmVzIGEgc2V0IG9mIG1ldGhvZHMgZm9yIG1hbmFnaW5nIHN1YnNjcmliZXJzLlxuICovXG5pbnRlcmZhY2UgU3ViamVjdCB7XG4gIHJlZ2lzdGVyT2JzZXJ2ZXIob2JzZXJ2ZXI6IEZ1bmN0aW9uKTogdm9pZDtcbiAgcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXI6IEZ1bmN0aW9uKTogdm9pZDtcbiAgbm90aWZ5RGF0YUNoYW5nZSh2YWx1ZTogYW55KTogdm9pZDtcbn1cblxuLyoqXG4gKiBUaGUgU3ViamVjdCBvd25zIHNvbWUgaW1wb3J0YW50IHN0YXRlIGFuZCBub3RpZmllcyBvYnNlcnZlcnMgd2hlbiB0aGUgc3RhdGVcbiAqIGNoYW5nZXMuXG4gKi9cbmNsYXNzIFNoYXJlRGF0YVN1YmplY3QgaW1wbGVtZW50cyBTdWJqZWN0IHtcbiAgLyoqXG4gICAqIEB0eXBlIHtudW1iZXJ9IEZvciB0aGUgc2FrZSBvZiBzaW1wbGljaXR5LCB0aGUgU3ViamVjdCdzIHN0YXRlLCBlc3NlbnRpYWxcbiAgICogdG8gYWxsIHN1YnNjcmliZXJzLCBpcyBzdG9yZWQgaW4gdGhpcyB2YXJpYWJsZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7T2JzZXJ2ZXJbXX0gTGlzdCBvZiBzdWJzY3JpYmVycy5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgb2JzZXJ2ZXJzRnVuYzogRnVuY3Rpb25bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgc3Vic2NyaXB0aW9uIG1hbmFnZW1lbnQgbWV0aG9kcy5cbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGlzRXhpc3QgPSB0aGlzLm9ic2VydmVyc0Z1bmMuaW5jbHVkZXMob2JzZXJ2ZXIpO1xuICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICByZXR1cm4gbmF0aXZlQ29uc29sZS5sb2coJ1N1YmplY3Q6IE9ic2VydmVyIGhhcyBiZWVuIGF0dGFjaGVkIGFscmVhZHkuJyk7XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZXJzRnVuYy5wdXNoKG9ic2VydmVyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVPYnNlcnZlcihvYnNlcnZlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAvLyBuYXRpdmVDb25zb2xlLmxvZygnU3ViamVjdDogTm9uZXhpc3RlbnQgb2JzZXJ2ZXIuJyk7XG4gICAgY29uc3Qgb2JzZXJ2ZXJJbmRleCA9IHRoaXMub2JzZXJ2ZXJzRnVuYy5pbmRleE9mKG9ic2VydmVyKTtcbiAgICBpZiAob2JzZXJ2ZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBuYXRpdmVDb25zb2xlLmxvZygnU3ViamVjdDogTm9uZXhpc3RlbnQgb2JzZXJ2ZXIuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vYnNlcnZlcnNGdW5jLnNwbGljZShvYnNlcnZlckluZGV4LCAxKTtcbiAgICAvLyAgIG5hdGl2ZUNvbnNvbGUubG9nKCdTdWJqZWN0OiBEZXRhY2hlZCBhbiBvYnNlcnZlci4nKTtcbiAgfVxuXG4gIHB1YmxpYyBub3RpZnlEYXRhQ2hhbmdlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9ic2VydmVyc0Z1bmMuZm9yRWFjaCgodG9PYnNlcnZlcikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB0b09ic2VydmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdG9PYnNlcnZlcih2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgbmF0aXZlQ29uc29sZS5sb2coXG4gICAgICAgICAgICAnU2hhcmVkRGF0YSBjaGFuZ2UgYW5kIG5vdGlmeURhdGFDaGFuZ2UgZXJyb3IgaW5mbzonICsgZXJyb3JcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hhcmVEYXRhU3ViamVjdCB9O1xuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCB7IERFRkFVTFRfRU5UUlkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTaGFyZURhdGFTdWJqZWN0IH0gZnJvbSAnLi4vbW9kdWxlcy9zaGFyZWREYXRhL1NoYXJlRGF0YVN1YmplY3QnO1xuaW1wb3J0IHsgbmF0aXZlR2xvYmFsIGFzIF9nbG9iYWwgfSBmcm9tICdAbHlueC1qcy9ydW50aW1lLXNoYXJlZCc7XG5pbXBvcnQgeyBMeW54TmFwaUxvYWRlciB9IGZyb20gJ0BseW54LWpzL3R5cGVzJztcblxuLy8gZm9yIGNhcmQuXG5fZ2xvYmFsLm11bHRpQXBwcyA9IHt9O1xuX2dsb2JhbC5jdXJyZW50QXBwSWQgPSAnJztcbl9nbG9iYWwuZ2xvYkNvbXBvbmVudFJlZ2lzdFBhdGggPSAnJztcbl9nbG9iYWwuc2hhcmVkRGF0YSA9IHt9O1xuX2dsb2JhbC5nbG9iRHluYW1pY0NvbXBvbmVudEVudHJ5ID0gREVGQVVMVF9FTlRSWTtcblxuX2dsb2JhbC5zaGFyZURhdGFTdWJqZWN0ID0gbmV3IFNoYXJlRGF0YVN1YmplY3QoKTtcblxuX2dsb2JhbC5UYXJvTHlueCA9IHt9O1xuLy8gYnVuZGxlIHJ1biB3aXRoIG5vIGV2YWxcbl9nbG9iYWwuYnVuZGxlU3VwcG9ydExvYWRTY3JpcHQgPSB0cnVlO1xuLy8gZm9yIG5hcGlcbl9nbG9iYWwuZ2V0TmFwaUxvYWRlciA9ICgpOiBMeW54TmFwaUxvYWRlciB8IHVuZGVmaW5lZCA9PiB7XG4gIHJldHVybiBfZ2xvYmFsLl9fbHlueE5hcGlMb2FkZXI7XG59O1xuXG5leHBvcnQgY29uc3QgeyBsb2FkU2NyaXB0IH0gPSBfZ2xvYmFsO1xuZXhwb3J0IGRlZmF1bHQgX2dsb2JhbDtcbiIsICIvLyBDb3B5cmlnaHQgMjAyNCBUaGUgTHlueCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXG5sZXQgaXNOYXRpdmVDb25zb2xlSGFzQUxvZzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFsb2coc3RyOiBzdHJpbmcpIHtcbiAgaWYgKCFfX09QRU5fSU5URVJOQUxfTE9HX18pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzTmF0aXZlQ29uc29sZUhhc0FMb2cgPT09IHVuZGVmaW5lZCkge1xuICAgIGlzTmF0aXZlQ29uc29sZUhhc0FMb2cgPSB0eXBlb2YgbmF0aXZlQ29uc29sZS5hbG9nID09PSAnZnVuY3Rpb24nO1xuICB9XG4gIGlmIChpc05hdGl2ZUNvbnNvbGVIYXNBTG9nKSB7XG4gICAgbmF0aXZlQ29uc29sZS5hbG9nKCdbTHlueEpTU0RLXScgKyBzdHIpO1xuICB9XG59XG5cbmxldCBpc05hdGl2ZUNvbnNvbGVIYXNSZXBvcnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBvcnQoc3RyOiBzdHJpbmcpIHtcbiAgaWYgKCFfX09QRU5fSU5URVJOQUxfTE9HX18pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzTmF0aXZlQ29uc29sZUhhc1JlcG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaXNOYXRpdmVDb25zb2xlSGFzUmVwb3J0ID0gdHlwZW9mIG5hdGl2ZUNvbnNvbGUucmVwb3J0ID09PSAnZnVuY3Rpb24nO1xuICB9XG4gIGlmIChpc05hdGl2ZUNvbnNvbGVIYXNSZXBvcnQpIHtcbiAgICBuYXRpdmVDb25zb2xlLnJlcG9ydCgnW0x5bnhKU1NES10nICsgc3RyKTtcbiAgfVxufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmNvbnN0IG51bWJlclJlZ0V4cCA9IC9cXGQrLztcbmNsYXNzIFZlcnNpb24ge1xuICBtYWpvcjogbnVtYmVyID0gMDtcbiAgbWlub3I6IG51bWJlciA9IDA7XG4gIHJldmlzaW9uOiBudW1iZXIgPSAwO1xuICBidWlsZDogbnVtYmVyID0gMDtcblxuICAvLyB2ZXJzaW9uOiBtYWpvci5taW5vci5yZXZpc2lvbi5idWlsZFxuICBjb25zdHJ1Y3Rvcih2ZXJzaW9uOiBzdHJpbmcpIHtcbiAgICB2ZXJzaW9uID0gU3RyaW5nKHZlcnNpb24pO1xuICAgIFtcbiAgICAgIHRoaXMubWFqb3IgPSAwLFxuICAgICAgdGhpcy5taW5vciA9IDAsXG4gICAgICB0aGlzLnJldmlzaW9uID0gMCxcbiAgICAgIHRoaXMuYnVpbGQgPSAwLFxuICAgIF0gPSB2ZXJzaW9uLnNwbGl0KCcuJykubWFwKCh2KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXJSZWdFeHAuZXhlYyh2KTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuICtyZXN1bHRbMF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdyZWF0ZXIgVGhhblxuICAgKiBAcGFyYW0gdmVyc2lvbiB0aGUgdmVyc2lvbiB0byBiZSBjb21wYXJlZFxuICAgKiBAcmV0dXJucyB0aGlzID4gdmVyc2lvblxuICAgKi9cbiAgZ3QodmVyc2lvbjogc3RyaW5nIHwgVmVyc2lvbik6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYWpvciA+IHZlcnNpb24ubWFqb3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tYWpvciA8IHZlcnNpb24ubWFqb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5vciA+IHZlcnNpb24ubWlub3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5taW5vciA8IHZlcnNpb24ubWlub3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXZpc2lvbiA+IHZlcnNpb24ucmV2aXNpb24pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXZpc2lvbiA8IHZlcnNpb24ucmV2aXNpb24pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5idWlsZCA+IHZlcnNpb24uYnVpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWlsZCA8IHZlcnNpb24uYnVpbGQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBlcXVhbHNcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRVF1YWxcbiAgICogQHBhcmFtIHZlcnNpb24gdGhlIHZlcnNpb24gdG8gYmUgY29tcGFyZWRcbiAgICogQHJldHVybnMgdGhpcyA9PSB2ZXJzaW9uXG4gICAqL1xuICBlcSh2ZXJzaW9uOiBzdHJpbmcgfCBWZXJzaW9uKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKHZlcnNpb24pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICB0aGlzLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICB0aGlzLnJldmlzaW9uID09PSB2ZXJzaW9uLnJldmlzaW9uICYmXG4gICAgICB0aGlzLmJ1aWxkID09PSB2ZXJzaW9uLmJ1aWxkXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMZXNzIFRoYW5cbiAgICogQHBhcmFtIHZlcnNpb24gdGhlIHZlcnNpb24gdG8gYmUgY29tcGFyZWRcbiAgICogQHJldHVybnMgdGhpcyA8IHZlcnNpb25cbiAgICovXG4gIGx0KHZlcnNpb246IHN0cmluZyB8IFZlcnNpb24pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5lcSh2ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhdGhpcy5ndCh2ZXJzaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHcmVhdGVyIFRoYW4gb3IgRXF1YWxcbiAgICogQHBhcmFtIHZlcnNpb24gdGhlIHZlcnNpb24gdG8gYmUgY29tcGFyZWRcbiAgICogQHJldHVybnMgdGhpcyA+PSB2ZXJzaW9uXG4gICAqL1xuICBndGUodmVyc2lvbjogc3RyaW5nIHwgVmVyc2lvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVxKHZlcnNpb24pIHx8IHRoaXMuZ3QodmVyc2lvbik7XG4gIH1cblxuICAvKipcbiAgICogTGVzcyBUaGFuIG9yIEVxdWFsXG4gICAqIEBwYXJhbSB2ZXJzaW9uIHRoZSB2ZXJzaW9uIHRvIGJlIGNvbXBhcmVkXG4gICAqIEByZXR1cm5zIHRoaXMgPD0gdmVyc2lvblxuICAgKi9cbiAgbHRlKHZlcnNpb246IHN0cmluZyB8IFZlcnNpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lcSh2ZXJzaW9uKSB8fCB0aGlzLmx0KHZlcnNpb24pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlcnNpb247XG5cbmV4cG9ydCBjb25zdCB2ZXJzaW9uMl80ID0gbmV3IFZlcnNpb24oJzIuNCcpO1xuZXhwb3J0IGNvbnN0IHZlcnNpb24yXzcgPSBuZXcgVmVyc2lvbignMi43Jyk7XG5leHBvcnQgY29uc3QgdmVyc2lvbjJfOSA9IG5ldyBWZXJzaW9uKCcyLjknKTtcbmV4cG9ydCBjb25zdCB2ZXJzaW9uMl8xMiA9IG5ldyBWZXJzaW9uKCcyLjEyJyk7XG5leHBvcnQgY29uc3QgdmVyc2lvbjJfMTQgPSBuZXcgVmVyc2lvbignMi4xNCcpO1xuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCB7IExZTlhfQ09SRSwgUlVOX1RZUEUgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgQXBwLCBOYXRpdmVBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICdAbHlueC1qcy9ydW50aW1lLXNoYXJlZCc7XG5pbXBvcnQgeyBCYXNlRXJyb3IsIEx5bnhFcnJvckxldmVsIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0RXJyb3IoXG4gIGVycm9yOiBCYXNlRXJyb3IsXG4gIG5hdGl2ZUFwcDogTmF0aXZlQXBwLFxuICBvcHRpb25zPzoge1xuICAgIHJ1blR5cGU/OiBSVU5fVFlQRTtcbiAgICBvcmlnaW5FcnJvcj86IGFueTtcbiAgICBfX3NvdXJjZW1hcF9fcmVsZWFzZV9fPzogc3RyaW5nO1xuICAgIGdldFNvdXJjZU1hcFJlbGVhc2U/OiAodXJsOiBzdHJpbmcpID0+IHN0cmluZztcbiAgICBlcnJvckNvZGU/OiBudW1iZXI7XG4gICAgZXJyb3JMZXZlbD86IEx5bnhFcnJvckxldmVsO1xuICB9XG4pOiB2b2lkIHtcbiAgY29uc3QgeyBvcmlnaW5FcnJvciwgZXJyb3JDb2RlLCBlcnJvckxldmVsLCBydW5UeXBlID0gTFlOWF9DT1JFIH0gPVxuICAgIG9wdGlvbnMgPz8ge307XG4gIG5hdGl2ZUNvbnNvbGUuZXJyb3IoJ1RoZSBmb2xsb3dpbmcgZXJyb3Igb2NjdXJyZWQgaW4gdGhlIEpTUnVudGltZTonKTtcbiAgbmF0aXZlQ29uc29sZS5lcnJvcihgJHtlcnJvcj8ubWVzc2FnZX1cXG4ke2Vycm9yPy5zdGFja31gKTtcbiAgZXJyb3IuY2F1c2UgPSBpc09iamVjdChlcnJvci5jYXVzZSlcbiAgICA/IEpTT04uc3RyaW5naWZ5KGVycm9yLmNhdXNlKVxuICAgIDogZXJyb3IuY2F1c2U7XG4gIHRyeSB7XG4gICAgbmF0aXZlQXBwLnJlcG9ydEV4Y2VwdGlvbihlcnJvciwge1xuICAgICAgLi4ucnVuVHlwZSxcbiAgICAgIGJ1aWxkVmVyc2lvbjogX19CVUlMRF9WRVJTSU9OX18sXG4gICAgICB2ZXJzaW9uQ29kZTogX19WRVJTSU9OX18sXG4gICAgICBlcnJvckNvZGUsXG4gICAgICBlcnJvckxldmVsLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG5hdGl2ZUNvbnNvbGUuZXJyb3IoJ3JlcG9ydEVycm9yIGVycjpcXG4nLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZ2FjeVJlcG9ydEVycm9yKFxuICBlcnJvcjogQmFzZUVycm9yLFxuICBuYXRpdmVBcHA6IE5hdGl2ZUFwcCxcbiAgcnVuVHlwZSA9IExZTlhfQ09SRSxcbiAgb3JpZ2luRXJyb3I/OiBhbnksXG4gIHByb3h5PzogQXBwXG4pIHtcbiAgcmV0dXJuIHJlcG9ydEVycm9yKGVycm9yLCBuYXRpdmVBcHAsIHtcbiAgICBydW5UeXBlLFxuICAgIG9yaWdpbkVycm9yLFxuICAgIF9fc291cmNlbWFwX19yZWxlYXNlX186IHByb3h5Ll9fc291cmNlbWFwX19yZWxlYXNlX18sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0VGhyb3dFcnJvcih7XG4gIGVycm9yLFxuICBuYXRpdmVBcHAsXG4gIHJ1blR5cGUgPSBMWU5YX0NPUkUsXG4gIHJhd0Vycm9yLFxuICBfX3NvdXJjZW1hcF9fcmVsZWFzZV9fLFxuICBnZXRTb3VyY2VNYXBSZWxlYXNlLFxufToge1xuICBlcnJvcjogQmFzZUVycm9yO1xuICBuYXRpdmVBcHA6IE5hdGl2ZUFwcDtcbiAgcnVuVHlwZT86IFJVTl9UWVBFO1xuICByYXdFcnJvcjogb2JqZWN0O1xuICBfX3NvdXJjZW1hcF9fcmVsZWFzZV9fPzogc3RyaW5nO1xuICBnZXRTb3VyY2VNYXBSZWxlYXNlPzogKHVybDogc3RyaW5nKSA9PiBzdHJpbmc7XG59KTogdm9pZCB7XG4gIHJlcG9ydEVycm9yKGVycm9yLCBuYXRpdmVBcHAsIHtcbiAgICBvcmlnaW5FcnJvcjogcmF3RXJyb3IsXG4gICAgcnVuVHlwZSxcbiAgICBfX3NvdXJjZW1hcF9fcmVsZWFzZV9fLFxuICAgIGdldFNvdXJjZU1hcFJlbGVhc2UsXG4gIH0pO1xufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCB7IGlzRnVuY3Rpb24sIG5vb3AgfSBmcm9tICdAbHlueC1qcy9ydW50aW1lLXNoYXJlZCc7XG5pbXBvcnQgeyBFcnJvcktpbmQsIFVzZXJSdW50aW1lRXJyb3IsIEludGVybmFsUnVudGltZUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgcmVwb3J0RXJyb3IgfSBmcm9tICcuL3JlcG9ydC1lcnJvcic7XG5pbXBvcnQgeyBSVU5fVFlQRSwgTFlOWF9DT1JFIH0gZnJvbSAnLi4vLi4vY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5cbnR5cGUgSW5zdGFuY2UgPSB7XG4gIF9uYXRpdmVBcHA6IE5hdGl2ZUFwcDtcbiAgb25FcnJvcj86IChlcnJvcjogc3RyaW5nLCBlcnJvck9iajogYW55KSA9PiB2b2lkO1xuICBfX3NvdXJjZW1hcF9fcmVsZWFzZV9fPzogc3RyaW5nO1xuICBnZXRTb3VyY2VNYXBSZWxlYXNlPzogKHVybDogc3RyaW5nKSA9PiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFVzZXJGdW5jdGlvbjxUIGV4dGVuZHMgQW55RnVuY3Rpb24+KFxuICBkZXNjOiBzdHJpbmcsXG4gIGluc3RhbmNlOiBJbnN0YW5jZSxcbiAgY2FsbGJhY2s6IFQsXG4gIHJ1blR5cGU6IFJVTl9UWVBFID0gTFlOWF9DT1JFXG4pOiBUIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGNhbGxiYWNrKSkgcmV0dXJuIG5vb3AgYXMgVDtcbiAgcmV0dXJuIHdyYXBGdW5jdGlvbignVVNFUl9FUlJPUicsIGRlc2MsIGNhbGxiYWNrLCBpbnN0YW5jZSwgcnVuVHlwZSkgYXMgVDtcbn1cbmZ1bmN0aW9uIHdyYXBGdW5jdGlvbihcbiAgZXJyb3JLaW5kOiBFcnJvcktpbmQgPSAnSU5URVJOQUxfRVJST1InLFxuICBkZXNjOiBzdHJpbmcsXG4gIGNhbGxiYWNrOiBBbnlGdW5jdGlvbixcbiAgaW5zdGFuY2U6IEluc3RhbmNlLFxuICBydW5UeXBlOiBSVU5fVFlQRVxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwRnVuY3Rpb25Jbm5lciguLi5hcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGAke2Rlc2N9IFxcbiR7ZXJyb3IubWVzc2FnZX1gO1xuICAgICAgaWYgKFxuICAgICAgICBjYWxsYmFjay5uYW1lICE9PSAnb25FcnJvcicgJiZcbiAgICAgICAgdHlwZW9mIGluc3RhbmNlLm9uRXJyb3IgPT09ICdmdW5jdGlvbidcbiAgICAgICkge1xuICAgICAgICBpbnN0YW5jZS5vbkVycm9yKFxuICAgICAgICAgIGBDYXJkICR7Y2FsbGJhY2submFtZX0gZXhlYyBlcnJvcjoke21lc3NhZ2V9XFxuJHtlcnJvci5zdGFja31gLFxuICAgICAgICAgIGVycm9yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBlcnIgPVxuICAgICAgICBlcnJvcktpbmQgPT09ICdJTlRFUk5BTF9FUlJPUidcbiAgICAgICAgICA/IG5ldyBJbnRlcm5hbFJ1bnRpbWVFcnJvcihtZXNzYWdlLCBlcnJvci5zdGFjaylcbiAgICAgICAgICA6IG5ldyBVc2VyUnVudGltZUVycm9yKG1lc3NhZ2UsIGVycm9yLnN0YWNrKTtcbiAgICAgIG5hdGl2ZUNvbnNvbGUubG9nKGB3cmFwRXJyb3ItJHtkZXNjfWAsIGVycik7XG4gICAgICByZXBvcnRFcnJvcihlcnIsIGluc3RhbmNlLl9uYXRpdmVBcHAsIHtcbiAgICAgICAgcnVuVHlwZSxcbiAgICAgICAgX19zb3VyY2VtYXBfX3JlbGVhc2VfXzogaW5zdGFuY2UuX19zb3VyY2VtYXBfX3JlbGVhc2VfXyxcbiAgICAgICAgZ2V0U291cmNlTWFwUmVsZWFzZTogaW5zdGFuY2UuZ2V0U291cmNlTWFwUmVsZWFzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3cmFwSW5uZXJGdW5jdGlvbjxUIGV4dGVuZHMgQW55RnVuY3Rpb24+KFxuICBkZXNjOiBzdHJpbmcsXG4gIGluc3RhbmNlOiBJbnN0YW5jZSxcbiAgY2FsbGJhY2s6IFQsXG4gIHJ1blR5cGU6IFJVTl9UWVBFID0gTFlOWF9DT1JFXG4pOiBUIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGNhbGxiYWNrKSkgcmV0dXJuIG5vb3AgYXMgVDtcbiAgcmV0dXJuIHdyYXBGdW5jdGlvbignSU5URVJOQUxfRVJST1InLCBkZXNjLCBjYWxsYmFjaywgaW5zdGFuY2UsIHJ1blR5cGUpIGFzIFQ7XG59XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblxuaW1wb3J0IHsgaXNFcnJvciwgaXNTdHJpbmcgfSBmcm9tICdAbHlueC1qcy9ydW50aW1lLXNoYXJlZCc7XG5pbXBvcnQgeyBCYXNlQXBwLCBOYXRpdmVBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuaW1wb3J0IHsgYWxvZyB9IGZyb20gJy4uLy4uL2NvbW1vbi9sb2cnO1xuXG5leHBvcnQgY2xhc3MgUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdldEFwcDogKCkgPT4gQmFzZUFwcCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdldE5hdGl2ZUFwcDogKCkgPT4gTmF0aXZlQXBwXG4gICkge1xuICAgIHRoaXMuZ2V0QXBwID0gZ2V0QXBwO1xuICAgIHRoaXMuZ2V0TmF0aXZlQXBwID0gZ2V0TmF0aXZlQXBwO1xuICB9XG5cbiAgcHVibGljIHJlYmluZChnZXRBcHA6ICgpID0+IEJhc2VBcHApIHtcbiAgICB0aGlzLmdldEFwcCA9IGdldEFwcDtcbiAgfVxuXG4gIC8vIC8qKlxuICAvLyAgKiBrZXkgdXJsIC0+IHZhbHVlIHNvdXJjZW1hcFxuICAvLyAgKiBzdXBwb3J0IGRpZmZlcmVudCBzb3VyY2VtYXAgZm9yIGV4dGVybmFsIGpzXG4gIC8vICAqL1xuICAvLyBzb3VyY2VtYXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbiAgLyoqXG4gICAqIFNldCBzb3VyY2VtYXAgcmVsZWFzZSB3aXRoIGEgbmV3bHkgdGhyb3duIGVycm9yXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gICAqIFRoZSBlcnJvciB0aHJvd24gZnJvbSB0aGUgZmlsZSB0aGF0IHdhbnRzIHRvIHNldCBzb3VyY2VtYXAgcmVsZWFzZS5cbiAgICogVGhlIHRvcCBmcmFtZSBvZiBgZXJyb3Iuc3RhY2tgICoqbXVzdCBiZSoqIHRoZSBmaWxlbmFtZS5cbiAgICogVGhlIGBlcnJvci5uYW1lYCAqKm11c3QgYmUqKiBgJ0x5bnhHZXRTb3VyY2VNYXBSZWxlYXNlRXJyb3InYC5cbiAgICogVGhlIGBlcnJvci5tZXNzYWdlYCAqKm11c3QgYmUqKiB0aGUgc291cmNlbWFwIHJlbGVhc2UuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIChmdW5jdGlvbiAoKSB7XG4gICAqICAgdHJ5IHtcbiAgICogICAgIHRocm93IG5ldyBFcnJvcihzb3VyY2VtYXBSZWxlYXNlKTtcbiAgICogICB9IGNhdGNoIChlKSB7XG4gICAqICAgICBlLm5hbWUgPSAnTHlueEdldFNvdXJjZU1hcFJlbGVhc2VFcnJvcic7XG4gICAqICAgICB0dC5zZXRTb3VyY2VNYXBSZWxlYXNlKGUpO1xuICAgKiAgIH1cbiAgICogfSkoKVxuICAgKi9cbiAgc2V0U291cmNlTWFwUmVsZWFzZSA9IChlcnJvcjogRXJyb3IpID0+IHtcbiAgICBpZiAoXG4gICAgICBpc0Vycm9yKGVycm9yKSAmJlxuICAgICAgZXJyb3IubmFtZSA9PT0gQmFzZUFwcC5rR2V0U291cmNlTWFwUmVsZWFzZUVycm9yTmFtZSAmJlxuICAgICAgaXNTdHJpbmcoZXJyb3IubWVzc2FnZSkgJiZcbiAgICAgIGlzU3RyaW5nKGVycm9yLnN0YWNrKVxuICAgICkge1xuICAgICAgdGhpcy5nZXROYXRpdmVBcHAoKS5fX1NldFNvdXJjZU1hcFJlbGVhc2Uoe1xuICAgICAgICBuYW1lOiBlcnJvci5uYW1lLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICBzdGFjazogZXJyb3Iuc3RhY2ssXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxvZyhgc2V0U291cmNlTWFwUmVsZWFzZSBmYWlsZWQgd2l0aCBlcnJvcjogJHtKU09OLnN0cmluZ2lmeShlcnJvcil9YCk7XG4gIH07XG5cbiAgZ2V0U291cmNlTWFwUmVsZWFzZSA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgbGV0IHJldCA9IHRoaXMuZ2V0TmF0aXZlQXBwKCkuX19HZXRTb3VyY2VNYXBSZWxlYXNlKHVybCk7XG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIHJldCA9IHRoaXMuZ2V0TmF0aXZlQXBwKCkuX19HZXRTb3VyY2VNYXBSZWxlYXNlKFxuICAgICAgICBCYXNlQXBwLmtEZWZhdWx0U291cmNlTWFwVVJMXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9O1xufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCB7IEFuaW1hdGlvbiBhcyBJQW5pbWF0aW9uIH0gZnJvbSAnQGx5bngtanMvdHlwZXMnO1xuaW1wb3J0IHsgS2V5ZnJhbWVFZmZlY3QgfSBmcm9tICcuL2VmZmVjdCc7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEFuaW1hdGlvbk9wZXJhdGlvbiB7XG4gIFNUQVJUID0gMCxcbiAgUExBWSxcbiAgUEFVU0UsXG4gIENBTkNFTCxcbiAgRklOSVNILFxufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIGltcGxlbWVudHMgSUFuaW1hdGlvbiB7XG4gIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcbiAgcHVibGljIHJlYWRvbmx5IGVmZmVjdDogS2V5ZnJhbWVFZmZlY3Q7XG4gIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGVmZmVjdDogS2V5ZnJhbWVFZmZlY3QpIHtcbiAgICB0aGlzLmVmZmVjdCA9IGVmZmVjdDtcbiAgICB0aGlzLmlkID0gJ19fbHlueC1pbm5lci1qcy1hbmltYXRpb24tJyArIEFuaW1hdGlvbi5jb3VudCsrO1xuICB9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZWZmZWN0LnRhcmdldC5jYW5jZWxBbmltYXRlKHRoaXMpO1xuICB9XG5cbiAgcGF1c2UoKTogdm9pZCB7XG4gICAgdGhpcy5lZmZlY3QudGFyZ2V0LnBhdXNlQW5pbWF0ZSh0aGlzKTtcbiAgfVxuXG4gIHBsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5lZmZlY3QudGFyZ2V0LnBsYXlBbmltYXRlKHRoaXMpO1xuICB9XG59XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblxuaW1wb3J0IHtcbiAgS2V5ZnJhbWVFZmZlY3QgYXMgSUtleWZyYW1lRWZmZWN0LFxuICBLZXlmcmFtZUVmZmVjdFYyIGFzIElLZXlmcmFtZUVmZmVjdFYyLFxufSBmcm9tICdAbHlueC1qcy90eXBlcyc7XG5pbXBvcnQgRWxlbWVudCBmcm9tICcuLi9lbGVtZW50JztcblxuZXhwb3J0IGNsYXNzIEtleWZyYW1lRWZmZWN0IGltcGxlbWVudHMgSUtleWZyYW1lRWZmZWN0IHtcbiAgcHVibGljIHJlYWRvbmx5IHRhcmdldDogRWxlbWVudDtcbiAgcHVibGljIHJlYWRvbmx5IGtleWZyYW1lczogQXJyYXk8UmVjb3JkPHN0cmluZywgYW55Pj47XG4gIHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhcmdldDogRWxlbWVudCxcbiAgICBrZXlmcmFtZXM6IEFycmF5PFJlY29yZDxzdHJpbmcsIGFueT4+LFxuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5rZXlmcmFtZXMgPSBrZXlmcmFtZXM7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2V5ZnJhbWVFZmZlY3RWMiBpbXBsZW1lbnRzIElLZXlmcmFtZUVmZmVjdFYyIHtcbiAgcHVibGljIHJlYWRvbmx5IHRhcmdldD86IEVsZW1lbnQ7XG4gIHB1YmxpYyByZWFkb25seSBrZXlmcmFtZXM6IEFycmF5PFJlY29yZDxzdHJpbmcsIGFueT4+O1xuICBwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogUmVjb3JkPHN0cmluZywgYW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBrZXlmcmFtZXM6IEFycmF5PFJlY29yZDxzdHJpbmcsIGFueT4+LFxuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgKSB7XG4gICAgdGhpcy5rZXlmcmFtZXMgPSBrZXlmcmFtZXM7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxufVxuIiwgIi8vIENvcHlyaWdodCAyMDI1IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCB7IEFuaW1hdGlvblYyIGFzIElBbmltYXRpb24gfSBmcm9tICdAbHlueC1qcy90eXBlcyc7XG5pbXBvcnQgeyBLZXlmcmFtZUVmZmVjdFYyIH0gZnJvbSAnLi9lZmZlY3QnO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uVjIgaW1wbGVtZW50cyBJQW5pbWF0aW9uIHtcbiAgcHVibGljIHJlYWRvbmx5IGVmZmVjdDogS2V5ZnJhbWVFZmZlY3RWMjtcbiAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaWQ6IHN0cmluZyxcbiAgICBrZXlmcmFtZXM6IEFycmF5PFJlY29yZDxzdHJpbmcsIGFueT4+LFxuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuZWZmZWN0ID0gbmV3IEtleWZyYW1lRWZmZWN0VjIoa2V5ZnJhbWVzLCBvcHRpb25zKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IEFuaW1hdGlvbiwgQW5pbWF0aW9uT3BlcmF0aW9uLCBLZXlmcmFtZUVmZmVjdCB9IGZyb20gJy4uL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBMeW54IH0gZnJvbSAnLi4vLi4vbHlueCc7XG5cbi8qKlxuICogTmF0aXZlIEVsZW1lbnQsIEhlbGQgYnkge0BsaW5rIEVsZW1lbnR9IGFuZCBpbnRlcmFjdGluZyB3aXRoIG5hdGl2ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVFbGVtZW50UHJveHkge1xuICBhbmltYXRlKFxuICAgIG9wZXJhdGlvbjogQW5pbWF0aW9uT3BlcmF0aW9uLFxuICAgIGlkOiBzdHJpbmcsXG4gICAga2V5ZnJhbWVzPzogUmVjb3JkPHN0cmluZywgYW55PltdLFxuICAgIHRpbWluZ09wdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gICk6IHZvaWQ7XG4gIHNldFByb3BlcnR5KHByb3BzTmFtZTogc3RyaW5nLCBwcm9wc1ZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICBzZXRQcm9wZXJ0eShwcm9wczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IF9yb290OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0b3I6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfbHlueDogTHlueDtcbiAgcHJpdmF0ZSBfZWxlbWVudDogTmF0aXZlRWxlbWVudFByb3h5O1xuXG4gIGNvbnN0cnVjdG9yKHJvb3Q6IHN0cmluZywgaWQ6IHN0cmluZywgbHlueFByb3h5OiBMeW54KSB7XG4gICAgdGhpcy5fcm9vdCA9IHJvb3Q7XG4gICAgdGhpcy5faWRTZWxlY3RvciA9ICcjJyArIGlkO1xuICAgIHRoaXMuX2x5bnggPSBseW54UHJveHk7XG4gICAgdGhpcy5fZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9seW54LmNyZWF0ZUVsZW1lbnQodGhpcy5fcm9vdCwgdGhpcy5faWRTZWxlY3Rvcik7XG4gICAgfVxuICB9XG5cbiAgLy8ga2V5ZnJhbWVzOiBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dlYl9BbmltYXRpb25zX0FQSS9LZXlmcmFtZV9Gb3JtYXRzXG4gIC8vICBFaXRoZXIgYW4gYXJyYXkgb2Yga2V5ZnJhbWUgb2JqZWN0cywgb3IgYSBrZXlmcmFtZSBvYmplY3Qgd2hvc2UgcHJvcGVydHkgYXJlIGFycmF5cyBvZiB2YWx1ZXMgdG8gaXRlcmF0ZSBvdmVyLiBTZWUgS2V5ZnJhbWUgRm9ybWF0cyBmb3IgbW9yZSBkZXRhaWxzLlxuICAvL1xuICAvLyB0aW1pbmdPcHRpb25zOiBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvYW5pbWF0ZVxuICAvLyAgaWQgT3B0aW9uYWw6IEEgcHJvcGVydHkgdW5pcXVlIHRvIGFuaW1hdGUoKTogYSBET01TdHJpbmcgd2l0aCB3aGljaCB0byByZWZlcmVuY2UgdGhlIGFuaW1hdGlvbi5cbiAgLy8gIGRlbGF5IE9wdGlvbmFsOiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgc3RhcnQgb2YgdGhlIGFuaW1hdGlvbi4gRGVmYXVsdHMgdG8gMC5cbiAgLy8gIGRpcmVjdGlvbiBPcHRpb25hbDogV2hldGhlciB0aGUgYW5pbWF0aW9uIHJ1bnMgZm9yd2FyZHMgKG5vcm1hbCksIGJhY2t3YXJkcyAocmV2ZXJzZSksIHN3aXRjaGVzIGRpcmVjdGlvbiBhZnRlciBlYWNoIGl0ZXJhdGlvbiAoYWx0ZXJuYXRlKSwgb3IgcnVucyBiYWNrd2FyZHMgYW5kIHN3aXRjaGVzIGRpcmVjdGlvbiBhZnRlciBlYWNoIGl0ZXJhdGlvbiAoYWx0ZXJuYXRlLXJldmVyc2UpLiBEZWZhdWx0cyB0byBcIm5vcm1hbFwiLlxuICAvLyAgZHVyYXRpb24gT3B0aW9uYWw6IFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGVhY2ggaXRlcmF0aW9uIG9mIHRoZSBhbmltYXRpb24gdGFrZXMgdG8gY29tcGxldGUuIERlZmF1bHRzIHRvIDAuIEFsdGhvdWdoIHRoaXMgaXMgdGVjaG5pY2FsbHkgb3B0aW9uYWwsIGtlZXAgaW4gbWluZCB0aGF0IHlvdXIgYW5pbWF0aW9uIHdpbGwgbm90IHJ1biBpZiB0aGlzIHZhbHVlIGlzIDAuXG4gIC8vICBlYXNpbmcgT3B0aW9uYWw6IFRoZSByYXRlIG9mIHRoZSBhbmltYXRpb24ncyBjaGFuZ2Ugb3ZlciB0aW1lLiBBY2NlcHRzIHRoZSBwcmUtZGVmaW5lZCB2YWx1ZXMgXCJsaW5lYXJcIiwgXCJlYXNlXCIsIFwiZWFzZS1pblwiLCBcImVhc2Utb3V0XCIsIGFuZCBcImVhc2UtaW4tb3V0XCIsIG9yIGEgY3VzdG9tIFwiY3ViaWMtYmV6aWVyXCIgdmFsdWUgbGlrZSBcImN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKVwiLiBEZWZhdWx0cyB0byBcImxpbmVhclwiLlxuICAvLyAgZW5kRGVsYXkgT3B0aW9uYWw6IFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5IGFmdGVyIHRoZSBlbmQgb2YgYW4gYW5pbWF0aW9uLiBUaGlzIGlzIHByaW1hcmlseSBvZiB1c2Ugd2hlbiBzZXF1ZW5jaW5nIGFuaW1hdGlvbnMgYmFzZWQgb24gdGhlIGVuZCB0aW1lIG9mIGFub3RoZXIgYW5pbWF0aW9uLiBEZWZhdWx0cyB0byAwLlxuICAvLyAgZmlsbCBPcHRpb25hbDogRGljdGF0ZXMgd2hldGhlciB0aGUgYW5pbWF0aW9uJ3MgZWZmZWN0cyBzaG91bGQgYmUgcmVmbGVjdGVkIGJ5IHRoZSBlbGVtZW50KHMpIHByaW9yIHRvIHBsYXlpbmcgKFwiYmFja3dhcmRzXCIpLCByZXRhaW5lZCBhZnRlciB0aGUgYW5pbWF0aW9uIGhhcyBjb21wbGV0ZWQgcGxheWluZyAoXCJmb3J3YXJkc1wiKSwgb3IgYm90aC4gRGVmYXVsdHMgdG8gXCJub25lXCIuXG4gIC8vICBpdGVyYXRpb25TdGFydCBPcHRpb25hbDogRGVzY3JpYmVzIGF0IHdoYXQgcG9pbnQgaW4gdGhlIGl0ZXJhdGlvbiB0aGUgYW5pbWF0aW9uIHNob3VsZCBzdGFydC4gMC41IHdvdWxkIGluZGljYXRlIHN0YXJ0aW5nIGhhbGZ3YXkgdGhyb3VnaCB0aGUgZmlyc3QgaXRlcmF0aW9uIGZvciBleGFtcGxlLCBhbmQgd2l0aCB0aGlzIHZhbHVlIHNldCwgYW4gYW5pbWF0aW9uIHdpdGggMiBpdGVyYXRpb25zIHdvdWxkIGVuZCBoYWxmd2F5IHRocm91Z2ggYSB0aGlyZCBpdGVyYXRpb24uIERlZmF1bHRzIHRvIDAuMC5cbiAgLy8gaXRlcmF0aW9ucyBPcHRpb25hbDogVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgYW5pbWF0aW9uIHNob3VsZCByZXBlYXQuIERlZmF1bHRzIHRvIDEsIGFuZCBjYW4gYWxzbyB0YWtlIGEgdmFsdWUgb2YgSW5maW5pdHkgdG8gbWFrZSBpdCByZXBlYXQgZm9yIGFzIGxvbmcgYXMgdGhlIGVsZW1lbnQgZXhpc3RzLlxuICBhbmltYXRlKFxuICAgIGtleWZyYW1lczogQXJyYXk8UmVjb3JkPHN0cmluZywgYW55Pj4sXG4gICAgdGltaW5nT3B0aW9uczogUmVjb3JkPHN0cmluZywgYW55PlxuICApOiBBbmltYXRpb24ge1xuICAgIHRoaXMuZW5zdXJlRWxlbWVudCgpO1xuICAgIGxldCBhbmkgPSBuZXcgQW5pbWF0aW9uKG5ldyBLZXlmcmFtZUVmZmVjdCh0aGlzLCBrZXlmcmFtZXMsIHRpbWluZ09wdGlvbnMpKTtcbiAgICB0aGlzLl9lbGVtZW50LmFuaW1hdGUoMCwgYW5pLmlkLCBrZXlmcmFtZXMsIHRpbWluZ09wdGlvbnMpO1xuICAgIHJldHVybiBhbmk7XG4gIH1cblxuICBwbGF5QW5pbWF0ZShhbmk6IEFuaW1hdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnQuYW5pbWF0ZSgxLCBhbmkuaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHBhdXNlQW5pbWF0ZShhbmk6IEFuaW1hdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnQuYW5pbWF0ZSgyLCBhbmkuaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIGNhbmNlbEFuaW1hdGUoYW5pOiBBbmltYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9lbGVtZW50LmFuaW1hdGUoMywgYW5pLmlkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gIH1cblxuICBmaW5pc2hBbmltYXRlKGFuaTogQW5pbWF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudC5hbmltYXRlKDQsIGFuaS5pZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICB9XG5cbiAgc2V0UHJvcGVydHkoXG4gICAgcHJvcHNPYmo6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgcHJvcHNWYWw/OiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5lbnN1cmVFbGVtZW50KCk7XG4gICAgaWYgKHR5cGVvZiBwcm9wc09iaiA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzVmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRQcm9wZXJ0eSh7XG4gICAgICAgIFtwcm9wc09ial06IHByb3BzVmFsLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHNPYmogPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldFByb3BlcnR5KHByb3BzT2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgc2V0UHJvcGVydHkncyBwYXJhbSBtdXN0IGJlIHN0cmluZyBvciBvYmplY3QuIFdoaWxlIGN1cnJlbnQgdHlwZSBpcyAke3R5cGVvZiBwcm9wc09ian0gYW5kICR7dHlwZW9mIHByb3BzVmFsfS5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCBFbGVtZW50IGZyb20gJy4vZWxlbWVudCc7XG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5leHBvcnQgdHlwZSB7IE5hdGl2ZUVsZW1lbnRQcm94eSB9IGZyb20gJy4vZWxlbWVudCc7XG4iLCAidHlwZSBUeXBlZEFycmF5ID1cbiAgfCBJbnQ4QXJyYXlcbiAgfCBVaW50OEFycmF5XG4gIHwgVWludDhDbGFtcGVkQXJyYXlcbiAgfCBJbnQxNkFycmF5XG4gIHwgVWludDE2QXJyYXlcbiAgfCBJbnQzMkFycmF5XG4gIHwgVWludDMyQXJyYXlcbiAgfCBGbG9hdDMyQXJyYXlcbiAgfCBGbG9hdDY0QXJyYXk7XG5cbmV4cG9ydCBjbGFzcyBUZXh0RGVjb2RlciB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBkZWNvZGUoYnVmZmVyOiBBcnJheUJ1ZmZlciB8IFR5cGVkQXJyYXkgfCBEYXRhVmlldyk6IHN0cmluZyB7XG4gICAgaWYgKGJ1ZmZlci5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKGJ1ZmZlciBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICBidWZmZXIgPSBidWZmZXIuYnVmZmVyLnNsaWNlKFxuICAgICAgICBidWZmZXIuYnl0ZU9mZnNldCxcbiAgICAgICAgYnVmZmVyLmJ5dGVPZmZzZXQgKyBidWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhidWZmZXIpKSB7XG4gICAgICBidWZmZXIgPSBidWZmZXIuYnVmZmVyO1xuICAgIH1cblxuICAgIHJldHVybiBnbG9iYWxUaGlzLlRleHRDb2RlY0hlbHBlci5kZWNvZGUoYnVmZmVyKTtcbiAgfVxuXG4gIGVuY29kZUludG8oKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdUZXh0RW5jb2RlcigpLmVuY29kZUludG8gbm90IHN1cHBvcnRlZCcpO1xuICB9XG5cbiAgZ2V0IGVuY29kaW5nKCkge1xuICAgIHJldHVybiAndXRmLTgnO1xuICB9XG5cbiAgZ2V0IGZhdGFsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBpZ25vcmVCT00oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsICJleHBvcnQgY2xhc3MgVGV4dEVuY29kZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZW5jb2RlKHN0cjogc3RyaW5nKTogVWludDhBcnJheSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGdsb2JhbFRoaXMuVGV4dENvZGVjSGVscGVyLmVuY29kZShzdHIpKTtcbiAgfVxuXG4gIGVuY29kZUludG8oKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdUZXh0RW5jb2RlcigpLmVuY29kZUludG8gbm90IHN1cHBvcnRlZCcpO1xuICB9XG5cbiAgZ2V0IGVuY29kaW5nKCkge1xuICAgIHJldHVybiAndXRmLTgnO1xuICB9XG59XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIGFzIElFdmVudEVtaXR0ZXIgfSBmcm9tICdAbHlueC1qcy90eXBlcyc7XG5pbXBvcnQgeyBDYWxsTHlueFNldE1vZHVsZSB9IGZyb20gJy4uL25hdGl2ZU1vZHVsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJRXZlbnRFbWl0dGVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcmVhZG9ubHlcbiAgcHJpdmF0ZSBfZXZlbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIHsgbGlzdGVuZXI6ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQ7IGNvbnRleHQ/OiBvYmplY3QgfVtdXG4gID47XG4gIHByaXZhdGUgX2ludGVybmFsX2NhbGxMeW54U2V0TW9kdWxlPzogQ2FsbEx5bnhTZXRNb2R1bGU7XG4gIGNvbnN0cnVjdG9yKGNhbGxMeW54U2V0TW9kdWxlPzogQ2FsbEx5bnhTZXRNb2R1bGUpIHtcbiAgICB0aGlzLl9pbnRlcm5hbF9jYWxsTHlueFNldE1vZHVsZSA9IGNhbGxMeW54U2V0TW9kdWxlO1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGdldEV2ZW50c1NpemUoZXZlbnRUeXBlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9ldmVudHMuZ2V0KGV2ZW50VHlwZSk/Lmxlbmd0aDtcbiAgfVxuXG4gIHNldENhbGxMeW54U2V0TW9kdWxlKGNhbGxMeW54U2V0TW9kdWxlPzogQ2FsbEx5bnhTZXRNb2R1bGUpIHtcbiAgICB0aGlzLl9pbnRlcm5hbF9jYWxsTHlueFNldE1vZHVsZSA9IGNhbGxMeW54U2V0TW9kdWxlO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIoXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQsXG4gICAgY29udGV4dD86IG9iamVjdFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IHRoaXMuX2V2ZW50cy5nZXQoZXZlbnROYW1lKTtcbiAgICAvLyBUT0RPOiByZW1vdmVkIHRoaXMgYXBpIGRlc2lnbiBhZnRlciBzcHJpbmdcbiAgICBpZiAoZXZlbnROYW1lID09ICdrZXlib2FyZHN0YXR1c2NoYW5nZWQnKSB7XG4gICAgICBpZiAodGhpcy5faW50ZXJuYWxfY2FsbEx5bnhTZXRNb2R1bGUpIHtcbiAgICAgICAgdGhpcy5faW50ZXJuYWxfY2FsbEx5bnhTZXRNb2R1bGUoJ3N3aXRjaEtleUJvYXJkRGV0ZWN0JywgW3RydWVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wdXNoKHtcbiAgICAgICAgbGlzdGVuZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXZlbnRzLnNldChldmVudE5hbWUsIFtcbiAgICAgICAge1xuICAgICAgICAgIGxpc3RlbmVyLFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgIH0sXG4gICAgICBdKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcihcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBsaXN0ZW5lcjogKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlbW92ZUxpc3RlbmVyIG9ubHkgdGFrZXMgaW5zdGFuY2VzIG9mIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cy5nZXQoZXZlbnROYW1lKTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50cykpIHtcbiAgICAgIGNvbnN0IGZsYWcgPSBldmVudHMuc29tZSgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAobGlzdGVuZXIgPT09IGl0ZW0ubGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG4gICAgICBmbGFnICYmIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHJlbW92ZWQgdGhpcyBhcGkgZGVzaWduIGFmdGVyIHNwcmluZ1xuICAgIGlmIChldmVudE5hbWUgPT0gJ2tleWJvYXJkc3RhdHVzY2hhbmdlZCcpIHtcbiAgICAgIGlmICh0aGlzLl9pbnRlcm5hbF9jYWxsTHlueFNldE1vZHVsZSkge1xuICAgICAgICB0aGlzLl9pbnRlcm5hbF9jYWxsTHlueFNldE1vZHVsZSgnc3dpdGNoS2V5Qm9hcmREZXRlY3QnLCBbZmFsc2VdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhOiB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzLmdldChldmVudE5hbWUpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50cykpIHtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbGlzdGVuZXIsIGNvbnRleHQgfSA9IGl0ZW07XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5hcHBseShjb250ZXh0IHx8IHRoaXMsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnROYW1lPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBldmVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9ldmVudHMuZGVsZXRlKGV2ZW50TmFtZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgYWxsXG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgcGFyYW1zOiBzdHJpbmcgfCBSZWNvcmQ8YW55LCBhbnk+KTogdm9pZCB7XG4gICAgLy8gZm9yIGFwaSB1c2FnZTtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHMuZ2V0KGV2ZW50TmFtZSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnRzKSkge1xuICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbGlzdGVuZXIsIGNvbnRleHQgfSA9IGl0ZW07XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKGNvbnRleHQgfHwgdGhpcywgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50TmFtZTogc3RyaW5nLCAuLi5kYXRhOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXQoZXZlbnROYW1lLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnRFbWl0dGVyKCkge1xuICByZXR1cm4gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCB7IEJlZm9yZVB1Ymxpc2hFdmVudCBhcyBJQmVmb3JlUHVibGlzaEV2ZW50IH0gZnJvbSAnQGx5bngtanMvdHlwZXMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcic7XG5cbmV4cG9ydCBjbGFzcyBBb3BNYW5hZ2VyIHtcbiAgcHVibGljIF9iZWZvcmVQdWJsaXNoRXZlbnQ6IEJlZm9yZVB1Ymxpc2hFdmVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9iZWZvcmVQdWJsaXNoRXZlbnQgPSBuZXcgQmVmb3JlUHVibGlzaEV2ZW50KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJlZm9yZVB1Ymxpc2hFdmVudFxuICBleHRlbmRzIEV2ZW50RW1pdHRlclxuICBpbXBsZW1lbnRzIElCZWZvcmVQdWJsaXNoRXZlbnQge1xuICBhZGQoXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQsXG4gICAgY29udGV4dD86IG9iamVjdFxuICApOiBCZWZvcmVQdWJsaXNoRXZlbnQge1xuICAgIHN1cGVyLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlKFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkXG4gICk6IEJlZm9yZVB1Ymxpc2hFdmVudCB7XG4gICAgc3VwZXIucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsICIvLyBDb3B5cmlnaHQgMjAyNCBUaGUgTHlueCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJztcbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlcjtcbmV4cG9ydCB7IGNyZWF0ZUV2ZW50RW1pdHRlciB9IGZyb20gJy4vZXZlbnRFbWl0dGVyJztcblxuZXhwb3J0ICogZnJvbSAnLi9hb3AnO1xuIiwgImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQnO1xuXG5pbnRlcmZhY2UgU3RyZWFtRGVsZWdhdGUge1xuICBvbkRhdGEoZGF0YTogQXJyYXlCdWZmZXIpOiB2b2lkO1xuICBvbkVuZCgpOiB2b2lkO1xuICBvbkVycm9yKGVycm9yOiBzdHJpbmcpOiB2b2lkO1xufVxuXG50eXBlIFByb21pc2VQcm92aWRlciA9XG4gIHwgUHJvbWlzZUNvbnN0cnVjdG9yXG4gIHwge1xuICAgICAgZ2V0UHJvbWlzZTogKCkgPT4gUHJvbWlzZUNvbnN0cnVjdG9yO1xuICAgIH07XG4vKipcbiAqIFNlcnZlcyBhcyBhIHN0YWJsZSB0eXBlIGlkZW50aWZpZXIgYWNyb3NzIGRpZmZlcmVudCBQcm9taXNlIGNvbnN0cnVjdG9yIGVudmlyb25tZW50c1xuICpcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBlbnN1cmUgdHlwZSByZWNvZ25pdGlvbiB3b3JrcyB3aGVuIHNhbWUtY2xhc3MgaW5zdGFuY2VzIGNvbWUgZnJvbVxuICogZGlmZmVyZW50IFByb21pc2UgY29uc3RydWN0b3IgZW52aXJvbm1lbnRzIChlLmcuIGRpZmZlcmVudCBseW54IGluc3RhbmNlcylcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEx5bnhSZWFkYWJsZVN0cmVhbSB7fVxuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZUN0b3IocHJvdmlkZXI6IFByb21pc2VQcm92aWRlcik6IFByb21pc2VDb25zdHJ1Y3RvciB7XG4gIGlmICh0eXBlb2YgcHJvdmlkZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcHJvdmlkZXI7XG4gIH1cbiAgcmV0dXJuIHByb3ZpZGVyLmdldFByb21pc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlYWRhYmxlU3RyZWFtQ2xhc3MocHJvdmlkZXI6IFByb21pc2VQcm92aWRlcik6IGFueSB7XG4gIHJldHVybiBjbGFzcyBSZWFkYWJsZVN0cmVhbVxuICAgIGV4dGVuZHMgTHlueFJlYWRhYmxlU3RyZWFtXG4gICAgaW1wbGVtZW50cyBTdHJlYW1EZWxlZ2F0ZSB7XG4gICAgcHJpdmF0ZSBfX1Byb21pc2U6IFByb21pc2VDb25zdHJ1Y3RvcjtcbiAgICBwcml2YXRlIF9fZXZlbnRDZW50ZXI6IEV2ZW50RW1pdHRlcjtcbiAgICBwcml2YXRlIF9fZGF0YVJlY2VpdmVkOiBBcnJheUJ1ZmZlcltdO1xuICAgIHByaXZhdGUgX19kb25lOiBib29sZWFuO1xuICAgIHByaXZhdGUgX19jYW5jZWxsZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfX2xvY2tlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9fZXJyb3I6IEVycm9yO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX19Qcm9taXNlID0gcmVzb2x2ZVByb21pc2VDdG9yKHByb3ZpZGVyKTtcbiAgICAgIHRoaXMuX19kYXRhUmVjZWl2ZWQgPSBbXTtcbiAgICAgIHRoaXMuX19kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9fbG9ja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9fZXZlbnRDZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIG9uRGF0YShkYXRhOiBBcnJheUJ1ZmZlcik6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2RhdGFSZWNlaXZlZC5wdXNoKGRhdGEpO1xuICAgICAgdGhpcy5fX2V2ZW50Q2VudGVyLmVtaXQoJ3dhaXRTaWduYWwnLCBudWxsKTtcbiAgICB9XG4gICAgb25FbmQoKTogdm9pZCB7XG4gICAgICB0aGlzLl9fZG9uZSA9IHRydWU7XG4gICAgICB0aGlzLl9fZXZlbnRDZW50ZXIuZW1pdCgnd2FpdFNpZ25hbCcsIG51bGwpO1xuICAgIH1cbiAgICBvbkVycm9yKGVycm9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuX19lcnJvciA9IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICB0aGlzLl9fZXZlbnRDZW50ZXIuZW1pdCgnd2FpdFNpZ25hbCcsIG51bGwpO1xuICAgIH1cbiAgICBwcml2YXRlIHByb2Nlc3NSZWFkKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKHRoaXMuX19lcnJvcikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHRoaXMuX19lcnJvcik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX19jYW5jZWxsZWQgfHxcbiAgICAgICAgKHRoaXMuX19kb25lICYmIHRoaXMuX19kYXRhUmVjZWl2ZWQubGVuZ3RoID09IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19kYXRhUmVjZWl2ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjdXJyRGF0YSA9IHRoaXMuX19kYXRhUmVjZWl2ZWQuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBkb25lOiBmYWxzZSwgdmFsdWU6IGN1cnJEYXRhIH0pO1xuICAgICAgfVxuICAgICAgLy8gd2FpdCBmb3Igc2lnbmFsc1xuICAgICAgY29uc3Qgd2FpdFNpZ25hbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fX2V2ZW50Q2VudGVyLnJlbW92ZUxpc3RlbmVyKCd3YWl0U2lnbmFsJywgd2FpdFNpZ25hbCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JlYWQocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX19ldmVudENlbnRlci5hZGRMaXN0ZW5lcignd2FpdFNpZ25hbCcsIHdhaXRTaWduYWwsIHRoaXMpO1xuICAgIH1cbiAgICBwdWJsaWMgX19yZWFkKCkge1xuICAgICAgcmV0dXJuIG5ldyB0aGlzLl9fUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JlYWQocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGxvY2tlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fbG9ja2VkO1xuICAgIH1cbiAgICBwdWJsaWMgY2FuY2VsKHJlYXNvbj86IGFueSkge1xuICAgICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gICAgICB0aGlzLl9fZGF0YVJlY2VpdmVkID0gbnVsbDtcbiAgICAgIHRoaXMuX19ldmVudENlbnRlci5lbWl0KCd3YWl0U2lnbmFsJywgbnVsbCk7XG4gICAgICByZXR1cm4gdGhpcy5fX1Byb21pc2UucmVzb2x2ZShyZWFzb24pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UmVhZGVyKCkge1xuICAgICAgaWYgKHRoaXMuX19sb2NrZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLl9fbG9ja2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHRoaXMgYXMgYW55KTtcbiAgICB9XG4gIH07XG59XG5jbGFzcyBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIge1xuICBwcml2YXRlIF9fc3RyZWFtO1xuICBjb25zdHJ1Y3RvcihzdHJlYW06IFJlYWRhYmxlU3RyZWFtKSB7XG4gICAgdGhpcy5fX3N0cmVhbSA9IHN0cmVhbTtcbiAgfVxuICBwdWJsaWMgY2FuY2VsKHJlYXNvbj86IGFueSkge1xuICAgIHJldHVybiB0aGlzLl9fc3RyZWFtLmNhbmNlbChyZWFzb24pO1xuICB9XG4gIHB1YmxpYyByZWFkKCkge1xuICAgIHJldHVybiB0aGlzLl9fc3RyZWFtLl9fcmVhZCgpO1xuICB9XG59XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblxuaW1wb3J0IHsgVGV4dERlY29kZXIgfSBmcm9tICcuL1RleHREZWNvZGVyJztcbmltcG9ydCB7IFRleHRFbmNvZGVyIH0gZnJvbSAnLi9UZXh0RW5jb2Rlcic7XG5pbXBvcnQgeyBMeW54UmVhZGFibGVTdHJlYW0gfSBmcm9tICcuL1JlYWRhYmxlU3RyZWFtJztcbmV4cG9ydCBjbGFzcyBCb2R5TWl4aW4ge1xuICBfYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyO1xuICBfYm9keVN0cmVhbTogTHlueFJlYWRhYmxlU3RyZWFtO1xuICBfYm9keVVzZWQ6IGJvb2xlYW47XG4gIF9lbmFibGVGZXRjaEFQSVN0YW5kYXJkU3RyZWFtaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2FycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgIHRoaXMuX2JvZHlTdHJlYW0gPSBudWxsO1xuICAgIHRoaXMuX2JvZHlVc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZW5hYmxlRmV0Y2hBUElTdGFuZGFyZFN0cmVhbWluZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzYWZlVXNlQm9keTxUPih1c2U6IChib2R5OiBBcnJheUJ1ZmZlcikgPT4gVCk6IFQge1xuICAgIGlmICh0aGlzLl9ib2R5VXNlZCkge1xuICAgICAgLy8gVE9ETyhodXpoYW5iby5sdWMpOiB0aHJvdyBhIGVycm9yIGlmIHRoZSBicmVhayBjaGFuZ2UgaXMgb2suXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHJldCA9IHVzZSh0aGlzLl9hcnJheUJ1ZmZlcik7XG4gICAgdGhpcy5fYm9keVVzZWQgPSB0cnVlO1xuICAgIHRoaXMuX2FycmF5QnVmZmVyID0gbnVsbDtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9uZUFycmF5QnVmZmVyKHNyYzogQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gc3JjLnNsaWNlKDApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldEJvZHkoXG4gICAgYm9keT86IEJvZHlJbml0IHwgQm9keU1peGluIHwgUmVhZGFibGVTdHJlYW0sXG4gICAgZW5hYmxlRmV0Y2hBUElTdGFuZGFyZFN0cmVhbWluZz86IGJvb2xlYW5cbiAgKSB7XG4gICAgaWYgKGJvZHkgaW5zdGFuY2VvZiBCb2R5TWl4aW4pIHtcbiAgICAgIGlmIChib2R5Ll9ib2R5VXNlZCB8fCBib2R5Ll9ib2R5U3RyZWFtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYm9keSB1c2VkLCBvciB0cnkgdG8gY29weSBib2R5IHN0cmVhbScpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSB0aGlzLmNsb25lQXJyYXlCdWZmZXIoYm9keS5fYXJyYXlCdWZmZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYm9keSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHRoaXMuX2FycmF5QnVmZmVyID0gdGhpcy5jbG9uZUFycmF5QnVmZmVyKGJvZHkpO1xuICAgICAgfSBlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgRGF0YVZpZXcpIHtcbiAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSB0aGlzLmNsb25lQXJyYXlCdWZmZXIoXG4gICAgICAgICAgYm9keS5idWZmZXIuc2xpY2UoYm9keS5ieXRlT2Zmc2V0LCBib2R5LmJ5dGVPZmZzZXQgKyBib2R5LmJ5dGVMZW5ndGgpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IHRoaXMuY2xvbmVBcnJheUJ1ZmZlcihib2R5LmJ1ZmZlcik7XG4gICAgICB9IGVsc2UgaWYgKGJvZHkpIHtcbiAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoYm9keS50b1N0cmluZygpKS5idWZmZXI7XG4gICAgICB9XG4gICAgICBpZiAoYm9keSBpbnN0YW5jZW9mIEx5bnhSZWFkYWJsZVN0cmVhbSkge1xuICAgICAgICB0aGlzLl9ib2R5U3RyZWFtID0gYm9keTtcbiAgICAgICAgdGhpcy5fZW5hYmxlRmV0Y2hBUElTdGFuZGFyZFN0cmVhbWluZyA9IGVuYWJsZUZldGNoQVBJU3RhbmRhcmRTdHJlYW1pbmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGFycmF5QnVmZmVyKCk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICBpZiAodGhpcy5fZW5hYmxlRmV0Y2hBUElTdGFuZGFyZFN0cmVhbWluZyAmJiB0aGlzLl9ib2R5U3RyZWFtICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHRoaXMuY29uc3VtZVN0cmVhbSgpO1xuICAgICAgaWYgKGJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNhZmVVc2VCb2R5KChib2R5KSA9PiBib2R5KSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBib2R5KCkge1xuICAgIGlmICh0aGlzLl9ib2R5VXNlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdib2R5IHVzZWQnKTtcbiAgICB9XG4gICAgdGhpcy5fYm9keVVzZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLl9ib2R5U3RyZWFtO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHRleHQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodGhpcy5fZW5hYmxlRmV0Y2hBUElTdGFuZGFyZFN0cmVhbWluZyAmJiB0aGlzLl9ib2R5U3RyZWFtICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHRoaXMuY29uc3VtZVN0cmVhbSgpO1xuICAgICAgaWYgKGJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGJ1ZmZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVVzZUJvZHkoKGJvZHkpID0+XG4gICAgICAgIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShib2R5KVxuICAgICAgKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGpzb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5fZW5hYmxlRmV0Y2hBUElTdGFuZGFyZFN0cmVhbWluZyAmJiB0aGlzLl9ib2R5U3RyZWFtICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHRoaXMuY29uc3VtZVN0cmVhbSgpO1xuICAgICAgaWYgKGJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoYnVmZmVyKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNhZmVVc2VCb2R5KChib2R5KSA9PiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoYm9keSkpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4oKHRleHQpID0+IEpTT04ucGFyc2UodGV4dCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE8oaHV6aGFuYm8ubHVjKTogdGhlc2UgQVBJcyByZWx5IG9uIGZvdW5kYW1lbnRhbCB0eXBlc1xuICAvLyB3aGljaCByZXF1aXJlIGV4dHJhIHdvcmtzIHRvIHN1cHBvcnQsIHdlIHdpbGwgc3VwcG9ydCB0aGVzZVxuICAvLyBsYXRlciB3aGVuIHdlIGhhdmUgaW1wbGVtZW50ZWQgdGhlc2UgdHlwZXMuXG5cbiAgLy8gYmxvYigpOiBCbG9iO1xuICAvLyBmb3JtRGF0YSgpOiBGb3JtRGF0YTtcbiAgLy8gY2xvbmVTdHJlYW0oKTogUmVhZGFibGVTdHJlYW07XG5cbiAgcHVibGljIGdldCBib2R5VXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm9keVVzZWQ7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldEFycmF5QnVmZmVyT2ZTdHJlYW1pbmcoKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIGNvbnN0IGNodW5rczogVWludDhBcnJheVtdID0gW107XG4gICAgbGV0IHRvdGFsTGVuZ3RoID0gMDtcbiAgICBjb25zdCByZWFkZXIgPSAoKHRoaXNcbiAgICAgIC5fYm9keVN0cmVhbSBhcyB1bmtub3duKSBhcyBSZWFkYWJsZVN0cmVhbSkuZ2V0UmVhZGVyKCk7XG4gICAge1xuICAgICAgLy8gMS4gcmVhZCBhbGwgZGF0YSBjaHVua3NcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2h1bmtzLnB1c2gobmV3IFVpbnQ4QXJyYXkodmFsdWUpKTtcbiAgICAgICAgdG90YWxMZW5ndGggKz0gdmFsdWUuYnl0ZUxlbmd0aDtcbiAgICAgIH1cbiAgICAgIC8vIDIuIGNyZWF0ZSBmaW5hbEJ1ZmZlciBhbmQgbWVyZ2UgZGF0YXNcbiAgICAgIGNvbnN0IGZpbmFsQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgICAgICBmaW5hbEJ1ZmZlci5zZXQoY2h1bmssIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBjaHVuay5ieXRlTGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbmFsQnVmZmVyLmJ1ZmZlcjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNvbnN1bWVTdHJlYW0oKTogUHJvbWlzZTxBcnJheUJ1ZmZlciB8IG51bGw+IHtcbiAgICBpZiAodGhpcy5fYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuX2JvZHlVc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRBcnJheUJ1ZmZlck9mU3RyZWFtaW5nKCk7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogaHR0cHM6Ly9naXRodWIuY29tL21zd2pzL2hlYWRlcnMtcG9seWZpbGwvYmxvYi9tYWluL0xJQ0VOU0VcbiAqXG5Db3B5cmlnaHQgKGMpIDIwMjDigJNwcmVzZW50IEFydGVtIFpha2hhcmNoZW5rb1xuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCBjbGFzcyBIZWFkZXJzIHtcbiAgcHJpdmF0ZSBfaGVhZGVyc19tYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoaW5pdD86IEhlYWRlcnNJbml0KSB7XG4gICAgaWYgKGluaXQgPT09IG51bGwgfHwgdHlwZW9mIGluaXQgPT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBIZWFkZXJzIGluaXQgd2l0aCBudWxsL251bWJlcmApO1xuICAgIH1cbiAgICBpZiAoaW5pdCBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGluaXQpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGluaXQpKSB7XG4gICAgICBpbml0LmZvckVhY2goKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcgJykgOiB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGluaXQpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluaXQpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbml0W25hbWVdO1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJyAnKSA6IHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIFtTeW1ib2wudG9TdHJpbmdUYWddID0gJ0hlYWRlcnMnO1xuXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgfVxuXG4gICprZXlzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8c3RyaW5nPiB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5faGVhZGVyc19tYXApIHtcbiAgICAgIHlpZWxkIGtleTtcbiAgICB9XG4gIH1cblxuICAqdmFsdWVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8c3RyaW5nPiB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5faGVhZGVyc19tYXApIHtcbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gICplbnRyaWVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8W3N0cmluZywgc3RyaW5nXT4ge1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5faGVhZGVyc19tYXApIHtcbiAgICAgIHlpZWxkIGVudHJ5O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBzdGF0aW5nIHdoZXRoZXIgYSBgSGVhZGVyc2Agb2JqZWN0IGNvbnRhaW5zIGEgY2VydGFpbiBoZWFkZXIuXG4gICAqL1xuICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnNfbWFwLmhhcyhuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYEJ5dGVTdHJpbmdgIHNlcXVlbmNlIG9mIGFsbCB0aGUgdmFsdWVzIG9mIGEgaGVhZGVyIHdpdGggYSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgZ2V0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJzX21hcC5nZXQobmFtZSkgPz8gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgbmV3IHZhbHVlIGZvciBhbiBleGlzdGluZyBoZWFkZXIgaW5zaWRlIGEgYEhlYWRlcnNgIG9iamVjdCwgb3IgYWRkcyB0aGUgaGVhZGVyIGlmIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAqL1xuICBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faGVhZGVyc19tYXAuc2V0KG5hbWUsIFN0cmluZyh2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBuZXcgdmFsdWUgb250byBhbiBleGlzdGluZyBoZWFkZXIgaW5zaWRlIGEgYEhlYWRlcnNgIG9iamVjdCwgb3IgYWRkcyB0aGUgaGVhZGVyIGlmIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAqL1xuICBhcHBlbmQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IHJlc29sdmVkVmFsdWUgPSB0aGlzLmhhcyhuYW1lKSA/IGAke3RoaXMuZ2V0KG5hbWUpfSwgJHt2YWx1ZX1gIDogdmFsdWU7XG5cbiAgICB0aGlzLnNldChuYW1lLCByZXNvbHZlZFZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgaGVhZGVyIGZyb20gdGhlIGBIZWFkZXJzYCBvYmplY3QuXG4gICAqL1xuICBkZWxldGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2hlYWRlcnNfbWFwLmRlbGV0ZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmF2ZXJzZXMgdGhlIGBIZWFkZXJzYCBvYmplY3QsXG4gICAqIGNhbGxpbmcgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBlYWNoIGhlYWRlci5cbiAgICovXG4gIGZvckVhY2g8VGhpc0FyZyA9IHRoaXM+KFxuICAgIGNhbGxiYWNrOiAoXG4gICAgICB0aGlzOiBUaGlzQXJnLFxuICAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgICkgPT4gdm9pZCxcbiAgICB0aGlzQXJnPzogVGhpc0FyZ1xuICApIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgdGhpcy5lbnRyaWVzKCkpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vIE1JVCBMaWNlbnNlXG5cbi8vIENvcHlyaWdodCAoYykgMjAxNyBtb2xzc29uXG5cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4vLyBTT0ZUV0FSRS5cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudCc7XG5cbmludGVyZmFjZSBBYm9ydEV2ZW50IHtcbiAgdHlwZTogJ2Fib3J0JztcbiAgcmVhc29uPzogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgQWJvcnRTaWduYWwgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBwcml2YXRlIF9hYm9ydGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9yZWFzb246IGFueTtcblxuICBwdWJsaWMgb25hYm9ydDogKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZDtcblxuICBnZXQgYWJvcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWJvcnRlZDtcbiAgfVxuXG4gIGdldCByZWFzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYXNvbjtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9hYm9ydGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEFib3J0U2lnbmFsXSc7XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50OiBBYm9ydEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdhYm9ydCcpIHtcbiAgICAgIHRoaXMuX2Fib3J0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fcmVhc29uID0gZXZlbnQucmVhc29uO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uYWJvcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5vbmFib3J0LmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN1cGVyLmVtaXQoZXZlbnQudHlwZSwgZXZlbnQpO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIuYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIF9fY3JlYXRlKCkge1xuICAgIHJldHVybiBuZXcgQWJvcnRTaWduYWwoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWJvcnRDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBfc2lnbmFsOiBBYm9ydFNpZ25hbDtcbiAgZ2V0IHNpZ25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmFsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc2lnbmFsID0gQWJvcnRTaWduYWwuX19jcmVhdGUoKTtcbiAgfVxuXG4gIGFib3J0KHJlYXNvbj86IGFueSkge1xuICAgIGxldCBzaWduYWxSZWFzb24gPSByZWFzb247XG4gICAgaWYgKHNpZ25hbFJlYXNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzaWduYWxSZWFzb24gPSBuZXcgRXJyb3IoJ1RoaXMgb3BlcmF0aW9uIHdhcyBhYm9ydGVkJyk7XG4gICAgICBzaWduYWxSZWFzb24ubmFtZSA9ICdBYm9ydEVycm9yJztcbiAgICB9XG5cbiAgICBjb25zdCBldmVudDogQWJvcnRFdmVudCA9IHtcbiAgICAgIHR5cGU6ICdhYm9ydCcsXG4gICAgICByZWFzb246IHNpZ25hbFJlYXNvbixcbiAgICB9O1xuXG4gICAgdGhpcy5zaWduYWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEFib3J0Q29udHJvbGxlcl0nO1xuICB9XG59XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblxuaW1wb3J0IHsgQm9keU1peGluIH0gZnJvbSAnLi9Cb2R5TWl4aW4nO1xuaW1wb3J0IHsgSGVhZGVycyB9IGZyb20gJy4vSGVhZGVycyc7XG5pbXBvcnQgeyBBYm9ydENvbnRyb2xsZXIsIEFib3J0U2lnbmFsIH0gZnJvbSAnLi9BYm9ydENvbnRyb2xsZXInO1xuXG50eXBlIFJlcXVlc3RMeW54RXh0ZW5zaW9uID0gUmVjb3JkPHN0cmluZywgYW55PjtcblxuaW50ZXJmYWNlIFJlcXVlc3RJbml0SW5uZXIgZXh0ZW5kcyBSZXF1ZXN0SW5pdCB7XG4gIGx5bnhFeHRlbnNpb24/OiBSZXF1ZXN0THlueEV4dGVuc2lvbjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBCb2R5TWl4aW4ge1xuICBwcml2YXRlIF91cmw6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVhZGVyczogSGVhZGVycztcbiAgcHJpdmF0ZSBfbWV0aG9kOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpZ25hbDogQWJvcnRTaWduYWw7XG4gIHByaXZhdGUgX2x5bnhFeHRlbnNpb246IFJlcXVlc3RMeW54RXh0ZW5zaW9uO1xuXG4gIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgfVxuXG4gIGdldCBoZWFkZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJzO1xuICB9XG5cbiAgZ2V0IG1ldGhvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0aG9kO1xuICB9XG5cbiAgZ2V0IHNpZ25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmFsO1xuICB9XG5cbiAgZ2V0IGx5bnhFeHRlbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5bnhFeHRlbnNpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihpbnB1dDogUmVxdWVzdEluZm8sIG9wdGlvbnM/OiBSZXF1ZXN0SW5pdElubmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VybCA9IGlucHV0LnVybDtcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzIGFzIGdsb2JhbFRoaXMuSGVhZGVycyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tZXRob2QgPSBpbnB1dC5tZXRob2Q7XG4gICAgICB0aGlzLl9zaWduYWwgPSAoaW5wdXQuc2lnbmFsIGFzIGFueSkgYXMgQWJvcnRTaWduYWw7XG4gICAgICB0aGlzLnNldEJvZHkoaW5wdXQuX2FycmF5QnVmZmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXJsID0gU3RyaW5nKGlucHV0KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuX2hlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpO1xuICAgIH1cbiAgICB0aGlzLl9tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJztcbiAgICB0aGlzLl9tZXRob2QgPSB0aGlzLl9tZXRob2QudG9VcHBlckNhc2UoKTtcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIG9wdGlvbnMuYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2lnbmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fc2lnbmFsID0gKG9wdGlvbnMuc2lnbmFsIGFzIGFueSkgYXMgQWJvcnRTaWduYWw7XG4gICAgfVxuICAgIHRoaXMuX3NpZ25hbCA9IHRoaXMuX3NpZ25hbCB8fCBBYm9ydFNpZ25hbC5fX2NyZWF0ZSgpO1xuXG4gICAgdGhpcy5fbHlueEV4dGVuc2lvbiA9IG9wdGlvbnMubHlueEV4dGVuc2lvbiB8fCB7fTtcblxuICAgIGlmICghdGhpcy5faGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGdsb2JhbFRoaXMuVVJMU2VhcmNoUGFyYW1zICYmXG4gICAgICAgIG9wdGlvbnMuYm9keSBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2hlYWRlcnMuc2V0KFxuICAgICAgICAgICdDb250ZW50LVR5cGUnLFxuICAgICAgICAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCdcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ib2R5IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRCb2R5KG9wdGlvbnMuYm9keSk7XG4gIH1cblxuICBwdWJsaWMgY2xvbmUoKTogUmVxdWVzdCB7XG4gICAgY29uc3QgY2xvbmVkID0gbmV3IFJlcXVlc3QodGhpcyBhcyBhbnksIHtcbiAgICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgfSk7XG5cbiAgICBjbG9uZWQuc2V0Qm9keSh0aGlzKTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG59XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblxuaW1wb3J0IHsgQm9keU1peGluIH0gZnJvbSAnLi9Cb2R5TWl4aW4nO1xuXG50eXBlIFJlc3BvbnNlTHlueEV4dGVuc2lvbiA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmludGVyZmFjZSBSZXNwb25zZUluaXRJbm5lciBleHRlbmRzIFJlc3BvbnNlSW5pdCB7XG4gIHVybD86IHN0cmluZztcbiAgbHlueEV4dGVuc2lvbj86IFJlc3BvbnNlTHlueEV4dGVuc2lvbjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGV4dGVuZHMgQm9keU1peGluIHtcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgX3N0YXR1czogbnVtYmVyO1xuICBwcml2YXRlIF9zdGF0dXNUZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgX29rOiBib29sZWFuO1xuICBwcml2YXRlIF9oZWFkZXJzOiBIZWFkZXJzO1xuICBwcml2YXRlIF9seW54RXh0ZW5zaW9uOiBSZXNwb25zZUx5bnhFeHRlbnNpb247XG5cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXJsO1xuICB9XG5cbiAgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgZ2V0IHN0YXR1c1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1c1RleHQ7XG4gIH1cblxuICBnZXQgb2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX29rO1xuICB9XG5cbiAgZ2V0IGhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnM7XG4gIH1cblxuICBnZXQgbHlueEV4dGVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlueEV4dGVuc2lvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGJvZHlJbml0PzogQm9keUluaXQsXG4gICAgb3B0aW9ucz86IFJlc3BvbnNlSW5pdElubmVyLFxuICAgIGVuYWJsZUZldGNoQVBJU3RhbmRhcmRTdHJlYW1pbmc/OiBib29sZWFuXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB0aGlzLl9zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXM7XG4gICAgaWYgKHRoaXMuX3N0YXR1cyA8IDIwMCB8fCB0aGlzLl9zdGF0dXMgPiA1OTkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICBcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc3BvbnNlJzogVGhlIHN0YXR1cyBwcm92aWRlZCAoMCkgaXMgb3V0c2lkZSB0aGUgcmFuZ2UgWzIwMCwgNTk5XS5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fb2sgPSB0aGlzLl9zdGF0dXMgPj0gMjAwICYmIHRoaXMuX3N0YXR1cyA8IDMwMDtcbiAgICB0aGlzLl9zdGF0dXNUZXh0ID1cbiAgICAgIG9wdGlvbnMuc3RhdHVzVGV4dCA9PT0gdW5kZWZpbmVkID8gJycgOiAnJyArIG9wdGlvbnMuc3RhdHVzVGV4dDtcbiAgICB0aGlzLl9oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB0aGlzLl91cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgICB0aGlzLl9seW54RXh0ZW5zaW9uID0gb3B0aW9ucy5seW54RXh0ZW5zaW9uIHx8IHt9O1xuICAgIHRoaXMuc2V0Qm9keShib2R5SW5pdCwgZW5hYmxlRmV0Y2hBUElTdGFuZGFyZFN0cmVhbWluZyk7XG4gIH1cblxuICBwdWJsaWMgY2xvbmUoKTogUmVzcG9uc2Uge1xuICAgIGNvbnN0IGNsb25lZCA9IG5ldyBSZXNwb25zZShudWxsLCB7XG4gICAgICBzdGF0dXM6IHRoaXMuX3N0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuX3N0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLl9oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgIH0pO1xuXG4gICAgY2xvbmVkLnNldEJvZHkodGhpcyk7XG5cbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG59XG4iLCAiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIE1ldGEgUGxhdGZvcm1zLCBJbmMuIGFuZCBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUJhc2VVcmwodXJsKSB7XG4gICAgLy8gZnJvbSB0aGlzIE1JVC1saWNlbnNlZCBnaXN0OiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9kcGVyaW5pLzcyOTI5NFxuICAgIHJldHVybiAvXig/Oig/Oig/Omh0dHBzP3xmdHApOik/XFwvXFwvKSg/Oig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1MDBhMS1cXHVmZmZmXVthLXowLTlcXHUwMGExLVxcdWZmZmZfLV17MCw2Mn0pP1thLXowLTlcXHUwMGExLVxcdWZmZmZdXFwuKSooPzpbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH1cXC4/KSkoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC8udGVzdChcbiAgICAgIHVybCxcbiAgICApO1xuICB9XG4gIFxuZXhwb3J0IGNsYXNzIFVSTCB7XG4gICAgX3VybDtcbiAgICBfc2VhcmNoUGFyYW1zSW5zdGFuY2UgPSBudWxsO1xuICBcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGJhc2UpIHtcbiAgICAgIGxldCBiYXNlVXJsID0gbnVsbDtcbiAgICAgIGlmICghYmFzZSB8fCB2YWxpZGF0ZUJhc2VVcmwodXJsKSkge1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIGlmICghdGhpcy5fdXJsLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgICB0aGlzLl91cmwgKz0gJy8nO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgYmFzZVVybCA9IGJhc2U7XG4gICAgICAgICAgaWYgKCF2YWxpZGF0ZUJhc2VVcmwoYmFzZVVybCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgYmFzZSBVUkw6ICR7YmFzZVVybH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZVVybCA9IGJhc2UudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFzZVVybC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgYmFzZVVybCA9IGJhc2VVcmwuc2xpY2UoMCwgYmFzZVVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICB1cmwgPSBgLyR7dXJsfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhc2VVcmwuZW5kc1dpdGgodXJsKSkge1xuICAgICAgICAgIHVybCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VybCA9IGAke2Jhc2VVcmx9JHt1cmx9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaHJlZigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfVxuICBcbiAgICBnZXQgc2VhcmNoUGFyYW1zKCkge1xuICAgICAgaWYgKHRoaXMuX3NlYXJjaFBhcmFtc0luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoUGFyYW1zSW5zdGFuY2UgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fc2VhcmNoUGFyYW1zSW5zdGFuY2U7XG4gICAgfVxuICBcbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH1cbiAgXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICBpZiAodGhpcy5fc2VhcmNoUGFyYW1zSW5zdGFuY2UgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCBpbnN0YW5jZVN0cmluZyA9IHRoaXMuX3NlYXJjaFBhcmFtc0luc3RhbmNlLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBzZXBhcmF0b3IgPSB0aGlzLl91cmwuaW5kZXhPZignPycpID4gLTEgPyAnJicgOiAnPyc7XG4gICAgICByZXR1cm4gdGhpcy5fdXJsICsgc2VwYXJhdG9yICsgaW5zdGFuY2VTdHJpbmc7XG4gICAgfVxuICB9XG4gICIsICIvLyBNSVQgTGljZW5zZVxuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTYgSmVycnkgQmVuZHlcblxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuXG4vKiohXG4gKiB1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbFxuICpcbiAqIEBhdXRob3IgSmVycnkgQmVuZHkgKGh0dHBzOi8vZ2l0aHViLmNvbS9qZXJyeWJlbmR5KVxuICogQGxpY2VuY2UgTUlUXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKHNlbGYpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgY29uc3QgX19VUkxTZWFyY2hQYXJhbXNfXyA9IFwiX19VUkxTZWFyY2hQYXJhbXNfX1wiO1xuLyoqXG4gKiBNYWtlIGEgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtvYmplY3R8c3RyaW5nfFVSTFNlYXJjaFBhcmFtc30gc2VhcmNoXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwoc2VhcmNoKSB7XG4gICAgc2VhcmNoID0gc2VhcmNoIHx8IFwiXCI7XG5cbiAgICAvLyBzdXBwb3J0IGNvbnN0cnVjdCBvYmplY3Qgd2l0aCBhbm90aGVyIFVSTFNlYXJjaFBhcmFtcyBpbnN0YW5jZVxuICAgIGlmIChzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dID0gcGFyc2VUb0RpY3Qoc2VhcmNoKTtcbn1cblxuY29uc3QgcHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwucHJvdG90eXBlO1xuXG4vKipcbiAqIEFwcGVuZHMgYSBzcGVjaWZpZWQga2V5L3ZhbHVlIHBhaXIgYXMgYSBuZXcgc2VhcmNoIHBhcmFtZXRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIGFwcGVuZFRvKHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dLCBuYW1lLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIERlbGV0ZXMgdGhlIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIsIGFuZCBpdHMgYXNzb2NpYXRlZCB2YWx1ZSxcbiAqIGZyb20gdGhlIGxpc3Qgb2YgYWxsIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dIFtuYW1lXTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3N0cmluZ3xudWxsfVxuICovXG5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBkaWN0ID0gdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX107XG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gZGljdFtuYW1lXVswXSA6IG51bGw7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYWxsIHRoZSB2YWx1ZXMgYXNzb2NpYXRpb24gd2l0aCBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgZGljdCA9IHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dO1xuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IGRpY3QgW25hbWVdLnNsaWNlKDApIDogW107XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBCb29sZWFuIGluZGljYXRpbmcgaWYgc3VjaCBhIHNlYXJjaCBwYXJhbWV0ZXIgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkodGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10sIG5hbWUpO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHRvIGEgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciB0b1xuICogdGhlIGdpdmVuIHZhbHVlLiBJZiB0aGVyZSB3ZXJlIHNldmVyYWwgdmFsdWVzLCBkZWxldGUgdGhlXG4gKiBvdGhlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX11bbmFtZV0gPSBbJycgKyB2YWx1ZV07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmluZyBhIHF1ZXJ5IHN0cmluZyBzdWl0YWJsZSBmb3IgdXNlIGluIGEgVVJMLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWN0ID0gdGhpc1tfX1VSTFNlYXJjaFBhcmFtc19fXSwgcXVlcnkgPSBbXSwgaSwga2V5LCBuYW1lLCB2YWx1ZTtcbiAgICBmb3IgKGtleSBpbiBkaWN0KSB7XG4gICAgICAgIG5hbWUgPSBlbmNvZGUoa2V5KTtcbiAgICAgICAgZm9yIChpID0gMCwgdmFsdWUgPSBkaWN0W2tleV07IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcXVlcnkucHVzaChuYW1lICsgJz0nICsgZW5jb2RlKHZhbHVlW2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKTtcbn07XG5cbnByb3RvdHlwZS5wb2x5ZmlsbCA9IHRydWU7XG5wcm90b3R5cGVbU3ltYm9sLnRvU3RyaW5nVGFnXSA9ICdVUkxTZWFyY2hQYXJhbXMnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtvYmplY3R9IHRoaXNBcmdcbiAqL1xucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZGljdFtuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCB0aGlzKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIFNvcnQgYWxsIG5hbWUtdmFsdWUgcGFpcnNcbiAqL1xucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGljdCA9IHBhcnNlVG9EaWN0KHRoaXMudG9TdHJpbmcoKSksIGtleXMgPSBbXSwgaywgaSwgajtcbiAgICBmb3IgKGsgaW4gZGljdCkge1xuICAgICAgICBrZXlzLnB1c2goayk7XG4gICAgfVxuICAgIGtleXMuc29ydCgpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpc1snZGVsZXRlJ10oa2V5c1tpXSk7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldLCB2YWx1ZXMgPSBkaWN0W2tleV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKGtleSwgdmFsdWVzW2pdKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXlzIG9mXG4gKiB0aGUga2V5L3ZhbHVlIHBhaXJzIGNvbnRhaW5lZCBpbiB0aGlzIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKGl0ZW1zKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCB2YWx1ZXMgb2ZcbiAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5L3ZhbHVlXG4gKiBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBuYW1lKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIGl0ZW1dKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKGl0ZW1zKTtcbn07XG5cbnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gcHJvdG90eXBlLmVudHJpZXM7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsICdzaXplJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGljdCA9IHBhcnNlVG9EaWN0KHRoaXMudG9TdHJpbmcoKSlcbiAgICAgICAgaWYgKHByb3RvdHlwZSA9PT0gdGhpcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBpbnZvY2F0aW9uIGF0IFVSTFNlYXJjaFBhcmFtcy5pbnZva2VHZXR0ZXInKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkaWN0KS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cikge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBkaWN0W2N1cl0ubGVuZ3RoO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICAgIHZhciByZXBsYWNlID0ge1xuICAgICAgICAnISc6ICclMjEnLFxuICAgICAgICBcIidcIjogJyUyNycsXG4gICAgICAgICcoJzogJyUyOCcsXG4gICAgICAgICcpJzogJyUyOScsXG4gICAgICAgICd+JzogJyU3RScsXG4gICAgICAgICclMjAnOiAnKycsXG4gICAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnXFwoXFwpfl18JTIwfCUwMC9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC9bICtdL2csICclMjAnKVxuICAgICAgICAucmVwbGFjZSgvKCVbYS1mMC05XXsyfSkrL2lnLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtYXRjaCk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlSXRlcmF0b3IoYXJyKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGFyci5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG5cbiAgICByZXR1cm4gaXRlcmF0b3I7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9EaWN0KHNlYXJjaCkge1xuICAgIHZhciBkaWN0ID0ge307XG5cbiAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAvLyBpZiBgc2VhcmNoYCBpcyBhbiBhcnJheSwgdHJlYXQgaXQgYXMgYSBzZXF1ZW5jZVxuICAgICAgICBpZiAoaXNBcnJheShzZWFyY2gpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlYXJjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VhcmNoW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KGl0ZW0pICYmIGl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGl0ZW1bMF0sIGl0ZW1bMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdVUkxTZWFyY2hQYXJhbXMnOiBTZXF1ZW5jZSBpbml0aWFsaXplciBtdXN0IG9ubHkgY29udGFpbiBwYWlyIGVsZW1lbnRzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNlYXJjaCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBrZXksIHNlYXJjaFtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlbW92ZSBmaXJzdCAnPydcbiAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKFwiP1wiKSA9PT0gMCkge1xuICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnNsaWNlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhaXJzID0gc2VhcmNoLnNwbGl0KFwiJlwiKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWlycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFpcnMgW2pdLFxuICAgICAgICAgICAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZignPScpO1xuXG4gICAgICAgICAgICBpZiAoLTEgPCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZS5zbGljZSgwLCBpbmRleCkpLCBkZWNvZGUodmFsdWUuc2xpY2UoaW5kZXggKyAxKSkpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBkZWNvZGUodmFsdWUpLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpY3Q7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvKGRpY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IChcbiAgICAgICAgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS50b1N0cmluZygpIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgKTtcblxuICAgIC8vICM0NyBQcmV2ZW50IHVzaW5nIGBoYXNPd25Qcm9wZXJ0eWAgYXMgYSBwcm9wZXJ0eSBuYW1lXG4gICAgaWYgKGhhc093blByb3BlcnR5KGRpY3QsIG5hbWUpKSB7XG4gICAgICAgIGRpY3RbbmFtZV0ucHVzaCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpY3RbbmFtZV0gPSBbdmFsXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gICAgcmV0dXJuICEhdmFsICYmICdbb2JqZWN0IEFycmF5XScgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpO1xufVxuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbnNlbGYuVVJMU2VhcmNoUGFyYW1zID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMgPz8gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGw7XG5cbn0iLCAiaW1wb3J0IHsgTHlueCB9IGZyb20gJ0BseW54LWpzL3R5cGVzJztcbmltcG9ydCB7IEJhc2VFdmVudE9yaWcsIFRhcmdldCB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzL3R5cGVzL2NvbW1vbi9ldmVudHMnO1xuXG50eXBlIEV2ZW50U291cmNlRXZlbnQgPSB7XG4gIGRhdGE6IHN0cmluZztcbiAgZXZlbnQ/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xudHlwZSBFdmVudCA9IEJhc2VFdmVudE9yaWc8YW55PjtcblxuaW50ZXJmYWNlIEZldGNoRXZlbnRTb3VyY2VPcHRpb25zIGV4dGVuZHMgUmVxdWVzdEluaXQge31cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50U291cmNlKGZldGNoOiBMeW54WydmZXRjaCddKTogYW55IHtcbiAgcmV0dXJuIGNsYXNzIEV2ZW50U291cmNlIHtcbiAgICBwcml2YXRlIHVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgb3B0aW9uczogRmV0Y2hFdmVudFNvdXJjZU9wdGlvbnM7XG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IFJlY29yZDxzdHJpbmcsIEV2ZW50TGlzdGVuZXJbXT4gPSB7fTtcbiAgICBwcml2YXRlIF9jbG9zZWQ6IGJvb2xlYW47XG4gICAgb25tZXNzYWdlOiAoZXZlbnQ6IEV2ZW50U291cmNlRXZlbnQpID0+IHZvaWQ7XG4gICAgb25lcnJvcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbiAgICBvbm9wZW46IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgb3B0aW9uczogRmV0Y2hFdmVudFNvdXJjZU9wdGlvbnMgPSB7fSkge1xuICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25uZWN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXNwYXRjaEV2ZW50KHR5cGU6IHN0cmluZywgZXZlbnQ6IEV2ZW50U291cmNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGV2ZW50VG9EaXNwYXRjaDogRXZlbnQgPSB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGRldGFpbDogZXZlbnQsXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgdGFyZ2V0OiB7fSBhcyBUYXJnZXQsXG4gICAgICAgIGN1cnJlbnRUYXJnZXQ6IHt9IGFzIFRhcmdldCxcbiAgICAgICAgcHJldmVudERlZmF1bHQ6ICgpID0+IHt9LFxuICAgICAgICBzdG9wUHJvcGFnYXRpb246ICgpID0+IHt9LFxuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdtZXNzYWdlJyAmJiB0aGlzLm9ubWVzc2FnZSkge1xuICAgICAgICB0aGlzLm9ubWVzc2FnZShldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlcnJvcicgJiYgdGhpcy5vbmVycm9yKSB7XG4gICAgICAgIHRoaXMub25lcnJvcihldmVudFRvRGlzcGF0Y2gpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnb3BlbicgJiYgdGhpcy5vbm9wZW4pIHtcbiAgICAgICAgdGhpcy5vbm9wZW4oZXZlbnRUb0Rpc3BhdGNoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8IFtdO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihldmVudCBhcyBhbnkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8IFtdO1xuICAgICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0gPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSB8fCBbXTtcbiAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0uZmlsdGVyKChsKSA9PiBsICE9PSBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIHtcbiAgICAgICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbHlueEV4dGVuc2lvbjoge1xuICAgICAgICAgICAgdXNlU3RyZWFtaW5nOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdvcGVuJywgeyBkYXRhOiAnJyB9KTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICAgIGlmIChkb25lKSBicmVhaztcbiAgICAgICAgICBjb25zdCByYXdFdmVudCA9IGdsb2JhbFRoaXMuVGV4dENvZGVjSGVscGVyLmRlY29kZSh2YWx1ZSk7XG4gICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLl9wYXJzZUV2ZW50KHJhd0V2ZW50KTtcbiAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoZXZlbnQuZXZlbnQgfHwgJ21lc3NhZ2UnLCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdlcnJvcicsIHsgZGF0YTogJycsIGVycm9yOiBlcnIgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VFdmVudChyYXc6IHN0cmluZyk6IEV2ZW50U291cmNlRXZlbnQgfCBudWxsIHtcbiAgICAgIGNvbnN0IGxpbmVzID0gcmF3LnNwbGl0KCdcXG4nKTtcbiAgICAgIGxldCBldmVudDogRXZlbnRTb3VyY2VFdmVudCA9IHsgZGF0YTogJycgfTtcbiAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgZXZlbnQuZGF0YSArPSBsaW5lLnNsaWNlKDUpLnRyaW0oKSArICdcXG4nO1xuICAgICAgICB9IGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgnZXZlbnQ6JykpIHtcbiAgICAgICAgICBldmVudC5ldmVudCA9IGxpbmUuc2xpY2UoNikudHJpbSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgnaWQ6JykpIHtcbiAgICAgICAgICBldmVudC5pZCA9IGxpbmUuc2xpY2UoMykudHJpbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgbGFzdCBuZXdsaW5lXG4gICAgICBpZiAoZXZlbnQuZGF0YSkgZXZlbnQuZGF0YSA9IGV2ZW50LmRhdGEuc2xpY2UoMCwgLTEpO1xuICAgICAgcmV0dXJuIGV2ZW50LmRhdGEgPyBldmVudCA6IG51bGw7XG4gICAgfVxuICB9O1xufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCB7XG4gIE5vZGVzUmVmIGFzIElOb2Rlc1JlZixcbiAgTXVsdGlOb2Rlc1JlZiBhcyBJTXVsdGlOb2Rlc1JlZixcbiAgU2VsZWN0b3JRdWVyeSBhcyBJU2VsZWN0b3JRdWVyeSxcbiAgdWlGaWVsZHNPcHRpb25zLFxuICB1aU1ldGhvZE9wdGlvbnMsXG59IGZyb20gJ0BseW54LWpzL3R5cGVzJztcbmltcG9ydCB7XG4gIEVycm9yQ29kZSxcbiAgSWRlbnRpZmllclR5cGUsXG4gIE5vZGVTZWxlY3RUb2tlbixcbiAgU2VsZWN0b3JRdWVyeU5hdGl2ZVByb3h5LFxufSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJbnZva2VFcnJvciwgcmVwb3J0RXJyb3IgfSBmcm9tICcuLi9yZXBvcnQnO1xuaW1wb3J0IHsgQW5pbWF0aW9uT3BlcmF0aW9uLCBBbmltYXRpb25WMiB9IGZyb20gJy4uL2FuaW1hdGlvbic7XG5cbi8qKlxuICogU2VsZWN0b3JRdWVyeSBpcyBhIHF1ZXJ5IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHNlbGVjdCBub2RlcyBpbiB0aGUgVmlydHVhbCBET00gdHJlZS5cbiAqXG4gKiBFeGFtcGxlOlxuICogdGhpcy5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAqICAgLnNlbGVjdCgnI3ZpZGVvJylcbiAqICAgLmludm9rZSh7XG4gKiAgICAgbWV0aG9kOiAnc2Vla1RvJyxcbiAqICAgICBwYXJhbXM6IHtcbiAqICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICogICAgIH0sXG4gKiAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICogICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAqICAgICB9LFxuICogICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAqICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlLCByZXMuZGF0YSk7XG4gKiAgICAgfSxcbiAqICAgfSlcbiAqICAgLmV4ZWMoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JRdWVyeSBpbXBsZW1lbnRzIElTZWxlY3RvclF1ZXJ5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY29tcG9uZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Rhc2tRdWV1ZTogRnVuY3Rpb25bXTtcbiAgcHJpdmF0ZSByZWFkb25seSBfbmF0aXZlX3Byb3h5OiBTZWxlY3RvclF1ZXJ5TmF0aXZlUHJveHk7XG4gIHByaXZhdGUgX3Jvb3RfdW5pcXVlX2lkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBOb3JtYWxseSwgYSBxdWVyeSBpcyBleGVjdXRlZCBhZnRlciBjYWxsaW5nIGV4ZWMoKS5cbiAgICogSG93ZXZlciwgd2hlbiBgX2ZpcmVfaW1tZWRpYXRlbHlgIGlzIHNldCB0byB0cnVlLFxuICAgKiB0aGUgcXVlcnkgd2lsbCBiZSBleGVjdXRlZCBpbW1lZGlhdGVseSBhZnRlciB0YXNrIGNvbW1pdHRlZCAod2hlbiBjYWxsaW5nIGBpbnZva2UoKWAsIGV0Yy4pXG4gICAqIHdpdGhvdXQgdGhlIG5lZWQgb2YgY2FsbGluZyBgZXhlYygpYCBleHBsaWNpdGx5LlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWQgd2hlbiBTZWxlY3RvclF1ZXJ5IGlzIHVzZWQgYXMgUmVhY3RSZWYuXG4gICAqL1xuICBwcml2YXRlIF9maXJlX2ltbWVkaWF0ZWx5OiBib29sZWFuO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50OiBzdHJpbmcsXG4gICAgdGFza1F1ZXVlOiBGdW5jdGlvbltdLFxuICAgIHByb3h5OiBTZWxlY3RvclF1ZXJ5TmF0aXZlUHJveHlcbiAgKSB7XG4gICAgdGhpcy5fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuX3Rhc2tRdWV1ZSA9IHRhc2tRdWV1ZTtcbiAgICB0aGlzLl9uYXRpdmVfcHJveHkgPSBwcm94eTtcbiAgICB0aGlzLl9maXJlX2ltbWVkaWF0ZWx5ID0gZmFsc2U7XG4gICAgdGhpcy5fcm9vdF91bmlxdWVfaWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVF1ZXJ5KFxuICAgIHByZXZRdWVyeTogU2VsZWN0b3JRdWVyeSxcbiAgICBjb21wb25lbnQ/OiBzdHJpbmdcbiAgKTogU2VsZWN0b3JRdWVyeSB7XG4gICAgcmV0dXJuIG5ldyBTZWxlY3RvclF1ZXJ5KFxuICAgICAgY29tcG9uZW50ID8/IHByZXZRdWVyeS5fY29tcG9uZW50LFxuICAgICAgcHJldlF1ZXJ5Ll90YXNrUXVldWUuc2xpY2UoKSxcbiAgICAgIHByZXZRdWVyeS5fbmF0aXZlX3Byb3h5XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBuZXdFbXB0eVF1ZXJ5KFxuICAgIHByb3h5OiBTZWxlY3RvclF1ZXJ5TmF0aXZlUHJveHksXG4gICAgY29tcG9uZW50Pzogc3RyaW5nXG4gICk6IFNlbGVjdG9yUXVlcnkge1xuICAgIHJldHVybiBuZXcgU2VsZWN0b3JRdWVyeShjb21wb25lbnQgPz8gJycsIFtdLCBwcm94eSk7XG4gIH1cblxuICAvKipcbiAgICogQWNjb3JkaW5nIHRvIGB0aGlzLl9maXJlX2ltbWVkaWF0ZWx5YCxcbiAgICogZWl0aGVyIGV4ZWN1dGUgdGhlIHF1ZXJ5IGltbWVkaWF0ZWx5IG9yIGFkZCBpdCB0byB0aGUgdGFzayBxdWV1ZSBvZiB0aGUgU2VsZWN0b3JRdWVyeS5cbiAgICogSW4gdGhlIGxhdHRlciBjYXNlLCBhIG5ldyBxdWVyeSBpcyByZXR1cm5lZCwgYW5kIGB0aGlzYCBpcyBub3QgbW9kaWZpZWQuXG4gICAqIEBwYXJhbSB0YXNrIHRoZSB0YXNrIHRvIGNvbW1pdFxuICAgKi9cbiAgY29tbWl0VGFzayh0YXNrOiBGdW5jdGlvbik6IElTZWxlY3RvclF1ZXJ5IHtcbiAgICBsZXQgbmV3X3F1ZXJ5ID0gU2VsZWN0b3JRdWVyeS5mcm9tUXVlcnkodGhpcywgdGhpcy5fY29tcG9uZW50KTtcbiAgICBuZXdfcXVlcnkuX3Rhc2tRdWV1ZS5wdXNoKHRhc2spO1xuXG4gICAgaWYgKHRoaXMuX2ZpcmVfaW1tZWRpYXRlbHkpIHtcbiAgICAgIG5ld19xdWVyeS5leGVjKCk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3X3F1ZXJ5O1xuICB9XG5cbiAgaW4oY29tcG9uZW50OiB7IGNyZWF0ZVNlbGVjdG9yUXVlcnk6IEZ1bmN0aW9uIH0pOiBJU2VsZWN0b3JRdWVyeSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jcmVhdGVTZWxlY3RvclF1ZXJ5KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgYSBzaW5nbGUgbm9kZSBieSBDU1Mgc2VsZWN0b3IuXG4gICAqIEBwYXJhbSBzZWxlY3RvciBDU1Mgc2VsZWN0b3JcbiAgICovXG4gIHNlbGVjdChzZWxlY3Rvcjogc3RyaW5nKTogSU5vZGVzUmVmIHtcbiAgICByZXR1cm4gbmV3IE5vZGVzUmVmKHRoaXMsIHtcbiAgICAgIHR5cGU6IElkZW50aWZpZXJUeXBlLklEX1NFTEVDVE9SLFxuICAgICAgaWRlbnRpZmllcjogc2VsZWN0b3IsXG4gICAgICBjb21wb25lbnRfaWQ6IHRoaXMuX2NvbXBvbmVudCxcbiAgICAgIHJvb3RfdW5pcXVlX2lkOiB0aGlzLl9yb290X3VuaXF1ZV9pZCxcbiAgICAgIGZpcnN0X29ubHk6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBhbGwgbm9kZXMgc2F0aXNmeWluZyBDU1Mgc2VsZWN0b3IuXG4gICAqIEBwYXJhbSBzZWxlY3RvciBDU1Mgc2VsZWN0b3JcbiAgICovXG4gIHNlbGVjdEFsbChzZWxlY3Rvcjogc3RyaW5nKTogSU11bHRpTm9kZXNSZWYge1xuICAgIHJldHVybiBuZXcgTm9kZXNSZWYodGhpcywge1xuICAgICAgdHlwZTogSWRlbnRpZmllclR5cGUuSURfU0VMRUNUT1IsXG4gICAgICBpZGVudGlmaWVyOiBzZWxlY3RvcixcbiAgICAgIGNvbXBvbmVudF9pZDogdGhpcy5fY29tcG9uZW50LFxuICAgICAgcm9vdF91bmlxdWVfaWQ6IHRoaXMuX3Jvb3RfdW5pcXVlX2lkLFxuICAgICAgZmlyc3Rfb25seTogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBhIHNpbmdsZSBub2RlIGFzIFJlYWN0IHJlZi5cbiAgICogV2hlbiB3b3JrcyBhcyBSZWFjdFJlZiwgU2VsZWN0b3JRdWVyeSBzaG91bGQgYWN0IGxpa2UgZ2V0Tm9kZVJlZiwgd2hpY2ggbWVhbnM6XG4gICAqIDEuIGNhc2NhZGUgcXVlcnkgaXMgZGlzYWJsZWQuXG4gICAqIDIuIHRhc2tzIGFyZSBleGVjdXRlZCBpbW1lZGlhdGVseSB3aXRob3V0IGNhbGxpbmcgZXhlYygpLlxuICAgKi9cbiAgc2VsZWN0UmVhY3RSZWYocmVmX3N0cmluZzogc3RyaW5nKTogSU5vZGVzUmVmIHtcbiAgICBpZiAodGhpcy5fdGFza1F1ZXVlLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgICAgJ3NlbGVjdFJlYWN0UmVmKCkgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgYW55IG90aGVyIHNlbGVjdG9yIHF1ZXJ5IG1ldGhvZHMnO1xuICAgICAgbmF0aXZlQ29uc29sZS53YXJuKGVycm9yTWVzc2FnZSk7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgcmVwb3J0RXJyb3IoXG4gICAgICAgIG5ldyBJbnZva2VFcnJvcihlcnJvck1lc3NhZ2UsIGVycm9yLnN0YWNrKSxcbiAgICAgICAgdGhpcy5fbmF0aXZlX3Byb3h5Lm5hdGl2ZUFwcFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9maXJlX2ltbWVkaWF0ZWx5ID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3IE5vZGVzUmVmKHRoaXMsIHtcbiAgICAgIHR5cGU6IElkZW50aWZpZXJUeXBlLlJFRl9JRCxcbiAgICAgIGlkZW50aWZpZXI6IHJlZl9zdHJpbmcsXG4gICAgICBjb21wb25lbnRfaWQ6IHRoaXMuX2NvbXBvbmVudCxcbiAgICAgIHJvb3RfdW5pcXVlX2lkOiB0aGlzLl9yb290X3VuaXF1ZV9pZCxcbiAgICAgIGZpcnN0X29ubHk6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IHJvb3Qgbm9kZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgc2VsZWN0Um9vdCgpOiBJTm9kZXNSZWYge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdCgnJyk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBhIHNpbmdsZSBub2RlIGJ5IGVsZW1lbnQgaWQuXG4gICAqIFdoZW4gYSB0b3VjaCBldmVudCBpcyB0cmlnZ2VyZWQsIHRoZSBlbGVtZW50IGlkIG9mIHRoZSBub2RlIGlzIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlciBhcyAndWlkJyxcbiAgICogYnkgd2hpY2ggY2FuIGEgbm9kZSBiZSBzZWxlY3RlZCBpbiBpdHMgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHNlbGVjdFVuaXF1ZUlEKHVuaXF1ZUlkOiBzdHJpbmcgfCBudW1iZXIpOiBJTm9kZXNSZWYge1xuICAgIHJldHVybiBuZXcgTm9kZXNSZWYodGhpcywge1xuICAgICAgdHlwZTogSWRlbnRpZmllclR5cGUuVU5JUVVFX0lELFxuICAgICAgaWRlbnRpZmllcjogdW5pcXVlSWQudG9TdHJpbmcoKSxcbiAgICAgIGNvbXBvbmVudF9pZDogdGhpcy5fY29tcG9uZW50LFxuICAgICAgcm9vdF91bmlxdWVfaWQ6IHRoaXMuX3Jvb3RfdW5pcXVlX2lkLFxuICAgICAgZmlyc3Rfb25seTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIGFsbCB0YXNrcyBpbiB0aGUgdGFzayBxdWV1ZS5cbiAgICogV2hlbiBgdGhpcy5fZmlyZV9pbW1lZGlhdGVseWAgaXMgc2V0IHRvIHRydWUsIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgZXhlYygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Rhc2tRdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgdGhpcy5fdGFza1F1ZXVlW2ldKHRoaXMuX25hdGl2ZV9wcm94eSk7XG4gICAgfVxuICB9XG5cbiAgc2V0Um9vdCh1bmlxdWVJZDogc3RyaW5nIHwgbnVtYmVyKTogU2VsZWN0b3JRdWVyeSB7XG4gICAgdGhpcy5fcm9vdF91bmlxdWVfaWQgPSBOdW1iZXIodW5pcXVlSWQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb2Rlc1JlZiBpbXBsZW1lbnRzIElOb2Rlc1JlZiB7XG4gIHByaXZhdGUgc3RhdGljIG5vZGVQb29sID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfbm9kZVNlbGVjdFRva2VuOiBOb2RlU2VsZWN0VG9rZW47XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NlbGVjdG9yUXVlcnk6IFNlbGVjdG9yUXVlcnk7XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JRdWVyeTogU2VsZWN0b3JRdWVyeSwgbm9kZVNlbGVjdFRva2VuOiBOb2RlU2VsZWN0VG9rZW4pIHtcbiAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4gPSBub2RlU2VsZWN0VG9rZW47XG4gICAgdGhpcy5fc2VsZWN0b3JRdWVyeSA9IHNlbGVjdG9yUXVlcnk7XG4gIH1cbiAgaW52b2tlKG9wdGlvbnM6IHVpTWV0aG9kT3B0aW9ucyk6IElTZWxlY3RvclF1ZXJ5IHtcbiAgICBsZXQgZXJyb3JTdGFjaztcbiAgICBpZiAoTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgICAgZXJyb3JTdGFjayA9IG5ldyBFcnJvcignJyk7XG4gICAgfVxuXG4gICAgbGV0IHRhc2sgPSAocHJveHk6IFNlbGVjdG9yUXVlcnlOYXRpdmVQcm94eSkgPT4ge1xuICAgICAgbGV0IGNhbGxiYWNrID0gKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmNvZGUgPT09IEVycm9yQ29kZS5TVUNDRVNTKSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzICYmIG9wdGlvbnMuc3VjY2VzcyhyZXMuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuZmFpbCkge1xuICAgICAgICAgICAgb3B0aW9ucy5mYWlsKHJlcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVuYWJsZSB3YXJuaW5nIGluIGRldmVsb3BtZW50IGFuZCB0ZXN0XG4gICAgICAgICAgICBpZiAoTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgICAgICAgICAgICBpZiAoIXByb3h5Lmx5bnguX3N3aXRjaGVzLmRpc2FibGVTZWxlY3RvclF1ZXJ5V2FybmluZ1doZW5GYWlsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgRmFpbGVkIHRvIGV4ZWMgY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmludm9rZSgpIG9uIE5vZGVzUmVmICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW5cbiAgICAgICAgICAgICAgICApfS4gQWRkIGEgZmFpbCBjYWxsYmFjayB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcuIE1zZzogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgICl9YDtcbiAgICAgICAgICAgICAgICBuYXRpdmVDb25zb2xlLndhcm4oZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihcbiAgICAgICAgICAgICAgICAgIG5ldyBJbnZva2VFcnJvcihlcnJvck1lc3NhZ2UsIGVycm9yU3RhY2suc3RhY2spLFxuICAgICAgICAgICAgICAgICAgcHJveHkubmF0aXZlQXBwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmICghdGhpcy5fbm9kZVNlbGVjdFRva2VuLmZpcnN0X29ubHkpIHtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGNvZGU6IEVycm9yQ29kZS5TRUxFQ1RPUl9OT1RfU1VQUE9SVEVELFxuICAgICAgICAgIGRhdGE6ICdzZWxlY3RBbGwgbm90IHN1cHBvcnRlZCBmb3IgaW52b2tlIG1ldGhvZCcsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwcm94eS5uYXRpdmVBcHAuaW52b2tlVUlNZXRob2QoXG4gICAgICAgIHRoaXMuX25vZGVTZWxlY3RUb2tlbi50eXBlLFxuICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4uaWRlbnRpZmllcixcbiAgICAgICAgdGhpcy5fbm9kZVNlbGVjdFRva2VuLmNvbXBvbmVudF9pZCxcbiAgICAgICAgb3B0aW9ucy5tZXRob2QsXG4gICAgICAgIG9wdGlvbnMucGFyYW1zID8/IHt9LFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgdGhpcy5fbm9kZVNlbGVjdFRva2VuLnJvb3RfdW5pcXVlX2lkXG4gICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdG9yUXVlcnkuY29tbWl0VGFzayh0YXNrKTtcbiAgfVxuXG4gIHBhdGgoY2I6IEZ1bmN0aW9uKSB7XG4gICAgbGV0IHRhc2sgPSAocHJveHk6IFNlbGVjdG9yUXVlcnlOYXRpdmVQcm94eSkgPT4ge1xuICAgICAgbGV0IGNhbGxiYWNrID0gKHJlcykgPT4ge1xuICAgICAgICBjYiAmJiBjYihyZXMuZGF0YSwgcmVzLnN0YXR1cyk7XG4gICAgICB9O1xuICAgICAgcHJveHkubmF0aXZlQXBwLmdldFBhdGhJbmZvKFxuICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4udHlwZSxcbiAgICAgICAgdGhpcy5fbm9kZVNlbGVjdFRva2VuLmlkZW50aWZpZXIsXG4gICAgICAgIHRoaXMuX25vZGVTZWxlY3RUb2tlbi5jb21wb25lbnRfaWQsXG4gICAgICAgIHRoaXMuX25vZGVTZWxlY3RUb2tlbi5maXJzdF9vbmx5LFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgdGhpcy5fbm9kZVNlbGVjdFRva2VuLnJvb3RfdW5pcXVlX2lkXG4gICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdG9yUXVlcnkuY29tbWl0VGFzayh0YXNrKTtcbiAgfVxuXG4gIGZpZWxkcyhmaWVsZHM6IHVpRmllbGRzT3B0aW9ucywgY2I6IEZ1bmN0aW9uKSB7XG4gICAgbGV0IHRhc2sgPSAocHJveHk6IFNlbGVjdG9yUXVlcnlOYXRpdmVQcm94eSkgPT4ge1xuICAgICAgbGV0IGNhbGxiYWNrID0gKHJlczogeyBkYXRhOiBhbnk7IHN0YXR1czogYW55IH0pID0+IHtcbiAgICAgICAgLy8gd2hlbiAncXVlcnknIGlzIHBhc3NlZCwgJ3VuaXF1ZV9pZCcgaXMgYWN0dWFsbHkgcmV0dXJuZWQuXG4gICAgICAgIC8vIHNob3VsZCBjcmVhdGUgU2VsZWN0b3JRdWVyeSB1c2luZyAndW5pcXVlX2lkJyBhcyByb290IGhlcmUuXG4gICAgICAgIGlmIChmaWVsZHMucXVlcnkpIHtcbiAgICAgICAgICBjb25zdCBhZGRRdWVyeU9iamVjdCA9IChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5xdWVyeSA9IFNlbGVjdG9yUXVlcnkubmV3RW1wdHlRdWVyeShwcm94eSk7XG4gICAgICAgICAgICByZXN1bHQucXVlcnkuc2V0Um9vdChyZXN1bHQudW5pcXVlX2lkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYgKCFmaWVsZHMudW5pcXVlX2lkKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHQudW5pcXVlX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHRoaXMuX25vZGVTZWxlY3RUb2tlbi5maXJzdF9vbmx5KSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGFkZFF1ZXJ5T2JqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlc3VsdCBvZiByZXMuZGF0YSkge1xuICAgICAgICAgICAgICBhZGRRdWVyeU9iamVjdChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYiAmJiBjYihyZXMuZGF0YSwgcmVzLnN0YXR1cyk7XG4gICAgICB9O1xuICAgICAgbGV0IGZpZWxkc19hcnJheTogc3RyaW5nW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGtleSBpbiBmaWVsZHMpIHtcbiAgICAgICAgLy8gZmlsdGVyICdxdWVyeScuIHVzZSAndW5pcXVlX2lkJyBpbnN0ZWFkLlxuICAgICAgICBpZiAoa2V5ID09ICdxdWVyeScgJiYgZmllbGRzW2tleV0gPT0gdHJ1ZSAmJiAhZmllbGRzLnVuaXF1ZV9pZCkge1xuICAgICAgICAgIGZpZWxkc19hcnJheS5wdXNoKCd1bmlxdWVfaWQnKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGRzW2tleV0pIHtcbiAgICAgICAgICBmaWVsZHNfYXJyYXkucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcm94eS5uYXRpdmVBcHAuZ2V0RmllbGRzKFxuICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4udHlwZSxcbiAgICAgICAgdGhpcy5fbm9kZVNlbGVjdFRva2VuLmlkZW50aWZpZXIsXG4gICAgICAgIHRoaXMuX25vZGVTZWxlY3RUb2tlbi5jb21wb25lbnRfaWQsXG4gICAgICAgIHRoaXMuX25vZGVTZWxlY3RUb2tlbi5maXJzdF9vbmx5LFxuICAgICAgICBmaWVsZHNfYXJyYXksXG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4ucm9vdF91bmlxdWVfaWRcbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0b3JRdWVyeS5jb21taXRUYXNrKHRhc2spO1xuICB9XG5cbiAgYW5pbWF0ZShhbmltYXRpb25zOiBBbmltYXRpb25WMltdIHwgQW5pbWF0aW9uVjIpOiBJU2VsZWN0b3JRdWVyeSB7XG4gICAgbGV0IGFuaW1hdGlvbnNBcnJheSA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFuaW1hdGlvbnMpKSB7XG4gICAgICBhbmltYXRpb25zQXJyYXkgPSBhbmltYXRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmltYXRpb25zQXJyYXkucHVzaChhbmltYXRpb25zKTtcbiAgICB9XG4gICAgbGV0IHRhc2sgPSAocHJveHk6IFNlbGVjdG9yUXVlcnlOYXRpdmVQcm94eSkgPT4ge1xuICAgICAgYW5pbWF0aW9uc0FycmF5LmZvckVhY2goKGFuaW1hdGlvbikgPT4ge1xuICAgICAgICBwcm94eS5uYXRpdmVBcHAuYW5pbWF0ZShcbiAgICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4udHlwZSxcbiAgICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4uaWRlbnRpZmllcixcbiAgICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4uY29tcG9uZW50X2lkLFxuICAgICAgICAgIEFuaW1hdGlvbk9wZXJhdGlvbi5TVEFSVCxcbiAgICAgICAgICBhbmltYXRpb24/LmlkLFxuICAgICAgICAgIGFuaW1hdGlvbj8uZWZmZWN0Py5rZXlmcmFtZXMsXG4gICAgICAgICAgYW5pbWF0aW9uPy5lZmZlY3Q/Lm9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdG9yUXVlcnkuY29tbWl0VGFzayh0YXNrKTtcbiAgfVxuXG4gIGFuaW1hdGlvbk9wZXJhdGUoXG4gICAgb3BlcmF0aW9uOiBBbmltYXRpb25PcGVyYXRpb24sXG4gICAgaWRzOiBzdHJpbmdbXSB8IHN0cmluZ1xuICApOiBJU2VsZWN0b3JRdWVyeSB7XG4gICAgbGV0IGlkQXJyYXkgPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpZHMpKSB7XG4gICAgICBpZEFycmF5ID0gaWRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZEFycmF5LnB1c2goaWRzKTtcbiAgICB9XG4gICAgbGV0IHRhc2sgPSAocHJveHk6IFNlbGVjdG9yUXVlcnlOYXRpdmVQcm94eSkgPT4ge1xuICAgICAgaWRBcnJheS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBwcm94eS5uYXRpdmVBcHAuYW5pbWF0ZShcbiAgICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4udHlwZSxcbiAgICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4uaWRlbnRpZmllcixcbiAgICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4uY29tcG9uZW50X2lkLFxuICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIG51bGxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdG9yUXVlcnkuY29tbWl0VGFzayh0YXNrKTtcbiAgfVxuXG4gIHBsYXlBbmltYXRpb24oaWRzOiBzdHJpbmdbXSB8IHN0cmluZyk6IElTZWxlY3RvclF1ZXJ5IHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25PcGVyYXRlKEFuaW1hdGlvbk9wZXJhdGlvbi5QTEFZLCBpZHMpO1xuICB9XG5cbiAgcGF1c2VBbmltYXRpb24oaWRzOiBzdHJpbmdbXSk6IElTZWxlY3RvclF1ZXJ5IHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25PcGVyYXRlKEFuaW1hdGlvbk9wZXJhdGlvbi5QQVVTRSwgaWRzKTtcbiAgfVxuXG4gIGNhbmNlbEFuaW1hdGlvbihpZHM6IHN0cmluZ1tdKTogSVNlbGVjdG9yUXVlcnkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbk9wZXJhdGUoQW5pbWF0aW9uT3BlcmF0aW9uLkNBTkNFTCwgaWRzKTtcbiAgfVxuXG4gIGZpbmlzaEFuaW1hdGlvbihpZHM6IHN0cmluZ1tdKTogSVNlbGVjdG9yUXVlcnkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbk9wZXJhdGUoQW5pbWF0aW9uT3BlcmF0aW9uLkZJTklTSCwgaWRzKTtcbiAgfVxuXG4gIHNldE5hdGl2ZVByb3BzKG5hdGl2ZVByb3BzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xuICAgIGxldCB0YXNrID0gKHByb3h5OiBTZWxlY3RvclF1ZXJ5TmF0aXZlUHJveHkpID0+IHtcbiAgICAgIHByb3h5Lm5hdGl2ZUFwcC5zZXROYXRpdmVQcm9wcyhcbiAgICAgICAgdGhpcy5fbm9kZVNlbGVjdFRva2VuLnR5cGUsXG4gICAgICAgIHRoaXMuX25vZGVTZWxlY3RUb2tlbi5pZGVudGlmaWVyLFxuICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4uY29tcG9uZW50X2lkLFxuICAgICAgICB0aGlzLl9ub2RlU2VsZWN0VG9rZW4uZmlyc3Rfb25seSxcbiAgICAgICAgbmF0aXZlUHJvcHMsXG4gICAgICAgIHRoaXMuX25vZGVTZWxlY3RUb2tlbi5yb290X3VuaXF1ZV9pZFxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RvclF1ZXJ5LmNvbW1pdFRhc2sodGFzayk7XG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICBpc0Vycm9yLFxuICBpc0Z1bmN0aW9uLFxuICBpc09iamVjdCxcbiAgaXNTdHJpbmcsXG59IGZyb20gJ0BseW54LWpzL3J1bnRpbWUtc2hhcmVkJztcbmltcG9ydCB7XG4gIENyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyRnVuYyxcbiAgR2xvYmFsUHJvcHMsXG4gIExvYWREeW5hbWljQ29tcG9uZW50RmFpbGVkUmVzdWx0LFxuICBMb2FkRHluYW1pY0NvbXBvbmVudEZ1bmMsXG4gIExvYWREeW5hbWljQ29tcG9uZW50U3VjY2Vzc1Jlc3VsdCxcbiAgTHlueFNldFRpbWVvdXQsXG4gIE1lc3NhZ2VFdmVudCxcbiAgUmVzb3VyY2VQcmVmZXRjaERhdGEsXG4gIFJlc291cmNlUHJlZmV0Y2hSZXN1bHQsXG4gIFJlc291cmNlUHJlZmV0Y2hDb25maWcsXG59IGZyb20gJ0BseW54LWpzL3R5cGVzJztcbmltcG9ydCB7XG4gIFJlcXVpcmVNb2R1bGUsXG4gIFJlcXVpcmVNb2R1bGVBc3luYyxcbiAgTmF0aXZlTHlueFByb3h5LFxuICBNZXNzYWdlRXZlbnRUeXBlLFxuICBMb2FkU2NyaXB0LFxufSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBCYXNlQXBwLCBOYXRpdmVBcHAgfSBmcm9tICcuLi9hcHAnO1xuaW1wb3J0IHsgVGV4dEluZm8sIFRleHRNZXRyaWNzIH0gZnJvbSAnLi4vbW9kdWxlcy9uYXRpdmVNb2R1bGVzJztcbmltcG9ydCBuYXRpdmVHbG9iYWwgZnJvbSAnLi4vY29tbW9uL25hdGl2ZUdsb2JhbCc7XG5pbXBvcnQgRWxlbWVudCBmcm9tICcuLi9tb2R1bGVzL2VsZW1lbnQnO1xuaW1wb3J0IHsgTHlueEVycm9yTGV2ZWwgfSBmcm9tICcuLi9tb2R1bGVzL3JlcG9ydCc7XG5pbXBvcnQgeyBjcmVhdGVFdmVudFNvdXJjZSB9IGZyb20gJy4uL21vZHVsZXMvZmV0Y2gnO1xuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gJy4uL21vZHVsZXMvcGVyZm9ybWFuY2UnO1xuaW1wb3J0IFNlbGVjdG9yUXVlcnkgZnJvbSAnLi4vbW9kdWxlcy9zZWxlY3RvclF1ZXJ5L1NlbGVjdG9yUXVlcnknO1xuaW1wb3J0IHsgQW5pbWF0aW9uVjIgfSBmcm9tICcuLi9tb2R1bGVzL2FuaW1hdGlvbi9hbmltYXRpb25WMic7XG5pbXBvcnQgeyBERUZBVUxUX0VOVFJZIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmludGVyZmFjZSBMeW54TW9kdWxlTG9hZGVyIHtcbiAgbG9hZChtb2R1bGVOYW1lOiBzdHJpbmcpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMeW54IHtcbiAgc3RhdGljIF9fcmVnaXN0ZXJTaGFyZWREYXRhQ291bnRlcjogbnVtYmVyID0gMDtcbiAgX19nbG9iYWxQcm9wczogR2xvYmFsUHJvcHM7XG4gIF9fcHJlc2V0RGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIF9zd2l0Y2hlczogUmVjb3JkPHN0cmluZywgYm9vbGVhbj47XG4gIHRhcmdldFNka1ZlcnNpb24/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gc2hvdWxkIHVzZSBmdW5jdGlvbiB0byBnZXQgbmF0aXZlIGFwcCB0byBhdm9pZCBjeWNsZVxuICAgIHB1YmxpYyBnZXROYXRpdmVBcHA6ICgpID0+IE5hdGl2ZUFwcCxcbiAgICBwdWJsaWMgZ2V0QXBwOiAoKSA9PiBCYXNlQXBwLFxuICAgIHB1YmxpYyBQcm9taXNlOiBQcm9taXNlQ29uc3RydWN0b3IsXG4gICAgcHVibGljIGdldE5hdGl2ZUx5bng6ICgpID0+IE5hdGl2ZUx5bnhQcm94eVxuICApIHtcbiAgICB0aGlzLmluaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHNldFRpbWVvdXQ6IEx5bnhTZXRUaW1lb3V0ID0gdGhpcy5nZXRBcHAoKS53cmFwUmVwb3J0KFxuICAgIHRoaXMuZ2V0TmF0aXZlQXBwKCkuc2V0VGltZW91dCxcbiAgICAnc2V0VGltZW91dCBFcnJvcidcbiAgKTtcblxuICBwdWJsaWMgcmViaW5kKGdldEFwcDogKCkgPT4gQmFzZUFwcCkge1xuICAgIHRoaXMuaW5pdChnZXRBcHApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KGdldEFwcD86ICgpID0+IEJhc2VBcHApIHtcbiAgICBpZiAoZ2V0QXBwKSB7XG4gICAgICB0aGlzLmdldEFwcCA9IGdldEFwcDtcbiAgICAgIC8vIFRPRE8obGl5YW5ibyk6IG1lcmdlIG9yIHJlcGxhY2U/IG5vdyBpcyByZXBsYWNlLlxuICAgICAgdGhpcy5fX2dsb2JhbFByb3BzID0gdGhpcy5nZXROYXRpdmVMeW54KCkuX19nbG9iYWxQcm9wcyB8fCB7fTtcbiAgICAgIHRoaXMuX19wcmVzZXREYXRhID0gdGhpcy5nZXROYXRpdmVMeW54KCkuX19wcmVzZXREYXRhIHx8IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjYWNoZSA9IHt9O1xuICAgICAgdGhpcy5yZXF1aXJlTW9kdWxlLmNhY2hlID0gY2FjaGU7XG4gICAgICB0aGlzLnJlcXVpcmVNb2R1bGVBc3luYy5jYWNoZSA9IGNhY2hlO1xuICAgICAgdGhpcy5sb2FkU2NyaXB0LmNhY2hlID0ge307XG4gICAgICB0aGlzLl9fZ2xvYmFsUHJvcHMgPSB0aGlzLmdldE5hdGl2ZUx5bngoKS5fX2dsb2JhbFByb3BzIHx8IHt9O1xuICAgICAgdGhpcy5fX3ByZXNldERhdGEgPSB0aGlzLmdldE5hdGl2ZUx5bngoKS5fX3ByZXNldERhdGEgfHwge307XG4gICAgICB0aGlzLl9zd2l0Y2hlcyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIHNldEludGVydmFsOiBMeW54U2V0VGltZW91dCA9IHRoaXMuZ2V0QXBwKCkud3JhcFJlcG9ydChcbiAgICB0aGlzLmdldE5hdGl2ZUFwcCgpLnNldEludGVydmFsLFxuICAgICdzZXRJbnRlcnZhbCBFcnJvcidcbiAgKTtcbiAgY2xlYXJJbnRlcnZhbCA9IHRoaXMuZ2V0TmF0aXZlQXBwKCkuY2xlYXJJbnRlcnZhbDtcbiAgY2xlYXJUaW1lb3V0ID0gdGhpcy5nZXROYXRpdmVBcHAoKS5jbGVhclRpbWVvdXQ7XG5cbiAgcmVzdW1lRXhwb3N1cmUgPSB0aGlzLmdldEFwcCgpLl9hcGlMaXN0WydyZXN1bWVFeHBvc3VyZSddIGFzICgpID0+IHZvaWQ7XG5cbiAgcmVxdWlyZU1vZHVsZSA9IDxSZXF1aXJlTW9kdWxlPig8VD4oXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGVudHJ5TmFtZT86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyB0aW1lb3V0OiBudW1iZXIgfVxuICApOiBUID0+IHtcbiAgICBpZiAodGhpcy5yZXF1aXJlTW9kdWxlLmNhY2hlW3BhdGhdKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1aXJlTW9kdWxlLmNhY2hlW3BhdGhdIGFzIFQ7XG4gICAgfVxuICAgIC8vIFRPRE8od2FuZ3Fpbmd5dSk6IGRlYWwgd2l0aCBjeWNsaWMgcmVxdWlyZU1vZHVsZVxuICAgIGNvbnN0IGV4cG9ydHMgPSB0aGlzLmdldEFwcCgpLnJlcXVpcmVNb2R1bGU8VD4ocGF0aCwgZW50cnlOYW1lLCBvcHRpb25zKTtcblxuICAgIC8vIFdoZW4gZXJyb3IgaGFwcGVucyBpbiBsb2FkaW5nIG9yIGV4ZWN1dGluZywgYSBKUyBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAvLyBTbyB3aGVuIHdlIGFyZSBoZXJlLCB0aGUgbW9kdWxlIGlzIGxvYWRlZCBhbmQgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LlxuICAgIHRoaXMucmVxdWlyZU1vZHVsZS5jYWNoZVtwYXRoXSA9IGV4cG9ydHM7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH0pO1xuXG4gIHJlcXVpcmVNb2R1bGVBc3luYyA9IDxSZXF1aXJlTW9kdWxlQXN5bmM+KDxUPihcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiAoZXJyb3I/OiBFcnJvciwgcmV0PzogVCkgPT4gdm9pZFxuICApOiB2b2lkID0+IHtcbiAgICBjYWxsYmFjayA/Pz0gKGVycm9yPzogRXJyb3IpID0+IHtcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgLy8gYHVuZGVmaW5lZCB8IG51bGxgIG1lYW5zIG5vIGVycm9yIG9jY3VycmVkXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0QXBwKCkuaGFuZGxlVXNlckVycm9yKGVycm9yKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucmVxdWlyZU1vZHVsZUFzeW5jLmNhY2hlW3BhdGhdKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB0aGlzLnJlcXVpcmVNb2R1bGVBc3luYy5jYWNoZVtwYXRoXSBhcyBUKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVE9ETyh3YW5ncWluZ3l1KTogZGVhbCB3aXRoIGN5Y2xpYyByZXF1aXJlTW9kdWxlXG4gICAgdGhpcy5nZXRBcHAoKS5yZXF1aXJlTW9kdWxlQXN5bmM8VD4ocGF0aCwgKGVycm9yLCBleHBvcnRzKSA9PiB7XG4gICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIC8vIE9ubHkgY2FjaGUgdGhlIGV4cG9ydHMgd2hlbiBubyBlcnJvciBoYXBwZW5kcy5cbiAgICAgICAgdGhpcy5yZXF1aXJlTW9kdWxlQXN5bmMuY2FjaGVbcGF0aF0gPSBleHBvcnRzO1xuICAgICAgfVxuICAgICAgY2FsbGJhY2soZXJyb3IsIGV4cG9ydHMpO1xuICAgIH0pO1xuICB9KTtcblxuICBjcmVhdGVFbGVtZW50ID0gKHJvb3RJZDogc3RyaW5nLCBpZDogc3RyaW5nKSA9PlxuICAgIHRoaXMuZ2V0TmF0aXZlTHlueCgpLmNyZWF0ZUVsZW1lbnQocm9vdElkLCBpZCk7XG5cbiAgZ2V0RWxlbWVudEJ5SWQgPSAoaWQ6IHN0cmluZyk6IEVsZW1lbnQgPT4ge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnJywgaWQsIHRoaXMpO1xuICB9O1xuXG4gIHJlcG9ydEVycm9yID0gKGVycm9yOiBFcnJvciB8IHN0cmluZywgb3B0aW9ucz86IHsgbGV2ZWw/OiBzdHJpbmcgfSk6IHZvaWQgPT4ge1xuICAgIGxldCBlcnJvck9iajogRXJyb3I7XG4gICAgaWYgKGlzRXJyb3IoZXJyb3IpKSB7XG4gICAgICBlcnJvck9iaiA9IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbWVzc2FnZTogc3RyaW5nO1xuICAgICAgaWYgKHR5cGVvZiBlcnJvciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgIH1cbiAgICAgIGVycm9yT2JqID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCB7IGxldmVsID0gJ2Vycm9yJyB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgICBsZXQgZXJyb3JMZXZlbDogTHlueEVycm9yTGV2ZWw7XG4gICAgc3dpdGNoIChsZXZlbCkge1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICBlcnJvckxldmVsID0gTHlueEVycm9yTGV2ZWwuRXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIGVycm9yTGV2ZWwgPSBMeW54RXJyb3JMZXZlbC5XYXJuO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZhdGFsJzpcbiAgICAgICAgZXJyb3JMZXZlbCA9IEx5bnhFcnJvckxldmVsLkZhdGFsO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVycm9yTGV2ZWwgPSBMeW54RXJyb3JMZXZlbC5FcnJvcjtcbiAgICB9XG4gICAgdGhpcy5nZXRBcHAoKS5oYW5kbGVVc2VyRXJyb3IoZXJyb3JPYmosIGVycm9yT2JqLmNhdXNlLCBlcnJvckxldmVsKTtcbiAgfTtcblxuICByZWdpc3Rlck1vZHVsZSA9IDxNb2R1bGUgZXh0ZW5kcyBvYmplY3Q+KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBtb2R1bGU6IE1vZHVsZVxuICApOiB2b2lkID0+IHRoaXMuZ2V0QXBwKCkucmVnaXN0ZXJNb2R1bGUobmFtZSwgbW9kdWxlKTtcblxuICBnZXRKU01vZHVsZSA9IDxNb2R1bGUgPSB1bmtub3duPihuYW1lOiBzdHJpbmcpOiBNb2R1bGUgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldEFwcCgpLmdldEpTTW9kdWxlPE1vZHVsZT4obmFtZSk7XG4gIH07XG5cbiAgZ2V0VGV4dEluZm8gPSB0aGlzLmdldEFwcCgpLl9hcGlMaXN0WydnZXRUZXh0SW5mbyddIGFzIChcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgaW5mbzogVGV4dEluZm9cbiAgKSA9PiBUZXh0TWV0cmljcztcblxuICBhZGRGb250ID0gKFxuICAgIGZvbnQ6IHsgc3JjOiBzdHJpbmc7ICdmb250LWZhbWlseSc6IHN0cmluZyB9LFxuICAgIGNhbGxiYWNrOiAoZT86IEVycm9yKSA9PiB2b2lkXG4gICkgPT4ge1xuICAgIGlmICghaXNPYmplY3QoZm9udCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb2JqZWN0IHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKCFpc1N0cmluZyhmb250Wydmb250LWZhbWlseSddKSB8fCAhaXNTdHJpbmcoZm9udFsnc3JjJ10pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBmb250IHZhbHVlIG11c3QgaGF2ZSBmb250LWZhbWlseSBhbmQgc3JjJyk7XG4gICAgfVxuICAgIGlmICghaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGZ1bmN0aW9uIHR5cGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLmdldE5hdGl2ZUx5bngoKS5hZGRGb250KGZvbnQsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBzdG9wRXhwb3N1cmUgPSB0aGlzLmdldEFwcCgpLl9hcGlMaXN0WydzdG9wRXhwb3N1cmUnXSBhcyAob3B0aW9ucz86IHtcbiAgICBzZW5kRXZlbnQ6IGJvb2xlYW47XG4gIH0pID0+IHZvaWQ7XG5cbiAgc2V0T2JzZXJ2ZXJGcmFtZVJhdGUgPSB0aGlzLmdldEFwcCgpLl9hcGlMaXN0W1xuICAgICdzZXRPYnNlcnZlckZyYW1lUmF0ZSdcbiAgXSBhcyAob3B0aW9ucz86IHsgZm9yUGFnZVJlY3Q/OiBudW1iZXI7IGZvckV4cG9zdXJlQ2hlY2s/OiBudW1iZXIgfSkgPT4gdm9pZDtcblxuICBwZXJmb3JtYW5jZTogUGVyZm9ybWFuY2UgPSB0aGlzLmdldEFwcCgpLnBlcmZvcm1hbmNlO1xuXG4gIGJlZm9yZVB1Ymxpc2hFdmVudCA9IHRoaXMuZ2V0QXBwKCkuX2FvcE1hbmFnZXIuX2JlZm9yZVB1Ymxpc2hFdmVudDtcblxuICBkaXNwYXRjaFNlc3Npb25TdG9yYWdlRXZlbnQoZXZlbnQ6IE1lc3NhZ2VFdmVudCk6IHZvaWQge1xuICAgIHZhciBldmVudFJlc3VsdCA9IHRoaXMuZ2V0Q29yZUNvbnRleHQoKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgIC8vIEluIEx5bnhWaWV3LCB0aGUgZXZlbnQgaGFzIGJlZW4gc3VjZXNzZnVsbHkgaGFuZGxlZCBieSBgQ29yZUNvbnRleHRgLlxuICAgIGlmIChldmVudFJlc3VsdCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW4gcnVudGltZSBzdGFuZGFsb25lIG1vZGUsIHJ1bnRpbWUgY2Fubm90IGRpc3BhdGNoIGV2ZW50IHRvIGBDb3JlQ29udGV4dGAsXG4gICAgLy8gZmFsbGJhY2sgdG8gYEpTQ29udGV4dGAgc28gdGhhdCBydW50aW1lIGNhbiBoYW5kbGUgc2Vzc2lvbiBzdG9yYWdlIGV2ZW50c1xuICAgIC8vIGJ5IGl0c2VsZi5cbiAgICB0aGlzLmdldEpTQ29udGV4dCgpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgLy8gc2Vzc2lvblN0b3JhZ2UgQXBpXG4gIHNldFNlc3Npb25TdG9yYWdlSXRlbSA9IDxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkID0+IHtcbiAgICB0aGlzLmRpc3BhdGNoU2Vzc2lvblN0b3JhZ2VFdmVudCh7XG4gICAgICB0eXBlOiBNZXNzYWdlRXZlbnRUeXBlLkVWRU5UX1NFVF9TRVNTSU9OX1NUT1JBR0UsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGdldFNlc3Npb25TdG9yYWdlSXRlbSA9IDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkXG4gICk6IHZvaWQgPT4ge1xuICAgIC8vIFRPRE8obmloYW8ucm95YWwpOiByZWZhY3RvciB0byBkaXNwYXRjaEV2ZW50IGFmdGVyIEFwaUNhbGxiYWNrIHN1cHBvcnRlZC5cbiAgICB0aGlzLmdldE5hdGl2ZUFwcCgpLmdldFNlc3Npb25TdG9yYWdlSXRlbShrZXksIGNhbGxiYWNrKTtcbiAgfTtcblxuICBzdWJzY3JpYmVTZXNzaW9uU3RvcmFnZSA9IDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkXG4gICk6IG51bWJlciA9PiB7XG4gICAgLy8gVE9ETyhuaWhhby5yb3lhbCk6IHJlZmFjdG9yIHRvIGRpc3BhdGNoRXZlbnQgYWZ0ZXIgQXBpQ2FsbGJhY2sgc3VwcG9ydGVkLlxuICAgIGxldCBsaXN0ZW5lcklkID0gTHlueC5fX3JlZ2lzdGVyU2hhcmVkRGF0YUNvdW50ZXIrKztcbiAgICB0aGlzLmdldE5hdGl2ZUFwcCgpLnN1YnNjcmliZVNlc3Npb25TdG9yYWdlKGtleSwgbGlzdGVuZXJJZCwgY2FsbGJhY2spO1xuICAgIHJldHVybiBsaXN0ZW5lcklkO1xuICB9O1xuXG4gIHVuc3Vic2NyaWJlU2Vzc2lvblN0b3JhZ2UgPSAoa2V5OiBzdHJpbmcsIGxpc3RlbmVySWQ6IG51bWJlcikgPT4ge1xuICAgIHRoaXMuZGlzcGF0Y2hTZXNzaW9uU3RvcmFnZUV2ZW50KHtcbiAgICAgIHR5cGU6IE1lc3NhZ2VFdmVudFR5cGUuRVZFTlRfVU5TVUJTQ1JJQkVfU0VTU0lPTl9TVE9SQUdFLFxuICAgICAgZGF0YToge1xuICAgICAgICBrZXksXG4gICAgICAgIGxpc3RlbmVySWQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGdldERldnRvb2wgPSB0aGlzLmdldE5hdGl2ZUx5bngoKS5nZXREZXZ0b29sO1xuICBnZXRDb3JlQ29udGV4dCA9IHRoaXMuZ2V0TmF0aXZlTHlueCgpLmdldENvcmVDb250ZXh0O1xuICBnZXRKU0NvbnRleHQgPSB0aGlzLmdldE5hdGl2ZUx5bngoKS5nZXRKU0NvbnRleHQ7XG4gIGdldFVJQ29udGV4dCA9IHRoaXMuZ2V0TmF0aXZlTHlueCgpLmdldFVJQ29udGV4dDtcbiAgZ2V0TmF0aXZlID0gdGhpcy5nZXROYXRpdmVMeW54KCkuZ2V0TmF0aXZlO1xuICBnZXRFbmdpbmUgPSB0aGlzLmdldE5hdGl2ZUx5bngoKS5nZXRFbmdpbmU7XG5cbiAgZ2V0Q3VzdG9tU2VjdGlvblN5bmMgPSB0aGlzLmdldE5hdGl2ZUx5bngoKS5nZXRDdXN0b21TZWN0aW9uU3luYztcblxuICBhY2Nlc3NpYmlsaXR5QW5ub3VuY2UgPSB0aGlzLmdldE5hdGl2ZUFwcCgpLm5hdGl2ZU1vZHVsZVByb3h5XG4gICAgLkx5bnhBY2Nlc3NpYmlsaXR5TW9kdWxlPy5hY2Nlc3NpYmlsaXR5QW5ub3VuY2U7XG5cbiAgcmVxdWVzdFJlc291cmNlUHJlZmV0Y2ggPSAoXG4gICAgZGF0YTogUmVzb3VyY2VQcmVmZXRjaERhdGEsXG4gICAgY2FsbGJhY2s6IChyZXM6IFJlc291cmNlUHJlZmV0Y2hSZXN1bHQpID0+IHZvaWQsXG4gICAgY29uZmlnPzogUmVzb3VyY2VQcmVmZXRjaENvbmZpZ1xuICApOiB2b2lkID0+IHtcbiAgICBpZiAoIWlzT2JqZWN0KGRhdGEpIHx8ICFBcnJheS5pc0FycmF5KGRhdGEuZGF0YSkpIHtcbiAgICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgY29kZTogMzIxMDEsXG4gICAgICAgIG1zZzpcbiAgICAgICAgICBcIlBhcmFtZXRlcnMgZXJyb3IgaW4gTHlueCByZXNvdXJjZSBwcmVmZXRjaCBtb2R1bGUhIFZhbHVlIG9mICdkYXRhJyBzaG91bGQgYmUgYW4gYXJyYXkuXCIsXG4gICAgICAgIGRldGFpbHM6IFtdLFxuICAgICAgfTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBjb25maWcgJiZcbiAgICAgICghTnVtYmVyLmlzSW50ZWdlcihjb25maWcuYXdhaXRUaW1lb3V0KSB8fCBjb25maWcuYXdhaXRUaW1lb3V0IDw9IDApXG4gICAgKSB7XG4gICAgICBjb25maWcgPSB7IC4uLmNvbmZpZywgYXdhaXRUaW1lb3V0OiA2MDAwMCB9O1xuICAgIH1cbiAgICBjb25zdCBuYXRpdmVNZXRob2QgPSB0aGlzLmdldE5hdGl2ZUFwcCgpLm5hdGl2ZU1vZHVsZVByb3h5XG4gICAgICAuTHlueFJlc291cmNlTW9kdWxlPy5yZXF1ZXN0UmVzb3VyY2VQcmVmZXRjaDtcbiAgICBpZiAobmF0aXZlTWV0aG9kKSB7XG4gICAgICBuYXRpdmVNZXRob2QoZGF0YSwgY2FsbGJhY2ssIGNvbmZpZyA/PyB7fSk7XG4gICAgfVxuICB9O1xuXG4gIGNhbmNlbFJlc291cmNlUHJlZmV0Y2ggPSB0aGlzLmdldE5hdGl2ZUFwcCgpLm5hdGl2ZU1vZHVsZVByb3h5XG4gICAgLkx5bnhSZXNvdXJjZU1vZHVsZT8uY2FuY2VsUmVzb3VyY2VQcmVmZXRjaDtcblxuICBzZXRTaGFyZWREYXRhID0gKGRhdGFLZXk6IHN0cmluZywgZGF0YVZhbDogdW5rbm93bik6IHZvaWQgPT4ge1xuICAgIG5hdGl2ZUdsb2JhbC5zaGFyZWREYXRhW2RhdGFLZXldID0gZGF0YVZhbDtcbiAgICBsZXQgdmFyaWFibGUgPSB7fTtcbiAgICB2YXJpYWJsZVtkYXRhS2V5XSA9IGRhdGFWYWw7XG4gICAgbmF0aXZlR2xvYmFsLnNoYXJlRGF0YVN1YmplY3Qubm90aWZ5RGF0YUNoYW5nZSh2YXJpYWJsZSk7XG4gIH07XG5cbiAgZ2V0U2hhcmVkRGF0YSA9IDxUID0gdW5rbm93bj4oZGF0YUtleTogc3RyaW5nKTogVCA9PiB7XG4gICAgbGV0IGRhdGEgPSBuYXRpdmVHbG9iYWwuc2hhcmVkRGF0YVtkYXRhS2V5XTtcbiAgICBpZiAoTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGF0YSA9IHRoaXMuZ2V0QXBwKCkuTmF0aXZlTW9kdWxlcy5MeW54UmVjb3JkZXJSZXBsYXlEYXRhTW9kdWxlPy5nZXRTaGFyZWREYXRhKFxuICAgICAgICAgIGRhdGFLZXlcbiAgICAgICAgKS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0TmF0aXZlQXBwKCkucmVjb3JkU2hhcmVkRGF0YShkYXRhS2V5LCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmVnaXN0ZXJTaGFyZWREYXRhT2JzZXJ2ZXIgPSA8VD4oY2FsbGJhY2s6IChkYXRhOiBUKSA9PiB2b2lkKTogdm9pZCA9PlxuICAgIG5hdGl2ZUdsb2JhbC5zaGFyZURhdGFTdWJqZWN0LnJlZ2lzdGVyT2JzZXJ2ZXIoY2FsbGJhY2spO1xuXG4gIHJlbW92ZVNoYXJlZERhdGFPYnNlcnZlciA9IDxUPihjYWxsYmFjazogKGRhdGE6IFQpID0+IHZvaWQpOiB2b2lkID0+XG4gICAgbmF0aXZlR2xvYmFsLnNoYXJlRGF0YVN1YmplY3QucmVtb3ZlT2JzZXJ2ZXIoY2FsbGJhY2spO1xuXG4gIHRyaWdnZXJMZXB1c0dsb2JhbEV2ZW50ID0gKGV2ZW50OiBzdHJpbmcsIHBhcmFtczogUmVjb3JkPGFueSwgYW55Pik6IHZvaWQgPT5cbiAgICB0aGlzLmdldE5hdGl2ZUFwcCgpLnRyaWdnZXJMZXB1c0dsb2JhbEV2ZW50KGV2ZW50LCBwYXJhbXMpO1xuXG4gIC8vIGZvciByZWxvYWRcbiAgcmVsb2FkID0gKHZhbHVlOiBvYmplY3QsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgdGhpcy5nZXROYXRpdmVMeW54KCkucmVsb2FkKHZhbHVlLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgc3RhcnRSZWNvcmRpbmcgPSAodmFsdWU6IG9iamVjdCkgPT4ge1xuICAgIHRoaXMuZ2V0TmF0aXZlTHlueCgpLnN0YXJ0UmVjb3JkaW5nKHZhbHVlKTtcbiAgfTtcblxuICBzdG9wUmVjb3JkaW5nID0gKHZhbHVlOiBvYmplY3QpID0+IHtcbiAgICB0aGlzLmdldE5hdGl2ZUx5bngoKS5zdG9wUmVjb3JkaW5nKHZhbHVlKTtcbiAgfTtcblxuICBjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcjogQ3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJGdW5jO1xuXG4gIGZldGNoRHluYW1pY0NvbXBvbmVudCA9IChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuICAgIGNhbGxiYWNrOiAocmVzOiB7IGNvZGU6IG51bWJlciB9KSA9PiB2b2lkLFxuICAgIGlkOiBzdHJpbmdbXVxuICApID0+IHRoaXMuZ2V0TmF0aXZlTHlueCgpLmZldGNoRHluYW1pY0NvbXBvbmVudCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrLCBpZCk7XG5cbiAgLy8gV3JhcHBlciBRdWVyeUNvbXBvbmVudCB0byBkZWNpZGUgaWYgY29tcG9uZW50IGhhcyBsb2FkZWQuXG4gIFF1ZXJ5Q29tcG9uZW50ID0gKHNvdXJjZTogc3RyaW5nLCBjYWxsYmFjazogKHJlc3VsdDogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgaW5uZXJJbnZva2VDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgY29kZTogMCxcbiAgICAgICAgZGF0YTogeyB1cmw6IHNvdXJjZSwgc3luYzogdHJ1ZSwgZXJyb3JfbWVzc2FnZTogJycsIG1vZGU6ICdjYWNoZScgfSxcbiAgICAgICAgZGV0YWlsOiB7IHNjaGVtYTogc291cmNlLCBjYWNoZTogZmFsc2UsIGVyck1zZzogJycgfSxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaWYgZHluYW1pYyBjb21wb25ldCBoYXMgYmVlbiByZWFkeSBpbiBiYWNrZ3JvdW5kIHRocmVhZCwgY2FsbGJhY2sgZGlyZWN0bHlcbiAgICBpZiAodGhpcy5nZXRBcHAoKS5sb2FkZWREeW5hbWljQ29tcG9uZW50c1NldC5oYXMoc291cmNlKSkge1xuICAgICAgaW5uZXJJbnZva2VDYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBkeW5hbWljIGNvbXBvbmV0IGhhcyBiZWVuIHJlYWR5IGluIG1haW4gdGhyZWFkLCBsb2FkRHluYW1pY0NvbXBvbmVudCBhbmQgY2FsbGJhY2sgZGlyZWN0bHlcbiAgICBjb25zdCBpbm5lckNhbGxiYWNrID0gKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0Ll9faGFzUmVhZHkgPT09IHRydWUpIHtcbiAgICAgICAgbmF0aXZlR2xvYmFsLmxvYWREeW5hbWljQ29tcG9uZW50KHRoaXMuZ2V0QXBwKCksIHNvdXJjZSk7XG4gICAgICAgIGlubmVySW52b2tlQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBxdWVyeSBjb21wb25ldFxuICAgIHRoaXMuZ2V0TmF0aXZlTHlueCgpLlF1ZXJ5Q29tcG9uZW50KHNvdXJjZSwgaW5uZXJDYWxsYmFjayk7XG4gIH07XG5cbiAgbG9hZER5bmFtaWNDb21wb25lbnQ6IExvYWREeW5hbWljQ29tcG9uZW50RnVuYyA9IChcbiAgICBpZE9yVXJsOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICB1cmxPck9wdGlvbnM/OiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fVxuICApOiBQcm9taXNlPFxuICAgIExvYWREeW5hbWljQ29tcG9uZW50U3VjY2Vzc1Jlc3VsdCB8IExvYWREeW5hbWljQ29tcG9uZW50RmFpbGVkUmVzdWx0XG4gID4gPT4ge1xuICAgIHJldHVybiBuZXcgdGhpcy5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIGxlZ2FsIHBhcmFtIHR5cGVzOlxuICAgICAgLy8gMC4gKHVybDogc3RyaW5nLCA/b3B0aW9ucylcbiAgICAgIC8vIDEuIChpZDogc3RyaW5nLCB1cmw6IHN0cmluZywgP29wdGlvbnMpXG4gICAgICAvLyAyLiAoaWRzOiBzdHJpbmdbXSwgdXJsOiBzdHJpbmcsID9vcHRpb25zKVxuICAgICAgbGV0IGlkczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCB1cmw6IHN0cmluZztcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGlkT3JVcmwpKSB7XG4gICAgICAgIGlkcyA9IGlkT3JVcmw7XG4gICAgICAgIHVybCA9IHVybE9yT3B0aW9ucyBhcyBzdHJpbmc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB1cmxPck9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlkcyA9IFtpZE9yVXJsXTtcbiAgICAgICAgdXJsID0gdXJsT3JPcHRpb25zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsID0gaWRPclVybDtcbiAgICAgICAgb3B0aW9ucyA9IHVybE9yT3B0aW9ucztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdldEFwcCgpLmxvYWRlZER5bmFtaWNDb21wb25lbnRzU2V0Lmhhcyh1cmwpKSB7XG4gICAgICAgIC8vIGludm9rZSBkaXJlY3RseVxuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBjb2RlOiAwLFxuICAgICAgICAgIGRhdGE6IHsgdXJsOiB1cmwsIHN5bmM6IGZhbHNlLCBlcnJvcl9tZXNzYWdlOiAnJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICBkZXRhaWw6IHsgc2NoZW1hOiB1cmwsIGNhY2hlOiBmYWxzZSwgZXJyTXNnOiAnJyB9LFxuICAgICAgICB9IGFzIExvYWREeW5hbWljQ29tcG9uZW50U3VjY2Vzc1Jlc3VsdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5nZXROYXRpdmVMeW54KCkuZmV0Y2hEeW5hbWljQ29tcG9uZW50KFxuICAgICAgICB1cmwsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzICYmIHJlcy5jb2RlID09IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzIGFzIExvYWREeW5hbWljQ29tcG9uZW50U3VjY2Vzc1Jlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaWRzXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGZldGNoID0gKGlucHV0OiBSZXF1ZXN0SW5mbywgaW5pdD86IFJlcXVlc3RJbml0KTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xuICAgIHJldHVybiBuZXcgdGhpcy5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgbmF0aXZlR2xvYmFsLlJlcXVlc3QoaW5wdXQsIGluaXQpO1xuICAgICAgY29uc3Qgc2lnbmFsID0gcmVxdWVzdC5zaWduYWw7XG4gICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChzaWduYWwucmVhc29uKTtcbiAgICAgIH1cblxuICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHJlamVjdChzaWduYWwucmVhc29uKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBlbmFibGVGZXRjaEFQSVN0YW5kYXJkU3RyZWFtaW5nID0gdGhpcy5nZXRBcHAoKS5wYXJhbXNcbiAgICAgICAgPy5wYWdlQ29uZmlnU3Vic2V0Py5lbmFibGVGZXRjaEFQSVN0YW5kYXJkU3RyZWFtaW5nO1xuICAgICAgcmVxdWVzdC5seW54RXh0ZW5zaW9uW1xuICAgICAgICAnZW5hYmxlRmV0Y2hBUElTdGFuZGFyZFN0cmVhbWluZydcbiAgICAgIF0gPSBlbmFibGVGZXRjaEFQSVN0YW5kYXJkU3RyZWFtaW5nO1xuICAgICAgY29uc3QgZmV0Y2hBcmcgPSB7XG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogcmVxdWVzdC51cmwsXG4gICAgICAgIG9yaWdpbjogdGhpcy5nZXROYXRpdmVBcHAoKS5fX3BhZ2VVcmwsXG4gICAgICAgIGhlYWRlcnM6IE9iamVjdC5mcm9tRW50cmllcyhyZXF1ZXN0LmhlYWRlcnMuZW50cmllcygpKSxcbiAgICAgICAgYm9keTogcmVxdWVzdC5fYXJyYXlCdWZmZXIsXG4gICAgICAgIGx5bnhFeHRlbnNpb246IHJlcXVlc3QubHlueEV4dGVuc2lvbixcbiAgICAgIH07XG4gICAgICBjb25zdCB1c2VTdHJlYW1pbmcgPVxuICAgICAgICByZXF1ZXN0Lmx5bnhFeHRlbnNpb25bJ3VzZVN0cmVhbWluZyddIHx8XG4gICAgICAgIGVuYWJsZUZldGNoQVBJU3RhbmRhcmRTdHJlYW1pbmc7XG4gICAgICB0aGlzLmdldEFwcCgpLk5hdGl2ZU1vZHVsZXMuTHlueEZldGNoTW9kdWxlLmZldGNoKFxuICAgICAgICBmZXRjaEFyZyxcbiAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbWluZ0JvZHlSZWNlaXZlciA9IG5ldyAodGhpcy5nZXRBcHAoKS5fUmVhZGFibGVTdHJlYW1DbGFzcykoKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IG5ldyBuYXRpdmVHbG9iYWwuUmVzcG9uc2UoXG4gICAgICAgICAgICAgIHVzZVN0cmVhbWluZyA/IHN0cmVhbWluZ0JvZHlSZWNlaXZlciA6IHJlc3BvbnNlLmJvZHksXG4gICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICBlbmFibGVGZXRjaEFQSVN0YW5kYXJkU3RyZWFtaW5nXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAodXNlU3RyZWFtaW5nKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkID0gcmVzcC5seW54RXh0ZW5zaW9uWydzdHJlYW1pbmdJZCddO1xuICAgICAgICAgICAgICB0aGlzLmdldEFwcCgpLkdsb2JhbEV2ZW50RW1pdHRlci5hZGRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gcmVzdWx0LmV2ZW50O1xuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ID09PSAnb25EYXRhJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW1pbmdCb2R5UmVjZWl2ZXIub25EYXRhKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdvbkVuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtaW5nQm9keVJlY2VpdmVyLm9uRW5kKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnb25FcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtaW5nQm9keVJlY2VpdmVyLm9uRXJyb3IocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHJlc3ApO1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIC8vIENhdGNoZXMgYW55IGV4Y2VwdGlvbiB0aGF0IG1pZ2h0IGxlYWQgdG8gYSBmYWlsdXJlIGluXG4gICAgICAgICAgICAvLyBjcmVhdGluZyBhIFJlc3BvbnNlIGFuZCB0aHJvd3MgdGhlIGVycm9yIHVzaW5nIGByZWplY3RgLFxuICAgICAgICAgICAgLy8gZW5hYmxpbmcgdGhlIGZyb250ZW5kIHRvIGhhbmRsZSB0aGUgZXJyb3IuXG4gICAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcihlcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgRXZlbnRTb3VyY2UgPSBjcmVhdGVFdmVudFNvdXJjZSh0aGlzLmZldGNoKTtcblxuICBnZXQgUmVhZGFibGVTdHJlYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXBwKCkuX1JlYWRhYmxlU3RyZWFtQ2xhc3M7XG4gIH1cblxuICBjcmVhdGVTZWxlY3RvclF1ZXJ5ID0gKGNvbXBvbmVudD86IHN0cmluZyk6IFNlbGVjdG9yUXVlcnkgPT4ge1xuICAgIHJldHVybiBTZWxlY3RvclF1ZXJ5Lm5ld0VtcHR5UXVlcnkoXG4gICAgICB7XG4gICAgICAgIG5hdGl2ZUFwcDogdGhpcy5nZXROYXRpdmVBcHAoKSxcbiAgICAgICAgbHlueDogdGhpcyxcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnRcbiAgICApO1xuICB9O1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT5cbiAgICB0aGlzLmdldE5hdGl2ZUFwcCgpLnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG5cbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoYW5pbWF0aW9uSWQ6IG51bWJlcikgPT5cbiAgICB0aGlzLmdldE5hdGl2ZUFwcCgpLmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcblxuICBxdWV1ZU1pY3JvdGFzayhjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0TmF0aXZlTHlueCgpLnF1ZXVlTWljcm90YXNrKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGxvYWRTY3JpcHQgPSA8TG9hZFNjcmlwdD4oPFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGJ1bmRsZU5hbWU/OiBzdHJpbmc7IHVzZU1vZHVsZVdyYXBwZXI/OiBib29sZWFuIH1cbiAgKTogVCA9PiB7XG4gICAgY29uc3QgeyBidW5kbGVOYW1lID0gREVGQVVMVF9FTlRSWSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBjYWNoZUtleSA9IGJ1bmRsZU5hbWUgKyAnOicgKyB1cmw7XG4gICAgaWYgKHRoaXMubG9hZFNjcmlwdC5jYWNoZVtjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRTY3JpcHQuY2FjaGVbY2FjaGVLZXldIGFzIFQ7XG4gICAgfVxuICAgIGNvbnN0IGV4cG9ydHMgPSB0aGlzLmdldEFwcCgpLmxvYWRTY3JpcHQ8VD4odXJsLCBvcHRpb25zKTtcbiAgICB0aGlzLmxvYWRTY3JpcHQuY2FjaGVbY2FjaGVLZXldID0gZXhwb3J0cztcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSk7XG5cbiAgZmV0Y2hCdW5kbGUgPSB0aGlzLmdldE5hdGl2ZUx5bngoKS5mZXRjaEJ1bmRsZTtcblxuICBfX2FkZFJlcG9ydGVyQ3VzdG9tSW5mbyA9IChpbmZvOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogdm9pZCA9PiB7XG4gICAgdGhpcy5nZXROYXRpdmVBcHAoKS5fX2FkZFJlcG9ydGVyQ3VzdG9tSW5mbyhpbmZvKTtcbiAgfTtcblxuICBnZXRNb2R1bGVMb2FkZXIgPSAoKTogTHlueE1vZHVsZUxvYWRlciA9PiB7XG4gICAgcmV0dXJuIG5hdGl2ZUdsb2JhbFsnbmFwaUxvYWRlck9uUlQnICsgdGhpcy5nZXRBcHAoKS5uYXRpdmVBcHBJZF07XG4gIH07XG5cbiAgY3JlYXRlQW5pbWF0aW9uID0gKFxuICAgIGlkOiBzdHJpbmcsXG4gICAga2V5ZnJhbWVzOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBhbnk+PixcbiAgICBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gICkgPT4ge1xuICAgIHJldHVybiBuZXcgQW5pbWF0aW9uVjIoaWQsIGtleWZyYW1lcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9fZ2xvYmFsUHJvcHMgPSB7fTtcbiAgICB0aGlzLl9fcHJlc2V0RGF0YSA9IHt9O1xuICAgIHRoaXMuX3N3aXRjaGVzID0ge307XG4gICAgdGhpcy50YXJnZXRTZGtWZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ2V0TmF0aXZlQXBwID0gbnVsbDtcbiAgICB0aGlzLmdldEFwcCA9IG51bGw7XG4gICAgdGhpcy5Qcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLmdldE5hdGl2ZUx5bnggPSBudWxsO1xuICAgIHRoaXMuc2V0VGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5zZXRJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5jbGVhckludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLmNsZWFyVGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5yZXN1bWVFeHBvc3VyZSA9IG51bGw7XG4gICAgdGhpcy5yZXF1aXJlTW9kdWxlID0gbnVsbDtcbiAgICB0aGlzLnJlcXVpcmVNb2R1bGVBc3luYyA9IG51bGw7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmdldEVsZW1lbnRCeUlkID0gbnVsbDtcbiAgICB0aGlzLnJlcG9ydEVycm9yID0gbnVsbDtcbiAgICB0aGlzLnJlZ2lzdGVyTW9kdWxlID0gbnVsbDtcbiAgICB0aGlzLmdldEpTTW9kdWxlID0gbnVsbDtcbiAgICB0aGlzLmdldFRleHRJbmZvID0gbnVsbDtcbiAgICB0aGlzLmFkZEZvbnQgPSBudWxsO1xuICAgIHRoaXMuc3RvcEV4cG9zdXJlID0gbnVsbDtcbiAgICB0aGlzLnNldE9ic2VydmVyRnJhbWVSYXRlID0gbnVsbDtcbiAgICB0aGlzLnBlcmZvcm1hbmNlID0gbnVsbDtcbiAgICB0aGlzLmJlZm9yZVB1Ymxpc2hFdmVudCA9IG51bGw7XG4gICAgdGhpcy5zZXRTZXNzaW9uU3RvcmFnZUl0ZW0gPSBudWxsO1xuICAgIHRoaXMuZ2V0U2Vzc2lvblN0b3JhZ2VJdGVtID0gbnVsbDtcbiAgICB0aGlzLnN1YnNjcmliZVNlc3Npb25TdG9yYWdlID0gbnVsbDtcbiAgICB0aGlzLnVuc3Vic2NyaWJlU2Vzc2lvblN0b3JhZ2UgPSBudWxsO1xuICAgIHRoaXMuZ2V0RGV2dG9vbCA9IG51bGw7XG4gICAgdGhpcy5nZXRDb3JlQ29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5nZXRKU0NvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuZ2V0VUlDb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmdldE5hdGl2ZSA9IG51bGw7XG4gICAgdGhpcy5nZXRFbmdpbmUgPSBudWxsO1xuICAgIHRoaXMuZ2V0Q3VzdG9tU2VjdGlvblN5bmMgPSBudWxsO1xuICAgIHRoaXMuYWNjZXNzaWJpbGl0eUFubm91bmNlID0gbnVsbDtcbiAgICB0aGlzLnJlcXVlc3RSZXNvdXJjZVByZWZldGNoID0gbnVsbDtcbiAgICB0aGlzLmNhbmNlbFJlc291cmNlUHJlZmV0Y2ggPSBudWxsO1xuICAgIHRoaXMuc2V0U2hhcmVkRGF0YSA9IG51bGw7XG4gICAgdGhpcy5nZXRTaGFyZWREYXRhID0gbnVsbDtcbiAgICB0aGlzLnJlZ2lzdGVyU2hhcmVkRGF0YU9ic2VydmVyID0gbnVsbDtcbiAgICB0aGlzLnJlbW92ZVNoYXJlZERhdGFPYnNlcnZlciA9IG51bGw7XG4gICAgdGhpcy50cmlnZ2VyTGVwdXNHbG9iYWxFdmVudCA9IG51bGw7XG4gICAgdGhpcy5yZWxvYWQgPSBudWxsO1xuICAgIHRoaXMuc3RhcnRSZWNvcmRpbmcgPSBudWxsO1xuICAgIHRoaXMuc3RvcFJlY29yZGluZyA9IG51bGw7XG4gICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgdGhpcy5mZXRjaER5bmFtaWNDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuUXVlcnlDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMubG9hZER5bmFtaWNDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuZmV0Y2ggPSBudWxsO1xuICAgIHRoaXMuRXZlbnRTb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuY3JlYXRlU2VsZWN0b3JRdWVyeSA9IG51bGw7XG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgIHRoaXMubG9hZFNjcmlwdCA9IG51bGw7XG4gICAgdGhpcy5mZXRjaEJ1bmRsZSA9IG51bGw7XG4gICAgdGhpcy5fX2FkZFJlcG9ydGVyQ3VzdG9tSW5mbyA9IG51bGw7XG4gICAgdGhpcy5nZXRNb2R1bGVMb2FkZXIgPSBudWxsO1xuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9uID0gbnVsbDtcbiAgfVxufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEluZm8ge1xuICBmb250U2l6ZTogc3RyaW5nO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRNZXRyaWNzIHtcbiAgd2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFRleHRJbmZvTWFuYWdlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX25hdGl2ZU1vZHVsZXM6IGFueTtcbiAgcHJpdmF0ZSBfdGV4dEluZm9Nb2R1bGU6IGFueSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihuYXRpdmVNb2R1bGVzOiBvYmplY3QpIHtcbiAgICB0aGlzLl9uYXRpdmVNb2R1bGVzID0gbmF0aXZlTW9kdWxlcztcbiAgfVxuXG4gIGdldFRleHRJbmZvID0gKHBhcmFtOiBhbnksIG9wdGlvbnM/OiBUZXh0SW5mbyk6IFRleHRNZXRyaWNzID0+IHtcbiAgICBpZiAodGhpcy5fdGV4dEluZm9Nb2R1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGV4dEluZm9Nb2R1bGUgPSB0aGlzLl9uYXRpdmVNb2R1bGVzLkx5bnhUZXh0SW5mb01vZHVsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RleHRJbmZvTW9kdWxlICYmIHRoaXMuX3RleHRJbmZvTW9kdWxlLmdldFRleHRJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGV4dEluZm9Nb2R1bGUuZ2V0VGV4dEluZm8ocGFyYW0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogcGFyYW0ubGVuZ3RoLFxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblxuZXhwb3J0IGNsYXNzIEV4cG9zdXJlTWFuYWdlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX25hdGl2ZU1vZHVsZXM6IGFueTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZXhwb3N1cmVNb2R1bGU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYXRpdmVNb2R1bGVzOiBvYmplY3QpIHtcbiAgICB0aGlzLl9uYXRpdmVNb2R1bGVzID0gbmF0aXZlTW9kdWxlcztcbiAgICB0aGlzLl9leHBvc3VyZU1vZHVsZSA9IHRoaXMuX25hdGl2ZU1vZHVsZXMuTHlueEV4cG9zdXJlTW9kdWxlO1xuICB9XG5cbiAgcmVzdW1lRXhwb3N1cmUgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5fZXhwb3N1cmVNb2R1bGUucmVzdW1lRXhwb3N1cmUoKTtcbiAgfTtcblxuICBzdG9wRXhwb3N1cmUgPSAob3B0aW9ucz86IHsgc2VuZEV2ZW50PzogYm9vbGVhbiB9KTogdm9pZCA9PiB7XG4gICAgdGhpcy5fZXhwb3N1cmVNb2R1bGUuc3RvcEV4cG9zdXJlKG9wdGlvbnMpO1xuICB9O1xuXG4gIHNldE9ic2VydmVyRnJhbWVSYXRlID0gKG9wdGlvbnM/OiB7XG4gICAgZm9yUGFnZVJlY3Q/OiBudW1iZXI7XG4gICAgZm9yRXhwb3N1cmVDaGVjaz86IG51bWJlcjtcbiAgfSk6IHZvaWQgPT4ge1xuICAgIHRoaXMuX2V4cG9zdXJlTW9kdWxlLnNldE9ic2VydmVyRnJhbWVSYXRlKG9wdGlvbnMpO1xuICB9O1xufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCB7IEludGVyc2VjdGlvbk9ic2VydmVyIGFzIElJbnRlcnNlY3Rpb25PYnNlcnZlciB9IGZyb20gJ0BseW54LWpzL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcnNlY3Rpb25PYnNlcnZlck1vZHVsZSB7XG4gIGNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyOiBGdW5jdGlvbjtcbiAgcmVsYXRpdmVUbzogRnVuY3Rpb247XG4gIHJlbGF0aXZlVG9WaWV3cG9ydDogRnVuY3Rpb247XG4gIHJlbGF0aXZlVG9TY3JlZW46IEZ1bmN0aW9uO1xuICBvYnNlcnZlOiBGdW5jdGlvbjtcbiAgZGlzY29ubmVjdDogRnVuY3Rpb247XG59XG5cbmNsYXNzIEludGVyc2VjdGlvbk9ic2VydmF0aW9uVGFyZ2V0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VsZWN0b3I6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfY2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIGludm9rZUNhbGxiYWNrKGRhdGE6IG9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGxiYWNrKGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbXBsZW1lbnRzIElJbnRlcnNlY3Rpb25PYnNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2lkOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2ludGVyc2VjdGlvbk9ic2VydmVyTW9kdWxlOiBJbnRlcnNlY3Rpb25PYnNlcnZlck1vZHVsZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWFuYWdlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJNYW5hZ2VyO1xuICBwcml2YXRlIHJlYWRvbmx5IF9vYnNlcnZhdGlvblRhcmdldHM6IEludGVyc2VjdGlvbk9ic2VydmF0aW9uVGFyZ2V0W107XG4gIHByaXZhdGUgcmVhZG9ubHkgX2RlZmF1bHRNYXJnaW5zOiBvYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaWQ6IG51bWJlcixcbiAgICBpbnRlcnNlY3Rpb25PYnNlcnZlck1vZHVsZTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJNb2R1bGUsXG4gICAgbWFuYWdlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJNYW5hZ2VyXG4gICkge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5faW50ZXJzZWN0aW9uT2JzZXJ2ZXJNb2R1bGUgPSBpbnRlcnNlY3Rpb25PYnNlcnZlck1vZHVsZTtcbiAgICB0aGlzLl9tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSBbXTtcbiAgICB0aGlzLl9kZWZhdWx0TWFyZ2lucyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICB9O1xuICB9XG5cbiAgcmVsYXRpdmVUbyhzZWxlY3Rvcjogc3RyaW5nLCBtYXJnaW5zPzoge30pOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB7XG4gICAgdGhpcy5faW50ZXJzZWN0aW9uT2JzZXJ2ZXJNb2R1bGUucmVsYXRpdmVUbyhcbiAgICAgIHRoaXMuX2lkLFxuICAgICAgc2VsZWN0b3IsXG4gICAgICBtYXJnaW5zIHx8IHRoaXMuX2RlZmF1bHRNYXJnaW5zXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbGF0aXZlVG9WaWV3cG9ydChtYXJnaW5zPzoge30pOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB7XG4gICAgdGhpcy5faW50ZXJzZWN0aW9uT2JzZXJ2ZXJNb2R1bGUucmVsYXRpdmVUb1ZpZXdwb3J0KFxuICAgICAgdGhpcy5faWQsXG4gICAgICBtYXJnaW5zIHx8IHRoaXMuX2RlZmF1bHRNYXJnaW5zXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbGF0aXZlVG9TY3JlZW4obWFyZ2lucz86IHt9KTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIge1xuICAgIHRoaXMuX2ludGVyc2VjdGlvbk9ic2VydmVyTW9kdWxlLnJlbGF0aXZlVG9TY3JlZW4oXG4gICAgICB0aGlzLl9pZCxcbiAgICAgIG1hcmdpbnMgfHwgdGhpcy5fZGVmYXVsdE1hcmdpbnNcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2JzZXJ2ZShzZWxlY3Rvcjogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMucHVzaChcbiAgICAgIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZhdGlvblRhcmdldChzZWxlY3RvciwgY2FsbGJhY2spXG4gICAgKTtcbiAgICB0aGlzLl9pbnRlcnNlY3Rpb25PYnNlcnZlck1vZHVsZS5vYnNlcnZlKFxuICAgICAgdGhpcy5faWQsXG4gICAgICBzZWxlY3RvcixcbiAgICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggLSAxXG4gICAgKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgdGhpcy5faW50ZXJzZWN0aW9uT2JzZXJ2ZXJNb2R1bGUuZGlzY29ubmVjdCh0aGlzLl9pZCk7XG4gICAgdGhpcy5fbWFuYWdlci5yZW1vdmVPYnNlcnZlcih0aGlzLl9pZCk7XG4gIH1cblxuICBpbnZva2VDYWxsYmFjayhjYWxsYmFja0lkOiBudW1iZXIsIGRhdGE6IG9iamVjdCk6IHZvaWQge1xuICAgIGlmIChjYWxsYmFja0lkIDwgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzW2NhbGxiYWNrSWRdLmludm9rZUNhbGxiYWNrKGRhdGEpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJNYW5hZ2VyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbmF0aXZlTW9kdWxlczogb2JqZWN0O1xuICBwcml2YXRlIF9vYnNlcnZlcklkOiBudW1iZXI7XG4gIHByaXZhdGUgX29ic2VydmVyczogb2JqZWN0O1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZWZhdWx0T3B0aW9uczogb2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKG5hdGl2ZU1vZHVsZXM6IG9iamVjdCkge1xuICAgIHRoaXMuX25hdGl2ZU1vZHVsZXMgPSBuYXRpdmVNb2R1bGVzO1xuICAgIHRoaXMuX29ic2VydmVySWQgPSAwO1xuICAgIHRoaXMuX29ic2VydmVycyA9IHt9O1xuICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0ge1xuICAgICAgdGhyZXNob2xkczogWzBdLFxuICAgICAgaW5pdGlhbFJhdGlvOiAwLFxuICAgICAgb2JzZXJ2ZUFsbDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIGNvbXBvbmVudElkOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IG9iamVjdFxuICApOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB7XG4gICAgbGV0IGludGVyc2VjdGlvbk9ic2VydmVyTW9kdWxlID0gdGhpcy5fbmF0aXZlTW9kdWxlc1tcbiAgICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlck1vZHVsZSdcbiAgICBdO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgdGhpcy5fb2JzZXJ2ZXJJZCxcbiAgICAgIGludGVyc2VjdGlvbk9ic2VydmVyTW9kdWxlLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5fb2JzZXJ2ZXJzW3RoaXMuX29ic2VydmVySWRdID0gb2JzZXJ2ZXI7XG4gICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXJNb2R1bGUuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICB0aGlzLl9vYnNlcnZlcklkLFxuICAgICAgY29tcG9uZW50SWQsXG4gICAgICBvcHRpb25zIHx8IHRoaXMuX2RlZmF1bHRPcHRpb25zXG4gICAgKTtcbiAgICB0aGlzLl9vYnNlcnZlcklkKys7XG4gICAgcmV0dXJuIG9ic2VydmVyO1xuICB9XG5cbiAgZ2V0T2JzZXJ2ZXIob2JzZXJ2ZXJJZDogbnVtYmVyKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIge1xuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlcnNbb2JzZXJ2ZXJJZF07XG4gIH1cblxuICByZW1vdmVPYnNlcnZlcihvYnNlcnZlcklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9vYnNlcnZlcnNbb2JzZXJ2ZXJJZF0gPSBudWxsO1xuICB9XG59XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudCc7XG5pbXBvcnQge1xuICBQZXJmb3JtYW5jZU9ic2VydmVyIGFzIElQZXJmb3JtYW5jZU9ic2VydmVyLFxuICBQZXJmb3JtYW5jZUNhbGxiYWNrLFxuICBQZXJmb3JtYW5jZUVudHJ5LFxufSBmcm9tICdAbHlueC1qcy90eXBlcyc7XG5cbmNvbnN0IExpc3RlbmVyS2V5cyA9IHtcbiAgb25QZXJmb3JtYW5jZTogJ2x5bngucGVyZm9ybWFuY2Uub25QZXJmb3JtYW5jZUV2ZW50Jyxcbn07XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtYW5jZU9ic2VydmVyIGltcGxlbWVudHMgSVBlcmZvcm1hbmNlT2JzZXJ2ZXIge1xuICBfZW1pdHRlcjogRXZlbnRFbWl0dGVyO1xuICBfb2JzZXJ2ZWROYW1lczogc3RyaW5nW107XG4gIF9vblBlcmZvcm1hbmNlOiBQZXJmb3JtYW5jZUNhbGxiYWNrO1xuICBjb25zdHJ1Y3RvcihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIGNhbGxiYWNrOiBQZXJmb3JtYW5jZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5fb25QZXJmb3JtYW5jZSA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX29ic2VydmVkTmFtZXMgPSBbXTtcbiAgfVxuXG4gIG9ic2VydmUobmFtZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgLy8gVGhlIHByZXZpb3VzIG9ic2VydmUgbXVzdCBiZSBjbG9zZWQgdXNpbmcgdGhlIGRpc2Nvbm5lY3QgbWV0aG9kIGJlZm9yZSByZS1vYnNlcnZpbmcuXG4gICAgaWYgKHRoaXMuX29ic2VydmVkTmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX29ic2VydmVkTmFtZXMgPSBuYW1lcztcbiAgICB0aGlzLl9lbWl0dGVyLmFkZExpc3RlbmVyKFxuICAgICAgTGlzdGVuZXJLZXlzLm9uUGVyZm9ybWFuY2UsXG4gICAgICB0aGlzLm9uUGVyZm9ybWFuY2VFdmVudC5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgdGhpcy5fb2JzZXJ2ZWROYW1lcyA9IFtdO1xuICAgIHRoaXMuX2VtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoXG4gICAgICBMaXN0ZW5lcktleXMub25QZXJmb3JtYW5jZSxcbiAgICAgIHRoaXMub25QZXJmb3JtYW5jZUV2ZW50LmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgb25QZXJmb3JtYW5jZUV2ZW50KGVudHJ5OiBQZXJmb3JtYW5jZUVudHJ5KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29ic2VydmVkTmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGVudHJ5TmFtZSA9IGVudHJ5LmVudHJ5VHlwZSArICcuJyArIGVudHJ5Lm5hbWU7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fb2JzZXJ2ZWROYW1lcy5pbmNsdWRlcyhlbnRyeU5hbWUpIHx8XG4gICAgICB0aGlzLl9vYnNlcnZlZE5hbWVzLmluY2x1ZGVzKGVudHJ5LmVudHJ5VHlwZSlcbiAgICApIHtcbiAgICAgIHRoaXMuX29uUGVyZm9ybWFuY2UoZW50cnkpO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQnO1xuaW1wb3J0IHtcbiAgUGVyZm9ybWFuY2UgYXMgSVBlcmZvcm1hbmNlLFxuICBUaW1pbmdMaXN0ZW5lcixcbiAgUGVyZm9ybWFuY2VDYWxsYmFjayxcbn0gZnJvbSAnQGx5bngtanMvdHlwZXMnO1xuaW1wb3J0IHsgTmF0aXZlQXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmltcG9ydCB7IFRyYWNlT3B0aW9uIH0gZnJvbSAnQGx5bngtanMvdHlwZXMvdHlwZXMvY29tbW9uL3BlcmZvcm1hbmNlJztcbmltcG9ydCB7IFBlcmZvcm1hbmNlT2JzZXJ2ZXIgfSBmcm9tICcuL3BlcmZvcm1hbmNlT2JzZXJ2ZXInO1xuXG5jb25zdCBMaXN0ZW5lcktleXMgPSB7XG4gIG9uU2V0dXA6ICdseW54LnBlcmZvcm1hbmNlLnRpbWluZy5vblNldHVwJyxcbiAgb25VcGRhdGU6ICdseW54LnBlcmZvcm1hbmNlLnRpbWluZy5vblVwZGF0ZScsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBpcGVsaW5lT3B0aW9ucyB7XG4gIHBpcGVsaW5lSUQ6IHN0cmluZztcbiAgcGlwZWxpbmVPcmlnaW46IHN0cmluZzsgLy8gVGhlIG9yaWdpbiBvZiB0aGUgcGlwZWxpbmVcbiAgbmVlZFRpbWVzdGFtcHM6IGJvb2xlYW47XG4gIGRzbDogc3RyaW5nO1xuICBzdGFnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJmb3JtYW5jZSBpbXBsZW1lbnRzIElQZXJmb3JtYW5jZSB7XG4gIF9lbWl0dGVyOiBFdmVudEVtaXR0ZXI7XG4gIF9nZW5lcmF0ZVBpcGVsaW5lT3B0aW9uczogKCkgPT4gUGlwZWxpbmVPcHRpb25zO1xuICBfb25QaXBlbGluZVN0YXJ0OiAoXG4gICAgcGlwZWxpbmVfaWQ6IHN0cmluZyxcbiAgICBwaXBlbGluZV9vcHRpb25zPzogUGlwZWxpbmVPcHRpb25zXG4gICkgPT4gdm9pZDtcbiAgX21hcmtUaW1pbmc6IChwaXBlbGluZV9pZDogc3RyaW5nLCB0aW1pbmdfa2V5OiBzdHJpbmcpID0+IHZvaWQ7XG4gIF9wcm9maWxlU3RhcnQ6ICh0cmFjZU5hbWU6IHN0cmluZywgb3B0aW9uPzogVHJhY2VPcHRpb24pID0+IHZvaWQ7XG4gIF9wcm9maWxlRW5kOiAob3B0aW9uPzogVHJhY2VPcHRpb24pID0+IHZvaWQ7XG4gIF9wcm9maWxlTWFyazogKHRyYWNlTmFtZTogc3RyaW5nLCBvcHRpb24/OiBUcmFjZU9wdGlvbikgPT4gdm9pZDtcbiAgX3Byb2ZpbGVGbG93SWQ6ICgpID0+IG51bWJlcjtcbiAgX2lzUHJvZmlsZVJlY29yZGluZzogKCkgPT4gYm9vbGVhbjtcbiAgX2JpbmRQaXBlbGluZUlkV2l0aFRpbWluZ0ZsYWc6IChcbiAgICBwaXBlbGluZV9pZDogc3RyaW5nLFxuICAgIHRpbWluZ19mbGFnOiBzdHJpbmdcbiAgKSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIG5hdGl2ZUFwcDogTmF0aXZlQXBwKSB7XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5fZ2VuZXJhdGVQaXBlbGluZU9wdGlvbnMgPSBuYXRpdmVBcHAuZ2VuZXJhdGVQaXBlbGluZU9wdGlvbnM7XG4gICAgdGhpcy5fb25QaXBlbGluZVN0YXJ0ID0gbmF0aXZlQXBwLm9uUGlwZWxpbmVTdGFydDtcbiAgICB0aGlzLl9tYXJrVGltaW5nID0gbmF0aXZlQXBwLm1hcmtQaXBlbGluZVRpbWluZztcbiAgICB0aGlzLl9wcm9maWxlU3RhcnQgPSBuYXRpdmVBcHAucHJvZmlsZVN0YXJ0O1xuICAgIHRoaXMuX3Byb2ZpbGVFbmQgPSBuYXRpdmVBcHAucHJvZmlsZUVuZDtcbiAgICB0aGlzLl9wcm9maWxlTWFyayA9IG5hdGl2ZUFwcC5wcm9maWxlTWFyaztcbiAgICB0aGlzLl9wcm9maWxlRmxvd0lkID0gbmF0aXZlQXBwLnByb2ZpbGVGbG93SWQ7XG4gICAgdGhpcy5faXNQcm9maWxlUmVjb3JkaW5nID0gbmF0aXZlQXBwLmlzUHJvZmlsZVJlY29yZGluZztcbiAgICB0aGlzLl9iaW5kUGlwZWxpbmVJZFdpdGhUaW1pbmdGbGFnID0gbmF0aXZlQXBwLmJpbmRQaXBlbGluZUlkV2l0aFRpbWluZ0ZsYWc7XG4gIH1cblxuICBwcm9maWxlU3RhcnQodHJhY2VOYW1lOiBzdHJpbmcsIG9wdGlvbj86IFRyYWNlT3B0aW9uKSB7XG4gICAgdGhpcy5fcHJvZmlsZVN0YXJ0KHRyYWNlTmFtZSwgb3B0aW9uKTtcbiAgfVxuXG4gIHByb2ZpbGVFbmQoKSB7XG4gICAgdGhpcy5fcHJvZmlsZUVuZCgpO1xuICB9XG5cbiAgcHJvZmlsZU1hcmsodHJhY2VOYW1lOiBzdHJpbmcsIG9wdGlvbj86IFRyYWNlT3B0aW9uKSB7XG4gICAgdGhpcy5fcHJvZmlsZU1hcmsodHJhY2VOYW1lLCBvcHRpb24pO1xuICB9XG5cbiAgcHJvZmlsZUZsb3dJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZmlsZUZsb3dJZCgpO1xuICB9XG5cbiAgY3JlYXRlT2JzZXJ2ZXIoY2FsbGJhY2s6IFBlcmZvcm1hbmNlQ2FsbGJhY2spOiBQZXJmb3JtYW5jZU9ic2VydmVyIHtcbiAgICByZXR1cm4gbmV3IFBlcmZvcm1hbmNlT2JzZXJ2ZXIodGhpcy5fZW1pdHRlciwgY2FsbGJhY2spO1xuICB9XG5cbiAgaXNQcm9maWxlUmVjb3JkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Byb2ZpbGVSZWNvcmRpbmcoKTtcbiAgfVxuXG4gIGFkZFRpbWluZ0xpc3RlbmVyKGxpc3RlbmVyOiBUaW1pbmdMaXN0ZW5lcik6IHZvaWQge1xuICAgIHRoaXMuX2VtaXR0ZXIuYWRkTGlzdGVuZXIoTGlzdGVuZXJLZXlzLm9uU2V0dXAsIGxpc3RlbmVyLm9uU2V0dXAsIGxpc3RlbmVyKTtcbiAgICB0aGlzLl9lbWl0dGVyLmFkZExpc3RlbmVyKFxuICAgICAgTGlzdGVuZXJLZXlzLm9uVXBkYXRlLFxuICAgICAgbGlzdGVuZXIub25VcGRhdGUsXG4gICAgICBsaXN0ZW5lclxuICAgICk7XG4gIH1cblxuICByZW1vdmVUaW1pbmdMaXN0ZW5lcihsaXN0ZW5lcjogVGltaW5nTGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLnJlbW92ZUxpc3RlbmVyKExpc3RlbmVyS2V5cy5vblNldHVwLCBsaXN0ZW5lci5vblNldHVwKTtcbiAgICB0aGlzLl9lbWl0dGVyLnJlbW92ZUxpc3RlbmVyKExpc3RlbmVyS2V5cy5vblVwZGF0ZSwgbGlzdGVuZXIub25VcGRhdGUpO1xuICB9XG5cbiAgcmVtb3ZlQWxsVGltaW5nTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5fZW1pdHRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoTGlzdGVuZXJLZXlzLm9uU2V0dXApO1xuICAgIHRoaXMuX2VtaXR0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKExpc3RlbmVyS2V5cy5vblVwZGF0ZSk7XG4gIH1cbiAgX2luaXRpYWxpemVBbmRTdGFydFBpcGVsaW5lKCk6IFBpcGVsaW5lT3B0aW9ucyB7XG4gICAgY29uc3QgcGlwZWxpbmVPcHRpb25zID0gdGhpcy5fZ2VuZXJhdGVQaXBlbGluZU9wdGlvbnMoKTtcbiAgICBpZiAocGlwZWxpbmVPcHRpb25zKSB7XG4gICAgICB0aGlzLl9vblBpcGVsaW5lU3RhcnQocGlwZWxpbmVPcHRpb25zLnBpcGVsaW5lSUQpO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZWxpbmVPcHRpb25zO1xuICB9XG4gIF9jaGVja0FuZEJpbmRUaW1pbmdGbGFnKFxuICAgIHBpcGVsaW5lT3B0aW9uczogUGlwZWxpbmVPcHRpb25zLFxuICAgIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICkge1xuICAgIGlmICghcGlwZWxpbmVPcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IFBlcmZvcm1hbmNlVGltaW5nRmxhZyA9ICdfX2x5bnhfdGltaW5nX2ZsYWcnO1xuICAgIGlmIChkYXRhW1BlcmZvcm1hbmNlVGltaW5nRmxhZ10pIHtcbiAgICAgIHRoaXMuX2JpbmRQaXBlbGluZUlkV2l0aFRpbWluZ0ZsYWcoXG4gICAgICAgIHBpcGVsaW5lT3B0aW9ucy5waXBlbGluZUlELFxuICAgICAgICBkYXRhW1BlcmZvcm1hbmNlVGltaW5nRmxhZ10gYXMgc3RyaW5nXG4gICAgICApO1xuICAgICAgdGhpcy5fbWFya1RpbWluZyhwaXBlbGluZU9wdGlvbnMucGlwZWxpbmVJRCwgJ3VwZGF0ZV9zZXRfc3RhdGVfdHJpZ2dlcicpO1xuICAgICAgcGlwZWxpbmVPcHRpb25zLm5lZWRUaW1lc3RhbXBzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsICIvLyBDb3B5cmlnaHQgMjAyNCBUaGUgTHlueCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSAnLi9wZXJmb3JtYW5jZSc7XG5leHBvcnQgZGVmYXVsdCBQZXJmb3JtYW5jZTtcbmV4cG9ydCAqIGZyb20gJy4vcGVyZm9ybWFuY2UnO1xuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCBuYXRpdmVHbG9iYWwgZnJvbSAnLi9uYXRpdmVHbG9iYWwnO1xuZXhwb3J0IGRlZmF1bHQgbmF0aXZlR2xvYmFsLkx5bnhKU0JJO1xuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbi8vIENhY2hlIGFjY2VzcyB0byBmdW5jdGlvbnMgb2YgdGhlIHRhcmdldCBvYmplY3QuXG4vL1xuLy8gV2hlbiBhIGZ1bmN0aW9uIG9uIHRhcmdldCBvYmogaXMgYWNjZXNzZWQgZm9yIHRoZSBmaXJzdCB0aW1lLFxuLy8gdGhlIHByb3h5IG9idGFpbnMgdGhlIGZ1bmN0aW9uIG9iamVjdCBhbmQgc2F2ZXMgaXQsXG4vLyBhbmQgcmV0dXJucyB0aGUgY2FjaGVkIGZ1bmN0aW9uIG9iamVjdCBkaXJlY3RseSBkdXJpbmcgc3Vic2VxdWVudCBhY2Nlc3Ncbi8vIHdpdGhvdXQgYWNjZXNzaW5nIGFnYWluLlxuZXhwb3J0IGNsYXNzIENhY2hlZEZ1bmN0aW9uUHJveHk8VD4ge1xuICBwcml2YXRlIF9jYWNoZWRGdW5jdGlvbnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHt9O1xuXG4gIHN0YXRpYyBjcmVhdGU8VD4ob2JqOiBUKTogVCB7XG4gICAgcmV0dXJuIG5ldyBDYWNoZWRGdW5jdGlvblByb3h5KG9iaikgYXMgYW55O1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2JqOiBUKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2FjaGVkRnVuY3Rpb25zW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWRGdW5jdGlvbnNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRGdW5jdGlvbnNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsICIvLyBDb3B5cmlnaHQgMjAyNCBUaGUgTHlueCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXG5pbXBvcnQgeyBMeW54Q2xlYXJUaW1lb3V0LCBMeW54U2V0VGltZW91dCB9IGZyb20gJ0BseW54LWpzL3R5cGVzJztcbmltcG9ydCBuYXRpdmVHbG9iYWwgZnJvbSAnLi4vY29tbW9uL25hdGl2ZUdsb2JhbCc7XG5cbnR5cGUgbmV4dFRpY2sgPSAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvbWlzZU1heWJlUG9seWZpbGwoXG4gIHNldFRpbWVvdXQ6IEx5bnhTZXRUaW1lb3V0LFxuICBvblVuaGFuZGxlZCxcbiAgY2xlYXJUaW1lb3V0OiBMeW54Q2xlYXJUaW1lb3V0LFxuICBxdWV1ZU1pY3JvdGFzazogbmV4dFRpY2sgPSB1bmRlZmluZWQsXG4gIGVuYWJsZU1pY3JvdGFza1Byb21pc2VQb2x5ZmlsbDogYm9vbGVhbiA9IGZhbHNlXG4pIHtcbiAgY29uc3QgeyBnZXRQcm9taXNlIH0gPSBuYXRpdmVHbG9iYWw7XG4gIGlmICh0eXBlb2YgZ2V0UHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IG5leHRUaWNrID0gZW5hYmxlTWljcm90YXNrUHJvbWlzZVBvbHlmaWxsXG4gICAgICA/IHF1ZXVlTWljcm90YXNrXG4gICAgICA6IChmbjogKCkgPT4gdm9pZCkgPT4gc2V0VGltZW91dChmbiwgMCk7XG4gICAgcmV0dXJuIGdldFByb21pc2UoeyBuZXh0VGljaywgc2V0VGltZW91dCwgb25VbmhhbmRsZWQsIGNsZWFyVGltZW91dCB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBzaG91bGQgcmVwb3J0IGVycm9yO1xuICAgIHJldHVybiBuYXRpdmVHbG9iYWwuUHJvbWlzZTtcbiAgfVxufVxuIiwgIi8vIENvcHlyaWdodCAyMDI1IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmV4cG9ydCBjbGFzcyBUcmFjZUV2ZW50RGVmIHtcbiAgc3RhdGljIHJlYWRvbmx5IEVYRUNVVEVfTE9BREVEX1NDUklQVCA9ICdleGVjdXRlTG9hZGVkU2NyaXB0Jztcbn1cbiIsICIvLyBDb3B5cmlnaHQgMjAyNCBUaGUgTHlueCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXG5pbXBvcnQge1xuICBBcHBQcm94eVBhcmFtcyxcbiAgQnVuZGxlSW5pdFJldHVybk9iaixcbiAgRW52S2V5LFxuICBMaWZlRXZlbnQsXG4gIGxvYWRDYXJkUGFyYW1zLFxuICBOYXRpdmVBcHAsXG4gIHJlcXVpcmVQYXJhbU9iaixcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQU1ERmFjdG9yeSwgQU1ETW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7XG4gIFJlcG9ydGVyLFxuICBCYXNlRXJyb3IsXG4gIEludGVybmFsUnVudGltZUVycm9yLFxuICBMeW54RXJyb3JMZXZlbCxcbiAgVXNlclJ1bnRpbWVFcnJvcixcbn0gZnJvbSAnLi4vbW9kdWxlcy9yZXBvcnQnO1xuaW1wb3J0IHsgQ29udGV4dFByb3h5VHlwZSwgTHlueCwgTmF0aXZlTHlueFByb3h5IH0gZnJvbSAnLi4vbHlueCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyLCB7IEFvcE1hbmFnZXIsIEJlZm9yZVB1Ymxpc2hFdmVudCB9IGZyb20gJy4uL21vZHVsZXMvZXZlbnQnO1xuaW1wb3J0IHtcbiAgRXhwb3N1cmVNYW5hZ2VyLFxuICBJbnRlcnNlY3Rpb25PYnNlcnZlck1hbmFnZXIsXG4gIE5hdGl2ZUx5bnhVSU1vZHVsZSxcbiAgTmF0aXZlTW9kdWxlLFxuICBUZXh0SW5mbyxcbiAgVGV4dEluZm9NYW5hZ2VyLFxuICBUZXh0TWV0cmljcyxcbn0gZnJvbSAnLi4vbW9kdWxlcy9uYXRpdmVNb2R1bGVzJztcbmltcG9ydCB7IERFRkFVTFRfRU5UUlksIFNPVVJDRV9NQVBfUkVMRUFTRV9FUlJPUl9OQU1FIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCBuYXRpdmVHbG9iYWwgZnJvbSAnLi4vY29tbW9uL25hdGl2ZUdsb2JhbCc7XG5pbXBvcnQge1xuICBDcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlckZ1bmMsXG4gIEx5bnhDbGVhclRpbWVvdXQsXG4gIEx5bnhTZXRUaW1lb3V0LFxuICBNZXNzYWdlRXZlbnQsXG59IGZyb20gJ0BseW54LWpzL3R5cGVzJztcbmltcG9ydCBQZXJmb3JtYW5jZSBmcm9tICcuLi9tb2R1bGVzL3BlcmZvcm1hbmNlJztcbmltcG9ydCB7IHJlcG9ydEVycm9yIH0gZnJvbSAnLi4vbW9kdWxlcy9yZXBvcnQnO1xuaW1wb3J0IEx5bnhKU0JJIGZyb20gJy4uL2NvbW1vbi9qc2JpJztcbmltcG9ydCB7IENhY2hlZEZ1bmN0aW9uUHJveHkgfSBmcm9tICcuLi91dGlsL2NhY2hlZEZ1bmN0aW9uUHJveHknO1xuaW1wb3J0IHsgZ2V0UHJvbWlzZU1heWJlUG9seWZpbGwgfSBmcm9tICcuLi91dGlsL3NldHVwLXByb21pc2UnO1xuaW1wb3J0IHsgY3JlYXRlUmVhZGFibGVTdHJlYW1DbGFzcywgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9tb2R1bGVzL2ZldGNoJztcbmltcG9ydCB7IE1lc3NhZ2VFdmVudFR5cGUgfSBmcm9tICcuLi9seW54JztcbmltcG9ydCB7IFRyYWNlRXZlbnREZWYgfSBmcm9tICcuLi91dGlsL1RyYWNlRXZlbnREZWYnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUFwcDxcbiAgTmF0aXZlQXBwUHJveHkgZXh0ZW5kcyBOYXRpdmVBcHAgPSBOYXRpdmVBcHAsXG4gIEx5bnhJbXBsIGV4dGVuZHMgTHlueCA9IEx5bnhcbj4ge1xuICBfbmF0aXZlQXBwOiBOYXRpdmVBcHBQcm94eTtcbiAgbmF0aXZlQXBwSWQ6IHN0cmluZztcbiAgX3BhcmFtczogbG9hZENhcmRQYXJhbXM7XG4gIGx5bng6IEx5bnhJbXBsO1xuICBtb2R1bGVzOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBBTURNb2R1bGU+PjtcbiAgc2hhcmVkQ29uc29sZTogdHlwZW9mIG5hdGl2ZUNvbnNvbGU7XG4gIGR5bmFtaWNDb21wb25lbnRFeHBvcnRzOiBvYmplY3Q7XG4gIGxvYWRlZER5bmFtaWNDb21wb25lbnRzU2V0OiBTZXQ8c3RyaW5nPjtcbiAgcmVzb2x2ZWRQcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xuXG4gIFJlcG9ydGVyOiBSZXBvcnRlcjtcbiAgX2xhenlDYWxsYWJsZU1vZHVsZXM6IE1hcDxzdHJpbmcsIHVua25vd24+O1xuICBHbG9iYWxFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjtcbiAgTmF0aXZlTW9kdWxlczogTmF0aXZlTW9kdWxlO1xuICBMeW54VUlNZXRob2RNb2R1bGU6IE5hdGl2ZUx5bnhVSU1vZHVsZTtcbiAgTHlueFRlc3RNb2R1bGU6IG9iamVjdDtcbiAgTHlueFJlc291cmNlTW9kdWxlOiBvYmplY3Q7XG4gIEx5bnhBY2Nlc3NpYmlsaXR5TW9kdWxlOiBvYmplY3Q7XG4gIEx5bnhTZXRNb2R1bGU6IG9iamVjdDtcblxuICBfYXBpTGlzdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIF9pbnRlcnNlY3Rpb25PYnNlcnZlck1hbmFnZXI6IEludGVyc2VjdGlvbk9ic2VydmVyTWFuYWdlcjtcbiAgX2V4cG9zdXJlTWFuYWdlcjogRXhwb3N1cmVNYW5hZ2VyO1xuICBfdGV4dEluZm9NYW5hZ2VyOiBUZXh0SW5mb01hbmFnZXI7XG4gIF9hb3BNYW5hZ2VyOiBBb3BNYW5hZ2VyO1xuICBiZWZvcmVQdWJsaXNoRXZlbnQ6IEJlZm9yZVB1Ymxpc2hFdmVudDtcblxuICBwZXJmb3JtYW5jZTogUGVyZm9ybWFuY2U7XG5cbiAgc2V0VGltZW91dDogTHlueFNldFRpbWVvdXQ7XG4gIHNldEludGVydmFsOiBMeW54U2V0VGltZW91dDtcbiAgY2xlYXJJbnRlcnZhbDogKGludGVydmFsSWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgY2xlYXJUaW1lb3V0OiAodGltZW91dElkOiBudW1iZXIpID0+IHZvaWQ7XG5cbiAgX2NyZWF0ZVJlYWRhYmxlU3RyZWFtQ2xhc3M6IChcbiAgICBwcm92aWRlcjogUHJvbWlzZUNvbnN0cnVjdG9yIHwgeyBnZXRQcm9taXNlOiAoKSA9PiBQcm9taXNlQ29uc3RydWN0b3IgfVxuICApID0+IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVJlYWRhYmxlU3RyZWFtQ2xhc3M+O1xuICBfUmVhZGFibGVTdHJlYW1DbGFzczogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUmVhZGFibGVTdHJlYW1DbGFzcz47XG5cbiAgZGF0YVR5cGVTZXQgPSBuZXcgU2V0KFtcbiAgICAnc3RyaW5nJyxcbiAgICAnbnVtYmVyJyxcbiAgICAnYXJyYXknLFxuICAgICdvYmplY3QnLFxuICAgICdib29sZWFuJyxcbiAgICAnbnVsbCcsXG4gICAgJ2Z1bmN0aW9uJyxcbiAgXSk7XG5cbiAgLyoqXG4gICAqIEludGVybmFsIEV2ZW50IExpc3RlbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGNvbnRleHRQcm94eVR5cGVUb01ldGhvZDoge307XG4gIHByaXZhdGUgcmVtb3ZlSW50ZXJuYWxFdmVudExpc3RlbmVyc0NhbGxiYWNrczogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBvcHRpb25zOiBBcHBQcm94eVBhcmFtczxOYXRpdmVBcHBQcm94eT4sXG4gICAgb3RoZXJBcHA/OiBCYXNlQXBwIC8qKiBTdGFuZGFsb25lQXBwICoqL1xuICApIHtcbiAgICB0aGlzLmluaXRCYXNlKG9wdGlvbnMpO1xuICAgIHRoaXMuaW5pdFdpdGhSZXVzZWRBcHAob3B0aW9ucywgb3RoZXJBcHApO1xuICAgIHRoaXMuYWRkSW50ZXJuYWxFdmVudExpc3RlbmVycygpO1xuXG4gICAgbmF0aXZlR2xvYmFsWydub3RpZnlSdW50aW1lUmVhZHlPblJUJyArIHRoaXMubmF0aXZlQXBwSWRdICYmXG4gICAgICBuYXRpdmVHbG9iYWxbJ25vdGlmeVJ1bnRpbWVSZWFkeU9uUlQnICsgdGhpcy5uYXRpdmVBcHBJZF0odGhpcy5seW54KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFdpdGhSZXVzZWRBcHAoXG4gICAgb3B0aW9uczogQXBwUHJveHlQYXJhbXM8TmF0aXZlQXBwUHJveHk+LFxuICAgIG90aGVyQXBwPzogQmFzZUFwcFxuICApIHtcbiAgICBpZiAob3RoZXJBcHApIHtcbiAgICAgIHRoaXMuX25hdGl2ZUFwcCA9IG90aGVyQXBwLm5hdGl2ZUFwcCBhcyBOYXRpdmVBcHBQcm94eTtcbiAgICAgIHRoaXMuc2hhcmVkQ29uc29sZSA9IG90aGVyQXBwLnNoYXJlZENvbnNvbGU7XG4gICAgICB0aGlzLmR5bmFtaWNDb21wb25lbnRFeHBvcnRzID0gb3RoZXJBcHAuZHluYW1pY0NvbXBvbmVudEV4cG9ydHM7XG4gICAgICB0aGlzLmxvYWRlZER5bmFtaWNDb21wb25lbnRzU2V0ID0gb3RoZXJBcHAubG9hZGVkRHluYW1pY0NvbXBvbmVudHNTZXQ7XG4gICAgICB0aGlzLl9hcGlMaXN0ID0gb3RoZXJBcHAuX2FwaUxpc3Q7XG4gICAgICB0aGlzLl9pbnRlcnNlY3Rpb25PYnNlcnZlck1hbmFnZXIgPSBvdGhlckFwcC5faW50ZXJzZWN0aW9uT2JzZXJ2ZXJNYW5hZ2VyO1xuICAgICAgdGhpcy5fZXhwb3N1cmVNYW5hZ2VyID0gb3RoZXJBcHAuX2V4cG9zdXJlTWFuYWdlcjtcbiAgICAgIHRoaXMuX3RleHRJbmZvTWFuYWdlciA9IG90aGVyQXBwLl90ZXh0SW5mb01hbmFnZXI7XG4gICAgICBvdGhlckFwcC5HbG9iYWxFdmVudEVtaXR0ZXIuc2V0Q2FsbEx5bnhTZXRNb2R1bGUoXG4gICAgICAgIHRoaXMuX19pbnRlcm5hbF9fY2FsbEx5bnhTZXRNb2R1bGUuYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICAgIHRoaXMuR2xvYmFsRXZlbnRFbWl0dGVyID0gb3RoZXJBcHAuR2xvYmFsRXZlbnRFbWl0dGVyO1xuICAgICAgdGhpcy5fYW9wTWFuYWdlciA9IG90aGVyQXBwLl9hb3BNYW5hZ2VyO1xuICAgICAgdGhpcy5wZXJmb3JtYW5jZSA9IG90aGVyQXBwLnBlcmZvcm1hbmNlO1xuICAgICAgdGhpcy5tb2R1bGVzID0gb3RoZXJBcHAubW9kdWxlcztcbiAgICAgIHRoaXMuX2xhenlDYWxsYWJsZU1vZHVsZXMgPSBvdGhlckFwcC5fbGF6eUNhbGxhYmxlTW9kdWxlcztcbiAgICAgIG90aGVyQXBwLmx5bngucmViaW5kKCgpID0+IHRoaXMpO1xuICAgICAgdGhpcy5seW54ID0gb3RoZXJBcHAubHlueCBhcyBMeW54SW1wbDtcbiAgICAgIG90aGVyQXBwLlJlcG9ydGVyLnJlYmluZCgoKSA9PiB0aGlzKTtcbiAgICAgIHRoaXMuUmVwb3J0ZXIgPSBvdGhlckFwcC5SZXBvcnRlcjtcbiAgICAgIHRoaXMuc2V0VGltZW91dCA9IG90aGVyQXBwLnNldFRpbWVvdXQ7XG4gICAgICB0aGlzLnNldEludGVydmFsID0gb3RoZXJBcHAuc2V0SW50ZXJ2YWw7XG4gICAgICB0aGlzLmNsZWFySW50ZXJ2YWwgPSBvdGhlckFwcC5jbGVhckludGVydmFsO1xuICAgICAgdGhpcy5jbGVhclRpbWVvdXQgPSBvdGhlckFwcC5jbGVhclRpbWVvdXQ7XG4gICAgICB0aGlzLnJlc29sdmVkUHJvbWlzZSA9IG90aGVyQXBwLnJlc29sdmVkUHJvbWlzZTtcbiAgICAgIC8vIGZldGNoIGFwaSByZWxhdGVkXG4gICAgICB0aGlzLl9jcmVhdGVSZWFkYWJsZVN0cmVhbUNsYXNzID0gb3RoZXJBcHAuX2NyZWF0ZVJlYWRhYmxlU3RyZWFtQ2xhc3M7XG4gICAgICB0aGlzLl9SZWFkYWJsZVN0cmVhbUNsYXNzID0gb3RoZXJBcHAuX1JlYWRhYmxlU3RyZWFtQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgbHlueCB9ID0gb3B0aW9ucztcblxuICAgICAgdGhpcy5zZXRUaW1lb3V0ID0gdGhpcy5uYXRpdmVBcHAuc2V0VGltZW91dDtcbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwgPSB0aGlzLm5hdGl2ZUFwcC5zZXRJbnRlcnZhbDtcbiAgICAgIHRoaXMuY2xlYXJJbnRlcnZhbCA9IHRoaXMubmF0aXZlQXBwLmNsZWFySW50ZXJ2YWw7XG4gICAgICB0aGlzLmNsZWFyVGltZW91dCA9IHRoaXMubmF0aXZlQXBwLmNsZWFyVGltZW91dDtcblxuICAgICAgdGhpcy5tb2R1bGVzID0ge307XG4gICAgICB0aGlzLl9hcGlMaXN0ID0ge307XG4gICAgICB0aGlzLl90ZXh0SW5mb01hbmFnZXIgPSBuZXcgVGV4dEluZm9NYW5hZ2VyKHRoaXMuTmF0aXZlTW9kdWxlcyk7XG4gICAgICB0aGlzLnNldHVwR2V0VGV4dEluZm9BcGkoKTtcbiAgICAgIHRoaXMuX2xhenlDYWxsYWJsZU1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9uYXRpdmVBcHAgPSBDYWNoZWRGdW5jdGlvblByb3h5LmNyZWF0ZTxOYXRpdmVBcHBQcm94eT4oXG4gICAgICAgIHRoaXMuX25hdGl2ZUFwcFxuICAgICAgKTtcbiAgICAgIHRoaXMuc2hhcmVkQ29uc29sZSA9IG5hdGl2ZUNvbnNvbGU7XG4gICAgICB0aGlzLmR5bmFtaWNDb21wb25lbnRFeHBvcnRzID0ge307XG4gICAgICB0aGlzLmxvYWRlZER5bmFtaWNDb21wb25lbnRzU2V0ID0gbmV3IFNldCgpO1xuICAgICAgdGhpcy5fbGF6eUNhbGxhYmxlTW9kdWxlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgdGhpcy5SZXBvcnRlciA9IG5ldyBSZXBvcnRlcihcbiAgICAgICAgKCkgPT4gdGhpcyxcbiAgICAgICAgKCkgPT4gdGhpcy5uYXRpdmVBcHBcbiAgICAgICk7XG5cbiAgICAgIC8vIGluaXQgZXZlbnRFbWl0dGVyXG4gICAgICB0aGlzLkdsb2JhbEV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoXG4gICAgICAgIHRoaXMuX19pbnRlcm5hbF9fY2FsbEx5bnhTZXRNb2R1bGUuYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2ludGVyc2VjdGlvbk9ic2VydmVyTWFuYWdlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlck1hbmFnZXIoXG4gICAgICAgIHRoaXMuTmF0aXZlTW9kdWxlc1xuICAgICAgKTtcblxuICAgICAgdGhpcy5fZXhwb3N1cmVNYW5hZ2VyID0gbmV3IEV4cG9zdXJlTWFuYWdlcih0aGlzLk5hdGl2ZU1vZHVsZXMpO1xuICAgICAgdGhpcy5zZXR1cEV4cG9zdXJlQXBpKCk7XG4gICAgICB0aGlzLl9hb3BNYW5hZ2VyID0gbmV3IEFvcE1hbmFnZXIoKTtcbiAgICAgIHRoaXMuYmVmb3JlUHVibGlzaEV2ZW50ID0gdGhpcy5fYW9wTWFuYWdlci5fYmVmb3JlUHVibGlzaEV2ZW50O1xuXG4gICAgICB0aGlzLnBlcmZvcm1hbmNlID0gbmV3IFBlcmZvcm1hbmNlKFxuICAgICAgICB0aGlzLkdsb2JhbEV2ZW50RW1pdHRlcixcbiAgICAgICAgdGhpcy5uYXRpdmVBcHBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHByb21pc2VDdG9yID0gdGhpcy5zZXR1cFByb21pc2UoXG4gICAgICAgIHRoaXMubmF0aXZlQXBwLnNldFRpbWVvdXQsXG4gICAgICAgIHRoaXMubmF0aXZlQXBwLmNsZWFyVGltZW91dCxcbiAgICAgICAgbHlueFxuICAgICAgKTtcblxuICAgICAgdGhpcy5seW54ID0gdGhpcy5jcmVhdGVMeW54KGx5bngsIHByb21pc2VDdG9yKTtcbiAgICAgIHRoaXMuc2V0dXBKU01vZHVsZSgpO1xuICAgICAgdGhpcy5zZXR1cEludGVyc2VjdGlvbkFwaSgpO1xuICAgICAgdGhpcy5zZXR1cEZldGNoQVBJKHByb21pc2VDdG9yKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdEJhc2Uob3B0aW9uczogQXBwUHJveHlQYXJhbXM8TmF0aXZlQXBwUHJveHk+KSB7XG4gICAgY29uc3QgeyBuYXRpdmVBcHAsIHBhcmFtcyB9ID0gb3B0aW9ucztcblxuICAgIC8vIGluaXQgaWQgJiBsb2FkQ2FyZFBhcmFtXG4gICAgdGhpcy5uYXRpdmVBcHBJZCA9IG5hdGl2ZUFwcC5pZDtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5fbmF0aXZlQXBwID0gbmF0aXZlQXBwO1xuXG4gICAgLy8gaW5pdCBuYXRpdmUgTmF0aXZlTW9kdWxlc1xuICAgIHRoaXMuTmF0aXZlTW9kdWxlcyA9IG5hdGl2ZUFwcC5uYXRpdmVNb2R1bGVQcm94eTtcbiAgICB0aGlzLkx5bnhVSU1ldGhvZE1vZHVsZSA9IG5hdGl2ZUFwcC5uYXRpdmVNb2R1bGVQcm94eS5MeW54VUlNZXRob2RNb2R1bGU7XG4gICAgdGhpcy5MeW54VGVzdE1vZHVsZSA9IG5hdGl2ZUFwcC5uYXRpdmVNb2R1bGVQcm94eS5MeW54VGVzdE1vZHVsZTtcbiAgICB0aGlzLkx5bnhSZXNvdXJjZU1vZHVsZSA9IG5hdGl2ZUFwcC5uYXRpdmVNb2R1bGVQcm94eS5MeW54UmVzb3VyY2VNb2R1bGU7XG4gICAgdGhpcy5MeW54QWNjZXNzaWJpbGl0eU1vZHVsZSA9XG4gICAgICBuYXRpdmVBcHAubmF0aXZlTW9kdWxlUHJveHkuTHlueEFjY2Vzc2liaWxpdHlNb2R1bGU7XG4gICAgdGhpcy5MeW54U2V0TW9kdWxlID0gbmF0aXZlQXBwLm5hdGl2ZU1vZHVsZVByb3h5Lkx5bnhTZXRNb2R1bGU7XG4gIH1cblxuICBzdGF0aWMga0RlZmF1bHRTb3VyY2VNYXBVUkwgPSAnZGVmYXVsdCc7XG4gIHN0YXRpYyBrR2V0U291cmNlTWFwUmVsZWFzZUVycm9yTmFtZSA9IFNPVVJDRV9NQVBfUkVMRUFTRV9FUlJPUl9OQU1FO1xuICAvKipcbiAgICogbGVnYWN5IHNvdXJjZW1hcCByZWxlYXNlIHVzZSB1cmwgZGVmYXVsdFxuICAgKiB1c2VkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAqXG4gICAqIG5ldyB0ZW1wbGF0ZSBzaG91bGQgdXNlIHNldFNvdXJjZU1hcFJlbGVhc2VcbiAgICovXG4gIHNldCBfX3NvdXJjZW1hcF9fcmVsZWFzZV9fKHJlbGVhc2U6IHN0cmluZykge1xuICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcigpO1xuICAgIGVycm9yLm5hbWUgPSAnTHlueEdldFNvdXJjZU1hcFJlbGVhc2VFcnJvcic7XG4gICAgZXJyb3IubWVzc2FnZSA9IHJlbGVhc2U7XG4gICAgZXJyb3Iuc3RhY2sgPSBgYXQgPGFub255bW91cz4gKCR7QmFzZUFwcC5rRGVmYXVsdFNvdXJjZU1hcFVSTH06MToxKWA7XG4gICAgdGhpcy5zZXRTb3VyY2VNYXBSZWxlYXNlKGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc291cmNlbWFwIHJlbGVhc2Ugd2l0aCBhIG5ld2x5IHRocm93biBlcnJvclxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICAgKiBUaGUgZXJyb3IgdGhyb3duIGZyb20gdGhlIGZpbGUgdGhhdCB3YW50cyB0byBzZXQgc291cmNlbWFwIHJlbGVhc2UuXG4gICAqIFRoZSB0b3AgZnJhbWUgb2YgYGVycm9yLnN0YWNrYCAqKm11c3QgYmUqKiB0aGUgZmlsZW5hbWUuXG4gICAqIFRoZSBgZXJyb3IubmFtZWAgKiptdXN0IGJlKiogYCdMeW54R2V0U291cmNlTWFwUmVsZWFzZUVycm9yJ2AuXG4gICAqIFRoZSBgZXJyb3IubWVzc2FnZWAgKiptdXN0IGJlKiogdGhlIHNvdXJjZW1hcCByZWxlYXNlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAoZnVuY3Rpb24gKCkge1xuICAgKiAgIHRyeSB7XG4gICAqICAgICB0aHJvdyBuZXcgRXJyb3Ioc291cmNlbWFwUmVsZWFzZSk7XG4gICAqICAgfSBjYXRjaCAoZSkge1xuICAgKiAgICAgZS5uYW1lID0gJ0x5bnhHZXRTb3VyY2VNYXBSZWxlYXNlRXJyb3InO1xuICAgKiAgICAgdHQuc2V0U291cmNlTWFwUmVsZWFzZShlKTtcbiAgICogICB9XG4gICAqIH0pKClcbiAgICovXG4gIHNldFNvdXJjZU1hcFJlbGVhc2UgPSAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgdGhpcy5SZXBvcnRlci5zZXRTb3VyY2VNYXBSZWxlYXNlKGVycm9yKTtcbiAgfTtcblxuICBnZXRTb3VyY2VNYXBSZWxlYXNlID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gdGhpcy5SZXBvcnRlci5nZXRTb3VyY2VNYXBSZWxlYXNlKHVybCk7XG4gIH07XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlSW50ZXJuYWxFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX25hdGl2ZUFwcCA9IG51bGw7XG4gICAgdGhpcy5uYXRpdmVBcHBJZCA9IG51bGw7XG4gICAgdGhpcy5fcGFyYW1zID0gbnVsbDtcbiAgICBpZiAodGhpcy5seW54KSB7XG4gICAgICB0aGlzLmx5bnguZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmx5bnggPSBudWxsO1xuICAgIHRoaXMubW9kdWxlcyA9IG51bGw7XG4gICAgdGhpcy5zaGFyZWRDb25zb2xlID0gbnVsbDtcbiAgICB0aGlzLmR5bmFtaWNDb21wb25lbnRFeHBvcnRzID0gbnVsbDtcbiAgICB0aGlzLmxvYWRlZER5bmFtaWNDb21wb25lbnRzU2V0ID0gbnVsbDtcbiAgICB0aGlzLnJlc29sdmVkUHJvbWlzZSA9IG51bGw7XG4gICAgdGhpcy5SZXBvcnRlciA9IG51bGw7XG4gICAgdGhpcy5fbGF6eUNhbGxhYmxlTW9kdWxlcyA9IG51bGw7XG4gICAgdGhpcy5HbG9iYWxFdmVudEVtaXR0ZXIgPSBudWxsO1xuICAgIHRoaXMuTmF0aXZlTW9kdWxlcyA9IG51bGw7XG4gICAgdGhpcy5MeW54VUlNZXRob2RNb2R1bGUgPSBudWxsO1xuICAgIHRoaXMuTHlueFRlc3RNb2R1bGUgPSBudWxsO1xuICAgIHRoaXMuTHlueFJlc291cmNlTW9kdWxlID0gbnVsbDtcbiAgICB0aGlzLkx5bnhBY2Nlc3NpYmlsaXR5TW9kdWxlID0gbnVsbDtcbiAgICB0aGlzLkx5bnhTZXRNb2R1bGUgPSBudWxsO1xuICAgIHRoaXMuX2FwaUxpc3QgPSBudWxsO1xuICAgIHRoaXMuX2ludGVyc2VjdGlvbk9ic2VydmVyTWFuYWdlciA9IG51bGw7XG4gICAgdGhpcy5fZXhwb3N1cmVNYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLl90ZXh0SW5mb01hbmFnZXIgPSBudWxsO1xuICAgIHRoaXMuX2FvcE1hbmFnZXIgPSBudWxsO1xuICAgIHRoaXMuYmVmb3JlUHVibGlzaEV2ZW50ID0gbnVsbDtcbiAgICB0aGlzLnBlcmZvcm1hbmNlID0gbnVsbDtcbiAgICB0aGlzLnNldFRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuc2V0SW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuX2NyZWF0ZVJlYWRhYmxlU3RyZWFtQ2xhc3MgPSBudWxsO1xuICAgIHRoaXMuX1JlYWRhYmxlU3RyZWFtQ2xhc3MgPSBudWxsO1xuICAgIHRoaXMuZGF0YVR5cGVTZXQgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dFByb3h5VHlwZVRvTWV0aG9kID0gbnVsbDtcbiAgICB0aGlzLnJlbW92ZUludGVybmFsRXZlbnRMaXN0ZW5lcnNDYWxsYmFja3MgPSBbXTtcbiAgfVxuXG4gIHJlZ2lzdGVyTW9kdWxlKG5hbWU6IHN0cmluZywgbW9kdWxlOiBvYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXp5Q2FsbGFibGVNb2R1bGVzW25hbWVdID0gbW9kdWxlO1xuICB9XG5cbiAgZ2V0SlNNb2R1bGU8TW9kdWxlID0gdW5rbm93bj4obmFtZTogc3RyaW5nKTogTW9kdWxlIHtcbiAgICByZXR1cm4gdGhpcy5fbGF6eUNhbGxhYmxlTW9kdWxlc1tuYW1lXTtcbiAgfVxuXG4gIHNldHVwSlNNb2R1bGUoKSB7XG4gICAgdGhpcy5yZWdpc3Rlck1vZHVsZSgnR2xvYmFsRXZlbnRFbWl0dGVyJywgdGhpcy5HbG9iYWxFdmVudEVtaXR0ZXIpO1xuICAgIHRoaXMucmVnaXN0ZXJNb2R1bGUoJ1JlcG9ydGVyJywgdGhpcy5SZXBvcnRlcik7XG4gIH1cblxuICBzZXR1cEZldGNoQVBJKFByb21pc2U6IFByb21pc2VDb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuX2NyZWF0ZVJlYWRhYmxlU3RyZWFtQ2xhc3MgPSBjcmVhdGVSZWFkYWJsZVN0cmVhbUNsYXNzO1xuICAgIHRoaXMuX1JlYWRhYmxlU3RyZWFtQ2xhc3MgPSBjcmVhdGVSZWFkYWJsZVN0cmVhbUNsYXNzKFByb21pc2UpO1xuICAgIGNvbnN0IGVuYWJsZVJlYWRhYmxlU3RyZWFtTWVtb3J5Rml4ID1cbiAgICAgIHRoaXMucGFyYW1zPy5wYWdlQ29uZmlnU3Vic2V0Py5lbmFibGVSZWFkYWJsZVN0cmVhbU1lbW9yeUZpeCA/PyB0cnVlO1xuICAgIGlmICghbmF0aXZlR2xvYmFsLlJlcXVlc3QpIHtcbiAgICAgIG5hdGl2ZUdsb2JhbC5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgICB9XG4gICAgaWYgKCFuYXRpdmVHbG9iYWwuUmVzcG9uc2UpIHtcbiAgICAgIG5hdGl2ZUdsb2JhbC5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICAgIH1cbiAgICBpZiAoIW5hdGl2ZUdsb2JhbC5SZWFkYWJsZVN0cmVhbSkge1xuICAgICAgaWYgKCFlbmFibGVSZWFkYWJsZVN0cmVhbU1lbW9yeUZpeCkge1xuICAgICAgICBuYXRpdmVHbG9iYWwuUmVhZGFibGVTdHJlYW0gPSB0aGlzLl9SZWFkYWJsZVN0cmVhbUNsYXNzO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBHbG9iYWwgUmVhZGFibGVTdHJlYW0gc3RpbGwgY2FjaGVzXG4gICAgICAvLyBPYmplY3QudmFsdWVzKG5hdGl2ZUdsb2JhbC5tdWx0aUFwcHMpWzBdLmx5bnguUHJvbWlzZSBvbiB0aGUgZmlyc3RcbiAgICAgIC8vIGBuZXcgUmVhZGFibGVTdHJlYW0oKWAgY2FsbC4gVGhpcyBpcyBhIHNob3J0LXRlcm0gbWl0aWdhdGlvbiBhbmQgZG9lc1xuICAgICAgLy8gbm90IGd1YXJhbnRlZSBiaW5kaW5nIHRvIHRoZSBjdXJyZW50IGNhbGxlciBhcHAuIFdoZW4gbXVsdGlwbGUgYXBwc1xuICAgICAgLy8gc2hhcmUgb25lIGNvbnRleHQsIHRoZSBnbG9iYWwgQVBJIG1heSBzdGlsbCBiaW5kIHRvIHRoZSBmaXJzdCBhcHAuXG4gICAgICAvLyBUaGUgbG9uZy10ZXJtIG1pZ3JhdGlvbiB0YXJnZXQgaXMgYGx5bnguUmVhZGFibGVTdHJlYW1gLlxuICAgICAgbGV0IGZpeGVkUHJvbWlzZTogUHJvbWlzZUNvbnN0cnVjdG9yIHwgdW5kZWZpbmVkO1xuICAgICAgbmF0aXZlR2xvYmFsLlJlYWRhYmxlU3RyZWFtID0gY3JlYXRlUmVhZGFibGVTdHJlYW1DbGFzcyh7XG4gICAgICAgIGdldFByb21pc2U6ICgpID0+IHtcbiAgICAgICAgICBpZiAoZml4ZWRQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZml4ZWRQcm9taXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhcHAgPSBPYmplY3QudmFsdWVzKG5hdGl2ZUdsb2JhbC5tdWx0aUFwcHMpWzBdIGFzXG4gICAgICAgICAgICB8IEJhc2VBcHBcbiAgICAgICAgICAgIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGlmICghYXBwPy5seW54Py5Qcm9taXNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWRhYmxlU3RyZWFtIFByb21pc2UgaXMgdW5hdmFpbGFibGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZml4ZWRQcm9taXNlID0gYXBwLmx5bnguUHJvbWlzZTtcbiAgICAgICAgICByZXR1cm4gZml4ZWRQcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX2ludGVybmFsX19jYWxsTHlueFNldE1vZHVsZShmdW5jdGlvbk5hbWU6IHN0cmluZywgcGF5bG9hZDogYW55W10pIHtcbiAgICBjb25zdCBuYXRpdmVGdW5jdGlvbiA9IHRoaXMuTHlueFNldE1vZHVsZVtmdW5jdGlvbk5hbWVdO1xuICAgIGlmIChuYXRpdmVGdW5jdGlvbikge1xuICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwobmF0aXZlRnVuY3Rpb24sIHVuZGVmaW5lZCwgcGF5bG9hZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG5hdGl2ZUFwcCgpOiBOYXRpdmVBcHBQcm94eSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdGl2ZUFwcDtcbiAgfVxuXG4gIHNldCBuYXRpdmVBcHAobmF0aXZlQXBwOiBOYXRpdmVBcHBQcm94eSkge1xuICAgIHRoaXMuX25hdGl2ZUFwcCA9IG5hdGl2ZUFwcDtcbiAgfVxuXG4gIGdldCBwYXJhbXMoKTogbG9hZENhcmRQYXJhbXMge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbXM7XG4gIH1cblxuICBzZXQgYXBpTGlzdChhcGk6IG9iamVjdCkge1xuICAgIHRoaXMuX2FwaUxpc3QgPSB7IC4uLnRoaXMuX2FwaUxpc3QsIC4uLmFwaSB9O1xuICB9XG5cbiAgc2V0dXBJbnRlcnNlY3Rpb25BcGkoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuX2FwaUxpc3RbJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJ10gPSBmdW5jdGlvbiAoXG4gICAgICBjb21wb25lbnQ6IHsgY29tcG9uZW50SWQ6IHN0cmluZyB9ICYgeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICAgIG9wdGlvbnM/OiB7XG4gICAgICAgIHRocmVzaG9sZHM/OiBbXTtcbiAgICAgICAgaW5pdGlhbFJhdGlvPzogbnVtYmVyO1xuICAgICAgICBvYnNlcnZlQWxsPzogYm9vbGVhbjtcbiAgICAgIH1cbiAgICApIHtcbiAgICAgIGNvbnN0IHsgY29tcG9uZW50SWQgPSAnJyB9ID0gY29tcG9uZW50O1xuICAgICAgcmV0dXJuIHNlbGYuX2ludGVyc2VjdGlvbk9ic2VydmVyTWFuYWdlci5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgICAgY29tcG9uZW50SWQsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgfTtcbiAgICB0aGlzLmx5bnhbJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJ10gPSB0aGlzLl9hcGlMaXN0W1xuICAgICAgJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJ1xuICAgIF0gYXMgQ3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJGdW5jO1xuICB9XG5cbiAgb25JbnRlcnNlY3Rpb25PYnNlcnZlckV2ZW50KFxuICAgIG9ic2VydmVySWQ6IG51bWJlcixcbiAgICBjYWxsYmFja0lkOiBudW1iZXIsXG4gICAgZGF0YTogUmVjb3JkPGFueSwgYW55PlxuICApOiB2b2lkIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMuX2ludGVyc2VjdGlvbk9ic2VydmVyTWFuYWdlci5nZXRPYnNlcnZlcihvYnNlcnZlcklkKTtcbiAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLmludm9rZUNhbGxiYWNrKGNhbGxiYWNrSWQsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwR2V0VGV4dEluZm9BcGkgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5fYXBpTGlzdFsnZ2V0VGV4dEluZm8nXSA9IChcbiAgICAgIHRleHQ6IFN0cmluZyxcbiAgICAgIG9wdGlvbnM/OiBUZXh0SW5mb1xuICAgICk6IFRleHRNZXRyaWNzID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl90ZXh0SW5mb01hbmFnZXIuZ2V0VGV4dEluZm8odGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgfTtcblxuICBzZXR1cEV4cG9zdXJlQXBpID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuX2FwaUxpc3RbJ3Jlc3VtZUV4cG9zdXJlJ10gPSAoKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9leHBvc3VyZU1hbmFnZXIucmVzdW1lRXhwb3N1cmUoKTtcbiAgICB9O1xuICAgIHRoaXMuX2FwaUxpc3RbJ3N0b3BFeHBvc3VyZSddID0gKG9wdGlvbnM/OiB7XG4gICAgICBzZW5kRXZlbnQ/OiBib29sZWFuO1xuICAgIH0pOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuX2V4cG9zdXJlTWFuYWdlci5zdG9wRXhwb3N1cmUoXG4gICAgICAgIG9wdGlvbnMgPyBvcHRpb25zIDogeyBzZW5kRXZlbnQ6IHRydWUgfVxuICAgICAgKTtcbiAgICB9O1xuICAgIHRoaXMuX2FwaUxpc3RbJ3NldE9ic2VydmVyRnJhbWVSYXRlJ10gPSAob3B0aW9ucz86IHtcbiAgICAgIGZvclBhZ2VSZWN0PzogbnVtYmVyO1xuICAgICAgZm9yRXhwb3N1cmVDaGVjaz86IG51bWJlcjtcbiAgICB9KTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9leHBvc3VyZU1hbmFnZXIuc2V0T2JzZXJ2ZXJGcmFtZVJhdGUoXG4gICAgICAgIG9wdGlvbnMgPyBvcHRpb25zIDogeyBmb3JQYWdlUmVjdDogMjAsIGZvckV4cG9zdXJlQ2hlY2s6IDIwIH1cbiAgICAgICk7XG4gICAgfTtcbiAgfTtcblxuICByZXBvcnRFcnJvcihlcnJvcjogRXJyb3IpIHtcbiAgICByZXR1cm4gdGhpcy5seW54LnJlcG9ydEVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKFxuICAgIGVycm9yOiBCYXNlRXJyb3IsXG4gICAgb3JpZ2luRXJyb3I/OiBFcnJvcixcbiAgICBlcnJvckxldmVsPzogTHlueEVycm9yTGV2ZWxcbiAgKSB7XG4gICAgcmVwb3J0RXJyb3IoZXJyb3IsIHRoaXMubmF0aXZlQXBwLCB7XG4gICAgICBvcmlnaW5FcnJvcixcbiAgICAgIGdldFNvdXJjZU1hcFJlbGVhc2U6IHRoaXMuZ2V0U291cmNlTWFwUmVsZWFzZSxcbiAgICAgIGVycm9yTGV2ZWw6IGVycm9yTGV2ZWwsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVVc2VyRXJyb3IoXG4gICAgZXJyb3I/OiBFcnJvcixcbiAgICBvdXRlckNhdXNlPzogdW5rbm93bixcbiAgICBlcnJvckxldmVsPzogTHlueEVycm9yTGV2ZWwsXG4gICAgcHJlZml4Pzogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGxldCB7IG1lc3NhZ2UsIG5hbWUsIHN0YWNrLCBjYXVzZSB9ID0gZXJyb3IgfHwge307XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBlcnJvciBtZXNzYWdlIGluIGVycm9yLCBtZWFucyB0aGF0IGl0IGlzIG5vdCBhbiBlcnJvci1saWtlIG9iamVjdC5cbiAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIG5ldyBFcnJvciB1c2luZyBKU09OLnN0cmluZ2lmeVxuICAgICAgKHsgbWVzc2FnZSwgbmFtZSwgc3RhY2sgfSA9IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShlcnJvcikpKTtcbiAgICB9XG4gICAgY2F1c2UgPSBjYXVzZSA/PyBvdXRlckNhdXNlO1xuICAgIGNvbnN0IHVzZXJFcnJvciA9IG5ldyBVc2VyUnVudGltZUVycm9yKFxuICAgICAgcHJlZml4ID8gYCR7cHJlZml4fSAke25hbWV9OiAke21lc3NhZ2V9YCA6IGAke25hbWV9OiAke21lc3NhZ2V9YCxcbiAgICAgIHN0YWNrXG4gICAgKTtcbiAgICB1c2VyRXJyb3IuY2F1c2UgPSBjYXVzZTtcbiAgICB0aGlzLmhhbmRsZUVycm9yKHVzZXJFcnJvciwgZXJyb3IsIGVycm9yTGV2ZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgaGFuZGxlSW50ZXJuYWxFcnJvcihlcnJvcj86IEVycm9yLCBjYXVzZT86IHVua25vd24pOiB2b2lkIHtcbiAgICBsZXQgeyBtZXNzYWdlLCBuYW1lLCBzdGFjayB9ID0gZXJyb3IgfHwge307XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBlcnJvciBtZXNzYWdlIGluIGVycm9yLCBtZWFucyB0aGF0IGl0IGlzIG5vdCBhbiBlcnJvci1saWtlIG9iamVjdC5cbiAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIG5ldyBFcnJvciB1c2luZyBKU09OLnN0cmluZ2lmeVxuICAgICAgKHsgbWVzc2FnZSwgbmFtZSwgc3RhY2sgfSA9IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShlcnJvcikpKTtcbiAgICB9XG4gICAgY29uc3QgaW50ZXJuYWxFcnJvciA9IG5ldyBJbnRlcm5hbFJ1bnRpbWVFcnJvcihcbiAgICAgIGAke25hbWV9OiAke21lc3NhZ2V9YCxcbiAgICAgIHN0YWNrXG4gICAgKTtcbiAgICBpbnRlcm5hbEVycm9yLmNhdXNlID0gY2F1c2U7XG4gICAgdGhpcy5oYW5kbGVFcnJvcihpbnRlcm5hbEVycm9yLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgZXh0ZXJuYWwgZW52IHdpdGggYm9vbGVhbiB2YWx1ZS5cbiAgICogVGhlIHNhbWUgYXMgYGJhc2U6Okx5bnhFbnY6OkdldEluc3RhbmNlKCkuR2V0Qm9vbEVudmBcbiAgICpcbiAgICogQHBhcmFtIHtFbnZLZXl9IGtleSBUaGUge0BsaW5rIEVudktleX0sIHNob3VsZCBiZSBwbGFjZWQgaW4gYGx5bnhfZW52LmhgXG4gICAqL1xuICBnZXRCb29sRW52KGtleTogRW52S2V5KTogYm9vbGVhbiB7XG4gICAgY29uc3QgZW52ID0gdGhpcy5uYXRpdmVBcHAuZ2V0RW52KGtleSk7XG4gICAgcmV0dXJuIGVudj8udG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAc3RhdGljXG4gICAqIFRoZSBMeW54R3JvdXAgbGV2ZWwgY2FjaGUgZm9yIHJlcXVpcmVNb2R1bGUgLCB7QGxpbmsgcmVnaXN0ZXJNb2R1bGV9XG4gICAqL1xuICBzdGF0aWMgXyRmYWN0b3J5Q2FjaGU6IFJlY29yZDxcbiAgICBzdHJpbmcsXG4gICAgPFQ+KGluamVjdGVkOiB7IHR0OiBCYXNlQXBwIH0pID0+IFRcbiAgPiA9IHt9O1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHN0YXRpY1xuICAgKiBUaGUgTHlueEdyb3VwIGxldmVsIGNhY2hlIGZvciBsb2FkU2NyaXB0XG4gICAqL1xuICBzdGF0aWMgXyRsb2FkU2NyaXB0Q2FjaGU6IFJlY29yZDxzdHJpbmcsIEJ1bmRsZUluaXRSZXR1cm5PYmogfCBGdW5jdGlvbj4gPSB7fTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEV4ZWN1dGUgdGhlIGxvYWRlZCBKUyBtb2R1bGUgLCAgQ2FsbGVkIGJ5IHtAbGluayByZXF1aXJlTW9kdWxlfSAmIHtAbGluayByZXF1aXJlTW9kdWxlQXN5bmN9XG4gICAqIEB0aHJvd3Mge1VzZXJSdW50aW1lRXJyb3J9IHdoZW4gbG9hZGluZyBvciBldmFsdWF0aW5nIGZhaWxlZFxuICAgKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiBleGVjdXRpbmcgZmFpbGVkXG4gICAqL1xuICBwcml2YXRlIF8kZXhlY3V0ZUluaXQ8VD4oXG4gICAgZXhwb3J0czogUmV0dXJuVHlwZTxOYXRpdmVBcHBbJ2xvYWRTY3JpcHQnXT4sXG4gICAge1xuICAgICAgcGF0aCxcbiAgICAgIGVudHJ5TmFtZSxcbiAgICAgIHNob3VsZENhY2hlRmFjdG9yeSA9IHRydWUsXG4gICAgICBjYWNoZUtleSxcbiAgICB9OiB7XG4gICAgICBwYXRoOiBzdHJpbmc7XG4gICAgICBlbnRyeU5hbWU/OiBzdHJpbmc7XG4gICAgICBzaG91bGRDYWNoZUZhY3Rvcnk/OiBib29sZWFuO1xuICAgICAgY2FjaGVLZXk/OiBzdHJpbmc7XG4gICAgfVxuICApOiBUIHtcbiAgICBsZXQgZmFjdG9yeTogPFQ+KGluamVjdGVkOiB7IHR0OiBCYXNlQXBwIH0pID0+IFQ7XG4gICAgaWYgKGV4cG9ydHMgJiYgZXhwb3J0cy5pbml0KSB7XG4gICAgICAvLyBhcHAtc2VydmljZS5qcyBhbmQgY29tbW9uLWNodW5rLmpzIHdpdGggbmV3IGZvcm1hdCB3aWxsIGhhdmUgaW5pdCBmdW5jdGlvblxuICAgICAgZmFjdG9yeSA9IGV4cG9ydHMuaW5pdC5iaW5kKGV4cG9ydHMpO1xuICAgIH0gZWxzZSBpZiAobmF0aXZlR2xvYmFsLmluaXRCdW5kbGUpIHtcbiAgICAgIC8vIGNvbW1vbi1jaHVuay5qcyB3aXRoIG9sZCBmb3JtYXQgd2lsbCBzZXQgZ2xvYmFsLmluaXRCdW5kbGUgZHVyaW5nIGxvYWRTY3JpcHRcbiAgICAgIGZhY3RvcnkgPSBuYXRpdmVHbG9iYWwuaW5pdEJ1bmRsZS5iaW5kKG5hdGl2ZUdsb2JhbC5pbml0QnVuZGxlKTtcbiAgICAgIGRlbGV0ZSBuYXRpdmVHbG9iYWwuaW5pdEJ1bmRsZTsgLy8gc2hvdWxkIGRlbGV0ZSBpbml0QnVuZGxlIGFmdGVyIHVzZWRcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm8gZmFjdG9yeSBmdW5jdGlvbiBmb3VuZCwgcHJvYmFibHkgbG9hZFNjcmlwdCBmYWlsZWQuXG4gICAgICAvLyBUT0RPKHdhbmdxaW5neXUpOiBkbyBub3QgdGhyb3cgdGhpcyB3aGVuIGBuYXRpdmVBcHAubG9hZFNjcmlwdGAgc3VwcG9ydCBleGNlcHRpb25zXG4gICAgICB0aHJvdyBuZXcgVXNlclJ1bnRpbWVFcnJvcihcbiAgICAgICAgYGxvYWQgZmFpbGVkLiBwYXRoOiR7cGF0aH0sZW50cnlOYW1lOiR7ZW50cnlOYW1lfWBcbiAgICAgICk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0aGlzLmx5bngucGVyZm9ybWFuY2UucHJvZmlsZVN0YXJ0KFRyYWNlRXZlbnREZWYuRVhFQ1VURV9MT0FERURfU0NSSVBULCB7XG4gICAgICAgIGFyZ3M6IHsgcGF0aCB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXQgPSBmYWN0b3J5PFQ+KHsgdHQ6IHRoaXMgfSk7XG5cbiAgICAgIC8vIEhlcmUgbWVhbnMgdGhhdCBubyBlcnJvciBvY2N1cnJlZCB3aGVuIGV4ZWN1dGluZy5cbiAgICAgIC8vIE9ubHkgdGhlbiB3ZSBjYWNoZSB0aGUgZmFjdG9yeS5cbiAgICAgIGlmIChzaG91bGRDYWNoZUZhY3RvcnkpIHtcbiAgICAgICAgQmFzZUFwcC5fJGZhY3RvcnlDYWNoZVtwYXRoXSA9IGZhY3Rvcnk7XG4gICAgICB9XG4gICAgICBhZGRMb2FkU2NyaXB0Q2FjaGUoY2FjaGVLZXksIGV4cG9ydHMpO1xuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmx5bngucGVyZm9ybWFuY2UucHJvZmlsZUVuZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogVXNlZCB0byBsb2FkIHRoZSBqc29uIG1vZHVsZS4gQ2FsbGVkIGJ5IHtAbGluayByZXF1aXJlTW9kdWxlfSAmIHtAbGluayByZXF1aXJlTW9kdWxlQXN5bmN9XG4gICAqIEBwYXJhbSBjb250ZW50XG4gICAqIEBwYXJhbSBwYXRoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF8kZXhlY3V0ZUpTT048VD4oXG4gICAgY29udGVudDogUmV0dXJuVHlwZTxOYXRpdmVBcHBbJ3JlYWRTY3JpcHQnXT4sXG4gICAgeyBwYXRoIH06IHsgcGF0aDogc3RyaW5nOyBlbnRyeU5hbWU/OiBzdHJpbmcgfVxuICApOiBUIHtcbiAgICBjb25zdCByZXQgPSBKU09OLnBhcnNlKGNvbnRlbnQpO1xuICAgIGNvbnN0IGluaXQgPSAoKSA9PiByZXQ7XG4gICAgQmFzZUFwcC5fJGZhY3RvcnlDYWNoZVtwYXRoXSA9IGluaXQ7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHJlcXVpcmVNb2R1bGU8VD4oXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGVudHJ5TmFtZT86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyB0aW1lb3V0OiBudW1iZXIgfVxuICApOiBUIHtcbiAgICBjb25zdCBpbml0ID0gQmFzZUFwcC5fJGZhY3RvcnlDYWNoZVtwYXRoXTtcbiAgICBpZiAodGhpcy5zaG91bGRVc2VNb2R1bGVDYWNoZSgpICYmIGluaXQpIHtcbiAgICAgIC8vIGNhY2hlIGhpdFxuICAgICAgcmV0dXJuIHRoaXMuXyRleGVjdXRlSW5pdDxUPih7IGluaXQgfSwgeyBwYXRoLCBlbnRyeU5hbWUgfSk7XG4gICAgfVxuXG4gICAgLy8gY2FjaGUgbWlzc1xuICAgIGlmIChwYXRoLnNwbGl0KCc/JylbMF0uZW5kc1dpdGgoJy5qc29uJykpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLm5hdGl2ZUFwcC5yZWFkU2NyaXB0KHBhdGgsIHtcbiAgICAgICAgZHluYW1pY0NvbXBvbmVudEVudHJ5OiBlbnRyeU5hbWUgPz8gREVGQVVMVF9FTlRSWSxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuXyRleGVjdXRlSlNPTihjb250ZW50LCB7IHBhdGgsIGVudHJ5TmFtZSB9KTtcbiAgICB9XG4gICAgY29uc3QgY2FjaGVLZXkgPSB0aGlzLmdldExvYWRTY3JpcHRDYWNoZUtleShcbiAgICAgIHBhdGgsXG4gICAgICBlbnRyeU5hbWUsXG4gICAgICB0aGlzLnBhcmFtcy5zcmNOYW1lXG4gICAgKTtcbiAgICBjb25zdCBjYWNoZSA9IHRyeUdldExvYWRTY3JpcHRDYWNoZShjYWNoZUtleSk7XG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICAvLyBjYWNoZSBoaXRcbiAgICAgIHJldHVybiB0aGlzLl8kZXhlY3V0ZUluaXQ8VD4oY2FjaGUgYXMgQnVuZGxlSW5pdFJldHVybk9iaiwge1xuICAgICAgICBwYXRoLFxuICAgICAgICBlbnRyeU5hbWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhwb3J0cyA9IHRoaXMubmF0aXZlQXBwLmxvYWRTY3JpcHQocGF0aCwgZW50cnlOYW1lLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzLl8kZXhlY3V0ZUluaXQ8VD4oZXhwb3J0cywgeyBwYXRoLCBlbnRyeU5hbWUsIGNhY2hlS2V5IH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVpcmVNb2R1bGVBc3luYzxUPihcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IChlcnJvcj86IEVycm9yLCBleHBvcnRzPzogVCkgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBpbml0ID0gQmFzZUFwcC5fJGZhY3RvcnlDYWNoZVtwYXRoXTtcbiAgICBpZiAodGhpcy5zaG91bGRVc2VNb2R1bGVDYWNoZSgpICYmIGluaXQpIHtcbiAgICAgIC8vIGNhY2hlIGhpdFxuICAgICAgY2FsbGJhY2sobnVsbCwgdGhpcy5fJGV4ZWN1dGVJbml0PFQ+KHsgaW5pdCB9LCB7IHBhdGggfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBjYWNoZSBtaXNzXG4gICAgaWYgKHBhdGguc3BsaXQoJz8nKVswXS5lbmRzV2l0aCgnLmpzb24nKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMubmF0aXZlQXBwLnJlYWRTY3JpcHQocGF0aCk7XG4gICAgICAgIGNvbnN0IHJldCA9IHRoaXMuXyRleGVjdXRlSlNPTjxUPihjb250ZW50LCB7IHBhdGggfSk7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJldCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdldCBjYWNoZSBmaXJzdFxuICAgIGNvbnN0IGNhY2hlS2V5ID0gdGhpcy5nZXRMb2FkU2NyaXB0Q2FjaGVLZXkocGF0aCwgdGhpcy5wYXJhbXMuc3JjTmFtZSk7XG4gICAgY29uc3QgY2FjaGUgPSB0cnlHZXRMb2FkU2NyaXB0Q2FjaGUoY2FjaGVLZXkpO1xuICAgIGlmIChjYWNoZSkge1xuICAgICAgLy8gY2FjaGUgaGl0XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLl8kZXhlY3V0ZUluaXQoY2FjaGUgYXMgQnVuZGxlSW5pdFJldHVybk9iaiwgeyBwYXRoIH0pXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBDcmVhdGUgYW4gZXJyb3IgaGVyZSB0byBtYWtlIHN1cmUgdGhlIHN0YWNrIGNvbnRhaW5zXG4gICAgLy8gbHlueC5yZXF1aXJlTW9kdWxlQXN5bmMgYW5kIGl0J3MgY2FsbGVyLlxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCk7XG4gICAgdGhpcy5uYXRpdmVBcHAubG9hZFNjcmlwdEFzeW5jKHBhdGgsIChtZXNzYWdlLCBleHBvcnRzKTogdm9pZCA9PiB7XG4gICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICBlcnJvci5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgLy8gT25seSBvdmVycmlkZSBlcnJvci5tZXNzYWdlIHNvIHRoYXQgd2UgY291bGQgcHJpdmlkZSBzdGFjayB3aXRoXG4gICAgICAgIC8vIGx5bngucmVxdWlyZU1vZHVsZUFzeW5jIGFuZCBpdCdzIGNhbGxlci5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHRoaXMuXyRleGVjdXRlSW5pdChleHBvcnRzLCB7IHBhdGgsIGNhY2hlS2V5IH0pKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVxdWlyZShwYXRoOiBzdHJpbmcsIHBhcmFtcz86IHJlcXVpcmVQYXJhbU9iaikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncmVxdWlyZSBhcmdzIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB9XG4gICAgY29uc3QgZW50cnlOYW1lID1cbiAgICAgIHBhcmFtcyAmJiBwYXJhbXMuZHluYW1pY0NvbXBvbmVudEVudHJ5XG4gICAgICAgID8gcGFyYW1zLmR5bmFtaWNDb21wb25lbnRFbnRyeVxuICAgICAgICA6IERFRkFVTFRfRU5UUlk7XG4gICAgaWYgKCF0aGF0Lm1vZHVsZXNbZW50cnlOYW1lXSkge1xuICAgICAgdGhhdC5tb2R1bGVzW2VudHJ5TmFtZV0gPSB7fTtcbiAgICB9XG4gICAgbGV0IG1vZHVsZSA9IHRoYXQubW9kdWxlc1tlbnRyeU5hbWVdW3BhdGhdO1xuICAgIGlmICghbW9kdWxlKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IHR0ID0gdGhhdDtcbiAgICAgICAgY29uc3QganNDb250ZW50ID0gdGhhdC5fbmF0aXZlQXBwLnJlYWRTY3JpcHQocGF0aCwge1xuICAgICAgICAgIGR5bmFtaWNDb21wb25lbnRFbnRyeTogZW50cnlOYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcbiAgICAgICAgZXZhbChqc0NvbnRlbnQpO1xuICAgICAgICBtb2R1bGUgPSB0aGF0Lm1vZHVsZXNbZW50cnlOYW1lXVtwYXRoXTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihcbiAgICAgICAgICBuZXcgVXNlclJ1bnRpbWVFcnJvcihcbiAgICAgICAgICAgIGBldmFsIHVzZXI6ICR7dGhhdC5fbmF0aXZlQXBwLmlkfSBlcnJvcjogJHtlLm1lc3NhZ2V9YCxcbiAgICAgICAgICAgIGUuc3RhY2tcbiAgICAgICAgICApLFxuICAgICAgICAgIGVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGF0Lm1vZHVsZXNbZW50cnlOYW1lXVtwYXRoXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYG1vZHVsZSAke3BhdGh9IGluICR7ZW50cnlOYW1lfSBpcyBub3QgZGVmaW5lZCBpbiBjYXJkOiAke3RoYXQuX25hdGl2ZUFwcC5pZH1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFtb2R1bGUuaGFzUnVuKSB7XG4gICAgICBjb25zdCB7IGZhY3RvcnkgfSA9IG1vZHVsZTtcbiAgICAgIGNvbnN0IF9tb2R1bGUgPSB7XG4gICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgfTtcbiAgICAgIGxldCByZXM7XG5cbiAgICAgIG1vZHVsZS5oYXNSdW4gPSB0cnVlO1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfbW9kdWxlLmV4cG9ydHM7XG4gICAgICBpZiAodHlwZW9mIGZhY3RvcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgaW5SZXF1aXJlQ29weSA9IGluUmVxdWlyZS5jYWxsKHRoYXQsIHBhdGgpO1xuICAgICAgICBjb25zdCB0dCA9IHRoYXQ7XG4gICAgICAgIHJlcyA9IGZhY3RvcnkoXG4gICAgICAgICAgaW5SZXF1aXJlQ29weSxcbiAgICAgICAgICBfbW9kdWxlLFxuICAgICAgICAgIF9tb2R1bGUuZXhwb3J0cyxcbiAgICAgICAgICB0aGF0LkNhcmQuYmluZCh0dCksXG4gICAgICAgICAgdGhhdC5zZXRUaW1lb3V0LFxuICAgICAgICAgIHRoYXQuc2V0SW50ZXJ2YWwsXG4gICAgICAgICAgdGhhdC5jbGVhckludGVydmFsLFxuICAgICAgICAgIHRoYXQuY2xlYXJUaW1lb3V0LFxuICAgICAgICAgIHRoYXQuTmF0aXZlTW9kdWxlcyxcbiAgICAgICAgICB0aGF0Ll9hcGlMaXN0LFxuICAgICAgICAgIHRoYXQuc2hhcmVkQ29uc29sZSxcbiAgICAgICAgICB0aGF0LkNvbXBvbmVudC5iaW5kKHR0KSxcbiAgICAgICAgICBwYXJhbXM/LlJlYWN0THlueCxcbiAgICAgICAgICB0aGF0Lm5hdGl2ZUFwcElkLFxuICAgICAgICAgIHRoYXQuQmVoYXZpb3IuYmluZCh0dCksXG4gICAgICAgICAgTHlueEpTQkksXG4gICAgICAgICAgdGhhdC5seW54LFxuICAgICAgICAgIHVuZGVmaW5lZCwgLy8gd2luZG93XG4gICAgICAgICAgdW5kZWZpbmVkLCAvLyBkb2N1bWVudFxuICAgICAgICAgIHVuZGVmaW5lZCwgLy8gZnJhbWVzXG4gICAgICAgICAgdW5kZWZpbmVkLCAvLyBzZWxmXG4gICAgICAgICAgdW5kZWZpbmVkLCAvLyBsb2NhdGlvblxuICAgICAgICAgIHVuZGVmaW5lZCwgLy8gbmF2aWdhdG9yXG4gICAgICAgICAgdW5kZWZpbmVkLCAvLyBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICB1bmRlZmluZWQsIC8vIGhpc3RvcnlcbiAgICAgICAgICB1bmRlZmluZWQsIC8vIENhY2hlc1xuICAgICAgICAgIHVuZGVmaW5lZCwgLy8gc2NyZWVuXG4gICAgICAgICAgdW5kZWZpbmVkLCAvLyBhbGVydFxuICAgICAgICAgIHVuZGVmaW5lZCwgLy8gY29uZmlybVxuICAgICAgICAgIHVuZGVmaW5lZCwgLy8gcHJvbXB0XG4gICAgICAgICAgdGhhdC5seW54LmZldGNoLCAvLyBmZXRjaFxuICAgICAgICAgIHVuZGVmaW5lZCwgLy8gWE1MSHR0cFJlcXVlc3RcbiAgICAgICAgICB1bmRlZmluZWQsIC8vIFdlYlNvY2tldFxuICAgICAgICAgIHVuZGVmaW5lZCwgLy8gd2Via2l0XG4gICAgICAgICAgdW5kZWZpbmVkLCAvLyBSZXBvcnRlclxuICAgICAgICAgIHVuZGVmaW5lZCwgLy8gcHJpbnRcbiAgICAgICAgICB1bmRlZmluZWQsIC8vIGdsb2JhbFxuICAgICAgICAgIHRoYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICAgIHRoYXQuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgKTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfbW9kdWxlLmV4cG9ydHMgfHwgcmVzO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICBkZWZpbmUocGF0aDogc3RyaW5nLCBmYWN0b3J5OiBBTURGYWN0b3J5LCBlbnRyeU5hbWU/OiBzdHJpbmcpIHtcbiAgICBlbnRyeU5hbWUgPSBlbnRyeU5hbWUgPyBlbnRyeU5hbWUgOiBERUZBVUxUX0VOVFJZO1xuICAgIGlmICghdGhpcy5tb2R1bGVzW2VudHJ5TmFtZV0pIHtcbiAgICAgIHRoaXMubW9kdWxlc1tlbnRyeU5hbWVdID0ge307XG4gICAgfVxuICAgIHRoaXMubW9kdWxlc1tlbnRyeU5hbWVdW3BhdGhdID0ge1xuICAgICAgaGFzUnVuOiBmYWxzZSxcbiAgICAgIGZhY3Rvcnk6IGZhY3RvcnkuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG5cbiAgbG9hZFNjcmlwdDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBidW5kbGVOYW1lPzogc3RyaW5nOyB1c2VNb2R1bGVXcmFwcGVyPzogYm9vbGVhbiB9XG4gICk6IFQge1xuICAgIGNvbnN0IHsgYnVuZGxlTmFtZSA9IERFRkFVTFRfRU5UUlksIHVzZU1vZHVsZVdyYXBwZXIgPSBmYWxzZSB9ID1cbiAgICAgIG9wdGlvbnMgfHwge307XG4gICAgY29uc3QgY2FjaGVLZXkgPSB0aGlzLmdldExvYWRTY3JpcHRDYWNoZUtleShcbiAgICAgIHVybCxcbiAgICAgIGJ1bmRsZU5hbWUsXG4gICAgICB0aGlzLnBhcmFtcy5zcmNOYW1lLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgbGV0IGV4cG9ydHM6IEJ1bmRsZUluaXRSZXR1cm5PYmogfCBvYmplY3QgPSB0cnlHZXRMb2FkU2NyaXB0Q2FjaGUoY2FjaGVLZXkpO1xuICAgIGlmICghdGhpcy5zaG91bGRVc2VNb2R1bGVDYWNoZSgpIHx8ICFleHBvcnRzKSB7XG4gICAgICBsZXQgbWF5YmVFeHBvcnRzID0gdGhpcy5seW54LmdldE5hdGl2ZUx5bngoKS5sb2FkU2NyaXB0KHVybCwgb3B0aW9ucyk7XG4gICAgICBpZiAobWF5YmVFeHBvcnRzICYmIHR5cGVvZiAobWF5YmVFeHBvcnRzIGFzIGFueSkuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBleHBvcnRzID0gbWF5YmVFeHBvcnRzIGFzIEJ1bmRsZUluaXRSZXR1cm5PYmo7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB1c2VNb2R1bGVXcmFwcGVyICYmXG4gICAgICAgIG1heWJlRXhwb3J0cyAmJlxuICAgICAgICB0eXBlb2YgbWF5YmVFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgICApIHtcbiAgICAgICAgZXhwb3J0cyA9IG1heWJlRXhwb3J0cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXliZUV4cG9ydHMgYXMgVDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXNlTW9kdWxlV3JhcHBlcikge1xuICAgICAgY29uc3QgbW9kdWxlID0geyBleHBvcnRzOiB7fSB9O1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgY29uc3QgaW5SZXF1aXJlQ29weSA9IGluUmVxdWlyZS5jYWxsKHRoYXQsIHVybCk7XG4gICAgICBjb25zdCBhcmdzID0gW1xuICAgICAgICBpblJlcXVpcmVDb3B5LFxuICAgICAgICBtb2R1bGUsXG4gICAgICAgIG1vZHVsZS5leHBvcnRzLFxuICAgICAgICB0aGF0LnNldFRpbWVvdXQsXG4gICAgICAgIHRoYXQuc2V0SW50ZXJ2YWwsXG4gICAgICAgIHRoYXQuY2xlYXJJbnRlcnZhbCxcbiAgICAgICAgdGhhdC5jbGVhclRpbWVvdXQsXG4gICAgICAgIHRoYXQuTmF0aXZlTW9kdWxlcyxcbiAgICAgICAgdGhhdC5zaGFyZWRDb25zb2xlLFxuICAgICAgICB0aGF0Lm5hdGl2ZUFwcElkLFxuICAgICAgICBMeW54SlNCSSxcbiAgICAgICAgdGhhdC5seW54LFxuICAgICAgICB0aGF0LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICAgICAgdGhhdC5jYW5jZWxBbmltYXRpb25GcmFtZSxcbiAgICAgICAgdGhhdC5seW54LmZldGNoLFxuICAgICAgXTtcbiAgICAgIChleHBvcnRzIGFzIEZ1bmN0aW9uKS5hcHBseShtb2R1bGUuZXhwb3J0cywgYXJncyk7XG4gICAgICBhZGRMb2FkU2NyaXB0Q2FjaGUoY2FjaGVLZXksIGV4cG9ydHMgYXMgRnVuY3Rpb24pO1xuICAgICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzIGFzIFQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl8kZXhlY3V0ZUluaXQ8VD4oZXhwb3J0cyBhcyBCdW5kbGVJbml0UmV0dXJuT2JqLCB7XG4gICAgICAgIHBhdGg6IHVybCxcbiAgICAgICAgZW50cnlOYW1lOiBvcHRpb25zPy5idW5kbGVOYW1lLFxuICAgICAgICBzaG91bGRDYWNoZUZhY3Rvcnk6IGZhbHNlLFxuICAgICAgICBjYWNoZUtleTogY2FjaGVLZXksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBCeSBOYXRpdmUganNfYXBwXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAcGFyYW0gbW9kdWxlXG4gICAqIEBwYXJhbSBtZXRob2RcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIGNhbGxGdW5jdGlvbihtb2R1bGU6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIGFyZ3M/OiB1bmtub3duW10pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbW9kdWxlTWV0aG9kcyA9IHRoaXMuZ2V0SlNNb2R1bGUobW9kdWxlKTtcbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlTWV0aG9kc1ttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZU1ldGhvZHNbbWV0aG9kXS5hcHBseShtb2R1bGVNZXRob2RzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmhhbmRsZVVzZXJFcnJvcihlLCB7IGJ5OiBgJHttb2R1bGV9LiR7bWV0aG9kfWAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgQnkgTmF0aXZlIGpzX2FwcFxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIHtuZXZlcn0gXyBVc2VkIGZvciBiYWNrd2FyZCBjb21wYXRpYmxpdHksIERPIE5PVCBVU0UuXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIHRoZSBFcnJvciBvYmplY3QgZW1pdCBieSBuYXRpdmUuXG4gICAqL1xuICBvbkFwcEVycm9yKF86IG5ldmVyLCBlcnJvcjogRXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUludGVybmFsRXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgc2F2ZUR5bmFtaWNDb21wb25lbnRFeHBvcnRzKGNvbXBvbmVudFVybCwgbW9kdWxlRXhwb3J0cykge1xuICAgIHRoaXMuZHluYW1pY0NvbXBvbmVudEV4cG9ydHNbY29tcG9uZW50VXJsXSA9IG1vZHVsZUV4cG9ydHM7XG4gIH1cblxuICBnZXREeW5hbWljQ29tcG9uZW50RXhwb3J0cyhjb21wb25lbnRVcmwpIHtcbiAgICByZXR1cm4gdGhpcy5keW5hbWljQ29tcG9uZW50RXhwb3J0c1tjb21wb25lbnRVcmxdO1xuICB9XG5cbiAgQ29tcG9uZW50KC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge31cblxuICBDYXJkKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge31cblxuICBCZWhhdmlvcj8oLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc2V0VGltZW91dFxuICAgKi9cbiAgd3JhcFJlcG9ydChzZXRUaW1lb3V0OiBGdW5jdGlvbiwgZGVzYzogc3RyaW5nKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB3cmFwUmVwb3J0KGZuOiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBSZXBvcnRJbm5lciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoYXQuaGFuZGxlVXNlckVycm9yKGUsIHsgYnk6IGRlc2MgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIFdyYXBUaW1lb3V0KGZuOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pIHtcbiAgICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB1bmRlZmluZWQsIFtcbiAgICAgICAgd3JhcFJlcG9ydChmbiksXG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICBdKTtcbiAgICB9O1xuICB9XG5cbiAgc2V0dXBQcm9taXNlKFxuICAgIHNldFRpbWVvdXQ6IEx5bnhTZXRUaW1lb3V0LFxuICAgIGNsZWFyVGltZW91dDogTHlueENsZWFyVGltZW91dCxcbiAgICBseW54OiBOYXRpdmVMeW54UHJveHlcbiAgKSB7XG4gICAgY29uc3QgUHJvbWlzZUNvbnN0cnVjdG9yID0gZ2V0UHJvbWlzZU1heWJlUG9seWZpbGwoXG4gICAgICBzZXRUaW1lb3V0LFxuICAgICAgKGlkLCByZWFzb246IEVycm9yKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHJlYXNvbikge1xuICAgICAgICAgICAgaWYgKCFyZWFzb24uc3RhY2spIHtcbiAgICAgICAgICAgICAgcmVhc29uID0gbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHJlYXNvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVhc29uLm5hbWUgPSAndW5oYW5kbGVkIHJlamVjdGlvbic7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVVzZXJFcnJvcihyZWFzb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8ganVzdCBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsZWFyVGltZW91dCxcbiAgICAgIGx5bngucXVldWVNaWNyb3Rhc2ssXG4gICAgICB0aGlzLl9wYXJhbXM/LnBhZ2VDb25maWdTdWJzZXQ/LmVuYWJsZU1pY3JvdGFza1Byb21pc2VQb2x5ZmlsbCA/PyBmYWxzZVxuICAgICk7XG4gICAgdGhpcy5yZXNvbHZlZFByb21pc2UgPSBQcm9taXNlQ29uc3RydWN0b3IucmVzb2x2ZSgpO1xuICAgIHJldHVybiBQcm9taXNlQ29uc3RydWN0b3I7XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+XG4gICAgdGhpcy5fbmF0aXZlQXBwLnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG5cbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoYW5pbWF0aW9uSWQ6IG51bWJlcikgPT5cbiAgICB0aGlzLl9uYXRpdmVBcHAuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuXG4gIHByb3RlY3RlZCBhZGRJbnRlcm5hbEV2ZW50TGlzdGVuZXIoXG4gICAgY29udGV4dFByb3h5VHlwZTogQ29udGV4dFByb3h5VHlwZSxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMuY29udGV4dFByb3h5VHlwZVRvTWV0aG9kW2NvbnRleHRQcm94eVR5cGVdKCkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIHR5cGUsXG4gICAgICBsaXN0ZW5lclxuICAgICk7XG4gICAgdGhpcy5yZW1vdmVJbnRlcm5hbEV2ZW50TGlzdGVuZXJzQ2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuICAgICAgdGhpcy5jb250ZXh0UHJveHlUeXBlVG9NZXRob2RbY29udGV4dFByb3h5VHlwZV0oKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICB0eXBlLFxuICAgICAgICBsaXN0ZW5lclxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRJbnRlcm5hbEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICghdGhpcy5jb250ZXh0UHJveHlUeXBlVG9NZXRob2QpIHtcbiAgICAgIHRoaXMuY29udGV4dFByb3h5VHlwZVRvTWV0aG9kID0ge1xuICAgICAgICBbQ29udGV4dFByb3h5VHlwZS5Db3JlQ29udGV4dF06ICgpID0+IHRoaXMubHlueC5nZXRDb3JlQ29udGV4dCgpLFxuICAgICAgICBbQ29udGV4dFByb3h5VHlwZS5EZXZUb29sXTogKCkgPT4gdGhpcy5seW54LmdldERldnRvb2woKSxcbiAgICAgICAgW0NvbnRleHRQcm94eVR5cGUuSlNDb250ZXh0XTogKCkgPT4gdGhpcy5seW54LmdldEpTQ29udGV4dCgpLFxuICAgICAgICBbQ29udGV4dFByb3h5VHlwZS5VSUNvbnRleHRdOiAoKSA9PiB0aGlzLmx5bnguZ2V0VUlDb250ZXh0KCksXG4gICAgICAgIFtDb250ZXh0UHJveHlUeXBlLk5hdGl2ZV06ICgpID0+IHRoaXMubHlueC5nZXROYXRpdmUoKSxcbiAgICAgICAgW0NvbnRleHRQcm94eVR5cGUuRW5naW5lXTogKCkgPT4gdGhpcy5seW54LmdldEVuZ2luZSgpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZEludGVybmFsRXZlbnRMaXN0ZW5lcihcbiAgICAgIENvbnRleHRQcm94eVR5cGUuQ29yZUNvbnRleHQsXG4gICAgICBNZXNzYWdlRXZlbnRUeXBlLk9OX05BVElWRV9BUFBfUkVBRFksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMub25OYXRpdmVBcHBSZWFkeSgpO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5hZGRJbnRlcm5hbEV2ZW50TGlzdGVuZXIoXG4gICAgICBDb250ZXh0UHJveHlUeXBlLkNvcmVDb250ZXh0LFxuICAgICAgTWVzc2FnZUV2ZW50VHlwZS5OT1RJRllfR0xPQkFMX1BST1BTX1VQREFURUQsXG4gICAgICAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUdsb2JhbFByb3BzKGV2ZW50LmRhdGEpO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5hZGRJbnRlcm5hbEV2ZW50TGlzdGVuZXIoXG4gICAgICBDb250ZXh0UHJveHlUeXBlLkNvcmVDb250ZXh0LFxuICAgICAgTWVzc2FnZUV2ZW50VHlwZS5PTl9MSUZFQ1lDTEVfRVZFTlQsXG4gICAgICAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLk9uTGlmZWN5Y2xlRXZlbnQoZXZlbnQuZGF0YSk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLmFkZEludGVybmFsRXZlbnRMaXN0ZW5lcihcbiAgICAgIENvbnRleHRQcm94eVR5cGUuQ29yZUNvbnRleHQsXG4gICAgICBNZXNzYWdlRXZlbnRUeXBlLk9OX0FQUF9GSVJTVF9TQ1JFRU4sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMub25BcHBGaXJzdFNjcmVlbigpO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5hZGRJbnRlcm5hbEV2ZW50TGlzdGVuZXIoXG4gICAgICBDb250ZXh0UHJveHlUeXBlLkNvcmVDb250ZXh0LFxuICAgICAgTWVzc2FnZUV2ZW50VHlwZS5PTl9EWU5BTUlDX0pTX1NPVVJDRV9QUkVQQVJFRCxcbiAgICAgIChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIG5hdGl2ZUdsb2JhbC5sb2FkRHluYW1pY0NvbXBvbmVudCh0aGlzLCBldmVudC5kYXRhKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuYWRkSW50ZXJuYWxFdmVudExpc3RlbmVyKFxuICAgICAgQ29udGV4dFByb3h5VHlwZS5Db3JlQ29udGV4dCxcbiAgICAgIE1lc3NhZ2VFdmVudFR5cGUuT05fQVBQX0VOVEVSX0ZPUkVHUk9VTkQsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMub25BcHBFbnRlckZvcmVncm91bmQoKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuYWRkSW50ZXJuYWxFdmVudExpc3RlbmVyKFxuICAgICAgQ29udGV4dFByb3h5VHlwZS5Db3JlQ29udGV4dCxcbiAgICAgIE1lc3NhZ2VFdmVudFR5cGUuT05fQVBQX0VOVEVSX0JBQ0tHUk9VTkQsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMub25BcHBFbnRlckJhY2tncm91bmQoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3JlbW92ZUludGVybmFsRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5yZW1vdmVJbnRlcm5hbEV2ZW50TGlzdGVuZXJzQ2FsbGJhY2tzLmZvckVhY2goKGYpID0+IHtcbiAgICAgIGYoKTtcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIGdldExvYWRTY3JpcHRDYWNoZUtleShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZW50cnlOYW1lPzogc3RyaW5nLFxuICAgIHRlbXBsYXRlVXJsPzogc3RyaW5nLFxuICAgIGlnbm9yZUNvbmZpZzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKFxuICAgICAgIXRlbXBsYXRlVXJsIHx8XG4gICAgICAhdGhpcy5zaG91bGRVc2VNb2R1bGVDYWNoZSgpIHx8XG4gICAgICAoIXRoaXMucGFyYW1zPy5wYWdlQ29uZmlnU3Vic2V0Py5lbmFibGVSZXVzZUxvYWRTY3JpcHRFeHBvcnRzICYmXG4gICAgICAgICFpZ25vcmVDb25maWcpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgY2FjaGVLZXkgPSAoZW50cnlOYW1lID8gZW50cnlOYW1lIDogREVGQVVMVF9FTlRSWSkgKyBwYXRoO1xuICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoJy8nKSB8fCBwYXRoLnN0YXJ0c1dpdGgoJ2x5bnhfYXNzZXRzJykpIHtcbiAgICAgIGNhY2hlS2V5ID0gdGVtcGxhdGVVcmwgKyBjYWNoZUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlS2V5O1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRVc2VNb2R1bGVDYWNoZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiYgIXRoaXMuaXNNb2R1bGVDYWNoZURpc2FibGVkKCk7XG4gIH1cblxuICBwcml2YXRlIGlzTW9kdWxlQ2FjaGVEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIF9fbHlueERpc2FibGVNb2R1bGVDYWNoZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIF9fbHlueERpc2FibGVNb2R1bGVDYWNoZSA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogIG92ZXJyaWRlIGJ5IHN1YmNsYXNzXG4gICAqIEBwYXJhbSBuZXdEYXRhXG4gICAqL1xuICB1cGRhdGVHbG9iYWxQcm9wcyhuZXdEYXRhOiBvYmplY3QpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqICBvdmVycmlkZSBieSBzdWJjbGFzc1xuICAgKiBAcGFyYW0gbmV3RGF0YVxuICAgKi9cbiAgT25MaWZlY3ljbGVFdmVudChcbiAgICBhcmdzOiBbXG4gICAgICBzdHJpbmcsXG4gICAgICBMaWZlRXZlbnQgfCBMaWZlRXZlbnRbXSxcbiAgICAgIHtcbiAgICAgICAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgaW5pdERhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgZGF0YXNldD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgICAgIGlkPzogc3RyaW5nO1xuICAgICAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgICAgIHBhcmVudElkPzogc3RyaW5nO1xuICAgICAgICBwYXRoPzogc3RyaW5nO1xuICAgICAgICBlbnRyeU5hbWU/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhZGRpdGlvbmFsIGFyZ3VtZW50cyBsaWtlIGZvcmNlRmx1c2ggZm9yIFNTUiBjYW4gYmUgcHV0IGhlcmVcbiAgICAgICAgICovXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHVua25vd247XG4gICAgICB9XG4gICAgXVxuICApOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqICBvdmVycmlkZSBieSBzdWJjbGFzc1xuICAgKiBAcGFyYW0gbmV3RGF0YVxuICAgKi9cbiAgb25OYXRpdmVBcHBSZWFkeSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqICBvdmVycmlkZSBieSBzdWJjbGFzc1xuICAgKiBAcGFyYW0gbmV3RGF0YVxuICAgKi9cbiAgb25BcHBGaXJzdFNjcmVlbigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqICBvdmVycmlkZSBieSBzdWJjbGFzc1xuICAgKiBAcGFyYW0gbmV3RGF0YVxuICAgKi9cbiAgb25BcHBFbnRlckJhY2tncm91bmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiAgb3ZlcnJpZGUgYnkgc3ViY2xhc3NcbiAgICogQHBhcmFtIG5ld0RhdGFcbiAgICovXG4gIG9uQXBwRW50ZXJGb3JlZ3JvdW5kKCk6IHZvaWQge31cblxuICBhYnN0cmFjdCBjcmVhdGVMeW54KFxuICAgIG5hdGl2ZUx5bng6IE5hdGl2ZUx5bnhQcm94eSxcbiAgICBwcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yXG4gICk6IEx5bnhJbXBsO1xufVxuXG5mdW5jdGlvbiBwYXRoUHJvY2VzcyhwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBtYXRjaCA9IHBhdGgubWF0Y2goLyguKilcXC8oW14vXSspPyQvKTtcbiAgcmV0dXJuIG1hdGNoPy5bMV0gPyBtYXRjaFsxXSA6ICcuLyc7XG59XG5cbmZ1bmN0aW9uIGluUmVxdWlyZShwYXRoOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuICBjb25zdCBwd2QgPSBwYXRoUHJvY2VzcyhwYXRoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICBjb25zdCB0ID0gW107XG4gICAgY29uc3QgciA9IGAke3B3ZH0vJHtwYXRofWAuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBpID0gci5sZW5ndGg7XG5cbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcXVpcmUgYXJncyBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIGZvciAobGV0IG8gPSAwOyBvIDwgaTsgKytvKSB7XG4gICAgICBjb25zdCBhID0gcltvXTtcbiAgICAgIGlmIChhICE9PSAnJyAmJiBhICE9PSAnLicpIHtcbiAgICAgICAgaWYgKGEgPT09ICcuLicpIHtcbiAgICAgICAgICBpZiAodC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYGNhbid0IGZpbmQgbW9kdWxlICR7cGF0aH0gaW4gYXBwOiAke3RoYXQuX25hdGl2ZUFwcC5pZH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0LnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG8gKyAxIDwgaSAmJiByW28gKyAxXSA9PT0gJy4uJyA/IG8rKyA6IHQucHVzaChhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgYyA9IHQuam9pbignLycpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cbiAgICByZXR1cm4gYy5lbmRzV2l0aCgnLmpzJykgfHwgKGMgKz0gJy5qcycpLCB0aGF0LnJlcXVpcmUoYyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRyeUdldExvYWRTY3JpcHRDYWNoZShcbiAgY2FjaGVLZXk6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogQnVuZGxlSW5pdFJldHVybk9iaiB8IHVuZGVmaW5lZCB8IEZ1bmN0aW9uIHtcbiAgaWYgKCFjYWNoZUtleSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIEJhc2VBcHAuXyRsb2FkU2NyaXB0Q2FjaGVbY2FjaGVLZXldO1xufVxuXG5mdW5jdGlvbiBhZGRMb2FkU2NyaXB0Q2FjaGUoXG4gIGNhY2hlS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGV4cG9ydHM6IEJ1bmRsZUluaXRSZXR1cm5PYmogfCB1bmRlZmluZWQgfCBGdW5jdGlvblxuKSB7XG4gIGlmICghY2FjaGVLZXkgfHwgIWV4cG9ydHMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgQmFzZUFwcC5fJGxvYWRTY3JpcHRDYWNoZVtjYWNoZUtleV0gPSBleHBvcnRzO1xufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbmltcG9ydCB7IEJhc2VBcHAgfSBmcm9tICcuLi9hcHAnO1xuaW1wb3J0IHsgTHlueCwgTmF0aXZlTHlueFByb3h5IH0gZnJvbSAnLi4vbHlueCc7XG5pbXBvcnQgeyBDYWNoZWRGdW5jdGlvblByb3h5IH0gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBSZWFjdEFwcCBleHRlbmRzIEJhc2VBcHAge1xuICBjcmVhdGVMeW54KFxuICAgIG5hdGl2ZUx5bng6IE5hdGl2ZUx5bnhQcm94eSxcbiAgICBwcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yXG4gICk6IEx5bngge1xuICAgIGNvbnN0IGx5bnhfcHJveHkgPSBDYWNoZWRGdW5jdGlvblByb3h5LmNyZWF0ZShuYXRpdmVMeW54KTtcbiAgICByZXR1cm4gbmV3IEx5bngoXG4gICAgICAoKSA9PiB0aGlzLm5hdGl2ZUFwcCxcbiAgICAgICgpID0+IHRoaXMsXG4gICAgICBwcm9taXNlQ3RvcixcbiAgICAgICgpID0+IGx5bnhfcHJveHlcbiAgICApO1xuICB9XG5cbiAgY2FsbEJlZm9yZVB1Ymxpc2hFdmVudChldmVudERhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9hb3BNYW5hZ2VyLl9iZWZvcmVQdWJsaXNoRXZlbnQuZ2V0RXZlbnRzU2l6ZShldmVudERhdGEudHlwZSkgIT09IDBcbiAgICApIHtcbiAgICAgIGNvbnN0IGNvcHlEYXRhID0geyAuLi5ldmVudERhdGEgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX2FvcE1hbmFnZXIuX2JlZm9yZVB1Ymxpc2hFdmVudC5lbWl0KGNvcHlEYXRhLnR5cGUsIFtjb3B5RGF0YV0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVVzZXJFcnJvcihlLCB7XG4gICAgICAgICAgYnk6ICdjYWxsQmVmb3JlUHVibGlzaEV2ZW50JyxcbiAgICAgICAgICB0eXBlOiAoY29weURhdGEgYXMgYW55KS50eXBlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsICIvLyBDb3B5cmlnaHQgMjAyNCBUaGUgTHlueCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXG5pbXBvcnQgeyBERUZBVUxUX0VOVFJZIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IEFwcFByb3h5UGFyYW1zLCBCYXNlQXBwLCBsb2FkQ2FyZFBhcmFtcywgTmF0aXZlQXBwIH0gZnJvbSAnLi4vYXBwJztcbmltcG9ydCB7IEx5bngsIE5hdGl2ZUx5bnhQcm94eSB9IGZyb20gJy4uL2x5bngnO1xuaW1wb3J0IHsgQ2FjaGVkRnVuY3Rpb25Qcm94eSB9IGZyb20gJy4uL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFuZGFsb25lQXBwIGV4dGVuZHMgQmFzZUFwcCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEFwcFByb3h5UGFyYW1zPE5hdGl2ZUFwcD4sIHBhcmFtczogbG9hZENhcmRQYXJhbXMpIHtcbiAgICBzdXBlcihvcHRpb25zLCB1bmRlZmluZWQpO1xuICAgIHRyeSB7XG4gICAgICBpZiAocGFyYW1zLnNyY05hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubHlueC5yZXF1aXJlTW9kdWxlLmNhY2hlW3BhcmFtcy5zcmNOYW1lXTtcbiAgICAgICAgZGVsZXRlIEJhc2VBcHAuXyRmYWN0b3J5Q2FjaGVbcGFyYW1zLnNyY05hbWVdO1xuICAgICAgICB0aGlzLmx5bngucmVxdWlyZU1vZHVsZShwYXJhbXMuc3JjTmFtZSwgREVGQVVMVF9FTlRSWSk7XG4gICAgICAgIHRoaXMuZGF0YVR5cGVTZXQuYWRkKCd1bmRlZmluZWQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmhhbmRsZVVzZXJFcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVMeW54KG5hdGl2ZUx5bng6IE5hdGl2ZUx5bnhQcm94eSwgcHJvbWlzZTogUHJvbWlzZUNvbnN0cnVjdG9yKTogTHlueCB7XG4gICAgY29uc3QgbHlueF9wcm94eSA9IENhY2hlZEZ1bmN0aW9uUHJveHkuY3JlYXRlKG5hdGl2ZUx5bngpO1xuICAgIHJldHVybiBuZXcgTHlueChcbiAgICAgICgpID0+IHRoaXMubmF0aXZlQXBwLFxuICAgICAgKCkgPT4gdGhpcyxcbiAgICAgIHByb21pc2UsXG4gICAgICAoKSA9PiBseW54X3Byb3h5XG4gICAgKTtcbiAgfVxufVxuIiwgIi8vIENvcHlyaWdodCAyMDI0IFRoZSBMeW54IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cbi8vIHN0YXJ0IGpzIGFwcCwgbmF0aXZlIGhhcyBkZWNvZGUganMgY29kZTtcbi8vIHJldHVybiBtZWFucyBsb2FkQ2FyZCBzdWNjZXNzIG9yIGZhaWxlZC5cbmltcG9ydCB7IEJhc2VBcHAsIGxvYWRDYXJkUGFyYW1zLCBOYXRpdmVBcHAgfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgeyBMeW54LCBOYXRpdmVMeW54UHJveHkgfSBmcm9tICcuL2x5bngnO1xuaW1wb3J0IHsgYWxvZyB9IGZyb20gJy4vY29tbW9uL2xvZyc7XG5pbXBvcnQgbmF0aXZlR2xvYmFsIGZyb20gJy4vY29tbW9uL25hdGl2ZUdsb2JhbCc7XG5pbXBvcnQgeyBBUFBfU0VSVklDRV9OQU1FLCBERUZBVUxUX0VOVFJZLCBMeW54RmVhdHVyZSB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7IFJlYWN0QXBwIH0gZnJvbSAnLi9yZWFjdC9yZWFjdEFwcCc7XG5pbXBvcnQgeyBJbnRlcm5hbFJ1bnRpbWVFcnJvciwgcmVwb3J0RXJyb3IgfSBmcm9tICcuL21vZHVsZXMvcmVwb3J0JztcbmltcG9ydCBTdGFuZGFsb25lQXBwIGZyb20gJy4vc3RhbmRhbG9uZS9TdGFuZGFsb25lQXBwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDYXJkKFxuICBuYXRpdmVBcHA6IE5hdGl2ZUFwcCxcbiAgcGFyYW1zOiBsb2FkQ2FyZFBhcmFtcyxcbiAgbHlueD86IE5hdGl2ZUx5bnhQcm94eVxuKTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgaWQgfSA9IG5hdGl2ZUFwcDtcbiAgY29uc3QgeyBjYXJkVHlwZSB9ID0gcGFyYW1zO1xuICBhbG9nKGBsb2FkIGNhcmQgbmF0aXZlIGFwcCBpZDogJHtpZH1gKTtcbiAgbGV0IGxvYWRTdWNjZXNzOiBib29sZWFuID0gdHJ1ZTtcbiAgbGV0IHR0OiBSZWFjdEFwcCB8IFN0YW5kYWxvbmVBcHA7XG4gIHRyeSB7XG4gICAgaWYgKGNhcmRUeXBlID09ICdzdGFuZGFsb25lJykge1xuICAgICAgdHQgPSBuZXcgU3RhbmRhbG9uZUFwcCh7IG5hdGl2ZUFwcCwgcGFyYW1zLCBseW54IH0sIHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR0ID0gbmV3IFJlYWN0QXBwKFxuICAgICAgICB7XG4gICAgICAgICAgbmF0aXZlQXBwLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBseW54LFxuICAgICAgICB9LFxuICAgICAgICBuYXRpdmVHbG9iYWw/Lm11bHRpQXBwc1tpZF1cbiAgICAgICk7XG4gICAgfVxuICAgIG5hdGl2ZUdsb2JhbC5jdXJyZW50QXBwSWQgPSBpZDtcbiAgICBuYXRpdmVHbG9iYWwubXVsdGlBcHBzW2lkXSA9IHR0O1xuXG4gICAgaWYgKGNhcmRUeXBlID09PSAnc3RhbmRhbG9uZScpIHtcbiAgICAgIG5hdGl2ZUFwcC5zZXRDYXJkKHR0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGFsb2coXG4gICAgICBgbG9hZCBjYXJkIG5hdGl2ZSBhcHAgbG9hZCBhcHAtc2VydmljZS5qcyBwYXJhbXMuYnVuZGxlU3VwcG9ydExvYWRTY3JpcHQgJHtwYXJhbXMuYnVuZGxlU3VwcG9ydExvYWRTY3JpcHR9YFxuICAgICk7XG4gICAgbG9hZFN1Y2Nlc3MgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBkZWxldGUgdHQubHlueC5yZXF1aXJlTW9kdWxlLmNhY2hlW0FQUF9TRVJWSUNFX05BTUVdO1xuICAgICAgZGVsZXRlIEJhc2VBcHAuXyRmYWN0b3J5Q2FjaGVbQVBQX1NFUlZJQ0VfTkFNRV07XG4gICAgICB0dC5seW54LnJlcXVpcmVNb2R1bGUoQVBQX1NFUlZJQ0VfTkFNRSwgREVGQVVMVF9FTlRSWSk7XG4gICAgICBpZiAodHQubHlueC5fc3dpdGNoZXNbJ2FsbG93VW5kZWZpbmVkSW5OYXRpdmVEYXRhVHlwZVNldCddKSB7XG4gICAgICAgIHR0LmRhdGFUeXBlU2V0LmFkZCgndW5kZWZpbmVkJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9hZFN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIHR0LmhhbmRsZVVzZXJFcnJvcihlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ2xvYWRDYXJkIGZhaWxlZCcpO1xuICAgIH1cbiAgICBuYXRpdmVBcHAuc2V0Q2FyZCh0dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVMb2FkQ2FyZEVycm9yKG5hdGl2ZUFwcCwgZSk7XG4gICAgbG9hZFN1Y2Nlc3MgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gbG9hZFN1Y2Nlc3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95Q2FyZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGFsb2coYGRlc3Ryb3kgJHtpZH1gKTtcbiAgY29uc3QgYXBwSW5zdGFuY2UgPSBuYXRpdmVHbG9iYWwubXVsdGlBcHBzW2lkXTtcbiAgYXBwSW5zdGFuY2UuZGVzdHJveSgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWR5bmFtaWMtZGVsZXRlXG4gIGRlbGV0ZSBuYXRpdmVHbG9iYWwubXVsdGlBcHBzW2lkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxEZXN0cm95TGlmZXRpbWVGdW4oaWQ6IHN0cmluZyk6IHZvaWQge1xuICBhbG9nKGBjYWxsRGVzdHJveUxpZmV0aW1lRnVuICR7aWR9YCk7XG4gIGNvbnN0IGFwcEluc3RhbmNlID0gbmF0aXZlR2xvYmFsLm11bHRpQXBwc1tpZF07XG4gIGFwcEluc3RhbmNlLmNhbGxEZXN0cm95TGlmZXRpbWVGdW4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREeW5hbWljQ29tcG9uZW50PFQ+KHR0OiBCYXNlQXBwLCBjb21wb25lbnRVcmw6IHN0cmluZyk6IFQge1xuICBpZiAodHQubG9hZGVkRHluYW1pY0NvbXBvbmVudHNTZXQuaGFzKGNvbXBvbmVudFVybCkpIHtcbiAgICByZXR1cm4gdHQuZ2V0RHluYW1pY0NvbXBvbmVudEV4cG9ydHMoY29tcG9uZW50VXJsKTtcbiAgfVxuXG4gIGNvbnN0IHByZUVudHJ5ID0gbmF0aXZlR2xvYmFsLmdsb2JEeW5hbWljQ29tcG9uZW50RW50cnk7XG4gIG5hdGl2ZUdsb2JhbC5nbG9iRHluYW1pY0NvbXBvbmVudEVudHJ5ID0gY29tcG9uZW50VXJsO1xuXG4gIHRyeSB7XG4gICAgZGVsZXRlIHR0Lmx5bngucmVxdWlyZU1vZHVsZS5jYWNoZVtBUFBfU0VSVklDRV9OQU1FXTtcbiAgICBkZWxldGUgQmFzZUFwcC5fJGZhY3RvcnlDYWNoZVtBUFBfU0VSVklDRV9OQU1FXTtcbiAgICBjb25zdCByZXQgPSB0dC5seW54LnJlcXVpcmVNb2R1bGU8VD4oQVBQX1NFUlZJQ0VfTkFNRSwgY29tcG9uZW50VXJsKTtcbiAgICB0dC5zYXZlRHluYW1pY0NvbXBvbmVudEV4cG9ydHMoY29tcG9uZW50VXJsLCByZXQpO1xuICAgIHR0LmxvYWRlZER5bmFtaWNDb21wb25lbnRzU2V0LmFkZChjb21wb25lbnRVcmwpO1xuICAgIHJldHVybiByZXQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdHQuaGFuZGxlVXNlckVycm9yKGVycm9yKTtcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBIZXJlIHJlc2V0IGdsb2JEeW5hbWljQ29tcG9uZW50RW50cnkgdG8gYXZvaWQgYWZmZWN0IG90aGVyIEx5bnhWaWV3IGluIHRoZSBzYW1lIEx5bnhHcm91cFxuICAgIC8vIGRldGFpbCBzZWU6ICM4NzIwXG4gICAgbmF0aXZlR2xvYmFsLmdsb2JEeW5hbWljQ29tcG9uZW50RW50cnkgPSBwcmVFbnRyeTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTG9hZENhcmRFcnJvcihcbiAgbmF0aXZlQXBwOiBOYXRpdmVBcHAsXG4gIGVycm9yPzogRXJyb3IsXG4gIGNhdXNlPzogdW5rbm93blxuKSB7XG4gIGxldCB7IG1lc3NhZ2UsIG5hbWUsIHN0YWNrIH0gPSBlcnJvciB8fCB7fTtcbiAgaWYgKCFtZXNzYWdlKSB7XG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gZXJyb3IgbWVzc2FnZSBpbiBlcnJvciwgbWVhbnMgdGhhdCBpdCBpcyBub3QgYW4gZXJyb3ItbGlrZSBvYmplY3QuXG4gICAgLy8gV2UgY29uc3RydWN0IGEgbmV3IEVycm9yIHVzaW5nIEpTT04uc3RyaW5naWZ5XG4gICAgKHsgbWVzc2FnZSwgbmFtZSwgc3RhY2sgfSA9IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShlcnJvcikpKTtcbiAgfVxuICBjb25zdCBpbnRlcm5hbEVycm9yID0gbmV3IEludGVybmFsUnVudGltZUVycm9yKFxuICAgIGBsb2FkQ2FyZCBmYWlsZWQgJHtuYW1lfTogJHttZXNzYWdlfWAsXG4gICAgc3RhY2tcbiAgKTtcbiAgaW50ZXJuYWxFcnJvci5jYXVzZSA9IGNhdXNlO1xuICByZXBvcnRFcnJvcihpbnRlcm5hbEVycm9yLCBuYXRpdmVBcHAsIHtcbiAgICBvcmlnaW5FcnJvcjogZXJyb3IsXG4gICAgZ2V0U291cmNlTWFwUmVsZWFzZTogKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGxldCByZXQgPSBuYXRpdmVBcHAuX19HZXRTb3VyY2VNYXBSZWxlYXNlKHVybCk7XG4gICAgICBpZiAoIXJldCkge1xuICAgICAgICByZXR1cm4gbmF0aXZlQXBwLl9fR2V0U291cmNlTWFwUmVsZWFzZShCYXNlQXBwLmtEZWZhdWx0U291cmNlTWFwVVJMKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbn1cbiIsICIvKipcbiAqIEBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHRjb3JlLzE2NDQ1OTgtanNvYmplY3RtYWtldHlwZWRhcnJheXdpdGhhcnJheWJcbiAqIEBkZXNjcmlwdGlvbjogSmF2YVNjcmlwdCBDb3JlIHByb3ZpZGUgQXJyYXlCdWZmZXIgQVBJIEluIEpTUnVudGltZS4gQnV0IGRpZCBub3QgZXhwb3J0IHNvbWUgYy1hcGkgb24gaU9TOS5cbiAqL1xuXG4vLyBiYXNlNjQgY2hhcmFjdGVyIHNldCwgcGx1cyBwYWRkaW5nIGNoYXJhY3RlciAoPSlcbmNvbnN0IGNoYXJzID1cbiAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuLy8gUmVndWxhciBleHByZXNzaW9uIHRvIGNoZWNrIGZvcm1hbCBjb3JyZWN0bmVzcyBvZiBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzXG5jb25zdCBsb29rdXAgPSBuZXcgVWludDhBcnJheSgyNTYpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgdmFyIGk6IG51bWJlcjtcbiAgdmFyIGxlbjogbnVtYmVyID0gYnl0ZXMubGVuZ3RoO1xuICB2YXIgYmFzZTY0ID0gJyc7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSAzKSB7XG4gICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpICsgMV0gJiAxNSkgPDwgMikgfCAoYnl0ZXNbaSArIDJdID4+IDYpXTtcbiAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICB9XG5cbiAgaWYgKGxlbiAlIDMgPT09IDIpIHtcbiAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArICc9JztcbiAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyAnPT0nO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U2NDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFRvQXJyYXlCdWZmZXIoYmFzZTY0OiBzdHJpbmcpOiBBcnJheUJ1ZmZlciB7XG4gIGxldCBidWZmZXJMZW5ndGg6IG51bWJlciA9IGJhc2U2NC5sZW5ndGggKiAwLjc1O1xuICBjb25zdCBsZW46IG51bWJlciA9IGJhc2U2NC5sZW5ndGg7XG4gIGxldCBpO1xuICBsZXQgcCA9IDA7XG4gIGxldCBlbmNvZGVkMTtcbiAgbGV0IGVuY29kZWQyO1xuICBsZXQgZW5jb2RlZDM7XG4gIGxldCBlbmNvZGVkNDtcblxuICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gJz0nKSB7XG4gICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09ICc9Jykge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgfVxuICB9XG5cbiAgbGV0IGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCk7XG4gIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBlbmNvZGVkMSA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKV07XG4gICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICBlbmNvZGVkMyA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMildO1xuICAgIGVuY29kZWQ0ID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAzKV07XG5cbiAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQyICYgMTUpIDw8IDQpIHwgKGVuY29kZWQzID4+IDIpO1xuICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlidWZmZXI7XG59XG4iLCAiLy8gQ29weXJpZ2h0IDIwMjQgVGhlIEx5bnggQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbmltcG9ydCB7XG4gIGxvYWRDYXJkLFxuICBkZXN0cm95Q2FyZCxcbiAgY2FsbERlc3Ryb3lMaWZldGltZUZ1bixcbiAgbG9hZER5bmFtaWNDb21wb25lbnQsXG59IGZyb20gJy4vYXBwTWFuYWdlcic7XG5pbXBvcnQgeyBhcnJheUJ1ZmZlclRvQmFzZTY0LCBiYXNlNjRUb0FycmF5QnVmZmVyIH0gZnJvbSAnLi9wb2x5ZmlsbCc7XG5pbXBvcnQgbmF0aXZlR2xvYmFsIGZyb20gJy4vY29tbW9uL25hdGl2ZUdsb2JhbCc7XG5pbXBvcnQge1xuICBjcmVhdGVFdmVudEVtaXR0ZXIsXG4gIGxlZ2FjeVJlcG9ydEVycm9yLFxuICB3cmFwSW5uZXJGdW5jdGlvbixcbiAgd3JhcFVzZXJGdW5jdGlvbixcbn0gZnJvbSAnLi9tb2R1bGVzJztcbmltcG9ydCB7XG4gIEhlYWRlcnMsXG4gIFVSTCxcbiAgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwsXG4gIEFib3J0Q29udHJvbGxlcixcbiAgQWJvcnRTaWduYWwsXG4gIFRleHRFbmNvZGVyLFxuICBUZXh0RGVjb2Rlcixcbn0gZnJvbSAnLi9tb2R1bGVzL2ZldGNoJztcblxuZXhwb3J0IHsgbG9hZENhcmQsIGRlc3Ryb3lDYXJkLCBjYWxsRGVzdHJveUxpZmV0aW1lRnVuLCBsb2FkRHluYW1pY0NvbXBvbmVudCB9O1xuXG5uYXRpdmVHbG9iYWwubG9hZENhcmQgPSBsb2FkQ2FyZDtcbm5hdGl2ZUdsb2JhbC5kZXN0cm95Q2FyZCA9IGRlc3Ryb3lDYXJkO1xubmF0aXZlR2xvYmFsLmNhbGxEZXN0cm95TGlmZXRpbWVGdW4gPSBjYWxsRGVzdHJveUxpZmV0aW1lRnVuO1xubmF0aXZlR2xvYmFsLmxvYWREeW5hbWljQ29tcG9uZW50ID0gbG9hZER5bmFtaWNDb21wb25lbnQ7XG4vKipcbiAqIG9ubHkgZm9yIGx5bnggbmF0aXZlIHJ1bnRpbWVcbiAqL1xubmF0aXZlR2xvYmFsLl9fY3JlYXRlRXZlbnRFbWl0dGVyID0gY3JlYXRlRXZlbnRFbWl0dGVyO1xubmF0aXZlR2xvYmFsLl9fbHlueEFycmF5QnVmZmVyVG9CYXNlNjQgPSBhcnJheUJ1ZmZlclRvQmFzZTY0O1xubmF0aXZlR2xvYmFsLl9fbHlueEJhc2U2NFRvQXJyYXlCdWZmZXIgPSBiYXNlNjRUb0FycmF5QnVmZmVyO1xubmF0aXZlR2xvYmFsLkx5bnhTREtDb3JlID0ge1xuICByZXBvcnQ6IGxlZ2FjeVJlcG9ydEVycm9yLFxuICByZXBvcnRJbm5lcjogd3JhcElubmVyRnVuY3Rpb24sXG4gIHJlcG9ydFVzZXI6IHdyYXBVc2VyRnVuY3Rpb24sXG59O1xuXG5uYXRpdmVHbG9iYWwuSGVhZGVycyA9IEhlYWRlcnM7XG5uYXRpdmVHbG9iYWwuQWJvcnRDb250cm9sbGVyID0gQWJvcnRDb250cm9sbGVyO1xubmF0aXZlR2xvYmFsLkFib3J0U2lnbmFsID0gQWJvcnRTaWduYWw7XG5uYXRpdmVHbG9iYWwuVVJMID0gVVJMO1xuVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwobmF0aXZlR2xvYmFsKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsZUFBQUEsU0FBQTtBQUFBLFVBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsZUFBTyxNQUFNLEdBQUcsUUFBUSxRQUFRO0FBQUEsTUFDbEM7QUFHQSxNQUFBQSxRQUFPO0FBQUEsTUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPO0FBQUEsTUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTztBQUFBLE1BQVUsWUFBWSxNQUFNO0FBQUEsTUFFekMsU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNaMUI7QUFBQTtBQUFBLGNBQUFDLFNBQUE7QUFBQSxNQUFBQSxRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFlBQUk7QUFDRixpQkFBTyxDQUFDLENBQUMsS0FBSztBQUFBLFFBQ2hCLFNBQVMsT0FBTztBQUNkLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQTtBQUFBOzs7QUNOQTtBQUFBO0FBQUEsb0JBQUFDLFNBQUE7QUFBQSxVQUFJLFFBQVE7QUFHWixNQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFDbEMsZUFBTyxPQUFPLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLFdBQVk7QUFBRSxpQkFBTztBQUFBLFFBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLO0FBQUEsTUFDaEYsQ0FBQztBQUFBO0FBQUE7OztBQ0xEO0FBQUE7QUFBQTtBQUFBO0FBQ0EsVUFBSSw2QkFBNkIsQ0FBQyxFQUFFO0FBQ3BDLFVBQUksMkJBQTJC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LHNCQUFhLHVCQUF1QjtBQUNwQyxFQUFBQSxzQkFBYSw0QkFBNEI7QUFDekMsRUFBQUEsc0JBQWEsNEJBQTRCO0FBQ3pDLEVBQUFBLHNCQUFhLGNBQWM7QUFBQSxJQUN6QixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsRUFDZDtBQUVBLEVBQUFBLHNCQUFhLFVBQVVDO0FBQ3ZCLEVBQUFELHNCQUFhLGtCQUFrQjtBQUMvQixFQUFBQSxzQkFBYSxjQUFjO0FBQzNCLEVBQUFBLHNCQUFhLE1BQU07QUFDbkIsMEJBQXdCQSxxQkFBWTsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImlzT2JqZWN0IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImlzT2JqZWN0IiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiaXNPYmplY3QiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiaXNPYmplY3QiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJwYXRoIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImdsb2JhbCIsICJpc09iamVjdCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAicGF0aCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAidGhhdCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJpc09iamVjdCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImFjdGl2ZVhEb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJpc09iamVjdCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlJhbmdlRXJyb3IiLCAia2V5IiwgIkFycmF5QnVmZmVyIiwgIkRhdGFWaWV3IiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiQXJyYXlCdWZmZXIiLCAibW9kdWxlIiwgIkFycmF5QnVmZmVyIiwgIkRhdGFWaWV3IiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAidGhhdCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiaXNPYmplY3QiLCAibW9kdWxlIiwgInRoYXQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgInRyaW1FbmQiLCAidHJpbVN0YXJ0IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImlzT2JqZWN0IiwgImlzVmlldyIsICJUeXBlZEFycmF5IiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiQXJyYXlCdWZmZXIiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgInRoYXQiLCAic2VsZiIsICJtb2R1bGUiLCAiaXNPYmplY3QiLCAibW9kdWxlIiwgImdsb2JhbCIsICJpc09iamVjdCIsICJSYW5nZUVycm9yIiwgIkFycmF5QnVmZmVyIiwgIkRhdGFWaWV3IiwgInRoYXQiLCAiVWludDhBcnJheSIsICJtb2R1bGUiLCAibm9vcCIsICJQcm9taXNlIiwgInNlbGYiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAibW9kdWxlIiwgIlByb21pc2UiLCAiaSIsICJ2YWwiLCAic2VsZiIsICJtb2R1bGUiLCAiUHJvbWlzZSIsICJzZXRUaW1lb3V0IiwgImlkIiwgIm1vZHVsZSIsICJzZXRUaW1lb3V0IiwgIlByb21pc2UiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAidW5kZWZpbmVkIiwgInNlbGYiLCAidmFsdWUiLCAia2V5IiwgIm5leHQiLCAiaW1wb3J0X3J1bnRpbWUiLCAibmF0aXZlR2xvYmFsX2RlZmF1bHQiLCAiZXJyb3IiLCAiX2EiLCAicGFyYW1zIiwgIkhlYWRlcnMiLCAiX2EiLCAiSGVhZGVycyIsICJzZWxmIiwgIl9hIiwgIlVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsIiwgIl9hIiwgIl9iIiwgIl9hIiwgIlByb21pc2UiLCAicGF0aCIsICJlbnRyeU5hbWUiLCAibW9kdWxlIiwgIm5hdGl2ZUdsb2JhbF9kZWZhdWx0IiwgInBhcmFtcyIsICJfYiIsICJlbnRyeU5hbWUiLCAiTGlzdGVuZXJLZXlzIiwgIm5hdGl2ZUdsb2JhbF9kZWZhdWx0IiwgInNldFRpbWVvdXQiLCAibmF0aXZlR2xvYmFsX2RlZmF1bHQiLCAibmF0aXZlR2xvYmFsX2RlZmF1bHQiLCAicGFyYW1zIiwgIm1vZHVsZSIsICJQcm9taXNlIiwgIl9hIiwgIl9iIiwgInNlbGYiLCAicGF0aCIsICJlbnRyeU5hbWUiLCAidHQiLCAidGhhdCIsICJzZXRUaW1lb3V0IiwgInBhcmFtcyIsICJwYXJhbXMiLCAiX2EiLCAidHQiLCAibmF0aXZlR2xvYmFsX2RlZmF1bHQiLCAibmF0aXZlR2xvYmFsX2RlZmF1bHQiLCAiSGVhZGVycyJdCn0K
