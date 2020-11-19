const workboxConfig = require("../workbox-config");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

console.log('HOWDY FROM THE SERIVICES WORKER')

workboxConfig.routing.registerRoute(
  /https:\/\/hw18-budget-tracker\.herokuapp\.com/,
  workbox.strategies.networkFirst()
)

workboxConfig.precaching.precacheAndRoute([[{"revision":"0087c4941343048bd7809d1b6bd292ea","url":"icons/icon-192x192.png"},{"revision":"02d74ff42850d2503e9488b98cf1076a","url":"icons/icon-512x512.png"},{"revision":"1d7c137408dd84207ac75b265721cb62","url":"index.html"},{"revision":"f5444e73ec1d716ab155b5f2a6ef91da","url":"index.js"},{"revision":"43ffd3da2c7b85ba0c9c3d5075a46c99","url":"styles.css"}]]);