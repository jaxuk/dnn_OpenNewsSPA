//using DotNetNuke.Services.Exceptions;
//using DotNetNuke.UI.Modules;
//using DotNetNuke.Web.Razor;
//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;
//using System.Web;
//using System.Web.UI;
//using YeditUK.Modules.dnn_OpenNews.Components.DAL;
//using YeditUK.Modules.dnn_OpenNews.Components;
//using YeditUK.Modules.dnn_OpenNews.Components.Enums;
//using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;
//using AutoMapper;
//using YeditUK.Modules.dnn_OpenNews.Services;
//using DotNetNuke.Collections;
//using YeditUK.Modules.dnn_OpenNews.Components.Helpers;
//using DotNetNuke.Entities.Users;
////using YeditUK.Modules.dnn_OpenNews.Components.Entities;

//namespace YeditUK.Modules.dnn_OpenNews.Components
//{
//  public class ViewController
//  {
//    //private HttpContext _context;
//    //private ModuleInstanceContext _moduleContext;
//    //private Page _page;
//    //private View _ViewControl;
//    //private DotNetNuke.Entities.Portals.PortalSettings _portal;
//    private ViewType _viewType;
//    private AdminViewType _adminViewType;
//    private Entities.Settings _settings;
//    private int _pageIndex = 0;
//    //private UserInfo _user;

//    public ViewController(ref View control, HttpContext context) {
//      _context = context;
//      _ViewControl = control;
//      _portal = _ViewControl.ModuleContext.PortalSettings;
//      var moduleInfo = DotNetNuke.Entities.Modules.ModuleController.Instance.GetModule(_ViewControl.ModuleContext.ModuleId, _ViewControl.ModuleContext.TabId, false);
//      _settings = Components.SettingsController.Instance.GetSettings(moduleInfo, _portal);

//      int.TryParse(HttpContext.Current.Request.QueryString["CurrentPage"], out _pageIndex);
//      if (_pageIndex > 0) {
//        _pageIndex -= 1;
//      }

//      string qsArticleType, qsAdminType = "";
//      qsArticleType = _context.Request.QueryString["articleType"];
//      qsAdminType = _context.Request.QueryString["adminType"];
//      bool isView, isAdminView = false;
//      isView = Enum.TryParse<ViewType>(qsArticleType, out _viewType);
//      isAdminView = Enum.TryParse<AdminViewType>(qsAdminType, out _adminViewType);
//      if ((!isView && !isAdminView) || (isView && isAdminView))
//      {
//        isView = true;
//        _viewType = ViewType.viewcurrent;
//      }
//      if (isAdminView) {

//      }
//      if (isView) {
//        _ViewControl.Page.PreRender += Page_PreRender;
//      }
//    }

//    private void Page_PreRender(object sender, EventArgs e)
//    {
//      LoadRazorViewWithModel();
//    }

//    public void LoadRazorViewWithModel() {
//      string LocalResourceFile = "";
//      string viewPath = "";

//      viewPath = UrlHelper.GetViewPath(_ViewControl.ModuleContext.Configuration.DesktopModule.FolderName,
//        _settings.BasicRenderingTemplate, _viewType.ToString());

//      if (!string.IsNullOrEmpty(viewPath))
//      {
//        var razorEngine = new RazorEngine(viewPath, _ViewControl.ModuleContext, LocalResourceFile);
//        var writer = new StringWriter();
//        dynamic vm;

//        switch (_viewType)
//        {
//          case ViewType.viewcurrent:
//            vm = getViewCurrentModel();
//            if (vm != null)
//            {
//              razorEngine.Render(writer, vm);
//            }
//            break;
//          case ViewType.articleview:
//            vm = getArticleViewModel();
//            if (vm != null)
//            {
//              razorEngine.Render(writer, vm);
//            }
//            break;
//          case ViewType.categoryview:
//            var categoryviewModel = getCategoryViewModel();
//            if (categoryviewModel != null) {
//              razorEngine.Render(writer, categoryviewModel);
//            }
//            break;
//          case ViewType.tagview:
//            var tagviewModel = getTagViewModel();
//            if (tagviewModel != null)
//            {
//              razorEngine.Render(writer, tagviewModel);
//            }
//            break;
//          case ViewType.admin:
//            razorEngine.Render(writer);
//            break;
//          default:
//            razorEngine.Render(writer);
//            break;
//        }
//        _control.Controls.Add(new LiteralControl(writer.ToString()));
//      }
//    }
//    private MenuViewModel getMenuViewModel() {
//      var mv = new MenuViewModel();
//      if (CommonHelper.UserCanViewAdmin(_user)) {
//        mv.menuItems.Add("Admin", UrlHelper.GetAdminURL(_moduleContext.TabId));
//      }
//      return mv;
//    }
//    private ViewCurrentModel getViewCurrentModel() {
//      var vc = new ViewCurrentModel(getMenuViewModel());
//      //vc.Articles = ArticleRepo.Instance.GetPagedList(_moduleContext.ModuleId, 0, 10, "", ArticleStatus.Live , true);
//      var arts = ArticleRepo.Instance.GetPagedList(_moduleContext.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage, 
//        "", ArticleStatus.Live, true, -1, null, null, DateTime.Now, _settings.BasicSortBy, sortAsc());
//      vc.Articles = Mapper.Map<PagedList<Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(arts);
//      return vc;
//    }
//    private Templates.ViewModels.CategoryViewModel getCategoryViewModel()
//    {
//      int catId = -1;
//      int.TryParse(HttpContext.Current.Request.QueryString["categoryid"], out catId);
//      var cat = CategoryRepo.Instance.Get(catId, _moduleContext.ModuleId);
//      if (cat == null)
//      {
//        itemNotFound("Category with id - " + catId.ToString());
//        return null;
//      }
//      List<int> CategoriesIdList = new List<int>();
//      CategoriesIdList.Add(catId);
//      var vc = new Templates.ViewModels.CategoryViewModel(getMenuViewModel());
//      var arts = ArticleRepo.Instance.GetPagedList(_moduleContext.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage, 
//        "", ArticleStatus.Live, true,-1, CategoriesIdList, null, DateTime.Now, _settings.BasicSortBy, sortAsc());
//      vc.Articles = Mapper.Map<PagedList<Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(arts);
//      vc.Category = Mapper.Map<Entities.Category, Services.ViewModels.CategoryViewModel>(cat);
//      return vc;
//    }
//    private Templates.ViewModels.TagViewModel getTagViewModel()
//    {
//      int tagId = -1;
//      int.TryParse(HttpContext.Current.Request.QueryString["tagid"], out tagId);
//      var tag = TagRepo.Instance.Get(tagId, _moduleContext.ModuleId);
//      if (tag == null)
//      {
//        itemNotFound("Tag with id - " + tagId.ToString());
//        return null;
//      }
//      List<int> TagsIdList = new List<int>();
//      TagsIdList.Add(tagId);
//      var vc = new Templates.ViewModels.TagViewModel(getMenuViewModel());
//      var arts = ArticleRepo.Instance.GetPagedList(_moduleContext.ModuleId, this._pageIndex, _settings.BasicArticlesPerPage, 
//        "", ArticleStatus.Live, true, -1, null, TagsIdList, DateTime.Now, _settings.BasicSortBy, sortAsc());
//      vc.Articles = Mapper.Map<PagedList<Entities.Article>, PagedList<Services.ViewModels.ArticleViewModel>>(arts);
//      vc.Tag = Mapper.Map<Entities.Tag, Services.ViewModels.TagViewModel>(tag);
//      return vc;
//    }
//    private ArticleViewModel getArticleViewModel()
//    {
//      long artId = -1;
//      long.TryParse(HttpContext.Current.Request.QueryString["articleid"], out artId);
//      var art = ArticleRepo.Instance.Get(artId, _moduleContext.ModuleId);
//      if (art == null)
//      {
//        itemNotFound("Article with id - " + artId.ToString());
//        return null;
//      }
//      else if (!canViewArticle(art)) {
//        itemNotFound("No permission for article with id - " + artId.ToString());
//        return null;
//      }
//      else
//      {
//        ArticleViewModel avm = new ArticleViewModel(getMenuViewModel());
//        avm.Article = Mapper.Map<Entities.Article, Services.ViewModels.ArticleViewModel>(art);
//        if (CommonHelper.UserCanEditArticle(this._user, avm.Article)) {
//          avm.MenuView.menuItems.Add("Edit Article", UrlHelper.GetAdminURL(_moduleContext.TabId, art.ArticleID));
//        }
//        return avm;
//      }
//    }

//    private bool canViewArticle(Entities.Article a) {
//      if (a.Status == ArticleStatus.Live)
//      {
//        return true;
//      }
//      else if (_user.IsInRole("Administrators"))
//      {
//        return true;
//      }
//      else if (_user.UserID == a.AuthorID) {
//        return true;
//      }
//      else
//      {
//        return false;
//      }
//    }
//    private bool sortAsc() {
//      return _settings.BasicSortDirection == "ASC";
//    }
//    private void itemNotFound(string WhatWasnt) {
//      //TODO: Log an error.
//      HttpContext.Current.Response.StatusCode = 404;
//      if (this._portal.ErrorPage404 > 0) {
//        //Must be a better way of throwing a 404 htp error.
//        HttpContext.Current.Response.Redirect(DotNetNuke.Common.Globals.NavigateURL(_portal.ErrorPage404, string.Empty, "status=404"));
//      }
      
//    }
//  }
//}