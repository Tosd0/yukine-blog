---
title: '各种加密协议笔记'
slug: 'about-secure-encryption-protocols'
description: '关于 HTTPS, SSL/TLS'
pubDate: 2026-02-23
tags: [计算机网络]
modDate: 2026-02-23
draft: false
pinned: false
---

# 名词

- HTTPS - Hypertext Transfer Protocol Secure, 超文本传输安全协议
  - HTTPS = HTTP + SSL/TLS
- SSL - Secure Sockets Layer, 安全套接字层
- TLS - Transport Layer Security, 传输层安全协议
  - TLS 就是升级版的 SSL。SSL 3.1 = TLS 1.0

# 用途

SSL/TLS 为底层密码学技术。在邮件中使用 SMTP over TLS，在网页中是 HTTP over TLS（缩写为 HTTPS），数据库底层也是用的 TLS，说 SSL/TLS。

# SSL 的重命名

SSL 由网景公司（Netscape）创建。随着互联网发展，加密需求日显，网景便将 SSL 3.0 交给了互联网工程任务组（IETF, Internet Engineering Task Force）。但当时网景和微软正在浏览器大战中（有人能数清楚总共有多少次浏览器大战吗。），SSL 作为网景创建的协议，直接使用这个名字相当于免费帮网景宣传（但是到现在我们还在用啊。），于是 IETF 重命名 SSL 为 TLS。这个名字同样精确描述了这个协议的作用。

理论和工程层面，SSL 和 TLS 就是一样的。而且 SSL 已经被废除了，现在用的基本都是 TLS。但 SSL 已经被用惯了，就像所有人都说 SSL 证书而不说 TLS 证书，也没有人`import tls`。所以看到 SSL 的时候，可以随意把它和 TLS 替换。

# 版本

TLS 1.0 / 1.1 于 2021 年被废弃。现在我们只用 TLS 1.2 / TLS 1.3。

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/88d03754-50b2-8122-b7c6-0003ef97b7cb/44c9af16-a7ae-4b1b-8cc1-a53efe9404bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AR3I7QG%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCvdPY%2Fa2kBuALWsQCdlJiA%2BR4G%2FArwaCeTtSoMHYe8iwIgcqrOXAQJ2dga0gOJYIP71xtv8FAhPuijSGDUTGe3834qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAx6q9KxZ19DSNFuyrcA7cMb%2BGNL1CZYCerhWI253FNMv9jtpk808pbYxtivH9GeyZJi0ozyzkwrZQSZgK9CtOo6OTrYkyd5sJEJfJ59oWpChE7O7pceUnUkvt8KSxX4mRyDTpWYrVeNEopb80nIZX3qbSOyofRM8aM%2BDUsT8iKR2wHU9buru6AX0r6itUQmG%2Fp80g081kWuwQIWvZpScnp6hFBpXyVxcbKXRLW0X79Jaf7quKmlcx4%2FsvCNQNoM6MZ%2FfBR4Fc3z%2Fu%2BVsqRcIvFo9l1PvXxH%2F0x5k6Qp7ohytBJFU4TMDQc5ws5dNUODIcBem1%2BEHde2SLm%2F8edHwinNbLwSM3bElykLKiTlsu%2BB56n3bRSaMkFYYwU69z3XT39fnGt5zdqGJrlNQMmrFM3D9Sd%2B4kQOAyJKCXc2XDRw1Gtdl%2F33j1n3YgJln%2BR8WWHwvBorPIjoDll%2F%2FT5p6DQ8jd37TG6U%2FmHDLa%2FbCrzhZmr2VWei8dtdiPmDJMbuEQwAlU2rGnTht5Jt4pRhP%2FTekaJQ10qFQxmVcryMrXRw5JZ2cLQBbeDECCbxpit0ojbGkRQVUEQuO1gm%2FFR2rfvkEPexqP0VBMbD3k%2F3XNtsu5HqEqL2MChjv%2FTYKR0QhKep7YOwULr0sbDMImz78wGOqUB7ENoSlyA1J3vmMKQP%2F43qdRAugkcqBG12vdrx9DI5vEV1MO2FD04NIe%2BeCF9tZulLUzBq0Vt0eMtK35v2vTz1pSCk5tzVQ%2BGeVZbARB1lxI14b5ARoINdDDhRIsGeghnJlAvsW8en3%2FNFfwtSlYcwaSUCVMP7DdEQZrOxpsVRR8H%2FFGJ8zvtxghqeqVDklmJmqGXp9N6cSN6M7n99WRqSZZ68oOQ&X-Amz-Signature=52f826916e6d8321f514a35b071e56e8de3d3aabb4b7e0d3d160fbada29f3c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/88d03754-50b2-8122-b7c6-0003ef97b7cb/e8b07a01-3afa-4b5a-bb78-065eb25e390f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AR3I7QG%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCvdPY%2Fa2kBuALWsQCdlJiA%2BR4G%2FArwaCeTtSoMHYe8iwIgcqrOXAQJ2dga0gOJYIP71xtv8FAhPuijSGDUTGe3834qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAx6q9KxZ19DSNFuyrcA7cMb%2BGNL1CZYCerhWI253FNMv9jtpk808pbYxtivH9GeyZJi0ozyzkwrZQSZgK9CtOo6OTrYkyd5sJEJfJ59oWpChE7O7pceUnUkvt8KSxX4mRyDTpWYrVeNEopb80nIZX3qbSOyofRM8aM%2BDUsT8iKR2wHU9buru6AX0r6itUQmG%2Fp80g081kWuwQIWvZpScnp6hFBpXyVxcbKXRLW0X79Jaf7quKmlcx4%2FsvCNQNoM6MZ%2FfBR4Fc3z%2Fu%2BVsqRcIvFo9l1PvXxH%2F0x5k6Qp7ohytBJFU4TMDQc5ws5dNUODIcBem1%2BEHde2SLm%2F8edHwinNbLwSM3bElykLKiTlsu%2BB56n3bRSaMkFYYwU69z3XT39fnGt5zdqGJrlNQMmrFM3D9Sd%2B4kQOAyJKCXc2XDRw1Gtdl%2F33j1n3YgJln%2BR8WWHwvBorPIjoDll%2F%2FT5p6DQ8jd37TG6U%2FmHDLa%2FbCrzhZmr2VWei8dtdiPmDJMbuEQwAlU2rGnTht5Jt4pRhP%2FTekaJQ10qFQxmVcryMrXRw5JZ2cLQBbeDECCbxpit0ojbGkRQVUEQuO1gm%2FFR2rfvkEPexqP0VBMbD3k%2F3XNtsu5HqEqL2MChjv%2FTYKR0QhKep7YOwULr0sbDMImz78wGOqUB7ENoSlyA1J3vmMKQP%2F43qdRAugkcqBG12vdrx9DI5vEV1MO2FD04NIe%2BeCF9tZulLUzBq0Vt0eMtK35v2vTz1pSCk5tzVQ%2BGeVZbARB1lxI14b5ARoINdDDhRIsGeghnJlAvsW8en3%2FNFfwtSlYcwaSUCVMP7DdEQZrOxpsVRR8H%2FFGJ8zvtxghqeqVDklmJmqGXp9N6cSN6M7n99WRqSZZ68oOQ&X-Amz-Signature=d2cdbff43463259850586351a8804b5fb10cb0344897bc3ab44e3c180ac39a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
