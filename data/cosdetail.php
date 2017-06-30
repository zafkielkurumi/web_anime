<?php
    header("content-type:application/json;charset=utf-8");
    require("init.php");
    @$id=$_REQUEST["id"] or die('{"msg":"页面丢了"}');
    $sql="SELECT * FROM fate WHERE id=$id";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($result);
    if($row!=="NULL"){
    echo json_encode($row);
    }
?>