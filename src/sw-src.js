// const workboxConfig = require("../workbox-config");
console.log('HOWDY FROM THE SERIVICES WORKER')

workbox.routing.registerRoute(
  /https:\/\/hw18-budget-tracker\.herokuapp\.com/,
  workbox.strategies.networkFirst()
)

workbox.skipWaiting()
workboxConfig.precaching.precacheAndRoute([self.__WB_MANIFEST]);