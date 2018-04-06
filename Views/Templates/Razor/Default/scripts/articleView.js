var dnnOpenNewsSPA = dnnOpenNewsSPA || {};

dnnOpenNewsSPA.aricleView = function (moduleId, articleId) {
  var service = {
    path: "dnn_OpenNewsSPA",
    framework: $.ServicesFramework(moduleId)
  }
  service.baseUrl = service.framework.getServiceRoot(service.path) + "Articles/";

  var init = function () {
    logView();
  }

  var logView = function () {
    var jqXHR = $.ajax({
      method: 'POST',
      url: service.baseUrl + 'IncreaseViewCount',
      beforeSend: service.framework.setModuleHeaders,
      data: { articleId: articleId},
      dataType: "json"
    }).done(function (data) {
      
    }).always(function (data) {
      
    });
  };

  return {
    init: init
  }
}