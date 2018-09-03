using AutoMapper;

using DotNetNuke.Entities.Host;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using DotNetNuke.Services.FileSystem;
using DotNetNuke.Web.Razor;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class CommonHelper
  {
    public static int GetCrv() {
      var hostSettings = DotNetNuke.Entities.Controllers.HostController.Instance.GetSettingsDictionary();
      int cdv = -1;
      if (hostSettings.ContainsKey("CrmVersion"))
      {
        int.TryParse(hostSettings["CrmVersion"].ToString(), out cdv);
      }
      return cdv;
    }
    public static List<FileViewModel> JoinArrays(List<FileViewModel> a1, List<FileViewModel> a2) {
      var ary = new List<FileViewModel>();
      ary.AddRange(a1);
      ary.AddRange(a2);
      return ary;
    }
    public static string getSummaryFromBody(string body, int length) {
      if (body.Length < length)
      {
        return body;
      }
      else {
        return body.Substring(0, length);
      }
    }
    public static string getUsersDisplayName(int userID) {
      var portalid = PortalController.Instance.GetCurrentPortalSettings().PortalId;
      var user = UserController.Instance.GetUserById(portalid, userID);
      if (user != null)
      {
        return user.DisplayName;
      }
      else {
        return "";
      }
    }
    
    public static bool FileIsImage(IFileInfo fi) {
      return fi.ContentType.ToLower().StartsWith("image/");
    }
    public static bool FileIsImage(FileInfo fi)
    {
      return fi.ContentType.ToLower().StartsWith("image/");
    }

    public static bool UserHasEditorPerms(UserInfo user, Settings settings, PortalSettings portalSettings)
    {
      if (user.IsInRole(settings.PermissionsEditorRoles) || user.IsInRole(portalSettings.AdministratorRoleName) || user.IsSuperUser)
      {
        return true;
      }
      return false;
    }

    public static bool UserHasAuthorPerms(UserInfo user, Settings settings, PortalSettings portalSettings)
    {
      if (UserHasEditorPerms(user, settings, portalSettings)) {
        return true;
      }
      if (user.IsInRole(settings.PermissionsAuthorRoles))
      {
        return true;
      }
      return false;
    }

    public static bool UserCanApprove(UserInfo user, ArticleViewModel article, Settings settings) {
      bool approverRole = false;
      if (user.IsInRole(settings.PermissionsEditorRoles) || user.IsInRole("Administrators") || user.IsSuperUser)
      {
        approverRole = true;
      }
      if ((settings.PermissionsAllowEditorsToSelfPublish && approverRole) ||
        approverRole && article.AuthorID != user.UserID) {
        return true;
      }
      return false;
    }

    public static bool UserCanEditArticle(UserInfo user, ArticleViewModel article, Settings settings) {
      if (user.IsInRole(settings.PermissionsEditorRoles) || user.IsInRole("Administrators") || user.IsSuperUser) {
        return true;
      }
      if ((article.Status == ArticleStatus.Draft.ToString() || article.Status == ArticleStatus.NeedsApproval.ToString())
        && article.AuthorID == user.UserID && user.IsInRole(settings.PermissionsAuthorRoles)) {
        return true;
      }
      return false;
    }

    public static bool UserCanViewAdmin(UserInfo user, Settings settings) {
      if (user.IsInRole("Administrators") || user.IsSuperUser || 
        user.IsInRole(settings.PermissionsEditorRoles) || user.IsInRole(settings.PermissionsAuthorRoles))
      {
        return true;
      }
      return false;
    }

    public static string ConvertToMarkDown(string data, bool allowiframe = false)
    {
      if (string.IsNullOrEmpty(data)) return string.Empty;

      Regex VimeoVideoRegex = new Regex(@".*vimeo\.com\/video\/?([0-9]+)");
      Regex YoutubeVideoRegex = new Regex(@".*youtu(?:\.be|be\.com)\/embed\/?(.*)");
      Regex HyperlinkRegex = new Regex("http(s)?://([\\w+?\\.\\w+])+([a-zA-Z0-9\\~\\!\\@\\#\\$\\%\\^\\&amp;\\*\\(\\)_\\-\\=\\+\\\\\\/\\?\\.\\:\\;\\'\\,]*)?");
      var document = new HtmlDocument();
      document.LoadHtml(data);
      if (document.DocumentNode.Descendants().All(n => n.NodeType == HtmlNodeType.Text))
      {
        string[] stringSeparators = new string[] { "\r\n" };
        string[] lines = data.Split(stringSeparators, StringSplitOptions.None);
        bool lastStartsWithTab = false;
        lines = lines.ToList().Select(l => {
          if (l.StartsWith("\t") || l.StartsWith("    "))
          {
            lastStartsWithTab = true;
            l = l.Replace("\t", "- ").Replace("    ", "- ");
          }
          else if (lastStartsWithTab)
          {
            l = "\r\n" + l;
            lastStartsWithTab = false;
          }
          else
          {
            l = "\r\n" + l;
            lastStartsWithTab = false;
          }
          return l;
        }).ToArray();
        return string.Join(" \r\n", lines);
        //return data.Replace("\r\n\t", "\r\n- ").Replace("\r\n"," \r\n");
        //return data;
      }
      else
      {
        document.DocumentNode.Descendants()
        .Where(n => n.Name == "script" || n.Name == "style")
        .ToList()
        .ForEach(n => n.Remove());

        var acceptableTags = new String[] { "strong", "em", "u", "b", "h1", "h2", "h3", "h4", "h5", "p", "i", "ul", "ol", "li", "hr", "table", "tr", "th", "td", "br" };
        var acceptableTagslst = acceptableTags.ToList();
        if (allowiframe)
        {
          acceptableTagslst.Add("iframe");
        }

        var nodes = new Queue<HtmlNode>(document.DocumentNode.SelectNodes("./*|./text()"));
        while (nodes.Count > 0)
        {
          var node = nodes.Dequeue();
          var parentNode = node.ParentNode;

          if (!acceptableTagslst.ToArray().Contains(node.Name) && node.Name != "#text")
          {
            var childNodes = node.SelectNodes("./*|./text()");

            if (childNodes != null)
            {
              foreach (var child in childNodes)
              {
                nodes.Enqueue(child);
                parentNode.InsertBefore(child, node);
              }
            }

            parentNode.RemoveChild(node);

          }
          if (node.Name == "iframe" && allowiframe)
          {
            var isrc = node.Attributes.Where(at => at.Name == "src").FirstOrDefault();
            if (isrc != null)
            {
              var newchild = document.CreateElement("p");
              var iframeSrc = isrc.Value;
              MatchCollection HyperLinkmatches = HyperlinkRegex.Matches(iframeSrc);
              foreach (Match match in HyperLinkmatches)
              {

                Match youtubeMatch = YoutubeVideoRegex.Match(match.Value);
                Match vimeoMatch = VimeoVideoRegex.Match(match.Value);
                if (youtubeMatch.Success)
                {
                  var id = youtubeMatch.Groups[1].Value;
                  iframeSrc = "https://www.youtube.com/watch?v=" + id;
                }
                else if (vimeoMatch.Success)
                {
                  var id = vimeoMatch.Groups[1].Value;
                  iframeSrc = "https://vimeo.com/" + id;
                }
                else
                {
                  iframeSrc = match.Value;
                }

              }
              newchild.InnerHtml = "![Video](" + iframeSrc + ")";
              //nodes.Enqueue(child);
              parentNode.InsertBefore(newchild, node);
              parentNode.RemoveChild(node);
            }
          }
        }

        var converter = new ReverseMarkdown.Converter();
        return converter.Convert(document.DocumentNode.InnerHtml).Trim();
      }

    }
  }
}