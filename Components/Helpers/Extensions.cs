using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class Extensions
  {
    public static bool IsArrayOf<T>(this Type type)
    {
      return type == typeof(T[]);
    }
    public static string Left(this string value, int maxLength)
    {
      if (string.IsNullOrEmpty(value) || maxLength==-1) return value;
      maxLength = Math.Abs(maxLength);

      return (value.Length <= maxLength
             ? value
             : value.Substring(0, maxLength)
             );
    }
  }
}