using DotNetNuke.Data;
using DotNetNuke.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Components.DAL
{
  public interface IPageRepo : IRepository<Page>
  {

  }
  public class PageRepo : RepositoryImpl<Page>, IPageRepo
  {

  }
}