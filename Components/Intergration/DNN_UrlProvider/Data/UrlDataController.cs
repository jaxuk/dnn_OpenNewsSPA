using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using DotNetNuke.Entities.Content.Taxonomy;
using YeditUK.Modules.dnn_OpenNews.Components.DAL;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_UrlProvider.Entities;
using System;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;

namespace YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_UrlProvider.Data
{
  public static class UrlDataController 
  {
    public static List<FriendlyUrlInfo> GetArticlesForProvider(int TabId, ArticleStatus? status = null ) {
      List<FriendlyUrlInfo> result = new List<FriendlyUrlInfo>();
      var articles = ArticleRepo.Instance.GetListByTabId(TabId);
      if (status != null) {
        articles = articles.Where(a => a.Status == status);
      }
      articles.ToList().ForEach(a => {
        result.Add(FriendlyUrlInfoFromArticle(a));
      });
      return result;
    }
    public static List<FriendlyUrlInfo> GetCategoriesForProvider(int TabId)
    {
      List<FriendlyUrlInfo> result = new List<FriendlyUrlInfo>();
      var categories = CategoryRepo.Instance.GetListByTabId(TabId);
      categories.ToList().ForEach(c => {
        result.Add(FriendlyUrlInfoFromCategory(c));
      });
      return result;
    }

    public static List<FriendlyUrlInfo> GetAuthorsForProvider(int TabId) {
      List<FriendlyUrlInfo> result = new List<FriendlyUrlInfo>();
      var authors = ArticleRepo.Instance.GetAuthors(TabId);
      authors.ToList().ForEach(a => {
        var res = new FriendlyUrlInfo();
        result.Add(FriendlyUrlInfoFromAuthor(a.Key, a.Value));
      });
      return result;
    }

    public static List<FriendlyUrlInfo> GetArchivesForProvider(int TabId)
    {
      List<FriendlyUrlInfo> result = new List<FriendlyUrlInfo>();
      List<ArticleStatus> lStatus = new List<ArticleStatus>();
      lStatus.Add(ArticleStatus.Live);
      //TODO: Change to Use PortalTime Below
      var archives = ArticleRepo.Instance.GetArchives(-1, TabId, DateTime.Now, lStatus);
      archives.ToList().ForEach(a => {
        if (result.Where(r => r.itemId == a.Year && r.parentId ==-1).Count() == 0)
        {
          result.Add(FriendlyUrlInfoFromArchive(a, true));
        }
        result.Add(FriendlyUrlInfoFromArchive(a));
      });
      return result;
    }

    public static List<FriendlyUrlInfo> GetEverythingForProvider(int TabId) {
      List<FriendlyUrlInfo> result = new List<FriendlyUrlInfo>();
      result.AddRange(GetArticlesForProvider(TabId));
      result.AddRange(GetCategoriesForProvider(TabId));
      result.AddRange(GetAuthorsForProvider(TabId));
      result.AddRange(GetArchivesForProvider(TabId));
      return result;
    }

    public static List<FriendlyUrlInfo> GetEverythingForSiteMap(int TabId)
    {
      List<FriendlyUrlInfo> result = new List<FriendlyUrlInfo>();
      result.AddRange(GetArticlesForProvider(TabId, ArticleStatus.Live));
      result.AddRange(GetCategoriesForProvider(TabId));
      return result;
    }

    private static FriendlyUrlInfo FriendlyUrlInfoFromAuthor(int id, string name)
    {
      var f = new FriendlyUrlInfo();
      f.itemId = id;
      f.itemType = "author";
      f.parentId = -1;
      f.urlDate = DateTime.Now;
      f.urlNum = 0;
      f.qsValue = "&articleType=authorview&authorId=" + id.ToString();
      f.urlFragment = name;
      return f;
    }

    private static FriendlyUrlInfo FriendlyUrlInfoFromArchive(Services.ViewModels.ArchiveViewModel a, bool addYear = false)
    {
      var f = new FriendlyUrlInfo();
      f.itemType = "archive";
      f.urlDate = DateTime.Now;
      f.urlNum = 0;
      if (addYear)
      {
        f.urlNum = a.Year;
        f.itemId = a.Year;
        f.parentId = -1;
        f.qsValue = "&articleType=archiveview&year=" + a.Year.ToString();
        f.urlFragment = a.Year.ToString();
      }
      else {
        f.urlNum = a.Month;
        f.itemId = int.Parse(a.Year.ToString() + a.Month.ToString());
        f.parentId = a.Year;
        f.qsValue = "&articleType=archiveview&year=" + a.Year.ToString() + "&month=" + a.Month.ToString();
        f.urlFragment = a.Year.ToString() + '/' + a.Month.ToString();
      }
      return f;
    }


    private static FriendlyUrlInfo FriendlyUrlInfoFromArticle(Article a) {
      var f = new FriendlyUrlInfo();
      f.itemId = (int)a.ArticleID;
      f.itemType = "article";
      f.parentId = -1;
      f.urlDate = a.LastUpdated;
      f.urlNum = 0;
      f.qsValue = "&articleType=articleview&articleId=" + a.ArticleID.ToString();
      f.urlFragment = a.URL;
      return f;
    }
    private static FriendlyUrlInfo FriendlyUrlInfoFromCategory(Category c)
    {
      var f = new FriendlyUrlInfo();
      f.itemId = c.CategoryID;
      f.itemType = "category";
      f.parentId = c.ParentID;
      f.urlDate = DateTime.Now;
      f.urlNum = c.ParentID;
      f.qsValue = "&articleType=categoryview&categoryId=" + c.CategoryID.ToString();
      f.urlFragment = c.URL;
      return f;
    }

    internal static FriendlyUrlInfo GetNewsArticleItem(int itemId, string itemType, ModuleUrlOptions urlOptions, int tabId)
    {
      var article = ArticleRepo.Instance.Get((long)itemId,urlOptions.moduleId);
      //var article = ArticleRepo.Instance.GetListByTabId(tabId).Where(a => (int)a.ArticleID == itemId).SingleOrDefault();
      if (article == null) {
        return null;
      }
      return FriendlyUrlInfoFromArticle(article);
    }
  }
}