package controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.*;

public class MainServlet extends HttpServlet {
	protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
		request.setCharacterEncoding("UTF-8");
		BufferedReader br = request.getReader();
		
		response.setContentType("application/json;charset=utf-8");
		PrintWriter out = response.getWriter();

//		System.out.println(br.readLine());
		JSONObject obj = (JSONObject)JSONValue.parse(br);
		String sign = (String) obj.get("sign");
		if(sign != null){
			if(sign.equals("login")){
				String id = (String) obj.get("id"); 
				System.out.println( id + ":" +obj.get("pw"));	// 데이터 확인
				
				//login 처리 biz
				
				//응답
				
				obj = new JSONObject();
				boolean flag = true;
				if(flag){	
					obj.put("resultCode", 1);
					obj.put("message", id +"님 환영합니다");	
				}
				else{
					obj.put("resultCode", 0);
					obj.put("message", "다시 로그인하세요.");	
				}
				
			} // end login
			else if(sign != null && sign.equals("logout")){
				// logout 처리 ==> 할당된 세션을 종료
				obj = new JSONObject();
				obj.put("message", "로그아웃 되셨습니다.");
	
			}

		} // check null
		else {		// null 인 경우
			obj = new JSONObject();
			obj.put("message", "sign값이 없습니다.");
		}

		out.print(obj);
	}
		
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

}
