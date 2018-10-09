using DotNetNuke.Services.Exceptions;
using DotNetNuke.Web.Razor;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using YeditUK.Modules.dnn_OpenNews.Base;
using YeditUK.Modules.dnn_OpenNews.Components;
using YeditUK.Modules.dnn_OpenNews.Components.Entities.Widgets.ListArticles;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;

namespace YeditUK.Modules.dnn_OpenNews.Widgets.ListArticles
{
  public partial class View : NewsArticleModuleBase
  {
    private WidgetSettings widgetSettings = new WidgetSettings();
    private Components.Entities.Settings moduleSettings;
    private void Page_Init(object sender, System.EventArgs e)
    {
      try
      {
        widgetSettings = SettingsHelper.LoadSettings(Constants.WidgetListArticlesSettingsKeyPrefix, this.Settings, widgetSettings);
        var moduleInfo = DotNetNuke.Entities.Modules.ModuleController.Instance.GetModule(widgetSettings.ModuleId, widgetSettings.TabId, false);
        moduleSettings = Components.SettingsController.Instance.GetSettings(moduleInfo, this.PortalSettings);
      }
      catch (Exception exc)
      {
        Exceptions.ProcessModuleLoadException(this, exc);
        // throw (exc);
        // Module failed to load

      }

    }

    protected override void OnPreRender(EventArgs e)
    {
      base.OnPreRender(e);
      try
      {
        string viewPath = "";
        viewPath = UrlHelper.GetViewPath(this.ModuleContext.Configuration.DesktopModule.FolderName,
           widgetSettings.Theme+ "/Widgets/ListArticles", widgetSettings.TemplateFile);

        if (!string.IsNullOrEmpty(viewPath))
        {
          var razorEngine = new RazorEngine(viewPath, this.ModuleContext, LocalResourceFile);
          var writer = new StringWriter();
          var vc = new ViewController(this.ModuleContext, this.moduleSettings, 0, widgetSettings.ModuleId, 
            widgetSettings.TabId, this.UserInfo);
          var statusPublished = new List<Components.Enums.ArticleStatus>();
          statusPublished.Add(Components.Enums.ArticleStatus.Live);
          Templates.ViewModels.ListArticlesViewModel vm = new ListArticlesViewModel();
          vm.Articles = vc.getArticles(widgetSettings.ModuleId, 0, widgetSettings.ArticlesPerPage, "", statusPublished,
            true, -1, null, null, DateTime.Now, widgetSettings.SortBy, (widgetSettings.SortDirection.ToLower() == "asc"));
          vm.TabId = widgetSettings.TabId;
          if (vm != null)
          {
            razorEngine.Render(writer, vm);
          }
          else
          {
            razorEngine.Render(writer);
          }
          Controls.Add(new LiteralControl(writer.ToString()));
        }
      }
      catch (Exception ex)
      {
        Exceptions.ProcessModuleLoadException(this, ex);
      }
    }
  }
}