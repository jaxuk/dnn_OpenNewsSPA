"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
//import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
//import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
var list_errors_component_1 = require("./list-errors.component");
//import { ShowAuthedDirective } from './show-authed.directive';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule
            ],
            declarations: [
                //ArticleListComponent,
                //ArticleMetaComponent,
                //ArticlePreviewComponent,
                //FavoriteButtonComponent,
                //FollowButtonComponent,
                list_errors_component_1.ListErrorsComponent,
            ],
            exports: [
                //ArticleListComponent,
                //ArticleMetaComponent,
                //ArticlePreviewComponent,
                common_1.CommonModule,
                //FavoriteButtonComponent,
                //FollowButtonComponent,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                list_errors_component_1.ListErrorsComponent,
                router_1.RouterModule,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map