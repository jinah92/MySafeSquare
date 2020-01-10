<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<jsp:include page="title.jsp"></jsp:include>
<jsp:include page="menu.jsp"></jsp:include>

<!DOCTYPE html>
<html>
<head>
<meta charset=UTF-8">
<title>SafeSquare-Team</title>
<style>
	#member{width:150px; height:50px;
		text-align:center; line-height:50px; margin:10px;
		display:inline-block;
	}
</style>
</head>
<body>
	<h2>팀 소개</h2>

	<div>
		<div id="member"><img src="./img/member1.png" width="200" height="200">강창유</div>
		<div id="member"><img src="./img/member2.png" width="200" height="200">구민하</div>
		<div id="member"><img src="./img/member3.png" width="200" height="200">유덕경</div>
		<div id="member"><img src="./img/member4.png" width="200" height="200">최진아</div>
	</div>
</body>
</html>

<jsp:include page="copyright.jsp"></jsp:include>  
