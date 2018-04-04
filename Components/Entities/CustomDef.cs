using System;
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities
{
  [TableName("OpenNews_CustomObjectsDef")]
  //setup the primary key for table
  [PrimaryKey("DefId", AutoIncrement = true)]
  //configure caching using PetaPoco
  [Cacheable("CustomObjectsDef", CacheItemPriority.Default, 20)]
  //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
  [Scope("ModuleId")]
  public class CustomDef
  {
    public int DefId { get; set; }
    public int ModuleId { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string TypeName { get; set; }
    [Required]
    public bool Required { get; set; }
    public string Json { get; set; }
    [IgnoreColumn]
    public List<CustomDefField> Fields { get; set; } = new List<CustomDefField>();
  }

  public class CustomDefField {
    [Required]
    public string name { get; set; }
    [Required]
    public string label { get; set; }
    public string help { get; set; }
    [Required]
    public string dataType { get; set; }
    [Required]
    public string controlType { get; set; }
    public string inputType { get; set; } = "text";
    public string placeholder { get; set; } = "";
    public object defaultValue { get; set; } = null;
    public bool visible { get; set; } = false;
    public bool required { get; set; } = false;
    public string validationRegEx { get; set; } = "";
    public int maxLength { get; set; } = -1;
    public string[] validation { get; set; } = null;
    public string[] validators { get; set; } = null;
    public dynamic options { get; set; } = null;
    public int rows { get; set; } = 3;
  }
}