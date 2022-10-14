---
category: 'Java'
tags: []
title: '(Java) Basic'
date: '2017-04-20 11:30:00'
---

자바의 정석 pdf를 인터넷에서 구하게 되어서 기초를 다시 정리할겸 읽으면서 개인적으로 잘 기억이 되지 않거나 헷갈리는 부분을 정리...

## 변수의 타입

Primitive Type과 Reference Type이 있음.

###### Primitive Type

계산을 위한 실제 값을 저장한다.<br/>
![]({{ post.url }}/assets/images/post/2017/0420-java-primitive-type.png){: .width-70 }

###### Reference Type

primitive를 제외한 나머지 타입으로 null 또는 객체의 주소를 값으로 갖음.

## Type Casting

![]({{ post.url }}/assets/images/post/2017/0420-java-type-casting.png){: .width-70 }
왼쪽에서 오른쪽으로의 변환은 캐스트 연산자를 사용하지 않아도 자동으로 형변환이 일어난다.
하지만 반대 방향의 경우, 형변환시 값의 손실이 발생할 수 있으므로 변환시 반드시 캐스트 연산자를 사용하여야 한다.

## 연산자

![]({{ post.url }}/assets/images/post/2017/0420-java-logical.png){: .width-70 }

> < 비트 연산자 ‘|, &’ 와 논리 연산자 ‘||, &&’ 의 차이 >
> 논리 연산자의 경우 좌측이 조건을 만족하면 다른 값들은 검색하지 않음.
> 그러므로 같은 조건식이라도 피연산자의 위치에 따라 연산 속도의 차이가 있을 수 있음.
> 반면, 비트 연산자는 항상 양 쪽의 연산자를 모두 검사함.

![]({{ post.url }}/assets/images/post/2017/0420-java-operator.png){: .width-70 }

###### 연산자 우선순위

- 산술 > 비교 > 논리 > 대입
- 단항 > 이항 > 삼항
  _단항과 대입 연산자의 경우는 오른쪽에서 왼쪽으로 연산이 진행된다_

###### 1증감연산자 - ++, --

전위형(++i)와 후위형(i++)에 대한 예시.

example1)

```java
class OperatorEx2 {
public static void main(String args[]) {
int i=5;
int j=0;
j = i++;
System.out.println("j=i++; 실행 후, i=" + i +", j="+ j);
i=5; // 결과를 비교하기 위해, i와 j의 값을 다시 5와 0으로 변경 j=0;
j = ++i;
System.out.println("j=++i; 실행 후, i=" + i +", j="+ j);
} }
```

output)

```
j=i++; 실행 후, i=6, j=5
j=++i; 실행 후, i=6, j=6
```

example2)

```java
class OperatorEx3 {
public static void main(String args[]) {
int i=5, j=5;
System.out.println(i++); System.out.println(++j); System.out.println("i = " + i + ", j = " +j);
} }
```

output

```
5
6
i = 6, j = 6
```

> 전위형(++i)는 값을 먼저 증가(감소) 시킨 후에 변수가 참조되는데 반해,
> 후위형(i++)은 변수가 참조된 후에 값이 증가(감소)가 된다.

![]({{ post.url }}/assets/images/post/2017/0420-java-operator2.png){: .width-70 }

###### shitf 연산자

곱셈이나 나눗셈 연산자를 사용하면 같은 결과를 얻을 수 있는데, 굳이 쉬프트연산자를 제공하 는 이유는 속도 때문이다.
예 를 들어 8 >> 2 의 결과는 8 / 4의 결과와 같다. 하지만, 8 / 4를 연산하는데 걸리는 시간보 다 8 >> 2를 연산하는데 걸리는 시간이 더 적게 걸린다. 다시 말하면, ">>" 또는 "<<" 연산자를 사용하는 것이 나눗셈(/) 또는 곱셈(\*) 연산자를 사용하는 것 보다 더 빠르다.
쉬프트연산자보다 곱셈 또는 나눗셈연산자를 주로 사용하고, 보다 빠른 실행속도가 요구되어지는 곳에만 쉬프트연산자를 사용하도록 한다.
