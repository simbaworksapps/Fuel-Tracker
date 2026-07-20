const CACHE_NAME = "simba-fuel-tracker-v0.1.259";
const ASSETS = [
  "/",
  "/index.html",
  "/styles.css?v=0.1.259",
  "/app.js?v=0.1.259",
  "/manifest.json",
  "/assets/simba.jpg",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/maskable-512.png",
  "/icons/apple-touch-icon-180.png"
];

async function cachedAppShell(request) {
  const cache = await caches.open(CACHE_NAME);
  return (
    await cache.match(request, { ignoreSearch: true }) ||
    await cache.match("/", { ignoreSearch: true }) ||
    await cache.match("/index.html", { ignoreSearch: true })
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key === CACHE_NAME ? null : caches.delete(key))))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.pathname.includes("/api/")) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      cachedAppShell(event.request)
        .then((response) => response || fetch(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
      .then((response) => response || fetch(event.request).then((networkResponse) => {
        const copy = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return networkResponse;
      }))
  );
});
