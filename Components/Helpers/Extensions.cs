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
  }
}