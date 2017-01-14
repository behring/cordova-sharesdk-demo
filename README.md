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
   cordova plugin add cordova-plugin-sharesdk --variable SHARESDK_IOS_APP_KEY=xxxxxx --variable WECHAT_APP_ID=xxxxxx --variable WECHAT_APP_SECRET=xxxxxx
   ```

3. 构建项目

   ```
   cordova build
   ```

4. 运行项目到设备

   ```
   cordova run android
   ```

   ​

### 注意

在第2步添加[cordova-plugin-sharesdk](https://github.com/zhaolin0801/cordova-plugin-sharesdk.git) 插件的时候需要输入对应分享平台的Key和Secret作为参数。参数对应如下表：

| 参数                       | 说明                                       |
| ------------------------ | ---------------------------------------- |
| SHARESDK_IOS_APP_KEY     | [ShareSDK注册(iOS)](http://www.mob.com/)   |
| SHARESDK_ANDROID_APP_KEY | [ShareSDK注册(Android)](http://www.mob.com/) |
| WECHAT_APP_ID            | [微信开放平台注册](https://open.weixin.qq.com/)  |
| WECHAT_APP_SECRET        | [微信开放平台注册](https://open.weixin.qq.com/)  |


