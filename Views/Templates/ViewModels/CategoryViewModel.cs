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
  public class CategoryViewModel
  {
    public CategoryViewModel()
    {
    }
    public CategoryViewModel(MenuViewModel menuView)
    {
      this.MenuView = menuView;
    }
    public MenuViewModel MenuView { get; set; }
    public IPagedList<Services.ViewModels.ArticleViewModel> Articles { get; set; }
    public Services.ViewModels.CategoryViewModel Category { get; set; }
  }
}