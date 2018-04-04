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
var ngx_toastr_1 = require("ngx-toastr");
var router_1 = require("@angular/router");
var shared_1 = require("../shared");
var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(route, router, toastr, settingsService, articlesService, categoriesService) {
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.settingsService = settingsService;
        this.articlesService = articlesService;
        this.categoriesService = categoriesService;
        this.settings = {};
        this.categories = new Array();
        this.articles = new Array();
        this.selectedArticle = null;
        this.errors = {};
        this.isSubmitting = false;
        //itemResource = new DataTableResource(this.articles);
        //items = [];
        this.articleCount = 0;
    }
    ArticlesComponent.prototype.tagsToString = function (item) {
        return item.Tags.map(function (tag) { return tag.name; }).join(",");
    };
    ArticlesComponent.prototype.categoriesToString = function (item) {
        return item.Categories.map(function (cat) { return cat.Name; }).join(",");
    };
    //loadArticles() {
    //  let params: ArticleQueryParams = {
    //    sortAsc: false,
    //    sortBy: 'StartDate',
    //    offset: 0,
    //    limit: 10,
    //    searchPhrase: (<HTMLInputElement>document.querySelector("input#txtArticleSearch")).value,
    //    status: null
    //  };
    //}
    ArticlesComponent.prototype.reloadItems = function (params) {
        var _this = this;
        params.searchPhrase = document.querySelector("input#txtArticleSearch").value;
        params.status = null;
        console.log(params);
        this.articlesService.GetPagedList(params).subscribe(function (data) {
            var tbodys = Array.from(document.querySelectorAll("data-table#articlesGrid tbody"));
            tbodys.forEach(function (el) {
                el.remove();
            });
            _this.articleCount = data.meta.TotalCount;
            Object.assign(_this.articles, data.data);
            console.log(data);
            console.log('reloadItems()');
        }, function (err) {
            _this.toastr.error('Error getting articles');
        });
    };
    ArticlesComponent.prototype.ngOnInit = function () {
        //this.loadArticles();
    };
    ArticlesComponent = __decorate([
        core_1.Component({
            selector: 'app-articles',
            templateUrl: './articles.component.html',
            styleUrls: ['./articles.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            ngx_toastr_1.ToastrService,
            shared_1.SettingsService,
            shared_1.ArticlesService,
            shared_1.CategoriesService])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map