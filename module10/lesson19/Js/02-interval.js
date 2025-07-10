//** Метод setInterval(calback,delay, args) */
// setInterval(() => {
//   console.log("timer");
// }, 2000);

// setInterval(
//   (time) => {
//     console.log("timer", time);
//   },
//   2000,
//   "2s"
// );
// setInterval(
//   (time, name) => {
//     console.log(`timer ${time}, ${name}`);
//   },
//   2000,
//   "2s",
//   "Alice"
// );

//** Очищення інтервалу за допомогою clearInterval(intervalId) */

// setInterval(() => {
//   console.log("timer");
// }, 2000);

const timerId = setInterval(() => {
  console.log("timer");
}, 2000);

setTimeout(() => {
  clearInterval(timerId);
}, 5000); //* зупинка інтервалу через 2 секунди

// clearInterval(timerId):

// const greet = () => {
//   console.log("Hello!");
// };

// const intervalId = setInterval(greet, 3000);

// clearInterval(intervalId);
