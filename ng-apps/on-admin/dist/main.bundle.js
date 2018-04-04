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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_settings_main_settings_component__ = __webpack_require__("../../../../../src/app/main-settings/main-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articles_articles_component__ = __webpack_require__("../../../../../src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_form_article_form_component__ = __webpack_require__("../../../../../src/app/article-form/article-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tags_tags_component__ = __webpack_require__("../../../../../src/app/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__render_templates_render_templates_component__ = __webpack_require__("../../../../../src/app/render-templates/render-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__email_templates_email_templates_component__ = __webpack_require__("../../../../../src/app/email-templates/email-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__custom_fields_custom_fields_component__ = __webpack_require__("../../../../../src/app/custom-fields/custom-fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__importer_importer_component__ = __webpack_require__("../../../../../src/app/importer/importer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'articles', component: __WEBPACK_IMPORTED_MODULE_4__articles_articles_component__["a" /* ArticlesComponent */] },
    { path: 'article/:id', component: __WEBPACK_IMPORTED_MODULE_5__article_form_article_form_component__["a" /* ArticleFormComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_6__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'tags', component: __WEBPACK_IMPORTED_MODULE_7__tags_tags_component__["a" /* TagsComponent */] },
    { path: 'render-templates', component: __WEBPACK_IMPORTED_MODULE_8__render_templates_render_templates_component__["a" /* RenderTemplatesComponent */] },
    { path: 'custom-fields', component: __WEBPACK_IMPORTED_MODULE_10__custom_fields_custom_fields_component__["a" /* CustomFieldsComponent */] },
    { path: 'email-templates', component: __WEBPACK_IMPORTED_MODULE_9__email_templates_email_templates_component__["a" /* EmailTemplatesComponent */] },
    { path: 'main-settings', component: __WEBPACK_IMPORTED_MODULE_2__main_settings_main_settings_component__["a" /* MainSettingsComponent */] },
    { path: 'import', component: __WEBPACK_IMPORTED_MODULE_11__importer_importer_component__["a" /* ImporterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"open-news-app\">\r\n  <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\r\n    <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Open News Admin</a>\r\n    <input id=\"txtArticleSearch\" class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search Articles\" (keyup)=\"doSearch($event)\" aria-label=\"Search\" >\r\n    <ul class=\"navbar-nav px-3\">\r\n      <li class=\"nav-item text-nowrap\">\r\n        <a class=\"nav-link\" target=\"_top\" href=\"{{getLiveModuleUrl()}}\">View Live Module</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row \">\r\n      <div class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar \">\r\n        <div class=\"sidebar-sticky\">\r\n          <ul class=\"nav flex-column\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/dashboard\">Dashboard</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/articles\">Articles</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/categories\">Categories</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/tags\">Tags</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/custom-fields\">Custom Fields</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/email-templates\">Email Templates</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/render-templates\">Render Templates</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/main-settings\">Settings</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/import\">Import</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\">\r\n        <ngx-loading-bar></ngx-loading-bar>\r\n        <router-outlet></router-outlet>\r\n        <!--<app-messages></app-messages>-->\r\n      </main>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".open-news-app .navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n\n.open-news-app .navbar .form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.open-news-app .navbar .form-control-dark:focus {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);\n            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);\n    background-color: #fff;\n    color: #495057;\n    outline: 0; }\n\n.open-news-app .navbar.navbar-dark {\n  background-color: #343a40 !important; }\n\n.open-news-app .sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px;\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.open-news-app .sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  padding: 0;\n  -webkit-box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n          box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.open-news-app .sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n    display: block;\n    padding: .5rem 1rem; }\n\n.open-news-app .sidebar .nav-link.active {\n      color: #007bff;\n      background-color: rgba(0, 0, 0, 0.15); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__context_context_service__ = __webpack_require__("../../../../../src/app/context/context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnn_app_component__ = __webpack_require__("../../../../../src/app/dnn-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(element, context, settingsService, route, router, baseHref) {
        var _this = _super.call(this, element, context) || this;
        _this.settingsService = settingsService;
        _this.route = route;
        _this.router = router;
        _this.baseHref = baseHref;
        _this.title = 'app';
        _this.settingsService.setGlobalSettings();
        return _this;
    }
    AppComponent.prototype.getLiveModuleUrl = function () {
        return this.settingsService.getCurrentSettings().PageTabUrl;
    };
    AppComponent.prototype.doSearch = function (e) {
        if (e.keyCode == 13) {
            this.router.navigate(['/articles']);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
        //export class AppComponent {
        //}
        ,
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["APP_BASE_HREF"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__context_context_service__["a" /* Context */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["g" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */], String])
    ], AppComponent);
    return AppComponent;
}(__WEBPACK_IMPORTED_MODULE_3__dnn_app_component__["a" /* DnnAppComponent */]));



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getBaseHref */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__context_context_service__ = __webpack_require__("../../../../../src/app/context/context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__context_dev_context__ = __webpack_require__("../../../../../src/app/context/dev-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_dnn_interceptor__ = __webpack_require__("../../../../../src/app/http/dnn.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_settings_main_settings_component__ = __webpack_require__("../../../../../src/app/main-settings/main-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__articles_articles_component__ = __webpack_require__("../../../../../src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tags_tags_component__ = __webpack_require__("../../../../../src/app/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_bootstrap_form_validation__ = __webpack_require__("../../../../ng-bootstrap-form-validation/esm5/ng-bootstrap-form-validation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_file_input__ = __webpack_require__("../../../../ng2-file-input/dist/ng2-file-input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_progress_http__ = __webpack_require__("../../../../angular-progress-http/angular-progress-http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_loading_bar_http_client__ = __webpack_require__("../../../../@ngx-loading-bar/http-client/@ngx-loading-bar/http-client.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngx_loading_bar_router__ = __webpack_require__("../../../../@ngx-loading-bar/router/@ngx-loading-bar/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_type_ahead__ = __webpack_require__("../../../../ngx-type-ahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_type_ahead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ngx_type_ahead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular5_data_table__ = __webpack_require__("../../../../angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__category_form_category_form_component__ = __webpack_require__("../../../../../src/app/category-form/category-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__article_form_article_form_component__ = __webpack_require__("../../../../../src/app/article-form/article-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_file_input_input_file_component__ = __webpack_require__("../../../../../src/app/shared/file-input/input-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__article_file_article_file_component__ = __webpack_require__("../../../../../src/app/article-file/article-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__render_templates_render_templates_component__ = __webpack_require__("../../../../../src/app/render-templates/render-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__email_templates_email_templates_component__ = __webpack_require__("../../../../../src/app/email-templates/email-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__custom_fields_custom_fields_component__ = __webpack_require__("../../../../../src/app/custom-fields/custom-fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_dynamic_form_dynamic_form_module__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__importer_importer_component__ = __webpack_require__("../../../../../src/app/importer/importer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//import { InputFileModule } from 'ngx-input-file';




















function getBaseHref(platformLocation) {
    return platformLocation.getBaseHrefFromDOM();
}
//export function get_settings(appLoadService: SettingsService) {
//  return () => appLoadService.GetSettingsPromise();
//}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_settings_main_settings_component__["a" /* MainSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__articles_articles_component__["a" /* ArticlesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tags_tags_component__["a" /* TagsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__category_form_category_form_component__["a" /* CategoryFormComponent */],
                __WEBPACK_IMPORTED_MODULE_31__article_form_article_form_component__["a" /* ArticleFormComponent */],
                __WEBPACK_IMPORTED_MODULE_32__shared_file_input_input_file_component__["a" /* InputFileComponent */],
                __WEBPACK_IMPORTED_MODULE_33__article_file_article_file_component__["a" /* ArticleFileComponent */],
                __WEBPACK_IMPORTED_MODULE_34__render_templates_render_templates_component__["a" /* RenderTemplatesComponent */],
                __WEBPACK_IMPORTED_MODULE_35__email_templates_email_templates_component__["a" /* EmailTemplatesComponent */],
                __WEBPACK_IMPORTED_MODULE_36__custom_fields_custom_fields_component__["a" /* CustomFieldsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__importer_importer_component__["a" /* ImporterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_37__shared_dynamic_form_dynamic_form_module__["a" /* DynamicFormModule */],
                __WEBPACK_IMPORTED_MODULE_28_angular5_data_table__["a" /* DataTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_26_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_16_ng_bootstrap_form_validation__["a" /* NgBootstrapFormValidationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20_angular_progress_http__["b" /* ProgressHttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_29__shared__["h" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular_tree_component__["b" /* TreeModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_file_input__["a" /* Ng2FileInputModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23__ngx_loading_bar_http_client__["a" /* LoadingBarHttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__ngx_loading_bar_router__["a" /* LoadingBarRouterModule */],
                __WEBPACK_IMPORTED_MODULE_25_ngx_type_ahead__["TypeaheadModule"],
                __WEBPACK_IMPORTED_MODULE_27_angular_sortablejs__["SortablejsModule"].forRoot({ animation: 150 })
                //AppLoadModule
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__context_dev_context__["a" /* DevContext */],
                __WEBPACK_IMPORTED_MODULE_3__context_context_service__["a" /* Context */],
                __WEBPACK_IMPORTED_MODULE_5__http_dnn_interceptor__["a" /* DnnInterceptor */],
                __WEBPACK_IMPORTED_MODULE_29__shared__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_29__shared__["g" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_29__shared__["c" /* CategoriesService */],
                __WEBPACK_IMPORTED_MODULE_29__shared__["f" /* HelperService */],
                __WEBPACK_IMPORTED_MODULE_29__shared__["b" /* ArticlesService */],
                __WEBPACK_IMPORTED_MODULE_29__shared__["i" /* TagsService */],
                __WEBPACK_IMPORTED_MODULE_29__shared__["d" /* CustomFieldsService */],
                __WEBPACK_IMPORTED_MODULE_29__shared__["e" /* FilesService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["APP_BASE_HREF"],
                    useFactory: getBaseHref,
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["PlatformLocation"]]
                }
                //Globals
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/article-file/article-file.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{fileName()}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div ngForm [formGroup]=\"fileForm\">\r\n    <fieldset [disabled]=\"isSubmitting\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"image-container\" *ngIf=\"isImage()\">\r\n          <img src=\"{{imageUrl()}}&maxwidth=800&maxheight=800\" />\r\n        </div>\r\n        <div class=\"icon-container\" *ngIf=\"!isImage()\">\r\n          <i class=\"fas {{fileIconClass()}}\"></i>\r\n        </div>\r\n        <hr />\r\n        <div class=\"form-group\">\r\n          <input formControlName=\"Title\" type=\"text\" class=\"form-control\"\r\n                 name=\"txtTitle\" id=\"txtTitle\" placeholder=\"Title\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <textarea formControlName=\"Description\" rows=\"3\" class=\"form-control\"\r\n                    name=\"txtDescription\" id=\"txtDescription\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"c('Close click')\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeFileHandler();c('Close click')\">\r\n        <i class=\"far fa-trash-alt\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<div class=\"image-container\" *ngIf=\"isImage()\" (click)=\"open(content)\">\r\n  <img src=\"{{imageUrl()}}&maxwidth=300&maxheight=300\" />\r\n</div>\r\n<div class=\"icon-container\" *ngIf=\"!isImage()\" (click)=\"open(content)\">\r\n  <i class=\"fas {{fileIconClass()}}\"></i>\r\n  <p>{{fileName()}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/article-file/article-file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-modal .image-container img {\n  display: block;\n  width: 100%; }\n\n.file-modal .icon-container {\n  display: block; }\n\n.file-modal .icon-container svg {\n    display: block;\n    width: 100%;\n    height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-file/article-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleFileComponent = /** @class */ (function () {
    function ArticleFileComponent(modalService, fb) {
        this.modalService = modalService;
        this.fb = fb;
        this.isSubmitting = false;
        this.removeFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    //modalref: NgbModalRef;
    ArticleFileComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'file-modal' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ArticleFileComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ArticleFileComponent.prototype.fileInfoIsNull = function () {
        return this.fileInfo == null;
    };
    ArticleFileComponent.prototype.removeFileHandler = function () {
        if (confirm('Delete. Are you sure?')) {
            this.removeFile.emit(this.index);
        }
    };
    ArticleFileComponent.prototype.fileIconClass = function () {
        switch (this.fileInfo.Name.substr(this.fileInfo.Name.lastIndexOf('.') + 1)) {
            case "ppt":
                return "fa-file-powerpoint";
            case "pptx":
                return "fa-file-powerpoint";
            case "zip":
                return "fa-file-archive";
            case "rar":
                return "fa-file-archive";
            case "pdf":
                return "fa-file-pdf";
            case "docx":
                return "fa-file-word";
            case "doc":
                return "fa-file-word";
            case "xlsx":
                return "fa-file-excel";
            case "xls":
                return "fa-file-excel";
            default:
                return "fa-file";
        }
    };
    ArticleFileComponent.prototype.isImage = function () {
        if (this.fileInfoIsNull()) {
            return false;
        }
        else {
            return this.fileInfo.IsImage;
        }
    };
    ArticleFileComponent.prototype.fileName = function () {
        if (this.fileInfoIsNull()) {
            return "";
        }
        else {
            return this.fileInfo.Name;
        }
    };
    ArticleFileComponent.prototype.imageUrl = function () {
        if (this.fileInfoIsNull()) {
            return false;
        }
        else {
            return this.fileInfo.url;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fileInfo'),
        __metadata("design:type", Object)
    ], ArticleFileComponent.prototype, "fileInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('index'),
        __metadata("design:type", Number)
    ], ArticleFileComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], ArticleFileComponent.prototype, "fileForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('removeFile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ArticleFileComponent.prototype, "removeFile", void 0);
    ArticleFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            //moduleId: module.id,
            selector: 'app-article-file',
            template: __webpack_require__("../../../../../src/app/article-file/article-file.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/article-file/article-file.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], ArticleFileComponent);
    return ArticleFileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/article-form/article-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngForm [formGroup]=\"articleForm\" (validSubmit)=\"onSubmit()\" validate>\r\n  <fieldset [disabled]=\"isSubmitting\">\r\n    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n      <h2>Article</h2>\r\n      <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n        <div class=\"btn-group mr-2\">\r\n          <a *ngIf=\"deleteable()\" target=\"_blank\" class=\"btn btn-sm btn-outline-secondary\" href=\"{{article.vwURL}}\">Preview</a>\r\n          <button class=\"btn btn-sm btn-primary\" (click)=\"clickSaveDraft()\">Save as draft</button>\r\n          <button class=\"btn btn-sm btn-success\" (click)=\"clickPublish()\">Publish</button>\r\n          <button *ngIf=\"deleteable()\" class=\"btn btn-sm btn-danger\" (click)=\"clickDelete()\">Delete</button>\r\n          <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"clickCancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\"></div>\r\n      <div class=\"col-8\">\r\n        <div class=\"article-form\">\r\n          <div class=\"form-group\">\r\n            <input (blur)=\"titleChanged($event)\" formControlName=\"Title\" type=\"text\" class=\"form-control form-control-lg\"\r\n                   name=\"txtTitle\" id=\"txtTitle\" placeholder=\"Title\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtDescription\">Summary</label>\r\n            <textarea formControlName=\"Summary\" rows=\"4\" class=\"form-control\"\r\n                      name=\"txtSummary\" id=\"txtSummary\" placeholder=\"Summary\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtDescription\">Body</label>\r\n            <textarea formControlName=\"Body\" rows=\"10\" class=\"form-control\"\r\n                      name=\"txtBody\" id=\"txtBody\" placeholder=\"Body\" required></textarea>\r\n            <small id=\"txtBodyHelpBlock\" class=\"form-text text-muted\">\r\n              You may use MarkDown for your article body\r\n            </small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"finputImages\">Images</label>\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"uploaded\" *ngIf=\"articleForm.controls.Images.controls.length > 0\">\r\n                  <div formArrayName=\"Images\" [sortablejsOptions]=\"imageSortableOpts\" [sortablejs]=\"articleForm.controls.Images\" class=\"image-preview\">\r\n                    <div class=\"image-preview-item\" *ngFor=\"let file of articleForm.controls.Images.controls; let i = index\">\r\n                      <div class=\"panel-body\" [formGroupName]=\"i\">\r\n                        <app-article-file [group]=\"articleForm.controls.Images.controls[i]\"\r\n                                          [fileInfo]=\"imageUploads[i]\"\r\n                                          [index]=\"i\"\r\n                                          (removeFile)=\"onRemoveFile('Images',$event)\"\r\n                                          >\r\n                        </app-article-file>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <input-file\r\n                            [inputAccept]=\"joinForInputAccept(allowedImages())\"\r\n                            [extensions]=\"allowedImages()\"\r\n                            multiple=\"true\"\r\n                            fileDisplayType=\"images\"\r\n                            [uploadFolder]=\"imageFolder()\"\r\n                            (fileUploaded)=\"onImageUploaded($event)\"\r\n                            ></input-file>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"finputImages\">Files</label>\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"uploaded\" *ngIf=\"articleForm.controls.Files.controls.length > 0\">\r\n                  <div formArrayName=\"Files\" [sortablejs]=\"articleForm.controls.Files\" class=\"image-preview\">\r\n                    <div class=\"image-preview-item\" *ngFor=\"let file of articleForm.controls.Files.controls; let i = index\">\r\n                      <div class=\"panel-body\" [formGroupName]=\"i\">\r\n                        <app-article-file [group]=\"articleForm.controls.Files.controls[i]\"\r\n                                          [fileInfo]=\"fileUploads[i]\"\r\n                                          [index]=\"i\"\r\n                                          (removeFile)=\"onRemoveFile('Files',$event)\"\r\n                                          >\r\n                        </app-article-file>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <input-file [inputAccept]=\"joinForInputAccept(allowedFiles())\"\r\n                            [extensions]=\"allowedFiles()\"\r\n                            multiple=\"true\"\r\n                            fileDisplayType=\"files\"\r\n                            [uploadFolder]=\"fileFolder()\"\r\n                            (fileUploaded)=\"onFileUploaded($event)\"></input-file>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtCategories\">Categories</label>\r\n            <type-ahead formControlName=\"Categories\" [suggestions]=\"obs_allcategories$\"\r\n                        placeholder=\"Categories\" class=\"form-control\" \r\n                        [multi]=\"true\" [complex]=\"true\" nameField=\"Name\" idField=\"CategoryID\" >\r\n            </type-ahead>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtTags\">Tags</label>\r\n            <type-ahead formControlName=\"Tags\" [suggestions]=\"obs_strTags$\"\r\n                        placeholder=\"Tags\"\r\n                        class=\"form-control\"\r\n                        [multi]=\"true\" [custom]=\"true\"></type-ahead>\r\n            <small id=\"txtTagsHelpBlock\" class=\"form-text text-muted\">\r\n              Start typing your tags, select existing tags or hit enter to add a new tag.\r\n            </small>\r\n          </div>\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col-md\">\r\n              <div class=\"form-group\">\r\n                <label>Author</label>\r\n                <type-ahead formControlName=\"Author\" [suggestions]=\"obs_authors$\"\r\n                            placeholder=\"Select the author\"\r\n                            class=\"form-control\"\r\n                            [complex]=\"true\"\r\n                            ></type-ahead>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Featured</label>\r\n                <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioFeatured\" formControlName=\"IsFeatured\">\r\n                  <label ngbButtonLabel class=\"btn-outline-primary\">\r\n                    <input ngbButton type=\"radio\" [value]=true> Yes\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-outline-secondary\">\r\n                    <input ngbButton type=\"radio\" [value]=false> No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Auto Archive</label>\r\n                <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioAutoArchive\" formControlName=\"AutoArchive\">\r\n                  <label ngbButtonLabel class=\"btn-outline-primary\">\r\n                    <input ngbButton type=\"radio\" [value]=true> Yes\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-outline-secondary\">\r\n                    <input ngbButton type=\"radio\" [value]=false> No\r\n                  </label>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md\">\r\n              <div class=\"form-group\">\r\n                <label>Publish</label>\r\n                <div class=\"input-group date-time\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                      <i class=\"far fa-calendar-alt\"></i>\r\n                    </button>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                         name=\"dpPublish\" formControlName=\"PublishDate\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" id=\"\">\r\n                      <i class=\"far fa-clock\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <ngb-timepicker formControlName=\"PublishTime\" [spinners]=\"false\"></ngb-timepicker>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"ShowArchive()\" class=\"form-group\">\r\n                <label>Archive</label>\r\n                <div class=\"input-group date-time\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d2.toggle()\" type=\"button\">\r\n                      <i class=\"far fa-calendar-alt\"></i>\r\n                    </button>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                         name=\"dpArchive\" formControlName=\"ArchiveDate\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" id=\"\">\r\n                      <i class=\"far fa-clock\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <ngb-timepicker formControlName=\"ArchiveTime\" [spinners]=\"false\"></ngb-timepicker>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <div class=\"custom-fields\" formGroupName=\"CustomTypes\">\r\n            <h5>Custom Fields</h5>\r\n            <div class=\"card\" *ngFor=\"let cDef of customDefs; let i = index\">\r\n              <div class=\"card-body\" [formGroupName]=\"cDef.TypeName\"> \r\n                <h6 class=\"card-title\">{{cDef.Name}}</h6>\r\n                <dynamic-form\r\n                    \r\n                    [config]=\"cDef.Fields\"\r\n                    [form]=\"articleForm.controls['CustomTypes'].controls[cDef.TypeName]\">\r\n                </dynamic-form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <h5>SEO</h5>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtUrl\">URL Slug</label>\r\n            <input (blur)=\"urlChanged($event)\" formControlName=\"URL\" type=\"text\" class=\"form-control\"\r\n                   name=\"txtUrl\" id=\"txtUrl\" placeholder=\"Url\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtMetaTitle\">Meta Title</label>\r\n            <input formControlName=\"MetaTitle\" type=\"text\" class=\"form-control\"\r\n                   name=\"txtMetaTitle\" id=\"txtMetaTitle\" placeholder=\"Meta Title\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtMetaDescription\">Meta Description</label>\r\n            <textarea formControlName=\"MetaDescription\" rows=\"4\" class=\"form-control\"\r\n                      name=\"txtMetaDescription\" id=\"txtMetaDescription\" placeholder=\"Meta Description\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtMetaKeywords\">Meta Keywords</label>\r\n            <textarea formControlName=\"MetaKeywords\" rows=\"3\" class=\"form-control\"\r\n                      name=\"txtMetaKeywords\" id=\"txtMetaKeywords\" placeholder=\"Meta Keywords\"></textarea>\r\n          </div>\r\n          <hr />\r\n          <h5>Other</h5>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtPageHeadText\">Page Header Text</label>\r\n            <textarea formControlName=\"PageHeadText\" rows=\"3\" class=\"form-control\"\r\n                      name=\"txtPageHeadText\" id=\"txtPageHeadText\" placeholder=\"Page Header Text\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        \r\n      </div>\r\n    </div>\r\n    <app-list-errors [errors]=\"errors\"></app-list-errors>\r\n    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-top\">\r\n      <div></div>\r\n      <div class=\"btn-toolbar mt-2 mb-2 mb-md-0\">\r\n        <div class=\"btn-group mr-2\">\r\n          <button class=\"btn btn-primary\" (click)=\"clickSaveDraft()\">Save as draft</button>\r\n          <button class=\"btn btn-success\" (click)=\"clickPublish()\">Publish</button>\r\n          <button *ngIf=\"deleteable()\" class=\"btn btn-danger\" (click)=\"clickDelete()\">Delete</button>\r\n          <button class=\"btn btn-outline-secondary\" (click)=\"clickCancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  <div *ngIf=\"isDebugMode()\">\r\n    <fieldset>\r\n      <legend>articleForm Value:</legend>\r\n      <pre>{{ articleForm.value | json:2 }}</pre>\r\n    </fieldset>\r\n    <fieldset>\r\n      <legend>article Value:</legend>\r\n      <pre>{{ article | json:2 }}</pre>\r\n    </fieldset>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/article-form/article-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article-form .uploaded .image-preview {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .article-form .uploaded .image-preview .image-preview-item {\n    min-width: 150px;\n    width: calc(20% - 10px);\n    height: 150px;\n    overflow: hidden;\n    margin: 5px;\n    background: #ececec; }\n  .article-form .uploaded .image-preview .image-preview-item app-article-file {\n      display: block; }\n  .article-form .uploaded .image-preview .image-preview-item .panel-body {\n      margin: 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: calc(100% - 10px);\n      overflow: hidden; }\n  .article-form .uploaded .image-preview .image-preview-item .panel-body .image-container {\n        display: block; }\n  .article-form .uploaded .image-preview .image-preview-item .panel-body .image-container img {\n          cursor: pointer;\n          display: block;\n          width: 100%; }\n  .article-form .uploaded .image-preview .image-preview-item .panel-body .icon-container {\n        display: block;\n        cursor: pointer; }\n  .article-form .uploaded .image-preview .image-preview-item .panel-body .icon-container svg {\n          display: block;\n          width: 100%;\n          height: 50px; }\n  .article-form .uploaded .image-preview .image-preview-item .panel-body .icon-container p {\n          margin-top: 5px;\n          text-align: center;\n          font-size: 0.7em;\n          text-overflow: ellipsis; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-form/article-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_progress_http__ = __webpack_require__("../../../../angular-progress-http/angular-progress-http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { NgForm } from '@angular/forms';






var ArticleFormComponent = /** @class */ (function () {
    function ArticleFormComponent(route, router, helperService, toastr, settingsService, customFieldsService, tagsService, categoriesService, articlesService, filesService, fb, progressHttp, changeDetectorRef) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.helperService = helperService;
        this.toastr = toastr;
        this.settingsService = settingsService;
        this.customFieldsService = customFieldsService;
        this.tagsService = tagsService;
        this.categoriesService = categoriesService;
        this.articlesService = articlesService;
        this.filesService = filesService;
        this.fb = fb;
        this.progressHttp = progressHttp;
        this.changeDetectorRef = changeDetectorRef;
        this.imageUploads = [];
        this.fileUploads = [];
        this.customDefs = [];
        this.article = {};
        this.errors = {};
        this.isSubmitting = true;
        this.imageSortableOpts = {
            onEnd: function (ev) {
                _this.imageUploads.splice(ev.newIndex, 0, _this.imageUploads.splice(ev.oldIndex, 1)[0]);
                //[this.imageUploads[ev.oldIndex], this.imageUploads[ev.newIndex]] = [this.imageUploads[ev.newIndex], this.imageUploads[ev.oldIndex]];
                _this.changeDetectorRef.detectChanges();
            }
        };
    }
    ArticleFormComponent.prototype.initForm = function () {
        this.articleForm = this.fb.group({
            Title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)])],
            Summary: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)])],
            Body: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            MetaTitle: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)])],
            MetaDescription: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)])],
            MetaKeywords: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)])],
            PageHeadText: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(500)])],
            //URL: ['', Validators.compose([Validators.required, Validators.maxLength(255), this.validateUrlNotInUse.bind(this)])],
            URL: ['', {
                    validators: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)]),
                    asyncValidators: this.validateUrlNotInUse.bind(this),
                    updateOn: 'blur'
                }],
            Tags: [''],
            Categories: [''],
            PublishTime: [''],
            PublishDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            ArchiveTime: [''],
            ArchiveDate: [''],
            IsFeatured: ['false'],
            AutoArchive: ['false'],
            Author: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            Images: this.fb.array([]),
            Files: this.fb.array([]),
            CustomTypes: this.fb.group({})
        });
    };
    ArticleFormComponent.prototype.validateUrlNotInUse = function (control) {
        return this.articlesService.validateUrlNotInUse(this.articleId(), control.value);
    };
    ArticleFormComponent.prototype.initFileControl = function (file) {
        if (file == null) {
            return this.fb.group({
                Title: [''],
                Description: [''],
            });
        }
        else {
            return this.fb.group({
                Title: [file.Title],
                Description: [file.Description],
            });
        }
    };
    ArticleFormComponent.prototype.initCustomObjects = function (cDefs) {
        var group = this.articleForm.controls['CustomTypes'];
        if (cDefs == null) {
            return this.fb.group({});
        }
        else {
            for (var i = 0; i < cDefs.length; i++) {
                cDefs[i].Fields.forEach(function (f, i) {
                    if (f.validators) {
                        console.log(f.validators);
                        f.validators.forEach(function (v, ii) {
                            //f.validation.push(new Function( eval(v) ));
                        });
                    }
                    //cDefs[i].Fields[i] = f;
                });
                group.addControl(cDefs[i].TypeName, this.fb.group({}));
                //this.addCustomObjectControl(cDefs[i])
            }
        }
    };
    ArticleFormComponent.prototype.initCustomObjectControl = function (cDef) {
        return this.fb.group((_a = {},
            _a[cDef.TypeName] = null,
            _a));
        var _a;
        //if (cDef == null) {
        //  return this.fb.group({
        //    [cDef.TypeName]: this.fb.array([])
        //  });
        //} else {
        //  return this.fb.group({
        //    [cDef.TypeName]: this.fb.array([])
        //  });
        //}
    };
    ArticleFormComponent.prototype.addCustomObjectControl = function (cDef) {
        var control = this.articleForm.controls["CustomTypes"];
        control.push(this.initCustomObjectControl(cDef));
    };
    ArticleFormComponent.prototype.initFileControls = function (controlName, files) {
        if (files == null) {
            return this.fb.array([]);
        }
        else {
            var control = this.articleForm.controls[controlName];
            var diff = (files.length - control.controls.length);
            while (files.length > control.controls.length) {
                this.addFileControl(controlName, null);
            }
        }
    };
    ArticleFormComponent.prototype.addFileControl = function (controlName, file) {
        var control = this.articleForm.controls[controlName];
        control.push(this.initFileControl(file));
    };
    ArticleFormComponent.prototype.addFileControls = function (controlName, files) {
        var _this = this;
        if (files != null) {
            files.forEach(function (f) {
                _this.addFileControl(controlName, f);
            });
        }
    };
    ArticleFormComponent.prototype.onRemoveFile = function (controlName, i) {
        // remove address from the list
        var control = this.articleForm.controls[controlName];
        control.removeAt(i);
        switch (controlName) {
            case 'Images':
                this.imageUploads.splice(i, 1);
                break;
            case 'Files':
                this.fileUploads.splice(i, 1);
                break;
        }
        this.changeDetectorRef.detectChanges();
        //console.log('files removed at:' + i.toString());
    };
    ArticleFormComponent.prototype.onImageUploaded = function (e) {
        var _this = this;
        var fv;
        this.filesService.GetArticleFile(this.articleId, e.fileId).subscribe(function (data) {
            console.log('onImageUploaded');
            console.log(data);
            if (_this.imageUploads.filter(function (obj) { return obj.FileId === data.FileId; }).length == 0) {
                _this.imageUploads.push(data);
                _this.addFileControl('Images', data);
            }
            else {
                _this.toastr.info('Duplicate image. ' + data.Name + ' not added');
            }
        }, function (err) {
            _this.toastr.error('Error getting file from server');
        });
    };
    ArticleFormComponent.prototype.onFileUploaded = function (e) {
        var _this = this;
        var fv;
        this.filesService.GetArticleFile(this.articleId, e.fileId).subscribe(function (data) {
            console.log('onFileUploaded');
            console.log(data);
            if (_this.fileUploads.filter(function (obj) { return obj.FileId === data.FileId; }).length == 0) {
                _this.fileUploads.push(data);
                _this.addFileControl('Files', data);
            }
            else {
                _this.toastr.info('Duplicate file. ' + data.Name + ' not added');
            }
        }, function (err) {
            _this.toastr.error('Error getting file from server');
        });
    };
    ArticleFormComponent.prototype.ModelToForm = function () {
        this.initFileControls('Images', this.article.Images);
        this.initFileControls('Files', this.article.Files);
        this.articleForm.patchValue({
            Title: this.article.Title,
            Summary: this.article.Summary,
            Body: this.article.Body,
            MetaTitle: this.article.MetaTitle,
            MetaDescription: this.article.MetaDescription,
            MetaKeywords: this.article.MetaKeywords,
            PageHeadText: this.article.PageHeadText,
            URL: this.article.URL,
            Tags: this.getTagsFromModel(),
            Categories: this.getCategoriesFromModel(),
            PublishTime: this.GetTimeFromModel(this.article.StartDate),
            PublishDate: this.GetDateFromModel(this.article.StartDate),
            ArchiveTime: this.GetTimeFromModel(this.article.EndDate),
            ArchiveDate: this.GetDateFromModel(this.article.EndDate),
            IsFeatured: this.article.IsFeatured,
            AutoArchive: this.article.AutoArchive,
            Author: this.article.AuthorID,
            Files: this.article.Files,
            Images: this.article.Images,
            CustomTypes: (this.article.CustomTypes == null ? {} : this.article.CustomTypes)
        });
        this.setAuthorTextValue();
    };
    ArticleFormComponent.prototype.FormToModel = function () {
        var f = this.articleForm.value;
        this.updateArticle({
            Title: f.Title,
            Summary: f.Summary,
            Body: f.Body,
            MetaTitle: f.MetaTitle,
            MetaDescription: f.MetaDescription,
            MetaKeywords: f.MetaKeywords,
            PageHeadText: f.PageHeadText,
            URL: f.URL,
            Tags: this.getTagsForModel(f, this.alltags),
            Categories: this.getCategoriesForModel(f, this.allcategories),
            StartDate: this.GetDateTimeFromForm(f.PublishDate, f.PublishTime),
            EndDate: this.GetDateTimeFromForm(f.ArchiveDate, f.ArchiveTime),
            IsFeatured: f.IsFeatured,
            AutoArchive: f.AutoArchive,
            AuthorID: f.Author,
            Files: this.getFilesForModel(f),
            Images: this.getImagesForModel(f),
            CustomTypes: f.CustomTypes
        });
    };
    ArticleFormComponent.prototype.getFilesForModel = function (f) {
        var _this = this;
        if (f.Files == null) {
            return null;
        }
        var files = [];
        f.Files.forEach(function (con, i) {
            files.push(_this.updateFileItemFromControl(con, _this.fileUploads[i]));
        });
        return files;
    };
    ArticleFormComponent.prototype.getImagesForModel = function (f) {
        var _this = this;
        if (f.Images == null) {
            return null;
        }
        var files = [];
        f.Images.forEach(function (con, i) {
            files.push(_this.updateFileItemFromControl(con, _this.imageUploads[i]));
        });
        return files;
    };
    ArticleFormComponent.prototype.updateFileItemFromControl = function (con, file) {
        file.Title = con.Title;
        file.Description = con.Description;
        return file;
    };
    ArticleFormComponent.prototype.setAuthorTextValue = function () {
        var _this = this;
        //Set the textbox value of the typeahead manually.
        if (this.authors != null && this.article != null) {
            var author = this.authors.find(function (a) { return a.id === _this.article.AuthorID; });
            if (author != null) {
                var ic = document.querySelector("[formcontrolname='Author'] input");
                ic.value = author.name;
            }
        }
    };
    ArticleFormComponent.prototype.getTagsFromModel = function () {
        if (this.article.Tags == null) {
            return null;
        }
        return this.article.Tags.map(function (tag) { return tag.name; });
    };
    ArticleFormComponent.prototype.getCategoriesFromModel = function () {
        if (this.article.Categories == null) {
            return null;
        }
        return this.article.Categories.map(function (cat) { return cat.CategoryID; });
    };
    ArticleFormComponent.prototype.getCategoriesForModel = function (f, allcats$) {
        if (f.Categories == null) {
            return null;
        }
        var retCats = new Array();
        var _loop_1 = function (c) {
            retCats.push(allcats$.filter(function (ct) { return ct.CategoryID === c; })[0]);
        };
        for (var _i = 0, _a = f.Categories; _i < _a.length; _i++) {
            var c = _a[_i];
            _loop_1(c);
        }
        return retCats;
    };
    ArticleFormComponent.prototype.getTagsForModel = function (f, alltags$) {
        if (f.Tags == null) {
            return null;
        }
        var retTags = new Array();
        var _loop_2 = function (t) {
            var newTag = void 0;
            newTag = alltags$.filter(function (tg) { return tg.name === t; })[0];
            if (newTag == null) {
                newTag = { TagID: -1, name: t };
            }
            retTags.push(newTag);
        };
        for (var _i = 0, _a = f.Tags; _i < _a.length; _i++) {
            var t = _a[_i];
            _loop_2(t);
        }
        return retTags;
    };
    ArticleFormComponent.prototype.GetDateTimeFromForm = function (date, time) {
        var d;
        if (date != null && time != null) {
            d = new Date(date.year, date.month - 1, date.day, time.hour, time.minute);
        }
        else if (date != null) {
            d = new Date(date.year, date.month - 1, date.day);
        }
        else {
            d = null;
        }
        console.log(d);
        return d;
    };
    ArticleFormComponent.prototype.GetDateFromModel = function (datetimeStr) {
        var datetime = new Date(datetimeStr);
        if (typeof datetime.getMonth === 'function' && datetime.getFullYear() > 1) {
            return { year: datetime.getFullYear(), month: datetime.getMonth() + 1, day: datetime.getDate() };
        }
        else {
            return null;
        }
    };
    ArticleFormComponent.prototype.GetTimeFromModel = function (datetimeStr) {
        var datetime = new Date(datetimeStr);
        if (typeof datetime.getHours === 'function' && datetime.getFullYear() > 1) {
            return { hour: datetime.getHours(), minute: datetime.getMinutes(), second: 0 };
        }
        else {
            return null;
        }
    };
    ArticleFormComponent.prototype.fetchData = function () {
        var _this = this;
        this.obs_authors$ = this.helperService.getAuthors('');
        this.obs_allcategories$ = this.categoriesService.GetAll();
        this.obs_alltags$ = this.tagsService.GetAll();
        this.obs_strTags$ = this.obs_alltags$.map(function (array) { return array.map(function (tag) { return tag.name; }); });
        this.obs_authors$.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (data) { return data; })).subscribe(function (data) {
            _this.authors = data;
            _this.setAuthorTextValue();
        });
        this.obs_allcategories$.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (data) { return data; })).subscribe(function (data) { return _this.allcategories = data; });
        this.obs_alltags$.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (data) { return data; })).subscribe(function (data) { return _this.alltags = data; });
        this.customFieldsService.GetAll().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (data) { return data; })).subscribe(function (data) {
            _this.initCustomObjects(data);
            _this.customDefs = data;
        });
        this.loadArticle();
    };
    ArticleFormComponent.prototype.AutoArchiveOnChange = function (event) {
        console.log('AutoArchiveOnChange');
        console.log(event);
    };
    //public onImageInputAction(e) {
    //  console.log(event);
    //  if (e.action == 1) {
    //    this.imageUploads.push({ name: e.file.name, file: e.file, uploaded: false, percentage: null });
    //  }
    //}
    ArticleFormComponent.prototype.deleteable = function () {
        return (this.article.ArticleID > 0);
    };
    ArticleFormComponent.prototype.publishable = function () {
        return (this.articleForm.valid);
    };
    ArticleFormComponent.prototype.ShowArchive = function () {
        var show = (this.articleForm.controls['AutoArchive'].value);
        return show;
    };
    ArticleFormComponent.prototype.titleChanged = function (event) {
        if (this.article.ArticleID <= 0 && event.target.value != '') {
            this.urlChanged(event);
        }
    };
    ArticleFormComponent.prototype.urlChanged = function (event) {
        var _this = this;
        this.helperService.cleanUrl(event.target.value).subscribe(function (res) {
            _this.articleForm.get('URL').setValue((res));
        });
    };
    ArticleFormComponent.prototype.loadArticle = function () {
        var _this = this;
        this.isSubmitting = true;
        var id = +this.route.snapshot.paramMap.get('id');
        this.articlesService
            .Get(id)
            .subscribe(function (data) {
            console.log(data);
            _this.updateArticle(data);
            _this.ModelToForm();
            _this.isSubmitting = false;
        }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    ArticleFormComponent.prototype.ngOnInit = function () {
        this.fetchData();
        this.initForm();
    };
    ArticleFormComponent.prototype.updateArticle = function (values) {
        Object.assign(this.article, values);
        Object.assign(this.fileUploads, this.article.Files);
        Object.assign(this.imageUploads, this.article.Images);
    };
    ArticleFormComponent.prototype.clickCancel = function () {
        if (!this.articleForm.untouched) {
            if (confirm("Discard current changes?")) {
                this.router.navigate(['/articles']);
            }
        }
        else {
            this.router.navigate(['/articles']);
        }
    };
    ArticleFormComponent.prototype.clickDelete = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete this article?")) {
            this.isSubmitting = true;
            this.FormToModel();
            this.article.IsDeleted = true;
            this.articlesService.Upsert(this.article).subscribe(function (data) {
                // Update the DB.
                _this.toastr.warning('Article: DELETED');
                _this.router.navigate(['/articles']);
            }, function (err) {
                _this.toastr.error('error deleting article');
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
    };
    ArticleFormComponent.prototype.articleId = function () {
        return this.article.ArticleID;
    };
    ArticleFormComponent.prototype.imageFolder = function () {
        return this.settingsService.getCurrentSettings().ImageDefaultImageFolder;
    };
    ArticleFormComponent.prototype.allowedImages = function () {
        return this.settingsService.getCurrentSettings().ImageAllowedTypes;
    };
    ArticleFormComponent.prototype.joinForInputAccept = function (iary) {
        if (iary) {
            var ary = iary.slice(0);
            ary.forEach(function (item, index) {
                if (item.substr(0, 1) != '.') {
                    ary[index] = '.' + item;
                }
            });
            return ary.join(',');
        }
    };
    ArticleFormComponent.prototype.allowedFiles = function () {
        return this.settingsService.getCurrentSettings().FileAllowedTypes;
    };
    ArticleFormComponent.prototype.isDebugMode = function () {
        return this.settingsService.getCurrentSettings().debugEnabled;
    };
    ArticleFormComponent.prototype.fileFolder = function () {
        return this.settingsService.getCurrentSettings().FileDefaultFileFolder;
    };
    ArticleFormComponent.prototype.clickPublish = function () {
        this.article.IsDraft = false;
        this.article.IsDeleted = false;
        this.submitForm();
    };
    ArticleFormComponent.prototype.clickSaveDraft = function () {
        this.article.IsDraft = true;
        this.article.IsDeleted = false;
        this.submitForm();
    };
    ArticleFormComponent.prototype.submitForm = function () {
        var _this = this;
        this.articleForm.markAsTouched();
        if (this.articleForm.valid) {
            console.log('submitForm');
            this.isSubmitting = true;
            // update the model
            this.FormToModel();
            console.log(this.article);
            this.articlesService
                .Upsert(this.article)
                .subscribe(function (data) {
                var id = +_this.route.snapshot.paramMap.get('id');
                _this.updateArticle(data);
                if (id != _this.article.ArticleID) {
                    _this.router.navigateByUrl('/article/' + _this.article.ArticleID.toString());
                }
                _this.ModelToForm();
                _this.isSubmitting = false;
                _this.toastr.info('article saved');
            }, function (err) {
                _this.toastr.error('error updating article');
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
        else {
            console.log(this.articleForm);
        }
    };
    ArticleFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article-form',
            template: __webpack_require__("../../../../../src/app/article-form/article-form.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/article-form/article-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["f" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["g" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["d" /* CustomFieldsService */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["i" /* TagsService */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* ArticlesService */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["e" /* FilesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3_angular_progress_http__["a" /* ProgressHttp */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], ArticleFormComponent);
    return ArticleFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h2>Articles</h2>\r\n  <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n    <div class=\"btn-group mr-2\">\r\n      <a class=\"btn btn-sm btn-primary\" routerLink=\"/article/-1\">Create Article</a>\r\n    </div>\r\n  </div>\r\n</div>\n<data-table id=\"articlesGrid\"\n            [items]=\"articles\"\n            [itemCount]=\"articleCount\"\n            (reload)=\"reloadItems($event)\"\n            [indexColumnHeader]=\"'#'\"\n            [substituteRows]=\"false\"\r\n            [expandableRows]=\"true\"\n            [selectOnRowClick]=\"false\"\n            [indexColumn]=\"false\"\n            >\n  <ng-template #dataTableExpand let-item=\"item\">\r\n    <div [textContent]=\"item.Summary\" style=\"padding: 5px; color: gray\"></div>\r\n  </ng-template>\n  <data-table-column [property]=\"'Title'\"\r\n                     [header]=\"'Title'\"\r\n                     [sortable]=\"true\"\r\n                     [resizable]=\"true\">\r\n  </data-table-column>\n  <data-table-column [property]=\"'Tags'\"\r\n                     [header]=\"'Tags'\"\r\n                     [visible]=\"false\"\r\n                     >\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <span>{{tagsToString(item)}}</span>\r\n    </ng-template>\r\n  </data-table-column>\n  <data-table-column [property]=\"'Categories'\"\r\n                     [header]=\"'Categories'\"\r\n                     [visible]=\"false\"\r\n                     >\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <span>{{categoriesToString(item)}}</span>\r\n    </ng-template>\r\n  </data-table-column>\n  <data-table-column [property]=\"'StartDate'\"\r\n                     [header]=\"'Publish Date'\"\r\n                     [sortable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <span>{{item.StartDate | date:'yyyy-MM-dd HH:mm'}}</span>\r\n    </ng-template>\r\n  </data-table-column>\n  <data-table-column [property]=\"'LastUpdated'\"\r\n                     [header]=\"'Last Updated'\"\r\n                     [sortable]=\"true\"\r\n                     [visible]=\"false\"\r\n                     >\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <span>{{item.LastUpdated | date:'yyyy-MM-dd HH:mm'}}</span>\r\n    </ng-template>\r\n  </data-table-column>\n  <data-table-column [property]=\"'Status'\"\r\n                     [header]=\"'Status'\"\r\n                     [visible]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column [property]=\"'Author'\"\r\n                     [header]=\"'Author'\"\r\n                     [visible]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <span>{{item.Author.name}}</span>\r\n    </ng-template>\r\n  </data-table-column>\r\n    <data-table-column header=\"Actions\">\r\n      <ng-template #dataTableHeader let-item=\"item\">\r\n        <i>Actions</i>\r\n      </ng-template>\r\n      <ng-template #dataTableCell let-item=\"item\">\r\n        <div class=\"text-center\">\r\n          <a routerLink=\"/article/{{item.ArticleID}}\" title=\"Edit\" class=\"btn btn-sm btn-primary\">\r\n            <i class=\"fas fa-pencil-alt\"></i>\r\n          </a>\r\n          <a target=\"_blank\" href=\"{{item.vwURL}}\" title=\"Preview\" class=\"btn btn-sm btn-primary\">\r\n            <i class=\"fas fa-eye\"></i>\r\n          </a>\r\n        </div>\r\n      </ng-template>\r\n    </data-table-column>\r\n</data-table>\n"

/***/ }),

/***/ "../../../../../src/app/articles/articles.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(route, router, toastr, settingsService, articlesService, categoriesService) {
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.settingsService = settingsService;
        this.articlesService = articlesService;
        this.categoriesService = categoriesService;
        this.settings = {};
        this.categories = new Array();
        this.articles = new Array();
        this.selectedArticle = null;
        this.errors = {};
        this.isSubmitting = false;
        //itemResource = new DataTableResource(this.articles);
        //items = [];
        this.articleCount = 0;
    }
    ArticlesComponent.prototype.tagsToString = function (item) {
        return item.Tags.map(function (tag) { return tag.name; }).join(",");
    };
    ArticlesComponent.prototype.categoriesToString = function (item) {
        return item.Categories.map(function (cat) { return cat.Name; }).join(",");
    };
    //loadArticles() {
    //  let params: ArticleQueryParams = {
    //    sortAsc: false,
    //    sortBy: 'StartDate',
    //    offset: 0,
    //    limit: 10,
    //    searchPhrase: (<HTMLInputElement>document.querySelector("input#txtArticleSearch")).value,
    //    status: null
    //  };
    //}
    ArticlesComponent.prototype.reloadItems = function (params) {
        var _this = this;
        params.searchPhrase = document.querySelector("input#txtArticleSearch").value;
        params.status = null;
        console.log(params);
        this.articlesService.GetPagedList(params).subscribe(function (data) {
            var tbodys = Array.from(document.querySelectorAll("data-table#articlesGrid tbody"));
            tbodys.forEach(function (el) {
                el.remove();
            });
            _this.articleCount = data.meta.TotalCount;
            Object.assign(_this.articles, data.data);
            console.log(data);
            console.log('reloadItems()');
        }, function (err) {
            _this.toastr.error('Error getting articles');
        });
    };
    ArticlesComponent.prototype.ngOnInit = function () {
        //this.loadArticles();
    };
    ArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__("../../../../../src/app/articles/articles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/articles/articles.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* ArticlesService */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* CategoriesService */]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h2>Categories</h2>\r\n</div>\r\n<div class=\"text-right\">\r\n  \r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md m-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Category Tree \r\n          </div>\r\n          <div class=\"col text-right\">\r\n            <button type=\"button\" (click)=\"newCategory()\" class=\"btn btn-primary btn-sm\">New</button>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n      <div class=\"card-body\">\r\n        \r\n        <tree-root id=\"catTree\" (moveNode)=\"onMoveNode($event)\" [focused]=\"true\" [nodes]=\"categories\" [options]=\"treeOptions\"\r\n                   (activate)=\"onCatChange($event)\">\r\n          <ng-template #treeNodeTemplate let-node let-index=\"index\">\r\n            <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.Name }}</span>\r\n          </ng-template>\r\n          <template #loadingTemplate>\r\n            Loading, please hold....\r\n          </template>\r\n        </tree-root>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9 m-2\" >\r\n    <app-category-form *ngIf=\"selectedCategory!=null\" [category]=\"selectedCategory\" (onUpserted)=\"categoryUpserted($event)\" (onCancel)=\"cancelEditing($event)\" (onDelete)=\"categoryDeleted($event)\"></app-category-form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(route, router, toastr, settingsService, categoriesService, modalService) {
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.settingsService = settingsService;
        this.categoriesService = categoriesService;
        this.modalService = modalService;
        this.settings = {};
        this.categories = new Array();
        this.selectedCategory = null;
        this.errors = {};
        this.isSubmitting = false;
        this.treeOptions = {
            idField: 'CategoryID',
            displayField: 'Name',
            childrenField: 'Children',
            allowDrag: true
        };
        this.onEvent = function ($event) { return console.log($event); };
    }
    CategoriesComponent.prototype.onCatChange = function ($event) {
        this.selectedCategory = $event.node.data;
    };
    CategoriesComponent.prototype.onMoveNode = function ($event) {
        var _this = this;
        this.categoriesService.UpdateTree(this.categories).subscribe(function (success) {
            _this.toastr.info('Category tree updated');
        });
        ;
    };
    CategoriesComponent.prototype.cancelEditing = function ($event) {
        if (this.selectedCategory.CategoryID <= 0) {
            this.removeCurrentCategory();
        }
        this.selectedCategory = null;
    };
    CategoriesComponent.prototype.removeCurrentCategory = function () {
        var _this = this;
        this.categories = this.categories.filter(function (c) { return c.CategoryID !== _this.selectedCategory.CategoryID; });
    };
    CategoriesComponent.prototype.categoryDeleted = function ($event) {
        this.removeCurrentCategory();
        this.selectedCategory = null;
    };
    CategoriesComponent.prototype.newCategory = function () {
        this.selectedCategory = ({
            CategoryID: -1,
            Name: '',
            Description: '',
            MetaTitle: '',
            MetaDescription: '',
            MetaKeywords: '',
            PageHeadText: '',
            ShortURL: '',
            URL: ''
        });
        this.categories.push(this.selectedCategory);
        this.catTree.treeModel.update();
    };
    CategoriesComponent.prototype.categoryUpserted = function ($event) {
        this.catTree.treeModel.update();
        this.catTree.treeModel.getNodeById(this.selectedCategory.CategoryID).setActiveAndVisible();
    };
    CategoriesComponent.prototype.populateCategories = function () {
        var _this = this;
        this.categoriesService.GetTree().subscribe(function (data) {
            console.log(data);
            Object.assign(_this.categories, data);
            _this.catTree.treeModel.update();
        });
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        this.populateCategories();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["a" /* TreeComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["a" /* TreeComponent */])
    ], CategoriesComponent.prototype, "catTree", void 0);
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["g" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["c" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/category-form/category-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <h5 class=\"card-header\">Category details</h5>\r\n  <div class=\"card-body\">\r\n    <div ngForm [formGroup]=\"categoryForm\" (validSubmit)=\"onSubmit()\" validate>\r\n      <fieldset [disabled]=\"isSubmitting\">\r\n        <h5>Basics</h5>\r\n        <div class=\"form-group\">\r\n          <label for=\"txtName\">Name</label>\r\n          <input (blur)=\"nameChanged($event)\" formControlName=\"Name\" type=\"text\" class=\"form-control form-control-lg\"\r\n                 name=\"txtName\" id=\"txtName\" placeholder=\"Name\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"txtDescription\">Description</label>\r\n          <textarea formControlName=\"Description\" rows=\"4\" class=\"form-control\"\r\n                    name=\"txtDescription\" id=\"txtDescription\" placeholder=\"Description\"></textarea>\r\n          <small id=\"txtDescriptionHelpBlock\" class=\"form-text text-muted\">\r\n            You may use MarkDown for your description\r\n          </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"finputImages\">Image</label>\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"uploaded\" *ngIf=\"category.Image!=null\">\r\n                <div class=\"image-preview-item\">\r\n                  <div class=\"panel-body\">\r\n                    <div class=\"image-container\">\r\n                      <img src=\"{{category.Image.url}}&maxwidth=600&maxheight=300\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <input-file [inputAccept]=\"joinForInputAccept(allowedImages())\"\r\n                          [extensions]=\"allowedImages()\"\r\n                          [multiple]=\"false\"\r\n                          fileDisplayType=\"images\"\r\n                          [uploadFolder]=\"imageFolder()\"\r\n                          (fileUploaded)=\"onImageUploaded($event)\"></input-file>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <hr />\r\n        <h5>SEO</h5>\r\n        <div class=\"form-group\">\r\n          <label for=\"txtUrl\">URL Slug</label>\r\n          <div class=\"input-group mb-2 mr-sm-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">{{parentUrl()}}/</div>\r\n            </div>\r\n            <input (blur)=\"urlChanged($event)\" formControlName=\"URL\" type=\"text\" class=\"form-control\"\r\n                   name=\"txtUrl\" id=\"txtUrl\" placeholder=\"Url\">\r\n          </div>\r\n\r\n          <small id=\"txtDescriptionHelpBlock\" class=\"form-text text-muted\">\r\n            This will be used as the url for the category page which displays articles within this category.\r\n          </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"txtMetaTitle\">Meta Title</label>\r\n          <input formControlName=\"MetaTitle\" type=\"text\" class=\"form-control\"\r\n                 name=\"txtMetaTitle\" id=\"txtMetaTitle\" placeholder=\"Meta Title\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"txtMetaDescription\">Meta Description</label>\r\n          <textarea formControlName=\"MetaDescription\" rows=\"4\" class=\"form-control\"\r\n                    name=\"txtMetaDescription\" id=\"txtMetaDescription\" placeholder=\"Meta Description\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"txtMetaKeywords\">Meta Keywords</label>\r\n          <textarea formControlName=\"MetaKeywords\" rows=\"3\" class=\"form-control\"\r\n                    name=\"txtMetaKeywords\" id=\"txtMetaKeywords\" placeholder=\"Meta Keywords\"></textarea>\r\n        </div>\r\n        <hr />\r\n        <h5>Other</h5>\r\n        <div class=\"form-group\">\r\n          <label for=\"txtPageHeadText\">Page Header Text</label>\r\n          <textarea formControlName=\"PageHeadText\" rows=\"3\" class=\"form-control\"\r\n                    name=\"txtPageHeadText\" id=\"txtPageHeadText\" placeholder=\"Page Header Text\"></textarea>\r\n        </div>\r\n        <div class=\"text-right\">\r\n          <button (click)=\"deleteCategory()\" class=\"btn btn-warning\">Delete</button>\r\n          <button (click)=\"cancelChanges()\" class=\"btn btn-default\">Cancel</button>\r\n          <button (click)=\"submitForm()\" class=\"btn btn-primary\">Save</button>\r\n        </div>\r\n      </fieldset>\r\n      <div *ngIf=\"isDebugMode()\">\r\n        <fieldset>\r\n          <legend>categoryForm Value:</legend>\r\n          <pre>{{ categoryForm.value | json:2 }}</pre>\r\n        </fieldset>\r\n        <fieldset>\r\n          <legend>category Value:</legend>\r\n          <pre>{{ category | json:2 }}</pre>\r\n        </fieldset>\r\n      </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/category-form/category-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-form/category-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_progress_http__ = __webpack_require__("../../../../angular-progress-http/angular-progress-http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { InputFileModule } from 'ngx-input-file';

var CategoryFormComponent = /** @class */ (function () {
    function CategoryFormComponent(helperService, toastr, settingsService, categoriesService, filesService, fb, progressHttp, modalService) {
        this.helperService = helperService;
        this.toastr = toastr;
        this.settingsService = settingsService;
        this.categoriesService = categoriesService;
        this.filesService = filesService;
        this.fb = fb;
        this.progressHttp = progressHttp;
        this.modalService = modalService;
        this.settings = {};
        this.category = {};
        this.onUpserted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errors = {};
        this.isSubmitting = false;
        this.inputFileModel = new Array();
        this.files = [];
        this.categoryForm = this.fb.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)])],
            Description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)])],
            MetaTitle: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)])],
            MetaDescription: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)])],
            MetaKeywords: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)])],
            PageHeadText: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(500)])],
            URL: ['', {
                    validators: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)]),
                    asyncValidators: this.validateUrlNotInUse.bind(this),
                    updateOn: 'blur'
                }],
        });
    }
    CategoryFormComponent.prototype.validateUrlNotInUse = function (control) {
        return this.categoriesService.validateUrlNotInUse(this.category.CategoryID, control.value);
    };
    CategoryFormComponent.prototype.ngOnChanges = function () {
        this.categoryForm.reset({
            Name: this.category.Name,
            Description: this.category.Description,
            MetaTitle: this.category.MetaTitle,
            MetaDescription: this.category.MetaDescription,
            MetaKeywords: this.category.MetaKeywords,
            PageHeadText: this.category.PageHeadText,
            URL: this.category.URL
        });
    };
    CategoryFormComponent.prototype.onFilesSelected = function (fileList) {
    };
    CategoryFormComponent.prototype.parentUrl = function () {
        return this.settingsService.getCurrentSettings().PageTabUrl;
    };
    CategoryFormComponent.prototype.nameChanged = function (event) {
        if (this.category.CategoryID <= 0) {
            this.urlChanged(event);
        }
    };
    CategoryFormComponent.prototype.urlChanged = function (event) {
        var _this = this;
        this.helperService.cleanUrl(event.target.value).subscribe(function (res) {
            _this.categoryForm.get('URL').setValue((res));
        });
    };
    CategoryFormComponent.prototype.onSubmit = function (f) {
        console.log(f);
    };
    CategoryFormComponent.prototype.deleteCategory = function () {
        var _this = this;
        if (confirm("Delete this category - are you sure?")) {
            this.isSubmitting = true;
            this.categoriesService.Delete(this.category.CategoryID).subscribe(function (data) {
                _this.isSubmitting = false;
                _this.onDelete.emit({});
                _this.toastr.info('Category deleted!');
            }, function (err) {
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
    };
    CategoryFormComponent.prototype.cancelChanges = function () {
        if (!this.categoryForm.untouched) {
            if (confirm("Discard current changes?")) {
                this.onCancel.emit();
            }
        }
        else {
            this.onCancel.emit();
        }
    };
    CategoryFormComponent.prototype.submitForm = function () {
        var _this = this;
        this.categoryForm.markAsTouched();
        if (this.categoryForm.valid) {
            console.log('submitForm');
            this.isSubmitting = true;
            // update the model
            this.updateCategory(this.categoryForm.value);
            this.categoriesService
                .Upsert(this.category)
                .subscribe(function (data) {
                _this.isSubmitting = false;
                _this.updateCategory(data);
                _this.onUpserted.emit({
                    value: _this.category
                });
                _this.toastr.info('Category saved');
            }, function (err) {
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
        else {
            console.log(this.categoryForm);
        }
    };
    CategoryFormComponent.prototype.updateCategory = function (values) {
        Object.assign(this.category, values);
    };
    CategoryFormComponent.prototype.onImageUploaded = function (e) {
        var _this = this;
        var fv;
        this.filesService.GetFileById(e.fileId).subscribe(function (data) {
            console.log('onImageUploaded');
            console.log(data);
            _this.category.Image = data;
        }, function (err) {
            _this.toastr.error('Error getting uploaded file from server');
        });
    };
    CategoryFormComponent.prototype.joinForInputAccept = function (iary) {
        if (iary) {
            var ary = iary.slice(0);
            ary.forEach(function (item, index) {
                if (item.substr(0, 1) != '.') {
                    ary[index] = '.' + item;
                }
            });
            return ary.join(',');
        }
    };
    CategoryFormComponent.prototype.imageFolder = function () {
        return this.settingsService.getCurrentSettings().ImageDefaultImageFolder;
    };
    CategoryFormComponent.prototype.allowedImages = function () {
        return this.settingsService.getCurrentSettings().ImageAllowedTypes;
    };
    CategoryFormComponent.prototype.isDebugMode = function () {
        return this.settingsService.getCurrentSettings().debugEnabled;
    };
    CategoryFormComponent.prototype.verifyUrl = function (control) {
        if (control.value) {
            this.helperService.cleanUrl(control.value).subscribe(function (res) {
                control.setValue(res);
            });
        }
    };
    CategoryFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryFormComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CategoryFormComponent.prototype, "onUpserted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CategoryFormComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CategoryFormComponent.prototype, "onDelete", void 0);
    CategoryFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category-form',
            template: __webpack_require__("../../../../../src/app/category-form/category-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category-form/category-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared__["f" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["g" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["c" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["e" /* FilesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_angular_progress_http__["a" /* ProgressHttp */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/context/context.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dev_context__ = __webpack_require__("../../../../../src/app/context/dev-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var Context = /** @class */ (function () {
    function Context(devSettings) {
        this.devSettings = devSettings;
        // todo: probably should set the replay-buffer to 1 for all the following, but must test!
        this.midSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.tidSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.afTokenSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.moduleId$ = this.midSubject.asObservable();
        this.tabId$ = this.tidSubject.asObservable();
        this.antiForgeryToken$ = this.afTokenSubject.asObservable();
        this.all$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].combineLatest(this.moduleId$, // wait for module id
        this.tabId$, // wait for tabId
        this.antiForgeryToken$) // wait for security token
            .map(function (res) { return ({
            moduleId: res[0],
            tabId: res[1],
            antiForgeryToken: res[2]
        }); });
        // Dev settings with minimal ignore settings.
        this.devSettings = Object.assign({}, {
            ignoreMissingServicesFramework: false
        }, devSettings);
    }
    /**
     * Configure 2sxc in the context of a HTMLNode.
     * @param htmlNode the HTMLNode
     */
    Context.prototype.autoConfigure = function (htmlNode) {
        var _this = this;
        console.log('running context.service autoConfigure()');
        if (this.devSettings.forceUse) {
            this.midSubject.next(this.devSettings.moduleId);
            this.tidSubject.next(this.devSettings.tabId);
            this.afTokenSubject.next(this.devSettings.antiForgeryToken);
            return;
        }
        // Update / publish moduleId.
        var appCont = htmlNode.nativeElement;
        console.log(appCont);
        this.midSubject.next(appCont.dataset.mid);
        this.tidSubject.next(appCont.dataset.tid);
        // Check if DNN Services framework exists.
        console.log('Checking if DNN Services framework exists');
        if (window.$ && window.$.ServicesFramework) {
            // Run timer till sf is ready, but max for a second.
            var timer_1 = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(0, 100)
                .take(10)
                .subscribe(function (x) {
                // This must be accessed after a delay, as the SF is not ready yet.
                var sf = window.$.ServicesFramework(_this.midSubject);
                // Check if sf is initialized.
                if (sf.getAntiForgeryValue() && sf.getTabId() !== -1) {
                    timer_1.unsubscribe();
                    console.log('sf is initialized.');
                    _this.tidSubject.next(sf.getTabId());
                    _this.afTokenSubject.next(sf.getAntiForgeryValue());
                }
                else {
                    // Must reset, as they are incorrectly initialized when accessed early.
                    if (window.dnn && window.dnn.vars && window.dnn.vars.length === 0) {
                        window.dnn.vars = null;
                    }
                }
            });
            return;
        }
        if (!this.devSettings.ignoreMissingServicesFramework) {
            throw new Error("\n        DNN Services Framework is missing, and it's not allowed according to devSettings.\n        Either set devSettings to ignore this, or ensure it's there");
        }
        this.tidSubject.next(this.devSettings.tabId);
        this.afTokenSubject.next(this.devSettings.antiForgeryToken);
    };
    Context = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__dev_context__["a" /* DevContext */]])
    ], Context);
    return Context;
}());



/***/ }),

/***/ "../../../../../src/app/context/dev-context.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
// This lets you configure test-values during development.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DevContext = /** @class */ (function () {
    function DevContext() {
        this.ignoreMissingServicesFramework = false;
        this.forceUse = true;
        this.moduleId = 542;
        this.tabId = 137;
        this.antiForgeryToken = 'ThisIsaTestAntiForgeryToken';
        this.path = '';
    }
    DevContext = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DevContext);
    return DevContext;
}());



/***/ }),

/***/ "../../../../../src/app/custom-fields/custom-fields.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h2>Custom Fields</h2>\r\n  <!--<div class=\"btn-toolbar mb-2 mb-md-0\">\r\n    <div class=\"btn-group mr-2\">\r\n      <a class=\"btn btn-sm btn-primary\" routerLink=\"/article/-1\">Create Article</a>\r\n    </div>\r\n  </div>-->\r\n</div>\r\n\r\n<p>ToDo - Custom fields management</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/custom-fields/custom-fields.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custom-fields/custom-fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFieldsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomFieldsComponent = /** @class */ (function () {
    function CustomFieldsComponent() {
    }
    CustomFieldsComponent.prototype.ngOnInit = function () {
    };
    CustomFieldsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-custom-fields',
            template: __webpack_require__("../../../../../src/app/custom-fields/custom-fields.component.html"),
            styles: [__webpack_require__("../../../../../src/app/custom-fields/custom-fields.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomFieldsComponent);
    return CustomFieldsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h2>Dashboard</h2>\r\n</div>\n<p>Todo:</p>\n<ul>\n  <li>display: users draft articles</li>\n  <li>display: articles needing approval (if approver)</li>\n  <li>Anything else handy here?</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dnn-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DnnAppComponent; });
// This is a base class for all apps which run in DNN.
// It ensures that the rest of the parts depending on DNN parameters are correctly initialized.
/**
 * A root app component which initializes the context-providers once the app is loaded
 * This is the earliest moment we can access the ElementRef, because before that
 * it's not attached to the DOM, so auto-detect wouldn't work.
 */
var DnnAppComponent = /** @class */ (function () {
    /**
     *
     * @param element the angular ElementRef - required to auto-detect moduleId and more
     * @param context the context service, which handles and shares auto-detection
     * @param enableDefaultSubmit
     */
    function DnnAppComponent(element, context, enableDefaultSubmit) {
        // auto-config to pick up tab-id, module id, etc.
        context.autoConfigure(element);
        // prevent asp.net submit action caused by enter-keys inside our app
        if (!enableDefaultSubmit) {
            // console.log("dnn-sxc-angular - will prevent enter-buttons from causing submit")
            element.nativeElement.addEventListener('keydown', function (e) {
                if (e.keyCode == 13)
                    e.preventDefault();
            });
        }
    }
    return DnnAppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/email-templates/email-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h2>Email Templates</h2>\r\n  <!--<div class=\"btn-toolbar mb-2 mb-md-0\">\r\n    <div class=\"btn-group mr-2\">\r\n      <a class=\"btn btn-sm btn-primary\" routerLink=\"/article/-1\">Create Article</a>\r\n    </div>\r\n  </div>-->\r\n</div>\r\n<p>ToDo - ability to edit templates</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/email-templates/email-templates.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-templates/email-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailTemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailTemplatesComponent = /** @class */ (function () {
    function EmailTemplatesComponent() {
    }
    EmailTemplatesComponent.prototype.ngOnInit = function () {
    };
    EmailTemplatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-templates',
            template: __webpack_require__("../../../../../src/app/email-templates/email-templates.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-templates/email-templates.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailTemplatesComponent);
    return EmailTemplatesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http/dnn.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DnnInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interceptor__ = __webpack_require__("../../../../../src/app/http/interceptor.ts");


var DnnInterceptor = {
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: __WEBPACK_IMPORTED_MODULE_1__interceptor__["a" /* Interceptor */],
    multi: true,
};


/***/ }),

/***/ "../../../../../src/app/http/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context_context_service__ = __webpack_require__("../../../../../src/app/context/context.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Interceptor = /** @class */ (function () {
    function Interceptor(context) {
        this.context = context;
    }
    Interceptor.prototype.intercept = function (req, next) {
        //console.log('intercepted');
        //console.log(this.context);
        return this.context.all$.take(1)
            .flatMap(function (ctx) {
            // Clone the request and update the url with Dnn params.
            var newReq = req.clone({
                //url: ctx.path + req.url,
                //url: '/API/dnn_OpenNewsSPA' + req.url,
                setHeaders: {
                    ModuleId: ctx.moduleId.toString(),
                    TabId: ctx.tabId.toString(),
                    RequestVerificationToken: ctx.antiForgeryToken,
                    'X-Debugging-Hint': 'bootstrapped by Dnn4Angular',
                },
            });
            //console.log('returned intercept');
            return next.handle(newReq);
        });
    };
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__context_context_service__["a" /* Context */]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "../../../../../src/app/importer/importer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h2>Import from Ventrain News Articles Module</h2>\r\n  <!--<div class=\"btn-toolbar mb-2 mb-md-0\">\r\n    <div class=\"btn-group mr-2\">\r\n      <a class=\"btn btn-sm btn-primary\" routerLink=\"/article/-1\">Create Article</a>\r\n    </div>\r\n  </div>-->\r\n</div>\r\n<div class=\"p-3 mb-2 bg-warning text-dark\">\r\n  <p>Warning this will delete all current content within this module and\r\n  attempt to import from the module specified.</p>\r\n</div>\r\n\r\n<fieldset [disabled]=\"isSubmitting\">\r\n  <div class=\"input-group\">\r\n    <select class=\"custom-select\" id=\"ddNaModule\">\r\n      <option selected>Choose...</option>\r\n      <option *ngFor=\"let opt of naModules\"\r\n              value=\"{{ opt.Key }}\">\r\n        {{ opt.Value }}\r\n      </option>\r\n    </select>\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"importModule()\">Import</button>\r\n    </div>\r\n  </div>\r\n</fieldset>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/importer/importer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/importer/importer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImporterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImporterComponent = /** @class */ (function () {
    function ImporterComponent(helperService, toastr) {
        this.helperService = helperService;
        this.toastr = toastr;
        this.naModules = [];
        this.isSubmitting = false;
    }
    ImporterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helperService.getNaModules().subscribe(function (data) {
            console.log('getNaModules');
            console.log(data);
            _this.naModules = data;
            //this.toastr.info('Imported');
        }, function (err) {
            _this.toastr.error('Error getting Na Modules from server');
        });
    };
    ImporterComponent.prototype.importModule = function () {
        var _this = this;
        console.log('importModule');
        if (confirm("Are you sure you want to delete all module content and import?")) {
            this.isSubmitting = true;
            var naModuleId = document.querySelector('#ddNaModule').value;
            this.helperService.importModule(naModuleId).subscribe(function (data) {
                console.log(data);
                _this.naModules = data;
                _this.toastr.info('Imported!');
                _this.isSubmitting = false;
            }, function (err) {
                _this.toastr.error('Error importing naModule');
                _this.isSubmitting = false;
            });
        }
        ;
    };
    ImporterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-importer',
            template: __webpack_require__("../../../../../src/app/importer/importer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/importer/importer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_index__["f" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], ImporterComponent);
    return ImporterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-settings/main-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngForm [formGroup]=\"settingsForm\" (validSubmit)=\"onSubmit()\" validate >\r\n  <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n    <h2>Main Settings</h2>\r\n  </div>\r\n  <fieldset [disabled]=\"isSubmitting\">\r\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\" [hidden]=\"!settings\">\r\n      <ngb-panel title=\"Basic Settings\">\r\n        <ng-template ngbPanelContent>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtArticlesPerPage\">Articles per page</label>\r\n            <input formControlName=\"BasicArticlesPerPage\" type=\"number\" class=\"form-control\" name=\"txtArticlesPerPage\" id=\"txtArticlesPerPage\" placeholder=\"10\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ddTemplate\">Rendering Template</label>\r\n            <select formControlName=\"BasicRenderingTemplate\" class=\"form-control\" id=\"ddTemplate\" name=\"ddTemplate\">\r\n              <option *ngFor=\"let folder of Templates\"\r\n                      [value]=\"folder\">\r\n                {{folder}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ddServerTimeZone\">Server TimeZone</label>\r\n            <select formControlName=\"BasicServerTimeZone\" class=\"form-control\" id=\"ddServerTimeZone\" name=\"ddServerTimeZone\">\r\n              <option *ngFor=\"let timeZone of TimeZones\"\r\n                      [value]=\"timeZone.Key\">\r\n                {{timeZone.Value}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ddSortBy\">Sort By</label>\r\n            <select formControlName=\"BasicSortBy\" class=\"form-control\" id=\"ddSortBy\" name=\"ddSortBy\">\r\n              <option *ngFor=\"let sortBy of SortByOpts\"\r\n                      [value]=\"sortBy\">\r\n                {{sortBy}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ddSortDirection\">Sort Direction</label>\r\n            <select formControlName=\"BasicSortDirection\" class=\"form-control\" id=\"ddSortDirection\" name=\"ddSortDirection\">\r\n              <option value=\"ASC\">Ascending</option>\r\n              <option value=\"DESC\">Descending</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-check\">\r\n            <input formControlName=\"BasicAllowCoreSearchIntegration\" type=\"checkbox\" class=\"form-check-input\" id=\"chkAllowCoreSearchIntegration\" name=\"chkAllowCoreSearchIntegration\">\r\n            <label class=\"form-check-label\" for=\"chkAllowCoreSearchIntegration\">Allow Core Search Integration</label>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel title=\"Category Settings\">\r\n        <ng-template ngbPanelContent>\r\n          <!--<div class=\"form-group\">\r\n            <label for=\"ddDefaultCategories\">Default Categories</label>\r\n            <select [(ngModel)]=\"settings.CategoryDefaultCategories\" formControlName=\"CategoryDefaultCategories\" class=\"form-control\" id=\"ddDefaultCategories\" size=\"4\" name=\"ddDefaultCategories\"></select>\r\n          </div>-->\r\n          <div class=\"form-check\">\r\n            <input formControlName=\"CategoryIncludeInBreadcrumb\" type=\"checkbox\" class=\"form-check-input\" id=\"chkIncludeInBreadcrumb\" name=\"chkIncludeInBreadcrumb\">\r\n            <label class=\"form-check-label\" for=\"chkIncludeInBreadcrumb\">Include in breadcrumb</label>\r\n          </div>\r\n          <div class=\"form-check\">\r\n            <input formControlName=\"CategoryRequireCategory\" type=\"checkbox\" class=\"form-check-input\" id=\"chkRequireCategory\" name=\"chkRequireCategory\">\r\n            <label class=\"form-check-label\" for=\"chkRequireCategory\">Require Category</label>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel title=\"File Settings\">\r\n        <ng-template ngbPanelContent>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtDefaultFileFolder\">Default File Folder</label>\r\n            <type-ahead formControlName=\"FileDefaultFileFolder\" [suggestions]=\"obs_folders$\"\r\n                        placeholder=\"Start typing the folder name\" custom=\"false\" [complex]=\"true\"\r\n                        class=\"form-control\"\r\n                        ></type-ahead>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtImageAllowedTypes\">File Allowed Types</label>\r\n            <type-ahead formControlName=\"FileAllowedTypes\"\r\n                        placeholder=\"start typing file extensions e.g. pdf\"\r\n                        [custom]=\"true\"\r\n                        [complex]=\"false\"\r\n                        [multi]=\"true\"\r\n                        class=\"form-control\"></type-ahead>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel title=\"Image Settings\">\r\n        <ng-template ngbPanelContent>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtDefaultImageFolder\">Default Image Folder</label>\r\n            <type-ahead formControlName=\"ImageDefaultImageFolder\" [suggestions]=\"obs_folders$\"\r\n                        placeholder=\"start typing file extensions e.g. jpg\" custom=\"false\" [complex]=\"true\"\r\n                        class=\"form-control\"></type-ahead>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"txtImageAllowedTypes\">Image Allowed Types</label>\r\n            <type-ahead formControlName=\"ImageAllowedTypes\"\r\n                        placeholder=\"Start typing the folder name\"\r\n                        [custom]=\"true\"\r\n                        [complex]=\"false\"\r\n                        [multi]=\"true\"\r\n                        class=\"form-control\"></type-ahead>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel title=\"Article Form Settings\">\r\n        <ng-template ngbPanelContent>\r\n\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel title=\"Notification Settings\">\r\n        <ng-template ngbPanelContent>\r\n          <div class=\"form-check\">\r\n            <input formControlName=\"NotificationNotifyApproversOnSubmission\" type=\"checkbox\" class=\"form-check-input\" id=\"chkNotifyApproversOnSubmission\" name=\"chkNotifyApproversOnSubmission\">\r\n            <label class=\"form-check-label\" for=\"chkNotifyApproversOnSubmission\">Notify Approvers on Submission</label>\r\n          </div>\r\n          <div class=\"form-check\">\r\n            <input formControlName=\"NotificationNotifyApproversOnApproval\" type=\"checkbox\" class=\"form-check-input\" id=\"chkNotifyApproversApproval\" name=\"chkNotifyApproversApproval\">\r\n            <label class=\"form-check-label\" for=\"chkNotifyApproversOnApproval\">Notify Approvers on Approval</label>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel title=\"SEO Settings\">\r\n        <ng-template ngbPanelContent>\r\n          <div class=\"form-check\">\r\n            <input formControlName=\"SEORemovePagePathFromURL\" type=\"checkbox\" class=\"form-check-input\" id=\"chkSEORemovePagePathFromURL\" name=\"chkSEORemovePagePathFromURL\">\r\n            <label class=\"form-check-label\" for=\"chkSEORemovePagePathFromURL\">Remove Page Path From URLs</label>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel title=\"Permission Settings\">\r\n        <ng-template ngbPanelContent>\r\n\r\n        </ng-template>\r\n      </ngb-panel>\r\n    </ngb-accordion>\r\n    <app-list-errors [errors]=\"errors\"></app-list-errors>\r\n    <div class=\"action-buttons mt-3 mb-3 float-right\">\r\n      <button (click)=\"submitForm()\" type=\"button\" class=\"btn btn-primary\">Save</button>\r\n    </div>\r\n  </fieldset>\r\n  <div *ngIf=\"isDebugMode()\">\r\n    <fieldset>\r\n      <legend>settingsForm Value:</legend>\r\n      <pre>{{ settingsForm.value | json:2 }}</pre>\r\n    </fieldset>\r\n    <fieldset>\r\n      <legend>settings Value:</legend>\r\n      <pre>{{ settings | json:2 }}</pre>\r\n    </fieldset>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-settings/main-settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-settings/main-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainSettingsComponent = /** @class */ (function () {
    function MainSettingsComponent(route, router, settingsService, toastr, fb) {
        this.route = route;
        this.router = router;
        this.settingsService = settingsService;
        this.toastr = toastr;
        this.fb = fb;
        this.settings = {};
        this.errors = {};
        this.isSubmitting = false;
        this.TimeZones = [];
        this.Templates = [];
        this.SortByOpts = [
            'StartDate',
            'EndDate'
        ];
        this.settingsForm = this.fb.group({
            BasicAllowCoreSearchIntegration: '',
            BasicArticlesPerPage: ['12', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            BasicRenderingTemplate: '',
            BasicServerTimeZone: '',
            BasicSortBy: '',
            BasicSortDirection: '',
            //CategoryDefaultCategories: '',
            CategoryIncludeInBreadcrumb: '',
            CategoryRequireCategory: '',
            FileDefaultFileFolder: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            ImageDefaultImageFolder: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            SEORemovePagePathFromURL: '',
            NotificationNotifyApproversOnApproval: '',
            NotificationNotifyApproversOnSubmission: '',
            ImageAllowedTypes: '',
            FileAllowedTypes: ''
        });
    }
    MainSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get TimeZones
        this.settingsService.GetTimeZones().subscribe(function (data) {
            Object.assign(_this.TimeZones, data);
            _this.settingsForm.patchValue(_this.TimeZones);
        });
        //Get TimeZones
        this.settingsService.GetTemplates().subscribe(function (data) {
            Object.assign(_this.Templates, data);
            _this.settingsForm.patchValue(_this.Templates);
        });
        //Get TimeZones
        this.obs_folders$ = this.settingsService.GetPortalFolders();
        //Get Settings
        Object.assign(this.settings, this.settingsService.getCurrentSettings());
        if (Object.keys(this.settings).length === 0) {
            this.settingsService.GetSettings().subscribe(function (data) {
                Object.assign(_this.settings, data);
                _this.settingsForm.patchValue(_this.settings);
            });
        }
        else {
            this.settingsForm.patchValue(this.settings);
        }
    };
    MainSettingsComponent.prototype.isDebugMode = function () {
        return this.settingsService.getCurrentSettings().debugEnabled;
    };
    MainSettingsComponent.prototype.onSubmit = function (f) {
        //console.log(this.formGroup);
        console.log(f);
    };
    MainSettingsComponent.prototype.submitForm = function () {
        var _this = this;
        console.log('submitForm');
        if (this.settingsForm.valid) {
            this.isSubmitting = true;
            // update the model
            this.updateSettings(this.settingsForm.value);
            this.settingsService
                .UpdateSettings(this.settings)
                .subscribe(function (data) {
                _this.isSubmitting = false;
                _this.toastr.info('Settings saved');
            }, function (err) {
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
    };
    MainSettingsComponent.prototype.updateSettings = function (values) {
        Object.assign(this.settings, values);
    };
    MainSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-settings',
            template: __webpack_require__("../../../../../src/app/main-settings/main-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-settings/main-settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["g" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], MainSettingsComponent);
    return MainSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/render-templates/render-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h2>Render Templates</h2>\r\n  <!--<div class=\"btn-toolbar mb-2 mb-md-0\">\r\n    <div class=\"btn-group mr-2\">\r\n      <a class=\"btn btn-sm btn-primary\" routerLink=\"/article/-1\">Create Article</a>\r\n    </div>\r\n  </div>-->\r\n</div>\r\n\r\n<p>ToDo - ability to edit templates</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/render-templates/render-templates.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/render-templates/render-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderTemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RenderTemplatesComponent = /** @class */ (function () {
    function RenderTemplatesComponent() {
    }
    RenderTemplatesComponent.prototype.ngOnInit = function () {
    };
    RenderTemplatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-render-templates',
            template: __webpack_require__("../../../../../src/app/render-templates/render-templates.component.html"),
            styles: [__webpack_require__("../../../../../src/app/render-templates/render-templates.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RenderTemplatesComponent);
    return RenderTemplatesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/dynamic-field/dynamic-field.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFieldDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_button_form_button_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-button/form-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_input_form_input_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-input/form-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_select_form_select_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-select/form-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_date_form_date_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-date/form-date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_switch_form_switch_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-switch/form-switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_textarea_form_textarea_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-textarea/form-textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__form_check_form_check_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-check/form-check.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_radio_form_radio_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-radio/form-radio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var components = {
    button: __WEBPACK_IMPORTED_MODULE_2__form_button_form_button_component__["a" /* FormButtonComponent */],
    input: __WEBPACK_IMPORTED_MODULE_3__form_input_form_input_component__["a" /* FormInputComponent */],
    select: __WEBPACK_IMPORTED_MODULE_4__form_select_form_select_component__["a" /* FormSelectComponent */],
    check: __WEBPACK_IMPORTED_MODULE_8__form_check_form_check_component__["a" /* FormCheckComponent */],
    radio: __WEBPACK_IMPORTED_MODULE_9__form_radio_form_radio_component__["a" /* FormRadioComponent */],
    textarea: __WEBPACK_IMPORTED_MODULE_7__form_textarea_form_textarea_component__["a" /* FormTextareaComponent */],
    switch: __WEBPACK_IMPORTED_MODULE_6__form_switch_form_switch_component__["a" /* FormSwitchComponent */],
    date: __WEBPACK_IMPORTED_MODULE_5__form_date_form_date_component__["a" /* FormDateComponent */],
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    DynamicFieldDirective.prototype.ngOnChanges = function () {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    };
    DynamicFieldDirective.prototype.ngOnInit = function () {
        if (!components[this.config.controlType]) {
            var supportedTypes = Object.keys(components).join(', ');
            throw new Error("Trying to use an unsupported type (" + this.config.controlType + ").\n        Supported types: " + supportedTypes);
        }
        var component = this.resolver.resolveComponentFactory(components[this.config.controlType]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFieldDirective.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], DynamicFieldDirective.prototype, "group", void 0);
    DynamicFieldDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[dynamicField]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-button/form-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  letter-spacing: -0.5px;\n  cursor: pointer;\n  background-color: #9d62c8;\n  outline: 0;\n  line-height: 1;\n  text-align: center;\n  padding: 12px 30px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 2px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  -webkit-transition: background-color .3s, -webkit-box-shadow .3s;\n  transition: background-color .3s, -webkit-box-shadow .3s;\n  transition: background-color .3s, box-shadow .3s;\n  transition: background-color .3s, box-shadow .3s, -webkit-box-shadow .3s; }\n  button:hover {\n    background-color: #a46dcc;\n    -webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2); }\n  button:disabled {\n    background: rgba(0, 0, 0, 0.2);\n    color: rgba(0, 0, 0, 0.4);\n    cursor: not-allowed;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-button/form-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormButtonComponent = /** @class */ (function () {
    function FormButtonComponent() {
    }
    FormButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-button',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-button/form-button.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-button\"\n      [formGroup]=\"group\">\n      <button\n        [disabled]=\"config.disabled\"\n        type=\"submit\">\n        {{ config.label }}\n      </button>\n    </div>\n  "
        })
    ], FormButtonComponent);
    return FormButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-check/form-check.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-check/form-check.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCheckComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormCheckComponent = /** @class */ (function () {
    function FormCheckComponent() {
    }
    FormCheckComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-check',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-check/form-check.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-group\"\n      [formGroup]=\"group\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" [formControlName]=\"config.name\"\n          id=\"dynfld{{config.name}}\" value=\"true\">\n        <label class=\"form-check-label\" for=\"dynfld{{config.name}}\">\n          {{ config.label }}\n        </label>\n      </div>\n    </div>\n  "
        })
    ], FormCheckComponent);
    return FormCheckComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-checklist/form-checklist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-checklist/form-checklist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCheckListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormCheckListComponent = /** @class */ (function () {
    function FormCheckListComponent() {
    }
    FormCheckListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-checklist',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-checklist/form-checklist.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-group\"\n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <div class=\"form-check\" *ngFor=\"let opt of config.options; let i = index\">\n        <input class=\"form-check-input\" type=\"checkbox\" [formControlName]=\"config.name\"\n          id=\"dynfld{{config.name}}{{i}}\" value=\"{{ opt }}\">\n        <label class=\"form-check-label\" for=\"dynfld{{config.name}}{{i}}\">\n          {{ opt }}\n        </label>\n      </div>\n    </div>\n  "
        })
    ], FormCheckListComponent);
    return FormCheckListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-date/form-date.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-date/form-date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormDateComponent = /** @class */ (function () {
    function FormDateComponent() {
    }
    FormDateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-date',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-date/form-date.component.scss")],
            template: "\n    <div class=\"dynamic-field form-group\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <div class=\"input-group date-time\">\n        <div class=\"input-group-prepend\">\n          <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n            <i class=\"far fa-calendar-alt\"></i>\n          </button>\n        </div>\n        <input class=\"form-control\" [attr.placeholder]=\"config.placeholder\" [formControlName]=\"config.name\" ngbDatepicker #d=\"ngbDatepicker\">\n      </div>\n    </div>\n  "
        })
    ], FormDateComponent);
    return FormDateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-input/form-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-input/form-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormInputComponent = /** @class */ (function () {
    function FormInputComponent() {
    }
    FormInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-input',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-input/form-input.component.scss")],
            template: "\n    <div class=\"dynamic-field form-group\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <input\n        class=\"form-control\"\n        [attr.type]=\"config.inputType\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\">\n    </div>\n  "
        })
    ], FormInputComponent);
    return FormInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-radio/form-radio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-radio/form-radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormRadioComponent = /** @class */ (function () {
    function FormRadioComponent() {
    }
    FormRadioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-radio',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-radio/form-radio.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-group\"\n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <div class=\"form-check\" *ngFor=\"let opt of config.options; let i = index\">\n        <input class=\"form-check-input\" type=\"radio\" [formControlName]=\"config.name\"\n          id=\"dynfld{{config.name}}{{i}}\" value=\"{{ opt }}\">\n        <label class=\"form-check-label\" for=\"dynfld{{config.name}}{{i}}\">\n          {{ opt }}\n        </label>\n      </div>\n    </div>\n  "
        })
    ], FormRadioComponent);
    return FormRadioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-select/form-select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-select/form-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormSelectComponent = /** @class */ (function () {
    function FormSelectComponent() {
    }
    FormSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-select',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-select/form-select.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-group\"\n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <select class=\"form-control\" [formControlName]=\"config.name\">\n        <option value=\"\">{{ config.placeholder }}</option>\n        <option *ngFor=\"let opt of config.options\">\n          {{ opt }}\n        </option>\n      </select>\n    </div>\n  "
        })
    ], FormSelectComponent);
    return FormSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-switch/form-switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormSwitchComponent = /** @class */ (function () {
    function FormSwitchComponent() {
    }
    FormSwitchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-swtich',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-switch/form-swtich.component.scss")],
            template: "\n    <div class=\"dynamic-field form-group\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [formControlName]=\"config.name\">\n        <label ngbButtonLabel class=\"btn-outline-primary\">\n          <input ngbButton type=\"radio\" [value]=true> Yes\n        </label>\n        <label ngbButtonLabel class=\"btn-outline-secondary\">\n          <input ngbButton type=\"radio\" [value]=false checked> No\n        </label>\n      </div>\n    </div>\n  "
        })
    ], FormSwitchComponent);
    return FormSwitchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-switch/form-swtich.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-textarea/form-textarea.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/components/form-textarea/form-textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormTextareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormTextareaComponent = /** @class */ (function () {
    function FormTextareaComponent() {
    }
    FormTextareaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-textarea',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-textarea/form-textarea.component.scss")],
            template: "\n    <div class=\"dynamic-field form-group\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <textarea\n        class=\"form-control\"\n        [attr.rows]=\"config.rows\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\">\n      </textarea>\n    </div>\n  "
        })
    ], FormTextareaComponent);
    return FormTextareaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/containers/dynamic-form/dynamic-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/containers/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(fb) {
        this.fb = fb;
        this.config = [];
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(DynamicFormComponent.prototype, "controls", {
        get: function () { return this.config.filter(function (_a) {
            var controlType = _a.controlType;
            return controlType !== 'button';
        }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "changes", {
        get: function () { return this.form.valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "valid", {
        get: function () { return this.form.valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "value", {
        get: function () { return this.form.value; },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.form = this.createGroup();
        this.controls.forEach(function (control) {
            _this.form.addControl(control.name, _this.createControl(control));
        });
    };
    DynamicFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log('dynform ngOnChanges');
        if (this.form) {
            var controls_1 = Object.keys(this.form.controls);
            var configControls_1 = this.controls.map(function (item) { return item.name; });
            controls_1
                .filter(function (control) { return !configControls_1.includes(control); })
                .forEach(function (control) { return _this.form.removeControl(control); });
            configControls_1
                .filter(function (control) { return !controls_1.includes(control); })
                .forEach(function (name) {
                var config = _this.config.find(function (control) { return control.name === name; });
                _this.form.addControl(name, _this.createControl(config));
            });
        }
    };
    DynamicFormComponent.prototype.createGroup = function () {
        var _this = this;
        var group = this.fb.group({});
        this.controls.forEach(function (control) {
            console.log('createGroup loop');
            group.addControl(control.name, _this.createControl(control));
        });
        return group;
    };
    DynamicFormComponent.prototype.createControl = function (config) {
        var disabled = config.disabled, validation = config.validation, value = config.value;
        return this.fb.control({ disabled: disabled, value: value }, validation);
    };
    DynamicFormComponent.prototype.handleSubmit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    };
    DynamicFormComponent.prototype.setDisabled = function (name, disable) {
        if (this.form.controls[name]) {
            var method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            return;
        }
        this.config = this.config.map(function (item) {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    };
    DynamicFormComponent.prototype.setValue = function (name, value) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DynamicFormComponent.prototype, "submit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], DynamicFormComponent.prototype, "form", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            exportAs: 'dynamicForm',
            selector: 'dynamic-form',
            styles: [__webpack_require__("../../../../../src/app/shared/dynamic-form/containers/dynamic-form/dynamic-form.component.scss")],
            template: "\n      <ng-container\n        *ngFor=\"let field of config;\"\n        dynamicField\n        [config]=\"field\"\n        [group]=\"form\">\n      </ng-container>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dynamic-form/dynamic-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dynamic_field_dynamic_field_directive__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/dynamic-field/dynamic-field.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_dynamic_form_dynamic_form_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/containers/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_form_button_form_button_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-button/form-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_form_input_form_input_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-input/form-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_select_form_select_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-select/form-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_date_form_date_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-date/form-date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_form_switch_form_switch_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-switch/form-switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_form_textarea_form_textarea_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-textarea/form-textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_form_check_form_check_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-check/form-check.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_form_checklist_form_checklist_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-checklist/form-checklist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_form_radio_form_radio_component__ = __webpack_require__("../../../../../src/app/shared/dynamic-form/components/form-radio/form-radio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var DynamicFormModule = /** @class */ (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_dynamic_field_dynamic_field_directive__["a" /* DynamicFieldDirective */],
                __WEBPACK_IMPORTED_MODULE_5__containers_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_form_button_form_button_component__["a" /* FormButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_form_input_form_input_component__["a" /* FormInputComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_form_select_form_select_component__["a" /* FormSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_form_date_form_date_component__["a" /* FormDateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_form_switch_form_switch_component__["a" /* FormSwitchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_form_textarea_form_textarea_component__["a" /* FormTextareaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_form_check_form_check_component__["a" /* FormCheckComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_form_checklist_form_checklist_component__["a" /* FormCheckListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_form_radio_form_radio_component__["a" /* FormRadioComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__containers_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__components_form_button_form_button_component__["a" /* FormButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_form_input_form_input_component__["a" /* FormInputComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_form_select_form_select_component__["a" /* FormSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_form_date_form_date_component__["a" /* FormDateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_form_switch_form_switch_component__["a" /* FormSwitchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_form_textarea_form_textarea_component__["a" /* FormTextareaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_form_check_form_check_component__["a" /* FormCheckComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_form_radio_form_radio_component__["a" /* FormRadioComponent */]
            ]
        })
    ], DynamicFormModule);
    return DynamicFormModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/file-input/input-file.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n  <div class=\"uploading\" *ngIf=\"uploadingIsNotNullOrEmpty()\">\r\n    <h6>Uploading</h6>\r\n    <div class=\"file-preview table\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <tr class=\"file-preview-item\" *ngFor=\"let file of uploads; let i = index\">\r\n          <td class=\"file-content\">\r\n            <img src=\"{{ file.icon }}\" *ngIf=\"file.icon\">\r\n            <i class=\"fas {{ file.faIcon }}\" *ngIf=\"file.faIcon\"></i>\r\n          </td>\r\n          <td>\r\n            <p>{{ file.file.name }} <i>{{ file.size }}</i></p>\r\n            <ngb-progressbar *ngIf=\"(file.percentage>0)\" [showValue]=\"true\" type=\"info\" [value]=\"file.percentage\"></ngb-progressbar>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <ng2-file-input (onAction)=\"onInputAction($event)\"\r\n                  [drop-text]=\"dropText\"\r\n                  [accept]=\"inputAccept\"\r\n                  [extensions]=\"extensions\"\r\n                  [show-previews]=\"false\"\r\n                  [multiple]=\"multiple\"></ng2-file-input>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/file-input/input-file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/file-input/input-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_progress_http__ = __webpack_require__("../../../../angular-progress-http/angular-progress-http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputFileComponent = /** @class */ (function () {
    function InputFileComponent(toastr, progressHttp, helperService, filesService) {
        this.toastr = toastr;
        this.progressHttp = progressHttp;
        this.helperService = helperService;
        this.filesService = filesService;
        this.fileDisplayType = 'files';
        this.dropText = 'Drop files here';
        this.buttonText = 'Browse';
        this.acceptedFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fileUploaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploads = [];
        this.uploaded = [];
    }
    InputFileComponent.prototype.buildFileUploadObject = function (inputFile) {
        var f = {
            name: inputFile.name,
            file: inputFile,
            uploaded: false,
            percentage: null,
            icon: null,
            faIcon: null,
            size: '0kb'
        };
        this.setFileIcon(f, inputFile);
        this.setSize(f, inputFile);
        return f;
    };
    /**
       * Sets the icon of the file.
       * @param file
       * @param inputFile
       */
    InputFileComponent.prototype.setFileIcon = function (file, inputFile) {
        var icon;
        switch (inputFile.type) {
            case 'application/pdf':
                icon = 'fa-file-pdf';
                break;
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                icon = 'fa-file-word';
                break;
            case 'application/zip':
                icon = 'fa-file-archive';
                break;
            default:
                icon = 'fa-file';
        }
        file.faIcon = icon;
    };
    /**
       * Accepted file handler.
       * @param file
       */
    InputFileComponent.prototype.fileUploadedHandeler = function (file, upRes) {
        file.uploaded = true;
        this.fileUploaded.emit(upRes);
        this.uploads = this.uploads.filter(function (obj) { return obj !== file; });
    };
    InputFileComponent.prototype.uploadFile = function (f) {
        var _this = this;
        this.filesService.upload(f, this.uploadFolder).subscribe(function (data) {
            console.log(data);
            if (data.alreadyExists) {
                _this.toastr.warning('File: ' + f.name + ' already exists, it has not been uploaded but the existing file has been added to you uploads');
                _this.fileUploadedHandeler(f, data);
            }
            else if (data.fileId > 0) {
                _this.toastr.success('File: ' + f.name + ' uploaded');
                _this.fileUploadedHandeler(f, data);
            }
            else if (data.message != null && data.message != "") {
                f.percentage = null;
                _this.toastr.warning('File: ' + f.name + ' - ' + data.message);
            }
            else {
                _this.toastr.warning('File: ' + f.name + ' - ELSE');
            }
        });
    };
    /**
     * Gets the size of the file to display.
     * @param file
     */
    InputFileComponent.prototype.setSize = function (file, inputFile) {
        var size = Math.round(inputFile.size / 1024);
        file.size = '(' + size + ' KB)';
    };
    InputFileComponent.prototype.onInputAction = function (e) {
        console.log(event);
        switch (e.action) {
            case 1:
                var uf = this.buildFileUploadObject(e.file);
                this.uploads.push(uf);
                //this.toastr.info('File: ' + e.file.name + ' added for upload');
                this.uploadFile(uf);
                break;
            case 2:
                this.toastr.warning('File: ' + e.file.name + ' upload denied');
            case 4:
                this.toastr.warning('Could not add file: ' + e.file.name);
            case 3:
                this.toastr.warning('Could not remove file: ' + e.file.name);
            case 0:
                this.toastr.warning('Removed file: ' + e.file.name);
            default:
                break;
        }
    };
    InputFileComponent.prototype.uploadingIsNotNullOrEmpty = function () {
        return this.uploads != null && this.uploads.length != null && this.uploads.length > 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "inputAccept", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "extensions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "uploadFolder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "fileDisplayType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "dropText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "buttonText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputFileComponent.prototype, "multiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InputFileComponent.prototype, "acceptedFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InputFileComponent.prototype, "fileUploaded", void 0);
    InputFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'input-file',
            styles: [__webpack_require__("../../../../../src/app/shared/file-input/input-file.component.scss")],
            template: __webpack_require__("../../../../../src/app/shared/file-input/input-file.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1_angular_progress_http__["a" /* ProgressHttp */],
            __WEBPACK_IMPORTED_MODULE_3__index__["f" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_3__index__["e" /* FilesService */]])
    ], InputFileComponent);
    return InputFileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_errors_component__ = __webpack_require__("../../../../../src/app/shared/list-errors.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__shared_module__["a"]; });



//export * from './oa-input/input-file.module';
//export * from './file-input/input-file.component';



/***/ }),

/***/ "../../../../../src/app/shared/list-errors.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\r\n  <li *ngFor=\"let error of errorList\">\r\n    {{ error }}\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/list-errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListErrorsComponent = /** @class */ (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = Object.keys(errorList.errors || {})
                .map(function (key) { return key + " " + errorList.errors[key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ListErrorsComponent.prototype, "errors", null);
    ListErrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-errors',
            template: __webpack_require__("../../../../../src/app/shared/list-errors.component.html")
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/article.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ArticleViewModel */
var ArticleViewModel = /** @class */ (function () {
    function ArticleViewModel() {
    }
    return ArticleViewModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/custom-def.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomDefModel */
var CustomDefModel = /** @class */ (function () {
    function CustomDefModel() {
    }
    return CustomDefModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_model__ = __webpack_require__("../../../../../src/app/shared/models/tag.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_model__ = __webpack_require__("../../../../../src/app/shared/models/article.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagedList_model__ = __webpack_require__("../../../../../src/app/shared/models/pagedList.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_def_model__ = __webpack_require__("../../../../../src/app/shared/models/custom-def.model.ts");
/* unused harmony namespace reexport */







/***/ }),

/***/ "../../../../../src/app/shared/models/pagedList.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PagedListMetaViewModel */
/* unused harmony export ArticlePagedListMetaViewModel */
var PagedListMetaViewModel = /** @class */ (function () {
    function PagedListMetaViewModel() {
    }
    return PagedListMetaViewModel;
}());

var ArticlePagedListMetaViewModel = /** @class */ (function () {
    function ArticlePagedListMetaViewModel() {
    }
    return ArticlePagedListMetaViewModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/tag.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TagViewModel */
var TagViewModel = /** @class */ (function () {
    function TagViewModel() {
    }
    return TagViewModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserViewModel */
var UserViewModel = /** @class */ (function () {
    function UserViewModel() {
    }
    return UserViewModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_progress_http__ = __webpack_require__("../../../../angular-progress-http/angular-progress-http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = /** @class */ (function () {
    function ApiService(http, progressHttp) {
        this.http = http;
        this.progressHttp = progressHttp;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpHeaders */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.json());
    };
    ApiService.prototype.upload = function (path, f, uploadFolder) {
        var form = new FormData();
        form.append("POSTFILE", f.file);
        form.append("OVERWRITE", 'false');
        form.append("FOLDER", uploadFolder);
        return this.progressHttp
            .withUploadProgressListener(function (progress) { f.percentage = progress.percentage; })
            .post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, form).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["f" /* HttpParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders(), params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angular_progress_http__["a" /* ProgressHttp */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlesService = /** @class */ (function () {
    function ArticlesService(apiService) {
        this.apiService = apiService;
    }
    ArticlesService.prototype.validateUrlNotInUse = function (articleId, url) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/urlNotInUse', { articleId: articleId, url: url })
            .map(function (data) {
            var ret = data ? {} : { urlTaken: true };
            console.log(ret);
            return ret;
        });
    };
    ArticlesService.prototype.Get = function (id) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/Get', { articleId: id })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    ArticlesService.prototype.GetAll = function () {
        return this.apiService.get('/API/dnn_OpenNewsSPA/Articles/GetList')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    ArticlesService.prototype.GetPagedList = function (params) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/GetPagedList', params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    ArticlesService.prototype.Update = function (article) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/Update', article)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data; }));
    };
    ArticlesService.prototype.Upsert = function (article) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/Upsert', article)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data; }));
    };
    ArticlesService.prototype.Delete = function (articleId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/Delete', { articleId: articleId })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data; }));
    };
    ArticlesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesService = /** @class */ (function () {
    function CategoriesService(apiService) {
        this.apiService = apiService;
    }
    CategoriesService.prototype.validateUrlNotInUse = function (categoryId, url) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Categories/urlNotInUse', { categoryId: categoryId, url: url })
            .map(function (data) {
            var ret = data ? {} : { urlTaken: true };
            console.log(ret);
            return ret;
        });
    };
    CategoriesService.prototype.GetAll = function () {
        console.log('GetAll Categories()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Categories/GetList')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    CategoriesService.prototype.GetTree = function () {
        console.log('GetAll Categories()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Categories/GetTree')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    CategoriesService.prototype.Update = function (category) {
        console.log('UpdateCategory()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Categories/Update', category)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data; }));
    };
    CategoriesService.prototype.Upsert = function (category) {
        console.log('UpdateCategory()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Categories/Upsert', category)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data; }));
    };
    CategoriesService.prototype.UpdateTree = function (categories) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Categories/UpdateCategoryTree', categories)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data; }));
    };
    CategoriesService.prototype.Delete = function (categoryId) {
        console.log('UpdateCategory()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Categories/Delete', { categoryId: categoryId })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data; }));
    };
    CategoriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/custom-fields.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFieldsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomFieldsService = /** @class */ (function () {
    function CustomFieldsService(apiService) {
        this.apiService = apiService;
    }
    //Get(id): Observable<TagViewModel[]> {
    //  return this.apiService.get('/API/dnn_OpenNewsSPA/Tags/Get', id)
    //    .pipe(map(data => {
    //      return data;
    //    }));
    //}
    CustomFieldsService.prototype.GetAll = function () {
        return this.apiService.get('/API/dnn_OpenNewsSPA/CustomFields/GetList')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    CustomFieldsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], CustomFieldsService);
    return CustomFieldsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/files.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilesService = /** @class */ (function () {
    function FilesService(apiService) {
        this.apiService = apiService;
    }
    FilesService.prototype.upload = function (f, folder) {
        return this.apiService.upload('/API/dnn_OpenNewsSPA/Files/UploadFromNg', f, folder)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) {
            return res.json();
        }));
    };
    FilesService.prototype.GetArticleFile = function (articleId, fileId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/GetArticleFile', { articleId: articleId, fileId: fileId })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    FilesService.prototype.GetFileById = function (fileId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/GetFileById', { fileId: fileId })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    FilesService.prototype.GetFileInfoById = function (fileId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/GetFileInfoById', { fileId: fileId })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    FilesService.prototype.GetAll = function (articleId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/GetList', { articleId: articleId })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    FilesService.prototype.Upsert = function (file) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/Upsert', file)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data; }));
    };
    FilesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_service__ = __webpack_require__("../../../../../src/app/shared/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelperService = /** @class */ (function () {
    function HelperService(apiService, settingsService) {
        this.apiService = apiService;
        this.settingsService = settingsService;
    }
    HelperService.prototype.cleanUrl = function (url) {
        console.log('cleanUrl()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Helper/CleanUrl', { url: url })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    HelperService.prototype.getAuthors = function (inRole) {
        console.log('GetAll getAuthors()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/User/GetList', { inRole: inRole })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    HelperService.prototype.getNaModules = function () {
        console.log('GetAll getAuthors()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Helper/GetNAModules')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    HelperService.prototype.importModule = function (naModeulId) {
        console.log('importModule()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Helper/ImportFromNAModule', { naModeulId: naModeulId, oaModeulId: -1 })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    HelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */]])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_service__ = __webpack_require__("../../../../../src/app/shared/services/settings.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_service__ = __webpack_require__("../../../../../src/app/shared/services/categories.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__categories_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_service__ = __webpack_require__("../../../../../src/app/shared/services/articles.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__articles_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_service__ = __webpack_require__("../../../../../src/app/shared/services/helper.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__helper_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tags_service__ = __webpack_require__("../../../../../src/app/shared/services/tags.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__tags_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__files_service__ = __webpack_require__("../../../../../src/app/shared/services/files.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__files_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_fields_service__ = __webpack_require__("../../../../../src/app/shared/services/custom-fields.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__custom_fields_service__["a"]; });










/***/ }),

/***/ "../../../../../src/app/shared/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsService = /** @class */ (function () {
    function SettingsService(apiService) {
        this.apiService = apiService;
        this.currentSettingsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.currentSettings = this.currentSettingsSubject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["distinctUntilChanged"])());
    }
    SettingsService.prototype.GetTimeZones = function () {
        console.log('GetTimeZones()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Settings/GetTimeZones')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) { return data; }));
    };
    SettingsService.prototype.GetPortalFolders = function () {
        console.log('GetPortalFolders()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Settings/GetPortalFolders')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) { return data; }));
    };
    SettingsService.prototype.GetTemplates = function () {
        console.log('GetTemplates()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Settings/GetTemplates')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) { return data; }));
    };
    SettingsService.prototype.GetSettings = function () {
        var _this = this;
        console.log('GetSettings()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Settings/GetSettings')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
            _this.currentSettingsSubject.next(data);
            return data;
        }));
    };
    SettingsService.prototype.getCurrentSettings = function () {
        return this.currentSettingsSubject.value;
    };
    SettingsService.prototype.setGlobalSettings = function () {
        var _this = this;
        console.log("GetSettingsPromise:: before http.get call");
        var promise = this.apiService.get('/API/dnn_OpenNewsSPA/Settings/GetSettings')
            .toPromise()
            .then(function (data) {
            _this.currentSettingsSubject.next(data);
            return data;
        });
        return promise;
    };
    //GetSettingsPromise(): Promise<any> {
    //  console.log(`GetSettingsPromise:: before http.get call`);
    //  const promise = this.apiService.get('http://localhost/API/dnn_OpenNewsSPA/Settings/GetSettings')
    //    .toPromise()
    //    .then(data => {
    //      console.log(`Settings from API: `, data);
    //      //this.globals.settings = settings;
    //      return data;
    //    });
    //  return promise;
    //}
    SettingsService.prototype.UpdateSettings = function (settings) {
        console.log('UpdateSettings()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Settings/UpdateSettings', settings)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) { return data; }));
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/tags.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagsService = /** @class */ (function () {
    function TagsService(apiService) {
        this.apiService = apiService;
    }
    TagsService.prototype.Get = function (id) {
        return this.apiService.get('/API/dnn_OpenNewsSPA/Tags/Get', id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    TagsService.prototype.GetAll = function () {
        return this.apiService.get('/API/dnn_OpenNewsSPA/Tags/GetList')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data;
        }));
    };
    TagsService.prototype.Upsert = function (article) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Tags/Upsert', article)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data; }));
    };
    TagsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_errors_component__ = __webpack_require__("../../../../../src/app/shared/list-errors.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
//import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';

//import { ShowAuthedDirective } from './show-authed.directive';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */]
            ],
            declarations: [
                //ArticleListComponent,
                //ArticleMetaComponent,
                //ArticlePreviewComponent,
                //FavoriteButtonComponent,
                //FollowButtonComponent,
                __WEBPACK_IMPORTED_MODULE_5__list_errors_component__["a" /* ListErrorsComponent */],
            ],
            exports: [
                //ArticleListComponent,
                //ArticleMetaComponent,
                //ArticlePreviewComponent,
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                //FavoriteButtonComponent,
                //FollowButtonComponent,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__list_errors_component__["a" /* ListErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/tags/tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h2>Tags</h2>\r\n  <!--<div class=\"btn-toolbar mb-2 mb-md-0\">\r\n    <div class=\"btn-group mr-2\">\r\n      <a class=\"btn btn-sm btn-primary\" routerLink=\"/article/-1\">Create Article</a>\r\n    </div>\r\n  </div>-->\r\n</div>\r\n<p>ToDo - list all tags in use with a count</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/tags/tags.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagsComponent = /** @class */ (function () {
    function TagsComponent() {
    }
    TagsComponent.prototype.ngOnInit = function () {
    };
    TagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__("../../../../../src/app/tags/tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tags/tags.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TagsComponent);
    return TagsComponent;
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
    production: false,
    api_url: ''
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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