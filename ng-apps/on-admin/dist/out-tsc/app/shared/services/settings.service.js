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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var api_service_1 = require("./api.service");
var operators_1 = require("rxjs/operators");
var SettingsService = /** @class */ (function () {
    function SettingsService(apiService) {
        this.apiService = apiService;
        this.currentSettingsSubject = new BehaviorSubject_1.BehaviorSubject({});
        this.currentSettings = this.currentSettingsSubject.asObservable().pipe(operators_1.distinctUntilChanged());
    }
    SettingsService.prototype.GetTimeZones = function () {
        console.log('GetTimeZones()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Settings/GetTimeZones')
            .pipe(operators_1.map(function (data) { return data; }));
    };
    SettingsService.prototype.GetPortalFolders = function () {
        console.log('GetPortalFolders()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Settings/GetPortalFolders')
            .pipe(operators_1.map(function (data) { return data; }));
    };
    SettingsService.prototype.GetTemplates = function () {
        console.log('GetTemplates()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Settings/GetTemplates')
            .pipe(operators_1.map(function (data) { return data; }));
    };
    SettingsService.prototype.GetSettings = function () {
        var _this = this;
        console.log('GetSettings()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Settings/GetSettings')
            .pipe(operators_1.map(function (data) {
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
            .pipe(operators_1.map(function (data) { return data; }));
    };
    SettingsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map