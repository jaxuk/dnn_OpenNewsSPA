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
using DotNetNuke.Entities.Users;

namespace YeditUK.Modules.dnn_OpenNews.Components.Controllers
{
  //[SupportedModules("dnn_OpenNews")]
  //[DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]

  public class ArticlesController
  {
    private readonly IArticleRepo _repository;

    public ArticlesController(IArticleRepo repository)
    {
      Requires.NotNull(repository);
      this._repository = repository;
    }

    public ArticlesController() : this(ArticleRepo.Instance) { }

    public void Delete(int ModuleID, int ArticleID)
    {
      var cat = _repository.Get(ArticleID, ModuleID);
      _repository.Delete(cat);
    }

    public ArticleViewModel Get(int ModuleID, int ArticleID, int userID = -1)
    {
      ArticleViewModel art;
      if (ArticleID <= 0) {
        art = new ArticleViewModel();
        art.ArticleID = -1;
        art.ModuleID = ModuleID;
        art.AuthorID = userID;
        art.StartDate = DateTime.Now;
      }
      else
      {
        art = Mapper.Map<Article, ArticleViewModel>(_repository.Get(ArticleID, ModuleID));
      }

      return art;
    }

    public List<ArticleViewModel> GetList(int ModuleID)
    {

      var arts = _repository.GetList(ModuleID).ToList();

      var artsVM = Mapper.Map<List<Article>, List<ArticleViewModel>>(arts);

      return artsVM;

    }
    
    public IPagedList<ArticleViewModel> GetPagedList(int ModuleID, int pageIndex, int pageSize, string sortBy, bool sortAsc)
    {
      IPagedList<Article> arts = _repository.GetList(ModuleID, pageIndex, pageSize, sortBy, sortAsc);

      var artsVM = Mapper.Map<IPagedList<Article>, IPagedList<ArticleViewModel>>(arts);

      return artsVM;

    }

    public ArticleViewModel Upsert(ArticleViewModel a, int ModuleID, int UserID)
    {
      if (a.ArticleID > 0)
      {
        var t = Update(a, ModuleID, UserID);
        return Mapper.Map<Article, ArticleViewModel>(t);
      }
      else
      {
        var t = Create(a, ModuleID, UserID);
        return Mapper.Map<Article, ArticleViewModel>(t);
      }
    }

    private Article Create(ArticleViewModel item, int ModuleID, int userID)
    {
      Article a = Mapper.Map<ArticleViewModel, Article>(item);
      a.CreatedDate = DateTime.Now;
      a.ModuleId = ModuleID;
      a.LastUpdated = DateTime.Now;
      a.LastUpdateID = userID;
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

    private Article Update(ArticleViewModel item, int ModuleID, int UserID)
    {

      var au = _repository.Get(item.ArticleID, ModuleID);
      Article a = Mapper.Map<ArticleViewModel, Article>(item);
      a.LastUpdated = DateTime.Now;
      a.LastUpdateID = UserID;
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
      if (a.Pages == null) {
        a.Pages = new List<Page>();
        a.Pages.Add(new Page() { ArticleID = a.ArticleID, SortOrder = 1, PageText = item.Body, PageID = -1 });
      }
      _repository.Update(a);

      return a;
    }
  }
}
