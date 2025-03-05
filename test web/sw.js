self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("webcam-pwa-v1").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/manifest.json",
                "/sw.js",
                "/icons/162137.png",
                "/icons/camera.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
