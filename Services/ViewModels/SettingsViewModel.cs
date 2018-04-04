using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Services.ViewModels
{
  public class SettingsViewModel
  {
    public int BasicArticlesPerPage;
    public string BasicRenderingTemplate;
    public string BasicServerTimeZone;
    public string BasicSortBy;
    public string BasicSortDirection;
    public bool BasicAllowCoreSearchIntegration;
    public int[] CategoryDefaultCategories;
    public bool CategoryIncludeInBreadcrumb;
    public bool CategoryRequireCategory;
    public string FileDefaultFileFolder;
    public string[] ImageAllowedTypes;
    public string ImageDefaultImageFolder;
    public string[] FileAllowedTypes;

    public bool SEORemovePagePathFromURL;
    public bool NotificationNotifyApproversOnSubmission;
    public bool NotificationNotifyApproversOnApproval;
    public string PageTabUrl;
    public bool debugEnabled;
  }
}