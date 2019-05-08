# notifyapp
vue.js 消息通知notify

## Install
### npm
`$ npm i vue-x-notify`

## Usage

```
import Xnotify from 'vue-x-notify'
import 'vue-x-notify/lib/vue-app-notify.css'

Vue.use(Xnotify)

调用 Xnotify(options)
```

## Options
参数|说明|类型|默认值|
--|:--:|:--:|----:
title|标题|string|
text|内容|string|
closeBtnText|关闭按钮文本|string|关闭
closeBtnColor|关闭按钮颜色|string|#00bfff
backgroundColor|背景色|string|#f5f5f5
zIndex|堆叠顺序|number|3000

