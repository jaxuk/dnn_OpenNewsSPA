﻿using System;
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities
{
  [TableName("OpenNews_ArticleTags")]
  //setup the primary key for table
  //[PrimaryKey("TagID", AutoIncrement = true)]
  //configure caching using PetaPoco
  [Cacheable("ArticleTags", CacheItemPriority.Default, 20)]
  //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
  //[Scope("ModuleId")]
  public class ArticleTag
  {
    public long ArticleID { get; set; }
    public int TagID { get; set; }
  }
}