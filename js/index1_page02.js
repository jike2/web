///**
// * Created by Administrator on 2018/11/27.
// */
///**
// * 标签页快速切换
// */
//var isHoving
//function tabFastSwitch() {
//    $('.tab-fast-switch').hover(function () {
//        var t = $( this )
//        if(isHoving) return
//        isHoving = true
//        setTimeout(function () {
//            t.tab('show')
//            isHoving = false
//        }, 300)
//        // console.log('this.', $(this))
//    })
//    // $('.tab-fast-switch').on('mouseover', function() {
//    // 	$(this).tab('show');
//    // })
//}
//
//$(function() {
//    tabFastSwitch();
//});
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
    tabFastSwitch();
});