using DotNetNuke.Services.FileSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Services.ViewModels
{
  public class FileViewModel
  {
    public FileViewModel(){}
    public long FileId { get; set; } = -1;
    public string Name { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string url { get; set; } = string.Empty;
    public int size { get; set; } = -1;
    public bool IsImage { get; set; } = false;
  }
}