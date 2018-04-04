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
var router_1 = require("@angular/router");
//import { NgForm } from '@angular/forms';
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var angular_progress_http_1 = require("angular-progress-http");
var ngx_toastr_1 = require("ngx-toastr");
var operators_1 = require("rxjs/operators");
var shared_1 = require("../shared");
var ArticleFormComponent = /** @class */ (function () {
    function ArticleFormComponent(route, router, helperService, toastr, settingsService, customFieldsService, tagsService, categoriesService, articlesService, filesService, fb, progressHttp, changeDetectorRef) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.helperService = helperService;
        this.toastr = toastr;
        this.settingsService = settingsService;
        this.customFieldsService = customFieldsService;
        this.tagsService = tagsService;
        this.categoriesService = categoriesService;
        this.articlesService = articlesService;
        this.filesService = filesService;
        this.fb = fb;
        this.progressHttp = progressHttp;
        this.changeDetectorRef = changeDetectorRef;
        this.imageUploads = [];
        this.fileUploads = [];
        this.customDefs = [];
        this.article = {};
        this.errors = {};
        this.isSubmitting = true;
        this.imageSortableOpts = {
            onEnd: function (ev) {
                _this.imageUploads.splice(ev.newIndex, 0, _this.imageUploads.splice(ev.oldIndex, 1)[0]);
                //[this.imageUploads[ev.oldIndex], this.imageUploads[ev.newIndex]] = [this.imageUploads[ev.newIndex], this.imageUploads[ev.oldIndex]];
                _this.changeDetectorRef.detectChanges();
            }
        };
    }
    ArticleFormComponent.prototype.initForm = function () {
        this.articleForm = this.fb.group({
            Title: ['', forms_2.Validators.compose([forms_2.Validators.required, forms_2.Validators.maxLength(255)])],
            Summary: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(255)])],
            Body: ['', forms_2.Validators.required],
            MetaTitle: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(255)])],
            MetaDescription: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(255)])],
            MetaKeywords: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(255)])],
            PageHeadText: ['', forms_2.Validators.compose([forms_2.Validators.maxLength(500)])],
            //URL: ['', Validators.compose([Validators.required, Validators.maxLength(255), this.validateUrlNotInUse.bind(this)])],
            URL: ['', {
                    validators: forms_2.Validators.compose([forms_2.Validators.required, forms_2.Validators.maxLength(255)]),
                    asyncValidators: this.validateUrlNotInUse.bind(this),
                    updateOn: 'blur'
                }],
            Tags: [''],
            Categories: [''],
            PublishTime: [''],
            PublishDate: ['', forms_2.Validators.required],
            ArchiveTime: [''],
            ArchiveDate: [''],
            IsFeatured: ['false'],
            AutoArchive: ['false'],
            Author: ['', forms_2.Validators.required],
            Images: this.fb.array([]),
            Files: this.fb.array([]),
            CustomTypes: this.fb.group({})
        });
    };
    ArticleFormComponent.prototype.validateUrlNotInUse = function (control) {
        return this.articlesService.validateUrlNotInUse(this.articleId(), control.value);
    };
    ArticleFormComponent.prototype.initFileControl = function (file) {
        if (file == null) {
            return this.fb.group({
                Title: [''],
                Description: [''],
            });
        }
        else {
            return this.fb.group({
                Title: [file.Title],
                Description: [file.Description],
            });
        }
    };
    ArticleFormComponent.prototype.initCustomObjects = function (cDefs) {
        var group = this.articleForm.controls['CustomTypes'];
        if (cDefs == null) {
            return this.fb.group({});
        }
        else {
            for (var i = 0; i < cDefs.length; i++) {
                cDefs[i].Fields.forEach(function (f, i) {
                    if (f.validators) {
                        console.log(f.validators);
                        f.validators.forEach(function (v, ii) {
                            //f.validation.push(new Function( eval(v) ));
                        });
                    }
                    //cDefs[i].Fields[i] = f;
                });
                group.addControl(cDefs[i].TypeName, this.fb.group({}));
                //this.addCustomObjectControl(cDefs[i])
            }
        }
    };
    ArticleFormComponent.prototype.initCustomObjectControl = function (cDef) {
        return this.fb.group((_a = {},
            _a[cDef.TypeName] = null,
            _a));
        var _a;
        //if (cDef == null) {
        //  return this.fb.group({
        //    [cDef.TypeName]: this.fb.array([])
        //  });
        //} else {
        //  return this.fb.group({
        //    [cDef.TypeName]: this.fb.array([])
        //  });
        //}
    };
    ArticleFormComponent.prototype.addCustomObjectControl = function (cDef) {
        var control = this.articleForm.controls["CustomTypes"];
        control.push(this.initCustomObjectControl(cDef));
    };
    ArticleFormComponent.prototype.initFileControls = function (controlName, files) {
        if (files == null) {
            return this.fb.array([]);
        }
        else {
            var control = this.articleForm.controls[controlName];
            var diff = (files.length - control.controls.length);
            while (files.length > control.controls.length) {
                this.addFileControl(controlName, null);
            }
        }
    };
    ArticleFormComponent.prototype.addFileControl = function (controlName, file) {
        var control = this.articleForm.controls[controlName];
        control.push(this.initFileControl(file));
    };
    ArticleFormComponent.prototype.addFileControls = function (controlName, files) {
        var _this = this;
        if (files != null) {
            files.forEach(function (f) {
                _this.addFileControl(controlName, f);
            });
        }
    };
    ArticleFormComponent.prototype.onRemoveFile = function (controlName, i) {
        // remove address from the list
        var control = this.articleForm.controls[controlName];
        control.removeAt(i);
        switch (controlName) {
            case 'Images':
                this.imageUploads.splice(i, 1);
                break;
            case 'Files':
                this.fileUploads.splice(i, 1);
                break;
        }
        this.changeDetectorRef.detectChanges();
        //console.log('files removed at:' + i.toString());
    };
    ArticleFormComponent.prototype.onImageUploaded = function (e) {
        var _this = this;
        var fv;
        this.filesService.GetArticleFile(this.articleId, e.fileId).subscribe(function (data) {
            console.log('onImageUploaded');
            console.log(data);
            if (_this.imageUploads.filter(function (obj) { return obj.FileId === data.FileId; }).length == 0) {
                _this.imageUploads.push(data);
                _this.addFileControl('Images', data);
            }
            else {
                _this.toastr.info('Duplicate image. ' + data.Name + ' not added');
            }
        }, function (err) {
            _this.toastr.error('Error getting file from server');
        });
    };
    ArticleFormComponent.prototype.onFileUploaded = function (e) {
        var _this = this;
        var fv;
        this.filesService.GetArticleFile(this.articleId, e.fileId).subscribe(function (data) {
            console.log('onFileUploaded');
            console.log(data);
            if (_this.fileUploads.filter(function (obj) { return obj.FileId === data.FileId; }).length == 0) {
                _this.fileUploads.push(data);
                _this.addFileControl('Files', data);
            }
            else {
                _this.toastr.info('Duplicate file. ' + data.Name + ' not added');
            }
        }, function (err) {
            _this.toastr.error('Error getting file from server');
        });
    };
    ArticleFormComponent.prototype.ModelToForm = function () {
        this.initFileControls('Images', this.article.Images);
        this.initFileControls('Files', this.article.Files);
        this.articleForm.patchValue({
            Title: this.article.Title,
            Summary: this.article.Summary,
            Body: this.article.Body,
            MetaTitle: this.article.MetaTitle,
            MetaDescription: this.article.MetaDescription,
            MetaKeywords: this.article.MetaKeywords,
            PageHeadText: this.article.PageHeadText,
            URL: this.article.URL,
            Tags: this.getTagsFromModel(),
            Categories: this.getCategoriesFromModel(),
            PublishTime: this.GetTimeFromModel(this.article.StartDate),
            PublishDate: this.GetDateFromModel(this.article.StartDate),
            ArchiveTime: this.GetTimeFromModel(this.article.EndDate),
            ArchiveDate: this.GetDateFromModel(this.article.EndDate),
            IsFeatured: this.article.IsFeatured,
            AutoArchive: this.article.AutoArchive,
            Author: this.article.AuthorID,
            Files: this.article.Files,
            Images: this.article.Images,
            CustomTypes: (this.article.CustomTypes == null ? {} : this.article.CustomTypes)
        });
        this.setAuthorTextValue();
    };
    ArticleFormComponent.prototype.FormToModel = function () {
        var f = this.articleForm.value;
        this.updateArticle({
            Title: f.Title,
            Summary: f.Summary,
            Body: f.Body,
            MetaTitle: f.MetaTitle,
            MetaDescription: f.MetaDescription,
            MetaKeywords: f.MetaKeywords,
            PageHeadText: f.PageHeadText,
            URL: f.URL,
            Tags: this.getTagsForModel(f, this.alltags),
            Categories: this.getCategoriesForModel(f, this.allcategories),
            StartDate: this.GetDateTimeFromForm(f.PublishDate, f.PublishTime),
            EndDate: this.GetDateTimeFromForm(f.ArchiveDate, f.ArchiveTime),
            IsFeatured: f.IsFeatured,
            AutoArchive: f.AutoArchive,
            AuthorID: f.Author,
            Files: this.getFilesForModel(f),
            Images: this.getImagesForModel(f),
            CustomTypes: f.CustomTypes
        });
    };
    ArticleFormComponent.prototype.getFilesForModel = function (f) {
        var _this = this;
        if (f.Files == null) {
            return null;
        }
        var files = [];
        f.Files.forEach(function (con, i) {
            files.push(_this.updateFileItemFromControl(con, _this.fileUploads[i]));
        });
        return files;
    };
    ArticleFormComponent.prototype.getImagesForModel = function (f) {
        var _this = this;
        if (f.Images == null) {
            return null;
        }
        var files = [];
        f.Images.forEach(function (con, i) {
            files.push(_this.updateFileItemFromControl(con, _this.imageUploads[i]));
        });
        return files;
    };
    ArticleFormComponent.prototype.updateFileItemFromControl = function (con, file) {
        file.Title = con.Title;
        file.Description = con.Description;
        return file;
    };
    ArticleFormComponent.prototype.setAuthorTextValue = function () {
        var _this = this;
        //Set the textbox value of the typeahead manually.
        if (this.authors != null && this.article != null) {
            var author = this.authors.find(function (a) { return a.id === _this.article.AuthorID; });
            if (author != null) {
                var ic = document.querySelector("[formcontrolname='Author'] input");
                ic.value = author.name;
            }
        }
    };
    ArticleFormComponent.prototype.getTagsFromModel = function () {
        if (this.article.Tags == null) {
            return null;
        }
        return this.article.Tags.map(function (tag) { return tag.name; });
    };
    ArticleFormComponent.prototype.getCategoriesFromModel = function () {
        if (this.article.Categories == null) {
            return null;
        }
        return this.article.Categories.map(function (cat) { return cat.CategoryID; });
    };
    ArticleFormComponent.prototype.getCategoriesForModel = function (f, allcats$) {
        if (f.Categories == null) {
            return null;
        }
        var retCats = new Array();
        var _loop_1 = function (c) {
            retCats.push(allcats$.filter(function (ct) { return ct.CategoryID === c; })[0]);
        };
        for (var _i = 0, _a = f.Categories; _i < _a.length; _i++) {
            var c = _a[_i];
            _loop_1(c);
        }
        return retCats;
    };
    ArticleFormComponent.prototype.getTagsForModel = function (f, alltags$) {
        if (f.Tags == null) {
            return null;
        }
        var retTags = new Array();
        var _loop_2 = function (t) {
            var newTag = void 0;
            newTag = alltags$.filter(function (tg) { return tg.name === t; })[0];
            if (newTag == null) {
                newTag = { TagID: -1, name: t };
            }
            retTags.push(newTag);
        };
        for (var _i = 0, _a = f.Tags; _i < _a.length; _i++) {
            var t = _a[_i];
            _loop_2(t);
        }
        return retTags;
    };
    ArticleFormComponent.prototype.GetDateTimeFromForm = function (date, time) {
        var d;
        if (date != null && time != null) {
            d = new Date(date.year, date.month - 1, date.day, time.hour, time.minute);
        }
        else if (date != null) {
            d = new Date(date.year, date.month - 1, date.day);
        }
        else {
            d = null;
        }
        console.log(d);
        return d;
    };
    ArticleFormComponent.prototype.GetDateFromModel = function (datetimeStr) {
        var datetime = new Date(datetimeStr);
        if (typeof datetime.getMonth === 'function' && datetime.getFullYear() > 1) {
            return { year: datetime.getFullYear(), month: datetime.getMonth() + 1, day: datetime.getDate() };
        }
        else {
            return null;
        }
    };
    ArticleFormComponent.prototype.GetTimeFromModel = function (datetimeStr) {
        var datetime = new Date(datetimeStr);
        if (typeof datetime.getHours === 'function' && datetime.getFullYear() > 1) {
            return { hour: datetime.getHours(), minute: datetime.getMinutes(), second: 0 };
        }
        else {
            return null;
        }
    };
    ArticleFormComponent.prototype.fetchData = function () {
        var _this = this;
        this.obs_authors$ = this.helperService.getAuthors('');
        this.obs_allcategories$ = this.categoriesService.GetAll();
        this.obs_alltags$ = this.tagsService.GetAll();
        this.obs_strTags$ = this.obs_alltags$.map(function (array) { return array.map(function (tag) { return tag.name; }); });
        this.obs_authors$.pipe(operators_1.map(function (data) { return data; })).subscribe(function (data) {
            _this.authors = data;
            _this.setAuthorTextValue();
        });
        this.obs_allcategories$.pipe(operators_1.map(function (data) { return data; })).subscribe(function (data) { return _this.allcategories = data; });
        this.obs_alltags$.pipe(operators_1.map(function (data) { return data; })).subscribe(function (data) { return _this.alltags = data; });
        this.customFieldsService.GetAll().pipe(operators_1.map(function (data) { return data; })).subscribe(function (data) {
            _this.initCustomObjects(data);
            _this.customDefs = data;
        });
        this.loadArticle();
    };
    ArticleFormComponent.prototype.AutoArchiveOnChange = function (event) {
        console.log('AutoArchiveOnChange');
        console.log(event);
    };
    //public onImageInputAction(e) {
    //  console.log(event);
    //  if (e.action == 1) {
    //    this.imageUploads.push({ name: e.file.name, file: e.file, uploaded: false, percentage: null });
    //  }
    //}
    ArticleFormComponent.prototype.deleteable = function () {
        return (this.article.ArticleID > 0);
    };
    ArticleFormComponent.prototype.publishable = function () {
        return (this.articleForm.valid);
    };
    ArticleFormComponent.prototype.ShowArchive = function () {
        var show = (this.articleForm.controls['AutoArchive'].value);
        return show;
    };
    ArticleFormComponent.prototype.titleChanged = function (event) {
        if (this.article.ArticleID <= 0 && event.target.value != '') {
            this.urlChanged(event);
        }
    };
    ArticleFormComponent.prototype.urlChanged = function (event) {
        var _this = this;
        this.helperService.cleanUrl(event.target.value).subscribe(function (res) {
            _this.articleForm.get('URL').setValue((res));
        });
    };
    ArticleFormComponent.prototype.loadArticle = function () {
        var _this = this;
        this.isSubmitting = true;
        var id = +this.route.snapshot.paramMap.get('id');
        this.articlesService
            .Get(id)
            .subscribe(function (data) {
            console.log(data);
            _this.updateArticle(data);
            _this.ModelToForm();
            _this.isSubmitting = false;
        }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    ArticleFormComponent.prototype.ngOnInit = function () {
        this.fetchData();
        this.initForm();
    };
    ArticleFormComponent.prototype.updateArticle = function (values) {
        Object.assign(this.article, values);
        Object.assign(this.fileUploads, this.article.Files);
        Object.assign(this.imageUploads, this.article.Images);
    };
    ArticleFormComponent.prototype.clickCancel = function () {
        if (!this.articleForm.untouched) {
            if (confirm("Discard current changes?")) {
                this.router.navigate(['/articles']);
            }
        }
        else {
            this.router.navigate(['/articles']);
        }
    };
    ArticleFormComponent.prototype.clickDelete = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete this article?")) {
            this.isSubmitting = true;
            this.FormToModel();
            this.article.IsDeleted = true;
            this.articlesService.Upsert(this.article).subscribe(function (data) {
                // Update the DB.
                _this.toastr.warning('Article: DELETED');
                _this.router.navigate(['/articles']);
            }, function (err) {
                _this.toastr.error('error deleting article');
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
    };
    ArticleFormComponent.prototype.articleId = function () {
        return this.article.ArticleID;
    };
    ArticleFormComponent.prototype.imageFolder = function () {
        return this.settingsService.getCurrentSettings().ImageDefaultImageFolder;
    };
    ArticleFormComponent.prototype.allowedImages = function () {
        return this.settingsService.getCurrentSettings().ImageAllowedTypes;
    };
    ArticleFormComponent.prototype.joinForInputAccept = function (iary) {
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
    ArticleFormComponent.prototype.allowedFiles = function () {
        return this.settingsService.getCurrentSettings().FileAllowedTypes;
    };
    ArticleFormComponent.prototype.isDebugMode = function () {
        return this.settingsService.getCurrentSettings().debugEnabled;
    };
    ArticleFormComponent.prototype.fileFolder = function () {
        return this.settingsService.getCurrentSettings().FileDefaultFileFolder;
    };
    ArticleFormComponent.prototype.clickPublish = function () {
        this.article.IsDraft = false;
        this.article.IsDeleted = false;
        this.submitForm();
    };
    ArticleFormComponent.prototype.clickSaveDraft = function () {
        this.article.IsDraft = true;
        this.article.IsDeleted = false;
        this.submitForm();
    };
    ArticleFormComponent.prototype.submitForm = function () {
        var _this = this;
        this.articleForm.markAsTouched();
        if (this.articleForm.valid) {
            console.log('submitForm');
            this.isSubmitting = true;
            // update the model
            this.FormToModel();
            console.log(this.article);
            this.articlesService
                .Upsert(this.article)
                .subscribe(function (data) {
                var id = +_this.route.snapshot.paramMap.get('id');
                _this.updateArticle(data);
                if (id != _this.article.ArticleID) {
                    _this.router.navigateByUrl('/article/' + _this.article.ArticleID.toString());
                }
                _this.ModelToForm();
                _this.isSubmitting = false;
                _this.toastr.info('article saved');
            }, function (err) {
                _this.toastr.error('error updating article');
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
        else {
            console.log(this.articleForm);
        }
    };
    ArticleFormComponent = __decorate([
        core_1.Component({
            selector: 'app-article-form',
            templateUrl: './article-form.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./article-form.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            shared_1.HelperService,
            ngx_toastr_1.ToastrService,
            shared_1.SettingsService,
            shared_1.CustomFieldsService,
            shared_1.TagsService,
            shared_1.CategoriesService,
            shared_1.ArticlesService,
            shared_1.FilesService,
            forms_1.FormBuilder,
            angular_progress_http_1.ProgressHttp,
            core_1.ChangeDetectorRef])
    ], ArticleFormComponent);
    return ArticleFormComponent;
}());
exports.ArticleFormComponent = ArticleFormComponent;
//# sourceMappingURL=article-form.component.js.map