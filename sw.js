const CACHE_NAME = 'quiz-app-v1';

// Cài đặt Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker đã được cài đặt');
});

// Chặn các yêu cầu mạng để PWA hợp lệ
self.addEventListener('fetch', (event) => {
  // Với dự án dùng Firebase, tốt nhất ở mức cơ bản cứ để nó fetch dữ liệu trực tiếp từ mạng
  event.respondWith(fetch(event.request));
});