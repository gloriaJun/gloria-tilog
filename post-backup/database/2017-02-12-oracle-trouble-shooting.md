---
layout: post
title: "(Oracle) Trouble Shooting"
date: 2017-02-12 09:53:00
author: gloria
categories: database
tags: oracle stackoverflow
---

#### LRM-00109: could not open parameter file
###### 원인
환경변수의 ORACLE_SID와 최초 설치 시 지정한 SID가 일치하지 않아서 발생.

###### 해결방법
1. 오라클 설치 시 등록된 SID 확인
  ```sh
  [ora11g@soulvm:/opt/app/oracle/11gR2/dbs]$ ls
  hc_ora11g.dat  init.ora  lkORA11G  orapwora11g  peshm_ora11g_0  spfileora11g.or
  ```
  여기서는 설치 시, ora11g로 등록된 상태

2. ORACLE_SID 확인
  ```sh
  $ echo $ORACLE_SID
  ora11g
  ```

3. 환경변수 또는 init.ora 파일 확인하여 등록된 sid에 맞게 변경
만약, `/opt/app/oracle/11gR2/dbs`에 설정된 sid와 ORACLE_SID가 일치하지 않다면...설정된 sid에 맞춰서 ORACLE_SID를 변경해줄 것.
두 개가 일치하다면...init.ora 파일을 열어서 등록된 sid가 틀리다면..해당 init.ora파일의 sid를 수정해준다.
