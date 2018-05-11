using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Enums
{
  public enum ViewType
  {
    archives ,
    approvearticles ,
    approvecomments ,
    articleview ,
    archiveview ,
    authorview ,
    categories , 
    categoryview , 
    editcomment ,
    editpage ,
    editpages ,
    editsortorder ,
    inlineimage ,
    myarticles ,
    notauthenticated ,
    notauthorized ,
    search ,
    submitnewscomplete ,
    syndication ,
    tagview ,
    viewcurrent,
    admin,
    adminframe
  }
  public enum AdminViewType {
    article,
    settings,
    menu,
    categories,
    category,
    tags,
    tag
  }

  public enum ArticleStatus
  {
    Deleted = 0,
    NeedsApproval = 1,
    Draft = 2,
    Live = 3,
    Expired = 4,
    Upcoming = 5
  }
}