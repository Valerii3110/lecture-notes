//*Створення та обробка промісу
//* - Клас Рromise
//* - resolve
//* - reject
//* - then, catch, finally */

//*Створення та обробка промісу
//* Для того щоб створити проміс ми ствоюємо конструкцію new Promise(), куди передаємо функцію як аргумент.
//* Функці приймає два параметри resolve і reject
//* Обидва параметри це методи:
//* Якщо потрібно щоб promise завершився успіхом викликаємо - resolve
//* Якщо потрібно щоб promise завершився помилкою викликаємо - reject
//* Значення (аргументи) які будуть знаходитись в методах resolve або  reject, будуть знаходитись в promise

//* Синтаксис promise */

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve("Ok");
//     } else {
//       reject("Ooops");
//     }
//   }, 2000);
// });

// console.log(promise); //* "Ok" - при успішному завершині promise, "Ooops" -при  завершині promise з помилкою

//* - then, catch, finally */

// promise
//   .then((value) => {
//     console.log("then", value); //* "Ok"
//     return value * 2;
//   })
//! Метод then() існує для обробки успішного завершення promise коли використовується метод resolve - Значення яке передали в resolve як аргумент

// .catch((error) => {
//   console.log("catch", error); //* "Ooops"
// });
//! Метод .catch існує для обробки успішного завершення promise коли використовується метод reject Значення яке передали в reject як аргумент

// const promise = new Promise((resolve, reject) => {
//   resolve(5);
// });

//* Лфнцюги промісв
//* - декілька послідовних .then
//* -.then повертає проміс
// promise
//   .then((res) => {
//     // console.log(res); //* 5
//     return res * 2;
//   })
//   .then((data) => {
//     // console.log(data);//* 10
//     return data * 5;
//   })
//   .then((data) => {
//     console.log(data); //* 50
//   })
//   //* Значення яке повертається з callback функції методу then  буде promise
//   .catch((error) => console.log(error))
//   //* Метод .catch повинен йти  після всіх методів then. Значення яке повертається з callback функції методу .catch  буде promise з значення
//   .finally(() => {
//     console.log("finally");
//   });

//* Метод .finally існує для того щоб відпрацювати в будь якому випадку. Він приймає функцію без будь яких параметрів і просто щось виконує.Потрібен для уникнення дублювання коду

// let value = null;
// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.9) {
//       resolve("Ok");
//     } else {
//       reject("Ooops");
//     }
//   }, 2000);
// });

// promise
//   .then((lalala) => {
//     value = lalala;
//     console.log("then", lalala);
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });
// console.log(value); //* null - тому що проміси асинхронний код, що виконається з затримкою.
//! Оброблляти проміси коли вони завешуються помилкою обовязково.

// const promise = new Promise((resolve) => {
//   resolve(10);
// });

// promise
//   .then((data) => {
//     new Promise((resolve) => {
//       resolve(data * 2); //* ця функція нічого не поверта тому що слово куегкт відсутє а {} присутні. Тому ніякого повернення тут немає.
//     });
//   })
//   .then((value) => {
//     console.log(value); //* undefined
//   });

// console.log("step 1");

// setTimeout(() => {
//   console.log("step 2");
// }, 0);

// new Promise((resolve) => {
//   resolve("step 3");
// }).then((data) => console.log(data));

// setTimeout(() => {
//   console.log("step 4");
// });
//* setTimeout макро задачі, new Promise - мікро задачі тому, спочатку виконається синхронний код, а  прміс виконається швидше за setTimeout
