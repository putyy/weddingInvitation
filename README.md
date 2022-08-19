## weddingInvitation
一个简单的婚礼邀请小程序(只有一页)

#### 环境
```js
uniapp + vue3 + ts + vite
```

#### 参考 && 感谢原作者
```angular2html
https://github.com/zouyaoji/wedding-invitation
https://gitee.com/roberthuang123/wedding
```

#### ps: 原项目功能比较多、出于追求简单 所以动手改了一下

#### 安装使用
```shell
# 拉取代码
git clone https://github.com/putyy/weddingInvitation.git 

# 将 ./src/manifest.json 中 mp-weixin 节点的 appid 改为你的小程序 id
# 将 ./.env.example 复制一份为.env, 并更改初始化json地址(结构参照./src/init.json), 当然也可以选择修改./src/pages/index.vue 将数据写死

# 安装依赖
yarn install

# 启动项目
npm run dev:mp-weixin

# 将项目导入微信开发者工具, 目录: ./dist/dev/mp-weixin


```

## photo 文件夹说明

> 相册功能，源码网上抓下来的 优化了一下, 可以部署到服务器后将地址生成二维码放到婚庆海报上
> 
> 在线预览地址: https://static-df787464-d77c-4180-83c3-6e7add40073e.bspapp.com/

#### 使用
```shell
# 将需要显示到相册里面的图片全部放入./photo/images文件夹
# 如果需要将资源放到第三方存储 比如七牛云，自己改main.js对应show-images关键字的路径即可
# 进入photo文件夹 执行 
node handle.js
```

