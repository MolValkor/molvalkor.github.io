const CACHE = 'asvab-focus-v1';
const ASSETS = [
  './',
  './index.html',
  './lessons.html',
  './practice.html',
  './ai-tutor.html',
  './dashboard.html',
  './reference.html',
  './flashcards.html',
  './styles.css'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
