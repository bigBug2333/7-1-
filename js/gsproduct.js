$(function() {
  // 导航栏一级坑
  var shopid = 0;
  var areaid = 0;
  rander();
  Route.getgsshop(function(res) {
    console.log(res);
    var html = template("tpl1", res);
    $(".first").html(html);
    // 导航栏二级坑
    $(".first").on("click", "a", function() {
      shopid = $(this).data("shopid");
      console.log(shopid);
      rander();
    });
  });

  Route.getgsshoparea(function(res) {
    console.log(res);
    var html = template("tpl2", res);
    $(".second").html(html);
    // 导航栏二级坑
    $(".second").on("click", "a", function() {
      areaid = $(this).data("areaid");
      console.log(areaid);
      rander();
    });
  });

  function rander() {
    Route.getgsproduct(shopid, areaid, function(res) {
      console.log(res);
      var html = template("tpl3", res);
      $(".product ul").html(html);
    });
  }
});
