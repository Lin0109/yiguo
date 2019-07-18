<?php
	// public function rand_captcha(){
	// 	$key = '';
	// 	$pattern = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	// 	for( $i=0;i<4;$i++){
	// 		$key .= $pattern[mt_rand(0,33)];
	// 	}
	// 	return $key;
	// }

	if ($_GET['username'] == ''){
		echo "请输入用户名";
	} elseif ($_GET['password'] == '') {
		echo "请输入密码";
	} elseif ($_GET['code'] == '') {
		echo "验证码不能为空";
	} elseif ($_GET['code'] !== $_GET['checkCode']) {
		echo "验证码错误";
	}elseif ($_GET['username'] == '13144885373' && $_GET['password'] == '123') {
		echo "正在登录中";
	} else{
		echo "用户不存在或密码错误";
	}

?>