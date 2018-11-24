/**
 * Created by Administrator on 2018/11/24.
 */
var arr=["timg1.jpg","timg2.jpg","timg3.jpg"];
var ord = 0;//����ǰͼƬ����ţ���0��ʼ��
var myTimer = null;

function  initUI() {
    $("#box li:first").css({"backgroundColor":"red"});
}

function  initEvent() {
    $("#box").mouseenter(function () {
        stopPlay();
    });

    $("#box").mouseleave(function () {
        autoPlay();
    });

    $("#box li").click(function () {
        goImg($("#box li").index(this));
    });

    $("#leftArrow").click(function () {
        let transord =ord-1;
        transord = transord<0?arr.length-1:transord;
        goImg(transord);
    });

    $("#rightArrow").click(function () {
        let transord =ord+1;
        transord = transord>arr.length-1?0:transord;
        goImg(transord);
    });
}

//1���Զ�����
function autoPlay() {
    myTimer = setInterval(function () {
        //һ���ı�����
        // 1����¼��ǰ��ţ�������ͼƬ��ţ�
        let outOrd = ord;
        //2���ı�Ҫ��ʾ��ͼƬ����ţ�����ͼƬ��ż�һ��
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }
        //�����ı����
        let $img = $("#box img");
        //1�����뵭��Ч��
        //��һ��(outOrd)���� ��ǰ��ʧ
        $img.eq(outOrd).animate({"opacity":0},2000);
        //��һ��(ord)������һ��ͼƬ��ʾ
        $img.eq(ord).animate({"opacity":1},2000);
    },3000);
}

//2��ֹͣ����
function stopPlay() {
    window.clearInterval(myTimer);
}

//3����ת��ָ����ͼƬ
function  goImg(transOrd) {
    //һ���ı�����
    // 1����¼��ǰ��ţ�������ͼƬ��ţ�
    let outOrd = ord;
    //2���ı�Ҫ��ʾ��ͼƬ����ţ������ͼƬ��ţ�
    ord=transOrd;
    if(ord>arr.length-1){
        ord=0;
    }
    //�����ı����
    let $img = $("#box img");
    //1�����뵭��Ч��
    //��һ��(outOrd)���� ��ǰ��ʧ
    $img.eq(outOrd).animate({"opacity":0},2000);
    //��һ��(ord)������һ��ͼƬ��ʾ
    $img.eq(ord).animate({"opacity":1},2000);
    //2���ı䶹������ɫ��
    $("#box li").eq(ord).css({"backgroundColor":"red"}).siblings().css({"backgroundColor":"orange"});
}

$(function () {
    //1����ʼ������
    initUI();
    //2�����¼�
    initEvent();
    //3���Զ�����
    autoPlay();
});