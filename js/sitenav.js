$(function () {
    Route.getsitenav(function (res) {
        console.log(res);
        var html = template("tpl", res);
        $(".slogo ul").html(html);
    })
})