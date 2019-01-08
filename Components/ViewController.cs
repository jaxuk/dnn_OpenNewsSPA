using DotNetNuke.Services.Exceptions;
using DotNetNuke.UI.Modules;
using DotNetNuke.Web.Razor;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using YeditUK.Modules.dnn_OpenNews.Components.DAL;
using YeditUK.Modules.dnn_OpenNews.Components;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;
using AutoMapper;
using YeditUK.Modules.dnn_OpenNews.Services;
using DotNetNuke.Collections;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;
using DotNetNuke.Entities.Users;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
//using YeditUK.Modules.dnn_OpenNews.Components.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Components
{
  public class ViewController
  {
    private UserInfo UserInfo;
    private int TabId;
    private int ModuleId;
    private int _pageIndex;
    private Components.Entities.Settings _settings;
    private ModuleInstanceContext ModuleContext;

    public ViewController(ModuleInstanceContext ModuleContext, 
      Components.Entities.Settings _settings,
      int _pageIndex,
      int ModuleId,
      int TabId,
      UserInfo UserInfo
      ) {
      this.UserInfo = UserInfo;
      this.TabId = TabId;
      this.ModuleId = ModuleId;
      this._pageIndex = _pageIndex;
      this._settings = _settings;
      this.ModuleContext = ModuleContext;
    }

    private MenuViewModel getMenuViewModel()
    {
      var mv = new MenuViewModel();
      if (CommonHelper.UserCanViewAdmin(this.UserInfo, _settings))
      {
        mv.menuItems.Add("Admin", UrlHelper.GetAdminURL(this.TabId));
      }
      return mv;
    }
    public ViewCurrentModel getViewCurrentModel()
    {
      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      lStatus.Add(ArticleStatus.Live);
      var vc = new ViewCurrentModel(getMenuViewModel());
      //vc.Articles = ArticleRepo.Instance.GetPagedList(_moduleContext.ModuleId, 0, 10, "", ArticleStatus.Live , true);
      var arts = ArticleRepo.Instance.GetPagedList(this.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage,
        "", lStatus, true, -1, null, null, DateTime.Now, _settings.BasicSortBy, sortAsc());
      vc.Articles = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(arts);
      vc.Articles.ForEach(a => {
        setVwUrl(ref a);
      });
      vc.AllCategories = getAllCategories();
      return vc;
    }
    public Templates.ViewModels.CategoryViewModel getCategoryViewModel()
    {
      int catId = -1;
      int.TryParse(HttpContext.Current.Request.QueryString["categoryid"], out catId);
      var cat = CategoryRepo.Instance.Get(catId, this.ModuleId);
      if (cat == null)
      {
        itemNotFound("Category with id - " + catId.ToString());
        return null;
      }
      List<int> CategoriesIdList = new List<int>();
      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      lStatus.Add(ArticleStatus.Live);
      CategoriesIdList.Add(catId);
      var vc = new Templates.ViewModels.CategoryViewModel(getMenuViewModel());
      var arts = ArticleRepo.Instance.GetPagedList(this.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage,
        "", lStatus, true, -1, CategoriesIdList, null, DateTime.Now, _settings.BasicSortBy, sortAsc(), true);
      vc.Articles = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(arts);
      vc.Articles.ForEach(a => {
        setVwUrl(ref a);
      });
      vc.Category = Mapper.Map<Components.Entities.Category, Services.ViewModels.CategoryViewModel>(cat);
      vc.AllCategories = getAllCategories();
      return vc;
    }
    public Views.Templates.ViewModels.RazorViewModel getRazorViewModel() {
      var vc = new Views.Templates.ViewModels.RazorViewModel(this);
      return vc;
    }
    public Templates.ViewModels.ArchiveViewModel getArchiveViewModel()
    {
      int year = -1;
      int month = -1;
      int.TryParse(HttpContext.Current.Request.QueryString["year"], out year);
      int.TryParse(HttpContext.Current.Request.QueryString["month"], out month);
      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      lStatus.Add(ArticleStatus.Live);
      var vc = new Templates.ViewModels.ArchiveViewModel(getMenuViewModel());
      vc.Month = month;
      vc.Year = year;
      DateTime startDate = new DateTime(year, ((month > 0 && month < 13) ? month : 1), 1);
      DateTime endDate;
      if ((month > 0 && month < 13)) {
        endDate = startDate.AddMonths(1);
      }
      else {
        endDate = startDate.AddMonths(12);
      }
      var arts = ArticleRepo.Instance.GetPagedList(this.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage,
        "", lStatus, true, -1, null, null, DateTime.Now, _settings.BasicSortBy, sortAsc(),false, false, null, startDate, endDate);
      vc.Articles = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(arts);
      vc.Articles.ForEach(a => {
        setVwUrl(ref a);
      });
      return vc;
    }
    public Templates.ViewModels.TagViewModel getTagViewModel()
    {
      int tagId = -1;
      int.TryParse(HttpContext.Current.Request.QueryString["tagid"], out tagId);
      var tag = TagRepo.Instance.Get(tagId, this.ModuleId);
      if (tag == null)
      {
        itemNotFound("Tag with id - " + tagId.ToString());
        return null;
      }
      List<int> TagsIdList = new List<int>();
      TagsIdList.Add(tagId);
      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      lStatus.Add(ArticleStatus.Live);
      var vc = new Templates.ViewModels.TagViewModel(getMenuViewModel());
      var arts = ArticleRepo.Instance.GetPagedList(this.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage,
        "", lStatus, true, -1, null, TagsIdList, DateTime.Now, _settings.BasicSortBy, sortAsc());
      vc.Articles = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(arts);
      vc.Articles.ForEach(a => {
        setVwUrl(ref a);
      });
      vc.Tag = Mapper.Map<Components.Entities.Tag, Services.ViewModels.TagViewModel>(tag);
      vc.AllCategories =  getAllCategories();
      return vc;
    }
    public ArticleViewModel getArticleViewModel()
    {
      long artId = -1;
      long.TryParse(HttpContext.Current.Request.QueryString["articleid"], out artId);
      var art = ArticleRepo.Instance.Get(artId, this.ModuleId);
      if (art == null)
      {
        itemNotFound("Article with id - " + artId.ToString());
        return null;
      }
      else if (!canViewArticle(art))
      {
        itemNotFound("No permission for article with id - " + artId.ToString());
        return null;
      }
      else
      {
        ArticleViewModel avm = new ArticleViewModel(getMenuViewModel(), this);
        var artVm = Mapper.Map<Components.Entities.Article, Services.ViewModels.ArticleViewModel>(art);
        setVwUrl(ref artVm);
        avm.Article = artVm;
        if (CommonHelper.UserCanEditArticle(this.UserInfo, avm.Article, this._settings))
        {
          avm.MenuView.menuItems.Add("Edit Article", UrlHelper.GetAdminURL(this.ModuleContext.TabId, art.ArticleID));
        }
        avm.AllCategories = getAllCategories();
        return avm;
      }
    }
    public PagedList<Services.ViewModels.ArticleViewModel> getRelatedArticles(Services.ViewModels.ArticleViewModel art, int limit = 10, bool matchAllCategories = false, bool matchAllTags = false) {
      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      lStatus.Add(ArticleStatus.Live);
      var related = ArticleRepo.Instance.GetPagedList(this.ModuleId, 0, limit + 1, "", lStatus, true, -1,
            art.Categories.Select(c => c.CategoryID).ToList(), art.Tags.Select(t => t.TagID).ToList(),
            DateTime.Now, "Rank", true, matchAllCategories, matchAllTags);
      related.Remove(related.Where(a=>a.ArticleID == art.ArticleID).FirstOrDefault());
      var ret = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(related);
      ret.ForEach(a => {
        setVwUrl(ref a);
      });
      return ret;
    }
    public PagedList<Services.ViewModels.ArticleViewModel> getLatestArticles(int limit = 2)
    {
      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      lStatus.Add(ArticleStatus.Live);
      var related = ArticleRepo.Instance.GetPagedList(this.ModuleId, 0, limit, "", lStatus, true);
      var ret = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(related);
      ret.ForEach(a => {
        setVwUrl(ref a);
      });
      return ret;
    }
    public PagedList<Services.ViewModels.ArticleViewModel> getFeaturedArticles(int limit = 4)
    {
      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      lStatus.Add(ArticleStatus.Live);
      var featured = ArticleRepo.Instance.GetPagedList(this.ModuleId, 0, limit, "", lStatus, true,-1, null, null,DateTime.Now, "StartDate", false, false, true);
      var ret = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(featured);
      ret.ForEach(a => {
        setVwUrl(ref a);
      });
      return ret;
    }
    public PagedList<Services.ViewModels.ArticleViewModel> getArticles(int ModuleID, int pageIndex, int pageSize, string serachPhrase = "",
      List<ArticleStatus> status = null,
      bool hydrate = false,
      int AuthorID = -1,
      List<int> CategoryIds = null,
      List<int> TagIds = null,
      DateTime? portalTime = null,
      string sortBy = "StartDate",
      bool sortAsc = false,
      bool matchAllCategories = false,
      bool matchAllTags = false,
      bool? isFeatured = null)
    {
      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      lStatus.Add(ArticleStatus.Live);
      var featured = ArticleRepo.Instance.GetPagedList(ModuleID, pageIndex, pageSize, serachPhrase,
       status, hydrate, AuthorID, CategoryIds, TagIds, portalTime, sortBy, sortAsc, matchAllCategories, matchAllTags, isFeatured
      );
      var ret = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(featured);
      ret.ForEach(a => {
        setVwUrl(ref a);
      });
      return ret;
    }
    private List<Services.ViewModels.CategoryViewModel> getAllCategories()
    {
      List<Services.ViewModels.CategoryViewModel> catsVM;
      var cats = CategoryRepo.Instance.GetTree(this.ModuleId).ToList();
      catsVM = Mapper.Map<List<Category>, List<Services.ViewModels.CategoryViewModel>>(cats);
      return catsVM;
    }
    private bool canViewArticle(Components.Entities.Article a)
    {
      if (a.Status == ArticleStatus.Live)
      {
        return true;
      }
      else if (this.UserInfo.IsInRole("Administrators"))
      {
        return true;
      }
      else if (this.UserInfo.UserID == a.AuthorID)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    private void setVwUrl(ref Services.ViewModels.ArticleViewModel avm)
    {
      avm.vwURL = UrlHelper.GetArticleURL(this.TabId, avm.ArticleID);
    }

    private bool sortAsc()
    {
      return _settings.BasicSortDirection == "ASC";
    }
    private void itemNotFound(string WhatWasnt)
    {
      //TODO: Log an error.
      HttpContext.Current.Response.StatusCode = 404;
      //if (this.PortalSettings.ErrorPage404 > 0)
      //{
      //  //Must be a better way of throwing a 404 http error.
      //  HttpContext.Current.Response.Redirect(DotNetNuke.Common.Globals.NavigateURL(this.PortalSettings.ErrorPage404, string.Empty, "status=404"));
      //}

    }
  }
}