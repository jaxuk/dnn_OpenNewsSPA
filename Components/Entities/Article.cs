using System;
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;
using System.Collections.Generic;
using DotNetNuke.Services.FileSystem;
using DotNetNuke.Entities.Users;
using DotNetNuke.Entities.Portals;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities
{
  [TableName("OpenNews_Article")]
  //setup the primary key for table
  [PrimaryKey("ArticleID", AutoIncrement = true)]
  //configure caching using PetaPoco
  [Cacheable("Articles", CacheItemPriority.Default, 20)]
  //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
  [Scope("ModuleId")]
  public class Article
  {
    public long ContentItemID { get; set; }
    public long ArticleID { get; set; }
    public long AuthorID { get; set; }
    [IgnoreColumn]
    public UserInfo Author { get {
        if (this.AuthorID > 0)
        {
          return UserController.Instance.GetUserById(PortalController.Instance.GetCurrentPortalSettings().PortalId, (int)this.AuthorID);
        }
        else {
          return null;
        }
      } }
    public long ApproverID { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime LastUpdated { get; set; }
    public int LastUpdateID { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool IsApproved { get; set; }
    public long NumOfViews { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public int ModuleId { get; set; }
    public bool IsDraft { get; set; }
    public bool IsDeleted { get; set; }
    public bool AutoArchive { get; set; }
    
    public bool IsFeatured { get; set; }
    public string URL { get; set; }
    public string Summary { get; set; } = string.Empty;
    public long CommentCount { get; set; }
    public string MetaTitle { get; set; } = string.Empty;
    public string MetaDescription { get; set; } = string.Empty;
    public string MetaKeywords { get; set; } = string.Empty;
    public string PageHeadText { get; set; } = string.Empty;
    public string ShortURL { get; set; } = string.Empty;
    public string customJSON { get; set; } = string.Empty;
    [IgnoreColumn]
    public dynamic CustomTypes {
      get {
        if (!string.IsNullOrEmpty(customJSON))
        {
          return Newtonsoft.Json.JsonConvert.DeserializeObject(customJSON);
        }
        else {
          return null;
        }
      } set {
        customJSON = Newtonsoft.Json.JsonConvert.SerializeObject(value);
      }
    }
    public string RssGuid { get; set; } = Guid.NewGuid().ToString();
    [IgnoreColumn]
    public List<Page> Pages { get; set; }
    [IgnoreColumn]
    public List<File> Files { get; set; }
    [IgnoreColumn]
    public List<File> Images { get; set; }
    [IgnoreColumn]
    public List<Tag> Tags { get; set; }
    [IgnoreColumn]
    public List<Category> Categories { get; set; }
    //private Enums.ArticleStatus _status;
    [IgnoreColumn]
    public Enums.ArticleStatus Status
    {
      get {
        if (this.IsDeleted)
        {
          return Enums.ArticleStatus.Deleted;
        }
        else if (this.IsApproved == false && this.IsDraft==false)
        {
          return Enums.ArticleStatus.NeedsApproval;
        }
        else if (this.IsDraft)
        {
          return Enums.ArticleStatus.Draft;
        }
        else if (this.EndDate != null && this.EndDate <= DateTime.Now)
        {
          return Enums.ArticleStatus.Expired;
        }
        else if (this.StartDate <= DateTime.Now) {
          return Enums.ArticleStatus.Live;
        }
        else{
          return Enums.ArticleStatus.Upcoming;
        }
      }
    }

  }
}