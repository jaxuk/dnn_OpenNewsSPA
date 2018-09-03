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
    public ArticleViewModel(MenuViewModel menuView, YeditUK.Modules.dnn_OpenNews.Components.ViewController viewController)
    {
      this.MenuView = menuView;
      this.viewController = viewController;
    }
    public YeditUK.Modules.dnn_OpenNews.Components.ViewController viewController { get; set; }
    public MenuViewModel MenuView { get; set; }
    public Services.ViewModels.ArticleViewModel Article { get; set; }
    public List<Services.ViewModels.CategoryViewModel> AllCategories { get; set; }
    public List<Services.ViewModels.ArticleViewModel> RelatedArticles { get; set; }
    public List<Services.ViewModels.ArticleViewModel> FeaturedArticles { get; set; }
    public List<Services.ViewModels.ArticleViewModel> LatestArticles { get; set; }
  }
}