$(function () {
    //-----------------------------------register注册----------------------------------------
   $("#submit").on("click",function (event) {
       event.preventDefault();
       // console.log(typeof $('#Rname').val.toString())
       $.ajax({
           url:"http://datainfo.duapp.com/shopdata/userinfo.php",
           type:"get",
           dataType:"json",
           data:{
               status:'register',
               userID:$('#Rname').val(),
               password:$('#Rpassword').val()
           }
       })
           .done(function (info) {
               console.log(info+"成功");
           })
           .fail(function (info) {
               console.log(info+"失败");
           })
           /*.always(function (info) {
               console.log(info+"complete");
           })*/
   });
    //-----------------------------------login登录----------------------------------------
    $("#loginBtn").on("click",function (event) {
        event.preventDefault();
        // console.log(typeof $('#Rname').val.toString())
        $.ajax({
            url:"http://datainfo.duapp.com/shopdata/userinfo.php",
            type:"get",
            dataType:"json",
            data:{
                status:"login",
                userID:$('#name').val(),
                password:$('#password').val()
            }
        })
            .done(function (info) {
                console.log(info);
                localStorage.setItem("site", $('#name').val());
            })
            .fail(function (info) {
                console.log(info);
            })
    });
    //-----------------------------------用户名保存-------------------------------------------
    var site = localStorage.getItem("site");
    $(".buyBike>span").text(site).css("color","#fff");
    
    //-----------------------------------首页获取商品列表----------------------------------------
    $(document).ready(function () {
            $.ajax({
            url:"http://datainfo.duapp.com/shopdata/getGoods.php",
            dataType:"JSONP",
          
            success:function (data) {
                var i = 0;
                for( i in data){
                    // console.log(data[i]);
                    var nameView = $("<div class='container'></div>");
                    $(".goodsList").append(nameView);
                    $(".container").eq(i).append("<p class='txt'></p><img src='' class='pic'/>");
                    $(".container").eq(i).append("<span class='price'></span>");
                    $(".container").eq(i).append("<span class='discount'></span>");
                    $(".container").eq(i).append("<div class='buy'></div>");

                    $('.txt').eq(i).text(data[i].goodsName);
                    $('.pic').eq(i).attr("src",data[i].goodsListImg);
                    $('.price').eq(i).text("￥"+data[i].price);
                    $('.discount').eq(i).text(data[i].discount+"折");
                    $(".buy").eq(i).attr("goodsID",data[i].goodsID);

                        $(".buy").eq(i).click(function () {
                             localStorage.setItem("b1",data[i].goodsName );
                        })
                }

                // console.log(data);
            },
            error:function (data) {
                alert("错误！");
            }
        });
    });
   /*------------------------------------购物车信息显示-----------------------------------------*/



    var b1 = localStorage.getItem("b1");
    $(".B").text(b1).css("color","red");

    //-----------------------------------分类页面信息获取----------------------------------------
    $(document).ready(function () {
        $.ajax({
            url:"http://datainfo.duapp.com/shopdata/getclass.php",
            dataType:"JSON",

            success:function (data) {
                var i = 0;
                for( i in data){
                    // console.log(data[i]);
                    $(".classIfy").append("<li class='classIfys'><a></a></li>");
                    $('.classIfys').eq(i).text(data[i].className);
                }
                 console.log(data);
            },
            error:function (data) {
                alert("错误！");
            }
        });
    })

    $(".empty").click(function () {
        $(".buyBike>span").empty();
    })
});