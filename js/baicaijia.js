$(function() {
    // 导航栏的滚动
    // var titleid;
  Route.getbaicaijiatitle(function(res) {
    console.log(res);
    var html = template("tpl1", res);
    $(".nav ul").html(html);

    Route.getbaicaijiaproduct(0,function(res) {
      console.log(res);
      var html = template("tpl2", res);
      $(".product").html(html);
    })  
    $(".nav ul").on("click", "li", function () {
      var titleid = $(this).data("titleid");
      //   商品详情
      Route.getbaicaijiaproduct(titleid,function(res) {
        console.log(res);
        var html = template("tpl2", res);
        $(".product li").html(html);
      })  
    }) 
  });

 















      // var titleid = res.result[0].titleId;
    // new IScroll(".nav ul", {
    //     scrollY:false,
    //     scrollX:true
    // });




//   });
});
