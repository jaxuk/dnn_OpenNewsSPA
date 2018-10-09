using DotNetNuke.Entities.Modules;
using DotNetNuke.Services.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Base
{
  public class WidgetListArticlesSettings
  {
    public int ArticlesPerPage { get; set; } = 10;
    public string SortBy { get; set; } = "StartDate";
    public string SortDirection { get; set; } = "DESC";
    public string Theme { get; set; } = "Default";
    public string TemplateFile { get; set; } = "ListArticles.cshtml";

    public int ModuleId { get; set; } = -1;

    //public void PopulateSettings() {
    //  ArticlesPerPage = GetSettingValue("ArticlesPerPage", ArticlesPerPage);
    //  RenderingTemplate = GetSettingValue("RenderingTemplate", RenderingTemplate);
    //  SortBy = GetSettingValue("SortBy", SortBy);
    //  SortDirection = GetSettingValue("SortDirection", SortDirection);
    //  Theme = GetSettingValue("Theme", Theme);
    //  TemplateFile = GetSettingValue("TemplateFile", TemplateFile);
    //  ModuleIdOfArticlesToList = GetSettingValue("ModuleIdOfArticlesToList", ModuleIdOfArticlesToList);
    //}
    
    //private dynamic GetSettingValue(string Key, dynamic SettingDefault)
    //{
    //  if (!Settings.ContainsKey(MOD_SETTINGS_PREFIX + Key))
    //  {
    //    return SettingDefault;
    //  }
    //  else
    //  {
    //    object val = Settings[MOD_SETTINGS_PREFIX + Key];
    //    switch (SettingDefault)
    //    {
    //      case Boolean b:
    //        return bool.Parse(val.ToString());
    //      case int i:
    //        return int.Parse(val.ToString());
    //      case string[] strArray:
    //        return ((string)val).Split(',');
    //      case int[] intArray:
    //        return intArray;
    //      default:
    //        return val.ToString();
    //    }
    //  }
    //}
  }
}