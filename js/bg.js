"use strict";
+function () {
    $(".modal").on("click","img", function () {
        var src=$(this).attr("src");
        $("body").css({
            "backgroundImage":"url("+src+")"
        });
        $(".modal").hide();
    });
    $("button.close").click(function (e) {
        e.stopPropagation();
        $(".modal").hide();
    });
//modal.addEventListener("click",function(e){
//    var img=e.target;
//    if(img.nodeName=="IMG"){
//        var src=img.src;
//        document.body.style.backgroundImage="url("+img.src+")";
//        modal.style.display="none";
//    }
//    if(img.nodeName=="BUTTON"){
//        modal.style.display="none";
//    }
//});
    ($("button[title='选择背景']")).click(function () {
        $(".modal").show();
    });
//var btns=document.getElementsByTagName("button");
////选择背景
//btns[0].onclick=function(){
//    console.log(btns[0]);
//    modal.style.display="block";
//}

//查看选择
    +function () {
        //$("button.one").click(function () {
        //    $("div.view>button").removeClass("current");
        //    $(this).addClass("current");
        //    $("#thumnail").removeClass().addClass("one")
        //})
        $("div.view").on("click","button", function (e) {
            if($(e.target).hasClass("current")){
                return
            }
            else{
                $("div.view>button").removeClass("current");
                $(this).addClass("current")
                $("#thumnail").removeClass();
                if($(this).hasClass("one")){
                    $("#thumnail").addClass("one")
                }
                else if($(this).hasClass("img")){
                    $("#thumnail").addClass("img")
                }
                else if($(this).hasClass("two")){
                    $("#thumnail").addClass("two")
                }
            }
        })
    }()
}();
//查看选择的各有效果动画
+function () {
    $("#thumnail").on("mouseenter",".thumnail", function () {
        if($("#thumnail").hasClass("one")){
            $(this).addClass("hover")
        }
    })
    $("#thumnail").on("mouseleave",".thumnail", function () {
        if($("#thumnail").hasClass("one")){
            $(this).removeClass("hover")
        }
    })
}();
//音乐播放
+function () {
    var i=1;
    $("div.btnGroup").on("click","i", function () {
        if($(this).hasClass("play")){
            $(this).removeClass("play").addClass("pause");
            $("div.list li.index>audio")[0].play();
        }
        else if($(this).hasClass("pause")){
            $(this).removeClass("pause").addClass("play");
            $("div.list li.index>audio")[0].pause();
        }
        else if($(this).hasClass("s_list")){
            $("div.list").slideToggle("fast");
        }
        else if($(this).hasClass("next")){
            ++i&&i>3&&(i=1);
            $("div.list li.index").removeClass("index").find("u.cur").removeClass("cur").nextAll("audio").removeClass("index")[0].load();
            $(`div.list li:nth-child(${i})`).addClass("index").find("u").addClass("cur").nextAll("audio").addClass("index")[0].play();
        }
        else if($(this).hasClass("prev")){
            --i;
            i<1&&(i=3);
            $("div.list li.index").removeClass("index").find("u.cur").removeClass("cur").nextAll("audio").removeClass("index")[0].load();
            $(`div.list li:nth-child(${i})`).addClass("index").find("u").addClass("cur").nextAll("audio").addClass("index")[0].play();
        }
        var html=$("div.list li.index").find("span.nm").html();
        $("h3.title").html(html)
    });
    $("div.list").on("click","li", function () {
        if($(this).hasClass("index")){
            return
        }
       else{
            i=parseInt($(this).find("span").html());
            $("div.list li.index").removeClass("index").find("u.cur").removeClass("cur").nextAll("audio").removeClass("index")[0].load();
            $(this).addClass("index").find("u").addClass("cur").nextAll("audio").addClass("index")[0].play();
        }
        var html=$("div.list li.index").find("span.nm").html();
        $("h3.title").html(html)
    });
}();
+function () {
    var left=0;
    setInterval(function () {
        $("h3.title").css("left",left+"px");
        left-=1;
        left<-160&&(left=120)
    },40)
}();
+function () {
    var audios=document.getElementsByTagName("audio");
    for(var i= 0,len=audios.length;i<len;i++){
        audios[i].onplay= function () {
            $("i.prev").next().removeClass().addClass("pause");
        }
    }
}();
//预览图
+function () {
    $("#thumnail").on("mouseenter","a.preview", function (e) {
       if($("#thumnail").hasClass("one")){
           var src=$(this).find("img").attr("src");
           $("div.imgPreview").show();
           $("div.imgPreview img").attr("src",src);
           var x= 0,y= 0;
           $("#thumnail").on("mousemove","a.preview", function () {
               x= e.clientX;y= e.clientY;
               $("div.imgPreview").css("left",x+50);
               if(y+500>window.innerHeight){
                   y=100;
                   $("div.imgPreview").css("top",y);
               }


           });
          //     $(this).mousemove(function () {
          //     $("div.imgPreview").css({
          //       left:x,
          //        top:y
          //    });
          //});
       }
        else{
          return
       }
    });
    $("#thumnail").on("mouseleave","a.preview", function () {
        if($("#thumnail").hasClass("one")){
            $("div.imgPreview").hide();
            $("div.imgPreview img").attr("src",'');
        }
        else{
            return
        }
    })
}();

//服务器段session技术检测是否登陆
+function () {
    $.ajax({
        type:'get',
        url:'/session',
        success: function (data) {
            if(data.code===1){
                $("#logo>ul.rt").hide();
                $("#logo>div.private").show();
            }else{
                $("#logo>ul.rt").show();
                $("#logo>div.private").hide();
            }
        }
    })
}();

////鼠标移入登陆头像效果
//+function () {
//    $("div.private").mouseenter(function () {
//        console.log(1)
//        $(".quit").animate({
//            width:"75px"
//        },250).css("display","block")
//    })
//}();
//下拉逐渐出现的动画
//似乎坐不起

//多个分页不同的动画
