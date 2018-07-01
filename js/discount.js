$(function () {

    var temp = getSearch();
    var productid = temp.productid;
    console.log(productid);
    // 1.商品坑
    Route.getdiscountproduct(productid, function (res) {
        console.log(res);
        var html = template("tpl1", res);
        $(".desc").html(html);

        $(".pp img").attr("align", "right")
        $(".pp img").attr("hspace", 5)
        $(".pp img").attr("vspace", 5)
    })

    // 2.评价坑
    // Route.getmoneyctrlproduct(productid, function (res) {
    //     console.log(res);
    //     var html = template("tpl2", res);
    //     $(".push").html(html);
    //     console.log(res.result[0].productComment);
    // })
})