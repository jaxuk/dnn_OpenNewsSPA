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
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var angular_progress_http_1 = require("angular-progress-http");
var ngx_toastr_1 = require("ngx-toastr");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
//import { InputFileModule } from 'ngx-input-file';
var shared_1 = require("../shared");
var CategoryFormComponent = /** @class */ (function () {
    function CategoryFormComponent(helperService, toastr, settingsService, categoriesService, filesService, fb, progressHttp, modalService) {
        this.helperService = helperService;
        this.toastr = toastr;
        this.settingsService = settingsService;
        this.categoriesService = categoriesService;
        this.filesService = filesService;
        this.fb = fb;
        this.progressHttp = progressHttp;
        this.modalService = modalService;
        this.settings = {};
        this.category = {};
        this.onUpserted = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
        this.errors = {};
        this.isSubmitting = false;
        this.inputFileModel = new Array();
        this.files = [];
        this.categoryForm = this.fb.group({
            Name: ['', forms_2.Validators.compose([forms_2.Validators.required, forms_2.Validators.maxLength(255)])],
            Description: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(255)])],
            MetaTitle: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(255)])],
            MetaDescription: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(255)])],
            MetaKeywords: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(255)])],
            PageHeadText: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(500)])],
            URL: ['', {
                    validators: forms_2.Validators.compose([forms_2.Validators.required, forms_2.Validators.maxLength(255)]),
                    asyncValidators: this.validateUrlNotInUse.bind(this),
                    updateOn: 'blur'
                }],
        });
    }
    CategoryFormComponent.prototype.validateUrlNotInUse = function (control) {
        return this.categoriesService.validateUrlNotInUse(this.category.CategoryID, control.value);
    };
    CategoryFormComponent.prototype.ngOnChanges = function () {
        this.categoryForm.reset({
            Name: this.category.Name,
            Description: this.category.Description,
            MetaTitle: this.category.MetaTitle,
            MetaDescription: this.category.MetaDescription,
            MetaKeywords: this.category.MetaKeywords,
            PageHeadText: this.category.PageHeadText,
            URL: this.category.URL
        });
    };
    CategoryFormComponent.prototype.onFilesSelected = function (fileList) {
    };
    CategoryFormComponent.prototype.parentUrl = function () {
        return this.settingsService.getCurrentSettings().PageTabUrl;
    };
    CategoryFormComponent.prototype.nameChanged = function (event) {
        if (this.category.CategoryID <= 0) {
            this.urlChanged(event);
        }
    };
    CategoryFormComponent.prototype.urlChanged = function (event) {
        var _this = this;
        this.helperService.cleanUrl(event.target.value).subscribe(function (res) {
            _this.categoryForm.get('URL').setValue((res));
        });
    };
    CategoryFormComponent.prototype.onSubmit = function (f) {
        console.log(f);
    };
    CategoryFormComponent.prototype.deleteCategory = function () {
        var _this = this;
        if (confirm("Delete this category - are you sure?")) {
            this.isSubmitting = true;
            this.categoriesService.Delete(this.category.CategoryID).subscribe(function (data) {
                _this.isSubmitting = false;
                _this.onDelete.emit({});
                _this.toastr.info('Category deleted!');
            }, function (err) {
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
    };
    CategoryFormComponent.prototype.cancelChanges = function () {
        if (!this.categoryForm.untouched) {
            if (confirm("Discard current changes?")) {
                this.onCancel.emit();
            }
        }
        else {
            this.onCancel.emit();
        }
    };
    CategoryFormComponent.prototype.submitForm = function () {
        var _this = this;
        this.categoryForm.markAsTouched();
        if (this.categoryForm.valid) {
            console.log('submitForm');
            this.isSubmitting = true;
            // update the model
            this.updateCategory(this.categoryForm.value);
            this.categoriesService
                .Upsert(this.category)
                .subscribe(function (data) {
                _this.isSubmitting = false;
                _this.updateCategory(data);
                _this.onUpserted.emit({
                    value: _this.category
                });
                _this.toastr.info('Category saved');
            }, function (err) {
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
        else {
            console.log(this.categoryForm);
        }
    };
    CategoryFormComponent.prototype.updateCategory = function (values) {
        Object.assign(this.category, values);
    };
    CategoryFormComponent.prototype.onImageUploaded = function (e) {
        var _this = this;
        var fv;
        this.filesService.GetFileById(e.fileId).subscribe(function (data) {
            console.log('onImageUploaded');
            console.log(data);
            _this.category.Image = data;
        }, function (err) {
            _this.toastr.error('Error getting uploaded file from server');
        });
    };
    CategoryFormComponent.prototype.joinForInputAccept = function (iary) {
        if (iary) {
            var ary = iary.slice(0);
            ary.forEach(function (item, index) {
                if (item.substr(0, 1) != '.') {
                    ary[index] = '.' + item;
                }
            });
            return ary.join(',');
        }
    };
    CategoryFormComponent.prototype.imageFolder = function () {
        return this.settingsService.getCurrentSettings().ImageDefaultImageFolder;
    };
    CategoryFormComponent.prototype.allowedImages = function () {
        return this.settingsService.getCurrentSettings().ImageAllowedTypes;
    };
    CategoryFormComponent.prototype.isDebugMode = function () {
        return this.settingsService.getCurrentSettings().debugEnabled;
    };
    CategoryFormComponent.prototype.verifyUrl = function (control) {
        if (control.value) {
            this.helperService.cleanUrl(control.value).subscribe(function (res) {
                control.setValue(res);
            });
        }
    };
    CategoryFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CategoryFormComponent.prototype, "category", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CategoryFormComponent.prototype, "onUpserted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CategoryFormComponent.prototype, "onCancel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CategoryFormComponent.prototype, "onDelete", void 0);
    CategoryFormComponent = __decorate([
        core_1.Component({
            selector: 'app-category-form',
            templateUrl: './category-form.component.html',
            styleUrls: ['./category-form.component.scss']
        }),
        __metadata("design:paramtypes", [shared_1.HelperService,
            ngx_toastr_1.ToastrService,
            shared_1.SettingsService,
            shared_1.CategoriesService,
            shared_1.FilesService,
            forms_1.FormBuilder,
            angular_progress_http_1.ProgressHttp,
            ng_bootstrap_1.NgbModal])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}());
exports.CategoryFormComponent = CategoryFormComponent;
//# sourceMappingURL=category-form.component.js.map