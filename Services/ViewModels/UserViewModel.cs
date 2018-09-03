using DotNetNuke.Entities.Users;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Services.ViewModels
{
  public class UserViewModel
  {
    public UserViewModel() { }

    public int id { get; set; }

    public string name { get; set; }

    public string profileUrl { get; set; }

    public string avatarUrl { get; set; }

    public string[] roles { get; set; }

    public bool isEditor { get; set; } = false;
    public bool isAuthor { get; set; } = false;
  }
}