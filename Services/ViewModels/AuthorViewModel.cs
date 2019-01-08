using DotNetNuke.Collections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;

namespace YeditUK.Modules.dnn_OpenNews.Services.ViewModels
{
  public class AuthorViewModel
  {
    public AuthorViewModel()
    {
    }
    public ArchiveViewModel(dynamic d)
    {
      this.ArticleCount = d.ArticleCount;
    }
    public int AuthorID { get; set; } = -1;
    public string DisplayName { get; set; } = -1;
    public int ArticleCount { get; set; } = 0;
    public 
  }
}