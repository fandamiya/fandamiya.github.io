var lis=document
    .getElementById("lun")
    .firstElementChild
    .children;
var num_list=document
    .getElementById("num_list")
    .firstElementChild
    .children;
var lun=document
    .getElementById("lun");
var i=0;
var timer;
function run(){
    timer=setInterval(function(){
        //停止计时器用clearIterval(timer);
        lis[i].removeAttribute("class");
        num_list[i]
            .firstElementChild
            .removeAttribute("class");
        i++;
        if(i>=lis.length){
            i=0;
        }
        lis[i].setAttribute("class","active")
        num_list[i].firstElementChild
            .setAttribute("class","active_num")
    },2000);

}
run();

lun.onmouseover=function(){
    clearInterval(timer);
};
lun.onmouseout=function(){
    run();
}

for(var j=0;j<num_list.length;j++){
    num_list[j]
        .firstElementChild
        .setAttribute("num",j);
    num_list[j].onmouseover=function(){
        lis[i].removeAttribute("class");
        num_list[i].firstElementChild
            .removeAttribute("class")
        clearInterval(timer);
        i=this.firstElementChild
            .getAttribute("num");
        lis[i].setAttribute("class","active")
        num_list[i].firstElementChild
            .setAttribute("class","active_num")
    }
}


$(window).scroll(function(){
    if($(window).scrollTop()>2000){
        $(".baibai").fadeOut(1000);
    }else{
        $(".baibai").fadeIn(1000);
    }

})

$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $(".tops").fadeIn(1000);
    }else{
        $(".tops").fadeOut(1000)
    }
    $(".tops a").click(function(){
        $("body").animate({"scrollTop":"0"},2000)
    })
})

