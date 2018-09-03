using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;

namespace YeditUK.Modules.dnn_OpenNews.Services.ViewModels
{
  public class ArticleViewModel
  {
    public ArticleViewModel() {
    }
    public long ArticleID { get; set; }
    public long AuthorID { get; set; }
    public UserViewModel Author { get; set; }
    //public string AuthorName { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public long ApproverID { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime LastUpdated { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool IsApproved { get; set; }
    public bool AutoArchive { get; set; }
    public long NumOfViews { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public int ModuleID { get; set; }
    public bool IsFeatured { get; set; }
    public bool IsDraft { get; set; }
    public bool IsDeleted { get; set; }
    public string URL { get; set; }
    public string vwURL { get; set; }
    public string Summary { get; set; } = string.Empty;
    public long CommentCount { get; set; }
    public string MetaTitle { get; set; } = string.Empty;
    public string MetaDescription { get; set; } = string.Empty;
    public string MetaKeywords { get; set; } = string.Empty;
    public string PageHeadText { get; set; } = string.Empty;
    public string ShortURL { get; set; } = string.Empty;
    public string RssGuid { get; set; } = Guid.NewGuid().ToString();
    public string Body { get; set; } = string.Empty;
    public FileViewModel PrimaryImage {
      get {
        return this.Images.FirstOrDefault();
      }
    }
    public List<FileViewModel> Files { get; set; } = new List<FileViewModel>();
    public List<FileViewModel> Images { get; set; } = new List<FileViewModel>();
    public List<TagViewModel> Tags { get; set; } = new List<TagViewModel>();
    public List<CategoryViewModel> Categories { get; set; } = new List<CategoryViewModel>();
    public dynamic CustomTypes { get; set; } = null;
    public string customJSON { get; set; }
    public List<string> Actions { get; set; } = new List<string>();
}
}