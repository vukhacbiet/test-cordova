cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-background-mode.BackgroundMode",
      "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
      "pluginId": "cordova-plugin-background-mode",
      "clobbers": [
        "cordova.plugins.backgroundMode",
        "plugin.backgroundMode"
      ]
    },
    {
      "id": "cordova-plugin-headercolor.HeaderColor",
      "file": "plugins/cordova-plugin-headercolor/www/HeaderColor.js",
      "pluginId": "cordova-plugin-headercolor",
      "clobbers": [
        "cordova.plugins.headerColor"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-safariviewcontroller.SafariViewController",
      "file": "plugins/cordova-plugin-safariviewcontroller/www/SafariViewController.js",
      "pluginId": "cordova-plugin-safariviewcontroller",
      "clobbers": [
        "SafariViewController"
      ]
    },
    {
      "id": "phonegap-plugin-mobile-accessibility.mobile-accessibility",
      "file": "plugins/phonegap-plugin-mobile-accessibility/www/mobile-accessibility.js",
      "pluginId": "phonegap-plugin-mobile-accessibility",
      "clobbers": [
        "window.MobileAccessibility"
      ]
    },
    {
      "id": "phonegap-plugin-mobile-accessibility.MobileAccessibilityNotifications",
      "file": "plugins/phonegap-plugin-mobile-accessibility/www/MobileAccessibilityNotifications.js",
      "pluginId": "phonegap-plugin-mobile-accessibility",
      "clobbers": [
        "MobileAccessibilityNotifications"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-custom-config": "5.1.0",
    "cordova-plugin-android-support-v7-appcompat": "1.0.0",
    "cordova-plugin-device": "2.0.4-dev",
    "cordova-plugin-background-mode": "0.7.3",
    "cordova-plugin-headercolor": "1.0",
    "cordova-plugin-network-information": "2.0.3-dev",
    "cordova-plugin-safariviewcontroller": "1.6.0",
    "cordova-plugin-whitelist": "1.3.4",
    "phonegap-plugin-mobile-accessibility": "1.0.5-dev",
    "cordova-plugin-wkwebview-engine": "1.2.1"
  };
});