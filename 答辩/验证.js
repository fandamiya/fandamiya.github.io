/**
 * Created by lenovo on 17/6/22 022.
 */
function checkEmail(){
    var text=document.myform.txtmail.value;
    if(text.length==0){
        alert("用户名不能为空")
        return false;
    }
    if(text.indexOf("@")==-1){
        alert("格式不正确")
        return false;
    }
    if(text.indexOf(".")==-1){
        alert("格式不正确呀")
        return false;
    }
    return false;
}

