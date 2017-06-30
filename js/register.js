//注册
+function () {
    var ureg=/^\w+@\w+\.\w+(\.\w+)?$/;
    var preg=/^\w{3,10}$/;
    var uflag= 0,pflag= 0,upflag=0;
    $("#uname").blur(function () {
        var $this=$(this);
        if(ureg.test($(this).val())){
            $.ajax({
                type:"get",
                url:"/search",
                data:{uname:$this.val()},
                success:function (data) {
                    if(data.code==1){
                        $this.next().html(data.msg);
                        uflag=1;
                    }
                    else{
                        $this.next().html(data.msg);
                        uflag=0;
                    }
                }
            })
        }else{
            $(this).next().html("用户名格式错误");
            uflag=0;
        }
    });
    $("#upwd").blur(function () {
        if(preg.test($(this).val())){
            $(this).next().html("正确")
            upflag=1;
        }else{
            $(this).next().html("密码格式错误")
            upflag=0;
        }
    });
    $("#pwd").blur(function () {
        var pwd=$(this).val();
        var upwd=$("#upwd").val();
        if($(this).val()===""){
            $(this).next().html("请输入密码")
        }
        if(preg.test($(this).val())){
            if(pwd===upwd){
                $(this).next().html("密码一致")
                pflag=1;
            }else{
                $(this).next().html("两次密码不一致")
                pflag=0;
            }
        }else{
            $(this).next().html("密码格式错误")
            pflag=0;
        }
    });
    $("input.reg").click(function () {
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        if(uflag==1&&upflag==1&&pflag==1)
        {
            $.ajax({
                type:"post",
                url:"register",
                data:{uname:uname,upwd:upwd},
                success: function (data) {
                    var html=`<a class="login" href="login.html">${data.msg}，前去登录</a>`;
                    $("div.content").html(html);
                }
            })
        }
        else{
            return;
        }
    })
}();