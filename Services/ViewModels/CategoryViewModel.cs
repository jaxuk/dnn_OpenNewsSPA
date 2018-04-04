using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Services.ViewModels
{
  public class CategoryViewModel
  {
    public CategoryViewModel() {
      CategoryID = -1;
      Name = "";
      Description = "";
      //SortOrder = -1;
      MetaTitle = "";
      MetaDescription = "";
      MetaKeywords = "";
      PageHeadText = "";
      ShortURL = "";
      URL = "";
      FileViewModel fv = new FileViewModel();
      Image = fv;
      Children = new List<CategoryViewModel>();
    }
    //public CategoryViewModel(Category c)
    //{
    //  CategoryID = c.CategoryID;
    //  Name = c.Name;
    //  if (c.Children != null) {
    //    Children = c.Children.Select(ch => Mapper.Map<Category, CategoryViewModel>(ch)).ToList();
    //  }
    //  Description = c.Description;
    //  //SortOrder = c.SortOrder;
    //  MetaTitle = c.MetaTitle;
    //  MetaDescription = c.MetaDescription;
    //  MetaKeywords = c.MetaKeywords;
    //  PageHeadText = c.PageHeadText;
    //  ShortURL = c.ShortURL;
    //  URL = c.URL;
    //  if (c.ImageFile != null) {
    //    Image = new FileViewModel(c.ImageFile);
    //  }
    //}

    public int CategoryID { get; set; }
    public string Name { get; set; } = string.Empty;
    public FileViewModel Image { get; set; }
    public List<CategoryViewModel> Children { get; set; }
    public string Description { get; set; } = string.Empty;
    //public int SortOrder { get; set; }
    public string MetaTitle { get; set; } = string.Empty;
    public string MetaDescription { get; set; } = string.Empty;
    public string MetaKeywords { get; set; } = string.Empty;
    public string PageHeadText { get; set; } = string.Empty;
    public string ShortURL { get; set; } = string.Empty;
    public string URL { get; set; }
  }
}