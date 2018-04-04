using System;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using YeditUK.Modules.dnn_OpenNews.Components;
using YeditUK.Modules.dnn_OpenNews.Components.DAL;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;
using DotNetNuke.Common;
using DotNetNuke.Web.Api;
using DotNetNuke.Security;
using System.Threading;
using DotNetNuke.UI.Modules;
using DotNetNuke.Common.Utilities;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using AutoMapper;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;

namespace YeditUK.Modules.dnn_OpenNews.Components.Controllers
{
  //[SupportedModules("dnn_OpenNews")]
  //[DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]

  public class CategoriesController : DnnApiController
  {
    private readonly ICategoryRepo _repository;

    public CategoriesController(ICategoryRepo repository)
    {
      Requires.NotNull(repository);
      this._repository = repository;
    }

    public CategoriesController() : this(CategoryRepo.Instance) { }

    public class DeleteDTO {
      public int categoryId { get; set; }
    }
    [HttpPost]
    //[ValidateAntiForgeryToken]
    [AllowAnonymous]
    public HttpResponseMessage Delete(DeleteDTO dto)
    {
      var cat = _repository.Get(dto.categoryId, ActiveModule.ModuleID);

      _repository.Delete(cat);

      return Request.CreateResponse(System.Net.HttpStatusCode.NoContent);
    }

    public HttpResponseMessage Get(int categoryId)
    {
      var cat = Mapper.Map<Category, CategoryViewModel>(_repository.Get(categoryId, ActiveModule.ModuleID));
      //var cat = new CategoryViewModel(_repository.Get(categoryId, ActiveModule.ModuleID));

      return Request.CreateResponse(cat);
    }

    private List<CategoryViewModel> getMockCats() {
      List<CategoryViewModel> items = new List<CategoryViewModel>();

      CategoryViewModel cat1 = new CategoryViewModel();
      cat1.CategoryID = 1;
      cat1.Name = "First";
      cat1.Description = "Desc";

      items.Add(cat1);

      CategoryViewModel cat2 = new CategoryViewModel();
      cat2.CategoryID = 2;
      cat2.Name = "Second";
      cat2.Description = "Desc";

      items.Add(cat2);

      CategoryViewModel cat3 = new CategoryViewModel();
      cat3.CategoryID = 3;
      cat3.Name = "Third";
      cat3.Description = "Desc";

      CategoryViewModel cat4 = new CategoryViewModel();
      cat4.CategoryID = 4;
      cat4.Name = "First Child";
      cat4.Description = "Desc";

      CategoryViewModel cat5 = new CategoryViewModel();
      cat5.CategoryID = 5;
      cat5.Name = "Second Child";
      cat5.Description = "Desc";

      cat3.Children.Add(cat4);
      cat3.Children.Add(cat5);

      items.Add(cat3);
      return items;
    }
    [AllowAnonymous]
    [HttpGet]
    public HttpResponseMessage GetCategory(int categoryID)
    {
      return Request.CreateResponse(getMockCats().Where(c=>c.CategoryID== categoryID).FirstOrDefault());
    }

    [AllowAnonymous]
    [HttpGet]
    public HttpResponseMessage GetTree()
    {
      List<Category> cats;
      List<CategoryViewModel> catsVM;

      cats = _repository.GetTree(ActiveModule.ModuleID).ToList();

      catsVM = Mapper.Map<List<Category>, List<CategoryViewModel>>(cats);

      return Request.CreateResponse(catsVM);

    }

    [AllowAnonymous]
    [HttpGet]
    public HttpResponseMessage GetList()
    {
      List<Category> cats;
      List<CategoryViewModel> catsVM;
      cats = _repository.GetTree(ActiveModule.ModuleID).OrderByDescending(c=>c.SortOrder).ToList();
      catsVM = Mapper.Map<List<Category>, List<CategoryViewModel>>(cats.ToList());

      catsVM = catsVM.Flatten(c=> {
        c.Children.ForEach(ch => {
          ch.Name = c.Name + " > " + ch.Name;
        });
        return c.Children;
      }).ToList();

      catsVM.ForEach(c => { c.Children = null; });
      //catsVM = Mapper.Map<List<Category>, List<CategoryViewModel>>(cats.ToList());

      return Request.CreateResponse(catsVM);

    }

    private List<Category> SetOrderAndParent(List<Category> list, Category parentCategory)
    {
      var i = 1;
      list.ForEach(c => {
        if (parentCategory == null)
        {
          c.ParentID = 0;
        }
        else
        {
          c.ParentID = parentCategory.CategoryID;
        }
        if (c.Children != null)
        {
          c.Children = SetOrderAndParent(c.Children, c);
        }
        c.SortOrder = i;
        i += 1;
      });
      return list;
    }

   

    [HttpPost]
    //[ValidateAntiForgeryToken]
    [AllowAnonymous]
    public HttpResponseMessage UpdateCategoryTree(List<CategoryViewModel> catVMs)
    {
      var cats = Mapper.Map<List<CategoryViewModel>, List<Category>>(catVMs);
      cats = SetOrderAndParent(cats, null);
      cats = cats.Flatten(c => c.Children).ToList();
      _repository.UpdateCategoryTree(cats, ActiveModule.ModuleID);
      return Request.CreateResponse(System.Net.HttpStatusCode.NoContent);
    }

    [HttpPost]
    //[ValidateAntiForgeryToken]
    [AllowAnonymous]
    public HttpResponseMessage Upsert(CategoryViewModel cat)
    {
      if (cat.CategoryID > 0)
      {
        var t = Update(cat);
        return Request.CreateResponse(Mapper.Map<Category, CategoryViewModel>(t));
      }
      else
      {
        var t = Create(cat);
        return Request.CreateResponse(Mapper.Map<Category, CategoryViewModel>(t));
      }
    }

    private Category Create(CategoryViewModel item)
    {
      Category t = new Category
      {
        ModuleId = ActiveModule.ModuleID,
        CategoryID = item.CategoryID,
        Name = item.Name,
        Description = item.Description,
        //SortOrder = item.SortOrder,
        MetaTitle = item.MetaTitle,
        MetaDescription = item.MetaDescription,
        MetaKeywords = item.MetaKeywords,
        PageHeadText = item.PageHeadText,
        ShortURL = "",
        URL = item.URL,
        ImageFileID = item.Image.FileId
      };
      _repository.Add(t);

      return t;
    }

    private Category Update(CategoryViewModel item)
    {

      var t = _repository.Get(item.CategoryID, ActiveModule.ModuleID);
      if (t != null)
      {
        t.CategoryID = item.CategoryID;
        t.Name = item.Name;
        t.Description = item.Description;
        //t.SortOrder = item.SortOrder;
        t.MetaTitle = item.MetaTitle;
        t.MetaDescription = item.MetaDescription;
        t.MetaKeywords = item.MetaKeywords;
        t.PageHeadText = item.PageHeadText;
        //ShortURL = item.ShortURL,
        t.URL = item.URL;
        if (item.Image != null) {
          t.ImageFileID = item.Image.FileId;
        }
      }
      _repository.Update(t);

      return t;
    }
  }
}
