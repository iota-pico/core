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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/error/coreError.js":
/*!*********************************!*\
  !*** ./dist/error/coreError.js ***!
  \*********************************/
/*! no static exports found */
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

var jsonHelper_1 = __webpack_require__(/*! ../helpers/jsonHelper */ "./dist/helpers/jsonHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "./dist/helpers/stringHelper.js");
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
     * @returns Formatted version of the error.
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

/***/ "./dist/error/networkError.js":
/*!************************************!*\
  !*** ./dist/error/networkError.js ***!
  \************************************/
/*! no static exports found */
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

var coreError_1 = __webpack_require__(/*! ./coreError */ "./dist/error/coreError.js");
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

/***/ "./dist/error/platformError.js":
/*!*************************************!*\
  !*** ./dist/error/platformError.js ***!
  \*************************************/
/*! no static exports found */
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

var coreError_1 = __webpack_require__(/*! ./coreError */ "./dist/error/coreError.js");
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

/***/ "./dist/factories/factoryBase.js":
/*!***************************************!*\
  !*** ./dist/factories/factoryBase.js ***!
  \***************************************/
/*! no static exports found */
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

/***/ "./dist/factories/networkClientFactory.js":
/*!************************************************!*\
  !*** ./dist/factories/networkClientFactory.js ***!
  \************************************************/
/*! no static exports found */
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

var factoryBase_1 = __webpack_require__(/*! ./factoryBase */ "./dist/factories/factoryBase.js");
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

/***/ "./dist/factories/platformCryptoFactory.js":
/*!*************************************************!*\
  !*** ./dist/factories/platformCryptoFactory.js ***!
  \*************************************************/
/*! no static exports found */
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

var factoryBase_1 = __webpack_require__(/*! ./factoryBase */ "./dist/factories/factoryBase.js");
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

/***/ "./dist/factories/rngServiceFactory.js":
/*!*********************************************!*\
  !*** ./dist/factories/rngServiceFactory.js ***!
  \*********************************************/
/*! no static exports found */
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

var factoryBase_1 = __webpack_require__(/*! ./factoryBase */ "./dist/factories/factoryBase.js");
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

/***/ "./dist/helpers/arrayHelper.js":
/*!*************************************!*\
  !*** ./dist/helpers/arrayHelper.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "./dist/helpers/objectHelper.js");
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

/***/ "./dist/helpers/errorHelper.js":
/*!*************************************!*\
  !*** ./dist/helpers/errorHelper.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! ../error/coreError */ "./dist/error/coreError.js");

var jsonHelper_1 = __webpack_require__(/*! ./jsonHelper */ "./dist/helpers/jsonHelper.js");

var objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "./dist/helpers/objectHelper.js");

var stringHelper_1 = __webpack_require__(/*! ./stringHelper */ "./dist/helpers/stringHelper.js");
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

/***/ "./dist/helpers/jsonHelper.js":
/*!************************************!*\
  !*** ./dist/helpers/jsonHelper.js ***!
  \************************************/
/*! no static exports found */
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

/***/ "./dist/helpers/numberHelper.js":
/*!**************************************!*\
  !*** ./dist/helpers/numberHelper.js ***!
  \**************************************/
/*! no static exports found */
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

/***/ "./dist/helpers/objectHelper.js":
/*!**************************************!*\
  !*** ./dist/helpers/objectHelper.js ***!
  \**************************************/
/*! no static exports found */
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
     * @param typeConstructor A callback method which returns an instance of the object.
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

/***/ "./dist/helpers/stringHelper.js":
/*!**************************************!*\
  !*** ./dist/helpers/stringHelper.js ***!
  \**************************************/
/*! no static exports found */
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

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
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

__export(__webpack_require__(/*! ./error/coreError */ "./dist/error/coreError.js"));

__export(__webpack_require__(/*! ./error/networkError */ "./dist/error/networkError.js"));

__export(__webpack_require__(/*! ./error/platformError */ "./dist/error/platformError.js"));

__export(__webpack_require__(/*! ./factories/factoryBase */ "./dist/factories/factoryBase.js"));

__export(__webpack_require__(/*! ./factories/networkClientFactory */ "./dist/factories/networkClientFactory.js"));

__export(__webpack_require__(/*! ./factories/platformCryptoFactory */ "./dist/factories/platformCryptoFactory.js"));

__export(__webpack_require__(/*! ./factories/rngServiceFactory */ "./dist/factories/rngServiceFactory.js"));

__export(__webpack_require__(/*! ./helpers/arrayHelper */ "./dist/helpers/arrayHelper.js"));

__export(__webpack_require__(/*! ./helpers/errorHelper */ "./dist/helpers/errorHelper.js"));

__export(__webpack_require__(/*! ./helpers/jsonHelper */ "./dist/helpers/jsonHelper.js"));

__export(__webpack_require__(/*! ./helpers/numberHelper */ "./dist/helpers/numberHelper.js"));

__export(__webpack_require__(/*! ./helpers/stringHelper */ "./dist/helpers/stringHelper.js"));

__export(__webpack_require__(/*! ./helpers/objectHelper */ "./dist/helpers/objectHelper.js"));

__export(__webpack_require__(/*! ./loggers/consoleLogger */ "./dist/loggers/consoleLogger.js"));

__export(__webpack_require__(/*! ./loggers/nullLogger */ "./dist/loggers/nullLogger.js"));

__export(__webpack_require__(/*! ./network/networkEndPoint */ "./dist/network/networkEndPoint.js"));

__export(__webpack_require__(/*! ./services/backgroundTaskService */ "./dist/services/backgroundTaskService.js"));

__export(__webpack_require__(/*! ./services/timeService */ "./dist/services/timeService.js"));

/***/ }),

/***/ "./dist/loggers/consoleLogger.js":
/*!***************************************!*\
  !*** ./dist/loggers/consoleLogger.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! ../helpers/arrayHelper */ "./dist/helpers/arrayHelper.js");

var errorHelper_1 = __webpack_require__(/*! ../helpers/errorHelper */ "./dist/helpers/errorHelper.js");

var objectHelper_1 = __webpack_require__(/*! ../helpers/objectHelper */ "./dist/helpers/objectHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "./dist/helpers/stringHelper.js");
/**
 * Implementation of ILogger which sends to the this._loggingObject.
 */
// tslint:disable:no-console


var ConsoleLogger =
/*#__PURE__*/
function () {
  /**
   * Create and instance of the console logger.
   * @param loggingObject The object to send all the logging to.
   * @returns A new instance of ConsoleLogger.
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

/***/ "./dist/loggers/nullLogger.js":
/*!************************************!*\
  !*** ./dist/loggers/nullLogger.js ***!
  \************************************/
/*! no static exports found */
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

/***/ "./dist/network/networkEndPoint.js":
/*!*****************************************!*\
  !*** ./dist/network/networkEndPoint.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var networkError_1 = __webpack_require__(/*! ../error/networkError */ "./dist/error/networkError.js");

var numberHelper_1 = __webpack_require__(/*! ../helpers/numberHelper */ "./dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! ../helpers/objectHelper */ "./dist/helpers/objectHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "./dist/helpers/stringHelper.js");
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
      var uri = "".concat(this._protocol, "://").concat(this._host, ":").concat(this._port);

      if (this._rootPath.length > 0) {
        uri += "/".concat(this._rootPath);
      }

      return uri;
    }
  }]);

  return NetworkEndPoint;
}();

exports.NetworkEndPoint = NetworkEndPoint;

/***/ }),

/***/ "./dist/services/backgroundTaskService.js":
/*!************************************************!*\
  !*** ./dist/services/backgroundTaskService.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

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
     * @returns The result of the background task.
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

/***/ "./dist/services/timeService.js":
/*!**************************************!*\
  !*** ./dist/services/timeService.js ***!
  \**************************************/
/*! no static exports found */
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

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
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

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi4vLi4vc3JjL2Vycm9yL25ldHdvcmtFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi4vLi4vc3JjL2Vycm9yL3BsYXRmb3JtRXJyb3IudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4uLy4uL3NyYy9mYWN0b3JpZXMvZmFjdG9yeUJhc2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4uLy4uL3NyYy9mYWN0b3JpZXMvbmV0d29ya0NsaWVudEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4uLy4uL3NyYy9mYWN0b3JpZXMvcGxhdGZvcm1DcnlwdG9GYWN0b3J5LnRzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uLi8uLi9zcmMvZmFjdG9yaWVzL3JuZ1NlcnZpY2VGYWN0b3J5LnRzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uLi8uLi9zcmMvaGVscGVycy9hcnJheUhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi4vLi4vc3JjL2hlbHBlcnMvZXJyb3JIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4uLy4uL3NyYy9oZWxwZXJzL251bWJlckhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi4vLi4vc3JjL2xvZ2dlcnMvY29uc29sZUxvZ2dlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi4vLi4vc3JjL2xvZ2dlcnMvbnVsbExvZ2dlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi4vLi4vc3JjL25ldHdvcmsvbmV0d29ya0VuZFBvaW50LnRzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uLi8uLi9zcmMvc2VydmljZXMvYmFja2dyb3VuZFRhc2tTZXJ2aWNlLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QiIsImZpbGUiOiJpb3RhLXBpY28tY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGlvdGEtcGljby9jb3JlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJb3RhUGljb0NvcmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QganNvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvanNvbkhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBIGNvcmUgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBDb3JlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWwgPSBhZGRpdGlvbmFsID8gYWRkaXRpb25hbCA6IHt9O1xyXG4gICAgICAgIHRoaXMuaW5uZXJFcnJvciA9IGlubmVyRXJyb3I7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNvcmVcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGNvdWxkIGJlIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrIGlmIGl0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBJZiB0aGUgdGVzdGVkIG9iamVjdCBpcyBhIENvcmVFcnJvci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRXJyb3Iob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIFwibWVzc2FnZVwiIGluIG9iaiAmJiBcImFkZGl0aW9uYWxcIiBpbiBvYmo7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdCB0aGUgZXJyb3IgdG8gYSByZWFkYWJsZSB2ZXJzaW9uLlxyXG4gICAgICogQHJldHVybnMgRm9ybWF0dGVkIHZlcnNpb24gb2YgdGhlIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBmb3JtYXQoKSB7XHJcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLmRvbWFpbikpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMuZG9tYWlufTogYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLm1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgJHt0aGlzLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWRkaXRpb25hbCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAob3V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IGBcXHQke2tleX06ICR7anNvbkhlbHBlcl8xLkpzb25IZWxwZXIuc3RyaW5naWZ5KHRoaXMuYWRkaXRpb25hbFtrZXldKX1cXG5gO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvcmVFcnJvciA9IENvcmVFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5eVpVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyTnZjbVZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2MwUkJRVzFFTzBGQlEyNUVMREJFUVVGMVJEdEJRVVYyUkRzN1IwRkZSenRCUVVOSUxHVkJRWFZDTEZOQlFWRXNTMEZCU3p0SlFXZENhRU03T3pzN08wOUJTMGM3U1VGRFNDeFpRVUZaTEU5QlFXVXNSVUZCUlN4VlFVRnJReXhGUVVGRkxGVkJRV3RDTzFGQlF5OUZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJRenRSUVVNM1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJVVHRSUVVNeFFpeFBRVUZQTEVkQlFVY3NTMEZCU3l4VFFVRlRMRWxCUVVrc1IwRkJSeXhMUVVGTExFbEJRVWtzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRWxCUVVrc1UwRkJVeXhKUVVGSkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVsQlFVa3NSMEZCUnl4RFFVRkRPMGxCUTI1SUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTk8xRkJRMVFzU1VGQlNTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUldJc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU53UXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTTdVMEZETjBJN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzFsQlEzSkRMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0VFFVTTFRanRSUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6RkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEYWtJc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRhRUlzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXp0aFFVTm1PMWxCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRaaXhIUVVGSExFbEJRVWtzUzBGQlN5eEhRVUZITEV0QlFVc3NkVUpCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03V1VGRGRrVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRUanRSUVVWRUxFOUJRVThzUjBGQlJ5eERRVUZETzBsQlEyWXNRMEZCUXp0RFFVTktPMEZCYUVWRUxEaENRV2RGUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29yZUVycm9yXzEgPSByZXF1aXJlKFwiLi9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIG5ldHdvcmsgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBOZXR3b3JrRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgTmV0d29ya0Vycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIk5ldHdvcmtcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5ldHdvcmtFcnJvciA9IE5ldHdvcmtFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm1WMGQyOXlhMFZ5Y205eUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJWeWNtOXlMMjVsZEhkdmNtdEZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTWtOQlFYZERPMEZCUlhoRE96dEhRVVZITzBGQlEwZ3NhMEpCUVRCQ0xGTkJRVkVzY1VKQlFWTTdTVUZEZGtNN096czdPMDlCUzBjN1NVRkRTQ3haUVVGWkxFOUJRV1VzUlVGQlJTeFZRVUZyUXl4RlFVRkZMRlZCUVd0Q08xRkJReTlGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFGQlEzWkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVTBGQlV5eERRVUZETzBsQlF6VkNMRU5CUVVNN1EwRkRTanRCUVZoRUxHOURRVmRESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29yZUVycm9yXzEgPSByZXF1aXJlKFwiLi9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIHBsYXRmb3JtIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgUGxhdGZvcm1FcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBQbGF0Zm9ybUVycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIlBsYXRmb3JtXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QbGF0Zm9ybUVycm9yID0gUGxhdGZvcm1FcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0d4aGRHWnZjbTFGY25KdmNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5bGNuSnZjaTl3YkdGMFptOXliVVZ5Y205eUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3eVEwRkJkME03UVVGRmVFTTdPMGRCUlVjN1FVRkRTQ3h0UWtGQk1rSXNVMEZCVVN4eFFrRkJVenRKUVVONFF6czdPenM3VDBGTFJ6dEpRVU5JTEZsQlFWa3NUMEZCWlN4RlFVRkZMRlZCUVd0RExFVkJRVVVzVlVGQmEwSTdVVUZETDBVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkROMElzUTBGQlF6dERRVU5LTzBGQldFUXNjME5CVjBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHR5cGVzLlxyXG4gKiBAdHlwZXBhcmFtIFQgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIG9iamVjdCB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICovXHJcbmNsYXNzIEZhY3RvcnlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgICAgIHRoaXMuX3R5cGVzID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHR5cGUgd2l0aCB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHJlZ2lzdGVyLlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLlxyXG4gICAgICovXHJcbiAgICByZWdpc3RlcihuYW1lLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdID0gdHlwZUNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIGEgdHlwZSBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gdW5yZWdpc3Rlci5cclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIGZhY3RvcnkgY29udGFpbiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICBleGlzdHMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIExpc3QgdGhlIHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgdHlwZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBjcmVhdGUuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBbnkgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgICAqIEByZXR1cm5zIEEgbmV3IGluc3RhbmNlIG9mIHRoZSB0eXBlIGlmIGl0IGV4aXN0cywgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGUobmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5fdHlwZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLl90eXBlc1tuYW1lXSguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmFjdG9yeUJhc2UgPSBGYWN0b3J5QmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm1GamRHOXllVUpoYzJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Wm1GamRHOXlhV1Z6TDJaaFkzUnZjbmxDWVhObExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNEdEpRVUZCTzFGQlEwa3NaVUZCWlR0UlFVTkZMRmRCUVUwc1IwRkJPRU1zUlVGQlJTeERRVUZETzBsQmMwUTFSU3hEUVVGRE8wbEJjRVJIT3pzN08wOUJTVWM3U1VGRFNTeFJRVUZSTEVOQlFVTXNTVUZCV1N4RlFVRkZMR1ZCUVhORE8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NaVUZCWlN4RFFVRkRPMGxCUTNSRUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hWUVVGVkxFTkJRVU1zU1VGQldUdFJRVU14UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTVUZCV1R0UlFVTjBRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETzBsQlEzcEVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1MwRkJTenRSUVVOU0xFOUJRVThzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRkRU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRM0JETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU4yUWl4UFFVRlBMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVONlF6dGhRVUZOTzFsQlEwZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkRjRUk3U1VGRFRDeERRVUZETzBOQlNVbzdRVUY0UkVRc2EwTkJkMFJESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCIuL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBuZXR3b3JrIGNsaWVudHMuXHJcbiAqL1xyXG5jbGFzcyBOZXR3b3JrQ2xpZW50RmFjdG9yeSBleHRlbmRzIGZhY3RvcnlCYXNlXzEuRmFjdG9yeUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBhbGxvdyBtYW51YWwgY29uc3RydWN0aW9uIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmFjdG9yeSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghTmV0d29ya0NsaWVudEZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIE5ldHdvcmtDbGllbnRGYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBOZXR3b3JrQ2xpZW50RmFjdG9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmV0d29ya0NsaWVudEZhY3RvcnkuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gTmV0d29ya0NsaWVudEZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5ldHdvcmtDbGllbnRGYWN0b3J5ID0gTmV0d29ya0NsaWVudEZhY3Rvcnk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJtVjBkMjl5YTBOc2FXVnVkRVpoWTNSdmNua3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyNWxkSGR2Y210RGJHbGxiblJHWVdOMGIzSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGRFFTd3JRMEZCTkVNN1FVRkZOVU03TzBkQlJVYzdRVUZEU0N3d1FrRkJhME1zVTBGQlVTeDVRa0ZCTWtJN1NVRkpha1U3T3p0UFFVZEhPMGxCUTBnN1VVRkRTU3hMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRMnBETEc5Q1FVRnZRaXhEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEc5Q1FVRnZRaXhGUVVGRkxFTkJRVU03VTBGREwwUTdVVUZEUkN4UFFVRlBMRzlDUVVGdlFpeERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTXhReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5NTEZkQlFWYzdVVUZEYWtJc1QwRkJUeXh2UWtGQmIwSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNelF5eERRVUZETzBOQlEwbzdRVUV6UWtRc2IwUkJNa0pESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCIuL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBybmcgc2VydmljZS5cclxuICovXHJcbmNsYXNzIFBsYXRmb3JtQ3J5cHRvRmFjdG9yeSBleHRlbmRzIGZhY3RvcnlCYXNlXzEuRmFjdG9yeUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBhbGxvdyBtYW51YWwgY29uc3RydWN0aW9uIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmFjdG9yeSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghUGxhdGZvcm1DcnlwdG9GYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFBsYXRmb3JtQ3J5cHRvRmFjdG9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUGxhdGZvcm1DcnlwdG9GYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGxhdGZvcm1DcnlwdG9GYWN0b3J5ID0gUGxhdGZvcm1DcnlwdG9GYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR3hoZEdadmNtMURjbmx3ZEc5R1lXTjBiM0o1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlpoWTNSdmNtbGxjeTl3YkdGMFptOXliVU55ZVhCMGIwWmhZM1J2Y25rdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVU5CTEN0RFFVRTBRenRCUVVVMVF6czdSMEZGUnp0QlFVTklMREpDUVVGdFF5eFRRVUZSTEhsQ1FVRTBRanRKUVVsdVJUczdPMDlCUjBjN1NVRkRTRHRSUVVOSkxFdEJRVXNzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhUUVVGVExFVkJRVVU3V1VGRGJFTXNjVUpCUVhGQ0xFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dFRRVU5xUlR0UlFVTkVMRTlCUVU4c2NVSkJRWEZDTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlEwd3NWMEZCVnp0UlFVTnFRaXhQUVVGUExIRkNRVUZ4UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRelZETEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3h6UkVFeVFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmYWN0b3J5QmFzZV8xID0gcmVxdWlyZShcIi4vZmFjdG9yeUJhc2VcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHJuZyBzZXJ2aWNlLlxyXG4gKi9cclxuY2xhc3MgUm5nU2VydmljZUZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIVJuZ1NlcnZpY2VGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBSbmdTZXJ2aWNlRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgUm5nU2VydmljZUZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFJuZ1NlcnZpY2VGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJuZ1NlcnZpY2VGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5SbmdTZXJ2aWNlRmFjdG9yeSA9IFJuZ1NlcnZpY2VGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbTVuVTJWeWRtbGpaVVpoWTNSdmNua3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwzSnVaMU5sY25acFkyVkdZV04wYjNKNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZEUVN3clEwRkJORU03UVVGRk5VTTdPMGRCUlVjN1FVRkRTQ3gxUWtGQkswSXNVMEZCVVN4NVFrRkJkMEk3U1VGSk0wUTdPenRQUVVkSE8wbEJRMGc3VVVGRFNTeExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlF6bENMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVMEZEZWtRN1VVRkRSQ3hQUVVGUExHbENRVUZwUWl4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTk1MRmRCUVZjN1VVRkRha0lzVDBGQlR5eHBRa0ZCYVVJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU40UXl4RFFVRkRPME5CUTBvN1FVRXpRa1FzT0VOQk1rSkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEFycmF5IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgQXJyYXlIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGVtcHR5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBlbXB0eSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbm9uIGVtcHR5IGFycmF5IG9mIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIG5vbiBlbXB0eSBhcnJheSBvZiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGVkKHZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0VtcHR5KHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXModW5kZWZpbmVkKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXMobnVsbCkgJiZcclxuICAgICAgICAgICAgdmFsdWUuZXZlcnkoKGEpID0+IG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYSwgdHlwZSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXJyYXlIZWxwZXIgPSBBcnJheUhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhKeVlYbElaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTloY25KaGVVaGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYVVSQlFUaERPMEZCUlRsRE96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemRFTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlZTeEZRVUZGTEVsQlFXTTdVVUZETlVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUXpsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRNVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOeVFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTVSQ3hEUVVGRE8wTkJSVW83UVVGcVEwUXNhME5CYVVOREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NvcmVFcnJvclwiKTtcclxuY29uc3QganNvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4vanNvbkhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiLi9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4vc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogSGFuZGxlIGVycm9ycyBhcyBncmFjZWZ1bGx5IGFzIHBvc3NpYmxlLlxyXG4gKi9cclxuY2xhc3MgRXJyb3JIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgYW4gZXJyb3Igb2JqZWN0IGludG8gc29tZXRoaW5nIHJlYWRhYmxlLlxyXG4gICAgICogQHBhcmFtIGVyciBUaGUgb2JqZWN0IHRvIGZvcm1hdC5cclxuICAgICAqIEBwYXJhbSBpbmNsdWRlU3RhY2sgSW5jbHVkZSB0aGUgc3RhY2sgdHJhY2UgaWYgdGhlcmUgaXMgb25lLlxyXG4gICAgICogQHJldHVybnMgRm9ybWF0dGVkIHZlcnNpb24gb2YgdGhlIGVycm9yIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvcm1hdChlcnIsIGluY2x1ZGVTdGFjaykge1xyXG4gICAgICAgIGlmIChlcnIgPT09IG51bGwgfHwgZXJyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidW5rbm93biBlcnJvclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb3JlRXJyb3JfMS5Db3JlRXJyb3IuaXNFcnJvcihlcnIpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSBlcnIuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgIGlmIChpbmNsdWRlU3RhY2sgJiYgZXJyLnN0YWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gYFxcblN0YWNrIFRyYWNlYDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gZXJyLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgICAgICAgICAgcGFydHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHJldCArPSBgXFxuJHtwYXJ0cy5qb2luKFwiXFxuXCIpfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShlcnIuaW5uZXJFcnJvcikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlU3RhY2sgJiYgIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGVyci5pbm5lckVycm9yLnN0YWNrKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBgXFxuXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBgXFxuSW5uZXIgU3RhY2sgVHJhY2VcXG5gO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBlcnIuaW5uZXJFcnJvci5zdGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBgXFxuSW5uZXIgRXJyb3I6ICR7ZXJyLmlubmVyRXJyb3IubWVzc2FnZX1cXG5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoaW5jbHVkZVN0YWNrICYmICFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShlcnIuc3RhY2spKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gZXJyLnN0YWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKGVycikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbkhlbHBlcl8xLkpzb25IZWxwZXIuc3RyaW5naWZ5KGVyciwgdW5kZWZpbmVkLCBcIlxcdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkVycm9ySGVscGVyID0gRXJyb3JIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYSnliM0pJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5bGNuSnZja2hsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2EwUkJRU3RETzBGQlF5OURMRFpEUVVFd1F6dEJRVU14UXl4cFJFRkJPRU03UVVGRE9VTXNhVVJCUVRoRE8wRkJSVGxET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCVVN4RlFVRkZMRmxCUVhGQ08xRkJRMmhFTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1NVRkJTU3hIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlEyNURMRTlCUVU4c1pVRkJaU3hEUVVGRE8xTkJRekZDTzJGQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1dVRkRka0lzU1VGQlNTeFpRVUZaTEVsQlFVa3NSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSVHRuUWtGRE0wSXNSMEZCUnl4SlFVRkpMR1ZCUVdVc1EwRkJRenRuUWtGRGRrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRM0JETEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRuUWtGRFpDeEhRVUZITEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdZVUZEYkVNN1dVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTzJkQ1FVTjJReXhKUVVGSkxGbEJRVmtzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN2IwSkJRemRFTEVkQlFVY3NTVUZCU1N4eFJFRkJjVVFzUTBGQlF6dHZRa0ZETjBRc1IwRkJSeXhKUVVGSkxIVkNRVUYxUWl4RFFVRkRPMjlDUVVNdlFpeEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU03YVVKQlF5OUNPM0ZDUVVGTk8yOUNRVU5JTEVkQlFVY3NTVUZCU1N4clFrRkJhMElzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRWxCUVVrc1EwRkJRenRwUWtGRGRrUTdZVUZEU2p0WlFVVkVMRTlCUVU4c1IwRkJSeXhEUVVGRE8xTkJRMlE3WVVGQlRTeEpRVUZKTEVkQlFVY3NXVUZCV1N4TFFVRkxMRVZCUVVVN1dVRkROMElzU1VGQlNTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJJc1NVRkJTU3haUVVGWkxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUTJ4RUxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRPMkZCUTNCQ08ybENRVUZOTzJkQ1FVTklMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETzJGQlEzUkNPMWxCUTBRc1QwRkJUeXhIUVVGSExFTkJRVU03VTBGRFpEdGhRVUZOTzFsQlEwZ3NTVUZCU1N3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkROVUlzVDBGQlR5eEhRVUZITEVOQlFVTTdZVUZEWkR0cFFrRkJUVHRuUWtGRFNDeFBRVUZQTEhWQ1FVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRja1E3VTBGRFNqdEpRVU5NTEVOQlFVTTdRMEZEU2p0QlFUbERSQ3hyUTBFNFEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSnNvbiBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEpzb25IZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdHJpbmdpZnkgYW4gb2JqZWN0IHdpdGggcmVjdXJzaW9uIGJyZWFraW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXksIHRvIGJlIGNvbnZlcnRlZC5cclxuICAgICAqIEBwYXJhbSByZXBsYWNlciBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyB0aGUgcmVzdWx0cy5cclxuICAgICAqIEBwYXJhbSBzcGFjZSBBZGRzIGluZGVudGF0aW9uLCB3aGl0ZSBzcGFjZSwgYW5kIGxpbmUgYnJlYWsgY2hhcmFjdGVycyB0byB0aGUgcmV0dXJuLXZhbHVlIEpTT04gdGV4dCB0byBtYWtlIGl0IGVhc2llciB0byByZWFkLlxyXG4gICAgICogQHJldHVybnMgU3RyaW5nIHZlcnNpb24gb2YgdGhlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSB7XHJcbiAgICAgICAgLy8gZWxpbWluYXRlcyBhbnkgcmVjdXJzaW9uIGluIHRoZSBzdHJpbmdpZnlcclxuICAgICAgICBjb25zdCBjYWNoZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJlY3VzaW9uUmVwbGFjZXIgPSAoa2V5LCByZXBsYWNlVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgcmVwbGFjZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZS5pbmRleE9mKHJlcGxhY2VWYWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1c2gocmVwbGFjZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZXIgPyByZXBsYWNlcihrZXksIHJlcGxhY2VWYWx1ZSkgOiByZXBsYWNlVmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIHJlY3VzaW9uUmVwbGFjZXIsIHNwYWNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkpzb25IZWxwZXIgPSBKc29uSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhbk52YmtobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwycHpiMjVJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRXlReXhGUVVGRkxFdEJRWFZDTzFGQlEzQkhMRFJEUVVFMFF6dFJRVU0xUXl4TlFVRk5MRXRCUVVzc1IwRkJWU3hGUVVGRkxFTkJRVU03VVVGRmVFSXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eERRVUZETEVkQlFWY3NSVUZCUlN4WlFVRnBRaXhGUVVGRkxFVkJRVVU3V1VGRGVFUXNTVUZCU1N4UFFVRlBMRmxCUVZrc1MwRkJTeXhSUVVGUkxFbEJRVWtzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU5zUml4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRM0JETEhkRFFVRjNRenR2UWtGRGVFTXNUMEZCVHp0cFFrRkRWanR4UWtGQlRUdHZRa0ZEU0N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJsQ1FVTTFRanRoUVVOS08xbEJSVVFzVDBGQlR5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVOcVJTeERRVUZETEVOQlFVTTdVVUZGUml4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNN1EwRkRTanRCUVROQ1JDeG5RMEV5UWtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBOdW1iZXIgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gaW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIGludGVnZXJuZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgaW50ZWdlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBudW1iZXJ5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGZsb2F0IG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlRmxvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgZm9ybWF0dGVkIGNvcnJlY3RseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRmxvYXRTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCpcXC4/XFxkKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBpbnRlZ2VyIG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlSW50LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXJTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlckhlbHBlciA9IE51bWJlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12Ym5WdFltVnlTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCVlR0UlFVTTVRaXhQUVVGUExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEY2tZc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFWVTdVVUZETjBJc1QwRkJUeXhMUVVGTExFdEJRVXNzVTBGQlV5eEpRVUZKTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1QwRkJUeXhMUVVGTExFdEJRVXNzVVVGQlVTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMmhKTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGaE8xRkJRM0pETEU5QlFVOHNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQllUdFJRVU4yUXl4UFFVRlBMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenREUVVOS08wRkJjRU5FTEc5RFFXOURReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT2JqZWN0IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgT2JqZWN0SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZW1wdHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiB0eXBlb2YgKHZhbHVlKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QgaWYgZ2l2ZW4gdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgQSBjYWxsYmFjayBtZXRob2Qgd2hpY2ggcmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZSh2YWx1ZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVDbGFzc05hbWUgPSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWVDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZUNsYXNzTmFtZSA9PT0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh0eXBlQ29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgYW4gb2JqZWN0IGlmIGl0IGhhcyBvbmUuXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3QgdG8gZ2V0IHRoZSBjbGFzcyBuYW1lIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjbGFzcyBuYW1lIGlmIGl0IGhhcyBvbmUgb3IgdW5kZWZpbmVkIGlmIG5vdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENsYXNzTmFtZShvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHR5cGVvZiBvYmplY3QgPT09IFwiZnVuY3Rpb25cIiA/IG9iamVjdC50b1N0cmluZygpIDogb2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBjb25zdHJ1Y3Rvci5tYXRjaCgvXFx3Ky9nKTtcclxuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9iamVjdEhlbHBlciA9IE9iamVjdEhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjJKcVpXTjBTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YjJKcVpXTjBTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlR0UlFVTTFRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNc1EwRkJRenRKUVVOcVJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRkRVVzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGVkxFVkJRVVVzWlVGQmVVSTdVVUZEZEVRc1RVRkJUU3hqUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVONFJDeFBRVUZQTEdOQlFXTXNTMEZCU3l4VFFVRlRMRWxCUVVrc1kwRkJZeXhMUVVGTExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVZjN1VVRkRiRU1zU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGVrTXNUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkRjRUk3WVVGQlRUdFpRVU5JTEUxQlFVMHNWMEZCVnl4SFFVRkhMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRM0pITEUxQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETVVNc1QwRkJUeXhEUVVGRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dFRRVU51UlR0SlFVTk1MRU5CUVVNN1EwRkRTanRCUVRkRFJDeHZRMEUyUTBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTdHJpbmcgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBTdHJpbmdIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBzdHJpbmd5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZyB0aGF0IGlzIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbm8gZW1wdHluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIVN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgc3RyaW5nIGFsbCBBU0NJSSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIHN0cmluZyB0byB0ZXN0IGlmIGlzIGlzIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFsbCBBU0NJSS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXNjaWkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogL15bXFx4MDAtXFx4RkZdKiQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGUgbm9uIEFTQ0lJIGNoYXJhY3RlcnMgd2l0aCBjb250cm9sIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB2YWx1ZSB0byBlc2NhcGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZXNjYXBlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBlbmNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvW1xcdTAwN0YtXFx1RkZGRl0vZywgKGNocikgPT4gYFxcXFx1JHsoYDAwMDAke2Noci5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KX1gKS5zdWJzdHIoLTQpfWApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzIHRvIEFTQ0lJLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBlbmNvZGVkIHN0cmluZyB0byBjb252ZXJ0IGJhY2sgdG8gQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvXFxcXHUoW1xcZFxcd117NH0pL2dpLCAobWF0Y2gsIGdycCkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChncnAsIDE2KSkpIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RyaW5nSGVscGVyID0gU3RyaW5nSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1J5YVc1blNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZjM1J5YVc1blNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEdsQ1FVRnBRaXhEUVVGRE8wbEJRemxGTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJReTlFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGaE8xRkJReTlDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1QwRkJUeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRMMG9zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVdFN1VVRkRkRU1zVDBGQlR5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRMmhLTEVOQlFVTTdRMEZEU2p0QlFTOURSQ3h2UTBFclEwTWlmUT09IiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Vycm9yL2NvcmVFcnJvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Vycm9yL25ldHdvcmtFcnJvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Vycm9yL3BsYXRmb3JtRXJyb3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvbmV0d29ya0NsaWVudEZhY3RvcnlcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvcGxhdGZvcm1DcnlwdG9GYWN0b3J5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzL3JuZ1NlcnZpY2VGYWN0b3J5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9hcnJheUhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZXJyb3JIZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL2pzb25IZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL251bWJlckhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9vYmplY3RIZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9sb2dnZXJzL2NvbnNvbGVMb2dnZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9sb2dnZXJzL251bGxMb2dnZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9uZXR3b3JrL25ldHdvcmtFbmRQb2ludFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NlcnZpY2VzL2JhY2tncm91bmRUYXNrU2VydmljZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRIUVVWSE8wRkJRMGdzZFVOQlFXdERPMEZCUTJ4RExEQkRRVUZ4UXp0QlFVTnlReXd5UTBGQmMwTTdRVUZEZEVNc05rTkJRWGRETzBGQlEzaERMSE5FUVVGcFJEdEJRVU5xUkN4MVJFRkJhMFE3UVVGRGJFUXNiVVJCUVRoRE8wRkJRemxETERKRFFVRnpRenRCUVVOMFF5d3lRMEZCYzBNN1FVRkRkRU1zTUVOQlFYRkRPMEZCUTNKRExEUkRRVUYxUXp0QlFVTjJReXcwUTBGQmRVTTdRVUZEZGtNc05FTkJRWFZETzBGQlUzWkRMRFpEUVVGM1F6dEJRVU40UXl3d1EwRkJjVU03UVVGRGNrTXNLME5CUVRCRE8wRkJRekZETEhORVFVRnBSRHRCUVVOcVJDdzBRMEZCZFVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgZXJyb3JIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2Vycm9ySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJTG9nZ2VyIHdoaWNoIHNlbmRzIHRvIHRoZSB0aGlzLl9sb2dnaW5nT2JqZWN0LlxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxyXG5jbGFzcyBDb25zb2xlTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuZCBpbnN0YW5jZSBvZiB0aGUgY29uc29sZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbG9nZ2luZ09iamVjdCBUaGUgb2JqZWN0IHRvIHNlbmQgYWxsIHRoZSBsb2dnaW5nIHRvLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgaW5zdGFuY2Ugb2YgQ29uc29sZUxvZ2dlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9nZ2luZ09iamVjdCkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QgPSBsb2dnaW5nT2JqZWN0IHx8IGNvbnNvbGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgYmFubmVyIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBiYW5uZXIobWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QubG9nKFwiPVwiLnJlcGVhdCg4MCkpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubG9nQXJncyh0aGlzLl9sb2dnaW5nT2JqZWN0LmxvZywgYXJncyk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2luZ09iamVjdC5sb2coXCI9XCIucmVwZWF0KDgwKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgbG9nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBsb2cobWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubG9nQXJncyh0aGlzLl9sb2dnaW5nT2JqZWN0LmxvZywgYXJncyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgaW5mb3JtYXRpb24gdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGluZm8obWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QuaW5mbyhtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmxvZ0FyZ3ModGhpcy5fbG9nZ2luZ09iamVjdC5pbmZvLCBhcmdzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCB3YXJuaW5nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICB3YXJuaW5nKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl9sb2dnaW5nT2JqZWN0Lndhcm4obWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5sb2dBcmdzKHRoaXMuX2xvZ2dpbmdPYmplY3Qud2FybiwgYXJncyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgZXJyb3IgdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBlcnIgQW4gZXJyb3Igb2JqZWN0IHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGVycm9yKG1lc3NhZ2UsIGVyciwgLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShlcnIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gZXJyb3JIZWxwZXJfMS5FcnJvckhlbHBlci5mb3JtYXQoZXJyLCB0cnVlKS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICAgICAgbGluZXMuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QuZXJyb3IoYFxcdCR7bGluZX1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9nQXJncyh0aGlzLl9sb2dnaW5nT2JqZWN0LmVycm9yLCBhcmdzKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbG9nQXJncyhsb2dNZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNFbXB0eShhcmdzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRlbnQgPSBcIlxcdFwiO1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICAgICAgYXJncy5mb3JFYWNoKChhcmcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdGhpcy5jcmVhdGVJdGVtKGluZGVudCwgXCJcIiwgYXJnKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGFyZ3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9JHtcIi1cIi5yZXBlYXQoNzApfVxcbmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2dNZXRob2Qob3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZUl0ZW0oaW5kZW50LCBrZXksIGl0ZW0sIHNpbmdsZUl0ZW1MaW5lQnJlYWsgPSBcIlxcblwiKSB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNBcnJheShpdGVtKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRlbnQgPSBgJHtpbmRlbnR9XFx0YDtcclxuICAgICAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9W1xcbmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYCR7aW5kZW50fSR7a2V5fTogW1xcbmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IHRoaXMuY3JlYXRlSXRlbShuZXdJbmRlbnQsIFwiXCIsIGVsZW1lbnQsIGAke2luZGV4IDwgaXRlbS5sZW5ndGggLSAxID8gXCIsXCIgOiBcIlwifVxcbmApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH1dXFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzT2JqZWN0KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iU3RyaW5nID0gaXRlbS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAob2JTdHJpbmcgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGVudCA9IGAke2luZGVudH1cXHRgO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYCR7aW5kZW50fXtcXG5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH0ke2tleX06IHtcXG5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKChpdGVtS2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSB0aGlzLmNyZWF0ZUl0ZW0obmV3SW5kZW50LCBpdGVtS2V5LCBpdGVtW2l0ZW1LZXldLCBgJHtpbmRleCA8IGtleXMubGVuZ3RoIC0gMSA/IFwiLFwiIDogXCJcIn1cXG5gKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH19XFxuYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSB0aGlzLmNyZWF0ZUl0ZW0oaW5kZW50LCBrZXksIG9iU3RyaW5nLnJlcGxhY2UoL1xcbi9nLCBgXFxuJHtpbmRlbnR9YCksIHNpbmdsZUl0ZW1MaW5lQnJlYWspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH0ke29iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGl0ZW0pID8gaXRlbSA6IGl0ZW0udG9TdHJpbmcoKX0ke3NpbmdsZUl0ZW1MaW5lQnJlYWt9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9JHtrZXl9OiAke29iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGl0ZW0pID8gaXRlbSA6IGl0ZW0udG9TdHJpbmcoKX0ke3NpbmdsZUl0ZW1MaW5lQnJlYWt9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29uc29sZUxvZ2dlciA9IENvbnNvbGVMb2dnZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVjMjlzWlV4dloyZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXNiMmRuWlhKekwyTnZibk52YkdWTWIyZG5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMSGRFUVVGeFJEdEJRVU55UkN4M1JFRkJjVVE3UVVGRGNrUXNNRVJCUVhWRU8wRkJRM1pFTERCRVFVRjFSRHRCUVVkMlJEczdSMEZGUnp0QlFVTklMRFJDUVVFMFFqdEJRVU0xUWp0SlFVbEpPenM3TzA5QlNVYzdTVUZEU0N4WlFVRlpMR0ZCUVhWQ08xRkJReTlDTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1lVRkJZU3hKUVVGSkxFOUJRVThzUTBGQlF6dEpRVU51UkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGbExFVkJRVVVzUjBGQlJ5eEpRVUZYTzFGQlEzcERMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU40UXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTnFReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6VkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU0xUXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRWRCUVVjc1EwRkJReXhQUVVGbExFVkJRVVVzUjBGQlJ5eEpRVUZYTzFGQlEzUkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTJwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hKUVVGSkxFTkJRVU1zVDBGQlpTeEZRVUZGTEVkQlFVY3NTVUZCVnp0UlFVTjJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOc1F5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVDBGQlR5eERRVUZETEU5QlFXVXNSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRNVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOcVJDeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1QwRkJaU3hGUVVGRkxFZEJRVk1zUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEYmtRc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRia01zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF6VkNMRTFCUVUwc1MwRkJTeXhIUVVGSExIbENRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRlRVFzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRGFrSXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpORExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEwNDdVVUZEUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1QwRkJUeXhEUVVGRExGTkJRVzlETEVWQlFVVXNTVUZCVnp0UlFVTTNSQ3hKUVVGSkxFTkJRVU1zZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRM0JDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOb1FpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTzJkQ1FVTjRRaXhOUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTXpReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRGVrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJRenRwUWtGRE5VTTdXVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOSUxGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTnlRanRKUVVOTUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNWVUZCVlN4RFFVRkRMRTFCUVdNc1JVRkJSU3hIUVVGWExFVkJRVVVzU1VGQlV5eEZRVUZGTEhOQ1FVRTRRaXhKUVVGSk8xRkJRM3BHTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOb1FpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6TkNMRTFCUVUwc1UwRkJVeXhIUVVGSExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTTdXVUZEYUVNc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRE0wSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hMUVVGTExFTkJRVU03WVVGRE5VSTdhVUpCUVUwN1owSkJRMGdzVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRE8yRkJRM0JETzFsQlEwUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVmtzUlVGQlJTeExRVUZoTEVWQlFVVXNSVUZCUlR0blFrRkRla01zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNSMEZCUnl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTnFSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1MwRkJTeXhEUVVGRE8xTkJRelZDTzJGQlFVMHNTVUZCU1N3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTndReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1dVRkZha01zU1VGQlNTeFJRVUZSTEV0QlFVc3NhVUpCUVdsQ0xFVkJRVVU3WjBKQlEyaERMRTFCUVUwc1UwRkJVeXhIUVVGSExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTTdaMEpCUTJoRExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3YjBKQlF6TkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzUzBGQlN5eERRVUZETzJsQ1FVTTFRanR4UWtGQlRUdHZRa0ZEU0N4TlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTTdhVUpCUTNCRE8yZENRVU5FTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUXk5Q0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRmxMRVZCUVVVc1MwRkJZU3hGUVVGRkxFVkJRVVU3YjBKQlF6VkRMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVkQlFVY3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUXpWSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTklMRTFCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzUzBGQlN5eERRVUZETzJGQlF6VkNPMmxDUVVGTk8yZENRVU5JTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdZVUZEZGtjN1UwRkRTanRoUVVGTk8xbEJRMGdzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZETTBJc1RVRkJUU3hKUVVGSkxFZEJRVWNzVFVGQlRTeEhRVUZITERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4dFFrRkJiVUlzUlVGQlJTeERRVUZETzJGQlEzSkhPMmxDUVVGTk8yZENRVU5JTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1IwRkJSeXhIUVVGSExFdEJRVXNzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU03WVVGRE4wYzdVMEZEU2p0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdRMEZEU2p0QlFXaEpSQ3h6UTBGblNVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSUxvZ2dlciB3aGljaCBpcyBzaWxlbnQuXHJcbiAqL1xyXG5jbGFzcyBOdWxsTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBiYW5uZXIgdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGJhbm5lcihtZXNzYWdlLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgbG9nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBsb2cobWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGluZm9ybWF0aW9uIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCB3YXJuaW5nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICB3YXJuaW5nKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBlcnJvciB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGVyciBBbiBlcnJvciBvYmplY3QgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgZXJyb3IobWVzc2FnZSwgZXJyLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdWxsTG9nZ2VyID0gTnVsbExvZ2dlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5Wc2JFeHZaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlzYjJkblpYSnpMMjUxYkd4TWIyZG5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVVkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFXVXNSVUZCUlN4SFFVRkhMRWxCUVZjN1NVRkROME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeEhRVUZITEVOQlFVTXNUMEZCWlN4RlFVRkZMRWRCUVVjc1NVRkJWenRKUVVNeFF5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEVsQlFVa3NRMEZCUXl4UFFVRmxMRVZCUVVVc1IwRkJSeXhKUVVGWE8wbEJRek5ETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUMEZCVHl4RFFVRkRMRTlCUVdVc1JVRkJSU3hIUVVGSExFbEJRVmM3U1VGRE9VTXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1MwRkJTeXhEUVVGRExFOUJRV1VzUlVGQlJTeEhRVUZUTEVWQlFVVXNSMEZCUnl4SlFVRlhPMGxCUTNaRUxFTkJRVU03UTBGRFNqdEJRWHBEUkN4blEwRjVRME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbmV0d29ya0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvbmV0d29ya0Vycm9yXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBhIG5ldHdvcmsgZW5kcG9pbnQuXHJcbiAqL1xyXG5jbGFzcyBOZXR3b3JrRW5kUG9pbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgTmV0d29ya0VuZFBvaW50LlxyXG4gICAgICogQHBhcmFtIHByb3RvY29sIFRoZSBwcm90b2NvbCB0byBhY2Nlc3MgdGhlIGVuZHBvaW50IHdpdGguXHJcbiAgICAgKiBAcGFyYW0gaG9zdCBUaGUgaG9zdCBuYW1lIG9yIGlwIG9mIHRoZSBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSBwb3J0IFRoZSBwb3J0IG9mIHRoZSBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSByb290UGF0aCBUaGUgcGF0aCB0byB0aGUgZW5kcG9pbnQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByb3RvY29sLCBob3N0LCBwb3J0LCByb290UGF0aCkge1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKHByb3RvY29sKSB8fCAhL2h0dHB8aHR0cHMvLnRlc3QocHJvdG9jb2wpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJUaGUgcHJvdG9jb2wgbXVzdCBiZSBkZWZpbmVkIGFzIGh0dHAgb3IgaHR0cHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKGhvc3QpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJUaGUgaG9zdCBtdXN0IGJlIGRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihwb3J0KSB8fCBwb3J0IDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihcIlRoZSBwb3J0IG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIHplcm9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocm9vdFBhdGgpICYmICFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcocm9vdFBhdGgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJUaGUgcm9vdFBhdGggbXVzdCBiZSBhIHZhbGlkIHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcHJvdG9jb2wgPSBwcm90b2NvbDtcclxuICAgICAgICB0aGlzLl9ob3N0ID0gaG9zdC5yZXBsYWNlKC9eXFwvKi8sIFwiXCIpLnJlcGxhY2UoL1xcLyokLywgXCJcIik7XHJcbiAgICAgICAgdGhpcy5fcG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgdGhpcy5fcm9vdFBhdGggPSAocm9vdFBhdGggfHwgXCJcIikucmVwbGFjZSgvXlxcLyovLCBcIlwiKS5yZXBsYWNlKC9cXC8qJC8sIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJvdG9jb2wgdG8gYWNjZXNzIHRoZSBlbmRwb2ludCB3aXRoLlxyXG4gICAgICogQHJldHVybnMgVGhlIHByb3RvY29sLlxyXG4gICAgICovXHJcbiAgICBnZXRQcm90b2NvbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBob3N0IG5hbWUgb3IgaXAgb2YgdGhlIGVuZHBvaW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGhvc3QuXHJcbiAgICAgKi9cclxuICAgIGdldEhvc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXRoIHRvIHRoZSBlbmRwb2ludC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwYXRoLlxyXG4gICAgICovXHJcbiAgICBnZXRSb290UGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFBhdGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwb3J0IG9mIHRoZSBlbmRwb2ludC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwb3J0LlxyXG4gICAgICovXHJcbiAgICBnZXRQb3J0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3J0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcGxldGUgdXJpLlxyXG4gICAgICogQHJldHVybnMgVGhlIHVyaS5cclxuICAgICAqL1xyXG4gICAgZ2V0VXJpKCkge1xyXG4gICAgICAgIGxldCB1cmkgPSBgJHt0aGlzLl9wcm90b2NvbH06Ly8ke3RoaXMuX2hvc3R9OiR7dGhpcy5fcG9ydH1gO1xyXG4gICAgICAgIGlmICh0aGlzLl9yb290UGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHVyaSArPSBgLyR7dGhpcy5fcm9vdFBhdGh9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVyaTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5ldHdvcmtFbmRQb2ludCA9IE5ldHdvcmtFbmRQb2ludDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm1WMGQyOXlhMFZ1WkZCdmFXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyNWxkSGR2Y21zdmJtVjBkMjl5YTBWdVpGQnZhVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3gzUkVGQmNVUTdRVUZEY2tRc01FUkJRWFZFTzBGQlEzWkVMREJFUVVGMVJEdEJRVU4yUkN3d1JFRkJkVVE3UVVGSmRrUTdPMGRCUlVjN1FVRkRTRHRKUVZWSk96czdPenM3VDBGTlJ6dEpRVU5JTEZsQlFWa3NVVUZCZVVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzU1VGQldTeEZRVUZGTEZGQlFXbENPMUZCUTJoR0xFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3V1VGRGJFVXNUVUZCVFN4SlFVRkpMREpDUVVGWkxFTkJRVU1zSzBOQlFTdERMRU5CUVVNc1EwRkJRenRUUVVNelJUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTVRaXhOUVVGTkxFbEJRVWtzTWtKQlFWa3NRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eERRVUZETzFOQlEzUkVPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVTdXVUZETlVNc1RVRkJUU3hKUVVGSkxESkNRVUZaTEVOQlFVTXNOa05CUVRaRExFTkJRVU1zUTBGQlF6dFRRVU42UlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xbEJRM0pGTEUxQlFVMHNTVUZCU1N3eVFrRkJXU3hEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1UwRkRha1U3VVVGRFJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eERRVUZETEZGQlFWRXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZET1VVc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRmRCUVZjN1VVRkRaQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRmRCUVZjN1VVRkRaQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTFCUVUwN1VVRkRWQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRTFCUVUwc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkZOVVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRE0wSXNSMEZCUnl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFOQlF5OUNPMUZCUlVRc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBOQlEwbzdRVUZxUmtRc01FTkJhVVpESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIERlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgYmFja2dyb3VuZCB0YXNrIHNlcnZpY2UuXHJcbiAqL1xyXG5jbGFzcyBCYWNrZ3JvdW5kVGFza1NlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBiYWNrZ3JvdW5kIHRhc2suXHJcbiAgICAgKiBAcGFyYW0gdGFzayBUaGUgdGFzayB0byBydW4gaW4gdGhlIGJhY2tncm91bmQuXHJcbiAgICAgKiBAcGFyYW0gZGVsYXkgVGhlIGRlbGF5IGJlZm9yZSBydW5uaW5nIHRoZSB0YXNrLlxyXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgYmFja2dyb3VuZCB0YXNrLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBjcmVhdGUodGFzaywgZGVsYXkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXNrKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CYWNrZ3JvdW5kVGFza1NlcnZpY2UgPSBCYWNrZ3JvdW5kVGFza1NlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltRmphMmR5YjNWdVpGUmhjMnRUWlhKMmFXTmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzTmxjblpwWTJWekwySmhZMnRuY205MWJtUlVZWE5yVTJWeWRtbGpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlJVRTdPMGRCUlVjN1FVRkRTRHRKUVVOSk96czdPenRQUVV0SE8wbEJRMGtzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCU1N4SlFVRnpRaXhGUVVGRkxFdEJRV0U3VVVGRGVFUXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0WlFVTjBReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzJkQ1FVTkJMRWxCUVVrN2IwSkJRMEVzVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN2FVSkJRMjVDTzJkQ1FVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRk8yOUNRVU5XTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRwUWtGRFpqdFpRVU5NTEVOQlFVTXNSVUZEUml4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOMFFpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNN1EwRkRTanRCUVc1Q1JDeHpSRUZ0UWtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY2xhc3Mgd2hpY2ggY2FuIHByb3ZpZGUgdGhlIHRpbWUuXHJcbiAqL1xyXG5jbGFzcyBUaW1lU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMTk3MC8wMS8wMS5cclxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIG1zU2luY2VFcG9jaCgpIHtcclxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRpbWVTZXJ2aWNlID0gVGltZVNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHbHRaVk5sY25acFkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmMyVnlkbWxqWlhNdmRHbHRaVk5sY25acFkyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVWQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN08wOUJSMGM3U1VGRFNTeFpRVUZaTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXp0RFFVTktPMEZCVWtRc2EwTkJVVU1pZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==