---
title: 记一次校园网 DNS 阻断导致的节点超时
pubDate: 2025-12-22
categories: ['技术']
---

## 问题描述

本人通常在 Manjaro Linux 系统下使用 FlClash 网上冲浪。

约 12 月 20 日开始，使用手机热点时，代理连接正常；在校园网下，所有节点全部 Timeout。

定位问题时发现 `dig @<Any DNS Server> www.baidu.com` 均 Timeout，目测所有校内出口的 UDP/53 均被阻断。

## 解决方案

在 FlClash 配置中，将 `default-nameserver` 与 `nameserver` 均置为 DoH，即可正常使用 FlClash。

另需配置 `nameserver-policy` 和 `rules` 项保证开启代理时可访问校内资源。

```yaml
dns:
    default-nameserver:
        - dhcp://system
        - https://223.5.5.5/dns-query
        
    nameserver:
        - https://doh.pub/dns-query
        - https://dns.alidns.com/dns-query
        
    nameserver-policy:
        "*zju.edu.cn": dhcp://system
        "*cc98.org": dhcp://system
        "geosite:private": dhcp://system

rules:
    - DOMAIN-SUFFIX,zju.edu.cn,DIRECT
    - DOMAIN-KEYWORD,zju,DIRECT
    - DOMAIN-KEYWORD,cc98,DIRECT
    - GEOIP,PRIVATE,DIRECT,no-resolve
    - IP-CIDR,10.0.0.0/8,DIRECT,no-resolve
    - IP-CIDR,172.16.0.0/12,DIRECT,no-resolve
    - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
```

## 其他

暂不清楚校网的该策略造成的其他影响。
