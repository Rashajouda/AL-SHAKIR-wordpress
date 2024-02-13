/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@linaria/react/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@linaria/react/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPropValid);


/***/ }),

/***/ "./scripts/api/hubspotApiClient.ts":
/*!*****************************************!*\
  !*** ./scripts/api/hubspotApiClient.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "fetchForms": () => (/* binding */ fetchForms)
/* harmony export */ });
/* harmony import */ var _wordpressApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordpressApiClient */ "./scripts/api/wordpressApiClient.ts");

var FORMS_PATH = "/forms/v2/forms";
function fetchForms() {
  var searchQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var queryParams = {
    offset: offset,
    limit: limit,
    formTypes: ['HUBSPOT']
  };

  if (searchQuery) {
    queryParams.name__contains = searchQuery;
  }

  return (0,_wordpressApiClient__WEBPACK_IMPORTED_MODULE_0__.makeProxyRequest)('get', FORMS_PATH, {}, queryParams).then(function (forms) {
    var filteredForms = [];
    forms.forEach(function (currentForm) {
      var guid = currentForm.guid,
          name = currentForm.name;
      filteredForms.push({
        name: name,
        guid: guid
      });
    });
    return filteredForms;
  });
}
function createForm(payload) {
  return (0,_wordpressApiClient__WEBPACK_IMPORTED_MODULE_0__.makeProxyRequest)('post', FORMS_PATH, payload);
}

/***/ }),

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

/***/ "./scripts/api/wordpressMeetingsApiClient.ts":
/*!***************************************************!*\
  !*** ./scripts/api/wordpressMeetingsApiClient.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchMeetingsAndUsers": () => (/* binding */ fetchMeetingsAndUsers),
/* harmony export */   "getOrCreateMeetingUser": () => (/* binding */ getOrCreateMeetingUser)
/* harmony export */ });
/* harmony import */ var _wordpressApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordpressApiClient */ "./scripts/api/wordpressApiClient.ts");

var WordpressServiceUrls = {
  GetMeetingsPath: '/wordpress/v1/meetings/links',
  CreateMeetingUserPath: '/wordpress/v1/meetings/user'
};
function fetchMeetingsAndUsers() {
  return (0,_wordpressApiClient__WEBPACK_IMPORTED_MODULE_0__.makeProxyRequest)('get', WordpressServiceUrls.GetMeetingsPath, {}, {});
}
function getOrCreateMeetingUser(defaultMeetingUser) {
  return (0,_wordpressApiClient__WEBPACK_IMPORTED_MODULE_0__.makeProxyRequest)('post', WordpressServiceUrls.CreateMeetingUserPath, defaultMeetingUser, {});
}

/***/ }),

/***/ "./scripts/constants/defaultFormOptions.ts":
/*!*************************************************!*\
  !*** ./scripts/constants/defaultFormOptions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_OPTIONS": () => (/* binding */ DEFAULT_OPTIONS),
/* harmony export */   "getFormDef": () => (/* binding */ getFormDef),
/* harmony export */   "isDefaultForm": () => (/* binding */ isDefaultForm)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
var _FORMS_TYPES;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var REGISTRATION_FORM = 'REGISTRATION_FORM';
var CONTACT_US_FORM = 'CONTACT_US_FORM';
var NEWSLETTER_FORM = 'NEWSLETTER_FORM';
var SUPPORT_FORM = 'SUPPORT_FORM';
var EVENT_FORM = 'EVENT_FORM';
var DEFAULT_OPTIONS = {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Templates', 'leadin'),
  options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Registration Form', 'leadin'),
    value: REGISTRATION_FORM
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contact us Form', 'leadin'),
    value: CONTACT_US_FORM
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Newsletter sign-up Form', 'leadin'),
    value: NEWSLETTER_FORM
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Support Form', 'leadin'),
    value: SUPPORT_FORM
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Event Registration Form', 'leadin'),
    value: EVENT_FORM
  }]
};
function isDefaultForm(value) {
  return value === REGISTRATION_FORM || value === CONTACT_US_FORM || value === NEWSLETTER_FORM || value === SUPPORT_FORM || value === EVENT_FORM;
}
var defaultProps = {
  action: '',
  method: 'POST',
  cssClass: 'hs-form stacked',
  redirect: '',
  submitText: 'Submit',
  followUpId: '',
  notifyRecipients: '',
  leadNurturingCampaignId: '',
  performableHtml: '',
  migratedFrom: '',
  ignoreCurrentValues: false,
  metaData: [{
    name: 'lang',
    value: 'en'
  }, {
    name: 'embedType',
    value: 'REGULAR'
  }],
  deletable: true,
  cloneable: true,
  captchaEnabled: false,
  inlineMessage: 'Thanks for submitting the form.',
  tmsId: '',
  campaignGuid: '',
  formType: 'HUBSPOT',
  editable: true,
  themeName: 'canvas',
  parentId: 0,
  isPublished: true,
  style: '{"fontFamily":"arial, helvetica, sans-serif","backgroundWidth":"100%","labelTextColor":"#33475b","linkColor":"#0000EE","clickedLinkColor":"#551A8B","labelTextSize":"13px","helpTextColor":"#7C98B6","helpTextSize":"11px","legalConsentTextColor":"#33475b","legalConsentTextSize":"14px","thankYouTextColor":"#33475b","thankYouTextSize":"16px","submitColor":"#ff7a59","submitAlignment":"left","submitFontColor":"#ffffff","submitSize":"12px","paginationProgressColor":"#598aff","paginationProgressTextColor":"#33475b","paginationProgressShow":true,"paginationProgressTransition":"fade","paginationProgressTheme":"default","paginationContentUseScroll":false,"paginationContentScrollHeight":"100%"}'
};
var emailFieldDef = {
  name: 'email',
  label: 'Email',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: true,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: []
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1'
};
var firsNameFieldDef = {
  name: 'firstname',
  label: 'First Name',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: []
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1'
};
var lastNameFieldDef = {
  name: 'lastname',
  label: 'Last Name',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: []
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1'
};
var messageFieldDef = {
  name: 'message',
  label: 'Message',
  type: 'string',
  fieldType: 'textarea',
  description: '',
  groupName: 'contact_activity',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: []
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1'
};
var phoneNumberFieldDef = {
  name: 'phone',
  label: 'Phone Number',
  type: 'string',
  fieldType: 'phonenumber',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: []
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1'
};
var ticketNameFieldDef = {
  name: 'subject',
  label: 'Ticket name',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'ticketinformation',
  displayOrder: -1,
  required: true,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: []
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'TICKET',
  metaData: [],
  objectTypeId: '0-5'
};
var tickedDescFieldDef = {
  name: 'content',
  label: 'Ticket description',
  type: 'string',
  fieldType: 'textarea',
  description: '',
  groupName: 'ticketinformation',
  displayOrder: -1,
  required: true,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: []
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'TICKET',
  metaData: [],
  objectTypeId: '0-5'
};
var companyNameFieldDef = {
  name: 'company',
  label: 'Company Name',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: []
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1'
};
var jobTitleFieldDef = {
  name: 'jobtitle',
  label: 'Job Title',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: []
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1'
};
var FORMS_TYPES = (_FORMS_TYPES = {}, _defineProperty(_FORMS_TYPES, REGISTRATION_FORM, {
  name: 'New registration form',
  formFieldGroups: [{
    fields: [emailFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [firsNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [lastNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [phoneNumberFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }]
}), _defineProperty(_FORMS_TYPES, CONTACT_US_FORM, {
  name: 'New contact us form',
  formFieldGroups: [{
    fields: [emailFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [firsNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [lastNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [messageFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }]
}), _defineProperty(_FORMS_TYPES, NEWSLETTER_FORM, {
  name: 'New newsletter sign-up form',
  formFieldGroups: [{
    fields: [emailFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [firsNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [lastNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }]
}), _defineProperty(_FORMS_TYPES, SUPPORT_FORM, {
  name: 'New support form',
  formFieldGroups: [{
    fields: [emailFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [ticketNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [tickedDescFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }]
}), _defineProperty(_FORMS_TYPES, EVENT_FORM, {
  name: 'New event registration form',
  formFieldGroups: [{
    fields: [companyNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [emailFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [firsNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [lastNameFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }, {
    fields: [jobTitleFieldDef],
    "default": true,
    isSmartGroup: false,
    richText: {
      content: '',
      type: 'TEXT'
    },
    isPageBreak: false
  }]
}), _FORMS_TYPES);
function getFormDef(type) {
  var _Intl$DateTimeFormat$ = Intl.DateTimeFormat().resolvedOptions(),
      _Intl$DateTimeFormat$2 = _Intl$DateTimeFormat$.locale,
      locale = _Intl$DateTimeFormat$2 === void 0 ? 'en-us' : _Intl$DateTimeFormat$2;

  var today = new Date();
  var selectedForm = FORMS_TYPES[type];
  return _objectSpread(_objectSpread(_objectSpread({}, defaultProps), selectedForm), {}, {
    name: "".concat(selectedForm.name, " (").concat(today.toLocaleDateString(locale, {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }), ") ")
  });
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

/***/ "./scripts/elementor/Common/ConnectPluginBanner.tsx":
/*!**********************************************************!*\
  !*** ./scripts/elementor/Common/ConnectPluginBanner.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectPluginBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _ElementorBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementorBanner */ "./scripts/elementor/Common/ElementorBanner.tsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function ConnectPluginBanner() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ElementorBanner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      dangerouslySetInnerHTML: {
        __html: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The HubSpot plugin isn’t connected right now. To use HubSpot tools on your WordPress site, %1$sconnect the plugin now%2$s.').replace('%1$s', '<a class="leadin-banner__link" href="admin.php?page=leadin&bannerClick=true">').replace('%2$s', '</a>')
      }
    })
  });
}

/***/ }),

/***/ "./scripts/elementor/Common/ElementorBanner.tsx":
/*!******************************************************!*\
  !*** ./scripts/elementor/Common/ElementorBanner.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementorBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function ElementorBanner(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'warning' : _ref$type,
      children = _ref.children;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "elementor-control-content",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "elementor-control-raw-html elementor-panel-alert elementor-panel-alert-".concat(type),
      children: children
    })
  });
}

/***/ }),

/***/ "./scripts/elementor/Common/ElementorButton.tsx":
/*!******************************************************!*\
  !*** ./scripts/elementor/Common/ElementorButton.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementorButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");
var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Container = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('div')({
  name: "Container",
  "class": "czoccom",
  propsAsIs: false
});
function ElementorButton(_ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, _excluded);

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Container, {
    className: "elementor-button-wrapper",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", _objectSpread(_objectSpread({
      className: "elementor-button elementor-button-default",
      type: "button"
    }, params), {}, {
      children: children
    }))
  });
}

__webpack_require__(/*! ./ElementorButton.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./ElementorButton.tsx */ "./scripts/elementor/Common/ElementorButton.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/elementor/Common/ElementorButton.tsx");

/***/ }),

/***/ "./scripts/elementor/FormWidget/ElementorFormSelect.tsx":
/*!**************************************************************!*\
  !*** ./scripts/elementor/FormWidget/ElementorFormSelect.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementorFormSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _Common_ElementorBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ElementorBanner */ "./scripts/elementor/Common/ElementorBanner.tsx");
/* harmony import */ var _api_hubspotApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/hubspotApiClient */ "./scripts/api/hubspotApiClient.ts");
/* harmony import */ var _shared_UIComponents_UISpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/UIComponents/UISpinner */ "./scripts/shared/UIComponents/UISpinner.tsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var mapForm = function mapForm(form) {
  return {
    label: form.name,
    value: form.guid
  };
};

function ElementorFormSelect(_ref) {
  var formId = _ref.formId,
      setAttributes = _ref.setAttributes;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      hasError = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      forms = _useState6[0],
      setForms = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setLoading(true);
    (0,_api_hubspotApiClient__WEBPACK_IMPORTED_MODULE_4__.fetchForms)('', 0, 100).then(function (data) {
      setForms(data.map(mapForm));
    })["catch"](function (error) {
      return setError(error);
    })["finally"](function () {
      return setLoading(false);
    });
  }, [setForms]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: loading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_UIComponents_UISpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    }) : hasError ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_ElementorBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "danger",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Please refresh your forms or try again in a few minutes.', 'leadin')
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
      value: formId,
      onChange: function onChange(event) {
        var selectedForm = forms.find(function (form) {
          return form.value === event.target.value;
        });

        if (selectedForm) {
          setAttributes({
            portalId: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.portalId,
            formId: selectedForm.value,
            formName: selectedForm.label
          });
        }
      },
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
        value: "",
        disabled: true,
        selected: true,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Search for a form', 'leadin')
      }), forms.map(function (form) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
          value: form.value,
          children: form.label
        }, form.value);
      })]
    })
  });
}

/***/ }),

/***/ "./scripts/elementor/FormWidget/FormControlController.tsx":
/*!****************************************************************!*\
  !*** ./scripts/elementor/FormWidget/FormControlController.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormControlController)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _Common_ConnectPluginBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ConnectPluginBanner */ "./scripts/elementor/Common/ConnectPluginBanner.tsx");
/* harmony import */ var _ElementorFormSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementorFormSelect */ "./scripts/elementor/FormWidget/ElementorFormSelect.tsx");





var ConnectionStatus = {
  Connected: 'Connected',
  NotConnected: 'NotConnected'
};
function FormControlController(attributes, setValue) {
  return function () {
    var render = function render() {
      if (_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.connectionStatus === ConnectionStatus.Connected) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ElementorFormSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
          formId: attributes.formId,
          setAttributes: setValue
        });
      } else {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_ConnectPluginBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {});
      }
    };

    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: render()
    });
  };
}

/***/ }),

/***/ "./scripts/elementor/FormWidget/FormWidgetController.tsx":
/*!***************************************************************!*\
  !*** ./scripts/elementor/FormWidget/FormWidgetController.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormWidgetController)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _shared_Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Common/ErrorHandler */ "./scripts/shared/Common/ErrorHandler.tsx");
/* harmony import */ var _shared_Form_FormEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Form/FormEdit */ "./scripts/shared/Form/FormEdit.tsx");





var ConnectionStatus = {
  Connected: 'Connected',
  NotConnected: 'NotConnected'
};
function FormWidgetController(attributes, setValue) {
  return function () {
    var render = function render() {
      if (_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.connectionStatus === ConnectionStatus.Connected) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_Form_FormEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attributes: attributes,
          isSelected: true,
          setAttributes: setValue,
          preview: false,
          origin: "elementor"
        });
      } else {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__["default"], {
          status: 401
        });
      }
    };

    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: render()
    });
  };
}

/***/ }),

/***/ "./scripts/elementor/FormWidget/registerFormWidget.ts":
/*!************************************************************!*\
  !*** ./scripts/elementor/FormWidget/registerFormWidget.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerFormWidget)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormControlController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControlController */ "./scripts/elementor/FormWidget/FormControlController.tsx");
/* harmony import */ var _FormWidgetController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormWidgetController */ "./scripts/elementor/FormWidget/FormWidgetController.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var registerFormWidget = /*#__PURE__*/function () {
  function registerFormWidget(controlContainer, widgetContainer, setValue) {
    _classCallCheck(this, registerFormWidget);

    _defineProperty(this, "widgetContainer", void 0);

    _defineProperty(this, "attributes", void 0);

    _defineProperty(this, "controlContainer", void 0);

    _defineProperty(this, "setValue", void 0);

    var attributes = widgetContainer.dataset.attributes ? JSON.parse(widgetContainer.dataset.attributes) : {};
    this.widgetContainer = widgetContainer;
    this.controlContainer = controlContainer;
    this.setValue = setValue;
    this.attributes = attributes;
  }

  _createClass(registerFormWidget, [{
    key: "render",
    value: function render() {
      react_dom__WEBPACK_IMPORTED_MODULE_0___default().render((0,_FormWidgetController__WEBPACK_IMPORTED_MODULE_2__["default"])(this.attributes, this.setValue)(), this.widgetContainer);
      react_dom__WEBPACK_IMPORTED_MODULE_0___default().render((0,_FormControlController__WEBPACK_IMPORTED_MODULE_1__["default"])(this.attributes, this.setValue)(), this.controlContainer);
    }
  }, {
    key: "done",
    value: function done() {
      react_dom__WEBPACK_IMPORTED_MODULE_0___default().unmountComponentAtNode(this.widgetContainer);
      react_dom__WEBPACK_IMPORTED_MODULE_0___default().unmountComponentAtNode(this.controlContainer);
    }
  }]);

  return registerFormWidget;
}();



/***/ }),

/***/ "./scripts/elementor/MeetingWidget/ElementorMeetingSelect.tsx":
/*!********************************************************************!*\
  !*** ./scripts/elementor/MeetingWidget/ElementorMeetingSelect.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementorMeetingSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_ElementorBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/ElementorBanner */ "./scripts/elementor/Common/ElementorBanner.tsx");
/* harmony import */ var _shared_UIComponents_UISpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/UIComponents/UISpinner */ "./scripts/shared/UIComponents/UISpinner.tsx");
/* harmony import */ var _ElementorMeetingWarning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementorMeetingWarning */ "./scripts/elementor/MeetingWidget/ElementorMeetingWarning.tsx");
/* harmony import */ var _shared_Meeting_MeetingsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Meeting/MeetingsContext */ "./scripts/shared/Meeting/MeetingsContext.tsx");
/* harmony import */ var _shared_Meeting_useMeetings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/Meeting/useMeetings */ "./scripts/shared/Meeting/useMeetings.ts");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ElementorMeetingSelect(_ref) {
  var url = _ref.url,
      setAttributes = _ref.setAttributes;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_shared_Meeting_MeetingsContext__WEBPACK_IMPORTED_MODULE_5__.MeetingsContext),
      loading = _useContext.loading,
      error = _useContext.error,
      reload = _useContext.reload;

  var meetings = (0,_shared_Meeting_useMeetings__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var selectedMeetingCalendar = (0,_shared_Meeting_useMeetings__WEBPACK_IMPORTED_MODULE_6__.useSelectedMeetingCalendar)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(url),
      _useState2 = _slicedToArray(_useState, 2),
      localUrl = _useState2[0],
      setLocalUrl = _useState2[1];

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: loading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_UIComponents_UISpinner__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    }) : error ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_ElementorBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "danger",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Please refresh your meetings or try again in a few minutes.', 'leadin')
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [selectedMeetingCalendar && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ElementorMeetingWarning__WEBPACK_IMPORTED_MODULE_4__["default"], {
        status: selectedMeetingCalendar,
        triggerReload: function triggerReload() {
          return reload();
        }
      }), meetings.length > 1 && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
        value: localUrl,
        onChange: function onChange(event) {
          var newUrl = event.target.value;
          setLocalUrl(newUrl);
          setAttributes({
            url: newUrl
          });
        },
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
          value: "",
          disabled: true,
          selected: true,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Select a meeting', 'leadin')
        }), meetings.map(function (item) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
            value: item.value,
            children: item.label
          }, item.value);
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./scripts/elementor/MeetingWidget/ElementorMeetingWarning.tsx":
/*!*********************************************************************!*\
  !*** ./scripts/elementor/MeetingWidget/ElementorMeetingWarning.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeetingWarning)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");
/* harmony import */ var _shared_Meeting_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Meeting/constants */ "./scripts/shared/Meeting/constants.ts");
/* harmony import */ var _Common_ElementorButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/ElementorButton */ "./scripts/elementor/Common/ElementorButton.tsx");
/* harmony import */ var _Common_ElementorBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/ElementorBanner */ "./scripts/elementor/Common/ElementorBanner.tsx");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);









var Container = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_8__.styled)('div')({
  name: "Container",
  "class": "c1p032ba",
  propsAsIs: false
});
function MeetingWarning(_ref) {
  var triggerReload = _ref.triggerReload,
      status = _ref.status;
  var isMeetingOwner = status === _shared_Meeting_constants__WEBPACK_IMPORTED_MODULE_4__.CURRENT_USER_CALENDAR_MISSING;
  var titleText = isMeetingOwner ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Your calendar is not connected.', 'leadin') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Calendar is not connected.', 'leadin');
  var titleMessage = isMeetingOwner ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Please connect your calendar to activate your scheduling pages.', 'leadin') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Make sure that everybody in this meeting has connected their calendar from the Meetings page in HubSpot.', 'leadin');
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Container, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Common_ElementorBanner__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "warning",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: titleText
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), titleMessage]
      })
    }), isMeetingOwner && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_ElementorButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "meetings-connect-calendar",
      onClick: function onClick() {
        return (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_3__.leadinConnectCalendar)({
          hubspotBaseUrl: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.hubspotBaseUrl,
          portalId: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.portalId,
          triggerReload: triggerReload
        });
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Connect calendar', 'leadin')
    })]
  });
}

__webpack_require__(/*! ./ElementorMeetingWarning.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./ElementorMeetingWarning.tsx */ "./scripts/elementor/MeetingWidget/ElementorMeetingWarning.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/elementor/MeetingWidget/ElementorMeetingWarning.tsx");

/***/ }),

/***/ "./scripts/elementor/MeetingWidget/MeetingControlController.tsx":
/*!**********************************************************************!*\
  !*** ./scripts/elementor/MeetingWidget/MeetingControlController.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeetingControlController)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _Common_ConnectPluginBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ConnectPluginBanner */ "./scripts/elementor/Common/ConnectPluginBanner.tsx");
/* harmony import */ var _ElementorMeetingSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementorMeetingSelect */ "./scripts/elementor/MeetingWidget/ElementorMeetingSelect.tsx");
/* harmony import */ var _shared_Meeting_MeetingsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Meeting/MeetingsContext */ "./scripts/shared/Meeting/MeetingsContext.tsx");






var ConnectionStatus = {
  Connected: 'Connected',
  NotConnected: 'NotConnected'
};
function MeetingControlController(attributes, setValue) {
  return function () {
    var render = function render() {
      if (_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.connectionStatus === ConnectionStatus.Connected) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_Meeting_MeetingsContext__WEBPACK_IMPORTED_MODULE_5__["default"], {
          url: attributes.url,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ElementorMeetingSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
            url: attributes.url,
            setAttributes: setValue
          })
        });
      } else {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_ConnectPluginBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {});
      }
    };

    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: render()
    });
  };
}

/***/ }),

/***/ "./scripts/elementor/MeetingWidget/MeetingWidgetController.tsx":
/*!*********************************************************************!*\
  !*** ./scripts/elementor/MeetingWidget/MeetingWidgetController.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeetingWidgetController)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _shared_Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Common/ErrorHandler */ "./scripts/shared/Common/ErrorHandler.tsx");
/* harmony import */ var _shared_Meeting_MeetingEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Meeting/MeetingEdit */ "./scripts/shared/Meeting/MeetingEdit.tsx");





var ConnectionStatus = {
  Connected: 'Connected',
  NotConnected: 'NotConnected'
};
function MeetingWidgetController(attributes, setValue) {
  return function () {
    var render = function render() {
      if (_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.connectionStatus === ConnectionStatus.Connected) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_Meeting_MeetingEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attributes: attributes,
          isSelected: true,
          setAttributes: setValue,
          preview: false,
          origin: "elementor"
        });
      } else {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__["default"], {
          status: 401
        });
      }
    };

    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: render()
    });
  };
}

/***/ }),

/***/ "./scripts/elementor/MeetingWidget/registerMeetingWidget.ts":
/*!******************************************************************!*\
  !*** ./scripts/elementor/MeetingWidget/registerMeetingWidget.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerMeetingsWidget)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetingControlController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetingControlController */ "./scripts/elementor/MeetingWidget/MeetingControlController.tsx");
/* harmony import */ var _MeetingWidgetController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetingWidgetController */ "./scripts/elementor/MeetingWidget/MeetingWidgetController.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var registerMeetingsWidget = /*#__PURE__*/function () {
  function registerMeetingsWidget(controlContainer, widgetContainer, setValue) {
    _classCallCheck(this, registerMeetingsWidget);

    _defineProperty(this, "widgetContainer", void 0);

    _defineProperty(this, "controlContainer", void 0);

    _defineProperty(this, "setValue", void 0);

    _defineProperty(this, "attributes", void 0);

    var attributes = widgetContainer.dataset.attributes ? JSON.parse(widgetContainer.dataset.attributes) : {};
    this.widgetContainer = widgetContainer;
    this.controlContainer = controlContainer;
    this.setValue = setValue;
    this.attributes = attributes;
  }

  _createClass(registerMeetingsWidget, [{
    key: "render",
    value: function render() {
      react_dom__WEBPACK_IMPORTED_MODULE_0___default().render((0,_MeetingWidgetController__WEBPACK_IMPORTED_MODULE_2__["default"])(this.attributes, this.setValue)(), this.widgetContainer);
      react_dom__WEBPACK_IMPORTED_MODULE_0___default().render((0,_MeetingControlController__WEBPACK_IMPORTED_MODULE_1__["default"])(this.attributes, this.setValue)(), this.controlContainer);
    }
  }, {
    key: "done",
    value: function done() {
      react_dom__WEBPACK_IMPORTED_MODULE_0___default().unmountComponentAtNode(this.widgetContainer);
      react_dom__WEBPACK_IMPORTED_MODULE_0___default().unmountComponentAtNode(this.controlContainer);
    }
  }]);

  return registerMeetingsWidget;
}();



/***/ }),

/***/ "./scripts/elementor/elementoWidget.ts":
/*!*********************************************!*\
  !*** ./scripts/elementor/elementoWidget.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ elementorWidget)
/* harmony export */ });
function elementorWidget(elementor, options, callback) {
  var done = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  return elementor.modules.controls.BaseData.extend({
    onReady: function onReady() {
      var self = this;
      var controlContainer = this.ui.contentEditable.prevObject[0].querySelector(options.controlSelector);
      var widgetContainer = this.options.element.$el[0].querySelector(options.containerSelector);

      if (widgetContainer) {
        callback(controlContainer, widgetContainer, function (args) {
          return self.setValue(args);
        });
      } else {
        //@ts-expect-error global
        window.elementorFrontend.hooks.addAction("frontend/element_ready/".concat(options.widgetName, ".default"), function (element) {
          widgetContainer = element[0].querySelector(options.containerSelector);
          callback(controlContainer, widgetContainer, function (args) {
            return self.setValue(args);
          });
        });
      }
    },
    saveValue: function saveValue(props) {
      this.setValue(props);
    },
    onBeforeDestroy: function onBeforeDestroy() {
      //@ts-expect-error global
      window.elementorFrontend.hooks.removeAction("frontend/element_ready/".concat(options.widgetName, ".default"));
      done();
    }
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

/***/ "./scripts/shared/Auth/AuthWrapper.tsx":
/*!*********************************************!*\
  !*** ./scripts/shared/Auth/AuthWrapper.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAuth */ "./scripts/shared/Auth/useAuth.ts");
/* harmony import */ var _Common_LoadingBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/LoadingBlock */ "./scripts/shared/Common/LoadingBlock.tsx");
/* harmony import */ var _Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/ErrorHandler */ "./scripts/shared/Common/ErrorHandler.tsx");





function AuthWrapper(_ref) {
  var children = _ref.children;

  var _useAuth = (0,_useAuth__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      auth = _useAuth.auth,
      loading = _useAuth.loading;

  return loading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_LoadingBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : auth ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: children
  }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_4__["default"], {
    status: 401
  });
}

/***/ }),

/***/ "./scripts/shared/Auth/useAuth.ts":
/*!****************************************!*\
  !*** ./scripts/shared/Auth/useAuth.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useAuth() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__.getAuth)().then(function (response) {
      setAuth(!!response);
      setLoading(false);
    })["catch"](function () {
      return setLoading(false);
    });
  }, []);
  return {
    auth: auth,
    loading: loading
  };
}

/***/ }),

/***/ "./scripts/shared/Common/AsyncSelect.tsx":
/*!***********************************************!*\
  !*** ./scripts/shared/Common/AsyncSelect.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _UIComponents_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIComponents/colors */ "./scripts/shared/UIComponents/colors.ts");
/* harmony import */ var _UIComponents_UISpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UIComponents/UISpinner */ "./scripts/shared/UIComponents/UISpinner.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Container = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "Container",
  "class": "c1wxx7eu",
  propsAsIs: false
});

var _exp2 = /*#__PURE__*/function _exp2() {
  return function (props) {
    return props.focused ? '0' : '1px';
  };
};

var _exp3 = /*#__PURE__*/function _exp3() {
  return function (props) {
    return props.focused ? "0 0 0 2px ".concat(_UIComponents_colors__WEBPACK_IMPORTED_MODULE_2__.CALYPSO_MEDIUM) : 'none';
  };
};

var ControlContainer = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "ControlContainer",
  "class": "c1rgwbep",
  propsAsIs: false,
  vars: {
    "c1rgwbep-0": [_exp2()],
    "c1rgwbep-1": [_exp3()]
  }
});
var ValueContainer = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "ValueContainer",
  "class": "v1mdmbaj",
  propsAsIs: false
});
var Placeholder = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "Placeholder",
  "class": "p1gwkvxy",
  propsAsIs: false
});
var SingleValue = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "SingleValue",
  "class": "s1bwlafs",
  propsAsIs: false
});
var IndicatorContainer = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "IndicatorContainer",
  "class": "i196z9y5",
  propsAsIs: false
});
var DropdownIndicator = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "DropdownIndicator",
  "class": "d1dfo5ow",
  propsAsIs: false
});
var InputContainer = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "InputContainer",
  "class": "if3lze",
  propsAsIs: false
});
var Input = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('input')({
  name: "Input",
  "class": "i9kxf50",
  propsAsIs: false
});
var InputShadow = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "InputShadow",
  "class": "igjr3uc",
  propsAsIs: false
});
var MenuContainer = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "MenuContainer",
  "class": "mhb9if7",
  propsAsIs: false
});
var MenuList = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "MenuList",
  "class": "mxaof7s",
  propsAsIs: false
});
var MenuGroup = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "MenuGroup",
  "class": "mw50s5v",
  propsAsIs: false
});
var MenuGroupHeader = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "MenuGroupHeader",
  "class": "m11rzvjw",
  propsAsIs: false
});

var _exp5 = /*#__PURE__*/function _exp5() {
  return function (props) {
    return props.selected ? _UIComponents_colors__WEBPACK_IMPORTED_MODULE_2__.CALYPSO_MEDIUM : 'transparent';
  };
};

var _exp6 = /*#__PURE__*/function _exp6() {
  return function (props) {
    return props.selected ? '#fff' : 'inherit';
  };
};

var _exp7 = /*#__PURE__*/function _exp7() {
  return function (props) {
    return props.selected ? _UIComponents_colors__WEBPACK_IMPORTED_MODULE_2__.CALYPSO_MEDIUM : _UIComponents_colors__WEBPACK_IMPORTED_MODULE_2__.CALYPSO_LIGHT;
  };
};

var MenuItem = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)('div')({
  name: "MenuItem",
  "class": "m1jcdsjv",
  propsAsIs: false,
  vars: {
    "m1jcdsjv-0": [_exp5()],
    "m1jcdsjv-1": [_exp6()],
    "m1jcdsjv-2": [_exp7()]
  }
});
function AsyncSelect(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      loadOptions = _ref.loadOptions,
      onChange = _ref.onChange,
      defaultOptions = _ref.defaultOptions;
  var inputEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var inputShadowEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setFocus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      localValue = _useState6[0],
      setLocalValue = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOptions),
      _useState8 = _slicedToArray(_useState7, 2),
      options = _useState8[0],
      setOptions = _useState8[1];

  var inputSize = "".concat(inputShadowEl.current ? inputShadowEl.current.clientWidth + 10 : 2, "px");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (loadOptions) {
      setLoading(true);
      loadOptions(localValue, function (result) {
        setOptions(result);
        setLoading(false);
      });
    }
  }, [localValue, loadOptions]);

  var renderItems = function renderItems() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var parentKey = arguments.length > 1 ? arguments[1] : undefined;
    return items.map(function (item, index) {
      if (item.options) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MenuGroup, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuGroupHeader, {
            id: "".concat(index, "-heading"),
            children: item.label
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: renderItems(item.options, index)
          })]
        }, "async-select-item-".concat(index));
      } else {
        var key = "async-select-item-".concat(parentKey !== undefined ? "".concat(parentKey, "-").concat(index) : index);
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuItem, {
          id: key,
          selected: value && item.value === value.value,
          onClick: function onClick() {
            onChange(item);
            setFocus(false);
          },
          children: item.label
        }, key);
      }
    });
  };

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ControlContainer, {
      id: "leadin-async-selector",
      focused: isFocused,
      onClick: function onClick() {
        if (isFocused) {
          if (inputEl.current) {
            inputEl.current.blur();
          }

          setFocus(false);
          setLocalValue('');
        } else {
          if (inputEl.current) {
            inputEl.current.focus();
          }

          setFocus(true);
        }
      },
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ValueContainer, {
        children: [localValue === '' && (!value ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Placeholder, {
          children: placeholder
        }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SingleValue, {
          children: value.label
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputContainer, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Input, {
            ref: inputEl,
            onFocus: function onFocus() {
              setFocus(true);
            },
            onChange: function onChange(e) {
              setLocalValue(e.target.value);
            },
            value: localValue,
            width: inputSize,
            id: "asycn-select-input"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputShadow, {
            ref: inputShadowEl,
            children: localValue
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IndicatorContainer, {
        children: [isLoading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UISpinner__WEBPACK_IMPORTED_MODULE_3__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DropdownIndicator, {})]
      })]
    }), isFocused && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuContainer, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuList, {
        children: renderItems(options)
      })
    })]
  });
}

__webpack_require__(/*! ./AsyncSelect.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./AsyncSelect.tsx */ "./scripts/shared/Common/AsyncSelect.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/Common/AsyncSelect.tsx");

/***/ }),

/***/ "./scripts/shared/Common/ErrorHandler.tsx":
/*!************************************************!*\
  !*** ./scripts/shared/Common/ErrorHandler.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorHandler)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _UIComponents_UIButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UIComponents/UIButton */ "./scripts/shared/UIComponents/UIButton.ts");
/* harmony import */ var _UIComponents_UIContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIComponents/UIContainer */ "./scripts/shared/UIComponents/UIContainer.ts");
/* harmony import */ var _HubspotWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HubspotWrapper */ "./scripts/shared/Common/HubspotWrapper.ts");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);








function redirectToPlugin() {
  window.location.href = "".concat(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_4__.adminUrl, "admin.php?page=leadin&leadin_expired=").concat(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_4__.redirectNonce);
}

function ErrorHandler(_ref) {
  var status = _ref.status,
      resetErrorState = _ref.resetErrorState,
      _ref$errorInfo = _ref.errorInfo,
      errorInfo = _ref$errorInfo === void 0 ? {
    header: '',
    message: '',
    action: ''
  } : _ref$errorInfo;
  var isUnauthorized = status === 401 || status === 403;
  var errorHeader = isUnauthorized ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Your plugin isn't authorized", 'leadin') : errorInfo.header;
  var errorMessage = isUnauthorized ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Reauthorize your plugin to access your free HubSpot tools.', 'leadin') : errorInfo.message;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HubspotWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pluginPath: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_4__.pluginPath,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UIComponents_UIContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      textAlign: "center",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
        children: errorHeader
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: errorMessage
        })
      }), isUnauthorized ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UIButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "data-test-id": "authorize-button",
        onClick: redirectToPlugin,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Go to plugin', 'leadin')
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UIButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "data-test-id": "retry-button",
        onClick: resetErrorState,
        children: errorInfo.action
      })]
    })
  });
}

/***/ }),

/***/ "./scripts/shared/Common/HubspotWrapper.ts":
/*!*************************************************!*\
  !*** ./scripts/shared/Common/HubspotWrapper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");


var _exp = /*#__PURE__*/function _exp() {
  return function (props) {
    return "url(".concat(props.pluginPath, "/public/assets/images/hubspot.svg)");
  };
};

var _exp2 = /*#__PURE__*/function _exp2() {
  return function (props) {
    return props.padding || '90px 20% 25px';
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "HubspotWrapper0",
  "class": "h1q5v5ee",
  propsAsIs: false,
  vars: {
    "h1q5v5ee-0": [_exp()],
    "h1q5v5ee-1": [_exp2()]
  }
}));

__webpack_require__(/*! ./HubspotWrapper.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./HubspotWrapper.ts */ "./scripts/shared/Common/HubspotWrapper.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/Common/HubspotWrapper.ts");

/***/ }),

/***/ "./scripts/shared/Common/LoadingBlock.tsx":
/*!************************************************!*\
  !*** ./scripts/shared/Common/LoadingBlock.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _HubspotWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HubspotWrapper */ "./scripts/shared/Common/HubspotWrapper.ts");
/* harmony import */ var _UIComponents_UISpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIComponents/UISpinner */ "./scripts/shared/UIComponents/UISpinner.tsx");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");




function LoadingBlock() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HubspotWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pluginPath: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_3__.pluginPath,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UISpinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 50
    })
  });
}

/***/ }),

/***/ "./scripts/shared/Form/FormEdit.tsx":
/*!******************************************!*\
  !*** ./scripts/shared/Form/FormEdit.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _UIComponents_UISpacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UIComponents/UISpacer */ "./scripts/shared/UIComponents/UISpacer.ts");
/* harmony import */ var _Auth_AuthWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Auth/AuthWrapper */ "./scripts/shared/Auth/AuthWrapper.tsx");
/* harmony import */ var _PreviewForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PreviewForm */ "./scripts/shared/Form/PreviewForm.tsx");
/* harmony import */ var _FormSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormSelect */ "./scripts/shared/Form/FormSelect.tsx");
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");








function FormEdit(_ref) {
  var attributes = _ref.attributes,
      isSelected = _ref.isSelected,
      setAttributes = _ref.setAttributes,
      _ref$preview = _ref.preview,
      preview = _ref$preview === void 0 ? true : _ref$preview,
      _ref$origin = _ref.origin,
      origin = _ref$origin === void 0 ? 'gutenberg' : _ref$origin;
  var formId = attributes.formId,
      formName = attributes.formName;
  var formSelected = _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.portalId && formId;

  var handleChange = function handleChange(selectedForm) {
    setAttributes({
      portalId: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.portalId,
      formId: selectedForm.value,
      formName: selectedForm.label
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_7__.monitorFormPreviewRender)(origin);
  }, [origin]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(isSelected || !formSelected) && (!_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.oauth ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Auth_AuthWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
        formId: formId,
        formName: formName,
        handleChange: handleChange,
        origin: origin
      })
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
      formId: formId,
      formName: formName,
      handleChange: handleChange,
      origin: origin
    })), formSelected && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isSelected && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UISpacer__WEBPACK_IMPORTED_MODULE_3__["default"], {}), preview && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PreviewForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        portalId: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.portalId,
        formId: formId
      })]
    })]
  });
}

/***/ }),

/***/ "./scripts/shared/Form/FormSelect.tsx":
/*!********************************************!*\
  !*** ./scripts/shared/Form/FormSelect.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");
/* harmony import */ var _api_hubspotApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/hubspotApiClient */ "./scripts/api/hubspotApiClient.ts");
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useForm */ "./scripts/shared/Form/useForm.ts");
/* harmony import */ var _FormSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormSelector */ "./scripts/shared/Form/FormSelector.tsx");
/* harmony import */ var _Common_LoadingBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/LoadingBlock */ "./scripts/shared/Common/LoadingBlock.tsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants_defaultFormOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/defaultFormOptions */ "./scripts/constants/defaultFormOptions.ts");
/* harmony import */ var _Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Common/ErrorHandler */ "./scripts/shared/Common/ErrorHandler.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var mapForm = function mapForm(form) {
  return {
    label: form.name,
    value: form.guid
  };
};

function FormSelect(_ref) {
  var formId = _ref.formId,
      formName = _ref.formName,
      handleChange = _ref.handleChange,
      _ref$origin = _ref.origin,
      origin = _ref$origin === void 0 ? 'gutenberg' : _ref$origin;

  var _useForm = (0,_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])(formId, formName),
      form = _useForm.form,
      loading = _useForm.loading,
      setLoading = _useForm.setLoading;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      searchformError = _useState2[0],
      setSearchFormError = _useState2[1];

  var loadOptions = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function (search, callback) {
    (0,_api_hubspotApiClient__WEBPACK_IMPORTED_MODULE_4__.fetchForms)(search).then(function (forms) {
      return callback([].concat(_toConsumableArray(forms.map(mapForm)), [_constants_defaultFormOptions__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_OPTIONS]));
    })["catch"](function (error) {
      return setSearchFormError(error);
    });
  }, 300, {
    trailing: true
  });
  var value = form ? mapForm(form) : null;

  var handleLocalChange = function handleLocalChange(option) {
    if ((0,_constants_defaultFormOptions__WEBPACK_IMPORTED_MODULE_9__.isDefaultForm)(option.value)) {
      setLoading(true);
      (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_3__.monitorFormCreatedFromTemplate)(option.value, origin);
      (0,_api_hubspotApiClient__WEBPACK_IMPORTED_MODULE_4__.createForm)((0,_constants_defaultFormOptions__WEBPACK_IMPORTED_MODULE_9__.getFormDef)(option.value)).then(function (_ref2) {
        var guid = _ref2.guid,
            name = _ref2.name;
        return handleChange({
          value: guid,
          label: name
        });
      })["catch"](function (error) {
        setSearchFormError(error);
        (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_3__.monitorFormCreationFailed)(_objectSpread(_objectSpread({}, error), {}, {
          type: option.value
        }), origin);
      })["finally"](function () {
        return setLoading(false);
      });
    } else {
      handleChange(option);
    }
  };

  var formApiError = searchformError;
  return loading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_LoadingBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {}) : !formApiError ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loadOptions: loadOptions,
    onChange: function onChange(option) {
      return handleLocalChange(option);
    },
    value: value
  }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_10__["default"], {
    status: formApiError.status,
    resetErrorState: function resetErrorState() {
      return setSearchFormError(null);
    },
    errorInfo: {
      header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('There was a problem retrieving your forms', 'leadin'),
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Please refresh your forms or try again in a few minutes.', 'leadin'),
      action: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Refresh forms', 'leadin')
    }
  });
}

/***/ }),

/***/ "./scripts/shared/Form/FormSelector.tsx":
/*!**********************************************!*\
  !*** ./scripts/shared/Form/FormSelector.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Common_HubspotWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/HubspotWrapper */ "./scripts/shared/Common/HubspotWrapper.ts");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _Common_AsyncSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/AsyncSelect */ "./scripts/shared/Common/AsyncSelect.tsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





function FormSelector(_ref) {
  var loadOptions = _ref.loadOptions,
      onChange = _ref.onChange,
      value = _ref.value;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Common_HubspotWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pluginPath: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.pluginPath,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      "data-test-id": "leadin-form-select",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select an existing form or create a new one from a template', 'leadin')
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_AsyncSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search for a form', 'leadin'),
      value: value,
      loadOptions: loadOptions,
      onChange: onChange
    })]
  });
}

/***/ }),

/***/ "./scripts/shared/Form/PreviewForm.tsx":
/*!*********************************************!*\
  !*** ./scripts/shared/Form/PreviewForm.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PreviewForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UIComponents_UIOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIComponents/UIOverlay */ "./scripts/shared/UIComponents/UIOverlay.ts");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _useFormsScript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useFormsScript */ "./scripts/shared/Form/useFormsScript.ts");





function PreviewForm(_ref) {
  var portalId = _ref.portalId,
      formId = _ref.formId;
  var inputEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var ready = (0,_useFormsScript__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!ready) {
      return;
    }

    if (inputEl.current) {
      inputEl.current.innerHTML = '';
      var embedScript = document.createElement('script');
      embedScript.innerHTML = "hbspt.forms.create({ portalId: '".concat(portalId, "', formId: '").concat(formId, "', region: '").concat(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_3__.hublet, "', ").concat(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_3__.formsScriptPayload, " });");
      inputEl.current.appendChild(embedScript);
    }
  }, [formId, portalId, ready, inputEl]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UIOverlay__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: inputEl
  });
}

/***/ }),

/***/ "./scripts/shared/Form/useForm.ts":
/*!****************************************!*\
  !*** ./scripts/shared/Form/useForm.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // TODO: This hook will dissapear when OAuth rolls out.

function useForm(id, name) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      form = _useState4[0],
      setForm = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!id || _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.oauth) {
      if (name) {
        setForm({
          guid: id,
          name: name
        });
      } else {
        setForm(null);
      }

      setLoading(false);
    } else {
      (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__.getForm)(id).then(function (response) {
        setForm(response);
        setLoading(false);
      })["catch"](function () {
        return setLoading(false);
      });
    }
  }, [id, name, setForm]);
  return {
    loading: loading,
    form: form,
    setLoading: setLoading
  };
}

/***/ }),

/***/ "./scripts/shared/Form/useFormsScript.ts":
/*!***********************************************!*\
  !*** ./scripts/shared/Form/useFormsScript.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFormScript)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _lib_Raven__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/Raven */ "./scripts/lib/Raven.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var promise;

function loadFormsScript() {
  if (!promise) {
    promise = new Promise(function (resolve, reject) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().getScript(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.formsScript).done(resolve).fail(reject);
    });
  }

  return promise;
}

function useFormScript() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    loadFormsScript().then(function () {
      return setReady(true);
    })["catch"](function (error) {
      return _lib_Raven__WEBPACK_IMPORTED_MODULE_3__["default"].captureException(error);
    });
  }, []);
  return ready;
}

/***/ }),

/***/ "./scripts/shared/Meeting/MeetingController.tsx":
/*!******************************************************!*\
  !*** ./scripts/shared/Meeting/MeetingController.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeetingController)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_LoadingBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/LoadingBlock */ "./scripts/shared/Common/LoadingBlock.tsx");
/* harmony import */ var _MeetingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetingSelector */ "./scripts/shared/Meeting/MeetingSelector.tsx");
/* harmony import */ var _MeetingWarning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MeetingWarning */ "./scripts/shared/Meeting/MeetingWarning.tsx");
/* harmony import */ var _MeetingsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MeetingsContext */ "./scripts/shared/Meeting/MeetingsContext.tsx");
/* harmony import */ var _useMeetings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useMeetings */ "./scripts/shared/Meeting/useMeetings.ts");
/* harmony import */ var _Common_HubspotWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/HubspotWrapper */ "./scripts/shared/Common/HubspotWrapper.ts");
/* harmony import */ var _Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/ErrorHandler */ "./scripts/shared/Common/ErrorHandler.tsx");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);











function MeetingController(_ref) {
  var handleChange = _ref.handleChange;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_MeetingsContext__WEBPACK_IMPORTED_MODULE_5__.MeetingsContext),
      loading = _useContext.loading,
      selectedMeeting = _useContext.selectedMeeting,
      error = _useContext.error,
      reload = _useContext.reload;

  var meetings = (0,_useMeetings__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var selectedMeetingOption = (0,_useMeetings__WEBPACK_IMPORTED_MODULE_6__.useSelectedMeeting)();
  var selectedMeetingCalendar = (0,_useMeetings__WEBPACK_IMPORTED_MODULE_6__.useSelectedMeetingCalendar)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!selectedMeeting && meetings.length > 0) {
      handleChange(meetings[0].value);
    }
  }, [meetings, selectedMeeting, handleChange]);

  var handleLocalChange = function handleLocalChange(option) {
    handleChange(option.value);
  };

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: loading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_LoadingBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {}) : error ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_ErrorHandler__WEBPACK_IMPORTED_MODULE_8__["default"], {
      status: error && error.status || error,
      resetErrorState: function resetErrorState() {
        return reload();
      },
      errorInfo: {
        header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('There was a problem retrieving your meetings', 'leadin'),
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Please refresh your meetings or try again in a few minutes.', 'leadin'),
        action: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Refresh meetings', 'leadin')
      }
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Common_HubspotWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      padding: "90px 32px 24px",
      pluginPath: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_9__.pluginPath,
      children: [selectedMeetingCalendar && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MeetingWarning__WEBPACK_IMPORTED_MODULE_4__["default"], {
        status: selectedMeetingCalendar,
        triggerReload: function triggerReload() {
          return reload();
        }
      }), meetings.length > 1 && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MeetingSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onChange: handleLocalChange,
        options: meetings,
        value: selectedMeetingOption
      })]
    })
  });
}

/***/ }),

/***/ "./scripts/shared/Meeting/MeetingEdit.tsx":
/*!************************************************!*\
  !*** ./scripts/shared/Meeting/MeetingEdit.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeetingEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");
/* harmony import */ var _MeetingController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetingController */ "./scripts/shared/Meeting/MeetingController.tsx");
/* harmony import */ var _MeetingsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MeetingsContext */ "./scripts/shared/Meeting/MeetingsContext.tsx");
/* harmony import */ var _PreviewMeeting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PreviewMeeting */ "./scripts/shared/Meeting/PreviewMeeting.tsx");






function MeetingEdit(_ref) {
  var url = _ref.attributes.url,
      isSelected = _ref.isSelected,
      setAttributes = _ref.setAttributes,
      _ref$preview = _ref.preview,
      preview = _ref$preview === void 0 ? true : _ref$preview,
      _ref$origin = _ref.origin,
      origin = _ref$origin === void 0 ? 'gutenberg' : _ref$origin;

  var handleChange = function handleChange(newUrl) {
    setAttributes({
      url: newUrl
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_2__.monitorMeetingPreviewRender)(origin);
  }, [origin]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(isSelected || !url) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MeetingsContext__WEBPACK_IMPORTED_MODULE_4__["default"], {
      url: url,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MeetingController__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handleChange: handleChange
      })
    }), preview && url && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PreviewMeeting__WEBPACK_IMPORTED_MODULE_5__["default"], {
      url: url
    })]
  });
}

/***/ }),

/***/ "./scripts/shared/Meeting/MeetingSelector.tsx":
/*!****************************************************!*\
  !*** ./scripts/shared/Meeting/MeetingSelector.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeetingSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_AsyncSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/AsyncSelect */ "./scripts/shared/Common/AsyncSelect.tsx");
/* harmony import */ var _UIComponents_UISpacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UIComponents/UISpacer */ "./scripts/shared/UIComponents/UISpacer.ts");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





function MeetingSelector(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      value = _ref.value;
  var optionsWrapper = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Meeting name', 'leadin'),
    options: options
  }];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UISpacer__WEBPACK_IMPORTED_MODULE_3__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      "data-test-id": "leadin-meeting-select",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select a meeting scheduling page', 'leadin')
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Common_AsyncSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      defaultOptions: optionsWrapper,
      onChange: onChange,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select a meeting', 'leadin'),
      value: value
    })]
  });
}

/***/ }),

/***/ "./scripts/shared/Meeting/MeetingWarning.tsx":
/*!***************************************************!*\
  !*** ./scripts/shared/Meeting/MeetingWarning.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeetingWarning)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _UIComponents_UIAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UIComponents/UIAlert */ "./scripts/shared/UIComponents/UIAlert.tsx");
/* harmony import */ var _UIComponents_UIButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIComponents/UIButton */ "./scripts/shared/UIComponents/UIButton.ts");
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./scripts/shared/Meeting/constants.ts");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);







function MeetingWarning(_ref) {
  var triggerReload = _ref.triggerReload,
      status = _ref.status;
  var isMeetingOwner = status === _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENT_USER_CALENDAR_MISSING;
  var titleText = isMeetingOwner ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Your calendar is not connected.', 'leadin') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Calendar is not connected.', 'leadin');
  var titleMessage = isMeetingOwner ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Please connect your calendar to activate your scheduling pages.', 'leadin') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Make sure that everybody in this meeting has connected their calendar from the Meetings page in HubSpot.', 'leadin');
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UIAlert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    titleText: titleText,
    titleMessage: titleMessage,
    children: isMeetingOwner && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UIButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      use: "tertiary",
      id: "meetings-connect-calendar",
      onClick: function onClick() {
        return (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_3__.leadinConnectCalendar)({
          hubspotBaseUrl: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_4__.hubspotBaseUrl,
          portalId: _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_4__.portalId,
          triggerReload: triggerReload
        });
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Connect calendar', 'leadin')
    })
  });
}

/***/ }),

/***/ "./scripts/shared/Meeting/MeetingsContext.tsx":
/*!****************************************************!*\
  !*** ./scripts/shared/Meeting/MeetingsContext.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingsContext": () => (/* binding */ MeetingsContext),
/* harmony export */   "default": () => (/* binding */ MeetingsContextWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useCurrentUserFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCurrentUserFetch */ "./scripts/shared/Meeting/useCurrentUserFetch.ts");
/* harmony import */ var _useMeetingsFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useMeetingsFetch */ "./scripts/shared/Meeting/useMeetingsFetch.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var MeetingsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
  loading: true,
  error: null,
  meetings: [],
  currentUser: null,
  meetingUsers: {},
  selectedMeeting: '',
  reload: function reload() {}
});
function MeetingsContextWrapper(_ref) {
  var url = _ref.url,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    loading: true,
    error: null,
    meetings: [],
    currentUser: null,
    meetingUsers: {},
    selectedMeeting: url
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useMeetingsFetch = (0,_useMeetingsFetch__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      _useMeetingsFetch2 = _slicedToArray(_useMeetingsFetch, 4),
      _useMeetingsFetch2$ = _useMeetingsFetch2[0],
      meetings = _useMeetingsFetch2$.meetings,
      meetingUsers = _useMeetingsFetch2$.meetingUsers,
      loadingMeetings = _useMeetingsFetch2[1],
      errorMeeting = _useMeetingsFetch2[2],
      reloadMeetings = _useMeetingsFetch2[3];

  var _useCurrentUserFetch = (0,_useCurrentUserFetch__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _useCurrentUserFetch2 = _slicedToArray(_useCurrentUserFetch, 5),
      currentUser = _useCurrentUserFetch2[0],
      loadingUser = _useCurrentUserFetch2[1],
      errorUser = _useCurrentUserFetch2[2],
      createUser = _useCurrentUserFetch2[3],
      reloadUser = _useCurrentUserFetch2[4];

  var reload = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    reloadUser();
    reloadMeetings();
  }, [reloadUser, reloadMeetings]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!state.loading && !state.error && state.meetings.length === 0) {
      createUser();
    }
  }, [state, createUser]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!state.loading && !state.error && state.currentUser && state.meetings.length === 0) {
      reloadMeetings();
    }
  }, [state, reloadMeetings]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setState(function (previous) {
      return _objectSpread(_objectSpread({}, previous), {}, {
        loading: loadingUser || loadingMeetings,
        currentUser: currentUser,
        meetings: meetings,
        meetingUsers: meetingUsers.reduce(function (p, c) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, c.id, c));
        }, {}),
        error: errorMeeting || errorUser,
        selectedMeeting: url
      });
    });
  }, [loadingUser, loadingMeetings, currentUser, meetings, meetingUsers, errorMeeting, errorUser, url, setState]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MeetingsContext.Provider, {
    value: _objectSpread(_objectSpread({}, state), {}, {
      reload: reload
    }),
    children: children
  });
}

/***/ }),

/***/ "./scripts/shared/Meeting/PreviewMeeting.tsx":
/*!***************************************************!*\
  !*** ./scripts/shared/Meeting/PreviewMeeting.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PreviewForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UIComponents_UIOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIComponents/UIOverlay */ "./scripts/shared/UIComponents/UIOverlay.ts");
/* harmony import */ var _useMeetingsScript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useMeetingsScript */ "./scripts/shared/Meeting/useMeetingsScript.ts");




function PreviewForm(_ref) {
  var url = _ref.url;
  var ready = (0,_useMeetingsScript__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var inputEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!ready) {
      return;
    }

    if (inputEl.current) {
      inputEl.current.innerHTML = '';
      var container = document.createElement('div');
      container.dataset.src = "".concat(url, "?embed=true");
      container.classList.add('meetings-iframe-container');
      inputEl.current.appendChild(container);
      var embedScript = document.createElement('script');
      embedScript.innerHTML = 'hbspt.meetings.create(".meetings-iframe-container");';
      inputEl.current.appendChild(embedScript);
    }
  }, [url, ready, inputEl]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: url && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UIComponents_UIOverlay__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: inputEl
    })
  });
}

/***/ }),

/***/ "./scripts/shared/Meeting/constants.ts":
/*!*********************************************!*\
  !*** ./scripts/shared/Meeting/constants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENT_USER_CALENDAR_MISSING": () => (/* binding */ CURRENT_USER_CALENDAR_MISSING),
/* harmony export */   "OTHER_USER_CALENDAR_MISSING": () => (/* binding */ OTHER_USER_CALENDAR_MISSING)
/* harmony export */ });
var OTHER_USER_CALENDAR_MISSING = 'OTHER_USER_CALENDAR_MISSING';
var CURRENT_USER_CALENDAR_MISSING = 'CURRENT_USER_CALENDAR_MISSING';

/***/ }),

/***/ "./scripts/shared/Meeting/useCurrentUserFetch.ts":
/*!*******************************************************!*\
  !*** ./scripts/shared/Meeting/useCurrentUserFetch.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCurrentUserFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");
/* harmony import */ var _api_wordpressMeetingsApiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/wordpressMeetingsApiClient */ "./scripts/api/wordpressMeetingsApiClient.ts");
/* harmony import */ var _utils_useThirdPartyCookiesEnabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useThirdPartyCookiesEnabled */ "./scripts/utils/useThirdPartyCookiesEnabled.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var user = null;
var defaultUserPayload = {
  meetingsUserBlob: {
    calendarSettings: {
      provider: 'GOOGLE',
      email: null,
      calendarAccountId: null,
      ewsUri: null,
      username: null
    },
    brandSettings: null
  },
  namespace: null
};
function useCurrentUserFetch() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      creating = _useState6[0],
      setCreating = _useState6[1];

  var cookiesEnabled = (0,_utils_useThirdPartyCookiesEnabled__WEBPACK_IMPORTED_MODULE_3__.useThirdPartyCookiesEnabled)();

  var createUser = function createUser() {
    if (!user) {
      setCreating(true);
    }
  };

  var reload = function reload() {
    user = null;
    setLoading(true);
    setError(null);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (loading && !user) {
      var loadMeetingUser = function loadMeetingUser() {
        return !cookiesEnabled ? (0,_api_wordpressMeetingsApiClient__WEBPACK_IMPORTED_MODULE_2__.getOrCreateMeetingUser)(defaultUserPayload) : (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__.getMeetingUser)();
      };

      loadMeetingUser().then(function (data) {
        user = data;
      })["catch"](function (e) {
        if (e && !/status 404/gi.test(e.message)) {
          setError(e);
        }
      })["finally"](function () {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [loading, cookiesEnabled, setError]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (creating && !user) {
      (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__.createMeetingUser)(defaultUserPayload).then(function (data) {
        user = data;
      })["catch"](function (e) {
        return setError(e);
      })["finally"](function () {
        setCreating(false);
      });
    } else {
      setCreating(false);
    }
  }, [creating, setError]);
  return [user, loading || creating, error, createUser, reload];
}

/***/ }),

/***/ "./scripts/shared/Meeting/useMeetings.ts":
/*!***********************************************!*\
  !*** ./scripts/shared/Meeting/useMeetings.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMeetings),
/* harmony export */   "useSelectedMeeting": () => (/* binding */ useSelectedMeeting),
/* harmony export */   "useSelectedMeetingCalendar": () => (/* binding */ useSelectedMeetingCalendar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./scripts/shared/Meeting/constants.ts");
/* harmony import */ var _MeetingsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetingsContext */ "./scripts/shared/Meeting/MeetingsContext.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function getDefaultMeetingName(meeting, currentUser, meetingUsers) {
  var _meeting$meetingsUser = _slicedToArray(meeting.meetingsUserIds, 1),
      meetingOwnerId = _meeting$meetingsUser[0];

  var result = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'leadin');

  if (currentUser && meetingOwnerId !== currentUser.id && meetingUsers[meetingOwnerId]) {
    var user = meetingUsers[meetingOwnerId];
    result += " (".concat(user.userProfile.fullName, ")");
  }

  return result;
}

function hasCalendarObject(user) {
  return user && user.meetingsUserBlob && user.meetingsUserBlob.calendarSettings && user.meetingsUserBlob.calendarSettings.email;
}

function useMeetings() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MeetingsContext__WEBPACK_IMPORTED_MODULE_3__.MeetingsContext),
      meetings = _useContext.meetings,
      meetingUsers = _useContext.meetingUsers,
      currentUser = _useContext.currentUser;

  return meetings.map(function (meet) {
    return {
      label: meet.name || getDefaultMeetingName(meet, currentUser, meetingUsers),
      value: meet.link
    };
  });
}
function useSelectedMeeting() {
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MeetingsContext__WEBPACK_IMPORTED_MODULE_3__.MeetingsContext),
      selectedMeeting = _useContext2.selectedMeeting;

  var meetings = useMeetings();
  var option = meetings.find(function (_ref) {
    var value = _ref.value;
    return value === selectedMeeting;
  });
  return option;
}
function useSelectedMeetingCalendar() {
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MeetingsContext__WEBPACK_IMPORTED_MODULE_3__.MeetingsContext),
      selectedMeeting = _useContext3.selectedMeeting,
      meetings = _useContext3.meetings,
      meetingUsers = _useContext3.meetingUsers,
      currentUser = _useContext3.currentUser;

  var meeting = meetings.find(function (meet) {
    return meet.link === selectedMeeting;
  });

  if (!meeting) {
    return null;
  } else {
    var meetingsUserIds = meeting.meetingsUserIds;

    if (currentUser && meetingsUserIds.includes(currentUser.id) && !hasCalendarObject(currentUser)) {
      return _constants__WEBPACK_IMPORTED_MODULE_2__.CURRENT_USER_CALENDAR_MISSING;
    } else if (meetingsUserIds.map(function (id) {
      return meetingUsers[id];
    }).some(function (user) {
      return !hasCalendarObject(user);
    })) {
      return _constants__WEBPACK_IMPORTED_MODULE_2__.OTHER_USER_CALENDAR_MISSING;
    } else {
      return null;
    }
  }
}

/***/ }),

/***/ "./scripts/shared/Meeting/useMeetingsFetch.ts":
/*!****************************************************!*\
  !*** ./scripts/shared/Meeting/useMeetingsFetch.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMeetingsFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/hubspotPluginApi */ "./scripts/api/hubspotPluginApi.ts");
/* harmony import */ var _api_wordpressMeetingsApiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/wordpressMeetingsApiClient */ "./scripts/api/wordpressMeetingsApiClient.ts");
/* harmony import */ var _utils_useThirdPartyCookiesEnabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useThirdPartyCookiesEnabled */ "./scripts/utils/useThirdPartyCookiesEnabled.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var meetings = [];
var meetingUsers = [];

function loadMeetings() {
  var cookiesEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (!cookiesEnabled) {
    return (0,_api_wordpressMeetingsApiClient__WEBPACK_IMPORTED_MODULE_2__.fetchMeetingsAndUsers)().then(function (data) {
      meetings = data && data.meetingLinks;
      meetingUsers = data && data.meetingUsers;
    });
  }

  return (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__.getMeetings)().then(function (data) {
    meetings = data;

    if (data && data.length > 0) {
      var userIds = data.reduce(function (p, _ref) {
        var meetingsUserIds = _ref.meetingsUserIds;
        var ids = meetingsUserIds.reduce(function (previous, current) {
          return _objectSpread(_objectSpread({}, previous), {}, _defineProperty({}, current, current));
        }, {});
        return _objectSpread(_objectSpread({}, p), ids);
      }, {});
      return (0,_api_hubspotPluginApi__WEBPACK_IMPORTED_MODULE_1__.getMeetingUsers)(Object.keys(userIds));
    }

    return [];
  }).then(function (users) {
    return meetingUsers = users;
  });
}

function useMeetingsFetch() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var cookiesEnabled = (0,_utils_useThirdPartyCookiesEnabled__WEBPACK_IMPORTED_MODULE_3__.useThirdPartyCookiesEnabled)();

  var reload = function reload() {
    meetings = [];
    setError(null);
    setLoading(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (loading && meetings.length === 0) {
      loadMeetings(cookiesEnabled)["catch"](function (e) {
        return setError(e);
      })["finally"](function () {
        return setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [loading, cookiesEnabled]);
  return [{
    meetings: meetings,
    meetingUsers: meetingUsers
  }, loading, error, reload];
}

/***/ }),

/***/ "./scripts/shared/Meeting/useMeetingsScript.ts":
/*!*****************************************************!*\
  !*** ./scripts/shared/Meeting/useMeetingsScript.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMeetingsScript)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/leadinConfig */ "./scripts/constants/leadinConfig.ts");
/* harmony import */ var _lib_Raven__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/Raven */ "./scripts/lib/Raven.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var promise;

function loadMeetingsScript() {
  if (!promise) {
    promise = new Promise(function (resolve, reject) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().getScript(_constants_leadinConfig__WEBPACK_IMPORTED_MODULE_2__.meetingsScript).done(resolve).fail(reject);
    });
  }

  return promise;
}

function useMeetingsScript() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    loadMeetingsScript().then(function () {
      return setReady(true);
    })["catch"](function (error) {
      return _lib_Raven__WEBPACK_IMPORTED_MODULE_3__["default"].captureException(error);
    });
  }, []);
  return ready;
}

/***/ }),

/***/ "./scripts/shared/UIComponents/UIAlert.tsx":
/*!*************************************************!*\
  !*** ./scripts/shared/UIComponents/UIAlert.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");


var AlertContainer = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('div')({
  name: "AlertContainer",
  "class": "a1h8m4fo",
  propsAsIs: false
});
var Title = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('p')({
  name: "Title",
  "class": "tyndzxk",
  propsAsIs: false
});
var Message = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('p')({
  name: "Message",
  "class": "m1m9sbk4",
  propsAsIs: false
});
var MessageContainer = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('div')({
  name: "MessageContainer",
  "class": "mg5o421",
  propsAsIs: false
});
function UIAlert(_ref) {
  var titleText = _ref.titleText,
      titleMessage = _ref.titleMessage,
      children = _ref.children;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AlertContainer, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageContainer, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {
        children: titleText
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Message, {
        children: titleMessage
      })]
    }), children]
  });
}

__webpack_require__(/*! ./UIAlert.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./UIAlert.tsx */ "./scripts/shared/UIComponents/UIAlert.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIAlert.tsx");

/***/ }),

/***/ "./scripts/shared/UIComponents/UIButton.ts":
/*!*************************************************!*\
  !*** ./scripts/shared/UIComponents/UIButton.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./scripts/shared/UIComponents/colors.ts");



var _exp2 = /*#__PURE__*/function _exp2() {
  return function (props) {
    return props.use === 'tertiary' ? _colors__WEBPACK_IMPORTED_MODULE_0__.HEFFALUMP : _colors__WEBPACK_IMPORTED_MODULE_0__.LORAX;
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('button')({
  name: "UIButton0",
  "class": "ug152ch",
  propsAsIs: false,
  vars: {
    "ug152ch-0": [_exp2()]
  }
}));

__webpack_require__(/*! ./UIButton.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./UIButton.ts */ "./scripts/shared/UIComponents/UIButton.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIButton.ts");

/***/ }),

/***/ "./scripts/shared/UIComponents/UIContainer.ts":
/*!****************************************************!*\
  !*** ./scripts/shared/UIComponents/UIContainer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");


var _exp = /*#__PURE__*/function _exp() {
  return function (props) {
    return props.textAlign ? props.textAlign : 'inherit';
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "UIContainer0",
  "class": "ua13n1c",
  propsAsIs: false,
  vars: {
    "ua13n1c-0": [_exp()]
  }
}));

__webpack_require__(/*! ./UIContainer.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./UIContainer.ts */ "./scripts/shared/UIComponents/UIContainer.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIContainer.ts");

/***/ }),

/***/ "./scripts/shared/UIComponents/UIOverlay.ts":
/*!**************************************************!*\
  !*** ./scripts/shared/UIComponents/UIOverlay.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "UIOverlay0",
  "class": "u1q7a48k",
  propsAsIs: false
}));

__webpack_require__(/*! ./UIOverlay.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./UIOverlay.ts */ "./scripts/shared/UIComponents/UIOverlay.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIOverlay.ts");

/***/ }),

/***/ "./scripts/shared/UIComponents/UISpacer.ts":
/*!*************************************************!*\
  !*** ./scripts/shared/UIComponents/UISpacer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "UISpacer0",
  "class": "u3qxofx",
  propsAsIs: false
}));

__webpack_require__(/*! ./UISpacer.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./UISpacer.ts */ "./scripts/shared/UIComponents/UISpacer.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UISpacer.ts");

/***/ }),

/***/ "./scripts/shared/UIComponents/UISpinner.tsx":
/*!***************************************************!*\
  !*** ./scripts/shared/UIComponents/UISpinner.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UISpinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @linaria/react */ "./node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./scripts/shared/UIComponents/colors.ts");



var SpinnerOuter = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_2__.styled)('div')({
  name: "SpinnerOuter",
  "class": "sxa9zrc",
  propsAsIs: false
});
var SpinnerInner = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_2__.styled)('div')({
  name: "SpinnerInner",
  "class": "s14430wa",
  propsAsIs: false
});

var _exp = /*#__PURE__*/function _exp() {
  return function (props) {
    return props.color;
  };
};

var Circle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_2__.styled)('circle')({
  name: "Circle",
  "class": "ct87ghk",
  propsAsIs: true,
  vars: {
    "ct87ghk-0": [_exp()]
  }
});

var _exp2 = /*#__PURE__*/function _exp2() {
  return function (props) {
    return props.color;
  };
};

var AnimatedCircle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_2__.styled)('circle')({
  name: "AnimatedCircle",
  "class": "avili0h",
  propsAsIs: true,
  vars: {
    "avili0h-0": [_exp2()]
  }
});
function UISpinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 20 : _ref$size;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerOuter, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerInner, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        height: size,
        width: size,
        viewBox: "0 0 50 50",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Circle, {
          color: _colors__WEBPACK_IMPORTED_MODULE_1__.CALYPSO_MEDIUM,
          cx: "25",
          cy: "25",
          r: "22.5"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnimatedCircle, {
          color: _colors__WEBPACK_IMPORTED_MODULE_1__.CALYPSO,
          cx: "25",
          cy: "25",
          r: "22.5"
        })]
      })
    })
  });
}

__webpack_require__(/*! ./UISpinner.linaria.css!=!../../../node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./UISpinner.tsx */ "./scripts/shared/UIComponents/UISpinner.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UISpinner.tsx");

/***/ }),

/***/ "./scripts/shared/UIComponents/colors.ts":
/*!***********************************************!*\
  !*** ./scripts/shared/UIComponents/colors.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CALYPSO": () => (/* binding */ CALYPSO),
/* harmony export */   "CALYPSO_LIGHT": () => (/* binding */ CALYPSO_LIGHT),
/* harmony export */   "CALYPSO_MEDIUM": () => (/* binding */ CALYPSO_MEDIUM),
/* harmony export */   "HEFFALUMP": () => (/* binding */ HEFFALUMP),
/* harmony export */   "LORAX": () => (/* binding */ LORAX),
/* harmony export */   "MARIGOLD_LIGHT": () => (/* binding */ MARIGOLD_LIGHT),
/* harmony export */   "MARIGOLD_MEDIUM": () => (/* binding */ MARIGOLD_MEDIUM),
/* harmony export */   "OBSIDIAN": () => (/* binding */ OBSIDIAN),
/* harmony export */   "OLAF": () => (/* binding */ OLAF)
/* harmony export */ });
var CALYPSO = '#00a4bd';
var CALYPSO_MEDIUM = '#7fd1de';
var CALYPSO_LIGHT = '#e5f5f8';
var LORAX = '#ff7a59';
var OLAF = '#ffffff';
var HEFFALUMP = '#425b76';
var MARIGOLD_LIGHT = '#fef8f0';
var MARIGOLD_MEDIUM = '#fae0b5';
var OBSIDIAN = '#33475b';

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

/***/ "./scripts/utils/thirdPartyCookies.ts":
/*!********************************************!*\
  !*** ./scripts/utils/thirdPartyCookies.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./scripts/utils/useThirdPartyCookiesEnabled.ts":
/*!******************************************************!*\
  !*** ./scripts/utils/useThirdPartyCookiesEnabled.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useThirdPartyCookiesEnabled": () => (/* binding */ useThirdPartyCookiesEnabled)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thirdPartyCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thirdPartyCookies */ "./scripts/utils/thirdPartyCookies.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useThirdPartyCookiesEnabled() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      cookiesEnabled = _useState2[0],
      setCookiesEnabled = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_thirdPartyCookies__WEBPACK_IMPORTED_MODULE_1__.checkThirdPartyCookies)().then(function (result) {
      return setCookiesEnabled(result && !/firefox/i.test(navigator.userAgent));
    });
  }, []);
  return cookiesEnabled;
}

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./scripts/elementor/Common/ElementorButton.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/elementor/Common/ElementorButton.tsx":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./scripts/elementor/Common/ElementorButton.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/elementor/Common/ElementorButton.tsx ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/elementor/MeetingWidget/ElementorMeetingWarning.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/elementor/MeetingWidget/ElementorMeetingWarning.tsx":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./scripts/elementor/MeetingWidget/ElementorMeetingWarning.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/elementor/MeetingWidget/ElementorMeetingWarning.tsx ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/shared/Common/AsyncSelect.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/Common/AsyncSelect.tsx":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./scripts/shared/Common/AsyncSelect.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/Common/AsyncSelect.tsx ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/shared/Common/HubspotWrapper.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/Common/HubspotWrapper.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./scripts/shared/Common/HubspotWrapper.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/Common/HubspotWrapper.ts ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/shared/UIComponents/UIAlert.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIAlert.tsx":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./scripts/shared/UIComponents/UIAlert.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIAlert.tsx ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/shared/UIComponents/UIButton.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIButton.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./scripts/shared/UIComponents/UIButton.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIButton.ts ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/shared/UIComponents/UIContainer.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIContainer.ts":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./scripts/shared/UIComponents/UIContainer.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIContainer.ts ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/shared/UIComponents/UIOverlay.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIOverlay.ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./scripts/shared/UIComponents/UIOverlay.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UIOverlay.ts ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/shared/UIComponents/UISpacer.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UISpacer.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./scripts/shared/UIComponents/UISpacer.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UISpacer.ts ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/shared/UIComponents/UISpinner.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UISpinner.tsx":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./scripts/shared/UIComponents/UISpinner.linaria.css!=!./node_modules/@linaria/webpack5-loader/lib/outputCssLoader.js?cacheProvider=!./scripts/shared/UIComponents/UISpinner.tsx ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


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

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["jQuery"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@linaria/react/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@linaria/react/dist/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styled": () => (/* binding */ styled_default)
/* harmony export */ });
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@linaria/react/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @linaria/core */ "./node_modules/@linaria/react/node_modules/@linaria/core/dist/index.mjs");
// src/styled.ts



var isCapital = (ch) => ch.toUpperCase() === ch;
var filterKey = (keys) => (key) => keys.indexOf(key) === -1;
var omit = (obj, keys) => {
  const res = {};
  Object.keys(obj).filter(filterKey(keys)).forEach((key) => {
    res[key] = obj[key];
  });
  return res;
};
function filterProps(asIs, props, omitKeys) {
  const filteredProps = omit(props, omitKeys);
  if (!asIs) {
    const interopValidAttr = typeof _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"] === "function" ? { default: _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"] } : _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"];
    Object.keys(filteredProps).forEach((key) => {
      if (!interopValidAttr.default(key)) {
        delete filteredProps[key];
      }
    });
  }
  return filteredProps;
}
var warnIfInvalid = (value, componentName) => {
  if (true) {
    if (typeof value === "string" || typeof value === "number" && isFinite(value)) {
      return;
    }
    const stringified = typeof value === "object" ? JSON.stringify(value) : String(value);
    console.warn(
      `An interpolation evaluated to '${stringified}' in the component '${componentName}', which is probably a mistake. You should explicitly cast or transform the value to a string.`
    );
  }
};
function styled(tag) {
  return (options) => {
    if (true) {
      if (Array.isArray(options)) {
        throw new Error(
          'Using the "styled" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. See https://github.com/callstack/linaria#setup'
        );
      }
    }
    const render = (props, ref) => {
      const { as: component = tag, class: className } = props;
      const shouldKeepProps = options.propsAsIs === void 0 ? !(typeof component === "string" && component.indexOf("-") === -1 && !isCapital(component[0])) : options.propsAsIs;
      const filteredProps = filterProps(shouldKeepProps, props, [
        "as",
        "class"
      ]);
      filteredProps.ref = ref;
      filteredProps.className = options.atomic ? (0,_linaria_core__WEBPACK_IMPORTED_MODULE_2__.cx)(options.class, filteredProps.className || className) : (0,_linaria_core__WEBPACK_IMPORTED_MODULE_2__.cx)(filteredProps.className || className, options.class);
      const { vars } = options;
      if (vars) {
        const style = {};
        for (const name in vars) {
          const variable = vars[name];
          const result = variable[0];
          const unit = variable[1] || "";
          const value = typeof result === "function" ? result(props) : result;
          warnIfInvalid(value, options.name);
          style[`--${name}`] = `${value}${unit}`;
        }
        const ownStyle = filteredProps.style || {};
        const keys = Object.keys(ownStyle);
        if (keys.length > 0) {
          keys.forEach((key) => {
            style[key] = ownStyle[key];
          });
        }
        filteredProps.style = style;
      }
      if (tag.__linaria && tag !== component) {
        filteredProps.as = component;
        return react__WEBPACK_IMPORTED_MODULE_1__.createElement(tag, filteredProps);
      }
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(component, filteredProps);
    };
    const Result = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef ? react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(render) : (props) => {
      const rest = omit(props, ["innerRef"]);
      return render(rest, props.innerRef);
    };
    Result.displayName = options.name;
    Result.__linaria = {
      className: options.class,
      extends: tag
    };
    return Result;
  };
}
var styled_default =  true ? new Proxy(styled, {
  get(o, prop) {
    return o(prop);
  }
}) : 0;

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@linaria/react/node_modules/@linaria/core/dist/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@linaria/react/node_modules/@linaria/core/dist/index.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ css_default),
/* harmony export */   "cx": () => (/* binding */ cx_default)
/* harmony export */ });
// src/css.ts
var css = () => {
  throw new Error(
    'Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly.'
  );
};
var css_default = css;

// src/cx.ts
var cx = function cx2() {
  const presentClassNames = Array.prototype.slice.call(arguments).filter(Boolean);
  const atomicClasses = {};
  const nonAtomicClasses = [];
  presentClassNames.forEach((arg) => {
    const individualClassNames = arg ? arg.split(" ") : [];
    individualClassNames.forEach((className) => {
      if (className.startsWith("atm_")) {
        const [, keyHash] = className.split("_");
        atomicClasses[keyHash] = className;
      } else {
        nonAtomicClasses.push(className);
      }
    });
  });
  const result = [];
  for (const keyHash in atomicClasses) {
    if (Object.prototype.hasOwnProperty.call(atomicClasses, keyHash)) {
      result.push(atomicClasses[keyHash]);
    }
  }
  result.push(...nonAtomicClasses);
  return result.join(" ");
};
var cx_default = cx;

//# sourceMappingURL=index.mjs.map

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
/*!**************************************!*\
  !*** ./scripts/entries/elementor.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elementor_elementoWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementor/elementoWidget */ "./scripts/elementor/elementoWidget.ts");
/* harmony import */ var _elementor_FormWidget_registerFormWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elementor/FormWidget/registerFormWidget */ "./scripts/elementor/FormWidget/registerFormWidget.ts");
/* harmony import */ var _utils_backgroundAppUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/backgroundAppUtils */ "./scripts/utils/backgroundAppUtils.ts");
/* harmony import */ var _elementor_MeetingWidget_registerMeetingWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elementor/MeetingWidget/registerMeetingWidget */ "./scripts/elementor/MeetingWidget/registerMeetingWidget.ts");




window.addEventListener('elementor/init', function () {
  (0,_utils_backgroundAppUtils__WEBPACK_IMPORTED_MODULE_2__.initBackgroundApp)(function () {
    var FormWidget;
    var MeetingsWidget;
    var leadinSelectFormItemView = (0,_elementor_elementoWidget__WEBPACK_IMPORTED_MODULE_0__["default"])( //@ts-expect-error global
    window.elementor, {
      widgetName: 'hubspot-form',
      controlSelector: '.elementor-hbspt-form-selector',
      containerSelector: '.hubspot-form-edit-mode'
    }, function (controlContainer, widgetContainer, setValue) {
      FormWidget = new _elementor_FormWidget_registerFormWidget__WEBPACK_IMPORTED_MODULE_1__["default"](controlContainer, widgetContainer, setValue);
      FormWidget.render();
    }, function () {
      FormWidget.done();
    });
    var leadinSelectMeetingItemView = (0,_elementor_elementoWidget__WEBPACK_IMPORTED_MODULE_0__["default"])( //@ts-expect-error global
    window.elementor, {
      widgetName: 'hubspot-meeting',
      controlSelector: '.elementor-hbspt-meeting-selector',
      containerSelector: '.hubspot-meeting-edit-mode'
    }, function (controlContainer, widgetContainer, setValue) {
      MeetingsWidget = new _elementor_MeetingWidget_registerMeetingWidget__WEBPACK_IMPORTED_MODULE_3__["default"](controlContainer, widgetContainer, setValue);
      MeetingsWidget.render();
    }, function () {
      MeetingsWidget.done();
    }); //@ts-expect-error global

    window.elementor.addControlView('leadinformselect', leadinSelectFormItemView); //@ts-expect-error global

    window.elementor.addControlView('leadinmeetingselect', leadinSelectMeetingItemView);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=elementor.js.map