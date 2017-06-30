<?php
      header("content-type:application/json;charset=utf-8");
      require("init.php");
      @$uname=$_REQUEST['uname'] or die('{"code":-1,"msg":"用户名是必须的"}');
      @$upwd=$_REQUEST['upwd'] or die('{"code":-1,"msg":"密码是必须的"}');
      $sql="INSERT INTO user VALUES(null,'$uname','$upwd',now())";
      $result=mysqli_query($conn,$sql);
      $id=mysqli_insert_id($conn);
      if($result===true){
        $str=[
        'code'=>1,'id'=>$id,'msg'=>'注册成功'
        ];
        echo json_encode($str);
      }else{
      $str=['code'=>-1,'msg'=>'注册失败'];
        echo json_encode($str);
      }
?>