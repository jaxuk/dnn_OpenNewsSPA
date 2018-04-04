using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Content;
using DotNetNuke.Entities.Content.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Components.Intergration
{
  public class DNNContent
  {
    /// <summary>
    /// This should only run after the Post exists in the data store. 
    /// </summary>
    /// <returns>The newly created ContentItemID from the data store.</returns>
    internal ContentItem CreateContentItem(Article a)
    {
      var typeController = new ContentTypeController();
      var colContentTypes = (from t in typeController.GetContentTypes() where t.ContentType == Constants.ContentTypeNameArticle select t);
      int contentTypeID;

      if (colContentTypes.Count() > 0)
      {
        var contentType = colContentTypes.Single();
        contentTypeID = contentType == null ? CreateContentTypeArticle() : contentType.ContentTypeId;
      }
      else
      {
        contentTypeID = CreateContentTypeArticle();
      }

      var objContent = new ContentItem
      {
        Content = "",
        ContentTypeId = contentTypeID,
        Indexed = false,
        ContentKey = "OpenNews_ArticleID=" + a.ArticleID,
        ModuleID = a.ModuleId,
        TabID = -1
      };

      objContent.ContentItemId = Util.GetContentController().AddContentItem(objContent);

      return objContent;
    }

    internal ContentItem CreateContentItem(Category c)
    {
      var typeController = new ContentTypeController();
      var colContentTypes = (from t in typeController.GetContentTypes() where t.ContentType == Constants.ContentTypeNameCategory select t);
      int contentTypeID;

      if (colContentTypes.Count() > 0)
      {
        var contentType = colContentTypes.Single();
        contentTypeID = contentType == null ? CreateContentTypeCategory() : contentType.ContentTypeId;
      }
      else
      {
        contentTypeID = CreateContentTypeCategory();
      }

      var objContent = new ContentItem
      {
        Content = "",
        ContentTypeId = contentTypeID,
        Indexed = false,
        ContentKey = "OpenNews_CategoryID=" + c.CategoryID,
        ModuleID = c.ModuleId,
        TabID = -1
      };

      objContent.ContentItemId = Util.GetContentController().AddContentItem(objContent);

      return objContent;
    }

    /// <summary>
    /// This is used to update the content in the ContentItems table. Should be called when a category is updated.
    /// </summary>
    internal void UpdateContentItem(Article a)
    {
      var objContent = Util.GetContentController().GetContentItem((int)a.ContentItemID);

      if (objContent == null) return;
      //objContent.Content = "";
      //objContent.TabID = -1;
      //objContent.ContentKey = "view=" + Constants.PageScope.Question.ToString().ToLower() + "&id=" + objPost.PostId;

      Util.GetContentController().UpdateContentItem(objContent);

    }
    /// <summary>
    /// This is used to update the content in the ContentItems table. Should be called when a category is updated.
    /// </summary>
    internal void UpdateContentItem(Category c)
    {
      var objContent = Util.GetContentController().GetContentItem((int)c.ContentItemID);

      if (objContent == null) return;
      //objContent.Content = "";
      //objContent.TabID = -1;
      //objContent.ContentKey = "view=" + Constants.PageScope.Question.ToString().ToLower() + "&id=" + objPost.PostId;

      Util.GetContentController().UpdateContentItem(objContent);

    }

    /// <summary>
    /// This removes a content item associated with a question/thread from the data store. Should run every time an entire thread is deleted.
    /// </summary>
    /// <param name="contentItemID"></param>
    internal void DeleteContentItem(int contentItemID)
    {
      if (contentItemID <= Null.NullInteger) return;
      var objContent = Util.GetContentController().GetContentItem(contentItemID);
      if (objContent == null) return;

      // remove any metadata/terms associated first (perhaps we should just rely on ContentItem cascade delete here?)


      Util.GetContentController().DeleteContentItem(objContent);
    }

    /// <summary>
    /// This is used to determine the ContentTypeID (part of the Core API) based on this module's content type. If the content type doesn't exist yet for the module, it is created.
    /// </summary>
    /// <returns>The primary key value (ContentTypeID) from the core API's Content Types table.</returns>
    internal static int GetContentTypeArticleID()
    {
      var typeController = new ContentTypeController();
      var colContentTypes = (from t in typeController.GetContentTypes() where t.ContentType == Constants.ContentTypeNameArticle select t);
      int contentTypeId;

      if (colContentTypes.Count() > 0)
      {
        var contentType = colContentTypes.Single();
        contentTypeId = contentType == null ? CreateContentTypeArticle() : contentType.ContentTypeId;
      }
      else
      {
        contentTypeId = CreateContentTypeArticle();
      }

      return contentTypeId;
    }

    internal static int GetContentTypeCategoryID()
    {
      var typeController = new ContentTypeController();
      var colContentTypes = (from t in typeController.GetContentTypes() where t.ContentType == Constants.ContentTypeNameCategory select t);
      int contentTypeId;

      if (colContentTypes.Count() > 0)
      {
        var contentType = colContentTypes.Single();
        contentTypeId = contentType == null ? CreateContentTypeCategory() : contentType.ContentTypeId;
      }
      else
      {
        contentTypeId = CreateContentTypeCategory();
      }

      return contentTypeId;
    }

    #region Private Methods

    /// <summary>
    /// Creates a Content Type (for taxonomy) in the data store.
    /// </summary>
    /// <returns>The primary key value of the new ContentType.</returns>
    private static int CreateContentTypeArticle()
    {
      var typeController = new ContentTypeController();
      var objContentType = new ContentType { ContentType = Constants.ContentTypeNameArticle };

      return typeController.AddContentType(objContentType);
    }
    private static int CreateContentTypeCategory()
    {
      var typeController = new ContentTypeController();
      var objContentType = new ContentType { ContentType = Constants.ContentTypeNameCategory };

      return typeController.AddContentType(objContentType);
    }

    #endregion

  }
}
