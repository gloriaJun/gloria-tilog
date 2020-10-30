---
layout: post
title: "(Postgresql) 사용법 정리"
date: 2017-02-11 19:53:00
author: gloria
categories: database
tags: postgresql
---

#### DB 접속
```sh
$ psql "DBNAME"
```
또는
```sh
$ psql "DBNAME" "USER"
```

#### DB 생성
```sh
$ createdb -h tmc01 -p 5432 mydb
```
또는
```sh
$ createdb mydb -O soul -W
Password:
```
또는
```sh
$ createdb mydb
```

#### DB 삭제
```sh
$ dropdb -h tmc01 -p 5432 gpadmin
```

#### 사용자 추가
```sh
mydb=# create user gptest with password 'tibero';
NOTICE:  resource queue required -- using default resource queue "pg_default"
CREATE ROLE
```
또는
```sh
$ createuser soul -W
Shall the new role be a superuser? (y/n) n
Shall the new role be allowed to create databases? (y/n) n
Shall the new role be allowed to create more new roles? (y/n) n
Password:
NOTICE:  resource queue required -- using default resource queue "pg_default"
```

* 확인
```sh
mydb=# select * from pg_shadow;
usename | usesysid | usecreatedb | usesuper | usecatupd |               passwd                | valuntil
| useconfig
---------+----------+-------------+----------+-----------+-------------------------------------+----------
+-----------
gpadmin |       10 | t           | t        | t         | md5b44a9b06d576a0b083cd60e5f875cf48 |         
|
gptest  |    16995 | f           | f        | f         | md532f059878e86f735feae5b7dcfbb8b72 |         
|
(2 rows)

mydb=# select * from pg_user;
usename | usesysid | usecreatedb | usesuper | usecatupd |  passwd  | valuntil | useconfig
---------+----------+-------------+----------+-----------+----------+----------+-----------
gpadmin |       10 | t           | t        | t         | ******** |          |
gptest  |    16995 | f           | f        | f         | ******** |          |


mydb=> \du
                       List of roles
Role name |            Attributes             | Member of
-----------+-----------------------------------+-----------
gpadmin   | Superuser, Create role, Create DB |
soul      |                                   |
```

#### DB 확인 (생성되어있는 DB 확인)
```sh
$ psql -l
                  List of databases
   Name    |  Owner  | Encoding |  Access privileges
-----------+---------+----------+---------------------
gpdb      | gpadmin | UTF8     |
mydb      | soul    | UTF8     |
postgres  | gpadmin | UTF8     |
template0 | gpadmin | UTF8     | =c/gpadmin         
                                : gpadmin=CTc/gpadmin
template1 | gpadmin | UTF8     | =c/gpadmin         
                                : gpadmin=CTc/gpadmin
(5 rows)
```

#### 패스워드 변경
```sh
postgres@ubuntu:~$ psql
psql (9.1.9)
Type "help" for help.

postgres=# alter user soul with password 'tibero';
ALTER ROLE
```

## function 생성 및 삭제하기
```sql
CREATE TABLE i86410 (id int, name varchar(32), gender char(1) ) DISTRIBUTED BY (id);
insert into i86410 values (1, 'AAA', 'F');
insert into i86410 values (2, 'BBB', 'F');
insert into i86410 values (3, 'CCC', 'M');
```

#### function 생성.
```sql
CREATE OR REPLACE FUNCTION fn_i86410(c char, v varchar, i integer,
    f float, dt date, t time, ts timestamp) RETURNS refcursor AS $$
    DECLARE
      ref refcursor;
    BEGIN
      OPEN ref FOR SELECT * FROM i86410;
      RETURN ref;
    END;
    $$ LANGUAGE plpgsql;
```

#### 삭제
```sql
drop function fn_i86410(c char, v varchar, i integer, f float, dt date, t time, ts timestamp) ;
```
