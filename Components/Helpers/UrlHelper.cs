using DotNetNuke.Common;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Urls;
using DotNetNuke.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.DAL;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class UrlHelper
  {
    public static string cleanUrl(string url, int portalId) {
      bool replaced = false;
      FriendlyUrlOptions options = UrlRewriterUtils.GetOptionsFromSettings(FriendlyUrlController.GetCurrentSettings(portalId));
      return FriendlyUrlController.CleanNameForUrl(url, options, out replaced).ToLower();
    }
    public static string GetUserProfileURL(int userId)
    {
      return Globals.UserProfileURL(userId);
    }
    public static string GetUserProfilePhotoURL(int userId)
    {
      return UserController.Instance.GetUserProfilePictureUrl(userId, 100, 100);
    }
    
    public static string GetArticleURL(int TabId, long articleId) {
      return Globals.NavigateURL(TabId, "", "articleType=" + ViewType.articleview.ToString(), 
        "articleId=" + articleId.ToString());
    }
    public static string GetCurrentArticlesUrl(int TabId, int pageIndex = 0)
    {
      if (pageIndex > 0)
      {
        return Globals.NavigateURL(TabId, "",
        "CurrentPage=" + (pageIndex + 1).ToString());
      }
      else {
        return Globals.NavigateURL(TabId, "");
      }
      
    }
    public static string GetCategoryURL(int TabId, int categoryId, int pageIndex = 0)
    {
      if (pageIndex > 0)
      {
        return Globals.NavigateURL(TabId, "", "articleType=" + ViewType.categoryview.ToString(),
      "categoryId=" + categoryId.ToString(), "CurrentPage=" + (pageIndex + 1).ToString());
      }
      else {
        return Globals.NavigateURL(TabId, "", "articleType=" + ViewType.categoryview.ToString(),
      "categoryId=" + categoryId.ToString());
      }
      
    }
    public static string GetTagURL(int TabId, int tagId, int pageIndex = 0)
    {
      if (pageIndex > 0)
      {
        return Globals.NavigateURL(TabId, "", "articleType=" + ViewType.tagview.ToString(),
      "tagId=" + tagId.ToString(), "CurrentPage=" + (pageIndex+1).ToString());
      }
      else {
        return Globals.NavigateURL(TabId, "", "articleType=" + ViewType.tagview.ToString(),
      "tagId=" + tagId.ToString());
      }
      
    }
    public static string GetAdminURL(int TabId)
    {
      return Globals.NavigateURL(TabId, "", "articleType=" + ViewType.admin.ToString());
    }
    public static string GetAdminURL(int TabId, long articleId)
    {
      return Globals.NavigateURL(TabId, "", "articleType=" + ViewType.admin.ToString(), "articleid=" + articleId.ToString());
    }
    public static string GetAdminFrameURL(int TabId)
    {
      return Globals.NavigateURL(TabId, "", "articleType=" + ViewType.adminframe.ToString());
    }
    public static string GetArticlePagedListUrl(int TabId, ViewType vt, int id, int pageIndex = 0, int year = -1, int month = -1) {
      switch (vt) {
        case ViewType.viewcurrent:
          return GetCurrentArticlesUrl(TabId, pageIndex);
        case ViewType.tagview:
          return GetTagURL(TabId, id, pageIndex);
        case ViewType.categoryview:
          return GetCategoryURL(TabId, id, pageIndex);
        case ViewType.archiveview:
          return "";//Get(TabId, id, pageIndex);
        default:
          return "";
      }
    }
    public static string GetViewPath(string ModuleFolder, string TemplateFolder, string ViewName) {
      string viewPathBase = "/DesktopModules/{0}/Views/Templates/Razor/{1}/_{2}.cshtml";
      string viewPath = "";
      var _context = HttpContext.Current;
      string extension = ".cshtml";
      if (ViewName.StartsWith("_") && ViewName.EndsWith(extension)) {
        ViewName = ViewName.Substring(1, ViewName.Length - extension.Length - 1);
      }
      string template_Path_default = string.Format(viewPathBase,
        ModuleFolder,
        "Default",
         ViewName
        );
      string template_Path = string.Format(viewPathBase,
        ModuleFolder,
        TemplateFolder,
         ViewName
        );

      if (System.IO.File.Exists(_context.Server.MapPath(template_Path)))
      {
        viewPath = template_Path;
      }
      else if (System.IO.File.Exists(_context.Server.MapPath(template_Path_default)))
      {
        viewPath = template_Path_default;
      }
      else
      {
        throw new Exception("The View: '" + viewPath + "' does not exist.");
      }

      return viewPath;
    }

    public static string ImageUrl(FileViewModel image, int maxwidth = 200, int maxheight = 200, int quality = 80)
    {
      if (image == null)
      {
        return "";
      }
      else
      {
        return image.url + "&maxwidth=" + maxwidth + "&maxheight=" + maxheight + "&quality=" + quality;
      }
    }
  }

}