---
category: 'Java'
tags: ['typesafe', 'properties', 'config']
title: '(Java) typesafe 라이브러리를 이용해서 json 포맷의 설정 파일 읽기'
date: '2017-03-28 15:53:00'
---

## What is Typesafe …?

java properties, json, json superset(예를 들어 **hocon**)과 같은 설정 파일을 읽기 위한 configuration library이다.
관련한 자세한 내용은 [github]( [GitHub - typesafehub/config: Configuration library for JVM languages](https://github.com/typesafehub/config) ) 페이지를 참고하면 됨.

###### What is HOCON ..?

위키피디아에서는 아래와 같이 정의한다.

> [HOCON]( [config/HOCON.md at master · typesafehub/config · GitHub](https://github.com/typesafehub/config/blob/master/HOCON.md) )(Human-Optimized Config Object Notation) is a format for human-readable data, and a superset of JSON and .properties.  
> Json의 상위 개념이고…play framework의 설정파일이라고 한다.
> _(json의 상위 개념이다보니..기본적인 사용법은 json이랑 비슷한듯…)_

## Usage

먼저 `pom.xml` 에 해당 라이브러리를 정의한다

```xml
<dependency>
    <groupId>com.typesafe</groupId>
    <artifactId>config</artifactId>
    <version>1.3.1</version>
</dependency>
```

- 1.3.1의 경우에는 java 8 에서 유지보수가 되고 있다고 함.
- 1.3.x 이상은 java 7 이상.
- java 6을 사용하는 경우에는 1.2.1 이하 버전을 사용해야함.

###### 설정 파일 생성

설정파일을 생성해서 classpath에 위치시켜야 한다.
그리고 생성한 설정 파일은 `ConfigFactory.load()` 메소드를 이용해서 불러들이는데, 해당 메소드에서 기본으로는 아래와 같은 순서로 설정파일을 찾는다고 한다. (기본 파일명을 사용한 경우에는 아규먼트로 전달해주지 않아도 됨)

1. system properties
2. application.conf
3. application.json
4. application.properties
5. reference.conf

만약, 사용자 정의한 이름으로 사용하려면 `ConfigFactory.load(myapp)`과 같이 아규먼트로 전달해주면 `my app.conf`라는 파일을 찾는다고 한다.

**설정파일 예시**

```json
// src/test/resources/application.conf
# default setting value
settings: {
  content-type: "application/json;charset=UTF-8"
  headers: {
    "X-User-Locale": "ko_KR"
    "X-User-Timezone" : "+09:00"
  }
}
```

###### java class에서 설정파일 읽어오기

```java
import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PropReadFactory {

    private static Logger logger = LoggerFactory.getLogger(PropReadFactory.class);

    public void PropertyReader() {
        Config config = ConfigFactory.load();
        logger.debug(config.getString("settings.content-type"));
    }
}
```
