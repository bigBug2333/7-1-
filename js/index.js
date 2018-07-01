$(function () {
    // 1.滚动事件

    // 2.发送ajax，渲染数据，
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        success: function (info) {
          console.log(info);
          var html = template("tpl", info);
          $(".recommend ul").html(html);
        }
    })
    // 3.点击导肮区域

        $(".subnav li:nth-last-child(-n+4)").prev().on("click", function () {
            $(this).next().toggle();
            $(this).next().next().toggle();
            $(this).next().next().next().toggle();
            $(this).next().next().next().next().toggle();
        });

    // 4.返回顶部事件
        $(".back").on("click", function () {
            $("html,body").prop("scrollTop", 0);
        })

})