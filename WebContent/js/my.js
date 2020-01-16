$(document).ready(function(){
	$(document).on("click", "#logout", function(){
		// alert();
		let temp = {sign:"logout"};
		let jsonOBJ = JSON.stringify(temp);

		$.ajax({url:"main", 
			type:"POST", 
			data:jsonOBJ, 
			dataType:"json",
			success: function(returnData){
					alert(returnData.message);
			},
			error: function(err) {
				alert(err);
			}
		});
	});
	
	$('#sign_login').click(function(){
		let login_html_content='<h1>로그인</h1>';
		login_html_content += "<hr><form action='' method='get'>";
		login_html_content += "ID<input id='form_id'><br>";
        login_html_content += "PW<input type='password' id='form_pw'><br>";
        login_html_content += "<input type='button' value='로그인' id='login_b'>";
        login_html_content += "<input type='button' value='회원가입'></form>";
		$('#content_main').html(login_html_content);
	});
	
	$(document).on("click", "#login_b", function(){
		let id=$('#form_id').val();
		let pw=$('#form_pw').val();
		let temp = {
			sign: "login",
			id:id,		// "key": value
			pw:pw
		};
		var jsonOBJ=JSON.stringify(temp);	// stringity메서드: javascript객체 => json객체
//		alert(jsonOBJ);
		$.ajax({url:"main", 
			type:"POST", 
			data:jsonOBJ, 
			dataType:"json",
			success: function(returnData){
				if (returnData.resultCode==1){
					alert(returnData.message);
					$('#login_b').hide();
					$('#login_div').html("<a class='navbar-brand' href='#' id='logout'>Log-out</a>");
					$('#content_main').html("<img src='img/bird.jpg' width='300'>");

				}
				else if (returnData.resultCode==0){
					alert(returnData.message);
				}
				
			},
	        error: function(err) {
	            alert(err);
	        }
		});
	});
	
	
});