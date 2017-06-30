<?php
      header("content-type:application/json;charset=utf-8");
      require("init.php");
      @$uname=$_REQUEST['uname'] or die('{"code":-1,"msg":"用户名是必须的"}');
      @$upwd=$_REQUEST['upwd'] or die('{"code":-1,"msg":"密码是必须的"}');
      $sql="SELECT uname,id FROM user WHERE uname='$uname' AND upwd='$upwd'";
      $result=mysqli_query($conn,$sql);
      $row=mysqli_fetch_assoc($result);
      if($row===NULL){
         $str=['code'=>-1,'msg'=>'用户名或密码错误'];
                echo json_encode($str);
      }else{
      $id=$row["id"];
      $str=['code'=>1,'msg'=>$id];
                echo json_encode($str);
      }
?>