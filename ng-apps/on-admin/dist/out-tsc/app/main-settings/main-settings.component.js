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
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var shared_1 = require("../shared");
var MainSettingsComponent = /** @class */ (function () {
    function MainSettingsComponent(route, router, settingsService, toastr, fb) {
        this.route = route;
        this.router = router;
        this.settingsService = settingsService;
        this.toastr = toastr;
        this.fb = fb;
        this.settings = {};
        this.errors = {};
        this.isSubmitting = false;
        this.TimeZones = [];
        this.Templates = [];
        this.SortByOpts = [
            'StartDate',
            'EndDate'
        ];
        this.settingsForm = this.fb.group({
            BasicAllowCoreSearchIntegration: '',
            BasicArticlesPerPage: ['12', forms_2.Validators.required],
            BasicRenderingTemplate: '',
            BasicServerTimeZone: '',
            BasicSortBy: '',
            BasicSortDirection: '',
            //CategoryDefaultCategories: '',
            CategoryIncludeInBreadcrumb: '',
            CategoryRequireCategory: '',
            FileDefaultFileFolder: ['', forms_2.Validators.required],
            ImageDefaultImageFolder: ['', forms_2.Validators.required],
            SEORemovePagePathFromURL: '',
            NotificationNotifyApproversOnApproval: '',
            NotificationNotifyApproversOnSubmission: '',
            ImageAllowedTypes: '',
            FileAllowedTypes: ''
        });
    }
    MainSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get TimeZones
        this.settingsService.GetTimeZones().subscribe(function (data) {
            Object.assign(_this.TimeZones, data);
            _this.settingsForm.patchValue(_this.TimeZones);
        });
        //Get TimeZones
        this.settingsService.GetTemplates().subscribe(function (data) {
            Object.assign(_this.Templates, data);
            _this.settingsForm.patchValue(_this.Templates);
        });
        //Get TimeZones
        this.obs_folders$ = this.settingsService.GetPortalFolders();
        //Get Settings
        Object.assign(this.settings, this.settingsService.getCurrentSettings());
        if (Object.keys(this.settings).length === 0) {
            this.settingsService.GetSettings().subscribe(function (data) {
                Object.assign(_this.settings, data);
                _this.settingsForm.patchValue(_this.settings);
            });
        }
        else {
            this.settingsForm.patchValue(this.settings);
        }
    };
    MainSettingsComponent.prototype.isDebugMode = function () {
        return this.settingsService.getCurrentSettings().debugEnabled;
    };
    MainSettingsComponent.prototype.onSubmit = function (f) {
        //console.log(this.formGroup);
        console.log(f);
    };
    MainSettingsComponent.prototype.submitForm = function () {
        var _this = this;
        console.log('submitForm');
        if (this.settingsForm.valid) {
            this.isSubmitting = true;
            // update the model
            this.updateSettings(this.settingsForm.value);
            this.settingsService
                .UpdateSettings(this.settings)
                .subscribe(function (data) {
                _this.isSubmitting = false;
                _this.toastr.info('Settings saved');
            }, function (err) {
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
    };
    MainSettingsComponent.prototype.updateSettings = function (values) {
        Object.assign(this.settings, values);
    };
    MainSettingsComponent = __decorate([
        core_1.Component({
            selector: 'app-main-settings',
            templateUrl: './main-settings.component.html',
            styleUrls: ['./main-settings.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            shared_1.SettingsService,
            ngx_toastr_1.ToastrService,
            forms_1.FormBuilder])
    ], MainSettingsComponent);
    return MainSettingsComponent;
}());
exports.MainSettingsComponent = MainSettingsComponent;
//# sourceMappingURL=main-settings.component.js.map