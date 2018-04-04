using DotNetNuke.Services.Sitemap;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Services.Log.EventLog;
using DotNetNuke.Entities.Tabs;
using DotNetNuke.Entities.Modules;
using YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_UrlProvider.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_UrlProvider.Data;
using DotNetNuke.Common;

namespace YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_SiteMapProvider
{
  public class SiteMapProvider : SitemapProvider
  {
    public override List<SitemapUrl> GetUrls(int portalId, PortalSettings ps, string version)
    {
      var _eventLogController = new EventLogController();
      _eventLogController.AddLog("Message", "OpenNews SiteMap Provider being intialised", ps, -1, EventLogController.EventLogType.ADMIN_ALERT);
      List<SitemapUrl> results = new List<SitemapUrl>();
      var onMods = ModuleController.Instance.GetModulesByDefinition(PortalSettings.Current.PortalId, "dnn_OpenNewsSPA").Cast<ModuleInfo>().ToList();
      onMods.ToList().ForEach(m => {
        var urlOptions = new ModuleUrlOptions();
        UrlDataController.GetEverythingForProvider(m.TabID).ForEach(u => {
          string url = Globals.NavigateURL(m.TabID, ps, "", u.qsValue);
          var pageUrl = new SitemapUrl
          {
            Url = url,
            Priority = (float)0.5,
            LastModified = u.urlDate,
            ChangeFrequency = SitemapChangeFrequency.Daily
          };
          results.Add(pageUrl);
        });
      });
      return results;
    }
  }
}