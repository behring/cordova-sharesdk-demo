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
        var shareButton = document.getElementById('share-button');
        shareButton.addEventListener('click',share);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


var SSDKPlatformType = {
    /**
     *  未知
     */
    SSDKPlatformTypeUnknown             : 0,
    /**
     *  新浪微博
     */
    SSDKPlatformTypeSinaWeibo           : 1,
    /**
     *  腾讯微博
     */
    SSDKPlatformTypeTencentWeibo        : 2,
    /**
     *  豆瓣
     */
    SSDKPlatformTypeDouBan              : 5,
    /**
     *  QQ空间
     */
    SSDKPlatformSubTypeQZone            : 6,
    /**
     *  人人网
     */
    SSDKPlatformTypeRenren              : 7,
    /**
     *  开心网
     */
    SSDKPlatformTypeKaixin              : 8,
    /**
     *  Facebook
     */
    SSDKPlatformTypeFacebook            : 10,
    /**
     *  Twitter
     */
    SSDKPlatformTypeTwitter             : 11,
    /**
     *  印象笔记
     */
    SSDKPlatformTypeYinXiang            : 12,
    /**
     *  Google+
     */
    SSDKPlatformTypeGooglePlus          : 14,
    /**
     *  Instagram
     */
    SSDKPlatformTypeInstagram           : 15,
    /**
     *  LinkedIn
     */
    SSDKPlatformTypeLinkedIn            : 16,
    /**
     *  Tumblr
     */
    SSDKPlatformTypeTumblr              : 17,
    /**
     *  邮件
     */
    SSDKPlatformTypeMail                : 18,
    /**
     *  短信
     */
    SSDKPlatformTypeSMS                 : 19,
    /**
     *  打印
     */
    SSDKPlatformTypePrint               : 20,
    /**
     *  拷贝
     */
    SSDKPlatformTypeCopy                : 21,
    /**
     *  微信好友
     */
    SSDKPlatformSubTypeWechatSession    : 22,
    /**
     *  微信朋友圈
     */
    SSDKPlatformSubTypeWechatTimeline   : 23,
    /**
     *  QQ好友
     */
    SSDKPlatformSubTypeQQFriend         : 24,
    /**
     *  Instapaper
     */
    SSDKPlatformTypeInstapaper          : 25,
    /**
     *  Pocket
     */
    SSDKPlatformTypePocket              : 26,
    /**
     *  有道云笔记
     */
    SSDKPlatformTypeYouDaoNote          : 27,
    /**
     *  Pinterest
     */
    SSDKPlatformTypePinterest           : 30,
    /**
     *  Flickr
     */
    SSDKPlatformTypeFlickr              : 34,
    /**
     *  Dropbox
     */
    SSDKPlatformTypeDropbox             : 35,
    /**
     *  VKontakte
     */
    SSDKPlatformTypeVKontakte           : 36,
    /**
     *  微信收藏
     */
    SSDKPlatformSubTypeWechatFav        : 37,
    /**
     *  易信好友
     */
    SSDKPlatformSubTypeYiXinSession     : 38,
    /**
     *  易信朋友圈
     */
    SSDKPlatformSubTypeYiXinTimeline    : 39,
    /**
     *  易信收藏
     */
    SSDKPlatformSubTypeYiXinFav         : 40,
    /**
     *  明道
     */
    SSDKPlatformTypeMingDao             : 41,
    /**
     *  Line
     */
    SSDKPlatformTypeLine                : 42,
    /**
     *  WhatsApp
     */
    SSDKPlatformTypeWhatsApp            : 43,
    /**
     *  KaKao Talk
     */
    SSDKPlatformSubTypeKakaoTalk        : 44,
    /**
     *  KaKao Story
     */
    SSDKPlatformSubTypeKakaoStory       : 45,
    /**
     *  Facebook Messenger
     */
    SSDKPlatformTypeFacebookMessenger   : 46,
    /**
     *  支付宝好友
     */
    SSDKPlatformTypeAliPaySocial        : 50,
    /**
     *  支付宝朋友圈
     */
    SSDKPlatformTypeAliPaySocialTimeline: 51,
    /**
     *  钉钉
     */
    SSDKPlatformTypeDingTalk            : 52,
    /**
     *  易信
     */
    SSDKPlatformTypeYiXin               : 994,
    /**
     *  KaKao
     */
    SSDKPlatformTypeKakao               : 995,
    /**
     *  印象笔记国际版
     */
    SSDKPlatformTypeEvernote            : 996,
    /**
     *  微信平台,
     */
    SSDKPlatformTypeWechat              : 997,
    /**
     *  QQ平台
     */
    SSDKPlatformTypeQQ                  : 998,
    /**
     *  任意平台
     */
    SSDKPlatformTypeAny                 : 999
}

function share() {
    var title = 'hello title';
    var content = 'this is content!!!';
    var url = 'http://www.baidu.com';
    var images = ['http://www.mob.com/images/logo_black.png'];
    var shareInfo = {platformType:SSDKPlatformType.SSDKPlatformSubTypeWechatSession,title:title,content:content,url:url,images:images};
    sharesdk.share(function(success){
                           console.log('----share ok---');
                           console.log(success);
                   },
                   function(fail){
                           console.log('----share fail---');
                           console.log(fail);
                   },
                   shareInfo);
}
