$(function () {
    var temp = getSearch();
    var couponid = temp.couponid;
    console.log(couponid);
    Route.getcouponproduct( couponid, function (res) {
        console.log(res);
        var html = template("tpl", res);
        $(".mmm_content ul").html(html);
    })
})