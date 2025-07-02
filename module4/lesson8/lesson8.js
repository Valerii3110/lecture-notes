//* Масив обєктів*/

//* Перебирання масиву
//* Пошук обєкту за значеннями властивості
//* Коллекція значень властивості

//* Об'єкти дозволяють згрупувати описові характеристики сутності, наприклад, користувача, книги, автомобіля, шоколадного батончика тощо.
//* Для опису групи сутностей використовується масив об'єктів.

// const friends = [
//   (name: "Rosa", online: false)
//   (name: "Joye", online: true)
//   (name: "Chendler", online: false)
//   (name: "Poebe", online: true)
//   (name: "Monica", online: true)
//   (name: "Rachel", online: false)
// ]

//* Пошук обєкту за значеннями властивості
//* Пошук друга за іменем

// function findByName(arr, userName) {
//        //name
//   for(const item of arr){;
//         //Rose
//     if(item.name.toLowerCase() === userName.toLowerCase()){
//     console.log(item);// (name: "Joye", online: true)

//     return item;
//     }
//   }
//   return "Not found"
// }
// console.log(findByName(friends, "Joye"));

//* Отримуємо імена усіх друзів
// function getAllNames() {
//   const names = [];
//   for(const lalala  of arr) {
//     names.push(lalala.name)

//   }
//   return names;
// }
// console.log(getAllNames(friends));

//* Отримати імена тільки тих друзів які знаходяться online
// function getOnline(arr) {
//   const online = [];
//   for (const item of arr) {
//     console.log(item.online);

//     if (item.online === true) {//? === true
//       online.push(item)

//     }

//   }

// }
// console.log(friends);

//** Напиши функцію calcTotalPrice(stones, stoneName) яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каменів з таким ім'ям та кількістю з об'єкта*/

// const stones = [
//   (name:"Смарагд", price:1300, quantity: 4)
//   (name:"Діамант", price:2700, quantity: 3)
//   (name:"Сапфір", price: 400, quantity: 7)
//   (name:"Шебінь", price: 200, quantity: 2)

// ]
// function calcTotalPrice(stones, stoneName) {
//   let sum =0;
//   for(const item fo stones) {
//     if (item.name === stones) {
//       return item.quantity * item.price;

//     }
//   }

// }

// console.log(calcTotalPrice(stones, "Сапфір"));

//** Другий варіант*/

// const stones = [
//   (name:"Смарагд", price:1300, quantity: 4)
//   (name:"Діамант", price:2700, quantity: 3)
//   (name:"Сапфір", price: 400, quantity: 7)
//   (name:"Сапфір", price: 400, quantity: 7)
//   (name:"Шебінь", price: 200, quantity: 2)

// ]
// function calcTotalPrice(stones, stoneName) {
//   let sum =0;
//   for(const item fo stones) {
//     if (item.name === stones) {
//       sum += item.quntity * item.price

//     }
//   }
//   return sum;

// }
// console.log(calcTotalPrice(stones, "Сапфір"));

//! Об'єкти */

//* Методи об'єкта
//* Доступ до властивостей об'єкту через this
//* Змінна за посиланням

//* Якщо значення властивості — це функція, така властивість називається методом об'єкта.

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   chengenName(newName) {
//     // console.log(this); // this =
//     this.name = newName;
//   }
//   addTracks(newTrak) {
//     this.tracks.push(newTrak)
//   }
//   updateRating(newRating) {
//     this.rating = newRating;
//   }
//   getAllNames() {
//     return this.name;
//   }
// }

//! Тобто ми в методах нашого об'єкту через ключове слово this отримуємо доступ до об'єкту, який в момент мого виклику обєкту стояв зліва від нього. В this буде те що стоїть зліва від функції в момент її виклику.

// console.log(playlist.chengenName("My playlist"));

// const playlist2 ={
//   name: "Sport playlist",
//   rating: 4,
//   tracks: ["track-4", "track-5"]
// }
// playlist.chengenName = playlist.chengenName; //* this =playlist
//                         //* chengenName(newName) {
//                         //*   console.log(newName);
//                         //*   playlist.name = newName;
//                         // }

// playlist2.chengenName("Play lalala");// this =playlist2

// console.log(playlist.chengenName);
// console.log("playlist", playlist);
// console.log("playlist2", playlist2);

// const obj = {x:1};
// const obj1 = obj;
// obj.x = 100;
// console.log(obj1);

// function foo(params) {
//   return "lalala"

// }
// foo.hello = "Super Puper"
// console.dir(foo);

// const myFunction = foo;

//!  Синтаксис spred і rest*/
//* Залишкові параметри
//* Збір частини аргументів
//* Входження параметрів
//* Створення масиву
//* Створення об'єкту
//
// function foo(...rest) {
//   console.log(rest);//[1, 2, 3]

// }
// foo(1, 2, 3);
// foo(10, 20, 3, 4, 5)
//! В параметрах функції (...) -  rest оператор, він збирає всі параметри які приходять у функцію і створює масив.
//! (...) - rest оператор в параметрах функції обовязково повинен бути останнім
//? Як ми можемо витягти декілька параметрів а решту зібрати в масив
// function foo(a, b, ...rest) {
//   console.log(a, b);// 10, 20
//   console.log(rest);//[3, 4, 5]

// }
// foo(1, 2, 3);
// foo(10, 20, 3, 4, 5)

// function foo(...args) {

//   console.log(args);//[(x:1, b: 2)]

// }
// foo((x:1, b: 2));

// const numbers = [
//   1000,
//   ...(1, 2, 3)
//   2000,
//   (4, 5, 6)
//   3000,
// ];
// console.log(numbers);(1000,
//                      (1, 2, 3)
//                      2000,
//                      (4, 5, 6)
//                       3000)

//! (...) - з права від знаку присвоєння "=", означають -spred оператор, він розгортає нашу сутність

//* Пошук найменшого або найбільшого значення температури (числа)

// const temps = [18, 14, 12, 23, 17 29, 24]

// console.log(Math.min(...temps));//12
// //! Під час виклику методу (функції) (...) - -spred оператор
// console.log(Math.max(...temps));//29

// //* Створення масиву за посиланням
// //        my-pc/1   my-pc/2
// const a = [(x: 1), (y: 2)];
//  const b = [...a];// [my-pc/1, my-pc/2] spred оператор робить не глибоку копію з нескладними типами даних

//  a[0].x = 100;

// console.log("a", a);
// console.log("b", b);

//* Поєднання кілька масивів в один через spred оператор
// const lasWeekTemps = [1, 2, 3];
// const curentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lasWeekTemps,...curentTemps,...nextWeekTemps];// Послідовність має значення
// console.log(allTemps);

//*Створення об'єктів
// const objA = (x: 1, y: 2);
// const objB = (x: 0, q: 3);
// const objC = {
//   ...objA, // x: 1, y: 2
//   x:10, // x: 10, y: 2
//   ...objB,// x: 0, y: 2, q:3
//   y:20 //  x: 0, y: 20, q:3
//   y:20
// }
// console.log(objC);// {x: 0, y: 20, q:3}

// const defaultSettengs = {
//   theme: "light",
//   showoNotification: true,
//   hideSidebar: false,
// }

// const userName = {
//   showoNotification: false,
//   hideSidebar: true,
// }

// const settings = {
//   ...defaultSettengs,
//   ...userName,
// }

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const obj = { id: amount, amount, type };
//     return obj;
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if(this.balance < amount) {
//       console.log("Недостатньок коштів");
//       return;
//     }

//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     // const this = account
//     for(const item of this.transactions) {
//       if(item.id === id) {
//         return item;
//       }
//     }
//     return "Not found";
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for(const item of this.transactions) {
//       if(item.type === type) {
//         sum += item.amount;
//       }
//     }

//     return sum;
//   },
// };

// account.deposit(200);
// account.deposit(400);

// account.withdraw(100);

// console.log(account.getTransactionDetails(100))

// console.log(account.getBalance());
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// console.log(account);
