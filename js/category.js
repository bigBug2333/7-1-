$(function() {
  Route.getcategorytitle(function(res) {
    console.log(res);
    // 渲染一级分类
    $(".model").html(template("tpl1", res));
    // 获取分类
    var data = res.result;
    // 遍历一级分类
    data.forEach(function(v, i) {
      Route.getcategory(v.titleId, function(info) {
        // 遍历二级分类
        $(".second").each(function(index) {
          // 如果下标等于数组的titleId
          if(index === info.result[0].titleId){
            // 渲染二级分类
            console.log(info);
            
            $(this).html(template("tpl2", info))
            console.log(v._id);
            
          }
        });
      });
    });
  });
  $(".model").on("click", ".table", function() {
    $(this)
      .next()
      .toggle();
  });
});

