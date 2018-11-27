/**
 * 初始化标签那栏的背景
 */
function initTabBg() {
    $('#mien_tab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        bgSync(e.target);
    });
}

/**
 * 背景同步
 * @param  {ele} tab 需要同步的标签
 */
function bgSync(tab) {
    var id = $(tab).attr('href');
    var img = $(id).find('.img').css('background-image');
    $('#mien_tab .bg').css('background-image', img);
}

/**
 * 标签页快速切换
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