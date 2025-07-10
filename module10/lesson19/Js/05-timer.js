// /**
//  * Напишемо клас Timer, який буде
//  * запускати та зупиняти відлік часу
//  */

// const startBtn = document.querySelector("button[data-action-start]"); //* отримуємо елемент з сторінки для взаємодії кнопка старт
// const stopBtn = document.querySelector("button[data-action-stop]"); //* отримуємо елемент з сторінки для взаємодії кнопка стоп
// const clockface = document.querySelector(".clockface"); //* отримуємо елемент куди будемо відображати свій час

// class Timer {
//   constructor({ onTick }) {
//     //* передаємо
//     this.onTick = onTick; //*  ініціалізуємо  екземплярi  класі
//     this.isActive = false; //* властивість яка відповідає чи запущений таймер і на старті що ні
//     this.intervalId = null; //* створюємо властивість обєкту для зупинки відображення часу

//     this.init();
//   }

//   init() {
//     //* відображення початкового стану годиника на сторінці
//     const time = this.getTimeComponant(0);
//     this.onTick(time);
//   }
//   start() {
//     //* функцыя запускатиме відлік часу
//     if (this.isActive) {
//       return;
//     }
//     // console.log(this.onTick);
//     this.isActive = true;

//     const startTime = Date.now(); //* отримуємо час коли ця функція запустилась, натиснули кнопку старт в мілісекудах

//     this.intervalId = setInterval(() => {
//       //* Реалізовуємо таймер,
//       const currentTime = Date.now(); //* будемо отримувати поточний час через кожну секунду
//       const deltaTime = currentTime - startTime; //* отримуватимо скільки часу пройшло
//       // console.log(this);
//       const time = this.getTimeComponant(deltaTime);

//       // console.log(deltaTime); //* виводимо обєкт з часом у консоль
//       this.onTick(time);
//     }, 1000);
//   }
//   stop() {
//     //* припинити відображення часуБ зупинити роботуsetInterval
//     clearInterval(this.intervalId);
//     this.init(); //* обнулення таймеру
//     this.isActive = false; //* відключаємо лічильник (дезактивуємо)
//   }
//   getTimeComponant(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     ); //* отримуємо години  (відкидаючи добу   1000*60*60*24)
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))); //* отримуємо хвилини  (відкидаючи години  1000*60*60)
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000)); //* отримуємо секунди (відкидаючи хвилини 1000*60)

//     // return { //* щоб скоротити запис використовуємо короткий синтаксис, оскільки імя ключа і значення одинакові
//     //   hours: hours,
//     //   mins: mins,
//     //   secs: secs,
//     // };
//     return { hours, mins, secs };
//   }
//   pad(velue) {
//     return String(velue).padStart(2, "0"); //* відоражаємо двозначне відображення чисел
//   }
// }

// const time = new Timer({ onTick: updateClockface }); //* передаємо аргументом обєкт з ключем onTick: і значенням функція updateClockface

// // console.log(time);
// startBtn.addEventListener("click", time.start.bind(time)); //* слухач подій на кнопку старт. Коли ми передаєм наш метод як колбек функцію, тут втрачається контекст, для цього використовуємо метод bind щоб ривязати контекст викликуп
// stopBtn.addEventListener("click", time.stop.bind(time)); //* слухач подій на кнопку стоп. Коли ми передаєм наш метод як колбек функцію, тут втрачається контекст, для цього використовуємо метод bind щоб ривязати контекст викликуп
// function updateClockface({ hours, mins, secs }) {
//   //* функція для відображення часу на сторінці
//   clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// //* Варіант через функції
const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

let isActive = false;
let intervalId = null;

function onTick({ hours, mins, secs }) {
  clockface.textContent = `${hours}:${mins}:${secs}`;
}

function start() {
  if (isActive) {
    return;
  }

  isActive = true;
  const startTime = Date.now();

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime;
    const time = getTimeComponant(deltaTime);
    onTick(time);
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
  isActive = false;
  clockface.textContent = "00:00:00";
}

function getTimeComponant(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
