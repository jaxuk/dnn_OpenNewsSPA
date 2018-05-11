using AutoMapper;
using DotNetNuke.Collections;
using DotNetNuke.Entities.Users;
using DotNetNuke.Services.FileSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YeditUK.Modules.dnn_OpenNews.Components.Entities;
using YeditUK.Modules.dnn_OpenNews.Services.ViewModels;

namespace YeditUK.Modules.dnn_OpenNews.Components.Helpers
{
  public static class AutoMapperConfig
  {
    public static void ConfigureAutoMapper()
    {
      Mapper.Initialize(m => {
        m.CreateMap<Category, CategoryViewModel>()
          //.ForMember(dest => dest.Image, opt => opt.MapFrom(src => src.ImageFile))
          .ReverseMap();
        m.CreateMap<Article, ArticleViewModel>()
          .ForMember(dest => dest.Body, opt => opt.MapFrom(src => src.Pages[0].PageText))
          //.ForMember(dest => dest.Body, opt => opt.MapFrom(src => src.Pages[0].PageText))
          .ForMember(dest => dest.vwURL, opt => opt.Ignore())
          .ReverseMap();
        //.ForMember(dest => dest.AuthorName, opt =>
        //{
        //  opt.MapFrom(src => getUsersDisplayName((int)src.AuthorID));
        //  //opt.AllowNull();
        //});
        //.ForMember(dest => dest.Images, opt => opt.MapFrom(src => src.Files.Where(f => FileIsImage(f.fileInfo))))
        //.ForMember(dest => dest.Files, opt => opt.MapFrom(src => src.Files.Where(f => !FileIsImage(f.fileInfo))))
        //
        //        m.CreateMap<ArticleViewModel, Article>()
        //          .ForMember(dest => dest.Pages[0].PageText, opt => {
        //            opt.MapFrom(src => src.Body);
        ////            opt.d
        ////            opt.Condition(c=> { c. })
        //            });
        m.CreateMap<UserInfo, UserViewModel>()
          .ForMember(dest => dest.name, opt => opt.MapFrom(src => src.DisplayName))
          .ForMember(dest => dest.id, opt => opt.MapFrom(src => src.UserID))
          .ForMember(dest => dest.avatarUrl, opt => opt.MapFrom(src => UrlHelper.GetUserProfilePhotoURL(src.UserID)))
          .ForMember(dest => dest.profileUrl, opt => opt.MapFrom(src => UrlHelper.GetUserProfileURL(src.UserID)))
          .ReverseMap();
        m.CreateMap<File, FileViewModel>()
          .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.fileInfo.FileName))
          .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.fileInfo.Description))
          .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.fileInfo.Title))
          .ForMember(dest => dest.size, opt => opt.MapFrom(src => src.fileInfo.Size))
          .ForMember(dest => dest.url, opt => opt.MapFrom(src => FileManager.Instance.GetUrl(src.fileInfo)))
          .ReverseMap();
        //m.CreateMap<FileViewModel, File>()
        //  .ForMember(dest => dest.fileInfo.Description, opt => opt.MapFrom(src => src.Description))
        //  .ForMember(dest => dest.fileInfo.Title, opt => opt.MapFrom(src => src.Description));
        //  .ForMember(dest => dest.size, opt => opt.MapFrom(src => src.fileInfo.Size))
        //  .ForMember(dest => dest.url, opt => opt.MapFrom(src => FileManager.Instance.GetUrl(src.fileInfo)));
        //.ReverseMap();
        m.CreateMap(typeof(PagedList<>), typeof(PagedList<>)).ConvertUsing(typeof(PagedListConverter<,>));
      });
      Mapper.AssertConfigurationIsValid();
    }
  }

  public class PagedListConverter<TSource, TDestination> : ITypeConverter<PagedList<TSource>, PagedList<TDestination>> where TSource : class where TDestination : class
  {
    public PagedList<TDestination> Convert(PagedList<TSource> source, PagedList<TDestination> destination, ResolutionContext context)
    {
      var collection = Mapper.Map<IEnumerable<TSource>, IEnumerable<TDestination>>(source);

      return new PagedList<TDestination>(collection, source.TotalCount, source.PageIndex, source.PageSize);
    }
  }
}