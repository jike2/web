/**
 * Created by Administrator on 2018/11/25.
 */
var slideshow=document.getElementById("index_page02_box");
//       obj����ͼ����±�λ��
function move(obj){
    var temp=80*(-obj);
    slideshow.style.transform="translateX("+temp+"vw)";
//            ˢ�±�־λ
    flag=obj;
}