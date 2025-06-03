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

// add(1, 2);

// function add(a, b) {
//   console.log(a, b);

// }

// const addArrow = (a, b) => {
//   return a + b;

//   }
//   const addArrow = (...rest) => {
//     return a + b;
//   };
//   console.log(addArrow(10, 20, 30));

// const addArrow = (a) => {
//   return a + 20;
// };

// console.log(addArrow(10));

// const addArrow = a => a + 20;

// console.log(addArrow(10));

// const addArrow = (a) => [a];
