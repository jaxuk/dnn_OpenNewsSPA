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
using System.Threading.Tasks;
using System.Net;
using DotNetNuke.Services.Exceptions;
using System.Web;
using System.IO;
using DotNetNuke.Services.FileSystem;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;
using System.Globalization;
using DotNetNuke.Services.Localization;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using DotNetNuke.Instrumentation;
using YeditUK.Modules.dnn_OpenNews.Components.DAL;
using AutoMapper;
using DotNetNuke.Web.Api.Internal;

namespace YeditUK.Modules.dnn_OpenNews.Services
{
  [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Admin)]
  public class FilesController : DotNetNuke.Web.InternalServices.FileUploadController
  {
    private readonly IFileRepo _repository;

    public FilesController(IFileRepo repository)
    {
      Requires.NotNull(repository);
      this._repository = repository;
    }

    public FilesController() : this(FileRepo.Instance) { }
    [HttpPost]
    [AllowAnonymous]
    public Task<HttpResponseMessage> UploadFromNg()
    {
      return UploadFromLocal(PortalSettings.PortalId);
    }
    public class GetArticleFileDTO
    {
      public int fileId { get; set; }
      public int articleId { get; set; }
    }
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetArticleFile(GetArticleFileDTO dto) {
      Components.Entities.File f = _repository.Get(dto.fileId, dto.articleId);
      if (f == null) {
        var fi = FileManager.Instance.GetFile(dto.fileId);
        if (fi != null) {
          f = new Components.Entities.File {
            ArticleID = dto.articleId,
            FileID = fi.FileId,
            fileInfo = fi,
            IsImage = CommonHelper.FileIsImage(fi),
            SortOrder = -1
          };
        }
      }
      if (f != null)
      {
        var fvm = Mapper.Map<Components.Entities.File, FileViewModel>(f);
        return Request.CreateResponse(fvm);
      }
      else {
        return Request.CreateResponse(System.Net.HttpStatusCode.NoContent);
      }
    }
    public class GetFileByIdDTO
    {
      public int fileId { get; set; }
      public int articleId { get; set; }
    }
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetFileById(GetFileByIdDTO dto)
    {
      var f = new Components.Entities.File(FileManager.Instance.GetFile(dto.fileId));
      var fvm = Mapper.Map<Components.Entities.File, FileViewModel>(f);
      return Request.CreateResponse(fvm);
    }
    public class GetFileInfoByIdDTO
    {
      public int fileId { get; set; }
      public int articleId { get; set; }
    }
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetFileInfoById(GetFileInfoByIdDTO dto)
    {
      return Request.CreateResponse(FileManager.Instance.GetFile(dto.fileId));
    }
  }
}