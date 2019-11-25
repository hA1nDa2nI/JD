$(function() {
    $(".cart-list ul").mouseover(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".cart-th input[type='checkbox']").click(function() {
        if (this.checked) {
            $(".yui3-u-3-8 input[type='checkbox']").prop("checked",true);
        }
        else {
            $(".yui3-u-3-8 input[type='checkbox']").prop("checked",false);
        }
        me_sum();
    });
    
    $(".good-checkbox").click(function() {
        me_sum();
        var flag = true;
        for (var i = 0; i < $(".good-checkbox").length; i++) {
            if (! $(".good-checkbox")[i].checked) {
                flag = false;
                break; 
            }
        }
        $(".cart-th input[type='checkbox']").prop("checked",flag);
    });
    $(document).ready(function(){  
        me_sum();
    }); 
    function me_sum() {
        var sum = 0;
        for (var i = 0; i < $(".goods-list").length; i++) {
            if ($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html() == undefined) {
                console.log($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html());
                continue;
            }
            else if (! $(".good-checkbox")[i].checked) {
                continue;
            }
            else {
                sum = sum + Number($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html());
            }
        }
        console.log(sum);
        $(".summoney span").html(sum.toFixed(2));
    };
    $(".goods-list .plus").click(function() {
        var num = $(this).siblings(".itxt").val();
        var m = $(this).siblings(".itxt").val(Number(num)+1).val();
        var sum = ($(this).parent().parent().siblings(".yui3-u-1-8").eq(1).children(".price").html() * m).toFixed(2);
        $(this).parent().parent().siblings(".yui3-u-1-8").eq(2).children(".sum").html(sum);
        me_sum();
    });
    $(".goods-list .mins").mouseover(function() {
        if ($(this).siblings(".itxt").val() <= 1) {
            $(this).css("cursor","not-allowed");
        }
        else {
            $(this).css("cursor","pointer");
        }
    });
    $(".goods-list .mins").click(function() {
        if ($(this).siblings(".itxt").val() <= 1) {
            $(this).css("cursor","not-allowed");
        }
        else {
            $(this).css("cursor","pointer");
            num =  $(this).siblings(".itxt").val();
            $(this).siblings(".itxt").val(num-1);
            var m = $(this).parent().parent().siblings(".yui3-u-1-8").eq(1).children(".price").html();
            var sum = $(this).parent().parent().siblings(".yui3-u-1-8").eq(2).children(".sum").html();
            $(this).parent().parent().siblings(".yui3-u-1-8").eq(2).children(".sum").html((sum - m).toFixed(2));
            me_sum();
        }
    });
    $(".del1 a").click(function() {
        $(this).parent().parent().siblings().remove();
        $(this).parent().parent().remove();
        $(this).closest('.goods-list').remove();
        me_sum();
    });
});