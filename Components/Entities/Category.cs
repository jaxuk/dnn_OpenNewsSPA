using System;
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;
using DotNetNuke.Services.FileSystem;
using System.Collections.Generic;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities
{
  [TableName("OpenNews_Category")]
  //setup the primary key for table
  [PrimaryKey("CategoryID", AutoIncrement = true)]
  //configure caching using PetaPoco
  [Cacheable("Categories", CacheItemPriority.Default, 20)]
  //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
  [Scope("ModuleId")]
  public class Category
  {
    public int ContentItemID { get; set; }
    public int CategoryID { get; set; }
    public int ModuleId { get; set; }
    public string Name { get; set; } = string.Empty;
    public long ImageFileID { get; set; } = -1;
    public int ParentID { get; set; }
    public string Description { get; set; } = string.Empty;
    public int SortOrder { get; set; }
    public string MetaTitle { get; set; } = string.Empty;
    public string MetaDescription { get; set; } = string.Empty;
    public string MetaKeywords { get; set; } = string.Empty;
    public string PageHeadText { get; set; } = string.Empty;
    public string ShortURL { get; set; } = string.Empty;
    public string URL { get; set; } = string.Empty;
    [IgnoreColumn]
    public File Image { get; set; }
    [IgnoreColumn]
    public List<Category> Children { get; set; }
}
}