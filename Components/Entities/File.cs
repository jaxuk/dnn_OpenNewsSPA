using System;
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;
using DotNetNuke.Services.FileSystem;
using YeditUK.Modules.dnn_OpenNews.Components.Helpers;

namespace YeditUK.Modules.dnn_OpenNews.Components.Entities
{
  [TableName("OpenNews_File")]
  //setup the primary key for table
  [PrimaryKey("ID", AutoIncrement = true)]
  //configure caching using PetaPoco
  [Cacheable("Files", CacheItemPriority.Default, 20)]
  //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
  //[Scope("ArticleID")]
  public class File
  {
    public File() { }
    public File(IFileInfo fi) {
      ArticleID = -1;
      fileInfo = fi;
      FileID = fi.FileId;
      IsImage = CommonHelper.FileIsImage(fi);
      SortOrder = -1;
      ID = -1;
    }
    public int ID { get; set; }
    public long FileID { get; set; }
    public long ArticleID { get; set; }
    public int SortOrder { get; set; }
    public bool IsImage { get; set; }
    [IgnoreColumn]
    private IFileInfo _fileInfo { get; set; }
    [IgnoreColumn]
    public IFileInfo fileInfo { get {
        if (_fileInfo == null) {
          _fileInfo = FileManager.Instance.GetFile((int)this.FileID);
        }
        return _fileInfo;
      } set {
        _fileInfo = value;
      }
    }
  }
}