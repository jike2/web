/**
 * Created by Administrator on 2018/11/27.
 */
$(function(){
    var _type=BrowserType();
    var appvideo="";
    if(_type=="Chrome") {
        appvideo="<video autoplay loop muted poster='../img/bg.png'  id='bgvid'> " +
            "<source src='../video/m0725o4lq6n.p701.1.mp4' type='video/mp4'> " +
            "</video>";
    }else{
        appvideo="<video autoplay loop poster='../img/bg.png'  id='bgvid'> " +
            "<source src='../video/m0725o4lq6n.p701.1.mp4' type='video/mp4'> " +
            "</video>";
    }
    $("body").append(appvideo);
})
function BrowserType(){
    var userAgent=window.navigator.userAgent
    if(userAgent.indexOf('Edge')>-1){
        return 'Edge'
    }
    if(userAgent.indexOf('Firefox')>-1){
        return 'Firefox'
    }
    if(userAgent.indexOf('Chrome')>-1){
        return 'Chrome'
    }
    if(userAgent.indexOf('.NET')>-1){
        return 'IE'
    }
}
$(function(){
    setInterval(function(){
        $("#hr").css({color:"red"});
        $("#hr").css({marginLeft:"0px"});
        $("#hr").animate({marginLeft:"50px"});
        $("#hr").fadeOut();
        $("#hr").fadeIn();
    },1000);

})