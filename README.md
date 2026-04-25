# box

自用资源仓库，主要用于托管 Loon 插件、任务、脚本与图标资源。

## 仓库说明

- 默认分支：`main`
- 适用工具：Loon
- 托管内容：插件（`.lpx`）、任务（`.ltx`）、脚本（`.js`）、图标索引（`.json`）

---

## Loon 插件（LPX）

> 可直接复制以下直链导入 Loon。

| 名称 | 类型 | 功能简介 | 直链 |
|---|---|---|---|
| WeTalk | LPX | 获取 Cookie 与自动签到 | `https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/WeTalk.lpx` |
| PingMe | LPX | 获取 Token 与每日签到 | `https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/PingMe.lpx` |
| Reddit 去广告 | LPX | 过滤推广、关闭 NSFW、自动翻译 | `https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/reddit-clean.lpx` |
| 酷狗音乐VIP | LPX | 解锁会员及歌曲，去广告 | `https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/kugouvip.lpx` |
| iios签到 | LPX | 获取请求头并按设定 Cron 自动签到 | `https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/iios_checkin.lpx` |
| 蜜语+Lovekey | LPX | 蜜语与 Lovekey 键盘合并插件 | `https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/mxy-lovekey.lpx` |
| 喜马拉雅会员增强 | LPX | 解锁会员、大师课、音质/音效、下载与播放器皮肤，并净化部分广告 | `https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/ximalaya.lpx` |
| 菜谱大全会员增强 | LPX | 香哈菜谱 / 菜谱大全 / 烘焙小屋会员解锁与内容增强 | `https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/caipu.lpx` |

### 插件直链汇总

```text
https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/WeTalk.lpx
https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/PingMe.lpx
https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/reddit-clean.lpx
https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/kugouvip.lpx
https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/iios_checkin.lpx
https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/mxy-lovekey.lpx
https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/ximalaya.lpx
https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LPX/caipu.lpx
```

---

## Loon 任务（LTX）

| 名称 | 类型 | 功能简介 | 直链 |
|---|---|---|---|
| 小米刷步 | LTX | 每天 08:33 执行小米刷步任务 | `https://raw.githubusercontent.com/elyndareth-max/box/main/Loon/LTX/mi-step.ltx` |

---

## 插件说明

### WeTalk
- 获取 Cookie
- 默认每 4 小时第 5 分钟执行一次签到任务
- 按设定 Cron 自动执行签到
- 支持在插件参数中控制 Cookie 获取与定时任务开关

### PingMe
- 获取 Token
- 默认每 4 小时第 10 分钟执行一次签到任务
- 按设定 Cron 自动执行签到
- 支持在插件参数中控制 Token 获取与定时任务开关

### Reddit 去广告
- 过滤 GraphQL 返回中的推广内容
- 关闭 NSFW 提示（可配置）
- 自动翻译当前固定开启，保证稳定生效

### 酷狗音乐VIP
- 解锁会员及歌曲权限
- 去除部分广告与弹窗
- 适配多类用户信息与歌曲链接接口
- 图标已替换为 `luestr/IconResource` 中的 `KuGou.png`

### iios签到
- 获取 `www.iios.fun/api/user/info` 请求头
- 按设定 Cron 自动执行签到
- 支持在插件参数中控制请求头获取开关

### 蜜语+Lovekey
- 同时包含蜜语与 Lovekey 键盘重写规则
- 一个插件即可覆盖两个应用
- 已改为仓库自托管脚本与插件

### 喜马拉雅会员增强
- 解锁会员、大师课、音质/音效、下载与播放器皮肤等能力
- 净化部分广告、签到页与底部会员弹窗
- 已改为仓库自托管脚本与插件

### 菜谱大全会员增强
- 适配香哈菜谱、菜谱大全、烘焙小屋相关会员接口
- 解锁会员状态与部分付费内容展示
- 已改为仓库自托管脚本与插件

---

## 任务说明

### 小米刷步
- 定时执行小米刷步脚本
- 已改为仓库自托管脚本与图标
- 内置失败后随机延迟重试机制，直到成功执行一次为止
- 单次任务最长重试窗口：30 分钟
- 成功通知会显示各关键步骤重试次数
- 执行时间：每天 `08:33`
