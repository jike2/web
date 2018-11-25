/**
 * Created by Administrator on 2018/11/25.
 */
$('.cn-collapse').on('mouseover', function() {
    $(this).addClass('active').siblings('.cn-collapse').removeClass('active');
});
