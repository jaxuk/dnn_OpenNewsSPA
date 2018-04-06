using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Services.ViewModels
{
  public class TagViewModel
  {
    public TagViewModel() { }

    public int TagID { get; set; }
    public string name { get; set; }
    public int ModuleId { get; set; }
  }
}