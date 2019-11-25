$(function() {
    $(".preview_img").mouseover(function(e) {
        $(this).children(".mask").show();
        $(this).children(".big").show();
    });
    $(".preview_img").mouseout(function() {
        $(this).children(".mask").hide();
        $(this).children(".big").hide();
    });
    $(".preview_img").mousemove(function(e) {
        var x = e.pageX -  this.offsetLeft;
        var y = e.pageY -  this.offsetTop;
        var maskX = x - parseInt($(this).children(".mask").css("width")) / 2;
        var maskY = y - parseInt($(this).children(".mask").css("height")) / 2;
        var maskMax = parseInt($(this).css("width")) - parseInt($(this).children(".mask").css("width"));
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        $(this).children(".mask").css("left" , maskX + 'px');
        $(this).children(".mask").css("top" , maskY +'px');
        var bigMax = parseInt($(".bigimg").css("width")) - parseInt($(".big").css("width"));
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        $(".bigimg").css("left" , -bigX + 'px');
        $(".bigimg").css("top" , -bigY + 'px');
    });
    $(".list_item li").mouseover(function() {
        $(this).addClass("current").siblings().removeClass("current");
        $(".preview_img img").attr('src',$(this).children("img")[0].src);
        $(".big img").attr('src',$(this).children("img")[0].src);
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

    $(".detail_tab_list li").click(function() {
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".item").eq(index).show().siblings().hide();
    });
});