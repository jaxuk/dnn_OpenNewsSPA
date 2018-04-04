using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Templates.ViewModels
{
  public class ArticleViewModel
  {
    public ArticleViewModel()
    {
    }
    public ArticleViewModel(MenuViewModel menuView)
    {
      this.MenuView = menuView;
    }
    public MenuViewModel MenuView { get; set; }
    public Services.ViewModels.ArticleViewModel Article { get; set; }
  }
}