/**
 * Created by Administrator on 2018/11/25.
 */
var slideshow=document.getElementById("index_page02_box");
//       obj代表图标的下标位置
function move(obj){
    var temp=80*(-obj);
    slideshow.style.transform="translateX("+temp+"vw)";
//            刷新标志位
    flag=obj;
}