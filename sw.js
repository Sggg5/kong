const CACHE = "kong-v1";
const URLS = ["/", "/index.html", "/data.json", "/manifest.json", "/404.html"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(clients.claim());
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetched = fetch(e.request).then(resp => {
        const clone = resp.clone();
        if (resp.ok) caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
