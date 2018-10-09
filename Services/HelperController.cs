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
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Common;

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

    
    private string stringNotNull(string s, int maxlength = -1) {
      return (s == null ? "" : s.Left(maxlength));
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

    [HttpPost]
#if DEBUG
    [AllowAnonymous]
#else
    [ValidateAntiForgeryToken]
#endif
    public HttpResponseMessage GetImportLog() {
      string logPathBase = "/DesktopModules/{0}/data/importLog-Module-{1}.txt";
      string logPath = string.Format(logPathBase,
        ActiveModule.DesktopModule.FolderName, ActiveModule.ModuleID.ToString()
        );
      logPath = System.Web.Hosting.HostingEnvironment.MapPath(logPath);

      if (!System.IO.File.Exists(logPath))
      {
        return Request.CreateResponse(new string[] { });
      }
      else {
        return Request.CreateResponse(System.IO.File.ReadAllLines(logPath));
      }
    }


    public class ImportFromNAModuleDTO
    {
      public int naModeulId { get; set; }
      public int oaModeulId { get; set; }
      public bool resetIdentity { get; set; }
      public bool identityInsert { get; set; }
      public bool clearLog { get; set; }
      
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
      int naTabid = -1;
      naTabid = ModuleController.Instance.GetTabModulesByModule(dto.naModeulId).FirstOrDefault().TabID;
      if (dto == null || dto.naModeulId <= 0 || dto.oaModeulId <= 0)
      {
        throw (new Exception("naModeulId and oaModeulId Required"));
      }

      string jsonPathBase = "/DesktopModules/{0}/data/custom-fields-{1}.json";
      string jsonPath = string.Format(jsonPathBase,
        ActiveModule.DesktopModule.FolderName, ActiveModule.ModuleID.ToString()
        );
      string logPathBase = "/DesktopModules/{0}/data/importLog-Module-{1}.txt";
      string logPath = string.Format(logPathBase,
        ActiveModule.DesktopModule.FolderName, ActiveModule.ModuleID.ToString()
        );

      jsonPath = System.Web.Hosting.HostingEnvironment.MapPath(jsonPath);
      logPath = System.Web.Hosting.HostingEnvironment.MapPath(logPath);

      var dataFolder = System.IO.Path.GetDirectoryName(jsonPath);

      if (!System.IO.Directory.Exists(dataFolder))
      {
        System.IO.Directory.CreateDirectory(dataFolder);
      }

      if (!System.IO.File.Exists(logPath))
      {
        System.IO.File.Create(logPath).Close();
      }
      else if (dto.clearLog) {
        System.IO.File.Delete(logPath);
        System.IO.File.Create(logPath).Close();
      }

      System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() + 
        " - Starting Import for NA Module with Id: " + dto.naModeulId.ToString() });

      using (IDataContext ctx = DataContext.Instance()) {
        
        ctx.Execute(System.Data.CommandType.StoredProcedure, "OpenNews_ClearAllModuleData", dto.oaModeulId, dto.resetIdentity, dto.identityInsert);
        var naCategories = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Category Where Moduleid=@0", dto.naModeulId);
        var repoCats = ctx.GetRepository<Category>();
        var dicCats = new Dictionary<int, int>();
        naCategories.ToList().ForEach(c => {
          var newCat = new Category();
          if (dto.identityInsert) {
            newCat.CategoryID = c.CategoryID;
          }
          newCat.Name = c.Name;
          newCat.Description = stringNotNull(c.Description);
          newCat.MetaDescription = stringNotNull(c.MetaDescription, 255);
          newCat.MetaTitle = stringNotNull(c.MetaTitle, 255);
          newCat.MetaKeywords = stringNotNull(c.MetaKeywords, 255);
          newCat.SortOrder = c.SortOrder;
          newCat.ParentID = (c.ParentID==-1?0: c.ParentID);
          newCat.ModuleId = dto.oaModeulId;
          //TODO = use actual old url
          string oldUrl = UrlHelper.GetCategoryURL(naTabid, c.CategoryID);
          newCat.URL = oldUrl.Split('/').Last();
          //newCat.URL = UrlHelper.cleanUrl(newCat.Name, PortalSettings.PortalId);
          repoCats.Insert(newCat);
          dicCats.Add(c.CategoryID, newCat.CategoryID);
        });
        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Imported : " + dicCats.Count.ToString() + " Categories" });
        naCategories = null;

        var naTags = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Tag Where Moduleid=@0", dto.naModeulId);
        var repoTags = ctx.GetRepository<Tag>();
        var dicTag = new Dictionary<int, int>();
        naTags.ToList().ForEach(c => {
          var newTag = new Tag();
          if (dto.identityInsert)
          {
            newTag.TagID = c.TagID;
          }
          newTag.Name = c.Name;
          newTag.ModuleId = dto.oaModeulId;
          repoTags.Insert(newTag);
          dicTag.Add(c.TagID, newTag.TagID);
        });
        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Imported : " + dicTag.Count.ToString() + " Tags" });
        naTags = null;

        var naArticles = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Article Where Moduleid=@0", dto.naModeulId);
        var repoArticles = ctx.GetRepository<Article>();
        var dicArticles = new Dictionary<int, int>();
        naArticles.ToList().ForEach(c => {
          var newArticle = new Article();
          if (dto.identityInsert)
          {
            newArticle.ArticleID = c.ArticleID;
          }
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
          newArticle.MetaDescription = stringNotNull(c.MetaDescription, 255);
          newArticle.MetaKeywords = stringNotNull(c.MetaKeywords, 255);
          newArticle.MetaTitle = stringNotNull(c.MetaTitle, 255);
          newArticle.ModuleId = dto.oaModeulId;
          newArticle.NumOfViews = c.NumberOfViews;
          newArticle.PageHeadText = stringNotNull(c.PageHeadText, 500);
          newArticle.RssGuid = stringNotNull(c.RssGuid);
          newArticle.ShortURL = "";
          newArticle.StartDate = c.StartDate;
          newArticle.Summary = stringNotNull(c.Summary);
          //TODO Get the current url of this article...
          string oldUrl = UrlHelper.GetArticleURL(naTabid, c.ArticleID);
          newArticle.URL = oldUrl.Split('/').Last();
          //newArticle.URL = UrlHelper.cleanUrl(newArticle.Title, PortalSettings.PortalId);
          repoArticles.Insert(newArticle);
          var cntTaxonomy = new DNNContent();
          var objContentItem = cntTaxonomy.CreateContentItem(newArticle);
          newArticle.ContentItemID = objContentItem.ContentItemId;
          repoArticles.Update(newArticle);
          dicArticles.Add(c.ArticleID, (int)newArticle.ArticleID);
        });
        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Imported : " + dicArticles.Count.ToString() + " Articles" });
        //naArticles = null;
        var naPages = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Page", null);
        var repoPages = ctx.GetRepository<Page>();
        int importedPageCount = 0;
        naPages.ToList().ForEach(c => {
          if ((c.ArticleID != null) && dicArticles.ContainsKey(c.ArticleID)) {
            var newPage = new Page();
            newPage.PageText = stringNotNull(CommonHelper.ConvertToMarkDown(HttpUtility.HtmlDecode("<div>" + c.PageText + "</div>"), true));
            newPage.PageText = Regex.Replace(newPage.PageText, @"(\r\n){3,}", Environment.NewLine + Environment.NewLine);
            //newPage.PageText = newPage.PageText.Replace(Environment.NewLine + Environment.NewLine + Environment.NewLine, Environment.NewLine + Environment.NewLine);
            newPage.SortOrder = 0;
            newPage.ArticleID = (long)dicArticles[c.ArticleID];
            repoPages.Insert(newPage);
            importedPageCount++;
          }
        });
        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Imported : " + importedPageCount.ToString() + " Article Pages" });
        naPages = null;
        var naFiles = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_File", null);
        var repoFiles = ctx.GetRepository<File>();
        int importedFilesCount = 0;
        naFiles.ToList().ForEach(c => {
          if ((c.ArticleID != null) && dicArticles.ContainsKey(c.ArticleID)) {
            var newFile = new File();
            try
            {
              newFile.ArticleID = (long)dicArticles[c.ArticleID];
              newFile.fileInfo = FileManager.Instance.GetFile(PortalSettings.PortalId, c.Folder + c.FileName, true);
              if (newFile.fileInfo != null)
              {
                newFile.fileInfo.Title = stringNotNull(c.Title);
                FileManager.Instance.UpdateFile(newFile.fileInfo);
                newFile.FileID = newFile.fileInfo.FileId;
                newFile.IsImage = false;
                newFile.SortOrder = c.SortOrder;
                repoFiles.Insert(newFile);
                importedFilesCount++;
              }
              else
              {
                System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
                " - Failed to get fileInfo for file: " + c.Folder + c.FileName});
              }
            }
            catch (Exception ex)
            {
              System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
                " - Error importing File: " + c.Folder + c.FileName + " - " + ex.Message});
            }
          }
          
        });
        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Imported : " + importedFilesCount.ToString() + " Article Files" });
        naFiles = null;
        var naImages = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_Image", null);
        //var repoFiles = ctx.GetRepository<File>();
        int importedImagesCount = 0;
        naImages.ToList().ForEach(c => {
          if ((c.ArticleID!=null) && dicArticles.ContainsKey(c.ArticleID)) {
            try
            {
              var newFile = new File();
              newFile.ArticleID = (long)dicArticles[c.ArticleID];
              newFile.fileInfo = FileManager.Instance.GetFile(PortalSettings.PortalId, c.Folder + c.FileName, true);
              if (newFile.fileInfo != null)
              {
                newFile.fileInfo.Title = stringNotNull(c.Title);
                newFile.fileInfo.Description = stringNotNull(c.Description);
                FileManager.Instance.UpdateFile(newFile.fileInfo);
                newFile.FileID = newFile.fileInfo.FileId;
                newFile.IsImage = true;
                newFile.SortOrder = c.SortOrder;
                repoFiles.Insert(newFile);
                importedImagesCount++;
              }
              else {
                System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
                " - Failed to get fileInfo for image: " + c.Folder + c.FileName});
              }
            }
            catch (Exception ex)
            {
              System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
                " - Error importing Image: " + c.Folder + c.FileName + " - " + ex.Message});
            }
          }
            

        });
        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Imported : " + importedImagesCount.ToString() + " Article Images" });
        naImages = null;
        var naArticleCategories = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_ArticleCategories", null);
        var repoArticleCategory = ctx.GetRepository<ArticleCategory>();
        int importedArticleCategoryCount = 0;
        naArticleCategories.ToList().ForEach(c => {
          if ((c.ArticleID != null) && dicArticles.ContainsKey(c.ArticleID) && (c.CategoryID != null) && dicCats.ContainsKey(c.CategoryID)) {
            var newAC = new ArticleCategory();
            newAC.ArticleID = (long)dicArticles[c.ArticleID];
            newAC.CategoryID = dicCats[c.CategoryID];
            repoArticleCategory.Insert(newAC);
            importedArticleCategoryCount++;
          }
        });

        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Imported : " + importedArticleCategoryCount.ToString() + " Article Category Links" });

        naArticleCategories = null;
        var naArticleTag = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_ArticleTag", null);
        var repoAT = ctx.GetRepository<ArticleTag>();
        int importedArticleTagCount = 0;
        naArticleTag.ToList().ForEach(c => {
          if ((c.ArticleID != null) && dicArticles.ContainsKey(c.ArticleID) && (c.TagID != null) && dicTag.ContainsKey(c.TagID)) {
            var newAT = new ArticleTag();
            newAT.ArticleID = (long)dicArticles[c.ArticleID];
            newAT.TagID = dicTag[c.TagID];
            repoAT.Insert(newAT);
            importedArticleTagCount++;
          }
          
        });

        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Imported : " + importedArticleTagCount.ToString() + " Article Tag Links" });


        int postProcessImageCount = 0;
        //Process all article [IMAGE] tags
        repoPages.Get().ToList().ForEach(p => {
          var images = repoFiles.Find("WHERE ArticleID=@0", p.ArticleID).ToList();
          string rxTagsPattern = @"\[IMAGE:(?<imageId>\d{1,3})\]";
          Regex rxTags = new Regex(rxTagsPattern, RegexOptions.IgnoreCase | RegexOptions.Multiline | RegexOptions.ExplicitCapture);
          foreach (Match m in rxTags.Matches(p.PageText))
          {
            int imgId = -1;
            string imgHtml = "";
            if (int.TryParse(m.Groups["imageId"].Value, out imgId) && images.Count > imgId)
            {
              var img = images[imgId];
              imgHtml = "[IMAGE:" + img.FileID.ToString() + "]";
              postProcessImageCount++;
            }
            p.PageText = Regex.Replace(p.PageText, "\\[IMAGE:" + imgId.ToString() + "\\]", imgHtml);
            repoPages.Update(p);
          }
        });

        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Imported : " + postProcessImageCount.ToString() + " Inline Article Images Proccessed" });

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
        
        
        if (System.IO.File.Exists(jsonPath))
        {
          System.IO.File.Delete(jsonPath);
        }
        System.IO.File.WriteAllText(jsonPath, Newtonsoft.Json.JsonConvert.SerializeObject(onCustomDefs.ToArray()));
        //Import CustomFields Data for Articles.
        var naCustomFieldVals = ctx.ExecuteQuery<dynamic>(System.Data.CommandType.Text, "SELECT * FROM DnnForge_NewsArticles_CustomValue WHERE ArticleID IN (SELECT ArticleID FROM [dbo].[DnnForge_NewsArticles_Article] Where ModuleID=@0)", dto.naModeulId);
        naCustomFieldVals.GroupBy(x => x.ArticleID).ToList().ForEach(group => {
          int articleId = group.Key;
          long aid = (long)dicArticles[articleId];
          var article = repoArticles.Find("WHERE ArticleID=@0", aid).SingleOrDefault();
          if (article != null) {
            dynamic ImportDefData = new ExpandoObject();
            dynamic ImportDef = new ExpandoObject();
            var ImportDefDataDic = (IDictionary<string, object>)ImportDefData;
            var ImportDefDic = (IDictionary<string, object>)ImportDef;
            group.ToList().ForEach(val => {
              var cf = naCustomField.Where(c => c.CustomFieldID == val.CustomFieldID).SingleOrDefault();
              if (cf != null) {
                ImportDefDataDic.Add(cf.Name, val.CustomValue);
              }
            });
            ImportDefDic.Add("ImportDef", ImportDefData);
            article.CustomTypes = ImportDef;
            repoArticles.Update(article);
          }
        });

        System.IO.File.AppendAllLines(logPath, new string[] { DateTime.Now.ToString() +
        " - Import Complete" });

        //naCustomFieldVals.ToList().ForEach(val => {
        //  if ((val.ArticleID != null) && dicArticles.ContainsKey(val.ArticleID)) {
        //    var cf = naCustomField.Where(c => c.CustomFieldID == val.CustomFieldID).SingleOrDefault();
        //    long aid = (long)dicArticles[val.ArticleID];
        //    var article = repoArticles.Find("WHERE ArticleID=@0", aid).SingleOrDefault();
        //    if (cf != null && article != null)
        //    {
        //      //dynamic ImportDef
        //      dynamic ImportDefData = new ExpandoObject();
        //      dynamic ImportDef = new ExpandoObject();
        //      var ImportDefDataDic = (IDictionary<string, object>)ImportDefData;
        //      var ImportDefDic = (IDictionary<string, object>)ImportDef;
        //      ImportDefDataDic.Add(cf.Name, val.CustomValue);
        //      ImportDefDic.Add("ImportDef", ImportDefData);
        //      article.CustomTypes = ImportDef;
        //      repoArticles.Update(article);
        //    } else {
        //      string issue = "Import error Custom field value with id: " + val.CustomFieldID.ToString() + " not imported for articleid: " + val.ArticleID.ToString();
        //      if (cf == null) {
        //        issue += " cf==null";
        //      }
        //      if (article == null)
        //      {
        //        issue += " article==null";
        //      }
        //      Exceptions.LogException(new Exception(issue));
        //    }
        //  }
        //});

        //ctx.Execute(System.Data.CommandType.Text, "" +
        //"SET IDENTITY_INSERT [dbo].[OpenNews_Category] OFF; " +
        //"SET IDENTITY_INSERT [dbo].[OpenNews_Tag] OFF; " +
        //"SET IDENTITY_INSERT [dbo].[OpenNews_Article] OFF; " +
        //"", dto.oaModeulId);
      }
      
      return Request.CreateResponse(System.Net.HttpStatusCode.OK);
    }
  }
}
