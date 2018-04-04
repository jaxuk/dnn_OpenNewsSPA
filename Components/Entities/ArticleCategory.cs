using System;
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities
{
  [TableName("OpenNews_ArticleCategories")]
  //setup the primary key for table
  //[PrimaryKey("ID", AutoIncrement = true)]
  //configure caching using PetaPoco
  [Cacheable("ArticleCategories", CacheItemPriority.Default, 20)]
  //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
  //[Scope("ArticleID")]
  public class ArticleCategory
  {
    public long ArticleID { get; set; }
    public int CategoryID { get; set; }
    //public int ID { get; set; }
  }
}