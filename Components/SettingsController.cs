using DotNetNuke.Common;
using DotNetNuke.Entities.Controllers;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Tabs;
using DotNetNuke.Framework;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Base;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;

namespace YeditUK.Modules.dnn_OpenNews.Components
{
  public class SettingsController : ServiceLocator<ISettingsController, SettingsController>, ISettingsController
  {
    const string MOD_SETTINGS_PREFIX = "opennews_setting:";
    ModuleInfo moduleInfo;
    PortalSettings portalSettings;
    //Hashtable hsettings;
    Settings s;

    protected override Func<ISettingsController> GetFactory()
    {
      return () => new SettingsController();
    }
    public Settings GetSettings(ModuleInfo moduleInfo, PortalSettings portalSettings)
    {
      Boolean isDebugMode = false;
      #if DEBUG
            isDebugMode = true;
      #endif
      this.moduleInfo = moduleInfo;
      this.portalSettings = portalSettings;
      s = new Settings
      {
        BasicAllowCoreSearchIntegration = GetSettingValue("BasicAllowCoreSearchIntegration", true),
        BasicArticlesPerPage = GetSettingValue("BasicArticlesPerPage", (int)10),
        BasicRenderingTemplate = GetSettingValue("BasicRenderingTemplate", "Default"),
        BasicServerTimeZone = GetSettingValue("BasicServerTimeZone", portalSettings.TimeZone.Id),
        BasicSortBy = GetSettingValue("BasicSortBy", "StartDate"),
        BasicSortDirection = GetSettingValue("BasicSortDirection", "DESC"),
        CategoryDefaultCategories = GetSettingValue("CategoryDefaultCategories", new int[]{}),
        CategoryIncludeInBreadcrumb = GetSettingValue("CategoryIncludeInBreadcrumb", false),
        CategoryRequireCategory = GetSettingValue("CategoryRequireCategory", false),
        FileDefaultFileFolder = GetSettingValue("FileDefaultFileFolder", portalSettings.HomeDirectory),
        FileAllowedTypes = GetSettingValue("FileAllowedTypes", "pdf,doc,docx,zip,rar,xls,xlsx".Split(',')),
        ImageDefaultImageFolder = GetSettingValue("ImageDefaultImageFolder", portalSettings.HomeDirectory),
        ImageAllowedTypes = GetSettingValue("ImageAllowedTypes", "jpg,jpeg,gif,png,svg".Split(',')),
        SEORemovePagePathFromURL = GetSettingValue("SEORemovePagePathFromURL", false),
        NotificationNotifyAuthorsOnApproval = GetSettingValue("NotificationNotifyAuthorsOnApproval", true),
        NotificationNotifyEditorsOnSubmission = GetSettingValue("NotificationNotifyEditorsOnSubmission", true),
        PermissionsEditorRoles = GetSettingValue("PermissionsEditorRoles", portalSettings.AdministratorRoleName),
        PermissionsAuthorRoles = GetSettingValue("PermissionsAuthorRoles", portalSettings.AdministratorRoleName),
        PermissionsAllowEditorsToSelfPublish = GetSettingValue("PermissionsAllowEditorsToSelfPublish", true),
        PermissionsOnlyShowEditorsAndAuthorsForAuthorSelection = GetSettingValue("PermissionsOnlyShowEditorsAndAuthorsForAuthorSelection", false),
        PageTabUrl = Globals.NavigateURL(moduleInfo.TabID, false),
        
        debugEnabled = isDebugMode

      };

      return s;
    }
    public void SaveSettings(Settings s, ModuleInfo moduleInfo, PortalSettings portalSettings) {
      Type type = s.GetType();
      PropertyInfo[] properties = type.GetProperties();

      foreach (PropertyInfo property in properties)
      {
        dynamic val = property.GetValue(s, null);
        string key = MOD_SETTINGS_PREFIX + property.Name;
        if ( val != null) {
          Type valType = val.GetType();
          if (valType.IsArrayOf<string>()) {
            //var ar = string.Join(",","".Split(','));
            val = string.Join(",", val);
          }
          if (!moduleInfo.TabModuleSettings.ContainsKey(key))
          {
            moduleInfo.TabModuleSettings.Add(key, val);
          }
          else
          {
            moduleInfo.TabModuleSettings[key] = val;
          }
          DotNetNuke.Entities.Modules.ModuleController.Instance.UpdateTabModuleSetting(moduleInfo.TabModuleID, key, val.ToString());
        }
        
      }
      
    }

    private dynamic GetSettingValue(string Key, dynamic SettingDefault) {
      if (!moduleInfo.TabModuleSettings.ContainsKey(MOD_SETTINGS_PREFIX + Key))
      {
        return SettingDefault;
      }
      else {
        object val = moduleInfo.TabModuleSettings[MOD_SETTINGS_PREFIX + Key];
        switch (SettingDefault)
        {
          case Boolean b:
            return bool.Parse(val.ToString());
          case int i:
            return int.Parse(val.ToString());
          case string[] strArray:
            return ((string)val).Split(',');
          case int[] intArray:
            return intArray;
            //var strList = ((string)val).Split(',').ToList();
            //var intList = new List<int>();
            //strList.ForEach(s => {
            //  int outint = -1;
            //  if (int.TryParse(s, out outint)) {
            //    intList.Add(outint);
            //  }
            //});
            //return intList.ToArray();
          default:
            return val.ToString();
        }
      }
    }
  }
}