"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_settings_component_1 = require("./main-settings/main-settings.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var articles_component_1 = require("./articles/articles.component");
var article_form_component_1 = require("./article-form/article-form.component");
var categories_component_1 = require("./categories/categories.component");
var tags_component_1 = require("./tags/tags.component");
var render_templates_component_1 = require("./render-templates/render-templates.component");
var email_templates_component_1 = require("./email-templates/email-templates.component");
var custom_fields_component_1 = require("./custom-fields/custom-fields.component");
var importer_component_1 = require("./importer/importer.component");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'articles', component: articles_component_1.ArticlesComponent },
    { path: 'article/:id', component: article_form_component_1.ArticleFormComponent },
    { path: 'categories', component: categories_component_1.CategoriesComponent },
    { path: 'tags', component: tags_component_1.TagsComponent },
    { path: 'render-templates', component: render_templates_component_1.RenderTemplatesComponent },
    { path: 'custom-fields', component: custom_fields_component_1.CustomFieldsComponent },
    { path: 'email-templates', component: email_templates_component_1.EmailTemplatesComponent },
    { path: 'main-settings', component: main_settings_component_1.MainSettingsComponent },
    { path: 'import', component: importer_component_1.ImporterComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map