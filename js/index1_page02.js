/**
 * ��ʼ����ǩ�����ı���
 */
function initTabBg() {
    $('#mien_tab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        bgSync(e.target);
    });
}

/**
 * ����ͬ��
 * @param  {ele} tab ��Ҫͬ���ı�ǩ
 */
function bgSync(tab) {
    var id = $(tab).attr('href');
    var img = $(id).find('.img').css('background-image');
    $('#mien_tab .bg').css('background-image', img);
}

/**
 * ��ǩҳ�����л�
 */
var isHoving
function tabFastSwitch() {
    $('.tab-fast-switch').hover(function () {
        var t = $( this )
        if(isHoving) return
        isHoving = true
        setTimeout(function () {
            t.tab('show')
            isHoving = false
        }, 300)
        // console.log('this.', $(this))
    })
    // $('.tab-fast-switch').on('mouseover', function() {
    // 	$(this).tab('show');
    // })
}

$(function() {
    //tabFastSwitch();
    initTabBg();
});