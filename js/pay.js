$(function() {
    $(".kuaidi li").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
        $(".me-bb i").html($(this).children("span").html())
    });
    $(".m-pay li").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });
    $(".me-commit").click(function() {
    	alert("提交成功!");
    });
});