$(function () {
     
    var temp = getSearch();
    console.log(temp);
    // id
    var categoryid = temp.categoryid;
    console.log(categoryid);
    
    // 获取产品名字
    var category = temp.category;
    console.log(category);    
    
    // 1.渲染导航条
    Route.getcategorybyid(categoryid,function(res){
        console.log(res);
        var html = template("tpl1" , res);
        $(".table").html(html);
        // var str = res.result[0].productName;
        // console.log(str);       
        // var arr = str.split(" ");

        // $(".nav span:nth-child(5)").text(arr[0]);
        // 跳转首页
        // $(".nav").on("click", "span:nth-child(1)" ,function () {
        //     location.href ="index.html"
        // })
        // 跳转分类页
        // $(".nav").on("click", "span:nth-child(3)" ,function () {
        //     location.href ="category.html"
        // })
    })

    // 2.渲染商品列表
    Route.getproductlist(categoryid, 1, function (data) {
        console.log(data);
        var html = template("tpl2", data);
        $(".product ul").html(html);
    })

    // 3.分页功能
    

})

// Tools.extend( {
//     /* 公共函数 query(url) 解析url 传的参数，变成对象键值对 */
//     query : function( url ) {
//         var obj = {};
//         var str = url.split('?')[1];
//         str.split('&').forEach(function( v, i ) {
//             var arr = v.split('=');
//             obj[arr[0]] = arr[1] ? arr[1] : '';
//         });
//         return obj;
//     }
// });