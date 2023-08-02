// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"supabase-test.34bd29f0.js":[function(require,module,exports) {
var define;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
parcelRequire = function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }
      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };
  for (var c = 0; c < t.length; c++) try {
    f(t[c]);
  } catch (e) {
    i || (i = e);
  }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }
  if (parcelRequire = f, i) throw i;
  return f;
}({
  "ejQK": [function (require, module, exports) {
    var t = null;
    function e() {
      return t || (t = n()), t;
    }
    function n() {
      try {
        throw new Error();
      } catch (e) {
        var t = ("" + e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
        if (t) return r(t[0]);
      }
      return "/";
    }
    function r(t) {
      return ("" + t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, "$1") + "/";
    }
    exports.getBundleURL = e, exports.getBaseURL = r;
  }, {}],
  "ZOfP": [function (require, module, exports) {
    var r = require("./bundle-url").getBundleURL;
    function e(r) {
      Array.isArray(r) || (r = [r]);
      var e = r[r.length - 1];
      try {
        return Promise.resolve(require(e));
      } catch (n) {
        if ("MODULE_NOT_FOUND" === n.code) return new s(function (n, i) {
          t(r.slice(0, -1)).then(function () {
            return require(e);
          }).then(n, i);
        });
        throw n;
      }
    }
    function t(r) {
      return Promise.all(r.map(u));
    }
    var n = {};
    function i(r, e) {
      n[r] = e;
    }
    module.exports = exports = e, exports.load = t, exports.register = i;
    var o = {};
    function u(e) {
      var t;
      if (Array.isArray(e) && (t = e[1], e = e[0]), o[e]) return o[e];
      var i = (e.substring(e.lastIndexOf(".") + 1, e.length) || e).toLowerCase(),
        u = n[i];
      return u ? o[e] = u(r() + e).then(function (r) {
        return r && module.bundle.register(t, r), r;
      }).catch(function (r) {
        throw delete o[e], r;
      }) : void 0;
    }
    function s(r) {
      this.executor = r, this.promise = null;
    }
    s.prototype.then = function (r, e) {
      return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.then(r, e);
    }, s.prototype.catch = function (r) {
      return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.catch(r);
    };
  }, {
    "./bundle-url": "ejQK"
  }],
  "amBb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.resolveFetch = void 0;
    var e = function e(_e, t, n, o) {
      return new (n || (n = Promise))(function (r, c) {
        function i(e) {
          try {
            f(o.next(e));
          } catch (t) {
            c(t);
          }
        }
        function u(e) {
          try {
            f(o.throw(e));
          } catch (t) {
            c(t);
          }
        }
        function f(e) {
          var t;
          e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(i, u);
        }
        f((o = o.apply(_e, t || [])).next());
      });
    };
    var t = function t(_t) {
      var n;
      return n = _t || ("undefined" == typeof fetch ? function () {
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }
        return e(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _yield$require;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return require("_bundle_loader")(require.resolve("cross-fetch"));
              case 2:
                _context.next = 4;
                return (_yield$require = _context.sent).fetch.apply(_yield$require, t);
              case 4:
                return _context.abrupt("return", _context.sent);
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
      } : fetch), function () {
        return n.apply(void 0, arguments);
      };
    };
    exports.resolveFetch = t;
  }, {
    "_bundle_loader": "ZOfP",
    "cross-fetch": [["browser-ponyfill.79a645bd.js", "vTPr"], "browser-ponyfill.79a645bd.js.map", "vTPr"]
  }],
  "fXha": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.FunctionsRelayError = exports.FunctionsHttpError = exports.FunctionsFetchError = exports.FunctionsError = void 0;
    var r = /*#__PURE__*/function (_Error) {
      _inherits(r, _Error);
      var _super = _createSuper(r);
      function r(_r) {
        var _this;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "FunctionsError";
        var o = arguments.length > 2 ? arguments[2] : undefined;
        _classCallCheck(this, r);
        _this = _super.call(this, _r), _this.name = t, _this.context = o;
        return _this;
      }
      return _createClass(r);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    exports.FunctionsError = r;
    var t = /*#__PURE__*/function (_r2) {
      _inherits(t, _r2);
      var _super2 = _createSuper(t);
      function t(r) {
        _classCallCheck(this, t);
        return _super2.call(this, "Failed to send a request to the Edge Function", "FunctionsFetchError", r);
      }
      return _createClass(t);
    }(r);
    exports.FunctionsFetchError = t;
    var o = /*#__PURE__*/function (_r3) {
      _inherits(o, _r3);
      var _super3 = _createSuper(o);
      function o(r) {
        _classCallCheck(this, o);
        return _super3.call(this, "Relay Error invoking the Edge Function", "FunctionsRelayError", r);
      }
      return _createClass(o);
    }(r);
    exports.FunctionsRelayError = o;
    var e = /*#__PURE__*/function (_r4) {
      _inherits(e, _r4);
      var _super4 = _createSuper(e);
      function e(r) {
        _classCallCheck(this, e);
        return _super4.call(this, "Edge Function returned a non-2xx status code", "FunctionsHttpError", r);
      }
      return _createClass(e);
    }(r);
    exports.FunctionsHttpError = e;
  }, {}],
  "KbKQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.FunctionsClient = void 0;
    var t = require("./helper"),
      e = require("./types"),
      n = function n(t, e, _n, r) {
        return new (_n || (_n = Promise))(function (o, i) {
          function a(t) {
            try {
              c(r.next(t));
            } catch (e) {
              i(e);
            }
          }
          function s(t) {
            try {
              c(r.throw(t));
            } catch (e) {
              i(e);
            }
          }
          function c(t) {
            var e;
            t.done ? o(t.value) : (e = t.value, e instanceof _n ? e : new _n(function (t) {
              t(e);
            })).then(a, s);
          }
          c((r = r.apply(t, e || [])).next());
        });
      };
    var r = /*#__PURE__*/function () {
      function r(e) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$headers = _ref.headers,
          n = _ref$headers === void 0 ? {} : _ref$headers,
          _r5 = _ref.customFetch;
        _classCallCheck(this, r);
        this.url = e, this.headers = n, this.fetch = (0, t.resolveFetch)(_r5);
      }
      _createClass(r, [{
        key: "setAuth",
        value: function setAuth(t) {
          this.headers.Authorization = "Bearer ".concat(t);
        }
      }, {
        key: "invoke",
        value: function invoke(t) {
          var _r6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var o;
          return n(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var i, a, s, c, l, u, h, p, d;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  i = _r6.headers, a = _r6.method, s = _r6.body;
                  l = {};
                  s && (i && !Object.prototype.hasOwnProperty.call(i, "Content-Type") || !i) && ("undefined" != typeof Blob && s instanceof Blob || s instanceof ArrayBuffer ? (l["Content-Type"] = "application/octet-stream", c = s) : "string" == typeof s ? (l["Content-Type"] = "text/plain", c = s) : "undefined" != typeof FormData && s instanceof FormData ? c = s : (l["Content-Type"] = "application/json", c = JSON.stringify(s)));
                  _context2.next = 6;
                  return this.fetch("".concat(this.url, "/").concat(t), {
                    method: a || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, l), this.headers), i),
                    body: c
                  }).catch(function (t) {
                    throw new e.FunctionsFetchError(t);
                  });
                case 6:
                  u = _context2.sent;
                  h = u.headers.get("x-relay-error");
                  if (!(h && "true" === h)) {
                    _context2.next = 10;
                    break;
                  }
                  throw new e.FunctionsRelayError(u);
                case 10:
                  if (u.ok) {
                    _context2.next = 12;
                    break;
                  }
                  throw new e.FunctionsHttpError(u);
                case 12:
                  d = (null !== (o = u.headers.get("Content-Type")) && void 0 !== o ? o : "text/plain").split(";")[0].trim();
                  if (!("application/json" === d)) {
                    _context2.next = 19;
                    break;
                  }
                  _context2.next = 16;
                  return u.json();
                case 16:
                  _context2.t0 = _context2.sent;
                  _context2.next = 36;
                  break;
                case 19:
                  if (!("application/octet-stream" === d)) {
                    _context2.next = 25;
                    break;
                  }
                  _context2.next = 22;
                  return u.blob();
                case 22:
                  _context2.t1 = _context2.sent;
                  _context2.next = 35;
                  break;
                case 25:
                  if (!("multipart/form-data" === d)) {
                    _context2.next = 31;
                    break;
                  }
                  _context2.next = 28;
                  return u.formData();
                case 28:
                  _context2.t2 = _context2.sent;
                  _context2.next = 34;
                  break;
                case 31:
                  _context2.next = 33;
                  return u.text();
                case 33:
                  _context2.t2 = _context2.sent;
                case 34:
                  _context2.t1 = _context2.t2;
                case 35:
                  _context2.t0 = _context2.t1;
                case 36:
                  _context2.t3 = p = _context2.t0;
                  return _context2.abrupt("return", {
                    data: _context2.t3,
                    error: null
                  });
                case 40:
                  _context2.prev = 40;
                  _context2.t4 = _context2["catch"](0);
                  return _context2.abrupt("return", {
                    data: null,
                    error: _context2.t4
                  });
                case 43:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[0, 40]]);
          }));
        }
      }]);
      return r;
    }();
    exports.FunctionsClient = r;
  }, {
    "./helper": "amBb",
    "./types": "fXha"
  }],
  "AtCQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "FunctionsClient", {
      enumerable: !0,
      get: function get() {
        return e.FunctionsClient;
      }
    }), Object.defineProperty(exports, "FunctionsError", {
      enumerable: !0,
      get: function get() {
        return r.FunctionsError;
      }
    }), Object.defineProperty(exports, "FunctionsFetchError", {
      enumerable: !0,
      get: function get() {
        return r.FunctionsFetchError;
      }
    }), Object.defineProperty(exports, "FunctionsHttpError", {
      enumerable: !0,
      get: function get() {
        return r.FunctionsHttpError;
      }
    }), Object.defineProperty(exports, "FunctionsRelayError", {
      enumerable: !0,
      get: function get() {
        return r.FunctionsRelayError;
      }
    });
    var e = require("./FunctionsClient"),
      r = require("./types");
  }, {
    "./FunctionsClient": "KbKQ",
    "./types": "fXha"
  }],
  "wVX0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e(require("cross-fetch"));
    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    var s = /*#__PURE__*/function () {
      function s(e) {
        _classCallCheck(this, s);
        this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle, e.fetch ? this.fetch = e.fetch : "undefined" == typeof fetch ? this.fetch = t.default : this.fetch = fetch;
      }
      _createClass(s, [{
        key: "throwOnError",
        value: function throwOnError() {
          return this.shouldThrowOnError = !0, this;
        }
      }, {
        key: "then",
        value: function then(t, e) {
          var _this2 = this;
          void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), "GET" !== this.method && "HEAD" !== this.method && (this.headers["Content-Type"] = "application/json");
          var _s = (0, this.fetch)(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
          }).then( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(t) {
              var e, _s2, r, i, h, o, n, l, _e2, _r7, a, _e3;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    i = null, h = null, o = null, n = t.status, l = t.statusText;
                    if (!t.ok) {
                      _context3.next = 11;
                      break;
                    }
                    if (!("HEAD" !== _this2.method)) {
                      _context3.next = 7;
                      break;
                    }
                    _context3.next = 5;
                    return t.text();
                  case 5:
                    _e2 = _context3.sent;
                    "" === _e2 || (h = "text/csv" === _this2.headers.Accept ? _e2 : _this2.headers.Accept && _this2.headers.Accept.includes("application/vnd.pgrst.plan+text") ? _e2 : JSON.parse(_e2));
                  case 7:
                    _r7 = null === (e = _this2.headers.Prefer) || void 0 === e ? void 0 : e.match(/count=(exact|planned|estimated)/), a = null === (_s2 = t.headers.get("content-range")) || void 0 === _s2 ? void 0 : _s2.split("/");
                    _r7 && a && a.length > 1 && (o = parseInt(a[1])), _this2.isMaybeSingle && "GET" === _this2.method && Array.isArray(h) && (h.length > 1 ? (i = {
                      code: "PGRST116",
                      details: "Results contain ".concat(h.length, " rows, application/vnd.pgrst.object+json requires 1 row"),
                      hint: null,
                      message: "JSON object requested, multiple (or no) rows returned"
                    }, h = null, o = null, n = 406, l = "Not Acceptable") : h = 1 === h.length ? h[0] : null);
                    _context3.next = 17;
                    break;
                  case 11:
                    _context3.next = 13;
                    return t.text();
                  case 13:
                    _e3 = _context3.sent;
                    try {
                      i = JSON.parse(_e3), Array.isArray(i) && 404 === t.status && (h = [], i = null, n = 200, l = "OK");
                    } catch (a) {
                      404 === t.status && "" === _e3 ? (n = 204, l = "No Content") : i = {
                        message: _e3
                      };
                    }
                    if (!(i && _this2.isMaybeSingle && (null === (r = null == i ? void 0 : i.details) || void 0 === r ? void 0 : r.includes("Results contain 0 rows")) && (i = null, n = 200, l = "OK"), i && _this2.shouldThrowOnError)) {
                      _context3.next = 17;
                      break;
                    }
                    throw i;
                  case 17:
                    return _context3.abrupt("return", {
                      error: i,
                      data: h,
                      count: o,
                      status: n,
                      statusText: l
                    });
                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
          return this.shouldThrowOnError || (_s = _s.catch(function (t) {
            var e, _s3, r;
            return {
              error: {
                message: "".concat(null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : "FetchError", ": ").concat(null == t ? void 0 : t.message),
                details: "".concat(null !== (_s3 = null == t ? void 0 : t.stack) && void 0 !== _s3 ? _s3 : ""),
                hint: "",
                code: "".concat(null !== (r = null == t ? void 0 : t.code) && void 0 !== r ? r : "")
              },
              data: null,
              count: null,
              status: 0,
              statusText: ""
            };
          })), _s.then(t, e);
        }
      }]);
      return s;
    }();
    exports.default = s;
  }, {
    "cross-fetch": "vTPr"
  }],
  "fdtS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./PostgrestBuilder"));
    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var s = /*#__PURE__*/function (_e$default) {
      _inherits(s, _e$default);
      var _super5 = _createSuper(s);
      function s() {
        _classCallCheck(this, s);
        return _super5.apply(this, arguments);
      }
      _createClass(s, [{
        key: "select",
        value: function select(e) {
          var t = !1;
          var _s4 = (null != e ? e : "*").split("").map(function (e) {
            return /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e);
          }).join("");
          return this.url.searchParams.set("select", _s4), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
        }
      }, {
        key: "order",
        value: function order(e) {
          var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$ascending = _ref3.ascending,
            t = _ref3$ascending === void 0 ? !0 : _ref3$ascending,
            _s5 = _ref3.nullsFirst,
            r = _ref3.foreignTable;
          var i = r ? "".concat(r, ".order") : "order",
            a = this.url.searchParams.get(i);
          return this.url.searchParams.set(i, "".concat(a ? "".concat(a, ",") : "").concat(e, ".").concat(t ? "asc" : "desc").concat(void 0 === _s5 ? "" : _s5 ? ".nullsfirst" : ".nullslast")), this;
        }
      }, {
        key: "limit",
        value: function limit(e) {
          var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            t = _ref4.foreignTable;
          var _s6 = void 0 === t ? "limit" : "".concat(t, ".limit");
          return this.url.searchParams.set(_s6, "".concat(e)), this;
        }
      }, {
        key: "range",
        value: function range(e, t) {
          var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _s7 = _ref5.foreignTable;
          var r = void 0 === _s7 ? "offset" : "".concat(_s7, ".offset"),
            i = void 0 === _s7 ? "limit" : "".concat(_s7, ".limit");
          return this.url.searchParams.set(r, "".concat(e)), this.url.searchParams.set(i, "".concat(t - e + 1)), this;
        }
      }, {
        key: "abortSignal",
        value: function abortSignal(e) {
          return this.signal = e, this;
        }
      }, {
        key: "single",
        value: function single() {
          return this.headers.Accept = "application/vnd.pgrst.object+json", this;
        }
      }, {
        key: "maybeSingle",
        value: function maybeSingle() {
          return "GET" === this.method ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
        }
      }, {
        key: "csv",
        value: function csv() {
          return this.headers.Accept = "text/csv", this;
        }
      }, {
        key: "geojson",
        value: function geojson() {
          return this.headers.Accept = "application/geo+json", this;
        }
      }, {
        key: "explain",
        value: function explain() {
          var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref6$analyze = _ref6.analyze,
            e = _ref6$analyze === void 0 ? !1 : _ref6$analyze,
            _ref6$verbose = _ref6.verbose,
            t = _ref6$verbose === void 0 ? !1 : _ref6$verbose,
            _ref6$settings = _ref6.settings,
            _s8 = _ref6$settings === void 0 ? !1 : _ref6$settings,
            _ref6$buffers = _ref6.buffers,
            r = _ref6$buffers === void 0 ? !1 : _ref6$buffers,
            _ref6$wal = _ref6.wal,
            i = _ref6$wal === void 0 ? !1 : _ref6$wal,
            _ref6$format = _ref6.format,
            a = _ref6$format === void 0 ? "text" : _ref6$format;
          var l = [e ? "analyze" : null, t ? "verbose" : null, _s8 ? "settings" : null, r ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|"),
            n = this.headers.Accept;
          return this.headers.Accept = "application/vnd.pgrst.plan+".concat(a, "; for=\"").concat(n, "\"; options=").concat(l, ";"), this;
        }
      }, {
        key: "rollback",
        value: function rollback() {
          var e;
          return (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
        }
      }, {
        key: "returns",
        value: function returns() {
          return this;
        }
      }]);
      return s;
    }(e.default);
    exports.default = s;
  }, {
    "./PostgrestBuilder": "wVX0"
  }],
  "LPuO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var r = e(require("./PostgrestTransformBuilder"));
    function e(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }
    var a = /*#__PURE__*/function (_r$default) {
      _inherits(a, _r$default);
      var _super6 = _createSuper(a);
      function a() {
        _classCallCheck(this, a);
        return _super6.apply(this, arguments);
      }
      _createClass(a, [{
        key: "eq",
        value: function eq(r, e) {
          return this.url.searchParams.append(r, "eq.".concat(e)), this;
        }
      }, {
        key: "neq",
        value: function neq(r, e) {
          return this.url.searchParams.append(r, "neq.".concat(e)), this;
        }
      }, {
        key: "gt",
        value: function gt(r, e) {
          return this.url.searchParams.append(r, "gt.".concat(e)), this;
        }
      }, {
        key: "gte",
        value: function gte(r, e) {
          return this.url.searchParams.append(r, "gte.".concat(e)), this;
        }
      }, {
        key: "lt",
        value: function lt(r, e) {
          return this.url.searchParams.append(r, "lt.".concat(e)), this;
        }
      }, {
        key: "lte",
        value: function lte(r, e) {
          return this.url.searchParams.append(r, "lte.".concat(e)), this;
        }
      }, {
        key: "like",
        value: function like(r, e) {
          return this.url.searchParams.append(r, "like.".concat(e)), this;
        }
      }, {
        key: "likeAllOf",
        value: function likeAllOf(r, e) {
          return this.url.searchParams.append(r, "like(all).{".concat(e.join(","), "}")), this;
        }
      }, {
        key: "likeAnyOf",
        value: function likeAnyOf(r, e) {
          return this.url.searchParams.append(r, "like(any).{".concat(e.join(","), "}")), this;
        }
      }, {
        key: "ilike",
        value: function ilike(r, e) {
          return this.url.searchParams.append(r, "ilike.".concat(e)), this;
        }
      }, {
        key: "ilikeAllOf",
        value: function ilikeAllOf(r, e) {
          return this.url.searchParams.append(r, "ilike(all).{".concat(e.join(","), "}")), this;
        }
      }, {
        key: "ilikeAnyOf",
        value: function ilikeAnyOf(r, e) {
          return this.url.searchParams.append(r, "ilike(any).{".concat(e.join(","), "}")), this;
        }
      }, {
        key: "is",
        value: function is(r, e) {
          return this.url.searchParams.append(r, "is.".concat(e)), this;
        }
      }, {
        key: "in",
        value: function _in(r, e) {
          var _a = e.map(function (r) {
            return "string" == typeof r && new RegExp("[,()]").test(r) ? "\"".concat(r, "\"") : "".concat(r);
          }).join(",");
          return this.url.searchParams.append(r, "in.(".concat(_a, ")")), this;
        }
      }, {
        key: "contains",
        value: function contains(r, e) {
          return "string" == typeof e ? this.url.searchParams.append(r, "cs.".concat(e)) : Array.isArray(e) ? this.url.searchParams.append(r, "cs.{".concat(e.join(","), "}")) : this.url.searchParams.append(r, "cs.".concat(JSON.stringify(e))), this;
        }
      }, {
        key: "containedBy",
        value: function containedBy(r, e) {
          return "string" == typeof e ? this.url.searchParams.append(r, "cd.".concat(e)) : Array.isArray(e) ? this.url.searchParams.append(r, "cd.{".concat(e.join(","), "}")) : this.url.searchParams.append(r, "cd.".concat(JSON.stringify(e))), this;
        }
      }, {
        key: "rangeGt",
        value: function rangeGt(r, e) {
          return this.url.searchParams.append(r, "sr.".concat(e)), this;
        }
      }, {
        key: "rangeGte",
        value: function rangeGte(r, e) {
          return this.url.searchParams.append(r, "nxl.".concat(e)), this;
        }
      }, {
        key: "rangeLt",
        value: function rangeLt(r, e) {
          return this.url.searchParams.append(r, "sl.".concat(e)), this;
        }
      }, {
        key: "rangeLte",
        value: function rangeLte(r, e) {
          return this.url.searchParams.append(r, "nxr.".concat(e)), this;
        }
      }, {
        key: "rangeAdjacent",
        value: function rangeAdjacent(r, e) {
          return this.url.searchParams.append(r, "adj.".concat(e)), this;
        }
      }, {
        key: "overlaps",
        value: function overlaps(r, e) {
          return "string" == typeof e ? this.url.searchParams.append(r, "ov.".concat(e)) : this.url.searchParams.append(r, "ov.{".concat(e.join(","), "}")), this;
        }
      }, {
        key: "textSearch",
        value: function textSearch(r, e) {
          var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _a2 = _ref7.config,
            s = _ref7.type;
          var t = "";
          "plain" === s ? t = "pl" : "phrase" === s ? t = "ph" : "websearch" === s && (t = "w");
          var i = void 0 === _a2 ? "" : "(".concat(_a2, ")");
          return this.url.searchParams.append(r, "".concat(t, "fts").concat(i, ".").concat(e)), this;
        }
      }, {
        key: "match",
        value: function match(r) {
          var _this3 = this;
          return Object.entries(r).forEach(function (_ref8) {
            var _ref9 = _slicedToArray(_ref8, 2),
              r = _ref9[0],
              e = _ref9[1];
            _this3.url.searchParams.append(r, "eq.".concat(e));
          }), this;
        }
      }, {
        key: "not",
        value: function not(r, e, _a3) {
          return this.url.searchParams.append(r, "not.".concat(e, ".").concat(_a3)), this;
        }
      }, {
        key: "or",
        value: function or(r) {
          var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            e = _ref10.foreignTable;
          var _a4 = e ? "".concat(e, ".or") : "or";
          return this.url.searchParams.append(_a4, "(".concat(r, ")")), this;
        }
      }, {
        key: "filter",
        value: function filter(r, e, _a5) {
          return this.url.searchParams.append(r, "".concat(e, ".").concat(_a5)), this;
        }
      }]);
      return a;
    }(r.default);
    exports.default = a;
  }, {
    "./PostgrestTransformBuilder": "fdtS"
  }],
  "DFNl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = s(require("./PostgrestFilterBuilder"));
    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var t = /*#__PURE__*/function () {
      function t(e, _ref11) {
        var _ref11$headers = _ref11.headers,
          s = _ref11$headers === void 0 ? {} : _ref11$headers,
          _t2 = _ref11.schema,
          r = _ref11.fetch;
        _classCallCheck(this, t);
        this.url = e, this.headers = s, this.schema = _t2, this.fetch = r;
      }
      _createClass(t, [{
        key: "select",
        value: function select(s) {
          var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref12$head = _ref12.head,
            _t3 = _ref12$head === void 0 ? !1 : _ref12$head,
            r = _ref12.count;
          var h = _t3 ? "HEAD" : "GET";
          var a = !1;
          var i = (null != s ? s : "*").split("").map(function (e) {
            return /\s/.test(e) && !a ? "" : ('"' === e && (a = !a), e);
          }).join("");
          return this.url.searchParams.set("select", i), r && (this.headers.Prefer = "count=".concat(r)), new e.default({
            method: h,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
          });
        }
      }, {
        key: "insert",
        value: function insert(s) {
          var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _t4 = _ref13.count,
            _ref13$defaultToNull = _ref13.defaultToNull,
            r = _ref13$defaultToNull === void 0 ? !0 : _ref13$defaultToNull;
          var h = [];
          if (this.headers.Prefer && h.push(this.headers.Prefer), _t4 && h.push("count=".concat(_t4)), r || h.push("missing=default"), this.headers.Prefer = h.join(","), Array.isArray(s)) {
            var _e4 = s.reduce(function (e, s) {
              return e.concat(Object.keys(s));
            }, []);
            if (_e4.length > 0) {
              var _s9 = _toConsumableArray(new Set(_e4)).map(function (e) {
                return "\"".concat(e, "\"");
              });
              this.url.searchParams.set("columns", _s9.join(","));
            }
          }
          return new e.default({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: s,
            fetch: this.fetch,
            allowEmpty: !1
          });
        }
      }, {
        key: "upsert",
        value: function upsert(s) {
          var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _t5 = _ref14.onConflict,
            _ref14$ignoreDuplicat = _ref14.ignoreDuplicates,
            r = _ref14$ignoreDuplicat === void 0 ? !1 : _ref14$ignoreDuplicat,
            h = _ref14.count,
            _ref14$defaultToNull = _ref14.defaultToNull,
            a = _ref14$defaultToNull === void 0 ? !0 : _ref14$defaultToNull;
          var i = ["resolution=".concat(r ? "ignore" : "merge", "-duplicates")];
          if (void 0 !== _t5 && this.url.searchParams.set("on_conflict", _t5), this.headers.Prefer && i.push(this.headers.Prefer), h && i.push("count=".concat(h)), a || i.push("missing=default"), this.headers.Prefer = i.join(","), Array.isArray(s)) {
            var _e5 = s.reduce(function (e, s) {
              return e.concat(Object.keys(s));
            }, []);
            if (_e5.length > 0) {
              var _s10 = _toConsumableArray(new Set(_e5)).map(function (e) {
                return "\"".concat(e, "\"");
              });
              this.url.searchParams.set("columns", _s10.join(","));
            }
          }
          return new e.default({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: s,
            fetch: this.fetch,
            allowEmpty: !1
          });
        }
      }, {
        key: "update",
        value: function update(s) {
          var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _t6 = _ref15.count;
          var r = [];
          return this.headers.Prefer && r.push(this.headers.Prefer), _t6 && r.push("count=".concat(_t6)), this.headers.Prefer = r.join(","), new e.default({
            method: "PATCH",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: s,
            fetch: this.fetch,
            allowEmpty: !1
          });
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            s = _ref16.count;
          var _t7 = [];
          return s && _t7.push("count=".concat(s)), this.headers.Prefer && _t7.unshift(this.headers.Prefer), this.headers.Prefer = _t7.join(","), new e.default({
            method: "DELETE",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
          });
        }
      }]);
      return t;
    }();
    exports.default = t;
  }, {
    "./PostgrestFilterBuilder": "LPuO"
  }],
  "od2S": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.version = void 0;
    var e = "1.7.2";
    exports.version = "1.7.2";
  }, {}],
  "G9lM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.DEFAULT_HEADERS = void 0;
    var e = require("./version");
    var r = {
      "X-Client-Info": "postgrest-js/".concat(e.version)
    };
    exports.DEFAULT_HEADERS = r;
  }, {
    "./version": "od2S"
  }],
  "iieo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("./PostgrestQueryBuilder")),
      t = r(require("./PostgrestFilterBuilder")),
      s = require("./constants");
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var h = /*#__PURE__*/function () {
      function h(e) {
        var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref17$headers = _ref17.headers,
          t = _ref17$headers === void 0 ? {} : _ref17$headers,
          r = _ref17.schema,
          _h = _ref17.fetch;
        _classCallCheck(this, h);
        this.url = e, this.headers = Object.assign(Object.assign({}, s.DEFAULT_HEADERS), t), this.schema = r, this.fetch = _h;
      }
      _createClass(h, [{
        key: "from",
        value: function from(t) {
          var s = new URL("".concat(this.url, "/").concat(t));
          return new e.default(s, {
            headers: Object.assign({}, this.headers),
            schema: this.schema,
            fetch: this.fetch
          });
        }
      }, {
        key: "rpc",
        value: function rpc(e) {
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _ref18 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref18$head = _ref18.head,
            r = _ref18$head === void 0 ? !1 : _ref18$head,
            _h2 = _ref18.count;
          var c;
          var a = new URL("".concat(this.url, "/rpc/").concat(e));
          var i;
          r ? (c = "HEAD", Object.entries(s).forEach(function (_ref19) {
            var _ref20 = _slicedToArray(_ref19, 2),
              e = _ref20[0],
              t = _ref20[1];
            a.searchParams.append(e, "".concat(t));
          })) : (c = "POST", i = s);
          var u = Object.assign({}, this.headers);
          return _h2 && (u.Prefer = "count=".concat(_h2)), new t.default({
            method: c,
            url: a,
            headers: u,
            schema: this.schema,
            body: i,
            fetch: this.fetch,
            allowEmpty: !1
          });
        }
      }]);
      return h;
    }();
    exports.default = h;
  }, {
    "./PostgrestQueryBuilder": "DFNl",
    "./PostgrestFilterBuilder": "LPuO",
    "./constants": "G9lM"
  }],
  "aLgD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "PostgrestBuilder", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "PostgrestClient", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "PostgrestFilterBuilder", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "PostgrestQueryBuilder", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "PostgrestTransformBuilder", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    });
    var e = o(require("./PostgrestClient")),
      r = o(require("./PostgrestQueryBuilder")),
      t = o(require("./PostgrestFilterBuilder")),
      u = o(require("./PostgrestTransformBuilder")),
      n = o(require("./PostgrestBuilder"));
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./PostgrestClient": "iieo",
    "./PostgrestQueryBuilder": "DFNl",
    "./PostgrestFilterBuilder": "LPuO",
    "./PostgrestTransformBuilder": "fdtS",
    "./PostgrestBuilder": "wVX0"
  }],
  "NPI8": [function (require, module, exports) {
    var t = function t() {
      if ("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) return self;
      if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) return window;
      throw new Error("Unable to resolve global `this`");
    };
    module.exports = function () {
      if (this) return this;
      if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) return globalThis;
      try {
        Object.defineProperty(Object.prototype, "__global__", {
          get: function get() {
            return this;
          },
          configurable: !0
        });
      } catch (e) {
        return t();
      }
      try {
        return __global__ || t();
      } finally {
        delete Object.prototype.__global__;
      }
    }();
  }, {}],
  "VKXw": [function (require, module, exports) {
    module.exports = {
      name: "websocket",
      description: "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
      keywords: ["websocket", "websockets", "socket", "networking", "comet", "push", "RFC-6455", "realtime", "server", "client"],
      author: "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
      contributors: ["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],
      version: "1.0.34",
      repository: {
        type: "git",
        url: "https://github.com/theturtle32/WebSocket-Node.git"
      },
      homepage: "https://github.com/theturtle32/WebSocket-Node",
      engines: {
        node: ">=4.0.0"
      },
      dependencies: {
        bufferutil: "^4.0.1",
        debug: "^2.2.0",
        "es5-ext": "^0.10.50",
        "typedarray-to-buffer": "^3.1.5",
        "utf-8-validate": "^5.0.2",
        yaeti: "^0.0.6"
      },
      devDependencies: {
        "buffer-equal": "^1.0.0",
        gulp: "^4.0.2",
        "gulp-jshint": "^2.0.4",
        "jshint-stylish": "^2.2.1",
        jshint: "^2.0.0",
        tape: "^4.9.1"
      },
      config: {
        verbose: !1
      },
      scripts: {
        test: "tape test/unit/*.js",
        gulp: "gulp"
      },
      main: "index",
      directories: {
        lib: "./lib"
      },
      browser: "lib/browser.js",
      license: "Apache-2.0"
    };
  }, {}],
  "CI7o": [function (require, module, exports) {
    module.exports = require("../package.json").version;
  }, {
    "../package.json": "VKXw"
  }],
  "zPp5": [function (require, module, exports) {
    function e(o) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(o);
    }
    var o;
    if ("object" === ("undefined" == typeof globalThis ? "undefined" : e(globalThis))) o = globalThis;else try {
      o = require("es5-ext/global");
    } catch (i) {} finally {
      if (o || "undefined" == typeof window || (o = window), !o) throw new Error("Could not determine global this");
    }
    var t = o.WebSocket || o.MozWebSocket,
      n = require("./version");
    function r(e, o) {
      return o ? new t(e, o) : new t(e);
    }
    t && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
      Object.defineProperty(r, e, {
        get: function get() {
          return t[e];
        }
      });
    }), module.exports = {
      w3cwebsocket: t ? r : null,
      version: n
    };
  }, {
    "es5-ext/global": "NPI8",
    "./version": "CI7o"
  }],
  "JoS8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.version = void 0;
    var e = "2.7.3";
    exports.version = "2.7.3";
  }, {}],
  "IvvP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.WS_CLOSE_NORMAL = exports.VSN = exports.TRANSPORTS = exports.SOCKET_STATES = exports.DEFAULT_TIMEOUT = exports.DEFAULT_HEADERS = exports.CONNECTION_STATE = exports.CHANNEL_STATES = exports.CHANNEL_EVENTS = void 0;
    var e = require("./version");
    var o = {
      "X-Client-Info": "realtime-js/".concat(e.version)
    };
    exports.DEFAULT_HEADERS = o;
    var s = "1.0.0";
    exports.VSN = s;
    var n = 1e4;
    exports.DEFAULT_TIMEOUT = 1e4;
    var r = 1e3;
    var t, T, E, p, S;
    exports.WS_CLOSE_NORMAL = 1e3, exports.SOCKET_STATES = t, function (e) {
      e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed";
    }(t || (exports.SOCKET_STATES = t = {})), exports.CHANNEL_STATES = T, function (e) {
      e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving";
    }(T || (exports.CHANNEL_STATES = T = {})), exports.CHANNEL_EVENTS = E, function (e) {
      e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token";
    }(E || (exports.CHANNEL_EVENTS = E = {})), exports.TRANSPORTS = p, function (e) {
      e.websocket = "websocket";
    }(p || (exports.TRANSPORTS = p = {})), exports.CONNECTION_STATE = S, function (e) {
      e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed";
    }(S || (exports.CONNECTION_STATE = S = {}));
  }, {
    "./version": "JoS8"
  }],
  "bb91": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = /*#__PURE__*/function () {
      function t(_t8, e) {
        _classCallCheck(this, t);
        this.callback = _t8, this.timerCalc = e, this.timer = void 0, this.tries = 0, this.callback = _t8, this.timerCalc = e;
      }
      _createClass(t, [{
        key: "reset",
        value: function reset() {
          this.tries = 0, clearTimeout(this.timer);
        }
      }, {
        key: "scheduleTimeout",
        value: function scheduleTimeout() {
          var _this4 = this;
          clearTimeout(this.timer), this.timer = setTimeout(function () {
            _this4.tries = _this4.tries + 1, _this4.callback();
          }, this.timerCalc(this.tries + 1));
        }
      }]);
      return t;
    }();
    exports.default = t;
  }, {}],
  "leqb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = /*#__PURE__*/function () {
      function e() {
        _classCallCheck(this, e);
        this.HEADER_LENGTH = 1;
      }
      _createClass(e, [{
        key: "decode",
        value: function decode(_e6, t) {
          return _e6.constructor === ArrayBuffer ? t(this._binaryDecode(_e6)) : t("string" == typeof _e6 ? JSON.parse(_e6) : {});
        }
      }, {
        key: "_binaryDecode",
        value: function _binaryDecode(_e7) {
          var t = new DataView(_e7),
            o = new TextDecoder();
          return this._decodeBroadcast(_e7, t, o);
        }
      }, {
        key: "_decodeBroadcast",
        value: function _decodeBroadcast(_e8, t, o) {
          var r = t.getUint8(1),
            c = t.getUint8(2);
          var s = this.HEADER_LENGTH + 2;
          var d = o.decode(_e8.slice(s, s + r));
          s += r;
          var n = o.decode(_e8.slice(s, s + c));
          return s += c, {
            ref: null,
            topic: d,
            event: n,
            payload: JSON.parse(o.decode(_e8.slice(s, _e8.byteLength)))
          };
        }
      }]);
      return e;
    }();
    exports.default = e;
  }, {}],
  "obbr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = require("../lib/constants");
    var t = /*#__PURE__*/function () {
      function t(_t9, i) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.DEFAULT_TIMEOUT;
        _classCallCheck(this, t);
        this.channel = _t9, this.event = i, this.payload = s, this.timeout = h, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null, this.rateLimited = !1;
      }
      _createClass(t, [{
        key: "resend",
        value: function resend(e) {
          this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
        }
      }, {
        key: "send",
        value: function send() {
          if (this._hasReceived("timeout")) return;
          this.startTimeout(), this.sent = !0, "rate limited" === this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
          }) && (this.rateLimited = !0);
        }
      }, {
        key: "updatePayload",
        value: function updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e);
        }
      }, {
        key: "receive",
        value: function receive(e, _t10) {
          var i;
          return this._hasReceived(e) && _t10(null === (i = this.receivedResp) || void 0 === i ? void 0 : i.response), this.recHooks.push({
            status: e,
            callback: _t10
          }), this;
        }
      }, {
        key: "startTimeout",
        value: function startTimeout() {
          var _this5 = this;
          if (this.timeoutTimer) return;
          this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
          this.channel._on(this.refEvent, {}, function (e) {
            _this5._cancelRefEvent(), _this5._cancelTimeout(), _this5.receivedResp = e, _this5._matchReceive(e);
          }), this.timeoutTimer = setTimeout(function () {
            _this5.trigger("timeout", {});
          }, this.timeout);
        }
      }, {
        key: "trigger",
        value: function trigger(e, _t11) {
          this.refEvent && this.channel._trigger(this.refEvent, {
            status: e,
            response: _t11
          });
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this._cancelRefEvent(), this._cancelTimeout();
        }
      }, {
        key: "_cancelRefEvent",
        value: function _cancelRefEvent() {
          this.refEvent && this.channel._off(this.refEvent, {});
        }
      }, {
        key: "_cancelTimeout",
        value: function _cancelTimeout() {
          clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
        }
      }, {
        key: "_matchReceive",
        value: function _matchReceive(_ref21) {
          var e = _ref21.status,
            _t12 = _ref21.response;
          this.recHooks.filter(function (_t13) {
            return _t13.status === e;
          }).forEach(function (e) {
            return e.callback(_t12);
          });
        }
      }, {
        key: "_hasReceived",
        value: function _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }]);
      return t;
    }();
    exports.default = t;
  }, {
    "../lib/constants": "IvvP"
  }],
  "Zfmw": [function (require, module, exports) {
    "use strict";

    var e;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.REALTIME_PRESENCE_LISTEN_EVENTS = void 0, exports.REALTIME_PRESENCE_LISTEN_EVENTS = e, function (e) {
      e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
    }(e || (exports.REALTIME_PRESENCE_LISTEN_EVENTS = e = {}));
    var t = /*#__PURE__*/function () {
      function t(e, n) {
        var _this6 = this;
        _classCallCheck(this, t);
        this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
          onJoin: function onJoin() {},
          onLeave: function onLeave() {},
          onSync: function onSync() {}
        };
        var s = (null == n ? void 0 : n.events) || {
          state: "presence_state",
          diff: "presence_diff"
        };
        this.channel._on(s.state, {}, function (e) {
          var _this6$caller = _this6.caller,
            n = _this6$caller.onJoin,
            s = _this6$caller.onLeave,
            i = _this6$caller.onSync;
          _this6.joinRef = _this6.channel._joinRef(), _this6.state = t.syncState(_this6.state, e, n, s), _this6.pendingDiffs.forEach(function (e) {
            _this6.state = t.syncDiff(_this6.state, e, n, s);
          }), _this6.pendingDiffs = [], i();
        }), this.channel._on(s.diff, {}, function (e) {
          var _this6$caller2 = _this6.caller,
            n = _this6$caller2.onJoin,
            s = _this6$caller2.onLeave,
            i = _this6$caller2.onSync;
          _this6.inPendingSyncState() ? _this6.pendingDiffs.push(e) : (_this6.state = t.syncDiff(_this6.state, e, n, s), i());
        }), this.onJoin(function (e, _t14, n) {
          _this6.channel._trigger("presence", {
            event: "join",
            key: e,
            currentPresences: _t14,
            newPresences: n
          });
        }), this.onLeave(function (e, _t15, n) {
          _this6.channel._trigger("presence", {
            event: "leave",
            key: e,
            currentPresences: _t15,
            leftPresences: n
          });
        }), this.onSync(function () {
          _this6.channel._trigger("presence", {
            event: "sync"
          });
        });
      }
      _createClass(t, [{
        key: "onJoin",
        value: function onJoin(e) {
          this.caller.onJoin = e;
        }
      }, {
        key: "onLeave",
        value: function onLeave(e) {
          this.caller.onLeave = e;
        }
      }, {
        key: "onSync",
        value: function onSync(e) {
          this.caller.onSync = e;
        }
      }, {
        key: "inPendingSyncState",
        value: function inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel._joinRef();
        }
      }], [{
        key: "syncState",
        value: function syncState(e, _t16, n, s) {
          var i = this.cloneDeep(e),
            r = this.transformState(_t16),
            c = {},
            a = {};
          return this.map(i, function (e, _t17) {
            r[e] || (a[e] = _t17);
          }), this.map(r, function (e, _t18) {
            var n = i[e];
            if (n) {
              var _s11 = _t18.map(function (e) {
                  return e.presence_ref;
                }),
                _i2 = n.map(function (e) {
                  return e.presence_ref;
                }),
                _r8 = _t18.filter(function (e) {
                  return _i2.indexOf(e.presence_ref) < 0;
                }),
                o = n.filter(function (e) {
                  return _s11.indexOf(e.presence_ref) < 0;
                });
              _r8.length > 0 && (c[e] = _r8), o.length > 0 && (a[e] = o);
            } else c[e] = _t18;
          }), this.syncDiff(i, {
            joins: c,
            leaves: a
          }, n, s);
        }
      }, {
        key: "syncDiff",
        value: function syncDiff(e, _t19, n, s) {
          var _this7 = this;
          var _joins$leaves = {
              joins: this.transformState(_t19.joins),
              leaves: this.transformState(_t19.leaves)
            },
            i = _joins$leaves.joins,
            r = _joins$leaves.leaves;
          return n || (n = function n() {}), s || (s = function s() {}), this.map(i, function (_t20, s) {
            var i;
            var r = null !== (i = e[_t20]) && void 0 !== i ? i : [];
            if (e[_t20] = _this7.cloneDeep(s), r.length > 0) {
              var _e$_t;
              var _n2 = e[_t20].map(function (e) {
                  return e.presence_ref;
                }),
                _s12 = r.filter(function (e) {
                  return _n2.indexOf(e.presence_ref) < 0;
                });
              (_e$_t = e[_t20]).unshift.apply(_e$_t, _toConsumableArray(_s12));
            }
            n(_t20, r, s);
          }), this.map(r, function (_t21, n) {
            var i = e[_t21];
            if (!i) return;
            var r = n.map(function (e) {
              return e.presence_ref;
            });
            i = i.filter(function (e) {
              return r.indexOf(e.presence_ref) < 0;
            }), e[_t21] = i, s(_t21, i, n), 0 === i.length && delete e[_t21];
          }), e;
        }
      }, {
        key: "map",
        value: function map(e, _t22) {
          return Object.getOwnPropertyNames(e).map(function (n) {
            return _t22(n, e[n]);
          });
        }
      }, {
        key: "transformState",
        value: function transformState(e) {
          return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce(function (_t23, n) {
            var s = e[n];
            return _t23[n] = "metas" in s ? s.metas.map(function (e) {
              return e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e;
            }) : s, _t23;
          }, {});
        }
      }, {
        key: "cloneDeep",
        value: function cloneDeep(e) {
          return JSON.parse(JSON.stringify(e));
        }
      }]);
      return t;
    }();
    exports.default = t;
  }, {}],
  "LRv9": [function (require, module, exports) {
    "use strict";

    var t;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.toTimestampString = exports.toNumber = exports.toJson = exports.toBoolean = exports.toArray = exports.convertColumn = exports.convertChangeData = exports.convertCell = exports.PostgresTypes = void 0, exports.PostgresTypes = t, function (t) {
      t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange";
    }(t || (exports.PostgresTypes = t = {}));
    var e = function e(t, _e9) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var n;
      var o = null !== (n = s.skipTypes) && void 0 !== n ? n : [];
      return Object.keys(_e9).reduce(function (s, n) {
        return s[n] = r(n, t, _e9, o), s;
      }, {});
    };
    exports.convertChangeData = e;
    var r = function r(t, e, _r9, o) {
      var a = e.find(function (e) {
          return e.name === t;
        }),
        i = null == a ? void 0 : a.type,
        c = _r9[t];
      return i && !o.includes(i) ? s(i, c) : n(c);
    };
    exports.convertColumn = r;
    var s = function s(e, r) {
      if ("_" === e.charAt(0)) {
        var _t24 = e.slice(1, e.length);
        return c(r, _t24);
      }
      switch (e) {
        case t.bool:
          return o(r);
        case t.float4:
        case t.float8:
        case t.int2:
        case t.int4:
        case t.int8:
        case t.numeric:
        case t.oid:
          return a(r);
        case t.json:
        case t.jsonb:
          return i(r);
        case t.timestamp:
          return p(r);
        case t.abstime:
        case t.date:
        case t.daterange:
        case t.int4range:
        case t.int8range:
        case t.money:
        case t.reltime:
        case t.text:
        case t.time:
        case t.timestamptz:
        case t.timetz:
        case t.tsrange:
        case t.tstzrange:
        default:
          return n(r);
      }
    };
    exports.convertCell = s;
    var n = function n(t) {
        return t;
      },
      o = function o(t) {
        switch (t) {
          case "t":
            return !0;
          case "f":
            return !1;
          default:
            return t;
        }
      };
    exports.toBoolean = o;
    var a = function a(t) {
      if ("string" == typeof t) {
        var _e10 = parseFloat(t);
        if (!Number.isNaN(_e10)) return _e10;
      }
      return t;
    };
    exports.toNumber = a;
    var i = function i(t) {
      if ("string" == typeof t) try {
        return JSON.parse(t);
      } catch (e) {
        return console.log("JSON parse error: ".concat(e)), t;
      }
      return t;
    };
    exports.toJson = i;
    var c = function c(t, e) {
      if ("string" != typeof t) return t;
      var r = t.length - 1,
        n = t[r];
      if ("{" === t[0] && "}" === n) {
        var _n3;
        var _a6 = t.slice(1, r);
        try {
          _n3 = JSON.parse("[" + _a6 + "]");
        } catch (o) {
          _n3 = _a6 ? _a6.split(",") : [];
        }
        return _n3.map(function (t) {
          return s(e, t);
        });
      }
      return t;
    };
    exports.toArray = c;
    var p = function p(t) {
      return "string" == typeof t ? t.replace(" ", "T") : t;
    };
    exports.toTimestampString = p;
  }, {}],
  "rA8g": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.REALTIME_SUBSCRIBE_STATES = exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = exports.REALTIME_LISTEN_TYPES = void 0;
    var e = require("./lib/constants"),
      t = c(require("./lib/push")),
      i = c(require("./lib/timer")),
      s = c(require("./RealtimePresence")),
      n = r(require("./lib/transformers"));
    function o(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        i = new WeakMap();
      return (o = function o(e) {
        return e ? i : t;
      })(e);
    }
    function r(e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var i = o(t);
      if (i && i.has(e)) return i.get(e);
      var s = {},
        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var r in e) if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
        var c = n ? Object.getOwnPropertyDescriptor(e, r) : null;
        c && (c.get || c.set) ? Object.defineProperty(s, r, c) : s[r] = e[r];
      }
      return s.default = e, i && i.set(e, s), s;
    }
    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var a,
      h,
      u,
      l = function l(e, t, i, s) {
        return new (i || (i = Promise))(function (n, o) {
          function r(e) {
            try {
              a(s.next(e));
            } catch (t) {
              o(t);
            }
          }
          function c(e) {
            try {
              a(s.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
              e(t);
            })).then(r, c);
          }
          a((s = s.apply(e, t || [])).next());
        });
      };
    exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = a, function (e) {
      e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
    }(a || (exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = a = {})), exports.REALTIME_LISTEN_TYPES = h, function (e) {
      e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes";
    }(h || (exports.REALTIME_LISTEN_TYPES = h = {})), exports.REALTIME_SUBSCRIBE_STATES = u, function (e) {
      e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
    }(u || (exports.REALTIME_SUBSCRIBE_STATES = u = {}));
    var d = /*#__PURE__*/function () {
      function d(n) {
        var _this8 = this;
        var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          config: {}
        };
        var r = arguments.length > 2 ? arguments[2] : undefined;
        _classCallCheck(this, d);
        this.topic = n, this.params = o, this.socket = r, this.bindings = {}, this.state = e.CHANNEL_STATES.closed, this.joinedOnce = !1, this.pushBuffer = [], this.params.config = Object.assign({
          broadcast: {
            ack: !1,
            self: !1
          },
          presence: {
            key: ""
          }
        }, o.config), this.timeout = this.socket.timeout, this.joinPush = new t.default(this, e.CHANNEL_EVENTS.join, this.params, this.timeout), this.rejoinTimer = new i.default(function () {
          return _this8._rejoinUntilConnected();
        }, this.socket.reconnectAfterMs), this.joinPush.receive("ok", function () {
          _this8.state = e.CHANNEL_STATES.joined, _this8.rejoinTimer.reset(), _this8.pushBuffer.forEach(function (e) {
            return e.send();
          }), _this8.pushBuffer = [];
        }), this._onClose(function () {
          _this8.rejoinTimer.reset(), _this8.socket.log("channel", "close ".concat(_this8.topic, " ").concat(_this8._joinRef())), _this8.state = e.CHANNEL_STATES.closed, _this8.socket._remove(_this8);
        }), this._onError(function (t) {
          _this8._isLeaving() || _this8._isClosed() || (_this8.socket.log("channel", "error ".concat(_this8.topic), t), _this8.state = e.CHANNEL_STATES.errored, _this8.rejoinTimer.scheduleTimeout());
        }), this.joinPush.receive("timeout", function () {
          _this8._isJoining() && (_this8.socket.log("channel", "timeout ".concat(_this8.topic), _this8.joinPush.timeout), _this8.state = e.CHANNEL_STATES.errored, _this8.rejoinTimer.scheduleTimeout());
        }), this._on(e.CHANNEL_EVENTS.reply, {}, function (e, t) {
          _this8._trigger(_this8._replyEventName(t), e);
        }), this.presence = new s.default(this);
      }
      _createClass(d, [{
        key: "subscribe",
        value: function subscribe(e) {
          var _this9 = this;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.timeout;
          var i, s;
          if (this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            var _this$params$config = this.params.config,
              _n4 = _this$params$config.broadcast,
              _o = _this$params$config.presence;
            this._onError(function (t) {
              return e && e("CHANNEL_ERROR", t);
            }), this._onClose(function () {
              return e && e("CLOSED");
            });
            var _r10 = {},
              _c = {
                broadcast: _n4,
                presence: _o,
                postgres_changes: null !== (s = null === (i = this.bindings.postgres_changes) || void 0 === i ? void 0 : i.map(function (e) {
                  return e.filter;
                })) && void 0 !== s ? s : []
              };
            this.socket.accessToken && (_r10.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({
              config: _c
            }, _r10)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", function (_ref22) {
              var t = _ref22.postgres_changes;
              var i;
              if (_this9.socket.accessToken && _this9.socket.setAuth(_this9.socket.accessToken), void 0 !== t) {
                var _s13 = _this9.bindings.postgres_changes,
                  _n5 = null !== (i = null == _s13 ? void 0 : _s13.length) && void 0 !== i ? i : 0,
                  _o2 = [];
                for (var _i3 = 0; _i3 < _n5; _i3++) {
                  var _n6 = _s13[_i3],
                    _n$filter = _n6.filter,
                    _r11 = _n$filter.event,
                    _c2 = _n$filter.schema,
                    _a7 = _n$filter.table,
                    _h3 = _n$filter.filter,
                    _u = t && t[_i3];
                  if (!_u || _u.event !== _r11 || _u.schema !== _c2 || _u.table !== _a7 || _u.filter !== _h3) return _this9.unsubscribe(), void (e && e("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes")));
                  _o2.push(Object.assign(Object.assign({}, _n6), {
                    id: _u.id
                  }));
                }
                return _this9.bindings.postgres_changes = _o2, void (e && e("SUBSCRIBED"));
              }
              e && e("SUBSCRIBED");
            }).receive("error", function (t) {
              e && e("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(t).join(", ") || "error")));
            }).receive("timeout", function () {
              e && e("TIMED_OUT");
            });
          }
          return this;
        }
      }, {
        key: "presenceState",
        value: function presenceState() {
          return this.presence.state;
        }
      }, {
        key: "track",
        value: function track(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return l(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.send({
                    type: "presence",
                    event: "track",
                    payload: e
                  }, t.timeout || this.timeout);
                case 2:
                  return _context4.abrupt("return", _context4.sent);
                case 3:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "untrack",
        value: function untrack() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return l(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.send({
                    type: "presence",
                    event: "untrack"
                  }, e);
                case 2:
                  return _context5.abrupt("return", _context5.sent);
                case 3:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "on",
        value: function on(e, t, i) {
          return this._on(e, t, i);
        }
      }, {
        key: "send",
        value: function send(e) {
          var _this10 = this;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return new Promise(function (i) {
            var s, n, o;
            var r = _this10._push(e.type, e, t.timeout || _this10.timeout);
            r.rateLimited && i("rate limited"), "broadcast" !== e.type || (null === (o = null === (n = null === (s = _this10.params) || void 0 === s ? void 0 : s.config) || void 0 === n ? void 0 : n.broadcast) || void 0 === o ? void 0 : o.ack) || i("ok"), r.receive("ok", function () {
              return i("ok");
            }), r.receive("timeout", function () {
              return i("timed out");
            });
          });
        }
      }, {
        key: "updateJoinPayload",
        value: function updateJoinPayload(e) {
          this.joinPush.updatePayload(e);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          var _this11 = this;
          var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.timeout;
          this.state = e.CHANNEL_STATES.leaving;
          var s = function s() {
            _this11.socket.log("channel", "leave ".concat(_this11.topic)), _this11._trigger(e.CHANNEL_EVENTS.close, "leave", _this11._joinRef());
          };
          return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise(function (n) {
            var o = new t.default(_this11, e.CHANNEL_EVENTS.leave, {}, i);
            o.receive("ok", function () {
              s(), n("ok");
            }).receive("timeout", function () {
              s(), n("timed out");
            }).receive("error", function () {
              n("error");
            }), o.send(), _this11._canPush() || o.trigger("ok", {});
          });
        }
      }, {
        key: "_push",
        value: function _push(e, i) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.timeout;
          if (!this.joinedOnce) throw "tried to push '".concat(e, "' to '").concat(this.topic, "' before joining. Use channel.subscribe() before pushing events");
          var n = new t.default(this, e, i, s);
          return this._canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)), n;
        }
      }, {
        key: "_onMessage",
        value: function _onMessage(e, t, i) {
          return t;
        }
      }, {
        key: "_isMember",
        value: function _isMember(e) {
          return this.topic === e;
        }
      }, {
        key: "_joinRef",
        value: function _joinRef() {
          return this.joinPush.ref;
        }
      }, {
        key: "_trigger",
        value: function _trigger(t, i, s) {
          var _this12 = this;
          var n, o;
          var r = t.toLocaleLowerCase(),
            _e$CHANNEL_EVENTS = e.CHANNEL_EVENTS,
            c = _e$CHANNEL_EVENTS.close,
            a = _e$CHANNEL_EVENTS.error,
            h = _e$CHANNEL_EVENTS.leave,
            u = _e$CHANNEL_EVENTS.join;
          if (s && [c, a, h, u].indexOf(r) >= 0 && s !== this._joinRef()) return;
          var l = this._onMessage(r, i, s);
          if (i && !l) throw "channel onMessage callbacks must return the payload, modified or unmodified";
          ["insert", "update", "delete"].includes(r) ? null === (n = this.bindings.postgres_changes) || void 0 === n || n.filter(function (e) {
            var t, i, s;
            return "*" === (null === (t = e.filter) || void 0 === t ? void 0 : t.event) || (null === (s = null === (i = e.filter) || void 0 === i ? void 0 : i.event) || void 0 === s ? void 0 : s.toLocaleLowerCase()) === r;
          }).map(function (e) {
            return e.callback(l, s);
          }) : null === (o = this.bindings[r]) || void 0 === o || o.filter(function (e) {
            var t, s, n, o, c, a;
            if (["broadcast", "presence", "postgres_changes"].includes(r)) {
              if ("id" in e) {
                var _o3 = e.id,
                  _r12 = null === (t = e.filter) || void 0 === t ? void 0 : t.event;
                return _o3 && (null === (s = i.ids) || void 0 === s ? void 0 : s.includes(_o3)) && ("*" === _r12 || (null == _r12 ? void 0 : _r12.toLocaleLowerCase()) === (null === (n = i.data) || void 0 === n ? void 0 : n.type.toLocaleLowerCase()));
              }
              {
                var _t25 = null === (c = null === (o = null == e ? void 0 : e.filter) || void 0 === o ? void 0 : o.event) || void 0 === c ? void 0 : c.toLocaleLowerCase();
                return "*" === _t25 || _t25 === (null === (a = null == i ? void 0 : i.event) || void 0 === a ? void 0 : a.toLocaleLowerCase());
              }
            }
            return e.type.toLocaleLowerCase() === r;
          }).map(function (e) {
            if ("object" == _typeof(l) && "ids" in l) {
              var _e11 = l.data,
                _t26 = _e11.schema,
                _i4 = _e11.table,
                _s14 = _e11.commit_timestamp,
                _n7 = _e11.type,
                _o4 = _e11.errors,
                _r13 = {
                  schema: _t26,
                  table: _i4,
                  commit_timestamp: _s14,
                  eventType: _n7,
                  new: {},
                  old: {},
                  errors: _o4
                };
              l = Object.assign(Object.assign({}, _r13), _this12._getPayloadRecords(_e11));
            }
            e.callback(l, s);
          });
        }
      }, {
        key: "_isClosed",
        value: function _isClosed() {
          return this.state === e.CHANNEL_STATES.closed;
        }
      }, {
        key: "_isJoined",
        value: function _isJoined() {
          return this.state === e.CHANNEL_STATES.joined;
        }
      }, {
        key: "_isJoining",
        value: function _isJoining() {
          return this.state === e.CHANNEL_STATES.joining;
        }
      }, {
        key: "_isLeaving",
        value: function _isLeaving() {
          return this.state === e.CHANNEL_STATES.leaving;
        }
      }, {
        key: "_replyEventName",
        value: function _replyEventName(e) {
          return "chan_reply_".concat(e);
        }
      }, {
        key: "_on",
        value: function _on(e, t, i) {
          var s = e.toLocaleLowerCase(),
            n = {
              type: s,
              filter: t,
              callback: i
            };
          return this.bindings[s] ? this.bindings[s].push(n) : this.bindings[s] = [n], this;
        }
      }, {
        key: "_off",
        value: function _off(e, t) {
          var i = e.toLocaleLowerCase();
          return this.bindings[i] = this.bindings[i].filter(function (e) {
            var s;
            return !((null === (s = e.type) || void 0 === s ? void 0 : s.toLocaleLowerCase()) === i && d.isEqual(e.filter, t));
          }), this;
        }
      }, {
        key: "_rejoinUntilConnected",
        value: function _rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
        }
      }, {
        key: "_onClose",
        value: function _onClose(t) {
          this._on(e.CHANNEL_EVENTS.close, {}, t);
        }
      }, {
        key: "_onError",
        value: function _onError(t) {
          this._on(e.CHANNEL_EVENTS.error, {}, function (e) {
            return t(e);
          });
        }
      }, {
        key: "_canPush",
        value: function _canPush() {
          return this.socket.isConnected() && this._isJoined();
        }
      }, {
        key: "_rejoin",
        value: function _rejoin() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.timeout;
          this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = e.CHANNEL_STATES.joining, this.joinPush.resend(t));
        }
      }, {
        key: "_getPayloadRecords",
        value: function _getPayloadRecords(e) {
          var t = {
            new: {},
            old: {}
          };
          return "INSERT" !== e.type && "UPDATE" !== e.type || (t.new = n.convertChangeData(e.columns, e.record)), "UPDATE" !== e.type && "DELETE" !== e.type || (t.old = n.convertChangeData(e.columns, e.old_record)), t;
        }
      }], [{
        key: "isEqual",
        value: function isEqual(e, t) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (var _i5 in e) if (e[_i5] !== t[_i5]) return !1;
          return !0;
        }
      }]);
      return d;
    }();
    exports.default = d;
  }, {
    "./lib/constants": "IvvP",
    "./lib/push": "obbr",
    "./lib/timer": "bb91",
    "./RealtimePresence": "Zfmw",
    "./lib/transformers": "LRv9"
  }],
  "NbQ8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = require("websocket"),
      t = require("./lib/constants"),
      n = r(require("./lib/timer")),
      s = r(require("./lib/serializer")),
      i = r(require("./RealtimeChannel"));
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var o = function o(e, t, n, s) {
      return new (n || (n = Promise))(function (i, r) {
        function o(e) {
          try {
            h(s.next(e));
          } catch (t) {
            r(t);
          }
        }
        function a(e) {
          try {
            h(s.throw(e));
          } catch (t) {
            r(t);
          }
        }
        function h(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(o, a);
        }
        h((s = s.apply(e, t || [])).next());
      });
    };
    var a = function a() {};
    var h = /*#__PURE__*/function () {
      function h(i, r) {
        var _this13 = this;
        _classCallCheck(this, h);
        var _h4;
        this.accessToken = null, this.channels = [], this.endPoint = "", this.headers = t.DEFAULT_HEADERS, this.params = {}, this.timeout = t.DEFAULT_TIMEOUT, this.transport = e.w3cwebsocket, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = a, this.conn = null, this.sendBuffer = [], this.serializer = new s.default(), this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: []
        }, this.eventsPerSecondLimitMs = 100, this.inThrottle = !1, this.endPoint = "".concat(i, "/").concat(t.TRANSPORTS.websocket), (null == r ? void 0 : r.params) && (this.params = r.params), (null == r ? void 0 : r.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), r.headers)), (null == r ? void 0 : r.timeout) && (this.timeout = r.timeout), (null == r ? void 0 : r.logger) && (this.logger = r.logger), (null == r ? void 0 : r.transport) && (this.transport = r.transport), (null == r ? void 0 : r.heartbeatIntervalMs) && (this.heartbeatIntervalMs = r.heartbeatIntervalMs);
        var c = null === (_h4 = null == r ? void 0 : r.params) || void 0 === _h4 ? void 0 : _h4.eventsPerSecond;
        c && (this.eventsPerSecondLimitMs = Math.floor(1e3 / c)), this.reconnectAfterMs = (null == r ? void 0 : r.reconnectAfterMs) ? r.reconnectAfterMs : function (e) {
          return [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4;
        }, this.encode = (null == r ? void 0 : r.encode) ? r.encode : function (e, t) {
          return t(JSON.stringify(e));
        }, this.decode = (null == r ? void 0 : r.decode) ? r.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new n.default(function () {
          return o(_this13, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  this.disconnect(), this.connect();
                case 1:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
        }, this.reconnectAfterMs);
      }
      _createClass(h, [{
        key: "connect",
        value: function connect() {
          var _this14 = this;
          this.conn || (this.conn = new this.transport(this._endPointURL(), [], null, this.headers), this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = function () {
            return _this14._onConnOpen();
          }, this.conn.onerror = function (e) {
            return _this14._onConnError(e);
          }, this.conn.onmessage = function (e) {
            return _this14._onConnMessage(e);
          }, this.conn.onclose = function (e) {
            return _this14._onConnClose(e);
          }));
        }
      }, {
        key: "disconnect",
        value: function disconnect(e, t) {
          this.conn && (this.conn.onclose = function () {}, e ? this.conn.close(e, null != t ? t : "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset());
        }
      }, {
        key: "getChannels",
        value: function getChannels() {
          return this.channels;
        }
      }, {
        key: "removeChannel",
        value: function removeChannel(e) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var t;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return e.unsubscribe();
                case 2:
                  t = _context7.sent;
                  return _context7.abrupt("return", (0 === this.channels.length && this.disconnect(), t));
                case 4:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "removeAllChannels",
        value: function removeAllChannels() {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var e;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return Promise.all(this.channels.map(function (e) {
                    return e.unsubscribe();
                  }));
                case 2:
                  e = _context8.sent;
                  return _context8.abrupt("return", (this.disconnect(), e));
                case 4:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "log",
        value: function log(e, t, n) {
          this.logger(e, t, n);
        }
      }, {
        key: "connectionState",
        value: function connectionState() {
          switch (this.conn && this.conn.readyState) {
            case t.SOCKET_STATES.connecting:
              return t.CONNECTION_STATE.Connecting;
            case t.SOCKET_STATES.open:
              return t.CONNECTION_STATE.Open;
            case t.SOCKET_STATES.closing:
              return t.CONNECTION_STATE.Closing;
            default:
              return t.CONNECTION_STATE.Closed;
          }
        }
      }, {
        key: "isConnected",
        value: function isConnected() {
          return this.connectionState() === t.CONNECTION_STATE.Open;
        }
      }, {
        key: "channel",
        value: function channel(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            config: {}
          };
          this.isConnected() || this.connect();
          var n = new i.default("realtime:".concat(e), t, this);
          return this.channels.push(n), n;
        }
      }, {
        key: "push",
        value: function push(e) {
          var _this15 = this;
          var t = e.topic,
            n = e.event,
            s = e.payload,
            i = e.ref;
          var r = function r() {
            _this15.encode(e, function (e) {
              var t;
              null === (t = _this15.conn) || void 0 === t || t.send(e);
            });
          };
          if (this.log("push", "".concat(t, " ").concat(n, " (").concat(i, ")"), s), this.isConnected()) {
            if (["broadcast", "presence", "postgres_changes"].includes(n)) {
              if (this._throttle(r)()) return "rate limited";
            } else r();
          } else this.sendBuffer.push(r);
        }
      }, {
        key: "setAuth",
        value: function setAuth(e) {
          this.accessToken = e, this.channels.forEach(function (n) {
            e && n.updateJoinPayload({
              access_token: e
            }), n.joinedOnce && n._isJoined() && n._push(t.CHANNEL_EVENTS.access_token, {
              access_token: e
            });
          });
        }
      }, {
        key: "_makeRef",
        value: function _makeRef() {
          var e = this.ref + 1;
          return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
        }
      }, {
        key: "_leaveOpenTopic",
        value: function _leaveOpenTopic(e) {
          var t = this.channels.find(function (t) {
            return t.topic === e && (t._isJoined() || t._isJoining());
          });
          t && (this.log("transport", "leaving duplicate topic \"".concat(e, "\"")), t.unsubscribe());
        }
      }, {
        key: "_remove",
        value: function _remove(e) {
          this.channels = this.channels.filter(function (t) {
            return t._joinRef() !== e._joinRef();
          });
        }
      }, {
        key: "_endPointURL",
        value: function _endPointURL() {
          return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: t.VSN
          }));
        }
      }, {
        key: "_onConnMessage",
        value: function _onConnMessage(e) {
          var _this16 = this;
          this.decode(e.data, function (e) {
            var t = e.topic,
              n = e.event,
              s = e.payload,
              i = e.ref;
            (i && i === _this16.pendingHeartbeatRef || n === (null == s ? void 0 : s.type)) && (_this16.pendingHeartbeatRef = null), _this16.log("receive", "".concat(s.status || "", " ").concat(t, " ").concat(n, " ").concat(i && "(" + i + ")" || ""), s), _this16.channels.filter(function (e) {
              return e._isMember(t);
            }).forEach(function (e) {
              return e._trigger(n, s, i);
            }), _this16.stateChangeCallbacks.message.forEach(function (t) {
              return t(e);
            });
          });
        }
      }, {
        key: "_onConnOpen",
        value: function _onConnOpen() {
          var _this17 = this;
          this.log("transport", "connected to ".concat(this._endPointURL())), this._flushSendBuffer(), this.reconnectTimer.reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(function () {
            return _this17._sendHeartbeat();
          }, this.heartbeatIntervalMs), this.stateChangeCallbacks.open.forEach(function (e) {
            return e();
          });
        }
      }, {
        key: "_onConnClose",
        value: function _onConnClose(e) {
          this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function (t) {
            return t(e);
          });
        }
      }, {
        key: "_onConnError",
        value: function _onConnError(e) {
          this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach(function (t) {
            return t(e);
          });
        }
      }, {
        key: "_triggerChanError",
        value: function _triggerChanError() {
          this.channels.forEach(function (e) {
            return e._trigger(t.CHANNEL_EVENTS.error);
          });
        }
      }, {
        key: "_appendParams",
        value: function _appendParams(e, t) {
          if (0 === Object.keys(t).length) return e;
          var n = e.match(/\?/) ? "&" : "?";
          return "".concat(e).concat(n).concat(new URLSearchParams(t));
        }
      }, {
        key: "_flushSendBuffer",
        value: function _flushSendBuffer() {
          this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function (e) {
            return e();
          }), this.sendBuffer = []);
        }
      }, {
        key: "_sendHeartbeat",
        value: function _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void (null === (e = this.conn) || void 0 === e || e.close(t.WS_CLOSE_NORMAL, "hearbeat timeout"));
            this.pendingHeartbeatRef = this._makeRef(), this.push({
              topic: "phoenix",
              event: "heartbeat",
              payload: {},
              ref: this.pendingHeartbeatRef
            }), this.setAuth(this.accessToken);
          }
        }
      }, {
        key: "_throttle",
        value: function _throttle(e) {
          var _this18 = this;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.eventsPerSecondLimitMs;
          return function () {
            return !!_this18.inThrottle || (e(), t > 0 && (_this18.inThrottle = !0, setTimeout(function () {
              _this18.inThrottle = !1;
            }, t)), !1);
          };
        }
      }]);
      return h;
    }();
    exports.default = h;
  }, {
    "websocket": "zPp5",
    "./lib/constants": "IvvP",
    "./lib/timer": "bb91",
    "./lib/serializer": "leqb",
    "./RealtimeChannel": "rA8g"
  }],
  "DDXl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "REALTIME_LISTEN_TYPES", {
      enumerable: !0,
      get: function get() {
        return t.REALTIME_LISTEN_TYPES;
      }
    }), Object.defineProperty(exports, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", {
      enumerable: !0,
      get: function get() {
        return t.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
      }
    }), Object.defineProperty(exports, "REALTIME_PRESENCE_LISTEN_EVENTS", {
      enumerable: !0,
      get: function get() {
        return r.REALTIME_PRESENCE_LISTEN_EVENTS;
      }
    }), Object.defineProperty(exports, "REALTIME_SUBSCRIBE_STATES", {
      enumerable: !0,
      get: function get() {
        return t.REALTIME_SUBSCRIBE_STATES;
      }
    }), Object.defineProperty(exports, "RealtimeChannel", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "RealtimeClient", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "RealtimePresence", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    });
    var e = o(require("./RealtimeClient")),
      t = u(require("./RealtimeChannel")),
      r = u(require("./RealtimePresence"));
    function n(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (n = function n(e) {
        return e ? r : t;
      })(e);
    }
    function u(e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = n(t);
      if (r && r.has(e)) return r.get(e);
      var u = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var E in e) if ("default" !== E && Object.prototype.hasOwnProperty.call(e, E)) {
        var i = o ? Object.getOwnPropertyDescriptor(e, E) : null;
        i && (i.get || i.set) ? Object.defineProperty(u, E, i) : u[E] = e[E];
      }
      return u.default = e, r && r.set(e, u), u;
    }
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./RealtimeClient": "NbQ8",
    "./RealtimeChannel": "rA8g",
    "./RealtimePresence": "Zfmw"
  }],
  "cgHk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.StorageUnknownError = exports.StorageError = exports.StorageApiError = void 0, exports.isStorageError = t;
    var r = /*#__PURE__*/function (_Error2) {
      _inherits(r, _Error2);
      var _super7 = _createSuper(r);
      function r(_r14) {
        var _this19;
        _classCallCheck(this, r);
        _this19 = _super7.call(this, _r14), _this19.__isStorageError = !0, _this19.name = "StorageError";
        return _this19;
      }
      return _createClass(r);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    function t(r) {
      return "object" == _typeof(r) && null !== r && "__isStorageError" in r;
    }
    exports.StorageError = r;
    var o = /*#__PURE__*/function (_r15) {
      _inherits(o, _r15);
      var _super8 = _createSuper(o);
      function o(r, t) {
        var _this20;
        _classCallCheck(this, o);
        _this20 = _super8.call(this, r), _this20.name = "StorageApiError", _this20.status = t;
        return _this20;
      }
      _createClass(o, [{
        key: "toJSON",
        value: function toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status
          };
        }
      }]);
      return o;
    }(r);
    exports.StorageApiError = o;
    var e = /*#__PURE__*/function (_r16) {
      _inherits(e, _r16);
      var _super9 = _createSuper(e);
      function e(r, t) {
        var _this21;
        _classCallCheck(this, e);
        _this21 = _super9.call(this, r), _this21.name = "StorageUnknownError", _this21.originalError = t;
        return _this21;
      }
      return _createClass(e);
    }(r);
    exports.StorageUnknownError = e;
  }, {}],
  "Bjdf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.resolveResponse = exports.resolveFetch = void 0;
    var e = function e(_e12, o, n, t) {
      return new (n || (n = Promise))(function (r, s) {
        function i(e) {
          try {
            u(t.next(e));
          } catch (o) {
            s(o);
          }
        }
        function c(e) {
          try {
            u(t.throw(e));
          } catch (o) {
            s(o);
          }
        }
        function u(e) {
          var o;
          e.done ? r(e.value) : (o = e.value, o instanceof n ? o : new n(function (e) {
            e(o);
          })).then(i, c);
        }
        u((t = t.apply(_e12, o || [])).next());
      });
    };
    var o = function o(_o5) {
      var n;
      return n = _o5 || ("undefined" == typeof fetch ? function () {
        for (var _len2 = arguments.length, o = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          o[_key2] = arguments[_key2];
        }
        return e(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
          var _yield$require2;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return require("_bundle_loader")(require.resolve("cross-fetch"));
              case 2:
                _context9.next = 4;
                return (_yield$require2 = _context9.sent).fetch.apply(_yield$require2, o);
              case 4:
                return _context9.abrupt("return", _context9.sent);
              case 5:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        }));
      } : fetch), function () {
        return n.apply(void 0, arguments);
      };
    };
    exports.resolveFetch = o;
    var n = function n() {
      return e(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!("undefined" == typeof Response)) {
                _context10.next = 6;
                break;
              }
              _context10.next = 3;
              return require("_bundle_loader")(require.resolve("cross-fetch"));
            case 3:
              _context10.t0 = _context10.sent.Response;
              _context10.next = 7;
              break;
            case 6:
              _context10.t0 = Response;
            case 7:
              return _context10.abrupt("return", _context10.t0);
            case 8:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
    };
    exports.resolveResponse = n;
  }, {
    "_bundle_loader": "ZOfP",
    "cross-fetch": [["browser-ponyfill.79a645bd.js", "vTPr"], "browser-ponyfill.79a645bd.js.map", "vTPr"]
  }],
  "ZehH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.get = u, exports.post = c, exports.put = d, exports.remove = a;
    var n = require("./errors"),
      e = require("./helpers"),
      t = function t(n, e, _t27, o) {
        return new (_t27 || (_t27 = Promise))(function (r, i) {
          function s(n) {
            try {
              c(o.next(n));
            } catch (e) {
              i(e);
            }
          }
          function u(n) {
            try {
              c(o.throw(n));
            } catch (e) {
              i(e);
            }
          }
          function c(n) {
            var e;
            n.done ? r(n.value) : (e = n.value, e instanceof _t27 ? e : new _t27(function (n) {
              n(e);
            })).then(s, u);
          }
          c((o = o.apply(n, e || [])).next());
        });
      };
    var o = function o(n) {
        return n.msg || n.message || n.error_description || n.error || JSON.stringify(n);
      },
      r = function r(_r17, i) {
        return t(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
          var t;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return (0, e.resolveResponse)();
              case 2:
                t = _context11.sent;
                _r17 instanceof t ? _r17.json().then(function (e) {
                  i(new n.StorageApiError(o(e), _r17.status || 500));
                }).catch(function (e) {
                  i(new n.StorageUnknownError(o(e), e));
                }) : i(new n.StorageUnknownError(o(_r17), _r17));
              case 4:
              case "end":
                return _context11.stop();
            }
          }, _callee11);
        }));
      },
      i = function i(n, e, t, o) {
        var r = {
          method: n,
          headers: (null == e ? void 0 : e.headers) || {}
        };
        return "GET" === n ? r : (r.headers = Object.assign({
          "Content-Type": "application/json"
        }, null == e ? void 0 : e.headers), r.body = JSON.stringify(o), Object.assign(Object.assign({}, r), t));
      };
    function s(n, e, o, s, u, c) {
      return t(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", new Promise(function (t, d) {
                n(o, i(e, s, u, c)).then(function (n) {
                  if (!n.ok) throw n;
                  return (null == s ? void 0 : s.noResolveJson) ? n : n.json();
                }).then(function (n) {
                  return t(n);
                }).catch(function (n) {
                  return r(n, d);
                });
              }));
            case 1:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
    }
    function u(n, e, o, r) {
      return t(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", s(n, "GET", e, o, r));
            case 1:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
    }
    function c(n, e, o, r, i) {
      return t(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", s(n, "POST", e, r, i, o));
            case 1:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
    }
    function d(n, e, o, r, i) {
      return t(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", s(n, "PUT", e, r, i, o));
            case 1:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
    }
    function a(n, e, o, r, i) {
      return t(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", s(n, "DELETE", e, r, i, o));
            case 1:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
    }
  }, {
    "./errors": "cgHk",
    "./helpers": "Bjdf"
  }],
  "xig4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = require("../lib/errors"),
      e = require("../lib/fetch"),
      r = require("../lib/helpers"),
      o = function o(t, e, r, _o6) {
        return new (r || (r = Promise))(function (n, i) {
          function a(t) {
            try {
              d(_o6.next(t));
            } catch (e) {
              i(e);
            }
          }
          function s(t) {
            try {
              d(_o6.throw(t));
            } catch (e) {
              i(e);
            }
          }
          function d(t) {
            var e;
            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function (t) {
              t(e);
            })).then(a, s);
          }
          d((_o6 = _o6.apply(t, e || [])).next());
        });
      };
    var n = {
        limit: 100,
        offset: 0,
        sortBy: {
          column: "name",
          order: "asc"
        }
      },
      i = {
        cacheControl: "3600",
        contentType: "text/plain;charset=UTF-8",
        upsert: !1
      };
    var a = /*#__PURE__*/function () {
      function a(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var o = arguments.length > 2 ? arguments[2] : undefined;
        var n = arguments.length > 3 ? arguments[3] : undefined;
        _classCallCheck(this, a);
        this.url = t, this.headers = e, this.bucketId = o, this.fetch = (0, r.resolveFetch)(n);
      }
      _createClass(a, [{
        key: "uploadOrUpdate",
        value: function uploadOrUpdate(e, r, n, _a8) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            var s, d, l, h, u, c;
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.prev = 0;
                  d = Object.assign(Object.assign({}, i), _a8), l = Object.assign(Object.assign({}, this.headers), "POST" === e && {
                    "x-upsert": String(d.upsert)
                  });
                  "undefined" != typeof Blob && n instanceof Blob ? ((s = new FormData()).append("cacheControl", d.cacheControl), s.append("", n)) : "undefined" != typeof FormData && n instanceof FormData ? (s = n).append("cacheControl", d.cacheControl) : (s = n, l["cache-control"] = "max-age=".concat(d.cacheControl), l["content-type"] = d.contentType);
                  h = this._removeEmptyFolders(r);
                  u = this._getFinalPath(h);
                  _context17.next = 7;
                  return this.fetch("".concat(this.url, "/object/").concat(u), Object.assign({
                    method: e,
                    body: s,
                    headers: l
                  }, (null == d ? void 0 : d.duplex) ? {
                    duplex: d.duplex
                  } : {}));
                case 7:
                  c = _context17.sent;
                  if (!c.ok) {
                    _context17.next = 10;
                    break;
                  }
                  return _context17.abrupt("return", {
                    data: {
                      path: h
                    },
                    error: null
                  });
                case 10:
                  _context17.next = 12;
                  return c.json();
                case 12:
                  _context17.t0 = _context17.sent;
                  return _context17.abrupt("return", {
                    data: null,
                    error: _context17.t0
                  });
                case 16:
                  _context17.prev = 16;
                  _context17.t1 = _context17["catch"](0);
                  if (!(0, t.isStorageError)(_context17.t1)) {
                    _context17.next = 20;
                    break;
                  }
                  return _context17.abrupt("return", {
                    data: null,
                    error: _context17.t1
                  });
                case 20:
                  throw _context17.t1;
                case 21:
                case "end":
                  return _context17.stop();
              }
            }, _callee17, this, [[0, 16]]);
          }));
        }
      }, {
        key: "upload",
        value: function upload(t, e, r) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  return _context18.abrupt("return", this.uploadOrUpdate("POST", t, e, r));
                case 1:
                case "end":
                  return _context18.stop();
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "uploadToSignedUrl",
        value: function uploadToSignedUrl(e, r, n, _a9) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
            var o, s, d, _e13, _r18, _s15, h;
            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  o = this._removeEmptyFolders(e), s = this._getFinalPath(o), d = new URL(this.url + "/object/upload/sign/".concat(s));
                  d.searchParams.set("token", r);
                  _context19.prev = 2;
                  _r18 = Object.assign({
                    upsert: i.upsert
                  }, _a9), _s15 = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(_r18.upsert)
                  });
                  "undefined" != typeof Blob && n instanceof Blob ? ((_e13 = new FormData()).append("cacheControl", _r18.cacheControl), _e13.append("", n)) : "undefined" != typeof FormData && n instanceof FormData ? (_e13 = n).append("cacheControl", _r18.cacheControl) : (_e13 = n, _s15["cache-control"] = "max-age=".concat(_r18.cacheControl), _s15["content-type"] = _r18.contentType);
                  _context19.next = 7;
                  return this.fetch(d.toString(), {
                    method: "PUT",
                    body: _e13,
                    headers: _s15
                  });
                case 7:
                  h = _context19.sent;
                  if (!h.ok) {
                    _context19.next = 10;
                    break;
                  }
                  return _context19.abrupt("return", {
                    data: {
                      path: o
                    },
                    error: null
                  });
                case 10:
                  _context19.next = 12;
                  return h.json();
                case 12:
                  _context19.t0 = _context19.sent;
                  return _context19.abrupt("return", {
                    data: null,
                    error: _context19.t0
                  });
                case 16:
                  _context19.prev = 16;
                  _context19.t1 = _context19["catch"](2);
                  if (!(0, t.isStorageError)(_context19.t1)) {
                    _context19.next = 20;
                    break;
                  }
                  return _context19.abrupt("return", {
                    data: null,
                    error: _context19.t1
                  });
                case 20:
                  throw _context19.t1;
                case 21:
                case "end":
                  return _context19.stop();
              }
            }, _callee19, this, [[2, 16]]);
          }));
        }
      }, {
        key: "createSignedUploadUrl",
        value: function createSignedUploadUrl(r) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
            var _n8, _i6, _a12, s;
            return _regeneratorRuntime().wrap(function _callee20$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.prev = 0;
                  _n8 = this._getFinalPath(r);
                  _context20.next = 4;
                  return (0, e.post)(this.fetch, "".concat(this.url, "/object/upload/sign/").concat(_n8), {}, {
                    headers: this.headers
                  });
                case 4:
                  _i6 = _context20.sent;
                  _a12 = new URL(this.url + _i6.url);
                  s = _a12.searchParams.get("token");
                  if (s) {
                    _context20.next = 9;
                    break;
                  }
                  throw new t.StorageError("No token returned by API");
                case 9:
                  return _context20.abrupt("return", {
                    data: {
                      signedUrl: _a12.toString(),
                      path: r,
                      token: s
                    },
                    error: null
                  });
                case 12:
                  _context20.prev = 12;
                  _context20.t0 = _context20["catch"](0);
                  if (!(0, t.isStorageError)(_context20.t0)) {
                    _context20.next = 16;
                    break;
                  }
                  return _context20.abrupt("return", {
                    data: null,
                    error: _context20.t0
                  });
                case 16:
                  throw _context20.t0;
                case 17:
                case "end":
                  return _context20.stop();
              }
            }, _callee20, this, [[0, 12]]);
          }));
        }
      }, {
        key: "update",
        value: function update(t, e, r) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
            return _regeneratorRuntime().wrap(function _callee21$(_context21) {
              while (1) switch (_context21.prev = _context21.next) {
                case 0:
                  return _context21.abrupt("return", this.uploadOrUpdate("PUT", t, e, r));
                case 1:
                case "end":
                  return _context21.stop();
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "move",
        value: function move(r, n) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
            return _regeneratorRuntime().wrap(function _callee22$(_context22) {
              while (1) switch (_context22.prev = _context22.next) {
                case 0:
                  _context22.prev = 0;
                  _context22.next = 3;
                  return (0, e.post)(this.fetch, "".concat(this.url, "/object/move"), {
                    bucketId: this.bucketId,
                    sourceKey: r,
                    destinationKey: n
                  }, {
                    headers: this.headers
                  });
                case 3:
                  _context22.t0 = _context22.sent;
                  return _context22.abrupt("return", {
                    data: _context22.t0,
                    error: null
                  });
                case 7:
                  _context22.prev = 7;
                  _context22.t1 = _context22["catch"](0);
                  if (!(0, t.isStorageError)(_context22.t1)) {
                    _context22.next = 11;
                    break;
                  }
                  return _context22.abrupt("return", {
                    data: null,
                    error: _context22.t1
                  });
                case 11:
                  throw _context22.t1;
                case 12:
                case "end":
                  return _context22.stop();
              }
            }, _callee22, this, [[0, 7]]);
          }));
        }
      }, {
        key: "copy",
        value: function copy(r, n) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
            return _regeneratorRuntime().wrap(function _callee23$(_context23) {
              while (1) switch (_context23.prev = _context23.next) {
                case 0:
                  _context23.prev = 0;
                  _context23.next = 3;
                  return (0, e.post)(this.fetch, "".concat(this.url, "/object/copy"), {
                    bucketId: this.bucketId,
                    sourceKey: r,
                    destinationKey: n
                  }, {
                    headers: this.headers
                  });
                case 3:
                  _context23.t0 = _context23.sent.Key;
                  _context23.t1 = {
                    path: _context23.t0
                  };
                  return _context23.abrupt("return", {
                    data: _context23.t1,
                    error: null
                  });
                case 8:
                  _context23.prev = 8;
                  _context23.t2 = _context23["catch"](0);
                  if (!(0, t.isStorageError)(_context23.t2)) {
                    _context23.next = 12;
                    break;
                  }
                  return _context23.abrupt("return", {
                    data: null,
                    error: _context23.t2
                  });
                case 12:
                  throw _context23.t2;
                case 13:
                case "end":
                  return _context23.stop();
              }
            }, _callee23, this, [[0, 8]]);
          }));
        }
      }, {
        key: "createSignedUrl",
        value: function createSignedUrl(r, n, i) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
            var _a13, s, d;
            return _regeneratorRuntime().wrap(function _callee24$(_context24) {
              while (1) switch (_context24.prev = _context24.next) {
                case 0:
                  _context24.prev = 0;
                  _a13 = this._getFinalPath(r);
                  _context24.next = 4;
                  return (0, e.post)(this.fetch, "".concat(this.url, "/object/sign/").concat(_a13), Object.assign({
                    expiresIn: n
                  }, (null == i ? void 0 : i.transform) ? {
                    transform: i.transform
                  } : {}), {
                    headers: this.headers
                  });
                case 4:
                  s = _context24.sent;
                  d = (null == i ? void 0 : i.download) ? "&download=".concat(!0 === i.download ? "" : i.download) : "";
                  return _context24.abrupt("return", {
                    data: s = {
                      signedUrl: encodeURI("".concat(this.url).concat(s.signedURL).concat(d))
                    },
                    error: null
                  });
                case 9:
                  _context24.prev = 9;
                  _context24.t0 = _context24["catch"](0);
                  if (!(0, t.isStorageError)(_context24.t0)) {
                    _context24.next = 13;
                    break;
                  }
                  return _context24.abrupt("return", {
                    data: null,
                    error: _context24.t0
                  });
                case 13:
                  throw _context24.t0;
                case 14:
                case "end":
                  return _context24.stop();
              }
            }, _callee24, this, [[0, 9]]);
          }));
        }
      }, {
        key: "createSignedUrls",
        value: function createSignedUrls(r, n, i) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
            var _this22 = this;
            var _a14, s;
            return _regeneratorRuntime().wrap(function _callee25$(_context25) {
              while (1) switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.prev = 0;
                  _context25.next = 3;
                  return (0, e.post)(this.fetch, "".concat(this.url, "/object/sign/").concat(this.bucketId), {
                    expiresIn: n,
                    paths: r
                  }, {
                    headers: this.headers
                  });
                case 3:
                  _a14 = _context25.sent;
                  s = (null == i ? void 0 : i.download) ? "&download=".concat(!0 === i.download ? "" : i.download) : "";
                  return _context25.abrupt("return", {
                    data: _a14.map(function (t) {
                      return Object.assign(Object.assign({}, t), {
                        signedUrl: t.signedURL ? encodeURI("".concat(_this22.url).concat(t.signedURL).concat(s)) : null
                      });
                    }),
                    error: null
                  });
                case 8:
                  _context25.prev = 8;
                  _context25.t0 = _context25["catch"](0);
                  if (!(0, t.isStorageError)(_context25.t0)) {
                    _context25.next = 12;
                    break;
                  }
                  return _context25.abrupt("return", {
                    data: null,
                    error: _context25.t0
                  });
                case 12:
                  throw _context25.t0;
                case 13:
                case "end":
                  return _context25.stop();
              }
            }, _callee25, this, [[0, 8]]);
          }));
        }
      }, {
        key: "download",
        value: function download(r, n) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
            var o, i, a, _n9, _i7;
            return _regeneratorRuntime().wrap(function _callee26$(_context26) {
              while (1) switch (_context26.prev = _context26.next) {
                case 0:
                  o = void 0 !== (null == n ? void 0 : n.transform) ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString((null == n ? void 0 : n.transform) || {}), a = i ? "?".concat(i) : "";
                  _context26.prev = 1;
                  _n9 = this._getFinalPath(r);
                  _context26.next = 5;
                  return (0, e.get)(this.fetch, "".concat(this.url, "/").concat(o, "/").concat(_n9).concat(a), {
                    headers: this.headers,
                    noResolveJson: !0
                  });
                case 5:
                  _i7 = _context26.sent;
                  _context26.next = 8;
                  return _i7.blob();
                case 8:
                  _context26.t0 = _context26.sent;
                  return _context26.abrupt("return", {
                    data: _context26.t0,
                    error: null
                  });
                case 12:
                  _context26.prev = 12;
                  _context26.t1 = _context26["catch"](1);
                  if (!(0, t.isStorageError)(_context26.t1)) {
                    _context26.next = 16;
                    break;
                  }
                  return _context26.abrupt("return", {
                    data: null,
                    error: _context26.t1
                  });
                case 16:
                  throw _context26.t1;
                case 17:
                case "end":
                  return _context26.stop();
              }
            }, _callee26, this, [[1, 12]]);
          }));
        }
      }, {
        key: "getPublicUrl",
        value: function getPublicUrl(t, e) {
          var r = this._getFinalPath(t),
            o = [],
            n = (null == e ? void 0 : e.download) ? "download=".concat(!0 === e.download ? "" : e.download) : "";
          "" !== n && o.push(n);
          var i = void 0 !== (null == e ? void 0 : e.transform) ? "render/image" : "object",
            _a10 = this.transformOptsToQueryString((null == e ? void 0 : e.transform) || {});
          "" !== _a10 && o.push(_a10);
          var s = o.join("&");
          return "" !== s && (s = "?".concat(s)), {
            data: {
              publicUrl: encodeURI("".concat(this.url, "/").concat(i, "/public/").concat(r).concat(s))
            }
          };
        }
      }, {
        key: "remove",
        value: function remove(r) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
            return _regeneratorRuntime().wrap(function _callee27$(_context27) {
              while (1) switch (_context27.prev = _context27.next) {
                case 0:
                  _context27.prev = 0;
                  _context27.next = 3;
                  return (0, e.remove)(this.fetch, "".concat(this.url, "/object/").concat(this.bucketId), {
                    prefixes: r
                  }, {
                    headers: this.headers
                  });
                case 3:
                  _context27.t0 = _context27.sent;
                  return _context27.abrupt("return", {
                    data: _context27.t0,
                    error: null
                  });
                case 7:
                  _context27.prev = 7;
                  _context27.t1 = _context27["catch"](0);
                  if (!(0, t.isStorageError)(_context27.t1)) {
                    _context27.next = 11;
                    break;
                  }
                  return _context27.abrupt("return", {
                    data: null,
                    error: _context27.t1
                  });
                case 11:
                  throw _context27.t1;
                case 12:
                case "end":
                  return _context27.stop();
              }
            }, _callee27, this, [[0, 7]]);
          }));
        }
      }, {
        key: "list",
        value: function list(r, i, _a11) {
          return o(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
            var s;
            return _regeneratorRuntime().wrap(function _callee28$(_context28) {
              while (1) switch (_context28.prev = _context28.next) {
                case 0:
                  _context28.prev = 0;
                  s = Object.assign(Object.assign(Object.assign({}, n), i), {
                    prefix: r || ""
                  });
                  _context28.next = 4;
                  return (0, e.post)(this.fetch, "".concat(this.url, "/object/list/").concat(this.bucketId), s, {
                    headers: this.headers
                  }, _a11);
                case 4:
                  _context28.t0 = _context28.sent;
                  return _context28.abrupt("return", {
                    data: _context28.t0,
                    error: null
                  });
                case 8:
                  _context28.prev = 8;
                  _context28.t1 = _context28["catch"](0);
                  if (!(0, t.isStorageError)(_context28.t1)) {
                    _context28.next = 12;
                    break;
                  }
                  return _context28.abrupt("return", {
                    data: null,
                    error: _context28.t1
                  });
                case 12:
                  throw _context28.t1;
                case 13:
                case "end":
                  return _context28.stop();
              }
            }, _callee28, this, [[0, 8]]);
          }));
        }
      }, {
        key: "_getFinalPath",
        value: function _getFinalPath(t) {
          return "".concat(this.bucketId, "/").concat(t);
        }
      }, {
        key: "_removeEmptyFolders",
        value: function _removeEmptyFolders(t) {
          return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
      }, {
        key: "transformOptsToQueryString",
        value: function transformOptsToQueryString(t) {
          var e = [];
          return t.width && e.push("width=".concat(t.width)), t.height && e.push("height=".concat(t.height)), t.resize && e.push("resize=".concat(t.resize)), t.format && e.push("format=".concat(t.format)), t.quality && e.push("quality=".concat(t.quality)), e.join("&");
        }
      }]);
      return a;
    }();
    exports.default = a;
  }, {
    "../lib/errors": "cgHk",
    "../lib/fetch": "ZehH",
    "../lib/helpers": "Bjdf"
  }],
  "Y73Z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.version = void 0;
    var e = "2.5.1";
    exports.version = "2.5.1";
  }, {}],
  "QLW7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.DEFAULT_HEADERS = void 0;
    var e = require("./version");
    var r = {
      "X-Client-Info": "storage-js/".concat(e.version)
    };
    exports.DEFAULT_HEADERS = r;
  }, {
    "./version": "Y73Z"
  }],
  "FZZb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = require("../lib/constants"),
      r = require("../lib/errors"),
      t = require("../lib/fetch"),
      i = require("../lib/helpers"),
      u = function u(e, r, t, i) {
        return new (t || (t = Promise))(function (u, o) {
          function s(e) {
            try {
              l(i.next(e));
            } catch (r) {
              o(r);
            }
          }
          function a(e) {
            try {
              l(i.throw(e));
            } catch (r) {
              o(r);
            }
          }
          function l(e) {
            var r;
            e.done ? u(e.value) : (r = e.value, r instanceof t ? r : new t(function (e) {
              e(r);
            })).then(s, a);
          }
          l((i = i.apply(e, r || [])).next());
        });
      };
    var o = /*#__PURE__*/function () {
      function o(r) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var u = arguments.length > 2 ? arguments[2] : undefined;
        _classCallCheck(this, o);
        this.url = r, this.headers = Object.assign(Object.assign({}, e.DEFAULT_HEADERS), t), this.fetch = (0, i.resolveFetch)(u);
      }
      _createClass(o, [{
        key: "listBuckets",
        value: function listBuckets() {
          return u(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
            return _regeneratorRuntime().wrap(function _callee29$(_context29) {
              while (1) switch (_context29.prev = _context29.next) {
                case 0:
                  _context29.prev = 0;
                  _context29.next = 3;
                  return (0, t.get)(this.fetch, "".concat(this.url, "/bucket"), {
                    headers: this.headers
                  });
                case 3:
                  _context29.t0 = _context29.sent;
                  return _context29.abrupt("return", {
                    data: _context29.t0,
                    error: null
                  });
                case 7:
                  _context29.prev = 7;
                  _context29.t1 = _context29["catch"](0);
                  if (!(0, r.isStorageError)(_context29.t1)) {
                    _context29.next = 11;
                    break;
                  }
                  return _context29.abrupt("return", {
                    data: null,
                    error: _context29.t1
                  });
                case 11:
                  throw _context29.t1;
                case 12:
                case "end":
                  return _context29.stop();
              }
            }, _callee29, this, [[0, 7]]);
          }));
        }
      }, {
        key: "getBucket",
        value: function getBucket(e) {
          return u(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
            return _regeneratorRuntime().wrap(function _callee30$(_context30) {
              while (1) switch (_context30.prev = _context30.next) {
                case 0:
                  _context30.prev = 0;
                  _context30.next = 3;
                  return (0, t.get)(this.fetch, "".concat(this.url, "/bucket/").concat(e), {
                    headers: this.headers
                  });
                case 3:
                  _context30.t0 = _context30.sent;
                  return _context30.abrupt("return", {
                    data: _context30.t0,
                    error: null
                  });
                case 7:
                  _context30.prev = 7;
                  _context30.t1 = _context30["catch"](0);
                  if (!(0, r.isStorageError)(_context30.t1)) {
                    _context30.next = 11;
                    break;
                  }
                  return _context30.abrupt("return", {
                    data: null,
                    error: _context30.t1
                  });
                case 11:
                  throw _context30.t1;
                case 12:
                case "end":
                  return _context30.stop();
              }
            }, _callee30, this, [[0, 7]]);
          }));
        }
      }, {
        key: "createBucket",
        value: function createBucket(e) {
          var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            public: !1
          };
          return u(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
            return _regeneratorRuntime().wrap(function _callee31$(_context31) {
              while (1) switch (_context31.prev = _context31.next) {
                case 0:
                  _context31.prev = 0;
                  _context31.next = 3;
                  return (0, t.post)(this.fetch, "".concat(this.url, "/bucket"), {
                    id: e,
                    name: e,
                    public: i.public,
                    file_size_limit: i.fileSizeLimit,
                    allowed_mime_types: i.allowedMimeTypes
                  }, {
                    headers: this.headers
                  });
                case 3:
                  _context31.t0 = _context31.sent;
                  return _context31.abrupt("return", {
                    data: _context31.t0,
                    error: null
                  });
                case 7:
                  _context31.prev = 7;
                  _context31.t1 = _context31["catch"](0);
                  if (!(0, r.isStorageError)(_context31.t1)) {
                    _context31.next = 11;
                    break;
                  }
                  return _context31.abrupt("return", {
                    data: null,
                    error: _context31.t1
                  });
                case 11:
                  throw _context31.t1;
                case 12:
                case "end":
                  return _context31.stop();
              }
            }, _callee31, this, [[0, 7]]);
          }));
        }
      }, {
        key: "updateBucket",
        value: function updateBucket(e, i) {
          return u(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
            return _regeneratorRuntime().wrap(function _callee32$(_context32) {
              while (1) switch (_context32.prev = _context32.next) {
                case 0:
                  _context32.prev = 0;
                  _context32.next = 3;
                  return (0, t.put)(this.fetch, "".concat(this.url, "/bucket/").concat(e), {
                    id: e,
                    name: e,
                    public: i.public,
                    file_size_limit: i.fileSizeLimit,
                    allowed_mime_types: i.allowedMimeTypes
                  }, {
                    headers: this.headers
                  });
                case 3:
                  _context32.t0 = _context32.sent;
                  return _context32.abrupt("return", {
                    data: _context32.t0,
                    error: null
                  });
                case 7:
                  _context32.prev = 7;
                  _context32.t1 = _context32["catch"](0);
                  if (!(0, r.isStorageError)(_context32.t1)) {
                    _context32.next = 11;
                    break;
                  }
                  return _context32.abrupt("return", {
                    data: null,
                    error: _context32.t1
                  });
                case 11:
                  throw _context32.t1;
                case 12:
                case "end":
                  return _context32.stop();
              }
            }, _callee32, this, [[0, 7]]);
          }));
        }
      }, {
        key: "emptyBucket",
        value: function emptyBucket(e) {
          return u(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
            return _regeneratorRuntime().wrap(function _callee33$(_context33) {
              while (1) switch (_context33.prev = _context33.next) {
                case 0:
                  _context33.prev = 0;
                  _context33.next = 3;
                  return (0, t.post)(this.fetch, "".concat(this.url, "/bucket/").concat(e, "/empty"), {}, {
                    headers: this.headers
                  });
                case 3:
                  _context33.t0 = _context33.sent;
                  return _context33.abrupt("return", {
                    data: _context33.t0,
                    error: null
                  });
                case 7:
                  _context33.prev = 7;
                  _context33.t1 = _context33["catch"](0);
                  if (!(0, r.isStorageError)(_context33.t1)) {
                    _context33.next = 11;
                    break;
                  }
                  return _context33.abrupt("return", {
                    data: null,
                    error: _context33.t1
                  });
                case 11:
                  throw _context33.t1;
                case 12:
                case "end":
                  return _context33.stop();
              }
            }, _callee33, this, [[0, 7]]);
          }));
        }
      }, {
        key: "deleteBucket",
        value: function deleteBucket(e) {
          return u(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
            return _regeneratorRuntime().wrap(function _callee34$(_context34) {
              while (1) switch (_context34.prev = _context34.next) {
                case 0:
                  _context34.prev = 0;
                  _context34.next = 3;
                  return (0, t.remove)(this.fetch, "".concat(this.url, "/bucket/").concat(e), {}, {
                    headers: this.headers
                  });
                case 3:
                  _context34.t0 = _context34.sent;
                  return _context34.abrupt("return", {
                    data: _context34.t0,
                    error: null
                  });
                case 7:
                  _context34.prev = 7;
                  _context34.t1 = _context34["catch"](0);
                  if (!(0, r.isStorageError)(_context34.t1)) {
                    _context34.next = 11;
                    break;
                  }
                  return _context34.abrupt("return", {
                    data: null,
                    error: _context34.t1
                  });
                case 11:
                  throw _context34.t1;
                case 12:
                case "end":
                  return _context34.stop();
              }
            }, _callee34, this, [[0, 7]]);
          }));
        }
      }]);
      return o;
    }();
    exports.default = o;
  }, {
    "../lib/constants": "QLW7",
    "../lib/errors": "cgHk",
    "../lib/fetch": "ZehH",
    "../lib/helpers": "Bjdf"
  }],
  "x3Vi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.StorageClient = void 0;
    var e = r(require("./packages/StorageFileApi")),
      t = r(require("./packages/StorageBucketApi"));
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var s = /*#__PURE__*/function (_t$default) {
      _inherits(s, _t$default);
      var _super10 = _createSuper(s);
      function s(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var r = arguments.length > 2 ? arguments[2] : undefined;
        _classCallCheck(this, s);
        return _super10.call(this, e, t, r);
      }
      _createClass(s, [{
        key: "from",
        value: function from(t) {
          return new e.default(this.url, this.headers, t, this.fetch);
        }
      }]);
      return s;
    }(t.default);
    exports.StorageClient = s;
  }, {
    "./packages/StorageFileApi": "xig4",
    "./packages/StorageBucketApi": "FZZb"
  }],
  "kHZ4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
  }, {}],
  "ToC9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var e = {
      StorageClient: !0
    };
    Object.defineProperty(exports, "StorageClient", {
      enumerable: !0,
      get: function get() {
        return r.StorageClient;
      }
    });
    var r = require("./StorageClient"),
      t = require("./lib/types");
    Object.keys(t).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === t[r] || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return t[r];
        }
      }));
    });
    var o = require("./lib/errors");
    Object.keys(o).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === o[r] || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return o[r];
        }
      }));
    });
  }, {
    "./StorageClient": "x3Vi",
    "./lib/types": "kHZ4",
    "./lib/errors": "cgHk"
  }],
  "QZrB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.version = void 0;
    var e = "2.31.0";
    exports.version = e;
  }, {}],
  "ulZb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.DEFAULT_HEADERS = void 0;
    var e = require("./version");
    var s = {
      "X-Client-Info": "supabase-js/".concat(e.version)
    };
    exports.DEFAULT_HEADERS = s;
  }, {
    "./version": "QZrB"
  }],
  "MXCq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.resolveHeadersConstructor = exports.resolveFetch = exports.fetchWithAuth = void 0;
    var e = r(require("cross-fetch"));
    function t(e) {
      if ("function" != typeof WeakMap) return null;
      var r = new WeakMap(),
        n = new WeakMap();
      return (t = function t(e) {
        return e ? n : r;
      })(e);
    }
    function r(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var n = t(r);
      if (n && n.has(e)) return n.get(e);
      var o = {},
        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var i = s ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(o, u, i) : o[u] = e[u];
      }
      return o.default = e, n && n.set(e, o), o;
    }
    var n = function n(e, t, r, _n10) {
      return new (r || (r = Promise))(function (o, s) {
        function u(e) {
          try {
            a(_n10.next(e));
          } catch (t) {
            s(t);
          }
        }
        function i(e) {
          try {
            a(_n10.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(u, i);
        }
        a((_n10 = _n10.apply(e, t || [])).next());
      });
    };
    var o = function o(t) {
      var r;
      return r = t || ("undefined" == typeof fetch ? e.default : fetch), function () {
        return r.apply(void 0, arguments);
      };
    };
    exports.resolveFetch = o;
    var s = function s() {
      return "undefined" == typeof Headers ? e.Headers : Headers;
    };
    exports.resolveHeadersConstructor = s;
    var u = function u(e, t, r) {
      var u = o(r),
        i = s();
      return function (r, o) {
        return n(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
          var n, s, a;
          return _regeneratorRuntime().wrap(function _callee35$(_context35) {
            while (1) switch (_context35.prev = _context35.next) {
              case 0:
                _context35.next = 2;
                return t();
              case 2:
                _context35.t1 = n = _context35.sent;
                _context35.t0 = null !== _context35.t1;
                if (!_context35.t0) {
                  _context35.next = 6;
                  break;
                }
                _context35.t0 = void 0 !== n;
              case 6:
                if (!_context35.t0) {
                  _context35.next = 10;
                  break;
                }
                _context35.t2 = n;
                _context35.next = 11;
                break;
              case 10:
                _context35.t2 = e;
              case 11:
                s = _context35.t2;
                a = new i(null == o ? void 0 : o.headers);
                return _context35.abrupt("return", (a.has("apikey") || a.set("apikey", e), a.has("Authorization") || a.set("Authorization", "Bearer ".concat(s)), u(r, Object.assign(Object.assign({}, o), {
                  headers: a
                }))));
              case 14:
              case "end":
                return _context35.stop();
            }
          }, _callee35);
        }));
      };
    };
    exports.fetchWithAuth = u;
  }, {
    "cross-fetch": "vTPr"
  }],
  "mjti": [function (require, module, exports) {
    "use strict";

    function e() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16);
      });
    }
    function t(e) {
      return e.replace(/\/$/, "");
    }
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.applySettingDefaults = s, exports.isBrowser = void 0, exports.stripTrailingSlash = t, exports.uuid = e;
    var x = function x() {
      return "undefined" != typeof window;
    };
    function s(e, t) {
      var x = e.db,
        s = e.auth,
        r = e.realtime,
        n = e.global,
        i = t.db,
        a = t.auth,
        o = t.realtime,
        c = t.global;
      return {
        db: Object.assign(Object.assign({}, i), x),
        auth: Object.assign(Object.assign({}, a), s),
        realtime: Object.assign(Object.assign({}, o), r),
        global: Object.assign(Object.assign({}, c), n)
      };
    }
    exports.isBrowser = x;
  }, {}],
  "aK8w": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return Math.round(Date.now() / 1e3) + t;
    }
    function e() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var e = 16 * Math.random() | 0;
        return ("x" == t ? e : 3 & e | 8).toString(16);
      });
    }
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Deferred = void 0, exports.decodeBase64URL = p, exports.decodeJWTPayload = f, exports.expiresAt = t, exports.generatePKCEChallenge = v, exports.generatePKCEVerifier = m, exports.isBrowser = exports.getItemAsync = void 0, exports.isInStackGuard = E, exports.looksLikeFetchResponse = void 0, exports.parseParametersFromURL = s, exports.resolveFetch = exports.removeItemAsync = void 0, exports.retryable = h, exports.setItemAsync = void 0, exports.sleep = x, exports.stackGuard = I, exports.stackGuardsSupported = P, exports.supportsLocalStorage = void 0, exports.uuid = e;
    var r = function r() {
      return "undefined" != typeof document;
    };
    exports.isBrowser = r;
    var o = {
        tested: !1,
        writable: !1
      },
      n = function n() {
        if (!r()) return !1;
        try {
          if ("object" != _typeof(globalThis.localStorage)) return !1;
        } catch (e) {
          return !1;
        }
        if (o.tested) return o.writable;
        var t = "lswt-".concat(Math.random()).concat(Math.random());
        try {
          globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), o.tested = !0, o.writable = !0;
        } catch (e) {
          o.tested = !0, o.writable = !1;
        }
        return o.writable;
      };
    function s(t) {
      var e = {},
        r = new URL(t);
      if (r.hash && "#" === r.hash[0]) try {
        new URLSearchParams(r.hash.substring(1)).forEach(function (t, r) {
          e[r] = t;
        });
      } catch (o) {}
      return r.searchParams.forEach(function (t, r) {
        e[r] = t;
      }), e;
    }
    exports.supportsLocalStorage = n;
    var a = function a(t) {
      var e;
      return e = t || ("undefined" == typeof fetch ? /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
        var _yield$require3;
        var _args36 = arguments;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              _context36.next = 2;
              return require("_bundle_loader")(require.resolve("cross-fetch"));
            case 2:
              _context36.next = 4;
              return (_yield$require3 = _context36.sent).fetch.apply(_yield$require3, _args36);
            case 4:
              return _context36.abrupt("return", _context36.sent);
            case 5:
            case "end":
              return _context36.stop();
          }
        }, _callee36);
      })) : fetch), function () {
        return e.apply(void 0, arguments);
      };
    };
    exports.resolveFetch = a;
    var i = function i(t) {
      return "object" == _typeof(t) && null !== t && "status" in t && "ok" in t && "json" in t && "function" == typeof t.json;
    };
    exports.looksLikeFetchResponse = i;
    var c = /*#__PURE__*/function () {
      var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(t, e, r) {
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              _context37.next = 2;
              return t.setItem(e, JSON.stringify(r));
            case 2:
            case "end":
              return _context37.stop();
          }
        }, _callee37);
      }));
      return function c(_x2, _x3, _x4) {
        return _ref24.apply(this, arguments);
      };
    }();
    exports.setItemAsync = c;
    var u = /*#__PURE__*/function () {
      var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(t, e) {
        var r;
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              _context38.next = 2;
              return t.getItem(e);
            case 2:
              r = _context38.sent;
              if (r) {
                _context38.next = 5;
                break;
              }
              return _context38.abrupt("return", null);
            case 5:
              _context38.prev = 5;
              return _context38.abrupt("return", JSON.parse(r));
            case 9:
              _context38.prev = 9;
              _context38.t0 = _context38["catch"](5);
              return _context38.abrupt("return", r);
            case 12:
            case "end":
              return _context38.stop();
          }
        }, _callee38, null, [[5, 9]]);
      }));
      return function u(_x5, _x6) {
        return _ref25.apply(this, arguments);
      };
    }();
    exports.getItemAsync = u;
    var l = /*#__PURE__*/function () {
      var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(t, e) {
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) switch (_context39.prev = _context39.next) {
            case 0:
              _context39.next = 2;
              return t.removeItem(e);
            case 2:
            case "end":
              return _context39.stop();
          }
        }, _callee39);
      }));
      return function l(_x7, _x8) {
        return _ref26.apply(this, arguments);
      };
    }();
    function p(t) {
      var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var r,
        o,
        n,
        s,
        a,
        i,
        c,
        u = "",
        l = 0;
      for (t = t.replace("-", "+").replace("_", "/"); l < t.length;) r = (s = e.indexOf(t.charAt(l++))) << 2 | (a = e.indexOf(t.charAt(l++))) >> 4, o = (15 & a) << 4 | (i = e.indexOf(t.charAt(l++))) >> 2, n = (3 & i) << 6 | (c = e.indexOf(t.charAt(l++))), u += String.fromCharCode(r), 64 != i && 0 != o && (u += String.fromCharCode(o)), 64 != c && 0 != n && (u += String.fromCharCode(n));
      return u;
    }
    exports.removeItemAsync = l;
    var d = /*#__PURE__*/_createClass(function d() {
      var _this23 = this;
      _classCallCheck(this, d);
      this.promise = new d.promiseConstructor(function (t, e) {
        _this23.resolve = t, _this23.reject = e;
      });
    });
    function f(t) {
      var e = t.split(".");
      if (3 !== e.length) throw new Error("JWT is not valid: not a JWT structure");
      if (!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(e[1])) throw new Error("JWT is not valid: payload is not in base64url format");
      var r = e[1];
      return JSON.parse(p(r));
    }
    function x(_x9) {
      return _x10.apply(this, arguments);
    }
    function _x10() {
      _x10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(t) {
        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) switch (_context43.prev = _context43.next) {
            case 0:
              _context43.next = 2;
              return new Promise(function (e) {
                setTimeout(function () {
                  return e(null);
                }, t);
              });
            case 2:
              return _context43.abrupt("return", _context43.sent);
            case 3:
            case "end":
              return _context43.stop();
          }
        }, _callee43);
      }));
      return _x10.apply(this, arguments);
    }
    function h(t, e) {
      return new Promise(function (r, o) {
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
          var _s16, _a15;
          return _regeneratorRuntime().wrap(function _callee40$(_context40) {
            while (1) switch (_context40.prev = _context40.next) {
              case 0:
                _s16 = 0;
              case 1:
                if (!(_s16 < 1 / 0)) {
                  _context40.next = 17;
                  break;
                }
                _context40.prev = 2;
                _context40.next = 5;
                return t(_s16);
              case 5:
                _a15 = _context40.sent;
                if (e(_s16, null, _a15)) {
                  _context40.next = 8;
                  break;
                }
                return _context40.abrupt("return", void r(_a15));
              case 8:
                _context40.next = 14;
                break;
              case 10:
                _context40.prev = 10;
                _context40.t0 = _context40["catch"](2);
                if (e(_s16, _context40.t0)) {
                  _context40.next = 14;
                  break;
                }
                return _context40.abrupt("return", void o(_context40.t0));
              case 14:
                _s16++;
                _context40.next = 1;
                break;
              case 17:
              case "end":
                return _context40.stop();
            }
          }, _callee40, null, [[2, 10]]);
        }))();
      });
    }
    function y(t) {
      return ("0" + t.toString(16)).substr(-2);
    }
    function m() {
      var t = new Uint32Array(56);
      if ("undefined" == typeof crypto) {
        var _t28 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
          _e14 = _t28.length;
        var _r19 = "";
        for (var _o7 = 0; _o7 < 56; _o7++) _r19 += _t28.charAt(Math.floor(Math.random() * _e14));
        return _r19;
      }
      return crypto.getRandomValues(t), Array.from(t, y).join("");
    }
    function w(_x11) {
      return _w.apply(this, arguments);
    }
    function _w() {
      _w = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(t) {
        var e, r, o;
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) switch (_context44.prev = _context44.next) {
            case 0:
              e = new TextEncoder().encode(t);
              _context44.next = 3;
              return crypto.subtle.digest("SHA-256", e);
            case 3:
              r = _context44.sent;
              o = new Uint8Array(r);
              return _context44.abrupt("return", Array.from(o).map(function (t) {
                return String.fromCharCode(t);
              }).join(""));
            case 6:
            case "end":
              return _context44.stop();
          }
        }, _callee44);
      }));
      return _w.apply(this, arguments);
    }
    function g(t) {
      return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    function v(_x12) {
      return _v.apply(this, arguments);
    }
    function _v() {
      _v = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(t) {
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) switch (_context45.prev = _context45.next) {
            case 0:
              if (!("undefined" == typeof crypto)) {
                _context45.next = 2;
                break;
              }
              return _context45.abrupt("return", (console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t));
            case 2:
              _context45.t0 = g;
              _context45.next = 5;
              return w(t);
            case 5:
              _context45.t1 = _context45.sent;
              return _context45.abrupt("return", (0, _context45.t0)(_context45.t1));
            case 7:
            case "end":
              return _context45.stop();
          }
        }, _callee45);
      }));
      return _v.apply(this, arguments);
    }
    exports.Deferred = d, d.promiseConstructor = Promise;
    var _ = "__stack_guard__",
      b = "__",
      S = /__stack_guard__([a-zA-Z0-9_-]+)__/;
    var A,
      C = !1,
      k = !1;
    function E(t) {
      var e, r;
      var o;
      A();
      try {
        throw new Error();
      } catch (s) {
        o = s;
      }
      var n = null !== (r = null === (e = o.stack) || void 0 === e ? void 0 : e.split("\n")) && void 0 !== r ? r : [];
      for (var _a16 = 0; _a16 < n.length; _a16 += 1) {
        var _e15 = n[_a16].match(S);
        if (_e15 && _e15[1] === t) return !0;
      }
      return !1;
    }
    function I(_x13, _x14) {
      return _I.apply(this, arguments);
    }
    function _I() {
      _I = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(t, e) {
        var r, o;
        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
          while (1) switch (_context47.prev = _context47.next) {
            case 0:
              _context47.next = 2;
              return A();
            case 2:
              r = "".concat(_).concat(t).concat(b), o = _defineProperty({}, r, _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
                return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                  while (1) switch (_context46.prev = _context46.next) {
                    case 0:
                      _context46.next = 2;
                      return e();
                    case 2:
                      return _context46.abrupt("return", _context46.sent);
                    case 3:
                    case "end":
                      return _context46.stop();
                  }
                }, _callee46);
              })));
              Object.assign(o[r], {
                displayName: r
              });
              _context47.next = 6;
              return o[r]();
            case 6:
              return _context47.abrupt("return", _context47.sent);
            case 7:
            case "end":
              return _context47.stop();
          }
        }, _callee47);
      }));
      return _I.apply(this, arguments);
    }
    function P() {
      return _P.apply(this, arguments);
    }
    function _P() {
      _P = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              if (!C) {
                _context48.next = 4;
                break;
              }
              _context48.t0 = k;
              _context48.next = 7;
              break;
            case 4:
              _context48.next = 6;
              return A();
            case 6:
              _context48.t0 = k;
            case 7:
              return _context48.abrupt("return", _context48.t0);
            case 8:
            case "end":
              return _context48.stop();
          }
        }, _callee48);
      }));
      return _P.apply(this, arguments);
    }
    var j = !1;
    A = /*#__PURE__*/function () {
      var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              _context42.t0 = C;
              if (_context42.t0) {
                _context42.next = 5;
                break;
              }
              C = !0;
              _context42.next = 5;
              return I("ENV_CHECK", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
                var t;
                return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                  while (1) switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return x(0);
                    case 2:
                      t = E("ENV_CHECK");
                      return _context41.abrupt("return", (k = t, t || j || (j = !0, console.warn("@supabase/gotrue-js: Stack guards not supported in this environment. Generally not an issue but may point to a very conservative transpilation environment (use ES2017 or above) that implements async/await with generators, or this is a JavaScript engine that does not support async/await stack traces. Safari is known to not support stack guards.")), t));
                    case 4:
                    case "end":
                      return _context41.stop();
                  }
                }, _callee41);
              })));
            case 5:
            case "end":
              return _context42.stop();
          }
        }, _callee42);
      }));
      return function A() {
        return _ref28.apply(this, arguments);
      };
    }();
  }, {
    "_bundle_loader": "ZOfP",
    "cross-fetch": [["browser-ponyfill.79a645bd.js", "vTPr"], "browser-ponyfill.79a645bd.js.map", "vTPr"]
  }],
  "fEKz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.CustomAuthError = exports.AuthUnknownError = exports.AuthSessionMissingError = exports.AuthRetryableFetchError = exports.AuthPKCEGrantCodeExchangeError = exports.AuthInvalidTokenResponseError = exports.AuthInvalidCredentialsError = exports.AuthImplicitGrantRedirectError = exports.AuthError = exports.AuthApiError = void 0, exports.isAuthApiError = e, exports.isAuthError = t, exports.isAuthRetryableFetchError = p;
    var r = /*#__PURE__*/function (_Error3) {
      _inherits(r, _Error3);
      var _super11 = _createSuper(r);
      function r(_r20, t) {
        var _this24;
        _classCallCheck(this, r);
        _this24 = _super11.call(this, _r20), _this24.__isAuthError = !0, _this24.name = "AuthError", _this24.status = t;
        return _this24;
      }
      return _createClass(r);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    function t(r) {
      return "object" == _typeof(r) && null !== r && "__isAuthError" in r;
    }
    exports.AuthError = r;
    var s = /*#__PURE__*/function (_r21) {
      _inherits(s, _r21);
      var _super12 = _createSuper(s);
      function s(r, t) {
        var _this25;
        _classCallCheck(this, s);
        _this25 = _super12.call(this, r, t), _this25.name = "AuthApiError", _this25.status = t;
        return _this25;
      }
      _createClass(s, [{
        key: "toJSON",
        value: function toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status
          };
        }
      }]);
      return s;
    }(r);
    function e(r) {
      return t(r) && "AuthApiError" === r.name;
    }
    exports.AuthApiError = s;
    var o = /*#__PURE__*/function (_r22) {
      _inherits(o, _r22);
      var _super13 = _createSuper(o);
      function o(r, t) {
        var _this26;
        _classCallCheck(this, o);
        _this26 = _super13.call(this, r), _this26.name = "AuthUnknownError", _this26.originalError = t;
        return _this26;
      }
      return _createClass(o);
    }(r);
    exports.AuthUnknownError = o;
    var n = /*#__PURE__*/function (_r23) {
      _inherits(n, _r23);
      var _super14 = _createSuper(n);
      function n(r, t, s) {
        var _this27;
        _classCallCheck(this, n);
        _this27 = _super14.call(this, r), _this27.name = t, _this27.status = s;
        return _this27;
      }
      _createClass(n, [{
        key: "toJSON",
        value: function toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status
          };
        }
      }]);
      return n;
    }(r);
    exports.CustomAuthError = n;
    var u = /*#__PURE__*/function (_n11) {
      _inherits(u, _n11);
      var _super15 = _createSuper(u);
      function u() {
        _classCallCheck(this, u);
        return _super15.call(this, "Auth session missing!", "AuthSessionMissingError", 400);
      }
      return _createClass(u);
    }(n);
    exports.AuthSessionMissingError = u;
    var i = /*#__PURE__*/function (_n12) {
      _inherits(i, _n12);
      var _super16 = _createSuper(i);
      function i() {
        _classCallCheck(this, i);
        return _super16.call(this, "Auth session or user missing", "AuthInvalidTokenResponseError", 500);
      }
      return _createClass(i);
    }(n);
    exports.AuthInvalidTokenResponseError = i;
    var a = /*#__PURE__*/function (_n13) {
      _inherits(a, _n13);
      var _super17 = _createSuper(a);
      function a(r) {
        _classCallCheck(this, a);
        return _super17.call(this, r, "AuthInvalidCredentialsError", 400);
      }
      return _createClass(a);
    }(n);
    exports.AuthInvalidCredentialsError = a;
    var h = /*#__PURE__*/function (_n14) {
      _inherits(h, _n14);
      var _super18 = _createSuper(h);
      function h(r) {
        var _this28;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        _classCallCheck(this, h);
        _this28 = _super18.call(this, r, "AuthImplicitGrantRedirectError", 500), _this28.details = null, _this28.details = t;
        return _this28;
      }
      _createClass(h, [{
        key: "toJSON",
        value: function toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
          };
        }
      }]);
      return h;
    }(n);
    exports.AuthImplicitGrantRedirectError = h;
    var c = /*#__PURE__*/function (_n15) {
      _inherits(c, _n15);
      var _super19 = _createSuper(c);
      function c(r) {
        var _this29;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        _classCallCheck(this, c);
        _this29 = _super19.call(this, r, "AuthPKCEGrantCodeExchangeError", 500), _this29.details = null, _this29.details = t;
        return _this29;
      }
      _createClass(c, [{
        key: "toJSON",
        value: function toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
          };
        }
      }]);
      return c;
    }(n);
    exports.AuthPKCEGrantCodeExchangeError = c;
    var l = /*#__PURE__*/function (_n16) {
      _inherits(l, _n16);
      var _super20 = _createSuper(l);
      function l(r, t) {
        _classCallCheck(this, l);
        return _super20.call(this, r, "AuthRetryableFetchError", t);
      }
      return _createClass(l);
    }(n);
    function p(r) {
      return t(r) && "AuthRetryableFetchError" === r.name;
    }
    exports.AuthRetryableFetchError = l;
  }, {}],
  "qz1X": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports._generateLinkResponse = p, exports._noResolveJsonResponse = h, exports._request = a, exports._sessionResponse = c, exports._ssoResponse = d, exports._userResponse = u;
    var e = require("./helpers"),
      r = require("./errors"),
      t = function t(e, r) {
        var t = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
        }
        return t;
      };
    var n = function n(e) {
        return e.msg || e.message || e.error_description || e.error || JSON.stringify(e);
      },
      o = [502, 503, 504];
    function s(_x15) {
      return _s17.apply(this, arguments);
    }
    function _s17() {
      _s17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(t) {
        var s;
        return _regeneratorRuntime().wrap(function _callee49$(_context49) {
          while (1) switch (_context49.prev = _context49.next) {
            case 0:
              if ((0, e.looksLikeFetchResponse)(t)) {
                _context49.next = 2;
                break;
              }
              throw new r.AuthRetryableFetchError(n(t), 0);
            case 2:
              if (!o.includes(t.status)) {
                _context49.next = 4;
                break;
              }
              throw new r.AuthRetryableFetchError(n(t), t.status);
            case 4:
              _context49.prev = 4;
              _context49.next = 7;
              return t.json();
            case 7:
              s = _context49.sent;
              _context49.next = 13;
              break;
            case 10:
              _context49.prev = 10;
              _context49.t0 = _context49["catch"](4);
              throw new r.AuthUnknownError(n(_context49.t0), _context49.t0);
            case 13:
              throw new r.AuthApiError(n(s), t.status || 500);
            case 14:
            case "end":
              return _context49.stop();
          }
        }, _callee49, null, [[4, 10]]);
      }));
      return _s17.apply(this, arguments);
    }
    var i = function i(e, r, t, n) {
      var o = {
        method: e,
        headers: (null == r ? void 0 : r.headers) || {}
      };
      return "GET" === e ? o : (o.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
      }, null == r ? void 0 : r.headers), o.body = JSON.stringify(n), Object.assign(Object.assign({}, o), t));
    };
    function a(_x16, _x17, _x18, _x19) {
      return _a17.apply(this, arguments);
    }
    function _a17() {
      _a17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(e, r, t, n) {
        var o, s, i, a, c;
        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
          while (1) switch (_context50.prev = _context50.next) {
            case 0:
              s = Object.assign({}, null == n ? void 0 : n.headers);
              (null == n ? void 0 : n.jwt) && (s.Authorization = "Bearer ".concat(n.jwt));
              i = null !== (o = null == n ? void 0 : n.query) && void 0 !== o ? o : {};
              (null == n ? void 0 : n.redirectTo) && (i.redirect_to = n.redirectTo);
              a = Object.keys(i).length ? "?" + new URLSearchParams(i).toString() : "";
              _context50.next = 7;
              return l(e, r, t + a, {
                headers: s,
                noResolveJson: null == n ? void 0 : n.noResolveJson
              }, {}, null == n ? void 0 : n.body);
            case 7:
              c = _context50.sent;
              return _context50.abrupt("return", (null == n ? void 0 : n.xform) ? null == n ? void 0 : n.xform(c) : {
                data: Object.assign({}, c),
                error: null
              });
            case 9:
            case "end":
              return _context50.stop();
          }
        }, _callee50);
      }));
      return _a17.apply(this, arguments);
    }
    function l(_x20, _x21, _x22, _x23, _x24, _x25) {
      return _l.apply(this, arguments);
    }
    function _l() {
      _l = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(e, t, o, a, l, c) {
        var u, d;
        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) switch (_context51.prev = _context51.next) {
            case 0:
              u = i(t, a, l, c);
              _context51.prev = 1;
              _context51.next = 4;
              return e(o, u);
            case 4:
              d = _context51.sent;
              _context51.next = 10;
              break;
            case 7:
              _context51.prev = 7;
              _context51.t0 = _context51["catch"](1);
              throw console.error(_context51.t0), new r.AuthRetryableFetchError(n(_context51.t0), 0);
            case 10:
              _context51.t1 = d.ok;
              if (_context51.t1) {
                _context51.next = 14;
                break;
              }
              _context51.next = 14;
              return s(d);
            case 14:
              if (!(null == a ? void 0 : a.noResolveJson)) {
                _context51.next = 16;
                break;
              }
              return _context51.abrupt("return", d);
            case 16:
              _context51.prev = 16;
              _context51.next = 19;
              return d.json();
            case 19:
              return _context51.abrupt("return", _context51.sent);
            case 22:
              _context51.prev = 22;
              _context51.t2 = _context51["catch"](16);
              _context51.next = 26;
              return s(_context51.t2);
            case 26:
            case "end":
              return _context51.stop();
          }
        }, _callee51, null, [[1, 7], [16, 22]]);
      }));
      return _l.apply(this, arguments);
    }
    function c(r) {
      var t;
      var n = null;
      return _(r) && ((n = Object.assign({}, r)).expires_at = (0, e.expiresAt)(r.expires_in)), {
        data: {
          session: n,
          user: null !== (t = r.user) && void 0 !== t ? t : r
        },
        error: null
      };
    }
    function u(e) {
      var r;
      return {
        data: {
          user: null !== (r = e.user) && void 0 !== r ? r : e
        },
        error: null
      };
    }
    function d(e) {
      return {
        data: e,
        error: null
      };
    }
    function p(e) {
      var r = e.action_link,
        n = e.email_otp,
        o = e.hashed_token,
        s = e.redirect_to,
        i = e.verification_type,
        a = t(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
      return {
        data: {
          properties: {
            action_link: r,
            email_otp: n,
            hashed_token: o,
            redirect_to: s,
            verification_type: i
          },
          user: Object.assign({}, a)
        },
        error: null
      };
    }
    function h(e) {
      return e;
    }
    function _(e) {
      return e.access_token && e.refresh_token && e.expires_in;
    }
  }, {
    "./helpers": "aK8w",
    "./errors": "fEKz"
  }],
  "r5yK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var r = require("./lib/fetch"),
      e = require("./lib/helpers"),
      t = require("./lib/errors"),
      s = function s(r, e) {
        var t = {};
        for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && e.indexOf(s) < 0 && (t[s] = r[s]);
        if (null != r && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (s = Object.getOwnPropertySymbols(r); a < s.length; a++) e.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, s[a]) && (t[s[a]] = r[s[a]]);
        }
        return t;
      };
    var a = /*#__PURE__*/function () {
      function a(_ref31) {
        var _ref31$url = _ref31.url,
          r = _ref31$url === void 0 ? "" : _ref31$url,
          _ref31$headers = _ref31.headers,
          t = _ref31$headers === void 0 ? {} : _ref31$headers,
          s = _ref31.fetch;
        _classCallCheck(this, a);
        this.url = r, this.headers = t, this.fetch = (0, e.resolveFetch)(s), this.mfa = {
          listFactors: this._listFactors.bind(this),
          deleteFactor: this._deleteFactor.bind(this)
        };
      }
      _createClass(a, [{
        key: "signOut",
        value: function () {
          var _signOut = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(e) {
            var s,
              _args52 = arguments;
            return _regeneratorRuntime().wrap(function _callee52$(_context52) {
              while (1) switch (_context52.prev = _context52.next) {
                case 0:
                  s = _args52.length > 1 && _args52[1] !== undefined ? _args52[1] : "global";
                  _context52.prev = 1;
                  _context52.next = 4;
                  return (0, r._request)(this.fetch, "POST", "".concat(this.url, "/logout?scope=").concat(s), {
                    headers: this.headers,
                    jwt: e,
                    noResolveJson: !0
                  });
                case 4:
                  return _context52.abrupt("return", {
                    data: null,
                    error: null
                  });
                case 7:
                  _context52.prev = 7;
                  _context52.t0 = _context52["catch"](1);
                  if (!(0, t.isAuthError)(_context52.t0)) {
                    _context52.next = 11;
                    break;
                  }
                  return _context52.abrupt("return", {
                    data: null,
                    error: _context52.t0
                  });
                case 11:
                  throw _context52.t0;
                case 12:
                case "end":
                  return _context52.stop();
              }
            }, _callee52, this, [[1, 7]]);
          }));
          function signOut(_x26) {
            return _signOut.apply(this, arguments);
          }
          return signOut;
        }()
      }, {
        key: "inviteUserByEmail",
        value: function () {
          var _inviteUserByEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(e) {
            var s,
              _args53 = arguments;
            return _regeneratorRuntime().wrap(function _callee53$(_context53) {
              while (1) switch (_context53.prev = _context53.next) {
                case 0:
                  s = _args53.length > 1 && _args53[1] !== undefined ? _args53[1] : {};
                  _context53.prev = 1;
                  _context53.next = 4;
                  return (0, r._request)(this.fetch, "POST", "".concat(this.url, "/invite"), {
                    body: {
                      email: e,
                      data: s.data
                    },
                    headers: this.headers,
                    redirectTo: s.redirectTo,
                    xform: r._userResponse
                  });
                case 4:
                  return _context53.abrupt("return", _context53.sent);
                case 7:
                  _context53.prev = 7;
                  _context53.t0 = _context53["catch"](1);
                  if (!(0, t.isAuthError)(_context53.t0)) {
                    _context53.next = 11;
                    break;
                  }
                  return _context53.abrupt("return", {
                    data: {
                      user: null
                    },
                    error: _context53.t0
                  });
                case 11:
                  throw _context53.t0;
                case 12:
                case "end":
                  return _context53.stop();
              }
            }, _callee53, this, [[1, 7]]);
          }));
          function inviteUserByEmail(_x27) {
            return _inviteUserByEmail.apply(this, arguments);
          }
          return inviteUserByEmail;
        }()
      }, {
        key: "generateLink",
        value: function () {
          var _generateLink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(e) {
            var i, o, n;
            return _regeneratorRuntime().wrap(function _callee54$(_context54) {
              while (1) switch (_context54.prev = _context54.next) {
                case 0:
                  _context54.prev = 0;
                  i = e.options, o = s(e, ["options"]), n = Object.assign(Object.assign({}, o), i);
                  "newEmail" in o && (n.new_email = null == o ? void 0 : o.newEmail, delete n.newEmail);
                  _context54.next = 5;
                  return (0, r._request)(this.fetch, "POST", "".concat(this.url, "/admin/generate_link"), {
                    body: n,
                    headers: this.headers,
                    xform: r._generateLinkResponse,
                    redirectTo: null == i ? void 0 : i.redirectTo
                  });
                case 5:
                  return _context54.abrupt("return", _context54.sent);
                case 8:
                  _context54.prev = 8;
                  _context54.t0 = _context54["catch"](0);
                  if (!(0, t.isAuthError)(_context54.t0)) {
                    _context54.next = 12;
                    break;
                  }
                  return _context54.abrupt("return", {
                    data: {
                      properties: null,
                      user: null
                    },
                    error: _context54.t0
                  });
                case 12:
                  throw _context54.t0;
                case 13:
                case "end":
                  return _context54.stop();
              }
            }, _callee54, this, [[0, 8]]);
          }));
          function generateLink(_x28) {
            return _generateLink.apply(this, arguments);
          }
          return generateLink;
        }()
      }, {
        key: "createUser",
        value: function () {
          var _createUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55(e) {
            return _regeneratorRuntime().wrap(function _callee55$(_context55) {
              while (1) switch (_context55.prev = _context55.next) {
                case 0:
                  _context55.prev = 0;
                  _context55.next = 3;
                  return (0, r._request)(this.fetch, "POST", "".concat(this.url, "/admin/users"), {
                    body: e,
                    headers: this.headers,
                    xform: r._userResponse
                  });
                case 3:
                  return _context55.abrupt("return", _context55.sent);
                case 6:
                  _context55.prev = 6;
                  _context55.t0 = _context55["catch"](0);
                  if (!(0, t.isAuthError)(_context55.t0)) {
                    _context55.next = 10;
                    break;
                  }
                  return _context55.abrupt("return", {
                    data: {
                      user: null
                    },
                    error: _context55.t0
                  });
                case 10:
                  throw _context55.t0;
                case 11:
                case "end":
                  return _context55.stop();
              }
            }, _callee55, this, [[0, 6]]);
          }));
          function createUser(_x29) {
            return _createUser.apply(this, arguments);
          }
          return createUser;
        }()
      }, {
        key: "listUsers",
        value: function () {
          var _listUsers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56(e) {
            var s, _a21, i, o, n, l, u, d, c, f, p, y;
            return _regeneratorRuntime().wrap(function _callee56$(_context56) {
              while (1) switch (_context56.prev = _context56.next) {
                case 0:
                  _context56.prev = 0;
                  d = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                  };
                  _context56.next = 4;
                  return (0, r._request)(this.fetch, "GET", "".concat(this.url, "/admin/users"), {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                      page: null !== (_a21 = null === (s = null == e ? void 0 : e.page) || void 0 === s ? void 0 : s.toString()) && void 0 !== _a21 ? _a21 : "",
                      per_page: null !== (o = null === (i = null == e ? void 0 : e.perPage) || void 0 === i ? void 0 : i.toString()) && void 0 !== o ? o : ""
                    },
                    xform: r._noResolveJsonResponse
                  });
                case 4:
                  c = _context56.sent;
                  if (!c.error) {
                    _context56.next = 7;
                    break;
                  }
                  throw c.error;
                case 7:
                  _context56.next = 9;
                  return c.json();
                case 9:
                  f = _context56.sent;
                  p = null !== (n = c.headers.get("x-total-count")) && void 0 !== n ? n : 0;
                  y = null !== (u = null === (l = c.headers.get("link")) || void 0 === l ? void 0 : l.split(",")) && void 0 !== u ? u : [];
                  return _context56.abrupt("return", (y.length > 0 && (y.forEach(function (r) {
                    var e = parseInt(r.split(";")[0].split("=")[1].substring(0, 1)),
                      t = JSON.parse(r.split(";")[1].split("=")[1]);
                    d["".concat(t, "Page")] = e;
                  }), d.total = parseInt(p)), {
                    data: Object.assign(Object.assign({}, f), d),
                    error: null
                  }));
                case 15:
                  _context56.prev = 15;
                  _context56.t0 = _context56["catch"](0);
                  if (!(0, t.isAuthError)(_context56.t0)) {
                    _context56.next = 19;
                    break;
                  }
                  return _context56.abrupt("return", {
                    data: {
                      users: []
                    },
                    error: _context56.t0
                  });
                case 19:
                  throw _context56.t0;
                case 20:
                case "end":
                  return _context56.stop();
              }
            }, _callee56, this, [[0, 15]]);
          }));
          function listUsers(_x30) {
            return _listUsers.apply(this, arguments);
          }
          return listUsers;
        }()
      }, {
        key: "getUserById",
        value: function () {
          var _getUserById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee57(e) {
            return _regeneratorRuntime().wrap(function _callee57$(_context57) {
              while (1) switch (_context57.prev = _context57.next) {
                case 0:
                  _context57.prev = 0;
                  _context57.next = 3;
                  return (0, r._request)(this.fetch, "GET", "".concat(this.url, "/admin/users/").concat(e), {
                    headers: this.headers,
                    xform: r._userResponse
                  });
                case 3:
                  return _context57.abrupt("return", _context57.sent);
                case 6:
                  _context57.prev = 6;
                  _context57.t0 = _context57["catch"](0);
                  if (!(0, t.isAuthError)(_context57.t0)) {
                    _context57.next = 10;
                    break;
                  }
                  return _context57.abrupt("return", {
                    data: {
                      user: null
                    },
                    error: _context57.t0
                  });
                case 10:
                  throw _context57.t0;
                case 11:
                case "end":
                  return _context57.stop();
              }
            }, _callee57, this, [[0, 6]]);
          }));
          function getUserById(_x31) {
            return _getUserById.apply(this, arguments);
          }
          return getUserById;
        }()
      }, {
        key: "updateUserById",
        value: function () {
          var _updateUserById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee58(e, s) {
            return _regeneratorRuntime().wrap(function _callee58$(_context58) {
              while (1) switch (_context58.prev = _context58.next) {
                case 0:
                  _context58.prev = 0;
                  _context58.next = 3;
                  return (0, r._request)(this.fetch, "PUT", "".concat(this.url, "/admin/users/").concat(e), {
                    body: s,
                    headers: this.headers,
                    xform: r._userResponse
                  });
                case 3:
                  return _context58.abrupt("return", _context58.sent);
                case 6:
                  _context58.prev = 6;
                  _context58.t0 = _context58["catch"](0);
                  if (!(0, t.isAuthError)(_context58.t0)) {
                    _context58.next = 10;
                    break;
                  }
                  return _context58.abrupt("return", {
                    data: {
                      user: null
                    },
                    error: _context58.t0
                  });
                case 10:
                  throw _context58.t0;
                case 11:
                case "end":
                  return _context58.stop();
              }
            }, _callee58, this, [[0, 6]]);
          }));
          function updateUserById(_x32, _x33) {
            return _updateUserById.apply(this, arguments);
          }
          return updateUserById;
        }()
      }, {
        key: "deleteUser",
        value: function () {
          var _deleteUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee59(e) {
            var s,
              _args59 = arguments;
            return _regeneratorRuntime().wrap(function _callee59$(_context59) {
              while (1) switch (_context59.prev = _context59.next) {
                case 0:
                  s = _args59.length > 1 && _args59[1] !== undefined ? _args59[1] : !1;
                  _context59.prev = 1;
                  _context59.next = 4;
                  return (0, r._request)(this.fetch, "DELETE", "".concat(this.url, "/admin/users/").concat(e), {
                    headers: this.headers,
                    body: {
                      should_soft_delete: s
                    },
                    xform: r._userResponse
                  });
                case 4:
                  return _context59.abrupt("return", _context59.sent);
                case 7:
                  _context59.prev = 7;
                  _context59.t0 = _context59["catch"](1);
                  if (!(0, t.isAuthError)(_context59.t0)) {
                    _context59.next = 11;
                    break;
                  }
                  return _context59.abrupt("return", {
                    data: {
                      user: null
                    },
                    error: _context59.t0
                  });
                case 11:
                  throw _context59.t0;
                case 12:
                case "end":
                  return _context59.stop();
              }
            }, _callee59, this, [[1, 7]]);
          }));
          function deleteUser(_x34) {
            return _deleteUser.apply(this, arguments);
          }
          return deleteUser;
        }()
      }, {
        key: "_listFactors",
        value: function () {
          var _listFactors2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee60(e) {
            var _yield, _a24, i;
            return _regeneratorRuntime().wrap(function _callee60$(_context60) {
              while (1) switch (_context60.prev = _context60.next) {
                case 0:
                  _context60.prev = 0;
                  _context60.next = 3;
                  return (0, r._request)(this.fetch, "GET", "".concat(this.url, "/admin/users/").concat(e.userId, "/factors"), {
                    headers: this.headers,
                    xform: function xform(r) {
                      return {
                        data: {
                          factors: r
                        },
                        error: null
                      };
                    }
                  });
                case 3:
                  _yield = _context60.sent;
                  _a24 = _yield.data;
                  i = _yield.error;
                  return _context60.abrupt("return", {
                    data: _a24,
                    error: i
                  });
                case 9:
                  _context60.prev = 9;
                  _context60.t0 = _context60["catch"](0);
                  if (!(0, t.isAuthError)(_context60.t0)) {
                    _context60.next = 13;
                    break;
                  }
                  return _context60.abrupt("return", {
                    data: null,
                    error: _context60.t0
                  });
                case 13:
                  throw _context60.t0;
                case 14:
                case "end":
                  return _context60.stop();
              }
            }, _callee60, this, [[0, 9]]);
          }));
          function _listFactors(_x35) {
            return _listFactors2.apply(this, arguments);
          }
          return _listFactors;
        }()
      }, {
        key: "_deleteFactor",
        value: function () {
          var _deleteFactor2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee61(e) {
            return _regeneratorRuntime().wrap(function _callee61$(_context61) {
              while (1) switch (_context61.prev = _context61.next) {
                case 0:
                  _context61.prev = 0;
                  _context61.next = 3;
                  return (0, r._request)(this.fetch, "DELETE", "".concat(this.url, "/admin/users/").concat(e.userId, "/factors/").concat(e.id), {
                    headers: this.headers
                  });
                case 3:
                  _context61.t0 = _context61.sent;
                  return _context61.abrupt("return", {
                    data: _context61.t0,
                    error: null
                  });
                case 7:
                  _context61.prev = 7;
                  _context61.t1 = _context61["catch"](0);
                  if (!(0, t.isAuthError)(_context61.t1)) {
                    _context61.next = 11;
                    break;
                  }
                  return _context61.abrupt("return", {
                    data: null,
                    error: _context61.t1
                  });
                case 11:
                  throw _context61.t1;
                case 12:
                case "end":
                  return _context61.stop();
              }
            }, _callee61, this, [[0, 7]]);
          }));
          function _deleteFactor(_x36) {
            return _deleteFactor2.apply(this, arguments);
          }
          return _deleteFactor;
        }()
      }]);
      return a;
    }();
    exports.default = a;
  }, {
    "./lib/fetch": "qz1X",
    "./lib/helpers": "aK8w",
    "./lib/errors": "fEKz"
  }],
  "yMJF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.version = void 0;
    var e = "2.46.1";
    exports.version = e;
  }, {}],
  "FCUC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.STORAGE_KEY = exports.NETWORK_FAILURE = exports.GOTRUE_URL = exports.EXPIRY_MARGIN = exports.DEFAULT_HEADERS = exports.AUDIENCE = void 0;
    var t = require("./version");
    var e = "http://localhost:9999";
    exports.GOTRUE_URL = e;
    var o = "supabase.auth.token";
    exports.STORAGE_KEY = o;
    var s = "";
    exports.AUDIENCE = "";
    var E = {
      "X-Client-Info": "gotrue-js/".concat(t.version)
    };
    exports.DEFAULT_HEADERS = E;
    var r = 10;
    exports.EXPIRY_MARGIN = 10;
    var R = {
      MAX_RETRIES: 10,
      RETRY_INTERVAL: 2
    };
    exports.NETWORK_FAILURE = R;
  }, {
    "./version": "yMJF"
  }],
  "nFV6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = require("./helpers");
    var t = {
      getItem: function getItem(t) {
        return (0, e.supportsLocalStorage)() ? globalThis.localStorage.getItem(t) : null;
      },
      setItem: function setItem(t, o) {
        (0, e.supportsLocalStorage)() && globalThis.localStorage.setItem(t, o);
      },
      removeItem: function removeItem(t) {
        (0, e.supportsLocalStorage)() && globalThis.localStorage.removeItem(t);
      }
    };
    var o = t;
    exports.default = o;
  }, {
    "./helpers": "aK8w"
  }],
  "tYyX": [function (require, module, exports) {
    "use strict";

    function e() {
      if ("object" != (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) try {
        Object.defineProperty(Object.prototype, "__magic__", {
          get: function get() {
            return this;
          },
          configurable: !0
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
      } catch (e) {
        "undefined" != typeof self && (self.globalThis = self);
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.polyfillGlobalThis = e;
  }, {}],
  "jaRo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = l(require("./GoTrueAdminApi")),
      s = require("./lib/constants"),
      r = require("./lib/errors"),
      t = require("./lib/fetch"),
      i = require("./lib/helpers"),
      o = l(require("./lib/local-storage")),
      n = require("./lib/polyfills"),
      a = require("./lib/version");
    function l(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    (0, n.polyfillGlobalThis)();
    var h = {
        url: s.GOTRUE_URL,
        storageKey: s.STORAGE_KEY,
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: s.DEFAULT_HEADERS,
        flowType: "implicit",
        debug: !1
      },
      c = 3e4,
      u = 3;
    function d(_x37, _x38, _x39) {
      return _d2.apply(this, arguments);
    }
    function _d2() {
      _d2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee134(e, s, r) {
        return _regeneratorRuntime().wrap(function _callee134$(_context134) {
          while (1) switch (_context134.prev = _context134.next) {
            case 0:
              _context134.next = 2;
              return r();
            case 2:
              return _context134.abrupt("return", _context134.sent);
            case 3:
            case "end":
              return _context134.stop();
          }
        }, _callee134);
      }));
      return _d2.apply(this, arguments);
    }
    var _ = /*#__PURE__*/function () {
      function _(s) {
        var _this30 = this;
        _classCallCheck(this, _);
        var r;
        this.stateChangeEmitters = new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.broadcastChannel = null, this.instanceID = _.nextInstanceID, _.nextInstanceID += 1, this.instanceID > 0 && (0, i.isBrowser)() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        var t = Object.assign(Object.assign({}, h), s);
        if (this.logDebugMessages = t.debug, this.inMemorySession = null, this.storageKey = t.storageKey, this.autoRefreshToken = t.autoRefreshToken, this.persistSession = t.persistSession, this.storage = t.storage || o.default, this.admin = new e.default({
          url: t.url,
          headers: t.headers,
          fetch: t.fetch
        }), this.url = t.url, this.headers = t.headers, this.fetch = (0, i.resolveFetch)(t.fetch), this.lock = t.lock || d, this.detectSessionInUrl = t.detectSessionInUrl, this.flowType = t.flowType, this.mfa = {
          verify: this._verify.bind(this),
          enroll: this._enroll.bind(this),
          unenroll: this._unenroll.bind(this),
          challenge: this._challenge.bind(this),
          listFactors: this._listFactors.bind(this),
          challengeAndVerify: this._challengeAndVerify.bind(this),
          getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        }, this.persistSession && this.storage === o.default && !(0, i.supportsLocalStorage)() && console.warn("No storage option exists to persist the session, which may result in unexpected behavior when using auth.\n        If you want to set persistSession to true, please provide a storage option or you may set persistSession to false to disable this warning."), (0, i.isBrowser)() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
          try {
            this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
          } catch (n) {
            console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", n);
          }
          null === (r = this.broadcastChannel) || void 0 === r || r.addEventListener("message", /*#__PURE__*/function () {
            var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee62(e) {
              return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                while (1) switch (_context62.prev = _context62.next) {
                  case 0:
                    _this30._debug("received broadcast notification from other tab or client", e);
                    _context62.next = 3;
                    return _this30._notifyAllSubscribers(e.data.event, e.data.session, !1);
                  case 3:
                  case "end":
                    return _context62.stop();
                }
              }, _callee62);
            }));
            return function (_x40) {
              return _ref32.apply(this, arguments);
            };
          }());
        }
        this.initialize();
      }
      _createClass(_, [{
        key: "_debug",
        value: function _debug() {
          var _console;
          for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            e[_key3] = arguments[_key3];
          }
          return this.logDebugMessages && (_console = console).log.apply(_console, ["GoTrueClient@".concat(this.instanceID, " (").concat(a.version, ") ").concat(new Date().toISOString())].concat(e)), this;
        }
      }, {
        key: "initialize",
        value: function initialize() {
          return this.initializePromise ? this.initializePromise : this._initialize();
        }
      }, {
        key: "_initialize",
        value: function () {
          var _initialize2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
            var _this31 = this;
            return _regeneratorRuntime().wrap(function _callee66$(_context66) {
              while (1) switch (_context66.prev = _context66.next) {
                case 0:
                  if (!this.initializePromise) {
                    _context66.next = 2;
                    break;
                  }
                  throw new Error("Double call of #_initialize()");
                case 2:
                  this.initializePromise = this._acquireLock(-1, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
                    return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                      while (1) switch (_context65.prev = _context65.next) {
                        case 0:
                          _context65.next = 2;
                          return (0, i.stackGuard)("_initialize", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
                            var _s18, _yield$_this31$_getSe, _e16, _r24, _t29, _i8;
                            return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                              while (1) switch (_context64.prev = _context64.next) {
                                case 0:
                                  _context64.prev = 0;
                                  _context64.t0 = !!(0, i.isBrowser)();
                                  if (!_context64.t0) {
                                    _context64.next = 6;
                                    break;
                                  }
                                  _context64.next = 5;
                                  return _this31._isPKCEFlow();
                                case 5:
                                  _context64.t0 = _context64.sent;
                                case 6:
                                  _s18 = _context64.t0;
                                  if (!(_this31._debug("#_initialize()", "begin", "is PKCE flow", _s18), _s18 || _this31.detectSessionInUrl && _this31._isImplicitGrantFlow())) {
                                    _context64.next = 24;
                                    break;
                                  }
                                  _context64.next = 10;
                                  return _this31._getSessionFromURL(_s18);
                                case 10:
                                  _yield$_this31$_getSe = _context64.sent;
                                  _e16 = _yield$_this31$_getSe.data;
                                  _r24 = _yield$_this31$_getSe.error;
                                  if (!_r24) {
                                    _context64.next = 18;
                                    break;
                                  }
                                  _this31._debug("#_initialize()", "error detecting session from URL", _r24);
                                  _context64.next = 17;
                                  return _this31._removeSession();
                                case 17:
                                  return _context64.abrupt("return", {
                                    error: _r24
                                  });
                                case 18:
                                  _t29 = _e16.session, _i8 = _e16.redirectType;
                                  _this31._debug("#_initialize()", "detected session in URL", _t29, "redirect type", _i8);
                                  _context64.next = 22;
                                  return _this31._saveSession(_t29);
                                case 22:
                                  setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
                                    return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                                      while (1) switch (_context63.prev = _context63.next) {
                                        case 0:
                                          if (!("recovery" === _i8)) {
                                            _context63.next = 5;
                                            break;
                                          }
                                          _context63.next = 3;
                                          return _this31._notifyAllSubscribers("PASSWORD_RECOVERY", _t29);
                                        case 3:
                                          _context63.next = 7;
                                          break;
                                        case 5:
                                          _context63.next = 7;
                                          return _this31._notifyAllSubscribers("SIGNED_IN", _t29);
                                        case 7:
                                        case "end":
                                          return _context63.stop();
                                      }
                                    }, _callee63);
                                  })), 0);
                                  return _context64.abrupt("return", {
                                    error: null
                                  });
                                case 24:
                                  _context64.next = 26;
                                  return _this31._recoverAndRefresh();
                                case 26:
                                  return _context64.abrupt("return", {
                                    error: null
                                  });
                                case 29:
                                  _context64.prev = 29;
                                  _context64.t1 = _context64["catch"](0);
                                  return _context64.abrupt("return", (0, r.isAuthError)(_context64.t1) ? {
                                    error: _context64.t1
                                  } : {
                                    error: new r.AuthUnknownError("Unexpected error during initialization", _context64.t1)
                                  });
                                case 32:
                                  _context64.prev = 32;
                                  _context64.next = 35;
                                  return _this31._handleVisibilityChange();
                                case 35:
                                  _this31._debug("#_initialize()", "end");
                                  return _context64.finish(32);
                                case 37:
                                case "end":
                                  return _context64.stop();
                              }
                            }, _callee64, null, [[0, 29, 32, 37]]);
                          })));
                        case 2:
                          return _context65.abrupt("return", _context65.sent);
                        case 3:
                        case "end":
                          return _context65.stop();
                      }
                    }, _callee65);
                  })));
                  _context66.next = 5;
                  return this.initializePromise;
                case 5:
                  return _context66.abrupt("return", _context66.sent);
                case 6:
                case "end":
                  return _context66.stop();
              }
            }, _callee66, this);
          }));
          function _initialize() {
            return _initialize2.apply(this, arguments);
          }
          return _initialize;
        }()
      }, {
        key: "signUp",
        value: function () {
          var _signUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee67(e) {
            var s, o, n, _l2, _r25, _o9, _n17, _a25, _h5, _e17, _s19, _r26, _i9, _l3, _h6, _c3, _u2, _d3;
            return _regeneratorRuntime().wrap(function _callee67$(_context67) {
              while (1) switch (_context67.prev = _context67.next) {
                case 0:
                  _context67.prev = 0;
                  _context67.next = 3;
                  return this._removeSession();
                case 3:
                  if (!("email" in e)) {
                    _context67.next = 25;
                    break;
                  }
                  _r25 = e.email, _o9 = e.password, _n17 = e.options;
                  _a25 = null, _h5 = null;
                  if (!("pkce" === this.flowType)) {
                    _context67.next = 20;
                    break;
                  }
                  _e17 = (0, i.generatePKCEVerifier)();
                  _context67.next = 10;
                  return (0, i.setItemAsync)(this.storage, "".concat(this.storageKey, "-code-verifier"), _e17);
                case 10:
                  _context67.t0 = _e17;
                  _context67.next = 13;
                  return (0, i.generatePKCEChallenge)(_e17);
                case 13:
                  _context67.t1 = _a25 = _context67.sent;
                  if (!(_context67.t0 === _context67.t1)) {
                    _context67.next = 18;
                    break;
                  }
                  _context67.t2 = "plain";
                  _context67.next = 19;
                  break;
                case 18:
                  _context67.t2 = "s256";
                case 19:
                  _h5 = _context67.t2;
                case 20:
                  _context67.next = 22;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/signup"), {
                    headers: this.headers,
                    redirectTo: null == _n17 ? void 0 : _n17.emailRedirectTo,
                    body: {
                      email: _r25,
                      password: _o9,
                      data: null !== (s = null == _n17 ? void 0 : _n17.data) && void 0 !== s ? s : {},
                      gotrue_meta_security: {
                        captcha_token: null == _n17 ? void 0 : _n17.captchaToken
                      },
                      code_challenge: _a25,
                      code_challenge_method: _h5
                    },
                    xform: t._sessionResponse
                  });
                case 22:
                  _l2 = _context67.sent;
                  _context67.next = 31;
                  break;
                case 25:
                  if ("phone" in e) {
                    _context67.next = 27;
                    break;
                  }
                  throw new r.AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
                case 27:
                  _s19 = e.phone, _r26 = e.password, _i9 = e.options;
                  _context67.next = 30;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/signup"), {
                    headers: this.headers,
                    body: {
                      phone: _s19,
                      password: _r26,
                      data: null !== (o = null == _i9 ? void 0 : _i9.data) && void 0 !== o ? o : {},
                      channel: null !== (n = null == _i9 ? void 0 : _i9.channel) && void 0 !== n ? n : "sms",
                      gotrue_meta_security: {
                        captcha_token: null == _i9 ? void 0 : _i9.captchaToken
                      }
                    },
                    xform: t._sessionResponse
                  });
                case 30:
                  _l2 = _context67.sent;
                case 31:
                  _l3 = _l2, _h6 = _l3.data, _c3 = _l3.error;
                  if (!(_c3 || !_h6)) {
                    _context67.next = 34;
                    break;
                  }
                  return _context67.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _c3
                  });
                case 34:
                  _u2 = _h6.session, _d3 = _h6.user;
                  _context67.t3 = _h6.session;
                  if (!_context67.t3) {
                    _context67.next = 41;
                    break;
                  }
                  _context67.next = 39;
                  return this._saveSession(_h6.session);
                case 39:
                  _context67.next = 41;
                  return this._notifyAllSubscribers("SIGNED_IN", _u2);
                case 41:
                  return _context67.abrupt("return", {
                    data: {
                      user: _d3,
                      session: _u2
                    },
                    error: null
                  });
                case 44:
                  _context67.prev = 44;
                  _context67.t4 = _context67["catch"](0);
                  if (!(0, r.isAuthError)(_context67.t4)) {
                    _context67.next = 48;
                    break;
                  }
                  return _context67.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _context67.t4
                  });
                case 48:
                  throw _context67.t4;
                case 49:
                case "end":
                  return _context67.stop();
              }
            }, _callee67, this, [[0, 44]]);
          }));
          function signUp(_x41) {
            return _signUp.apply(this, arguments);
          }
          return signUp;
        }()
      }, {
        key: "signInWithPassword",
        value: function () {
          var _signInWithPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee68(e) {
            var _i10, _s20, _r27, _o10, _s21, _r28, _o11, _i11, o, n;
            return _regeneratorRuntime().wrap(function _callee68$(_context68) {
              while (1) switch (_context68.prev = _context68.next) {
                case 0:
                  _context68.prev = 0;
                  _context68.next = 3;
                  return this._removeSession();
                case 3:
                  if (!("email" in e)) {
                    _context68.next = 10;
                    break;
                  }
                  _s20 = e.email, _r27 = e.password, _o10 = e.options;
                  _context68.next = 7;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/token?grant_type=password"), {
                    headers: this.headers,
                    body: {
                      email: _s20,
                      password: _r27,
                      gotrue_meta_security: {
                        captcha_token: null == _o10 ? void 0 : _o10.captchaToken
                      }
                    },
                    xform: t._sessionResponse
                  });
                case 7:
                  _i10 = _context68.sent;
                  _context68.next = 16;
                  break;
                case 10:
                  if ("phone" in e) {
                    _context68.next = 12;
                    break;
                  }
                  throw new r.AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
                case 12:
                  _s21 = e.phone, _r28 = e.password, _o11 = e.options;
                  _context68.next = 15;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/token?grant_type=password"), {
                    headers: this.headers,
                    body: {
                      phone: _s21,
                      password: _r28,
                      gotrue_meta_security: {
                        captcha_token: null == _o11 ? void 0 : _o11.captchaToken
                      }
                    },
                    xform: t._sessionResponse
                  });
                case 15:
                  _i10 = _context68.sent;
                case 16:
                  _i11 = _i10, o = _i11.data, n = _i11.error;
                  if (!n) {
                    _context68.next = 21;
                    break;
                  }
                  _context68.t0 = {
                    data: {
                      user: null,
                      session: null
                    },
                    error: n
                  };
                  _context68.next = 33;
                  break;
                case 21:
                  if (!(o && o.session && o.user)) {
                    _context68.next = 31;
                    break;
                  }
                  _context68.t2 = o.session;
                  if (!_context68.t2) {
                    _context68.next = 28;
                    break;
                  }
                  _context68.next = 26;
                  return this._saveSession(o.session);
                case 26:
                  _context68.next = 28;
                  return this._notifyAllSubscribers("SIGNED_IN", o.session);
                case 28:
                  _context68.t1 = {
                    data: {
                      user: o.user,
                      session: o.session
                    },
                    error: n
                  };
                  _context68.next = 32;
                  break;
                case 31:
                  _context68.t1 = {
                    data: {
                      user: null,
                      session: null
                    },
                    error: new r.AuthInvalidTokenResponseError()
                  };
                case 32:
                  _context68.t0 = _context68.t1;
                case 33:
                  return _context68.abrupt("return", _context68.t0);
                case 36:
                  _context68.prev = 36;
                  _context68.t3 = _context68["catch"](0);
                  if (!(0, r.isAuthError)(_context68.t3)) {
                    _context68.next = 40;
                    break;
                  }
                  return _context68.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _context68.t3
                  });
                case 40:
                  throw _context68.t3;
                case 41:
                case "end":
                  return _context68.stop();
              }
            }, _callee68, this, [[0, 36]]);
          }));
          function signInWithPassword(_x42) {
            return _signInWithPassword.apply(this, arguments);
          }
          return signInWithPassword;
        }()
      }, {
        key: "signInWithOAuth",
        value: function () {
          var _signInWithOAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee69(e) {
            var s, r, t, i;
            return _regeneratorRuntime().wrap(function _callee69$(_context69) {
              while (1) switch (_context69.prev = _context69.next) {
                case 0:
                  _context69.next = 2;
                  return this._removeSession();
                case 2:
                  _context69.next = 4;
                  return this._handleProviderSignIn(e.provider, {
                    redirectTo: null === (s = e.options) || void 0 === s ? void 0 : s.redirectTo,
                    scopes: null === (r = e.options) || void 0 === r ? void 0 : r.scopes,
                    queryParams: null === (t = e.options) || void 0 === t ? void 0 : t.queryParams,
                    skipBrowserRedirect: null === (i = e.options) || void 0 === i ? void 0 : i.skipBrowserRedirect
                  });
                case 4:
                  return _context69.abrupt("return", _context69.sent);
                case 5:
                case "end":
                  return _context69.stop();
              }
            }, _callee69, this);
          }));
          function signInWithOAuth(_x43) {
            return _signInWithOAuth.apply(this, arguments);
          }
          return signInWithOAuth;
        }()
      }, {
        key: "exchangeCodeForSession",
        value: function () {
          var _exchangeCodeForSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee70(e) {
            var s, _yield2, o, n;
            return _regeneratorRuntime().wrap(function _callee70$(_context70) {
              while (1) switch (_context70.prev = _context70.next) {
                case 0:
                  _context70.next = 2;
                  return (0, i.getItemAsync)(this.storage, "".concat(this.storageKey, "-code-verifier"));
                case 2:
                  s = _context70.sent;
                  _context70.next = 5;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/token?grant_type=pkce"), {
                    headers: this.headers,
                    body: {
                      auth_code: e,
                      code_verifier: s
                    },
                    xform: t._sessionResponse
                  });
                case 5:
                  _yield2 = _context70.sent;
                  o = _yield2.data;
                  n = _yield2.error;
                  _context70.next = 10;
                  return (0, i.removeItemAsync)(this.storage, "".concat(this.storageKey, "-code-verifier"));
                case 10:
                  if (!n) {
                    _context70.next = 14;
                    break;
                  }
                  _context70.t0 = {
                    data: {
                      user: null,
                      session: null
                    },
                    error: n
                  };
                  _context70.next = 26;
                  break;
                case 14:
                  if (!(o && o.session && o.user)) {
                    _context70.next = 24;
                    break;
                  }
                  _context70.t2 = o.session;
                  if (!_context70.t2) {
                    _context70.next = 21;
                    break;
                  }
                  _context70.next = 19;
                  return this._saveSession(o.session);
                case 19:
                  _context70.next = 21;
                  return this._notifyAllSubscribers("SIGNED_IN", o.session);
                case 21:
                  _context70.t1 = {
                    data: o,
                    error: n
                  };
                  _context70.next = 25;
                  break;
                case 24:
                  _context70.t1 = {
                    data: {
                      user: null,
                      session: null
                    },
                    error: new r.AuthInvalidTokenResponseError()
                  };
                case 25:
                  _context70.t0 = _context70.t1;
                case 26:
                  return _context70.abrupt("return", _context70.t0);
                case 27:
                case "end":
                  return _context70.stop();
              }
            }, _callee70, this);
          }));
          function exchangeCodeForSession(_x44) {
            return _exchangeCodeForSession.apply(this, arguments);
          }
          return exchangeCodeForSession;
        }()
      }, {
        key: "signInWithIdToken",
        value: function () {
          var _signInWithIdToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee71(e) {
            var _i12, o, n, _a26, _l4, _h7, _c4, _u3;
            return _regeneratorRuntime().wrap(function _callee71$(_context71) {
              while (1) switch (_context71.prev = _context71.next) {
                case 0:
                  _context71.next = 2;
                  return this._removeSession();
                case 2:
                  _context71.prev = 2;
                  _i12 = e.options;
                  o = e.provider;
                  n = e.token;
                  _a26 = e.access_token;
                  _l4 = e.nonce;
                  _context71.next = 10;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/token?grant_type=id_token"), {
                    headers: this.headers,
                    body: {
                      provider: o,
                      id_token: n,
                      access_token: _a26,
                      nonce: _l4,
                      gotrue_meta_security: {
                        captcha_token: null == _i12 ? void 0 : _i12.captchaToken
                      }
                    },
                    xform: t._sessionResponse
                  });
                case 10:
                  _h7 = _context71.sent;
                  _c4 = _h7.data;
                  _u3 = _h7.error;
                  if (!_u3) {
                    _context71.next = 17;
                    break;
                  }
                  _context71.t0 = {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _u3
                  };
                  _context71.next = 29;
                  break;
                case 17:
                  if (!(_c4 && _c4.session && _c4.user)) {
                    _context71.next = 27;
                    break;
                  }
                  _context71.t2 = _c4.session;
                  if (!_context71.t2) {
                    _context71.next = 24;
                    break;
                  }
                  _context71.next = 22;
                  return this._saveSession(_c4.session);
                case 22:
                  _context71.next = 24;
                  return this._notifyAllSubscribers("SIGNED_IN", _c4.session);
                case 24:
                  _context71.t1 = {
                    data: _c4,
                    error: _u3
                  };
                  _context71.next = 28;
                  break;
                case 27:
                  _context71.t1 = {
                    data: {
                      user: null,
                      session: null
                    },
                    error: new r.AuthInvalidTokenResponseError()
                  };
                case 28:
                  _context71.t0 = _context71.t1;
                case 29:
                  return _context71.abrupt("return", _context71.t0);
                case 32:
                  _context71.prev = 32;
                  _context71.t3 = _context71["catch"](2);
                  if (!(0, r.isAuthError)(_context71.t3)) {
                    _context71.next = 36;
                    break;
                  }
                  return _context71.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _context71.t3
                  });
                case 36:
                  throw _context71.t3;
                case 37:
                case "end":
                  return _context71.stop();
              }
            }, _callee71, this, [[2, 32]]);
          }));
          function signInWithIdToken(_x45) {
            return _signInWithIdToken.apply(this, arguments);
          }
          return signInWithIdToken;
        }()
      }, {
        key: "signInWithOtp",
        value: function () {
          var _signInWithOtp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee72(e) {
            var s, o, n, a, l, _r29, _n18, _a27, _l5, _e18, _yield3, _h8, _s22, _r30, _yield4, _i13, _o12;
            return _regeneratorRuntime().wrap(function _callee72$(_context72) {
              while (1) switch (_context72.prev = _context72.next) {
                case 0:
                  _context72.prev = 0;
                  _context72.next = 3;
                  return this._removeSession();
                case 3:
                  if (!("email" in e)) {
                    _context72.next = 25;
                    break;
                  }
                  _r29 = e.email, _n18 = e.options;
                  _a27 = null, _l5 = null;
                  if (!("pkce" === this.flowType)) {
                    _context72.next = 20;
                    break;
                  }
                  _e18 = (0, i.generatePKCEVerifier)();
                  _context72.next = 10;
                  return (0, i.setItemAsync)(this.storage, "".concat(this.storageKey, "-code-verifier"), _e18);
                case 10:
                  _context72.t0 = _e18;
                  _context72.next = 13;
                  return (0, i.generatePKCEChallenge)(_e18);
                case 13:
                  _context72.t1 = _a27 = _context72.sent;
                  if (!(_context72.t0 === _context72.t1)) {
                    _context72.next = 18;
                    break;
                  }
                  _context72.t2 = "plain";
                  _context72.next = 19;
                  break;
                case 18:
                  _context72.t2 = "s256";
                case 19:
                  _l5 = _context72.t2;
                case 20:
                  _context72.next = 22;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/otp"), {
                    headers: this.headers,
                    body: {
                      email: _r29,
                      data: null !== (s = null == _n18 ? void 0 : _n18.data) && void 0 !== s ? s : {},
                      create_user: null === (o = null == _n18 ? void 0 : _n18.shouldCreateUser) || void 0 === o || o,
                      gotrue_meta_security: {
                        captcha_token: null == _n18 ? void 0 : _n18.captchaToken
                      },
                      code_challenge: _a27,
                      code_challenge_method: _l5
                    },
                    redirectTo: null == _n18 ? void 0 : _n18.emailRedirectTo
                  });
                case 22:
                  _yield3 = _context72.sent;
                  _h8 = _yield3.error;
                  return _context72.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _h8
                  });
                case 25:
                  if (!("phone" in e)) {
                    _context72.next = 34;
                    break;
                  }
                  _s22 = e.phone;
                  _r30 = e.options;
                  _context72.next = 30;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/otp"), {
                    headers: this.headers,
                    body: {
                      phone: _s22,
                      data: null !== (n = null == _r30 ? void 0 : _r30.data) && void 0 !== n ? n : {},
                      create_user: null === (a = null == _r30 ? void 0 : _r30.shouldCreateUser) || void 0 === a || a,
                      gotrue_meta_security: {
                        captcha_token: null == _r30 ? void 0 : _r30.captchaToken
                      },
                      channel: null !== (l = null == _r30 ? void 0 : _r30.channel) && void 0 !== l ? l : "sms"
                    }
                  });
                case 30:
                  _yield4 = _context72.sent;
                  _i13 = _yield4.data;
                  _o12 = _yield4.error;
                  return _context72.abrupt("return", {
                    data: {
                      user: null,
                      session: null,
                      messageId: null == _i13 ? void 0 : _i13.message_id
                    },
                    error: _o12
                  });
                case 34:
                  throw new r.AuthInvalidCredentialsError("You must provide either an email or phone number.");
                case 37:
                  _context72.prev = 37;
                  _context72.t3 = _context72["catch"](0);
                  if (!(0, r.isAuthError)(_context72.t3)) {
                    _context72.next = 41;
                    break;
                  }
                  return _context72.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _context72.t3
                  });
                case 41:
                  throw _context72.t3;
                case 42:
                case "end":
                  return _context72.stop();
              }
            }, _callee72, this, [[0, 37]]);
          }));
          function signInWithOtp(_x46) {
            return _signInWithOtp.apply(this, arguments);
          }
          return signInWithOtp;
        }()
      }, {
        key: "verifyOtp",
        value: function () {
          var _verifyOtp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee73(e) {
            var s, i, n, a, _yield5, l, _h9, _c5, _u4;
            return _regeneratorRuntime().wrap(function _callee73$(_context73) {
              while (1) switch (_context73.prev = _context73.next) {
                case 0:
                  _context73.prev = 0;
                  _context73.t0 = "email_change" !== e.type && "phone_change" !== e.type;
                  if (!_context73.t0) {
                    _context73.next = 5;
                    break;
                  }
                  _context73.next = 5;
                  return this._removeSession();
                case 5:
                  n = void 0, a = void 0;
                  "options" in e && (n = null === (s = e.options) || void 0 === s ? void 0 : s.redirectTo, a = null === (i = e.options) || void 0 === i ? void 0 : i.captchaToken);
                  _context73.next = 9;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/verify"), {
                    headers: this.headers,
                    body: Object.assign(Object.assign({}, e), {
                      gotrue_meta_security: {
                        captcha_token: a
                      }
                    }),
                    redirectTo: n,
                    xform: t._sessionResponse
                  });
                case 9:
                  _yield5 = _context73.sent;
                  l = _yield5.data;
                  _h9 = _yield5.error;
                  if (!_h9) {
                    _context73.next = 14;
                    break;
                  }
                  throw _h9;
                case 14:
                  if (l) {
                    _context73.next = 16;
                    break;
                  }
                  throw new Error("An error occurred on token verification.");
                case 16:
                  _c5 = l.session, _u4 = l.user;
                  _context73.t1 = null == _c5 ? void 0 : _c5.access_token;
                  if (!_context73.t1) {
                    _context73.next = 23;
                    break;
                  }
                  _context73.next = 21;
                  return this._saveSession(_c5);
                case 21:
                  _context73.next = 23;
                  return this._notifyAllSubscribers("SIGNED_IN", _c5);
                case 23:
                  return _context73.abrupt("return", {
                    data: {
                      user: _u4,
                      session: _c5
                    },
                    error: null
                  });
                case 26:
                  _context73.prev = 26;
                  _context73.t2 = _context73["catch"](0);
                  if (!(0, r.isAuthError)(_context73.t2)) {
                    _context73.next = 30;
                    break;
                  }
                  return _context73.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _context73.t2
                  });
                case 30:
                  throw _context73.t2;
                case 31:
                case "end":
                  return _context73.stop();
              }
            }, _callee73, this, [[0, 26]]);
          }));
          function verifyOtp(_x47) {
            return _verifyOtp.apply(this, arguments);
          }
          return verifyOtp;
        }()
      }, {
        key: "signInWithSSO",
        value: function () {
          var _signInWithSSO = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee74(e) {
            var s, i, o;
            return _regeneratorRuntime().wrap(function _callee74$(_context74) {
              while (1) switch (_context74.prev = _context74.next) {
                case 0:
                  _context74.prev = 0;
                  _context74.next = 3;
                  return this._removeSession();
                case 3:
                  _context74.next = 5;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/sso"), {
                    body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
                      provider_id: e.providerId
                    } : null), "domain" in e ? {
                      domain: e.domain
                    } : null), {
                      redirect_to: null !== (i = null === (s = e.options) || void 0 === s ? void 0 : s.redirectTo) && void 0 !== i ? i : void 0
                    }), (null === (o = null == e ? void 0 : e.options) || void 0 === o ? void 0 : o.captchaToken) ? {
                      gotrue_meta_security: {
                        captcha_token: e.options.captchaToken
                      }
                    } : null), {
                      skip_http_redirect: !0
                    }),
                    headers: this.headers,
                    xform: t._ssoResponse
                  });
                case 5:
                  return _context74.abrupt("return", _context74.sent);
                case 8:
                  _context74.prev = 8;
                  _context74.t0 = _context74["catch"](0);
                  if (!(0, r.isAuthError)(_context74.t0)) {
                    _context74.next = 12;
                    break;
                  }
                  return _context74.abrupt("return", {
                    data: null,
                    error: _context74.t0
                  });
                case 12:
                  throw _context74.t0;
                case 13:
                case "end":
                  return _context74.stop();
              }
            }, _callee74, this, [[0, 8]]);
          }));
          function signInWithSSO(_x48) {
            return _signInWithSSO.apply(this, arguments);
          }
          return signInWithSSO;
        }()
      }, {
        key: "reauthenticate",
        value: function () {
          var _reauthenticate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
            var _this32 = this;
            return _regeneratorRuntime().wrap(function _callee76$(_context76) {
              while (1) switch (_context76.prev = _context76.next) {
                case 0:
                  _context76.prev = 0;
                  _context76.next = 3;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee75(e) {
                      var s, i, _yield6, o;
                      return _regeneratorRuntime().wrap(function _callee75$(_context75) {
                        while (1) switch (_context75.prev = _context75.next) {
                          case 0:
                            s = e.data.session, i = e.error;
                            if (!i) {
                              _context75.next = 3;
                              break;
                            }
                            throw i;
                          case 3:
                            if (s) {
                              _context75.next = 5;
                              break;
                            }
                            throw new r.AuthSessionMissingError();
                          case 5:
                            _context75.next = 7;
                            return (0, t._request)(_this32.fetch, "GET", "".concat(_this32.url, "/reauthenticate"), {
                              headers: _this32.headers,
                              jwt: s.access_token
                            });
                          case 7:
                            _yield6 = _context75.sent;
                            o = _yield6.error;
                            return _context75.abrupt("return", {
                              data: {
                                user: null,
                                session: null
                              },
                              error: o
                            });
                          case 10:
                          case "end":
                            return _context75.stop();
                        }
                      }, _callee75);
                    }));
                    return function (_x49) {
                      return _ref36.apply(this, arguments);
                    };
                  }());
                case 3:
                  return _context76.abrupt("return", _context76.sent);
                case 6:
                  _context76.prev = 6;
                  _context76.t0 = _context76["catch"](0);
                  if (!(0, r.isAuthError)(_context76.t0)) {
                    _context76.next = 10;
                    break;
                  }
                  return _context76.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _context76.t0
                  });
                case 10:
                  throw _context76.t0;
                case 11:
                case "end":
                  return _context76.stop();
              }
            }, _callee76, this, [[0, 6]]);
          }));
          function reauthenticate() {
            return _reauthenticate.apply(this, arguments);
          }
          return reauthenticate;
        }()
      }, {
        key: "resend",
        value: function () {
          var _resend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee77(e) {
            var _i14, _s23, _r31, o, _yield7, n, _s24, _r32, _o13, _yield8, _n19, a;
            return _regeneratorRuntime().wrap(function _callee77$(_context77) {
              while (1) switch (_context77.prev = _context77.next) {
                case 0:
                  _context77.prev = 0;
                  _context77.t0 = "email_change" != e.type && "phone_change" != e.type;
                  if (!_context77.t0) {
                    _context77.next = 5;
                    break;
                  }
                  _context77.next = 5;
                  return this._removeSession();
                case 5:
                  _i14 = "".concat(this.url, "/resend");
                  if (!("email" in e)) {
                    _context77.next = 15;
                    break;
                  }
                  _s23 = e.email;
                  _r31 = e.type;
                  o = e.options;
                  _context77.next = 12;
                  return (0, t._request)(this.fetch, "POST", _i14, {
                    headers: this.headers,
                    body: {
                      email: _s23,
                      type: _r31,
                      gotrue_meta_security: {
                        captcha_token: null == o ? void 0 : o.captchaToken
                      }
                    },
                    redirectTo: null == o ? void 0 : o.emailRedirectTo
                  });
                case 12:
                  _yield7 = _context77.sent;
                  n = _yield7.error;
                  return _context77.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: n
                  });
                case 15:
                  if (!("phone" in e)) {
                    _context77.next = 25;
                    break;
                  }
                  _s24 = e.phone;
                  _r32 = e.type;
                  _o13 = e.options;
                  _context77.next = 21;
                  return (0, t._request)(this.fetch, "POST", _i14, {
                    headers: this.headers,
                    body: {
                      phone: _s24,
                      type: _r32,
                      gotrue_meta_security: {
                        captcha_token: null == _o13 ? void 0 : _o13.captchaToken
                      }
                    }
                  });
                case 21:
                  _yield8 = _context77.sent;
                  _n19 = _yield8.data;
                  a = _yield8.error;
                  return _context77.abrupt("return", {
                    data: {
                      user: null,
                      session: null,
                      messageId: null == _n19 ? void 0 : _n19.message_id
                    },
                    error: a
                  });
                case 25:
                  throw new r.AuthInvalidCredentialsError("You must provide either an email or phone number and a type");
                case 28:
                  _context77.prev = 28;
                  _context77.t1 = _context77["catch"](0);
                  if (!(0, r.isAuthError)(_context77.t1)) {
                    _context77.next = 32;
                    break;
                  }
                  return _context77.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _context77.t1
                  });
                case 32:
                  throw _context77.t1;
                case 33:
                case "end":
                  return _context77.stop();
              }
            }, _callee77, this, [[0, 28]]);
          }));
          function resend(_x50) {
            return _resend.apply(this, arguments);
          }
          return resend;
        }()
      }, {
        key: "getSession",
        value: function () {
          var _getSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee79() {
            return _regeneratorRuntime().wrap(function _callee79$(_context79) {
              while (1) switch (_context79.prev = _context79.next) {
                case 0:
                  return _context79.abrupt("return", this._useSession( /*#__PURE__*/function () {
                    var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee78(e) {
                      return _regeneratorRuntime().wrap(function _callee78$(_context78) {
                        while (1) switch (_context78.prev = _context78.next) {
                          case 0:
                            return _context78.abrupt("return", e);
                          case 1:
                          case "end":
                            return _context78.stop();
                        }
                      }, _callee78);
                    }));
                    return function (_x51) {
                      return _ref37.apply(this, arguments);
                    };
                  }()));
                case 1:
                case "end":
                  return _context79.stop();
              }
            }, _callee79, this);
          }));
          function getSession() {
            return _getSession.apply(this, arguments);
          }
          return getSession;
        }()
      }, {
        key: "_acquireLock",
        value: function () {
          var _acquireLock2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee82(e, s) {
            var _this33 = this;
            return _regeneratorRuntime().wrap(function _callee82$(_context82) {
              while (1) switch (_context82.prev = _context82.next) {
                case 0:
                  this._debug("#_acquireLock", "begin", e);
                  _context82.prev = 1;
                  _context82.next = 4;
                  return (0, i.stackGuardsSupported)();
                case 4:
                  if (!_context82.sent) {
                    _context82.next = 18;
                    break;
                  }
                  if (!(0, i.isInStackGuard)("_acquireLock")) {
                    _context82.next = 12;
                    break;
                  }
                  this._debug("#_acquireLock", "recursive call");
                  _context82.next = 9;
                  return s();
                case 9:
                  _context82.t1 = _context82.sent;
                  _context82.next = 15;
                  break;
                case 12:
                  _context82.next = 14;
                  return this.lock("lock:".concat(this.storageKey), e, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee81() {
                    return _regeneratorRuntime().wrap(function _callee81$(_context81) {
                      while (1) switch (_context81.prev = _context81.next) {
                        case 0:
                          _this33._debug("#_acquireLock", "lock acquired for storage key", _this33.storageKey);
                          _context81.prev = 1;
                          _context81.next = 4;
                          return (0, i.stackGuard)("_acquireLock", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee80() {
                            return _regeneratorRuntime().wrap(function _callee80$(_context80) {
                              while (1) switch (_context80.prev = _context80.next) {
                                case 0:
                                  _context80.next = 2;
                                  return s();
                                case 2:
                                  return _context80.abrupt("return", _context80.sent);
                                case 3:
                                case "end":
                                  return _context80.stop();
                              }
                            }, _callee80);
                          })));
                        case 4:
                          return _context81.abrupt("return", _context81.sent);
                        case 5:
                          _context81.prev = 5;
                          _this33._debug("#_acquireLock", "lock released for storage key", _this33.storageKey);
                          return _context81.finish(5);
                        case 8:
                        case "end":
                          return _context81.stop();
                      }
                    }, _callee81, null, [[1,, 5, 8]]);
                  })));
                case 14:
                  _context82.t1 = _context82.sent;
                case 15:
                  _context82.t0 = _context82.t1;
                  _context82.next = 22;
                  break;
                case 18:
                  this._debug("#_acquireLock", "Stack guards not supported, so exclusive locking is not performed as it can lead to deadlocks if the lock is attempted to be recursively acquired (as the recursion cannot be detected).");
                  _context82.next = 21;
                  return s();
                case 21:
                  _context82.t0 = _context82.sent;
                case 22:
                  return _context82.abrupt("return", _context82.t0);
                case 23:
                  _context82.prev = 23;
                  this._debug("#_acquireLock", "end");
                  return _context82.finish(23);
                case 26:
                case "end":
                  return _context82.stop();
              }
            }, _callee82, this, [[1,, 23, 26]]);
          }));
          function _acquireLock(_x52, _x53) {
            return _acquireLock2.apply(this, arguments);
          }
          return _acquireLock;
        }()
      }, {
        key: "_useSession",
        value: function () {
          var _useSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee85(e) {
            var _this34 = this;
            var _s25;
            return _regeneratorRuntime().wrap(function _callee85$(_context85) {
              while (1) switch (_context85.prev = _context85.next) {
                case 0:
                  this._debug("#_useSession", "begin");
                  _context85.prev = 1;
                  if (!(0, i.isInStackGuard)("_useSession")) {
                    _context85.next = 10;
                    break;
                  }
                  this._debug("#_useSession", "recursive call");
                  _context85.next = 6;
                  return this.__loadSession();
                case 6:
                  _s25 = _context85.sent;
                  _context85.next = 9;
                  return e(_s25);
                case 9:
                  return _context85.abrupt("return", _context85.sent);
                case 10:
                  _context85.next = 12;
                  return this._acquireLock(-1, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee84() {
                    return _regeneratorRuntime().wrap(function _callee84$(_context84) {
                      while (1) switch (_context84.prev = _context84.next) {
                        case 0:
                          _context84.next = 2;
                          return (0, i.stackGuard)("_useSession", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee83() {
                            var s;
                            return _regeneratorRuntime().wrap(function _callee83$(_context83) {
                              while (1) switch (_context83.prev = _context83.next) {
                                case 0:
                                  _context83.next = 2;
                                  return _this34.__loadSession();
                                case 2:
                                  s = _context83.sent;
                                  _context83.next = 5;
                                  return e(s);
                                case 5:
                                  return _context83.abrupt("return", _context83.sent);
                                case 6:
                                case "end":
                                  return _context83.stop();
                              }
                            }, _callee83);
                          })));
                        case 2:
                          return _context84.abrupt("return", _context84.sent);
                        case 3:
                        case "end":
                          return _context84.stop();
                      }
                    }, _callee84);
                  })));
                case 12:
                  return _context85.abrupt("return", _context85.sent);
                case 13:
                  _context85.prev = 13;
                  this._debug("#_useSession", "end");
                  return _context85.finish(13);
                case 16:
                case "end":
                  return _context85.stop();
              }
            }, _callee85, this, [[1,, 13, 16]]);
          }));
          function _useSession(_x54) {
            return _useSession2.apply(this, arguments);
          }
          return _useSession;
        }()
      }, {
        key: "__loadSession",
        value: function () {
          var _loadSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee86() {
            var _e19, _s26, _s27, _yield$this$_callRefr, _r33, _t30;
            return _regeneratorRuntime().wrap(function _callee86$(_context86) {
              while (1) switch (_context86.prev = _context86.next) {
                case 0:
                  this._debug("#__loadSession()", "begin");
                  _context86.t0 = this.logDebugMessages && !(0, i.isInStackGuard)("_useSession");
                  if (!_context86.t0) {
                    _context86.next = 6;
                    break;
                  }
                  _context86.next = 5;
                  return (0, i.stackGuardsSupported)();
                case 5:
                  _context86.t0 = _context86.sent;
                case 6:
                  if (!_context86.t0) {
                    _context86.next = 8;
                    break;
                  }
                  throw new Error("Please use #_useSession()");
                case 8:
                  (0, i.isInStackGuard)("_initialize") && this._debug("#__loadSession", "#_initialize recursion detected", new Error().stack);
                  _context86.next = 11;
                  return this.initializePromise;
                case 11:
                  _context86.prev = 11;
                  _e19 = null;
                  if (!this.persistSession) {
                    _context86.next = 29;
                    break;
                  }
                  _context86.next = 16;
                  return (0, i.getItemAsync)(this.storage, this.storageKey);
                case 16:
                  _s26 = _context86.sent;
                  this._debug("#getSession()", "session from storage", _s26);
                  _context86.t1 = null !== _s26;
                  if (!_context86.t1) {
                    _context86.next = 27;
                    break;
                  }
                  if (!this._isValidSession(_s26)) {
                    _context86.next = 24;
                    break;
                  }
                  _e19 = _s26;
                  _context86.next = 27;
                  break;
                case 24:
                  this._debug("#getSession()", "session from storage is not valid");
                  _context86.next = 27;
                  return this._removeSession();
                case 27:
                  _context86.next = 30;
                  break;
                case 29:
                  _e19 = this.inMemorySession, this._debug("#getSession()", "session from memory", _e19);
                case 30:
                  if (_e19) {
                    _context86.next = 32;
                    break;
                  }
                  return _context86.abrupt("return", {
                    data: {
                      session: null
                    },
                    error: null
                  });
                case 32:
                  _s27 = !!_e19.expires_at && _e19.expires_at <= Date.now() / 1e3;
                  if (!(this._debug("#__loadSession()", "session has".concat(_s27 ? "" : " not", " expired"), "expires_at", _e19.expires_at), !_s27)) {
                    _context86.next = 35;
                    break;
                  }
                  return _context86.abrupt("return", {
                    data: {
                      session: _e19
                    },
                    error: null
                  });
                case 35:
                  _context86.next = 37;
                  return this._callRefreshToken(_e19.refresh_token);
                case 37:
                  _yield$this$_callRefr = _context86.sent;
                  _r33 = _yield$this$_callRefr.session;
                  _t30 = _yield$this$_callRefr.error;
                  return _context86.abrupt("return", _t30 ? {
                    data: {
                      session: null
                    },
                    error: _t30
                  } : {
                    data: {
                      session: _r33
                    },
                    error: null
                  });
                case 41:
                  _context86.prev = 41;
                  this._debug("#__loadSession()", "end");
                  return _context86.finish(41);
                case 44:
                case "end":
                  return _context86.stop();
              }
            }, _callee86, this, [[11,, 41, 44]]);
          }));
          function __loadSession() {
            return _loadSession.apply(this, arguments);
          }
          return __loadSession;
        }()
      }, {
        key: "getUser",
        value: function () {
          var _getUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee88(e) {
            var _this35 = this;
            return _regeneratorRuntime().wrap(function _callee88$(_context88) {
              while (1) switch (_context88.prev = _context88.next) {
                case 0:
                  _context88.prev = 0;
                  if (!e) {
                    _context88.next = 7;
                    break;
                  }
                  _context88.next = 4;
                  return (0, t._request)(this.fetch, "GET", "".concat(this.url, "/user"), {
                    headers: this.headers,
                    jwt: e,
                    xform: t._userResponse
                  });
                case 4:
                  _context88.t0 = _context88.sent;
                  _context88.next = 10;
                  break;
                case 7:
                  _context88.next = 9;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref42 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee87(e) {
                      var s, r, i, o;
                      return _regeneratorRuntime().wrap(function _callee87$(_context87) {
                        while (1) switch (_context87.prev = _context87.next) {
                          case 0:
                            i = e.data, o = e.error;
                            if (!o) {
                              _context87.next = 3;
                              break;
                            }
                            throw o;
                          case 3:
                            _context87.next = 5;
                            return (0, t._request)(_this35.fetch, "GET", "".concat(_this35.url, "/user"), {
                              headers: _this35.headers,
                              jwt: null !== (r = null === (s = i.session) || void 0 === s ? void 0 : s.access_token) && void 0 !== r ? r : void 0,
                              xform: t._userResponse
                            });
                          case 5:
                            return _context87.abrupt("return", _context87.sent);
                          case 6:
                          case "end":
                            return _context87.stop();
                        }
                      }, _callee87);
                    }));
                    return function (_x56) {
                      return _ref42.apply(this, arguments);
                    };
                  }());
                case 9:
                  _context88.t0 = _context88.sent;
                case 10:
                  return _context88.abrupt("return", _context88.t0);
                case 13:
                  _context88.prev = 13;
                  _context88.t1 = _context88["catch"](0);
                  if (!(0, r.isAuthError)(_context88.t1)) {
                    _context88.next = 17;
                    break;
                  }
                  return _context88.abrupt("return", {
                    data: {
                      user: null
                    },
                    error: _context88.t1
                  });
                case 17:
                  throw _context88.t1;
                case 18:
                case "end":
                  return _context88.stop();
              }
            }, _callee88, this, [[0, 13]]);
          }));
          function getUser(_x55) {
            return _getUser.apply(this, arguments);
          }
          return getUser;
        }()
      }, {
        key: "updateUser",
        value: function () {
          var _updateUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee90(e) {
            var _this36 = this;
            var s,
              _args90 = arguments;
            return _regeneratorRuntime().wrap(function _callee90$(_context90) {
              while (1) switch (_context90.prev = _context90.next) {
                case 0:
                  s = _args90.length > 1 && _args90[1] !== undefined ? _args90[1] : {};
                  _context90.prev = 1;
                  _context90.next = 4;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref43 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee89(i) {
                      var o, n, a, _yield9, l, h;
                      return _regeneratorRuntime().wrap(function _callee89$(_context89) {
                        while (1) switch (_context89.prev = _context89.next) {
                          case 0:
                            o = i.data, n = i.error;
                            if (!n) {
                              _context89.next = 3;
                              break;
                            }
                            throw n;
                          case 3:
                            if (o.session) {
                              _context89.next = 5;
                              break;
                            }
                            throw new r.AuthSessionMissingError();
                          case 5:
                            a = o.session;
                            _context89.next = 8;
                            return (0, t._request)(_this36.fetch, "PUT", "".concat(_this36.url, "/user"), {
                              headers: _this36.headers,
                              redirectTo: null == s ? void 0 : s.emailRedirectTo,
                              body: e,
                              jwt: a.access_token,
                              xform: t._userResponse
                            });
                          case 8:
                            _yield9 = _context89.sent;
                            l = _yield9.data;
                            h = _yield9.error;
                            if (!h) {
                              _context89.next = 13;
                              break;
                            }
                            throw h;
                          case 13:
                            a.user = l.user;
                            _context89.next = 16;
                            return _this36._saveSession(a);
                          case 16:
                            _context89.next = 18;
                            return _this36._notifyAllSubscribers("USER_UPDATED", a);
                          case 18:
                            return _context89.abrupt("return", {
                              data: {
                                user: a.user
                              },
                              error: null
                            });
                          case 19:
                          case "end":
                            return _context89.stop();
                        }
                      }, _callee89);
                    }));
                    return function (_x58) {
                      return _ref43.apply(this, arguments);
                    };
                  }());
                case 4:
                  return _context90.abrupt("return", _context90.sent);
                case 7:
                  _context90.prev = 7;
                  _context90.t0 = _context90["catch"](1);
                  if (!(0, r.isAuthError)(_context90.t0)) {
                    _context90.next = 11;
                    break;
                  }
                  return _context90.abrupt("return", {
                    data: {
                      user: null
                    },
                    error: _context90.t0
                  });
                case 11:
                  throw _context90.t0;
                case 12:
                case "end":
                  return _context90.stop();
              }
            }, _callee90, this, [[1, 7]]);
          }));
          function updateUser(_x57) {
            return _updateUser.apply(this, arguments);
          }
          return updateUser;
        }()
      }, {
        key: "_decodeJWT",
        value: function _decodeJWT(e) {
          return (0, i.decodeJWTPayload)(e);
        }
      }, {
        key: "setSession",
        value: function () {
          var _setSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee91(e) {
            var _t31, o, n, a, l, _yield$this$_callRefr2, _s28, _r34, _yield$this$getUser, _s29, _r35;
            return _regeneratorRuntime().wrap(function _callee91$(_context91) {
              while (1) switch (_context91.prev = _context91.next) {
                case 0:
                  _context91.prev = 0;
                  if (!(!e.access_token || !e.refresh_token)) {
                    _context91.next = 3;
                    break;
                  }
                  throw new r.AuthSessionMissingError();
                case 3:
                  _t31 = Date.now() / 1e3;
                  o = _t31, n = !0, a = null;
                  l = (0, i.decodeJWTPayload)(e.access_token);
                  if (!(l.exp && (n = (o = l.exp) <= _t31), n)) {
                    _context91.next = 19;
                    break;
                  }
                  _context91.next = 9;
                  return this._callRefreshToken(e.refresh_token);
                case 9:
                  _yield$this$_callRefr2 = _context91.sent;
                  _s28 = _yield$this$_callRefr2.session;
                  _r34 = _yield$this$_callRefr2.error;
                  if (!_r34) {
                    _context91.next = 14;
                    break;
                  }
                  return _context91.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _r34
                  });
                case 14:
                  if (_s28) {
                    _context91.next = 16;
                    break;
                  }
                  return _context91.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: null
                  });
                case 16:
                  a = _s28;
                  _context91.next = 31;
                  break;
                case 19:
                  _context91.next = 21;
                  return this.getUser(e.access_token);
                case 21:
                  _yield$this$getUser = _context91.sent;
                  _s29 = _yield$this$getUser.data;
                  _r35 = _yield$this$getUser.error;
                  if (!_r35) {
                    _context91.next = 26;
                    break;
                  }
                  throw _r35;
                case 26:
                  a = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: _s29.user,
                    token_type: "bearer",
                    expires_in: o - _t31,
                    expires_at: o
                  };
                  _context91.next = 29;
                  return this._saveSession(a);
                case 29:
                  _context91.next = 31;
                  return this._notifyAllSubscribers("SIGNED_IN", a);
                case 31:
                  return _context91.abrupt("return", {
                    data: {
                      user: a.user,
                      session: a
                    },
                    error: null
                  });
                case 34:
                  _context91.prev = 34;
                  _context91.t0 = _context91["catch"](0);
                  if (!(0, r.isAuthError)(_context91.t0)) {
                    _context91.next = 38;
                    break;
                  }
                  return _context91.abrupt("return", {
                    data: {
                      session: null,
                      user: null
                    },
                    error: _context91.t0
                  });
                case 38:
                  throw _context91.t0;
                case 39:
                case "end":
                  return _context91.stop();
              }
            }, _callee91, this, [[0, 34]]);
          }));
          function setSession(_x59) {
            return _setSession.apply(this, arguments);
          }
          return setSession;
        }()
      }, {
        key: "refreshSession",
        value: function () {
          var _refreshSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee93(e) {
            var _this37 = this;
            return _regeneratorRuntime().wrap(function _callee93$(_context93) {
              while (1) switch (_context93.prev = _context93.next) {
                case 0:
                  _context93.prev = 0;
                  _context93.next = 3;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref44 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee92(s) {
                      var t, _r36, _i15, _yield$_this37$_callR, i, o;
                      return _regeneratorRuntime().wrap(function _callee92$(_context92) {
                        while (1) switch (_context92.prev = _context92.next) {
                          case 0:
                            if (e) {
                              _context92.next = 5;
                              break;
                            }
                            _r36 = s.data, _i15 = s.error;
                            if (!_i15) {
                              _context92.next = 4;
                              break;
                            }
                            throw _i15;
                          case 4:
                            e = null !== (t = _r36.session) && void 0 !== t ? t : void 0;
                          case 5:
                            if (null == e ? void 0 : e.refresh_token) {
                              _context92.next = 7;
                              break;
                            }
                            throw new r.AuthSessionMissingError();
                          case 7:
                            _context92.next = 9;
                            return _this37._callRefreshToken(e.refresh_token);
                          case 9:
                            _yield$_this37$_callR = _context92.sent;
                            i = _yield$_this37$_callR.session;
                            o = _yield$_this37$_callR.error;
                            return _context92.abrupt("return", o ? {
                              data: {
                                user: null,
                                session: null
                              },
                              error: o
                            } : i ? {
                              data: {
                                user: i.user,
                                session: i
                              },
                              error: null
                            } : {
                              data: {
                                user: null,
                                session: null
                              },
                              error: null
                            });
                          case 13:
                          case "end":
                            return _context92.stop();
                        }
                      }, _callee92);
                    }));
                    return function (_x61) {
                      return _ref44.apply(this, arguments);
                    };
                  }());
                case 3:
                  return _context93.abrupt("return", _context93.sent);
                case 6:
                  _context93.prev = 6;
                  _context93.t0 = _context93["catch"](0);
                  if (!(0, r.isAuthError)(_context93.t0)) {
                    _context93.next = 10;
                    break;
                  }
                  return _context93.abrupt("return", {
                    data: {
                      user: null,
                      session: null
                    },
                    error: _context93.t0
                  });
                case 10:
                  throw _context93.t0;
                case 11:
                case "end":
                  return _context93.stop();
              }
            }, _callee93, this, [[0, 6]]);
          }));
          function refreshSession(_x60) {
            return _refreshSession.apply(this, arguments);
          }
          return refreshSession;
        }()
      }, {
        key: "_getSessionFromURL",
        value: function () {
          var _getSessionFromURL2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee94(e) {
            var _t32, _yield$this$exchangeC, _e20, _s30, _i16, o, n, a, l, _h10, _c6, _u5, _d4, _2, _yield$this$getUser2, f, w, g;
            return _regeneratorRuntime().wrap(function _callee94$(_context94) {
              while (1) switch (_context94.prev = _context94.next) {
                case 0:
                  _context94.prev = 0;
                  if ((0, i.isBrowser)()) {
                    _context94.next = 3;
                    break;
                  }
                  throw new r.AuthImplicitGrantRedirectError("No browser detected.");
                case 3:
                  if (!("implicit" === this.flowType && !this._isImplicitGrantFlow())) {
                    _context94.next = 5;
                    break;
                  }
                  throw new r.AuthImplicitGrantRedirectError("Not a valid implicit grant flow url.");
                case 5:
                  if (!("pkce" == this.flowType && !e)) {
                    _context94.next = 7;
                    break;
                  }
                  throw new r.AuthPKCEGrantCodeExchangeError("Not a valid PKCE flow url.");
                case 7:
                  _t32 = (0, i.parseParametersFromURL)(window.location.href);
                  if (!e) {
                    _context94.next = 20;
                    break;
                  }
                  if (_t32.code) {
                    _context94.next = 11;
                    break;
                  }
                  throw new r.AuthPKCEGrantCodeExchangeError("No code detected.");
                case 11:
                  _context94.next = 13;
                  return this.exchangeCodeForSession(_t32.code);
                case 13:
                  _yield$this$exchangeC = _context94.sent;
                  _e20 = _yield$this$exchangeC.data;
                  _s30 = _yield$this$exchangeC.error;
                  if (!_s30) {
                    _context94.next = 18;
                    break;
                  }
                  throw _s30;
                case 18:
                  _i16 = new URL(window.location.href);
                  return _context94.abrupt("return", (_i16.searchParams.delete("code"), window.history.replaceState(window.history.state, "", _i16.toString()), {
                    data: {
                      session: _e20.session,
                      redirectType: null
                    },
                    error: null
                  }));
                case 20:
                  if (!(_t32.error || _t32.error_description || _t32.error_code)) {
                    _context94.next = 22;
                    break;
                  }
                  throw new r.AuthImplicitGrantRedirectError(_t32.error_description || "Error in URL with unspecified error_description", {
                    error: _t32.error || "unspecified_error",
                    code: _t32.error_code || "unspecified_code"
                  });
                case 22:
                  o = _t32.provider_token, n = _t32.provider_refresh_token, a = _t32.access_token, l = _t32.refresh_token, _h10 = _t32.expires_in, _c6 = _t32.token_type;
                  if (a && _h10 && l && _c6) {
                    _context94.next = 25;
                    break;
                  }
                  throw new r.AuthImplicitGrantRedirectError("No session defined in URL");
                case 25:
                  _u5 = Math.round(Date.now() / 1e3);
                  _d4 = parseInt(_h10);
                  _2 = _u5 + _d4;
                  _context94.next = 30;
                  return this.getUser(a);
                case 30:
                  _yield$this$getUser2 = _context94.sent;
                  f = _yield$this$getUser2.data;
                  w = _yield$this$getUser2.error;
                  if (!w) {
                    _context94.next = 35;
                    break;
                  }
                  throw w;
                case 35:
                  g = {
                    provider_token: o,
                    provider_refresh_token: n,
                    access_token: a,
                    expires_in: _d4,
                    expires_at: _2,
                    refresh_token: l,
                    token_type: _c6,
                    user: f.user
                  };
                  return _context94.abrupt("return", (window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), {
                    data: {
                      session: g,
                      redirectType: _t32.type
                    },
                    error: null
                  }));
                case 39:
                  _context94.prev = 39;
                  _context94.t0 = _context94["catch"](0);
                  if (!(0, r.isAuthError)(_context94.t0)) {
                    _context94.next = 43;
                    break;
                  }
                  return _context94.abrupt("return", {
                    data: {
                      session: null,
                      redirectType: null
                    },
                    error: _context94.t0
                  });
                case 43:
                  throw _context94.t0;
                case 44:
                case "end":
                  return _context94.stop();
              }
            }, _callee94, this, [[0, 39]]);
          }));
          function _getSessionFromURL(_x62) {
            return _getSessionFromURL2.apply(this, arguments);
          }
          return _getSessionFromURL;
        }()
      }, {
        key: "_isImplicitGrantFlow",
        value: function _isImplicitGrantFlow() {
          var e = (0, i.parseParametersFromURL)(window.location.href);
          return !(!(0, i.isBrowser)() || !e.access_token && !e.error_description);
        }
      }, {
        key: "_isPKCEFlow",
        value: function () {
          var _isPKCEFlow2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee95() {
            var e, s;
            return _regeneratorRuntime().wrap(function _callee95$(_context95) {
              while (1) switch (_context95.prev = _context95.next) {
                case 0:
                  e = (0, i.parseParametersFromURL)(window.location.href);
                  _context95.next = 3;
                  return (0, i.getItemAsync)(this.storage, "".concat(this.storageKey, "-code-verifier"));
                case 3:
                  s = _context95.sent;
                  return _context95.abrupt("return", !(!e.code || !s));
                case 5:
                case "end":
                  return _context95.stop();
              }
            }, _callee95, this);
          }));
          function _isPKCEFlow() {
            return _isPKCEFlow2.apply(this, arguments);
          }
          return _isPKCEFlow;
        }()
      }, {
        key: "signOut",
        value: function () {
          var _signOut2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee97() {
            var _this38 = this;
            var _ref45,
              e,
              _args97 = arguments;
            return _regeneratorRuntime().wrap(function _callee97$(_context97) {
              while (1) switch (_context97.prev = _context97.next) {
                case 0:
                  _ref45 = _args97.length > 0 && _args97[0] !== undefined ? _args97[0] : {
                    scope: "global"
                  }, e = _ref45.scope;
                  _context97.next = 3;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref46 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee96(s) {
                      var t, o, n, a, _yield$_this38$admin$, _s31;
                      return _regeneratorRuntime().wrap(function _callee96$(_context96) {
                        while (1) switch (_context96.prev = _context96.next) {
                          case 0:
                            o = s.data, n = s.error;
                            if (!n) {
                              _context96.next = 3;
                              break;
                            }
                            return _context96.abrupt("return", {
                              error: n
                            });
                          case 3:
                            a = null === (t = o.session) || void 0 === t ? void 0 : t.access_token;
                            if (!a) {
                              _context96.next = 11;
                              break;
                            }
                            _context96.next = 7;
                            return _this38.admin.signOut(a, e);
                          case 7:
                            _yield$_this38$admin$ = _context96.sent;
                            _s31 = _yield$_this38$admin$.error;
                            if (!(_s31 && (!(0, r.isAuthApiError)(_s31) || 404 !== _s31.status && 401 !== _s31.status))) {
                              _context96.next = 11;
                              break;
                            }
                            return _context96.abrupt("return", {
                              error: _s31
                            });
                          case 11:
                            _context96.t0 = "others" !== e;
                            if (!_context96.t0) {
                              _context96.next = 19;
                              break;
                            }
                            _context96.next = 15;
                            return _this38._removeSession();
                          case 15:
                            _context96.next = 17;
                            return (0, i.removeItemAsync)(_this38.storage, "".concat(_this38.storageKey, "-code-verifier"));
                          case 17:
                            _context96.next = 19;
                            return _this38._notifyAllSubscribers("SIGNED_OUT", null);
                          case 19:
                            return _context96.abrupt("return", {
                              error: null
                            });
                          case 20:
                          case "end":
                            return _context96.stop();
                        }
                      }, _callee96);
                    }));
                    return function (_x63) {
                      return _ref46.apply(this, arguments);
                    };
                  }());
                case 3:
                  return _context97.abrupt("return", _context97.sent);
                case 4:
                case "end":
                  return _context97.stop();
              }
            }, _callee97, this);
          }));
          function signOut() {
            return _signOut2.apply(this, arguments);
          }
          return signOut;
        }()
      }, {
        key: "onAuthStateChange",
        value: function onAuthStateChange(e) {
          var _this39 = this;
          var s = (0, i.uuid)(),
            r = {
              id: s,
              callback: e,
              unsubscribe: function unsubscribe() {
                _this39._debug("#unsubscribe()", "state change callback with id removed", s), _this39.stateChangeEmitters.delete(s);
              }
            };
          return this._debug("#onAuthStateChange()", "registered callback with id", s), this.stateChangeEmitters.set(s, r), this._emitInitialSession(s), {
            data: {
              subscription: r
            }
          };
        }
      }, {
        key: "_emitInitialSession",
        value: function () {
          var _emitInitialSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee99(e) {
            var _this40 = this;
            return _regeneratorRuntime().wrap(function _callee99$(_context99) {
              while (1) switch (_context99.prev = _context99.next) {
                case 0:
                  _context99.next = 2;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref47 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee98(s) {
                      var r, t, o, n;
                      return _regeneratorRuntime().wrap(function _callee98$(_context98) {
                        while (1) switch (_context98.prev = _context98.next) {
                          case 0:
                            _context98.prev = 0;
                            o = s.data.session, n = s.error;
                            if (!n) {
                              _context98.next = 4;
                              break;
                            }
                            throw n;
                          case 4:
                            _context98.next = 6;
                            return null === (r = _this40.stateChangeEmitters.get(e)) || void 0 === r ? void 0 : r.callback("INITIAL_SESSION", o);
                          case 6:
                            _this40._debug("INITIAL_SESSION", "callback id", e, "session", o);
                            _context98.next = 15;
                            break;
                          case 9:
                            _context98.prev = 9;
                            _context98.t0 = _context98["catch"](0);
                            _context98.next = 13;
                            return null === (t = _this40.stateChangeEmitters.get(e)) || void 0 === t ? void 0 : t.callback("INITIAL_SESSION", null);
                          case 13:
                            _this40._debug("INITIAL_SESSION", "callback id", e, "error", _context98.t0);
                            console.error(_context98.t0);
                          case 15:
                          case "end":
                            return _context98.stop();
                        }
                      }, _callee98, null, [[0, 9]]);
                    }));
                    return function (_x65) {
                      return _ref47.apply(this, arguments);
                    };
                  }());
                case 2:
                  return _context99.abrupt("return", _context99.sent);
                case 3:
                case "end":
                  return _context99.stop();
              }
            }, _callee99, this);
          }));
          function _emitInitialSession(_x64) {
            return _emitInitialSession2.apply(this, arguments);
          }
          return _emitInitialSession;
        }()
      }, {
        key: "resetPasswordForEmail",
        value: function () {
          var _resetPasswordForEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee100(e) {
            var s,
              o,
              n,
              _e21,
              _args100 = arguments;
            return _regeneratorRuntime().wrap(function _callee100$(_context100) {
              while (1) switch (_context100.prev = _context100.next) {
                case 0:
                  s = _args100.length > 1 && _args100[1] !== undefined ? _args100[1] : {};
                  o = null, n = null;
                  if (!("pkce" === this.flowType)) {
                    _context100.next = 16;
                    break;
                  }
                  _e21 = (0, i.generatePKCEVerifier)();
                  _context100.next = 6;
                  return (0, i.setItemAsync)(this.storage, "".concat(this.storageKey, "-code-verifier"), _e21);
                case 6:
                  _context100.t0 = _e21;
                  _context100.next = 9;
                  return (0, i.generatePKCEChallenge)(_e21);
                case 9:
                  _context100.t1 = o = _context100.sent;
                  if (!(_context100.t0 === _context100.t1)) {
                    _context100.next = 14;
                    break;
                  }
                  _context100.t2 = "plain";
                  _context100.next = 15;
                  break;
                case 14:
                  _context100.t2 = "s256";
                case 15:
                  n = _context100.t2;
                case 16:
                  _context100.prev = 16;
                  _context100.next = 19;
                  return (0, t._request)(this.fetch, "POST", "".concat(this.url, "/recover"), {
                    body: {
                      email: e,
                      code_challenge: o,
                      code_challenge_method: n,
                      gotrue_meta_security: {
                        captcha_token: s.captchaToken
                      }
                    },
                    headers: this.headers,
                    redirectTo: s.redirectTo
                  });
                case 19:
                  return _context100.abrupt("return", _context100.sent);
                case 22:
                  _context100.prev = 22;
                  _context100.t3 = _context100["catch"](16);
                  if (!(0, r.isAuthError)(_context100.t3)) {
                    _context100.next = 26;
                    break;
                  }
                  return _context100.abrupt("return", {
                    data: null,
                    error: _context100.t3
                  });
                case 26:
                  throw _context100.t3;
                case 27:
                case "end":
                  return _context100.stop();
              }
            }, _callee100, this, [[16, 22]]);
          }));
          function resetPasswordForEmail(_x66) {
            return _resetPasswordForEmail.apply(this, arguments);
          }
          return resetPasswordForEmail;
        }()
      }, {
        key: "_refreshAccessToken",
        value: function () {
          var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee102(e) {
            var _this41 = this;
            var s, n;
            return _regeneratorRuntime().wrap(function _callee102$(_context102) {
              while (1) switch (_context102.prev = _context102.next) {
                case 0:
                  s = "#_refreshAccessToken(".concat(e.substring(0, 5), "...)");
                  this._debug(s, "begin");
                  _context102.prev = 2;
                  n = Date.now();
                  _context102.next = 6;
                  return (0, i.retryable)( /*#__PURE__*/function () {
                    var _ref48 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee101(r) {
                      return _regeneratorRuntime().wrap(function _callee101$(_context101) {
                        while (1) switch (_context101.prev = _context101.next) {
                          case 0:
                            _context101.next = 2;
                            return (0, i.sleep)(200 * r);
                          case 2:
                            _this41._debug(s, "refreshing attempt", r);
                            _context101.next = 5;
                            return (0, t._request)(_this41.fetch, "POST", "".concat(_this41.url, "/token?grant_type=refresh_token"), {
                              body: {
                                refresh_token: e
                              },
                              headers: _this41.headers,
                              xform: t._sessionResponse
                            });
                          case 5:
                            return _context101.abrupt("return", _context101.sent);
                          case 6:
                          case "end":
                            return _context101.stop();
                        }
                      }, _callee101);
                    }));
                    return function (_x68) {
                      return _ref48.apply(this, arguments);
                    };
                  }(), function (e, s, t) {
                    return t && t.error && (0, r.isAuthRetryableFetchError)(t.error) && Date.now() + 200 * (e + 1) - n < c;
                  });
                case 6:
                  return _context102.abrupt("return", _context102.sent);
                case 9:
                  _context102.prev = 9;
                  _context102.t0 = _context102["catch"](2);
                  if (!(this._debug(s, "error", _context102.t0), (0, r.isAuthError)(_context102.t0))) {
                    _context102.next = 13;
                    break;
                  }
                  return _context102.abrupt("return", {
                    data: {
                      session: null,
                      user: null
                    },
                    error: _context102.t0
                  });
                case 13:
                  throw _context102.t0;
                case 14:
                  _context102.prev = 14;
                  this._debug(s, "end");
                  return _context102.finish(14);
                case 17:
                case "end":
                  return _context102.stop();
              }
            }, _callee102, this, [[2, 9, 14, 17]]);
          }));
          function _refreshAccessToken(_x67) {
            return _refreshAccessToken2.apply(this, arguments);
          }
          return _refreshAccessToken;
        }()
      }, {
        key: "_isValidSession",
        value: function _isValidSession(e) {
          return "object" == _typeof(e) && null !== e && "access_token" in e && "refresh_token" in e && "expires_at" in e;
        }
      }, {
        key: "_handleProviderSignIn",
        value: function () {
          var _handleProviderSignIn2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee103(e, s) {
            var r;
            return _regeneratorRuntime().wrap(function _callee103$(_context103) {
              while (1) switch (_context103.prev = _context103.next) {
                case 0:
                  _context103.next = 2;
                  return this._getUrlForProvider(e, {
                    redirectTo: s.redirectTo,
                    scopes: s.scopes,
                    queryParams: s.queryParams
                  });
                case 2:
                  r = _context103.sent;
                  return _context103.abrupt("return", (this._debug("#_handleProviderSignIn()", "provider", e, "options", s, "url", r), (0, i.isBrowser)() && !s.skipBrowserRedirect && window.location.assign(r), {
                    data: {
                      provider: e,
                      url: r
                    },
                    error: null
                  }));
                case 4:
                case "end":
                  return _context103.stop();
              }
            }, _callee103, this);
          }));
          function _handleProviderSignIn(_x69, _x70) {
            return _handleProviderSignIn2.apply(this, arguments);
          }
          return _handleProviderSignIn;
        }()
      }, {
        key: "_recoverAndRefresh",
        value: function () {
          var _recoverAndRefresh2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee104() {
            var e, t, n, a, l, _yield$this$_callRefr3, _e22;
            return _regeneratorRuntime().wrap(function _callee104$(_context104) {
              while (1) switch (_context104.prev = _context104.next) {
                case 0:
                  t = "#_recoverAndRefresh()";
                  this._debug(t, "begin");
                  _context104.prev = 2;
                  _context104.next = 5;
                  return (0, i.getItemAsync)(this.storage, this.storageKey);
                case 5:
                  n = _context104.sent;
                  if (!(this._debug(t, "session from storage", n), !this._isValidSession(n))) {
                    _context104.next = 14;
                    break;
                  }
                  this._debug(t, "session is not valid");
                  _context104.t0 = null !== n;
                  if (!_context104.t0) {
                    _context104.next = 13;
                    break;
                  }
                  _context104.next = 12;
                  return this._removeSession();
                case 12:
                  _context104.t0 = _context104.sent;
                case 13:
                  return _context104.abrupt("return", void _context104.t0);
                case 14:
                  a = Math.round(Date.now() / 1e3), l = (null !== (e = n.expires_at) && void 0 !== e ? e : 1 / 0) < a + s.EXPIRY_MARGIN;
                  if (!(this._debug(t, "session has".concat(l ? "" : " not", " expired with margin of ").concat(s.EXPIRY_MARGIN, "s")), l)) {
                    _context104.next = 31;
                    break;
                  }
                  if (!(this.autoRefreshToken && n.refresh_token)) {
                    _context104.next = 29;
                    break;
                  }
                  _context104.next = 19;
                  return this._callRefreshToken(n.refresh_token);
                case 19:
                  _yield$this$_callRefr3 = _context104.sent;
                  _e22 = _yield$this$_callRefr3.error;
                  _context104.t1 = _e22;
                  if (!_context104.t1) {
                    _context104.next = 29;
                    break;
                  }
                  console.error(_e22);
                  _context104.t2 = (0, r.isAuthRetryableFetchError)(_e22);
                  if (_context104.t2) {
                    _context104.next = 29;
                    break;
                  }
                  this._debug(t, "refresh failed with a non-retryable error, removing the session", _e22);
                  _context104.next = 29;
                  return this._removeSession();
                case 29:
                  _context104.next = 33;
                  break;
                case 31:
                  _context104.next = 33;
                  return this._notifyAllSubscribers("SIGNED_IN", n);
                case 33:
                  _context104.next = 38;
                  break;
                case 35:
                  _context104.prev = 35;
                  _context104.t3 = _context104["catch"](2);
                  return _context104.abrupt("return", (this._debug(t, "error", _context104.t3), void console.error(_context104.t3)));
                case 38:
                  _context104.prev = 38;
                  this._debug(t, "end");
                  return _context104.finish(38);
                case 41:
                case "end":
                  return _context104.stop();
              }
            }, _callee104, this, [[2, 35, 38, 41]]);
          }));
          function _recoverAndRefresh() {
            return _recoverAndRefresh2.apply(this, arguments);
          }
          return _recoverAndRefresh;
        }()
      }, {
        key: "_callRefreshToken",
        value: function () {
          var _callRefreshToken2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee105(e) {
            var s, t, o, _yield$this$_refreshA, a, l, _h11, _e23;
            return _regeneratorRuntime().wrap(function _callee105$(_context105) {
              while (1) switch (_context105.prev = _context105.next) {
                case 0:
                  if (e) {
                    _context105.next = 2;
                    break;
                  }
                  throw new r.AuthSessionMissingError();
                case 2:
                  if (!this.refreshingDeferred) {
                    _context105.next = 4;
                    break;
                  }
                  return _context105.abrupt("return", this.refreshingDeferred.promise);
                case 4:
                  o = "#_callRefreshToken(".concat(e.substring(0, 5), "...)");
                  this._debug(o, "begin");
                  _context105.prev = 6;
                  this.refreshingDeferred = new i.Deferred();
                  _context105.next = 10;
                  return this._refreshAccessToken(e);
                case 10:
                  _yield$this$_refreshA = _context105.sent;
                  a = _yield$this$_refreshA.data;
                  l = _yield$this$_refreshA.error;
                  if (!l) {
                    _context105.next = 15;
                    break;
                  }
                  throw l;
                case 15:
                  if (a.session) {
                    _context105.next = 17;
                    break;
                  }
                  throw new r.AuthSessionMissingError();
                case 17:
                  _context105.next = 19;
                  return this._saveSession(a.session);
                case 19:
                  _context105.next = 21;
                  return this._notifyAllSubscribers("TOKEN_REFRESHED", a.session);
                case 21:
                  _h11 = {
                    session: a.session,
                    error: null
                  };
                  return _context105.abrupt("return", (this.refreshingDeferred.resolve(_h11), _h11));
                case 25:
                  _context105.prev = 25;
                  _context105.t0 = _context105["catch"](6);
                  if (!(this._debug(o, "error", _context105.t0), (0, r.isAuthError)(_context105.t0))) {
                    _context105.next = 30;
                    break;
                  }
                  _e23 = {
                    session: null,
                    error: _context105.t0
                  };
                  return _context105.abrupt("return", (null === (s = this.refreshingDeferred) || void 0 === s || s.resolve(_e23), _e23));
                case 30:
                  throw null === (t = this.refreshingDeferred) || void 0 === t || t.reject(_context105.t0), _context105.t0;
                case 31:
                  _context105.prev = 31;
                  this.refreshingDeferred = null, this._debug(o, "end");
                  return _context105.finish(31);
                case 34:
                case "end":
                  return _context105.stop();
              }
            }, _callee105, this, [[6, 25, 31, 34]]);
          }));
          function _callRefreshToken(_x71) {
            return _callRefreshToken2.apply(this, arguments);
          }
          return _callRefreshToken;
        }()
      }, {
        key: "_notifyAllSubscribers",
        value: function () {
          var _notifyAllSubscribers2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee107(e, s) {
            var r,
              t,
              _i17,
              o,
              _e24,
              _args107 = arguments;
            return _regeneratorRuntime().wrap(function _callee107$(_context107) {
              while (1) switch (_context107.prev = _context107.next) {
                case 0:
                  r = _args107.length > 2 && _args107[2] !== undefined ? _args107[2] : !0;
                  t = "#_notifyAllSubscribers(".concat(e, ")");
                  this._debug(t, "begin", s, "broadcast = ".concat(r));
                  _context107.prev = 3;
                  this.broadcastChannel && r && this.broadcastChannel.postMessage({
                    event: e,
                    session: s
                  });
                  _i17 = [], o = Array.from(this.stateChangeEmitters.values()).map( /*#__PURE__*/function () {
                    var _ref49 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee106(r) {
                      return _regeneratorRuntime().wrap(function _callee106$(_context106) {
                        while (1) switch (_context106.prev = _context106.next) {
                          case 0:
                            _context106.prev = 0;
                            _context106.next = 3;
                            return r.callback(e, s);
                          case 3:
                            _context106.next = 8;
                            break;
                          case 5:
                            _context106.prev = 5;
                            _context106.t0 = _context106["catch"](0);
                            _i17.push(_context106.t0);
                          case 8:
                          case "end":
                            return _context106.stop();
                        }
                      }, _callee106, null, [[0, 5]]);
                    }));
                    return function (_x74) {
                      return _ref49.apply(this, arguments);
                    };
                  }());
                  _context107.next = 8;
                  return Promise.all(o);
                case 8:
                  if (!(_i17.length > 0)) {
                    _context107.next = 11;
                    break;
                  }
                  for (_e24 = 0; _e24 < _i17.length; _e24 += 1) console.error(_i17[_e24]);
                  throw _i17[0];
                case 11:
                  _context107.prev = 11;
                  this._debug(t, "end");
                  return _context107.finish(11);
                case 14:
                case "end":
                  return _context107.stop();
              }
            }, _callee107, this, [[3,, 11, 14]]);
          }));
          function _notifyAllSubscribers(_x72, _x73) {
            return _notifyAllSubscribers2.apply(this, arguments);
          }
          return _notifyAllSubscribers;
        }()
      }, {
        key: "_saveSession",
        value: function () {
          var _saveSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee108(e) {
            return _regeneratorRuntime().wrap(function _callee108$(_context108) {
              while (1) switch (_context108.prev = _context108.next) {
                case 0:
                  this._debug("#_saveSession()", e);
                  this.persistSession || (this.inMemorySession = e);
                  _context108.t0 = this.persistSession && e.expires_at;
                  if (!_context108.t0) {
                    _context108.next = 6;
                    break;
                  }
                  _context108.next = 6;
                  return this._persistSession(e);
                case 6:
                case "end":
                  return _context108.stop();
              }
            }, _callee108, this);
          }));
          function _saveSession(_x75) {
            return _saveSession2.apply(this, arguments);
          }
          return _saveSession;
        }()
      }, {
        key: "_persistSession",
        value: function _persistSession(e) {
          return this._debug("#_persistSession()", e), (0, i.setItemAsync)(this.storage, this.storageKey, e);
        }
      }, {
        key: "_removeSession",
        value: function () {
          var _removeSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee109() {
            return _regeneratorRuntime().wrap(function _callee109$(_context109) {
              while (1) switch (_context109.prev = _context109.next) {
                case 0:
                  this._debug("#_removeSession()");
                  if (!this.persistSession) {
                    _context109.next = 6;
                    break;
                  }
                  _context109.next = 4;
                  return (0, i.removeItemAsync)(this.storage, this.storageKey);
                case 4:
                  _context109.next = 7;
                  break;
                case 6:
                  this.inMemorySession = null;
                case 7:
                case "end":
                  return _context109.stop();
              }
            }, _callee109, this);
          }));
          function _removeSession() {
            return _removeSession2.apply(this, arguments);
          }
          return _removeSession;
        }()
      }, {
        key: "_removeVisibilityChangedCallback",
        value: function _removeVisibilityChangedCallback() {
          this._debug("#_removeVisibilityChangedCallback()");
          var e = this.visibilityChangedCallback;
          this.visibilityChangedCallback = null;
          try {
            e && (0, i.isBrowser)() && (null === window || void 0 === window ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange", e);
          } catch (s) {
            console.error("removing visibilitychange callback failed", s);
          }
        }
      }, {
        key: "_startAutoRefresh",
        value: function () {
          var _startAutoRefresh2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee111() {
            var _this42 = this;
            var e;
            return _regeneratorRuntime().wrap(function _callee111$(_context111) {
              while (1) switch (_context111.prev = _context111.next) {
                case 0:
                  _context111.next = 2;
                  return this._stopAutoRefresh();
                case 2:
                  this._debug("#_startAutoRefresh()");
                  e = setInterval(function () {
                    return _this42._autoRefreshTokenTick();
                  }, c);
                  this.autoRefreshTicker = e, e && "object" == _typeof(e) && "function" == typeof e.unref ? e.unref() : "undefined" != typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(e), setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee110() {
                    return _regeneratorRuntime().wrap(function _callee110$(_context110) {
                      while (1) switch (_context110.prev = _context110.next) {
                        case 0:
                          _context110.next = 2;
                          return _this42.initializePromise;
                        case 2:
                          _context110.next = 4;
                          return _this42._autoRefreshTokenTick();
                        case 4:
                        case "end":
                          return _context110.stop();
                      }
                    }, _callee110);
                  })), 0);
                case 5:
                case "end":
                  return _context111.stop();
              }
            }, _callee111, this);
          }));
          function _startAutoRefresh() {
            return _startAutoRefresh2.apply(this, arguments);
          }
          return _startAutoRefresh;
        }()
      }, {
        key: "_stopAutoRefresh",
        value: function () {
          var _stopAutoRefresh2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee112() {
            var e;
            return _regeneratorRuntime().wrap(function _callee112$(_context112) {
              while (1) switch (_context112.prev = _context112.next) {
                case 0:
                  this._debug("#_stopAutoRefresh()");
                  e = this.autoRefreshTicker;
                  this.autoRefreshTicker = null, e && clearInterval(e);
                case 3:
                case "end":
                  return _context112.stop();
              }
            }, _callee112, this);
          }));
          function _stopAutoRefresh() {
            return _stopAutoRefresh2.apply(this, arguments);
          }
          return _stopAutoRefresh;
        }()
      }, {
        key: "startAutoRefresh",
        value: function () {
          var _startAutoRefresh3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee113() {
            return _regeneratorRuntime().wrap(function _callee113$(_context113) {
              while (1) switch (_context113.prev = _context113.next) {
                case 0:
                  this._removeVisibilityChangedCallback();
                  _context113.next = 3;
                  return this._startAutoRefresh();
                case 3:
                case "end":
                  return _context113.stop();
              }
            }, _callee113, this);
          }));
          function startAutoRefresh() {
            return _startAutoRefresh3.apply(this, arguments);
          }
          return startAutoRefresh;
        }()
      }, {
        key: "stopAutoRefresh",
        value: function () {
          var _stopAutoRefresh3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee114() {
            return _regeneratorRuntime().wrap(function _callee114$(_context114) {
              while (1) switch (_context114.prev = _context114.next) {
                case 0:
                  this._removeVisibilityChangedCallback();
                  _context114.next = 3;
                  return this._stopAutoRefresh();
                case 3:
                case "end":
                  return _context114.stop();
              }
            }, _callee114, this);
          }));
          function stopAutoRefresh() {
            return _stopAutoRefresh3.apply(this, arguments);
          }
          return stopAutoRefresh;
        }()
      }, {
        key: "_autoRefreshTokenTick",
        value: function () {
          var _autoRefreshTokenTick2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee116() {
            var _this43 = this;
            var _s32;
            return _regeneratorRuntime().wrap(function _callee116$(_context116) {
              while (1) switch (_context116.prev = _context116.next) {
                case 0:
                  this._debug("#_autoRefreshTokenTick()", "begin");
                  _context116.prev = 1;
                  _s32 = Date.now();
                  _context116.prev = 3;
                  _context116.next = 6;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref51 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee115(e) {
                      var r, t;
                      return _regeneratorRuntime().wrap(function _callee115$(_context115) {
                        while (1) switch (_context115.prev = _context115.next) {
                          case 0:
                            r = e.data.session;
                            if (!(!r || !r.refresh_token || !r.expires_at)) {
                              _context115.next = 3;
                              break;
                            }
                            return _context115.abrupt("return", void _this43._debug("#_autoRefreshTokenTick()", "no session"));
                          case 3:
                            t = Math.floor((1e3 * r.expires_at - _s32) / c);
                            _this43._debug("#_autoRefreshTokenTick()", "access token expires in ".concat(t, " ticks, a tick lasts ").concat(c, "ms, refresh threshold is ").concat(u, " ticks"));
                            _context115.t0 = t <= u;
                            if (!_context115.t0) {
                              _context115.next = 9;
                              break;
                            }
                            _context115.next = 9;
                            return _this43._callRefreshToken(r.refresh_token);
                          case 9:
                          case "end":
                            return _context115.stop();
                        }
                      }, _callee115);
                    }));
                    return function (_x76) {
                      return _ref51.apply(this, arguments);
                    };
                  }());
                case 6:
                  return _context116.abrupt("return", _context116.sent);
                case 9:
                  _context116.prev = 9;
                  _context116.t0 = _context116["catch"](3);
                  console.error("Auto refresh tick failed with error. This is likely a transient error.", _context116.t0);
                case 12:
                  _context116.prev = 12;
                  this._debug("#_autoRefreshTokenTick()", "end");
                  return _context116.finish(12);
                case 15:
                case "end":
                  return _context116.stop();
              }
            }, _callee116, this, [[1,, 12, 15], [3, 9]]);
          }));
          function _autoRefreshTokenTick() {
            return _autoRefreshTokenTick2.apply(this, arguments);
          }
          return _autoRefreshTokenTick;
        }()
      }, {
        key: "_handleVisibilityChange",
        value: function () {
          var _handleVisibilityChange2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee118() {
            var _this44 = this;
            return _regeneratorRuntime().wrap(function _callee118$(_context118) {
              while (1) switch (_context118.prev = _context118.next) {
                case 0:
                  if (!(this._debug("#_handleVisibilityChange()"), !(0, i.isBrowser)() || !(null === window || void 0 === window ? void 0 : window.addEventListener))) {
                    _context118.next = 2;
                    break;
                  }
                  return _context118.abrupt("return", (this.autoRefreshToken && this.startAutoRefresh(), !1));
                case 2:
                  _context118.prev = 2;
                  this.visibilityChangedCallback = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee117() {
                    return _regeneratorRuntime().wrap(function _callee117$(_context117) {
                      while (1) switch (_context117.prev = _context117.next) {
                        case 0:
                          _context117.next = 2;
                          return _this44._onVisibilityChanged(!1);
                        case 2:
                          return _context117.abrupt("return", _context117.sent);
                        case 3:
                        case "end":
                          return _context117.stop();
                      }
                    }, _callee117);
                  }));
                  null === window || void 0 === window || window.addEventListener("visibilitychange", this.visibilityChangedCallback);
                  _context118.next = 7;
                  return this._onVisibilityChanged(!0);
                case 7:
                  _context118.next = 12;
                  break;
                case 9:
                  _context118.prev = 9;
                  _context118.t0 = _context118["catch"](2);
                  console.error("_handleVisibilityChange", _context118.t0);
                case 12:
                case "end":
                  return _context118.stop();
              }
            }, _callee118, this, [[2, 9]]);
          }));
          function _handleVisibilityChange() {
            return _handleVisibilityChange2.apply(this, arguments);
          }
          return _handleVisibilityChange;
        }()
      }, {
        key: "_onVisibilityChanged",
        value: function () {
          var _onVisibilityChanged2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee120(e) {
            var _this45 = this;
            return _regeneratorRuntime().wrap(function _callee120$(_context120) {
              while (1) switch (_context120.prev = _context120.next) {
                case 0:
                  this._debug("#_onVisibilityChanged(".concat(e, ")"), "visibilityState", document.visibilityState), "visible" === document.visibilityState ? setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee119() {
                    return _regeneratorRuntime().wrap(function _callee119$(_context119) {
                      while (1) switch (_context119.prev = _context119.next) {
                        case 0:
                          _context119.t0 = e;
                          if (_context119.t0) {
                            _context119.next = 7;
                            break;
                          }
                          _context119.next = 4;
                          return _this45.initializePromise;
                        case 4:
                          _context119.next = 6;
                          return _this45._recoverAndRefresh();
                        case 6:
                          _this45._debug("#_onVisibilityChanged()", "finished waiting for initialize, _recoverAndRefresh");
                        case 7:
                          _this45.autoRefreshToken && _this45._startAutoRefresh();
                        case 8:
                        case "end":
                          return _context119.stop();
                      }
                    }, _callee119);
                  })), 0) : "hidden" === document.visibilityState && this.autoRefreshToken && this._stopAutoRefresh();
                case 1:
                case "end":
                  return _context120.stop();
              }
            }, _callee120, this);
          }));
          function _onVisibilityChanged(_x77) {
            return _onVisibilityChanged2.apply(this, arguments);
          }
          return _onVisibilityChanged;
        }()
      }, {
        key: "_getUrlForProvider",
        value: function () {
          var _getUrlForProvider2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee121(e, s) {
            var r, _e25, _s33, _t33, o, _e26;
            return _regeneratorRuntime().wrap(function _callee121$(_context121) {
              while (1) switch (_context121.prev = _context121.next) {
                case 0:
                  r = ["provider=".concat(encodeURIComponent(e))];
                  if (!((null == s ? void 0 : s.redirectTo) && r.push("redirect_to=".concat(encodeURIComponent(s.redirectTo))), (null == s ? void 0 : s.scopes) && r.push("scopes=".concat(encodeURIComponent(s.scopes))), "pkce" === this.flowType)) {
                    _context121.next = 12;
                    break;
                  }
                  _e25 = (0, i.generatePKCEVerifier)();
                  _context121.next = 5;
                  return (0, i.setItemAsync)(this.storage, "".concat(this.storageKey, "-code-verifier"), _e25);
                case 5:
                  _context121.next = 7;
                  return (0, i.generatePKCEChallenge)(_e25);
                case 7:
                  _s33 = _context121.sent;
                  _t33 = _e25 === _s33 ? "plain" : "s256";
                  this._debug("PKCE", "code verifier", "".concat(_e25.substring(0, 5), "..."), "code challenge", _s33, "method", _t33);
                  o = new URLSearchParams({
                    code_challenge: "".concat(encodeURIComponent(_s33)),
                    code_challenge_method: "".concat(encodeURIComponent(_t33))
                  });
                  r.push(o.toString());
                case 12:
                  if (null == s ? void 0 : s.queryParams) {
                    _e26 = new URLSearchParams(s.queryParams);
                    r.push(_e26.toString());
                  }
                  return _context121.abrupt("return", "".concat(this.url, "/authorize?").concat(r.join("&")));
                case 14:
                case "end":
                  return _context121.stop();
              }
            }, _callee121, this);
          }));
          function _getUrlForProvider(_x78, _x79) {
            return _getUrlForProvider2.apply(this, arguments);
          }
          return _getUrlForProvider;
        }()
      }, {
        key: "_unenroll",
        value: function () {
          var _unenroll2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee123(e) {
            var _this46 = this;
            return _regeneratorRuntime().wrap(function _callee123$(_context123) {
              while (1) switch (_context123.prev = _context123.next) {
                case 0:
                  _context123.prev = 0;
                  _context123.next = 3;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref54 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee122(s) {
                      var r, i, o;
                      return _regeneratorRuntime().wrap(function _callee122$(_context122) {
                        while (1) switch (_context122.prev = _context122.next) {
                          case 0:
                            i = s.data, o = s.error;
                            if (!o) {
                              _context122.next = 5;
                              break;
                            }
                            _context122.t0 = {
                              data: null,
                              error: o
                            };
                            _context122.next = 8;
                            break;
                          case 5:
                            _context122.next = 7;
                            return (0, t._request)(_this46.fetch, "DELETE", "".concat(_this46.url, "/factors/").concat(e.factorId), {
                              headers: _this46.headers,
                              jwt: null === (r = null == i ? void 0 : i.session) || void 0 === r ? void 0 : r.access_token
                            });
                          case 7:
                            _context122.t0 = _context122.sent;
                          case 8:
                            return _context122.abrupt("return", _context122.t0);
                          case 9:
                          case "end":
                            return _context122.stop();
                        }
                      }, _callee122);
                    }));
                    return function (_x81) {
                      return _ref54.apply(this, arguments);
                    };
                  }());
                case 3:
                  return _context123.abrupt("return", _context123.sent);
                case 6:
                  _context123.prev = 6;
                  _context123.t0 = _context123["catch"](0);
                  if (!(0, r.isAuthError)(_context123.t0)) {
                    _context123.next = 10;
                    break;
                  }
                  return _context123.abrupt("return", {
                    data: null,
                    error: _context123.t0
                  });
                case 10:
                  throw _context123.t0;
                case 11:
                case "end":
                  return _context123.stop();
              }
            }, _callee123, this, [[0, 6]]);
          }));
          function _unenroll(_x80) {
            return _unenroll2.apply(this, arguments);
          }
          return _unenroll;
        }()
      }, {
        key: "_enroll",
        value: function () {
          var _enroll2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee125(e) {
            var _this47 = this;
            return _regeneratorRuntime().wrap(function _callee125$(_context125) {
              while (1) switch (_context125.prev = _context125.next) {
                case 0:
                  _context125.prev = 0;
                  _context125.next = 3;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref55 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee124(s) {
                      var r, i, o, n, _yield10, a, l;
                      return _regeneratorRuntime().wrap(function _callee124$(_context124) {
                        while (1) switch (_context124.prev = _context124.next) {
                          case 0:
                            o = s.data, n = s.error;
                            if (!n) {
                              _context124.next = 3;
                              break;
                            }
                            return _context124.abrupt("return", {
                              data: null,
                              error: n
                            });
                          case 3:
                            _context124.next = 5;
                            return (0, t._request)(_this47.fetch, "POST", "".concat(_this47.url, "/factors"), {
                              body: {
                                friendly_name: e.friendlyName,
                                factor_type: e.factorType,
                                issuer: e.issuer
                              },
                              headers: _this47.headers,
                              jwt: null === (r = null == o ? void 0 : o.session) || void 0 === r ? void 0 : r.access_token
                            });
                          case 5:
                            _yield10 = _context124.sent;
                            a = _yield10.data;
                            l = _yield10.error;
                            return _context124.abrupt("return", l ? {
                              data: null,
                              error: l
                            } : ((null === (i = null == a ? void 0 : a.totp) || void 0 === i ? void 0 : i.qr_code) && (a.totp.qr_code = "data:image/svg+xml;utf-8,".concat(a.totp.qr_code)), {
                              data: a,
                              error: null
                            }));
                          case 9:
                          case "end":
                            return _context124.stop();
                        }
                      }, _callee124);
                    }));
                    return function (_x83) {
                      return _ref55.apply(this, arguments);
                    };
                  }());
                case 3:
                  return _context125.abrupt("return", _context125.sent);
                case 6:
                  _context125.prev = 6;
                  _context125.t0 = _context125["catch"](0);
                  if (!(0, r.isAuthError)(_context125.t0)) {
                    _context125.next = 10;
                    break;
                  }
                  return _context125.abrupt("return", {
                    data: null,
                    error: _context125.t0
                  });
                case 10:
                  throw _context125.t0;
                case 11:
                case "end":
                  return _context125.stop();
              }
            }, _callee125, this, [[0, 6]]);
          }));
          function _enroll(_x82) {
            return _enroll2.apply(this, arguments);
          }
          return _enroll;
        }()
      }, {
        key: "_verify",
        value: function () {
          var _verify2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee127(e) {
            var _this48 = this;
            return _regeneratorRuntime().wrap(function _callee127$(_context127) {
              while (1) switch (_context127.prev = _context127.next) {
                case 0:
                  _context127.prev = 0;
                  _context127.next = 3;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref56 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee126(s) {
                      var r, i, o, _yield11, n, a;
                      return _regeneratorRuntime().wrap(function _callee126$(_context126) {
                        while (1) switch (_context126.prev = _context126.next) {
                          case 0:
                            i = s.data, o = s.error;
                            if (!o) {
                              _context126.next = 3;
                              break;
                            }
                            return _context126.abrupt("return", {
                              data: null,
                              error: o
                            });
                          case 3:
                            _context126.next = 5;
                            return (0, t._request)(_this48.fetch, "POST", "".concat(_this48.url, "/factors/").concat(e.factorId, "/verify"), {
                              body: {
                                code: e.code,
                                challenge_id: e.challengeId
                              },
                              headers: _this48.headers,
                              jwt: null === (r = null == i ? void 0 : i.session) || void 0 === r ? void 0 : r.access_token
                            });
                          case 5:
                            _yield11 = _context126.sent;
                            n = _yield11.data;
                            a = _yield11.error;
                            if (!a) {
                              _context126.next = 12;
                              break;
                            }
                            _context126.t0 = {
                              data: null,
                              error: a
                            };
                            _context126.next = 17;
                            break;
                          case 12:
                            _context126.next = 14;
                            return _this48._saveSession(Object.assign({
                              expires_at: Math.round(Date.now() / 1e3) + n.expires_in
                            }, n));
                          case 14:
                            _context126.next = 16;
                            return _this48._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", n);
                          case 16:
                            _context126.t0 = {
                              data: n,
                              error: a
                            };
                          case 17:
                            return _context126.abrupt("return", _context126.t0);
                          case 18:
                          case "end":
                            return _context126.stop();
                        }
                      }, _callee126);
                    }));
                    return function (_x85) {
                      return _ref56.apply(this, arguments);
                    };
                  }());
                case 3:
                  return _context127.abrupt("return", _context127.sent);
                case 6:
                  _context127.prev = 6;
                  _context127.t0 = _context127["catch"](0);
                  if (!(0, r.isAuthError)(_context127.t0)) {
                    _context127.next = 10;
                    break;
                  }
                  return _context127.abrupt("return", {
                    data: null,
                    error: _context127.t0
                  });
                case 10:
                  throw _context127.t0;
                case 11:
                case "end":
                  return _context127.stop();
              }
            }, _callee127, this, [[0, 6]]);
          }));
          function _verify(_x84) {
            return _verify2.apply(this, arguments);
          }
          return _verify;
        }()
      }, {
        key: "_challenge",
        value: function () {
          var _challenge2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee129(e) {
            var _this49 = this;
            return _regeneratorRuntime().wrap(function _callee129$(_context129) {
              while (1) switch (_context129.prev = _context129.next) {
                case 0:
                  _context129.prev = 0;
                  _context129.next = 3;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref57 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee128(s) {
                      var r, i, o;
                      return _regeneratorRuntime().wrap(function _callee128$(_context128) {
                        while (1) switch (_context128.prev = _context128.next) {
                          case 0:
                            i = s.data, o = s.error;
                            if (!o) {
                              _context128.next = 5;
                              break;
                            }
                            _context128.t0 = {
                              data: null,
                              error: o
                            };
                            _context128.next = 8;
                            break;
                          case 5:
                            _context128.next = 7;
                            return (0, t._request)(_this49.fetch, "POST", "".concat(_this49.url, "/factors/").concat(e.factorId, "/challenge"), {
                              headers: _this49.headers,
                              jwt: null === (r = null == i ? void 0 : i.session) || void 0 === r ? void 0 : r.access_token
                            });
                          case 7:
                            _context128.t0 = _context128.sent;
                          case 8:
                            return _context128.abrupt("return", _context128.t0);
                          case 9:
                          case "end":
                            return _context128.stop();
                        }
                      }, _callee128);
                    }));
                    return function (_x87) {
                      return _ref57.apply(this, arguments);
                    };
                  }());
                case 3:
                  return _context129.abrupt("return", _context129.sent);
                case 6:
                  _context129.prev = 6;
                  _context129.t0 = _context129["catch"](0);
                  if (!(0, r.isAuthError)(_context129.t0)) {
                    _context129.next = 10;
                    break;
                  }
                  return _context129.abrupt("return", {
                    data: null,
                    error: _context129.t0
                  });
                case 10:
                  throw _context129.t0;
                case 11:
                case "end":
                  return _context129.stop();
              }
            }, _callee129, this, [[0, 6]]);
          }));
          function _challenge(_x86) {
            return _challenge2.apply(this, arguments);
          }
          return _challenge;
        }()
      }, {
        key: "_challengeAndVerify",
        value: function () {
          var _challengeAndVerify2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee130(e) {
            var _yield$this$_challeng, s, r;
            return _regeneratorRuntime().wrap(function _callee130$(_context130) {
              while (1) switch (_context130.prev = _context130.next) {
                case 0:
                  _context130.next = 2;
                  return this._challenge({
                    factorId: e.factorId
                  });
                case 2:
                  _yield$this$_challeng = _context130.sent;
                  s = _yield$this$_challeng.data;
                  r = _yield$this$_challeng.error;
                  if (!r) {
                    _context130.next = 9;
                    break;
                  }
                  _context130.t0 = {
                    data: null,
                    error: r
                  };
                  _context130.next = 12;
                  break;
                case 9:
                  _context130.next = 11;
                  return this._verify({
                    factorId: e.factorId,
                    challengeId: s.id,
                    code: e.code
                  });
                case 11:
                  _context130.t0 = _context130.sent;
                case 12:
                  return _context130.abrupt("return", _context130.t0);
                case 13:
                case "end":
                  return _context130.stop();
              }
            }, _callee130, this);
          }));
          function _challengeAndVerify(_x88) {
            return _challengeAndVerify2.apply(this, arguments);
          }
          return _challengeAndVerify;
        }()
      }, {
        key: "_listFactors",
        value: function () {
          var _listFactors3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee131() {
            var _yield$this$getUser3, e, s, r, t;
            return _regeneratorRuntime().wrap(function _callee131$(_context131) {
              while (1) switch (_context131.prev = _context131.next) {
                case 0:
                  _context131.next = 2;
                  return this.getUser();
                case 2:
                  _yield$this$getUser3 = _context131.sent;
                  e = _yield$this$getUser3.data.user;
                  s = _yield$this$getUser3.error;
                  if (!s) {
                    _context131.next = 7;
                    break;
                  }
                  return _context131.abrupt("return", {
                    data: null,
                    error: s
                  });
                case 7:
                  r = (null == e ? void 0 : e.factors) || [], t = r.filter(function (e) {
                    return "totp" === e.factor_type && "verified" === e.status;
                  });
                  return _context131.abrupt("return", {
                    data: {
                      all: r,
                      totp: t
                    },
                    error: null
                  });
                case 9:
                case "end":
                  return _context131.stop();
              }
            }, _callee131, this);
          }));
          function _listFactors() {
            return _listFactors3.apply(this, arguments);
          }
          return _listFactors;
        }()
      }, {
        key: "_getAuthenticatorAssuranceLevel",
        value: function () {
          var _getAuthenticatorAssuranceLevel2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee133() {
            var _this50 = this;
            return _regeneratorRuntime().wrap(function _callee133$(_context133) {
              while (1) switch (_context133.prev = _context133.next) {
                case 0:
                  _context133.next = 2;
                  return this._useSession( /*#__PURE__*/function () {
                    var _ref58 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee132(e) {
                      var s, r, t, i, o, n, a;
                      return _regeneratorRuntime().wrap(function _callee132$(_context132) {
                        while (1) switch (_context132.prev = _context132.next) {
                          case 0:
                            t = e.data.session, i = e.error;
                            if (!i) {
                              _context132.next = 3;
                              break;
                            }
                            return _context132.abrupt("return", {
                              data: null,
                              error: i
                            });
                          case 3:
                            if (t) {
                              _context132.next = 5;
                              break;
                            }
                            return _context132.abrupt("return", {
                              data: {
                                currentLevel: null,
                                nextLevel: null,
                                currentAuthenticationMethods: []
                              },
                              error: null
                            });
                          case 5:
                            o = _this50._decodeJWT(t.access_token);
                            n = null;
                            o.aal && (n = o.aal);
                            a = n;
                            return _context132.abrupt("return", ((null !== (r = null === (s = t.user.factors) || void 0 === s ? void 0 : s.filter(function (e) {
                              return "verified" === e.status;
                            })) && void 0 !== r ? r : []).length > 0 && (a = "aal2"), {
                              data: {
                                currentLevel: n,
                                nextLevel: a,
                                currentAuthenticationMethods: o.amr || []
                              },
                              error: null
                            }));
                          case 10:
                          case "end":
                            return _context132.stop();
                        }
                      }, _callee132);
                    }));
                    return function (_x89) {
                      return _ref58.apply(this, arguments);
                    };
                  }());
                case 2:
                  return _context133.abrupt("return", _context133.sent);
                case 3:
                case "end":
                  return _context133.stop();
              }
            }, _callee133, this);
          }));
          function _getAuthenticatorAssuranceLevel() {
            return _getAuthenticatorAssuranceLevel2.apply(this, arguments);
          }
          return _getAuthenticatorAssuranceLevel;
        }()
      }]);
      return _;
    }();
    exports.default = _, _.nextInstanceID = 0;
  }, {
    "./GoTrueAdminApi": "r5yK",
    "./lib/constants": "FCUC",
    "./lib/errors": "fEKz",
    "./lib/fetch": "qz1X",
    "./lib/helpers": "aK8w",
    "./lib/local-storage": "nFV6",
    "./lib/polyfills": "tYyX",
    "./lib/version": "yMJF"
  }],
  "jQAZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.internals = exports.NavigatorLockAcquireTimeoutError = void 0, exports.navigatorLock = a;
    var e = {
      debug: !(!globalThis || !globalThis.localStorage || "true" !== globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))
    };
    exports.internals = e;
    var o = /*#__PURE__*/function (_Error4) {
      _inherits(o, _Error4);
      var _super21 = _createSuper(o);
      function o(e) {
        var _this51;
        _classCallCheck(this, o);
        _this51 = _super21.call(this, e), _this51.isAcquireTimeout = !0;
        return _this51;
      }
      return _createClass(o);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    function a(_x90, _x91, _x92) {
      return _a28.apply(this, arguments);
    }
    function _a28() {
      _a28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee137(a, l, r) {
        var t, i, s, u, n;
        return _regeneratorRuntime().wrap(function _callee137$(_context137) {
          while (1) switch (_context137.prev = _context137.next) {
            case 0:
              e.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", a, l);
              t = null, i = null;
              s = new Promise(function (e, o) {
                t = e, i = o;
              }), u = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee135() {
                return _regeneratorRuntime().wrap(function _callee135$(_context135) {
                  while (1) switch (_context135.prev = _context135.next) {
                    case 0:
                      _context135.next = 2;
                      return s;
                    case 2:
                      e.debug && console.log("@supabase/gotrue-js: navigatorLock: operation start");
                      _context135.prev = 3;
                      _context135.next = 6;
                      return r();
                    case 6:
                      return _context135.abrupt("return", _context135.sent);
                    case 7:
                      _context135.prev = 7;
                      e.debug && console.log("@supabase/gotrue-js: navigatorLock: operation end");
                      return _context135.finish(7);
                    case 10:
                    case "end":
                      return _context135.stop();
                  }
                }, _callee135, null, [[3,, 7, 10]]);
              }))(), n = new globalThis.AbortController();
              l > 0 && setTimeout(function () {
                t = null, n.abort(), i && (e.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", a), i && i(new o("Acquiring an exclusive Navigator LockManager lock \"".concat(a, "\" timed out after ").concat(l, "ms"))), t = null, i = null);
              }, l);
              _context137.next = 6;
              return globalThis.navigator.locks.request(a, {
                mode: "exclusive",
                ifAvailable: 0 === l,
                signal: n.signal
              }, /*#__PURE__*/function () {
                var _ref60 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee136(l) {
                  return _regeneratorRuntime().wrap(function _callee136$(_context136) {
                    while (1) switch (_context136.prev = _context136.next) {
                      case 0:
                        if (!l) {
                          _context136.next = 19;
                          break;
                        }
                        e.debug && console.log("@supabase/gotrue-js: navigatorLock acquired", a);
                        _context136.prev = 2;
                        _context136.t0 = t;
                        if (!_context136.t0) {
                          _context136.next = 10;
                          break;
                        }
                        t();
                        t = null;
                        i = null;
                        _context136.next = 10;
                        return u;
                      case 10:
                        _context136.next = 14;
                        break;
                      case 12:
                        _context136.prev = 12;
                        _context136.t1 = _context136["catch"](2);
                      case 14:
                        _context136.prev = 14;
                        e.debug && console.log("@supabase/gotrue-js: navigatorLock released", a);
                        return _context136.finish(14);
                      case 17:
                        _context136.next = 20;
                        break;
                      case 19:
                        e.debug && console.log("@supabase/gotrue-js: navigatorLock not immediately available", a), new Error("Acquiring an exclusive Navigator LockManager lock \"".concat(a, "\" immediately failed")).isAcquireTimeout = !0, i && i(new o("Acquiring an exclusive Navigator LockManager lock \"".concat(a, "\" immediately failed"))), t = null, i = null;
                      case 20:
                      case "end":
                        return _context136.stop();
                    }
                  }, _callee136, null, [[2, 12, 14, 17]]);
                }));
                return function (_x93) {
                  return _ref60.apply(this, arguments);
                };
              }());
            case 6:
              _context137.next = 8;
              return u;
            case 8:
              return _context137.abrupt("return", _context137.sent);
            case 9:
            case "end":
              return _context137.stop();
          }
        }, _callee137);
      }));
      return _a28.apply(this, arguments);
    }
    exports.NavigatorLockAcquireTimeoutError = o;
  }, {}],
  "jHY6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var e = {
      GoTrueAdminApi: !0,
      GoTrueClient: !0,
      navigatorLock: !0,
      NavigatorLockAcquireTimeoutError: !0,
      lockInternals: !0
    };
    Object.defineProperty(exports, "GoTrueAdminApi", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "GoTrueClient", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "NavigatorLockAcquireTimeoutError", {
      enumerable: !0,
      get: function get() {
        return u.NavigatorLockAcquireTimeoutError;
      }
    }), Object.defineProperty(exports, "lockInternals", {
      enumerable: !0,
      get: function get() {
        return u.internals;
      }
    }), Object.defineProperty(exports, "navigatorLock", {
      enumerable: !0,
      get: function get() {
        return u.navigatorLock;
      }
    });
    var r = i(require("./GoTrueAdminApi")),
      t = i(require("./GoTrueClient")),
      o = require("./lib/types");
    Object.keys(o).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === o[r] || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return o[r];
        }
      }));
    });
    var n = require("./lib/errors");
    Object.keys(n).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === n[r] || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return n[r];
        }
      }));
    });
    var u = require("./lib/locks");
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./GoTrueAdminApi": "r5yK",
    "./GoTrueClient": "jaRo",
    "./lib/types": "kHZ4",
    "./lib/errors": "fEKz",
    "./lib/locks": "jQAZ"
  }],
  "HmDl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.SupabaseAuthClient = void 0;
    var e = require("@supabase/gotrue-js");
    var s = /*#__PURE__*/function (_e$GoTrueClient) {
      _inherits(s, _e$GoTrueClient);
      var _super22 = _createSuper(s);
      function s(e) {
        _classCallCheck(this, s);
        return _super22.call(this, e);
      }
      return _createClass(s);
    }(e.GoTrueClient);
    exports.SupabaseAuthClient = s;
  }, {
    "@supabase/gotrue-js": "jHY6"
  }],
  "ruhK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = require("@supabase/functions-js"),
      t = require("@supabase/postgrest-js"),
      s = require("@supabase/realtime-js"),
      i = require("@supabase/storage-js"),
      n = require("./lib/constants"),
      r = require("./lib/fetch"),
      a = require("./lib/helpers"),
      h = require("./lib/SupabaseAuthClient"),
      l = function l(e, t, s, i) {
        return new (s || (s = Promise))(function (n, r) {
          function a(e) {
            try {
              l(i.next(e));
            } catch (t) {
              r(t);
            }
          }
          function h(e) {
            try {
              l(i.throw(e));
            } catch (t) {
              r(t);
            }
          }
          function l(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof s ? t : new s(function (e) {
              e(t);
            })).then(a, h);
          }
          l((i = i.apply(e, t || [])).next());
        });
      };
    var o = {
        headers: n.DEFAULT_HEADERS
      },
      u = {
        schema: "public"
      },
      c = {
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        flowType: "implicit"
      },
      d = {};
    var g = /*#__PURE__*/function () {
      function g(e, s, i) {
        _classCallCheck(this, g);
        var n, h, l, _g, p, b, v, f;
        if (this.supabaseUrl = e, this.supabaseKey = s, !e) throw new Error("supabaseUrl is required.");
        if (!s) throw new Error("supabaseKey is required.");
        var m = (0, a.stripTrailingSlash)(e);
        this.realtimeUrl = "".concat(m, "/realtime/v1").replace(/^http/i, "ws"), this.authUrl = "".concat(m, "/auth/v1"), this.storageUrl = "".concat(m, "/storage/v1"), this.functionsUrl = "".concat(m, "/functions/v1");
        var y = "sb-".concat(new URL(this.authUrl).hostname.split(".")[0], "-auth-token"),
          A = {
            db: u,
            realtime: d,
            auth: Object.assign(Object.assign({}, c), {
              storageKey: y
            }),
            global: o
          },
          C = (0, a.applySettingDefaults)(null != i ? i : {}, A);
        this.storageKey = null !== (h = null === (n = C.auth) || void 0 === n ? void 0 : n.storageKey) && void 0 !== h ? h : "", this.headers = null !== (_g = null === (l = C.global) || void 0 === l ? void 0 : l.headers) && void 0 !== _g ? _g : {}, this.auth = this._initSupabaseAuthClient(null !== (p = C.auth) && void 0 !== p ? p : {}, this.headers, null === (b = C.global) || void 0 === b ? void 0 : b.fetch), this.fetch = (0, r.fetchWithAuth)(s, this._getAccessToken.bind(this), null === (v = C.global) || void 0 === v ? void 0 : v.fetch), this.realtime = this._initRealtimeClient(Object.assign({
          headers: this.headers
        }, C.realtime)), this.rest = new t.PostgrestClient("".concat(m, "/rest/v1"), {
          headers: this.headers,
          schema: null === (f = C.db) || void 0 === f ? void 0 : f.schema,
          fetch: this.fetch
        }), this._listenForAuthEvents();
      }
      _createClass(g, [{
        key: "functions",
        get: function get() {
          return new e.FunctionsClient(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch
          });
        }
      }, {
        key: "storage",
        get: function get() {
          return new i.StorageClient(this.storageUrl, this.headers, this.fetch);
        }
      }, {
        key: "from",
        value: function from(e) {
          return this.rest.from(e);
        }
      }, {
        key: "rpc",
        value: function rpc(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var s = arguments.length > 2 ? arguments[2] : undefined;
          return this.rest.rpc(e, t, s);
        }
      }, {
        key: "channel",
        value: function channel(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            config: {}
          };
          return this.realtime.channel(e, t);
        }
      }, {
        key: "getChannels",
        value: function getChannels() {
          return this.realtime.getChannels();
        }
      }, {
        key: "removeChannel",
        value: function removeChannel(e) {
          return this.realtime.removeChannel(e);
        }
      }, {
        key: "removeAllChannels",
        value: function removeAllChannels() {
          return this.realtime.removeAllChannels();
        }
      }, {
        key: "_getAccessToken",
        value: function _getAccessToken() {
          var e, t;
          return l(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee138() {
            var _yield$this$auth$getS, s;
            return _regeneratorRuntime().wrap(function _callee138$(_context138) {
              while (1) switch (_context138.prev = _context138.next) {
                case 0:
                  _context138.next = 2;
                  return this.auth.getSession();
                case 2:
                  _yield$this$auth$getS = _context138.sent;
                  s = _yield$this$auth$getS.data;
                  return _context138.abrupt("return", null !== (t = null === (e = s.session) || void 0 === e ? void 0 : e.access_token) && void 0 !== t ? t : null);
                case 5:
                case "end":
                  return _context138.stop();
              }
            }, _callee138, this);
          }));
        }
      }, {
        key: "_initSupabaseAuthClient",
        value: function _initSupabaseAuthClient(_ref61, l, o) {
          var e = _ref61.autoRefreshToken,
            t = _ref61.persistSession,
            s = _ref61.detectSessionInUrl,
            i = _ref61.storage,
            n = _ref61.storageKey,
            r = _ref61.flowType,
            a = _ref61.debug;
          var u = {
            Authorization: "Bearer ".concat(this.supabaseKey),
            apikey: "".concat(this.supabaseKey)
          };
          return new h.SupabaseAuthClient({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, u), l),
            storageKey: n,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: s,
            storage: i,
            flowType: r,
            debug: a,
            fetch: o
          });
        }
      }, {
        key: "_initRealtimeClient",
        value: function _initRealtimeClient(e) {
          return new s.RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, e), {
            params: Object.assign({
              apikey: this.supabaseKey
            }, null == e ? void 0 : e.params)
          }));
        }
      }, {
        key: "_listenForAuthEvents",
        value: function _listenForAuthEvents() {
          var _this52 = this;
          return this.auth.onAuthStateChange(function (e, t) {
            _this52._handleTokenChanged(e, "CLIENT", null == t ? void 0 : t.access_token);
          });
        }
      }, {
        key: "_handleTokenChanged",
        value: function _handleTokenChanged(e, t, s) {
          "TOKEN_REFRESHED" !== e && "SIGNED_IN" !== e || this.changedAccessToken === s ? "SIGNED_OUT" === e && (this.realtime.setAuth(this.supabaseKey), "STORAGE" == t && this.auth.signOut(), this.changedAccessToken = void 0) : (this.realtime.setAuth(null != s ? s : null), this.changedAccessToken = s);
        }
      }]);
      return g;
    }();
    exports.default = g;
  }, {
    "@supabase/functions-js": "AtCQ",
    "@supabase/postgrest-js": "aLgD",
    "@supabase/realtime-js": "DDXl",
    "@supabase/storage-js": "ToC9",
    "./lib/constants": "ulZb",
    "./lib/fetch": "MXCq",
    "./lib/helpers": "mjti",
    "./lib/SupabaseAuthClient": "HmDl"
  }],
  "zl3U": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var e = {
      createClient: !0,
      SupabaseClient: !0,
      FunctionsHttpError: !0,
      FunctionsFetchError: !0,
      FunctionsRelayError: !0,
      FunctionsError: !0
    };
    Object.defineProperty(exports, "FunctionsError", {
      enumerable: !0,
      get: function get() {
        return n.FunctionsError;
      }
    }), Object.defineProperty(exports, "FunctionsFetchError", {
      enumerable: !0,
      get: function get() {
        return n.FunctionsFetchError;
      }
    }), Object.defineProperty(exports, "FunctionsHttpError", {
      enumerable: !0,
      get: function get() {
        return n.FunctionsHttpError;
      }
    }), Object.defineProperty(exports, "FunctionsRelayError", {
      enumerable: !0,
      get: function get() {
        return n.FunctionsRelayError;
      }
    }), Object.defineProperty(exports, "SupabaseClient", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), exports.createClient = void 0;
    var r = u(require("./SupabaseClient")),
      t = require("@supabase/gotrue-js");
    Object.keys(t).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === t[r] || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return t[r];
        }
      }));
    });
    var n = require("@supabase/functions-js"),
      o = require("@supabase/realtime-js");
    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    Object.keys(o).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === o[r] || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return o[r];
        }
      }));
    });
    var s = function s(e, t, n) {
      return new r.default(e, t, n);
    };
    exports.createClient = s;
  }, {
    "./SupabaseClient": "ruhK",
    "@supabase/gotrue-js": "jHY6",
    "@supabase/functions-js": "AtCQ",
    "@supabase/realtime-js": "DDXl"
  }],
  "Focm": [function (require, module, exports) {
    "use strict";

    var t = require("@supabase/supabase-js");
    function r(t) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }
    function e() {
      e = function e() {
        return t;
      };
      var t = {},
        n = Object.prototype,
        o = n.hasOwnProperty,
        i = Object.defineProperty || function (t, r, e) {
          t[r] = e.value;
        },
        a = "function" == typeof Symbol ? Symbol : {},
        c = a.iterator || "@@iterator",
        u = a.asyncIterator || "@@asyncIterator",
        f = a.toStringTag || "@@toStringTag";
      function s(t, r, e) {
        return Object.defineProperty(t, r, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), t[r];
      }
      try {
        s({}, "");
      } catch (k) {
        s = function s(t, r, e) {
          return t[r] = e;
        };
      }
      function l(t, r, e, n) {
        var o = r && r.prototype instanceof y ? r : y,
          a = Object.create(o.prototype),
          c = new N(n || []);
        return i(a, "_invoke", {
          value: E(t, e, c)
        }), a;
      }
      function h(t, r, e) {
        try {
          return {
            type: "normal",
            arg: t.call(r, e)
          };
        } catch (k) {
          return {
            type: "throw",
            arg: k
          };
        }
      }
      t.wrap = l;
      var p = {};
      function y() {}
      function v() {}
      function d() {}
      var m = {};
      s(m, c, function () {
        return this;
      });
      var g = Object.getPrototypeOf,
        w = g && g(g(S([])));
      w && w !== n && o.call(w, c) && (m = w);
      var b = d.prototype = y.prototype = Object.create(m);
      function x(t) {
        ["next", "throw", "return"].forEach(function (r) {
          s(t, r, function (t) {
            return this._invoke(r, t);
          });
        });
      }
      function L(t, e) {
        var n;
        i(this, "_invoke", {
          value: function value(i, a) {
            function c() {
              return new e(function (n, c) {
                !function n(i, a, c, u) {
                  var f = h(t[i], t, a);
                  if ("throw" !== f.type) {
                    var s = f.arg,
                      l = s.value;
                    return l && "object" == r(l) && o.call(l, "__await") ? e.resolve(l.__await).then(function (t) {
                      n("next", t, c, u);
                    }, function (t) {
                      n("throw", t, c, u);
                    }) : e.resolve(l).then(function (t) {
                      s.value = t, c(s);
                    }, function (t) {
                      return n("throw", t, c, u);
                    });
                  }
                  u(f.arg);
                }(i, a, n, c);
              });
            }
            return n = n ? n.then(c, c) : c();
          }
        });
      }
      function E(t, r, e) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n) throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return _();
          }
          for (e.method = o, e.arg = i;;) {
            var a = e.delegate;
            if (a) {
              var c = j(a, e);
              if (c) {
                if (c === p) continue;
                return c;
              }
            }
            if ("next" === e.method) e.sent = e._sent = e.arg;else if ("throw" === e.method) {
              if ("suspendedStart" === n) throw n = "completed", e.arg;
              e.dispatchException(e.arg);
            } else "return" === e.method && e.abrupt("return", e.arg);
            n = "executing";
            var u = h(t, r, e);
            if ("normal" === u.type) {
              if (n = e.done ? "completed" : "suspendedYield", u.arg === p) continue;
              return {
                value: u.arg,
                done: e.done
              };
            }
            "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg);
          }
        };
      }
      function j(t, r) {
        var e = r.method,
          n = t.iterator[e];
        if (void 0 === n) return r.delegate = null, "throw" === e && t.iterator.return && (r.method = "return", r.arg = void 0, j(t, r), "throw" === r.method) || "return" !== e && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + e + "' method")), p;
        var o = h(n, t.iterator, r.arg);
        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, p;
        var i = o.arg;
        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, p) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, p);
      }
      function I(t) {
        var r = {
          tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
      }
      function O(t) {
        var r = t.completion || {};
        r.type = "normal", delete r.arg, t.completion = r;
      }
      function N(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(I, this), this.reset(!0);
      }
      function S(t) {
        if (t) {
          var r = t[c];
          if (r) return r.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var e = -1,
              n = function r() {
                for (; ++e < t.length;) if (o.call(t, e)) return r.value = t[e], r.done = !1, r;
                return r.value = void 0, r.done = !0, r;
              };
            return n.next = n;
          }
        }
        return {
          next: _
        };
      }
      function _() {
        return {
          value: void 0,
          done: !0
        };
      }
      return v.prototype = d, i(b, "constructor", {
        value: d,
        configurable: !0
      }), i(d, "constructor", {
        value: v,
        configurable: !0
      }), v.displayName = s(d, f, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
        var r = "function" == typeof t && t.constructor;
        return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, s(t, f, "GeneratorFunction")), t.prototype = Object.create(b), t;
      }, t.awrap = function (t) {
        return {
          __await: t
        };
      }, x(L.prototype), s(L.prototype, u, function () {
        return this;
      }), t.AsyncIterator = L, t.async = function (r, e, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new L(l(r, e, n, o), i);
        return t.isGeneratorFunction(e) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, x(b), s(b, f, "Generator"), s(b, c, function () {
        return this;
      }), s(b, "toString", function () {
        return "[object Generator]";
      }), t.keys = function (t) {
        var r = Object(t),
          e = [];
        for (var n in r) e.push(n);
        return e.reverse(), function t() {
          for (; e.length;) {
            var n = e.pop();
            if (n in r) return t.value = n, t.done = !1, t;
          }
          return t.done = !0, t;
        };
      }, t.values = S, N.prototype = {
        constructor: N,
        reset: function reset(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t) for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
        },
        stop: function stop() {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(t) {
          if (this.done) throw t;
          var r = this;
          function e(e, n) {
            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n;
          }
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n],
              a = i.completion;
            if ("root" === i.tryLoc) return e("end");
            if (i.tryLoc <= this.prev) {
              var c = o.call(i, "catchLoc"),
                u = o.call(i, "finallyLoc");
              if (c && u) {
                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return e(i.finallyLoc);
              } else if (c) {
                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
              } else {
                if (!u) throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return e(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t, r) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
              var i = n;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a);
        },
        complete: function complete(t, r) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), p;
        },
        finish: function finish(t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), p;
          }
        },
        catch: function _catch(t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.tryLoc === t) {
              var n = e.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                O(e);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(t, r, e) {
          return this.delegate = {
            iterator: S(t),
            resultName: r,
            nextLoc: e
          }, "next" === this.method && (this.arg = void 0), p;
        }
      }, t;
    }
    function n(t, r, e, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (f) {
        return void e(f);
      }
      c.done ? r(u) : Promise.resolve(u).then(n, o);
    }
    function o(t) {
      return function () {
        var r = this,
          e = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(r, e);
          function c(t) {
            n(a, o, i, c, u, "next", t);
          }
          function u(t) {
            n(a, o, i, c, u, "throw", t);
          }
          c(void 0);
        });
      };
    }
    var i = "https://tjpowysgkmnciunvbahz.supabase.co",
      a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqcG93eXNna21uY2l1bnZiYWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MzAwNDEsImV4cCI6MjAwNjUwNjA0MX0.tftvmyNUrwNAYAqwdSzVkJSzYuJAX7NYD4imfpClrd4",
      c = (0, t.createClient)(i, a),
      u = function () {
        var t = o(e().mark(function t() {
          var r, n, o;
          return e().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, c.from("test").select("*");
              case 2:
                r = t.sent, n = r.data, o = r.error, console.log("Data:", n), console.log("Error:", o);
              case 7:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function () {
          return t.apply(this, arguments);
        };
      }();
    u();
  }, {
    "@supabase/supabase-js": "zl3U"
  }],
  "eDUB": [function (require, module, exports) {
    module.exports = function (n) {
      return new Promise(function (e, o) {
        var r = document.createElement("script");
        r.async = !0, r.type = "text/javascript", r.charset = "utf-8", r.src = n, r.onerror = function (n) {
          r.onerror = r.onload = null, o(n);
        }, r.onload = function () {
          r.onerror = r.onload = null, e();
        }, document.getElementsByTagName("head")[0].appendChild(r);
      });
    };
  }, {}],
  0: [function (require, module, exports) {
    var b = require("ZOfP");
    b.register("js", require("eDUB"));
    b.load([["browser-ponyfill.79a645bd.js", "vTPr"]]).then(function () {
      require("Focm");
    });
  }, {}]
}, {}, [0], null);
},{}]