---
layout: post
title: "(Postgresql) 설치하기"
date: 2017-02-09 11:53:00
author: gloria
categories: database
tags: postgresql
---

###### 설치 참고 링크
http://v_lovepooh_v.blog.me/20179692966
http://ngee.tistory.com/82

- ubuntu에 설치시 참고 링크 : http://wonzopein.com/45

- postgreSQL 다운 : http://www.postgresql.org/ftp/source/

1. postgreSQL 다운로드
```sh
$ wget http://ftp.postgresql.org/pub/source/v9.2.4/postgresql-9.2.4.tar.gz
```

2. 설치
```sh
cd postgresql-<version>
./configure
make
make install
```
설치가 정상적으로 되었다면....아래의 경로에 폴더가 생성됨.
```sh
ls /usr/local/pgsql
```

3. 유저 생성
```sh
$ useradd pgsql
$ passwd pgsql
```

4. pgsql 디렉토리 권한 변경
```sh
$ chown -R pgsql:pgsql /usr/local/pgsql
```

5. 환경변수 설정
.bash_profile 에 아래의 환경변수 추가 및 적용
```sh
export PG_HOME=/usr/local/pgsql
export PATH=$PG_HOME/bin:$PATH
export MANPATH=$PG_HOME/man
PGLIB=$PG_HOME/lib
PGDATA=$PG_HOME/data
```

6. 초기데이타 생성
```sh
[pgsql@soul:/home/pgsql]$ initdb  -D pgdata
The files belonging to this database system will be owned by user "pgsql".
This user must also own the server process.

The database cluster will be initialized with locale "C".
The default database encoding has accordingly been set to "SQL_ASCII".
The default text search configuration will be set to "english".

creating directory pgdata ... ok
creating subdirectories ... ok
selecting default max_connections ... 100
selecting default shared_buffers ... 32MB
creating configuration files ... ok
creating template1 database in pgdata/base/1 ... ok
initializing pg_authid ... ok
initializing dependencies ... ok
creating system views ... ok
(...중략...)

Success. You can now start the database server using:

    postgres -D pgdata
or
    pg_ctl -D pgdata -l logfile start
```

7. 데이타베이스 서버 실행
```sh
[pgsql@soul:/home/pgsql]$ postgres -D pgdata
LOG:  database system was shut down at 2013-08-22 17:22:37 KST
LOG:  autovacuum launcher started
LOG:  database system is ready to accept connections
```
또는
```sh
[pgsql@soul:/home/pgsql]$ pg_ctl -D pgdata -l logfile start
server starting
```

8. 데이타베이스 생성
```sh
[pgsql@soul:/home/pgsql]$ createdb soul
```

생성한 데이타베이스에 접속
```sh
[pgsql@soul:/home/pgsql]$ psql -d soul
psql (9.2.4)
Type "help" for help.

soul=#
```

###### 접속 방법
```sh
postgres@ubuntu:~$ psql souldb -U soul -W -h localhost
Password for user soul: tibero
psql (9.1.9)
SSL connection (cipher: DHE-RSA-AES256-SHA, bits: 256)
Type "help" for help.

souldb=>  
```
