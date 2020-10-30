---
layout: post
title: "(Servlet) 네이버에디터, 입력값 검증 추가"
date: 2014-03-06 19:35:00
author: gloria
categories: language
tags: java servlet ajax jsp
---

네이버 스마트 에디터 붙이고....필수 입력값에 대해 검증하고...서블릿 호출해서..결과 값 받아서 alert 창..뿌리기..


#### jsp 소스
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<c:set var="contextPath" value="<%= request.getContextPath()%>"></c:set>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Insert title here</title>
  <link rel="stylesheet" type="text/css" href="${contextPath}/res/js/date/jquery-ui-1.10.4.custom.css" />
  <!-- 에디터 플러그인 -->
  <script type="text/javascript" src='<c:out value="${contextPath}"/>/res/smarteditor/js/HuskyEZCreator.js'></script>
<style>
body {
	font-family: "Trebuchet MS", "Helvetica", "Arial",  "Verdana", "sans-serif";
	font-size: 80%;
}
</style>
<script src="${contextPath}/res/js/jquery-1.11.0.js"></script>
<script type="text/javascript">
$(function() {
  $("#saveHistory").click(function() {
    // 리비전 입력 여부 체크
    if($("#rev").val() == 0 || $("#rev").val() == "") {
      alert("리비전을 입력해주세요");
      $("#rev").focus();
      return false;
    } else {
      submitContents(); // 에디터에 입력된 내용을 가져온다.
      var str = $("#historyForm").serialize();
      alert(str);

      $.ajax({
        type:"POST",
        url:"${contextPath}/test",
        //contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        data: str,
        datatype:"json",
        success: function(data) {
          alert("result :  " + data.result);
          alert("msg :  " + data.msg);
        },
        error: function(x, o, e) {
          var msg = "페이지 호출 중 에러 발생 \n" + x.status + " : " + o + " : " + e;
          alert(msg);
        }			
      });
    }
  });
});
</script>
</head>
<body>
  <div >
    <form id="historyForm">
      에디터 테스트
      <table>
      <tr>
        <td><input id="saveHistory" type="button"  value="전송"/></td>
        <td><input type="text" name="rev" value="0" id="rev"></input></td>
        <td><input type="text" name="date" value="2-4" id="date"></input></td>
      </tr>
      <tr>
        <td colspan=3>
          <textarea id="content" name="content" rows="10"     
            style="width:100%;display:none;"></textarea>
        </td>
      </tr>
      </table>
    </form>
    <script type="text/javascript">
      var oEditors = [];
      nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        // html editor가 들어갈 textarea id
        elPlaceHolder: document.getElementById('content'),
        // html editor가 skin url
        sSkinURI: "${contextPath}/res/smarteditor/SmartEditor2Skin.html",  
        fCreator: "createSEditor2"
      });

      function submitContents() {
        // 에디터의 내용이 textarea에 적용됨
        oEditors.getById["content"].exec("UPDATE_CONTENTS_FIELD", []);
      }
    </script>
  </div>
</body>
</html>
```

#### 서블릿 소스
```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  // return type은 json으로
  JSONObject obj = new JSONObject();

  System.out.println("=================================");
  System.out.println("content : " + request.getParameter("content"));
  System.out.println("rev : " + request.getParameter("rev"));
  System.out.println("date : " + request.getParameter("date"));
  System.out.println("=================================");

  obj.put("result", "success");
  obj.put("msg", "정상 처리.");

  response.setContentType("application/x-json; charset=UTF-8");
  response.getWriter().print(obj);
}
```
