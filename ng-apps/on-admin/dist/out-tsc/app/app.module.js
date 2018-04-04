"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
var context_service_1 = require("./context/context.service");
var dev_context_1 = require("./context/dev-context");
var dnn_interceptor_1 = require("./http/dnn.interceptor");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var main_settings_component_1 = require("./main-settings/main-settings.component");
var app_routing_module_1 = require(".//app-routing.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var articles_component_1 = require("./articles/articles.component");
var categories_component_1 = require("./categories/categories.component");
var tags_component_1 = require("./tags/tags.component");
var forms_1 = require("@angular/forms");
var ng_bootstrap_form_validation_1 = require("ng-bootstrap-form-validation");
var angular_tree_component_1 = require("angular-tree-component");
var ng2_file_input_1 = require("ng2-file-input");
//import { InputFileModule } from 'ngx-input-file';
var http_2 = require("@angular/http");
var angular_progress_http_1 = require("angular-progress-http");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_toastr_1 = require("ngx-toastr");
var http_client_1 = require("@ngx-loading-bar/http-client");
var router_1 = require("@ngx-loading-bar/router");
var ngx_type_ahead_1 = require("ngx-type-ahead");
var ng2_select_1 = require("ng2-select");
var angular_sortablejs_1 = require("angular-sortablejs");
var angular5_data_table_1 = require("angular5-data-table");
var shared_1 = require("./shared");
var category_form_component_1 = require("./category-form/category-form.component");
var article_form_component_1 = require("./article-form/article-form.component");
var input_file_component_1 = require("./shared/file-input/input-file.component");
var article_file_component_1 = require("./article-file/article-file.component");
var render_templates_component_1 = require("./render-templates/render-templates.component");
var email_templates_component_1 = require("./email-templates/email-templates.component");
var custom_fields_component_1 = require("./custom-fields/custom-fields.component");
var dynamic_form_module_1 = require("./shared/dynamic-form/dynamic-form.module");
var importer_component_1 = require("./importer/importer.component");
function getBaseHref(platformLocation) {
    return platformLocation.getBaseHrefFromDOM();
}
exports.getBaseHref = getBaseHref;
//export function get_settings(appLoadService: SettingsService) {
//  return () => appLoadService.GetSettingsPromise();
//}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                main_settings_component_1.MainSettingsComponent,
                dashboard_component_1.DashboardComponent,
                articles_component_1.ArticlesComponent,
                categories_component_1.CategoriesComponent,
                tags_component_1.TagsComponent,
                category_form_component_1.CategoryFormComponent,
                article_form_component_1.ArticleFormComponent,
                input_file_component_1.InputFileComponent,
                article_file_component_1.ArticleFileComponent,
                render_templates_component_1.RenderTemplatesComponent,
                email_templates_component_1.EmailTemplatesComponent,
                custom_fields_component_1.CustomFieldsComponent,
                importer_component_1.ImporterComponent
            ],
            imports: [
                dynamic_form_module_1.DynamicFormModule,
                angular5_data_table_1.DataTableModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                ng2_select_1.SelectModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_form_validation_1.NgBootstrapFormValidationModule.forRoot(),
                http_1.HttpClientModule,
                http_2.HttpModule,
                angular_progress_http_1.ProgressHttpModule,
                app_routing_module_1.AppRoutingModule,
                shared_1.SharedModule,
                angular_tree_component_1.TreeModule,
                ng2_file_input_1.Ng2FileInputModule.forRoot(),
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                http_client_1.LoadingBarHttpClientModule,
                router_1.LoadingBarRouterModule,
                ngx_type_ahead_1.TypeaheadModule,
                angular_sortablejs_1.SortablejsModule.forRoot({ animation: 150 })
                //AppLoadModule
            ],
            providers: [
                dev_context_1.DevContext,
                context_service_1.Context,
                dnn_interceptor_1.DnnInterceptor,
                shared_1.ApiService,
                shared_1.SettingsService,
                shared_1.CategoriesService,
                shared_1.HelperService,
                shared_1.ArticlesService,
                shared_1.TagsService,
                shared_1.CustomFieldsService,
                shared_1.FilesService,
                {
                    provide: common_1.APP_BASE_HREF,
                    useFactory: getBaseHref,
                    deps: [common_1.PlatformLocation]
                }
                //Globals
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map