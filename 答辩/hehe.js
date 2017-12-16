/**
 * Created by lenovo on 17/6/22 022.
 */
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
            $("#pic").animate({"marginLeft":-500*i},3000)
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
            $("#pic").animate({"marginLeft":-500*n})
            $(".hehe li").eq(n).addClass("mini").siblings("li").removeClass("mini")

        })
    $(".hehe li").mouseleave(function(){
        timer=setInterval(run,3000)
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".haha").fadeIn(1000);
        }else{
            $(".haha").fadeOut(1000)
        }

    })

    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".kaka").fadeIn(1000);
        }else{
            $(".kaka").fadeOut(1000)
        }

    })

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


function calc(btn){
    //让n加一或减一
    //通过btn的父元素找到span元素，保存变量span中，获取span中的内容保存在变量n中
    var span=btn.parentElement
        .querySelector("span")
    var n=span.innerHTML;
    //如果btn的内容是"+",就让n+1
    //否则如果n>1,就n--,否则n=1

    if(btn.innerHTML=="+"){
        n++;
    }else if(n>1){
        n--
    }else{
        n=1
    }
    //设置span的内容为n
    span.innerHTML=n;


//第二部，让每行的小计变化
    //找到btn父元素的前一个兄弟元素的内容并截取出数字保存在变量price中
    var price=btn.parentElement.parentElement.lastElementChild.innerText.slice(1);
//console.log(price)

    //声明subtotal表示小计，subtotal=price*n
    var subtotal=+(price)*n;
    console.log(subtotal)
    //找到btn的父元素的下一个兄弟元素并设置内容为“&yen;”+subtotal.toFixed(2)
    btn.parentElement
        .nextElementSibling
        .nextElementSibling
        .nextElementSibling
        .innerHTML="&yen;"+subtotal
            .toFixed(2)

    //计算机总价
    //获取tbody中每行最后一个td保存在tds中
//    var td=tbody.lastElementChild
//           var tds=td.innerHTML
    var tds=document
        .querySelectorAll("tbody tr td:last-child")

    //遍历tds
    for(var d=0,total=0;d<tds.length;d++){

        //tds+=tds[i]的内容并截取获得到数字
        total+=
            parseFloat(tds[d].innerHTML.slice(1))
        console.log(typeof(total));
    }

    //遍历结束
    //设置tfoot中最后一个td的元素内容为
    //"&yen;"+total.toFixed(2)


    //
    //document
    //    .querySelector("tfoot tr td:last-child")
    //    .innerHTML="&yen;"+subtotal.toFixed(2)
    //



}

$("#dada").click(function(){
        alert("添加成功，感谢入住")
    })






//function calc(btn){
//
//    var span=btn.parentElement
//        .querySelector("tr span")
//    var n=span.innerHTML;
//
//    if(btn.innerHTML=="+"){
//        n++;
//    }else if(n>1){
//        n--
//    }else{
//        n=1
//    }
//
//    span.innerHTML=n;
//
//    //var price=btn.parentElement.previousElementSibling.innerHTML.slice(1);
//    var price=$('.prc').html();
//    var subtotal=price*n;
//    price.innerHTML=pri
//
//    var tds=document
//        .querySelectorAll("tbody tr td:last-child")
//
//
//    for(var c=0,total=0;c<tds.length;c++){
//
//
//        total+=
//            parseFloat(tds[c].innerHTML.slice(1))
//        console.log(typeof(total));
//    }
//
//    document
//        .querySelector("tfoot tr td:last-child")
//        .innerHTML="&yen;"+total.toFixed(2)
//}