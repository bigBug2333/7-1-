$(function () {
    Route.getinlanddiscount(function (res) {
        console.log(res);
        var html = template("tpl", res);
        $(".mmm_content ul").html(html);
    })
})