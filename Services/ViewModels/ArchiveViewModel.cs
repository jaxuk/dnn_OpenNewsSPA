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
  public class ArchiveViewModel
  {
    public ArchiveViewModel()
    {
    }
    public ArchiveViewModel(dynamic d)
    {
      this.Year = d.Year;
      this.Month = d.Month;
      this.ArticleCount = d.ArticleCount;
    }
    public int Year { get; set; } = -1;
    public int Month { get; set; } = -1;
    public int ArticleCount { get; set; } = 0;
  }
}