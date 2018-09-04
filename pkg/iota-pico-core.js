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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist.es6/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist.es6/error/coreError.js":
/*!*************************************!*\
  !*** ./dist.es6/error/coreError.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const jsonHelper_1 = __webpack_require__(/*! ../helpers/jsonHelper */ "./dist.es6/helpers/jsonHelper.js");
const stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "./dist.es6/helpers/stringHelper.js");
/**
 * A core implementation of an error.
 */
class CoreError extends Error {
    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message);
        this.additional = additional ? additional : {};
        this.innerError = innerError;
        this.domain = "Core";
    }
    /**
     * Check if an object could be a CoreError.
     * @param obj The object to check if it is a CoreError.
     * @returns true If the tested object is a CoreError.
     */
    static isError(obj) {
        return obj !== undefined && obj !== null && typeof obj === "object" && "message" in obj && "additional" in obj;
    }
    /**
     * Format the error to a readable version.
     * @returns Formatted version of the error.
     */
    format() {
        let out = "";
        if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
            out += `${this.domain}: `;
        }
        if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
            out += `${this.message}`;
        }
        const keys = Object.keys(this.additional);
        if (keys.length > 0) {
            if (out.length > 0) {
                out += "\n";
            }
            keys.forEach(key => {
                out += `\t${key}: ${jsonHelper_1.JsonHelper.stringify(this.additional[key])}\n`;
            });
        }
        return out;
    }
}
exports.CoreError = CoreError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0RBQW1EO0FBQ25ELDBEQUF1RDtBQUV2RDs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEtBQUs7SUFnQmhDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUFlLEVBQUUsVUFBa0MsRUFBRSxVQUFrQjtRQUMvRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQVE7UUFDMUIsT0FBTyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQztJQUNuSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTTtRQUNULElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7UUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLEdBQUcsSUFBSSxJQUFJLENBQUM7YUFDZjtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsR0FBRyxJQUFJLEtBQUssR0FBRyxLQUFLLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQWhFRCw4QkFnRUMifQ==

/***/ }),

/***/ "./dist.es6/error/networkError.js":
/*!****************************************!*\
  !*** ./dist.es6/error/networkError.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = __webpack_require__(/*! ./coreError */ "./dist.es6/error/coreError.js");
/**
 * A network implementation of an error.
 */
class NetworkError extends coreError_1.CoreError {
    /**
     * Create an instance of NetworkError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message, additional, innerError);
        this.domain = "Network";
    }
}
exports.NetworkError = NetworkError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0Vycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9yL25ldHdvcmtFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkNBQXdDO0FBRXhDOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEscUJBQVM7SUFDdkM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQWUsRUFBRSxVQUFrQyxFQUFFLFVBQWtCO1FBQy9FLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQVhELG9DQVdDIn0=

/***/ }),

/***/ "./dist.es6/error/platformError.js":
/*!*****************************************!*\
  !*** ./dist.es6/error/platformError.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = __webpack_require__(/*! ./coreError */ "./dist.es6/error/coreError.js");
/**
 * A platform implementation of an error.
 */
class PlatformError extends coreError_1.CoreError {
    /**
     * Create an instance of PlatformError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message, additional, innerError);
        this.domain = "Platform";
    }
}
exports.PlatformError = PlatformError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1FcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9wbGF0Zm9ybUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQ0FBd0M7QUFFeEM7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxxQkFBUztJQUN4Qzs7Ozs7T0FLRztJQUNILFlBQVksT0FBZSxFQUFFLFVBQWtDLEVBQUUsVUFBa0I7UUFDL0UsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBWEQsc0NBV0MifQ==

/***/ }),

/***/ "./dist.es6/factories/factoryBase.js":
/*!*******************************************!*\
  !*** ./dist.es6/factories/factoryBase.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */
class FactoryBase {
    constructor() {
        /* @internal */
        this._types = {};
    }
    /**
     * Register a new type with the factory.
     * @param name The name of the type to register.
     * @param typeConstructor The constructor for the type.
     */
    register(name, typeConstructor) {
        this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */
    unregister(name) {
        delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    exists(name) {
        return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    types() {
        return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */
    create(name, ...args) {
        const instance = this.getInstance();
        if (instance._types[name]) {
            return instance._types[name](...args);
        }
        else {
            return undefined;
        }
    }
}
exports.FactoryBase = FactoryBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeUJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7QUFDSCxNQUFzQixXQUFXO0lBQWpDO1FBQ0ksZUFBZTtRQUNFLFdBQU0sR0FBOEMsRUFBRSxDQUFDO0lBc0Q1RSxDQUFDO0lBcERHOzs7O09BSUc7SUFDSSxRQUFRLENBQUMsSUFBWSxFQUFFLGVBQXNDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSSxVQUFVLENBQUMsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLElBQVksRUFBRSxHQUFHLElBQVc7UUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0gsT0FBTyxTQUFTLENBQUM7U0FDcEI7SUFDTCxDQUFDO0NBSUo7QUF4REQsa0NBd0RDIn0=

/***/ }),

/***/ "./dist.es6/factories/networkClientFactory.js":
/*!****************************************************!*\
  !*** ./dist.es6/factories/networkClientFactory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = __webpack_require__(/*! ./factoryBase */ "./dist.es6/factories/factoryBase.js");
/**
 * Factory to generate network clients.
 */
class NetworkClientFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance() {
        if (!NetworkClientFactory._instance) {
            NetworkClientFactory._instance = new NetworkClientFactory();
        }
        return NetworkClientFactory._instance;
    }
    /* @internal */
    getInstance() {
        return NetworkClientFactory.instance();
    }
}
exports.NetworkClientFactory = NetworkClientFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0NsaWVudEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrQ0FBNEM7QUFFNUM7O0dBRUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLHlCQUEyQjtJQUlqRTs7O09BR0c7SUFDSDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7WUFDakMsb0JBQW9CLENBQUMsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztTQUMvRDtRQUNELE9BQU8sb0JBQW9CLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixPQUFPLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQTNCRCxvREEyQkMifQ==

/***/ }),

/***/ "./dist.es6/factories/platformCryptoFactory.js":
/*!*****************************************************!*\
  !*** ./dist.es6/factories/platformCryptoFactory.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = __webpack_require__(/*! ./factoryBase */ "./dist.es6/factories/factoryBase.js");
/**
 * Factory to generate rng service.
 */
class PlatformCryptoFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance() {
        if (!PlatformCryptoFactory._instance) {
            PlatformCryptoFactory._instance = new PlatformCryptoFactory();
        }
        return PlatformCryptoFactory._instance;
    }
    /* @internal */
    getInstance() {
        return PlatformCryptoFactory.instance();
    }
}
exports.PlatformCryptoFactory = PlatformCryptoFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1DcnlwdG9GYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLCtDQUE0QztBQUU1Qzs7R0FFRztBQUNILE1BQWEscUJBQXNCLFNBQVEseUJBQTRCO0lBSW5FOzs7T0FHRztJQUNIO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLFFBQVE7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRTtZQUNsQyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUVELGVBQWU7SUFDTCxXQUFXO1FBQ2pCLE9BQU8scUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUNKO0FBM0JELHNEQTJCQyJ9

/***/ }),

/***/ "./dist.es6/factories/rngServiceFactory.js":
/*!*************************************************!*\
  !*** ./dist.es6/factories/rngServiceFactory.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = __webpack_require__(/*! ./factoryBase */ "./dist.es6/factories/factoryBase.js");
/**
 * Factory to generate rng service.
 */
class RngServiceFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance() {
        if (!RngServiceFactory._instance) {
            RngServiceFactory._instance = new RngServiceFactory();
        }
        return RngServiceFactory._instance;
    }
    /* @internal */
    getInstance() {
        return RngServiceFactory.instance();
    }
}
exports.RngServiceFactory = RngServiceFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm5nU2VydmljZUZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL3JuZ1NlcnZpY2VGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrQ0FBNEM7QUFFNUM7O0dBRUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLHlCQUF3QjtJQUkzRDs7O09BR0c7SUFDSDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztTQUN6RDtRQUNELE9BQU8saUJBQWlCLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixPQUFPLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQTNCRCw4Q0EyQkMifQ==

/***/ }),

/***/ "./dist.es6/helpers/arrayHelper.js":
/*!*****************************************!*\
  !*** ./dist.es6/helpers/arrayHelper.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "./dist.es6/helpers/objectHelper.js");
/**
 * Array helper methods.
 */
class ArrayHelper {
    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    static isArray(value) {
        return value === null || value === undefined
            ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */
    static isEmpty(value) {
        return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */
    static isTyped(value, type) {
        return !ArrayHelper.isEmpty(value) &&
            !value.includes(undefined) &&
            !value.includes(null) &&
            value.every((a) => objectHelper_1.ObjectHelper.isType(a, type));
    }
}
exports.ArrayHelper = ArrayHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXlIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9hcnJheUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaURBQThDO0FBRTlDOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0lBQ3BCOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQVU7UUFDNUIsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTO1lBQ3hDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQVU7UUFDNUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFVLEVBQUUsSUFBYztRQUM1QyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FFSjtBQWpDRCxrQ0FpQ0MifQ==

/***/ }),

/***/ "./dist.es6/helpers/errorHelper.js":
/*!*****************************************!*\
  !*** ./dist.es6/helpers/errorHelper.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = __webpack_require__(/*! ../error/coreError */ "./dist.es6/error/coreError.js");
const jsonHelper_1 = __webpack_require__(/*! ./jsonHelper */ "./dist.es6/helpers/jsonHelper.js");
const objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "./dist.es6/helpers/objectHelper.js");
const stringHelper_1 = __webpack_require__(/*! ./stringHelper */ "./dist.es6/helpers/stringHelper.js");
/**
 * Handle errors as gracefully as possible.
 */
class ErrorHelper {
    /**
     * Format an error object into something readable.
     * @param err The object to format.
     * @param includeStack Include the stack trace if there is one.
     * @returns Formatted version of the error object.
     */
    static format(err, includeStack) {
        if (err === null || err === undefined) {
            return "unknown error";
        }
        else if (coreError_1.CoreError.isError(err)) {
            let ret = err.format();
            if (includeStack && err.stack) {
                ret += `\nStack Trace`;
                const parts = err.stack.split("\n");
                parts.shift();
                ret += `\n${parts.join("\n")}`;
            }
            if (!objectHelper_1.ObjectHelper.isEmpty(err.innerError)) {
                if (includeStack && !objectHelper_1.ObjectHelper.isEmpty(err.innerError.stack)) {
                    ret += `\n\n-----------------------------------------------`;
                    ret += `\nInner Stack Trace\n`;
                    ret += err.innerError.stack;
                }
                else {
                    ret += `\nInner Error: ${err.innerError.message}\n`;
                }
            }
            return ret;
        }
        else if (err instanceof Error) {
            let ret = "";
            if (includeStack && !objectHelper_1.ObjectHelper.isEmpty(err.stack)) {
                ret += err.stack;
            }
            else {
                ret += err.message;
            }
            return ret;
        }
        else {
            if (stringHelper_1.StringHelper.isString(err)) {
                return err;
            }
            else {
                return jsonHelper_1.JsonHelper.stringify(err, undefined, "\t");
            }
        }
    }
}
exports.ErrorHelper = ErrorHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9lcnJvckhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLDZDQUEwQztBQUMxQyxpREFBOEM7QUFDOUMsaURBQThDO0FBRTlDOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0lBQ3BCOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFRLEVBQUUsWUFBcUI7UUFDaEQsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkMsT0FBTyxlQUFlLENBQUM7U0FDMUI7YUFBTSxJQUFJLHFCQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixJQUFJLFlBQVksSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO2dCQUMzQixHQUFHLElBQUksZUFBZSxDQUFDO2dCQUN2QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNkLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNsQztZQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksWUFBWSxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDN0QsR0FBRyxJQUFJLHFEQUFxRCxDQUFDO29CQUM3RCxHQUFHLElBQUksdUJBQXVCLENBQUM7b0JBQy9CLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0gsR0FBRyxJQUFJLGtCQUFrQixHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDO2lCQUN2RDthQUNKO1lBRUQsT0FBTyxHQUFHLENBQUM7U0FDZDthQUFNLElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtZQUM3QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLFlBQVksSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbEQsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0gsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDdEI7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNkO2FBQU07WUFDSCxJQUFJLDJCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixPQUFPLEdBQUcsQ0FBQzthQUNkO2lCQUFNO2dCQUNILE9BQU8sdUJBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNyRDtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBOUNELGtDQThDQyJ9

/***/ }),

/***/ "./dist.es6/helpers/jsonHelper.js":
/*!****************************************!*\
  !*** ./dist.es6/helpers/jsonHelper.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Json helper methods.
 */
class JsonHelper {
    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    static stringify(value, replacer, space) {
        // eliminates any recursion in the stringify
        const cache = [];
        const recusionReplacer = (key, replaceValue) => {
            if (typeof replaceValue === "object" && value !== null && replaceValue !== undefined) {
                if (cache.indexOf(replaceValue) !== -1) {
                    // circular reference found, discard key
                    return;
                }
                else {
                    cache.push(replaceValue);
                }
            }
            return replacer ? replacer(key, replaceValue) : replaceValue;
        };
        return JSON.stringify(value, recusionReplacer, space);
    }
}
exports.JsonHelper = JsonHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbkhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0lBQ25COzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBVSxFQUFFLFFBQTJDLEVBQUUsS0FBdUI7UUFDcEcsNENBQTRDO1FBQzVDLE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztRQUV4QixNQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBVyxFQUFFLFlBQWlCLEVBQUUsRUFBRTtZQUN4RCxJQUFJLE9BQU8sWUFBWSxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ2xGLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDcEMsd0NBQXdDO29CQUN4QyxPQUFPO2lCQUNWO3FCQUFNO29CQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7WUFFRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pFLENBQUMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNKO0FBM0JELGdDQTJCQyJ9

/***/ }),

/***/ "./dist.es6/helpers/numberHelper.js":
/*!******************************************!*\
  !*** ./dist.es6/helpers/numberHelper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Number helper methods.
 */
class NumberHelper {
    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    static isInteger(value) {
        return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */
    static isNumber(value) {
        return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */
    static isFloatString(value) {
        return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */
    static isIntegerString(value) {
        return /^-?\d+$/.test(value);
    }
}
exports.NumberHelper = NumberHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVySGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILE1BQWEsWUFBWTtJQUNyQjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFVO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBVTtRQUM3QixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEksQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWE7UUFDckMsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFhO1FBQ3ZDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFwQ0Qsb0NBb0NDIn0=

/***/ }),

/***/ "./dist.es6/helpers/objectHelper.js":
/*!******************************************!*\
  !*** ./dist.es6/helpers/objectHelper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Object helper methods.
 */
class ObjectHelper {
    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    static isEmpty(value) {
        return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */
    static isObject(value) {
        return value === null || value === undefined
            ? false : typeof (value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param typeConstructor A callback method which returns an instance of the object.
     * @returns True if the value is an object of the specified type.
     */
    static isType(value, typeConstructor) {
        const valueClassName = ObjectHelper.getClassName(value);
        return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */
    static getClassName(object) {
        if (object === null || object === undefined) {
            return undefined;
        }
        else {
            const constructor = typeof object === "function" ? object.toString() : object.constructor.toString();
            const results = constructor.match(/\w+/g);
            return (results && results.length > 1) ? results[1] : undefined;
        }
    }
}
exports.ObjectHelper = ObjectHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0SGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILE1BQWEsWUFBWTtJQUNyQjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFVO1FBQzVCLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFVO1FBQzdCLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUztZQUN4QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQVUsRUFBRSxlQUF5QjtRQUN0RCxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELE9BQU8sY0FBYyxLQUFLLFNBQVMsSUFBSSxjQUFjLEtBQUssWUFBWSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBVztRQUNsQyxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN6QyxPQUFPLFNBQVMsQ0FBQztTQUNwQjthQUFNO1lBQ0gsTUFBTSxXQUFXLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckcsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1NBQ25FO0lBQ0wsQ0FBQztDQUNKO0FBN0NELG9DQTZDQyJ9

/***/ }),

/***/ "./dist.es6/helpers/stringHelper.js":
/*!******************************************!*\
  !*** ./dist.es6/helpers/stringHelper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * String helper methods.
 */
class StringHelper {
    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    static isString(value) {
        return value === null || value === undefined
            ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */
    static isEmpty(value) {
        return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */
    static isASCII(value) {
        return value === null || value === undefined
            ? false : /^[\x00-\x7F]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */
    static encodeNonASCII(value) {
        return StringHelper.isString(value) ? value.replace(/[\u0080-\uFFFF]/g, (chr) => `\\u${(`0000${chr.charCodeAt(0).toString(16)}`).substr(-4)}`) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */
    static decodeNonASCII(value) {
        return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, (match, grp) => String.fromCharCode(parseInt(grp, 16))) : undefined;
    }
}
exports.StringHelper = StringHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILE1BQWEsWUFBWTtJQUNyQjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFVO1FBQzdCLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUztZQUN4QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssaUJBQWlCLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQVU7UUFDNUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWE7UUFDL0IsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTO1lBQ3hDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBYTtRQUN0QyxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBYTtRQUN0QyxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEosQ0FBQztDQUNKO0FBL0NELG9DQStDQyJ9

/***/ }),

/***/ "./dist.es6/index.js":
/*!***************************!*\
  !*** ./dist.es6/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Combined index of all the modules.
 */
tslib_1.__exportStar(__webpack_require__(/*! ./error/coreError */ "./dist.es6/error/coreError.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./error/networkError */ "./dist.es6/error/networkError.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./error/platformError */ "./dist.es6/error/platformError.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./factories/factoryBase */ "./dist.es6/factories/factoryBase.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./factories/networkClientFactory */ "./dist.es6/factories/networkClientFactory.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./factories/platformCryptoFactory */ "./dist.es6/factories/platformCryptoFactory.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./factories/rngServiceFactory */ "./dist.es6/factories/rngServiceFactory.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./helpers/arrayHelper */ "./dist.es6/helpers/arrayHelper.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./helpers/errorHelper */ "./dist.es6/helpers/errorHelper.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./helpers/jsonHelper */ "./dist.es6/helpers/jsonHelper.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./helpers/numberHelper */ "./dist.es6/helpers/numberHelper.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./helpers/stringHelper */ "./dist.es6/helpers/stringHelper.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./helpers/objectHelper */ "./dist.es6/helpers/objectHelper.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./loggers/consoleLogger */ "./dist.es6/loggers/consoleLogger.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./loggers/nullLogger */ "./dist.es6/loggers/nullLogger.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./network/networkEndPoint */ "./dist.es6/network/networkEndPoint.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./services/backgroundTaskService */ "./dist.es6/services/backgroundTaskService.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./services/timeService */ "./dist.es6/services/timeService.js"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILDREQUFrQztBQUNsQywrREFBcUM7QUFDckMsZ0VBQXNDO0FBQ3RDLGtFQUF3QztBQUN4QywyRUFBaUQ7QUFDakQsNEVBQWtEO0FBQ2xELHdFQUE4QztBQUM5QyxnRUFBc0M7QUFDdEMsZ0VBQXNDO0FBQ3RDLCtEQUFxQztBQUNyQyxpRUFBdUM7QUFDdkMsaUVBQXVDO0FBQ3ZDLGlFQUF1QztBQVN2QyxrRUFBd0M7QUFDeEMsK0RBQXFDO0FBQ3JDLG9FQUEwQztBQUMxQywyRUFBaUQ7QUFDakQsaUVBQXVDIn0=

/***/ }),

/***/ "./dist.es6/loggers/consoleLogger.js":
/*!*******************************************!*\
  !*** ./dist.es6/loggers/consoleLogger.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = __webpack_require__(/*! ../helpers/arrayHelper */ "./dist.es6/helpers/arrayHelper.js");
const errorHelper_1 = __webpack_require__(/*! ../helpers/errorHelper */ "./dist.es6/helpers/errorHelper.js");
const objectHelper_1 = __webpack_require__(/*! ../helpers/objectHelper */ "./dist.es6/helpers/objectHelper.js");
const stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "./dist.es6/helpers/stringHelper.js");
/**
 * Implementation of ILogger which sends to the this._loggingObject.
 */
// tslint:disable:no-console
class ConsoleLogger {
    /**
     * Create and instance of the console logger.
     * @param loggingObject The object to send all the logging to.
     * @returns A new instance of ConsoleLogger.
     */
    constructor(loggingObject) {
        this._loggingObject = loggingObject || console;
    }
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    banner(message, ...args) {
        this._loggingObject.log("=".repeat(80));
        this._loggingObject.log(message);
        this.logArgs(this._loggingObject.log, args);
        this._loggingObject.log("=".repeat(80));
    }
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    log(message, ...args) {
        this._loggingObject.log(message);
        this.logArgs(this._loggingObject.log, args);
    }
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    info(message, ...args) {
        this._loggingObject.info(message);
        this.logArgs(this._loggingObject.info, args);
    }
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    warning(message, ...args) {
        this._loggingObject.warn(message);
        this.logArgs(this._loggingObject.warn, args);
    }
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    error(message, err, ...args) {
        this._loggingObject.error(message);
        if (!objectHelper_1.ObjectHelper.isEmpty(err)) {
            const lines = errorHelper_1.ErrorHelper.format(err, true).split("\n");
            lines.forEach(line => {
                this._loggingObject.error(`\t${line}`);
            });
        }
        this.logArgs(this._loggingObject.error, args);
    }
    /* @internal */
    logArgs(logMethod, args) {
        if (!arrayHelper_1.ArrayHelper.isEmpty(args)) {
            const indent = "\t";
            let output = "";
            args.forEach((arg, index) => {
                output += this.createItem(indent, "", arg);
                if (index < args.length - 1) {
                    output += `${indent}${"-".repeat(70)}\n`;
                }
            });
            logMethod(output);
        }
    }
    /* @internal */
    createItem(indent, key, item, singleItemLineBreak = "\n") {
        let output = "";
        if (arrayHelper_1.ArrayHelper.isArray(item)) {
            const newIndent = `${indent}\t`;
            if (stringHelper_1.StringHelper.isEmpty(key)) {
                output += `${indent}[\n`;
            }
            else {
                output += `${indent}${key}: [\n`;
            }
            item.forEach((element, index) => {
                output += this.createItem(newIndent, "", element, `${index < item.length - 1 ? "," : ""}\n`);
            });
            output += `${indent}]\n`;
        }
        else if (objectHelper_1.ObjectHelper.isObject(item)) {
            const obString = item.toString();
            if (obString === "[object Object]") {
                const newIndent = `${indent}\t`;
                if (stringHelper_1.StringHelper.isEmpty(key)) {
                    output += `${indent}{\n`;
                }
                else {
                    output += `${indent}${key}: {\n`;
                }
                const keys = Object.keys(item);
                keys.forEach((itemKey, index) => {
                    output += this.createItem(newIndent, itemKey, item[itemKey], `${index < keys.length - 1 ? "," : ""}\n`);
                });
                output += `${indent}}\n`;
            }
            else {
                output += this.createItem(indent, key, obString.replace(/\n/g, `\n${indent}`), singleItemLineBreak);
            }
        }
        else {
            if (stringHelper_1.StringHelper.isEmpty(key)) {
                output += `${indent}${objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()}${singleItemLineBreak}`;
            }
            else {
                output += `${indent}${key}: ${objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()}${singleItemLineBreak}`;
            }
        }
        return output;
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXJzL2NvbnNvbGVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdEQUFxRDtBQUNyRCx3REFBcUQ7QUFDckQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUd2RDs7R0FFRztBQUNILDRCQUE0QjtBQUM1QixNQUFhLGFBQWE7SUFJdEI7Ozs7T0FJRztJQUNILFlBQVksYUFBdUI7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLElBQUksT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVc7UUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVc7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUksQ0FBQyxPQUFlLEVBQUUsR0FBRyxJQUFXO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxD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

/***/ }),

/***/ "./dist.es6/loggers/nullLogger.js":
/*!****************************************!*\
  !*** ./dist.es6/loggers/nullLogger.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of ILogger which is silent.
 */
class NullLogger {
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    banner(message, ...args) {
    }
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    log(message, ...args) {
    }
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    info(message, ...args) {
    }
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    warning(message, ...args) {
    }
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    error(message, err, ...args) {
    }
}
exports.NullLogger = NullLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVsbExvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXJzL251bGxMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0lBQ25COzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEdBQUcsQ0FBQyxPQUFlLEVBQUUsR0FBRyxJQUFXO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVc7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxPQUFPLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVztJQUM5QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsT0FBZSxFQUFFLEdBQVMsRUFBRSxHQUFHLElBQVc7SUFDdkQsQ0FBQztDQUNKO0FBekNELGdDQXlDQyJ9

/***/ }),

/***/ "./dist.es6/network/networkEndPoint.js":
/*!*********************************************!*\
  !*** ./dist.es6/network/networkEndPoint.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const networkError_1 = __webpack_require__(/*! ../error/networkError */ "./dist.es6/error/networkError.js");
const numberHelper_1 = __webpack_require__(/*! ../helpers/numberHelper */ "./dist.es6/helpers/numberHelper.js");
const objectHelper_1 = __webpack_require__(/*! ../helpers/objectHelper */ "./dist.es6/helpers/objectHelper.js");
const stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "./dist.es6/helpers/stringHelper.js");
/**
 * Default implementation of a network endpoint.
 */
class NetworkEndPoint {
    /**
     * Create an instance of NetworkEndPoint.
     * @param protocol The protocol to access the endpoint with.
     * @param host The host name or ip of the endpoint.
     * @param port The port of the endpoint.
     * @param rootPath The path to the endpoint.
     */
    constructor(protocol, host, port, rootPath) {
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
    getProtocol() {
        return this._protocol;
    }
    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */
    getHost() {
        return this._host;
    }
    /**
     * The path to the endpoint.
     * @returns The path.
     */
    getRootPath() {
        return this._rootPath;
    }
    /**
     * The port of the endpoint.
     * @returns The port.
     */
    getPort() {
        return this._port;
    }
    /**
     * The complete uri.
     * @returns The uri.
     */
    getUri() {
        let uri = `${this._protocol}://${this._host}:${this._port}`;
        if (this._rootPath.length > 0) {
            uri += `/${this._rootPath}`;
        }
        return uri;
    }
}
exports.NetworkEndPoint = NetworkEndPoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0VuZFBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL25ldHdvcmsvbmV0d29ya0VuZFBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3REFBcUQ7QUFDckQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUN2RCwwREFBdUQ7QUFJdkQ7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFVeEI7Ozs7OztPQU1HO0lBQ0gsWUFBWSxRQUF5QixFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsUUFBaUI7UUFDaEYsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNsRSxNQUFNLElBQUksMkJBQVksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLE1BQU0sSUFBSSwyQkFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUM1QyxNQUFNLElBQUksMkJBQVksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckUsTUFBTSxJQUFJLDJCQUFZLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTTtRQUNULElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsTUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzQixHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDL0I7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQWpGRCwwQ0FpRkMifQ==

/***/ }),

/***/ "./dist.es6/services/backgroundTaskService.js":
/*!****************************************************!*\
  !*** ./dist.es6/services/backgroundTaskService.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Default implementation of background task service.
 */
class BackgroundTaskService {
    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
     * @returns The result of the background task.
     */
    create(task, delay) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        resolve(task());
                    }
                    catch (err) {
                        reject(err);
                    }
                }, delay);
            });
        });
    }
}
exports.BackgroundTaskService = BackgroundTaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZFRhc2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL2JhY2tncm91bmRUYXNrU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztHQUVHO0FBQ0gsTUFBYSxxQkFBcUI7SUFDOUI7Ozs7O09BS0c7SUFDVSxNQUFNLENBQUksSUFBc0IsRUFBRSxLQUFhOztZQUN4RCxPQUFPLElBQUksT0FBTyxDQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN0QyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNBLElBQUk7d0JBQ0EsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7cUJBQ25CO29CQUFDLE9BQU8sR0FBRyxFQUFFO3dCQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDZjtnQkFDTCxDQUFDLEVBQ0YsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Q0FDSjtBQW5CRCxzREFtQkMifQ==

/***/ }),

/***/ "./dist.es6/services/timeService.js":
/*!******************************************!*\
  !*** ./dist.es6/services/timeService.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a class which can provide the time.
 */
class TimeService {
    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    msSinceEpoch() {
        return Date.now();
    }
}
exports.TimeService = TimeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0lBQ3BCOzs7T0FHRztJQUNJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0o7QUFSRCxrQ0FRQyJ9

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi9kaXN0LmVzNi9lcnJvci9jb3JlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4vZGlzdC5lczYvZXJyb3IvbmV0d29ya0Vycm9yLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L2Vycm9yL3BsYXRmb3JtRXJyb3IuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4vZGlzdC5lczYvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L2ZhY3Rvcmllcy9uZXR3b3JrQ2xpZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi9kaXN0LmVzNi9mYWN0b3JpZXMvcGxhdGZvcm1DcnlwdG9GYWN0b3J5LmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi9kaXN0LmVzNi9oZWxwZXJzL2FycmF5SGVscGVyLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L2hlbHBlcnMvZXJyb3JIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4vZGlzdC5lczYvaGVscGVycy9qc29uSGVscGVyLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L2hlbHBlcnMvbnVtYmVySGVscGVyLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L2hlbHBlcnMvb2JqZWN0SGVscGVyLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L2hlbHBlcnMvc3RyaW5nSGVscGVyLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L2xvZ2dlcnMvY29uc29sZUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NvcmUvLi9kaXN0LmVzNi9sb2dnZXJzL251bGxMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4vZGlzdC5lczYvbmV0d29yay9uZXR3b3JrRW5kUG9pbnQuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Db3JlLy4vZGlzdC5lczYvc2VydmljZXMvYmFja2dyb3VuZFRhc2tTZXJ2aWNlLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL2Rpc3QuZXM2L3NlcnZpY2VzL3RpbWVTZXJ2aWNlLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ29yZS8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw4Q0FBOEMsY0FBYztBQUM1RCxxQkFBcUIsbUJBQU8sQ0FBQywrREFBdUI7QUFDcEQsdUJBQXVCLG1CQUFPLENBQUMsbUVBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLElBQUksSUFBSSx3REFBd0Q7QUFDNUYsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMnBEOzs7Ozs7Ozs7OztBQ3BEM0MsOENBQThDLGNBQWM7QUFDNUQsb0JBQW9CLG1CQUFPLENBQUMsa0RBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK2M7Ozs7Ozs7Ozs7O0FDbEIzQyw4Q0FBOEMsY0FBYztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQyxrREFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtZDs7Ozs7Ozs7Ozs7QUNsQjNDLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywydEM7Ozs7Ozs7Ozs7O0FDMUQzQyw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQywwREFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdXFCOzs7Ozs7Ozs7OztBQzdCM0MsOENBQThDLGNBQWM7QUFDNUQsc0JBQXNCLG1CQUFPLENBQUMsMERBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVxQjs7Ozs7Ozs7Ozs7QUM3QjNDLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLDBEQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrcEI7Ozs7Ozs7Ozs7O0FDN0IzQyw4Q0FBOEMsY0FBYztBQUM1RCx1QkFBdUIsbUJBQU8sQ0FBQywwREFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywraEM7Ozs7Ozs7Ozs7O0FDckMzQyw4Q0FBOEMsY0FBYztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQyx5REFBb0I7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMsc0RBQWM7QUFDM0MsdUJBQXVCLG1CQUFPLENBQUMsMERBQWdCO0FBQy9DLHVCQUF1QixtQkFBTyxDQUFDLDBEQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHVCQUF1QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrNUQ7Ozs7Ozs7Ozs7O0FDNUQzQyw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbStCOzs7Ozs7Ozs7OztBQy9CM0MsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtL0I7Ozs7Ozs7Ozs7O0FDdkMzQyw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbStDOzs7Ozs7Ozs7OztBQ2pEM0MsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLFFBQVEsK0JBQStCLGNBQWM7QUFDcEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbXBEOzs7Ozs7Ozs7OztBQ2pEM0MsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsZ0RBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsd0RBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLDhEQUFzQjtBQUNuRCxxQkFBcUIsbUJBQU8sQ0FBQyxnRUFBdUI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsb0VBQXlCO0FBQ3RELHFCQUFxQixtQkFBTyxDQUFDLHNGQUFrQztBQUMvRCxxQkFBcUIsbUJBQU8sQ0FBQyx3RkFBbUM7QUFDaEUscUJBQXFCLG1CQUFPLENBQUMsZ0ZBQStCO0FBQzVELHFCQUFxQixtQkFBTyxDQUFDLGdFQUF1QjtBQUNwRCxxQkFBcUIsbUJBQU8sQ0FBQyxnRUFBdUI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsOERBQXNCO0FBQ25ELHFCQUFxQixtQkFBTyxDQUFDLGtFQUF3QjtBQUNyRCxxQkFBcUIsbUJBQU8sQ0FBQyxrRUFBd0I7QUFDckQscUJBQXFCLG1CQUFPLENBQUMsa0VBQXdCO0FBQ3JELHFCQUFxQixtQkFBTyxDQUFDLG9FQUF5QjtBQUN0RCxxQkFBcUIsbUJBQU8sQ0FBQyw4REFBc0I7QUFDbkQscUJBQXFCLG1CQUFPLENBQUMsd0VBQTJCO0FBQ3hELHFCQUFxQixtQkFBTyxDQUFDLHNGQUFrQztBQUMvRCxxQkFBcUIsbUJBQU8sQ0FBQyxrRUFBd0I7QUFDckQsMkNBQTJDLHVkOzs7Ozs7Ozs7OztBQ3ZCM0MsOENBQThDLGNBQWM7QUFDNUQsc0JBQXNCLG1CQUFPLENBQUMsaUVBQXdCO0FBQ3RELHNCQUFzQixtQkFBTyxDQUFDLGlFQUF3QjtBQUN0RCx1QkFBdUIsbUJBQU8sQ0FBQyxtRUFBeUI7QUFDeEQsdUJBQXVCLG1CQUFPLENBQUMsbUVBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUsZUFBZTtBQUN6RDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBLDZCQUE2QixPQUFPLEVBQUUsSUFBSTtBQUMxQztBQUNBO0FBQ0EscUVBQXFFLG1DQUFtQztBQUN4RyxhQUFhO0FBQ2IseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLElBQUksR0FBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsbUNBQW1DO0FBQ3ZILGlCQUFpQjtBQUNqQiw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0Esb0ZBQW9GLE9BQU87QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTyxFQUFFLG1FQUFtRSxFQUFFLG9CQUFvQjtBQUMvSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU8sRUFBRSxJQUFJLElBQUksbUVBQW1FLEVBQUUsb0JBQW9CO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtcks7Ozs7Ozs7Ozs7O0FDdEkzQyw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK25COzs7Ozs7Ozs7OztBQzNDM0MsOENBQThDLGNBQWM7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMsK0RBQXVCO0FBQ3RELHVCQUF1QixtQkFBTyxDQUFDLG1FQUF5QjtBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQyxtRUFBeUI7QUFDeEQsdUJBQXVCLG1CQUFPLENBQUMsbUVBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSxLQUFLLFdBQVcsR0FBRyxXQUFXO0FBQ2xFO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywybUU7Ozs7Ozs7Ozs7O0FDM0UzQyw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxnREFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVxQjs7Ozs7Ozs7Ozs7QUM1QjNDLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7Ozs7Ozs7QUNkM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTs7QUFFTztBQUNQO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVPO0FBQ1A7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7O0FBRU87QUFDUCxtQ0FBbUMsb0NBQW9DO0FBQ3ZFOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQixzRkFBc0YsYUFBYSxFQUFFO0FBQ3RILHNCQUFzQixnQ0FBZ0MscUNBQXFDLDBDQUEwQyxFQUFFLEVBQUUsR0FBRztBQUM1SSwyQkFBMkIsTUFBTSxlQUFlLEVBQUUsWUFBWSxvQkFBb0IsRUFBRTtBQUNwRixzQkFBc0Isb0dBQW9HO0FBQzFILDZCQUE2Qix1QkFBdUI7QUFDcEQsNEJBQTRCLHdCQUF3QjtBQUNwRCwyQkFBMkIseURBQXlEO0FBQ3BGOztBQUVPO0FBQ1A7QUFDQSxpQkFBaUIsNENBQTRDLFNBQVMsRUFBRSxxREFBcUQsYUFBYSxFQUFFO0FBQzVJLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLGdEQUFnRCxnQkFBZ0IsRUFBRSxLQUFLO0FBQ2pKOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDJHQUEyRyxzRkFBc0YsYUFBYSxFQUFFO0FBQ2hOLHNCQUFzQiw4QkFBOEIsZ0RBQWdELHVEQUF1RCxFQUFFLEVBQUUsR0FBRztBQUNsSyw0Q0FBNEMsc0NBQXNDLFVBQVUsb0JBQW9CLEVBQUUsRUFBRSxVQUFVO0FBQzlIOztBQUVPO0FBQ1AsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNENBQTRDO0FBQzVDIiwiZmlsZSI6ImlvdGEtcGljby1jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAaW90YS1waWNvL2NvcmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9jb3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvQ29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QuZXM2L2luZGV4LmpzXCIpO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBqc29uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9qc29uSGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEEgY29yZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENvcmVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbCA9IGFkZGl0aW9uYWwgPyBhZGRpdGlvbmFsIDoge307XHJcbiAgICAgICAgdGhpcy5pbm5lckVycm9yID0gaW5uZXJFcnJvcjtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ29yZVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhbiBvYmplY3QgY291bGQgYmUgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgaWYgaXQgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIElmIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFcnJvcihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgXCJtZXNzYWdlXCIgaW4gb2JqICYmIFwiYWRkaXRpb25hbFwiIGluIG9iajtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHRoZSBlcnJvciB0byBhIHJlYWRhYmxlIHZlcnNpb24uXHJcbiAgICAgKiBAcmV0dXJucyBGb3JtYXR0ZWQgdmVyc2lvbiBvZiB0aGUgZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdCgpIHtcclxuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMuZG9tYWluKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5kb21haW59OiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMubWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5hZGRpdGlvbmFsKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gYFxcdCR7a2V5fTogJHtqc29uSGVscGVyXzEuSnNvbkhlbHBlci5zdHJpbmdpZnkodGhpcy5hZGRpdGlvbmFsW2tleV0pfVxcbmA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29yZUVycm9yID0gQ29yZUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl5WlVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJOdmNtVkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYzBSQlFXMUVPMEZCUTI1RUxEQkVRVUYxUkR0QlFVVjJSRHM3UjBGRlJ6dEJRVU5JTEUxQlFXRXNVMEZCVlN4VFFVRlJMRXRCUVVzN1NVRm5RbWhET3pzN096dFBRVXRITzBsQlEwZ3NXVUZCV1N4UFFVRmxMRVZCUVVVc1ZVRkJhME1zUlVGQlJTeFZRVUZyUWp0UlFVTXZSU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEWml4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGREwwTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRE4wSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVkU3VVVGRE1VSXNUMEZCVHl4SFFVRkhMRXRCUVVzc1UwRkJVeXhKUVVGSkxFZEJRVWNzUzBGQlN5eEpRVUZKTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hKUVVGSkxGTkJRVk1zU1VGQlNTeEhRVUZITEVsQlFVa3NXVUZCV1N4SlFVRkpMRWRCUVVjc1EwRkJRenRKUVVOdVNDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEVsQlFVa3NSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWaUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdXVUZEY0VNc1IwRkJSeXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRPMU5CUXpkQ08xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0WlFVTnlReXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1UwRkROVUk3VVVGRlJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTJwQ0xFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMmhDTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNN1lVRkRaanRaUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMllzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSMEZCUnl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzWkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMDQ3VVVGRlJDeFBRVUZQTEVkQlFVY3NRMEZCUXp0SlFVTm1MRU5CUVVNN1EwRkRTanRCUVdoRlJDdzRRa0ZuUlVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIi4vY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBuZXR3b3JrIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgTmV0d29ya0Vycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIE5ldHdvcmtFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJOZXR3b3JrXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OZXR3b3JrRXJyb3IgPSBOZXR3b3JrRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJtVjBkMjl5YTBWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDI1bGRIZHZjbXRGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01rTkJRWGRETzBGQlJYaERPenRIUVVWSE8wRkJRMGdzVFVGQllTeFpRVUZoTEZOQlFWRXNjVUpCUVZNN1NVRkRka003T3pzN08wOUJTMGM3U1VGRFNDeFpRVUZaTEU5QlFXVXNSVUZCUlN4VlFVRnJReXhGUVVGRkxGVkJRV3RDTzFGQlF5OUZMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTNaRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03UTBGRFNqdEJRVmhFTEc5RFFWZERJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCIuL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgcGxhdGZvcm0gaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBQbGF0Zm9ybUVycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFBsYXRmb3JtRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiUGxhdGZvcm1cIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYXRmb3JtRXJyb3IgPSBQbGF0Zm9ybUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR3hoZEdadmNtMUZjbkp2Y2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlsY25KdmNpOXdiR0YwWm05eWJVVnljbTl5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3d5UTBGQmQwTTdRVUZGZUVNN08wZEJSVWM3UVVGRFNDeE5RVUZoTEdGQlFXTXNVMEZCVVN4eFFrRkJVenRKUVVONFF6czdPenM3VDBGTFJ6dEpRVU5JTEZsQlFWa3NUMEZCWlN4RlFVRkZMRlZCUVd0RExFVkJRVVVzVlVGQmEwSTdVVUZETDBVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkROMElzUTBGQlF6dERRVU5LTzBGQldFUXNjME5CVjBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHR5cGVzLlxyXG4gKiBAdHlwZXBhcmFtIFQgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIG9iamVjdCB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICovXHJcbmNsYXNzIEZhY3RvcnlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgICAgIHRoaXMuX3R5cGVzID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHR5cGUgd2l0aCB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHJlZ2lzdGVyLlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLlxyXG4gICAgICovXHJcbiAgICByZWdpc3RlcihuYW1lLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdID0gdHlwZUNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIGEgdHlwZSBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gdW5yZWdpc3Rlci5cclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIGZhY3RvcnkgY29udGFpbiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICBleGlzdHMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIExpc3QgdGhlIHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgdHlwZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBjcmVhdGUuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBbnkgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgICAqIEByZXR1cm5zIEEgbmV3IGluc3RhbmNlIG9mIHRoZSB0eXBlIGlmIGl0IGV4aXN0cywgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGUobmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5fdHlwZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLl90eXBlc1tuYW1lXSguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmFjdG9yeUJhc2UgPSBGYWN0b3J5QmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm1GamRHOXllVUpoYzJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Wm1GamRHOXlhV1Z6TDJaaFkzUnZjbmxDWVhObExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNDeE5RVUZ6UWl4WFFVRlhPMGxCUVdwRE8xRkJRMGtzWlVGQlpUdFJRVU5GTEZkQlFVMHNSMEZCT0VNc1JVRkJSU3hEUVVGRE8wbEJjMFExUlN4RFFVRkRPMGxCY0VSSE96czdPMDlCU1VjN1NVRkRTU3hSUVVGUkxFTkJRVU1zU1VGQldTeEZRVUZGTEdWQlFYTkRPMUZCUTJoRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzWlVGQlpTeERRVUZETzBsQlEzUkVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVNeFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zU1VGQldUdFJRVU4wUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRE8wbEJRM3BFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVmtzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEZEVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMlFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZRenRoUVVGTk8xbEJRMGdzVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEY0VJN1NVRkRUQ3hEUVVGRE8wTkJTVW83UVVGNFJFUXNhME5CZDBSREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiLi9mYWN0b3J5QmFzZVwiKTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgbmV0d29yayBjbGllbnRzLlxyXG4gKi9cclxuY2xhc3MgTmV0d29ya0NsaWVudEZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIU5ldHdvcmtDbGllbnRGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBOZXR3b3JrQ2xpZW50RmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgTmV0d29ya0NsaWVudEZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE5ldHdvcmtDbGllbnRGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIE5ldHdvcmtDbGllbnRGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OZXR3b3JrQ2xpZW50RmFjdG9yeSA9IE5ldHdvcmtDbGllbnRGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libVYwZDI5eWEwTnNhV1Z1ZEVaaFkzUnZjbmt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMMjVsZEhkdmNtdERiR2xsYm5SR1lXTjBiM0o1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkRRU3dyUTBGQk5FTTdRVUZGTlVNN08wZEJSVWM3UVVGRFNDeE5RVUZoTEc5Q1FVRnhRaXhUUVVGUkxIbENRVUV5UWp0SlFVbHFSVHM3TzA5QlIwYzdTVUZEU0R0UlFVTkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTzFGQlEyeENMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkRha01zYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzYjBKQlFXOUNMRVZCUVVVc1EwRkJRenRUUVVNdlJEdFJRVU5FTEU5QlFVOHNiMEpCUVc5Q0xFTkJRVU1zVTBGQlV5eERRVUZETzBsQlF6RkRMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMHdzVjBGQlZ6dFJRVU5xUWl4UFFVRlBMRzlDUVVGdlFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXpORExFTkJRVU03UTBGRFNqdEJRVE5DUkN4dlJFRXlRa01pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCIuL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBybmcgc2VydmljZS5cclxuICovXHJcbmNsYXNzIFBsYXRmb3JtQ3J5cHRvRmFjdG9yeSBleHRlbmRzIGZhY3RvcnlCYXNlXzEuRmFjdG9yeUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBhbGxvdyBtYW51YWwgY29uc3RydWN0aW9uIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmFjdG9yeSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghUGxhdGZvcm1DcnlwdG9GYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFBsYXRmb3JtQ3J5cHRvRmFjdG9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUGxhdGZvcm1DcnlwdG9GYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGxhdGZvcm1DcnlwdG9GYWN0b3J5ID0gUGxhdGZvcm1DcnlwdG9GYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR3hoZEdadmNtMURjbmx3ZEc5R1lXTjBiM0o1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlpoWTNSdmNtbGxjeTl3YkdGMFptOXliVU55ZVhCMGIwWmhZM1J2Y25rdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVU5CTEN0RFFVRTBRenRCUVVVMVF6czdSMEZGUnp0QlFVTklMRTFCUVdFc2NVSkJRWE5DTEZOQlFWRXNlVUpCUVRSQ08wbEJTVzVGT3pzN1QwRkhSenRKUVVOSU8xRkJRMGtzUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRkZCUVZFN1VVRkRiRUlzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU5zUXl4eFFrRkJjVUlzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4eFFrRkJjVUlzUlVGQlJTeERRVUZETzFOQlEycEZPMUZCUTBRc1QwRkJUeXh4UWtGQmNVSXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVEN4WFFVRlhPMUZCUTJwQ0xFOUJRVThzY1VKQlFYRkNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTktPMEZCTTBKRUxITkVRVEpDUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCIuL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBybmcgc2VydmljZS5cclxuICovXHJcbmNsYXNzIFJuZ1NlcnZpY2VGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFSbmdTZXJ2aWNlRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUm5nU2VydmljZUZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFJuZ1NlcnZpY2VGYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSbmdTZXJ2aWNlRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBSbmdTZXJ2aWNlRmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUm5nU2VydmljZUZhY3RvcnkgPSBSbmdTZXJ2aWNlRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY201blUyVnlkbWxqWlVaaFkzUnZjbmt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMM0p1WjFObGNuWnBZMlZHWVdOMGIzSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGRFFTd3JRMEZCTkVNN1FVRkZOVU03TzBkQlJVYzdRVUZEU0N4TlFVRmhMR2xDUVVGclFpeFRRVUZSTEhsQ1FVRjNRanRKUVVrelJEczdPMDlCUjBjN1NVRkRTRHRSUVVOSkxFdEJRVXNzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhUUVVGVExFVkJRVVU3V1VGRE9VSXNhVUpCUVdsQ0xFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFRRVU42UkR0UlFVTkVMRTlCUVU4c2FVSkJRV2xDTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlEwd3NWMEZCVnp0UlFVTnFRaXhQUVVGUExHbENRVUZwUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRM2hETEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3c0UTBFeVFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEFycmF5IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgQXJyYXlIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGVtcHR5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBlbXB0eSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbm9uIGVtcHR5IGFycmF5IG9mIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIG5vbiBlbXB0eSBhcnJheSBvZiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGVkKHZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0VtcHR5KHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXModW5kZWZpbmVkKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXMobnVsbCkgJiZcclxuICAgICAgICAgICAgdmFsdWUuZXZlcnkoKGEpID0+IG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYSwgdHlwZSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXJyYXlIZWxwZXIgPSBBcnJheUhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhKeVlYbElaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTloY25KaGVVaGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYVVSQlFUaERPMEZCUlRsRE96dEhRVVZITzBGQlEwZ3NUVUZCWVN4WFFVRlhPMGxCUTNCQ096czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1QwRkJUeXhMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4VFFVRlRPMWxCUTNoRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETjBRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZMRVZCUVVVc1NVRkJZenRSUVVNMVF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU03V1VGRE9VSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU14UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzSkNMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZOTEVWQlFVVXNSVUZCUlN4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRemxFTEVOQlFVTTdRMEZGU2p0QlFXcERSQ3hyUTBGcFEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jb3JlRXJyb3JcIik7XHJcbmNvbnN0IGpzb25IZWxwZXJfMSA9IHJlcXVpcmUoXCIuL2pzb25IZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIi4vb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEhhbmRsZSBlcnJvcnMgYXMgZ3JhY2VmdWxseSBhcyBwb3NzaWJsZS5cclxuICovXHJcbmNsYXNzIEVycm9ySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IGFuIGVycm9yIG9iamVjdCBpbnRvIHNvbWV0aGluZyByZWFkYWJsZS5cclxuICAgICAqIEBwYXJhbSBlcnIgVGhlIG9iamVjdCB0byBmb3JtYXQuXHJcbiAgICAgKiBAcGFyYW0gaW5jbHVkZVN0YWNrIEluY2x1ZGUgdGhlIHN0YWNrIHRyYWNlIGlmIHRoZXJlIGlzIG9uZS5cclxuICAgICAqIEByZXR1cm5zIEZvcm1hdHRlZCB2ZXJzaW9uIG9mIHRoZSBlcnJvciBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb3JtYXQoZXJyLCBpbmNsdWRlU3RhY2spIHtcclxuICAgICAgICBpZiAoZXJyID09PSBudWxsIHx8IGVyciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInVua25vd24gZXJyb3JcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29yZUVycm9yXzEuQ29yZUVycm9yLmlzRXJyb3IoZXJyKSkge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gZXJyLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICBpZiAoaW5jbHVkZVN0YWNrICYmIGVyci5zdGFjaykge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IGBcXG5TdGFjayBUcmFjZWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGVyci5zdGFjay5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICAgICAgICAgIHBhcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gYFxcbiR7cGFydHMuam9pbihcIlxcblwiKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZXJyLmlubmVyRXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZVN0YWNrICYmICFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShlcnIuaW5uZXJFcnJvci5zdGFjaykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQgKz0gYFxcblxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYDtcclxuICAgICAgICAgICAgICAgICAgICByZXQgKz0gYFxcbklubmVyIFN0YWNrIFRyYWNlXFxuYDtcclxuICAgICAgICAgICAgICAgICAgICByZXQgKz0gZXJyLmlubmVyRXJyb3Iuc3RhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQgKz0gYFxcbklubmVyIEVycm9yOiAke2Vyci5pbm5lckVycm9yLm1lc3NhZ2V9XFxuYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGluY2x1ZGVTdGFjayAmJiAhb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZXJyLnN0YWNrKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IGVyci5zdGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBlcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyhlcnIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25IZWxwZXJfMS5Kc29uSGVscGVyLnN0cmluZ2lmeShlcnIsIHVuZGVmaW5lZCwgXCJcXHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5FcnJvckhlbHBlciA9IEVycm9ySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laWEp5YjNKSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OWxjbkp2Y2tobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhMFJCUVN0RE8wRkJReTlETERaRFFVRXdRenRCUVVNeFF5eHBSRUZCT0VNN1FVRkRPVU1zYVVSQlFUaERPMEZCUlRsRE96dEhRVVZITzBGQlEwZ3NUVUZCWVN4WFFVRlhPMGxCUTNCQ096czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRlJMRVZCUVVVc1dVRkJjVUk3VVVGRGFFUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1NVRkJTU3hKUVVGSkxFZEJRVWNzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEYmtNc1QwRkJUeXhsUVVGbExFTkJRVU03VTBGRE1VSTdZVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5Q0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRaUVVOMlFpeEpRVUZKTEZsQlFWa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRk8yZENRVU16UWl4SFFVRkhMRWxCUVVrc1pVRkJaU3hEUVVGRE8yZENRVU4yUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGNFTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yZENRVU5rTEVkQlFVY3NTVUZCU1N4TFFVRkxMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXp0aFFVTnNRenRaUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdaMEpCUTNaRExFbEJRVWtzV1VGQldTeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHR2UWtGRE4wUXNSMEZCUnl4SlFVRkpMSEZFUVVGeFJDeERRVUZETzI5Q1FVTTNSQ3hIUVVGSExFbEJRVWtzZFVKQlFYVkNMRU5CUVVNN2IwSkJReTlDTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF6dHBRa0ZETDBJN2NVSkJRVTA3YjBKQlEwZ3NSMEZCUnl4SlFVRkpMR3RDUVVGclFpeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1NVRkJTU3hEUVVGRE8ybENRVU4yUkR0aFFVTktPMWxCUlVRc1QwRkJUeXhIUVVGSExFTkJRVU03VTBGRFpEdGhRVUZOTEVsQlFVa3NSMEZCUnl4WlFVRlpMRXRCUVVzc1JVRkJSVHRaUVVNM1FpeEpRVUZKTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRZaXhKUVVGSkxGbEJRVmtzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0blFrRkRiRVFzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNN1lVRkRjRUk3YVVKQlFVMDdaMEpCUTBnc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTTdZVUZEZEVJN1dVRkRSQ3hQUVVGUExFZEJRVWNzUTBGQlF6dFRRVU5rTzJGQlFVMDdXVUZEU0N4SlFVRkpMREpDUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVNMVFpeFBRVUZQTEVkQlFVY3NRMEZCUXp0aFFVTmtPMmxDUVVGTk8yZENRVU5JTEU5QlFVOHNkVUpCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eEZRVUZGTEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVOeVJEdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCT1VORUxHdERRVGhEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEpzb24gaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBKc29uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RyaW5naWZ5IGFuIG9iamVjdCB3aXRoIHJlY3Vyc2lvbiBicmVha2luZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIEphdmFTY3JpcHQgdmFsdWUsIHVzdWFsbHkgYW4gb2JqZWN0IG9yIGFycmF5LCB0byBiZSBjb252ZXJ0ZWQuXHJcbiAgICAgKiBAcGFyYW0gcmVwbGFjZXIgQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgdGhlIHJlc3VsdHMuXHJcbiAgICAgKiBAcGFyYW0gc3BhY2UgQWRkcyBpbmRlbnRhdGlvbiwgd2hpdGUgc3BhY2UsIGFuZCBsaW5lIGJyZWFrIGNoYXJhY3RlcnMgdG8gdGhlIHJldHVybi12YWx1ZSBKU09OIHRleHQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gcmVhZC5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyB2ZXJzaW9uIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xyXG4gICAgICAgIC8vIGVsaW1pbmF0ZXMgYW55IHJlY3Vyc2lvbiBpbiB0aGUgc3RyaW5naWZ5XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBbXTtcclxuICAgICAgICBjb25zdCByZWN1c2lvblJlcGxhY2VyID0gKGtleSwgcmVwbGFjZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHJlcGxhY2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUuaW5kZXhPZihyZXBsYWNlVmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHJlcGxhY2VWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VyID8gcmVwbGFjZXIoa2V5LCByZXBsYWNlVmFsdWUpIDogcmVwbGFjZVZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZWN1c2lvblJlcGxhY2VyLCBzcGFjZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Kc29uSGVscGVyID0gSnNvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5OdmJraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMnB6YjI1SVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGdzVFVGQllTeFZRVUZWTzBsQlEyNUNPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCVlN4RlFVRkZMRkZCUVRKRExFVkJRVVVzUzBGQmRVSTdVVUZEY0Vjc05FTkJRVFJETzFGQlF6VkRMRTFCUVUwc1MwRkJTeXhIUVVGVkxFVkJRVVVzUTBGQlF6dFJRVVY0UWl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEVOQlFVTXNSMEZCVnl4RlFVRkZMRmxCUVdsQ0xFVkJRVVVzUlVGQlJUdFpRVU40UkN4SlFVRkpMRTlCUVU4c1dVRkJXU3hMUVVGTExGRkJRVkVzU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRmxCUVZrc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlEyeEdMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRGNFTXNkME5CUVhkRE8yOUNRVU40UXl4UFFVRlBPMmxDUVVOV08zRkNRVUZOTzI5Q1FVTklMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdhVUpCUXpWQ08yRkJRMG83V1VGRlJDeFBRVUZQTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRMnBGTEVOQlFVTXNRMEZCUXp0UlFVVkdMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETVVRc1EwRkJRenREUVVOS08wRkJNMEpFTEdkRFFUSkNReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTnVtYmVyIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBpbnRlZ2VybmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGludGVnZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbnVtYmVyeW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBmbG9hdCBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUZsb2F0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Zsb2F0U3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQqXFwuP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgaW50ZWdlciBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUludC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJIZWxwZXIgPSBOdW1iZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnRZbVZ5U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmJuVnRZbVZ5U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRTFCUVdFc1dVRkJXVHRKUVVOeVFqczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRlZPMUZCUXpsQ0xFOUJRVThzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnlSaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhQUVVGUExFdEJRVXNzUzBGQlN5eFRRVUZUTEVsQlFVa3NTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hQUVVGUExFdEJRVXNzUzBGQlN5eFJRVUZSTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGFFa3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRV0U3VVVGRGNrTXNUMEZCVHl4bFFVRmxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHVkJRV1VzUTBGQlF5eExRVUZoTzFGQlEzWkRMRTlCUVU4c1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnFReXhEUVVGRE8wTkJRMG83UVVGd1EwUXNiME5CYjBOREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBPYmplY3RIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IHR5cGVvZiAodmFsdWUpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdCBpZiBnaXZlbiB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBBIGNhbGxiYWNrIG1ldGhvZCB3aGljaCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlKHZhbHVlLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzTmFtZSA9IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlQ2xhc3NOYW1lID09PSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHR5cGVDb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QgaWYgaXQgaGFzIG9uZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBnZXQgdGhlIGNsYXNzIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUgaWYgaXQgaGFzIG9uZSBvciB1bmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZW9mIG9iamVjdCA9PT0gXCJmdW5jdGlvblwiID8gb2JqZWN0LnRvU3RyaW5nKCkgOiBvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2JqZWN0SGVscGVyID0gT2JqZWN0SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMkpxWldOMFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiMkpxWldOMFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEUxQlFXRXNXVUZCV1R0SlFVTnlRanM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRlZPMUZCUXpkQ0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjBSU3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVZVc1JVRkJSU3hsUVVGNVFqdFJRVU4wUkN4TlFVRk5MR05CUVdNc1IwRkJSeXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNoRUxFOUJRVThzWTBGQll5eExRVUZMTEZOQlFWTXNTVUZCU1N4alFVRmpMRXRCUVVzc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0SlFVTjZSeXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVnp0UlFVTnNReXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVONlF5eFBRVUZQTEZOQlFWTXNRMEZCUXp0VFFVTndRanRoUVVGTk8xbEJRMGdzVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4TlFVRk5MRXRCUVVzc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1dVRkRja2NzVFVGQlRTeFBRVUZQTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU14UXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xTkJRMjVGTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCTjBORUxHOURRVFpEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFN0cmluZyBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIFN0cmluZ0hlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIHN0cmluZ3luZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nIHRoYXQgaXMgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBubyBlbXB0eW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBzdHJpbmcgYWxsIEFTQ0lJIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgc3RyaW5nIHRvIHRlc3QgaWYgaXMgaXMgQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYWxsIEFTQ0lJLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiAvXltcXHgwMC1cXHg3Rl0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSBub24gQVNDSUkgY2hhcmFjdGVycyB3aXRoIGNvbnRyb2wgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHZhbHVlIHRvIGVzY2FwZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlc2NhcGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVuY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9bXFx1MDA4MC1cXHVGRkZGXS9nLCAoY2hyKSA9PiBgXFxcXHUkeyhgMDAwMCR7Y2hyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpfWApLnN1YnN0cigtNCl9YCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSBjb250cm9sIGNoYXJhY3RlcnMgdG8gQVNDSUkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVuY29kZWQgc3RyaW5nIHRvIGNvbnZlcnQgYmFjayB0byBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9cXFxcdShbXFxkXFx3XXs0fSkvZ2ksIChtYXRjaCwgZ3JwKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGdycCwgMTYpKSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdHJpbmdIZWxwZXIgPSBTdHJpbmdIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlhVzVuU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmMzUnlhVzVuU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRTFCUVdFc1dVRkJXVHRKUVVOeVFqczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRlZPMUZCUXpkQ0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYVVKQlFXbENMRU5CUVVNN1NVRkRPVVVzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMMFFzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVdFN1VVRkRMMElzVDBGQlR5eExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1MwRkJTeXhUUVVGVE8xbEJRM2hETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQllUdFJRVU4wUXl4UFFVRlBMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTXZTaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCWVR0UlFVTjBReXhQUVVGUExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRhRW9zUTBGQlF6dERRVU5LTzBGQkwwTkVMRzlEUVN0RFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lcnJvci9jb3JlRXJyb3JcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lcnJvci9uZXR3b3JrRXJyb3JcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lcnJvci9wbGF0Zm9ybUVycm9yXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5XCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZmFjdG9yaWVzL3BsYXRmb3JtQ3J5cHRvRmFjdG9yeVwiKSwgZXhwb3J0cyk7XHJcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiKSwgZXhwb3J0cyk7XHJcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2hlbHBlcnMvYXJyYXlIZWxwZXJcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9oZWxwZXJzL2Vycm9ySGVscGVyXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaGVscGVycy9qc29uSGVscGVyXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaGVscGVycy9udW1iZXJIZWxwZXJcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKSwgZXhwb3J0cyk7XHJcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbG9nZ2Vycy9jb25zb2xlTG9nZ2VyXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbG9nZ2Vycy9udWxsTG9nZ2VyXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbmV0d29yay9uZXR3b3JrRW5kUG9pbnRcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zZXJ2aWNlcy9iYWNrZ3JvdW5kVGFza1NlcnZpY2VcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zZXJ2aWNlcy90aW1lU2VydmljZVwiKSwgZXhwb3J0cyk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTERSRVFVRnJRenRCUVVOc1F5d3JSRUZCY1VNN1FVRkRja01zWjBWQlFYTkRPMEZCUTNSRExHdEZRVUYzUXp0QlFVTjRReXd5UlVGQmFVUTdRVUZEYWtRc05FVkJRV3RFTzBGQlEyeEVMSGRGUVVFNFF6dEJRVU01UXl4blJVRkJjME03UVVGRGRFTXNaMFZCUVhORE8wRkJRM1JETEN0RVFVRnhRenRCUVVOeVF5eHBSVUZCZFVNN1FVRkRka01zYVVWQlFYVkRPMEZCUTNaRExHbEZRVUYxUXp0QlFWTjJReXhyUlVGQmQwTTdRVUZEZUVNc0swUkJRWEZETzBGQlEzSkRMRzlGUVVFd1F6dEJRVU14UXl3eVJVRkJhVVE3UVVGRGFrUXNhVVZCUVhWREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgZXJyb3JIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2Vycm9ySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJTG9nZ2VyIHdoaWNoIHNlbmRzIHRvIHRoZSB0aGlzLl9sb2dnaW5nT2JqZWN0LlxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxyXG5jbGFzcyBDb25zb2xlTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuZCBpbnN0YW5jZSBvZiB0aGUgY29uc29sZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbG9nZ2luZ09iamVjdCBUaGUgb2JqZWN0IHRvIHNlbmQgYWxsIHRoZSBsb2dnaW5nIHRvLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgaW5zdGFuY2Ugb2YgQ29uc29sZUxvZ2dlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9nZ2luZ09iamVjdCkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QgPSBsb2dnaW5nT2JqZWN0IHx8IGNvbnNvbGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgYmFubmVyIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBiYW5uZXIobWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QubG9nKFwiPVwiLnJlcGVhdCg4MCkpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubG9nQXJncyh0aGlzLl9sb2dnaW5nT2JqZWN0LmxvZywgYXJncyk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2luZ09iamVjdC5sb2coXCI9XCIucmVwZWF0KDgwKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgbG9nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBsb2cobWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubG9nQXJncyh0aGlzLl9sb2dnaW5nT2JqZWN0LmxvZywgYXJncyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgaW5mb3JtYXRpb24gdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGluZm8obWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QuaW5mbyhtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmxvZ0FyZ3ModGhpcy5fbG9nZ2luZ09iamVjdC5pbmZvLCBhcmdzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCB3YXJuaW5nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICB3YXJuaW5nKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl9sb2dnaW5nT2JqZWN0Lndhcm4obWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5sb2dBcmdzKHRoaXMuX2xvZ2dpbmdPYmplY3Qud2FybiwgYXJncyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgZXJyb3IgdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBlcnIgQW4gZXJyb3Igb2JqZWN0IHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGVycm9yKG1lc3NhZ2UsIGVyciwgLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShlcnIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gZXJyb3JIZWxwZXJfMS5FcnJvckhlbHBlci5mb3JtYXQoZXJyLCB0cnVlKS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICAgICAgbGluZXMuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dpbmdPYmplY3QuZXJyb3IoYFxcdCR7bGluZX1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9nQXJncyh0aGlzLl9sb2dnaW5nT2JqZWN0LmVycm9yLCBhcmdzKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbG9nQXJncyhsb2dNZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNFbXB0eShhcmdzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRlbnQgPSBcIlxcdFwiO1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICAgICAgYXJncy5mb3JFYWNoKChhcmcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdGhpcy5jcmVhdGVJdGVtKGluZGVudCwgXCJcIiwgYXJnKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGFyZ3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9JHtcIi1cIi5yZXBlYXQoNzApfVxcbmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2dNZXRob2Qob3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZUl0ZW0oaW5kZW50LCBrZXksIGl0ZW0sIHNpbmdsZUl0ZW1MaW5lQnJlYWsgPSBcIlxcblwiKSB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNBcnJheShpdGVtKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRlbnQgPSBgJHtpbmRlbnR9XFx0YDtcclxuICAgICAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9W1xcbmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYCR7aW5kZW50fSR7a2V5fTogW1xcbmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IHRoaXMuY3JlYXRlSXRlbShuZXdJbmRlbnQsIFwiXCIsIGVsZW1lbnQsIGAke2luZGV4IDwgaXRlbS5sZW5ndGggLSAxID8gXCIsXCIgOiBcIlwifVxcbmApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH1dXFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzT2JqZWN0KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iU3RyaW5nID0gaXRlbS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAob2JTdHJpbmcgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGVudCA9IGAke2luZGVudH1cXHRgO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYCR7aW5kZW50fXtcXG5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH0ke2tleX06IHtcXG5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKChpdGVtS2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSB0aGlzLmNyZWF0ZUl0ZW0obmV3SW5kZW50LCBpdGVtS2V5LCBpdGVtW2l0ZW1LZXldLCBgJHtpbmRleCA8IGtleXMubGVuZ3RoIC0gMSA/IFwiLFwiIDogXCJcIn1cXG5gKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH19XFxuYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSB0aGlzLmNyZWF0ZUl0ZW0oaW5kZW50LCBrZXksIG9iU3RyaW5nLnJlcGxhY2UoL1xcbi9nLCBgXFxuJHtpbmRlbnR9YCksIHNpbmdsZUl0ZW1MaW5lQnJlYWspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke2luZGVudH0ke29iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGl0ZW0pID8gaXRlbSA6IGl0ZW0udG9TdHJpbmcoKX0ke3NpbmdsZUl0ZW1MaW5lQnJlYWt9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHtpbmRlbnR9JHtrZXl9OiAke29iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGl0ZW0pID8gaXRlbSA6IGl0ZW0udG9TdHJpbmcoKX0ke3NpbmdsZUl0ZW1MaW5lQnJlYWt9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29uc29sZUxvZ2dlciA9IENvbnNvbGVMb2dnZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVjMjlzWlV4dloyZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXNiMmRuWlhKekwyTnZibk52YkdWTWIyZG5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMSGRFUVVGeFJEdEJRVU55UkN4M1JFRkJjVVE3UVVGRGNrUXNNRVJCUVhWRU8wRkJRM1pFTERCRVFVRjFSRHRCUVVkMlJEczdSMEZGUnp0QlFVTklMRFJDUVVFMFFqdEJRVU0xUWl4TlFVRmhMR0ZCUVdFN1NVRkpkRUk3T3pzN1QwRkpSenRKUVVOSUxGbEJRVmtzWVVGQmRVSTdVVUZETDBJc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eGhRVUZoTEVsQlFVa3NUMEZCVHl4RFFVRkRPMGxCUTI1RUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFXVXNSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRla01zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRMnBETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkROVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpWRExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzUjBGQlJ5eERRVUZETEU5QlFXVXNSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRkRU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGFrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEVsQlFVa3NRMEZCUXl4UFFVRmxMRVZCUVVVc1IwRkJSeXhKUVVGWE8xRkJRM1pETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEyeERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGFrUXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4UFFVRlBMRU5CUVVNc1QwRkJaU3hGUVVGRkxFZEJRVWNzU1VGQlZ6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTnNReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFdEJRVXNzUTBGQlF5eFBRVUZsTEVWQlFVVXNSMEZCVXl4RlFVRkZMRWRCUVVjc1NVRkJWenRSUVVOdVJDeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU51UXl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkROVUlzVFVGQlRTeExRVUZMTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU40UkN4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTnFRaXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE0wTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRUanRSUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFBRVUZQTEVOQlFVTXNVMEZCYjBNc1JVRkJSU3hKUVVGWE8xRkJRemRFTEVsQlFVa3NRMEZCUXl4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTFRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEY0VJc1NVRkJTU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEyaENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVN1owSkJRM2hDTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRek5ETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVTjZRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETzJsQ1FVTTFRenRaUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEwZ3NVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRM0pDTzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hWUVVGVkxFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFWY3NSVUZCUlN4SlFVRlRMRVZCUVVVc2MwSkJRVGhDTEVsQlFVazdVVUZEZWtZc1NVRkJTU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyaENMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRNMElzVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJRenRaUVVOb1F5eEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTXpRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eE5RVUZOTEV0QlFVc3NRMEZCUXp0aFFVTTFRanRwUWtGQlRUdG5Ra0ZEU0N4TlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTTdZVUZEY0VNN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCV1N4RlFVRkZMRXRCUVdFc1JVRkJSU3hGUVVGRk8yZENRVU42UXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMnBITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1RVRkJUU3hKUVVGSkxFZEJRVWNzVFVGQlRTeExRVUZMTEVOQlFVTTdVMEZETlVJN1lVRkJUU3hKUVVGSkxESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRM0JETEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFpRVVZxUXl4SlFVRkpMRkZCUVZFc1MwRkJTeXhwUWtGQmFVSXNSVUZCUlR0blFrRkRhRU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJRenRuUWtGRGFFTXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkRNMElzVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4TFFVRkxMRU5CUVVNN2FVSkJRelZDTzNGQ1FVRk5PMjlDUVVOSUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJRenRwUWtGRGNFTTdaMEpCUTBRc1RVRkJUU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGREwwSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRV1VzUlVGQlJTeExRVUZoTEVWQlFVVXNSVUZCUlR0dlFrRkROVU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRE5VY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMGdzVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4TFFVRkxMRU5CUVVNN1lVRkROVUk3YVVKQlFVMDdaMEpCUTBnc1RVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRoUVVOMlJ6dFRRVU5LTzJGQlFVMDdXVUZEU0N4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVNelFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRWRCUVVjc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNN1lVRkRja2M3YVVKQlFVMDdaMEpCUTBnc1RVRkJUU3hKUVVGSkxFZEJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NTMEZCU3l3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXp0aFFVTTNSenRUUVVOS08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenREUVVOS08wRkJhRWxFTEhORFFXZEpReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSUxvZ2dlciB3aGljaCBpcyBzaWxlbnQuXHJcbiAqL1xyXG5jbGFzcyBOdWxsTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBiYW5uZXIgdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGJhbm5lcihtZXNzYWdlLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgbG9nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBsb2cobWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGluZm9ybWF0aW9uIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCB3YXJuaW5nIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICB3YXJuaW5nKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBlcnJvciB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGVyciBBbiBlcnJvciBvYmplY3QgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgZXJyb3IobWVzc2FnZSwgZXJyLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdWxsTG9nZ2VyID0gTnVsbExvZ2dlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5Wc2JFeHZaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlzYjJkblpYSnpMMjUxYkd4TWIyZG5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVVkJPenRIUVVWSE8wRkJRMGdzVFVGQllTeFZRVUZWTzBsQlEyNUNPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJaU3hGUVVGRkxFZEJRVWNzU1VGQlZ6dEpRVU0zUXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRWRCUVVjc1EwRkJReXhQUVVGbExFVkJRVVVzUjBGQlJ5eEpRVUZYTzBsQlF6RkRMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1NVRkJTU3hEUVVGRExFOUJRV1VzUlVGQlJTeEhRVUZITEVsQlFWYzdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hQUVVGUExFTkJRVU1zVDBGQlpTeEZRVUZGTEVkQlFVY3NTVUZCVnp0SlFVTTVReXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNUMEZCWlN4RlFVRkZMRWRCUVZNc1JVRkJSU3hIUVVGSExFbEJRVmM3U1VGRGRrUXNRMEZCUXp0RFFVTktPMEZCZWtORUxHZERRWGxEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbmV0d29ya0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvbmV0d29ya0Vycm9yXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBhIG5ldHdvcmsgZW5kcG9pbnQuXHJcbiAqL1xyXG5jbGFzcyBOZXR3b3JrRW5kUG9pbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgTmV0d29ya0VuZFBvaW50LlxyXG4gICAgICogQHBhcmFtIHByb3RvY29sIFRoZSBwcm90b2NvbCB0byBhY2Nlc3MgdGhlIGVuZHBvaW50IHdpdGguXHJcbiAgICAgKiBAcGFyYW0gaG9zdCBUaGUgaG9zdCBuYW1lIG9yIGlwIG9mIHRoZSBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSBwb3J0IFRoZSBwb3J0IG9mIHRoZSBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSByb290UGF0aCBUaGUgcGF0aCB0byB0aGUgZW5kcG9pbnQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByb3RvY29sLCBob3N0LCBwb3J0LCByb290UGF0aCkge1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKHByb3RvY29sKSB8fCAhL2h0dHB8aHR0cHMvLnRlc3QocHJvdG9jb2wpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJUaGUgcHJvdG9jb2wgbXVzdCBiZSBkZWZpbmVkIGFzIGh0dHAgb3IgaHR0cHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKGhvc3QpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJUaGUgaG9zdCBtdXN0IGJlIGRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihwb3J0KSB8fCBwb3J0IDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihcIlRoZSBwb3J0IG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIHplcm9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocm9vdFBhdGgpICYmICFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcocm9vdFBhdGgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJUaGUgcm9vdFBhdGggbXVzdCBiZSBhIHZhbGlkIHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcHJvdG9jb2wgPSBwcm90b2NvbDtcclxuICAgICAgICB0aGlzLl9ob3N0ID0gaG9zdC5yZXBsYWNlKC9eXFwvKi8sIFwiXCIpLnJlcGxhY2UoL1xcLyokLywgXCJcIik7XHJcbiAgICAgICAgdGhpcy5fcG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgdGhpcy5fcm9vdFBhdGggPSAocm9vdFBhdGggfHwgXCJcIikucmVwbGFjZSgvXlxcLyovLCBcIlwiKS5yZXBsYWNlKC9cXC8qJC8sIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJvdG9jb2wgdG8gYWNjZXNzIHRoZSBlbmRwb2ludCB3aXRoLlxyXG4gICAgICogQHJldHVybnMgVGhlIHByb3RvY29sLlxyXG4gICAgICovXHJcbiAgICBnZXRQcm90b2NvbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBob3N0IG5hbWUgb3IgaXAgb2YgdGhlIGVuZHBvaW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGhvc3QuXHJcbiAgICAgKi9cclxuICAgIGdldEhvc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXRoIHRvIHRoZSBlbmRwb2ludC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwYXRoLlxyXG4gICAgICovXHJcbiAgICBnZXRSb290UGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFBhdGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwb3J0IG9mIHRoZSBlbmRwb2ludC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwb3J0LlxyXG4gICAgICovXHJcbiAgICBnZXRQb3J0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3J0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcGxldGUgdXJpLlxyXG4gICAgICogQHJldHVybnMgVGhlIHVyaS5cclxuICAgICAqL1xyXG4gICAgZ2V0VXJpKCkge1xyXG4gICAgICAgIGxldCB1cmkgPSBgJHt0aGlzLl9wcm90b2NvbH06Ly8ke3RoaXMuX2hvc3R9OiR7dGhpcy5fcG9ydH1gO1xyXG4gICAgICAgIGlmICh0aGlzLl9yb290UGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHVyaSArPSBgLyR7dGhpcy5fcm9vdFBhdGh9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVyaTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5ldHdvcmtFbmRQb2ludCA9IE5ldHdvcmtFbmRQb2ludDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm1WMGQyOXlhMFZ1WkZCdmFXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyNWxkSGR2Y21zdmJtVjBkMjl5YTBWdVpGQnZhVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3gzUkVGQmNVUTdRVUZEY2tRc01FUkJRWFZFTzBGQlEzWkVMREJFUVVGMVJEdEJRVU4yUkN3d1JFRkJkVVE3UVVGSmRrUTdPMGRCUlVjN1FVRkRTQ3hOUVVGaExHVkJRV1U3U1VGVmVFSTdPenM3T3p0UFFVMUhPMGxCUTBnc1dVRkJXU3hSUVVGNVFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4SlFVRlpMRVZCUVVVc1VVRkJhVUk3VVVGRGFFWXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0WlFVTnNSU3hOUVVGTkxFbEJRVWtzTWtKQlFWa3NRMEZCUXl3clEwRkJLME1zUTBGQlF5eERRVUZETzFOQlF6TkZPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRemxDTEUxQlFVMHNTVUZCU1N3eVFrRkJXU3hEUVVGRExEQkNRVUV3UWl4RFFVRkRMRU5CUVVNN1UwRkRkRVE3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNMVF5eE5RVUZOTEVsQlFVa3NNa0pCUVZrc1EwRkJReXcyUTBGQk5rTXNRMEZCUXl4RFFVRkRPMU5CUTNwRk8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdXVUZEY2tVc1RVRkJUU3hKUVVGSkxESkNRVUZaTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU5xUlR0UlFVTkVMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETzFGQlF6RkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNeFJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNNVJTeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVjBGQlZ6dFJRVU5rTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVDBGQlR6dFJRVU5XTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVjBGQlZ6dFJRVU5rTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVDBGQlR6dFJRVU5XTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zVFVGQlRTeEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVVUxUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXpRaXhIUVVGSExFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1UwRkRMMEk3VVVGRlJDeFBRVUZQTEVkQlFVY3NRMEZCUXp0SlFVTm1MRU5CUVVNN1EwRkRTanRCUVdwR1JDd3dRMEZwUmtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XHJcbi8qKlxyXG4gKiBEZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIGJhY2tncm91bmQgdGFzayBzZXJ2aWNlLlxyXG4gKi9cclxuY2xhc3MgQmFja2dyb3VuZFRhc2tTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgYmFja2dyb3VuZCB0YXNrLlxyXG4gICAgICogQHBhcmFtIHRhc2sgVGhlIHRhc2sgdG8gcnVuIGluIHRoZSBiYWNrZ3JvdW5kLlxyXG4gICAgICogQHBhcmFtIGRlbGF5IFRoZSBkZWxheSBiZWZvcmUgcnVubmluZyB0aGUgdGFzay5cclxuICAgICAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIGJhY2tncm91bmQgdGFzay5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKHRhc2ssIGRlbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXNrKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CYWNrZ3JvdW5kVGFza1NlcnZpY2UgPSBCYWNrZ3JvdW5kVGFza1NlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltRmphMmR5YjNWdVpGUmhjMnRUWlhKMmFXTmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzTmxjblpwWTJWekwySmhZMnRuY205MWJtUlVZWE5yVTJWeWRtbGpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJPenRIUVVWSE8wRkJRMGdzVFVGQllTeHhRa0ZCY1VJN1NVRkRPVUk3T3pzN08wOUJTMGM3U1VGRFZTeE5RVUZOTEVOQlFVa3NTVUZCYzBJc1JVRkJSU3hMUVVGaE96dFpRVU40UkN4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMmRDUVVOMFF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZPMjlDUVVOQkxFbEJRVWs3ZDBKQlEwRXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03Y1VKQlEyNUNPMjlDUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTzNkQ1FVTldMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHhRa0ZEWmp0blFrRkRUQ3hEUVVGRExFVkJRMFlzUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEZEVJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFVDeERRVUZETzB0QlFVRTdRMEZEU2p0QlFXNUNSQ3h6UkVGdFFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNsYXNzIHdoaWNoIGNhbiBwcm92aWRlIHRoZSB0aW1lLlxyXG4gKi9cclxuY2xhc3MgVGltZVNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAvMDEvMDEuXHJcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICBtc1NpbmNlRXBvY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UaW1lU2VydmljZSA9IFRpbWVTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR2x0WlZObGNuWnBZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMlZ5ZG1salpYTXZkR2x0WlZObGNuWnBZMlV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVVkJPenRIUVVWSE8wRkJRMGdzVFVGQllTeFhRVUZYTzBsQlEzQkNPenM3VDBGSFJ6dEpRVU5KTEZsQlFWazdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRPME5CUTBvN1FVRlNSQ3hyUTBGUlF5SjkiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=