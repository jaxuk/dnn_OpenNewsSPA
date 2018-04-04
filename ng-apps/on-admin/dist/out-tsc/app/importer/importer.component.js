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
var index_1 = require("../shared/index");
var ngx_toastr_1 = require("ngx-toastr");
var ImporterComponent = /** @class */ (function () {
    function ImporterComponent(helperService, toastr) {
        this.helperService = helperService;
        this.toastr = toastr;
        this.naModules = [];
        this.isSubmitting = false;
    }
    ImporterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helperService.getNaModules().subscribe(function (data) {
            console.log('getNaModules');
            console.log(data);
            _this.naModules = data;
            //this.toastr.info('Imported');
        }, function (err) {
            _this.toastr.error('Error getting Na Modules from server');
        });
    };
    ImporterComponent.prototype.importModule = function () {
        var _this = this;
        console.log('importModule');
        if (confirm("Are you sure you want to delete all module content and import?")) {
            this.isSubmitting = true;
            var naModuleId = document.querySelector('#ddNaModule').value;
            this.helperService.importModule(naModuleId).subscribe(function (data) {
                console.log(data);
                _this.naModules = data;
                _this.toastr.info('Imported!');
                _this.isSubmitting = false;
            }, function (err) {
                _this.toastr.error('Error importing naModule');
                _this.isSubmitting = false;
            });
        }
        ;
    };
    ImporterComponent = __decorate([
        core_1.Component({
            selector: 'app-importer',
            templateUrl: './importer.component.html',
            styleUrls: ['./importer.component.scss']
        }),
        __metadata("design:paramtypes", [index_1.HelperService,
            ngx_toastr_1.ToastrService])
    ], ImporterComponent);
    return ImporterComponent;
}());
exports.ImporterComponent = ImporterComponent;
//# sourceMappingURL=importer.component.js.map