$(function() {
    $(".nav>li").mouseover(function() {
        $(this).children(".dropdown-layer").show();
    });
    $(".nav>li").mouseout(function() {
        $(this).children(".dropdown-layer").hide();
    });
    $(".close-btn").click(function() {
        $(this).hide().siblings("img").hide();
    });
});