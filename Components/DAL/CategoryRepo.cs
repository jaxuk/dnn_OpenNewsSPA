using DotNetNuke.Collections;
using DotNetNuke.Common;
using DotNetNuke.Data;
using DotNetNuke.Framework;
using DotNetNuke.Services.FileSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Intergration;

namespace YeditUK.Modules.dnn_OpenNews.Components.DAL
{
  public interface ICategoryRepo
  {
    Category Add(Category c);

    void Delete(int CategoryID, int ModuleID);

    void Delete(Category c);

    Category Get(int CategoryID, int ModuleID);

    IQueryable<Category> GetList(int ModuleID);

    IQueryable<Category> GetTree(int ModuleID);

    IQueryable<Category> GetListByTabId(int TabId);

    IPagedList<Category> GetList(int ModuleID, int pageIndex, int pageSize);

    Category Update(Category t);

    void UpdateCategoryTree(List<Category> cats, int ModuleID);

    bool validateCategoryUrlNotInUse(string url, int ModuleId, int CategoryId, out string reason);
  }
  public class CategoryRepo : ServiceLocator<ICategoryRepo, CategoryRepo>, ICategoryRepo
  {
    protected override Func<ICategoryRepo> GetFactory()
    {
      return () => new CategoryRepo();
    }

    public bool validateCategoryUrlNotInUse(string url, int ModuleId, int CategoryId, out string reason)
    {
      Requires.NotNegative("ModuleId", ModuleId);
      Requires.NotNullOrEmpty("url", url);
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Category>();
        var inuse = rep.Find("WHERE url=@0 AND ModuleId=@1", url, ModuleId).SingleOrDefault();
        if (inuse != null && inuse.CategoryID != CategoryId)
        {
          reason = "URL slug in use by category with id: " + inuse.CategoryID.ToString() +
            " Name: " + inuse.Name;
          return false;
        }
      }
      reason = "";
      return true;
    }

    public Category Add(Category c)
    {
      Requires.NotNull(c);
      Requires.PropertyNotNegative(c, "ModuleId");

      string valReason = "";
      if (!this.validateCategoryUrlNotInUse(c.URL, c.ModuleId, c.CategoryID, out valReason))
      {
        throw (new Exception("URL already in use"));
      }

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Category>();
        c.SortOrder = rep.Get().Where(cp => cp.ParentID == 0).Count() + 1;
        rep.Insert(c);
        var cntTaxonomy = new DNNContent();
        var objContentItem = cntTaxonomy.CreateContentItem(c);
        c.ContentItemID = objContentItem.ContentItemId;
        rep.Update(c);
        if (c != null && c.ImageFileID > 0)
        {
          c.Image = new Components.Entities.File(FileManager.Instance.GetFile((int)c.ImageFileID));
        }
      }
      return c;
    }

    public void Delete(int CategoryID, int ModuleID)
    {
      Requires.NotNegative("CategoryID", CategoryID);
      Requires.NotNegative("ModuleID", ModuleID);

      var t = Get(CategoryID, ModuleID);
      Delete(t);
    }

    public void Delete(Category t)
    {
      Requires.NotNull(t);
      Requires.PropertyNotNegative(t, "CategoryID");

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Category>();
        rep.Delete(t);
      }
    }

    public Category Get(int CategoryID, int ModuleID)
    {
      Requires.NotNegative("CategoryID", CategoryID);
      Requires.NotNegative("ModuleID", ModuleID);

      Category t;
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Category>();
        t = rep.GetById(CategoryID, ModuleID);
        if (t != null && t.ImageFileID > 0) {
          t.Image = new Components.Entities.File(FileManager.Instance.GetFile((int)t.ImageFileID));
        }
      }
      return t;
    }

    public IQueryable<Category> GetList(int ModuleID)
    {
      Requires.NotNegative("ModuleID", ModuleID);

      IQueryable<Category> t = new List<Category>().AsQueryable();

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Category>();
        var lst = rep.Get(ModuleID);
        lst.ForEach(l => {
          if (l != null && l.ImageFileID > 0)
          {
            l.Image = new Components.Entities.File(FileManager.Instance.GetFile((int)l.ImageFileID));
          }
        });
        if (lst!=null) {
          t = lst.AsQueryable();
        }
      }

      return t;
    }

    public IQueryable<Category> GetListByTabId(int TabId)
    {
      Requires.NotNegative("TabId", TabId);

      IQueryable<Category> t = new List<Category>().AsQueryable();

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Category>();
        var lst = rep.Find(" WHERE ModuleId IN(SELECT ModuleId FROM TabModules WHERE tabId = @0)", TabId);
        if (lst != null)
        {
          t = lst.AsQueryable();
        }
      }

      return t;
    }

    public IPagedList<Category> GetList(int ModuleID, int pageIndex, int pageSize)
    {
      Requires.NotNegative("ModuleID", ModuleID);

      var t = GetList(ModuleID);

      t.ForEach(l => {
        if (l != null && l.ImageFileID > 0)
        {
          l.Image = new Components.Entities.File(FileManager.Instance.GetFile((int)l.ImageFileID));
        }
      });

      return new PagedList<Category>(t, pageIndex, pageSize);
    }

    public Category Update(Category c)
    {
      Requires.NotNull(c);
      Requires.PropertyNotNegative(c, "CategoryID");

      string valReason = "";
      if (!this.validateCategoryUrlNotInUse(c.URL, c.ModuleId, c.CategoryID, out valReason)) {
        throw (new Exception("URL already in use"));
      }

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Category>();
        var cntTaxonomy = new DNNContent();
        cntTaxonomy.UpdateContentItem(c);
        rep.Update(c);
        if (c != null && c.ImageFileID > 0)
        {
          c.Image = new Components.Entities.File(FileManager.Instance.GetFile((int)c.ImageFileID));
        }
      }
      return c;
    }

    public void UpdateCategoryTree(List<Category> cats, int ModuleID)
    {
      Requires.NotNull(cats);
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Category>();
        var dbcats = rep.Get(ModuleID);
        ctx.BeginTransaction();
        cats.ForEach(c => {
          var dcat = dbcats.Where(dc => dc.CategoryID == c.CategoryID).First();
          dcat.ParentID = c.ParentID;
          dcat.SortOrder = c.SortOrder;
          this.Update(dcat);
        });
        ctx.Commit();
      }
    }

    public IQueryable<Category> GetTree(int ModuleID)
    {
      Requires.NotNegative("ModuleID", ModuleID);
      var cats = GetList(ModuleID);

      var lookup = cats.ToLookup(c => c.ParentID);

      foreach (var cat in lookup.SelectMany(x => x))
      {
        cat.Children = lookup[cat.CategoryID].OrderBy(c => c.SortOrder).ToList();
      }
      cats = lookup[0].OrderBy(c => c.SortOrder).AsQueryable();

      return cats;
    }
  }
}