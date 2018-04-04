using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using DotNetNuke.Data;
using DotNetNuke.Collections;
using System.Web.Http;
using DotNetNuke.Common;
using DotNetNuke.Framework;

namespace YeditUK.Modules.dnn_OpenNews.Components.DAL
{
  public interface IRepositoryImpl<T> : IRepository<T> where T : class
  {
    new void Delete(T item);
    new void Delete(string sqlCondition, params object[] args);
    new IEnumerable<T> Find(string sqlCondition, params object[] args);
    new IPagedList<T> Find(int pageIndex, int pageSize, string sqlCondition, params object[] args);
    new IEnumerable<T> Get();
    new IEnumerable<T> Get<TScopeType>(TScopeType scopeValue);
    new T GetById<TProperty>(TProperty id);
    new T GetById<TProperty, TScopeType>(TProperty id, TScopeType scopeValue);
    new IPagedList<T> GetPage(int pageIndex, int pageSize);
    new IPagedList<T> GetPage<TScopeType>(TScopeType scopeValue, int pageIndex, int pageSize);
    new void Insert(T item);
    new void Update(T item);
    new void Update(string sqlCondition, params object[] args);
  }
  //public abstract class RepositoryImpl<T> : IRepository<T> where T : class
  //public class RepositoryImpl<T> : ServiceLocator<IRepositoryImpl<T>, RepositoryImpl<T>> where T : class
  public abstract class RepositoryImpl<T> : IRepository<T> where T : class
  {
    //protected override Func<IRepositoryImpl<T>> GetFactory()
    //{
    //  return () => new RepositoryImpl();
    //}

    public virtual void Delete(T item)
    {
      Requires.NotNull(item);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        repo.Delete(item);
      }
    }

    public virtual void Delete(string sqlCondition, params object[] args)
    {
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        repo.Delete(sqlCondition, args);
      }
    }

    public virtual IEnumerable<T> Find(string sqlCondition, params object[] args)
    {
      IEnumerable<T> list = default(IEnumerable<T>);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        list = repo.Find(sqlCondition, args);
      }
      return list;
    }

    public virtual IPagedList<T> Find(int pageIndex, int pageSize, string sqlCondition, params object[] args)
    {
      IPagedList<T> list = default(IPagedList<T>);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        list = repo.Find(pageIndex, pageSize, sqlCondition, args);
      }
      return list;
    }

    public virtual IEnumerable<T> Get()
    {
      IEnumerable<T> list = default(IEnumerable<T>);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        list = repo.Get();
      }
      return list;
    }

    public virtual IEnumerable<T> Get<TScopeType>(TScopeType scopeValue)
    {
      IEnumerable<T> list = default(IEnumerable<T>);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        list = repo.Get<TScopeType>(scopeValue);
      }
      return list;
    }

    public virtual T GetById<TProperty>(TProperty id)
    {
      Requires.NotNull(id);
      T item = default(T);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        item = repo.GetById<TProperty>(id);
      }
      return item;
    }

    public virtual T GetById<TProperty, TScopeType>(TProperty id, TScopeType scopeValue)
    {
      Requires.NotNull(id);
      T item = default(T);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        item = repo.GetById<TProperty, TScopeType>(id, scopeValue);
      }
      return item;
    }

    public virtual IPagedList<T> GetPage(int pageIndex, int pageSize)
    {
      Requires.NotNull(pageIndex);
      Requires.NotNull(pageSize);
      IPagedList<T> list = default(IPagedList<T>);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        list = repo.GetPage(pageIndex, pageSize);
      }
      return list;
    }

    public virtual IPagedList<T> GetPage<TScopeType>(TScopeType scopeValue, int pageIndex, int pageSize)
    {
      Requires.NotNull(pageIndex);
      Requires.NotNull(pageSize);
      IPagedList<T> list = default(IPagedList<T>);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        list = repo.GetPage<TScopeType>(scopeValue, pageIndex, pageSize);
      }
      return list;
    }

    public virtual void Insert(T item)
    {
      Requires.NotNull(item);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        repo.Insert(item);
      }
    }

    public virtual void Update(T item)
    {
      Requires.NotNull(item);
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        repo.Update(item);
      }
    }

    public virtual void Update(string sqlCondition, params object[] args)
    {
      using (IDataContext db = DataContext.Instance())
      {
        dynamic repo = db.GetRepository<T>();
        repo.Update(sqlCondition, args);
      }
    }
  }
}