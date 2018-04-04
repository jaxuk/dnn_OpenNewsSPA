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
var FilesService = /** @class */ (function () {
    function FilesService(apiService) {
        this.apiService = apiService;
    }
    FilesService.prototype.upload = function (f, folder) {
        return this.apiService.upload('/API/dnn_OpenNewsSPA/Files/UploadFromNg', f, folder)
            .pipe(operators_1.map(function (res) {
            return res.json();
        }));
    };
    FilesService.prototype.GetArticleFile = function (articleId, fileId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/GetArticleFile', { articleId: articleId, fileId: fileId })
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    FilesService.prototype.GetFileById = function (fileId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/GetFileById', { fileId: fileId })
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    FilesService.prototype.GetFileInfoById = function (fileId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/GetFileInfoById', { fileId: fileId })
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    FilesService.prototype.GetAll = function (articleId) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/GetList', { articleId: articleId })
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    FilesService.prototype.Upsert = function (file) {
        return this.apiService.post('/API/dnn_OpenNewsSPA/Files/Upsert', file)
            .pipe(operators_1.map(function (data) { return data; }));
    };
    FilesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], FilesService);
    return FilesService;
}());
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map