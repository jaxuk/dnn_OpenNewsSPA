using AutoMapper;
using DotNetNuke.Collections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using System.Collections;

namespace YeditUK.Modules.dnn_OpenNews.Services.ViewModels
{
  public class PagedListMetaViewModel
  {
    public bool HasNextPage { get; set; }
    public bool HasPreviousPage { get; set; }
    public bool IsFirstPage { get; set; }
    public bool IsLastPage { get; set; }
    public int PageCount { get; set; }
    public int PageIndex { get; set; }
    public int PageSize { get; set; }
    public int TotalCount { get; set; }
    public int Count { get; set; }
    public PagedListMetaViewModel()
    {
    }
    public PagedListMetaViewModel(dynamic pl)
    {
      this.Count = pl.Count;
      this.TotalCount = pl.TotalCount;
      this.PageSize = pl.PageSize;
      this.PageIndex = pl.PageIndex;
      this.PageCount = pl.PageCount;
      this.IsLastPage = pl.IsLastPage;
      this.IsFirstPage = pl.IsFirstPage;
      this.HasNextPage = pl.HasNextPage;
      this.HasPreviousPage = pl.HasPreviousPage;
    }
  }
}