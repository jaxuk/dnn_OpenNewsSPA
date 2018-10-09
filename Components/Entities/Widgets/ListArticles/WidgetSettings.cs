using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities.Widgets.ListArticles
{
  public class WidgetSettings
  {
    public int ArticlesPerPage { get; set; } = 10;
    public string SortBy { get; set; } = "StartDate";
    public string SortDirection { get; set; } = "DESC";
    public string Theme { get; set; } = "Default";
    public string TemplateFile { get; set; } = "listArticles";

    public int ModuleId { get; set; } = -1;
    public int TabId { get; set; } = -1;
  }
}