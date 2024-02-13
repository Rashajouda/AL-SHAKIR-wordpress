/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/api/hubspotPluginApi.ts":
/*!*****************************************!*\
  !*** ./scripts/api/hubspotPluginApi.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMeetingUser": () => (/* binding */ createMeetingUser),
/* harmony export */   "getAuth": () => (/* binding */ getAuth),
/* harmony export */   "getForm": () => (/* binding */ getForm),
/* harmony export */   "getMeetingUser": () => (/* binding */ getMeetingUser),
/* harmony export */   "getMeetingUsers": () => (/* binding */ getMeetingUsers),
/* harmony export */   "getMeetings": () => (/* binding */ getMeetings),
/* harmony export */   "leadinConnectCalendar": () => (/* binding */ leadinConnectCalendar),
/* harmony export */   "monitorFormCreatedFromTemplate": () => (/* binding */ monitorFormCreatedFromTemplate),
/* harmony export */   "monitorFormCreationFailed": () => (/* binding */ monitorFormCreationFailed),
/* harmony export */   "monitorFormPreviewRender": () => (/* binding */ monitorFormPreviewRender),
/* harmony export */   "monitorMeetingPreviewRender": () => (/* binding */ monitorMeetingPreviewRender),
/* harmony export */   "monitorPluginDeactivation": () => (/* binding */ monitorPluginDeactivation),
/* harmony export */   "monitorReviewBannerDismissed": () => (/* binding */ monitorReviewBannerDismissed),
/* harmony export */   "monitorReviewBannerLinkClicked": () => (/* binding */ monitorReviewBannerLinkClicked),
/* harmony export */   "monitorReviewBannerRendered": () => (/* binding */ monitorReviewBannerRendered),
/* harmony export */   "monitorSidebarMetaChange": () => (/* binding */ monitorSidebarMetaChange)
/* harmony export */ });
/* harmony import */ var _lib_Raven__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Raven */ "./scripts/lib/Raven.ts");
/* harmony import */ var _gutenberg_MeetingsBlock_MeetingGutenbergInterframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gutenberg/MeetingsBlock/MeetingGutenbergInterframe */ "./scripts/gutenberg/MeetingsBlock/MeetingGutenbergInterframe.ts");



function callInterframeMethod(method) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  //@ts-expect-error global
  return window.leadinChildFrameConnection.promise.then(function (child) {
    return _lib_Raven__WEBPACK_IMPORTED_MODULE_0__["default"].context(child[method], args);
  });
}

function getAuth() {
  return callInterframeMethod('leadinGetAuth');
}
function getMeetings() {
  return callInterframeMethod('leadinGetMeetings');
}
function getMeetingUser() {
  return callInterframeMethod('leadinGetMeetingUser');
}
function getMeetingUsers(ids) {
  return callInterframeMethod('leadinGetMeetingUsers', ids);
}
function createMeetingUser(data) {
  return callInterframeMethod('leadinPostMeetingUser', data);
}
function getForm(formId) {
  return callInterframeMethod('leadinGetForm', formId);
}
function monitorFormPreviewRender() {
  var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gutenberg';
  return callInterframeMethod('monitorFormPreviewRender', origin);
}
function monitorFormCreatedFromTemplate(type) {
  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gutenberg';
  return callInterframeMethod('monitorFormCreatedFromTemplate', type, origin);
}
function monitorFormCreationFailed(error) {
  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gutenberg';
  return callInterframeMethod('monitorFormCreationFailed', error, origin);
}
function monitorMeetingPreviewRender() {
  var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gutenberg';
  return callInterframeMethod('monitorMeetingPreviewRender', origin);
}
function monitorSidebarMetaChange(metaKey) {
  return callInterframeMethod('monitorSidebarMetaChange', metaKey);
}
function monitorReviewBannerRendered() {
  return callInterframeMethod('monitorReviewBannerRendered');
}
function monitorReviewBannerLinkClicked() {
  return callInterframeMethod('monitorReviewBannerLinkClicked');
}
function monitorReviewBannerDismissed() {
  return callInterframeMethod('monitorReviewBannerDismissed');
}
function leadinConnectCalendar(calendarArgs) {
  var hubspotBaseUrl = calendarArgs.hubspotBaseUrl,
      portalId = calendarArgs.portalId,
      triggerReload = calendarArgs.triggerReload;
  _gutenberg_MeetingsBlock_MeetingGutenbergInterframe__WEBPACK_IMPORTED_MODULE_1__.meetingsGutenbergInterframe.setCallback(triggerReload);
  return callInterframeMethod('leadinConnectCalendar', {
    hubspotBaseUrl: hubspotBaseUrl,
    portalId: portalId
  });
}
function monitorPluginDeactivation(reason) {
  return callInterframeMethod('monitorPluginDeactivation', reason);
}

/***/ }),

/***/ "./scripts/api/wordpressApiClient.ts":
/*!*******************************************!*\
  !*** ./scripts/api/wordpressApiClient.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableInternalTracking": () => (/* binding */ disableInternalTracking),
/* harmony export */   "fetchDisableInternalTracking": () => (/* binding */ fetchDisableInternalTracking),
/* harmony export */   "fetchOAuthToken": () => (/* binding */ fetchOAuthToken),
/* harmony export */   "fetchRefreshToken": () => (/* binding */ fetchRefreshToken),
/* harmony export */   "getBusinessUnitId": () => (/* binding */ getBusinessUnitId),
/* harmony export */   "getBusinessUnits": () => (/* binding */ getBusinessUnits),
/* harmony export */   "healthcheckRestApi": () => (/* binding */ healthcheckRestApi),
/* harmony export */   "leadinDisconnectPortal": () => (/* binding */ leadinDisconnectPortal),
/* harmony export */   "makeInterframeProxyRequest": () => (/* binding */ makeInterframeProxyRequest),
/* harmony export */   "makeProxyRequest": () => (/* binding */ makeProxyRequest),
/* harmony export */   "setBusinessUnitId": () => (/* binding */ setBusinessUnitId),
/* harmony export */   "skipReview": () => (/* binding */ skipReview),
/* harmony export */   "trackConsent": () => (/* binding */ trackConsent),
/* harmony export */   "updateHublet": () => (/* binding */ updateHublet)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Raven__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Raven */ "./scripts/lib/Raven.ts");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _utils_queryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/queryParams */ "./scripts/utils/queryParams.ts");





function makeRequest(method, path) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var queryParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // eslint-disable-next-line compat/compat
  var restApiUrl = new URL("".concat(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.restUrl, "leadin/v1").concat(path));
  (0,_utils_queryParams__WEBPACK_IMPORTED_MODULE_3__.addQueryObjectToUrl)(restApiUrl, queryParams);
  return new Promise(function (resolve, reject) {
    var payload = {
      url: restApiUrl.toString(),
      method: method,
      contentType: 'application/json',
      beforeSend: function beforeSend(xhr) {
        return xhr.setRequestHeader('X-WP-Nonce', _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.restNonce);
      },
      success: resolve,
      error: function error(response) {
        _lib_Raven__WEBPACK_IMPORTED_MODULE_1__["default"].captureMessage("HTTP Request to ".concat(restApiUrl, " failed with error ").concat(response.status, ": ").concat(response.responseText), {
          fingerprint: ['{{ default }}', path, response.status, response.responseText]
        });
        reject(response);
      }
    };

    if (method !== 'get') {
      payload.data = JSON.stringify(data);
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax(payload);
  });
}

function makeProxyRequest(method, hubspotApiPath, data) {
  var queryParamsObject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var proxyApiPath = "/proxy"; // eslint-disable-next-line compat/compat

  var proxyQueryParams = new URLSearchParams(queryParamsObject).toString();
  var proxyUrl = "".concat(hubspotApiPath, "?").concat(proxyQueryParams);
  return makeRequest(method, proxyApiPath, data, {
    proxyUrl: proxyUrl
  });
}
function fetchOAuthToken() {
  return makeRequest('GET', '/oauth-token')["catch"](function (err) {
    return {
      status: err.status,
      message: err.responseText
    };
  });
}
function fetchRefreshToken() {
  return makeRequest('GET', '/refresh-token')["catch"](function (err) {
    return {
      status: err.status,
      message: err.responseText
    };
  });
}
/**
 * To surface errors to the interframe, we need to catch the error
 * and return it to through penpal as a normal message, which the iframe
 * can check for and re-throw.
 */

function makeInterframeProxyRequest(method, hubspotApiPath, data) {
  var queryParamsObject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return makeProxyRequest(method, hubspotApiPath, data, queryParamsObject)["catch"](function (err) {
    return {
      status: err.status,
      message: err.responseText
    };
  });
}
function healthcheckRestApi() {
  return makeRequest('get', '/healthcheck');
}
function disableInternalTracking(value) {
  return makeRequest('put', '/internal-tracking', value ? '1' : '0');
}
function fetchDisableInternalTracking() {
  return makeRequest('get', '/internal-tracking').then(function (message) {
    return {
      message: message
    };
  });
}
function updateHublet(hublet) {
  return makeRequest('put', '/hublet', {
    hublet: hublet
  });
}
function skipReview() {
  return makeRequest('post', '/skip-review');
}
function trackConsent(canTrack) {
  return makeRequest('post', '/track-consent', {
    canTrack: canTrack
  }).then(function (message) {
    return {
      message: message
    };
  });
}
function leadinDisconnectPortal() {
  return makeRequest('delete', '/portal');
}
function setBusinessUnitId(businessUnitId) {
  return makeRequest('put', '/business-unit', {
    businessUnitId: businessUnitId
  });
}
function getBusinessUnitId() {
  return makeRequest('get', '/business-unit');
}
function getBusinessUnits() {
  return makeProxyRequest('get', '/integrations-proxy/v1/forms/business-units', {});
}

/***/ }),

/***/ "./scripts/constants/leadinConfig.ts":
/*!*******************************************!*\
  !*** ./scripts/constants/leadinConfig.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountName": () => (/* binding */ accountName),
/* harmony export */   "adminUrl": () => (/* binding */ adminUrl),
/* harmony export */   "backgroundIframeUrl": () => (/* binding */ backgroundIframeUrl),
/* harmony export */   "connectionStatus": () => (/* binding */ connectionStatus),
/* harmony export */   "deviceId": () => (/* binding */ deviceId),
/* harmony export */   "didDisconnect": () => (/* binding */ didDisconnect),
/* harmony export */   "env": () => (/* binding */ env),
/* harmony export */   "formsScript": () => (/* binding */ formsScript),
/* harmony export */   "formsScriptPayload": () => (/* binding */ formsScriptPayload),
/* harmony export */   "hublet": () => (/* binding */ hublet),
/* harmony export */   "hubspotBaseUrl": () => (/* binding */ hubspotBaseUrl),
/* harmony export */   "iframeUrl": () => (/* binding */ iframeUrl),
/* harmony export */   "impactLink": () => (/* binding */ impactLink),
/* harmony export */   "leadinPluginVersion": () => (/* binding */ leadinPluginVersion),
/* harmony export */   "leadinQueryParamsKeys": () => (/* binding */ leadinQueryParamsKeys),
/* harmony export */   "locale": () => (/* binding */ locale),
/* harmony export */   "loginUrl": () => (/* binding */ loginUrl),
/* harmony export */   "meetingsScript": () => (/* binding */ meetingsScript),
/* harmony export */   "oauth": () => (/* binding */ oauth),
/* harmony export */   "phpVersion": () => (/* binding */ phpVersion),
/* harmony export */   "pluginPath": () => (/* binding */ pluginPath),
/* harmony export */   "plugins": () => (/* binding */ plugins),
/* harmony export */   "portalDomain": () => (/* binding */ portalDomain),
/* harmony export */   "portalEmail": () => (/* binding */ portalEmail),
/* harmony export */   "portalId": () => (/* binding */ portalId),
/* harmony export */   "redirectNonce": () => (/* binding */ redirectNonce),
/* harmony export */   "restNonce": () => (/* binding */ restNonce),
/* harmony export */   "restUrl": () => (/* binding */ restUrl),
/* harmony export */   "reviewSkippedDate": () => (/* binding */ reviewSkippedDate),
/* harmony export */   "routeNonce": () => (/* binding */ routeNonce),
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "theme": () => (/* binding */ theme),
/* harmony export */   "trackConsent": () => (/* binding */ trackConsent),
/* harmony export */   "wpVersion": () => (/* binding */ wpVersion)
/* harmony export */ });
var _window$leadinConfig = window.leadinConfig,
    accountName = _window$leadinConfig.accountName,
    adminUrl = _window$leadinConfig.adminUrl,
    backgroundIframeUrl = _window$leadinConfig.backgroundIframeUrl,
    connectionStatus = _window$leadinConfig.connectionStatus,
    deviceId = _window$leadinConfig.deviceId,
    didDisconnect = _window$leadinConfig.didDisconnect,
    env = _window$leadinConfig.env,
    formsScript = _window$leadinConfig.formsScript,
    meetingsScript = _window$leadinConfig.meetingsScript,
    formsScriptPayload = _window$leadinConfig.formsScriptPayload,
    hublet = _window$leadinConfig.hublet,
    hubspotBaseUrl = _window$leadinConfig.hubspotBaseUrl,
    iframeUrl = _window$leadinConfig.iframeUrl,
    impactLink = _window$leadinConfig.impactLink,
    leadinPluginVersion = _window$leadinConfig.leadinPluginVersion,
    leadinQueryParamsKeys = _window$leadinConfig.leadinQueryParamsKeys,
    locale = _window$leadinConfig.locale,
    loginUrl = _window$leadinConfig.loginUrl,
    oauth = _window$leadinConfig.oauth,
    phpVersion = _window$leadinConfig.phpVersion,
    pluginPath = _window$leadinConfig.pluginPath,
    plugins = _window$leadinConfig.plugins,
    portalDomain = _window$leadinConfig.portalDomain,
    portalEmail = _window$leadinConfig.portalEmail,
    portalId = _window$leadinConfig.portalId,
    redirectNonce = _window$leadinConfig.redirectNonce,
    restNonce = _window$leadinConfig.restNonce,
    restUrl = _window$leadinConfig.restUrl,
    reviewSkippedDate = _window$leadinConfig.reviewSkippedDate,
    routeNonce = _window$leadinConfig.routeNonce,
    routes = _window$leadinConfig.routes,
    theme = _window$leadinConfig.theme,
    trackConsent = _window$leadinConfig.trackConsent,
    wpVersion = _window$leadinConfig.wpVersion;


/***/ }),

/***/ "./scripts/constants/selectors.ts":
/*!****************************************!*\
  !*** ./scripts/constants/selectors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./scripts/constants/urlsMap.ts":
/*!**************************************!*\
  !*** ./scripts/constants/urlsMap.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _leadinConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leadinConfig */ "./scripts/constants/leadinConfig.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var flatUrls = function flatUrls(key, route) {
  if (typeof route === 'string') {
    return _defineProperty({}, key, route);
  }

  return Object.keys(route).reduce(function (agg, childKey) {
    var childRoute = route[childKey];
    return _objectSpread(_objectSpread({}, agg), flatUrls(key + childKey, childRoute));
  }, {});
};

var urlsMap = Object.keys(_leadinConfig__WEBPACK_IMPORTED_MODULE_0__.routes).reduce(function (agg, key) {
  return _objectSpread(_objectSpread({}, agg), flatUrls(key, _leadinConfig__WEBPACK_IMPORTED_MODULE_0__.routes[key]));
}, {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlsMap);

/***/ }),

/***/ "./scripts/feedback/ThickBoxModal.ts":
/*!*******************************************!*\
  !*** ./scripts/feedback/ThickBoxModal.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThickBoxModal)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/selectors */ "./scripts/constants/selectors.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ThickBoxModal = /*#__PURE__*/function () {
  function ThickBoxModal(openTriggerSelector, inlineContentId, windowCssClass, contentCssClass) {
    _classCallCheck(this, ThickBoxModal);

    _defineProperty(this, "openTriggerSelector", void 0);

    _defineProperty(this, "inlineContentId", void 0);

    _defineProperty(this, "windowCssClass", void 0);

    _defineProperty(this, "contentCssClass", void 0);

    this.openTriggerSelector = openTriggerSelector;
    this.inlineContentId = inlineContentId;
    this.windowCssClass = windowCssClass;
    this.contentCssClass = contentCssClass;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(openTriggerSelector).on('click', this.init.bind(this));
  }

  _createClass(ThickBoxModal, [{
    key: "close",
    value: function close() {
      //@ts-expect-error global
      window.tb_remove();
    }
  }, {
    key: "init",
    value: function init(e) {
      //@ts-expect-error global
      window.tb_show('', "#TB_inline?inlineId=".concat(this.inlineContentId, "&modal=true")); // thickbox doesn't respect the width and height url parameters https://core.trac.wordpress.org/ticket/17249
      // We override thickboxes css with !important in the css

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_1__.domElements.thickboxModalWindow).addClass(this.windowCssClass); // have to modify the css of the thickbox content container as well

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_1__.domElements.thickboxModalContent).addClass(this.contentCssClass); // we unbind previous handlers because a thickbox modal is a single global object.
      // Everytime it is re-opened, it still has old handlers bound

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_1__.domElements.thickboxModalClose).off('click').on('click', this.close);
      e.preventDefault();
    }
  }]);

  return ThickBoxModal;
}();



/***/ }),

/***/ "./scripts/feedback/feedbackFormApi.ts":
/*!*********************************************!*\
  !*** ./scripts/feedback/feedbackFormApi.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitFeedbackForm": () => (/* binding */ submitFeedbackForm)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var portalId = '6275621';
var formId = '0e8807f8-2ac3-4664-b742-44552bfa09e2';
var formSubmissionUrl = "https://api.hsforms.com/submissions/v3/integration/submit/".concat(portalId, "/").concat(formId);
function submitFeedbackForm(formSelector) {
  var formSubmissionPayload = {
    fields: jquery__WEBPACK_IMPORTED_MODULE_0___default()(formSelector).serializeArray(),
    skipValidation: true
  };
  return new Promise(function (resolve, reject) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      type: 'POST',
      url: formSubmissionUrl,
      contentType: 'application/json',
      data: JSON.stringify(formSubmissionPayload),
      success: resolve,
      error: reject
    });
  });
}

/***/ }),

/***/ "./scripts/gutenberg/MeetingsBlock/MeetingGutenbergInterframe.ts":
/*!***********************************************************************!*\
  !*** ./scripts/gutenberg/MeetingsBlock/MeetingGutenbergInterframe.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gutenbergTriggerConnectCalendarRefresh": () => (/* binding */ gutenbergTriggerConnectCalendarRefresh),
/* harmony export */   "meetingsGutenbergInterframe": () => (/* binding */ meetingsGutenbergInterframe)
/* harmony export */ });
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raven-js */ "./node_modules/raven-js/src/singleton.js");
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raven_js__WEBPACK_IMPORTED_MODULE_0__);

var meetingsGutenbergInterframe = function () {
  var callback;
  return {
    executeCallback: function executeCallback(args) {
      if (callback) {
        raven_js__WEBPACK_IMPORTED_MODULE_0___default().context(callback, args);
      }
    },
    setCallback: function setCallback(callbackFunc) {
      callback = callbackFunc;
    }
  };
}();
function gutenbergTriggerConnectCalendarRefresh(args) {
  meetingsGutenbergInterframe.executeCallback(args);
}

/***/ }),

/***/ "./scripts/iframe/iframeUtils.ts":
/*!***************************************!*\
  !*** ./scripts/iframe/iframeUtils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBackgroundIframe": () => (/* binding */ createBackgroundIframe),
/* harmony export */   "createIframe": () => (/* binding */ createIframe)
/* harmony export */ });
/* harmony import */ var _lib_Interframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Interframe */ "./scripts/lib/Interframe.ts");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _constants_urlsMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/urlsMap */ "./scripts/constants/urlsMap.ts");
var _excluded = ["page"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function getIframeHeight() {
  var adminMenuWrap = document.getElementById('adminmenuwrap');
  var sideMenuHeight = adminMenuWrap ? adminMenuWrap.offsetHeight : 0;
  var adminBar = document.getElementById('wpadminbar');
  var adminBarHeight = adminBar && adminBar.offsetHeight || 0;

  if (window.innerHeight < sideMenuHeight) {
    return sideMenuHeight;
  } else {
    return window.innerHeight - adminBarHeight;
  }
}

function addIframeResizeEvent(iframe) {
  var animationFrame;
  window.addEventListener('resize', function () {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }

    animationFrame = requestAnimationFrame(function () {
      iframe.style.minHeight = "".concat(getIframeHeight(), "px");
    });
  }, true);
}

function createIframeElement(iframeSrc) {
  var iframe = document.createElement('iframe');
  iframe.id = 'leadin-iframe';
  iframe.src = iframeSrc;
  iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  iframe.setAttribute('sandbox', 'allow-scripts allow-forms allow-popups allow-top-navigation allow-same-origin');
  iframe.style.minHeight = "".concat(getIframeHeight(), "px");
  addIframeResizeEvent(iframe);
  return iframe;
}

function createSpinnerImage() {
  var img = document.createElement('img');
  img.src = "".concat(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.pluginPath, "/public/assets/images/loading-dots.svg");
  img.id = 'hs-plugin-loader';
  img.style.cssText = " top: 50%;\n                        left: 50%;\n                        margin-left: -41px;\n                        margin-top: -37;\n                        display: block;\n                        position: absolute;\n                        z-index: 900;";
  return img;
}

function addIframeLoadEvent(iframeContainer, img, iframe) {
  iframe.addEventListener('load', function () {
    if (img && document.getElementById(img.id)) {
      img.remove();
    }
  }, true);
}

function withLoadingSpinner(iframe) {
  var iframeContainer = document.createElement('div');
  var img = createSpinnerImage();
  iframeContainer.appendChild(img);
  iframeContainer.appendChild(iframe);
  addIframeLoadEvent(iframeContainer, img, iframe);
  return iframeContainer;
}

function createIframe() {
  var _Object$fromEntries = Object.fromEntries(new URLSearchParams(window.location.search)),
      page = _Object$fromEntries.page,
      query = _objectWithoutProperties(_Object$fromEntries, _excluded);

  var iframeSrcUrl = _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.iframeUrl;
  var tourId = query['leadin_tour_id'];
  var justConnected = query['leadin_just_connected'];
  var routeKey = "".concat(page).concat(Object.entries(query).reduce(function (agg, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key.includes('leadin_route')) {
      return "".concat(agg).concat(value);
    }

    return agg;
  }, ''));
  var routeValue = _constants_urlsMap__WEBPACK_IMPORTED_MODULE_2__["default"][routeKey];

  if (routeValue && !justConnected) {
    var urlObject = new URL(iframeSrcUrl);
    urlObject.pathname = routeValue;

    if (tourId) {
      urlObject.searchParams.append('tourId', tourId);
    }

    iframeSrcUrl = urlObject.toString();
  }

  var link = _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.impactLink ? "".concat(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.impactLink, "?u=").concat(encodeURIComponent("".concat(iframeSrcUrl)), "&trackConsent=0") : iframeSrcUrl;
  var iframe = createIframeElement(link);
  (0,_lib_Interframe__WEBPACK_IMPORTED_MODULE_0__.initInterframe)(iframe);
  return withLoadingSpinner(iframe);
}
function createBackgroundIframe() {
  var iframe = createIframeElement(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.backgroundIframeUrl);
  iframe.style.display = 'none';
  (0,_lib_Interframe__WEBPACK_IMPORTED_MODULE_0__.initInterframe)(iframe);
  document.body.appendChild(iframe);
}

/***/ }),

/***/ "./scripts/lib/Interframe.ts":
/*!***********************************!*\
  !*** ./scripts/lib/Interframe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initInterframe": () => (/* binding */ initInterframe)
/* harmony export */ });
/* harmony import */ var penpal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! penpal */ "./node_modules/penpal/lib/index.js");
/* harmony import */ var _Raven__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Raven */ "./scripts/lib/Raven.ts");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation */ "./scripts/navigation.ts");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _utils_queryParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/queryParams */ "./scripts/utils/queryParams.ts");
/* harmony import */ var _utils_portalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/portalInfo */ "./scripts/utils/portalInfo.ts");
/* harmony import */ var _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/wordpressApiClient */ "./scripts/api/wordpressApiClient.ts");
/* harmony import */ var _utils_sideNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/sideNav */ "./scripts/utils/sideNav.ts");
/* harmony import */ var _gutenberg_MeetingsBlock_MeetingGutenbergInterframe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gutenberg/MeetingsBlock/MeetingGutenbergInterframe */ "./scripts/gutenberg/MeetingsBlock/MeetingGutenbergInterframe.ts");









var methods = {
  leadinClearQueryParam: _utils_queryParams__WEBPACK_IMPORTED_MODULE_4__.leadinClearQueryParam,
  leadinPageReload: _navigation__WEBPACK_IMPORTED_MODULE_2__.leadinPageReload,
  leadinPageRedirect: _navigation__WEBPACK_IMPORTED_MODULE_2__.leadinPageRedirect,
  leadinGetPortalInfo: _utils_portalInfo__WEBPACK_IMPORTED_MODULE_5__.leadinGetPortalInfo,
  leadinDisconnectPortal: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.leadinDisconnectPortal,
  getLeadinConfig: function getLeadinConfig() {
    return _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_3__;
  },
  setLeadinUnAuthedNavigation: _utils_sideNav__WEBPACK_IMPORTED_MODULE_7__.setLeadinUnAuthedNavigation,
  makeInterframeProxyRequest: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.makeInterframeProxyRequest,
  fetchOAuthToken: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.fetchOAuthToken,
  fetchRefreshToken: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.fetchRefreshToken,
  skipReview: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.skipReview,
  updateHublet: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.updateHublet,
  trackConsent: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.trackConsent,
  disableInternalTracking: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.disableInternalTracking,
  fetchDisableInternalTracking: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.fetchDisableInternalTracking,
  gutenbergTriggerConnectCalendarRefresh: _gutenberg_MeetingsBlock_MeetingGutenbergInterframe__WEBPACK_IMPORTED_MODULE_8__.gutenbergTriggerConnectCalendarRefresh,
  setBusinessUnitId: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.setBusinessUnitId,
  getBusinessUnitId: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.getBusinessUnitId,
  getBusinessUnits: _api_wordpressApiClient__WEBPACK_IMPORTED_MODULE_6__.getBusinessUnits
};
var UNAUTHORIZED = 'unauthorized';
var REDIRECT = 'REDIRECT';
var hubspotBaseUrl = _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_3__.hubspotBaseUrl;

function createConnectionToIframe(iframe) {
  return penpal__WEBPACK_IMPORTED_MODULE_0__["default"].connectToChild({
    url: iframe.src,
    // The iframe to which a connection should be made
    iframe: iframe,
    // Methods the parent is exposing to the child
    methods: methods
  });
}

function initInterframe(iframe) {
  //@ts-expect-error global
  if (!window.leadinChildFrameConnection) {
    //@ts-expect-error global
    window.leadinChildFrameConnection = createConnectionToIframe(iframe); //@ts-expect-error global

    window.leadinChildFrameConnection.promise["catch"](function (error) {
      _Raven__WEBPACK_IMPORTED_MODULE_1__["default"].captureException(error, {
        fingerprint: ['INTERFRAME_CONNECTION_ERROR']
      });
    });
  }

  var redirectToLogin = function redirectToLogin(event) {
    if (event.data === UNAUTHORIZED) {
      window.removeEventListener('message', redirectToLogin);
      iframe.src = _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_3__.loginUrl;
      (0,_utils_sideNav__WEBPACK_IMPORTED_MODULE_7__.setLeadinUnAuthedNavigation)();
    }
  };

  var handleNavigation = function handleNavigation(event) {
    if (event.origin !== hubspotBaseUrl) return;

    try {
      var data = JSON.parse(event.data);

      if (data['leadin_sync_route']) {
        var route = data['leadin_sync_route'];
        var search = data['leadin_sync_search'];
        (0,_navigation__WEBPACK_IMPORTED_MODULE_2__.syncRoute)(route, (0,_utils_queryParams__WEBPACK_IMPORTED_MODULE_4__.filterLeadinQueryParams)(search));
      } else if (data['message'] === REDIRECT) {
        window.location.href = data['url'];
      }
    } catch (e) {// Error in parsing message
    }
  };

  var currentPage = (0,_utils_queryParams__WEBPACK_IMPORTED_MODULE_4__.getQueryParam)('page');

  if (currentPage !== 'leadin_settings' && currentPage !== 'leadin' && currentPage !== 'leadin_user_guide') {
    window.addEventListener('message', redirectToLogin);
  }

  window.addEventListener('message', handleNavigation);
}

/***/ }),

/***/ "./scripts/lib/Raven.ts":
/*!******************************!*\
  !*** ./scripts/lib/Raven.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureRaven": () => (/* binding */ configureRaven),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raven-js */ "./node_modules/raven-js/src/singleton.js");
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raven_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");


function configureRaven() {
  if (_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.hubspotBaseUrl.indexOf('app.hubspot.com') === -1) {
    return;
  }

  raven_js__WEBPACK_IMPORTED_MODULE_0___default().config('https://e9b8f382cdd130c0d415cd977d2be56f@exceptions.hubspot.com/1', {
    instrument: {
      tryCatch: false
    },
    release: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.leadinPluginVersion
  }).install();
  raven_js__WEBPACK_IMPORTED_MODULE_0___default().setTagsContext({
    v: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.leadinPluginVersion,
    php: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.phpVersion,
    wordpress: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.wpVersion
  });
  raven_js__WEBPACK_IMPORTED_MODULE_0___default().setExtraContext({
    hub: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.portalId,
    plugins: Object.keys(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.plugins).map(function (name) {
      return "".concat(name, "#").concat(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.plugins[name]);
    }).join(',')
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((raven_js__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./scripts/navigation.ts":
/*!*******************************!*\
  !*** ./scripts/navigation.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leadinPageRedirect": () => (/* binding */ leadinPageRedirect),
/* harmony export */   "leadinPageReload": () => (/* binding */ leadinPageReload),
/* harmony export */   "syncRoute": () => (/* binding */ syncRoute)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/selectors */ "./scripts/constants/selectors.ts");
/* harmony import */ var _constants_urlsMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/urlsMap */ "./scripts/constants/urlsMap.ts");




function setSelectedMenuItem(url) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_1__.domElements.subMenuButtons).removeClass('current');
  var match = url.match(/\?page=leadin_?\w*/);

  if (match) {
    var pageParam = match[0];
    var selectedElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()("a[href=\"admin.php".concat(pageParam, "\"]"));
    selectedElement.parent().addClass('current');
  }
} // Given a route like "/settings/forms", parse it into "?page=leadin_settings&leadin_route[]=forms"


function syncRoute() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var searchQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var baseUrls = Object.keys(_constants_urlsMap__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(function (a, b) {
    return a.length < b.length ? 1 : -1;
  });
  var wpPage;
  var route = '';
  baseUrls.some(function (basePath) {
    if (path.indexOf(basePath) === 0) {
      wpPage = _constants_urlsMap__WEBPACK_IMPORTED_MODULE_2__["default"][basePath][0];
      var routePrefix = _constants_urlsMap__WEBPACK_IMPORTED_MODULE_2__["default"][basePath][1] || '';
      var cleanedPath = path.replace(basePath, '');
      route = "".concat(routePrefix).concat(cleanedPath).replace(/^\/+/, '');
      return true;
    }

    return false;
  });

  if (!wpPage) {
    return;
  }

  var leadinRouteParam = route ? "&".concat(route.split('/').map(function (subRoute) {
    return "".concat(encodeURIComponent("leadin_route[]"), "=").concat(subRoute);
  }).join('&')) : '';
  var leadinSearchParam = searchQuery.length ? "&leadin_search=".concat(encodeURIComponent(searchQuery)) : ''; // @ts-expect-error Global

  var nonce = window.leadinConfig ? // @ts-expect-error Global
  "&_wpnonce=".concat(window.leadinConfig.routeNonce) : '';
  var newUrl = "?page=".concat(wpPage).concat(leadinRouteParam).concat(leadinSearchParam).concat(nonce);
  setSelectedMenuItem(newUrl);
  window.history.replaceState(null, '', newUrl);
}
var leadinPageReload = function leadinPageReload() {
  return window.location.reload();
};
var leadinPageRedirect = function leadinPageRedirect(path) {
  syncRoute(path);
  leadinPageReload();
};

/***/ }),

/***/ "./scripts/utils/appUtils.ts":
/*!***********************************!*\
  !*** ./scripts/utils/appUtils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initApp": () => (/* binding */ initApp),
/* harmony export */   "initAppOnReady": () => (/* binding */ initAppOnReady)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Raven__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Raven */ "./scripts/lib/Raven.ts");


function initApp(initFn) {
  (0,_lib_Raven__WEBPACK_IMPORTED_MODULE_1__.configureRaven)();
  _lib_Raven__WEBPACK_IMPORTED_MODULE_1__["default"].context(initFn);
}
function initAppOnReady(initFn) {
  function main() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(initFn);
  }

  initApp(main);
}

/***/ }),

/***/ "./scripts/utils/backgroundAppUtils.ts":
/*!*********************************************!*\
  !*** ./scripts/utils/backgroundAppUtils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initBackgroundApp": () => (/* binding */ initBackgroundApp),
/* harmony export */   "initMonitorGutenberBlockPreview": () => (/* binding */ initMonitorGutenberBlockPreview)
/* harmony export */ });
/* harmony import */ var _lib_Raven__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Raven */ "./scripts/lib/Raven.ts");
/* harmony import */ var _iframe_iframeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../iframe/iframeUtils */ "./scripts/iframe/iframeUtils.ts");
/* harmony import */ var _appUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appUtils */ "./scripts/utils/appUtils.ts");



function initBackgroundApp(initFn) {
  function main() {
    (0,_iframe_iframeUtils__WEBPACK_IMPORTED_MODULE_1__.createBackgroundIframe)();

    if (Array.isArray(initFn)) {
      initFn.forEach(function (callback) {
        return callback();
      });
    } else {
      initFn();
    }
  }

  (0,_appUtils__WEBPACK_IMPORTED_MODULE_2__.initApp)(main);
}
function initMonitorGutenberBlockPreview() {
  var formsPreviewTimeouts = {}; // This listener is responsible to monitor the form previews are rendered correctly

  window.addEventListener('message', function (event) {
    if (event.data.type === 'hsFormCallback') {
      var formId = event.data.id;

      if (event.data.eventName === 'onBeforeFormInit') {
        formsPreviewTimeouts[formId] = setTimeout(function () {
          _lib_Raven__WEBPACK_IMPORTED_MODULE_0__["default"].captureMessage("The form preview ".concat(formId, " has not been rendered correctly."));
        }, 10 * 1000);
      }

      if (event.data.eventName === 'onFormReady') {
        clearTimeout(formsPreviewTimeouts[formId]);
      }
    }
  });
}

/***/ }),

/***/ "./scripts/utils/portalInfo.ts":
/*!*************************************!*\
  !*** ./scripts/utils/portalInfo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leadinGetPortalInfo": () => (/* binding */ leadinGetPortalInfo)
/* harmony export */ });
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");

var leadinGetPortalInfo = function leadinGetPortalInfo() {
  return {
    portalDomain: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_0__.portalDomain,
    portalId: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_0__.portalId,
    portalEmail: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_0__.portalEmail,
    accountName: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_0__.accountName
  };
};

/***/ }),

/***/ "./scripts/utils/queryParams.ts":
/*!**************************************!*\
  !*** ./scripts/utils/queryParams.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addQueryObjectToUrl": () => (/* binding */ addQueryObjectToUrl),
/* harmony export */   "filterLeadinQueryParams": () => (/* binding */ filterLeadinQueryParams),
/* harmony export */   "getQueryParam": () => (/* binding */ getQueryParam),
/* harmony export */   "leadinClearQueryParam": () => (/* binding */ leadinClearQueryParam)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function leadinClearQueryParam() {
  var currentWindowLocation = window.location.toString();

  if (currentWindowLocation.indexOf('?') > 0) {
    currentWindowLocation = currentWindowLocation.substring(0, currentWindowLocation.indexOf('?'));
  }

  var newWindowLocation = "".concat(currentWindowLocation, "?page=leadin");
  window.history.pushState({}, '', newWindowLocation);
}
function getQueryParam(key) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (decodeURIComponent(pair[0]) === key) {
      return decodeURIComponent(pair[1]);
    }
  }

  return null;
}
function filterLeadinQueryParams(searchString) {
  if (!searchString) return '';
  var pairs = searchString.slice(1).split('&');
  var filteredSearch = pairs.reduce(function (paramsMap, pair) {
    var _pair$split = pair.split('='),
        _pair$split2 = _slicedToArray(_pair$split, 2),
        key = _pair$split2[0],
        value = _pair$split2[1];

    if (key && _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_1__.leadinQueryParamsKeys.indexOf(key) === -1) {
      paramsMap[key] = value;
    }

    return paramsMap;
  }, {});
  return jquery__WEBPACK_IMPORTED_MODULE_0___default().param(filteredSearch);
}
function addQueryObjectToUrl(urlObject, queryParams) {
  Object.keys(queryParams).forEach(function (key) {
    urlObject.searchParams.append(key, queryParams[key]);
  });
}

/***/ }),

/***/ "./scripts/utils/sideNav.ts":
/*!**********************************!*\
  !*** ./scripts/utils/sideNav.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/penpal/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/penpal/lib/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ERR_IFRAME_ALREADY_ATTACHED_TO_DOM = exports.ERR_NOT_IN_IFRAME = exports.ERR_CONNECTION_TIMEOUT = exports.ERR_CONNECTION_DESTROYED = void 0;
var HANDSHAKE = 'handshake';
var HANDSHAKE_REPLY = 'handshake-reply';
var CALL = 'call';
var REPLY = 'reply';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';
var MESSAGE = 'message';
var DATA_CLONE_ERROR = 'DataCloneError';
var ERR_CONNECTION_DESTROYED = 'ConnectionDestroyed';
exports.ERR_CONNECTION_DESTROYED = ERR_CONNECTION_DESTROYED;
var ERR_CONNECTION_TIMEOUT = 'ConnectionTimeout';
exports.ERR_CONNECTION_TIMEOUT = ERR_CONNECTION_TIMEOUT;
var ERR_NOT_IN_IFRAME = 'NotInIframe';
exports.ERR_NOT_IN_IFRAME = ERR_NOT_IN_IFRAME;
var ERR_IFRAME_ALREADY_ATTACHED_TO_DOM = 'IframeAlreadyAttachedToDom';
exports.ERR_IFRAME_ALREADY_ATTACHED_TO_DOM = ERR_IFRAME_ALREADY_ATTACHED_TO_DOM;
var CHECK_IFRAME_IN_DOC_INTERVAL = 60000;
var DEFAULT_PORTS = {
  'http:': '80',
  'https:': '443'
};
var URL_REGEX = /^(https?:|file:)?\/\/([^/:]+)?(:(\d+))?/;
var Penpal = {
  ERR_CONNECTION_DESTROYED: ERR_CONNECTION_DESTROYED,
  ERR_CONNECTION_TIMEOUT: ERR_CONNECTION_TIMEOUT,
  ERR_NOT_IN_IFRAME: ERR_NOT_IN_IFRAME,
  ERR_IFRAME_ALREADY_ATTACHED_TO_DOM: ERR_IFRAME_ALREADY_ATTACHED_TO_DOM,

  /**
   * Promise implementation.
   * @type {Constructor}
   */
  Promise: function () {
    try {
      return window ? window.Promise : null;
    } catch (e) {
      return null;
    }
  }(),

  /**
   * Whether debug messages should be logged.
   * @type {boolean}
   */
  debug: false
};
/**
 * @return {number} A unique ID (not universally unique)
 */

var generateId = function () {
  var id = 0;
  return function () {
    return ++id;
  };
}();
/**
 * Logs a message.
 * @param {...*} args One or more items to log
 */


var log = function log() {
  if (Penpal.debug) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_console = console).log.apply(_console, ['[Penpal]'].concat(args)); // eslint-disable-line no-console

  }
};
/**
 * Converts a URL into an origin.
 * @param {string} url
 * @return {string} The URL's origin
 */


var getOriginFromUrl = function getOriginFromUrl(url) {
  var location = document.location;
  var regexResult = URL_REGEX.exec(url);
  var protocol;
  var hostname;
  var port;

  if (regexResult) {
    // It's an absolute URL. Use the parsed info.
    // regexResult[1] will be undefined if the URL starts with //
    protocol = regexResult[1] ? regexResult[1] : location.protocol;
    hostname = regexResult[2];
    port = regexResult[4];
  } else {
    // It's a relative path. Use the current location's info.
    protocol = location.protocol;
    hostname = location.hostname;
    port = location.port;
  } // If the protocol is file, the origin is "null"
  // The origin of a document with file protocol is an opaque origin
  // and its serialization "null" [1]
  // [1] https://html.spec.whatwg.org/multipage/origin.html#origin


  if (protocol === "file:") {
    return "null";
  } // If the port is the default for the protocol, we don't want to add it to the origin string
  // or it won't match the message's event.origin.


  var portSuffix = port && port !== DEFAULT_PORTS[protocol] ? ":".concat(port) : '';
  return "".concat(protocol, "//").concat(hostname).concat(portSuffix);
};
/**
 * A simplified promise class only used internally for when destroy() is called. This is
 * used to destroy connections synchronously while promises typically resolve asynchronously.
 *
 * @param {Function} executor
 * @returns {Object}
 * @constructor
 */


var DestructionPromise = function DestructionPromise(executor) {
  var handlers = [];
  executor(function () {
    handlers.forEach(function (handler) {
      handler();
    });
  });
  return {
    then: function then(handler) {
      handlers.push(handler);
    }
  };
};
/**
 * Converts an error object into a plain object.
 * @param {Error} Error object.
 * @returns {Object}
 */


var serializeError = function serializeError(_ref) {
  var name = _ref.name,
      message = _ref.message,
      stack = _ref.stack;
  return {
    name: name,
    message: message,
    stack: stack
  };
};
/**
 * Converts a plain object into an error object.
 * @param {Object} Object with error properties.
 * @returns {Error}
 */


var deserializeError = function deserializeError(obj) {
  var deserializedError = new Error();
  Object.keys(obj).forEach(function (key) {
    return deserializedError[key] = obj[key];
  });
  return deserializedError;
};
/**
 * Augments an object with methods that match those defined by the remote. When these methods are
 * called, a "call" message will be sent to the remote, the remote's corresponding method will be
 * executed, and the method's return value will be returned via a message.
 * @param {Object} callSender Sender object that should be augmented with methods.
 * @param {Object} info Information about the local and remote windows.
 * @param {Array} methodNames Names of methods available to be called on the remote.
 * @param {Promise} destructionPromise A promise resolved when destroy() is called on the penpal
 * connection.
 * @returns {Object} The call sender object with methods that may be called.
 */


var connectCallSender = function connectCallSender(callSender, info, methodNames, destroy, destructionPromise) {
  var localName = info.localName,
      local = info.local,
      remote = info.remote,
      remoteOrigin = info.remoteOrigin;
  var destroyed = false;
  log("".concat(localName, ": Connecting call sender"));

  var createMethodProxy = function createMethodProxy(methodName) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      log("".concat(localName, ": Sending ").concat(methodName, "() call")); // This handles the case where the iframe has been removed from the DOM
      // (and therefore its window closed), the consumer has not yet
      // called destroy(), and the user calls a method exposed by
      // the remote. We detect the iframe has been removed and force
      // a destroy() immediately so that the consumer sees the error saying
      // the connection has been destroyed.

      if (remote.closed) {
        destroy();
      }

      if (destroyed) {
        var error = new Error("Unable to send ".concat(methodName, "() call due ") + "to destroyed connection");
        error.code = ERR_CONNECTION_DESTROYED;
        throw error;
      }

      return new Penpal.Promise(function (resolve, reject) {
        var id = generateId();

        var handleMessageEvent = function handleMessageEvent(event) {
          if (event.source === remote && event.origin === remoteOrigin && event.data.penpal === REPLY && event.data.id === id) {
            log("".concat(localName, ": Received ").concat(methodName, "() reply"));
            local.removeEventListener(MESSAGE, handleMessageEvent);
            var returnValue = event.data.returnValue;

            if (event.data.returnValueIsError) {
              returnValue = deserializeError(returnValue);
            }

            (event.data.resolution === FULFILLED ? resolve : reject)(returnValue);
          }
        };

        local.addEventListener(MESSAGE, handleMessageEvent);
        remote.postMessage({
          penpal: CALL,
          id: id,
          methodName: methodName,
          args: args
        }, remoteOrigin);
      });
    };
  };

  destructionPromise.then(function () {
    destroyed = true;
  });
  methodNames.reduce(function (api, methodName) {
    api[methodName] = createMethodProxy(methodName);
    return api;
  }, callSender);
};
/**
 * Listens for "call" messages coming from the remote, executes the corresponding method, and
 * responds with the return value.
 * @param {Object} info Information about the local and remote windows.
 * @param {Object} methods The keys are the names of the methods that can be called by the remote
 * while the values are the method functions.
 * @param {Promise} destructionPromise A promise resolved when destroy() is called on the penpal
 * connection.
 * @returns {Function} A function that may be called to disconnect the receiver.
 */


var connectCallReceiver = function connectCallReceiver(info, methods, destructionPromise) {
  var localName = info.localName,
      local = info.local,
      remote = info.remote,
      remoteOrigin = info.remoteOrigin;
  var destroyed = false;
  log("".concat(localName, ": Connecting call receiver"));

  var handleMessageEvent = function handleMessageEvent(event) {
    if (event.source === remote && event.origin === remoteOrigin && event.data.penpal === CALL) {
      var _event$data = event.data,
          methodName = _event$data.methodName,
          args = _event$data.args,
          id = _event$data.id;
      log("".concat(localName, ": Received ").concat(methodName, "() call"));

      if (methodName in methods) {
        var createPromiseHandler = function createPromiseHandler(resolution) {
          return function (returnValue) {
            log("".concat(localName, ": Sending ").concat(methodName, "() reply"));

            if (destroyed) {
              // It's possible to throw an error here, but it would need to be thrown asynchronously
              // and would only be catchable using window.onerror. This is because the consumer
              // is merely returning a value from their method and not calling any function
              // that they could wrap in a try-catch. Even if the consumer were to catch the error,
              // the value of doing so is questionable. Instead, we'll just log a message.
              log("".concat(localName, ": Unable to send ").concat(methodName, "() reply due to destroyed connection"));
              return;
            }

            var message = {
              penpal: REPLY,
              id: id,
              resolution: resolution,
              returnValue: returnValue
            };

            if (resolution === REJECTED && returnValue instanceof Error) {
              message.returnValue = serializeError(returnValue);
              message.returnValueIsError = true;
            }

            try {
              remote.postMessage(message, remoteOrigin);
            } catch (err) {
              // If a consumer attempts to send an object that's not cloneable (e.g., window),
              // we want to ensure the receiver's promise gets rejected.
              if (err.name === DATA_CLONE_ERROR) {
                remote.postMessage({
                  penpal: REPLY,
                  id: id,
                  resolution: REJECTED,
                  returnValue: serializeError(err),
                  returnValueIsError: true
                }, remoteOrigin);
              }

              throw err;
            }
          };
        };

        new Penpal.Promise(function (resolve) {
          return resolve(methods[methodName].apply(methods, args));
        }).then(createPromiseHandler(FULFILLED), createPromiseHandler(REJECTED));
      }
    }
  };

  local.addEventListener(MESSAGE, handleMessageEvent);
  destructionPromise.then(function () {
    destroyed = true;
    local.removeEventListener(MESSAGE, handleMessageEvent);
  });
};
/**
 * @typedef {Object} Child
 * @property {Promise} promise A promise which will be resolved once a connection has
 * been established.
 * @property {HTMLIframeElement} iframe The created iframe element.
 * @property {Function} destroy A method that, when called, will remove the iframe element from
 * the DOM and clean up event listeners.
 */

/**
 * Creates an iframe, loads a webpage into the URL, and attempts to establish communication with
 * the iframe.
 * @param {Object} options
 * @param {string} options.url The URL of the webpage that should be loaded into the created iframe.
 * @param {HTMLElement} [options.appendTo] The container to which the iframe should be appended.
 * @param {Object} [options.methods={}] Methods that may be called by the iframe.
 * @param {Number} [options.timeout] The amount of time, in milliseconds, Penpal should wait
 * for the child to respond before rejecting the connection promise.
 * @return {Child}
 */


Penpal.connectToChild = function (_ref2) {
  var url = _ref2.url,
      appendTo = _ref2.appendTo,
      iframe = _ref2.iframe,
      _ref2$methods = _ref2.methods,
      methods = _ref2$methods === void 0 ? {} : _ref2$methods,
      timeout = _ref2.timeout;

  if (iframe && iframe.parentNode) {
    var error = new Error('connectToChild() must not be called with an iframe already attached to DOM');
    error.code = ERR_IFRAME_ALREADY_ATTACHED_TO_DOM;
    throw error;
  }

  var destroy;
  var connectionDestructionPromise = new DestructionPromise(function (resolveConnectionDestructionPromise) {
    destroy = resolveConnectionDestructionPromise;
  });
  var parent = window;
  iframe = iframe || document.createElement('iframe');
  iframe.src = url;
  var childOrigin = getOriginFromUrl(url);
  var promise = new Penpal.Promise(function (resolveConnectionPromise, reject) {
    var connectionTimeoutId;

    if (timeout !== undefined) {
      connectionTimeoutId = setTimeout(function () {
        var error = new Error("Connection to child timed out after ".concat(timeout, "ms"));
        error.code = ERR_CONNECTION_TIMEOUT;
        reject(error);
        destroy();
      }, timeout);
    } // We resolve the promise with the call sender. If the child reconnects (for example, after
    // refreshing or navigating to another page that uses Penpal, we'll update the call sender
    // with methods that match the latest provided by the child.


    var callSender = {};
    var receiverMethodNames;
    var destroyCallReceiver;

    var handleMessage = function handleMessage(event) {
      var child = iframe.contentWindow;

      if (event.source === child && event.origin === childOrigin && event.data.penpal === HANDSHAKE) {
        log('Parent: Received handshake, sending reply'); // If event.origin is "null", the remote protocol is file:
        // and we must post messages with "*" as targetOrigin [1]
        // [1] https://developer.mozilla.org/fr/docs/Web/API/Window/postMessage#Utiliser_window.postMessage_dans_les_extensions

        var remoteOrigin = event.origin === "null" ? "*" : event.origin;
        event.source.postMessage({
          penpal: HANDSHAKE_REPLY,
          methodNames: Object.keys(methods)
        }, remoteOrigin);
        var info = {
          localName: 'Parent',
          local: parent,
          remote: child,
          remoteOrigin: remoteOrigin
        }; // If the child reconnected, we need to destroy the previous call receiver before setting
        // up a new one.

        if (destroyCallReceiver) {
          destroyCallReceiver();
        } // When this promise is resolved, it will destroy the call receiver (stop listening to
        // method calls from the child) and delete its methods off the call sender.


        var callReceiverDestructionPromise = new DestructionPromise(function (resolveCallReceiverDestructionPromise) {
          connectionDestructionPromise.then(resolveCallReceiverDestructionPromise);
          destroyCallReceiver = resolveCallReceiverDestructionPromise;
        });
        connectCallReceiver(info, methods, callReceiverDestructionPromise); // If the child reconnected, we need to remove the methods from the previous call receiver
        // off the sender.

        if (receiverMethodNames) {
          receiverMethodNames.forEach(function (receiverMethodName) {
            delete callSender[receiverMethodName];
          });
        }

        receiverMethodNames = event.data.methodNames;
        connectCallSender(callSender, info, receiverMethodNames, destroy, connectionDestructionPromise);
        clearTimeout(connectionTimeoutId);
        resolveConnectionPromise(callSender);
      }
    };

    parent.addEventListener(MESSAGE, handleMessage);
    log('Parent: Loading iframe');
    (appendTo || document.body).appendChild(iframe); // This is to prevent memory leaks when the iframe is removed
    // from the document and the consumer hasn't called destroy().
    // Without this, event listeners attached to the window would
    // stick around and since the event handlers have a reference
    // to the iframe in their closures, the iframe would stick around
    // too.

    var checkIframeInDocIntervalId = setInterval(function () {
      if (!document.body.contains(iframe)) {
        clearInterval(checkIframeInDocIntervalId);
        destroy();
      }
    }, CHECK_IFRAME_IN_DOC_INTERVAL);
    connectionDestructionPromise.then(function () {
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }

      parent.removeEventListener(MESSAGE, handleMessage);
      clearInterval(checkIframeInDocIntervalId);
      var error = new Error('Connection destroyed');
      error.code = ERR_CONNECTION_DESTROYED;
      reject(error);
    });
  });
  return {
    promise: promise,
    iframe: iframe,
    destroy: destroy
  };
};
/**
 * @typedef {Object} Parent
 * @property {Promise} promise A promise which will be resolved once a connection has
 * been established.
 */

/**
 * Attempts to establish communication with the parent window.
 * @param {Object} options
 * @param {string} [options.parentOrigin=*] Valid parent origin used to restrict communication.
 * @param {Object} [options.methods={}] Methods that may be called by the parent window.
 * @param {Number} [options.timeout] The amount of time, in milliseconds, Penpal should wait
 * for the parent to respond before rejecting the connection promise.
 * @return {Parent}
 */


Penpal.connectToParent = function () {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$parentOrigin = _ref3.parentOrigin,
      parentOrigin = _ref3$parentOrigin === void 0 ? '*' : _ref3$parentOrigin,
      _ref3$methods = _ref3.methods,
      methods = _ref3$methods === void 0 ? {} : _ref3$methods,
      timeout = _ref3.timeout;

  if (window === window.top) {
    var error = new Error('connectToParent() must be called within an iframe');
    error.code = ERR_NOT_IN_IFRAME;
    throw error;
  }

  var destroy;
  var connectionDestructionPromise = new DestructionPromise(function (resolveConnectionDestructionPromise) {
    destroy = resolveConnectionDestructionPromise;
  });
  var child = window;
  var parent = child.parent;
  var promise = new Penpal.Promise(function (resolveConnectionPromise, reject) {
    var connectionTimeoutId;

    if (timeout !== undefined) {
      connectionTimeoutId = setTimeout(function () {
        var error = new Error("Connection to parent timed out after ".concat(timeout, "ms"));
        error.code = ERR_CONNECTION_TIMEOUT;
        reject(error);
        destroy();
      }, timeout);
    }

    var handleMessageEvent = function handleMessageEvent(event) {
      if ((parentOrigin === '*' || parentOrigin === event.origin) && event.source === parent && event.data.penpal === HANDSHAKE_REPLY) {
        log('Child: Received handshake reply');
        child.removeEventListener(MESSAGE, handleMessageEvent);
        var info = {
          localName: 'Child',
          local: child,
          remote: parent,
          remoteOrigin: event.origin
        };
        var callSender = {};
        connectCallReceiver(info, methods, connectionDestructionPromise);
        connectCallSender(callSender, info, event.data.methodNames, destroy, connectionDestructionPromise);
        clearTimeout(connectionTimeoutId);
        resolveConnectionPromise(callSender);
      }
    };

    child.addEventListener(MESSAGE, handleMessageEvent);
    connectionDestructionPromise.then(function () {
      child.removeEventListener(MESSAGE, handleMessageEvent);
      var error = new Error('Connection destroyed');
      error.code = ERR_CONNECTION_DESTROYED;
      reject(error);
    });
    log('Child: Sending handshake');
    parent.postMessage({
      penpal: HANDSHAKE,
      methodNames: Object.keys(methods)
    }, parentOrigin);
  });
  return {
    promise: promise,
    destroy: destroy
  };
};

var _default = Penpal;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/raven-js/src/configError.js":
/*!**************************************************!*\
  !*** ./node_modules/raven-js/src/configError.js ***!
  \**************************************************/
/***/ ((module) => {

function RavenConfigError(message) {
  this.name = 'RavenConfigError';
  this.message = message;
}
RavenConfigError.prototype = new Error();
RavenConfigError.prototype.constructor = RavenConfigError;

module.exports = RavenConfigError;


/***/ }),

/***/ "./node_modules/raven-js/src/console.js":
/*!**********************************************!*\
  !*** ./node_modules/raven-js/src/console.js ***!
  \**********************************************/
/***/ ((module) => {

var wrapMethod = function(console, level, callback) {
  var originalConsoleLevel = console[level];
  var originalConsole = console;

  if (!(level in console)) {
    return;
  }

  var sentryLevel = level === 'warn' ? 'warning' : level;

  console[level] = function() {
    var args = [].slice.call(arguments);

    var msg = '' + args.join(' ');
    var data = {level: sentryLevel, logger: 'console', extra: {arguments: args}};

    if (level === 'assert') {
      if (args[0] === false) {
        // Default browsers message
        msg = 'Assertion failed: ' + (args.slice(1).join(' ') || 'console.assert');
        data.extra.arguments = args.slice(1);
        callback && callback(msg, data);
      }
    } else {
      callback && callback(msg, data);
    }

    // this fails for some browsers. :(
    if (originalConsoleLevel) {
      // IE9 doesn't allow calling apply on console functions directly
      // See: https://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function#answer-5473193
      Function.prototype.apply.call(originalConsoleLevel, originalConsole, args);
    }
  };
};

module.exports = {
  wrapMethod: wrapMethod
};


/***/ }),

/***/ "./node_modules/raven-js/src/raven.js":
/*!********************************************!*\
  !*** ./node_modules/raven-js/src/raven.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*global XDomainRequest:false */

var TraceKit = __webpack_require__(/*! ../vendor/TraceKit/tracekit */ "./node_modules/raven-js/vendor/TraceKit/tracekit.js");
var stringify = __webpack_require__(/*! ../vendor/json-stringify-safe/stringify */ "./node_modules/raven-js/vendor/json-stringify-safe/stringify.js");
var RavenConfigError = __webpack_require__(/*! ./configError */ "./node_modules/raven-js/src/configError.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/raven-js/src/utils.js");
var isError = utils.isError;
var isObject = utils.isObject;
var isObject = utils.isObject;
var isErrorEvent = utils.isErrorEvent;
var isUndefined = utils.isUndefined;
var isFunction = utils.isFunction;
var isString = utils.isString;
var isEmptyObject = utils.isEmptyObject;
var each = utils.each;
var objectMerge = utils.objectMerge;
var truncate = utils.truncate;
var objectFrozen = utils.objectFrozen;
var hasKey = utils.hasKey;
var joinRegExp = utils.joinRegExp;
var urlencode = utils.urlencode;
var uuid4 = utils.uuid4;
var htmlTreeAsString = utils.htmlTreeAsString;
var isSameException = utils.isSameException;
var isSameStacktrace = utils.isSameStacktrace;
var parseUrl = utils.parseUrl;
var fill = utils.fill;

var wrapConsoleMethod = (__webpack_require__(/*! ./console */ "./node_modules/raven-js/src/console.js").wrapMethod);

var dsnKeys = 'source protocol user pass host port path'.split(' '),
  dsnPattern = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

function now() {
  return +new Date();
}

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window =
  typeof window !== 'undefined'
    ? window
    : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};
var _document = _window.document;
var _navigator = _window.navigator;

function keepOriginalCallback(original, callback) {
  return isFunction(callback)
    ? function(data) {
        return callback(data, original);
      }
    : callback;
}

// First, check for JSON support
// If there is no JSON, we no-op the core features of Raven
// since JSON is required to encode the payload
function Raven() {
  this._hasJSON = !!(typeof JSON === 'object' && JSON.stringify);
  // Raven can run in contexts where there's no document (react-native)
  this._hasDocument = !isUndefined(_document);
  this._hasNavigator = !isUndefined(_navigator);
  this._lastCapturedException = null;
  this._lastData = null;
  this._lastEventId = null;
  this._globalServer = null;
  this._globalKey = null;
  this._globalProject = null;
  this._globalContext = {};
  this._globalOptions = {
    logger: 'javascript',
    ignoreErrors: [],
    ignoreUrls: [],
    whitelistUrls: [],
    includePaths: [],
    collectWindowErrors: true,
    maxMessageLength: 0,

    // By default, truncates URL values to 250 chars
    maxUrlLength: 250,
    stackTraceLimit: 50,
    autoBreadcrumbs: true,
    instrument: true,
    sampleRate: 1
  };
  this._ignoreOnError = 0;
  this._isRavenInstalled = false;
  this._originalErrorStackTraceLimit = Error.stackTraceLimit;
  // capture references to window.console *and* all its methods first
  // before the console plugin has a chance to monkey patch
  this._originalConsole = _window.console || {};
  this._originalConsoleMethods = {};
  this._plugins = [];
  this._startTime = now();
  this._wrappedBuiltIns = [];
  this._breadcrumbs = [];
  this._lastCapturedEvent = null;
  this._keypressTimeout;
  this._location = _window.location;
  this._lastHref = this._location && this._location.href;
  this._resetBackoff();

  // eslint-disable-next-line guard-for-in
  for (var method in this._originalConsole) {
    this._originalConsoleMethods[method] = this._originalConsole[method];
  }
}

/*
 * The core Raven singleton
 *
 * @this {Raven}
 */

Raven.prototype = {
  // Hardcode version string so that raven source can be loaded directly via
  // webpack (using a build step causes webpack #1617). Grunt verifies that
  // this value matches package.json during build.
  //   See: https://github.com/getsentry/raven-js/issues/465
  VERSION: '3.19.1',

  debug: false,

  TraceKit: TraceKit, // alias to TraceKit

  /*
     * Configure Raven with a DSN and extra options
     *
     * @param {string} dsn The public Sentry DSN
     * @param {object} options Set of global options [optional]
     * @return {Raven}
     */
  config: function(dsn, options) {
    var self = this;

    if (self._globalServer) {
      this._logDebug('error', 'Error: Raven has already been configured');
      return self;
    }
    if (!dsn) return self;

    var globalOptions = self._globalOptions;

    // merge in options
    if (options) {
      each(options, function(key, value) {
        // tags and extra are special and need to be put into context
        if (key === 'tags' || key === 'extra' || key === 'user') {
          self._globalContext[key] = value;
        } else {
          globalOptions[key] = value;
        }
      });
    }

    self.setDSN(dsn);

    // "Script error." is hard coded into browsers for errors that it can't read.
    // this is the result of a script being pulled in from an external domain and CORS.
    globalOptions.ignoreErrors.push(/^Script error\.?$/);
    globalOptions.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/);

    // join regexp rules into one big rule
    globalOptions.ignoreErrors = joinRegExp(globalOptions.ignoreErrors);
    globalOptions.ignoreUrls = globalOptions.ignoreUrls.length
      ? joinRegExp(globalOptions.ignoreUrls)
      : false;
    globalOptions.whitelistUrls = globalOptions.whitelistUrls.length
      ? joinRegExp(globalOptions.whitelistUrls)
      : false;
    globalOptions.includePaths = joinRegExp(globalOptions.includePaths);
    globalOptions.maxBreadcrumbs = Math.max(
      0,
      Math.min(globalOptions.maxBreadcrumbs || 100, 100)
    ); // default and hard limit is 100

    var autoBreadcrumbDefaults = {
      xhr: true,
      console: true,
      dom: true,
      location: true
    };

    var autoBreadcrumbs = globalOptions.autoBreadcrumbs;
    if ({}.toString.call(autoBreadcrumbs) === '[object Object]') {
      autoBreadcrumbs = objectMerge(autoBreadcrumbDefaults, autoBreadcrumbs);
    } else if (autoBreadcrumbs !== false) {
      autoBreadcrumbs = autoBreadcrumbDefaults;
    }
    globalOptions.autoBreadcrumbs = autoBreadcrumbs;

    var instrumentDefaults = {
      tryCatch: true
    };

    var instrument = globalOptions.instrument;
    if ({}.toString.call(instrument) === '[object Object]') {
      instrument = objectMerge(instrumentDefaults, instrument);
    } else if (instrument !== false) {
      instrument = instrumentDefaults;
    }
    globalOptions.instrument = instrument;

    TraceKit.collectWindowErrors = !!globalOptions.collectWindowErrors;

    // return for chaining
    return self;
  },

  /*
     * Installs a global window.onerror error handler
     * to capture and report uncaught exceptions.
     * At this point, install() is required to be called due
     * to the way TraceKit is set up.
     *
     * @return {Raven}
     */
  install: function() {
    var self = this;
    if (self.isSetup() && !self._isRavenInstalled) {
      TraceKit.report.subscribe(function() {
        self._handleOnErrorStackInfo.apply(self, arguments);
      });
      if (self._globalOptions.instrument && self._globalOptions.instrument.tryCatch) {
        self._instrumentTryCatch();
      }

      if (self._globalOptions.autoBreadcrumbs) self._instrumentBreadcrumbs();

      // Install all of the plugins
      self._drainPlugins();

      self._isRavenInstalled = true;
    }

    Error.stackTraceLimit = self._globalOptions.stackTraceLimit;
    return this;
  },

  /*
     * Set the DSN (can be called multiple time unlike config)
     *
     * @param {string} dsn The public Sentry DSN
     */
  setDSN: function(dsn) {
    var self = this,
      uri = self._parseDSN(dsn),
      lastSlash = uri.path.lastIndexOf('/'),
      path = uri.path.substr(1, lastSlash);

    self._dsn = dsn;
    self._globalKey = uri.user;
    self._globalSecret = uri.pass && uri.pass.substr(1);
    self._globalProject = uri.path.substr(lastSlash + 1);

    self._globalServer = self._getGlobalServer(uri);

    self._globalEndpoint =
      self._globalServer + '/' + path + 'api/' + self._globalProject + '/store/';

    // Reset backoff state since we may be pointing at a
    // new project/server
    this._resetBackoff();
  },

  /*
     * Wrap code within a context so Raven can capture errors
     * reliably across domains that is executed immediately.
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The callback to be immediately executed within the context
     * @param {array} args An array of arguments to be called with the callback [optional]
     */
  context: function(options, func, args) {
    if (isFunction(options)) {
      args = func || [];
      func = options;
      options = undefined;
    }

    return this.wrap(options, func).apply(this, args);
  },

  /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @param {function} func A function to call before the try/catch wrapper [optional, private]
     * @return {function} The newly wrapped functions with a context
     */
  wrap: function(options, func, _before) {
    var self = this;
    // 1 argument has been passed, and it's not a function
    // so just return it
    if (isUndefined(func) && !isFunction(options)) {
      return options;
    }

    // options is optional
    if (isFunction(options)) {
      func = options;
      options = undefined;
    }

    // At this point, we've passed along 2 arguments, and the second one
    // is not a function either, so we'll just return the second argument.
    if (!isFunction(func)) {
      return func;
    }

    // We don't wanna wrap it twice!
    try {
      if (func.__raven__) {
        return func;
      }

      // If this has already been wrapped in the past, return that
      if (func.__raven_wrapper__) {
        return func.__raven_wrapper__;
      }
    } catch (e) {
      // Just accessing custom props in some Selenium environments
      // can cause a "Permission denied" exception (see raven-js#495).
      // Bail on wrapping and return the function as-is (defers to window.onerror).
      return func;
    }

    function wrapped() {
      var args = [],
        i = arguments.length,
        deep = !options || (options && options.deep !== false);

      if (_before && isFunction(_before)) {
        _before.apply(this, arguments);
      }

      // Recursively wrap all of a function's arguments that are
      // functions themselves.
      while (i--) args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];

      try {
        // Attempt to invoke user-land function
        // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
        //       means Raven caught an error invoking your application code. This is
        //       expected behavior and NOT indicative of a bug with Raven.js.
        return func.apply(this, args);
      } catch (e) {
        self._ignoreNextOnError();
        self.captureException(e, options);
        throw e;
      }
    }

    // copy over properties of the old function
    for (var property in func) {
      if (hasKey(func, property)) {
        wrapped[property] = func[property];
      }
    }
    wrapped.prototype = func.prototype;

    func.__raven_wrapper__ = wrapped;
    // Signal that this function has been wrapped already
    // for both debugging and to prevent it to being wrapped twice
    wrapped.__raven__ = true;
    wrapped.__inner__ = func;

    return wrapped;
  },

  /*
     * Uninstalls the global error handler.
     *
     * @return {Raven}
     */
  uninstall: function() {
    TraceKit.report.uninstall();

    this._restoreBuiltIns();

    Error.stackTraceLimit = this._originalErrorStackTraceLimit;
    this._isRavenInstalled = false;

    return this;
  },

  /*
     * Manually capture an exception and send it over to Sentry
     *
     * @param {error} ex An exception to be logged
     * @param {object} options A specific set of options for this error [optional]
     * @return {Raven}
     */
  captureException: function(ex, options) {
    // Cases for sending ex as a message, rather than an exception
    var isNotError = !isError(ex);
    var isNotErrorEvent = !isErrorEvent(ex);
    var isErrorEventWithoutError = isErrorEvent(ex) && !ex.error;

    if ((isNotError && isNotErrorEvent) || isErrorEventWithoutError) {
      return this.captureMessage(
        ex,
        objectMerge(
          {
            trimHeadFrames: 1,
            stacktrace: true // if we fall back to captureMessage, default to attempting a new trace
          },
          options
        )
      );
    }

    // Get actual Error from ErrorEvent
    if (isErrorEvent(ex)) ex = ex.error;

    // Store the raw exception object for potential debugging and introspection
    this._lastCapturedException = ex;

    // TraceKit.report will re-raise any exception passed to it,
    // which means you have to wrap it in try/catch. Instead, we
    // can wrap it here and only re-raise if TraceKit.report
    // raises an exception different from the one we asked to
    // report on.
    try {
      var stack = TraceKit.computeStackTrace(ex);
      this._handleStackInfo(stack, options);
    } catch (ex1) {
      if (ex !== ex1) {
        throw ex1;
      }
    }

    return this;
  },

  /*
     * Manually send a message to Sentry
     *
     * @param {string} msg A plain message to be captured in Sentry
     * @param {object} options A specific set of options for this message [optional]
     * @return {Raven}
     */
  captureMessage: function(msg, options) {
    // config() automagically converts ignoreErrors from a list to a RegExp so we need to test for an
    // early call; we'll error on the side of logging anything called before configuration since it's
    // probably something you should see:
    if (
      !!this._globalOptions.ignoreErrors.test &&
      this._globalOptions.ignoreErrors.test(msg)
    ) {
      return;
    }

    options = options || {};

    var data = objectMerge(
      {
        message: msg + '' // Make sure it's actually a string
      },
      options
    );

    var ex;
    // Generate a "synthetic" stack trace from this point.
    // NOTE: If you are a Sentry user, and you are seeing this stack frame, it is NOT indicative
    //       of a bug with Raven.js. Sentry generates synthetic traces either by configuration,
    //       or if it catches a thrown object without a "stack" property.
    try {
      throw new Error(msg);
    } catch (ex1) {
      ex = ex1;
    }

    // null exception name so `Error` isn't prefixed to msg
    ex.name = null;
    var stack = TraceKit.computeStackTrace(ex);

    // stack[0] is `throw new Error(msg)` call itself, we are interested in the frame that was just before that, stack[1]
    var initialCall = stack.stack[1];

    var fileurl = (initialCall && initialCall.url) || '';

    if (
      !!this._globalOptions.ignoreUrls.test &&
      this._globalOptions.ignoreUrls.test(fileurl)
    ) {
      return;
    }

    if (
      !!this._globalOptions.whitelistUrls.test &&
      !this._globalOptions.whitelistUrls.test(fileurl)
    ) {
      return;
    }

    if (this._globalOptions.stacktrace || (options && options.stacktrace)) {
      options = objectMerge(
        {
          // fingerprint on msg, not stack trace (legacy behavior, could be
          // revisited)
          fingerprint: msg,
          // since we know this is a synthetic trace, the top N-most frames
          // MUST be from Raven.js, so mark them as in_app later by setting
          // trimHeadFrames
          trimHeadFrames: (options.trimHeadFrames || 0) + 1
        },
        options
      );

      var frames = this._prepareFrames(stack, options);
      data.stacktrace = {
        // Sentry expects frames oldest to newest
        frames: frames.reverse()
      };
    }

    // Fire away!
    this._send(data);

    return this;
  },

  captureBreadcrumb: function(obj) {
    var crumb = objectMerge(
      {
        timestamp: now() / 1000
      },
      obj
    );

    if (isFunction(this._globalOptions.breadcrumbCallback)) {
      var result = this._globalOptions.breadcrumbCallback(crumb);

      if (isObject(result) && !isEmptyObject(result)) {
        crumb = result;
      } else if (result === false) {
        return this;
      }
    }

    this._breadcrumbs.push(crumb);
    if (this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs) {
      this._breadcrumbs.shift();
    }
    return this;
  },

  addPlugin: function(plugin /*arg1, arg2, ... argN*/) {
    var pluginArgs = [].slice.call(arguments, 1);

    this._plugins.push([plugin, pluginArgs]);
    if (this._isRavenInstalled) {
      this._drainPlugins();
    }

    return this;
  },

  /*
     * Set/clear a user to be sent along with the payload.
     *
     * @param {object} user An object representing user data [optional]
     * @return {Raven}
     */
  setUserContext: function(user) {
    // Intentionally do not merge here since that's an unexpected behavior.
    this._globalContext.user = user;

    return this;
  },

  /*
     * Merge extra attributes to be sent along with the payload.
     *
     * @param {object} extra An object representing extra data [optional]
     * @return {Raven}
     */
  setExtraContext: function(extra) {
    this._mergeContext('extra', extra);

    return this;
  },

  /*
     * Merge tags to be sent along with the payload.
     *
     * @param {object} tags An object representing tags [optional]
     * @return {Raven}
     */
  setTagsContext: function(tags) {
    this._mergeContext('tags', tags);

    return this;
  },

  /*
     * Clear all of the context.
     *
     * @return {Raven}
     */
  clearContext: function() {
    this._globalContext = {};

    return this;
  },

  /*
     * Get a copy of the current context. This cannot be mutated.
     *
     * @return {object} copy of context
     */
  getContext: function() {
    // lol javascript
    return JSON.parse(stringify(this._globalContext));
  },

  /*
     * Set environment of application
     *
     * @param {string} environment Typically something like 'production'.
     * @return {Raven}
     */
  setEnvironment: function(environment) {
    this._globalOptions.environment = environment;

    return this;
  },

  /*
     * Set release version of application
     *
     * @param {string} release Typically something like a git SHA to identify version
     * @return {Raven}
     */
  setRelease: function(release) {
    this._globalOptions.release = release;

    return this;
  },

  /*
     * Set the dataCallback option
     *
     * @param {function} callback The callback to run which allows the
     *                            data blob to be mutated before sending
     * @return {Raven}
     */
  setDataCallback: function(callback) {
    var original = this._globalOptions.dataCallback;
    this._globalOptions.dataCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /*
     * Set the breadcrumbCallback option
     *
     * @param {function} callback The callback to run which allows filtering
     *                            or mutating breadcrumbs
     * @return {Raven}
     */
  setBreadcrumbCallback: function(callback) {
    var original = this._globalOptions.breadcrumbCallback;
    this._globalOptions.breadcrumbCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /*
     * Set the shouldSendCallback option
     *
     * @param {function} callback The callback to run which allows
     *                            introspecting the blob before sending
     * @return {Raven}
     */
  setShouldSendCallback: function(callback) {
    var original = this._globalOptions.shouldSendCallback;
    this._globalOptions.shouldSendCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /**
     * Override the default HTTP transport mechanism that transmits data
     * to the Sentry server.
     *
     * @param {function} transport Function invoked instead of the default
     *                             `makeRequest` handler.
     *
     * @return {Raven}
     */
  setTransport: function(transport) {
    this._globalOptions.transport = transport;

    return this;
  },

  /*
     * Get the latest raw exception that was captured by Raven.
     *
     * @return {error}
     */
  lastException: function() {
    return this._lastCapturedException;
  },

  /*
     * Get the last event id
     *
     * @return {string}
     */
  lastEventId: function() {
    return this._lastEventId;
  },

  /*
     * Determine if Raven is setup and ready to go.
     *
     * @return {boolean}
     */
  isSetup: function() {
    if (!this._hasJSON) return false; // needs JSON support
    if (!this._globalServer) {
      if (!this.ravenNotConfiguredError) {
        this.ravenNotConfiguredError = true;
        this._logDebug('error', 'Error: Raven has not been configured.');
      }
      return false;
    }
    return true;
  },

  afterLoad: function() {
    // TODO: remove window dependence?

    // Attempt to initialize Raven on load
    var RavenConfig = _window.RavenConfig;
    if (RavenConfig) {
      this.config(RavenConfig.dsn, RavenConfig.config).install();
    }
  },

  showReportDialog: function(options) {
    if (
      !_document // doesn't work without a document (React native)
    )
      return;

    options = options || {};

    var lastEventId = options.eventId || this.lastEventId();
    if (!lastEventId) {
      throw new RavenConfigError('Missing eventId');
    }

    var dsn = options.dsn || this._dsn;
    if (!dsn) {
      throw new RavenConfigError('Missing DSN');
    }

    var encode = encodeURIComponent;
    var qs = '';
    qs += '?eventId=' + encode(lastEventId);
    qs += '&dsn=' + encode(dsn);

    var user = options.user || this._globalContext.user;
    if (user) {
      if (user.name) qs += '&name=' + encode(user.name);
      if (user.email) qs += '&email=' + encode(user.email);
    }

    var globalServer = this._getGlobalServer(this._parseDSN(dsn));

    var script = _document.createElement('script');
    script.async = true;
    script.src = globalServer + '/api/embed/error-page/' + qs;
    (_document.head || _document.body).appendChild(script);
  },

  /**** Private functions ****/
  _ignoreNextOnError: function() {
    var self = this;
    this._ignoreOnError += 1;
    setTimeout(function() {
      // onerror should trigger before setTimeout
      self._ignoreOnError -= 1;
    });
  },

  _triggerEvent: function(eventType, options) {
    // NOTE: `event` is a native browser thing, so let's avoid conflicting wiht it
    var evt, key;

    if (!this._hasDocument) return;

    options = options || {};

    eventType = 'raven' + eventType.substr(0, 1).toUpperCase() + eventType.substr(1);

    if (_document.createEvent) {
      evt = _document.createEvent('HTMLEvents');
      evt.initEvent(eventType, true, true);
    } else {
      evt = _document.createEventObject();
      evt.eventType = eventType;
    }

    for (key in options)
      if (hasKey(options, key)) {
        evt[key] = options[key];
      }

    if (_document.createEvent) {
      // IE9 if standards
      _document.dispatchEvent(evt);
    } else {
      // IE8 regardless of Quirks or Standards
      // IE9 if quirks
      try {
        _document.fireEvent('on' + evt.eventType.toLowerCase(), evt);
      } catch (e) {
        // Do nothing
      }
    }
  },

  /**
     * Wraps addEventListener to capture UI breadcrumbs
     * @param evtName the event name (e.g. "click")
     * @returns {Function}
     * @private
     */
  _breadcrumbEventHandler: function(evtName) {
    var self = this;
    return function(evt) {
      // reset keypress timeout; e.g. triggering a 'click' after
      // a 'keypress' will reset the keypress debounce so that a new
      // set of keypresses can be recorded
      self._keypressTimeout = null;

      // It's possible this handler might trigger multiple times for the same
      // event (e.g. event propagation through node ancestors). Ignore if we've
      // already captured the event.
      if (self._lastCapturedEvent === evt) return;

      self._lastCapturedEvent = evt;

      // try/catch both:
      // - accessing evt.target (see getsentry/raven-js#838, #768)
      // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
      //   can throw an exception in some circumstances.
      var target;
      try {
        target = htmlTreeAsString(evt.target);
      } catch (e) {
        target = '<unknown>';
      }

      self.captureBreadcrumb({
        category: 'ui.' + evtName, // e.g. ui.click, ui.input
        message: target
      });
    };
  },

  /**
     * Wraps addEventListener to capture keypress UI events
     * @returns {Function}
     * @private
     */
  _keypressEventHandler: function() {
    var self = this,
      debounceDuration = 1000; // milliseconds

    // TODO: if somehow user switches keypress target before
    //       debounce timeout is triggered, we will only capture
    //       a single breadcrumb from the FIRST target (acceptable?)
    return function(evt) {
      var target;
      try {
        target = evt.target;
      } catch (e) {
        // just accessing event properties can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/raven-js/issues/838
        return;
      }
      var tagName = target && target.tagName;

      // only consider keypress events on actual input elements
      // this will disregard keypresses targeting body (e.g. tabbing
      // through elements, hotkeys, etc)
      if (
        !tagName ||
        (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable)
      )
        return;

      // record first keypress in a series, but ignore subsequent
      // keypresses until debounce clears
      var timeout = self._keypressTimeout;
      if (!timeout) {
        self._breadcrumbEventHandler('input')(evt);
      }
      clearTimeout(timeout);
      self._keypressTimeout = setTimeout(function() {
        self._keypressTimeout = null;
      }, debounceDuration);
    };
  },

  /**
     * Captures a breadcrumb of type "navigation", normalizing input URLs
     * @param to the originating URL
     * @param from the target URL
     * @private
     */
  _captureUrlChange: function(from, to) {
    var parsedLoc = parseUrl(this._location.href);
    var parsedTo = parseUrl(to);
    var parsedFrom = parseUrl(from);

    // because onpopstate only tells you the "new" (to) value of location.href, and
    // not the previous (from) value, we need to track the value of the current URL
    // state ourselves
    this._lastHref = to;

    // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host)
      to = parsedTo.relative;
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host)
      from = parsedFrom.relative;

    this.captureBreadcrumb({
      category: 'navigation',
      data: {
        to: to,
        from: from
      }
    });
  },

  /**
     * Wrap timer functions and event targets to catch errors and provide
     * better metadata.
     */
  _instrumentTryCatch: function() {
    var self = this;

    var wrappedBuiltIns = self._wrappedBuiltIns;

    function wrapTimeFn(orig) {
      return function(fn, t) {
        // preserve arity
        // Make a copy of the arguments to prevent deoptimization
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }
        var originalCallback = args[0];
        if (isFunction(originalCallback)) {
          args[0] = self.wrap(originalCallback);
        }

        // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
        // also supports only two arguments and doesn't care what this is, so we
        // can just call the original function directly.
        if (orig.apply) {
          return orig.apply(this, args);
        } else {
          return orig(args[0], args[1]);
        }
      };
    }

    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

    function wrapEventTarget(global) {
      var proto = _window[global] && _window[global].prototype;
      if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
        fill(
          proto,
          'addEventListener',
          function(orig) {
            return function(evtName, fn, capture, secure) {
              // preserve arity
              try {
                if (fn && fn.handleEvent) {
                  fn.handleEvent = self.wrap(fn.handleEvent);
                }
              } catch (err) {
                // can sometimes get 'Permission denied to access property "handle Event'
              }

              // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
              // so that we don't have more than one wrapper function
              var before, clickHandler, keypressHandler;

              if (
                autoBreadcrumbs &&
                autoBreadcrumbs.dom &&
                (global === 'EventTarget' || global === 'Node')
              ) {
                // NOTE: generating multiple handlers per addEventListener invocation, should
                //       revisit and verify we can just use one (almost certainly)
                clickHandler = self._breadcrumbEventHandler('click');
                keypressHandler = self._keypressEventHandler();
                before = function(evt) {
                  // need to intercept every DOM event in `before` argument, in case that
                  // same wrapped method is re-used for different events (e.g. mousemove THEN click)
                  // see #724
                  if (!evt) return;

                  var eventType;
                  try {
                    eventType = evt.type;
                  } catch (e) {
                    // just accessing event properties can throw an exception in some rare circumstances
                    // see: https://github.com/getsentry/raven-js/issues/838
                    return;
                  }
                  if (eventType === 'click') return clickHandler(evt);
                  else if (eventType === 'keypress') return keypressHandler(evt);
                };
              }
              return orig.call(
                this,
                evtName,
                self.wrap(fn, undefined, before),
                capture,
                secure
              );
            };
          },
          wrappedBuiltIns
        );
        fill(
          proto,
          'removeEventListener',
          function(orig) {
            return function(evt, fn, capture, secure) {
              try {
                fn = fn && (fn.__raven_wrapper__ ? fn.__raven_wrapper__ : fn);
              } catch (e) {
                // ignore, accessing __raven_wrapper__ will throw in some Selenium environments
              }
              return orig.call(this, evt, fn, capture, secure);
            };
          },
          wrappedBuiltIns
        );
      }
    }

    fill(_window, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
    fill(_window, 'setInterval', wrapTimeFn, wrappedBuiltIns);
    if (_window.requestAnimationFrame) {
      fill(
        _window,
        'requestAnimationFrame',
        function(orig) {
          return function(cb) {
            return orig(self.wrap(cb));
          };
        },
        wrappedBuiltIns
      );
    }

    // event targets borrowed from bugsnag-js:
    // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666
    var eventTargets = [
      'EventTarget',
      'Window',
      'Node',
      'ApplicationCache',
      'AudioTrackList',
      'ChannelMergerNode',
      'CryptoOperation',
      'EventSource',
      'FileReader',
      'HTMLUnknownElement',
      'IDBDatabase',
      'IDBRequest',
      'IDBTransaction',
      'KeyOperation',
      'MediaController',
      'MessagePort',
      'ModalWindow',
      'Notification',
      'SVGElementInstance',
      'Screen',
      'TextTrack',
      'TextTrackCue',
      'TextTrackList',
      'WebSocket',
      'WebSocketWorker',
      'Worker',
      'XMLHttpRequest',
      'XMLHttpRequestEventTarget',
      'XMLHttpRequestUpload'
    ];
    for (var i = 0; i < eventTargets.length; i++) {
      wrapEventTarget(eventTargets[i]);
    }
  },

  /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - XMLHttpRequests
     *  - DOM interactions (click/typing)
     *  - window.location changes
     *  - console
     *
     * Can be disabled or individually configured via the `autoBreadcrumbs` config option
     */
  _instrumentBreadcrumbs: function() {
    var self = this;
    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

    var wrappedBuiltIns = self._wrappedBuiltIns;

    function wrapProp(prop, xhr) {
      if (prop in xhr && isFunction(xhr[prop])) {
        fill(xhr, prop, function(orig) {
          return self.wrap(orig);
        }); // intentionally don't track filled methods on XHR instances
      }
    }

    if (autoBreadcrumbs.xhr && 'XMLHttpRequest' in _window) {
      var xhrproto = XMLHttpRequest.prototype;
      fill(
        xhrproto,
        'open',
        function(origOpen) {
          return function(method, url) {
            // preserve arity

            // if Sentry key appears in URL, don't capture
            if (isString(url) && url.indexOf(self._globalKey) === -1) {
              this.__raven_xhr = {
                method: method,
                url: url,
                status_code: null
              };
            }

            return origOpen.apply(this, arguments);
          };
        },
        wrappedBuiltIns
      );

      fill(
        xhrproto,
        'send',
        function(origSend) {
          return function(data) {
            // preserve arity
            var xhr = this;

            function onreadystatechangeHandler() {
              if (xhr.__raven_xhr && xhr.readyState === 4) {
                try {
                  // touching statusCode in some platforms throws
                  // an exception
                  xhr.__raven_xhr.status_code = xhr.status;
                } catch (e) {
                  /* do nothing */
                }

                self.captureBreadcrumb({
                  type: 'http',
                  category: 'xhr',
                  data: xhr.__raven_xhr
                });
              }
            }

            var props = ['onload', 'onerror', 'onprogress'];
            for (var j = 0; j < props.length; j++) {
              wrapProp(props[j], xhr);
            }

            if ('onreadystatechange' in xhr && isFunction(xhr.onreadystatechange)) {
              fill(
                xhr,
                'onreadystatechange',
                function(orig) {
                  return self.wrap(orig, undefined, onreadystatechangeHandler);
                } /* intentionally don't track this instrumentation */
              );
            } else {
              // if onreadystatechange wasn't actually set by the page on this xhr, we
              // are free to set our own and capture the breadcrumb
              xhr.onreadystatechange = onreadystatechangeHandler;
            }

            return origSend.apply(this, arguments);
          };
        },
        wrappedBuiltIns
      );
    }

    if (autoBreadcrumbs.xhr && 'fetch' in _window) {
      fill(
        _window,
        'fetch',
        function(origFetch) {
          return function(fn, t) {
            // preserve arity
            // Make a copy of the arguments to prevent deoptimization
            // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; ++i) {
              args[i] = arguments[i];
            }

            var fetchInput = args[0];
            var method = 'GET';
            var url;

            if (typeof fetchInput === 'string') {
              url = fetchInput;
            } else if ('Request' in _window && fetchInput instanceof _window.Request) {
              url = fetchInput.url;
              if (fetchInput.method) {
                method = fetchInput.method;
              }
            } else {
              url = '' + fetchInput;
            }

            if (args[1] && args[1].method) {
              method = args[1].method;
            }

            var fetchData = {
              method: method,
              url: url,
              status_code: null
            };

            self.captureBreadcrumb({
              type: 'http',
              category: 'fetch',
              data: fetchData
            });

            return origFetch.apply(this, args).then(function(response) {
              fetchData.status_code = response.status;

              return response;
            });
          };
        },
        wrappedBuiltIns
      );
    }

    // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
    // to the document. Do this before we instrument addEventListener.
    if (autoBreadcrumbs.dom && this._hasDocument) {
      if (_document.addEventListener) {
        _document.addEventListener('click', self._breadcrumbEventHandler('click'), false);
        _document.addEventListener('keypress', self._keypressEventHandler(), false);
      } else {
        // IE8 Compatibility
        _document.attachEvent('onclick', self._breadcrumbEventHandler('click'));
        _document.attachEvent('onkeypress', self._keypressEventHandler());
      }
    }

    // record navigation (URL) changes
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var chrome = _window.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    var hasPushAndReplaceState =
      !isChromePackagedApp &&
      _window.history &&
      history.pushState &&
      history.replaceState;
    if (autoBreadcrumbs.location && hasPushAndReplaceState) {
      // TODO: remove onpopstate handler on uninstall()
      var oldOnPopState = _window.onpopstate;
      _window.onpopstate = function() {
        var currentHref = self._location.href;
        self._captureUrlChange(self._lastHref, currentHref);

        if (oldOnPopState) {
          return oldOnPopState.apply(this, arguments);
        }
      };

      var historyReplacementFunction = function(origHistFunction) {
        // note history.pushState.length is 0; intentionally not declaring
        // params to preserve 0 arity
        return function(/* state, title, url */) {
          var url = arguments.length > 2 ? arguments[2] : undefined;

          // url argument is optional
          if (url) {
            // coerce to string (this is what pushState does)
            self._captureUrlChange(self._lastHref, url + '');
          }

          return origHistFunction.apply(this, arguments);
        };
      };

      fill(history, 'pushState', historyReplacementFunction, wrappedBuiltIns);
      fill(history, 'replaceState', historyReplacementFunction, wrappedBuiltIns);
    }

    if (autoBreadcrumbs.console && 'console' in _window && console.log) {
      // console
      var consoleMethodCallback = function(msg, data) {
        self.captureBreadcrumb({
          message: msg,
          level: data.level,
          category: 'console'
        });
      };

      each(['debug', 'info', 'warn', 'error', 'log'], function(_, level) {
        wrapConsoleMethod(console, level, consoleMethodCallback);
      });
    }
  },

  _restoreBuiltIns: function() {
    // restore any wrapped builtins
    var builtin;
    while (this._wrappedBuiltIns.length) {
      builtin = this._wrappedBuiltIns.shift();

      var obj = builtin[0],
        name = builtin[1],
        orig = builtin[2];

      obj[name] = orig;
    }
  },

  _drainPlugins: function() {
    var self = this;

    // FIX ME TODO
    each(this._plugins, function(_, plugin) {
      var installer = plugin[0];
      var args = plugin[1];
      installer.apply(self, [self].concat(args));
    });
  },

  _parseDSN: function(str) {
    var m = dsnPattern.exec(str),
      dsn = {},
      i = 7;

    try {
      while (i--) dsn[dsnKeys[i]] = m[i] || '';
    } catch (e) {
      throw new RavenConfigError('Invalid DSN: ' + str);
    }

    if (dsn.pass && !this._globalOptions.allowSecretKey) {
      throw new RavenConfigError(
        'Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key'
      );
    }

    return dsn;
  },

  _getGlobalServer: function(uri) {
    // assemble the endpoint from the uri pieces
    var globalServer = '//' + uri.host + (uri.port ? ':' + uri.port : '');

    if (uri.protocol) {
      globalServer = uri.protocol + ':' + globalServer;
    }
    return globalServer;
  },

  _handleOnErrorStackInfo: function() {
    // if we are intentionally ignoring errors via onerror, bail out
    if (!this._ignoreOnError) {
      this._handleStackInfo.apply(this, arguments);
    }
  },

  _handleStackInfo: function(stackInfo, options) {
    var frames = this._prepareFrames(stackInfo, options);

    this._triggerEvent('handle', {
      stackInfo: stackInfo,
      options: options
    });

    this._processException(
      stackInfo.name,
      stackInfo.message,
      stackInfo.url,
      stackInfo.lineno,
      frames,
      options
    );
  },

  _prepareFrames: function(stackInfo, options) {
    var self = this;
    var frames = [];
    if (stackInfo.stack && stackInfo.stack.length) {
      each(stackInfo.stack, function(i, stack) {
        var frame = self._normalizeFrame(stack, stackInfo.url);
        if (frame) {
          frames.push(frame);
        }
      });

      // e.g. frames captured via captureMessage throw
      if (options && options.trimHeadFrames) {
        for (var j = 0; j < options.trimHeadFrames && j < frames.length; j++) {
          frames[j].in_app = false;
        }
      }
    }
    frames = frames.slice(0, this._globalOptions.stackTraceLimit);
    return frames;
  },

  _normalizeFrame: function(frame, stackInfoUrl) {
    // normalize the frames data
    var normalized = {
      filename: frame.url,
      lineno: frame.line,
      colno: frame.column,
      function: frame.func || '?'
    };

    // Case when we don't have any information about the error
    // E.g. throwing a string or raw object, instead of an `Error` in Firefox
    // Generating synthetic error doesn't add any value here
    //
    // We should probably somehow let a user know that they should fix their code
    if (!frame.url) {
      normalized.filename = stackInfoUrl; // fallback to whole stacks url from onerror handler
    }

    normalized.in_app = !// determine if an exception came from outside of our app
    // first we check the global includePaths list.
    (
      (!!this._globalOptions.includePaths.test &&
        !this._globalOptions.includePaths.test(normalized.filename)) ||
      // Now we check for fun, if the function name is Raven or TraceKit
      /(Raven|TraceKit)\./.test(normalized['function']) ||
      // finally, we do a last ditch effort and check for raven.min.js
      /raven\.(min\.)?js$/.test(normalized.filename)
    );

    return normalized;
  },

  _processException: function(type, message, fileurl, lineno, frames, options) {
    var prefixedMessage = (type ? type + ': ' : '') + (message || '');
    if (
      !!this._globalOptions.ignoreErrors.test &&
      (this._globalOptions.ignoreErrors.test(message) ||
        this._globalOptions.ignoreErrors.test(prefixedMessage))
    ) {
      return;
    }

    var stacktrace;

    if (frames && frames.length) {
      fileurl = frames[0].filename || fileurl;
      // Sentry expects frames oldest to newest
      // and JS sends them as newest to oldest
      frames.reverse();
      stacktrace = {frames: frames};
    } else if (fileurl) {
      stacktrace = {
        frames: [
          {
            filename: fileurl,
            lineno: lineno,
            in_app: true
          }
        ]
      };
    }

    if (
      !!this._globalOptions.ignoreUrls.test &&
      this._globalOptions.ignoreUrls.test(fileurl)
    ) {
      return;
    }

    if (
      !!this._globalOptions.whitelistUrls.test &&
      !this._globalOptions.whitelistUrls.test(fileurl)
    ) {
      return;
    }

    var data = objectMerge(
      {
        // sentry.interfaces.Exception
        exception: {
          values: [
            {
              type: type,
              value: message,
              stacktrace: stacktrace
            }
          ]
        },
        culprit: fileurl
      },
      options
    );

    // Fire away!
    this._send(data);
  },

  _trimPacket: function(data) {
    // For now, we only want to truncate the two different messages
    // but this could/should be expanded to just trim everything
    var max = this._globalOptions.maxMessageLength;
    if (data.message) {
      data.message = truncate(data.message, max);
    }
    if (data.exception) {
      var exception = data.exception.values[0];
      exception.value = truncate(exception.value, max);
    }

    var request = data.request;
    if (request) {
      if (request.url) {
        request.url = truncate(request.url, this._globalOptions.maxUrlLength);
      }
      if (request.Referer) {
        request.Referer = truncate(request.Referer, this._globalOptions.maxUrlLength);
      }
    }

    if (data.breadcrumbs && data.breadcrumbs.values)
      this._trimBreadcrumbs(data.breadcrumbs);

    return data;
  },

  /**
     * Truncate breadcrumb values (right now just URLs)
     */
  _trimBreadcrumbs: function(breadcrumbs) {
    // known breadcrumb properties with urls
    // TODO: also consider arbitrary prop values that start with (https?)?://
    var urlProps = ['to', 'from', 'url'],
      urlProp,
      crumb,
      data;

    for (var i = 0; i < breadcrumbs.values.length; ++i) {
      crumb = breadcrumbs.values[i];
      if (
        !crumb.hasOwnProperty('data') ||
        !isObject(crumb.data) ||
        objectFrozen(crumb.data)
      )
        continue;

      data = objectMerge({}, crumb.data);
      for (var j = 0; j < urlProps.length; ++j) {
        urlProp = urlProps[j];
        if (data.hasOwnProperty(urlProp) && data[urlProp]) {
          data[urlProp] = truncate(data[urlProp], this._globalOptions.maxUrlLength);
        }
      }
      breadcrumbs.values[i].data = data;
    }
  },

  _getHttpData: function() {
    if (!this._hasNavigator && !this._hasDocument) return;
    var httpData = {};

    if (this._hasNavigator && _navigator.userAgent) {
      httpData.headers = {
        'User-Agent': navigator.userAgent
      };
    }

    if (this._hasDocument) {
      if (_document.location && _document.location.href) {
        httpData.url = _document.location.href;
      }
      if (_document.referrer) {
        if (!httpData.headers) httpData.headers = {};
        httpData.headers.Referer = _document.referrer;
      }
    }

    return httpData;
  },

  _resetBackoff: function() {
    this._backoffDuration = 0;
    this._backoffStart = null;
  },

  _shouldBackoff: function() {
    return this._backoffDuration && now() - this._backoffStart < this._backoffDuration;
  },

  /**
     * Returns true if the in-process data payload matches the signature
     * of the previously-sent data
     *
     * NOTE: This has to be done at this level because TraceKit can generate
     *       data from window.onerror WITHOUT an exception object (IE8, IE9,
     *       other old browsers). This can take the form of an "exception"
     *       data object with a single frame (derived from the onerror args).
     */
  _isRepeatData: function(current) {
    var last = this._lastData;

    if (
      !last ||
      current.message !== last.message || // defined for captureMessage
      current.culprit !== last.culprit // defined for captureException/onerror
    )
      return false;

    // Stacktrace interface (i.e. from captureMessage)
    if (current.stacktrace || last.stacktrace) {
      return isSameStacktrace(current.stacktrace, last.stacktrace);
    } else if (current.exception || last.exception) {
      // Exception interface (i.e. from captureException/onerror)
      return isSameException(current.exception, last.exception);
    }

    return true;
  },

  _setBackoffState: function(request) {
    // If we are already in a backoff state, don't change anything
    if (this._shouldBackoff()) {
      return;
    }

    var status = request.status;

    // 400 - project_id doesn't exist or some other fatal
    // 401 - invalid/revoked dsn
    // 429 - too many requests
    if (!(status === 400 || status === 401 || status === 429)) return;

    var retry;
    try {
      // If Retry-After is not in Access-Control-Expose-Headers, most
      // browsers will throw an exception trying to access it
      retry = request.getResponseHeader('Retry-After');
      retry = parseInt(retry, 10) * 1000; // Retry-After is returned in seconds
    } catch (e) {
      /* eslint no-empty:0 */
    }

    this._backoffDuration = retry
      ? // If Sentry server returned a Retry-After value, use it
        retry
      : // Otherwise, double the last backoff duration (starts at 1 sec)
        this._backoffDuration * 2 || 1000;

    this._backoffStart = now();
  },

  _send: function(data) {
    var globalOptions = this._globalOptions;

    var baseData = {
        project: this._globalProject,
        logger: globalOptions.logger,
        platform: 'javascript'
      },
      httpData = this._getHttpData();

    if (httpData) {
      baseData.request = httpData;
    }

    // HACK: delete `trimHeadFrames` to prevent from appearing in outbound payload
    if (data.trimHeadFrames) delete data.trimHeadFrames;

    data = objectMerge(baseData, data);

    // Merge in the tags and extra separately since objectMerge doesn't handle a deep merge
    data.tags = objectMerge(objectMerge({}, this._globalContext.tags), data.tags);
    data.extra = objectMerge(objectMerge({}, this._globalContext.extra), data.extra);

    // Send along our own collected metadata with extra
    data.extra['session:duration'] = now() - this._startTime;

    if (this._breadcrumbs && this._breadcrumbs.length > 0) {
      // intentionally make shallow copy so that additions
      // to breadcrumbs aren't accidentally sent in this request
      data.breadcrumbs = {
        values: [].slice.call(this._breadcrumbs, 0)
      };
    }

    // If there are no tags/extra, strip the key from the payload alltogther.
    if (isEmptyObject(data.tags)) delete data.tags;

    if (this._globalContext.user) {
      // sentry.interfaces.User
      data.user = this._globalContext.user;
    }

    // Include the environment if it's defined in globalOptions
    if (globalOptions.environment) data.environment = globalOptions.environment;

    // Include the release if it's defined in globalOptions
    if (globalOptions.release) data.release = globalOptions.release;

    // Include server_name if it's defined in globalOptions
    if (globalOptions.serverName) data.server_name = globalOptions.serverName;

    if (isFunction(globalOptions.dataCallback)) {
      data = globalOptions.dataCallback(data) || data;
    }

    // Why??????????
    if (!data || isEmptyObject(data)) {
      return;
    }

    // Check if the request should be filtered or not
    if (
      isFunction(globalOptions.shouldSendCallback) &&
      !globalOptions.shouldSendCallback(data)
    ) {
      return;
    }

    // Backoff state: Sentry server previously responded w/ an error (e.g. 429 - too many requests),
    // so drop requests until "cool-off" period has elapsed.
    if (this._shouldBackoff()) {
      this._logDebug('warn', 'Raven dropped error due to backoff: ', data);
      return;
    }

    if (typeof globalOptions.sampleRate === 'number') {
      if (Math.random() < globalOptions.sampleRate) {
        this._sendProcessedPayload(data);
      }
    } else {
      this._sendProcessedPayload(data);
    }
  },

  _getUuid: function() {
    return uuid4();
  },

  _sendProcessedPayload: function(data, callback) {
    var self = this;
    var globalOptions = this._globalOptions;

    if (!this.isSetup()) return;

    // Try and clean up the packet before sending by truncating long values
    data = this._trimPacket(data);

    // ideally duplicate error testing should occur *before* dataCallback/shouldSendCallback,
    // but this would require copying an un-truncated copy of the data packet, which can be
    // arbitrarily deep (extra_data) -- could be worthwhile? will revisit
    if (!this._globalOptions.allowDuplicates && this._isRepeatData(data)) {
      this._logDebug('warn', 'Raven dropped repeat event: ', data);
      return;
    }

    // Send along an event_id if not explicitly passed.
    // This event_id can be used to reference the error within Sentry itself.
    // Set lastEventId after we know the error should actually be sent
    this._lastEventId = data.event_id || (data.event_id = this._getUuid());

    // Store outbound payload after trim
    this._lastData = data;

    this._logDebug('debug', 'Raven about to send:', data);

    var auth = {
      sentry_version: '7',
      sentry_client: 'raven-js/' + this.VERSION,
      sentry_key: this._globalKey
    };

    if (this._globalSecret) {
      auth.sentry_secret = this._globalSecret;
    }

    var exception = data.exception && data.exception.values[0];
    this.captureBreadcrumb({
      category: 'sentry',
      message: exception
        ? (exception.type ? exception.type + ': ' : '') + exception.value
        : data.message,
      event_id: data.event_id,
      level: data.level || 'error' // presume error unless specified
    });

    var url = this._globalEndpoint;
    (globalOptions.transport || this._makeRequest).call(this, {
      url: url,
      auth: auth,
      data: data,
      options: globalOptions,
      onSuccess: function success() {
        self._resetBackoff();

        self._triggerEvent('success', {
          data: data,
          src: url
        });
        callback && callback();
      },
      onError: function failure(error) {
        self._logDebug('error', 'Raven transport failed to send: ', error);

        if (error.request) {
          self._setBackoffState(error.request);
        }

        self._triggerEvent('failure', {
          data: data,
          src: url
        });
        error = error || new Error('Raven send failed (no additional details provided)');
        callback && callback(error);
      }
    });
  },

  _makeRequest: function(opts) {
    var request = _window.XMLHttpRequest && new _window.XMLHttpRequest();
    if (!request) return;

    // if browser doesn't support CORS (e.g. IE7), we are out of luck
    var hasCORS = 'withCredentials' in request || typeof XDomainRequest !== 'undefined';

    if (!hasCORS) return;

    var url = opts.url;

    if ('withCredentials' in request) {
      request.onreadystatechange = function() {
        if (request.readyState !== 4) {
          return;
        } else if (request.status === 200) {
          opts.onSuccess && opts.onSuccess();
        } else if (opts.onError) {
          var err = new Error('Sentry error code: ' + request.status);
          err.request = request;
          opts.onError(err);
        }
      };
    } else {
      request = new XDomainRequest();
      // xdomainrequest cannot go http -> https (or vice versa),
      // so always use protocol relative
      url = url.replace(/^https?:/, '');

      // onreadystatechange not supported by XDomainRequest
      if (opts.onSuccess) {
        request.onload = opts.onSuccess;
      }
      if (opts.onError) {
        request.onerror = function() {
          var err = new Error('Sentry error code: XDomainRequest');
          err.request = request;
          opts.onError(err);
        };
      }
    }

    // NOTE: auth is intentionally sent as part of query string (NOT as custom
    //       HTTP header) so as to avoid preflight CORS requests
    request.open('POST', url + '?' + urlencode(opts.auth));
    request.send(stringify(opts.data));
  },

  _logDebug: function(level) {
    if (this._originalConsoleMethods[level] && this.debug) {
      // In IE<10 console methods do not have their own 'apply' method
      Function.prototype.apply.call(
        this._originalConsoleMethods[level],
        this._originalConsole,
        [].slice.call(arguments, 1)
      );
    }
  },

  _mergeContext: function(key, context) {
    if (isUndefined(context)) {
      delete this._globalContext[key];
    } else {
      this._globalContext[key] = objectMerge(this._globalContext[key] || {}, context);
    }
  }
};

// Deprecations
Raven.prototype.setUser = Raven.prototype.setUserContext;
Raven.prototype.setReleaseContext = Raven.prototype.setRelease;

module.exports = Raven;


/***/ }),

/***/ "./node_modules/raven-js/src/singleton.js":
/*!************************************************!*\
  !*** ./node_modules/raven-js/src/singleton.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Enforces a single instance of the Raven client, and the
 * main entry point for Raven. If you are a consumer of the
 * Raven library, you SHOULD load this file (vs raven.js).
 **/

var RavenConstructor = __webpack_require__(/*! ./raven */ "./node_modules/raven-js/src/raven.js");

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window =
  typeof window !== 'undefined'
    ? window
    : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};
var _Raven = _window.Raven;

var Raven = new RavenConstructor();

/*
 * Allow multiple versions of Raven to be installed.
 * Strip Raven from the global context and returns the instance.
 *
 * @return {Raven}
 */
Raven.noConflict = function() {
  _window.Raven = _Raven;
  return Raven;
};

Raven.afterLoad();

module.exports = Raven;


/***/ }),

/***/ "./node_modules/raven-js/src/utils.js":
/*!********************************************!*\
  !*** ./node_modules/raven-js/src/utils.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _window =
  typeof window !== 'undefined'
    ? window
    : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function isObject(what) {
  return typeof what === 'object' && what !== null;
}

// Yanked from https://git.io/vS8DV re-used under CC0
// with some tiny modifications
function isError(value) {
  switch ({}.toString.call(value)) {
    case '[object Error]':
      return true;
    case '[object Exception]':
      return true;
    case '[object DOMException]':
      return true;
    default:
      return value instanceof Error;
  }
}

function isErrorEvent(value) {
  return supportsErrorEvent() && {}.toString.call(value) === '[object ErrorEvent]';
}

function isUndefined(what) {
  return what === void 0;
}

function isFunction(what) {
  return typeof what === 'function';
}

function isString(what) {
  return Object.prototype.toString.call(what) === '[object String]';
}

function isEmptyObject(what) {
  for (var _ in what) return false; // eslint-disable-line guard-for-in, no-unused-vars
  return true;
}

function supportsErrorEvent() {
  try {
    new ErrorEvent(''); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}

function wrappedCallback(callback) {
  function dataCallback(data, original) {
    var normalizedData = callback(data) || data;
    if (original) {
      return original(normalizedData) || normalizedData;
    }
    return normalizedData;
  }

  return dataCallback;
}

function each(obj, callback) {
  var i, j;

  if (isUndefined(obj.length)) {
    for (i in obj) {
      if (hasKey(obj, i)) {
        callback.call(null, i, obj[i]);
      }
    }
  } else {
    j = obj.length;
    if (j) {
      for (i = 0; i < j; i++) {
        callback.call(null, i, obj[i]);
      }
    }
  }
}

function objectMerge(obj1, obj2) {
  if (!obj2) {
    return obj1;
  }
  each(obj2, function(key, value) {
    obj1[key] = value;
  });
  return obj1;
}

/**
 * This function is only used for react-native.
 * react-native freezes object that have already been sent over the
 * js bridge. We need this function in order to check if the object is frozen.
 * So it's ok that objectFrozen returns false if Object.isFrozen is not
 * supported because it's not relevant for other "platforms". See related issue:
 * https://github.com/getsentry/react-native-sentry/issues/57
 */
function objectFrozen(obj) {
  if (!Object.isFrozen) {
    return false;
  }
  return Object.isFrozen(obj);
}

function truncate(str, max) {
  return !max || str.length <= max ? str : str.substr(0, max) + '\u2026';
}

/**
 * hasKey, a better form of hasOwnProperty
 * Example: hasKey(MainHostObject, property) === true/false
 *
 * @param {Object} host object to check property
 * @param {string} key to check
 */
function hasKey(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function joinRegExp(patterns) {
  // Combine an array of regular expressions and strings into one large regexp
  // Be mad.
  var sources = [],
    i = 0,
    len = patterns.length,
    pattern;

  for (; i < len; i++) {
    pattern = patterns[i];
    if (isString(pattern)) {
      // If it's a string, we need to escape it
      // Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
      sources.push(pattern.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'));
    } else if (pattern && pattern.source) {
      // If it's a regexp already, we want to extract the source
      sources.push(pattern.source);
    }
    // Intentionally skip other cases
  }
  return new RegExp(sources.join('|'), 'i');
}

function urlencode(o) {
  var pairs = [];
  each(o, function(key, value) {
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  });
  return pairs.join('&');
}

// borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
// intentionally using regex and not <a/> href parsing trick because React Native and other
// environments where DOM might not be available
function parseUrl(url) {
  var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) return {};

  // coerce to undefined values to empty string so we don't get 'undefined'
  var query = match[6] || '';
  var fragment = match[8] || '';
  return {
    protocol: match[2],
    host: match[4],
    path: match[5],
    relative: match[5] + query + fragment // everything minus origin
  };
}
function uuid4() {
  var crypto = _window.crypto || _window.msCrypto;

  if (!isUndefined(crypto) && crypto.getRandomValues) {
    // Use window.crypto API if available
    // eslint-disable-next-line no-undef
    var arr = new Uint16Array(8);
    crypto.getRandomValues(arr);

    // set 4 in byte 7
    arr[3] = (arr[3] & 0xfff) | 0x4000;
    // set 2 most significant bits of byte 9 to '10'
    arr[4] = (arr[4] & 0x3fff) | 0x8000;

    var pad = function(num) {
      var v = num.toString(16);
      while (v.length < 4) {
        v = '0' + v;
      }
      return v;
    };

    return (
      pad(arr[0]) +
      pad(arr[1]) +
      pad(arr[2]) +
      pad(arr[3]) +
      pad(arr[4]) +
      pad(arr[5]) +
      pad(arr[6]) +
      pad(arr[7])
    );
  } else {
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @param elem
 * @returns {string}
 */
function htmlTreeAsString(elem) {
  /* eslint no-extra-parens:0*/
  var MAX_TRAVERSE_HEIGHT = 5,
    MAX_OUTPUT_LEN = 80,
    out = [],
    height = 0,
    len = 0,
    separator = ' > ',
    sepLength = separator.length,
    nextStr;

  while (elem && height++ < MAX_TRAVERSE_HEIGHT) {
    nextStr = htmlElementAsString(elem);
    // bail out if
    // - nextStr is the 'html' element
    // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
    //   (ignore this limit if we are on the first iteration)
    if (
      nextStr === 'html' ||
      (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)
    ) {
      break;
    }

    out.push(nextStr);

    len += nextStr.length;
    elem = elem.parentNode;
  }

  return out.reverse().join(separator);
}

/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @param HTMLElement
 * @returns {string}
 */
function htmlElementAsString(elem) {
  var out = [],
    className,
    classes,
    key,
    attr,
    i;

  if (!elem || !elem.tagName) {
    return '';
  }

  out.push(elem.tagName.toLowerCase());
  if (elem.id) {
    out.push('#' + elem.id);
  }

  className = elem.className;
  if (className && isString(className)) {
    classes = className.split(/\s+/);
    for (i = 0; i < classes.length; i++) {
      out.push('.' + classes[i]);
    }
  }
  var attrWhitelist = ['type', 'name', 'title', 'alt'];
  for (i = 0; i < attrWhitelist.length; i++) {
    key = attrWhitelist[i];
    attr = elem.getAttribute(key);
    if (attr) {
      out.push('[' + key + '="' + attr + '"]');
    }
  }
  return out.join('');
}

/**
 * Returns true if either a OR b is truthy, but not both
 */
function isOnlyOneTruthy(a, b) {
  return !!(!!a ^ !!b);
}

/**
 * Returns true if the two input exception interfaces have the same content
 */
function isSameException(ex1, ex2) {
  if (isOnlyOneTruthy(ex1, ex2)) return false;

  ex1 = ex1.values[0];
  ex2 = ex2.values[0];

  if (ex1.type !== ex2.type || ex1.value !== ex2.value) return false;

  return isSameStacktrace(ex1.stacktrace, ex2.stacktrace);
}

/**
 * Returns true if the two input stack trace interfaces have the same content
 */
function isSameStacktrace(stack1, stack2) {
  if (isOnlyOneTruthy(stack1, stack2)) return false;

  var frames1 = stack1.frames;
  var frames2 = stack2.frames;

  // Exit early if frame count differs
  if (frames1.length !== frames2.length) return false;

  // Iterate through every frame; bail out if anything differs
  var a, b;
  for (var i = 0; i < frames1.length; i++) {
    a = frames1[i];
    b = frames2[i];
    if (
      a.filename !== b.filename ||
      a.lineno !== b.lineno ||
      a.colno !== b.colno ||
      a['function'] !== b['function']
    )
      return false;
  }
  return true;
}

/**
 * Polyfill a method
 * @param obj object e.g. `document`
 * @param name method name present on object e.g. `addEventListener`
 * @param replacement replacement function
 * @param track {optional} record instrumentation to an array
 */
function fill(obj, name, replacement, track) {
  var orig = obj[name];
  obj[name] = replacement(orig);
  if (track) {
    track.push([obj, name, orig]);
  }
}

module.exports = {
  isObject: isObject,
  isError: isError,
  isErrorEvent: isErrorEvent,
  isUndefined: isUndefined,
  isFunction: isFunction,
  isString: isString,
  isEmptyObject: isEmptyObject,
  supportsErrorEvent: supportsErrorEvent,
  wrappedCallback: wrappedCallback,
  each: each,
  objectMerge: objectMerge,
  truncate: truncate,
  objectFrozen: objectFrozen,
  hasKey: hasKey,
  joinRegExp: joinRegExp,
  urlencode: urlencode,
  uuid4: uuid4,
  htmlTreeAsString: htmlTreeAsString,
  htmlElementAsString: htmlElementAsString,
  isSameException: isSameException,
  isSameStacktrace: isSameStacktrace,
  parseUrl: parseUrl,
  fill: fill
};


/***/ }),

/***/ "./node_modules/raven-js/vendor/TraceKit/tracekit.js":
/*!***********************************************************!*\
  !*** ./node_modules/raven-js/vendor/TraceKit/tracekit.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var utils = __webpack_require__(/*! ../../src/utils */ "./node_modules/raven-js/src/utils.js");

/*
 TraceKit - Cross brower stack traces

 This was originally forked from github.com/occ/TraceKit, but has since been
 largely re-written and is now maintained as part of raven-js.  Tests for
 this are in test/vendor.

 MIT license
*/

var TraceKit = {
  collectWindowErrors: true,
  debug: false
};

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window =
  typeof window !== 'undefined'
    ? window
    : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

// global reference to slice
var _slice = [].slice;
var UNKNOWN_FUNCTION = '?';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

function getLocationHref() {
  if (typeof document === 'undefined' || document.location == null) return '';

  return document.location.href;
}

/**
 * TraceKit.report: cross-browser processing of unhandled exceptions
 *
 * Syntax:
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *              on top frame; column number is not guaranteed
 *   - Opera:   full stack trace with line and column numbers
 *   - Chrome:  full stack trace with line and column numbers
 *   - Safari:  line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *   - IE:      line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a stackInfo object as described in the
 * TraceKit.computeStackTrace docs.
 */
TraceKit.report = (function reportModuleWrapper() {
  var handlers = [],
    lastArgs = null,
    lastException = null,
    lastExceptionStack = null;

  /**
     * Add a crash handler.
     * @param {Function} handler
     */
  function subscribe(handler) {
    installGlobalHandler();
    handlers.push(handler);
  }

  /**
     * Remove a crash handler.
     * @param {Function} handler
     */
  function unsubscribe(handler) {
    for (var i = handlers.length - 1; i >= 0; --i) {
      if (handlers[i] === handler) {
        handlers.splice(i, 1);
      }
    }
  }

  /**
     * Remove all crash handlers.
     */
  function unsubscribeAll() {
    uninstallGlobalHandler();
    handlers = [];
  }

  /**
     * Dispatch stack information to all handlers.
     * @param {Object.<string, *>} stack
     */
  function notifyHandlers(stack, isWindowError) {
    var exception = null;
    if (isWindowError && !TraceKit.collectWindowErrors) {
      return;
    }
    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        try {
          handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
        } catch (inner) {
          exception = inner;
        }
      }
    }

    if (exception) {
      throw exception;
    }
  }

  var _oldOnerrorHandler, _onErrorHandlerInstalled;

  /**
     * Ensures all global unhandled exceptions are recorded.
     * Supported by Gecko and IE.
     * @param {string} message Error message.
     * @param {string} url URL of script that generated the exception.
     * @param {(number|string)} lineNo The line number at which the error
     * occurred.
     * @param {?(number|string)} colNo The column number at which the error
     * occurred.
     * @param {?Error} ex The actual Error object.
     */
  function traceKitWindowOnError(message, url, lineNo, colNo, ex) {
    var stack = null;

    if (lastExceptionStack) {
      TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(
        lastExceptionStack,
        url,
        lineNo,
        message
      );
      processLastException();
    } else if (ex && utils.isError(ex)) {
      // non-string `ex` arg; attempt to extract stack trace

      // New chrome and blink send along a real error object
      // Let's just report that like a normal error.
      // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
      stack = TraceKit.computeStackTrace(ex);
      notifyHandlers(stack, true);
    } else {
      var location = {
        url: url,
        line: lineNo,
        column: colNo
      };

      var name = undefined;
      var msg = message; // must be new var or will modify original `arguments`
      var groups;
      if ({}.toString.call(message) === '[object String]') {
        var groups = message.match(ERROR_TYPES_RE);
        if (groups) {
          name = groups[1];
          msg = groups[2];
        }
      }

      location.func = UNKNOWN_FUNCTION;

      stack = {
        name: name,
        message: msg,
        url: getLocationHref(),
        stack: [location]
      };
      notifyHandlers(stack, true);
    }

    if (_oldOnerrorHandler) {
      return _oldOnerrorHandler.apply(this, arguments);
    }

    return false;
  }

  function installGlobalHandler() {
    if (_onErrorHandlerInstalled) {
      return;
    }
    _oldOnerrorHandler = _window.onerror;
    _window.onerror = traceKitWindowOnError;
    _onErrorHandlerInstalled = true;
  }

  function uninstallGlobalHandler() {
    if (!_onErrorHandlerInstalled) {
      return;
    }
    _window.onerror = _oldOnerrorHandler;
    _onErrorHandlerInstalled = false;
    _oldOnerrorHandler = undefined;
  }

  function processLastException() {
    var _lastExceptionStack = lastExceptionStack,
      _lastArgs = lastArgs;
    lastArgs = null;
    lastExceptionStack = null;
    lastException = null;
    notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
  }

  /**
     * Reports an unhandled Error to TraceKit.
     * @param {Error} ex
     * @param {?boolean} rethrow If false, do not re-throw the exception.
     * Only used for window.onerror to not cause an infinite loop of
     * rethrowing.
     */
  function report(ex, rethrow) {
    var args = _slice.call(arguments, 1);
    if (lastExceptionStack) {
      if (lastException === ex) {
        return; // already caught by an inner catch block, ignore
      } else {
        processLastException();
      }
    }

    var stack = TraceKit.computeStackTrace(ex);
    lastExceptionStack = stack;
    lastException = ex;
    lastArgs = args;

    // If the stack trace is incomplete, wait for 2 seconds for
    // slow slow IE to see if onerror occurs or not before reporting
    // this exception; otherwise, we will end up with an incomplete
    // stack trace
    setTimeout(function() {
      if (lastException === ex) {
        processLastException();
      }
    }, stack.incomplete ? 2000 : 0);

    if (rethrow !== false) {
      throw ex; // re-throw to propagate to the top level (and cause window.onerror)
    }
  }

  report.subscribe = subscribe;
  report.unsubscribe = unsubscribe;
  report.uninstall = unsubscribeAll;
  return report;
})();

/**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 * Returns:
 *   s.name              - exception name
 *   s.message           - exception message
 *   s.stack[i].url      - JavaScript or HTML file URL
 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
 *   s.stack[i].args     - arguments passed to the function, if known
 *   s.stack[i].line     - line number, if known
 *   s.stack[i].column   - column number, if known
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 */
TraceKit.computeStackTrace = (function computeStackTraceWrapper() {
  // Contents of Exception in various browsers.
  //
  // SAFARI:
  // ex.message = Can't find variable: qq
  // ex.line = 59
  // ex.sourceId = 580238192
  // ex.sourceURL = http://...
  // ex.expressionBeginOffset = 96
  // ex.expressionCaretOffset = 98
  // ex.expressionEndOffset = 98
  // ex.name = ReferenceError
  //
  // FIREFOX:
  // ex.message = qq is not defined
  // ex.fileName = http://...
  // ex.lineNumber = 59
  // ex.columnNumber = 69
  // ex.stack = ...stack trace... (see the example below)
  // ex.name = ReferenceError
  //
  // CHROME:
  // ex.message = qq is not defined
  // ex.name = ReferenceError
  // ex.type = not_defined
  // ex.arguments = ['aa']
  // ex.stack = ...stack trace...
  //
  // INTERNET EXPLORER:
  // ex.message = ...
  // ex.name = ReferenceError
  //
  // OPERA:
  // ex.message = ...message... (see the example below)
  // ex.name = ReferenceError
  // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
  // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

  /**
     * Computes stack trace information from the stack property.
     * Chrome and Gecko use this property.
     * @param {Error} ex
     * @return {?Object.<string, *>} Stack trace information.
     */
  function computeStackTraceFromStackProp(ex) {
    if (typeof ex.stack === 'undefined' || !ex.stack) return;

    var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
      winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      // Used to additionally parse URL/line/column from eval frames
      geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      lines = ex.stack.split('\n'),
      stack = [],
      submatch,
      parts,
      element,
      reference = /^(.*) is undefined$/.exec(ex.message);

    for (var i = 0, j = lines.length; i < j; ++i) {
      if ((parts = chrome.exec(lines[i]))) {
        var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
        var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
        if (isEval && (submatch = chromeEval.exec(parts[2]))) {
          // throw out eval line/column and use top-most line/column number
          parts[2] = submatch[1]; // url
          parts[3] = submatch[2]; // line
          parts[4] = submatch[3]; // column
        }
        element = {
          url: !isNative ? parts[2] : null,
          func: parts[1] || UNKNOWN_FUNCTION,
          args: isNative ? [parts[2]] : [],
          line: parts[3] ? +parts[3] : null,
          column: parts[4] ? +parts[4] : null
        };
      } else if ((parts = winjs.exec(lines[i]))) {
        element = {
          url: parts[2],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: [],
          line: +parts[3],
          column: parts[4] ? +parts[4] : null
        };
      } else if ((parts = gecko.exec(lines[i]))) {
        var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
        if (isEval && (submatch = geckoEval.exec(parts[3]))) {
          // throw out eval line/column and use top-most line number
          parts[3] = submatch[1];
          parts[4] = submatch[2];
          parts[5] = null; // no column when eval
        } else if (i === 0 && !parts[5] && typeof ex.columnNumber !== 'undefined') {
          // FireFox uses this awesome columnNumber property for its top frame
          // Also note, Firefox's column number is 0-based and everything else expects 1-based,
          // so adding 1
          // NOTE: this hack doesn't work if top-most frame is eval
          stack[0].column = ex.columnNumber + 1;
        }
        element = {
          url: parts[3],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: parts[2] ? parts[2].split(',') : [],
          line: parts[4] ? +parts[4] : null,
          column: parts[5] ? +parts[5] : null
        };
      } else {
        continue;
      }

      if (!element.func && element.line) {
        element.func = UNKNOWN_FUNCTION;
      }

      stack.push(element);
    }

    if (!stack.length) {
      return null;
    }

    return {
      name: ex.name,
      message: ex.message,
      url: getLocationHref(),
      stack: stack
    };
  }

  /**
     * Adds information about the first frame to incomplete stack traces.
     * Safari and IE require this to get complete data on the first frame.
     * @param {Object.<string, *>} stackInfo Stack trace information from
     * one of the compute* methods.
     * @param {string} url The URL of the script that caused an error.
     * @param {(number|string)} lineNo The line number of the script that
     * caused an error.
     * @param {string=} message The error generated by the browser, which
     * hopefully contains the name of the object that caused the error.
     * @return {boolean} Whether or not the stack information was
     * augmented.
     */
  function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
    var initial = {
      url: url,
      line: lineNo
    };

    if (initial.url && initial.line) {
      stackInfo.incomplete = false;

      if (!initial.func) {
        initial.func = UNKNOWN_FUNCTION;
      }

      if (stackInfo.stack.length > 0) {
        if (stackInfo.stack[0].url === initial.url) {
          if (stackInfo.stack[0].line === initial.line) {
            return false; // already in stack trace
          } else if (
            !stackInfo.stack[0].line &&
            stackInfo.stack[0].func === initial.func
          ) {
            stackInfo.stack[0].line = initial.line;
            return false;
          }
        }
      }

      stackInfo.stack.unshift(initial);
      stackInfo.partial = true;
      return true;
    } else {
      stackInfo.incomplete = true;
    }

    return false;
  }

  /**
     * Computes stack trace information by walking the arguments.caller
     * chain at the time the exception occurred. This will cause earlier
     * frames to be missed but is the only way to get any stack trace in
     * Safari and IE. The top frame is restored by
     * {@link augmentStackTraceWithInitialElement}.
     * @param {Error} ex
     * @return {?Object.<string, *>} Stack trace information.
     */
  function computeStackTraceByWalkingCallerChain(ex, depth) {
    var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
      stack = [],
      funcs = {},
      recursion = false,
      parts,
      item,
      source;

    for (
      var curr = computeStackTraceByWalkingCallerChain.caller;
      curr && !recursion;
      curr = curr.caller
    ) {
      if (curr === computeStackTrace || curr === TraceKit.report) {
        // console.log('skipping internal function');
        continue;
      }

      item = {
        url: null,
        func: UNKNOWN_FUNCTION,
        line: null,
        column: null
      };

      if (curr.name) {
        item.func = curr.name;
      } else if ((parts = functionName.exec(curr.toString()))) {
        item.func = parts[1];
      }

      if (typeof item.func === 'undefined') {
        try {
          item.func = parts.input.substring(0, parts.input.indexOf('{'));
        } catch (e) {}
      }

      if (funcs['' + curr]) {
        recursion = true;
      } else {
        funcs['' + curr] = true;
      }

      stack.push(item);
    }

    if (depth) {
      // console.log('depth is ' + depth);
      // console.log('stack is ' + stack.length);
      stack.splice(0, depth);
    }

    var result = {
      name: ex.name,
      message: ex.message,
      url: getLocationHref(),
      stack: stack
    };
    augmentStackTraceWithInitialElement(
      result,
      ex.sourceURL || ex.fileName,
      ex.line || ex.lineNumber,
      ex.message || ex.description
    );
    return result;
  }

  /**
     * Computes a stack trace for an exception.
     * @param {Error} ex
     * @param {(string|number)=} depth
     */
  function computeStackTrace(ex, depth) {
    var stack = null;
    depth = depth == null ? 0 : +depth;

    try {
      stack = computeStackTraceFromStackProp(ex);
      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }

    try {
      stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }
    return {
      name: ex.name,
      message: ex.message,
      url: getLocationHref()
    };
  }

  computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
  computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;

  return computeStackTrace;
})();

module.exports = TraceKit;


/***/ }),

/***/ "./node_modules/raven-js/vendor/json-stringify-safe/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/raven-js/vendor/json-stringify-safe/stringify.js ***!
  \***********************************************************************/
/***/ ((module, exports) => {

/*
 json-stringify-safe
 Like JSON.stringify, but doesn't throw on circular references.

 Originally forked from https://github.com/isaacs/json-stringify-safe
 version 5.0.1 on 3/8/2017 and modified to handle Errors serialization
 and IE8 compatibility. Tests for this are in test/vendor.

 ISC license: https://github.com/isaacs/json-stringify-safe/blob/master/LICENSE
*/

exports = module.exports = stringify;
exports.getSerialize = serializer;

function indexOf(haystack, needle) {
  for (var i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) return i;
  }
  return -1;
}

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
}

// https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
function stringifyError(value) {
  var err = {
    // These properties are implemented as magical getters and don't show up in for in
    stack: value.stack,
    message: value.message,
    name: value.name
  };

  for (var i in value) {
    if (Object.prototype.hasOwnProperty.call(value, i)) {
      err[i] = value[i];
    }
  }

  return err;
}

function serializer(replacer, cycleReplacer) {
  var stack = [];
  var keys = [];

  if (cycleReplacer == null) {
    cycleReplacer = function(key, value) {
      if (stack[0] === value) {
        return '[Circular ~]';
      }
      return '[Circular ~.' + keys.slice(0, indexOf(stack, value)).join('.') + ']';
    };
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = indexOf(stack, this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);

      if (~indexOf(stack, value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }

    return replacer == null
      ? value instanceof Error ? stringifyError(value) : value
      : replacer.call(this, key, value);
  };
}


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./scripts/entries/feedback.ts ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Raven__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Raven */ "./scripts/lib/Raven.ts");
/* harmony import */ var _constants_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/selectors */ "./scripts/constants/selectors.ts");
/* harmony import */ var _feedback_ThickBoxModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feedback/ThickBoxModal */ "./scripts/feedback/ThickBoxModal.ts");
/* harmony import */ var _feedback_feedbackFormApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../feedback/feedbackFormApi */ "./scripts/feedback/feedbackFormApi.ts");
/* harmony import */ var _utils_backgroundAppUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/backgroundAppUtils */ "./scripts/utils/backgroundAppUtils.ts");
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");








function deactivatePlugin() {
  var href = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_2__.domElements.deactivatePluginButton).attr('href');

  if (href) {
    window.location.href = href;
  }
}

function setLoadingState() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_2__.domElements.deactivateFeedbackSubmit).addClass('loading');
}

function submitAndDeactivate(e) {
  e.preventDefault();
  setLoadingState();
  var feedback = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_2__.domElements.deactivateFeedbackForm).serializeArray().find(function (field) {
    return field.name === 'feedback';
  });
  (0,_feedback_feedbackFormApi__WEBPACK_IMPORTED_MODULE_4__.submitFeedbackForm)(_constants_selectors__WEBPACK_IMPORTED_MODULE_2__.domElements.deactivateFeedbackForm).then(function () {
    if (feedback) {
      (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_6__.monitorPluginDeactivation)(feedback.value.trim().replace(/[\s']+/g, '_'));
    }
  })["catch"](function (err) {
    _lib_Raven__WEBPACK_IMPORTED_MODULE_1__["default"].captureException(err);
  })["finally"](function () {
    deactivatePlugin();
  });
}

function init() {
  // eslint-disable-next-line no-new
  new _feedback_ThickBoxModal__WEBPACK_IMPORTED_MODULE_3__["default"](_constants_selectors__WEBPACK_IMPORTED_MODULE_2__.domElements.deactivatePluginButton, 'leadin-feedback-container', 'leadin-feedback-window', 'leadin-feedback-content');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_2__.domElements.deactivateFeedbackForm).off('submit').on('submit', submitAndDeactivate);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_constants_selectors__WEBPACK_IMPORTED_MODULE_2__.domElements.deactivateFeedbackSkip).off('click').on('click', deactivatePlugin);
}

(0,_utils_backgroundAppUtils__WEBPACK_IMPORTED_MODULE_5__.initBackgroundApp)(init);
})();

/******/ })()
;
//# sourceMappingURL=feedback.js.map