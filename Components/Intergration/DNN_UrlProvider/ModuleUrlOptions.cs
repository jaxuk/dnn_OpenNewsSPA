using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_UrlProvider.Entities
{
  internal enum ArticleUrlStyle
  {
    BlogStyle, TitleStyle, UrlStyle
  }
  internal enum ArticleUrlSource
  {
    Title, MetaTitle, ShortUrl, Url
  }
  internal enum CategoryUrlStyle
  {
    CatName, CatHierarchy
  }
  internal class ModuleUrlOptions
  {
    public int tabId { get; set; } = -1;
    public int moduleId { get; set; } = -1;

    public bool RemovePagePathFromURL { get; set; } = false;
    public ArticleUrlStyle articleStyle { get; set; } = ArticleUrlStyle.UrlStyle;
    public ArticleUrlSource articleSource { get; set; } = ArticleUrlSource.Url;
    public CategoryUrlStyle categoryStyle { get; set; } = CategoryUrlStyle.CatName;
    protected bool _redirectOtherStyles { get; set; } = false;

    internal ModuleUrlOptions()
    {
    }

    internal ModuleUrlOptions(int tabId, int moduleId)
    {
      this.tabId = tabId;
      this.moduleId = moduleId;
    }
  }
}