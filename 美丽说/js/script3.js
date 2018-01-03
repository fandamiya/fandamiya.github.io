/**
 * Created by lenovo on 18/1/3 003.
 */
$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $(".top").fadeIn(1000);
    }else{
        $(".top").fadeOut(1000)
    }
    $(".top img").click(function(){
        $("body").animate({"scrollTop":"0"},2000)
    })
})