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
      if (CommonHelper.UserCanViewAdmin(this.UserInfo))
      {
        mv.menuItems.Add("Admin", UrlHelper.GetAdminURL(this.TabId));
      }
      return mv;
    }
    public ViewCurrentModel getViewCurrentModel()
    {
      var vc = new ViewCurrentModel(getMenuViewModel());
      //vc.Articles = ArticleRepo.Instance.GetPagedList(_moduleContext.ModuleId, 0, 10, "", ArticleStatus.Live , true);
      var arts = ArticleRepo.Instance.GetPagedList(this.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage,
        "", ArticleStatus.Live, true, -1, null, null, DateTime.Now, _settings.BasicSortBy, sortAsc());
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
      CategoriesIdList.Add(catId);
      var vc = new Templates.ViewModels.CategoryViewModel(getMenuViewModel());
      var arts = ArticleRepo.Instance.GetPagedList(this.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage,
        "", ArticleStatus.Live, true, -1, CategoriesIdList, null, DateTime.Now, _settings.BasicSortBy, sortAsc());
      vc.Articles = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(arts);
      vc.Articles.ForEach(a => {
        setVwUrl(ref a);
      });
      vc.Category = Mapper.Map<Components.Entities.Category, Services.ViewModels.CategoryViewModel>(cat);
      vc.AllCategories = getAllCategories();
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
      var vc = new Templates.ViewModels.TagViewModel(getMenuViewModel());
      var arts = ArticleRepo.Instance.GetPagedList(this.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage,
        "", ArticleStatus.Live, true, -1, null, TagsIdList, DateTime.Now, _settings.BasicSortBy, sortAsc());
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
        ArticleViewModel avm = new ArticleViewModel(getMenuViewModel());
        var artVm = Mapper.Map<Components.Entities.Article, Services.ViewModels.ArticleViewModel>(art);
        setVwUrl(ref artVm);
        avm.Article = artVm;
        if (CommonHelper.UserCanEditArticle(this.UserInfo, avm.Article))
        {
          avm.MenuView.menuItems.Add("Edit Article", UrlHelper.GetAdminURL(this.ModuleContext.TabId, art.ArticleID));
        }
        avm.AllCategories = getAllCategories();
        return avm;
      }
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