const workboxConfig = require("../workbox-config");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

console.log('HOWDY FROM THE SERIVICES WORKER')

workboxConfig.routing.registerRoute(
  /https:\/\/hw18-budget-tracker\.herokuapp\.com/,
  workbox.strategies.networkFirst()
)

workboxConfig.precaching.precacheAndRoute([self.__WB_MANIFEST]);