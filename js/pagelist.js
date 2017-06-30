+function () {
    //查询当前页的内容
    function loadNo(tname,no){
        //当前页内容
        $.ajax({
            type:'post',
            url:'/pagelist',
            data:{tname:tname,pageNo:no},
            success: function (data) {
                var html='';
                for(var obj of data.content){
                    html+=`
                <div class="thumnail fade">
                        <a href="404.html" target="_blank" class="preview">
                        <img src="${obj.pic}" alt="${obj.id}"/>
                        </a>
                        <h2><a href="" class="title">${obj.name}</a></h2>
                    <div>
                        ${obj.title}
                    </div>
                    <a href="404.html" target="_blank" class="more">
                        阅读更多
                        </a>
                        <u class="divider"></u>
                        </div>
                `;
                }
                $("#thumnail").html(html);
            }
        })
        //查询总页数
        //3个ajax，一个页数为1，返回一种，页数为末页一种，其余页一种
        $.ajax({
            type:'post',
            url:'/totalpage',
            data:{tname:tname},
            success: function (data) {
                var html='';
                var data=data.content;
                if(no==1){
                    html+=`
                <a class="disabled" href="1">第一页</a>
                        <a class="disabled" href="0">上一页</a>
                        <a href="2" >下一页</a>
                        <a class="page" href="${data.page}">第${data.page}页</a>
                    <span>&nbsp;第 <input type="text" name="jumppage" value="1"/> 页</span>
                `;
                }
                else if(no===parseInt($("a.page").attr("href"))){
                    html+=`
                <a  href="1">第一页</a>
                        <a  href="${data.page-1}">上一页</a>
                        <a href="${data.page+1}" class="disabled">下一页</a>
                        <a class="page disabled" href="${data.page}">第${data.page}页</a>
                    <span>&nbsp;第 <input type="text" name="jumppage" value="${data.page}"/> 页</span>
                `;
                }
                else{
                    html+=`
                <a  href="1">第一页</a>
                        <a  href="${no-1}">上一页</a>
                        <a href="${no+1}" >下一页</a>
                        <a class="page" href="${data.page}">第${data.page}页</a>
                    <span>&nbsp;第 <input type="text" name="jumppage" value="${no}"/> 页</span>
                `;
                }
                $("#pager").html(html);
                if(parseInt($("a.page").attr("href"))===1){
                    $("a.page").addClass("disabled").prev().addClass("disabled");
                }
            }
        })
    }
    $(window).ready(function () {
        $("#footer").load("foot.html");
        var tname=$("h3.head a[class='active']").attr("id");
        loadNo(tname,1);
        //var str=document.cookie;
        ////var arr = str.split("=");
        //var id=sessionStorage["id"];
        //if(id!==undefined){
        //    $("#logo>ul.rt").hide();
        //    $("#logo>div.private").show();
        //}
        //else{
        //    $("#logo>ul.rt").show();
        //    $("#logo>div.private").hide();
        //}
    })

//页头导航点击事件
    $("h3.head").on("click","a", function (e) {
        e.preventDefault();
        if($(this).hasClass("active")){
            return;
        }
        else{
            $("h3.head>a").removeClass("active");
            $(this).addClass("active");
            var tname=$(this).attr("id");
            loadNo(tname,1);
        }
    });
//底部分页点击
    $("#pager").on("click","a", function (e) {
        e.preventDefault();
        if($(this).hasClass("disabled")){
            return
        }
        else{
            var tname=$("h3.head a[class='active']").attr("id");
            var no=parseInt($(this).attr("href"));
            var total=parseInt($("a.page").attr("href"));
            $("html,body").animate({
                scrollTop:0
            },500);
            $("#pager>a").addClass("disabled");
            loadNo(tname,no);

        }
    })
//input输入换页
    $("#pager").on("blur","input[name='jumppage']", function () {
        var tname=$("h3.head a[class='active']").attr("id");
        var no=parseInt($(this).val());
        if(no==parseInt($(this).attr("value"))||no>parseInt($("a.page").attr("href"))||no<1){
            return
        }
        else{
            $("html,body").animate({
                scrollTop:0
            },"slow");
            loadNo(tname,no);
        }
    })
}();
//点击获取详情页内容
+function () {
    $("#thumnail").on("click","a", function (e) {
        e.preventDefault();
        var tname=$("h3.head a[class='active']").attr("id");
        if(tname!=="news"){
            var id=$(this).parents("div.thumnail").find("img").attr("alt");

            sessionStorage['tname']=tname;
            sessionStorage["id"]=id;
            location.href='pagec.html';
        }

    })
}();