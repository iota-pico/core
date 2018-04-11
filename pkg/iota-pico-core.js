(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/core", [], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/core"] = factory();
	else
		root["IotaPicoCore"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      return value === null || value === undefined ? false : /^[\x00-\xFF]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u007F-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(4);

var stringHelper_1 = __webpack_require__(0);
/**
 * A core implementation of an error.
 */


var CoreError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  _inherits(CoreError, _extendableBuiltin2);

  /**
   * Create an instance of CoreError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CoreError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CoreError);

    _this = _possibleConstructorReturn(this, (CoreError.__proto__ || Object.getPrototypeOf(CoreError)).call(this, message));
    _this.additional = additional ? additional : {};
    _this.innerError = innerError;
    _this.domain = "Core";
    return _this;
  }
  /**
   * Check if an object could be a CoreError.
   * @param obj The object to check if it is a CoreError.
   * @returns true If the tested object is a CoreError.
   */


  _createClass(CoreError, [{
    key: "format",

    /**
     * Format the error to a readable version.
     */
    value: function format() {
      var _this2 = this;

      var out = "";

      if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
        out += "".concat(this.domain, ": ");
      }

      if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
        out += "".concat(this.message);
      }

      var keys = Object.keys(this.additional);

      if (keys.length > 0) {
        if (out.length > 0) {
          out += "\n";
        }

        keys.forEach(function (key) {
          out += "\t".concat(key, ": ").concat(jsonHelper_1.JsonHelper.stringify(_this2.additional[key]), "\n");
        });
      }

      return out;
    }
  }], [{
    key: "isError",
    value: function isError(obj) {
      return obj !== undefined && obj !== null && _typeof(obj) === "object" && "message" in obj && "additional" in obj;
    }
  }]);

  return CoreError;
}(_extendableBuiltin(Error));

exports.CoreError = CoreError;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */

var FactoryBase =
/*#__PURE__*/
function () {
  function FactoryBase() {
    _classCallCheck(this, FactoryBase);

    /* @internal */
    this._types = {};
  }
  /**
   * Register a new type with the factory.
   * @param name The name of the type to register.
   * @param typeConstructor The constructor for the type.
   */


  _createClass(FactoryBase, [{
    key: "register",
    value: function register(name, typeConstructor) {
      this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "exists",
    value: function exists(name) {
      return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "types",
    value: function types() {
      return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */

  }, {
    key: "create",
    value: function create(name) {
      var instance = this.getInstance();

      if (instance._types[name]) {
        var _instance$_types;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_instance$_types = instance._types)[name].apply(_instance$_types, args);
      } else {
        return undefined;
      }
    }
  }]);

  return FactoryBase;
}();

exports.FactoryBase = FactoryBase;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Json helper methods.
 */

var JsonHelper =
/*#__PURE__*/
function () {
  function JsonHelper() {
    _classCallCheck(this, JsonHelper);
  }

  _createClass(JsonHelper, null, [{
    key: "stringify",

    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    value: function stringify(value, replacer, space) {
      // eliminates any recursion in the stringify
      var cache = [];

      var recusionReplacer = function recusionReplacer(key, replaceValue) {
        if (_typeof(replaceValue) === "object" && value !== null && replaceValue !== undefined) {
          if (cache.indexOf(replaceValue) !== -1) {
            // circular reference found, discard key
            return;
          } else {
            cache.push(replaceValue);
          }
        }

        return replacer ? replacer(key, replaceValue) : replaceValue;
      };

      return JSON.stringify(value, recusionReplacer, space);
    }
  }]);

  return JsonHelper;
}();

exports.JsonHelper = JsonHelper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(2);
/**
 * A network implementation of an error.
 */


var NetworkError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(NetworkError, _coreError_1$CoreErro);

  /**
   * Create an instance of NetworkError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function NetworkError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, NetworkError);

    _this = _possibleConstructorReturn(this, (NetworkError.__proto__ || Object.getPrototypeOf(NetworkError)).call(this, message, additional, innerError));
    _this.domain = "Network";
    return _this;
  }

  return NetworkError;
}(coreError_1.CoreError);

exports.NetworkError = NetworkError;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(1);
/**
 * Array helper methods.
 */


var ArrayHelper =
/*#__PURE__*/
function () {
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  _createClass(ArrayHelper, null, [{
    key: "isArray",

    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    value: function isArray(value) {
      return value === null || value === undefined ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */

  }, {
    key: "isTyped",
    value: function isTyped(value, type) {
      return !ArrayHelper.isEmpty(value) && !value.includes(undefined) && !value.includes(null) && value.every(function (a) {
        return objectHelper_1.ObjectHelper.isType(a, type);
      });
    }
  }]);

  return ArrayHelper;
}();

exports.ArrayHelper = ArrayHelper;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(2);

var jsonHelper_1 = __webpack_require__(4);

var objectHelper_1 = __webpack_require__(1);

var stringHelper_1 = __webpack_require__(0);
/**
 * Handle errors as gracefully as possible.
 */


var ErrorHelper =
/*#__PURE__*/
function () {
  function ErrorHelper() {
    _classCallCheck(this, ErrorHelper);
  }

  _createClass(ErrorHelper, null, [{
    key: "format",

    /**
     * Format an error object into something readable.
     * @param err The object to format.
     * @param includeStack Include the stack trace if there is one.
     * @returns Formatted version of the error object.
     */
    value: function format(err, includeStack) {
      if (err === null || err === undefined) {
        return "unknown error";
      } else if (coreError_1.CoreError.isError(err)) {
        var ret = err.format();

        if (includeStack && err.stack) {
          ret += "\nStack Trace";
          var parts = err.stack.split("\n");
          parts.shift();
          ret += "\n".concat(parts.join("\n"));
        }

        if (!objectHelper_1.ObjectHelper.isEmpty(err.innerError)) {
          if (includeStack && !objectHelper_1.ObjectHelper.isEmpty(err.innerError.stack)) {
            ret += "\n\n-----------------------------------------------";
            ret += "\nInner Stack Trace\n";
            ret += err.innerError.stack;
          } else {
            ret += "\nInner Error: ".concat(err.innerError.message, "\n");
          }
        }

        return ret;
      } else if (err instanceof Error) {
        var _ret = "";

        if (includeStack && !objectHelper_1.ObjectHelper.isEmpty(err.stack)) {
          _ret += err.stack;
        } else {
          _ret += err.message;
        }

        return _ret;
      } else {
        if (stringHelper_1.StringHelper.isString(err)) {
          return err;
        } else {
          return jsonHelper_1.JsonHelper.stringify(err, undefined, "\t");
        }
      }
    }
  }]);

  return ErrorHelper;
}();

exports.ErrorHelper = ErrorHelper;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isIntegerString",
    value: function isIntegerString(value) {
      return /^-?\d+$/.test(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(2));

__export(__webpack_require__(5));

__export(__webpack_require__(10));

__export(__webpack_require__(3));

__export(__webpack_require__(11));

__export(__webpack_require__(12));

__export(__webpack_require__(13));

__export(__webpack_require__(6));

__export(__webpack_require__(7));

__export(__webpack_require__(4));

__export(__webpack_require__(8));

__export(__webpack_require__(0));

__export(__webpack_require__(1));

__export(__webpack_require__(14));

__export(__webpack_require__(15));

__export(__webpack_require__(16));

__export(__webpack_require__(17));

__export(__webpack_require__(21));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(2);
/**
 * A platform implementation of an error.
 */


var PlatformError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(PlatformError, _coreError_1$CoreErro);

  /**
   * Create an instance of PlatformError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function PlatformError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, PlatformError);

    _this = _possibleConstructorReturn(this, (PlatformError.__proto__ || Object.getPrototypeOf(PlatformError)).call(this, message, additional, innerError));
    _this.domain = "Platform";
    return _this;
  }

  return PlatformError;
}(coreError_1.CoreError);

exports.PlatformError = PlatformError;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(3);
/**
 * Factory to generate network clients.
 */


var NetworkClientFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(NetworkClientFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function NetworkClientFactory() {
    _classCallCheck(this, NetworkClientFactory);

    return _possibleConstructorReturn(this, (NetworkClientFactory.__proto__ || Object.getPrototypeOf(NetworkClientFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(NetworkClientFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return NetworkClientFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!NetworkClientFactory._instance) {
        NetworkClientFactory._instance = new NetworkClientFactory();
      }

      return NetworkClientFactory._instance;
    }
  }]);

  return NetworkClientFactory;
}(factoryBase_1.FactoryBase);

exports.NetworkClientFactory = NetworkClientFactory;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(3);
/**
 * Factory to generate rng service.
 */


var PlatformCryptoFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(PlatformCryptoFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function PlatformCryptoFactory() {
    _classCallCheck(this, PlatformCryptoFactory);

    return _possibleConstructorReturn(this, (PlatformCryptoFactory.__proto__ || Object.getPrototypeOf(PlatformCryptoFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(PlatformCryptoFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return PlatformCryptoFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!PlatformCryptoFactory._instance) {
        PlatformCryptoFactory._instance = new PlatformCryptoFactory();
      }

      return PlatformCryptoFactory._instance;
    }
  }]);

  return PlatformCryptoFactory;
}(factoryBase_1.FactoryBase);

exports.PlatformCryptoFactory = PlatformCryptoFactory;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(3);
/**
 * Factory to generate rng service.
 */


var RngServiceFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(RngServiceFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function RngServiceFactory() {
    _classCallCheck(this, RngServiceFactory);

    return _possibleConstructorReturn(this, (RngServiceFactory.__proto__ || Object.getPrototypeOf(RngServiceFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(RngServiceFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return RngServiceFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!RngServiceFactory._instance) {
        RngServiceFactory._instance = new RngServiceFactory();
      }

      return RngServiceFactory._instance;
    }
  }]);

  return RngServiceFactory;
}(factoryBase_1.FactoryBase);

exports.RngServiceFactory = RngServiceFactory;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(6);

var errorHelper_1 = __webpack_require__(7);

var objectHelper_1 = __webpack_require__(1);

var stringHelper_1 = __webpack_require__(0);
/**
 * Implementation of ILogger which sends to the this._loggingObject.
 */
// tslint:disable:no-console


var ConsoleLogger =
/*#__PURE__*/
function () {
  /**
   * Create and instance of the console logger.
   */
  function ConsoleLogger(loggingObject) {
    _classCallCheck(this, ConsoleLogger);

    this._loggingObject = loggingObject || console;
  }
  /**
   * Send banner to the logger.
   * @param message The message to log.
   * @param args Additional parameters to log.
   */


  _createClass(ConsoleLogger, [{
    key: "banner",
    value: function banner(message) {
      this._loggingObject.log("=".repeat(80));

      this._loggingObject.log(message);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.logArgs(this._loggingObject.log, args);

      this._loggingObject.log("=".repeat(80));
    }
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "log",
    value: function log(message) {
      this._loggingObject.log(message);

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this.logArgs(this._loggingObject.log, args);
    }
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "info",
    value: function info(message) {
      this._loggingObject.info(message);

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      this.logArgs(this._loggingObject.info, args);
    }
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "warning",
    value: function warning(message) {
      this._loggingObject.warn(message);

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      this.logArgs(this._loggingObject.warn, args);
    }
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "error",
    value: function error(message, err) {
      var _this = this;

      this._loggingObject.error(message);

      if (!objectHelper_1.ObjectHelper.isEmpty(err)) {
        var lines = errorHelper_1.ErrorHelper.format(err, true).split("\n");
        lines.forEach(function (line) {
          _this._loggingObject.error("\t".concat(line));
        });
      }

      for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        args[_key5 - 2] = arguments[_key5];
      }

      this.logArgs(this._loggingObject.error, args);
    }
    /* @internal */

  }, {
    key: "logArgs",
    value: function logArgs(logMethod, args) {
      var _this2 = this;

      if (!arrayHelper_1.ArrayHelper.isEmpty(args)) {
        var indent = "\t";
        var output = "";
        args.forEach(function (arg, index) {
          output += _this2.createItem(indent, "", arg);

          if (index < args.length - 1) {
            output += "".concat(indent).concat("-".repeat(70), "\n");
          }
        });
        logMethod(output);
      }
    }
    /* @internal */

  }, {
    key: "createItem",
    value: function createItem(indent, key, item) {
      var _this3 = this;

      var singleItemLineBreak = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "\n";
      var output = "";

      if (arrayHelper_1.ArrayHelper.isArray(item)) {
        var newIndent = "".concat(indent, "\t");

        if (stringHelper_1.StringHelper.isEmpty(key)) {
          output += "".concat(indent, "[\n");
        } else {
          output += "".concat(indent).concat(key, ": [\n");
        }

        item.forEach(function (element, index) {
          output += _this3.createItem(newIndent, "", element, "".concat(index < item.length - 1 ? "," : "", "\n"));
        });
        output += "".concat(indent, "]\n");
      } else if (objectHelper_1.ObjectHelper.isObject(item)) {
        var obString = item.toString();

        if (obString === "[object Object]") {
          var _newIndent = "".concat(indent, "\t");

          if (stringHelper_1.StringHelper.isEmpty(key)) {
            output += "".concat(indent, "{\n");
          } else {
            output += "".concat(indent).concat(key, ": {\n");
          }

          var keys = Object.keys(item);
          keys.forEach(function (itemKey, index) {
            output += _this3.createItem(_newIndent, itemKey, item[itemKey], "".concat(index < keys.length - 1 ? "," : "", "\n"));
          });
          output += "".concat(indent, "}\n");
        } else {
          output += this.createItem(indent, key, obString.replace(/\n/g, "\n".concat(indent)), singleItemLineBreak);
        }
      } else {
        if (stringHelper_1.StringHelper.isEmpty(key)) {
          output += "".concat(indent).concat(objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()).concat(singleItemLineBreak);
        } else {
          output += "".concat(indent).concat(key, ": ").concat(objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()).concat(singleItemLineBreak);
        }
      }

      return output;
    }
  }]);

  return ConsoleLogger;
}();

exports.ConsoleLogger = ConsoleLogger;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Implementation of ILogger which is silent.
 */

var NullLogger =
/*#__PURE__*/
function () {
  function NullLogger() {
    _classCallCheck(this, NullLogger);
  }

  _createClass(NullLogger, [{
    key: "banner",

    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    value: function banner(message) {}
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "log",
    value: function log(message) {}
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "info",
    value: function info(message) {}
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "warning",
    value: function warning(message) {}
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "error",
    value: function error(message, err) {}
  }]);

  return NullLogger;
}();

exports.NullLogger = NullLogger;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var networkError_1 = __webpack_require__(5);

var numberHelper_1 = __webpack_require__(8);

var objectHelper_1 = __webpack_require__(1);

var stringHelper_1 = __webpack_require__(0);
/**
 * Default implementation of a network endpoint.
 */


var NetworkEndPoint =
/*#__PURE__*/
function () {
  /**
   * Create an instance of NetworkEndPoint.
   * @param protocol The protocol to access the endpoint with.
   * @param host The host name or ip of the endpoint.
   * @param port The port of the endpoint.
   * @param rootPath The path to the endpoint.
   */
  function NetworkEndPoint(protocol, host, port, rootPath) {
    _classCallCheck(this, NetworkEndPoint);

    if (!stringHelper_1.StringHelper.isString(protocol) || !/http|https/.test(protocol)) {
      throw new networkError_1.NetworkError("The protocol must be defined as http or https");
    }

    if (!stringHelper_1.StringHelper.isString(host)) {
      throw new networkError_1.NetworkError("The host must be defined");
    }

    if (!numberHelper_1.NumberHelper.isInteger(port) || port <= 0) {
      throw new networkError_1.NetworkError("The port must be a number greater than zero");
    }

    if (!objectHelper_1.ObjectHelper.isEmpty(rootPath) && !stringHelper_1.StringHelper.isString(rootPath)) {
      throw new networkError_1.NetworkError("The rootPath must be a valid string");
    }

    this._protocol = protocol;
    this._host = host.replace(/^\/*/, "").replace(/\/*$/, "");
    this._port = port;
    this._rootPath = (rootPath || "").replace(/^\/*/, "").replace(/\/*$/, "");
  }
  /**
   * The protocol to access the endpoint with.
   * @returns The protocol.
   */


  _createClass(NetworkEndPoint, [{
    key: "getProtocol",
    value: function getProtocol() {
      return this._protocol;
    }
    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */

  }, {
    key: "getHost",
    value: function getHost() {
      return this._host;
    }
    /**
     * The path to the endpoint.
     * @returns The path.
     */

  }, {
    key: "getRootPath",
    value: function getRootPath() {
      return this._rootPath;
    }
    /**
     * The port of the endpoint.
     * @returns The port.
     */

  }, {
    key: "getPort",
    value: function getPort() {
      return this._port;
    }
    /**
     * The complete uri.
     * @returns The uri.
     */

  }, {
    key: "getUri",
    value: function getUri() {
      return "".concat(this._protocol, "://").concat(this._host, ":").concat(this._port, "/").concat(this._rootPath);
    }
  }]);

  return NetworkEndPoint;
}();

exports.NetworkEndPoint = NetworkEndPoint;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(18));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default implementation of background task service.
 */

var BackgroundTaskService =
/*#__PURE__*/
function () {
  function BackgroundTaskService() {
    _classCallCheck(this, BackgroundTaskService);
  }

  _createClass(BackgroundTaskService, [{
    key: "create",

    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
     */
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(task, delay) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    try {
                      resolve(task());
                    } catch (err) {
                      reject(err);
                    }
                  }, delay);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function create(_x, _x2) {
        return _create.apply(this, arguments);
      };
    }()
  }]);

  return BackgroundTaskService;
}();

exports.BackgroundTaskService = BackgroundTaskService;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(20);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
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

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
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

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
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
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
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
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
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
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
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
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
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

      if (record.type === "break" ||
          record.type === "continue") {
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

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents a class which can provide the time.
 */

var TimeService =
/*#__PURE__*/
function () {
  function TimeService() {
    _classCallCheck(this, TimeService);
  }

  _createClass(TimeService, [{
    key: "msSinceEpoch",

    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    value: function msSinceEpoch() {
      return Date.now();
    }
  }]);

  return TimeService;
}();

exports.TimeService = TimeService;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZjEyMGE2NTliZWI4OGFkOTBkMCIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9lcnJvci9jb3JlRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9mYWN0b3JpZXMvZmFjdG9yeUJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9lcnJvci9uZXR3b3JrRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy9lcnJvckhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9lcnJvci9wbGF0Zm9ybUVycm9yLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL3BsYXRmb3JtQ3J5cHRvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2xvZ2dlcnMvY29uc29sZUxvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2xvZ2dlcnMvbnVsbExvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL25ldHdvcmsvbmV0d29ya0VuZFBvaW50LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2VydmljZXMvYmFja2dyb3VuZFRhc2tTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTs7Ozs7Ozs7Ozs7Ozs7QUFNMEI7Ozs7OzZCQUFXO0FBQ3ZCLGFBQU0sVUFBUyxRQUFTLFVBQ3pCLFlBQVEsUUFBTyxPQUFVLFVBQVMsU0FBSyxLQUFPLFdBQ3ZEO0FBQUM7QUFPb0I7Ozs7Ozs7OzRCQUFXO0FBQ3RCLGFBQUMsQ0FBYSxhQUFTLFNBQU8sVUFBUyxNQUFPLFdBQ3hEO0FBQUM7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QUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqdEJBOzs7Ozs7Ozs7Ozs7OztBQUt1Qjs7Ozs7QUFDVCxhQUFLLEtBQ2Y7QUFDSDs7Ozs7O0FBUkQsc0JBUUMsWSIsImZpbGUiOiJpb3RhLXBpY28tY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGlvdGEtcGljby9jb3JlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJb3RhUGljb0NvcmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRmMTIwYTY1OWJlYjg4YWQ5MGQwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RyaW5nIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU3RyaW5nSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgc3RyaW5neW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG5vIGVtcHR5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgQVNDSUkgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpcyBpcyBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgQVNDSUkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FzY2lpKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDAwLVxceEZGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIG5vbiBBU0NJSSBjaGFyYWN0ZXJzIHdpdGggY29udHJvbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gZXNjYXBlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVzY2FwZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZW5jb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1tcXHUwMDdGLVxcdUZGRkZdL2csIChjaHIpID0+IGBcXFxcdSR7KGAwMDAwJHtjaHIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCkuc3Vic3RyKC00KX1gKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIGNvbnRyb2wgY2hhcmFjdGVycyB0byBBU0NJSS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCBzdHJpbmcgdG8gY29udmVydCBiYWNrIHRvIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1xcXFx1KFtcXGRcXHddezR9KS9naSwgKG1hdGNoLCBncnApID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZ3JwLCAxNikpKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0hlbHBlciA9IFN0cmluZ0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeWFXNW5TR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YzNSeWFXNW5TR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYVVKQlFXbENMRU5CUVVNN1NVRkRPVVVzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVFVGQlRTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNdlJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJZVHRSUVVNdlFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVNdlNpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJZVHRSUVVOMFF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU5vU2l4RFFVRkRPME5CUTBvN1FVRXZRMFFzYjBOQkswTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL3N0cmluZ0hlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9iamVjdCBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE9iamVjdEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogdHlwZW9mICh2YWx1ZSkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0IGlmIGdpdmVuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlKHZhbHVlLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzTmFtZSA9IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlQ2xhc3NOYW1lID09PSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHR5cGVDb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QgaWYgaXQgaGFzIG9uZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBnZXQgdGhlIGNsYXNzIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUgaWYgaXQgaGFzIG9uZSBvciB1bmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZW9mIG9iamVjdCA9PT0gXCJmdW5jdGlvblwiID8gb2JqZWN0LnRvU3RyaW5nKCkgOiBvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2JqZWN0SGVscGVyID0gT2JqZWN0SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMkpxWldOMFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiMkpxWldOMFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJWVHRSUVVNMVFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZWTzFGQlF6ZENMRTFCUVUwc1EwRkJReXhMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4VFFVRlRPMWxCUTNoRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eFJRVUZSTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzUkZMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCVlN4RlFVRkZMR1ZCUVhsQ08xRkJRM1JFTEUxQlFVMHNZMEZCWXl4SFFVRkhMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZUVRc1RVRkJUU3hEUVVGRExHTkJRV01zUzBGQlN5eFRRVUZUTEVsQlFVa3NZMEZCWXl4TFFVRkxMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEUxQlFWYzdVVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeExRVUZMTEVsQlFVa3NTVUZCU1N4TlFVRk5MRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0pDTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFMUJRVTBzVjBGQlZ5eEhRVUZITEU5QlFVOHNUVUZCVFN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTNKSExFMUJRVTBzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE1VTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0JGTEVOQlFVTTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRTNRMFFzYjBOQk5rTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QganNvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvanNvbkhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBIGNvcmUgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBDb3JlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWwgPSBhZGRpdGlvbmFsID8gYWRkaXRpb25hbCA6IHt9O1xyXG4gICAgICAgIHRoaXMuaW5uZXJFcnJvciA9IGlubmVyRXJyb3I7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNvcmVcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGNvdWxkIGJlIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrIGlmIGl0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBJZiB0aGUgdGVzdGVkIG9iamVjdCBpcyBhIENvcmVFcnJvci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRXJyb3Iob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIFwibWVzc2FnZVwiIGluIG9iaiAmJiBcImFkZGl0aW9uYWxcIiBpbiBvYmo7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdCB0aGUgZXJyb3IgdG8gYSByZWFkYWJsZSB2ZXJzaW9uLlxyXG4gICAgICovXHJcbiAgICBmb3JtYXQoKSB7XHJcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLmRvbWFpbikpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMuZG9tYWlufTogYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLm1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgJHt0aGlzLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWRkaXRpb25hbCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAob3V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IGBcXHQke2tleX06ICR7anNvbkhlbHBlcl8xLkpzb25IZWxwZXIuc3RyaW5naWZ5KHRoaXMuYWRkaXRpb25hbFtrZXldKX1cXG5gO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvcmVFcnJvciA9IENvcmVFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5eVpVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyTnZjbVZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2MwUkJRVzFFTzBGQlEyNUVMREJFUVVGMVJEdEJRVVYyUkRzN1IwRkZSenRCUVVOSUxHVkJRWFZDTEZOQlFWRXNTMEZCU3p0SlFXZENhRU03T3pzN08wOUJTMGM3U1VGRFNDeFpRVUZaTEU5QlFXVXNSVUZCUlN4VlFVRnJReXhGUVVGRkxGVkJRV3RDTzFGQlF5OUZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJRenRSUVVNM1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJVVHRSUVVNeFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRk5CUVZNc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1NVRkJTU3hUUVVGVExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZsQlFWa3NTVUZCU1N4SFFVRkhMRU5CUVVNN1NVRkRia2dzUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVmlMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNN1VVRkRPVUlzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1EwRkJRenRSUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6RkRMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJwQ0xFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTTdXVUZEYUVJc1EwRkJRenRaUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMllzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSMEZCUnl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzWkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMUFzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wTkJRMG83UVVFdlJFUXNPRUpCSzBSREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgdHlwZXMuXHJcbiAqIEB0eXBlcGFyYW0gVCBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgb2JqZWN0IHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gKi9cclxuY2xhc3MgRmFjdG9yeUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyogQGludGVybmFsICovXHJcbiAgICAgICAgdGhpcy5fdHlwZXMgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgdHlwZSB3aXRoIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKG5hbWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gPSB0eXBlQ29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgYSB0eXBlIGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byB1bnJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKG5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgZmFjdG9yeSBjb250YWluIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIGV4aXN0cyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCB0aGUgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICB0eXBlcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhbiBvYmplY3QgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGNyZWF0ZS5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFueSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHR5cGUgaWYgaXQgZXhpc3RzLCBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShuYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLl90eXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX3R5cGVzW25hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GYWN0b3J5QmFzZSA9IEZhY3RvcnlCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labUZqZEc5eWVVSmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMMlpoWTNSdmNubENZWE5sTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0R0SlFVRkJPMUZCUTBrc1pVRkJaVHRSUVVORkxGZEJRVTBzUjBGQk9FTXNSVUZCUlN4RFFVRkRPMGxCYzBRMVJTeERRVUZETzBsQmNFUkhPenM3TzA5QlNVYzdTVUZEU1N4UlFVRlJMRU5CUVVNc1NVRkJXU3hGUVVGRkxHVkJRWE5ETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1NVRkJXVHRSUVVOMFFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNN1NVRkRla1FzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeExRVUZMTzFGQlExSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhKUVVGWkxFVkJRVVVzUjBGQlJ5eEpRVUZYTzFGQlEzUkRMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UWl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZETEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEY2tJc1EwRkJRenRKUVVOTUxFTkJRVU03UTBGSlNqdEJRWGhFUkN4clEwRjNSRU1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSnNvbiBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEpzb25IZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdHJpbmdpZnkgYW4gb2JqZWN0IHdpdGggcmVjdXJzaW9uIGJyZWFraW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXksIHRvIGJlIGNvbnZlcnRlZC5cclxuICAgICAqIEBwYXJhbSByZXBsYWNlciBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyB0aGUgcmVzdWx0cy5cclxuICAgICAqIEBwYXJhbSBzcGFjZSBBZGRzIGluZGVudGF0aW9uLCB3aGl0ZSBzcGFjZSwgYW5kIGxpbmUgYnJlYWsgY2hhcmFjdGVycyB0byB0aGUgcmV0dXJuLXZhbHVlIEpTT04gdGV4dCB0byBtYWtlIGl0IGVhc2llciB0byByZWFkLlxyXG4gICAgICogQHJldHVybnMgU3RyaW5nIHZlcnNpb24gb2YgdGhlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSB7XHJcbiAgICAgICAgLy8gZWxpbWluYXRlcyBhbnkgcmVjdXJzaW9uIGluIHRoZSBzdHJpbmdpZnlcclxuICAgICAgICBjb25zdCBjYWNoZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJlY3VzaW9uUmVwbGFjZXIgPSAoa2V5LCByZXBsYWNlVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgcmVwbGFjZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZS5pbmRleE9mKHJlcGxhY2VWYWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1c2gocmVwbGFjZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZXIgPyByZXBsYWNlcihrZXksIHJlcGxhY2VWYWx1ZSkgOiByZXBsYWNlVmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIHJlY3VzaW9uUmVwbGFjZXIsIHNwYWNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkpzb25IZWxwZXIgPSBKc29uSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhbk52YmtobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwycHpiMjVJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRXlReXhGUVVGRkxFdEJRWFZDTzFGQlEzQkhMRFJEUVVFMFF6dFJRVU0xUXl4TlFVRk5MRXRCUVVzc1IwRkJWU3hGUVVGRkxFTkJRVU03VVVGRmVFSXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eERRVUZETEVkQlFWY3NSVUZCUlN4WlFVRnBRaXhGUVVGRkxFVkJRVVU3V1VGRGVFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhaUVVGWkxFdEJRVXNzVVVGQlVTeEpRVUZKTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1dVRkJXU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTI1R0xFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVF5eDNRMEZCZDBNN2IwSkJRM2hETEUxQlFVMHNRMEZCUXp0blFrRkRXQ3hEUVVGRE8yZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOS0xFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1owSkJRemRDTEVOQlFVTTdXVUZEVEN4RFFVRkRPMWxCUlVRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTJwRkxFTkJRVU1zUTBGQlF6dFJRVVZHTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU14UkN4RFFVRkRPME5CUTBvN1FVRXpRa1FzWjBOQk1rSkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIi4vY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBuZXR3b3JrIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgTmV0d29ya0Vycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIE5ldHdvcmtFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJOZXR3b3JrXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OZXR3b3JrRXJyb3IgPSBOZXR3b3JrRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJtVjBkMjl5YTBWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDI1bGRIZHZjbXRGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01rTkJRWGRETzBGQlJYaERPenRIUVVWSE8wRkJRMGdzYTBKQlFUQkNMRk5CUVZFc2NVSkJRVk03U1VGRGRrTTdPenM3TzA5QlMwYzdTVUZEU0N4WlFVRlpMRTlCUVdVc1JVRkJSU3hWUVVGclF5eEZRVUZGTEZWQlFXdENPMUZCUXk5RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRM1pETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhEUVVGRE8wbEJRelZDTEVOQlFVTTdRMEZEU2p0QlFWaEVMRzlEUVZkREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2Vycm9yL25ldHdvcmtFcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiLi9vYmplY3RIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBcnJheSBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEFycmF5SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IEFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBlbXB0eSBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG5vbiBlbXB0eSBhcnJheSBvZiBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBub24gZW1wdHkgYXJyYXkgb2YgYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlZCh2YWx1ZSwgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNFbXB0eSh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKHVuZGVmaW5lZCkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKG51bGwpICYmXHJcbiAgICAgICAgICAgIHZhbHVlLmV2ZXJ5KChhKSA9PiBvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGEsIHR5cGUpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFycmF5SGVscGVyID0gQXJyYXlIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYSnlZWGxJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5aGNuSmhlVWhsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2FVUkJRVGhETzBGQlJUbERPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1MwRkJTeXhUUVVGVE8xbEJRM2hETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVFVGQlRTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNM1JDeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVlVzUlVGQlJTeEpRVUZqTzFGQlF6VkRMRTFCUVUwc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUXpsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRNVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOeVFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTVSQ3hEUVVGRE8wTkJSVW83UVVGcVEwUXNhME5CYVVOREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvYXJyYXlIZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NvcmVFcnJvclwiKTtcclxuY29uc3QganNvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4vanNvbkhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiLi9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4vc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogSGFuZGxlIGVycm9ycyBhcyBncmFjZWZ1bGx5IGFzIHBvc3NpYmxlLlxyXG4gKi9cclxuY2xhc3MgRXJyb3JIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgYW4gZXJyb3Igb2JqZWN0IGludG8gc29tZXRoaW5nIHJlYWRhYmxlLlxyXG4gICAgICogQHBhcmFtIGVyciBUaGUgb2JqZWN0IHRvIGZvcm1hdC5cclxuICAgICAqIEBwYXJhbSBpbmNsdWRlU3RhY2sgSW5jbHVkZSB0aGUgc3RhY2sgdHJhY2UgaWYgdGhlcmUgaXMgb25lLlxyXG4gICAgICogQHJldHVybnMgRm9ybWF0dGVkIHZlcnNpb24gb2YgdGhlIGVycm9yIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvcm1hdChlcnIsIGluY2x1ZGVTdGFjaykge1xyXG4gICAgICAgIGlmIChlcnIgPT09IG51bGwgfHwgZXJyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidW5rbm93biBlcnJvclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb3JlRXJyb3JfMS5Db3JlRXJyb3IuaXNFcnJvcihlcnIpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSBlcnIuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgIGlmIChpbmNsdWRlU3RhY2sgJiYgZXJyLnN0YWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gYFxcblN0YWNrIFRyYWNlYDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gZXJyLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgICAgICAgICAgcGFydHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHJldCArPSBgXFxuJHtwYXJ0cy5qb2luKFwiXFxuXCIpfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShlcnIuaW5uZXJFcnJvcikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlU3RhY2sgJiYgIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGVyci5pbm5lckVycm9yLnN0YWNrKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBgXFxuXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBgXFxuSW5uZXIgU3RhY2sgVHJhY2VcXG5gO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBlcnIuaW5uZXJFcnJvci5zdGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBgXFxuSW5uZXIgRXJyb3I6ICR7ZXJyLmlubmVyRXJyb3IubWVzc2FnZX1cXG5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoaW5jbHVkZVN0YWNrICYmICFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShlcnIuc3RhY2spKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gZXJyLnN0YWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKGVycikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbkhlbHBlcl8xLkpzb25IZWxwZXIuc3RyaW5naWZ5KGVyciwgdW5kZWZpbmVkLCBcIlxcdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkVycm9ySGVscGVyID0gRXJyb3JIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYSnliM0pJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5bGNuSnZja2hsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2EwUkJRU3RETzBGQlF5OURMRFpEUVVFd1F6dEJRVU14UXl4cFJFRkJPRU03UVVGRE9VTXNhVVJCUVRoRE8wRkJSVGxET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCVVN4RlFVRkZMRmxCUVhGQ08xRkJRMmhFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFbEJRVWtzUjBGQlJ5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zVFVGQlRTeERRVUZETEdWQlFXVXNRMEZCUXp0UlFVTXpRaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMSEZDUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eEpRVUZKTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03V1VGRGRrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hKUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNMVFpeEhRVUZITEVsQlFVa3NaVUZCWlN4RFFVRkRPMmRDUVVOMlFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRjRU1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVOa0xFZEJRVWNzU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU51UXl4RFFVRkRPMWxCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRPVVFzUjBGQlJ5eEpRVUZKTEhGRVFVRnhSQ3hEUVVGRE8yOUNRVU0zUkN4SFFVRkhMRWxCUVVrc2RVSkJRWFZDTEVOQlFVTTdiMEpCUXk5Q0xFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJRenRuUWtGRGFFTXNRMEZCUXp0blFrRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZEU2l4SFFVRkhMRWxCUVVrc2EwSkJRV3RDTEVkQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU03WjBKQlEzaEVMRU5CUVVNN1dVRkRUQ3hEUVVGRE8xbEJSVVFzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTm1MRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4WlFVRlpMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE9VSXNTVUZCU1N4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMklzUlVGQlJTeERRVUZETEVOQlFVTXNXVUZCV1N4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtRc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZEY2tJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTktMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETzFsQlEzWkNMRU5CUVVNN1dVRkRSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlEyWXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zUlVGQlJTeERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNM1FpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMWxCUTJZc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTktMRTFCUVUwc1EwRkJReXgxUWtGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEzUkVMRU5CUVVNN1VVRkRUQ3hEUVVGRE8wbEJRMHdzUTBGQlF6dERRVU5LTzBGQk9VTkVMR3REUVRoRFF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvZXJyb3JIZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBOdW1iZXIgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gaW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIGludGVnZXJuZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgaW50ZWdlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBudW1iZXJ5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGZsb2F0IG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlRmxvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgZm9ybWF0dGVkIGNvcnJlY3RseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRmxvYXRTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCpcXC4/XFxkKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBpbnRlZ2VyIG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlSW50LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXJTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlckhlbHBlciA9IE51bWJlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12Ym5WdFltVnlTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCVlR0UlFVTTVRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnlSaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5vU1N4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQllUdFJRVU55UXl4TlFVRk5MRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWVR0UlFVTjJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBOQlEwbzdRVUZ3UTBRc2IwTkJiME5ESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vZXJyb3IvY29yZUVycm9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXJyb3IvbmV0d29ya0Vycm9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXJyb3IvcGxhdGZvcm1FcnJvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9uZXR3b3JrQ2xpZW50RmFjdG9yeVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnlcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvcm5nU2VydmljZUZhY3RvcnlcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL2FycmF5SGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9lcnJvckhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvanNvbkhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbnVtYmVySGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL29iamVjdEhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2xvZ2dlcnMvY29uc29sZUxvZ2dlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2xvZ2dlcnMvbnVsbExvZ2dlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25ldHdvcmsvbmV0d29ya0VuZFBvaW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc2VydmljZXMvYmFja2dyb3VuZFRhc2tTZXJ2aWNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc2VydmljZXMvdGltZVNlcnZpY2VcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NkVU5CUVd0RE8wRkJRMnhETERCRFFVRnhRenRCUVVOeVF5d3lRMEZCYzBNN1FVRkRkRU1zTmtOQlFYZERPMEZCUTNoRExITkVRVUZwUkR0QlFVTnFSQ3gxUkVGQmEwUTdRVUZEYkVRc2JVUkJRVGhETzBGQlF6bERMREpEUVVGelF6dEJRVU4wUXl3eVEwRkJjME03UVVGRGRFTXNNRU5CUVhGRE8wRkJRM0pETERSRFFVRjFRenRCUVVOMlF5dzBRMEZCZFVNN1FVRkRka01zTkVOQlFYVkRPMEZCVTNaRExEWkRRVUYzUXp0QlFVTjRReXd3UTBGQmNVTTdRVUZEY2tNc0swTkJRVEJETzBGQlF6RkRMSE5FUVVGcFJEdEJRVU5xUkN3MFEwRkJkVU1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvaW5kZXgudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIi4vY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBwbGF0Zm9ybSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIFBsYXRmb3JtRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgUGxhdGZvcm1FcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJQbGF0Zm9ybVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGxhdGZvcm1FcnJvciA9IFBsYXRmb3JtRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhkR1p2Y20xRmNuSnZjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWxjbkp2Y2k5d2JHRjBabTl5YlVWeWNtOXlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTd3lRMEZCZDBNN1FVRkZlRU03TzBkQlJVYzdRVUZEU0N4dFFrRkJNa0lzVTBGQlVTeHhRa0ZCVXp0SlFVTjRRenM3T3pzN1QwRkxSenRKUVVOSUxGbEJRVmtzVDBGQlpTeEZRVUZGTEZWQlFXdERMRVZCUVVVc1ZVRkJhMEk3VVVGREwwVXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTVUZETjBJc1EwRkJRenREUVVOS08wRkJXRVFzYzBOQlYwTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9lcnJvci9wbGF0Zm9ybUVycm9yLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmYWN0b3J5QmFzZV8xID0gcmVxdWlyZShcIi4vZmFjdG9yeUJhc2VcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIG5ldHdvcmsgY2xpZW50cy5cclxuICovXHJcbmNsYXNzIE5ldHdvcmtDbGllbnRGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFOZXR3b3JrQ2xpZW50RmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgTmV0d29ya0NsaWVudEZhY3RvcnkuX2luc3RhbmNlID0gbmV3IE5ldHdvcmtDbGllbnRGYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOZXR3b3JrQ2xpZW50RmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBOZXR3b3JrQ2xpZW50RmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTmV0d29ya0NsaWVudEZhY3RvcnkgPSBOZXR3b3JrQ2xpZW50RmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm1WMGQyOXlhME5zYVdWdWRFWmhZM1J2Y25rdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Wm1GamRHOXlhV1Z6TDI1bGRIZHZjbXREYkdsbGJuUkdZV04wYjNKNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZEUVN3clEwRkJORU03UVVGRk5VTTdPMGRCUlVjN1FVRkRTQ3d3UWtGQmEwTXNVMEZCVVN4NVFrRkJNa0k3U1VGSmFrVTdPenRQUVVkSE8wbEJRMGc3VVVGRFNTeExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVVHRSUVVOc1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRzlDUVVGdlFpeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzYjBKQlFXOUNMRVZCUVVVc1EwRkJRenRSUVVOb1JTeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTXhReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5NTEZkQlFWYzdVVUZEYWtJc1RVRkJUU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRek5ETEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3h2UkVFeVFrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9mYWN0b3JpZXMvbmV0d29ya0NsaWVudEZhY3RvcnkudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiLi9mYWN0b3J5QmFzZVwiKTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgcm5nIHNlcnZpY2UuXHJcbiAqL1xyXG5jbGFzcyBQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIVBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm1DcnlwdG9GYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYXRmb3JtQ3J5cHRvRmFjdG9yeSA9IFBsYXRmb3JtQ3J5cHRvRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0d4aGRHWnZjbTFEY25sd2RHOUdZV04wYjNKNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJaaFkzUnZjbWxsY3k5d2JHRjBabTl5YlVOeWVYQjBiMFpoWTNSdmNua3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVOQkxDdERRVUUwUXp0QlFVVTFRenM3UjBGRlJ6dEJRVU5JTERKQ1FVRnRReXhUUVVGUkxIbENRVUUwUWp0SlFVbHVSVHM3TzA5QlIwYzdTVUZEU0R0UlFVTkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTzFGQlEyeENMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4eFFrRkJjVUlzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4eFFrRkJjVUlzUlVGQlJTeERRVUZETzFGQlEyeEZMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRek5ETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTB3c1YwRkJWenRSUVVOcVFpeE5RVUZOTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOS08wRkJNMEpFTEhORVFUSkNReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9mYWN0b3JpZXMvcGxhdGZvcm1DcnlwdG9GYWN0b3J5LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmYWN0b3J5QmFzZV8xID0gcmVxdWlyZShcIi4vZmFjdG9yeUJhc2VcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHJuZyBzZXJ2aWNlLlxyXG4gKi9cclxuY2xhc3MgUm5nU2VydmljZUZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIVJuZ1NlcnZpY2VGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBSbmdTZXJ2aWNlRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgUm5nU2VydmljZUZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFJuZ1NlcnZpY2VGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJuZ1NlcnZpY2VGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5SbmdTZXJ2aWNlRmFjdG9yeSA9IFJuZ1NlcnZpY2VGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbTVuVTJWeWRtbGpaVVpoWTNSdmNua3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwzSnVaMU5sY25acFkyVkdZV04wYjNKNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZEUVN3clEwRkJORU03UVVGRk5VTTdPMGRCUlVjN1FVRkRTQ3gxUWtGQkswSXNVMEZCVVN4NVFrRkJkMEk3U1VGSk0wUTdPenRQUVVkSE8wbEJRMGc3VVVGRFNTeExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVVHRSUVVOc1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMElzYVVKQlFXbENMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzYVVKQlFXbENMRVZCUVVVc1EwRkJRenRSUVVNeFJDeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5NTEZkQlFWYzdVVUZEYWtJc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRM2hETEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3c0UTBFeVFrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9mYWN0b3JpZXMvcm5nU2VydmljZUZhY3RvcnkudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgZXJyb3JIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2Vycm9ySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJTG9nZ2VyIHdoaWNoIHNlbmRzIHRvIHRoZSB0aGlzLl9sb2dnaW5nT2JqZWN0LlxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxyXG5jbGFzcyBDb25zb2xlTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuZCBpbnN0YW5jZSBvZiB0aGUgY29uc29sZSBsb2dnZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dpbmdPYmplY3QpIHtcclxuICAgICAgICB0aGlzLl9sb2dnaW5nT2JqZWN0ID0gbG9nZ2luZ09iamVjdCB8fCBjb25zb2xlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGJhbm5lciB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgYmFubmVyKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl9sb2dnaW5nT2JqZWN0LmxvZyhcIj1cIi5yZXBlYXQoODApKTtcclxuICAgICAgICB0aGlzLl9sb2dnaW5nT2JqZWN0LmxvZyhtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmxvZ0FyZ3ModGhpcy5fbG9nZ2luZ09iamVjdC5sb2csIGFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QubG9nKFwiPVwiLnJlcGVhdCg4MCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGxvZyB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgbG9nKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl9sb2dnaW5nT2JqZWN0LmxvZyhtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmxvZ0FyZ3ModGhpcy5fbG9nZ2luZ09iamVjdC5sb2csIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGluZm9ybWF0aW9uIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl9sb2dnaW5nT2JqZWN0LmluZm8obWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5sb2dBcmdzKHRoaXMuX2xvZ2dpbmdPYmplY3QuaW5mbywgYXJncyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgd2FybmluZyB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgd2FybmluZyhtZXNzYWdlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2luZ09iamVjdC53YXJuKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubG9nQXJncyh0aGlzLl9sb2dnaW5nT2JqZWN0Lndhcm4sIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGVycm9yIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gZXJyIEFuIGVycm9yIG9iamVjdCB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBlcnJvcihtZXNzYWdlLCBlcnIsIC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl9sb2dnaW5nT2JqZWN0LmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZXJyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IGVycm9ySGVscGVyXzEuRXJyb3JIZWxwZXIuZm9ybWF0KGVyciwgdHJ1ZSkuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgICAgIGxpbmVzLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnaW5nT2JqZWN0LmVycm9yKGBcXHQke2xpbmV9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvZ0FyZ3ModGhpcy5fbG9nZ2luZ09iamVjdC5lcnJvciwgYXJncyk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGxvZ0FyZ3MobG9nTWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzRW1wdHkoYXJncykpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZW50ID0gXCJcXHRcIjtcclxuICAgICAgICAgICAgbGV0IG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGFyZ3MuZm9yRWFjaCgoYXJnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IHRoaXMuY3JlYXRlSXRlbShpbmRlbnQsIFwiXCIsIGFyZyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBhcmdzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYCR7aW5kZW50fSR7XCItXCIucmVwZWF0KDcwKX1cXG5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbG9nTWV0aG9kKG91dHB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmVhdGVJdGVtKGluZGVudCwga2V5LCBpdGVtLCBzaW5nbGVJdGVtTGluZUJyZWFrID0gXCJcXG5cIikge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzQXJyYXkoaXRlbSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kZW50ID0gYCR7aW5kZW50fVxcdGA7XHJcbiAgICAgICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYCR7aW5kZW50fVtcXG5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH0ke2tleX06IFtcXG5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSB0aGlzLmNyZWF0ZUl0ZW0obmV3SW5kZW50LCBcIlwiLCBlbGVtZW50LCBgJHtpbmRleCA8IGl0ZW0ubGVuZ3RoIC0gMSA/IFwiLFwiIDogXCJcIn1cXG5gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9XVxcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc09iamVjdChpdGVtKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvYlN0cmluZyA9IGl0ZW0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKG9iU3RyaW5nID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRlbnQgPSBgJHtpbmRlbnR9XFx0YDtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH17XFxuYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9JHtrZXl9OiB7XFxuYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhpdGVtKTtcclxuICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoaXRlbUtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdGhpcy5jcmVhdGVJdGVtKG5ld0luZGVudCwgaXRlbUtleSwgaXRlbVtpdGVtS2V5XSwgYCR7aW5kZXggPCBrZXlzLmxlbmd0aCAtIDEgPyBcIixcIiA6IFwiXCJ9XFxuYCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9fVxcbmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdGhpcy5jcmVhdGVJdGVtKGluZGVudCwga2V5LCBvYlN0cmluZy5yZXBsYWNlKC9cXG4vZywgYFxcbiR7aW5kZW50fWApLCBzaW5nbGVJdGVtTGluZUJyZWFrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9JHtvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShpdGVtKSA/IGl0ZW0gOiBpdGVtLnRvU3RyaW5nKCl9JHtzaW5nbGVJdGVtTGluZUJyZWFrfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYCR7aW5kZW50fSR7a2V5fTogJHtvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShpdGVtKSA/IGl0ZW0gOiBpdGVtLnRvU3RyaW5nKCl9JHtzaW5nbGVJdGVtTGluZUJyZWFrfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbnNvbGVMb2dnZXIgPSBDb25zb2xlTG9nZ2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1YzI5c1pVeHZaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlzYjJkblpYSnpMMk52Ym5OdmJHVk1iMmRuWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEhkRVFVRnhSRHRCUVVOeVJDeDNSRUZCY1VRN1FVRkRja1FzTUVSQlFYVkVPMEZCUTNaRUxEQkVRVUYxUkR0QlFVZDJSRHM3UjBGRlJ6dEJRVU5JTERSQ1FVRTBRanRCUVVNMVFqdEpRVWxKT3p0UFFVVkhPMGxCUTBnc1dVRkJXU3hoUVVGMVFqdFJRVU12UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExHRkJRV0VzU1VGQlNTeFBRVUZQTEVOQlFVTTdTVUZEYmtRc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlpTeEZRVUZGTEVkQlFVY3NTVUZCVnp0UlFVTjZReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRha01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTFReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hIUVVGSExFTkJRVU1zVDBGQlpTeEZRVUZGTEVkQlFVY3NTVUZCVnp0UlFVTjBReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOcVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzU1VGQlNTeERRVUZETEU5QlFXVXNSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRka01zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOcVJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEU5QlFVOHNRMEZCUXl4UFFVRmxMRVZCUVVVc1IwRkJSeXhKUVVGWE8xRkJRekZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEyeERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGFrUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1MwRkJTeXhEUVVGRExFOUJRV1VzUlVGQlJTeEhRVUZUTEVWQlFVVXNSMEZCUnl4SlFVRlhPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRMjVETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemRDTEUxQlFVMHNTMEZCU3l4SFFVRkhMSGxDUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEZUVRc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkRha0lzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6TkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMUFzUTBGQlF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4UFFVRlBMRU5CUVVNc1UwRkJiME1zUlVGQlJTeEpRVUZYTzFGQlF6ZEVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6ZENMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU53UWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGFFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNSVUZCUlR0blFrRkRlRUlzVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRNME1zUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRNVUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkROME1zUTBGQlF6dFpRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZWQlFWVXNRMEZCUXl4TlFVRmpMRVZCUVVVc1IwRkJWeXhGUVVGRkxFbEJRVk1zUlVGQlJTeHpRa0ZCT0VJc1NVRkJTVHRSUVVONlJpeEpRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRUlzUlVGQlJTeERRVUZETEVOQlFVTXNlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzVTBGQlV5eEhRVUZITEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNN1dVRkRhRU1zUlVGQlJTeERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNMVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRXRCUVVzc1EwRkJRenRaUVVNM1FpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMG9zVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJRM0pETEVOQlFVTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQldTeEZRVUZGTEV0QlFXRXNSVUZCUlN4RlFVRkZPMmRDUVVONlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTJwSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEwZ3NUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hMUVVGTExFTkJRVU03VVVGRE4wSXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUldwRExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNTMEZCU3l4cFFrRkJhVUlzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJwRExFMUJRVTBzVTBGQlV5eEhRVUZITEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNN1owSkJRMmhETEVWQlFVVXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE5VSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hMUVVGTExFTkJRVU03WjBKQlF6ZENMRU5CUVVNN1owSkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTBvc1RVRkJUU3hKUVVGSkxFZEJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NUMEZCVHl4RFFVRkRPMmRDUVVOeVF5eERRVUZETzJkQ1FVTkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJReTlDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGbExFVkJRVVVzUzBGQllTeEZRVUZGTEVWQlFVVTdiMEpCUXpWRExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRWRCUVVjc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRelZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOSUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNTMEZCU3l4RFFVRkRPMWxCUXpkQ0xFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRTaXhOUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRXRCUVVzc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xbEJRM2hITEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFNpeEZRVUZGTEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRelZDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1IwRkJSeXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRaUVVOMFJ5eERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMG9zVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1MwRkJTeXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRaUVVNNVJ5eERRVUZETzFGQlEwd3NRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0RFFVTktPMEZCT1VoRUxITkRRVGhJUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvbG9nZ2Vycy9jb25zb2xlTG9nZ2VyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSUxvZ2dlciB3aGljaCBpcyBzaWxlbnQuXHJcbiAqL1xyXG5jbGFzcyBOdWxsTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBiYW5uZXIgdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGJhbm5lcihtZXNzYWdlLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgbG9nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBsb2cobWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGluZm9ybWF0aW9uIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCB3YXJuaW5nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICB3YXJuaW5nKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBlcnJvciB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGVyciBBbiBlcnJvciBvYmplY3QgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgZXJyb3IobWVzc2FnZSwgZXJyLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdWxsTG9nZ2VyID0gTnVsbExvZ2dlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5Wc2JFeHZaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlzYjJkblpYSnpMMjUxYkd4TWIyZG5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVVkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFXVXNSVUZCUlN4SFFVRkhMRWxCUVZjN1NVRkROME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeEhRVUZITEVOQlFVTXNUMEZCWlN4RlFVRkZMRWRCUVVjc1NVRkJWenRKUVVNeFF5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEVsQlFVa3NRMEZCUXl4UFFVRmxMRVZCUVVVc1IwRkJSeXhKUVVGWE8wbEJRek5ETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUMEZCVHl4RFFVRkRMRTlCUVdVc1JVRkJSU3hIUVVGSExFbEJRVmM3U1VGRE9VTXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1MwRkJTeXhEUVVGRExFOUJRV1VzUlVGQlJTeEhRVUZUTEVWQlFVVXNSMEZCUnl4SlFVRlhPMGxCUTNaRUxFTkJRVU03UTBGRFNqdEJRWHBEUkN4blEwRjVRME1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvbG9nZ2Vycy9udWxsTG9nZ2VyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuZXR3b3JrRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9uZXR3b3JrRXJyb3JcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBEZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIGEgbmV0d29yayBlbmRwb2ludC5cclxuICovXHJcbmNsYXNzIE5ldHdvcmtFbmRQb2ludCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBOZXR3b3JrRW5kUG9pbnQuXHJcbiAgICAgKiBAcGFyYW0gcHJvdG9jb2wgVGhlIHByb3RvY29sIHRvIGFjY2VzcyB0aGUgZW5kcG9pbnQgd2l0aC5cclxuICAgICAqIEBwYXJhbSBob3N0IFRoZSBob3N0IG5hbWUgb3IgaXAgb2YgdGhlIGVuZHBvaW50LlxyXG4gICAgICogQHBhcmFtIHBvcnQgVGhlIHBvcnQgb2YgdGhlIGVuZHBvaW50LlxyXG4gICAgICogQHBhcmFtIHJvb3RQYXRoIFRoZSBwYXRoIHRvIHRoZSBlbmRwb2ludC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2wsIGhvc3QsIHBvcnQsIHJvb3RQYXRoKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcocHJvdG9jb2wpIHx8ICEvaHR0cHxodHRwcy8udGVzdChwcm90b2NvbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihcIlRoZSBwcm90b2NvbCBtdXN0IGJlIGRlZmluZWQgYXMgaHR0cCBvciBodHRwc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcoaG9zdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihcIlRoZSBob3N0IG11c3QgYmUgZGVmaW5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHBvcnQpIHx8IHBvcnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgbmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKFwiVGhlIHBvcnQgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gemVyb1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShyb290UGF0aCkgJiYgIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyhyb290UGF0aCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihcIlRoZSByb290UGF0aCBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgICAgIHRoaXMuX2hvc3QgPSBob3N0LnJlcGxhY2UoL15cXC8qLywgXCJcIikucmVwbGFjZSgvXFwvKiQvLCBcIlwiKTtcclxuICAgICAgICB0aGlzLl9wb3J0ID0gcG9ydDtcclxuICAgICAgICB0aGlzLl9yb290UGF0aCA9IChyb290UGF0aCB8fCBcIlwiKS5yZXBsYWNlKC9eXFwvKi8sIFwiXCIpLnJlcGxhY2UoL1xcLyokLywgXCJcIik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwcm90b2NvbCB0byBhY2Nlc3MgdGhlIGVuZHBvaW50IHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcHJvdG9jb2wuXHJcbiAgICAgKi9cclxuICAgIGdldFByb3RvY29sKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm90b2NvbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhvc3QgbmFtZSBvciBpcCBvZiB0aGUgZW5kcG9pbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaG9zdC5cclxuICAgICAqL1xyXG4gICAgZ2V0SG9zdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBhdGggdG8gdGhlIGVuZHBvaW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIHBhdGguXHJcbiAgICAgKi9cclxuICAgIGdldFJvb3RQYXRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb290UGF0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBvcnQgb2YgdGhlIGVuZHBvaW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIHBvcnQuXHJcbiAgICAgKi9cclxuICAgIGdldFBvcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wbGV0ZSB1cmkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdXJpLlxyXG4gICAgICovXHJcbiAgICBnZXRVcmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuX3Byb3RvY29sfTovLyR7dGhpcy5faG9zdH06JHt0aGlzLl9wb3J0fS8ke3RoaXMuX3Jvb3RQYXRofWA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OZXR3b3JrRW5kUG9pbnQgPSBOZXR3b3JrRW5kUG9pbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJtVjBkMjl5YTBWdVpGQnZhVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMjVsZEhkdmNtc3ZibVYwZDI5eWEwVnVaRkJ2YVc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN4M1JFRkJjVVE3UVVGRGNrUXNNRVJCUVhWRU8wRkJRM1pFTERCRVFVRjFSRHRCUVVOMlJDd3dSRUZCZFVRN1FVRkpka1E3TzBkQlJVYzdRVUZEU0R0SlFWVkpPenM3T3pzN1QwRk5SenRKUVVOSUxGbEJRVmtzVVVGQmVVSXNSVUZCUlN4SlFVRlpMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRV2xDTzFGQlEyaEdMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UlN4TlFVRk5MRWxCUVVrc01rSkJRVmtzUTBGQlF5d3JRMEZCSzBNc1EwRkJReXhEUVVGRE8xRkJRelZGTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UWl4TlFVRk5MRWxCUVVrc01rSkJRVmtzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhEUVVGRE8xRkJRM1pFTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpkRExFMUJRVTBzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdVVUZETVVVc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRVVzVFVGQlRTeEpRVUZKTERKQ1FVRlpMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0UlFVTnNSU3hEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6RkVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyeENMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6bEZMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4WFFVRlhPMUZCUTJRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTlCUVU4N1VVRkRWaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1YwRkJWenRSUVVOa0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hQUVVGUE8xRkJRMVlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFMUJRVTA3VVVGRFZDeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhOUVVGTkxFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdTVUZETDBVc1EwRkJRenREUVVOS08wRkJNMFZFTERCRFFUSkZReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9uZXR3b3JrL25ldHdvcmtFbmRQb2ludC50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIERlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgYmFja2dyb3VuZCB0YXNrIHNlcnZpY2UuXHJcbiAqL1xyXG5jbGFzcyBCYWNrZ3JvdW5kVGFza1NlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBiYWNrZ3JvdW5kIHRhc2suXHJcbiAgICAgKiBAcGFyYW0gdGFzayBUaGUgdGFzayB0byBydW4gaW4gdGhlIGJhY2tncm91bmQuXHJcbiAgICAgKiBAcGFyYW0gZGVsYXkgVGhlIGRlbGF5IGJlZm9yZSBydW5uaW5nIHRoZSB0YXNrLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBjcmVhdGUodGFzaywgZGVsYXkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXNrKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CYWNrZ3JvdW5kVGFza1NlcnZpY2UgPSBCYWNrZ3JvdW5kVGFza1NlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltRmphMmR5YjNWdVpGUmhjMnRUWlhKMmFXTmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzTmxjblpwWTJWekwySmhZMnRuY205MWJtUlVZWE5yVTJWeWRtbGpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlJVRTdPMGRCUlVjN1FVRkRTRHRKUVVOSk96czdPMDlCU1VjN1NVRkRTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZKTEVsQlFYTkNMRVZCUVVVc1MwRkJZVHRSUVVONFJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVTdXVUZEZEVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZEUVN4SlFVRkpMRU5CUVVNN2IwSkJRMFFzVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRM0JDTEVOQlFVTTdaMEpCUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRXQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTJoQ0xFTkJRVU03V1VGRFRDeERRVUZETEVWQlEwWXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRkRUlzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPME5CUTBvN1FVRnNRa1FzYzBSQmEwSkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9zZXJ2aWNlcy9iYWNrZ3JvdW5kVGFza1NlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjbGFzcyB3aGljaCBjYW4gcHJvdmlkZSB0aGUgdGltZS5cclxuICovXHJcbmNsYXNzIFRpbWVTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwLzAxLzAxLlxyXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgbXNTaW5jZUVwb2NoKCkge1xyXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGltZVNlcnZpY2UgPSBUaW1lU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdsdFpWTmxjblpwWTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YzJWeWRtbGpaWE12ZEdsdFpWTmxjblpwWTJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVVZCT3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3TzA5QlIwYzdTVUZEU1N4WlFVRlpPMUZCUTJZc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wTkJRMG83UVVGU1JDeHJRMEZSUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiXSwic291cmNlUm9vdCI6IiJ9