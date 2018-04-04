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
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    CategoriesService.prototype.GetTree = function () {
        console.log('GetAll Categories()');
        return this.apiService.get('/API/dnn_OpenNewsSPA/Categories/GetTree')
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    CategoriesService.prototype.Update = function (category) {
        console.log('UpdateCategory()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Categories/Update', category)
            .pipe(operators_1.map(function (data) { return data; }));
    };
    CategoriesService.prototype.Upsert = function (category) {
        console.log('UpdateCategory()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Categories/Upsert', category)
            .pipe(operators_1.map(function (data) { return data; }));
    };
    CategoriesService.prototype.UpdateTree = function (categories) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Categories/UpdateCategoryTree', categories)
            .pipe(operators_1.map(function (data) { return data; }));
    };
    CategoriesService.prototype.Delete = function (categoryId) {
        console.log('UpdateCategory()');
        return this.apiService.post('/API/dnn_OpenNewsSPA/Categories/Delete', { categoryId: categoryId })
            .pipe(operators_1.map(function (data) { return data; }));
    };
    CategoriesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], CategoriesService);
    return CategoriesService;
}());
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map