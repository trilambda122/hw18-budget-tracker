console.log("HOWDY FROM THE SERIVICES WORKER"),workbox.routing.registerRoute(/https:\/\/hw18-budget-tracker\.herokuapp\.com/,workbox.strategies.networkFirst()),workbox.skipWaiting(),workboxConfig.precaching.precacheAndRoute([[{'revision':'1d7c137408dd84207ac75b265721cb62','url':'autoindex.html'},{'revision':'f426d07e4e1b90e7fdedb6632cc6fe9d','url':'autoindex.js'},{'revision':'43ffd3da2c7b85ba0c9c3d5075a46c99','url':'autostyles.css'}]]);