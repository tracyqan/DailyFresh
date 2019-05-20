$(function(){

	var error_name = true;
	var error_password = true;
	var error_check_password = true;
	var error_email = true;
	var error_check = true;
	var error_captcha = true;
	$('#user_name').blur(function() {
		check_user_name();
	});

	$('#pwd').blur(function() {
		check_pwd();
	});

	$('#cpwd').blur(function() {
		check_cpwd();
	});

	$('#email').blur(function() {
		check_email();
	});

	$('#id_captcha_1').blur(function () {
		check_captcha();
    });

	$('#allow').click(function() {
		if($(this).is(':checked'))
		{
			error_check = false;
			$(this).siblings('span').hide();
		}
		else
		{
			error_check = true;
			$(this).siblings('span').html('请勾选同意');
			$(this).siblings('span').show();
		}
	});

	function check_user_name(){
		var len = $('#user_name').val().length;
		if(len<5||len>20)
		{
			$('#user_name').next().html('请输入5-20个字符的用户名');
			$('#user_name').next().css('color','#e62e2e');
			$('#user_name').next().show();
			error_name = true;
		}
		else
        {
            $('#user_name').next().html("用户名可以注册");
            $('#user_name').next().css('color','#518e17');
            $('#user_name').next().show();
            error_name = false;
        }
	}

	function check_pwd(){
		var len = $('#pwd').val().length;
		if(len<8||len>20)
		{
			$('#pwd').next().html('密码最少8位，最长20位');
			$('#pwd').next().show();
			error_password = true;
		}
		else
		{
			$('#pwd').next().hide();
			error_password = false;
		}		
	}

	function check_cpwd(){
		var pass = $('#pwd').val();
		var cpass = $('#cpwd').val();

		if(pass!=cpass)
		{
			$('#cpwd').next().html('两次输入的密码不一致');
			$('#cpwd').next().show();
			error_check_password = true;
		}
		else
		{
			$('#cpwd').next().hide();
			error_check_password = false;
		}		
		
	}

	function check_email(){
		var re = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/;

		if(re.test($('#email').val()))
		{
			$('#email').next().hide();
			error_email = false;
		}
		else
		{
			$('#email').next().html('你输入的邮箱格式不正确');
			$('#email').next().show();
			error_check_password = true;
		}
	}

	function check_captcha() {
		var lens = $('#id_captcha_1').val().length;
		if(lens == 0){
			$(".yanzheng span").html("请输入验证码");
			$(".yanzheng span").show();
			error_captcha = true;
		}
		else if(lens != 4){
			$(".yanzheng span").html("验证码错误");
			$(".yanzheng span").show();
			error_captcha = true;
		}
		else{
			$(".yanzheng span").hide();
			error_captcha = false;
		}
    }

	function cheched() {
		if($('#allow').is(':checked'))
		{
			error_check = false;
			$('#allow').siblings('span').hide();
		}
		else
		{
			error_check = true;
			$('#allow').siblings('span').html('请勾选同意');
			$('#allow').siblings('span').show();
		}
    }


    // $('.captcha').click(function () {
    	// $.getJSON("/captcha/refresh/", function (result) {
     //    	$('.captcha').attr('src', result['image_url']);
     //    	$('#id_captcha_0').val(result['key'])
    	// });
	// });


	$('#reg_form').submit(function() {
		check_user_name();
		check_pwd();
		check_cpwd();
		check_email();
		check_captcha();
		cheched();

		if(error_name == false && error_password == false && error_check_password == false && error_email == false && error_check == false && error_captcha == false)
		{
			return true;
		}
		else
		{
			return false;
		}

	});

});