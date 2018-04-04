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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ArticleFileComponent = /** @class */ (function () {
    function ArticleFileComponent(modalService, fb) {
        this.modalService = modalService;
        this.fb = fb;
        this.isSubmitting = false;
        this.removeFile = new core_1.EventEmitter();
    }
    //modalref: NgbModalRef;
    ArticleFileComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'file-modal' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ArticleFileComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ArticleFileComponent.prototype.fileInfoIsNull = function () {
        return this.fileInfo == null;
    };
    ArticleFileComponent.prototype.removeFileHandler = function () {
        if (confirm('Delete. Are you sure?')) {
            this.removeFile.emit(this.index);
        }
    };
    ArticleFileComponent.prototype.fileIconClass = function () {
        switch (this.fileInfo.Name.substr(this.fileInfo.Name.lastIndexOf('.') + 1)) {
            case "ppt":
                return "fa-file-powerpoint";
            case "pptx":
                return "fa-file-powerpoint";
            case "zip":
                return "fa-file-archive";
            case "rar":
                return "fa-file-archive";
            case "pdf":
                return "fa-file-pdf";
            case "docx":
                return "fa-file-word";
            case "doc":
                return "fa-file-word";
            case "xlsx":
                return "fa-file-excel";
            case "xls":
                return "fa-file-excel";
            default:
                return "fa-file";
        }
    };
    ArticleFileComponent.prototype.isImage = function () {
        if (this.fileInfoIsNull()) {
            return false;
        }
        else {
            return this.fileInfo.IsImage;
        }
    };
    ArticleFileComponent.prototype.fileName = function () {
        if (this.fileInfoIsNull()) {
            return "";
        }
        else {
            return this.fileInfo.Name;
        }
    };
    ArticleFileComponent.prototype.imageUrl = function () {
        if (this.fileInfoIsNull()) {
            return false;
        }
        else {
            return this.fileInfo.url;
        }
    };
    __decorate([
        core_1.Input('fileInfo'),
        __metadata("design:type", Object)
    ], ArticleFileComponent.prototype, "fileInfo", void 0);
    __decorate([
        core_1.Input('index'),
        __metadata("design:type", Number)
    ], ArticleFileComponent.prototype, "index", void 0);
    __decorate([
        core_1.Input('group'),
        __metadata("design:type", forms_1.FormGroup)
    ], ArticleFileComponent.prototype, "fileForm", void 0);
    __decorate([
        core_1.Output('removeFile'),
        __metadata("design:type", core_1.EventEmitter)
    ], ArticleFileComponent.prototype, "removeFile", void 0);
    ArticleFileComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'app-article-file',
            templateUrl: './article-file.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./article-file.component.scss']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, forms_1.FormBuilder])
    ], ArticleFileComponent);
    return ArticleFileComponent;
}());
exports.ArticleFileComponent = ArticleFileComponent;
//# sourceMappingURL=article-file.component.js.map