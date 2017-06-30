<?php
   header("content-type:application/json;charset=utf-8");
   require("init.php");
   @$tname=$_REQUEST['tname'];
   if($tname===null){
   $tname='fate';
   }
   @$pageNo=$_REQUEST['pageNo'];
   if($pageNo===null){
      $pageNo=1;
   }
   $offset=($pageNo-1)*9;
   $sql="SELECT * FROM $tname LIMIT $offset,9";
   $result=mysqli_query($conn,$sql);
   $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
   echo json_encode($rows);
?>