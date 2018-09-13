using System;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using YeditUK.Modules.dnn_OpenNews.Components;
using YeditUK.Modules.dnn_OpenNews.Components.DAL;
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
using AutoMapper;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;
using DotNetNuke.Services.FileSystem;
using DotNetNuke.Collections;
using DotNetNuke.Web.Api.Internal;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;

namespace YeditUK.Modules.dnn_OpenNews.Services
{
  //[SupportedModules("dnn_OpenNews")]
  [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Admin)]

  public class ArticlesController : DnnApiController
  {
    private readonly IArticleRepo _repository;

    public ArticlesController(IArticleRepo repository)
    {
      Requires.NotNull(repository);
      this._repository = repository;
    }

    public ArticlesController() : this(ArticleRepo.Instance) { }

    public class urlNotInUseDTO
    {
      public long articleId { get; set; }
      public string url { get; set; }
    }
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage urlNotInUse(urlNotInUseDTO dto)
    {
      string reason = "";
      bool ret = _repository.validateArticleUrlNotInUse(dto.url, ActiveModule.ModuleID, dto.articleId, out reason);
      return Request.CreateResponse(ret);
    }

    public class DeleteDTO {
      public int articleId { get; set; }
    }
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage Delete(DeleteDTO dto)
    {
      var cat = _repository.Get(dto.articleId, ActiveModule.ModuleID);

      _repository.Delete(cat);

      return Request.CreateResponse(System.Net.HttpStatusCode.NoContent);
    }

    public class IncreaseViewCountDTO
    {
      public int articleId { get; set; }
    }
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [AllowAnonymous]
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage IncreaseViewCount(IncreaseViewCountDTO dto)
    {
      _repository.IncreaseViewCount(dto.articleId);
      return Request.CreateResponse(System.Net.HttpStatusCode.OK);
    }

    public class GetDTO
    {
      public int articleId { get; set; }
    }
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage Get(GetDTO dto)
    {
      ArticleViewModel art;
      if (dto.articleId <= 0) {
        art = new ArticleViewModel();
        art.Actions.Add("Edit");
        art.ArticleID = -1;
        art.ModuleID = ActiveModule.ModuleID;
        art.AuthorID = UserInfo.UserID;
        art.StartDate = DateTime.Now;
      }
      else
      {
        art = Mapper.Map<Article, ArticleViewModel>(_repository.Get(dto.articleId, ActiveModule.ModuleID));
        var artPerms = new ArticlePermissions(UserInfo, ActiveModule, PortalSettings);
        setVwUrl(ref art);
        art.Actions = artPerms.GetArticleActions(Mapper.Map<ArticleViewModel, Article>(art));
      }
      return Request.CreateResponse(art);
    }

    
    [HttpGet]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetList()
    {

      var arts = _repository.GetList(ActiveModule.ModuleID).ToList();

      var artsVM = Mapper.Map<List<Article>, List<ArticleViewModel>>(arts);

      artsVM.ForEach(a => {
        setVwUrl(ref a);
      });

      return Request.CreateResponse(artsVM);

    }
    public class GetPagedListDTO
    {
      public int limit { get; set; }
      public int offset { get; set; }
      public string sortBy { get; set; }
      public string searchPhrase { get; set; }
      public string status { get; set; }
      public bool sortAsc { get; set; }
    }

    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetPagedList(GetPagedListDTO dto)
    {
      var pageIndex = dto.offset / dto.limit;
      string sStatus = (string.IsNullOrWhiteSpace(dto.status) ? null : dto.status);
      IPagedList<Article> arts = _repository.GetPagedList(ActiveModule.ModuleID, pageIndex, dto.limit, dto.searchPhrase,
        null, true, -1, null, null, null, dto.sortBy, dto.sortAsc);

      var artsVM = Mapper.Map<List<Article>, List<ArticleViewModel>>(arts.ToList());
      var artPerms = new ArticlePermissions(UserInfo, ActiveModule, PortalSettings);
      artsVM.ForEach(a => {
        setVwUrl(ref a);
        a.Actions = artPerms.GetArticleActions(Mapper.Map<ArticleViewModel, Article>(a));
      });
      return Request.CreateResponse(new { data = artsVM, meta = new PagedListMetaViewModel(arts)});
    }

    public class GetMyArticlesPagedListDTO
    {
      public int limit { get; set; }
      public int offset { get; set; }
      public string sortBy { get; set; }
      public string searchPhrase { get; set; }
      public string status { get; set; }
      public bool sortAsc { get; set; }
    }

    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetMyArticlesPagedList(GetMyArticlesPagedListDTO dto)
    {
      var pageIndex = dto.offset / dto.limit;

      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      

      if (Enum.TryParse(dto.status, out ArticleStatus aStatus))
      {
        lStatus.Add(aStatus);
      }
      else {
        lStatus.Add(ArticleStatus.Draft);
        lStatus.Add(ArticleStatus.Expired);
        lStatus.Add(ArticleStatus.Live);
        lStatus.Add(ArticleStatus.NeedsApproval);
        lStatus.Add(ArticleStatus.Upcoming);
      }
      IPagedList<Article> arts = _repository.GetPagedList(ActiveModule.ModuleID, pageIndex, dto.limit, dto.searchPhrase,
        lStatus, true, UserInfo.UserID, null, null, null, dto.sortBy, dto.sortAsc);

      var artsVM = Mapper.Map<List<Article>, List<ArticleViewModel>>(arts.ToList());
      var artPerms = new ArticlePermissions(UserInfo, ActiveModule, PortalSettings);
      artsVM.ForEach(a => {
        setVwUrl(ref a);
        a.Actions = artPerms.GetArticleActions(Mapper.Map< ArticleViewModel , Article>(a));
      });
      return Request.CreateResponse(new { data = artsVM, meta = new PagedListMetaViewModel(arts) });
    }

    public class ApproveDTO
    {
      public long articleId { get; set; }
    }

    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage Approve(ApproveDTO dto) {
      var art = _repository.Get(dto.articleId, ActiveModule.ModuleID);
      var settings = Components.SettingsController.Instance.GetSettings(ActiveModule, PortalSettings);
      if (UserInfo.IsInRole(settings.PermissionsEditorRoles)) {
        if ((settings.PermissionsAllowEditorsToSelfPublish == false && UserInfo.UserID != art.AuthorID) || settings.PermissionsAllowEditorsToSelfPublish)
        {
          art.ApproverID = UserInfo.UserID;
          art.IsApproved = true;
          _repository.Update(art);
          //Send Message to Author?
          if (settings.NotificationNotifyAuthorsOnApproval) {
            var author = DotNetNuke.Entities.Users.UserController.GetUserById(PortalSettings.PortalId, (int)art.AuthorID);
            if (author != null) {
              DotNetNuke.Services.Mail.Mail.SendEmail(PortalSettings.Email, author.Email,
             "Article approved",
             "Your article was approved: " + UrlHelper.GetArticleURL(ActiveModule.TabID, art.ArticleID)
             );
            }
            
          }
        }
        else {
          throw (new Exception("User does not have permission to publish"));
        }
      }
      return Request.CreateResponse(Mapper.Map<Article, ArticleViewModel>(art));
    }
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage Upsert(ArticleViewModel a)
    {
      var settings = Components.SettingsController.Instance.GetSettings(ActiveModule, PortalSettings);
      var isEditor = CommonHelper.UserHasEditorPerms(UserInfo, settings, PortalSettings);
      var isArticleAuthor = CommonHelper.UserHasAuthorPerms(UserInfo, settings, PortalSettings) && UserInfo.UserID == (int)a.AuthorID;
      if (!isEditor && !isArticleAuthor)
      {
        throw new Exception("Permission Denied - User does not have permission to Upsert Article with Id: " + a.ArticleID.ToString());
      }
      Article art;
      if (a.ArticleID > 0)
      {
        art = Update(a);
      }
      else
      {
        art = Create(a);
      }
      if(art.Status== ArticleStatus.NeedsApproval)
      {
        if (settings.PermissionsAllowEditorsToSelfPublish && UserInfo.IsInRole(settings.PermissionsEditorRoles))
        {
          art.ApproverID = UserInfo.UserID;
          art.IsApproved = true;
          _repository.Update(art);
        }
        else if(settings.NotificationNotifyEditorsOnSubmission) {
          //Send emails to Editors
          //TODO inegrate with DNN notifications system.
          var approvers = DotNetNuke.Security.Roles.RoleController.Instance.GetUsersByRole(PortalSettings.PortalId, settings.PermissionsEditorRoles);
          if (approvers.Count != 0) {
            var emails = approvers.Select(u => u.Email).ToArray();
            DotNetNuke.Services.Mail.Mail.SendEmail(PortalSettings.Email, string.Join(",", emails),
              "Article requires approval",
              "An article requires Editor approval: " + UrlHelper.GetAdminURL(ActiveModule.TabID)
              );
          }
          
        }
      }
      var artPerms = new ArticlePermissions(UserInfo, ActiveModule, PortalSettings);
      var artVm = Mapper.Map<Article, ArticleViewModel>(art);
      setVwUrl(ref artVm);
      artVm.Actions = artPerms.GetArticleActions(art);
      return Request.CreateResponse(artVm);
    }
    private void setVwUrl(ref ArticleViewModel avm) {
      avm.vwURL = UrlHelper.GetArticleURL(this.ActiveModule.TabID, avm.ArticleID);
    }
    private Article Create(ArticleViewModel item)
    {
      Article a = Mapper.Map<ArticleViewModel, Article>(item);
      a.CreatedDate = DateTime.Now;
      a.LastUpdated = DateTime.Now;
      a.LastUpdateID = UserInfo.UserID;
      if (a.Files != null && a.Files.Count > 0)
      {
        a.Files.ForEach(f => {
          var ifi = item.Files.Where(fi => fi.FileId == f.FileID).Single();
          f.fileInfo = FileManager.Instance.GetFile((int)f.FileID);
          f.fileInfo.Title = ifi.Title;
          f.fileInfo.Description = ifi.Description;
        });
      }
      if (a.Images != null && a.Images.Count > 0)
      {
        a.Images.ForEach(f => {
          var ifi = item.Images.Where(fi => fi.FileId == f.FileID).Single();
          f.fileInfo = FileManager.Instance.GetFile((int)f.FileID);
          f.fileInfo.Title = ifi.Title;
          f.fileInfo.Description = ifi.Description;
        });
      }
      if (a.AutoArchive == false) {
        a.EndDate = null;
      }
      if (a.Pages == null)
      {
        a.Pages = new List<Page>();
        a.Pages.Add(new Page() { ArticleID = a.ArticleID, SortOrder = 1, PageText = item.Body, PageID = -1 });
      }
      _repository.Add(a);

      return a;
    }

    private void setFileProps(ref List<File> files, ArticleViewModel item) {
      files.ForEach(f => {
        var ifi = item.Files.Where(fi => fi.FileId == f.FileID).Single();
        f.fileInfo = FileManager.Instance.GetFile((int)f.FileID);
        f.fileInfo.Title = ifi.Title;
        f.fileInfo.Description = ifi.Description;
      });
    }

    private void ValidateCustomFieldsJSON(Article a) {
      string jsonSettingsPathBase = "/DesktopModules/{0}/data/custom-fields-{1}.json";

      string jsonSettingsPath = string.Format(jsonSettingsPathBase,
        ActiveModule.DesktopModule.FolderName, ActiveModule.ModuleID.ToString()
        );

      var jsonSettingsString = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath(jsonSettingsPath));
      var CustomDefs = Newtonsoft.Json.JsonConvert.DeserializeObject<List<CustomDef>>(jsonSettingsString);
      CustomDefs.ForEach(cs => {
        //cs.Fields[0].
      });
      JObject jCustomSettings = JObject.Parse(jsonSettingsString);
      JObject ArticleCustomTypes = JObject.Parse(a.customJSON);
    }
    private Article Update(ArticleViewModel item)
    {

      var au = _repository.Get(item.ArticleID, ActiveModule.ModuleID);
      Article a = Mapper.Map<ArticleViewModel, Article>(item);
      a.LastUpdated = DateTime.Now;
      a.LastUpdateID = UserInfo.UserID;
      a.ContentItemID = au.ContentItemID;
      a.ModuleId = au.ModuleId;
      a.RssGuid = au.RssGuid;
      a.NumOfViews = au.NumOfViews;
      if (a.Files != null && a.Files.Count > 0){
        a.Files.ForEach(f => {
          var ifi = item.Files.Where(fi => fi.FileId == f.FileID).Single();
          f.fileInfo = FileManager.Instance.GetFile((int)f.FileID);
          f.fileInfo.Title = ifi.Title;
          f.fileInfo.Description = ifi.Description;
        });
      }
      if (a.Images != null && a.Images.Count > 0)
      {
        a.Images.ForEach(f => {
          var ifi = item.Images.Where(fi => fi.FileId == f.FileID).Single();
          f.fileInfo = FileManager.Instance.GetFile((int)f.FileID);
          f.fileInfo.Title = ifi.Title;
          f.fileInfo.Description = ifi.Description;
        });
      }
      if (a.AutoArchive == false)
      {
        a.EndDate = null;
      }
      if (a.Pages == null && au.Pages!=null) {
        a.Pages = au.Pages;
        a.Pages[0].PageText = item.Body;
        //a.Pages = new List<Page>();
        //a.Pages.Add(new Page() { ArticleID = a.ArticleID, SortOrder = 1, PageText = item.Body, PageID = -1 });
      }
      _repository.Update(a);

      return a;
    }
  }
}
