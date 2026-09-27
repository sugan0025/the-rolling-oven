// The Rolling Oven — Service Worker (with Web Push)
const CACHE_NAME = 'rolling-oven-v2';
const OFFLINE_URL = '/offline.html';

const PRECACHE_RESOURCES = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.png',
  '/icon-192.png',
  '/icon-512.png',
];

// Install: precache offline fallback and essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_RESOURCES);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up outdated caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ============================================
// WEB PUSH NOTIFICATION HANDLER
// This fires even when the browser is closed!
// ============================================
self.addEventListener('push', (event) => {
  let data = {
    title: 'The Rolling Oven 🧁',
    body: 'You have a new notification!',
    icon: '/images/logo.jpeg',
    badge: '/icon-192.png',
    tag: 'tro-general',
    url: '/',
  };

  try {
    if (event.data) {
      const payload = event.data.json();
      data = { ...data, ...payload };
    }
  } catch (e) {
    // If JSON parse fails, try text
    try {
      if (event.data) {
        data.body = event.data.text();
      }
    } catch (e2) {}
  }

  const options = {
    body: data.body,
    icon: data.icon || '/images/logo.jpeg',
    badge: data.badge || '/icon-192.png',
    tag: data.tag || 'tro-notification',
    data: { url: data.url || '/' },
    vibrate: [100, 50, 100],
    requireInteraction: data.requireInteraction || false,
    actions: data.actions || [
      { action: 'open', title: '🛒 Order Now' },
      { action: 'dismiss', title: 'Later' }
    ],
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks — opens the site or focuses existing tab
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl = event.notification.data?.url || '/';

  if (event.action === 'dismiss') {
    return; // User clicked "Later", do nothing
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // If a tab is already open, focus it
      for (const client of clientList) {
        if (client.url.includes('the-rolling-oven') && 'focus' in client) {
          return client.focus();
        }
      }
      // Otherwise open a new tab
      return clients.openWindow(targetUrl);
    })
  );
});

// Fetch handler
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Ignore non-GET requests (e.g. POST API calls)
  if (request.method !== 'GET') {
    return;
  }

  // Handle HTML navigation requests: Network-First with Offline Fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }
        return cache.match(OFFLINE_URL);
      })
    );
    return;
  }

  // Handle static images, fonts, scripts, css: Stale-While-Revalidate
  const url = new URL(request.url);
  const isStaticAsset = (
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.jpeg')
  );

  if (isStaticAsset) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request);
        const networkFetch = fetch(request).then((response) => {
          if (response && response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        }).catch(() => cached);

        return cached || networkFetch;
      })
    );
    return;
  }

  // Fallback default network fetch
  event.respondWith(
    fetch(request).catch(async () => {
      const cache = await caches.open(CACHE_NAME);
      return cache.match(request);
    })
  );
});
