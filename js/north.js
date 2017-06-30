"use strict";
//north.addEventListener("click",
//    function(e){
//        e.stopPropagation();
//        this.style.display="none";
//        pet.style.opacity="1";
//        chat.style.display="block";
//   });
//北方
    var timer=null,timer1=null;
    function random(){
        var ran=parseInt(Math.random()*2);
        switch(ran){
            case 0:$(".chat").html(`来一起玩啊 <a href="#">|&nbsp;&nbsp;菜单&nbsp;&nbsp;|</a>`);break;
            case 1:$(".chat").html(`我告诉你我可以做到很多事 <a href="#">|&nbsp;&nbsp;菜单&nbsp;&nbsp;|</a>`);break;
        }
    }
//打开小北方
    $("#north").click(function (e) {
        e.stopPropagation();
        $(this).hide();
        $("#pet").css("opacity",1);
        $(".chat").show().html(`突然出来吓死几只 <a href="#">|&nbsp;&nbsp;菜单&nbsp;&nbsp;|</a>`);
        timer=setInterval(random,5000)
    });
//关闭北方
    $("div.chatMenu .close").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(".chatMenu").hide();
        $(".chat").show().html(`有事在找我哦`);
        setTimeout(function () {
            $("#pet").css("opacity",0);
            $("#north").show();
        },500)
    });
//var close=seletor(".close");
//close.onclick=function(e){
//    e.stopPropagation();
//    pet.style.opacity="0";
//    north.style.display="block";
//    e.preventDefault();
//    chatMenu.style.display="none";
//};
//打开菜单
    $("div.chat").on("click","a",function(e){
        e.stopPropagation();
        e.preventDefault();
        clearInterval(timer);
        timer=null;
        $(".chatMenu>p").html("想做什么呢");
        $(".chatMenu").show();
        $(".chat").hide();
        timer1=setTimeout(function () {
            $(".chatMenu").hide();
            $(".chat").show();
            timer=setInterval(random,5000)
        },5000)
    });
//定时器
    $(".chatMenu").mouseenter(function () {
        clearTimeout(timer1);
        timer1=null;
    });
//关闭菜单
    $(".chatMenu").mouseleave(function () {
        timer1=setTimeout(function () {
            $(".chatMenu").hide();
            $(".chat").show();
            timer=setInterval(random,5000)
        },5000)
    });
//跳转登录
    $("div.chatMenu a.login").click(function (e) {
        e.preventDefault();
        $(".chatMenu").hide();
        $(".chat").show().html("马上就跳转过去啦");
        setTimeout(function () {
            location.href="login.html";
        },1000)
    });
//切换背景
    function bg(num){
        $("body").css("backgroundImage",`url("images/background/body_bg_${num}.jpg")`);
    }
    $("div.chatMenu a:contains('切换背景')").click(function (e) {
        e.preventDefault();
        $(".chatMenu>p").html("哪个更好看呢");
        var url=$("body").css("backgroundImage");
        var i1=url.lastIndexOf("_");
        var i2=url.lastIndexOf(".");
        var bgNum= url.slice(i1+1,i2);
        while(1){
            var num=parseInt(Math.random()*12);
            if(num!=bgNum){
                bg(num);
                break;
            }
        }
    });
//播放或者暂停音乐
+function () {
    $("div.chatMenu a:contains('播放音乐')").click(function (e) {
        e.preventDefault();
        $("div.list li.index>audio")[0].play();
    })
    $("div.chatMenu a:contains('暂停音乐')").click(function (e) {
        e.preventDefault();
        $("div.list li.index>audio")[0].pause();
        $("i.pause").removeClass("pause").addClass("play")
    })
}();
//var a=seletor(".chat>a");
//var chatMenu=seletor(".chatMenu");
//a.onclick=function(e){
//    chatMenu.style.display="block";
//    chat.style.display="none";
//    e.stopPropagation();
//    e.preventDefault();
//};
//移动小北方,待处理
    +function () {
        $("#pet").children().each(function (i) {
            $(this).mousedown(function(e){
                var oX= e.clientX-pet.offsetLeft,
                   oY= e.clientY-pet.offsetTop;
                //var oX= e.offsetX,oY= e.offsetY;
                $(document).mousemove(function (e) {
                    $("#pet").css({
                        "left": e.clientX-oX+"px",
                        "top": e.clientY-oY+"px"
                    })
                });
                $(document).mouseup(function () {
                    $(document).unbind("mousemove");
                    $(document).unbind("mouseup")
                })
            })
        })
    }();
    /*
     var width=264,height=150;
     function move(e){
     var x= e.clientX,y= e.clientY;
     var left=x-width/ 2,
     top=y-height/2;
     pet.style.cssText="top:"+top+"px;"+"left:"+left+"px;";
     }
     pet.addEventListener("mousedown",function(){
     pet.addEventListener("mousemove",move);
     }
     );
     pet.addEventListener("mouseup",function(){
     pet.removeEventListener("mousemove",move)
     });
     */
//返回顶部妹纸出现
//window.onscroll=function(){
//    if(document.body.scrollTop>450){
//        toTop.style.marginLeft="1030px";
//    }
//    if(document.body.scrollTop<200){
//        toTop.style.marginLeft="915px";
//
//    }
//};
    +function () {
        $(window).bind("scroll", function () {
            var $top=$(window).scrollTop();
            if($top<450){
                $(".toTop-wrapper").removeClass("active").addClass("hidden")
            }
            else if($top>550){
                $(".toTop-wrapper").removeClass("hidden").addClass("active")
            }

        });
    }();
//返回顶部
    $("#toTop").click(function () {
        $("body,html").animate({
            scrollTop:0
        },400);
    });

//选择背景
//雪花背景
//登录注册
