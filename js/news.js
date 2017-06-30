$(".close").click(function () {
    $("div.modal-box").hide();
    $("body").removeClass("cmodal-open");
});
$("#thumnail.one").on("click","a", function (e) {
    e.preventDefault();
    $("div.modal-box").show();
    $("div.cmodal").show();
    $("body").addClass("cmodal-open");
    var tname=$("h3.head a[class='active']").attr("id");
    var id=$(this).parents("div.thumnail").find("img").attr("alt");
    $.ajax({
        type:"get",
        url:"/detail",
        data:{tname:tname,id:id},
        success: function (data) {
            var data=data.msg;
            var html='';
            html+=`
            <h2>${data.name}</h2>
            <img src="${data.pic}"/>
                <p>${data.content}</p>
                `;
            $("div.cmodal div.modal-body").html(html);
        }

    })
})
