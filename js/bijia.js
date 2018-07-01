$(function () {
    var id = location.search.slice(11);
    console.log(id);

    var temp=getSearch();
    console.log(temp);
    
    // 1.面包屑
    Route.getproduct(id,function(res){
        console.log(res);
        var html = template("tpl1" , res);
        $(".mainnav").html(html);


        var str = res.result[0].productName;
        console.log(str);       
        var arr = str.split(" ");
        console.log(arr);
        
        $(".left span:nth-child(5)").text(arr[0]);
        // 跳转首页
        $(".left").on("click", "span:nth-child(1)" ,function () {
            location.href ="index.html"
        })
        // 跳转分类页
        $(".left").on("click", "span:nth-child(3)" ,function () {
            location.href ="category.html"
        })
    })

    // 2.商品模板
    Route.getproduct(id,function(res) {
        console.log(res);
        var html = template("tpl2" , res);
        $(".product").html(html);
    })

    // 3.评价模块
    Route.getproductcom(id,function(res) {
        console.log(res);
        var html = template("tpl3" , res);
        $(".eval ul").html(html);
    })
})