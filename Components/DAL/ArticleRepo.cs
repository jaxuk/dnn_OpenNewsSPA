using DotNetNuke.Collections;
using DotNetNuke.Common;
using DotNetNuke.Data;
using DotNetNuke.Framework;
using DotNetNuke.Services.FileSystem;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;
using YeditUK.Modules.dnn_OpenNews.Components.Intergration;

namespace YeditUK.Modules.dnn_OpenNews.Components.DAL
{
  public interface IArticleRepo
  {
    Article Add(Article a);

    void Delete(int ArticleID, int ModuleID);

    void Delete(Article a);

    Article Get(long ArticleID, int ModuleID);

    IQueryable<Article> GetList(int ModuleID);

    IQueryable<Article> GetListByTabId(int TabId);

    IPagedList<Article> GetPagedList(int ModuleID, int pageIndex, int pageSize, string sortBy, bool sortAsc);

    PagedList<Article> GetPagedList(int ModuleID, int pageIndex, int pageSize, string serachPhrase = "",
      ArticleStatus? status = null,
      bool hydrate = false,
      int AuthorID = -1,
      List<int> CategoryIds = null,
      List<int> TagIds = null,
      DateTime? portalTime = null,
      string sortBy = "StartDate",
      bool sortAsc = false);

    Article Update(Article a);

    bool validateArticleUrlNotInUse(string url, int ModuleId, long ArticleId, out string reason);
  }
  public class ArticleRepo : ServiceLocator<IArticleRepo, ArticleRepo>, IArticleRepo
  {
    protected override Func<IArticleRepo> GetFactory()
    {
      return () => new ArticleRepo();
    }
    public bool validateArticleUrlNotInUse(string url, int ModuleId, long ArticleId, out string reason) {
      Requires.NotNegative("ModuleId", ModuleId);
      Requires.NotNullOrEmpty("url", url);
      using (IDataContext ctx = DataContext.Instance()) {
        var rep = ctx.GetRepository<Article>();
        var inuse = rep.Find("WHERE url=@0 AND ModuleId=@1", url, ModuleId).SingleOrDefault();
        if (inuse != null && inuse.ArticleID!= ArticleId) {
          reason = "URL slug in use by article with id: " + inuse.ArticleID.ToString() +
            " Title: " + inuse.Title;
          return false;
        }
      }
      reason = "";
      return true;
    }
    public Article Add(Article a)
    {
      Requires.NotNull(a);
      Requires.PropertyNotNegative(a, "ModuleId");

      string valReason = "";
      if (!this.validateArticleUrlNotInUse(a.URL, a.ModuleId, a.ArticleID, out valReason))
      {
        throw (new Exception("URL already in use"));
      }

      using (IDataContext ctx = DataContext.Instance())
      {
        try {
          ctx.BeginTransaction();
          var rep = ctx.GetRepository<Article>();
          rep.Insert(a);
          var cntTaxonomy = new DNNContent();
          var objContentItem = cntTaxonomy.CreateContentItem(a);
          a.ContentItemID = objContentItem.ContentItemId;
          a.Files.ForEach(f => f.ArticleID = a.ArticleID);
          a.Pages.ForEach(f => f.ArticleID = a.ArticleID);
          rep.Update(a);
          UpsertFiles(a, ctx);
          UpsertImages(a, ctx);
          UpsertCategories(a, ctx);
          UpsertTags(a, ctx);
          UpsertPages(a, ctx);
          ctx.Commit();
        }
        catch (Exception) {
          ctx.RollbackTransaction();
          throw;
        }
        
      }
      return a;
    }
    public Article Update(Article a)
    {
      Requires.NotNull(a);
      //Requires.PropertyNotNegative(a, "ArticleID"); - can't be used becuase it's a long and not an int

      string valReason = "";
      if (!this.validateArticleUrlNotInUse(a.URL, a.ModuleId, a.ArticleID, out valReason))
      {
        throw (new Exception("URL already in use"));
      }

      using (IDataContext ctx = DataContext.Instance())
      {
        //var frep = ctx.GetRepository<File>();
        //var dbaFiles = frep.Find("WHERE ArticleID=@0", a.ArticleID).ToList();
        try
        {
          ctx.BeginTransaction();
          var rep = ctx.GetRepository<Article>();
          var cntTaxonomy = new DNNContent();
          cntTaxonomy.UpdateContentItem(a);
          rep.Update(a);
          UpsertCategories(a, ctx);
          UpsertTags(a, ctx);
          UpsertPages(a, ctx);
          UpsertFiles(a, ctx);
          UpsertImages(a, ctx);
          ctx.Commit();
        }
        catch (Exception)
        {
          ctx.RollbackTransaction();
          throw;
        }
      }
      return a;
    }

    private void UpsertPages(Article a, IDataContext ctx) {
      var repoPages = ctx.GetRepository<Page>();
      a.Pages.ForEach(t => {
        var dbPages = repoPages.Find("WHERE ArticleID=@0", a.ArticleID).FirstOrDefault();
        if (dbPages == null)
        {
          repoPages.Insert(t);
        }
        else {
          repoPages.Update(t);
        }
      });
    }

    private void UpsertTags(Article a, IDataContext ctx)
    {
      int i = 0;
      var atrep = ctx.GetRepository<ArticleTag>();
      var trep = ctx.GetRepository<Tag>();
      a.Tags.ForEach(t => {
        if (t.TagID <= 0) {
          // Add new tags if needed
          t.ModuleId = a.ModuleId;
          trep.Insert(t);
        }
        var dbat = atrep.Find("WHERE ArticleID=@0 AND TagID=@1", a.ArticleID, t.TagID).FirstOrDefault();
        if (dbat == null)
        {
          // add new tag links
          var at = new ArticleTag() { ArticleID = a.ArticleID, TagID = t.TagID };
          atrep.Insert(at);
        }
        i += 1;
      });
      //Remove linked tags no longer in collection
      var dbatags = atrep.Find("WHERE ArticleID=@0", a.ArticleID).ToList();
      dbatags.ForEach(t => {
        if (a.Tags.Where(tg => tg.TagID == t.TagID).Count() == 0) {
          atrep.Delete(t);
        }
      });
    }

    private void UpsertCategories(Article a, IDataContext ctx) {
      int i = 0;
      var acrep = ctx.GetRepository<ArticleCategory>();
      a.Categories.ForEach(c => {
        var dbcat = acrep.Find("WHERE ArticleID=@0 AND CategoryID=@1", a.ArticleID, c.CategoryID).FirstOrDefault();
        if (dbcat == null) {
          // add new category links if needed
          //var ac = new ArticleCategory() { ArticleID = a.ArticleID, CategoryID = c.CategoryID, ID = -1 };
          var ac = new ArticleCategory() { ArticleID = a.ArticleID, CategoryID = c.CategoryID };
          acrep.Insert(ac);
        }
        i += 1;
      });
      // Remove categories no longer in collection
      var dbaCats = acrep.Find("WHERE ArticleID=@0", a.ArticleID).ToList();
      dbaCats.ForEach(c => {
        if (a.Categories.Where(ac => ac.CategoryID == c.CategoryID).Count() == 0)
        {
          acrep.Delete(c);
        }
      });
      
    }

    private void UpsertFiles(Article a, IDataContext ctx)
    {
      int i = 0;
      var frep = ctx.GetRepository<File>();
      var dbaFiles = frep.Find("WHERE ArticleID=@0", a.ArticleID).Where(f=>f.IsImage==false).ToList();
      a.Files.ForEach(f => {
        f.ArticleID = a.ArticleID;
        f.SortOrder = i;
        var dfFile = dbaFiles.Where(dbf => dbf.FileID == f.FileID).SingleOrDefault();
        if (dfFile == null)
        {
          frep.Insert(f);
        }
        else {
          f.ID = dfFile.ID;
          frep.Update(f);
        }
        FileManager.Instance.UpdateFile(f.fileInfo);
        i += 1;
       });
      //Remove files no longer in collection
      
      dbaFiles.ForEach(f => {
        if (a.Files.Where(af => af.FileID == f.FileID).Count() == 0)
        {
          frep.Delete(f);
        }
      });
    }
    private void UpsertImages(Article a, IDataContext ctx)
    {
      int i = 0;
      var frep = ctx.GetRepository<File>();
      var dbaFiles = frep.Find("WHERE ArticleID=@0", a.ArticleID).Where(f => f.IsImage == true).ToList();
      a.Images.ForEach(f => {
        f.ArticleID = a.ArticleID;
        f.SortOrder = i;
        var dfFile = dbaFiles.Where(dbf => dbf.FileID == f.FileID).SingleOrDefault();
        if (dfFile == null)
        {
          frep.Insert(f);
        }
        else
        {
          f.ID = dfFile.ID;
          frep.Update(f);
        }
        FileManager.Instance.UpdateFile(f.fileInfo);
        i += 1;
      });
      //Remove files no longer in collection
      dbaFiles.ForEach(f => {
        if (a.Images.Where(af => af.FileID == f.FileID).Count() == 0)
        {
          frep.Delete(f);
        }
      });
    }

    public void Delete(int ArticleID, int ModuleID)
    {
      Requires.NotNegative("ArticleID", ArticleID);
      Requires.NotNegative("ModuleID", ModuleID);

      var t = Get(ArticleID, ModuleID);
      Delete(t);
    }

    public void Delete(Article t)
    {
      Requires.NotNull(t);
      Requires.PropertyNotNegative(t, "ArticleID");

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Article>();
        rep.Delete(t);
      }
    }

    public Article Get(long ArticleID, int ModuleID)
    {
      //Requires.NotNegative("ArticleID", ArticleID);
      Requires.NotNegative("ModuleID", ModuleID);

      Article t;
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Article>();
        t = rep.GetById(ArticleID, ModuleID);
        if (t == null) {
          return null;
        }
        var catRepo = ctx.GetRepository<Category>();
        var tagRepo = ctx.GetRepository<Tag>();
        var fileRepo = ctx.GetRepository<File>();
        var pageRepo = ctx.GetRepository<Page>();
        t.Categories = catRepo.Find("INNER JOIN OpenNews_ArticleCategories" +
          " ON OpenNews_ArticleCategories.CategoryID = OpenNews_Category.CategoryID" +
          " WHERE ArticleID=@0", t.ArticleID).ToList();
        t.Tags = tagRepo.Find("INNER JOIN OpenNews_ArticleTags" +
          " ON OpenNews_ArticleTags.TagID = OpenNews_Tag.TagID " +
          "  WHERE ArticleID=@0", t.ArticleID).ToList();
        var allFiles = fileRepo.Find("WHERE ArticleID=@0", t.ArticleID).ToList();
        t.Files = allFiles.Where(f => !f.IsImage).OrderBy(f=>f.SortOrder).ToList();
        t.Images = allFiles.Where(f => f.IsImage).OrderBy(f => f.SortOrder).ToList();
        t.Pages = pageRepo.Find("WHERE ArticleID=@0", t.ArticleID).OrderBy(o=>o.SortOrder).ToList();
      }
      return t;
    }

    public IQueryable<Article> GetList(int ModuleID)
    {
      Requires.NotNegative("ModuleID", ModuleID);

      IQueryable<Article> t = new List<Article>().AsQueryable();

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Article>();
        var lst = rep.Get(ModuleID);
        if (lst != null)
        {
          t = lst.AsQueryable();
        }
      }

      return t;
    }

    public IQueryable<Article> GetListByTabId(int TabId) {
      Requires.NotNegative("TabId", TabId);

      IQueryable<Article> t = new List<Article>().AsQueryable();

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Article>();
        //var lst = rep.Find(" INNER JOIN TabModules tm on tm.ModuleId = OpenNews_Article.ModuleId WHERE tm.tabId = @0", TabId);
        var lst = rep.Find(" WHERE ModuleId IN(SELECT ModuleId FROM TabModules WHERE tabId = @0)", TabId);
        if (lst != null)
        {
          t = lst.AsQueryable();
        }
      }

      return t;
    }

    public IPagedList<Article> GetPagedList(int ModuleID, int pageIndex, int pageSize, string sortBy, bool sortAsc)
    {
      Requires.NotNegative("ModuleID", ModuleID);

      var t = GetList(ModuleID);
      if (!string.IsNullOrEmpty(sortBy)) {
        try
        {
          if (sortAsc)
          {
            t = t.OrderBy(s => s.GetType().GetProperty(sortBy).GetValue(s));
          }
          else
          {
            t = t.OrderByDescending(s => s.GetType().GetProperty(sortBy).GetValue(s));
          }
        }
        catch (Exception) {
        }
      }
      return new PagedList<Article>(t.Skip(pageIndex * pageSize).Take(pageSize), t.Count(), pageIndex, pageSize);
    }

    private SqlParameter intListAsSqlParameter(List<int> list, string pname)
    {
      var table = new DataTable();
      table.Columns.Add("ID", typeof(int));

      if (list != null)
      {
        for (int i = 0; i < list.Count; i++)
          table.Rows.Add(list[i]);
      }

      var pList = new SqlParameter("@" + pname, SqlDbType.Structured);
      pList.TypeName = "dbo.intList";
      pList.Value = table;
      return pList;
    }
    private SqlParameter strListAsSqlParameter(List<string> list, string pname)
    {
      var table = new DataTable();
      table.Columns.Add("ID", typeof(string));

      if (list != null)
      {
        for (int i = 0; i < list.Count; i++)
          table.Rows.Add(list[i]);
      }

      var pList = new SqlParameter("@" + pname, SqlDbType.Structured);
      pList.TypeName = "dbo.varcharList";
      pList.Value = table;
      return pList;
    }

    public PagedList<Article> GetPagedList(int ModuleID, int pageIndex, int pageSize, string serachPhrase = "", 
      ArticleStatus? status=null, 
      bool hydrate = false, 
      int AuthorID = -1, 
      List<int> CategoryIds = null, 
      List<int> TagIds = null, 
      DateTime? portalTime = null,
      string sortBy ="StartDate", 
      bool sortAsc = false) {

      //TODO - Implement status filtering.

      PagedList<Article> list = default(PagedList<Article>);
      using (IDataContext ctx = DataContext.Instance()) {
        var total = new SqlParameter("@totalResults", System.Data.SqlDbType.Int);
        string statusString = null;
        if (status != null) {
          statusString = status.ToString();
        }
        total.Direction = System.Data.ParameterDirection.Output;
        var spres = ctx.ExecuteQuery<Article>(CommandType.StoredProcedure, "OpenNews_FindArticles",
          ModuleID,
          pageSize,
          pageIndex,
          serachPhrase,
          sortBy,
          sortAsc,
          statusString,
          portalTime,
          AuthorID,
          intListAsSqlParameter(CategoryIds, "CategoryIDList"),
          intListAsSqlParameter(TagIds, "TagIDList"),
          total
          );
        int totalOut = 0;
        if (((System.Data.SqlTypes.SqlInt32)total.SqlValue).IsNull == false)
        {
          totalOut = (int)total.Value;
        }

        list = new PagedList<Article>(spres, totalOut, pageIndex, pageSize);

        if (hydrate && list.Count > 0)
        {
          var catRepo = ctx.GetRepository<Category>();
          var artCatRepo = ctx.GetRepository<ArticleCategory>();
          var tagRepo = ctx.GetRepository<Tag>();
          var artTagRepo = ctx.GetRepository<ArticleTag>();
          var fileRepo = ctx.GetRepository<File>();
          var pageRepo = ctx.GetRepository<Page>();
          var artTags = artTagRepo.Find("WHERE ArticleID IN(@0)", list.Select(a => a.ArticleID).ToList());
          var artCats = artCatRepo.Find("WHERE ArticleID IN(@0)", list.Select(a => a.ArticleID).ToList());
          //var cats = catRepo.Find("INNER JOIN OpenNews_ArticleCategories" +
          //  " ON OpenNews_ArticleCategories.CategoryID = OpenNews_Category.CategoryID" +
          //  " WHERE ArticleID IN(@0)", list.Select(a=>a.ArticleID).ToList()).ToList();
          //var tags = tagRepo.Find("INNER JOIN OpenNews_ArticleTags" +
          //  " ON OpenNews_ArticleTags.TagID = OpenNews_Tag.TagID " +
          //  "  WHERE ArticleID IN(@0)", list.Select(a => a.ArticleID).ToList()).ToList();
          var allFiles = fileRepo.Find("WHERE ArticleID IN(@0)", list.Select(a => a.ArticleID).ToList()).ToList();
          //t.Files = allFiles.Where(f => !f.IsImage).OrderBy(f => f.SortOrder).ToList();
          //t.Images = allFiles.Where(f => f.IsImage).OrderBy(f => f.SortOrder).ToList();
          var pages = pageRepo.Find("WHERE ArticleID IN(@0)", list.Select(a => a.ArticleID).ToList()).OrderBy(o => o.SortOrder).ToList();
          var allCats = catRepo.Get(ModuleID);
          var allTags = tagRepo.Get(ModuleID);

          list.ForEach(a => {
            a.Categories = allCats.Where(c => artCats.Where(ac => ac.ArticleID == a.ArticleID)
            .Select(ac => ac.CategoryID).ToList().Contains(c.CategoryID)).ToList();

            a.Tags = allTags.Where(t => artTags.Where(ac => ac.ArticleID == a.ArticleID)
            .Select(at => at.TagID).ToList().Contains(t.TagID)).ToList();

            a.Images = allFiles.Where(f => f.ArticleID == a.ArticleID && f.IsImage)
            .OrderBy(f => f.SortOrder).ToList();

            a.Files = allFiles.Where(f => f.ArticleID == a.ArticleID && !f.IsImage)
            .OrderBy(f => f.SortOrder).ToList();

            a.Pages = pages.Where(p => p.ArticleID == a.ArticleID)
            .OrderBy(p => p.SortOrder).ToList();

          });
          
        }
      }
      return list;
    }


  }
}