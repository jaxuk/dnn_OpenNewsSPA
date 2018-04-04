using DotNetNuke.Entities.Urls;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_UrlProvider
{
  public class UrlProviderInfo : ExtensionUrlProviderInfo
  {
    internal string _ignoreRedirectRegex;
    internal UrlProviderInfo()
    {
      if (this.Settings != null && this.Settings.ContainsKey("ignoreRedirectRegex"))
        _ignoreRedirectRegex = this.Settings["ignoreRedirectRegex"];
    }
  }
}