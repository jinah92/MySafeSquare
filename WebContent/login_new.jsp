<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<jsp:include page="title.jsp"></jsp:include>
<jsp:include page="menu.jsp"></jsp:include>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<h1>Welcome to our web site!</h1>
		<h2>Please Insert your information</h2><hr>
	
		<form action="main" method="post">
		<input type="hidden" name="sign" value="newlogin" />
		ID <input type="text" name="id" required><br>
		PW <input name="pw" type="password" required><br>
		Name <input type="text" name="name" required><br>
		Country
		<select name="country">
			<option value="Korea">대한민국</option>
			<option value="United_state">미국</option>
			<option value="Japan">일본</option>
			<option value="East_Asia">동남아시아</option>
			<option value="South_America">남미</option>	
		</select>
		Gender
		<input type="radio" name="gender" value="male" />남성
		<input type="radio" name="gender" value="female" />여성
		<br>
		<button type="submit">신규 가입</button>
		<button type="reset">취 소</button>
		</form>
	</div>			

</body>
</html>