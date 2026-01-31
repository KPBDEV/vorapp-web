// sw.js
const CACHE_NAME = 'vorapp-v1.0.0';
const urlsToCache = [
  '/vorapp-web/',
  '/vorapp-web/index.html',
  '/vorapp-web/style.css',
  '/vorapp-web/script.js',
  '/vorapp-web/manifest.json',
  '/vorapp-web/sw.js',
  '/vorapp-web/icons/icon-72x72.png',
  '/vorapp-web/icons/icon-192x192.png',
  '/vorapp-web/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache viejo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
