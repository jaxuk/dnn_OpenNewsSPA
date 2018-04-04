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
var CustomFieldsService = /** @class */ (function () {
    function CustomFieldsService(apiService) {
        this.apiService = apiService;
    }
    //Get(id): Observable<TagViewModel[]> {
    //  return this.apiService.get('/API/dnn_OpenNewsSPA/Tags/Get', id)
    //    .pipe(map(data => {
    //      return data;
    //    }));
    //}
    CustomFieldsService.prototype.GetAll = function () {
        return this.apiService.get('/API/dnn_OpenNewsSPA/CustomFields/GetList')
            .pipe(operators_1.map(function (data) {
            return data;
        }));
    };
    CustomFieldsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], CustomFieldsService);
    return CustomFieldsService;
}());
exports.CustomFieldsService = CustomFieldsService;
//# sourceMappingURL=custom-fields.service.js.map