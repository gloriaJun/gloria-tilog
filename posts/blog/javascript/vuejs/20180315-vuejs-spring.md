---
category: 'Javascript'
tags: ['vuejs', 'frontend', 'springboot', 'thymeleaf']
title: '(VueJS) springboot 연동'
date: '2018-03-15 13:35:00'
---

- TOC
  {:toc}

Backend 프레임워크을 Spring Boot로 사용하고,
Frontend 프레임워크를 Vue.js로 사용하는 경우에 thymeleaf를 이용하여 연동하는 방법이다.

## Spring Boot 설정

#### thymeleaf 설정

###### Gradle

```
dependencies {
    compile("org.springframework.boot:spring-boot-starter-web")
    compile("org.springframework.boot:spring-boot-starter-thymeleaf:2.0.1.RELEASE")
		...
}
```

###### Maven

`pom.xml`에 thymeleaf 모듈을 추가한다

```xml
		<!-- template engine library for view -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-thymeleaf</artifactId>
		</dependency>
		<dependency>
			<groupId>net.sourceforge.nekohtml</groupId>
			<artifactId>nekohtml</artifactId>
		</dependency>
```

#### thymeleaf 및 static 경로 설정

**src/main/resources/application.yml**

```
//thymeleaf의 경우 html5 모드가 기본으로 설정되어 있어 아래의 설정을 추가해주어야 meta tag로 인한 에러가 발생하지 않는다.
spring.thymeleaf.mode: LEGACYHTML5
// 기본 설정 값이므로 별도로 정의하지 않아도 된다.
#spring.thymeleaf.prefix: classpath:/templates
// static 경로
#spring.resources.static-locations: classpath:/static
```

#### Router Controller 설정

url로 전달된 요청을 처리하기 위한 `RouteController`를 생성한다

```java
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class RouteController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }
}
```

## 빌드 설정

###### Gradle

npm을 실행하기 위한 gradle 설정

```
plugins {
  id "com.moowork.node" version "1.2.0"
}

node {
  version = '9.3.0'
  npmVersion = '5.8.0'
  download = true
}

task npmBuild(type: NpmTask) {
  args = ['run', 'build']
}

task npmClean(type: Delete) {
  delete 'dist'
}

npmBuild.dependsOn(npmInstall)
```

`npm run build`를 수행한 뒤에 생성된 산출물을 backend의 build 디렉토리로 복사하고 jar 파일을 생성하기 위한 부분

```
// frontend build & copy to build dir
task resourcesCopy(dependsOn: ':frontend:npmBuild') {
    doLast {
        // copy template
        copy {
            from '../frontend/dist/index.html'
            into 'build/resources/main/templates'
        }
        // copy static
        copy {
            from '../frontend/dist/static'
            into 'build/resources/main/static/static'
        }
    }
}

bootJar {
    baseName = 'spring-boot-vuejs-spa'
    version =  projectVersion

    dependsOn 'resourcesCopy'
}
```

###### Maven

maven으로 빌드 시에 frontend 소스도 빌드되도록 설정하기 위해서는 [eirslett/frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin#running-npm) 플러그인을 이용하여 설정한다.

`npm run build`를 수행하기 위한 로직이다.

```xml
  <build>
    <plugins>
      <plugin>
        <groupId>com.github.eirslett</groupId>
        <artifactId>frontend-maven-plugin</artifactId>
        <version>1.6</version>
        <executions>
          <!-- Install our node and npm version to run npm/node scripts-->
          <execution>
            <id>install node and npm</id>
            <goals>
              <goal>install-node-and-npm</goal>
            </goals>
            <configuration>
              <nodeVersion>v9.3.0</nodeVersion>
              <npmVersion>5.8.0</npmVersion>
              <nodeDownloadRoot>https://nodejs.org/dist/</nodeDownloadRoot>
              <npmDownloadRoot>http://registry.npmjs.org/npm/-/</npmDownloadRoot>
            </configuration>
          </execution>

          <!-- Set NPM Registry -->
          <execution>
            <id>npm set registry</id>
            <goals>
              <goal>npm</goal>
            </goals>
            <configuration>
              <arguments>config set registry https://registry.npmjs.org</arguments>
            </configuration>
          </execution>

          <!-- Set SSL privilege -->
          <execution>
            <id>npm set non-strict ssl</id>
            <goals>
              <goal>npm</goal>
            </goals>
            <!-- Optional configuration which provides for running any npm command -->
            <configuration>
              <arguments>config set strict-ssl false</arguments>
            </configuration>
          </execution>

          <!-- Install all project dependencies -->
          <execution>
            <id>npm install</id>
            <goals>
              <goal>npm</goal>
            </goals>
            <!-- optional: default phase is "generate-resources" -->
            <phase>generate-resources</phase>
            <!-- Optional configuration which provides for running any npm command -->
            <configuration>
              <arguments>install</arguments>
            </configuration>
          </execution>

          <!-- Build and minify static files -->
          <execution>
            <id>npm run build</id>
            <goals>
              <goal>npm</goal>
            </goals>
            <configuration>
              <arguments>run build</arguments>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
```

frontend에서 빌드된 산출물을 backend 빌드 시 jar로 묶는 작업을 정의한다.

```xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <artifactId>maven-resources-plugin</artifactId>
                <executions>
                    <execution>
                        <id>cpopy-static-resources</id>
                        <phase>generate-resources</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>target/main/resources/static</outputDirectory>
                            <overwrite>true</overwrite>
                            <resources>
                                <resource>
                                    <directory>${project.parent.basedir}/frontend/dist</directory>
                                    <includes>
                                        <include>static/</include>
                                    </includes>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                    <execution>
                        <id>cpopy-template-resources</id>
                        <phase>generate-resources</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>target/main/resources/templates</outputDirectory>
                            <overwrite>true</overwrite>
                            <resources>
                                <resource>
                                    <directory>${project.parent.basedir}/frontend/dist</directory>
                                    <includes>
                                        <include>index.html</include>
                                    </includes>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
```

## 실습해본 소스 코드

- [springboot-vuejs-spa](https://github.com/gloriaJun/springboot-vuejs-spa.git)
- [springboot-vuejs-prerender](https://github.com/gloriaJun/springboot-vuejs-prerender)

## Reference

- [Spring Boot + Vue.js 연동하기](http://itstory.tk/entry/Spring-Boot-Vuejs-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0)
- [Apache + Tomcat , SPA](https://medium.com/@circlee7/apache-tomcat-spa-59e3d58ced6f)
- [gradle-node-plugin](https://github.com/srs/gradle-node-plugin/blob/master/docs/node.md)
- [globe42](https://github.com/Ninja-Squad/globe42)
