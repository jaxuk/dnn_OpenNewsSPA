using AutoMapper;
using DotNetNuke.UI.Modules;
using DotNetNuke.Web.Razor.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.DAL;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class DnnHelperExtensions
  {
    //public static List<CategoryViewModel> AllCategories(this DnnHelper helper) {
    //  List<CategoryViewModel> catsVM;
    //  var cats = CategoryRepo.Instance.GetTree(helper.Module.ModuleID).ToList();
    //  catsVM = Mapper.Map<List<Category>, List<CategoryViewModel>>(cats);
    //  return catsVM;
    //}
  }
}