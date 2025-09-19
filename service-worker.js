self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('alarm-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './radar_like.mp3',
        './beacon_like.mp3',
        './chime_like.mp3',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
