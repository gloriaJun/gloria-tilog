---
layout: post
title: "(Servlet) ajax로 servlet과 통신하기"
date: 2014-03-06 14:35:00
author: gloria
categories: language
tags: java servlet ajax jsp
---

ajax 써서 페이지 이동안하고 호출해보고 싶어 몇일 삽질하다가 드디어 성공..눈물 난다..ㅠㅠ


- 사용한 json 라이브러리 :   json-lib-2.4-jdk15.zip


###### ajax.jsp
```jsp
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
  <title>Insert title here</title>
  <script src="http://http://code.jquery.com/jquery-1.11.0.js"></script>
  <script src="../res/js/jquery-1.11.0.js"></script>
  <script type="text/javascript">
  $(function() {
    $("#call").click(function() {
      var str = $("#form1").serialize();
      alert(str);

      $.ajax({
        type:"POST",
        url:"/test/ajaxtest",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: str,
        datatype:"json",
        success: function(data) {
          alert(data.result);			
        },
        error: function(e) {
          alert("에러발생");
        }			
      });
    });
  });
  </script>
</head>
<body>
  <form id="form1">
    <input type="text" name="val" value="ajax 테스트" id="val"></input>
    <input type="text" name="num" value="12345" id="num"></input>
    <input type="button" value="호출" id="call"></input>
  </form>
</body>
</html>
```

###### test.java
- ajax.jsp로 부터 호출을 받아서 처리한 뒤에 결과 값 json에 담아서 전송.
- post로 전송해서 받으니 이 함수만 작성 했음.

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  String val = request.getParameter("val");
  String num = request.getParameter("num");

  System.out.println(val);
  System.out.println(num);

  // return type은 json으로
  JSONObject obj = new JSONObject();
  obj.put("result", "fail");

  response.setContentType("application/x-json; charset=UTF-8");
  response.getWriter().print(obj);
}
```

###### web.xml
- 서블릿 정의 부분
```xml
  <servlet>
    <description></description>
    <display-name>test</display-name>
    <servlet-name>test</servlet-name>
    <servlet-class>com.test.test</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>test</servlet-name>
    <url-pattern>ajaxtest</url-pattern>
  </servlet-mapping>
```
