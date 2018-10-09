using DotNetNuke.Collections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;
using DotNetNuke.Web.Razor.Helpers;

namespace YeditUK.Modules.dnn_OpenNews.Templates.ViewModels
{
  public class ListArticlesViewModel
  {
    public IPagedList<Services.ViewModels.ArticleViewModel> Articles { get; set; }
    public DnnHelper Dnn { get; set; }

    public int TabId { get; set; } = -1;
  }
}