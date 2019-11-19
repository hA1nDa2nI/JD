$(function() {
    $(".login-tab li").click(function() {
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".mc").eq(index).show().siblings('.mc').hide();
    })
});