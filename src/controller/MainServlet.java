package controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MainServlet extends HttpServlet {
	protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		// 요청 분석 (=Routing)
		String sign=request.getParameter("sign");
		if(sign.equals("newlogin")){ //회원가입 처리
		String id=request.getParameter("id");			
		String pw=request.getParameter("pw");
		String name=request.getParameter("name");
		String country=request.getParameter("country");
		String gender=request.getParameter("gender");
		// 비즈니스 처리 (...)
		
		// View 지정
		RequestDispatcher disp=request.getRequestDispatcher("login_new_result.jsp");
		request.setAttribute("name", name);
		disp.forward(request, response);
		}
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

}
