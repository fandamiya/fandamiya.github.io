$(function(){
    var i=0
    // 自定义一个函数，自动去轮播
    function run(){
        i++
        if(i==5){
            $("#pic").animate({"marginLeft":"0"},3000)
            i=0
        }else{
            // -=自身减一
            // +=自身加一
            $("#pic").animate({"marginLeft":-1260*i},3000)
        }
        $(".hehe li").eq(i).addClass("mini").siblings("li").removeClass("mini")

    }
    var timer=setInterval(run,3000)
    // 周期执行

    $(".hehe li").mouseenter(
        function(){
            // clearInterval停止执行

            clearInterval(timer)

            var n=$(this).index()
            $("#pic").animate({"marginLeft":-1260*n})
            $(".hehe li").eq(n).addClass("mini").siblings("li").removeClass("mini")

        })
    $(".hehe li").mouseleave(function(){
        timer=setInterval(run,3000)
    })

    //$(window).scroll(function(){
    //    if($(window).scrollTop()>100){
    //        $(".haha").fadeIn(1000);
    //    }else{
    //        $(".haha").fadeOut(1000)
    //    }
    //
    //})
    //
    //$(window).scroll(function(){
    //    if($(window).scrollTop()>100){
    //        $(".kaka").fadeIn(1000);
    //    }else{
    //        $(".kaka").fadeOut(1000)
    //    }
    //
    //})

    $(".img2 a").hover(function(){
        $(this).animate({"marginLeft":"20px"},200)
    },function(){
        $(this).animate({"marginLeft":"0px"},200)
    })



    /*$(".item").eq(1).css("display","none");
    $(".KK li").each(function(){
        var i=$(this).index();
        $(this).click(function(){
            $(".kk li").removeClass("cc")
            $(this).addClass("cc");
            $(".item").hide();
            $(".item").eq(i).show();
        })
    })*/
    $(".item").eq(1).css("display","none");
    $(".kk li:first-child").click(function(){
        $(".item").eq(0).show();
        $(".item").eq(1).hide();
    })
    $(".kk li:last-child").click(function(){
        $(".item").eq(1).show();
        $(".item").eq(0).hide();
    })
})
