using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class FileHelper
  {
    private static readonly string[] _validExtensions = { "jpg", "bmp", "gif", "png", "jpeg", "svg" }; //  etc

    public static bool IsImageExtension(string ext)
    {
      ext = ext.Replace(".", "");
      return _validExtensions.Contains(ext);
    }
  }
}