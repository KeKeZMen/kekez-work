/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../src/js/modules/Slider.js":
/*!***********************************!*\
  !*** ../src/js/modules/Slider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\r\n  constructor(\r\n    carouselSelector,\r\n    carouselElementsSelector,\r\n    controllButtonsSelector,\r\n    marginBetweenElements,\r\n    firstControllButtonId,\r\n    elementsFromClick\r\n  ) {\r\n    this.marginBetweenElements = marginBetweenElements;\r\n    this.firstControllButtonId = firstControllButtonId;\r\n    this.elementsFromClick = elementsFromClick;\r\n    this.carousel = document.querySelector(carouselSelector);\r\n    this.firstEl = document.querySelectorAll(carouselElementsSelector)[0];\r\n    this.controllButtons = document.querySelectorAll(controllButtonsSelector);\r\n  }\r\n\r\n  sliderInit() {\r\n    let isDragStart = false;\r\n    let prevPageX;\r\n    let prevScrollLeft;\r\n\r\n    this.controllButtons.forEach((icon) =>\r\n      icon.addEventListener(\"click\", () => {\r\n        let firstElWidth =\r\n          this.firstEl.clientWidth + this.marginBetweenElements;\r\n        this.carousel.scrollLeft +=\r\n          icon.id == `${this.firstControllButtonId}`\r\n            ? -firstElWidth * this.elementsFromClick\r\n            : firstElWidth * this.elementsFromClick;\r\n      })\r\n    );\r\n\r\n    this.carousel.addEventListener(\"mousedown\", (e) => {\r\n      isDragStart = true;\r\n      prevPageX = e.pageX;\r\n      prevScrollLeft = this.carousel.scrollLeft;\r\n    });\r\n\r\n    this.carousel.addEventListener(\"mousemove\", (e) => {\r\n      if (!isDragStart) return;\r\n      e.preventDefault();\r\n      this.carousel.classList.add(\"dragging\");\r\n      let positionDiff = e.pageX - prevPageX;\r\n      this.carousel.scrollLeft = prevScrollLeft - positionDiff;\r\n    });\r\n\r\n    this.carousel.addEventListener(\"mouseup\", (e) => {\r\n      isDragStart = false;\r\n      this.carousel.classList.remove(\"dragging\");\r\n    });\r\n\r\n    this.carousel.addEventListener(\"mouseleave\", (e) => {\r\n      isDragStart = false;\r\n      this.carousel.classList.remove(\"dragging\");\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://gulp-learn/../src/js/modules/Slider.js?");

/***/ }),

/***/ "../src/js/main.js":
/*!*************************!*\
  !*** ../src/js/main.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Slider.js */ \"../src/js/modules/Slider.js\");\n\r\n\r\nconst worksCarousel = new _modules_Slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \".tracing__carousel__line\",\r\n  \".tracing__carousel__line div\",\r\n  \".tracing__carousel button\",\r\n  24,\r\n  \"tracingCarouselLeft\",\r\n  1\r\n);\r\nworksCarousel.sliderInit();\r\n\r\nconst advertisingCarousel = new _modules_Slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \".advertising__carousel__line\",\r\n  \".advertising__carousel__line__element\",\r\n  \".advertising__carousel__controll\",\r\n  0,\r\n  \"advertisingCarouselLeft\",\r\n  1\r\n);\r\nadvertisingCarousel.sliderInit();\r\n\r\nconst serviceCarousel = new _modules_Slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \".services__carousel__line\",\r\n  \".services__carousel__line div\",\r\n  \".services__carousel__controll__button\",\r\n  24,\r\n  \"servicesCarouselLeft\",\r\n  1\r\n);\r\nserviceCarousel.sliderInit();\r\n\r\ndocument\r\n  .querySelectorAll(\".services__carousel__controll__button\")\r\n  .forEach((button) => {\r\n    button.addEventListener(\"click\", (e) => {\r\n      document\r\n        .querySelectorAll(\".services__carousel__controll__button\")\r\n        .forEach((button) => {\r\n          button.classList.remove(\"active\");\r\n        });\r\n      e.target.classList.add(\"active\");\r\n    });\r\n  });\r\n\n\n//# sourceURL=webpack://gulp-learn/../src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../src/js/main.js");
/******/ 	
/******/ })()
;