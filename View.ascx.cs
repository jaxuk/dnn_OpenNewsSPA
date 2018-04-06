using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using YeditUK.Modules.dnn_OpenNews.Base;
using DotNetNuke.Services.Exceptions;
using YeditUK.Modules.dnn_OpenNews.Components;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;
using DotNetNuke.Web.Razor;
using System.IO;
using AutoMapper;
using YeditUK.Modules.dnn_OpenNews.Components.DAL;
using DotNetNuke.Collections;

namespace YeditUK.Modules.dnn_OpenNews
{
  public partial class View : NewsArticleModuleBase
  {
    private ViewType _viewType;
    private AdminViewType _adminViewType;
    private Components.Entities.Settings _settings;
    private int _pageIndex = 0;
    private bool isView = false;
    private bool isAdminView = false;
    private void Page_Init(object sender, System.EventArgs e)
    {
      try
      {
        var moduleInfo = DotNetNuke.Entities.Modules.ModuleController.Instance.GetModule(this.ModuleId, this.TabId, false);
        _settings = Components.SettingsController.Instance.GetSettings(moduleInfo, this.PortalSettings);

        int.TryParse(Request.QueryString["CurrentPage"], out _pageIndex);
        if (_pageIndex > 0)
        {
          _pageIndex -= 1;
        }

        string qsArticleType, qsAdminType = "";
        qsArticleType = Request.QueryString["articleType"];
        qsAdminType = Request.QueryString["adminType"];
        
        isView = Enum.TryParse<ViewType>(qsArticleType, out _viewType);
        isAdminView = Enum.TryParse<AdminViewType>(qsAdminType, out _adminViewType);
        if ((!isView && !isAdminView) || (isView && isAdminView))
        {
          isView = true;
          _viewType = ViewType.viewcurrent;
        }
      }
      catch (Exception exc)
      {
        Exceptions.ProcessModuleLoadException(this, exc);
        throw (exc);
        // Module failed to load
        
      }

    }

    protected override void OnPreRender(EventArgs e)
    {
      base.OnPreRender(e);
      try
      {
        if (isView)
        {
          //var razorEngine = new RazorEngine(RazorScriptFile, ModuleContext, LocalResourceFile);
          string viewPath = "";

          viewPath = UrlHelper.GetViewPath(this.ModuleContext.Configuration.DesktopModule.FolderName,
            _settings.BasicRenderingTemplate, _viewType.ToString());

          if (!string.IsNullOrEmpty(viewPath))
          {
            var razorEngine = new RazorEngine(viewPath, this.ModuleContext, LocalResourceFile);
            var writer = new StringWriter();
            dynamic vm = null;

            switch (_viewType)
            {
              case ViewType.viewcurrent:
                vm = getViewCurrentModel();
                break;
              case ViewType.articleview:
                vm = getArticleViewModel();
                break;
              case ViewType.categoryview:
                vm = getCategoryViewModel();
                break;
              case ViewType.tagview:
                vm = getTagViewModel();
                break;
              default:
                break;
            }
            if (vm != null)
            {
              razorEngine.Render(writer, vm);
            }
            else
            {
              razorEngine.Render(writer);
            }
            Controls.Add(new LiteralControl(writer.ToString()));
          }
        }
      }
      catch (Exception ex)
      {
        Exceptions.ProcessModuleLoadException(this, ex);
      }
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
    private ViewCurrentModel getViewCurrentModel()
    {
      var vc = new ViewCurrentModel(getMenuViewModel());
      //vc.Articles = ArticleRepo.Instance.GetPagedList(_moduleContext.ModuleId, 0, 10, "", ArticleStatus.Live , true);
      var arts = ArticleRepo.Instance.GetPagedList(this.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage,
        "", ArticleStatus.Live, true, -1, null, null, DateTime.Now, _settings.BasicSortBy, sortAsc());
      vc.Articles = Mapper.Map<PagedList<Components.Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(arts);
      vc.Articles.ForEach(a => {
        setVwUrl(ref a);
      });
      return vc;
    }
    private Templates.ViewModels.CategoryViewModel getCategoryViewModel()
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
      return vc;
    }
    private Templates.ViewModels.TagViewModel getTagViewModel()
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
      return vc;
    }
    private ArticleViewModel getArticleViewModel()
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
        return avm;
      }
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