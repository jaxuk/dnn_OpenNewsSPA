using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class ExtensionMethods
  {
    public static IEnumerable<T> Flatten<T>(
        this IEnumerable<T> items,
        Func<T, IEnumerable<T>> getChildren)
    {
      var stack = new Stack<T>();
      foreach (var item in items)
        stack.Push(item);

      while (stack.Count > 0)
      {
        var current = stack.Pop();
        yield return current;

        var children = getChildren(current);
        if (children == null) continue;

        foreach (var child in children)
          stack.Push(child);
      }
    }
  }
}