using DotNetNuke.Collections;
using DotNetNuke.Common;
using DotNetNuke.Data;
using DotNetNuke.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Components.DAL
{
  public interface ITagRepo
  {
    Tag Add(Tag t);

    Tag Get(int TagID, int ModuleID);

    IQueryable<Tag> GetList(int ModuleID);

    IPagedList<Tag> GetList(int ModuleID, int pageIndex, int pageSize);

    IQueryable<Tag> TagStartsWith(int ModuleID, string StartsWith);

  }
  public class TagRepo : ServiceLocator<ITagRepo, TagRepo>, ITagRepo
  {
    protected override Func<ITagRepo> GetFactory()
    {
      return () => new TagRepo();
    }
    public Tag Add(Tag t)
    {
      Requires.NotNull(t);
      Requires.PropertyNotNegative(t, "ModuleId");
      using (IDataContext ctx = DataContext.Instance()) {
        var rep = ctx.GetRepository<Tag>();
        var dbtag = rep.Find("WHERE Name=@0 AND ModuleID=@1", t.Name, t.ModuleId).FirstOrDefault();
        if (dbtag != null)
        {
          throw (new Exception("Tag already exists with name: " + t.Name));
        }
        else {
          rep.Insert(t);
        }
      }
      return t;
    }

    public Tag Get(int TagID, int ModuleId)
    {
      Requires.NotNegative("TagID", TagID);
      Requires.NotNegative("ModuleId", ModuleId);

      Tag t;
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Tag>();
        t = rep.GetById(TagID, ModuleId);
      }
      return t;
    }

    public IQueryable<Tag> GetList(int ModuleId)
    {
      Requires.NotNegative("ModuleId", ModuleId);

      IQueryable<Tag> t = new List<Tag>().AsQueryable();

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<Tag>();
        var lst = rep.Get(ModuleId);
        if (lst != null)
        {
          t = lst.AsQueryable();
        }
      }

      return t;
    }

    public IPagedList<Tag> GetList(int ModuleId, int pageIndex, int pageSize)
    {
      Requires.NotNegative("ModuleId", ModuleId);

      var t = GetList(ModuleId);

      return new PagedList<Tag>(t, pageIndex, pageSize);
    }

    public IQueryable<Tag> TagStartsWith(int ModuleId, string StartsWith)
    {
      Requires.NotNegative("ModuleId", ModuleId);
      Requires.NotNullOrEmpty("", StartsWith);

      IQueryable<Tag> tags = new List<Tag>().AsQueryable();

      using (IDataContext ctx = DataContext.Instance()) {
        var rep = ctx.GetRepository<Tag>();
        var dbtags = rep.Find("WHERE lower(Name) like @0 AND ModuleID=@1", StartsWith + "%", ModuleId);
        if (dbtags != null)
        {
          tags = dbtags.AsQueryable();
        }
        return tags;
      }
      
    }
  }
}