<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<jsp:include page="title.jsp"></jsp:include>
<jsp:include page="menu.jsp"></jsp:include>

<h2>Log-in</h2>
<form>
	ID &nbsp;<input type="text" name="user_id" size=20 /><br>
	PW <input type="password" name="user_pw" size=20 /><br>
	<button type="submit">로 그 인</button>
	<a href="login_new.jsp">회원가입</a>
</form>