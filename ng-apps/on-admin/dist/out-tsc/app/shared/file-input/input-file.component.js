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
var angular_progress_http_1 = require("angular-progress-http");
var ngx_toastr_1 = require("ngx-toastr");
var index_1 = require("../index");
var InputFileComponent = /** @class */ (function () {
    function InputFileComponent(toastr, progressHttp, helperService, filesService) {
        this.toastr = toastr;
        this.progressHttp = progressHttp;
        this.helperService = helperService;
        this.filesService = filesService;
        this.fileDisplayType = 'files';
        this.dropText = 'Drop files here';
        this.buttonText = 'Browse';
        this.acceptedFile = new core_1.EventEmitter();
        this.fileUploaded = new core_1.EventEmitter();
        this.uploads = [];
        this.uploaded = [];
    }
    InputFileComponent.prototype.buildFileUploadObject = function (inputFile) {
        var f = {
            name: inputFile.name,
            file: inputFile,
            uploaded: false,
            percentage: null,
            icon: null,
            faIcon: null,
            size: '0kb'
        };
        this.setFileIcon(f, inputFile);
        this.setSize(f, inputFile);
        return f;
    };
    /**
       * Sets the icon of the file.
       * @param file
       * @param inputFile
       */
    InputFileComponent.prototype.setFileIcon = function (file, inputFile) {
        var icon;
        switch (inputFile.type) {
            case 'application/pdf':
                icon = 'fa-file-pdf';
                break;
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                icon = 'fa-file-word';
                break;
            case 'application/zip':
                icon = 'fa-file-archive';
                break;
            default:
                icon = 'fa-file';
        }
        file.faIcon = icon;
    };
    /**
       * Accepted file handler.
       * @param file
       */
    InputFileComponent.prototype.fileUploadedHandeler = function (file, upRes) {
        file.uploaded = true;
        this.fileUploaded.emit(upRes);
        this.uploads = this.uploads.filter(function (obj) { return obj !== file; });
    };
    InputFileComponent.prototype.uploadFile = function (f) {
        var _this = this;
        this.filesService.upload(f, this.uploadFolder).subscribe(function (data) {
            console.log(data);
            if (data.alreadyExists) {
                _this.toastr.warning('File: ' + f.name + ' already exists, it has not been uploaded but the existing file has been added to you uploads');
                _this.fileUploadedHandeler(f, data);
            }
            else if (data.fileId > 0) {
                _this.toastr.success('File: ' + f.name + ' uploaded');
                _this.fileUploadedHandeler(f, data);
            }
            else if (data.message != null && data.message != "") {
                f.percentage = null;
                _this.toastr.warning('File: ' + f.name + ' - ' + data.message);
            }
            else {
                _this.toastr.warning('File: ' + f.name + ' - ELSE');
            }
        });
    };
    /**
     * Gets the size of the file to display.
     * @param file
     */
    InputFileComponent.prototype.setSize = function (file, inputFile) {
        var size = Math.round(inputFile.size / 1024);
        file.size = '(' + size + ' KB)';
    };
    InputFileComponent.prototype.onInputAction = function (e) {
        console.log(event);
        switch (e.action) {
            case 1:
                var uf = this.buildFileUploadObject(e.file);
                this.uploads.push(uf);
                //this.toastr.info('File: ' + e.file.name + ' added for upload');
                this.uploadFile(uf);
                break;
            case 2:
                this.toastr.warning('File: ' + e.file.name + ' upload denied');
            case 4:
                this.toastr.warning('Could not add file: ' + e.file.name);
            case 3:
                this.toastr.warning('Could not remove file: ' + e.file.name);
            case 0:
                this.toastr.warning('Removed file: ' + e.file.name);
            default:
                break;
        }
    };
    InputFileComponent.prototype.uploadingIsNotNullOrEmpty = function () {
        return this.uploads != null && this.uploads.length != null && this.uploads.length > 0;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "inputAccept", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "extensions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "uploadFolder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "fileDisplayType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "dropText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "buttonText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InputFileComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InputFileComponent.prototype, "acceptedFile", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InputFileComponent.prototype, "fileUploaded", void 0);
    InputFileComponent = __decorate([
        core_1.Component({
            selector: 'input-file',
            styleUrls: ['input-file.component.scss'],
            templateUrl: 'input-file.component.html'
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService,
            angular_progress_http_1.ProgressHttp,
            index_1.HelperService,
            index_1.FilesService])
    ], InputFileComponent);
    return InputFileComponent;
}());
exports.InputFileComponent = InputFileComponent;
//# sourceMappingURL=input-file.component.js.map