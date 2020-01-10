<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<jsp:include page="title.jsp"></jsp:include>
<jsp:include page="menu.jsp"></jsp:include>


<h2>Local Contact</h2><hr>
<form>
	이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="user_name" size=10 value="필수 입력값" /><br>
	이메일 &nbsp;<input type="email" name="email_ID" size=10 /> @
	<select name="email_domain">
		<option value="gmail">gmail.com</option>
		<option value="gmail">naver.com</option>
		<option value="gmail">daum.net</option>
		<option value="gmail">yahoo.com</option>
		<option value="gmail">nate.com</option>
		<option value="gmail">기타</option>	
	</select><br>
	연락처 1(자택) <input type="tel" patttern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}" placeholder="**-****-****"/><br>
	연락처 2(hp)&nbsp;&nbsp; <input type="tel" patttern="[0-9]{3}-[0-9]{3,4}-[0-9]{4}" placeholder="***-****-****"/><br><br>
	문의사항<br>
	<textarea rows="5" cols="50" name="memo">
	자유롭게 작성해주세요.
	</textarea><br>
	문의 형태
	<input type="radio" name="contact-type" value="email" />이메일
	<input type="radio" name="contact-type" value="phone" />연락처<br>
	국가
	<select name="country">
		<option value="Korea">대한민국</option>
		<option value="United_state">미국</option>
		<option value="Japan">일본</option>
		<option value="East_Asia">동남아시아</option>
		<option value="South_America">남미</option>	
	</select><hr>
	<button type="submit">제 출</button>
	<button type="reset">취 소</button>
	
	
</form>

<jsp:include page="copyright.jsp"></jsp:include>  