---
category: 'Database'
tags: ['oracle']
title: '(Oracle) oracle11g 설치하기'
date: '2016-11-10 11:53:00'
---

#### 설치 System 환경

내가 설치해본 시스템 환경

```
Fedora13
```

> 2.6.9-11 이상의 커널이 필요

#### 오라클 설치 전 "추가 패키지 설치"

1. yum을 통하여 설치
   > 만약, 설치 전에 빠진 패키지가 있어도 괜찮음. 오라클 설치 중 설치되지 않은 패키지를 보여주는데, 그때 빠진 것들을 설치해도됨

```
yum -y install binutils
yum -y install compat-gcc-34
yum -y install compat-libgcc-296
yum -y install compat-libstdc++-296
yum -y install compat-libstdc++-33
yum -y install compat-db
yum -y install cpp
yum -y install gcc
yum -y install gcc-c++
yum -y install glibc
yum -y install glibc-common
yum -y install glibc-devel
yum -y install glibc-headers
yum -y install ksh
yum -y install libaio
yum -y install libaio-devel
yum -y install libgcc
yum -y install libstdc++
yum -y install libstdc++-devel
yum -y install make
yum -y install setarch
yum -y install libXp
yum -y install elfutils-libelf
yum -y install elfutils-libelf-devel
yum -y install sysstat
```

#### 커널 파라미터 및 시스템 파라미터 설정

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
# <domain> <type> <item> <value>
oracle soft nproc 2047
oracle hard nproc 16384
oracle soft nofile 1024
oracle hard nofile 65536
```

4. /etc/profile 파일에 다음 항목을 추가한다.

```
if [ $USER = "oracle" ]; then
  ulimit -u 16384 -n 65536
fi
```

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
ORACLE_HOME=$ORACLE_BASE/11gR2
ORACLE_SID=ORA11G
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

```
ex) zcat  10201_database_linux_x86_64.cpio.gz | cpio -idmv
```

#### 오라클을 설치한다.

runInstaller 실행을 하기 전에 아래의 명령어를 수행하여야 한다. (안그러면 한글이 다 깨져서 나옴)

```
export LANG=
```

#### 기타 (설치 Tip)

1. 설치 후, sqlplus, lsnrctl 등의 명령어가 실행 시 아래와 비슷한 에러가 발생하는 경우,
   SELinux 보안 설정 때문이므로 SELinux 보안 설정을 disable 또는 permissive로 변경해준다.

```
error while loading shared libraries xxxx.so: cannot restore segment prot after reloc Permission denied
```

`vi /etc/selinux/conifg` 파일에서 SELINUX의 설정 값을 disable 또는 permissive로 변경
그 뒤 시스템 reboot을 한다.

2.  또는 리스너 구동 시 아래와 같은 에러가 발생한다면...

```
LSNRCTL for Linux: Version 11.1.0.6.0 - Production on 18-FEB-2008 19:14:37

Copyright (c) 1991, 2007, Oracle. All rights reserved.

Message 1070 not found; No message file for product=network, facility=TNSTNS-12545: Message 12545 not found; No message file for product=network, facility=TNS
TNS-12560: Message 12560 not found; No message file for product=network, facility=TNS
TNS-00515: Message 515 not found; No message file for product=network, facility=TNS
Linux Error: 2: No such file or directory
```

포트가 열려있지 않으므로 오라클에서 사용하는 1521 포트를 방화벽에서 열어주면 된다.
