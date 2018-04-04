using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Portals;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Components
{
  public interface ISettingsController
  {
    Settings GetSettings(ModuleInfo moduleInfo, PortalSettings portalSettings);
    void SaveSettings(Settings s, ModuleInfo moduleInfo, PortalSettings portalSettings);
  }
}