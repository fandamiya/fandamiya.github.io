

$(function(){
    var c=0

    function run(){
        c++
        c = (c==8) ? 0 : c;
        $("#pic img").eq(c).fadeIn(500).siblings("img").fadeOut(1000)
        $(".hehe li").eq(c).css({'fontWeight':'bold'}).siblings("li").css({'fontWeight':'200'})
    }
    //setInterval 周期执行
    var timer=setInterval(run,2500)
    $(".hehe li").mouseenter(function(){
        clearInterval(timer)
        c=$(this).index()

        $("#pic img").eq(c).fadeIn(500).siblings("img").fadeOut(500)
        $(".hehe li").eq(c).css({'fontWeight':'bold'}).siblings('li').css({'fontWeight':'200'})
    })
    $('.hehe li').mouseleave(function(){
        timer=setInterval(run,2500)

    })
})