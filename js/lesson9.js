/**Функція зворотнього виклику (callback)
 *
 * Функція як значення
 * Колбек функції
 * Інлайн колбеки
 */

// function foo(a, b) {
//   return a + b;
// }
// const a1 = foo;
// console.log(a1(1, 2)); //3

// console.log(foo(2, 3)); //5
// console.log(foo); //ƒ foo(a, b) {
//   return a + b;
// }

// function fnA(num) {
//   console.log("fnA", num * 2); //fnA 4
// }

// function foo(a, b) {
//   return a + b;
// }

//foo(1, 2, fnA); /**Функція яка передається в іншу функцію як аргумент - називається callback-функція */

//           1  2    fnA
// function foo(a, b, callback) {
//   console.log(callback); // ƒ fnA(num) {
//   // console.log("fnA", num * 2);
//   //}
//   callback(2);
//   return a + b;
// }

// console.log(foo(1, 2, fnA));

// console.log(foo);
// const a = foo;
// console.log(a(1, 2));

//* Функція calc(a, b, callback)/

// function calc1(a, b) {
//   console.log("hello"); //hello
//   console.log("lalala"); //lalala
//   // const result = callback(a, b);
//   const result = a + b;
//   console.log(result); //3
// }
// calc1(1, 2);

// function calc2(a, b) {
//   console.log("hello"); //"hello"
//   console.log("lalala"); //"lalala"
//   const result = a - b;
//   console.log(result); //8
// }
// calc2(10, 2);

// function calc1(a, b, callback) {
//   console.log("hello"); //hello
//   console.log("lalala"); //lalala
//   // const result = callback(a, b);
//   const result = callback(a, b);
//   console.log(result); //
// }

// calc1(10, 2, function (x, y) {
//   return x + y;
// }); //hello
// //lalala
// //12

// calc1(5, 3, function (x, y) {
//   return x - y;
// });//hello
//lalala
//2
/**Якщо колбек-функція маленька і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Такі функції називаються інлайн-колбеки. Вони будуть доступні тільки в якості значення параметра і більше ніде в коді*/

// * Напиши функцію (arry, callback) яка першим параметром очікує масив , ф другим - функцію, яка застосовується до кожного елементу масиву. Функція each повинна повернути новий маси, елементами якого будуть результати виклику коллбеку.

// function each(array, callback) {
//   const newArr = [];
//   for (const num of array) {
//     // console.log(callback(num));

//     newArr.push(callback(num));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2; //[128, 98, 72, 50, 32]
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10; //[54, 39, 26, 15, 6]
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value); // [8, 7, 6, 5, 4]
//   });
// );

//*Стрілочні функції
/**
Стрілочні функції (сленг — “стрілки”) мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек. */
//* Оголошення
//* Інлайн стрілочні функції
// add(1, 2);

/**Звичайна функція */

// add(1, 2);
// function add(a, b) {
//   console.log(arguments); //Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//   console.log(a, b); // 1 2
// }

/**Стрілочна функція
 * синтаксис стрілочної функції
 * стрілочну функцію не можна викликати до моменту її оголошення, тому що створена вона як звичайна змінна і на неї діють тіж самі правила
 */

// const addArrow = (a, b) => {
//   console.log(arguments); // в стрілочних функціях псевдомасиву arguments -немає
//   return a + b;
// };

// console.log(addArrow(10, 20)); //30

/**(a, b) - параметри функції
 * {} -тіло функції*/
/** Якщо нам потрібно отримати  список всіх елементів які були передані в нашу стрілочну функцію  під час її виклику використовуємо  ...rest - оперктор*/

// const addArrow = (...rest) => {
//   return rest;
// };
// console.log(addArrow(10, 20, 30));

// const addArrow = (a, b) => {
//   return a + b;
// };

// console.log(addArrow(10, 20));//30

/**Якщо ми передаємо функції лише один аргумент то круглі дужки можна прибрати, якщо ргументів декілька або немає взагалі  круглі дужки ставити обов'язково */
// const addArrow = a => {
//   return a + 20;
// };

// console.log(addArrow(10)); //30

/** Неявне повернення
 * Якщо в нашій функції єдина дія повернення чогось можна скористатись коротким синтаксесом прибрати фігурні дужки
 */
// const addArrow = (a) => a + 20;

// console.log(addArrow(10));//30

/** Явне повернення обєкту */
// const addArrow = (a) => {
//   return {
//     a,
//   };
// };
// console.log(addArrow(10)); //{
//   "a": 10
// }
/**Неявне повернення обєкту з стрілочної фукції  */
// const addArrow = (a) => ({ a });
// console.log(addArrow(10)); //{a: 10}

/**Неявне повернення масиву з стрілочної фукції  */
// const addArrow = (...a) => [a];
// console.log(addArrow(5, 10, 15, 20)); //
// [5, 10, 15, 20];

// const calc = (a, b, callback) => {
//   const result = callback(a, b);
//   console.log(result); //7
// };

// calc(2, 5, (x, y) => {
//   return x + y;
// });

// calc(10, 4, (x, y) => x - y);

//* Метод forEach(callback)
//* Поелементно перебирає оригінальний масив
//* Нічого не повертає
//* Заміняє класичний for, for ..of, якщо не потрібно переривати цикл

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index, arr) {
//   console.log(number, index, arr);
// });
/**Метод .forEach під час свого виклику як аргумент отримати функцію (callback-функція) з параметрами 1-й number елемент масиву, 2-й index -індекс цього елементу, 3-й arr -посилання на вихідний масив.Якщо деякі параметри нам не потрібні їх можна не вказувати, але послідовність має значення*/
// Використовуємо тільки значення
// numbers.forEach((value) => {
//   console.log(value);
// });
/**Припинити (перервати роботу перебираючого методу .forEach неможливо, він буде виконаний до кінця масиву ) */

// Використовуємо значення і індекс
// numbers.forEach((value, index) => {
//   console.log(`Index ${index}: ${value}`);
// });

// Використовуємо всі 3 параметри
// numbers.forEach((value, index, arr) => {
//   console.log(`Value ${value} from array [${arr}] at index ${index}`);
// });

// let sum = 0;
// numbers.forEach((num) => (sum += num));
// console.log(sum); //75

//* Виконай рефракторинг коду за допомогою методу forEach та стрілочної функції

// function logItem(items) {
//   console.log(items);

//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${(i = 1)} - ${item[i]}`);
//   }
//   return ite;
// }

// const logItem = (arr) => {
//   arr.forEach((item, i) => {
//     console.log(`${i + 1}: ${item}`);
//   });
// };

// logItem(["Mango", "Poly", "Ajax"]);
// logItem(["🍎", "🍇", "🍑", "🍌", "🍋"]);

//* Виконай рефракторинг коду за допомогою методу forEach та стрілочної функції
// * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// * У змінних names та phones зберігаються рядки імен та телефонних номерів,
// * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// * відповідність. Кількість імен та телефонів гарантовано однакова.
// */

// function printContactsInfo({ names, phone }) {
//   const namesArr = names.split(",");
//   const phonesArr = phone.split(",");
//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// const printContactsInfo = (obj) => {
//   const namesArr = obj.names.split(",");
//   const phonesArr = obj.phones.split(",");

//console.log(phonesArr); //(4) ['38001234567', '38001112233', '380055566377', '380055566300']

//   namesArr.forEach((item, index) => {
//     console.log(`${item} - ${phonesArr[index]}`); /**Jacob - 38001234567
//     lesson9.js:269 William - 38001112233
//     lesson9.js:269 Solomon - 380055566377
//     lesson9.js:269 Artemis - 380055566300 */
//   });
// };

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "38001234567,38001112233,380055566377,380055566300",
// });

//* Виконай рефракторинг коду за допомогою методу forEach та стрілочної функції
// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// const calculateAverage = (...rest) => {
//   // console.log(rest);
//   let total = 0;
//   rest.forEach((num) => (total += num));
//   return total / rest.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); //2.5
// console.log(calculateAverage(14, 8, 2)); //8
// console.log(calculateAverage(27, 43, 2, 8, 36)); //23.2

/**Array.prototype.map()
 * Поелементно перебирає оригінальний масив
 * Не змінює оригінальний масив
 * Повертає новий масив такої ж довжини
 */

// const allCars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

/**Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів */
// const getModels = (cars) => {
//   const arr = [];
//   cars.forEach((item) => {
//     arr.push(item.model);
//   });
//   return arr;
// };

// console.log(getModels(allCars)); //(10) ['CR-V', 'Accord', 'Mazda 6', 'CX-9', '4Runner', 'Sequoia', 'Tacoma', 'F-150', 'Fusion', 'Explorer']

// const getModels = (cars) => {
//   const res = cars.map((item) => {
//     return item.model;
//   });
//   return res;
// };

// [
//   "CR-V",
//   "Accord",
//   "Mazda 6",
//   "CX-9",
//   "4Runner",
//   "Sequoia",
//   "Tacoma",
//   "F-150",
//   "Fusion",
//   "Explorer",
// ];

/** Нехай функція makeCarsDiscount повертає новий масив об'єктів  шз змыненим значенням властивості price, в залежності від наданої знижки*/

// const makeCarsDiscount = (cars, discount) => {
//   return cars.map((item) => {
//     return {
//       ...item,
//       price: item.price * (1 - discount),
//     };
//   });
// };

// console.table(makeCarsDiscount(allCars, 0.2));
// console.table(makeCarsDiscount(allCars, 0.4));

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

/*
 * Збільшуємо кількість годин гравця за id
 */
// const playerId = "player-3";

// const update = (arr, id) => {
//   return arr.map((item) => {
//     if (item.id === id) {
//       return {
//         ...item,
//         timePlayed: item.timePlayed + 100,
//       };
//     }

//     return item;
//   });
// };

// console.table(update(players, playerId));

/**Метод flatMap
 * Розгортає масив до першого рівня вкладеності.
 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tgs = tweets.flatMap((item) => item.tags);
// console.log(tgs); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
