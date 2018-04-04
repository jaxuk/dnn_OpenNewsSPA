"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var context_service_1 = require("./context/context.service");
var dnn_app_component_1 = require("./dnn-app.component");
var shared_1 = require("./shared");
var router_1 = require("@angular/router");
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
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
        //export class AppComponent {
        //}
        ,
        __param(5, core_1.Inject(common_1.APP_BASE_HREF)),
        __metadata("design:paramtypes", [core_1.ElementRef,
            context_service_1.Context,
            shared_1.SettingsService,
            router_1.ActivatedRoute,
            router_1.Router, String])
    ], AppComponent);
    return AppComponent;
}(dnn_app_component_1.DnnAppComponent));
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map