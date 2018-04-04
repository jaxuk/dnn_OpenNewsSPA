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

    public static List<FriendlyUrlInfo> GetEverythingForProvider(int TabId) {
      List<FriendlyUrlInfo> result = new List<FriendlyUrlInfo>();
      result.AddRange(GetArticlesForProvider(TabId));
      result.AddRange(GetCategoriesForProvider(TabId));
      return result;
    }

    public static List<FriendlyUrlInfo> GetEverythingForSiteMap(int TabId)
    {
      List<FriendlyUrlInfo> result = new List<FriendlyUrlInfo>();
      result.AddRange(GetArticlesForProvider(TabId, ArticleStatus.Live));
      result.AddRange(GetCategoriesForProvider(TabId));
      return result;
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