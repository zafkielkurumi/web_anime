<?php
   header("content-type:application/json;charset=utf-8");
   require("init.php");
   @$pageNo=$_REQUEST['pageNo'];
   if(empty($pageNo)){
      $pageNo=1;
   }
   $offset=($pageNo-1)*8;
   $sql="SELECT name,id,title,pic FROM news LIMIT $offset,8";
   $result=mysqli_query($conn,$sql);
   $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
   echo json_encode($rows);
?>