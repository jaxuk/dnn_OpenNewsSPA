﻿using AutoMapper;

using DotNetNuke.Entities.Host;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using DotNetNuke.Services.FileSystem;
using DotNetNuke.UI.Modules;
using DotNetNuke.Web.Razor;
using HtmlAgilityPack;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class TemplateHelper
  {

    public static void InlineArticleImages(ref ArticleViewModel a, System.Web.WebPages.WebPageBase wpb)
    {
      
      string rxTagsPattern = @"\[IMAGE:(?<imageId>\d+)\]";
      Regex rxTags = new Regex(rxTagsPattern, RegexOptions.IgnoreCase | RegexOptions.Multiline | RegexOptions.ExplicitCapture);
      foreach (Match m in rxTags.Matches(a.Body))
      {
        long imgId = -1;
        string imgHtml = "";
        if (long.TryParse(m.Groups["imageId"].Value, out imgId))
        {
          var img = a.Images.Where(i=>i.FileId == imgId).FirstOrDefault();
          if(img!=null)
            imgHtml = wpb.RenderPage("_" + ViewType.inlineimage.ToString() + ".cshtml", img).ToHtmlString();
        }
        a.Body = Regex.Replace(a.Body, "\\[IMAGE:" + imgId.ToString() + "\\]", imgHtml);
      }
    }
  }
}