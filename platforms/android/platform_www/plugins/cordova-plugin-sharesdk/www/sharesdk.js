cordova.define("cordova-plugin-sharesdk.ShareSDK", function(require, exports, module) {
/* global cordova */
var share = module.exports = function (success, fail, shareInfo) {
  cordova.exec(success, fail, 'ShareSDK', 'share', [shareInfo])
}

});
