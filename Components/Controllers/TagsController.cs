﻿using System;
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

  public class TagsController : DnnApiController
  {
    private readonly ITagRepo _repository;

    public TagsController(ITagRepo repository)
    {
      Requires.NotNull(repository);
      this._repository = repository;
    }

    public TagsController() : this(TagRepo.Instance) { }

    public HttpResponseMessage Get(int tagId)
    {
      var a = Mapper.Map<Tag, TagViewModel>(_repository.Get(tagId, ActiveModule.ModuleID));
      //var cat = new CategoryViewModel(_repository.Get(categoryId, ActiveModule.ModuleID));

      return Request.CreateResponse(a);
    }

    [AllowAnonymous]
    [HttpGet]
    public HttpResponseMessage GetList()
    {

      var tags = _repository.GetList(ActiveModule.ModuleID).ToList();

      var tagsVM = Mapper.Map<List<Tag>, List<TagViewModel>>(tags);

      return Request.CreateResponse(tagsVM);

    }
    public class AutoCompleteTagsDTO
    {
      public string startsWith { get; set; }
    }
    [AllowAnonymous]
    [HttpGet]
    public HttpResponseMessage AutoCompleteTags(AutoCompleteTagsDTO dto)
    {
      var tags = _repository.TagStartsWith(ActiveModule.ModuleID, dto.startsWith).ToList();

      var tagsVM = Mapper.Map<List<Tag>, List<TagViewModel>>(tags);

      return Request.CreateResponse(tagsVM);

    }

    [HttpPost]
    //[ValidateAntiForgeryToken]
    [AllowAnonymous]
    public HttpResponseMessage Upsert(TagViewModel t)
    {
      if (t.TagID <= 0)
      {
        var tag = Create(t);
        return Request.CreateResponse(Mapper.Map<Tag, TagViewModel>(tag));
      }
      else {
        return Request.CreateResponse(t);
      }
    }

    private Tag Create(TagViewModel item)
    {
      Tag t = Mapper.Map<TagViewModel, Tag>(item);
      _repository.Add(t);

      return t;
    }
  }
}