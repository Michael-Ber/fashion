/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burgerInteraction: () => (/* binding */ burgerInteraction)
/* harmony export */ });
const burgerInteraction = () => {
  try {
    const burgerBtn = document.querySelector('.header-burger__btn');
    const menu = document.querySelector('.header-burger__menu');
    burgerBtn.addEventListener('click', () => {
      menu.classList.toggle('header-burger__menu_active');
      burgerBtn.classList.toggle('header-burger__btn_active');
    });
    window.addEventListener('resize', () => {
      menu.classList.remove('header-burger__menu_active');
      burgerBtn.classList.remove('header-burger__btn_active');
    });
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/headerInput.js":
/*!**************************************!*\
  !*** ./src/assets/js/headerInput.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerInput: () => (/* binding */ headerInput)
/* harmony export */ });
const headerInput = () => {
  try {
    const searchButton = document.querySelector('.js-search');
    const searchInput = document.querySelector('.js-search-wrapper');
    const closeInput = searchInput.querySelector('.header__search-close');
    const body = document.querySelector('body');
    searchButton.addEventListener('click', () => {
      removeTwitching();
      searchInput.classList.toggle('js-search-wrapper_active');
      if (searchInput.classList.contains('js-search-wrapper_active')) {
        body.style.overflow = 'hidden';
        body.style.marginRight = removeTwitching() + 'px';
      } else {
        body.style.overflow = 'auto';
        body.style.marginRight = 0;
      }
    });
    closeInput.addEventListener('click', () => {
      searchInput.classList.remove('js-search-wrapper_active');
      body.style.overflow = 'auto';
      body.style.marginRight = 0;
    });
    function removeTwitching() {
      let div = document.createElement('div');
      div.style.visibility = 'none';
      div.style.opacity = '0';
      div.style.width = '50px;';
      div.style.height = '50px;';
      div.style.overflow = 'scroll';
      body.appendChild(div);
      let offset = div.offsetWidth - div.clientWidth;
      div.remove();
      return offset;
    }
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/headerScroll.js":
/*!***************************************!*\
  !*** ./src/assets/js/headerScroll.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerScroll: () => (/* binding */ headerScroll)
/* harmony export */ });
const headerScroll = () => {
  try {
    const headerTop = document.querySelector('.js-header-top');
    const headerBottom = document.querySelector('.js-header-bottom');
    const heroSection = document.querySelector('.js-hero');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        headerTop.style.display = 'none';
        headerBottom.style.position = 'fixed';
        headerBottom.style.top = '0';
        headerBottom.style.left = '0';
        headerBottom.style.right = '0';
        heroSection.style.marginTop = `${headerBottom.offsetHeight}px`;
      } else if (window.scrollY < 10) {
        if (window.matchMedia('min-width: 576px')) {
          headerTop.style.display = 'flex';
        }
        headerBottom.style.position = 'relative';
        headerBottom.style.top = 'unset';
        headerBottom.style.left = 'unset';
        headerBottom.style.right = 'unset';
        heroSection.style.marginTop = `0`;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headerInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerInput.js */ "./src/assets/js/headerInput.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.js */ "./src/assets/js/burger.js");
/* harmony import */ var _headerScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerScroll.js */ "./src/assets/js/headerScroll.js");



window.addEventListener("DOMContentLoaded", () => {
  (0,_headerInput_js__WEBPACK_IMPORTED_MODULE_0__.headerInput)();
  (0,_burger_js__WEBPACK_IMPORTED_MODULE_1__.burgerInteraction)();
  (0,_headerScroll_js__WEBPACK_IMPORTED_MODULE_2__.headerScroll)();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map