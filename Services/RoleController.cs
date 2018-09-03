using System.Linq;
using System.Net.Http;
using System.Collections.Generic;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;
using DotNetNuke.Web.Api;
using DotNetNuke.Security;
using DotNetNuke.Entities.Users;
using System.Web.Http;
using AutoMapper;
using DotNetNuke.Web.Api.Internal;
using DotNetNuke.Security.Roles;

namespace YeditUK.Modules.dnn_OpenNews.Services
{
  //[SupportedModules("dnn_OpenNewsSPA")]
  [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Admin)]
  public class RoleController : DnnApiController
  {
    public RoleController() { }

    public class GetListDTO
    {
    }
    
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetList(GetListDTO dto)
    {
      var rolelist = DotNetNuke.Security.Roles.RoleController.Instance.GetRoles(this.PortalSettings.PortalId).Cast<RoleInfo>().ToList();
      var stringList = rolelist.Select(r => r.RoleName).ToList();

      return Request.CreateResponse(stringList);
    }
  }
}
