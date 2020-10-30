---
layout: post
title: "(Postgresql) Trouble Shooting"
date: 2017-02-11 11:53:00
author: gloria
categories: database
tags: postgresql stackoverflow
---

postgresql이나 greenplum을 설치 후에 아래와 같은 에러가 발견 햇을 때의 조치 했던 방법

#### psql: FATAL:  Peer authentication failed for user
```sh
postgres@ubuntu:~$ psql souldb -U soul
psql: FATAL:  Peer authentication failed for user "soul"
```

host 지정이 안되어있어 해당 유저를 찾지 못함. psql 실해 옵션에 localhost 추가
```sh
postgres@ubuntu:~$ psql souldb -U soul -W -h localhost
```
