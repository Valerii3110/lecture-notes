//** Показуємо та ховаємо, додаючи/ видаляючи класс is-visible
//* Ховаємо через певний час
//* Ховаємо при кліці
//* Не забуваємо чистити таймер   */

// const NOTIFICATION_DELAY = 3000;

// const notification = document.querySelector(".js-alert"); //* отримуємо посилання на наш обєкт на сторінці

// let timerId = null; //* створимо змінну таймер  id
// notification.addEventListener("click", onNotificationClick);

// showNotification(); //* викликаємо нашу функцію з додаванням класу
// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timerId);
// }

// function showNotification() {
//   notification.classList.add("is-visible"); //* додаємо  елементу клас is-visible за допомогою classList.add()
//   timerId = setTimeout(() => {
//     //* Ховаємо наш обєкт через певний час.
//     console.log("hidden");

//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   notification.classList.remove("is-visible");
// }
