---
category: 'Java'
tags: ['javadoc', 'documentation']
title: '(Java) JavaDoc'
date: '2017-05-25 10:30:00'
---

## JavaDoc

미리 정의된 포맷으로 코드 내에 작성된 내용을 html 형태의 문서로 생성하는 도구

#### {@code}

Javadoc에 예제 코드를 작성할 때 html, annotation 등을 사용하는 경우에 사용한다.

```java
 * <p>
 *     sample code
 *    ----------- Event publish -----------
 *
 *     {@code @Autowired}
 *     private org.springframework.context.ApplicationEventPublisher publisher;
 *
 *     Map userMap=new HashMap();
 *     .. ..
 *     BusinessEvent event=new BusinessEvent("user","join_user",userMap);
 *     publisher.publishEvent(event);
 *
 *    ----------- Event subscribe -----------
 *    {@code @BusinessEventListener}("user.join_member")
 *
 *    public void welcome(Map map){
 *      {@code System.out.println("hello2 >>>>>>>>>>>>>>>>>" +map.toString());}
 *    }
 * </p>
```

## Reference

- [Java Documentation Comments](https://www.tutorialspoint.com/java/java_documentation.htm)
