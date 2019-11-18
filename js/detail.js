$(function() {
    $(".list_item li").mouseover(function() {
        $(this).addClass("current").siblings().removeClass("current");
        $(".preview_img img").attr('src',$(this).children("img")[0].src);
    });
    $(".choose_color a").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });
    $(".choose_version a").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });
    $(".choose_type a").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });

    $(".reduce").mouseover(function() {
        if ($(".choose_amount input[type='text']").val() <= 1) {
            $(".reduce").css("cursor","not-allowed");
        }
        else {
            $(".reduce").css("cursor","pointer");
        }
    });
    $(".reduce").click(function() {
        if ($(".choose_amount input[type='text']").val() <= 1) {
            $(".reduce").css("cursor","not-allowed");
        }
        else {
            $(".reduce").css("cursor","pointer");
            num =  $(".choose_amount input[type='text']").val();
            $(".choose_amount input[type='text']").val(num-1);
        }
    });
    $(".add").click(function() {
        num =  $(".choose_amount input[type='text']").val();
        $(".choose_amount input[type='text']").val(Number(num)+1);
    });

    $(".tab_list li").mouseover(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });

    $(".detail_tab_list li").mouseover(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });
});