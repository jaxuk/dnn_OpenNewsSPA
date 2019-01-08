using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using YeditUK.Modules.dnn_OpenNews.Base;
using DotNetNuke.Services.Exceptions;
using YeditUK.Modules.dnn_OpenNews.Components;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;
using YeditUK.Modules.dnn_OpenNews.Templates.ViewModels;
using DotNetNuke.Web.Razor;
using System.IO;
using AutoMapper;
using YeditUK.Modules.dnn_OpenNews.Components.DAL;
using DotNetNuke.Collections;
using DotNetNuke.Framework;
using System.Text.RegularExpressions;

namespace YeditUK.Modules.dnn_OpenNews
{
  public partial class View : NewsArticleModuleBase
  {
    private ViewType _viewType;
    private AdminViewType _adminViewType;
    private Components.Entities.Settings _settings;
    private int _pageIndex = 0;
    private bool isView = false;
    private bool isAdminView = false;
    private string qsRazorView = "";
    private bool viewOnly = false;
    private void Page_Init(object sender, System.EventArgs e)
    {
      try
      {
        ServicesFramework.Instance.RequestAjaxAntiForgerySupport();
        ServicesFramework.Instance.RequestAjaxScriptSupport();
        var moduleInfo = DotNetNuke.Entities.Modules.ModuleController.Instance.GetModule(this.ModuleId, this.TabId, false);
        _settings = Components.SettingsController.Instance.GetSettings(moduleInfo, this.PortalSettings);

        int.TryParse(Request.QueryString["CurrentPage"], out _pageIndex);
        if (_pageIndex > 0)
        {
          _pageIndex -= 1;
        }

        string qsArticleType, qsAdminType = "";
        qsArticleType = Request.QueryString["articleType"];
        qsAdminType = Request.QueryString["adminType"];
        qsRazorView = Request.QueryString["RazorView"];
        if (Request.QueryString["vo"] == "1") {
          viewOnly = true;
        }
        isView = Enum.TryParse<ViewType>(qsArticleType, out _viewType);
        isAdminView = Enum.TryParse<AdminViewType>(qsAdminType, out _adminViewType);
        if ((!isView && !isAdminView) || (isView && isAdminView))
        {
          isView = true;
          _viewType = ViewType.viewcurrent;
        }
      }
      catch (Exception exc)
      {
        Exceptions.ProcessModuleLoadException(this, exc);
        throw (exc);
        // Module failed to load
        
      }

    }

    protected override void OnPreRender(EventArgs e)
    {
      base.OnPreRender(e);
      try
      {
        if (isView)
        {
          //var razorEngine = new RazorEngine(RazorScriptFile, ModuleContext, LocalResourceFile);
          string viewPath = "";

          if (_viewType == ViewType.razorview && !string.IsNullOrEmpty(qsRazorView))
          {
            viewPath = UrlHelper.GetViewPath(this.ModuleContext.Configuration.DesktopModule.FolderName,
            _settings.BasicRenderingTemplate, qsRazorView);
          }
          else {
            viewPath = UrlHelper.GetViewPath(this.ModuleContext.Configuration.DesktopModule.FolderName,
            _settings.BasicRenderingTemplate, _viewType.ToString());
          }

          if (!string.IsNullOrEmpty(viewPath))
          {
            var razorEngine = new RazorEngine(viewPath, this.ModuleContext, LocalResourceFile);
            var writer = new StringWriter();
            dynamic vm = null;
            var vc = new ViewController(this.ModuleContext, this._settings, this._pageIndex, this.ModuleId, this.TabId, this.UserInfo);
            switch (_viewType)
            {
              case ViewType.viewcurrent:
                vm = vc.getViewCurrentModel();
                break;
              case ViewType.articleview:
                vm = vc.getArticleViewModel();
                break;
              case ViewType.categoryview:
                vm = vc.getCategoryViewModel();
                break;
              case ViewType.archiveview:
                vm = vc.getArchiveViewModel();
                break;
              case ViewType.tagview:
                vm = vc.getTagViewModel();
                break;
              case ViewType.razorview:
                vm = vc.getRazorViewModel();
                break;
              default:
                break;
            }
            if (vm != null)
            {
              razorEngine.Render(writer, vm);
            }
            else
            {
              razorEngine.Render(writer);
            }
            if (viewOnly)
            {
              string responseString = writer.ToString();
              responseString = Regex.Replace(responseString, @"^\s*$[\r\n]*", string.Empty, RegexOptions.Multiline).Trim();
              HttpContext.Current.Response.Clear();
              HttpContext.Current.Response.ContentType = "text/xml";
              HttpContext.Current.Response.Write(responseString);
              HttpContext.Current.Response.Flush();
              HttpContext.Current.Response.Close();
              HttpContext.Current.Response.Clear();
              HttpContext.Current.Response.End();
            }
            else {
              Controls.Add(new LiteralControl(writer.ToString()));
            }
          }
        }
      }
      catch (Exception ex)
      {
        Exceptions.ProcessModuleLoadException(this, ex);
      }
    }

    
  }
}