self.addEventListener('install', event => {
  event.waitUntil(caches.open('pre-cache-v1j').then(cache => {
    cache.addAll(['/', 'index.js', 'styles.css'])
  }));


})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  )

})