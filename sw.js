const CACHE_NAME = "pets-music-v1";
const CORE = ["./", "./index.html", "./style.css", "./app.js", "./manifest.json", "./icon.png"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE))));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).catch(() => caches.match("./index.html"))));
});
