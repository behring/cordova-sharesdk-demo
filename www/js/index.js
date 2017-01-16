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
        var textWechatTimelineButton = parentElement.querySelector('.btn-text-wechat-timeline');
        var imageWechatTimelineButton = parentElement.querySelector('.btn-image-wechat-timeline');
        textWechatSessionButton.addEventListener('click',shareTextToWechatSession);
        imageWechatSessionButton.addEventListener('click',shareImageToWechatSession);
        textWechatTimelineButton.addEventListener('click',shareTextToWechatTimeline);
        imageWechatTimelineButton.addEventListener('click',shareImageToWechatTimeline);
    }
};

app.initialize();

function shareTextToWechatSession() {
    var text='这是一条测试文本~~~~';
    var shareInfo = {text:text};
    sharesdk.share(ShareSDK.PlatformType.WechatSession,ShareSDK.ShareType.Text,shareInfo,
                   function(success){},
                   function(fail){});
}

function shareImageToWechatSession() {
    var images = ['http://www.mob.com/images/logo_black.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png'];
    var shareInfo = {images:images};
    sharesdk.share(ShareSDK.PlatformType.WechatSession,ShareSDK.ShareType.Image,shareInfo,
                   function(success){},
                   function(fail){});
}

function shareTextToWechatTimeline() {
    var text='这是一条测试文本~~~~';
    var shareInfo = {text:text};
    sharesdk.share(ShareSDK.PlatformType.WechatTimeline,ShareSDK.ShareType.Text,shareInfo,
                   function(success){},
                   function(fail){});
}

function shareImageToWechatTimeline() {
    var images = ['http://www.mob.com/images/logo_black.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png'];
    var shareInfo = {images:images};
    sharesdk.share(ShareSDK.PlatformType.WechatTimeline,ShareSDK.ShareType.Image,shareInfo,
                   function(success){},
                   function(fail){});
}
