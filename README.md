# box

自用资源仓库，主要用于托管 Loon 插件、任务与脚本。

## Loon 插件索引

| 名称 | 类型 | 说明 | 直链 |
|---|---|---|---|
| WeTalk | LPX | 获取 Cookie 与自动签到 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Plugin/WeTalk.lpx` |
| PingMe | LPX | 获取 Token 与每日签到 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Plugin/PingMe.lpx` |
| Reddit 去广告 | LPX | 过滤推广、关闭 NSFW、自动翻译 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Plugin/reddit-clean.lpx` |
| 酷狗音乐VIP | LPX | 解锁会员及歌曲，去广告 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Plugin/kugouvip.lpx` |
| iios签到 | LPX | 获取请求头并按设定 Cron 自动签到 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Plugin/iios_checkin.lpx` |
| 蜜语+Lovekey | LPX | 蜜语与 Lovekey 键盘合并插件 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Plugin/mxy-lovekey.lpx` |
| 喜马拉雅会员增强 | LPX | 喜马拉雅会员解锁、大师课、音质/音效/下载/播放器皮肤增强，并净化部分广告 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Plugin/ximalaya.lpx` |

## Loon 任务索引

| 名称 | 类型 | 说明 | 直链 |
|---|---|---|---|
| 小米刷步 | LTX | 每天 08:33 执行小米刷步任务 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Task/mi-step.ltx` |

## Loon 脚本索引

| 名称 | 类型 | 说明 | 直链 |
|---|---|---|---|
| fmz200 图标库 | JSON | fmz200 图标库索引文件 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Icons/icons-all.json` |
| lige47 图标库 | JSON | lige47 图标库索引文件 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Icons/ligeicon.json` |
| kugouvip | JS | 酷狗音乐会员脚本 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Script/kugouvip.js` |
| ximalaya | JS | 喜马拉雅会员增强脚本 | `https://raw.githubusercontent.com/elyndareth-max/box/master/Loon/Script/ximalaya.js` |

---

## 插件说明

### WeTalk
- 获取 Cookie
- 按设定 Cron 自动执行签到
- 支持在插件参数中控制 Cookie 获取与定时任务开关

### PingMe
- 获取 Token
- 按设定 Cron 自动执行签到
- 支持在插件参数中控制 Token 获取与定时任务开关

### Reddit 去广告
- 过滤 GraphQL 返回中的推广内容
- 关闭 NSFW 提示（可配置）
- 自动翻译当前固定强制开启，保证稳定生效

### iios签到
- 获取 `www.iios.fun/api/user/info` 请求头
- 按设定 Cron 自动执行签到
- 支持在插件参数中控制请求头获取开关

### 蜜语+Lovekey
- 同时包含蜜语与 Lovekey 键盘的重写规则
- 一个插件即可覆盖两个应用
- 已改为仓库自托管脚本与插件

### 酷狗音乐VIP
- 解锁会员及歌曲权限
- 去除部分广告与弹窗
- 适配多类用户信息与歌曲链接接口
- 图标已替换为 `luestr/IconResource` 中的 `KuGou.png`

### 喜马拉雅会员增强
- 解锁会员、大师课、音质/音效、下载与播放器皮肤等能力
- 净化部分广告、签到页与底部会员弹窗
- 已改为仓库自托管脚本与插件

## 任务说明

### 小米刷步
- 定时执行小米刷步脚本
- 已改为仓库自托管脚本与图标
- 内置失败后随机延迟重试机制，直到成功执行一次为止
- 单次任务最长重试窗口：30 分钟
- 成功通知会显示各关键步骤重试次数
- 执行时间：每天 08:33

## 配套脚本
- `Loon/Plugin/WeTalk.js`
- `Loon/Plugin/PingMe.js`
- `Loon/Plugin/reddit-clean.js`
- `Loon/Plugin/reddit-translation-request.js`
- `Loon/Plugin/iios_checkin.js`
- `Loon/Plugin/lovekey.js`
- `Loon/Script/kugouvip.js`
- `Loon/Script/ximalaya.js`
