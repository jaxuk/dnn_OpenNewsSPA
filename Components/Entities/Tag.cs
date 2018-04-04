using System;
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities
{
  [TableName("OpenNews_Tag")]
  //setup the primary key for table
  [PrimaryKey("TagID", AutoIncrement = true)]
  //configure caching using PetaPoco
  //[Cacheable("Tags", CacheItemPriority.Default, 20)]
  //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
  [Scope("ModuleId")]
  public class Tag
  {
    public int TagID { get; set; }
    public int ModuleId { get; set; }
    public string Name { get; set; }
  }
}