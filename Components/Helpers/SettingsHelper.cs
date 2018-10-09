using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Portals;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class SettingsHelper
  {
    public static dynamic LoadSettings(string keyPrefix, Hashtable settingHash, dynamic settings) {
      foreach (PropertyInfo prop in settings.GetType().GetProperties())
      {
        prop.SetValue(settings, GetSettingValue(keyPrefix, prop.Name, settingHash, prop.GetValue(settings)));
      }
      return settings;
    }
    public static void SaveSettings(string keyPrefix, dynamic settings, Hashtable settingHash, ModuleInfo moduleInfo, PortalSettings portalSettings, string typeOfSettingsToUpdate = "TabModule")
    {
      Type type = settings.GetType();
      PropertyInfo[] properties = type.GetProperties();

      foreach (PropertyInfo property in properties)
      {
        dynamic val = property.GetValue(settings, null);
        string key = keyPrefix + property.Name;
        if (val != null)
        {
          Type valType = val.GetType();
          if (valType.IsArrayOf<string>())
          {
            //var ar = string.Join(",","".Split(','));
            val = string.Join(",", val);
          }
          if (!settingHash.ContainsKey(key))
          {
            settingHash.Add(key, val);
          }
          else
          {
            settingHash[key] = val;
          }
          if (typeOfSettingsToUpdate == "TabModule") {
            DotNetNuke.Entities.Modules.ModuleController.Instance.UpdateTabModuleSetting(moduleInfo.TabModuleID, key, val.ToString());
          }
          if (typeOfSettingsToUpdate == "Module")
          {
            DotNetNuke.Entities.Modules.ModuleController.Instance.UpdateModuleSetting(moduleInfo.ModuleID, key, val.ToString());
          }
        }

      }

    }
    public static dynamic GetSettingValue(string keyPrefix, string Key, Hashtable settings, dynamic SettingDefault)
    {
      if (!settings.ContainsKey(keyPrefix + Key))
      {
        return SettingDefault;
      }
      else
      {
        object val = settings[keyPrefix + Key];
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
          default:
            return val.ToString();
        }
      }
    }
  }
}