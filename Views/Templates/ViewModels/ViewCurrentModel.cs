using DotNetNuke.Collections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;

namespace YeditUK.Modules.dnn_OpenNews.Templates.ViewModels
{
  public class ViewCurrentModel
  {
    public ViewCurrentModel() {
    }
    public ViewCurrentModel(MenuViewModel menuView)
    {
      this.MenuView = menuView;
    }
    public MenuViewModel MenuView { get; set; }
    public IPagedList<Services.ViewModels.ArticleViewModel> Articles { get; set; }
    public List<Services.ViewModels.CategoryViewModel> AllCategories { get; set; }
  }
}