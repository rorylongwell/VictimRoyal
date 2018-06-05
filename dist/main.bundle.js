webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n    line-height: 1;\n    \n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n.social-links li\n{\n  color: #111;\n}\na{\n    color: #AA1C21;\n}\na:link {\n    text-decoration: none;\n}\na:visited {\n    text-decoration: none;\n}\na:hover {\n    text-decoration: underline;\n}\na:active {\n    text-decoration: underline;\n}\n.title\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\np\n{\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    color: #AA1C21;\n    text-align:left;\n    padding:12px;\n}\nh1 \n{\n    font-family: 'Ordnung';\n    font-size: 10em;\n    letter-spacing: 0.03em;\n    color: ghostwhite;\n    text-align: center;\n}\n.emblem{\n  font-family: 'Ordnung';\n  font-size: 5em;\n  letter-spacing: 0.03em;\n  color: #111;\n  text-align: center;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n.emblem-container{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n \n\n}\nh2 \n{\n    /* font-family: 'Alfa Slab One'; */\n    font-family: 'Ordnung';\n    font-size: 5em;\n    letter-spacing: 2px;\n    color: #AA1C21;\n  \n}\n.image{\n    background-size:cover; width:auto;\n    background-image:url('/images/background.jpg');\n    background-position:50% 50%;\n  }\n.panel {\n    width: 100%;\n    height:100vh;\n    background-color: #111;\n}\n.media{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  padding: 20px;\n}\n.spotify-media{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  padding: 20px;\n}\n.media__video {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 30px;\n  height: 0;\n  width: 100%;\n  overflow: hidden;\n}\n.media__video iframe, .media__video object, .media__video embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\narticle{\n  overflow: hidden;\n}\n.container\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 60%;\n    padding-left:10px;\n    padding-right:10px;\n}\n.container-links\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: left;\n        -ms-flex-pack: left;\n            justify-content: left;\n    width: 60%;\n    padding-left:10px;\n    padding-right:10px;\n}\n.container-column\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height:120px;\n}\n.container-video{\n  width: 90%;\n}\n.vertical{\n  -webkit-writing-mode:tb-rl;\n      -ms-writing-mode:tb-rl;\n          writing-mode:tb-rl;\n    -webkit-transform:rotate(180deg);\n    transform: rotate(180deg);\n    white-space:nowrap;\n    display:block;\n    font-size: 3em;\n    \n}\n.spotify-container{\n  padding:20px;\n}\n.follow-links a{\n  color: #111;\n  display: block;\n    \n    padding: 0.4em 0.5em;\n    font-size: 1em;\n    letter-spacing: 0.03em;\n\t  text-decoration: none;\n    font-family: 'Roboto', sans-serif;\n}\n.follow-links span{\n  text-align: left;\n}\n.follow-links i{\n  text-align: center;\n  color: #111;\n  font-family: 'FontAwesome';\n  font-size: 1.4em;\n}\n.vertical-container{\n  padding-left: 12px;\n}\n.alt-color{\n    background-color:#AA1C21;\n}\n.alt-color h2{\n    color: #111;\n    \n}\n.alt-color p{\n    color: #111; \n}\n@font-face {\n    font-family: 'ordnung';\n    src: url('/assets/fonts/ordnung.eot'),\n        url('/assets/fonts/ordnung.woff2') format('woff2'),\n         url('/assets/fonts/ordnung.eot?#iefix') format('embedded-opentype'),\n        url('/assets/fonts/ordnung.woff') format('woff'),\n         url('/assets/fonts/ordnung.ttf') format('truetype'),\n         url('/assets/fonts/ordnung.svg#ordnung') format('svg');\n    font-weight: normal;\n    font-style: normal;\n  }\n/*Basic Grid Styles*/\n.Grid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n.Grid-column {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n.u-textCenter {\n    text-align: center;\n  }\n.Grid-cell {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n/* With gutters*/\n.Grid--gutters {\n    margin-left: -1em;\n  }\n.Grid--gutters .Grid-cell {\n    padding-left: 1em;\n  }\n.Grid--gutters .Grid--nested .Grid-cell:first-of-type .Demo {\n    margin-right: 1em;\n  }\n/* Justify per row*/\n.Grid--right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n.Grid--center {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n/* Alignment per row */\n.Grid--top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n.Grid--bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n.Grid--center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n/* Alignment per cell */\n.Grid-cell--top {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n  }\n.Grid-cell--bottom {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n  }\n.Grid-cell--center {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n  }\n/*===========================================*/\n/* Base classes for all media - Mobile first */\n.Grid--cols-2 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n.Grid--cols-3 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n.Grid--cols-4 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n.Grid--cols-6 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 calc(50% - 1em);\n            flex: 0 0 calc(50% - 1em);\n  }\n.Grid--cols-12 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 calc(33.3333% - 1em);\n            flex: 0 0 calc(33.3333% - 1em);\n  }\n.Grid--holly-grail .aside, .Grid--holly-grail .main {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 100%;\n            flex: 1 100%;\n  }\n/* One of -- columns*/\n.Grid--1of2 > .Grid-cell,\n  .Grid--1of4 > .Grid-cell:first-of-type,\n  .Grid--1of3 > .Grid-cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n.Grid--1of6 > .Grid-cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n.Grid--fit > .Grid-cell {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n.Grid--full > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n/* Tablet (medium) screens */\n@media (min-width: 30em) {\n    .Grid--cols-4 > .Grid-cell {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 calc(50% - 1em);\n              flex: 0 0 calc(50% - 1em);\n    }\n  \n    .Grid--cols-6 > .Grid-cell {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 calc(33.3333% - 1em);\n              flex: 0 0 calc(33.3333% - 1em);\n    }\n  \n    .Grid--cols-12 > .Grid-cell {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 calc(16.6666% - 1em);\n              flex: 0 0 calc(16.6666% - 1em);\n    }\n  \n    .Grid--holly-grail .aside {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 calc(25% - 1em);\n              flex: 1 calc(25% - 1em);\n    }\n  \n    .Grid--1of2 > .Grid-cell {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 50%;\n              flex: 0 0 50%;\n    }\n  \n    .Grid--1of6 > .Grid-cell:first-of-type {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 30%;\n              flex: 0 0 30%;\n    }\n  \n    .Grid--1of4 > .Grid-cell:first-of-type {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 50%;\n              flex: 0 0 50%;\n    }\n  \n    .Grid--1of3 > .Grid-cell:first-of-type {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 100%;\n              flex: 0 0 100%;\n    }\n  }\n/* Large screens */\n@media (min-width: 48em) {\n    .Grid--cols-2 > .Grid-cell,\n    .Grid--cols-3 > .Grid-cell,\n    .Grid--cols-4 > .Grid-cell,\n    .Grid--cols-6 > .Grid-cell,\n    .Grid--cols-12 > .Grid-cell {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n    }\n  \n    .Grid--holly-grail .main {\n      -webkit-box-flex: 2;\n          -ms-flex: 2;\n              flex: 2;\n    }\n    .Grid--holly-grail .aside {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n    }\n    .Grid--holly-grail .aside-1 {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1;\n    }\n    .Grid--holly-grail .main {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n    }\n    .Grid--holly-grail .aside-2 {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3;\n    }\n  \n    .Grid--1of2 > .Grid-cell {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 50%;\n              flex: 0 0 50%;\n    }\n  \n    .Grid--1of6 > .Grid-cell:first-of-type {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 16.6666%;\n              flex: 0 0 16.6666%;\n    }\n  \n    .Grid--1of4 > .Grid-cell:first-of-type {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 25%;\n              flex: 0 0 25%;\n    }\n  \n    .Grid--1of3 > .Grid-cell:first-of-type {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 30%;\n              flex: 0 0 30%;\n    }\n  \n    .Grid--gutters.Grid--nested .Grid-cell:first-of-type .Demo {\n      margin-right: 0;\n    }\n\n    .media{\n      padding:50px;\n    }\n  }\n.content-1of1::before {\n    content: \"1\";\n  }\n.content-1of2::before {\n    content: \"1/2\";\n  }\n.content-1of3::before {\n    content: \"1/3\";\n  }\n.content-1of4::before {\n    content: \"1/4\";\n  }\n.content-1of6::before {\n    content: \"1/6\";\n  }\n.content-1of12::before {\n    content: \"1/12\";\n  }\n@media screen and (max-width: 600px) {\n    /* .vertical{\n    writing-mode:tb-rl;\n    white-space:nowrap;\n    display:block;\n    font-size: 3em;\n    } */\n\n    .title{\n      font-family: 'Ordnung';\n      font-size: 7em;\n      letter-spacing: 0.03em;\n      color: ghostwhite;\n    }\n    .container{\n      padding-left:10px;\n      padding-right:10px;\n      width: 90%;\n    }\n\n    .video-wrapper{\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n    }\n  }\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n <section id=\"main\">\n     \n      <section id=\"home\" class=\"panel image\">\n          <a id=\"home\"></a>\n          <div class=\"Grid Grid--center\">  \n        <h1 class=\"title\">\n          VICTIM ROYAL\n        </h1>\n      </div>\n      </section>\n      \n      <section id=\"watch\" class=\"Grid Grid--center panel alt-color\">\n        <a id=\"watch\"></a> \n        <div class=\"container container-video\">\n          <h2 class=\"vertical\">WATCH</h2> \n\n            <div class=\"Grid-cell Grid-cell--center media\">\n              <div class=\"media__video\">\n                <iframe src=\"https://www.youtube.com/embed/2SUrplP0sK0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" ></iframe>\n            </div>\n        \n              </div> \n    \n    </div>  \n    \n  </section>\n  <section id=\"listen\" class=\"Grid Grid--center  panel\">\n      <a id=\"listen\"></a>\n        <div class=\"container\">\n            <h2 class=\"vertical\">LISTEN</h2> \n            <div class=\"container-column\">\n            <div class=\"Grid-cell spotify-media\">\n            <iframe src=\"https://open.spotify.com/embed?uri=spotify:album:5J0xGoOM2FOLlCdZpRXOAa\" width=\"300\" height=\"80\" frameborder=\"0\" allowtransparency=\"true\"></iframe>\n          </div>\n          <br/>\n          <div class=\"Grid-cell Grid-cell--center\">\n          <iframe src=\"https://open.spotify.com/follow/1/?uri=spotify:artist:3JfpghYRSTVh8MmxIDZIZG&size=basic&theme=dark&show-count=0\" width=\"92\" height=\"28\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden;\" allowtransparency=\"true\"></iframe>\n</div>\n</div>\n        </div>\n        </section>\n    <section id=\"follow\" class=\"Grid Grid--center alt-color\">\n        <a id=\"follow\"></a>\n        <div class=\"container\">\n            <h2 class=\"vertical\">FOLLOW</h2> \n            <ul class=\"follow-links\">\n              <li><a href=\"https://www.facebook.com/victimroyalband/\" class=\"hvr-grow\"><i class=\"fa fa-facebook-official\"></i>&nbsp;<span>FACEBOOK</span></a></li>\n              <li><a href=\"https://www.instagram.com/victim_royal/\" class=\"hvr-grow\"><i class=\"fa fa-instagram\"></i>&nbsp;<span>INSTAGRAM</span></a></li>\n              <li><a href=\"https://twitter.com/victimroyalband\" class=\"hvr-grow\"><i class=\"fa fa-twitter-square\"></i>&nbsp;<span>TWITTER</span></a></li>\n              <li><a href=\"https://victimroyal.tumblr.com/\" class=\"hvr-grow\"><i class=\"fa fa-tumblr-square\"></i>&nbsp;<span>TUMBLR</span></a></li>\n            </ul>\n                </div>  \n          </section>\n        </section>\n     \n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map