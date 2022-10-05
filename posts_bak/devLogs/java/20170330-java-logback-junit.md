---
category: 'Java'
tags: ['logback', 'junit', 'logging']
title: '(Java) logback 설정하기'
date: '2017-03-30 12:30:00'
---

테스트 케이스에서 로깅을 남기기 위해 `System.out.println` 을 사용하지 말고 logback을 이용하여 로깅을 남겨보자 !!

## 라이브러리 정의

```xml
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.2</version>
</dependency>
```

classic만 추가하면, 아래와 같이 logback-classic 라이브러리들이 추가된 것을 확인할 수 있다.
![]({{ post.url }}/assets/images/post/2017/0330-java-logback.png){: .width-25 }

## 로그 남기기

Class 파일에 logger 객체를 정의하고 로깅 메시지를 남긴다.

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PetStoreTest extends RestAssuredConfiguration {
	private static final Logger logger = LoggerFactory.getLogger(PetStoreTest.class);

    @Test
    public void logTest() {
        logger.debug("this is debug");
        logger.info("this is info");
        logger.warn("this is warning");
        logger.error("this is error");
    }
}
```

해당 메소드를 수행하면 아래와 같은 로그 메시지가 출력된다.

```
18:39:39.394 [main] DEBUG com.restAssured.PetStoreTest - this is debug
18:39:39.396 [main] INFO com.restAssured.PetStoreTest - this is info
18:39:39.396 [main] WARN com.restAssured.PetStoreTest - this is warning
18:39:39.396 [main] ERROR com.restAssured.PetStoreTest - this is error
```
