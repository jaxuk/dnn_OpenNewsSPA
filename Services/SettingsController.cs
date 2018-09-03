using System;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using YeditUK.Modules.dnn_OpenNews.Components;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;
using DotNetNuke.Common;
using DotNetNuke.Web.Api;
using DotNetNuke.Security;
using System.Threading;
using DotNetNuke.UI.Modules;
using DotNetNuke.Common.Utilities;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using DotNetNuke.Services.FileSystem;
using DotNetNuke.Web.Api.Internal;
using AutoMapper;
using DotNetNuke.Entities.Users;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;

namespace YeditUK.Modules.dnn_OpenNews.Services
{
  [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Admin)]
  public class SettingsController : DnnApiController
  {
    
    [HttpGet]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetPortalFolders()
    {
      var folders = FolderManager.Instance.GetFolders(PortalSettings.PortalId).Select(f => new { name = f.FolderPath, id = f.FolderPath }).OrderBy(f => f.name).ToList();

      return Request.CreateResponse(System.Net.HttpStatusCode.OK, folders.ToArray(), "application/json");
    }
    
    [HttpGet]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetTemplates()
    {

      string Modulefolder = HttpContextSource.Current.Server.MapPath("/DesktopModules/" + ActiveModule.DesktopModule.FolderName + "/Views/Templates/Razor");
      var templateDirs = System.IO.Directory.GetDirectories(Modulefolder);
      var folders = templateDirs.ToList().Select(d => new System.IO.DirectoryInfo(d).Name);
      
      return Request.CreateResponse(System.Net.HttpStatusCode.OK, folders.ToArray(), "application/json");
    }
    
    [HttpGet]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetTimeZones() {
      Dictionary<string, string> tzs = new Dictionary<string, string>();
      foreach (TimeZoneInfo tz in TimeZoneInfo.GetSystemTimeZones()) {
        tzs.Add(tz.Id, tz.DisplayName);
      }
      return Request.CreateResponse(System.Net.HttpStatusCode.OK, tzs.ToArray(), "application/json");
    }
    
    [HttpGet]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetSettings()
    {
      var s = (Components.SettingsController.Instance.GetSettings(ActiveModule, PortalSettings));
      var sVm = Mapper.Map<Settings, SettingsViewModel>(s);
      sVm.currentUser = Mapper.Map<UserInfo, UserViewModel>(UserInfo);
      sVm.currentUser.isAuthor = CommonHelper.UserHasAuthorPerms(UserInfo, s, PortalSettings);
      sVm.currentUser.isEditor = CommonHelper.UserHasEditorPerms(UserInfo, s, PortalSettings);
      //var user = Mapper.Map<UserInfo, UserViewModel>(UserInfo);
      return Request.CreateResponse(System.Net.HttpStatusCode.OK, sVm
        , "application/json");
    }
    
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage UpdateSettings(SettingsViewModel m)
    {
      Settings s = Components.SettingsController.Instance.GetSettings(ActiveModule, PortalSettings);
      s.BasicAllowCoreSearchIntegration = m.BasicAllowCoreSearchIntegration;
      s.BasicArticlesPerPage = m.BasicArticlesPerPage;
      s.BasicRenderingTemplate = m.BasicRenderingTemplate;
      s.BasicServerTimeZone = m.BasicServerTimeZone;
      s.BasicSortBy = m.BasicSortBy;
      s.BasicSortDirection = m.BasicSortDirection;
      s.CategoryDefaultCategories = m.CategoryDefaultCategories;
      s.CategoryIncludeInBreadcrumb = m.CategoryIncludeInBreadcrumb;
      s.CategoryRequireCategory = m.CategoryRequireCategory;
      s.FileDefaultFileFolder = m.FileDefaultFileFolder;
      s.ImageDefaultImageFolder = m.ImageDefaultImageFolder;
      s.NotificationNotifyAuthorsOnApproval = m.NotificationNotifyAuthorsOnApproval;
      s.NotificationNotifyEditorsOnSubmission = m.NotificationNotifyEditorsOnSubmission;
      s.SEORemovePagePathFromURL = m.SEORemovePagePathFromURL;
      s.ImageAllowedTypes = m.ImageAllowedTypes;
      s.FileAllowedTypes = m.FileAllowedTypes;
      s.PermissionsEditorRoles = m.PermissionsEditorRoles;
      s.PermissionsAuthorRoles = m.PermissionsAuthorRoles;
      s.PermissionsAllowEditorsToSelfPublish = m.PermissionsAllowEditorsToSelfPublish;
      s.PermissionsOnlyShowEditorsAndAuthorsForAuthorSelection = m.PermissionsOnlyShowEditorsAndAuthorsForAuthorSelection;
      Components.SettingsController.Instance.SaveSettings(s, ActiveModule, PortalSettings);
      return Request.CreateResponse(System.Net.HttpStatusCode.OK, m);
    }
  }
}