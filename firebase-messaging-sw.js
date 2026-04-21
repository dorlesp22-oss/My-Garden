importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyASFk-1ktL5p7eMgd08VU2uZxLV6_oGaLk",
  authDomain: "my-garden-app-fa177.firebaseapp.com",
  projectId: "my-garden-app-fa177",
  storageBucket: "my-garden-app-fa177.firebasestorage.app",
  messagingSenderId: "201846937209",
  appId: "1:201846937209:web:94a8f46580e9544b6fe6a8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/My-Garden/icon.png',
    badge: '/My-Garden/icon.png',
    tag: 'garden-reminder',
    renotify: true,
    data: { url: '/My-Garden/' }
  });
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/My-Garden/'));
});
