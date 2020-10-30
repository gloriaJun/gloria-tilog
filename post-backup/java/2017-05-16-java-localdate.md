---
layout: post
title: "(Java) LocalData & LocalDateTime"
date: 2017-05-16 19:30:00
author: gloria
categories: language
tags: java date
---

* TOC
{:toc}

java8 부터 지원하는 날짜 객체.

#### 문자열로 입력된 날짜를 변환하기
```java
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("E, d MMM yyyy HH:mm:ss Z");
    LocalDateTime localDateTime = LocalDateTime.parse("Tue, 16 May 2017 14:32:09 +0900", formatter);
    System.out.println(localDateTime);
```

#### 날짜 변환하기 : to "java.util.Date"
```java
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("E, d MMM yyyy HH:mm:ss Z");
    LocalDateTime localDateTime = LocalDateTime.parse("Tue, 16 May 2017 14:32:09 +0900", formatter);

    // 출력 결과 : Tue May 16 14:32:09 KST 2017
    System.out.println(Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant()));
```


#### 날짜 비교하기
```java
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("E, d MMM yyyy HH:mm:ss Z");
    LocalDateTime localDateTime = LocalDateTime.parse("Tue, 16 May 2017 14:32:09 +0900", formatter);
    LocalDateTime localDateTime2 = LocalDateTime.parse("Mon, 30 Jul 2018 21:32:09 +0900", formatter);

    if (localDateTime.isBefore(localDateTime2)) {
      System.out.println("Before");
    } else if (localDateTime.isAfter(localDateTime2)) {
      System.out.println("After");
    } else if (localDateTime.equals(localDateTime2)) {
      System.out.println("Equal");
    }
```

#### 남은 시간 계산
###### ChronoUnit
“년, 월, 일, 시, 분, 초 등”에 대한 단위를 표현하기 위한 클래스
```java
    System.out.println("남은 시간 : "
        + localDate.until(localDate2, ChronoUnit.YEARS) + "년 "
        + localDate.until(localDate2, ChronoUnit.MONTHS) + "개월 "
        + localDate.until(localDate2, ChronoUnit.DAYS) + "일 "
        + localDate.until(localDate2, ChronoUnit.HOURS) + "시간 "
        + localDate.until(localDate2, ChronoUnit.MINUTES) + "분 "
        + localDate.until(localDate2, ChronoUnit.SECONDS) + "초 ");
```

###### Period
“년, 월, 일”로 두 날짜 사이의 기간을 표현
```java
    Period period = Period.between(localDateTime.toLocalDate(), localDateTime2.toLocalDate());
    System.out.println("남은 기간 : "
        + period.getYears() + "년 "
        + period.getMonths() + "개월 "
        + period.getDays() + "일 ");
```

###### Duration
“일, 시, 분, 초”로 두 시간의 차이를 표현
```java
    Duration duration = Duration.between(localDateTime.toLocalTime(), localDateTime2.toLocalTime());
    System.out.println("남은 초 : " + duration.getSeconds());
```


## 참고 링크  
- [Java 8 – How to convert String to LocalDate](https://www.mkyong.com/java8/java-8-how-to-convert-string-to-localdate/)  
- [jekalmin의 블로그](http://jekalmin.tistory.com/entry/%EC%9E%90%EB%B0%94-18-%EB%82%A0%EC%A7%9C-%EC%A0%95%EB%A6%AC)  
