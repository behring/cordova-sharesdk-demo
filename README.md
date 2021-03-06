# cordova-sharesdk-demo

### 概述

此demo调用[cordova-plugin-sharesdk](https://github.com/zhaolin0801/cordova-plugin-sharesdk.git) 插件完成微信，微博，QQ平台的分享功能，目前插件仅支持android和ios平台。

### 配置

1. 创建平台

   ```
   cd ~/yourpath/cordova-sharesdk-demo
   cordova platform add ios android
   ```

2. 添加cordova-plugin-sharesdk插件

   ```
   cordova plugin add cordova-plugin-sharesdk --variable SHARESDK_ANDROID_APP_KEY=xxxx --variable SHARESDK_IOS_APP_KEY=xxxx --variable WECHAT_APP_ID=xxxx --variable WECHAT_APP_SECRET=xxxx --variable WEIBO_APP_ID=xxxx --variable WEIBO_APP_SECRET=xxxx --variable WEIBO_REDIRECT_URL=http://xxxx --variable QQ_IOS_APP_ID=xxxx --variable QQ_IOS_APP_HEX_ID=xxxx --variable QQ_IOS_APP_KEY=xxxx
   ```

3. 构建项目

   ```
   cordova build
   ```
   >android构建请使用如下命令
   >
   >```
   >cordova build --release
   >```
   >
   >因为不使用签名，android微信无法分享，为了demo能正常运行。项目里包含了必要的签名。如果无法分享，请自行申请签名，并在微信开放平台注册。

   ​

4. 运行项目到设备

   ```
   cordova run android
   ```

   ​

### 注意

#### 关于安装插件传入参数

在第2步添加[cordova-plugin-sharesdk](https://github.com/zhaolin0801/cordova-plugin-sharesdk.git) 插件的时候需要输入对应分享平台的Key和Secret作为参数。参数对应如下表：

| 参数                       | 说明                                       |
| ------------------------ | ---------------------------------------- |
| SHARESDK_IOS_APP_KEY     | [ShareSDK注册(iOS)](http://www.mob.com/)   |
| SHARESDK_ANDROID_APP_KEY | [ShareSDK注册(Android)](http://www.mob.com/) |
| WECHAT_APP_ID            | [微信开放平台注册](https://open.weixin.qq.com/)  |
| WECHAT_APP_SECRET        | [微信开放平台注册](https://open.weixin.qq.com/)  |
| WEIBO_APP_ID             | [新浪微博开放平台注册](http://open.weibo.com/)     |
| WEIBO_APP_SECRET         | [新浪微博开放平台注册](http://open.weibo.com/)     |
| WEIBO_REDIRECT_URL       | 微博回调地址：我的应用/应用信息/高级信息/OAUTH2.0授权设置里配置    |
| QQ_IOS_APP_ID            | [腾讯开放平台注册](http://open.qq.com/)          |
| QQ_IOS_APP_HEX_ID        | 由QQ_IOS_APP_ID生成。 其格式为：”QQ” ＋ AppId的16进制（如果appId转换的16进制数不够8位则在前面补0，如转换的是：5FB8B52，则最终填入为：QQ05FB8B52 注意：转换后的字母要大写） 转换16进制的方法：echo ‘ibase=10;obase=16;801312852′\|bc，其中801312852为QQ的AppID，**传入参数不需要加QQ，只需要传入8位数字** |
| QQ_IOS_APP_KEY           | [腾讯开放平台注册](http://open.qq.com/)          |

为了方便大家查看demo，特此提供ShareSDK Android、iOS的key以及微信appID和appSecret。如果无法使用，请自行重新申请。

```
SHARESDK_ANDROID_APP_KEY: 1ae3baffc4bd0
SHARESDK_IOS_APP_KEY: 1ae3afb94daf0
WECHAT_APP_ID: wx956a3cabf7faf4bf
WECHAT_APP_SECRET: 8bd89564a1d0c35443c1d019073a6982
```

#### Android微信分享注意事项

1. 确保Android App在微信开放平台审核通过并且签名填写正确（签名必须纯小写字母无冒号）。

2. 使用正确的keystore给app签名。

   ​

### 那些年的坑

Q: iOS无法分享! 分享平台(xxx)尚未初始化!

A: 如果你的平台初始化代码完全按照sharesdk官网的配置依然提示平台尚未初始化，呢基本上可以确定，你是丢失了XXX平台.js文件，这个文件在ios的ShareSDK/Support/Required/ShareSDK.bundle内，用xcode打开，在ScriptCore/platforms下面有对应平台的js。如果没有，请在官网重新下载sdk(选择你不能初始化的平台)，把新下载的 ShareSDK.bundle里面的xxx.js复制到自己项目中的ShareSDK.bundle的对应目录即可。