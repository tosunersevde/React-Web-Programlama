// src/serviceWorker.js

// Bu kod, uygulamanızın offline çalışmasını sağlar.
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname === '127.0.0.1'
);

export function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // Sadece prod ortamında servis çalışanını kaydet
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) return;

    window.addEventListener('load', () => {
      const serviceWorkerUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      navigator.serviceWorker
        .register(serviceWorkerUrl)
        .then((registration) => {
          console.log('Service Worker registered: ', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed: ', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
