using DotNetNuke.Collections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;
using DotNetNuke.Entities.Users;
using DotNetNuke.Web.Razor.Helpers;

namespace YeditUK.Modules.dnn_OpenNews.Templates.ViewModels
{
  public class MenuViewModel
  {
    public DnnHelper Dnn { get; set; }
    public Dictionary<string, string> menuItems { get; set; } = new Dictionary<string, string>();
  }
}