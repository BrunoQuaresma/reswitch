(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["reswitch"] = factory();
	else
		root["reswitch"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reswitch;


	var hasFunctionNature = function hasFunctionNature(maybe) {
	  return typeof maybe === 'function';
	};
	var hasStringNature = function hasStringNature(maybe) {
	  return typeof maybe === 'string';
	};

	function reswitch() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var defaultReducer = function defaultReducer(state) {
	    return state;
	  };

	  var hasDefaultReducer = args.length % 2 && hasFunctionNature(args[args.length - 1]);

	  if (args.length % 2 === 1) {
	    if (hasStringNature(args[0]) && !hasDefaultReducer) {
	      return defaultReducer;
	    }
	  }

	  if (!hasDefaultReducer) {
	    args.push(defaultReducer);
	  }

	  return function (state, action) {
	    var argIndex = args.findIndex(function (arg) {
	      return arg === action;
	    }) + 1 || args.length - 1;

	    if (hasFunctionNature(args[argIndex])) {
	      return args[argIndex](state, action);
	    }

	    return args[argIndex];
	  };
	}

/***/ }
/******/ ])
});
;