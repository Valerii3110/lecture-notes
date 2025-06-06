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

// let sum = 0;
// numbers.forEach((num) => (sum += num));
// console.log(sum);

//* виконай рефракторинг коду

// function logItem(itens) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//   }
// }

// const logItem = (arr) => {
//   arr.forEach((item, i) => {
//     console.log(`${i + 1}: ${item}`);
//   });
// };
