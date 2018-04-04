using DotNetNuke.Collections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;

namespace YeditUK.Modules.dnn_OpenNews.Templates.ViewModels
{
  public class TagViewModel
  {
    public TagViewModel()
    {
    }
    public TagViewModel(MenuViewModel menuView)
    {
      this.MenuView = menuView;
    }
    public MenuViewModel MenuView { get; set; }
    public IPagedList<Services.ViewModels.ArticleViewModel> Articles { get; set; }
    public Services.ViewModels.TagViewModel Tag { get; set; }
  }
}