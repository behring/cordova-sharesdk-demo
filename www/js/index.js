/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var copyLinkButton = parentElement.querySelector('.btn-copy-link');

        var textWechatSessionButton = parentElement.querySelector('.btn-text-wechat-session');
        var imageWechatSessionButton = parentElement.querySelector('.btn-image-wechat-session');
        var webPageWechatSessionButton = parentElement.querySelector('.btn-webpage-wechat-session');

        var textWechatTimelineButton = parentElement.querySelector('.btn-text-wechat-timeline');
        var imageWechatTimelineButton = parentElement.querySelector('.btn-image-wechat-timeline');
        var webPageWechatTimelineButton = parentElement.querySelector('.btn-webpage-wechat-timeline');

        var textWeiboButton = parentElement.querySelector('.btn-text-weibo');
        var imageWeiboButton = parentElement.querySelector('.btn-image-weibo');
        var webPageWeiboButton = parentElement.querySelector('.btn-webpage-weibo');

        copyLinkButton.addEventListener('click',copyLink);

        textWechatSessionButton.addEventListener('click',shareTextToWechatSession);
        imageWechatSessionButton.addEventListener('click',shareImageToWechatSession);
        webPageWechatSessionButton.addEventListener('click',shareWebPageToWechatSession);

        textWechatTimelineButton.addEventListener('click',shareTextToWechatTimeline);
        imageWechatTimelineButton.addEventListener('click',shareImageToWechatTimeline);
        webPageWechatTimelineButton.addEventListener('click',shareWebPageToWechatTimeline);

        textWeiboButton.addEventListener('click',shareTextToWeibo);
        imageWeiboButton.addEventListener('click',shareImageToWeibo);
        webPageWeiboButton.addEventListener('click',shareWebPageToWeibo);
    }
};

app.initialize();

/** 拷贝连接 */
function  copyLink() {
    var text='https://github.com/zhaolin0801/cordova-plugin-sharesdk';
    var shareInfo = {text:text};
    sharesdk.share(ShareSDK.PlatformType.Copy, ShareSDK.ShareType.Text, shareInfo, success, fail);
}

/** 分享纯文本 */
function shareText(platformType) {
    var text='这是一条测试文本~~~~';
    var shareInfo = {text:text};
    sharesdk.share(platformType, ShareSDK.ShareType.Text, shareInfo, success, fail);
}

/** 分享图片,只能分享一张*/
function shareImage(platformType) {
    var image = 'https://raw.githubusercontent.com/zhaolin0801/cordova-sharesdk-demo/master/www/img/Wechat-QRcode.jpeg';
    var shareInfo = {image:image};
    sharesdk.share(platformType, ShareSDK.ShareType.Image, shareInfo, success, fail);
}

/** 分享网页 */
function shareWebPage(platformType) {
    var icon = 'https://raw.githubusercontent.com/zhaolin0801/cordova-sharesdk-demo/master/www/img/Wechat-QRcode.jpeg';
    var title = '这是网页的标题';
    var text = '这是网页的内容，android未签名只能分享单张图片到朋友圈';
    var url = 'http://carhot.cn/articles/1';
    var shareInfo = {icon:icon, title:title, text:text, url:url};
    sharesdk.share(platformType, ShareSDK.ShareType.WebPage, shareInfo, success, fail);
}
/**微信好友分享*/
function shareTextToWechatSession() {
    shareText(ShareSDK.PlatformType.WechatSession);
}

function shareImageToWechatSession() {
    shareImage(ShareSDK.PlatformType.WechatSession);
}

function shareWebPageToWechatSession() {
    shareWebPage(ShareSDK.PlatformType.WechatSession);
}

/**微信朋友圈分享*/
function shareTextToWechatTimeline() {
    shareText(ShareSDK.PlatformType.WechatTimeline);
}

function shareImageToWechatTimeline() {
    shareImage(ShareSDK.PlatformType.WechatTimeline);
}

function shareWebPageToWechatTimeline() {
    shareWebPage(ShareSDK.PlatformType.WechatTimeline);
}
/**新浪微博分享*/
function shareTextToWeibo() {
    shareText(ShareSDK.PlatformType.SinaWeibo);
}

function shareImageToWeibo() {
    shareImage(ShareSDK.PlatformType.SinaWeibo);
}

function shareWebPageToWeibo() {
    shareWebPage(ShareSDK.PlatformType.SinaWeibo);
}

function success() {
    alert('sucessed!');
}

function fail(msg) {
    alert('failed: ' + msg);
}
