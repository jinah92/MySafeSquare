$(document).ready(function(){
	
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
		alert(id + ":" + pw);
/*		$.ajax({url:"MainServlet", 
			type:"POST", 
			data:jsonOBJ, 
			dataType:"json",
			success:function(jsonObj){
				if(jsonObj.result==1){
					$("#login").html(jsonObj.message+"<br><input type='button' value='logout'/>");
				}else if(jsonObj.result==2){
					alert(jsonObj.message);
				}
			},
	        error: function() {
	            alert('Ajax readyState: '+xhr.readyState+'\nstatus: '+xhr.status + ' ' + err);
	        }
		});*/
	});
	
	
});