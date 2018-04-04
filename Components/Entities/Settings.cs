using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities
{
  public class Settings
  {
    public int BasicArticlesPerPage { get; set; } = 10;
    public string BasicRenderingTemplate { get; set; } = "Default";
    public string BasicServerTimeZone { get; set; }
    public string BasicSortBy { get; set; } = "StartDate";
    public string BasicSortDirection { get; set; } = "DESC";
    public bool BasicAllowCoreSearchIntegration { get; set; } = true;
    public int[] CategoryDefaultCategories { get; set; } = null;
    public bool CategoryIncludeInBreadcrumb { get; set; } = true;
    public bool CategoryRequireCategory { get; set; } = true;
    public string FileDefaultFileFolder { get; set; } = "";
    public string[] FileAllowedTypes { get; set; } = null;
    public string ImageDefaultImageFolder { get; set; } = "";
    public string[] ImageAllowedTypes { get; set; } = null;
    public bool SEORemovePagePathFromURL { get; set; } = false;
    public bool NotificationNotifyApproversOnSubmission { get; set; } = true;
    public bool NotificationNotifyApproversOnApproval { get; set; } = true;
    public string PageTabUrl { get; set; } = "";
    public bool debugEnabled { get; set; } = false;
  }
}