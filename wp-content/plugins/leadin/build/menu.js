/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/constants/selectors.ts":
/*!****************************************!*\
  !*** ./scripts/constants/selectors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domElements": () => (/* binding */ domElements)
/* harmony export */ });
var domElements = {
  iframe: '#leadin-iframe',
  subMenu: '.toplevel_page_leadin > ul',
  subMenuLinks: '.toplevel_page_leadin > ul a',
  subMenuButtons: '.toplevel_page_leadin > ul > li',
  deactivatePluginButton: '[data-slug="leadin"] .deactivate a',
  deactivateFeedbackForm: 'form.leadin-deactivate-form',
  deactivateFeedbackSubmit: 'button#leadin-feedback-submit',
  deactivateFeedbackSkip: 'button#leadin-feedback-skip',
  thickboxModalClose: '.leadin-modal-close',
  thickboxModalWindow: 'div#TB_window.thickbox-loading',
  thickboxModalContent: 'div#TB_ajaxContent.TB_modal',
  reviewBannerLeaveReviewLink: 'a#leave-review-button',
  reviewBannerDismissButton: 'a#dismiss-review-banner-button',
  leadinIframeContainer: 'leadin-iframe-container',
  leadinIframe: 'leadin-iframe',
  leadinIframeFallbackContainer: 'leadin-iframe-fallback-container'
};

/***/ }),

/***/ "./scripts/utils/sessionStorage.ts":
/*!*****************************************!*\
  !*** ./scripts/utils/sessionStorage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteSessionStorage": () => (/* binding */ deleteSessionStorage),
/* harmony export */   "getSessionStorage": () => (/* binding */ getSessionStorage),
/* harmony export */   "setSessionStorage": () => (/* binding */ setSessionStorage)
/* harmony export */ });
function getSessionStorage(item) {
  try {
    return sessionStorage.getItem(item);
  } catch (e) {
    return null;
  }
}
function setSessionStorage(item, value) {
  try {
    sessionStorage.setItem(item, value);
  } catch (e) {// no-op
  }
}
function deleteSessionStorage(item) {
  try {
    sessionStorage.removeItem(item);
  } catch (e) {// no-op
  }
}

/***/ }),

/***/ "./scripts/utils/sideNav.ts":
/*!**********************************!*\
  !*** ./scripts/utils/sideNav.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLeadinCookiesDisabledNavigation": () => (/* binding */ setLeadinCookiesDisabledNavigation),
/* harmony export */   "setLeadinCookiesEnabledNavigation": () => (/* binding */ setLeadinCookiesEnabledNavigation),
/* harmony export */   "setLeadinUnAuthedNavigation": () => (/* binding */ setLeadinUnAuthedNavigation)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/selectors */ "./scripts/constants/selectors.ts");


function setLeadinUnAuthedNavigation() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_1__.domElements.subMenu).remove();
}
function setLeadinCookiesEnabledNavigation() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_1__.domElements.subMenuLinks).addClass('visible');
}
function setLeadinCookiesDisabledNavigation() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_1__.domElements.subMenuLinks).removeClass('visible');
}

/***/ }),

/***/ "./scripts/utils/thirdPartyCookies.ts":
/*!********************************************!*\
  !*** ./scripts/utils/thirdPartyCookies.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkThirdPartyCookies": () => (/* binding */ checkThirdPartyCookies)
/* harmony export */ });
var startHtmlUrl = 'https://static.hsappstatic.net/integrations-third-party-cookies/static-1.1/html/start.html';
/**
 * Checks if third-party cookies are enabled or not
 * on the current browser session.
 *
 * @returns {Promise<Boolean>}
 *  A promise that will always resolve with a boolean indicating if third-party cookies are enabled or not.
 */

var checkThirdPartyCookies = function checkThirdPartyCookies() {
  return new Promise(function (resolve) {
    try {
      var iframe = document.createElement('iframe');
      iframe.id = 'integrations-third-party-cookies-iframe';
      iframe.src = startHtmlUrl;
      iframe.style.display = 'none';

      var receiveMessage = function receiveMessage(evt) {
        if (evt.data.source === 'integrations-third-party-cookies-message') {
          resolve(evt.data.enabled);

          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
            window.removeEventListener('message', receiveMessage, false);
          }
        }
      };

      window.addEventListener('message', receiveMessage, false);
      document.body.appendChild(iframe);
    } catch (err) {
      resolve(false);
    }
  });
};

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!*********************************!*\
  !*** ./scripts/entries/menu.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_sessionStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sessionStorage */ "./scripts/utils/sessionStorage.ts");
/* harmony import */ var _utils_sideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sideNav */ "./scripts/utils/sideNav.ts");
/* harmony import */ var _utils_thirdPartyCookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/thirdPartyCookies */ "./scripts/utils/thirdPartyCookies.ts");




var THIRD_PARTY_COOKIES = 'leadin_third_party_cookies';
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  if ((0,_utils_sessionStorage__WEBPACK_IMPORTED_MODULE_1__.getSessionStorage)(THIRD_PARTY_COOKIES)) {
    (0,_utils_sideNav__WEBPACK_IMPORTED_MODULE_2__.setLeadinCookiesEnabledNavigation)();
  }

  (0,_utils_thirdPartyCookies__WEBPACK_IMPORTED_MODULE_3__.checkThirdPartyCookies)().then(function (enabled) {
    if (enabled) {
      (0,_utils_sessionStorage__WEBPACK_IMPORTED_MODULE_1__.setSessionStorage)(THIRD_PARTY_COOKIES, 'true');
      (0,_utils_sideNav__WEBPACK_IMPORTED_MODULE_2__.setLeadinCookiesEnabledNavigation)();
    } else {
      (0,_utils_sessionStorage__WEBPACK_IMPORTED_MODULE_1__.deleteSessionStorage)(THIRD_PARTY_COOKIES);
      (0,_utils_sideNav__WEBPACK_IMPORTED_MODULE_2__.setLeadinCookiesDisabledNavigation)();
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=menu.js.map