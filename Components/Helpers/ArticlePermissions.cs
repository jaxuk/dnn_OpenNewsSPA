using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Components.Enums;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public class ArticlePermissions
  {
    UserInfo userInfo;
    Settings settings;
    bool userHasEditorPerms = false;
    bool userHasAuthorPems = false;
    bool selfPublish = false;

    public ArticlePermissions(UserInfo userInfo, ModuleInfo moduleInfo, PortalSettings portalSettings) {
      this.settings = Components.SettingsController.Instance.GetSettings(moduleInfo, portalSettings);
      this.userInfo = userInfo;
      if (CommonHelper.UserHasAuthorPerms(userInfo, settings, portalSettings)) {
        userHasAuthorPems = true;
      }
      if (CommonHelper.UserHasEditorPerms(userInfo, settings, portalSettings))
      {
        userHasEditorPerms = true;
        userHasAuthorPems = true;
      }
      this.selfPublish = settings.PermissionsAllowEditorsToSelfPublish;
    }

    public List<string> GetArticleActions(Article article) {
      List<ArticleAction> actions = new List<ArticleAction>();
      // View
      actions.Add(ArticleAction.View);
      // UnApprove
      if ((article.Status == ArticleStatus.Live || article.Status == ArticleStatus.Upcoming) && userHasEditorPerms) {
        actions.Add(ArticleAction.UnApprove);
      }
      // Delete
      if (userHasEditorPerms || 
        (userInfo.UserID == article.AuthorID && (article.Status == ArticleStatus.NeedsApproval || article.Status == ArticleStatus.Draft)))
      {
        actions.Add(ArticleAction.Delete);
      }
      // Approve
      if (article.Status == ArticleStatus.NeedsApproval &&((userHasEditorPerms && selfPublish) || (userHasEditorPerms && article.AuthorID != userInfo.UserID))) {
        actions.Add(ArticleAction.Approve);
      }
      // Edit
      if ((userHasEditorPerms) || (userHasAuthorPems && article.AuthorID == userInfo.UserID && (article.Status == ArticleStatus.NeedsApproval || article.Status == ArticleStatus.Draft)))
      {
        actions.Add(ArticleAction.Edit);
      }
      List<string> strActions = new List<string>();
      actions.ForEach(a => {
        strActions.Add(a.ToString());
      });
      return strActions;
    }
  }
}