﻿using DotNetNuke.Entities.Users;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YeditUK.Modules.dnn_OpenNews.Services.ViewModels
{
  public class RoleViewModel
  {
    public RoleViewModel() { }

    public int id { get; set; }

    public string name { get; set; }
  }
}