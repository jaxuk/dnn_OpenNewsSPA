using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Tabs;
using DotNetNuke.Services.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using YeditUK.Modules.dnn_OpenNews.Base;
using YeditUK.Modules.dnn_OpenNews.Components;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Entities.Widgets.ListArticles;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;

namespace YeditUK.Modules.dnn_OpenNews.Widgets.ListArticles
{
  public partial class Settings : ModuleSettingsBase
  {
    protected WidgetSettings widgetSettings = new WidgetSettings();
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    public override void LoadSettings()
    {
      try
      {
        if (Page.IsPostBack == false)
        {
          widgetSettings = SettingsHelper.LoadSettings(Constants.WidgetListArticlesSettingsKeyPrefix, this.Settings, widgetSettings);
          var Mods = ModuleController.Instance.GetModulesByDefinition(PortalSettings.PortalId, "Open News").Cast<ModuleInfo>().ToList();
          this.ddModule.DataSource = Mods;
          this.ddModule.DataBind();
          if (Mods.Where(m => m.ModuleID == widgetSettings.ModuleId).FirstOrDefault() != null) {
            this.ddModule.SelectedValue = widgetSettings.ModuleId.ToString();
          }
          this.ddSortBy.SelectedValue = widgetSettings.SortBy;
          this.ddSortDirection.SelectedValue = widgetSettings.SortDirection;
          this.txtLimitArticlesToDisplay.Text = widgetSettings.ArticlesPerPage.ToString();

          string ThemesFolder = HttpContext.Current.Server.MapPath("/DesktopModules/" + this.ModuleConfiguration.DesktopModule.FolderName + "/Views/Templates/Razor");
          var ThemesDirs = System.IO.Directory.GetDirectories(ThemesFolder);
          var Themes = ThemesDirs.ToList().Select(d => new System.IO.DirectoryInfo(d).Name);
          this.ddTheme.DataSource = Themes;
          this.ddTheme.DataBind();
          populdateTemplateFiles();
        }
      }
      catch (Exception exc) //Module failed to load
      {
        Exceptions.ProcessModuleLoadException(this, exc);
      }
    }

    protected void populdateTemplateFiles() {
      var ThemeWidgetTemplatesFolder = HttpContext.Current.Server.MapPath("/DesktopModules/" + this.ModuleConfiguration.DesktopModule.FolderName + "/Views/Templates/Razor/" + this.ddTheme.SelectedValue + "/Widgets/ListArticles");
      var TemplateFiles = System.IO.Directory.GetFiles(ThemeWidgetTemplatesFolder);
      var Templates = TemplateFiles.ToList().Select(f => {
        var file = new System.IO.FileInfo(f);
        return file.Name;
      });
      this.ddTemplate.DataSource = Templates;
      this.ddTemplate.DataBind();
    }

    public override void UpdateSettings()
    {
      try
      {
        widgetSettings.ArticlesPerPage = int.Parse(txtLimitArticlesToDisplay.Text);
        widgetSettings.ModuleId = int.Parse(ddModule.SelectedValue);
        widgetSettings.TemplateFile = ddTemplate.SelectedValue;
        widgetSettings.SortBy = ddSortBy.SelectedValue;
        widgetSettings.SortDirection = ddSortDirection.SelectedValue;
        widgetSettings.Theme = ddTheme.SelectedValue;
        widgetSettings.TabId = ModuleController.Instance.GetTabModulesByModule(widgetSettings.ModuleId).FirstOrDefault().TabID;
        SettingsHelper.SaveSettings(Constants.WidgetListArticlesSettingsKeyPrefix, widgetSettings, this.Settings, this.ModuleConfiguration, this.PortalSettings, "Module");
        
      }
      catch (Exception exc)
      {
        Exceptions.ProcessModuleLoadException(this, exc);
      }
    }

    protected void ddTheme_SelectedIndexChanged(object sender, EventArgs e)
    {
      populdateTemplateFiles();
    }
  }
}