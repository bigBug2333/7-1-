$(function () {

    var totalCount; //每一项总共有多少数据
    var pageid = 0; //页码初始是1 这样直接能加载点击元素的第一页了
    var selectNum; //每类一共有几页存个全局变量


    Route.getmoneyctrl(pageid, function (res) {
        console.log(res);
        var html = template("tpl", res);
        $(".product ul").html(html);
    })

    $(".pageUp").on("click",function(){
        pageid--;
        if (pageid < 0) {
            return;
        }
        Route.getmoneyctrl(pageid, function (res) {
            var html = template("tpl", res);
            $(".product ul").html(html);
        })
        $("#selectPage").val(pageid)
    })

    $(".pageDown").on("click",function(){
        pageid++;
        Route.getmoneyctrl(pageid, function (res) {
            var html = template("tpl", res);
            $(".product ul").html(html);
        })
        $("#selectPage").val(pageid)
    })

    $("#selectPage").val();

    $("#selectPage").on("change",function(){
       pageid = $("#selectPage").val()
        console.log(pageid);
        Route.getmoneyctrl(pageid, function (res) {
            var html = template("tpl", res);
            $(".product ul").html(html);
        })
    })


    function renderPage(pageid) {
        Route.getmoneyctrl(pageid, function (res) {
            var html = template("tpl", res);
            $(".product ul").html(html);
        })
    }
})