//** Метод window.setTimeout(callbac, delay, args) */

// console.log("before");

// setTimeout(() => {
//   console.log("timer");
// }, 500);
// for (let i = 0; i < 3000000000; i++) {}
// // console.log("lalala");
// // setTimeout(() => {
// //   console.log("timer2");
// // }, 1500);
// // console.log("after"); //* Хоче отримати два аргументи: Перший це функція, другий це число в мілісекундах через яке виконається дана функція. Якщо другим аргументом буде нуль або його взагалі не буде тобто функція має виконатись через нуль мілсекунд, але в браузері буде мінімальна затримка близько 4 мілісекунд

//** Очищення таймауту за допомогою clearTimeout(timeoutId) */
// const logger = () => {
//   console.log("logger");
// };
// // setTimeout(logger, 2000);

// const timerid = setTimeout(logger, 2000);
// clearTimeout(timerid);

//**Можливість передати  параметри для колбеку*/

// const logger = (time) => {
//   console.log(`logger.${time}`); //* logger.2s
// };

// const timerid = setTimeout(logger, 2000, "2s");

//* Object
// const logger = ({ time }) => {
//   console.log(`logger.${time}`); //* logger.2000ms
// };

// setTimeout(logger, 2000, { time: "2000ms" });
// setTimeout(
//   (time, name) => {
//     console.log(`logger.${time}, ${name}`); //* logger.2s, Alice
//   },
//   2000,
//   "2s",
//   "Alice"
// );
//? Що буде виведено в консолі при виконанні даного скрипта:
// for (let i = 3; i > 0; i--) {
// console.log(i); //* 3>2>1
//   const delay = i * 1000; //* 3*1000 > 2*1000 >1*1000
//   setTimeout(() => {
//     console.log(i); //* 1>2>3
//   }, delay); //* 3000ms-3 > 2000ms-2 > 1000ms-1
// }
//* Відповідь: 1>2>3

// const greet = () => {
//   console.log("Hello!");
// };

// setTimeout(greet, 3000);

// const greet = () => {
//   console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);
