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
  public interface ICustomDefRepo
  {
    CustomDef Add(CustomDef t);

    CustomDef Get(int CustomDefID, int ModuleID);

    IQueryable<CustomDef> GetList(int ModuleID);

    IPagedList<CustomDef> GetList(int ModuleID, int pageIndex, int pageSize);

  }
  public class CustomDefRepo : ServiceLocator<ICustomDefRepo, CustomDefRepo>, ICustomDefRepo
  {
    protected override Func<ICustomDefRepo> GetFactory()
    {
      return () => new CustomDefRepo();
    }
    public CustomDef Add(CustomDef t)
    {
      Requires.NotNull(t);
      Requires.PropertyNotNegative(t, "ModuleId");
      using (IDataContext ctx = DataContext.Instance()) {
        var rep = ctx.GetRepository<CustomDef>();
        var dbCustomDef = rep.Find("WHERE Name=@0 AND ModuleID=@1", t.Name, t.ModuleId).FirstOrDefault();
        if (dbCustomDef != null)
        {
          throw (new Exception("CustomDef already exists with name: " + t.Name));
        }
        else {
          rep.Insert(t);
        }
      }
      return t;
    }

    public CustomDef Get(int CustomDefID, int ModuleId)
    {
      Requires.NotNegative("CustomDefID", CustomDefID);
      Requires.NotNegative("ModuleId", ModuleId);

      CustomDef t;
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<CustomDef>();
        t = rep.GetById(CustomDefID, ModuleId);
      }
      return t;
    }

    public IQueryable<CustomDef> GetList(int ModuleId)
    {
      Requires.NotNegative("ModuleId", ModuleId);

      IQueryable<CustomDef> t = new List<CustomDef>().AsQueryable();

      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<CustomDef>();
        var lst = rep.Get(ModuleId);
        if (lst != null)
        {
          t = lst.AsQueryable();
        }
      }

      return t;
    }

    public IPagedList<CustomDef> GetList(int ModuleId, int pageIndex, int pageSize)
    {
      Requires.NotNegative("ModuleId", ModuleId);

      var t = GetList(ModuleId);

      return new PagedList<CustomDef>(t, pageIndex, pageSize);
    }
  }
}