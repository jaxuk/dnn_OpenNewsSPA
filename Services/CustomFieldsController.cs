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
using DotNetNuke.Web.Api.Internal;

namespace YeditUK.Modules.dnn_OpenNews.Services
{
  //[SupportedModules("dnn_OpenNews")]
  [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Admin)]

  public class CustomFieldsController : DnnApiController
  {
    private readonly ICustomDefRepo _repository;

    public CustomFieldsController(ICustomDefRepo repository)
    {
      Requires.NotNull(repository);
      this._repository = repository;
    }

    public CustomFieldsController() : this(CustomDefRepo.Instance) { }

    //public HttpResponseMessage Get()
    //{
    //  //var a = Mapper.Map<Tag, TagViewModel>(_repository.Get(tagId, ActiveModule.ModuleID));

    //  return Request.CreateResponse(a);
    //}

    
    [HttpGet]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetList()
    {
      string jsonPathBase = "/DesktopModules/{0}/data/custom-fields-{1}.json";
      
      string jsonPath = string.Format(jsonPathBase,
        ActiveModule.DesktopModule.FolderName, ActiveModule.ModuleID.ToString()
        );
      jsonPath = System.Web.Hosting.HostingEnvironment.MapPath(jsonPath);
      if (System.IO.File.Exists(jsonPath))
      {
        var jsonString = System.IO.File.ReadAllText(jsonPath);
        return Request.CreateResponse(Newtonsoft.Json.JsonConvert.DeserializeObject(jsonString));
      }
      else {
        string[] emptyArray = new string[] { };
        return Request.CreateResponse(emptyArray);
      }
    }
    

//    [HttpPost]
//#if DEBUG
//    [AllowAnonymous]
//#else
//    [ValidateAntiForgeryToken]
//#endif
//    public HttpResponseMessage Upsert(TagViewModel t)
//    {
//      if (t.TagID <= 0)
//      {
//        var tag = Create(t);
//        return Request.CreateResponse(Mapper.Map<Tag, TagViewModel>(tag));
//      }
//      else {
//        return Request.CreateResponse(t);
//      }
//    }

//    private Tag Create(TagViewModel item)
//    {
//      Tag t = Mapper.Map<TagViewModel, Tag>(item);
//      _repository.Add(t);

//      return t;
//    }
  }
}
