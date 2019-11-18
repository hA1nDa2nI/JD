$(function() {
    $(".sk_list li").mouseover(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });
    $(".page_num a").mouseover(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });
});