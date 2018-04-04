"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_service_1 = require("./api.service");
var operators_1 = require("rxjs/operators");
var settings_service_1 = require("./settings.service");
var HelperService = /** @class */ (function () {
    function HelperService(apiService, settingsService) {
        this.apiService = apiService;
        this.settingsService = settingsService;
    }
    HelperService.prototype.cleanUrl = function (url) {
        console.log('cleanUrl()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Helper/CleanUrl', { url: url })
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    HelperService.prototype.getAuthors = function (inRole) {
        console.log('GetAll getAuthors()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/User/GetList', { inRole: inRole })
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    HelperService.prototype.getNaModules = function () {
        console.log('GetAll getAuthors()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Helper/GetNAModules')
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    HelperService.prototype.importModule = function (naModeulId) {
        console.log('importModule()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Helper/ImportFromNAModule', { naModeulId: naModeulId, oaModeulId: -1 })
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    HelperService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            settings_service_1.SettingsService])
    ], HelperService);
    return HelperService;
}());
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map