//*Метод filter
//* Поелементно перебирає оригінальний масив
//* Повертає новий масв (з елементом або порожній)
//Додає в масив що повертається елементи які задовільняють умову
// - якщо колбек поверне true обєкт попаде в новостворений масив
// - якщо колбек поверне false обєкт непопаде в новостворений
// масив

// const numbers = [5, 10, 15, 20, 25];

// const filteredNum = numbers.filter((number) => {
//   console.log(number);
//   //           true
//   //          5<15
//   return number < 15;
// });

// const filteredNum = numbers.filter((number) => number < 15);

// console.log(filteredNum); //[5, 10]

// Нехай функція filterByPrice gjdthnf' vfcbd fdnjvj,sksd wsyf zrb[ vtyif hsdyf ]

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((item) => item.price < threshold);
// };
// console.table(filterByPrice(allCars));

//Нехай функція  getCarsWithType повертає масив автомобілів який відповідає значенню type

// const getCarsWithType = (cars, type) => {
//   return cars.filter((item) => item.type === type);
// };
// console.log(allCars, truck);

//* Метод  find

//* Поелементно перебирає  оригінальний масив
//* Повертає перший елемент, що задовільняумові або undefinde

// const num = numbers.find((num) => {
//   return item > 10;
// });

// const num = numbers.find((num) => item > 10);

// console.log(num);

//* Шукаємо автомобіль за моделлю */

// const getByModel =(arry,  model) => {
//   return arry.find(item => item.model === model);

// }
// console.log(arry, model);
// Метод  every
//  const isALLonLine = players.every((item) => item.online);

//  console.log(isALLonLine);

//Метод some

// const isSomeOnline = players.some((item) => item.online);
// console.log(isSomeOnline);

//! Метод reduce()
//
// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату.

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
// Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію

// Метод reduce() очікує 2 параметри:

// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;

// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.Якщо не задавти початкове значенння, початковому значенню аккумулятора присвоюється перший елемент масиву.

// const numbers = [5, 10, 15, 20, 25];
//                             0    5
//                             5    10
// const total = numbers.reduce((acc, item, i, arry) => {
//   //     0  +   5 = 5
//   //     5  +   10 = 15
//   //     15  +   15 = 30
//   //     30  +   20 = 50
//   //     50  +   25 = 75
//   return acc + item
// },0):

// console.log(total);//75
// console.log(numbers.push);//6 довжина новоствореного масиву
// console.log([...numbers.number]);

//
// const salary = {
//   mango: 100,
//   poly:50,
//   ajax:150,
//   const velues =Object.velues(salary);

//  const total =velues.reduce((acc, item) =>)
