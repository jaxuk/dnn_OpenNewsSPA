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

namespace YeditUK.Modules.dnn_OpenNews.Services
{
  //[SupportedModules("dnn_OpenNewsSPA")]
  [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Admin)]
  public class UserController : DnnApiController
  {
    public UserController() { }

    public class GetListDTO
    {
      public string inRole { get; set; }
    }
    
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetList(GetListDTO dto)
    {
      var userlist = DotNetNuke.Entities.Users.UserController.GetUsers(this.PortalSettings.PortalId).Cast<UserInfo>().ToList();
      if (!string.IsNullOrEmpty(dto.inRole)) {
        userlist = userlist.Where(u => u.IsInRole(dto.inRole)).ToList();
      }
      var usersVM = Mapper.Map<List<UserInfo>, List<UserViewModel>>(userlist);
      //var users = userlist.Cast<UserInfo>().ToList()
      //       .Select(user => new UserViewModel(user))
      //       .ToList();

      return Request.CreateResponse(usersVM);
    }
  }
}
