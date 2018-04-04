
using DotNetNuke.Web.Api;
using System.Web.Http;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;

namespace YeditUK.Modules.dnn_OpenNews.Services
{

  /// <summary>
  /// The ServiceRouteMapper tells the DNN Web API Framework what routes this module uses
  /// </summary>
  public class ServiceRouteMapper : IServiceRouteMapper
  {
    /// <summary>
    /// RegisterRoutes is used to register the module's routes
    /// </summary>
    /// <param name="mapRouteManager"></param>
    public void RegisterRoutes(IMapRoute mapRouteManager)
    {
      //mapRouteManager.MapHttpRoute(
      //    moduleFolderName: "dnn_OpenNewsSPA",
      //    routeName: "default",
      //    url: "{controller}/{itemId}",
      //    defaults: new { itemId = RouteParameter.Optional },
      //    namespaces: new[] { "YeditUK.Modules.dnn_OpenNews.Services" });
      var route = mapRouteManager.MapHttpRoute("dnn_OpenNewsSPA", "default", "{controller}/{action}", new string[] { "YeditUK.Modules.dnn_OpenNews.Services" });
      AutoMapperConfig.ConfigureAutoMapper();
    }
  }

}