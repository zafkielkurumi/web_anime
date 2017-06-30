//登陆
+function () {
    $("input.login").click(function () {
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        if(uname===''||upwd==''){
            return
        }
        else{
            $.ajax({
                type:"get",
                url:"/login",
                data:{uname:uname,upwd:upwd},
                success: function (data) {
                    if(data.code==1)
                    {
                        sessionStorage['id']=data.id;
                        //document.cookie=`id=${data.id}`;
                        var html=`<a href="news.html">登录成功，返回</a>`;
                        $("div.content").html(html);
                    }
                    else{
                        $("span.uname").html("用户名或密码错误");
                    }
                }
            })
        }
    })
}();