//! Проміси
//* Promise (проміс, від англ. promise — обіцяти) — об'єкт, що представляє поточний стан асинхронної операції. Це обгортка для значення, невідомого на момент створення промісу. Проміс дозволяє обробляти результати асинхронних операцій таким чином, якби вони були синхронними: замість кінцевого результату асинхронної операції, повертається своєрідна обіцянка отримати результат у майбутньому.

//! Життєвий цикл проміса

//* Проміс може бути у трьох станах:
//* Очікування (pending) — початковий стан під час створення промісу.
//* Виконано (fulfilled) — операція виконана успішно з будь-яким результатом.
//* Відхилено (rejected) — операція відхилена з помилкою.

//? Проміс може також завершитися не успішно (rejected) і повернути помилку. Коли проміс переходить у стан fulfilled або rejected — це назавжди.

//! Створення проміса
// const promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
// });
//* resolve(value) — функція для виклику у разі успішної операції. Переданий їй аргумент буде значенням виконаного промісу.
//* reject(error) — функція для виклику у разі помилки. Переданий їй аргумент буде значенням відхиленого промісу.

//* Колбек-функція повідомляє проміс, коли і як операція, з якою він пов'язаний, буде завершена. У ній можна виконувати будь-яку асинхронну операцію. Після її завершення потрібно викликати:
//* resolve() для позначення успішного виконання. Результатом буде fulfilled.
//* Або
//* reject() у разі помилки, який встановлює стан промісу як "відхилений" (rejected).
//* Значення, що повертається цією функцією-виконавцем, ігнорується.

//* Приклад:
//* У прикладі показано, як змінюється значення змінної isSuccess на true або false, щоб викликати resolve або reject та імітувати успішне виконання промісу (fulfilled) або виконання з помилкою (rejected).
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); //* Promise {<pending>}-  Об'єкт промісу
//* У змінну promise буде записаний проміс (об'єкт) у стані pending, а через дві секунди, щойно буде викликаний resolve() або reject(), проміс перейде у стан fulfilled або rejected, і ми зможемо його обробити.

//! Метод then()
//* Метод проміса then() приймає два аргументи — дві callback функції, які будуть викликані, коли проміс змінить свій стан.
//* Результат промісу — це значення або помилка, яку функції отримають як аргументи.promise.then(onResolve, onReject)
// promise.then(onResolve, onReject);
//* onResolve(value) — 1-й аргумент методу then(), колбек-функція, яка буде викликана у разі успішного виконання промісу та отримає його результат як аргумент.
//* onReject(error) — 2-й аргумент методу then(), колбек-функція, яка буде викликана у разі виконання промісу з помилкою та отримає її як аргумент.

//* Після створення промісу, його результат обробляється в callback-функції.
//* Код пишеться таким чином, щоб врахувати всі сценарії на майбутнє:
//* 1. Якщо проміс виконається.
//* 2. Якщо проміс не виконається.

//** У прикладі нижче callback-функція onResolve буде викликана через дві секунди, якщо проміс успішно виконається, а onReject буде викликана через дві секунди у тому разі, якщо проміс виконається з помилкою. */
// const isSuccess = true;
//* Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

//* Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); //* "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); //* "Error! Error passed to reject function"
//   }
// );

//? Якщо функції onResolve і onReject містять складну логіку, їх для зручності оголошують як зовнішні функції і передають у метод then() за ім'ям.

//! Метод catch()

//* На практиці в методі then() обробляють тільки успішне виконання промісу.

//* Помилку його виконання обробляють у спеціальному методі catch() для «відловлювання» помилок.

// promise
// 	.then(value => {
// 		//* Promise fulfilled
// 	})
// 	.catch(error => {
// 	  //* Promise rejected
// 	});

//* Колбек-функція в методі catch буде викликана в разі виконання промісу з помилкою, і отримає цю помилку як аргумент. Метод catch має йти після then.
// const isSuccess = true;

//* Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// //* Registering promise callbacks
// promise
//   .then((value) => {
//     console.log(value); //* "Success! Value passed to resolve function"
//   })
//   .catch((error) => {
//     console.log(error); //* "Error! Error passed to reject function"
//   });

//! Метод finally() - Цей метод може бути корисним, якщо необхідно виконати код після того, як проміс буде виконаний незалежно від результату (fulfilled або rejected). Метод finally() дозволяє уникнути дублювання коду в обробниках then() і catch().
// promise
//   .then((value) => {
//     //* Promise fulfilled
//   })
//   .catch((error) => {
//     //* Promise rejected
//   })
//   .finally(() => {
//     //* Promise fulfilled or rejected
//   });

// const isSuccess = true;
//* Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

//*Колбек-функція не отримає жодних аргументів, оскільки неможливо визначити, чи був проміс виконаний або відхилений. Тут буде виконуватися код, який необхідно запустити в будь-якому разі.
//* Registering promise callbacks
// promise
//   .then((value) => console.log(value)) //* "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) //* "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); //* "Promise settled"

//! Ланцюжки промісів
//* Метод then() повертає новий проміс, який у свою чергу отримує значення від своєї callback-функції onResolve. Ця особливість дозволяє формувати послідовність асинхронних операцій, зв'язуючи проміси в ланцюжок.
//* Метод then() повертає проміс. Перед його виконанням може минути деякий час, отже, частина ланцюжка, що залишилася, буде чекати на результат. У разі виникнення помилки в будь-якому місці ланцюжка, виконання всіх наступних then() скасовується, а управління передається методу catch(). Тому він має знаходитись у кінці ланцюжка усіх then().
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); //* 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); //* 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); //* 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally"); //* finally
//   });

//! Промісифікація
//!   Колбеки vs проміси
//* Уявімо, що в нас є функція, яка виконує асинхронну операцію, наприклад, запит на сервер за інформацією про користувача за його ім'ям.
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   // ...
// };

//? Зараз функція знає занадто багато про той код, який буде використовувати результат її роботи. Вона очікує колбеки для успішного запиту onSuccess і для помилки onError, та буде відповідати за їх виклик за певних умов.
//? Тобто ми передаємо щось усередину функції (колбеки) і сподіваємося, що воно відпрацює правильно. Це може стати проблемою.
//? Краще, якщо функція не зважає на той код, який буде використовувати її результат. Вона просто виконує якусь операцію і повертає результат своєї роботи в зовнішній код. Для того щоб повернути результат асинхронної операції, із функції необхідно повернути проміс.

//! Промісифікація — це перетворення функції з колбеками таким чином, щоб вона не приймала колбеки, а повертала проміс. Така функція називається промісифікована.

//*Відмінності промісу і callback-функції:
//* Колбеки — це функції, проміси — це об'єкти.
//* Колбеки передаються як аргументи функції, що виконує асинхронну операцію, а проміси створюються всередині цієї функції і повертаються як її результат.
//* Колбеки обробляють успішне або неуспішне завершення операції, проміси нічого не обробляють, тільки зберігають поточний стан асинхронної операції.
//* Колбеки можуть обробляти декілька подій, проміси пов'язані тільки з однією подією.

//!Промісифікація функцій
//* Доповнимо код роботи з функцією fetchUserFromServer її викликом і передачею аргументів для імені користувача і колбеків обробки результату.
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);
// };

// fetchUserFromServer(
//   "Mango",
//   (user) => console.log(user),
//   (error) => console.error(error)
// );

//* Далі використаємо таймер для імітації асинхронної операції та викличемо колбеки за умовою. Ми можемо змінити значення змінної isSuccess на true або false, щоб імітувати статус асинхронної операції.
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
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
//* Як ми вже зазначали, зараз функція знає надто багато про той код, який використовуватиме результат її роботи. Тобто ми передаємо щось усередину функції (колбеки) і сподіваємося, що воно відпрацює правильно, що ненадійно. Давай промісифікуємо її.
//* Для початку напишемо код, який поверне з функції проміс. Для цього створюємо в ній проміс через new Promise і повертаємо його.
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };
//* Отримуємо проміс у зовнішньому коді та додаємо на нього обробники в методах then і catch.
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// const userPromise = fetchUserFromServer("Mango"); // результатом виклику fetchUserFromServer("Mango") буде проміс

// // проміс обробляємо у методах then() i catch()
// userPromise
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));
//* Зазвичай обробники додають на результат виклику функції проміс, не записуючи його в зайву змінну.
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// fetchUserFromServer("Mango") //* результатом виклику fetchUserFromServer("Mango") буде проміс
//   .then((user) => console.log(user)) //* проміс обробляємо в методі then()
//   .catch((error) => console.error(error)); //* проміс обробляємо в методі catch()

//* Весь код, пов'язаний із логікою роботи, додаємо всередину функції створення промісу.
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       //* Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value"); //* значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject("error"); //* значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

//! Більшість сучасних бібліотек ґрунтуються на промісах. У разі виклику методу для асинхронної операції його результат доступний як проміс, якому можна причепити обробники в методах then() і catch().

//! Promise.resolve() і Promise.reject()
//*Promise.resolve() і Promise.reject() — це статичні методи для створення промісів, що миттєво успішно виконуються або відхиляються. Вони працюють аналогічно new Promise(), повертають проміс, але мають коротший синтаксис.

//* Так створюється успішно виконаний проміс через new Promise():
// new Promise(resolve => resolve("success value"))
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error));
//* Так створюється успішно виконаний проміс через Promise.resolve():
// Promise.resolve("success value");
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error));

//* Так створюється проміс, що виконався з помилкою через new Promise():
// new Promise((resolve, reject) => reject("error"));
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error));
//* Так створюється проміс, що виконався з помилкою через Promise.reject():
// Promise.reject("error");
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error));

//* Прочитай приклад коду

Promise.reject().then().catch();

//? Який метод виконається для такого промісу?- catch
//* Саме так! Проміс, створений за допомогою Promise.reject(), є відхиленим (rejected), і тому метод catch виконається для обробки цього відхилення.

//* Промісифікація синхронних функцій

//* Методи Promise.resolve і Promise.reject використовуються для промісифікації функцій, коли не треба чекати результату асинхронної операції, а просто необхідно побудувати ланцюжок промісів, і вже є початкове значення.

//* Виконаємо рефакторинг коду функції, яка приймає два колбеки та викликає їх за умовою.

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (!guestName) {
//     onError("Guest name must not be empty");
//   } else {
// 		onSuccess(`Welcome ${guestName}`);
// 	}
// };

// makeGreeting(
//   "Mango",
//   greeting => console.log(greeting),
//   error => console.error(error)
// );

//* Зробимо промісифікацію функції makeGreeting для того, щоб повністю усунути її залежність від зовнішнього коду. Вона повинна просто повертати проміс.

// const makeGreeting = guestName => {
// 	return new Promise((resolve, reject) => {
// 		  if (!guestName) {
// 				reject("Guest name must not be empty");
// 		  } else {
// 				resolve(`Welcome ${guestName}`);
// 			}
// 	})
// };

// makeGreeting("Mango")
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));

//* А тепер використаємо методи класу Promise, щоб скоротити кількість коду.

// const makeGreeting = (guestName) => {
//   if (!guestName) {
//     return Promise.reject("Guest name must not be empty");
//   } else {
//     return Promise.resolve(`Welcome ${guestName}`);
//   }
// };

// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting)) //* Welcome Mango
//   .catch((error) => console.error(error));
//* Замість того щоб приймати колбеки та викликати їх, функція повертає (return) у зовнішній код проміс. Подальша доля цього промісу вже не стосується функції.

//! Створення промісів із затримкою

//*Створимо функцію makePromise(options), яка буде створювати і повертати проміси з різною затримкою виконання.
// const makePromise = (options) => {
//   // ...
// };

// makePromise({
//   value: "Some value",
//   delay: 2000,
//   shouldResolve: true,
// });
//* Функція приймає один параметр options . Це об'єкт із властивостями, в яких будемо передавати наступні значення:
//* value — значення, яке буде значенням проміса.
//* delay — затримка в мілісекундах, після якої буде виконуватися проміс.
//* shouldResolve — булеве значення, що вказує, чи повинен проміс виконатися (true), або бути відхиленим (false).

//* Доповнимо код функції так, щоб вона повертала проміс.
// const makePromise = options => {
//   return new Promise((resolve, reject) => {
// 		// ...
//   });
// };

//* Далі зробимо так, щоб проміс виконувався або був відхиленим зі значенням, вказаним у властивості value після затримки в delay мілісекунд. За замовчуванням проміс виконуватиметься успішно, для цього вказуємо значення за замовчуванням true для властивості shouldResolve при деструктуризації.
// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
// 			if(shouldResolve) {
// 				resolve(value)
// 			} else {
// 				reject(value)
// 			}
// 		}, delay);
//   });
// };

//* Отже, це просто перевикористана функція, яка містить у собі код створення промісу із затримкою, щоб не писати цей код щоразу, коли потрібно створити проміс.

//* Перевіримо роботу функції, створивши кілька промісів з різним часом затримки та значеннями.

// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };

// makePromise({ value: "A", delay: 1000 })
//   .then((value) => console.log(value)) //* "A"
//   .catch((error) => console.log(error));

// makePromise({ value: "B", delay: 3000 })
//   .then((value) => console.log(value)) //* "B"
//   .catch((error) => console.log(error));

// makePromise({ value: "C", delay: 2000, shouldResolve: false })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error)); //* "C"

//* Без функції цей же код виглядав би ось так:

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Fulfilled A");
//   }, 1000);
// })
//   .then((value) => console.log(value)) //* Fulfilled A
//   .catch((error) => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Fulfilled B");
//   }, 3000);
// })
//   .then((value) => console.log(value)) //* Fulfilled B
//   .catch((error) => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Rejected C");
//   }, 2000);
// })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error)); //* "Rejected C"

//! Обробка множинних промісів
//! Метод Promise.all()
//* Є ситуації, коли потрібно чекати на виконання всіх промісів одночасно, а потім обробляти їх результати. Або ситуації, коли достатньо дочекатися виконання хоча б одного з них, ігноруючи інші випадки. Для цих сценаріїв клас Promise має статичні методи для роботи з групою промісів.
//! Метод Promise.all() дозволяє одночасно обробити кілька промісів та отримати їхні результати. Він приймає масив промісів як вхідні дані, чекає їх виконання та повертає один проміс.
// Promise.all([promise1, promise2, promise3, ...])

//? Якщо всі проміси виконуються успішно, повернений проміс перейде у стан fulfilled, а його значенням буде масив результатів виконання кожного промісу.

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values)) //* [1, 2, 3]
// 	.catch(error => console.log(error));
//* Це означає, що він чекає на виконання всіх промісів, а потім створює та повертає новий проміс, значенням якого є масив значень виконаних промісів.

//? Якщо хоча б один із промісів відхиляється, повернений проміс одразу переходить у стан rejected, а його значенням буде помилка.

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values))
// 	.catch(error => console.log(error)); //* "Rejected promise 2"

//! Метод Promise.allSettled()

//*   Метод Promise.allSettled() також дозволяє одночасно обробити кілька промісів та отримати їхні результати. Він приймає масив промісів як вхідні дані, чекає їх виконання та повертає один проміс.

// Promise.allSettled([promise1, promise2, promise3, ...])

//*  Відмінність від Promise.all полягає в тому, що метод Promise.allSettled() чекає виконання всіх промісів незалежно від того, чи були деякі або навіть всі проміси відхилені.

//* Повернутий проміс ніколи не буде відхилений, він завжди успішно виконується (стан fulfilled). Додавання методу catch навіть не має сенсу, оскільки він ніколи не виконається.

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3])
//   .then(values => console.log(values));
// [
//   { status: "fulfilled", value: 1},
//   { status: "rejected", value: "Rejected promise 2"},
//   { status: "fulfilled", value: 3}
// ]

//* Значенням повернутого промісу буде масив об'єктів з результатами виконання кожного промісу.

//*  status — властивість, яка зберігає статус, з яким виконався проміс, це рядок "fulfilled" або "rejected".
//* value — властивість, в якій зберігається значення, з яким виконався або був відхилений проміс.

//! Метод Promise.race()

//! Метод Promise.race приймає масив промісів і повертає "найшвидший", тобто перший виконаний або відхилений проміс з переданих, разом зі значенням або причиною його відхилення.

// Promise.race([promise1, promise2, promise3, ...])
//* Кейс 1

//* Створимо кілька промісів з різним часом виконання.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });

// Promise.race([p1, p2])
// 	.then(value => console.log(value)); // 1
// 	.catch(error => console.log(error));

//* Перший проміс перейде в стан fulfilled через 1 секунду (буде найшвидшим), і буде виконано колбек методу then зі значенням першого промісу, а решту буде відкинуто.

//* Коли хоча б один проміс з масиву виконається, проміс, що повертається, перейде у стан resolved, а всі інші будуть відкинуті.

//* Кейс 2

//* Створимо кілька промісів з різним часом виконання.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => rejected(2), 1000);
// });

// Promise.race([p1, p2])
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error)); // 2

//* Другий проміс перейде в стан rejected через 1 секунду (буде найшвидшим), виконається колбек методу catch зі значенням другого промісу, а інші будуть відкинуті.
//* Коли хоча б один проміс із масиву буде відхилений, проміс, що повертається, перейде в стан rejected, а всі інші будуть відкинуті.
