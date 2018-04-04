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
var angular_tree_component_1 = require("angular-tree-component");
var ngx_toastr_1 = require("ngx-toastr");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var shared_1 = require("../shared");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(route, router, toastr, settingsService, categoriesService, modalService) {
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.settingsService = settingsService;
        this.categoriesService = categoriesService;
        this.modalService = modalService;
        this.settings = {};
        this.categories = new Array();
        this.selectedCategory = null;
        this.errors = {};
        this.isSubmitting = false;
        this.treeOptions = {
            idField: 'CategoryID',
            displayField: 'Name',
            childrenField: 'Children',
            allowDrag: true
        };
        this.onEvent = function ($event) { return console.log($event); };
    }
    CategoriesComponent.prototype.onCatChange = function ($event) {
        this.selectedCategory = $event.node.data;
    };
    CategoriesComponent.prototype.onMoveNode = function ($event) {
        var _this = this;
        this.categoriesService.UpdateTree(this.categories).subscribe(function (success) {
            _this.toastr.info('Category tree updated');
        });
        ;
    };
    CategoriesComponent.prototype.cancelEditing = function ($event) {
        if (this.selectedCategory.CategoryID <= 0) {
            this.removeCurrentCategory();
        }
        this.selectedCategory = null;
    };
    CategoriesComponent.prototype.removeCurrentCategory = function () {
        var _this = this;
        this.categories = this.categories.filter(function (c) { return c.CategoryID !== _this.selectedCategory.CategoryID; });
    };
    CategoriesComponent.prototype.categoryDeleted = function ($event) {
        this.removeCurrentCategory();
        this.selectedCategory = null;
    };
    CategoriesComponent.prototype.newCategory = function () {
        this.selectedCategory = ({
            CategoryID: -1,
            Name: '',
            Description: '',
            MetaTitle: '',
            MetaDescription: '',
            MetaKeywords: '',
            PageHeadText: '',
            ShortURL: '',
            URL: ''
        });
        this.categories.push(this.selectedCategory);
        this.catTree.treeModel.update();
    };
    CategoriesComponent.prototype.categoryUpserted = function ($event) {
        this.catTree.treeModel.update();
        this.catTree.treeModel.getNodeById(this.selectedCategory.CategoryID).setActiveAndVisible();
    };
    CategoriesComponent.prototype.populateCategories = function () {
        var _this = this;
        this.categoriesService.GetTree().subscribe(function (data) {
            console.log(data);
            Object.assign(_this.categories, data);
            _this.catTree.treeModel.update();
        });
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        this.populateCategories();
    };
    __decorate([
        core_1.ViewChild(angular_tree_component_1.TreeComponent),
        __metadata("design:type", angular_tree_component_1.TreeComponent)
    ], CategoriesComponent.prototype, "catTree", void 0);
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'app-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            ngx_toastr_1.ToastrService,
            shared_1.SettingsService,
            shared_1.CategoriesService,
            ng_bootstrap_1.NgbModal])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map