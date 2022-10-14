---
category: 'Java'
tags: ['lombok']
title: '(Java) Lombok Usage'
date: '2017-04-14 11:30:00'
---

## Lombok ?

Bean객체 생성 시, annotation을 통하여 getter/setter 등을 별도로 생성하지 않아도 기능을 제공하도록 해주어, 코드를 좀 더 간결하게 해줌.

## Usage

Gradle 버전이 2.12 이상인 경우에는 `build.gradle`에 정의하여 설치할 수 있다.

```gradle
compileOnly "org.projectlombok:lombok:1.16.16"
```

###### plugin 설치

intellij의 preferences에서 `lombok plugin`을 설치한다.
설치 후 intellij를 restart 한 뒤에 `Preferences > Compiler > Annotation Processors` 에서 `Enable annotaion processing` 옵션을 체크한다.

###### class 파일에서 사용하기

```java
package study.todo.core.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Getter
@Setter
@ToString
public class ToDos {
    long id;
    String text;
    boolean completed;
}
```

다른 클래스 파일에서 해당 객체를 선언 후에 확인해보면..
별도로 set/get 메소드와 toString 메소드를 생성해주지 않았으나 사용이 가능한 것을 확인할 수 있음.

## 참고 링크

- [Lombok features](https://projectlombok.org/features/index.html)
