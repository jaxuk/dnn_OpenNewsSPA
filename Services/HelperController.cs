using System.Linq;
using System.Net.Http;
using System.Collections.Generic;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;
using DotNetNuke.Web.Api;
using DotNetNuke.Security;
using DotNetNuke.Entities.Users;
using System.Web.Http;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;
using DotNetNuke.Data;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Intergration;
using Markdig;
using System;
using DotNetNuke.Services.FileSystem;
using System.Web;
using System.Web.WebPages;
using System.Text.RegularExpressions;
using DotNetNuke.Entities.Modules;
using System.Dynamic;
using DotNetNuke.Web.Api.Internal;

namespace YeditUK.Modules.dnn_OpenNews.Services
{
  //[SupportedModules("dnn_OpenNewsSPA")]
  [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Admin)]
  public class HelperController : DnnApiController
  {
    public HelperController() { }

    public class CleanUrlDTO {
      public string url { get; set; }
    }
    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage CleanUrl(CleanUrlDTO dto)
    {
      return Request.CreateResponse(UrlHelper.cleanUrl(dto.url, PortalSettings.PortalId));
    }

    
    private string stringNotNull(string s) {
      return (s == null ? "" : s);
    }

    private void SetCustomFieldDataType(ref CustomDefField cdf, dynamic cf)
    {
      string defaultVal = cf.DefaultValue;
      if (string.IsNullOrEmpty(defaultVal)) {
        return;
      }
      bool boolVal = false;
      if (bool.TryParse(defaultVal, out boolVal)) {
        cdf.dataType = "bool";
        cdf.defaultValue = boolVal;
      }
      int intVal = -1;
      if (int.TryParse(defaultVal, out intVal))
      {
        cdf.dataType = "int";
        cdf.defaultValue = intVal;
      }
    }
    private void SetCustomFieldOptionsAndDefaults(ref CustomDefField cdf, dynamic cf)
    {
      string defaultVal = cf.DefaultValue;
      string options = cf.FieldElements;
      if (string.IsNullOrEmpty(defaultVal) && string.IsNullOrEmpty(options))
      {
        return;
      }
      switch (cdf.dataType) {
        case "bool":
          bool boolVal = false;
          if (bool.TryParse(defaultVal, out boolVal))
          {
            cdf.defaultValue = boolVal;
          }
          if (options.Contains("|")) {
            List<bool> lbool = new List<bool>();
            options.Split('|').ToList().ForEach(o => {
              bool oboolVal = false;
              if (bool.TryParse(o, out oboolVal))
              {
                lbool.Add(oboolVal);
              }
            });
            cdf.options = lbool.ToArray();
          }
          break;
        case "int":
          int intVal = -1;
          if (int.TryParse(defaultVal, out intVal))
          {
            cdf.defaultValue = intVal;
          }
          if (options.Contains("|"))
          {
            List<int> lint = new List<int>();
            options.Split('|').ToList().ForEach(o => {
              int ointVal = -1;
              if (int.TryParse(o, out ointVal))
              {
                lint.Add(ointVal);
              }
            });
            cdf.options = lint.ToArray();
          }
          break;
        default:
          //must be a string
          cdf.defaultValue = defaultVal;
          if (options.Contains("|"))
          {
            List<string> lstr = new List<string>();
            options.Split('|').ToList().ForEach(o => {
              lstr.Add(o);
            });
            cdf.options = lstr.ToArray();
          }
          break;
      }
    }

    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetNAModules() {
      var naMods = ModuleController.Instance.GetModulesByDefinition(PortalSettings.PortalId, "DnnForge - NewsArticles").Cast<ModuleInfo>().ToList();
      //KeyValuePair<int, string> ret = new KeyValuePair<int, string>();
      var ret = new List<KeyValuePair<int, string>>();
      naMods.ForEach(na => {
        var kvp = new KeyValuePair<int, string>(na.ModuleID, na.ModuleTitle);
        ret.Add(kvp);
      });
      
      return Request.CreateResponse(ret);
    }

    public class ImportFromNAModuleDTO
    {
      public int naModeulId { get; set; }
      public int oaModeulId { get; set; }
    }

    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage ImportFromNAModule(ImportFromNAModuleDTO dto) {
      //https://localhost/API/dnn_OpenNewsSPA/Helper/ImportFromNAModule?naModeulId=414&oaModeulId=542
      var rq = HttpContext.Current.Request;
      //dto = new ImportFromNAModuleDTO {
      //  naModeulId = rq.QueryString["naModeulId"].AsInt(-1),
      //  oaModeulId = rq.QueryString["oaModeulId"].AsInt(-1)
      //};
      if (dto.naModeulId > 0 && dto.oaModeulId == -1) {
        dto.oaModeulId = ActiveModule.ModuleID;
      }
      if (dto == null || dto.naModeulId <= 0 || dto.oaModeulId <= 0)
      {
        throw (new Exception("naModeulId and oaModeulId Required"));
      }
      using (IDataContext ctx = DataContext.Instance()) {
        //DELETE EVERYTHING FROM OA with moduleID
        ctx.Execute(System.Data.CommandType.Text, "DELETE FROM [dbo].[OpenNews_Category] Where ModuleID=@0; " +
        "DELETE FROM[dbo].[OpenNews_Tag] Where ModuleID =@0; "+
        "DELETE FROM[dbo].[OpenNews_Article] Where ModuleID =@0; ", dto.oaModeulId);
        var naCategories = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Category Where Moduleid=@0", dto.naModeulId);
        var repoCats = ctx.GetRepository<Category>();
        var dicCats = new Dictionary<int, int>();
        naCategories.ToList().ForEach(c => {
          var newCat = new Category();
          newCat.Name = c.Name;
          newCat.Description = stringNotNull(c.Description);
          newCat.MetaDescription = stringNotNull(c.MetaDescription);
          newCat.MetaTitle = stringNotNull(c.MetaTitle);
          newCat.MetaKeywords = stringNotNull(c.MetaKeywords);
          newCat.SortOrder = c.SortOrder;
          newCat.ParentID = (c.ParentID==-1?0: c.ParentID);
          newCat.ModuleId = dto.oaModeulId;
          //TODO = use actual old url
          newCat.URL = UrlHelper.cleanUrl(newCat.Name, PortalSettings.PortalId);
          repoCats.Insert(newCat);
          dicCats.Add(c.CategoryID, newCat.CategoryID);
        });
        naCategories = null;

        var naTags = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Tag Where Moduleid=@0", dto.naModeulId);
        var repoTags = ctx.GetRepository<Tag>();
        var dicTag = new Dictionary<int, int>();
        naTags.ToList().ForEach(c => {
          var newTag = new Tag();
          newTag.Name = c.Name;
          newTag.ModuleId = dto.oaModeulId;
          repoTags.Insert(newTag);
          dicTag.Add(c.TagID, newTag.TagID);
        });
        naTags = null;

        var naArticles = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Article Where Moduleid=@0", dto.naModeulId);
        var repoArticles = ctx.GetRepository<Article>();
        var dicArticles = new Dictionary<int, int>();
        naArticles.ToList().ForEach(c => {
          var newArticle = new Article();
          newArticle.Title = c.Title;
          newArticle.ApproverID = c.ApproverID;
          newArticle.AuthorID = c.AuthorID;
          newArticle.AutoArchive = (c.EndDate != null);
          newArticle.CommentCount = c.CommentCount;
          newArticle.CreatedDate = c.CreatedDate;
          newArticle.EndDate = c.EndDate;
          newArticle.IsApproved = c.IsApproved;
          newArticle.IsDeleted = false;
          newArticle.IsDraft = c.IsDraft;
          newArticle.IsFeatured = c.IsFeatured;
          newArticle.LastUpdated = c.LastUpdate;
          newArticle.LastUpdateID = c.LastUpdateID;
          newArticle.MetaDescription = stringNotNull(c.MetaDescription);
          newArticle.MetaKeywords = stringNotNull(c.MetaKeywords);
          newArticle.MetaTitle = stringNotNull(c.MetaTitle);
          newArticle.ModuleId = dto.oaModeulId;
          newArticle.NumOfViews = c.NumberOfViews;
          newArticle.PageHeadText = stringNotNull(c.PageHeadText);
          newArticle.RssGuid = stringNotNull(c.RssGuid);
          newArticle.ShortURL = "";
          newArticle.StartDate = c.StartDate;
          newArticle.Summary = stringNotNull(c.Summary);
          //TODO Get the current url of this article...
          newArticle.URL = UrlHelper.cleanUrl(newArticle.Title, PortalSettings.PortalId);
          repoArticles.Insert(newArticle);
          var cntTaxonomy = new DNNContent();
          var objContentItem = cntTaxonomy.CreateContentItem(newArticle);
          newArticle.ContentItemID = objContentItem.ContentItemId;
          repoArticles.Update(newArticle);
          dicArticles.Add(c.ArticleID, (int)newArticle.ArticleID);
        });
        //naArticles = null;
        var naPages = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Page", null);
        var repoPages = ctx.GetRepository<Page>();
        naPages.ToList().ForEach(c => {
          if ((c.ArticleID != null) && dicArticles.ContainsKey(c.ArticleID)) {
            var newPage = new Page();
            newPage.PageText = stringNotNull(CommonHelper.ConvertToMarkDown(HttpUtility.HtmlDecode("<div>" + c.PageText + "</div>"), true));
            newPage.PageText = Regex.Replace(newPage.PageText, @"(\r\n){3,}", Environment.NewLine + Environment.NewLine);
            //newPage.PageText = newPage.PageText.Replace(Environment.NewLine + Environment.NewLine + Environment.NewLine, Environment.NewLine + Environment.NewLine);
            newPage.SortOrder = 0;
            newPage.ArticleID = (long)dicArticles[c.ArticleID];
            repoPages.Insert(newPage);
          }
        });
        naPages = null;
        var naFiles = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_File", null);
        var repoFiles = ctx.GetRepository<File>();
        naFiles.ToList().ForEach(c => {
          if ((c.ArticleID != null) && dicArticles.ContainsKey(c.ArticleID)) {
            var newFile = new File();
            try
            {
              newFile.ArticleID = (long)dicArticles[c.ArticleID];
              newFile.fileInfo = FileManager.Instance.GetFile(PortalSettings.PortalId, c.Folder + c.FileName);
              if (newFile.fileInfo != null)
              {
                newFile.fileInfo.Title = stringNotNull(c.Title);
                FileManager.Instance.UpdateFile(newFile.fileInfo);
                newFile.FileID = newFile.fileInfo.FileId;
                newFile.IsImage = false;
                newFile.SortOrder = c.SortOrder;
                repoFiles.Insert(newFile);
              }
            }
            catch (Exception ex)
            {

            }
          }
          
        });
        naFiles = null;
        var naImages = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Image", null);
        //var repoFiles = ctx.GetRepository<File>();
        naImages.ToList().ForEach(c => {
          if ((c.ArticleID!=null) && dicArticles.ContainsKey(c.ArticleID)) {
            try
            {
              var newFile = new File();
              newFile.ArticleID = (long)dicArticles[c.ArticleID];
              newFile.fileInfo = FileManager.Instance.GetFile(PortalSettings.PortalId, c.Folder + c.FileName);
              if (newFile.fileInfo != null)
              {
                newFile.fileInfo.Title = stringNotNull(c.Title);
                newFile.fileInfo.Description = stringNotNull(c.Description);
                FileManager.Instance.UpdateFile(newFile.fileInfo);
                newFile.FileID = newFile.fileInfo.FileId;
                newFile.IsImage = true;
                newFile.SortOrder = c.SortOrder;
                repoFiles.Insert(newFile);
              }
            }
            catch (Exception ex)
            {

            }
          }
            

        });
        naImages = null;
        var naArticleCategories = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_ArticleCategories", null);
        var repoArticleCategory = ctx.GetRepository<ArticleCategory>();
        naArticleCategories.ToList().ForEach(c => {
          if ((c.ArticleID != null) && dicArticles.ContainsKey(c.ArticleID) && (c.CategoryID != null) && dicCats.ContainsKey(c.CategoryID)) {
            var newAC = new ArticleCategory();
            newAC.ArticleID = (long)dicArticles[c.ArticleID];
            newAC.CategoryID = dicCats[c.CategoryID];
            repoArticleCategory.Insert(newAC);
          }
        });
        naArticleCategories = null;
        var naArticleTag = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_ArticleTag", null);
        var repoAT = ctx.GetRepository<ArticleTag>();
        naArticleTag.ToList().ForEach(c => {
          if ((c.ArticleID != null) && dicArticles.ContainsKey(c.ArticleID) && (c.TagID != null) && dicTag.ContainsKey(c.TagID)) {
            var newAT = new ArticleTag();
            newAT.ArticleID = (long)dicArticles[c.ArticleID];
            newAT.TagID = dicTag[c.TagID];
            repoAT.Insert(newAT);
          }
          
        });
        naArticleTag = null;
        var naCustomField = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_CustomField WHERE ModuleId=@0 ORDER BY SortOrder", dto.naModeulId);
        var onCustomFieldDef = new CustomDef();
        if (naCustomField.Count() > 0) {
          onCustomFieldDef.DefId = -1;
          onCustomFieldDef.ModuleId = dto.oaModeulId;
          onCustomFieldDef.Name = ActiveModule.ModuleTitle + " Custom Definition";
          onCustomFieldDef.Required = true;
          onCustomFieldDef.TypeName = "ImportDef";
          naCustomField.ToList().ForEach(cf => {
            
            var ncf = new CustomDefField();
            switch (cf.ValidationType)
            {
              case 1:
                ncf.dataType = "decimal";
                ncf.controlType = "input";
                ncf.inputType = "number";
                break;
              case 2:
                ncf.dataType = "date";
                ncf.controlType = "date";
                break;
              case 3:
                ncf.dataType = "decimal";
                ncf.controlType = "input";
                ncf.inputType = "number";
                break;
              case 4:
                ncf.dataType = "int";
                ncf.controlType = "input";
                ncf.inputType = "number";
                break;
              case 5:
                ncf.dataType = "string";
                ncf.controlType = "input";
                ncf.inputType = "email";
                break;
              case 6:
                ncf.dataType = "string";
                ncf.controlType = "input";
                ncf.inputType = "text";
                break;
              default:
                break;
            }
            switch (cf.FieldType)
            {
              case 0:
                //OneLineTextBox 
                ncf.dataType = "string";
                ncf.controlType = "input";
                if (string.IsNullOrEmpty(ncf.inputType)) {
                  ncf.inputType = "text";
                }
                break;
              case 1:
                //MultiLineTextBox 
                ncf.dataType = "string";
                ncf.controlType = "textarea";
                ncf.rows = 4;
                break;
              case 2:
                //RichTextBox 
                ncf.dataType = "string";
                ncf.controlType = "textarea";
                ncf.rows = 4;
                break;
              case 3:
                //DropDownList 
                ncf.dataType = "string";
                ncf.controlType = "select";
                SetCustomFieldOptionsAndDefaults(ref ncf, cf);
                break;
              case 4:
                //CheckBox 
                ncf.dataType = "string";
                ncf.controlType = "check";
                SetCustomFieldOptionsAndDefaults(ref ncf, cf);
                break;
              case 5:
                //MultiCheckBox 
                ncf.dataType = "string";
                ncf.controlType = "checklist";
                SetCustomFieldOptionsAndDefaults(ref ncf, cf);
                break;
              case 6:
                //RadioButton 
                ncf.dataType = "string";
                ncf.controlType = "radio";
                SetCustomFieldOptionsAndDefaults(ref ncf, cf);
                break;
              case 7:
                //ColorPicker - not yet supported.
                break;
              default:
                break;
            }
            ncf.maxLength = cf.Length;
            ncf.name = cf.Name;
            ncf.help = cf.CaptionHelp;
            ncf.label = cf.Caption;
            ncf.required = cf.IsRequired;
            if (cf.DefaultValue != null) {
              ncf.defaultValue = cf.DefaultValue;
            }
            if (cf.RegularExpression != null)
            {
              ncf.validationRegEx = cf.RegularExpression;
            }
            ncf.visible = cf.IsVisible;
            onCustomFieldDef.Fields.Add(ncf);
          });
        }
        var onCustomDefs = new List<CustomDef>();
        onCustomDefs.Add(onCustomFieldDef);
        //Write to json config file.
        string jsonPathBase = "/DesktopModules/{0}/data/custom-fields-{1}.json";
        string jsonPath = string.Format(jsonPathBase,
          ActiveModule.DesktopModule.FolderName, ActiveModule.ModuleID.ToString()
          );
        jsonPath = System.Web.Hosting.HostingEnvironment.MapPath(jsonPath);

        var dataFolder = System.IO.Path.GetDirectoryName(jsonPath);
        if (!System.IO.Directory.Exists(dataFolder)) {
          System.IO.Directory.CreateDirectory(dataFolder);
        }

        System.IO.File.WriteAllText(jsonPath, Newtonsoft.Json.JsonConvert.SerializeObject(onCustomDefs.ToArray()));
        //Import CustomFields Data for Articles.
        var naCustomFieldVals = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_CustomValue WHERE ArticleID IN (SELECT ArticleID FROM [dbo].[DnnForge_NewsArticles_Article] Where ModuleID=@0)", dto.naModeulId);
        naCustomFieldVals.ToList().ForEach(val => {
          if ((val.ArticleID != null) && dicArticles.ContainsKey(val.ArticleID)) {
            var cf = naCustomField.Where(c => c.CustomFieldID == val.CustomFieldID).SingleOrDefault();
            long aid = (long)dicArticles[val.ArticleID];
            var article = repoArticles.Find("WHERE ArticleID=@0", aid).SingleOrDefault();
            if (cf != null && article != null)
            {
              //dynamic ImportDef
              dynamic ImportDefData = new ExpandoObject();
              dynamic ImportDef = new ExpandoObject();
              var ImportDefDataDic = (IDictionary<string, object>)ImportDefData;
              var ImportDefDic = (IDictionary<string, object>)ImportDef;
              ImportDefDataDic.Add(cf.Name, val.CustomValue);
              ImportDefDic.Add("ImportDef", ImportDefData);
              article.CustomTypes = ImportDef;
              repoArticles.Update(article);
            }
          }
        });
      }
      
      return Request.CreateResponse(System.Net.HttpStatusCode.OK);
    }
  }
}
