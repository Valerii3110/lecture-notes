/**  Подія clic
 * натискаючи на кнопку "Clik me" змусь
 * червоний квадрат зміщуватись на 50рх по діагоалі*/

// const btn = document.querySelector('.js-clic');
// const box = document.querySelector('.js-box');
// btn.addEventListener('click', () => {
//   let step = 0;
//   function handClick() {
//     step += 50;
//     box.style.marginTop =  ${step}px)`;
//     box.style.marginLeft = `${step}px`;

//   }

/** Подія input
 * Подія blur
 * Виводить в консоль все що  користувач вводить в input
 */
// const userName = document.querySelector(".js-user-name");
// userName.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

/**
 * Користувач вводить  в input свое ім'я після втрати фокусу
 * отримує alret з повідомленням привітанням
 */
// const userName = document.querySelector(".js-user-name");
// userName.addEventListener("blur", (event) => {
//   const name = event.target.value;
//   alert(`Привіт, ${name}`);
// });

/**Подія submit
 * Дії браузера за замовчуванням
 * Властивість elements
 *
 * обробки форму та забери выдгук користувача в об
 *
 */

// const form = document.querySelector(".js-form");
// form.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   console.log(event);

//   event.preventDefault(); // Запобігає перезавантаженню сторінки
//   const elements = event.currentTarget.elements;// Отримуємо елементи форми
//   const info = {
//     email: elements.email.value, // Отримуємо значення поля email
//     password: elements.password.value, // Отримуємо значення поля password
//     comment: elements.comment.value, // Отримуємо значення поля comment

//   }
//   console.log(info); // Виводимо об'єкт з інформацією в консоль

//   // console.log(elements.email.velue); // Виводимо значення email в консоль
//   // const formData = new FormData(event.currentTarget);
//   // const userName = formData.get("userName");
//   // const userEmail = formData.get("userEmail");
//   // console.log(`Ім'я: ${userName}, Email: ${userEmail}`);
//   event.currentTarget.reset(); // Очищає форму після відправки
// }

/** Типи подій: keypress, keydown, keyup
 * обмеження keypress
 * Властивість key та code
 */
// document.addEventListener("keypress", handleKeyPress);// Додаємо обробник події keypress до документа
// function handleKeyPress(event) {
//   console.log(event.key);
//   console.log(`Код клавіші: ${event.code}`);
//   console.log(`Значення клавіші: ${event.key}`);
// }

// document.addEventListener(keydown, handleKeyPress); // Додаємо обробник події keydown до документа
// function handleKeyPress(event) {
//   console.log(event.key); // Виводимо значення клавіші в консоль
//   console.log(`Код клавіші: ${event.code}`); // Виводимо фізичний код клавіші в консоль
//   console.log(`Значення клавіші: ${event.key}`);// Виводимо значення клавіші в консоль
//    if (event.key === "Escape") {
//     console.log("Ви натиснули клавішу Escape");// Якщо натиснуто клавішу Escape
//   } else if (event.key === "Enter") {
//     console.log("Ви натиснули клавішу Enter");// Якщо натиснуто клавішу Enter
//   } else {
//     console.log(`Ви натиснули клавішу: ${event.key}`);// Якщо натиснуто іншу клавішу

// }

// document.addEventListener(keyгз, handleKeyPress); // Додаємо обробник події keydown до документа
// function handleKeyPress(event) {
//   console.log(event.key); // Виводимо значення клавіші в консоль
//   console.log(`Код клавіші: ${event.code}`); // Виводимо фізичний код клавіші в консоль
//   console.log(`Значення клавіші: ${event.key}`); // Виводимо значення клавіші в консоль
//   if (event.key === "Escape") {
//     console.log("Ви натиснули клавішу Escape");// Якщо натиснуто клавішу Escape
//   } else if (event.key === "Enter") {
//     console.log("Ви натиснули клавішу Enter");// Якщо натиснуто клавішу Enter
//   } else {
//     console.log(`Ви натиснули клавішу: ${event.key}`);// Якщо натиснуто іншу клавішу
// }
/**Обробка комбінації клавіш */

// document.addEventListener(keydown, handleKeyPress); // Додаємо обробник події keydown до документа
// function handleKeyPress(event) {
//   if (event.ctlkey && event.code === "KeyC") {
//     console.log("ok"); // Якщо натиснуто комбінацію Ctrl + C
//     event.preventDefault(); // Запобігаємо дії браузера за замовчуванням
//   }
// }

/**Події миші
 * mousenter mouseleave
 * mouseover mouseout
 * mousemove (chatty event - надто багато викликів)
 */
// const box = document.querySelector(".js-box");
// box.addEventListener("mouseenter", onMouseEnter);
// box.addEventListener("mouseleave", onMouseLeave);
// function onMouseEnter() {
//   console.log("mouseenter");
//   box.classList.add("box-active");
// }
// function onMouseLeave() {
//   console.log("mouseleave");
//   box.classList.remove("box-active");
// }

// box.addEventListener("mouseover", onMouseOver);
// box.addEventListener("mouseout", onMouseOut);
// function onMouseOver() {
//   console.log("mouseover");
//   box.classList.add("box-active");
// }
// function onMouseOut() {
//   console.log("mouseout");
//   box.classList.remove("box-active");
// }

// box.addEventListener("mousemove", onMouseMove);
// function onMouseMove(event) {
//   console.log("event"); // Виводимо повідомлення в консоль при русі миші
// }


/** Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і зразу може обрати марку та модель
 */

const form = document.querySelector(".js-form");
const container = document.querySelector(".js-container");
function arr.map(item) {
  return arr.map((car) =>
  <Li class="car-card">
    <img src="s${car.img}" alt="${car.type" class ="car-img" />

  
}