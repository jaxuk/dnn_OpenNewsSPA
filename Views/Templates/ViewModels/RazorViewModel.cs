using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Views.Templates.ViewModels
{
  public class RazorViewModel
  {
    public RazorViewModel(YeditUK.Modules.dnn_OpenNews.Components.ViewController viewController)
    {
      this.viewController = viewController;
    }
    public YeditUK.Modules.dnn_OpenNews.Components.ViewController viewController { get; set; }
  }
}