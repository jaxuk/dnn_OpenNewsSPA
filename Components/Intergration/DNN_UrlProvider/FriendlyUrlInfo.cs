using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_UrlProvider
{
  public class FriendlyUrlInfo
  {
    public int itemId;
    public int parentId;
    public string itemType;
    public string urlFragment;
    public DateTime urlDate;
    public int urlNum;
    public string qsValue;
    internal string FUrlPrefix
    {
      get
      {
        string prefix = "";
        switch (itemType.ToLower())
        {
          case "article":
            prefix = "a";
            break;
          case "author":
            prefix = "u";
            break;
          case "page":
            prefix = "p";
            break;
          case "category":
            prefix = "c";
            break;
            //case "archive":
            //  prefix = "t";
            //break;

        }
        return prefix;
      }
    }
    internal string FUrlKey
    {
      get
      {
        string prefix = this.FUrlPrefix;
        return prefix + itemId.ToString();
      }
    }
  }
}