/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/first.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/first.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/estandar.woff2 */ "./src/fonts/estandar.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/estandar_italic.woff2 */ "./src/fonts/estandar_italic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/handmade.woff2 */ "./src/fonts/handmade.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "VR_Standard";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
}
@font-face {
  font-family: "VR_Standard_Italic";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
}
@font-face {
  font-family: "VR_Handmade";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
html {
  --min-width: 320px;
  /* COLORS */
  --primary-color: #c9ab81;
  --primary-complement-color: #819fc9;
  --primary-dark-color: #7c5e35;
  --primary-darkest-color: #352817;
  --primary-light-color: #f7f2ec;
  --primary-lightest-color: white;
  --secondary-color: #59335c;
  --secondary-complement-color: #365c33;
  --secondary-dark-color: black;
  --secondary-darkest-color: black;
  --secondary-light-color: #ae75b3;
  --secondary-lightest-color: #d5b7d7;
  --neutral-color: #333333;
  --neutral-complement-color: #333333;
  --neutral-dark-color: black;
  --neutral-darkest-color: black;
  --neutral-light-color: gray;
  --neutral-lightest-color: #b3b3b3;
  --warning-color: #cd0707;
  --warning-complement-color: #07cdcd;
  --warning-dark-color: #390202;
  --warning-darkest-color: black;
  --warning-light-color: #fa7373;
  --warning-lightest-color: #fed5d5;
  --info-color: #f0ad4e;
  --info-complement-color: #4e91f0;
  --info-dark-color: #985f0d;
  --info-darkest-color: #3a2405;
  --info-light-color: #fceedb;
  --info-lightest-color: white;
  --text-color: #ffffff;
  --text-complement-color: white;
  --text-dark-color: #b3b3b3;
  --text-darkest-color: gray;
  --text-light-color: white;
  --text-lightest-color: white;
  /* BREAKPOINTS */
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1400px;
}

#main-menu img {
  width: 75px;
  height: 75px;
}
#main-menu > div {
  width: 50%;
  box-sizing: border-box;
  padding: 1rem;
}
#main-menu > div:first-child {
  float: left;
}
#main-menu > div:last-child {
  float: right;
  text-align: right;
}
#main-menu::after {
  content: "";
  display: block;
  clear: both;
}

#go-top {
  padding: 1rem 1.1rem;
  border-radius: 3rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: var(--neutral-color);
}
#go-top:hover {
  transition: all 0.2s linear 0s;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

@media screen and (min-width: 576px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
@media screen and (min-width: 768px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 992px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1400px) {
  .wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/scss/utilities/_variables.scss","webpack://./src/scss/first.scss"],"names":[],"mappings":"AAMI;EACI,0BCFK;EDGL,4DAAA;AELR;AFGI;EACI,iCCFK;EDGL,4DAAA;AEDR;AFDI;EACI,0BCFK;EDGL,4CAAA;AEGR;AFCA;EACI,kBAAA;EAEA,WAAA;EAEI,wBAAA;EACA,mCAAA;EACA,6BAAA;EACA,gCAAA;EACA,8BAAA;EACA,+BAAA;EALA,0BAAA;EACA,qCAAA;EACA,6BAAA;EACA,gCAAA;EACA,gCAAA;EACA,mCAAA;EALA,wBAAA;EACA,mCAAA;EACA,2BAAA;EACA,8BAAA;EACA,2BAAA;EACA,iCAAA;EALA,wBAAA;EACA,mCAAA;EACA,6BAAA;EACA,8BAAA;EACA,8BAAA;EACA,iCAAA;EALA,qBAAA;EACA,gCAAA;EACA,0BAAA;EACA,6BAAA;EACA,2BAAA;EACA,4BAAA;EALA,qBAAA;EACA,8BAAA;EACA,0BAAA;EACA,0BAAA;EACA,yBAAA;EACA,4BAAA;EAGJ,gBAAA;EAEI,kBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,uBAAA;EAAA,wBAAA;AE+BR;;AAtDI;EACI,WAAA;EACA,YAAA;AAyDR;AAtDI;EACI,UAAA;EACA,sBAAA;EACA,aAAA;AAwDR;AAtDQ;EACI,WAAA;AAwDZ;AArDQ;EACI,YAAA;EACA,iBAAA;AAuDZ;AAnDI;EACI,WAAA;EACA,cAAA;EACA,WAAA;AAqDR;;AAjDA;EACI,oBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,sCAAA;AAoDJ;AAlDI;EACI,8BAAA;AAoDR;;AAhDA;EACI,aAAA;EACA,0BAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;AAmDJ;;AAhDA;EACI;IACI,0BAAA;EAmDN;AACF;AAhDA;EACI;IACI,qCAAA;EAkDN;AACF;AA/CA;EACI;IACI,qCAAA;EAiDN;AACF;AA9CA;EACI;IACI,qCAAA;EAgDN;AACF;AA7CA;EACI;IACI,qCAAA;EA+CN;AACF","sourcesContent":["@use \"./utilities/variables\" as *;\n@use './utilities/functions' as *;\n@use \"sass:map\";\n@use 'sass:color';\n\n@each $font, $font-family in $font-names {\n    @font-face {\n        font-family: $font-family;\n        src: map.get($font-src, $font-family);\n    }\n}\n\nhtml {\n    --min-width: 320px;\n\n    /* COLORS */\n    @each $color, $value in $colors {\n        --#{$color}-color: #{$value};\n        --#{$color}-complement-color: #{complement($value)};\n        --#{$color}-dark-color: #{darken($value, 30%)};\n        --#{$color}-darkest-color: #{darken($value, 50%)};\n        --#{$color}-light-color: #{lighten($value, 30%)};\n        --#{$color}-lightest-color: #{lighten($value, 50%)};\n    }\n\n    /* BREAKPOINTS */\n    @each $breakpoint, $value in $breakpoints {\n        --breakpoint-#{$breakpoint}: #{$value};\n    }\n}","$font-properties: (\n    \"size-global\": 16px,\n    \"default-font\": \"\\\"VR_Standard\\\", serif\",\n);\n\n$font-names: (\n    \"standard\": \"VR_Standard\",\n    \"standard-italic\": \"VR_Standard_Italic\",\n    \"handmade\": \"VR_Handmade\"\n);\n\n$font-src: (\n    \"VR_Standard\": url(../fonts/estandar.woff2) format(\"woff2\"),\n    \"VR_Standard_Italic\": url(../fonts/estandar_italic.woff2) format(\"woff2\"),\n    \"VR_Handmade\": url(../fonts/handmade.woff2)\n);\n\n$elements-sizes: (\n    \"h1\": 3.5rem,\n    \"h2\": 2.5rem,\n    \"h3\": 2rem,\n    \"h4\": 1.5rem,\n    \"h5\": 1.25rem,\n    \"h6\": 1rem,\n    \"p\": 1rem,\n    \"small\": 0.8rem\n);\n\n$elements-paddings: (\n    \"h1\": 1.5rem 0,\n    \"h2\": 1rem 0,\n    \"h3\": 1rem 0,\n    \"h4\": 1rem 0,\n    \"h5\": 1rem 0,\n    \"h6\": 1rem 0,\n    \"p\": 1rem 0,\n    \"li\": 0.2rem 0\n);\n\n$elements-weights: (\n    \"h1\": 900,\n    \"h2\": 700,\n    \"h3\": 700,\n    \"h4\": 700,\n    \"h5\": 700,\n    \"h6\": 700,\n    \"bold\": 700,\n);\n\n$colors: (\n    \"primary\": #c9ab81,\n    \"secondary\": #59335c,\n    \"neutral\": #333333,\n    \"warning\": #cd0707,\n    \"info\": #f0ad4e,\n    \"text\": #ffffff,\n);\n\n$elements-colors: (\n    \"h1\": var(--primary-color),\n    \"h2\": var(--primary-color),\n    \"h3\": var(--primary-color),\n    \"h4\": var(--primary-color),\n    \"h5\": var(--primary-color),\n    \"h6\": var(--primary-color),\n    \"text\": var(--text-color),\n    \"mark\": var(--primary-darkest-color),\n    \"mark-bg\": var(--primary-color),\n    \"hr\": var(--primary-light-color),\n    \"a\": var(--primary-color),\n    \"a:hover\": var(--primary-light-color),\n    \"menu\": var(--primary-light-color),\n    \"menu-bg\": var(--neutral-color),\n);\n\n$breakpoints: (\n    \"xs\": 0,\n    \"sm\": 576px,\n    \"md\": 768px,\n    \"lg\": 992px,\n    \"xl\": 1200px,\n    \"xxl\": 1400px\n);","@use './utilities/functions' as *;\n@use \"variables.scss\";\n\n#main-menu {\n    img {\n        width: 75px;\n        height: 75px;\n    }\n    \n    & > div {\n        width: 50%;\n        box-sizing: border-box;\n        padding: 1rem;\n\n        &:first-child {\n            float: left;\n        }\n\n        &:last-child {\n            float: right;\n            text-align: right;\n        }\n    }\n\n    &::after {\n        content: \"\";\n        display: block;\n        clear: both;\n    }\n}\n\n#go-top {\n    padding: 1rem 1.1rem;\n    border-radius: 3rem;\n    position: fixed;\n    bottom: 1rem;\n    right: 1rem;\n    background-color: var(--neutral-color);\n\n    &:hover {\n        transition: all 0.2s linear 0s;\n    }\n}\n\n.wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 1rem;\n    width: 100%;\n    padding: 2rem 1rem;\n    box-sizing: border-box;\n}\n\n@media screen and (min-width: get-breakpoint(\"sm\")) {\n    .wrapper {\n        grid-template-columns: 1fr;\n    }\n}\n\n@media screen and (min-width: get-breakpoint(\"md\")) {\n    .wrapper {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media screen and (min-width: get-breakpoint(\"lg\")) {\n    .wrapper {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media screen and (min-width: get-breakpoint(\"xl\")) {\n    .wrapper {\n        grid-template-columns: repeat(3, 1fr);\n    }\n}\n\n@media screen and (min-width: get-breakpoint(\"xxl\")) {\n    .wrapper {\n        grid-template-columns: repeat(4, 1fr);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/guide.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/guide.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/estandar.woff2 */ "./src/fonts/estandar.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/estandar_italic.woff2 */ "./src/fonts/estandar_italic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/handmade.woff2 */ "./src/fonts/handmade.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

@font-face {
  font-family: "VR_Standard";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
}
@font-face {
  font-family: "VR_Standard_Italic";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
}
@font-face {
  font-family: "VR_Handmade";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
html {
  --min-width: 320px;
  /* COLORS */
  --primary-color: #c9ab81;
  --primary-complement-color: #819fc9;
  --primary-dark-color: #7c5e35;
  --primary-darkest-color: #352817;
  --primary-light-color: #f7f2ec;
  --primary-lightest-color: white;
  --secondary-color: #59335c;
  --secondary-complement-color: #365c33;
  --secondary-dark-color: black;
  --secondary-darkest-color: black;
  --secondary-light-color: #ae75b3;
  --secondary-lightest-color: #d5b7d7;
  --neutral-color: #333333;
  --neutral-complement-color: #333333;
  --neutral-dark-color: black;
  --neutral-darkest-color: black;
  --neutral-light-color: gray;
  --neutral-lightest-color: #b3b3b3;
  --warning-color: #cd0707;
  --warning-complement-color: #07cdcd;
  --warning-dark-color: #390202;
  --warning-darkest-color: black;
  --warning-light-color: #fa7373;
  --warning-lightest-color: #fed5d5;
  --info-color: #f0ad4e;
  --info-complement-color: #4e91f0;
  --info-dark-color: #985f0d;
  --info-darkest-color: #3a2405;
  --info-light-color: #fceedb;
  --info-lightest-color: white;
  --text-color: #ffffff;
  --text-complement-color: white;
  --text-dark-color: #b3b3b3;
  --text-darkest-color: gray;
  --text-light-color: white;
  --text-lightest-color: white;
  /* BREAKPOINTS */
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1400px;
}

.bg-primary-color {
  background-color: #c9ab81;
}

.font-primary-color {
  color: #c9ab81;
}

.bg-secondary-color {
  background-color: #59335c;
}

.font-secondary-color {
  color: #59335c;
}

.bg-neutral-color {
  background-color: #333333;
}

.font-neutral-color {
  color: #333333;
}

.bg-warning-color {
  background-color: #cd0707;
}

.font-warning-color {
  color: #cd0707;
}

.bg-info-color {
  background-color: #f0ad4e;
}

.font-info-color {
  color: #f0ad4e;
}

.bg-text-color {
  background-color: #ffffff;
}

.font-text-color {
  color: #ffffff;
}

html {
  font-size: 16px;
  color: var(--text-color);
  font-family: "VR_Standard", serif;
}

h1, .header1 {
  font-size: 3.5rem;
  padding: 1.5rem 0;
  font-weight: 900;
  color: var(--primary-color);
}

h2, .header2 {
  font-size: 2.5rem;
  padding: 1rem 0;
  font-weight: 700;
  color: var(--primary-color);
}

h3, .header3 {
  font-size: 2rem;
  padding: 1rem 0;
  font-weight: 700;
  color: var(--primary-color);
}

h4, .header4 {
  font-size: 1.5rem;
  padding: 1rem 0;
  font-weight: 700;
  color: var(--primary-color);
}

h5, .header5 {
  font-size: 1.25rem;
  padding: 1rem 0;
  font-weight: 700;
  color: var(--primary-color);
}

h6, .header6 {
  font-size: 1rem;
  padding: 1rem 0;
  font-weight: 700;
  color: var(--primary-color);
}

p {
  padding: 1rem 0;
  font-size: 1rem;
}

small {
  font-size: 0.8rem;
}

b {
  font-weight: 700;
}

i {
  font-style: italic;
}

mark {
  background-color: var(--primary-color);
  color: var(--primary-darkest-color);
}

hr {
  color: var(--primary-light-color);
  border-style: solid;
}

ul li {
  padding: 0.2rem 0;
}
ul.decorated li:before {
  content: "•";
  color: var(--primary-color);
  margin-right: 0.5rem;
}

a {
  text-decoration: none;
  color: var(--primary-color);
  text-decoration: underline;
}
a:hover {
  color: var(--primary-light-color);
  transition: all 0.2s linear 0s;
}

footer .sign {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

#main-menu h2, #main-menu {
  color: var(--primary-light-color);
}

#main-menu {
  position: sticky;
  top: 0;
  background-color: color-mix(in srgb, var(--neutral-color) 95%, transparent);
}
.font-handmade {
  font-family: "VR_Handmade", sans-serif;
}

.font-contrast-color b, .font-contrast-color hr, .font-contrast-color {
  color: var(--neutral-dark-color);
}

/* FLEXBOX */
.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
}

.col-1 {
  flex-basis: 100%;
}

.col-2 {
  flex-basis: 50%;
}

.col-3 {
  flex-basis: 33.3333333333%;
}

.col-4 {
  flex-basis: 25%;
}

.col-5 {
  flex-basis: 20%;
}

.col-6 {
  flex-basis: 16.6666666667%;
}

.col-7 {
  flex-basis: 14.2857142857%;
}

.col-8 {
  flex-basis: 12.5%;
}

.col-9 {
  flex-basis: 11.1111111111%;
}

.col-10 {
  flex-basis: 10%;
}

.col-11 {
  flex-basis: 9.0909090909%;
}

.col-12 {
  flex-basis: 8.3333333333%;
}

@media screen and (min-width: 576px) {
  .col-sm-1 {
    flex-basis: 100%;
  }
  .col-sm-2 {
    flex-basis: 50%;
  }
  .col-sm-3 {
    flex-basis: 33.3333333333%;
  }
  .col-sm-4 {
    flex-basis: 25%;
  }
  .col-sm-5 {
    flex-basis: 20%;
  }
  .col-sm-6 {
    flex-basis: 16.6666666667%;
  }
  .col-sm-7 {
    flex-basis: 14.2857142857%;
  }
  .col-sm-8 {
    flex-basis: 12.5%;
  }
  .col-sm-9 {
    flex-basis: 11.1111111111%;
  }
  .col-sm-10 {
    flex-basis: 10%;
  }
  .col-sm-11 {
    flex-basis: 9.0909090909%;
  }
  .col-sm-12 {
    flex-basis: 8.3333333333%;
  }
}
@media screen and (min-width: 768px) {
  .col-md-1 {
    flex-basis: 100%;
  }
  .col-md-2 {
    flex-basis: 50%;
  }
  .col-md-3 {
    flex-basis: 33.3333333333%;
  }
  .col-md-4 {
    flex-basis: 25%;
  }
  .col-md-5 {
    flex-basis: 20%;
  }
  .col-md-6 {
    flex-basis: 16.6666666667%;
  }
  .col-md-7 {
    flex-basis: 14.2857142857%;
  }
  .col-md-8 {
    flex-basis: 12.5%;
  }
  .col-md-9 {
    flex-basis: 11.1111111111%;
  }
  .col-md-10 {
    flex-basis: 10%;
  }
  .col-md-11 {
    flex-basis: 9.0909090909%;
  }
  .col-md-12 {
    flex-basis: 8.3333333333%;
  }
}
@media screen and (min-width: 992px) {
  .col-lg-1 {
    flex-basis: 100%;
  }
  .col-lg-2 {
    flex-basis: 50%;
  }
  .col-lg-3 {
    flex-basis: 33.3333333333%;
  }
  .col-lg-4 {
    flex-basis: 25%;
  }
  .col-lg-5 {
    flex-basis: 20%;
  }
  .col-lg-6 {
    flex-basis: 16.6666666667%;
  }
  .col-lg-7 {
    flex-basis: 14.2857142857%;
  }
  .col-lg-8 {
    flex-basis: 12.5%;
  }
  .col-lg-9 {
    flex-basis: 11.1111111111%;
  }
  .col-lg-10 {
    flex-basis: 10%;
  }
  .col-lg-11 {
    flex-basis: 9.0909090909%;
  }
  .col-lg-12 {
    flex-basis: 8.3333333333%;
  }
}
@media screen and (min-width: 1200px) {
  .col-xl-1 {
    flex-basis: 100%;
  }
  .col-xl-2 {
    flex-basis: 50%;
  }
  .col-xl-3 {
    flex-basis: 33.3333333333%;
  }
  .col-xl-4 {
    flex-basis: 25%;
  }
  .col-xl-5 {
    flex-basis: 20%;
  }
  .col-xl-6 {
    flex-basis: 16.6666666667%;
  }
  .col-xl-7 {
    flex-basis: 14.2857142857%;
  }
  .col-xl-8 {
    flex-basis: 12.5%;
  }
  .col-xl-9 {
    flex-basis: 11.1111111111%;
  }
  .col-xl-10 {
    flex-basis: 10%;
  }
  .col-xl-11 {
    flex-basis: 9.0909090909%;
  }
  .col-xl-12 {
    flex-basis: 8.3333333333%;
  }
}
@media screen and (min-width: 1400px) {
  .col-xxl-1 {
    flex-basis: 100%;
  }
  .col-xxl-2 {
    flex-basis: 50%;
  }
  .col-xxl-3 {
    flex-basis: 33.3333333333%;
  }
  .col-xxl-4 {
    flex-basis: 25%;
  }
  .col-xxl-5 {
    flex-basis: 20%;
  }
  .col-xxl-6 {
    flex-basis: 16.6666666667%;
  }
  .col-xxl-7 {
    flex-basis: 14.2857142857%;
  }
  .col-xxl-8 {
    flex-basis: 12.5%;
  }
  .col-xxl-9 {
    flex-basis: 11.1111111111%;
  }
  .col-xxl-10 {
    flex-basis: 10%;
  }
  .col-xxl-11 {
    flex-basis: 9.0909090909%;
  }
  .col-xxl-12 {
    flex-basis: 8.3333333333%;
  }
}
body {
  background-color: var(--neutral-color);
}

#content {
  display: grid;
  grid-template-columns: 1fr;
}

#content main {
  padding: 1rem;
}

#main-sidebar {
  padding: 3rem 1rem 1rem 1rem;
}

#main-sidebar ul {
  padding: 1rem 0;
  border-right: 1px solid var(--primary-light-color);
  position: sticky;
  top: 120px;
}

#main-sidebar ul li {
  padding: 1rem 0;
}

section {
  margin-top: 4rem;
}

/* TYPOGRAPHY */
.guide-typography {
  align-items: center;
}

.guide-typography > div {
  padding: 1rem;
}

.guide-typography__example {
  min-width: 400px;
}

.guide-typography__properties {
  min-width: 140px;
  display: flex;
  justify-content: flex-end;
}

/* COLORS */
.guide-color ul {
  padding: 10rem 1rem 1rem 1rem;
  border-radius: 0.5rem;
  height: 19rem;
}

.guide-color li {
  padding-top: 0.5rem;
}

/* CONTENT */
.guide-content__container {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--secondary-color);
  height: 27rem;
}

.col-style {
  border: 1px solid var(--primary-light-color);
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/scss/guide.scss","webpack://./src/scss/utilities/_reset.scss","webpack://./src/scss/variables.scss","webpack://./src/scss/utilities/_variables.scss","webpack://./src/scss/colors.scss","webpack://./src/scss/global.scss","webpack://./src/scss/layout.scss","webpack://./src/scss/utilities/_mixins.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ADED;;ACAA,gDAAA;AACA;;EAEC,cAAA;ADGD;;ACDA;EACC,cAAA;ADID;;ACFA;EACC,gBAAA;ADKD;;ACHA;EACC,YAAA;ADMD;;ACJA;;EAEC,WAAA;EACA,aAAA;ADOD;;ACLA;EACC,yBAAA;EACA,iBAAA;ADQD;;AE3CI;EACI,0BCFK;EDGL,4DAAA;AF8CR;AEhDI;EACI,iCCFK;EDGL,4DAAA;AFkDR;AEpDI;EACI,0BCFK;EDGL,4CAAA;AFsDR;AElDA;EACI,kBAAA;EAEA,WAAA;EAEI,wBAAA;EACA,mCAAA;EACA,6BAAA;EACA,gCAAA;EACA,8BAAA;EACA,+BAAA;EALA,0BAAA;EACA,qCAAA;EACA,6BAAA;EACA,gCAAA;EACA,gCAAA;EACA,mCAAA;EALA,wBAAA;EACA,mCAAA;EACA,2BAAA;EACA,8BAAA;EACA,2BAAA;EACA,iCAAA;EALA,wBAAA;EACA,mCAAA;EACA,6BAAA;EACA,8BAAA;EACA,8BAAA;EACA,iCAAA;EALA,qBAAA;EACA,gCAAA;EACA,0BAAA;EACA,6BAAA;EACA,2BAAA;EACA,4BAAA;EALA,qBAAA;EACA,8BAAA;EACA,0BAAA;EACA,0BAAA;EACA,yBAAA;EACA,4BAAA;EAGJ,gBAAA;EAEI,kBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,uBAAA;EAAA,wBAAA;AFkFR;;AI1GI;EACI,yBD6CC;AHgET;;AI1GI;EACI,cDyCC;AHoET;;AIlHI;EACI,yBD6CC;AHwET;;AIlHI;EACI,cDyCC;AH4ET;;AI1HI;EACI,yBD6CC;AHgFT;;AI1HI;EACI,cDyCC;AHoFT;;AIlII;EACI,yBD6CC;AHwFT;;AIlII;EACI,cDyCC;AH4FT;;AI1II;EACI,yBD6CC;AHgGT;;AI1II;EACI,cDyCC;AHoGT;;AIlJI;EACI,yBD6CC;AHwGT;;AIlJI;EACI,cDyCC;AH4GT;;AKrJA;EACE,eAAA;EACA,wBAAA;EACA,iCAAA;ALwJF;;AKpJE;EACE,iBAAA;EACA,iBAAA;EACA,gBAAA;EACA,2BAAA;ALuJJ;;AK3JE;EACE,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,2BAAA;AL8JJ;;AKlKE;EACE,eAAA;EACA,eAAA;EACA,gBAAA;EACA,2BAAA;ALqKJ;;AKzKE;EACE,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,2BAAA;AL4KJ;;AKhLE;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,2BAAA;ALmLJ;;AKvLE;EACE,eAAA;EACA,eAAA;EACA,gBAAA;EACA,2BAAA;AL0LJ;;AKtLA;EACE,eAAA;EACA,eAAA;ALyLF;;AKtLA;EACE,iBAAA;ALyLF;;AKtLA;EACE,gBAAA;ALyLF;;AKtLA;EACE,kBAAA;ALyLF;;AKtLA;EACE,sCAAA;EACA,mCAAA;ALyLF;;AKtLA;EACE,iCAAA;EACA,mBAAA;ALyLF;;AKrLE;EACE,iBAAA;ALwLJ;AKnLM;EACE,YAAA;EACA,2BAAA;EACA,oBAAA;ALqLR;;AK/KA;EACE,qBAAA;EACA,2BAAA;EACA,0BAAA;ALkLF;AKhLE;EACE,iCAAA;EACA,8BAAA;ALkLJ;;AK9KA;EACI,aAAA;EACA,uBAAA;EACA,aAAA;ALiLJ;;AK9KA;EACI,iCAAA;ALiLJ;;AK/KA;EACI,gBAAA;EACA,MAAA;EACA,2EAAA;ALkLJ;AKxKA;EACI,sCAAA;AL0KJ;;AKvKA;EACI,gCAAA;AL0KJ;;AM/QA,YAAA;AAEA;EACE,aAAA;EACA,eAAA;EACA,WAAA;ANiRF;;AM9QA;EACE,aAAA;EACA,YAAA;ANiRF;;AM7QE;EACE,gBAAA;ANgRJ;;AMjRE;EACE,eAAA;ANoRJ;;AMrRE;EACE,0BAAA;ANwRJ;;AMzRE;EACE,eAAA;AN4RJ;;AM7RE;EACE,eAAA;ANgSJ;;AMjSE;EACE,0BAAA;ANoSJ;;AMrSE;EACE,0BAAA;ANwSJ;;AMzSE;EACE,iBAAA;AN4SJ;;AM7SE;EACE,0BAAA;ANgTJ;;AMjTE;EACE,eAAA;ANoTJ;;AMrTE;EACE,yBAAA;ANwTJ;;AMzTE;EACE,yBAAA;AN4TJ;;AO1UI;EDsBU;IACE,gBAAA;ENwTd;EMzTY;IACE,eAAA;EN2Td;EM5TY;IACE,0BAAA;EN8Td;EM/TY;IACE,eAAA;ENiUd;EMlUY;IACE,eAAA;ENoUd;EMrUY;IACE,0BAAA;ENuUd;EMxUY;IACE,0BAAA;EN0Ud;EM3UY;IACE,iBAAA;EN6Ud;EM9UY;IACE,0BAAA;ENgVd;EMjVY;IACE,eAAA;ENmVd;EMpVY;IACE,yBAAA;ENsVd;EMvVY;IACE,yBAAA;ENyVd;AACF;AOjXI;EDsBU;IACE,gBAAA;EN8Vd;EM/VY;IACE,eAAA;ENiWd;EMlWY;IACE,0BAAA;ENoWd;EMrWY;IACE,eAAA;ENuWd;EMxWY;IACE,eAAA;EN0Wd;EM3WY;IACE,0BAAA;EN6Wd;EM9WY;IACE,0BAAA;ENgXd;EMjXY;IACE,iBAAA;ENmXd;EMpXY;IACE,0BAAA;ENsXd;EMvXY;IACE,eAAA;ENyXd;EM1XY;IACE,yBAAA;EN4Xd;EM7XY;IACE,yBAAA;EN+Xd;AACF;AOvZI;EDsBU;IACE,gBAAA;ENoYd;EMrYY;IACE,eAAA;ENuYd;EMxYY;IACE,0BAAA;EN0Yd;EM3YY;IACE,eAAA;EN6Yd;EM9YY;IACE,eAAA;ENgZd;EMjZY;IACE,0BAAA;ENmZd;EMpZY;IACE,0BAAA;ENsZd;EMvZY;IACE,iBAAA;ENyZd;EM1ZY;IACE,0BAAA;EN4Zd;EM7ZY;IACE,eAAA;EN+Zd;EMhaY;IACE,yBAAA;ENkad;EMnaY;IACE,yBAAA;ENqad;AACF;AO7bI;EDsBU;IACE,gBAAA;EN0ad;EM3aY;IACE,eAAA;EN6ad;EM9aY;IACE,0BAAA;ENgbd;EMjbY;IACE,eAAA;ENmbd;EMpbY;IACE,eAAA;ENsbd;EMvbY;IACE,0BAAA;ENybd;EM1bY;IACE,0BAAA;EN4bd;EM7bY;IACE,iBAAA;EN+bd;EMhcY;IACE,0BAAA;ENkcd;EMncY;IACE,eAAA;ENqcd;EMtcY;IACE,yBAAA;ENwcd;EMzcY;IACE,yBAAA;EN2cd;AACF;AOneI;EDsBU;IACE,gBAAA;ENgdd;EMjdY;IACE,eAAA;ENmdd;EMpdY;IACE,0BAAA;ENsdd;EMvdY;IACE,eAAA;ENydd;EM1dY;IACE,eAAA;EN4dd;EM7dY;IACE,0BAAA;EN+dd;EMheY;IACE,0BAAA;ENked;EMneY;IACE,iBAAA;ENqed;EMteY;IACE,0BAAA;ENwed;EMzeY;IACE,eAAA;EN2ed;EM5eY;IACE,yBAAA;EN8ed;EM/eY;IACE,yBAAA;ENifd;AACF;AA1gBA;EACE,sCAAA;AA4gBF;;AAzgBA;EACI,aAAA;EACA,0BAAA;AA4gBJ;;AAzgBA;EACI,aAAA;AA4gBJ;;AAzgBA;EACI,4BAAA;AA4gBJ;;AAzgBA;EACI,eAAA;EACA,kDAAA;EACA,gBAAA;EACA,UAAA;AA4gBJ;;AAzgBA;EACI,eAAA;AA4gBJ;;AAzgBA;EACI,gBAAA;AA4gBJ;;AAzgBA,eAAA;AACA;EACI,mBAAA;AA4gBJ;;AAzgBA;EACI,aAAA;AA4gBJ;;AAzgBA;EACI,gBAAA;AA4gBJ;;AAzgBA;EACI,gBAAA;EACA,aAAA;EACA,yBAAA;AA4gBJ;;AAzgBA,WAAA;AAEA;EACI,6BAAA;EACA,qBAAA;EACA,aAAA;AA2gBJ;;AAxgBA;EACI,mBAAA;AA2gBJ;;AAxgBA,YAAA;AACA;EACI,aAAA;EACA,qBAAA;EACA,wCAAA;EACA,aAAA;AA2gBJ;;AAxgBA;EACI,4CAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AA2gBJ","sourcesContent":["@use 'global.scss';\n@import 'layout.scss';\n\nbody {\n  background-color: var(--neutral-color);\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n\n#content main {\n    padding: 1rem;\n}\n\n#main-sidebar {\n    padding: 3rem 1rem 1rem 1rem;\n}\n\n#main-sidebar ul {\n    padding: 1rem 0;\n    border-right: 1px solid var(--primary-light-color);\n    position: sticky;\n    top: 120px;\n}\n\n#main-sidebar ul li {\n    padding: 1rem 0;\n}\n\nsection {\n    margin-top: 4rem;\n}\n\n/* TYPOGRAPHY */\n.guide-typography {\n    align-items: center;\n}\n\n.guide-typography > div {\n    padding: 1rem;\n}\n\n.guide-typography__example {\n    min-width: 400px;\n}\n\n.guide-typography__properties {\n    min-width: 140px;\n    display: flex;\n    justify-content: flex-end;\n}\n\n/* COLORS */\n\n.guide-color ul {\n    padding: 10rem 1rem 1rem 1rem;\n    border-radius: 0.5rem;\n    height: 19rem;\n}\n\n.guide-color li {\n    padding-top: 0.5rem;\n}\n\n/* CONTENT */\n.guide-content__container {\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--secondary-color);\n    height: 27rem;\n}\n\n.col-style {\n    border: 1px solid var(--primary-light-color);\n    box-sizing: border-box;\n    padding: 10px;\n    text-align: center;\n}","html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","@use \"./utilities/variables\" as *;\n@use './utilities/functions' as *;\n@use \"sass:map\";\n@use 'sass:color';\n\n@each $font, $font-family in $font-names {\n    @font-face {\n        font-family: $font-family;\n        src: map.get($font-src, $font-family);\n    }\n}\n\nhtml {\n    --min-width: 320px;\n\n    /* COLORS */\n    @each $color, $value in $colors {\n        --#{$color}-color: #{$value};\n        --#{$color}-complement-color: #{complement($value)};\n        --#{$color}-dark-color: #{darken($value, 30%)};\n        --#{$color}-darkest-color: #{darken($value, 50%)};\n        --#{$color}-light-color: #{lighten($value, 30%)};\n        --#{$color}-lightest-color: #{lighten($value, 50%)};\n    }\n\n    /* BREAKPOINTS */\n    @each $breakpoint, $value in $breakpoints {\n        --breakpoint-#{$breakpoint}: #{$value};\n    }\n}","$font-properties: (\n    \"size-global\": 16px,\n    \"default-font\": \"\\\"VR_Standard\\\", serif\",\n);\n\n$font-names: (\n    \"standard\": \"VR_Standard\",\n    \"standard-italic\": \"VR_Standard_Italic\",\n    \"handmade\": \"VR_Handmade\"\n);\n\n$font-src: (\n    \"VR_Standard\": url(../fonts/estandar.woff2) format(\"woff2\"),\n    \"VR_Standard_Italic\": url(../fonts/estandar_italic.woff2) format(\"woff2\"),\n    \"VR_Handmade\": url(../fonts/handmade.woff2)\n);\n\n$elements-sizes: (\n    \"h1\": 3.5rem,\n    \"h2\": 2.5rem,\n    \"h3\": 2rem,\n    \"h4\": 1.5rem,\n    \"h5\": 1.25rem,\n    \"h6\": 1rem,\n    \"p\": 1rem,\n    \"small\": 0.8rem\n);\n\n$elements-paddings: (\n    \"h1\": 1.5rem 0,\n    \"h2\": 1rem 0,\n    \"h3\": 1rem 0,\n    \"h4\": 1rem 0,\n    \"h5\": 1rem 0,\n    \"h6\": 1rem 0,\n    \"p\": 1rem 0,\n    \"li\": 0.2rem 0\n);\n\n$elements-weights: (\n    \"h1\": 900,\n    \"h2\": 700,\n    \"h3\": 700,\n    \"h4\": 700,\n    \"h5\": 700,\n    \"h6\": 700,\n    \"bold\": 700,\n);\n\n$colors: (\n    \"primary\": #c9ab81,\n    \"secondary\": #59335c,\n    \"neutral\": #333333,\n    \"warning\": #cd0707,\n    \"info\": #f0ad4e,\n    \"text\": #ffffff,\n);\n\n$elements-colors: (\n    \"h1\": var(--primary-color),\n    \"h2\": var(--primary-color),\n    \"h3\": var(--primary-color),\n    \"h4\": var(--primary-color),\n    \"h5\": var(--primary-color),\n    \"h6\": var(--primary-color),\n    \"text\": var(--text-color),\n    \"mark\": var(--primary-darkest-color),\n    \"mark-bg\": var(--primary-color),\n    \"hr\": var(--primary-light-color),\n    \"a\": var(--primary-color),\n    \"a:hover\": var(--primary-light-color),\n    \"menu\": var(--primary-light-color),\n    \"menu-bg\": var(--neutral-color),\n);\n\n$breakpoints: (\n    \"xs\": 0,\n    \"sm\": 576px,\n    \"md\": 768px,\n    \"lg\": 992px,\n    \"xl\": 1200px,\n    \"xxl\": 1400px\n);","@import 'utilities/variables';\n\n@each $color, $value in $colors {\n    .bg-#{$color}-color {\n        background-color: $value;\n    }\n\n    .font-#{$color}-color {\n        color: $value;\n    }\n}","@use 'utilities/variables' as *;\n@use 'utilities/functions' as *;\n@use './utilities/reset';\n@use 'sass:map';\n\n@use 'variables.scss';\n@use 'colors.scss';\n\nhtml {\n  font-size: font-properties(\"size-global\");\n  color: elements-colors(\"text\");\n  font-family: #{font-properties(\"default-font\")};\n}\n\n@for $i from 1 through 6 {\n  h#{$i}, .header#{$i} {\n    font-size: elements-sizes(\"h#{$i}\");\n    padding: elements-paddings(\"h#{$i}\");\n    font-weight: elements-weights(\"h#{$i}\");\n    color: elements-colors(\"h#{$i}\");\n  }\n}\n\np {\n  padding: elements-paddings(\"p\");\n  font-size: elements-sizes(\"p\");\n}\n\nsmall {\n  font-size: elements-sizes(\"small\");\n}\n\nb {\n  font-weight: elements-weights(\"bold\");\n}\n\ni {\n  font-style: italic;\n}\n\nmark {\n  background-color: elements-colors(\"mark-bg\");\n  color: elements-colors(\"mark\");\n}\n\nhr {\n  color: elements-colors(\"hr\");\n  border-style: solid;\n}\n\nul {\n  li {\n    padding: elements-paddings(\"li\");\n  }\n\n  &.decorated {\n    li {\n      &:before {\n        content: \"•\";\n        color: var(--primary-color);\n        margin-right: 0.5rem;\n      }\n    }\n  }\n}\n\na {\n  text-decoration: none;\n  color: elements-colors(\"a\");\n  text-decoration: underline;\n\n  &:hover {\n    color: elements-colors(\"a:hover\");\n    transition: all 0.2s linear 0s;\n  }\n}\n\nfooter .sign {\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n}\n\n%menu-color {\n    color: elements-colors(\"menu\");\n}\n#main-menu {\n    position: sticky;\n    top: 0;\n    background-color: color-mix(in srgb, elements-colors(\"menu-bg\") 95%, transparent);\n    @extend %menu-color;\n\n    h2 {\n      @extend %menu-color;\n    }\n}\n\n// /* ESTILOS DE FUENTE */\n\n.font-handmade {\n    font-family: map.get($font-names, \"handmade\"), sans-serif;\n}\n\n%contrast-color {\n    color: var(--neutral-dark-color);\n}\n.font-contrast-color {\n    @extend %contrast-color;\n\n    b, hr {\n        @extend %contrast-color;\n    }\n}","@use './utilities/mixins' as *;\n@use './utilities/variables' as *;\n@use 'sass:math';\n/* FLEXBOX */\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n@for $i from 1 through 12 {\n  .col-#{$i} {\n    flex-basis: math.div(100%, $i);\n  }\n}\n\n@each $breakpoint, $value in $breakpoints {\n    @if $breakpoint != \"xs\" {\n        @include breakpoint($breakpoint) {\n            @for $i from 1 through 12 {\n              .col-#{$breakpoint}-#{$i} {\n                flex-basis: math.div(100%, $i);\n              }\n            }\n        }\n    }\n}","@use 'variables' as *;\n\n@mixin breakpoint($size) {\n  @if map-has-key($breakpoints, $size) {\n    @media screen and (min-width: #{map-get($breakpoints, $size)}) {\n            @content;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/first.scss":
/*!*****************************!*\
  !*** ./src/scss/first.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_first_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./first.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/first.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_first_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_first_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_first_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_first_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scss/guide.scss":
/*!*****************************!*\
  !*** ./src/scss/guide.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_guide_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./guide.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/guide.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_guide_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_guide_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_guide_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_guide_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/estandar.woff2":
/*!**********************************!*\
  !*** ./src/fonts/estandar.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/estandar .woff2";

/***/ }),

/***/ "./src/fonts/estandar_italic.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/estandar_italic.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/estandar_italic .woff2";

/***/ }),

/***/ "./src/fonts/handmade.woff2":
/*!**********************************!*\
  !*** ./src/fonts/handmade.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/handmade .woff2";

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// no jsonp function
/******/ })();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__webpack_require__.nc = undefined;
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_guide_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/guide.scss */ "./src/scss/guide.scss");
/* harmony import */ var _scss_first_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/first.scss */ "./src/scss/first.scss");


document.querySelector('#go-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
})();


//# sourceMappingURL=main.bundle.js.map