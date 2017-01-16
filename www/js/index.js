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
        var textWechatSessionButton = parentElement.querySelector('.btn-text-wechat-session');
        var imageWechatSessionButton = parentElement.querySelector('.btn-image-wechat-session');
        var webPageWechatSessionButton = parentElement.querySelector('.btn-webpage-wechat-session');
        
        var textWechatTimelineButton = parentElement.querySelector('.btn-text-wechat-timeline');
        var imageWechatTimelineButton = parentElement.querySelector('.btn-image-wechat-timeline');
        var webPageWechatTimelineButton = parentElement.querySelector('.btn-webpage-wechat-timeline');
        
        textWechatSessionButton.addEventListener('click',shareTextToWechatSession);
        imageWechatSessionButton.addEventListener('click',shareImagesToWechatSession);
        webPageWechatSessionButton.addEventListener('click',shareWebPageToWechatSession);
        
        textWechatTimelineButton.addEventListener('click',shareTextToWechatTimeline);
        imageWechatTimelineButton.addEventListener('click',shareImagesToWechatTimeline);
        webPageWechatTimelineButton.addEventListener('click',shareWebPageToWechatTimeline);
    }
};

app.initialize();

function shareText(platformType) {
    var text='这是一条测试文本~~~~';
    var shareInfo = {text:text};
    sharesdk.share(platformType, ShareSDK.ShareType.Text, shareInfo,
                   function(success){},
                   function(fail){});
}

function shareImages(platformType) {
    var images = ['http://www.mob.com/images/logo_black.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png'];
    var shareInfo = {images:images};
    sharesdk.share(platformType, ShareSDK.ShareType.Image, shareInfo,
                   function(success){},
                   function(fail){});
}

function shareWebPage(platformType) {
    var icon = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png';
    var title = '这是网页的标题';
    var text = '这是网页的内容，android未签名只能分享单张图片到朋友圈';
    var url = 'http://carhot.cn/articles/1';
    var shareInfo = {icon:icon, title:title, text:text, url:url};
    sharesdk.share(platformType, ShareSDK.ShareType.WebPage, shareInfo,
                   function(success){},
                   function(fail){});
}

function shareTextToWechatSession() {
    shareText(ShareSDK.PlatformType.WechatSession);
}

function shareImagesToWechatSession() {
    shareImages(ShareSDK.PlatformType.WechatSession);
}

function shareWebPageToWechatSession() {
    shareWebPage(ShareSDK.PlatformType.WechatSession);
}


function shareTextToWechatTimeline() {
    shareText(ShareSDK.PlatformType.WechatTimeline);
}

function shareImagesToWechatTimeline() {
    shareImages(ShareSDK.PlatformType.WechatTimeline);
}

function shareWebPageToWechatTimeline() {
    shareWebPage(ShareSDK.PlatformType.WechatTimeline);
}
