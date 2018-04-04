using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.HtmlControls;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class TaggingHelper
  {
    public static void SetOgpTag(string key, string value, System.Web.UI.Page p)
    {
      HtmlMeta ogpMeta = new HtmlMeta();
      ogpMeta.Attributes.Add("property", key);
      ogpMeta.Attributes.Add("content", value);
      p.Header.Controls.Add(ogpMeta);
    }
    public static void SetTwitterTag(string key, string value, System.Web.UI.Page p)
    {
      HtmlMeta ogpMeta = new HtmlMeta();
      ogpMeta.Attributes.Add("name", key);
      ogpMeta.Attributes.Add("content", value);
      p.Header.Controls.Add(ogpMeta);
    }
  }
}