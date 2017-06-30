<?php
      header("content-type:application/json;charset=utf-8");
      require("init.php");
      @$uname=$_REQUEST['uname'] or die('{"code":-1,"msg":"用户名是必须的"}');
      $sql="SELECT uname,id,upwd FROM user WHERE uname='$uname'";
      $result=mysqli_query($conn,$sql);
      $row=mysqli_fetch_row($result);
      if($row!==NULL){
         $str=['code'=>-1,'msg'=>'用户名不可用'];
                echo json_encode($str);
      }else{
        $str=[
                'code'=>1,'msg'=>'用户名可用'
                ];
                echo json_encode($str);
      }
?>