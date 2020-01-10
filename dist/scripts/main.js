var myApp =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rotateImgFirstPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotateImgFirstPage.js */ \"./scripts/rotateImgFirstPage.js\");\n\n\nwindow.addEventListener(\"load\", mainScript);\n\nfunction mainScript(){\n    Object(_rotateImgFirstPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://myApp/./scripts/index.js?");

/***/ }),

/***/ "./scripts/rotateImgFirstPage.js":
/*!***************************************!*\
  !*** ./scripts/rotateImgFirstPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handlerToRotateImagesOnFirstPage; });\nfunction handlerToRotateImagesOnFirstPage(){\n\n    const sectionFirstPage = document.querySelector('.section-firstPage');\n    const textCreative = document.querySelector('.creative');\n    const imageForYou = document.querySelector('.image-for-you');\n\n    const maxAngle = 35;\n    const currentWidthDevice = document.documentElement.clientWidth;\n    const currentHeightDevice = document.documentElement.clientHeight;\n    const coordinatesMiddleTextCreative = getCoordsMiddle(textCreative);\n    const middleDiagonal = getDistanceBetweenPoints({x:0, y:0},{x:currentWidthDevice/2, y:currentHeightDevice/2});\n    let amountOfRotation = {\n        x:0,\n        y:0.5,\n        z:0,\n        angle:0\n    };\n\n    sectionFirstPage.addEventListener('mouseenter', hintBrowser);\n    sectionFirstPage.addEventListener('mouseleave', removeHint);\n    sectionFirstPage.addEventListener('mousemove', listenerToRotateImagesOnFirstPage);\n\n    function listenerToRotateImagesOnFirstPage(event){\n        const coordinatesMouse = {\n            x: event.clientX,\n            y: event.clientY\n        };\n        \n        const distanceMouseTextCreative = getDistanceBetweenPoints(coordinatesMiddleTextCreative, coordinatesMouse);\n        \n        if((coordinatesMouse.x <= currentWidthDevice/2) && (coordinatesMouse.y <= currentHeightDevice/2)){\n            amountOfRotation.angle = maxAngle * distanceMouseTextCreative / middleDiagonal;\n            amountOfRotation.x = -0.5;\n        }\n        else if((coordinatesMouse.x > currentWidthDevice/2) && (coordinatesMouse.y <= currentHeightDevice/2)){\n            amountOfRotation.angle = -1 * maxAngle * distanceMouseTextCreative / middleDiagonal;\n            amountOfRotation.x = 0.5;\n        }\n        else if ((coordinatesMouse.x <= currentWidthDevice/2) && (coordinatesMouse.y > currentHeightDevice/2)){\n            amountOfRotation.angle =  maxAngle * distanceMouseTextCreative / middleDiagonal;\n            amountOfRotation.x = 0.5;\n        }\n        else if ((coordinatesMouse.x > currentWidthDevice/2) && (coordinatesMouse.y > currentHeightDevice/2)){\n            amountOfRotation.angle = -1 * maxAngle * distanceMouseTextCreative / middleDiagonal;\n            amountOfRotation.x = -0.5;\n        }\n       \n        textCreative.style.transform = `perspective(${currentWidthDevice*10}px) ` + elementRotate3d(amountOfRotation);\n        textCreative.style.transitionDuration = '0.5s';\n        textCreative.style.transitionProperty = 'transform';\n        imageForYou.style.transform =  `perspective(${currentWidthDevice*10}px) ` + elementRotate3d(amountOfRotation);\n        imageForYou.style.transitionDuration = '0.5s';\n        imageForYou.style.transitionProperty = 'transform';\n    }\n    function hintBrowser() {\n        // The optimizable properties that are going to change\n        // in the animation's keyframes block\n        this.style.willChange = 'transform, opacity';\n    }\n      \n    function removeHint() {\n        this.style.willChange = 'auto';\n    }\n    \n    function elementRotate3d(amountOfRotation){\n        return `rotate3d(${amountOfRotation.x}, ${amountOfRotation.y}, ${amountOfRotation.z}, ${amountOfRotation.angle}deg)`;\n    }\n    \n    function getCoordsMiddle(elem) {\n        let box = elem.getBoundingClientRect();\n    \n        return {\n          y: box.top + pageYOffset + box.height/2,\n          x: box.left + pageXOffset + box.width/2\n        };\n    }\n    \n    function getDistanceBetweenPoints(p1, p2){\n        return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2));\n    }\n}\n\n//# sourceURL=webpack://myApp/./scripts/rotateImgFirstPage.js?");

/***/ })

/******/ });