<?php
    header("content-type:application/json;charset=utf-8");
    require("init.php");
       @$tname=$_REQUEST['tname'];
       @$id=$_REQUEST['id'];
       $sql="SELECT * FROM $tname WHERE id=$id";
          $result=mysqli_query($conn,$sql);
          @$rows=mysqli_fetch_assoc($result);
          if($rows){
            echo json_encode($rows);
          }
?>