// function fnA(num) {
//   return num * 10;
// }

// function foo(a, b, callback) {
//   return a + b;
// }

// console.log(foo);
// const a = foo;
// console.log(a(1, 2));

//* Функція calc(a, b, callback)/

// function calc1(a, b, callback) {
//   console.log("hello");
//   console.log("lalala");
//   const result = callback(a, b);
//   console.log(result);
// }

// function calc2(a, b) {
//   console.log("hello");
//   console.log("lalala");
//   const result = a - b;
//   console.log(result);
// }

// calc1(10, 2, function (x, y) {
//   return x + y;
// }); //

// calc1(5, 3, function (x, y) {
//   return x - y;
// }); //

//* Напиши функцію яка першим параметром очікує

// function each(arry, callback) {
//   const newArr =[];
//   for(const num of arry) {
//     newArr.push(callback(num))

//   }
//   return newArr

// }
// console.log(each([64, 49 36, 25, 16], function (velue)) {
//   return velue * 2
// });
//*Стрілочні функції
//* Оголошення
//* Інлайн стрілочні функції
// add(1, 2);

// function add(a, b) {
//   console.log(a, b);

// }

// const addArrow = (a, b) => {
//   return a + b;

//   }
// const addArrow = (...rest) => {
//   return a + b;
// };
// console.log(addArrow(10, 20, 30));

// const addArrow = (a) => {
//   return a + 20;
// };

// console.log(addArrow(10));

// const addArrow = (a) => a + 20;

// console.log(addArrow(10));

// const addArrow = (a) => [a];

// const calc =(a, b callback) => {
//   const result - callback(a, b);
//   console.log(result);

// }

// calc(2, 5, (x, y) => {
//   return x + y
// })

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
