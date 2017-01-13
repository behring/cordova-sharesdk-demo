cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-sharesdk.ShareSDK",
        "file": "plugins/cordova-plugin-sharesdk/www/sharesdk.js",
        "pluginId": "cordova-plugin-sharesdk",
        "clobbers": [
            "sharesdk.share"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-sharesdk": "0.0.1"
};
// BOTTOM OF METADATA
});