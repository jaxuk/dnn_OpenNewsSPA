using DotNetNuke.Collections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;
using DotNetNuke.Web.Razor.Helpers;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;

namespace YeditUK.Modules.dnn_OpenNews.Templates.ViewModels
{
  public class ArticlesPagerViewModel
  {
    public IPagedList<Services.ViewModels.ArticleViewModel> Articles { get; set; }
    public DnnHelper Dnn { get; set; }
    public int pagingID { get; set; }
    public ViewType viewType { get; set; }
  }
}