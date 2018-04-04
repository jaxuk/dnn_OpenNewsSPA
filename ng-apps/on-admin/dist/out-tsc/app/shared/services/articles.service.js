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
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    ArticlesService.prototype.GetAll = function () {
        return this.apiService.get('/API/dnn_OpenNewsSPA/Articles/GetList')
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    ArticlesService.prototype.GetPagedList = function (params) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/GetPagedList', params)
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    ArticlesService.prototype.Update = function (article) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/Update', article)
            .pipe(operators_1.map(function (data) { return data; }));
    };
    ArticlesService.prototype.Upsert = function (article) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/Upsert', article)
            .pipe(operators_1.map(function (data) { return data; }));
    };
    ArticlesService.prototype.Delete = function (articleId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Articles/Delete', { articleId: articleId })
            .pipe(operators_1.map(function (data) { return data; }));
    };
    ArticlesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], ArticlesService);
    return ArticlesService;
}());
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map