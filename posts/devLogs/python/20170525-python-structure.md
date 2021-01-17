---
category: 'Python'
tags: []
title: '(Python) 문법 정리'
date: '2017-05-25 16:35:00'
---

- TOC
  {:toc}

python 문법 정리

## 리스트

#### 리스트 복사

“=“으로 대입을 하게 되면 별도의 리스트 변수로 생성되지 않고 동일한 리스트를 참조하게 된다.
서로 다른 리스트를 참조하도록 하려면 아래와 같이 복사를 해야한다.

```python
a = [1, 2, 3]
b = a[:]
```

## 조건문 및 반복문

#### for 문) 리스트 안에 for 문 포함

```python
[표현식 for 항목 in 반복가능객체 if 조건]

[표현식 for 항목1 in 반복가능객체1 if 조건1
        for 항목2 in 반복가능객체2 if 조건2
        ...
        for 항목n in 반복가능객체n if 조건n]
```

EX) 예시  
아래와 같이 작성한 문장을..

```python
def number_generator(x, n):
    result = []

    for i in range(x, x*n+1, x):
        print (i)
        result = result + [i]

    return result
```

한 줄로 리스트 안에 포함시킬 수 있음

```python
def number_generator(x, n):
	return [i for i in range(x, x*n+1, x)]
```
