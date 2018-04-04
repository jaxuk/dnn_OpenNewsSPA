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
  public interface IFileRepo
  {
    File Add(File f);

    File Get(long FileID);

    File Get(long FileID, long ArticleId);

    void Delete(File f, bool forceDelete);

    IQueryable<File> GetListByArtricle(long ArticleId);

    IPagedList<File> GetListByArtricle(long ArticleId, int pageIndex, int pageSize);

  }
  public class FileRepo : ServiceLocator<IFileRepo, FileRepo>, IFileRepo
  {
    protected override Func<IFileRepo> GetFactory()
    {
      return () => new FileRepo();
    }
    public File Add(File f)
    {
      Requires.NotNull(f);
      Requires.PropertyNotNegative(f, "ModuleId");
      using (IDataContext ctx = DataContext.Instance()) {
        var rep = ctx.GetRepository<File>();
        rep.Insert(f);
      }
      return f;
    }

    public File Update(File f)
    {
      Requires.NotNull(f);
      Requires.PropertyNotNegative(f, "ModuleId");
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<File>();
        rep.Update(f);
      }
      return f;
    }

    public File Upsert(File f)
    {
      Requires.NotNull(f);
      Requires.PropertyNotNegative(f, "ModuleId");
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<File>();
        if (rep.Find("WHERE Fileid=@0 AND ArticleID=@1", f.FileID, f.ArticleID).FirstOrDefault() == null)
        {
          rep.Insert(f);
        }
        else {
          rep.Update(f);
        }
        
      }
      return f;
    }

    public File Get(long FileID)
    {

      File t;
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<File>();
        t = rep.Find("WHERE FileId=@0", FileID).SingleOrDefault();
      }
      return t;
    }

    public File Get(long FileID, long ArticleId)
    {

      File t;
      using (IDataContext ctx = DataContext.Instance())
      {
        var rep = ctx.GetRepository<File>();
        t = rep.Find("WHERE FileId=@0 AND ArticleId=@1", FileID, ArticleId).SingleOrDefault();
      }
      return t;
    }

    public void Delete(File f, bool forceDelete)
    {
      throw new NotImplementedException();
    }

    public IQueryable<File> GetListByArtricle(long ArticleId)
    {
      throw new NotImplementedException();
    }

    public IPagedList<File> GetListByArtricle(long ArticleId, int pageIndex, int pageSize)
    {
      throw new NotImplementedException();
    }
  }
}