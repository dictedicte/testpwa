// Install service worker and cache files
self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("pwa-cache-v1").then(cache => {
        return cache.addAll([
          "index.html",
          "manifest.json",
          "icons/icon-192.png",
          "icons/icon-512.png"
        ]);
      })
    );
  });
  
  // Serve cached files offline
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  });