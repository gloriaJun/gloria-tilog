---
layout: post
title: "(Oracle) oracle10g 설치하기"
date: 2016-11-10 09:53:00
author: gloria
categories: database
tags: oracle
---

#### 설치 System 환경
내가 설치해본 시스템 환경
```
Fedora6, Centos 5.1, 5.2
```


#### 오라클 설치 전 "추가 패키지 설치"
1. yum을 통하여 설치
```
yum install binutils
yum install compat-gcc-34
yum install compat-libgcc-296
yum install compat-libstdc++-296
yum install compat-libstdc++-33
yum install compat-db
yum install cpp
yum install gcc
yum install gcc-c++
yum install glibc
yum install glibc-common
yum install glibc-devel
yum install glibc-headers
yum install ksh
yum install libaio
yum install libaio-devel
yum install libgcc
yum install libstdc++
yum install libstdc++-devel
yum install make
yum install setarch
yum install libXp
```

2. openmotif21은 yum을 이용하여 설치가 불가능하므로 다음 링크에서 다운로드 받아서 설치 ( 해당 파일 첨부)
- 링크 : ftp://rpmfind.net/linux/fedora/core/4/i386/os/Fedora/RPMS/openmotif21-2.1.30-14.i386.rpm
- 다운로드한 해당 파일을 설치한다.
```
rpm -ivh openmotif21-2.1.30-14.i386.rpm
```
> 사전에 설치되어야 하는 패키지가 누락된 경우에 오라클 설치 시에 linking 단계에서 설치에러가 발생하는 경우가 있음.

#### 시스템 파라미터 추가
1. /etc/sysctl.conf 파일에 다음 항목을 추가한다.
```
kernel.shmall = 2097152
kernel.shmmax = 2147483648
kernel.shmmni = 4096
kernel.sem = 250 32000 100 128
fs.file-max = 65536
net.ipv4.ip_local_port_range = 1024 65000
net.core.rmem_default = 262144
net.core.rmem_max = 262144
net.core.wmem_default = 262144
net.core.wmem_max = 262144
```

`/etc/sysctl.conf` 파일을 변경하였으면 다음과 같이 sysctl -p 명령을 실행하거나 시스템을 리부팅해야만 한다.
```
sysctl -p
```

2. /etc/pam.d/login 파일에 다음 항목을 추가한다.
```
session required /lib/security/pam_limits.so
```

3. /etc/security/limits.conf 파일에 다음 항목을 추가한다.
```
oracle     soft     nproc     2047
oracle     hard    nproc     16384
oracle     soft     nofile      1024
oracle     hard    nofile      65536
```

4. /etc/profile 파일에 다음 항목을 추가한다.
```
if [ $USER = "oracle" ]; then
  ulimit -u 16384 -n 65536
fi
```

5. /etc/redhat-release 파일을 다음과 같이 수정한다.
- 수정 전 : Fedora Core release 6 (Zod)
- 수정 후 : redhat-4

#### 오라클을 설치할 계정을 생성하고, profile을 수정
1. 오라클 설치 계정 생성
```
groupadd dba
useradd -g dba oracle
passwd oracle
```

2. oracle 설치 계정의 profile을 수정
```
ORACLE_BASE=/opt/oracle
ORACLE_HOME=$ORACLE_BASE/10gR2
ORACLE_SID=ORA10G
LD_LIBRARY_PATH=$ORACLE_HOME/lib
PATH=$PATH:$ORACLE_HOME/bin
export ORACLE_BASE ORACLE_HOME ORACLE_SID LD_LIBRARY_PATH PATH
```

여기서 다음의 환경변수들은 사용자의 환경에 맞게 수정하여 profile을 작성한다.
- ORACLE_BASE(oracle이 설치된 경로), ORACLE_HOME, ORACLE_SID

#### oracle 설치를 위하여 x-window에서 작업한다.
1. x window에 oracle 계정으로 로그인을 한다.
2. 터미널에서 root 계정으로 접속한 뒤에 oracle에서도 클라이언트를 사용할 수 있게 하기 위해 아래의 명령을 실행
```
xhost +
```
3. 다시 oracle 계정으로 접속
4. 다운받은 oracle 설치파일의 압축을 해제
참고) cpio의 압축 해제 방법
ex) zcat  10201_database_linux_x86_64.cpio.gz | cpio -idmv

#### 오라클을 설치한다.
#### 설치 후 작업
 /etc/redhat-release 파일을 수정한 것을 원복한다.
ex)
   수정 전 : redhat-4
   수정 후 : Fedora Core release 6 (Zod)
