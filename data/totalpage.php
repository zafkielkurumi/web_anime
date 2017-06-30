<?php
    header("content-type:application/json;charset=utf-8");
    require("init.php");
    @$tname=$_REQUEST['tname'] or die('{"code":-1,"msg":"查询不存在"}');
    $sql="SELECT count(id)  FROM $tname";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    $page=ceil($row[0]/8);
    $str=["page"=>$page];
    echo json_encode($str);
?>