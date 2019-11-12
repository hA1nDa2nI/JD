$(function() {
    $(".nav>li").mouseover(function() {
        $(this).children(".dropdown-layer").show();
    });
    $(".nav>li").mouseout(function() {
        $(this).children(".dropdown-layer").hide();
    });

    $("#navi li").mouseover(function() {
        $(".content").show();
        var index = $(this).index();
        $(".content>div").eq(index).show().siblings().hide();
    })
    $("#navi li").mouseout(function() {
        $(".content").hide();
    })

    $(".news-t a").mouseover(function() {
        var index = $(this).index();
        $(".news-b ul").eq(index).show().siblings().hide();
        $(".redline").eq(index).show().siblings('.redline').hide();
    })

    var index=3;
    $(".circle li").mouseover(function() {
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".t-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    })

    var time=setInterval(move,2000);
    function move() {
        index++;
        if (index==4){
            index=0
        }
        $(".circle li").eq(index).addClass("current").siblings().removeClass("current");
        $(".t-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    };
    $(".grid-col2-t").hover(function () {
        clearInterval(time);
    },
    function () {
        time=setInterval(move,2000);
    });
    $(".arrow-r").click(function () {
       move();
    });
    function moveL() {
        index--;
        if (index==-1){
            index=3;
        }
        $(".circle li").eq(index).addClass("current").siblings().removeClass("current");
        $(".t-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    }
    $(".arrow-l").click(function () {
        moveL();
    });
});