//** Промисифікація:
//* - Проблема доступу до результату промісв з колбеком
//* - Функція яка повертає проміс  */

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       onSuccess(`Ваше замовлення ${dish}`);
//     } else {
//       onError(`Закінчилися продукти`);
//     }
//   }, 1000);
// };
// makeOrder(
//   "Пиріжок",
//   (str) => {
//     console.log("onSuccess", str);
//   },
//   (error) => {
//     console.log("onError", error);
//   }
// );

//* Промісифікація наших функій -  це означає що результат  ми не будемо обробляти результат у функції makeOrder а будемо  просто повертати з нашої функції makeOrder, а функція повертатиме проміс

// const makeOrder = (dish) => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//       if (random > 0.5) {
//         resolve(`Ваше замовлення ${dish}`);
//       } else {
//         reject(`Закінчилися продукти`);
//       }
//     }, 1000);
//   });
// };
// makeOrder("Пиріжок")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//** Промісифікація "синхронних" функцій
//* - Promise.resolve()
//* - Promise.reject() */

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//   if (random > 0.5) {
//     onSuccess(`Ваше замовлення ${dish}`);
//   } else {
//     onError(`Закінчилися продукти`);
//   }
// };

// makeOrder(
//   "Пиріжок",
//   (str) => {
//     console.log("onSuccess", str);
//   },
//   (error) => {
//     console.log("onError", error);
//   }
// );

//* або

// const makeOrder = (dish) => {
//   const random = Math.random();

//   if (random > 0.5) {
//     return Promise.resolve(`Ваше замовлення ${dish}`);
//   } else {
//     return Promise.resolve(`Закінчилися продукти`);
//   }
// };
// makeOrder("Пиріжок")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     //* Змініть значення змінної isSuccess для імітації статусу запиту
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// fetchUserFromServer(
//   "Mango",
//   (user) => console.log(user),
//   (error) => console.error(error)
// );

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");  // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject("error");  // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

//*------------------ Promise.resolve() і Promise.reject() ------------------------------------------
const startTime = Date.now();

const res1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      resolve({ title: "first", time: deltaTime }); // ✅ обов'язково викликаємо resolve
    }, 3000);
  });
};

const res2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      resolve({ title: "second", time: deltaTime });
    }, 1000);
  });
};

const res3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      resolve({ title: "third", time: deltaTime });
    }, 5000);
  });
};

// res1().then((data) => console.log(data));

// res2().then((data) => console.log(data));

// res3().then((data) => console.log(data));

//** Метод Promise.all - очікує в себе масив промісів
//* Метод Promise.all дає можливість дочекатися виконання всіх промісів і тоді вже отримати результат
//* Метод Promise.all потрібно щоб усі проміси завершились успіхом, якщо хочаб один завершив я помилкою, ми одразу потрапляємо в блок .catch і отримуємо помилку */
const container = document.querySelector("div");
container.textContent = "loading ...";

// Promise.all([res1(), res2(), res3()])
//   .then((data) => {
//     console.log("then", data);
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   })
//   .finally(() => {
//     container.textContent = "";
//   });

//** console.log(res3()); // Promise {<pending>}
//**console.log(res3);//() => ƒ {}*/посилання на функцію

//* Метод Promise.race
//* - очікує в себе масив промісів
//* Метод Promise.all чекає  виконання найшвидшого з промісів і видає  результат незалежно чи завершився він успіхом чи помилкою

Promise.race([res1(), res2(), res3()])
  .then((data) => {
    console.log("then", data);
  })
  .catch((error) => {
    console.log("catch", error);
  })
  .finally(() => {
    container.textContent = "";
  });

// const makeGreeting = guestName => {
//   if (!guestName) {
//    return Promise.reject("Guest name must not be empty" );
//   } else {
// 		return Promise.resolve(`Welcome ${guestName}`);
// 	}
// };

// makeGreeting("Mango")
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));

// ---------------------------------- Promise.all() Promise.race() ---------------------------------------------

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values)) // [1, 2, 3]
// 	.catch(error => console.log(error));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });

// Promise.race([p1, p2])
// 	.then(value => console.log(value)) // 1
// 	.catch(error => console.log(error))
