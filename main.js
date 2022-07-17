(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_careers_careers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/careers/careers.component */ "./src/app/components/careers/careers.component.ts");




// all components imports





var appRoutes = [
    { path: "", pathMatch: 'full', redirectTo: 'home' },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "aboutus", component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: "services", component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
    { path: "careers", component: _components_careers_careers_component__WEBPACK_IMPORTED_MODULE_8__["CareersComponent"] },
    { path: "contact", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: "**", redirectTo: '404.html' },
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.routeEvent(this.router);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.routeEvent = function (router) {
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                window.scrollTo(0, 0);
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_careers_careers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/careers/careers.component */ "./src/app/components/careers/careers.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _directives_resume_validate_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/resume-validate.directive */ "./src/app/directives/resume-validate.directive.ts");










// component imports








// other imports


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_14__["ServicesComponent"],
                _components_careers_careers_component__WEBPACK_IMPORTED_MODULE_15__["CareersComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _directives_resume_validate_directive__WEBPACK_IMPORTED_MODULE_19__["ResumeValidator"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_4__["AppRouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase, "monave"),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about-page\">\n  <div class=\"about-charity\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"title-section\">\n            <div class=\"title-content\">\n              <h2 class=\"wow slideInUp\">\n                <span>About <i>monave</i></span>\n              </h2>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"box-content wow slideInUp\">\n                <div class=\"pic-right wow bounceInLeft\">\n                  <img\n                    src=\"assets/img/about.png\"\n                    alt=\"About Pic\"\n                    class=\"img-responsive\"\n                  />\n                </div>\n                <h2 class=\"box-title wow slideInUp\">\n                  We do best, and we make sure we deliver best\n                </h2>\n                <p class=\"head-para wow slideInUp\">\n                  <b style=\"color: var(--color-primary)\">monave</b> is a team of\n                  Software Engineers spread around the world. Combining our\n                  solid business domain knowledge, technical expertise, profound\n                  knowledge of most modern industry trends and quality-driven\n                  delivery model we offer progressive end-to-end solutions.\n                </p>\n                <p class=\"head-para wow slideInUp\">\n                  We deliver extensive web services extending from custom web\n                  applications & software to the development of complex Internet\n                  systems. We base our offerings on an understanding of clients’\n                  business goals and providing reliable solutions. We combine\n                  business domain expertise with technology competence and\n                  proven methodologies to deliver high-quality results in a\n                  cost-effective manner to maximize your competitive advantage\n                  and productivity.\n                </p>\n                <p class=\"head-para wow slideInUp\">\n                  If you are looking for the first-class talent to code your\n                  custom software or a compelling website or a mobile app, we\n                  are definitely the top contenders. We are known for top web\n                  design skills, web application development, and mobile\n                  application development.\n                </p>\n                <p>\n                  Just drop an email to\n                  <a href=\"mailto:contact.monave@gmail.com\"\n                    >contact.monave@gmail.com</a\n                  >\n                  with your requirement we will come up with a solution.\n                </p>\n                <p class=\"head-para wow slideInUp\">Some of our Key Services:</p>\n                <ul class=\"key-projects\">\n                  <li>\n                    <p>\n                      <span class=\"fa fa-check\"></span> Training & Certification\n                    </p>\n                  </li>\n                  <li>\n                    <p><span class=\"fa fa-check\"></span> Web Designing</p>\n                  </li>\n                  <li>\n                    <p><span class=\"fa fa-check\"></span> Web App Development</p>\n                  </li>\n                  <li>\n                    <p>\n                      <span class=\"fa fa-check\"></span> Mobile App Development\n                    </p>\n                  </li>\n                  <li>\n                    <p>\n                      <span class=\"fa fa-check\"></span> SEO & Digital Marketing\n                    </p>\n                  </li>\n                  <li>\n                    <p><span class=\"fa fa-check\"></span> Web Hosting</p>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mission\" id=\"ourMission\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-sm-offset-3\">\n          <div class=\"title-section\">\n            <div class=\"title-content\">\n              <p class=\"icon-top\"><span class=\"flaticon-mission\"></span></p>\n              <h2 class=\"wow slideInUp\">\n                <span>Our <i>Mission</i></span>\n              </h2>\n            </div>\n          </div>\n          <div class=\"box-content wow slideInUp\">\n            <p>\n              <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> To deliver the\n              top-notch, Highly innovative, feature-rich websites across the\n              worlds of startups and enterprise fragment with our captivating\n              functionality.\n              <i\n                style=\"transform: rotateY(180deg)\"\n                class=\"fa fa-quote-left\"\n                aria-hidden=\"true\"\n              ></i>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"mission vision\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-sm-offset-3\">\n          <div class=\"title-section\">\n            <div class=\"title-content\">\n              <p class=\"icon-top\"><span class=\"flaticon-internet-2\"></span></p>\n              <h2 class=\"wow slideInUp\"><span>Our <i>Vision</i></span></h2>\n            </div>\n          </div>\n          <div class=\"box-content wow slideInUp\">\n            <p><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>Lorem ipsum dolor sit amet, consectetur adipisicing\n              elit. Tempore dolore sed corporis aut, magnam reprehenderit labore molestiae. Commodi quam aspernatur,\n              quibusdam fugit, hic, vel quae, illum assumenda omnis et possimus. Lorem ipsum dolor sit amet, consectetur\n              adipisicing elit. Soluta quae vitae tempora ratione repellendus facere, nobis excepturi, aspernatur maxime\n              voluptas praesentium mollitia fugit placeat eaque! Sed quos fugit sunt, sapiente. <i style=\"transform:rotateY(180deg)\" class=\"fa fa-quote-left\" aria-hidden=\"true\"></i></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('About Us - monave');
        this.metaService.updateTag({ name: 'description', content: 'monave is a team of Software Engineers spread around the world. Combining our solid business domain knowledge, technical expertise, profound knowledge of most modern industry trends and quality-driven delivery model we offer progressive end-to-end solutions.' });
        this.metaService.updateTag({ name: 'og:description', content: 'monave is a team of Software Engineers spread around the world. Combining our solid business domain knowledge, technical expertise, profound knowledge of most modern industry trends and quality-driven delivery model we offer progressive end-to-end solutions.' });
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/careers/careers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/careers/careers.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#career-page{\n  padding-top:3em;\n}\n.panel-heading{\ncursor: pointer;\n}\n.title-section .title-content h2{\nfont-size: 25px;\n}\n.jobs-block .panel-group .panel{\n  margin-top:1em;\n}\n.jobs-block .panel-group .panel-heading{\n  padding:1.2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJlZXJzL2NhcmVlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmVlcnMvY2FyZWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmVlci1wYWdle1xuICBwYWRkaW5nLXRvcDozZW07XG59XG4ucGFuZWwtaGVhZGluZ3tcbmN1cnNvcjogcG9pbnRlcjtcbn1cbi50aXRsZS1zZWN0aW9uIC50aXRsZS1jb250ZW50IGgye1xuZm9udC1zaXplOiAyNXB4O1xufVxuLmpvYnMtYmxvY2sgLnBhbmVsLWdyb3VwIC5wYW5lbHtcbiAgbWFyZ2luLXRvcDoxZW07XG59XG4uam9icy1ibG9jayAucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmd7XG4gIHBhZGRpbmc6MS4yZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/careers/careers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/careers/careers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"innerpages\">\n  <div id=\"careers-page\">\n    <div class=\"jobs-block\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 current-jobs\">\n            <div class=\"title-section\">\n              <div class=\"title-content\">\n                <h2 class=\"wow slideInUp\"><span>Current Openings At <i>monave</i></span></h2>\n              </div>\n            </div>\n            <div class=\"panel-group\" id=\"accordion\">\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse1\">\n                  <h4 class=\"panel-title\">\n                    Intern Developer\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse\">\n                  <div class=\"panel-body\">\n\n                    <h5>\n                      Description\n                    </h5>\n\n                    <p>\n                      As a Web Intern at Mutual Mobile, you'll contribute towards creating technical designs, writing\n                      user stories, and grooming the backlog on projects. You'll own easy to medium tasks and see them\n                      through to completion. You'll be a part of the delivery management team and have close interaction\n                      with customer representatives for the duration of the project.\n                    </p>\n\n                    <h5>\n                      Requirements\n                    </h5>\n\n                    <p>You'll probably love this job if you like:\n                      • Building website pages and deploying page content\n                      • Assisting with the implementation, deployment and maintenance efforts\n                      • Working with cross-functional team members to develop page layouts/designs and static and/or\n                      responsive solutions for website content</p>\n\n                    <h5>\n                      Qualifications\n                    </h5>\n                    <p>\n                      • Experience with HTML 5, CSS3, JavaScript, JQuery is a plus\n                    </p>\n\n                    <h5>\n                      Desired Skills\n                    </h5>\n                    <p>• Knowledge of HTML, CSS and JavaScript\n                      • Web Design experience not necessary, but will be helpful in the role\n                      • Ability to work in a fast paced and deadline oriented environment</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse2\">\n                  <h4 class=\"panel-title\">\n                    Business Developement Executive\n                  </h4>\n                </div>\n                <div id=\"collapse2\" class=\"panel-collapse collapse\">\n                  <div class=\"panel-body\">\n                    <p>We are currently looking for an active executive who can bring businesss for the company and can\n                      deal clients with ease.</p>\n                    <p>This is more like partime job where you can earn by just refering us clients who are looking for\n                      custom applications for their business needs.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-5 col-md-offset-1\">\n            <div class=\"job-form\">\n              <div class=\"title-section\">\n                <div class=\"title-content\">\n                  <h2 class=\"wow slideInUp\"><span>Apply For <i>A Job</i></span></h2>\n                </div>\n              </div>\n              <form #jobform=\"ngForm\" (ngSubmit)=\"applyjob($event)\" enctype=\"multipart/form-data\" id=\"contact-us\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name <small>*</small></label>\n                  <input required [(ngModel)]=\"application.name\" type=\"text\" name=\"name\" #name=\"ngModel\" id=\"name\" class=\"form-control\" placeholder=\"Name\" />\n                  <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"error\">Name is required</div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"email\"> Email <small>*</small></label>\n                  <input required [(ngModel)]=\"application.email\" type=\"email\" name=\"email\" #email=\"ngModel\" id=\"email\" class=\"form-control\" placeholder=\"Email\" />\n                  <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"error\">Email is required</div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"mobile\"> Mobile Number <small>*</small></label>\n                  <input required [(ngModel)]=\"application.mobile\" type=\"text\" name=\"mobile\" #mobile=\"ngModel\" id=\"mobile\" class=\"form-control\" placeholder=\"Mobile\" />\n                  <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"error\">Mobile is required</div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"job\"> Applying For <small>*</small></label>\n                  <input required [(ngModel)]=\"application.job\" type=\"text\" name=\"job\" id=\"job\" #job=\"ngModel\" class=\"form-control\" placeholder=\"Applying For...\">\n                  <div *ngIf=\"job.invalid && (job.dirty || job.touched)\" class=\"error\">Job Position is required</div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"resume\"> Resume<small>*</small></label>\n                  <input required ngModel type=\"file\" name=\"resume\" id=\"resume\" (change)=\"onResumeChange($event)\" #resume=\"ngModel\" class=\"form-control\" placeholder=\"Resume\" resumevalidate />\n                  <div *ngIf=\"resume.errors?.required && (resume.dirty || resume.touched)\" class=\"error\">Resume is required</div>\n                  <div *ngIf=\"resume.errors?.accept && (resume.dirty || resume.touched)\" class=\"error\">Only .pdf, .docx, .doc are allowed</div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"message\"> Message</label>\n                  <textarea [(ngModel)]=\"application.message\" name=\"message\" #message=\"ngModel\" id=\"message\" class=\"form-control\" rows=\"5\" placeholder=\"Message\"></textarea>\n                </div>\n                <div class=\"contact-btn\">\n                  <button type=\"submit\" [disabled]=\"!jobform.valid\" class=\"btn btn-info\"><i class=\"icon-paper-airplane\"></i> SEND</button>\n                  <div class=\"sMessage\"></div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/careers/careers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/careers/careers.component.ts ***!
  \*********************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_job_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/job-application.service */ "./src/app/services/job-application.service.ts");





var CareersComponent = /** @class */ (function () {
    function CareersComponent(titleService, metaService, newApplication) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.newApplication = newApplication;
        this.application = {
            name: '',
            email: '',
            mobile: '',
            job: '',
            message: ''
        };
    }
    CareersComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Careers - monave');
        this.metaService.updateTag({ name: 'description', content: 'monave is a team of Software Engineers spread around the world.Join with us and we can build a next generation product together 👍' });
        this.metaService.updateTag({ name: 'og:description', content: 'monave is a team of Software Engineers spread around the world.Join with us and we can build a next generation product together 👍' });
    };
    CareersComponent.prototype.initializeApplication = function () {
        this.jobform.resetForm(null);
    };
    CareersComponent.prototype.onResumeChange = function (event) {
        this.files = event.target.files;
    };
    CareersComponent.prototype.applyjob = function (event) {
        event.preventDefault();
        console.log(this.application);
        // return;
        this.newApplication.save(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.application), this.files);
        this.jobform.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('jobform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], CareersComponent.prototype, "jobform", void 0);
    CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__(/*! ./careers.component.html */ "./src/app/components/careers/careers.component.html"),
            styles: [__webpack_require__(/*! ./careers.component.css */ "./src/app/components/careers/careers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], src_app_services_job_application_service__WEBPACK_IMPORTED_MODULE_4__["JobApplicationService"]])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map iframe{\n  width:100%;\n  min-height:400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCBpZnJhbWV7XG4gIHdpZHRoOjEwMCU7XG4gIG1pbi1oZWlnaHQ6NDAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Contact Us -->\n<div id=\"contact-page\">\n  <div class=\"contact\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"title-section\">\n            <div class=\"title-content\">\n              <h2 class=\"wow slideInUp\">\n                <span>Get In <i>Touch</i></span>\n              </h2>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div class=\"adress-block\">\n            <div class=\"each-block\">\n              <div class=\"inner\">\n                <div class=\"icon\"><span class=\"icon-location-pin\"></span></div>\n                <h4>ADDRESS</h4>\n                <div class=\"text\">\n                  4<sup>th</sup> Floor , Mayurinandana Building<br />\n                  Gujjanagundla, Guntur, Andhrapradesh - 520001\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"each-block\">\n            <div class=\"inner\">\n              <div class=\"icon\"><span class=\"icon-envelope\"></span></div>\n              <h4>EMAIL</h4>\n              <div class=\"text\">\n                <a href=\"mailto:contact.monave@gmail.com\"\n                  >contact.monave@gmail.com</a\n                >\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"each-block\">\n            <div class=\"inner\">\n              <div class=\"icon\">\n                <span class=\"icon-screen-smartphone\"></span>\n              </div>\n              <h4>PHONE</h4>\n              <div class=\"text\">\n                <a href=\"tel:09949270864\">(+91) 9949270864</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"contact-form\">\n            <div class=\"title-section\">\n              <div class=\"title-content\">\n                <h2 class=\"wow slideInUp\">\n                  <span>Client <i> Quries</i></span>\n                </h2>\n              </div>\n            </div>\n            <div *ngIf=\"clientQuerySubmitted\">\n              Your Message Has Been Sent Successfully.Our team will get back tou\n              you soon.\n            </div>\n            <form\n              *ngIf=\"!clientQuerySubmitted\"\n              (ngSubmit)=\"clientQuerySubmit($event)\"\n              #clientQueryForm=\"ngForm\"\n            >\n              <div class=\"form-group\">\n                <label for=\"name\">Name <small>*</small></label>\n                <input\n                  [(ngModel)]=\"clientQuery.name\"\n                  #name=\"ngModel\"\n                  type=\"text\"\n                  name=\"name\"\n                  id=\"name\"\n                  class=\"form-control\"\n                  required\n                  placeholder=\"Name\"\n                />\n                <div\n                  *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n                  class=\"error\"\n                >\n                  Please Enter Your Name\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\"> Email <small>*</small></label>\n                <input\n                  [(ngModel)]=\"clientQuery.email\"\n                  #email=\"ngModel\"\n                  type=\"email\"\n                  name=\"email\"\n                  id=\"email\"\n                  class=\"form-control\"\n                  required\n                  placeholder=\"Email\"\n                />\n                <div\n                  *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                  class=\"error\"\n                >\n                  Please Enter Your Email\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"number\"> Mobile Number <small>*</small></label>\n                <input\n                  [(ngModel)]=\"clientQuery.mobile\"\n                  #mobile=\"ngModel\"\n                  type=\"tel\"\n                  name=\"mobile\"\n                  id=\"mobile\"\n                  class=\"form-control\"\n                  required\n                  placeholder=\"Number\"\n                />\n                <div\n                  *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\"\n                  class=\"error\"\n                >\n                  Please Enter Your Mobile Number\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"message\"> Message</label>\n                <textarea\n                  [(ngModel)]=\"clientQuery.message\"\n                  #message=\"ngModel\"\n                  name=\"message\"\n                  id=\"message\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  required\n                  placeholder=\"Message\"\n                ></textarea>\n                <div\n                  class=\"error\"\n                  *ngIf=\"message.invalid && (message.dirty || message.touched)\"\n                >\n                  Please Enter Message\n                </div>\n              </div>\n              <div class=\"contact-btn\">\n                <button\n                  [disabled]=\"!clientQueryForm.valid\"\n                  type=\"submit\"\n                  class=\"btn btn-info\"\n                >\n                  <i class=\"ion-paper-airplane\"></i> SEND MESSAGE\n                </button>\n                <div class=\"sMessage\"></div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6 col-md-5 col-md-offset-1\">\n          <div class=\"contact-form\">\n            <div class=\"title-section\">\n              <div class=\"title-content\">\n                <h2 class=\"wow slideInUp\">\n                  <span>General <i>Quries</i></span>\n                </h2>\n              </div>\n            </div>\n            <div *ngIf=\"generalQuerySubmitted\">\n              Your Message Has Been Sent Successfully.Our team will get back tou\n              you soon.\n            </div>\n            <form\n              *ngIf=\"!generalQuerySubmitted\"\n              (ngSubmit)=\"generalQuerySubmit($event)\"\n              #generalQueryForm=\"ngForm\"\n            >\n              <div class=\"form-group\">\n                <label for=\"name\">Name <small>*</small></label>\n                <input\n                  type=\"text\"\n                  [(ngModel)]=\"generalQuery.name\"\n                  #gname=\"ngModel\"\n                  name=\"name\"\n                  id=\"name\"\n                  class=\"form-control\"\n                  placeholder=\"Name\"\n                  required\n                />\n                <div\n                  class=\"error\"\n                  *ngIf=\"gname.invalid && (gname.dirty || gname.touched)\"\n                >\n                  Please Enter Name\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\"> Email <small>*</small></label>\n                <input\n                  type=\"email\"\n                  [(ngModel)]=\"generalQuery.email\"\n                  #gemail=\"ngModel\"\n                  name=\"email\"\n                  id=\"email\"\n                  class=\"form-control\"\n                  placeholder=\"Email\"\n                  required\n                />\n                <div\n                  class=\"error\"\n                  *ngIf=\"gemail.invalid && (gemail.dirty || gemail.touched)\"\n                >\n                  Please Enter Valid Email\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"number\"> Mobile Number <small>*</small></label>\n                <input\n                  type=\"tel\"\n                  [(ngModel)]=\"generalQuery.mobile\"\n                  #gmobile=\"ngModel\"\n                  name=\"mobile\"\n                  id=\"mobile\"\n                  class=\"form-control\"\n                  placeholder=\"Number\"\n                  required\n                />\n                <div\n                  class=\"error\"\n                  *ngIf=\"gmobile.invalid && (gmobile.dirty || gmobile.touched)\"\n                >\n                  Please Enter Valid Mobile Number\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"message\"> Message</label>\n                <textarea\n                  name=\"message\"\n                  [(ngModel)]=\"generalQuery.message\"\n                  #gmessage=\"ngModel\"\n                  id=\"message\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Message\"\n                  required\n                ></textarea>\n                <div\n                  class=\"error\"\n                  *ngIf=\"\n                    gmessage.invalid && (gmessage.dirty || gmessage.touched)\n                  \"\n                >\n                  Please Enter Message\n                </div>\n              </div>\n              <div class=\"contact-btn\">\n                <button\n                  type=\"submit\"\n                  [disabled]=\"!generalQueryForm.valid\"\n                  class=\"btn btn-info\"\n                >\n                  <i class=\"ion-paper-airplane\"></i> SEND MESSAGE\n                </button>\n                <div class=\"sMessage\"></div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Map -->\n  <div id=\"map\">\n    <iframe\n      src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.0024615107873!2d80.40875056481117!3d16.322818488724785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358a8751053b0d%3A0xc2bb8f7d22654c40!2sGujjanagundla%2C%20Guntur%2C%20Andhra%20Pradesh%20522006!5e0!3m2!1sen!2sin!4v1583296990833!5m2!1sen!2sin\"\n      width=\"600\"\n      height=\"450\"\n      frameborder=\"0\"\n      style=\"border: 0\"\n      allowfullscreen=\"\"\n    ></iframe>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client-query.service */ "./src/app/services/client-query.service.ts");
/* harmony import */ var _services_general_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/general-query.service */ "./src/app/services/general-query.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var ContactComponent = /** @class */ (function () {
    function ContactComponent(clientQueryService, GeneralQueryService, titleService, metaService) {
        this.clientQueryService = clientQueryService;
        this.GeneralQueryService = GeneralQueryService;
        this.titleService = titleService;
        this.metaService = metaService;
        this.clientQuerySubmitted = false;
        this.generalQuerySubmitted = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Contact Us - monave');
        this.metaService.updateTag({ name: 'description', content: 'If you are looking for the first-class talent to code your custom software or a compelling website or a mobile app, Just drop an email with your requirement we will come up with a solution.' });
        this.metaService.updateTag({ name: 'og:description', content: 'If you are looking for the first-class talent to code your custom software or a compelling website or a mobile app, Just drop an email with your requirement we will come up with a solution.' });
        this.initializeClientQuery();
        this.initializeGeneralQuery();
    };
    ContactComponent.prototype.initializeClientQuery = function () {
        this.clientQuery = {
            name: "",
            email: "",
            mobile: "",
            message: ""
        };
    };
    ContactComponent.prototype.initializeGeneralQuery = function () {
        this.generalQuery = {
            name: "",
            email: "",
            mobile: "",
            message: ""
        };
    };
    ContactComponent.prototype.clientQuerySubmit = function ($event) {
        $event.preventDefault();
        this.clientQueryService.store(this.clientQuery).subscribe(function (data) {
            console.log(data);
        });
        this.clientQuerySubmitted = true;
        this.initializeClientQuery();
    };
    ContactComponent.prototype.generalQuerySubmit = function ($event) {
        $event.preventDefault();
        this.GeneralQueryService.store(this.generalQuery).subscribe(function (data) {
            console.log(data);
        });
        this.generalQuerySubmitted = true;
        this.initializeGeneralQuery();
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_query_service__WEBPACK_IMPORTED_MODULE_2__["ClientQueryService"],
            _services_general_query_service__WEBPACK_IMPORTED_MODULE_3__["GeneralQueryService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"footer-inner-box box-center\">\n          <img\n            src=\"assets/favicons/android-chrome-512x512.png\"\n            class=\"img-responsive logo\"\n          />\n          <h3 class=\"wow slideInUp\">Contact Address</h3>\n          <p class=\"wow slideInUp ft-addr\">\n            4<sup>th</sup> Floor , Mayurinandana Building<br />\n            Gujjanagundla,<br />\n            Guntur, Andhrapradesh - 520006\n          </p>\n          <p class=\"wow slideInUp\">\n            <span class=\"icon-phone\"></span>\n            <a href=\"tel:09949270864\">(+91) 9949270864</a> |\n            <span class=\"icon-envelope-open\"></span>\n            <a href=\"mailto:contact.monave@gmail.com\"\n              >contact.monave@gmail.com</a\n            >\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyrights\">\n    <p class=\"text-center\">© 2016-{{ fullYear }} monave All rights reserved.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.fullYear = new Date().getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".each-serv{\n  box-shadow: 0 0 25px rgba(0,0,0,0.2);\n}\n.quotebtn{\n  margin:auto;\n  margin-top:.5rem;\n}\n.statistics{\n  background-image: url(\"/assets/img/statistics-bg.jpg\");\n  /* background-position:0 150px; */\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  padding:5em 0;\n  position: relative;\n  color:#fff !important;\n}\n.statistics::before{\n  content:\"\";\n  display: block;\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100%;\n  height:100%;\n  background: rgba(0,0,0,0.6);\n}\n.statistics .stat_no h2 i{\n  color:var(--color-secondary);\n}\n.stat_no{\n  text-align:center;\n}\n.about{\npadding:40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0RBQXNEO0VBQ3RELGlDQUFpQztFQUVqQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsS0FBSztFQUNMLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtBQUNBLGNBQWM7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWFjaC1zZXJ2e1xuICBib3gtc2hhZG93OiAwIDAgMjVweCByZ2JhKDAsMCwwLDAuMik7XG59XG4ucXVvdGVidG57XG4gIG1hcmdpbjphdXRvO1xuICBtYXJnaW4tdG9wOi41cmVtO1xufVxuLnN0YXRpc3RpY3N7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3N0YXRpc3RpY3MtYmcuanBnXCIpO1xuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMTUwcHg7ICovXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcGFkZGluZzo1ZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG59XG4uc3RhdGlzdGljczo6YmVmb3Jle1xuICBjb250ZW50OlwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xufVxuLnN0YXRpc3RpY3MgLnN0YXRfbm8gaDIgaXtcbiAgY29sb3I6dmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5zdGF0X25ve1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5hYm91dHtcbnBhZGRpbmc6NDBweCAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home-page\">\n  <div class=\"banner\">\n    <video id=\"coding-video\" autoplay=\"ture\" loop=\"true\">\n      <source src=\"assets/img/coding.mp4\" type=\"video/mp4\">\n    </video>\n    <div class=\"layer\"></div>\n    <div class=\"content\">\n      <p>We Build and Scale Softwares For </p>\n      <p>Startups <span class=\"normal\">&amp;</span> Innovative Brands</p>\n      <div>\n        <p><button routerLink=\"/contact\" type=\"submit\" class=\"btn quotebtn btn-info\"><i class=\"icon-paper-airplane\"></i>\n            GET QUOTE</button></p>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!-- About Charity -->\n  <div class=\"about\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"title-section\">\n            <div class=\"title-content\">\n              <p class=\"top-line wow slideInUp\">HELLO &amp; WELCOME</p>\n              <h2 class=\"wow slideInUp\"><span>About <i> monave</i></span></h2>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6 hidden-xs\">\n              <div class=\"pic-left wow bounceInLeft\">\n                <img src=\"assets/img/about.png\" alt=\"About Pic\" class=\"img-responsive\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"box-content wow slideInUp\">\n                <p class=\"head-para wow slideInUp\">monave is a team of Software Engineers spread around the world.\n                  Combining our solid business domain knowledge, technical expertise, profound knowledge of most modern\n                  industry trends and quality-driven delivery model we offer progressive end-to-end solutions.</p>\n                <p class=\"head-para wow slideInUp\">We deliver extensive web services extending from custom web\n                  applications & software to the development of complex Internet systems. We base our offerings on an\n                  understanding of clients’ business goals and providing reliable solutions. We combine business domain\n                  expertise with technology competence and proven methodologies to deliver high-quality results in a\n                  cost-effective manner to maximize your competitive advantage and productivity.</p>\n                <p class=\"box-readmore wow bounceInUp\">\n                  <a routerLink=\"/aboutus\">Learn More</a>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Charity Services -->\n  <div class=\"charity-services\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"title-section\">\n            <div class=\"title-content\">\n              <!-- <p class=\"top-line wow slideInUp\">You can Join Us</p> -->\n              <h2 class=\" wow slideInUp\" data-wow-delay=\".1s\"><span>Our <i>Services</i></span></h2>\n            </div>\n          </div>\n          <div class=\"service-list\">\n            <div class=\"row\">\n\n              <div class=\"col-sm-4\">\n                <div class=\"each-serv wow slideInUp\">\n                  <div class=\"iconbox clearfix left no-box\" data-wow-delay=\".1s\">\n                    <div class=\"box-header\">\n                      <div class=\"box-icon\"><span class=\"icon-badge\"></span></div>\n                      <h3 class=\"box-title\">Training & Certification</h3>\n                    </div>\n                    <div class=\"box-content\">\n                      <p>We train students or early professionals on modern technologies and will provide the certification after successful completion of the traning ...</p>\n                      <p class=\"box-readmore\">\n                        <a routerLink=\"/services\">Learn More</a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-sm-4\">\n                <div class=\"each-serv wow slideInUp\">\n                  <div class=\"iconbox clearfix left no-box\" data-wow-delay=\".1s\">\n                    <div class=\"box-header\">\n                      <div class=\"box-icon\"><span class=\"icon-globe\"></span></div>\n                      <h3 class=\"box-title\">Web Design</h3>\n                    </div>\n                    <div class=\"box-content\">\n                      <p>Give your website a professional look and feel with our top web design services. We create effective, compelling websites with attractive & user-centered designs ...</p>\n                      <p class=\"box-readmore\">\n                        <a routerLink=\"/services\">Learn More</a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"col-sm-4\">\n                <div class=\"each-serv wow slideInUp\">\n                  <div class=\"iconbox clearfix left no-box\" data-wow-delay=\".1s\">\n                    <div class=\"box-header\">\n                      <div class=\"box-icon\"><span class=\"icon-screen-desktop\"></span></div>\n                      <h3 class=\"box-title\">Web App Development</h3>\n                    </div>\n                    <div class=\"box-content\">\n                      <p>To meet your industry needs, we cater tailor-made robust user experience and deliver the top-notch, Highly innovative, feature-rich websites across the worlds ...</p>\n                      <p class=\"box-readmore\">\n                        <a routerLink=\"/services\">Learn More</a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-sm-4\">\n                <div class=\"each-serv wow slideInUp\">\n                  <div class=\"iconbox clearfix left no-box\" data-wow-delay=\".1s\">\n                    <div class=\"box-header\">\n                      <div class=\"box-icon\"><span class=\"icon-screen-smartphone\"></span></div>\n                      <h3 class=\"box-title\">Mobile App Development</h3>\n                    </div>\n                    <div class=\"box-content\">\n                      <p>We have built hybrid mobiles apps for our customers from Health, Education, Real Estate & Hospitality sectors. We are specialists in building hybrid mobile apps powered by ...</p>\n                      <p class=\"box-readmore\">\n                        <a routerLink=\"/services\">Learn More</a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-sm-4\">\n                <div class=\"each-serv wow slideInUp\">\n                  <div class=\"iconbox clearfix left no-box\" data-wow-delay=\".1s\">\n                    <div class=\"box-header\">\n                      <div class=\"box-icon\"><span class=\"icon-graph\"></span></div>\n                      <h3 class=\"box-title\">SEO & Digital Marketing</h3>\n                    </div>\n                    <div class=\"box-content\">\n                      <p>As a professional SEO consultants we are committed to give the ROI search engine ranking results to our clients. Our experts have several years of experience in White Hat SEO Techniques and ...</p>\n                      <p class=\"box-readmore\">\n                        <a routerLink=\"/services\">Learn More</a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-sm-4\">\n                <div class=\"each-serv wow slideInUp\">\n                  <div class=\"iconbox clearfix left no-box\" data-wow-delay=\".1s\">\n                    <div class=\"box-header\">\n                      <div class=\"box-icon\"><span class=\"icon-cloud-upload\"></span></div>\n                      <h3 class=\"box-title\">Web Hosting</h3>\n                    </div>\n                    <div class=\"box-content\">\n                      <p>We are having partnerships with one of the best website hosting providers. We will provide Domain Name registration, VPS Servers,  Dedicated Servers ...</p>\n                      <p class=\"box-readmore\">\n                        <a routerLink=\"/services\">Learn More</a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"statistics\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-4 col-sm-4\">\n          <div class=\"stat_no wow bounceInLeft\" data-wow-duration=\"1s\" data-wow-delay=\".5s\"\n            style=\"visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: bounceInLeft;\">\n            <h2><i class=\"icon-layers\"></i><span class=\"number\"> 5</span></h2>\n            <p>Total Clients</p>\n          </div>\n        </div>\n        <div class=\"col-xs-4 col-sm-4\">\n          <div class=\"stat_no wow bounceInLeft\" data-wow-duration=\"1s\" data-wow-delay=\".5s\"\n            style=\"visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: bounceInLeft;\">\n            <h2><i class=\"icon-people\"></i><span class=\"number\"> 10</span></h2>\n            <p>Team Strength</p>\n          </div>\n        </div>\n        <div class=\"col-xs-4 col-sm-4\">\n          <div class=\"stat_no wow bounceInRight\" data-wow-duration=\"1s\" data-wow-delay=\".5s\"\n            style=\"visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: bounceInRight;\">\n            <h2><i class=\"icon-trophy\"></i><span class=\"number\"> 10</span></h2>\n            <p>Applications Coded</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Best Web & Mobile Application Development Company Guntur - monave');
        this.metaService.updateTag({ name: 'description', content: 'monave conveys extensive web services extending from custom web architecture to development of complex web frameworks and versatile applications that supply different needs' });
        this.metaService.updateTag({ name: 'og:description', content: 'monave conveys extensive web services extending from custom web architecture to development of complex web frameworks and versatile applications that supply different needs' });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-header\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" id=\"header\" data-spy=\"affix\"\n    data-offset-top=\"100\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/home\"></a>\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n        <ul class=\"nav navbar-nav center-block navbar-right\">\n          <li><a routerLinkActive=\"active\" routerLink=\"/home\"> Home</a>\n          </li>\n          <li><a routerLinkActive=\"active\" routerLink=\"/aboutus\">About Us</a></li>\n          <li><a routerLinkActive=\"active\" routerLink=\"/services\">Services</a></li>\n          <li><a routerLinkActive=\"active\" routerLink=\"/careers\">Careers</a></li>\n          <li><a routerLinkActive=\"active\" routerLink=\"/contact\">Contact Us</a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-rocket{\n  margin-left:.2rem;\n}\na{\n  margin-left:0;\n}\n.content p{\n  text-align: justify;\n}\n.each-program:hover a.quotebtn{\n  background: #fff;\n  color:#14b6e6\n}\n.each-program:hover h3 span:before{\n  background:#fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1yb2NrZXR7XG4gIG1hcmdpbi1sZWZ0Oi4ycmVtO1xufVxuYXtcbiAgbWFyZ2luLWxlZnQ6MDtcbn1cbi5jb250ZW50IHB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uZWFjaC1wcm9ncmFtOmhvdmVyIGEucXVvdGVidG57XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiMxNGI2ZTZcbn1cbi5lYWNoLXByb2dyYW06aG92ZXIgaDMgc3BhbjpiZWZvcmV7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"services-page\">\n  <!-- Our Programs -->\n  <div class=\"programs\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"title-section\">\n            <div class=\"title-content\">\n              <h2 class=\"wow slideInUp\" data-wow-delay=\".1s\"><span>Our <i>Services</i></span></h2>\n            </div>\n          </div>\n          <div class=\"programs-list\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"each-program wow slideInUp\">\n                  <div class=\"content\">\n                    <h3><span>Training & Certification</span></h3>\n                    <p>We train students or early professionals on modern technologies and will provide the certification after successful completion of the traning. To be mention we teach in a way that you learn while developing some realworld application.</p>\n                    <p><a routerLink=\"/contact\" type=\"submit\" class=\"btn quotebtn btn-info\">\n                    Intrested..! Contact <i class=\"icon-rocket\"></i> </a></p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"each-program wow slideInUp\">\n                  <div class=\"content\">\n                    <h3><span>Web Design</span></h3>\n                    <p>Give your website a professional look and feel with our top web design services. We create effective, compelling websites with attractive & user-centered designs. Our web design services are considered top notch by our clients.</p>\n                    <p><a routerLink=\"/contact\" type=\"submit\" class=\"btn quotebtn btn-info\">\n                      Intrested..! Contact <i class=\"icon-rocket\"></i> </a></p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"each-program wow slideInUp\">\n                  <div class=\"content\">\n                    <h3><span>Web App Development</span></h3>\n                    <p>To meet your industry needs, we cater tailor-made robust user experience and deliver the top-notch, Highly innovative, feature-rich websites across the worlds of startups and enterprise fragment with our captivating functionality.</p>\n                    <p><a routerLink=\"/contact\" type=\"submit\" class=\"btn quotebtn btn-info\">\n                      Intrested..! Contact <i class=\"icon-rocket\"></i> </a></p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"each-program wow slideInUp\">\n                  <div class=\"content\">\n                    <h3><span>Mobile App Development</span></h3>\n                    <p>We have built hybrid mobiles apps for our customers from Health, Education, Real Estate & Hospitality sectors. We are specialists in building hybrid mobile apps powered by Ionic Framework with angular and as well React Native with custom server side application APIs.</p>\n                    <p><a routerLink=\"/contact\" type=\"submit\" class=\"btn quotebtn btn-info\">\n                      Intrested..! Contact <i class=\"icon-rocket\"></i> </a></p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"each-program wow slideInUp\">\n                  <div class=\"content\">\n                    <h3><span>SEO & Digital Marketing</span></h3>\n                    <p>As a professional SEO consultants we are committed to give the ROI search engine ranking results to our clients. Our experts have several years of experience in White Hat SEO Techniques and Search Engines Reverse Engineering. Our professional search engine optimization services will give you the high ranking and are committed for maximize your revenue from your online business.</p>\n                    <p><a routerLink=\"/contact\" type=\"submit\" class=\"btn quotebtn btn-info\">\n                      Intrested..! Contact <i class=\"icon-rocket\"></i> </a></p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"each-program wow slideInUp\">\n                  <div class=\"content\">\n                    <h3><span>Web Hosting</span></h3>\n                    <p>We are having partnerships with one of the best website hosting providers. We will provide <br />Domain Name registration<br /> VPS Servers <br /> Dedicated Servers <br />Shared hosting etc.</p>\n                    <p><a routerLink=\"/contact\" type=\"submit\" class=\"btn quotebtn btn-info\">\n                      Intrested..! Contact <i class=\"icon-rocket\"></i> </a></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Services - Web & Mobile Applications');
        this.metaService.updateTag({ name: 'description', content: 'If you are looking for the first-class talent to code your custom software or a compelling website or a mobile app, we are definitely the top contenders.Some of our Key Services:Web Designing,Web Application Development,Mobile Application Development,Web Hosting' });
        this.metaService.updateTag({ name: 'og:description', content: 'If you are looking for the first-class talent to code your custom software or a compelling website or a mobile app, we are definitely the top contenders.Some of our Key Services:Web Designing,Web Application Development,Mobile Application Development,Web Hosting' });
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/directives/resume-validate.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/resume-validate.directive.ts ***!
  \*********************************************************/
/*! exports provided: ResumeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeValidator", function() { return ResumeValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



// validation function
var resumeValidator = function (c) {
    if (c.value) {
        var fileExtension = c.value.split('.').pop();
        if (fileExtension == "pdf" || fileExtension == "docx" || fileExtension == "doc") {
            return null;
        }
        else {
            return {
                accept: {
                    valid: false
                }
            };
        }
    }
};
var ResumeValidator = /** @class */ (function () {
    function ResumeValidator() {
    }
    ResumeValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[resumevalidate]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useValue: resumeValidator, multi: true }
            ]
        })
    ], ResumeValidator);
    return ResumeValidator;
}());



/***/ }),

/***/ "./src/app/services/client-query.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/client-query.service.ts ***!
  \**************************************************/
/*! exports provided: ClientQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientQueryService", function() { return ClientQueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/config/config */ "./src/assets/config/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ClientQueryService = /** @class */ (function () {
    function ClientQueryService(db, http) {
        this.db = db;
        this.http = http;
        this.clientQueryCollection = this.db.list('/clientquries');
        this.previousQuries = this.clientQueryCollection.valueChanges();
    }
    ClientQueryService.prototype.store = function (data) {
        this.clientQueryCollection.push(data);
        return this.sendEmail(data);
    };
    ClientQueryService.prototype.sendEmail = function (data) {
        return this.http.post(_assets_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].api + "/client-query", data);
    };
    ClientQueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ClientQueryService);
    return ClientQueryService;
}());



/***/ }),

/***/ "./src/app/services/general-query.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/general-query.service.ts ***!
  \***************************************************/
/*! exports provided: GeneralQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralQueryService", function() { return GeneralQueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assets_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/config/config */ "./src/assets/config/config.ts");





var GeneralQueryService = /** @class */ (function () {
    function GeneralQueryService(db, http) {
        this.db = db;
        this.http = http;
        this.generalQueryCollection = this.db.list('/generalquries');
        this.previousQuries = this.generalQueryCollection.valueChanges();
    }
    GeneralQueryService.prototype.store = function (data) {
        this.generalQueryCollection.push(data);
        return this.sendEmail(data);
    };
    GeneralQueryService.prototype.sendEmail = function (data) {
        return this.http.post(_assets_config_config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].api + "/general-query", data);
    };
    GeneralQueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GeneralQueryService);
    return GeneralQueryService;
}());



/***/ }),

/***/ "./src/app/services/job-application.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/job-application.service.ts ***!
  \*****************************************************/
/*! exports provided: JobApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobApplicationService", function() { return JobApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/config/config */ "./src/assets/config/config.ts");







var JobApplicationService = /** @class */ (function () {
    function JobApplicationService(http, storage, db) {
        this.http = http;
        this.storage = storage;
        this.db = db;
        this.jobApplicationsCollection = this.db.list("/job-application-collection");
    }
    JobApplicationService.prototype.save = function (applicationData, files) {
        var _this = this;
        var file = files.item(0);
        // reading the file as data uri to send to the backend
        // const reader = new FileReader();
        // reader.onload = function(){
        //   applicationData['resumeURI'] = this.result;
        // }
        // reader.readAsDataURL(file);
        // upload the resume file to firestorage and get the url
        var path = "resume/" + new Date().getTime() + "_" + file.name;
        var customMetadata = { from: applicationData.name, email: applicationData.email };
        var fileRef = this.storage.ref(path);
        this.task = this.storage.upload(path, file, { customMetadata: customMetadata });
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { })).subscribe(function (data) {
            if (data.bytesTransferred === data.totalBytes) {
                console.log(data);
                return _this.storage.ref(path).getDownloadURL().subscribe(function (url) {
                    console.log(url);
                    applicationData['resume_name'] = path;
                    applicationData['resume_url'] = url;
                    _this.jobApplicationsCollection.push(applicationData);
                    _this.sendEmail(applicationData).subscribe(function (apiResponse) {
                        console.log(apiResponse);
                        return true;
                    });
                });
            }
        });
    };
    JobApplicationService.prototype.sendEmail = function (applicationData) {
        return this.http.post(_assets_config_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].api + "/job-application", applicationData);
    };
    JobApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], JobApplicationService);
    return JobApplicationService;
}());



/***/ }),

/***/ "./src/assets/config/config.ts":
/*!*************************************!*\
  !*** ./src/assets/config/config.ts ***!
  \*************************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
    api: "https://monave-backend.herokuapp.com/api/v1"
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD-NvR9M3Y3r8mpxQ3u_4z4J3I6-8PAfL8",
        authDomain: "angularapp-venkat.firebaseapp.com",
        databaseURL: "https://angularapp-venkat.firebaseio.com",
        projectId: "angularapp-venkat",
        storageBucket: "angularapp-venkat.appspot.com",
        messagingSenderId: "949773866996"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mohananagavenkatsayempu/Documents/monave/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map