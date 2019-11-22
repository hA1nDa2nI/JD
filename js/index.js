$(function() {
    $(document).ready(function() {
        countdown();
        setInterval(countdown, 1000);
    });
    function countdown() {
        var nowtime = +new Date();
        var inputtime = +new Date('2019-11-22 24:00:00');
        var times = (inputtime - nowtime) / 1000;
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        $(".hour").html(h);
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        $(".minute").html(m);
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        $(".second").html(s);
    };

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

    var time = setInterval(move,2000);
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

    $(".fixedtool li").mouseover(function() {
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
    });
});