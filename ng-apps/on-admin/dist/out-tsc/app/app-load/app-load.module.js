"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
//import { Globals } from '../globals';
var context_service_1 = require("../context/context.service");
var dev_context_1 = require("../context/dev-context");
var dnn_interceptor_1 = require("../http/dnn.interceptor");
//import { ApiService } from '../shared';
var app_load_service_1 = require("./app-load.service");
function init_app(appLoadService
    //context: Context
    //element: ElementRef
) {
    console.log('init_app');
    return function () { return appLoadService.initializeApp(); };
}
exports.init_app = init_app;
//export function get_settings(appLoadService: AppLoadService) {
//  return () => appLoadService.getSettings();
//}
var AppLoadModule = /** @class */ (function () {
    function AppLoadModule() {
    }
    AppLoadModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpClientModule
            ],
            providers: [
                app_load_service_1.AppLoadService,
                //Globals,
                dev_context_1.DevContext,
                context_service_1.Context,
                dnn_interceptor_1.DnnInterceptor,
                //ApiService,
                { provide: core_1.APP_INITIALIZER, useFactory: init_app, deps: [app_load_service_1.AppLoadService], multi: true },
            ]
        })
    ], AppLoadModule);
    return AppLoadModule;
}());
exports.AppLoadModule = AppLoadModule;
//# sourceMappingURL=app-load.module.js.map