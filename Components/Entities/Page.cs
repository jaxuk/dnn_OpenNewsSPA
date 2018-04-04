using System;
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities
{
  [TableName("OpenNews_Page")]
  //setup the primary key for table
  [PrimaryKey("PageID", AutoIncrement = true)]
  //configure caching using PetaPoco
  [Cacheable("Pages", CacheItemPriority.Default, 20)]
  //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
  //[Scope("ModuleId")]
  public class Page
  {
    public long PageID { get; set; }
    public long ArticleID { get; set; }
    public string PageText { get; set; }
    public int SortOrder { get; set; }
  }
}