---
category: 'Java'
tags: ['spring']
title: '(Java) Spring Bean LifeCycle'
date: '2018-12-04 11:30:00'
---

- TOC
  {:toc}

## 간단 개념 정리

#### Bean

스프링에서 관리되는 객체를 **Bean**이라고 한다.

#### Container

컨테이너는 Bean을 정의하고, 생성하고, 저장하고, 반환한다.

#### DI (Dependency Injection)

의존성을 최소화하여 책임을 분리하기 위한 과정. 즉, 객체 간의 결합도를 낮추는 것을 의미한다.

- 스프링에서는 `@annotaion`, `setter`, `constructor`를 통하여 의존성을 주입한다.

## Bean의 생명주기

빈의 생명주기는 기본적으로 컨테이너의 생명주기(생성 > 설정 > 사용 > 종료)를 따라가며, 컨테이너가 종료되면 자동으로 소멸된다.

크게보면 아래와 같이 3가지 단계로 나누어 진행이 된다.

- 컨테이너에서 빈 설정정보(Bean Configuration)를 읽는다
- 컨테이너에서 빈 조립설명서(Bean Definition)를 생성한다
- 컨테이너에서 빈을 **생성 > 초기화 > 사용 > 소멸** 단계로 수행된다.

#### Bean의 Life cycle

```java
public class Student implements InitializingBean, DisposableBean {

    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }
    public int getAge() {
        return age;
    }

    //InitializingBean 빈의 초기화 될 때(ctx.refresh) 호출
    @Override
    public void afterPropertiesSet() throws Exception {
        // 빈이 초기화될 때 특정 작업이 필요한 경우
        System.out.println("afterPropertiesSet() called");
    }

    //DisposableBean 빈이 destroy(ctx.close()) 될 때 호출
    @Override
    public void destroy() throws Exception {
        // 빈이 소멸될 때 특정 작업이 필요한 경우
        System.out.println("destroy() called");
    }

}
```

1. Initialization (초기화 단계)
   빈을 설정하고, 인스턴스화하고, 생성 후 후처리하는 과정이 포함된다.

2. activation (사용 단계)
   의존성을 주입하는 단계이다.

3. destruction (소멸 단계)
   기본적으로 컨테이너가 종료될 때에 소멸되며, 별도로 종료하고 싶은 경우에는 destroy() 함수를 호출한다.

## Reference

- [SLiPP-spring - 4주차 Bean Life Cycle](https://www.slipp.net/wiki/pages/viewpage.action?pageId=25528047)
- [Whiteship's Note](http://whiteship.tistory.com/791)
- [Container와 Bean의 Lifecycle / Scope](https://kutar37.tistory.com/entry/Container%EC%99%80-Bean%EC%9D%98-Lifecycle-Scope)
- [의존성 주입(Dependency injection)](https://www.slideshare.net/baejjae93/dependency-injection-36867592)
