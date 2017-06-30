+function () {
    var tname=sessionStorage['tname'];
    var id=sessionStorage['id'];
    $("#footer").load("foot.html");
    $.ajax({
        type:"get",
        url:'/detail',
        data:{tname:tname,id:id},
        success: function (data) {
            //$("#content>h1").html(data.name)
            //if(tname==="comic"){
            //    $("#content>img").attr("src",data.pic);
            //    $("#content .dContent").html(data.content)
            //}
            var data=data.msg;
            var html='';
            html+=`
            <h1>${data.name}</h1>
            <img src="${data.pic}"/>
                <div><p>${data.content}</p></div>
                `;
            $("#content").html(html)
        }
    })
}();