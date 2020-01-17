$(document).ready(function(){
	// 로그인 폼
	let login_form='<div id="login_page" class="mylogin">';
	login_form=
	login_form='<div id="login_page" class="mylogin">';
	login_form += "<div class='col s12 z-depth-4-card-panel'>";
	login_form += "<form id='login_form'>";
	login_form += "<div class='row'>";
	login_form += "<div class='input-field col s12 center'>";
	login_form += "<p class='center login-form-text'>LOGIN</p></div></div>";
	login_form += "<div class='row_margin'><div class='input-field col s12'>";
	login_form += "<i class='material-icons prefix'>account_circle</i>";
	login_form += "<input id='form_id' name='username' type='text' />";
	login_form += "<label for='username' data-error='wrong' class='center-align' data-success='right'>Username</label></div></div>";
	login_form += "<div class='row_margin'><div class='input-field col s12'><i class='material-icons prefix'>vpn_key</i><input id='form_pw' name='password' type='password' style=/><label for='password'>Password</label></div></div>";
	login_form += "<div class='row'><div class='input-field col s12 login-text'><input type='checkbox' id='test6' checked='checked' /><label for='test6' class='pointer-events'>Remember me</label></div></div>";
	login_form += "<div class='row'><div class='input-field col s12'><button id='login_b' type='submit' class='btn waves-effect waves-light col s12'>Login</button></div><div class='input-field col s12'><a href='#' class='btn waves-effect waves-light col s12 light-blue darken-4'>FACEBOOK Login</a></div></div>";
	login_form += "<div class='row'><div class='input-field col s6 m6 l6'><p class='row_margin medium'><a href='register.html' id='register'>Register Now!</a></p></div><div class='input-field col s6 m6 l6'><p class='margin right-align medium-small'><a href='#'>Forgot password ?</a></p></div></div></form></div></div>";
	
	// login_form += "<hr><form id='login_form'>";
	// login_form += "ID<input id='form_id'><br>";
	// login_form += "PW<input type='password' id='form_pw'><br>";
	// login_form += "<input type='button' value='로그인' id='login_b'>";
	// login_form += "<input type='button' value='회원가입'></form>";

	// 날짜
    let fullDate = new Date();
    let year = fullDate.getFullYear();
    let month = fullDate.getMonth() + 1;
    let date = fullDate.getDate();
    let day = fullDate.getDay();
    
    switch(day){
    	case 0: days="일"; break;
    	case 1: days="월"; break;
    	case 2: days="화"; break;
    	case 3: days="수"; break;
    	case 4: days="목"; break;
    	case 5: days="금"; break;
    	case 6: days="토";
    }
	
	// 메인 화면 내용 1
	// let content_1 = "<h3 class='margin'>Did you find a <strong style='color: red;'>Threat?</strong></h3>";
	// content_1 += "<img src='./img/chain.png' class='img-responsive img-circle margin' style='display:inline' alt='Bird' width='350' height='350'>";
	// content_1 += "<h3>Please report to <strong style='color: #1abc9c;'>'MY SAFE SQUARE'</strong></h3>";
	// $('#content_1').html(content_1);


	// 메인 화면 내용 2
    // let content_2 = "<h3 class='margin'>Blockchain Alert System</h3>";
    // content_2 += "<p>Our life at a speed much faster than that of industrial revolution of the past. ";
    // content_2 += "Amid the many rapid changes, hacking and virus get more and more burdensome in promoting safe Internet culture over the time.";
    // content_2 += "Almost all systems connected to the super-high speed Internet network are attacked every several minutes or even every several seconds while users are not acknowledged. In particular, hacking and virus attacks of which intention is to immobilize internet service itself are launched several times. In other words, hacking and virus attacks are delivered fatal and large in scale.";
    // content_2 += "To cope with this, <strong>('My Safe-Square')</strong> has devoted its energy to effective countermeasures to hacking and viruses such as cyber attack countermeasure methodology and technical response to attack tools. To prevent the infringement cases and minimize the damage in Global, 'MSS' will take the lead in raising technical capability for protection of Critical Network Infrastructure, Internet communication network and for reinforcement of prediction and alarm system. </p>";
    // content_2 += "<a href='#' class='btn btn-default btn-lg'><span class='glyphicon glyphicon-search'></span> Search</a></div></div>";
    // $('#content_2').html(content_2);
    
    
	// Mypage 버튼 클릭 후 화면 (로그인 폼 출력) 
	$('#sign_button').click(function(){
		// $("#content_1").hide();
		$('#content_2').html(login_form);

	});

	// Logout 버튼 클릭 후 화면 (로그인 전 화면 출력, 아이콘 변경)
	$(document).on("click", "#logout", function(){
		let answer = confirm('로그아웃 하시겠습니까? ');
		if (answer == true){
			alert('로그아웃 성공');
			$('#logout').hide();
			$('#sign_button').show();
			// $('#login_div2').html("<a class='navbar-brand' href='#' id='sign_button'>My Page</a>");
			// $('#content_1').html(content_1);
			$('#content_2').html(content_2);
		}
	});
	
	// 로그인
	$(document).on("click", "#login_b", function(){
        const id_val = $('#form_id').val();
		const pw_val = $('#form_pw').val();
		alert(id_val + '님, 환영합니다.');
        
        // POST방식 처리 => $.post("url", send_data, function(){});
        const send_data_temp = {
            sign: "login",
            id: id_val,
            pw: pw_val
        };
        const send_data = JSON.stringify(send_data_temp);
        $.post("main", send_data, function(returnData, status){
            if(returnData.resultCode){
				$('#sign_button').hide();
				$('#logout').show();
				$('#login_name').html(id_val);
				
				// $('#login_div2').html("<a class='navbar-brand' href='#' id='logout'>"+ id_val + " 님 <button id='logout_button'>Logout</button></a>");

            }else{
                alert(returnData.message);
			}
			// alert('확인용1');
			// $("#content_1").show();

			// $('#content_2').html(year + "년" + month + "월 " + date + "일 (" + days + ")<br>신규 등록된 <strong style='color:red'>보안 취약점</strong> 목록 </h3>" +
			// 		"<img src='img/cve.png'/>");

			// alert('확인용2');
        });
		
		// alert('확인용3');
		$('#content_2').html(year + "년" + month + "월 " + date + "일 (" + days + ")<br>신규 등록된 <strong style='color:red'>보안 취약점</strong> 목록 </h3>" +
					"<img src='img/cve.png'/>");

	});
	
	// 회원가입
	// $(document).on("click", "#register", function(){
		
	// });

	// 홈 화면 이동
	$(document).on("click", "#home_button", function(){
		// $('#content_1').html(content_1);
		// $('#content_2').html(content_2);

	});


	// About MSS
	$(document).on("click", "#about_button", function(){
		$('#content_1').html("<h1><span id='highlight'>Complete</span> to check the latest threats!</h1>");
	});
	
	// 서비스 소개
	$(document).on("click", "#service_button", function(){
		$('#content_1').html("<h1>What <span id='highlight'>Services</span> in My Safe Squre?</h1>");
	});
	
});