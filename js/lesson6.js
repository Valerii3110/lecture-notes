//! Псевдомасив arguments & Arry.from*/
//* Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments. Коли ти викликаєш функцію з аргументами, arguments автоматично створюється всередині цієї функції і заповнюється переданими значеннями аргументів.
//* Приклад:
function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5); //У цьому прикладі при виклику функції sum(2, 5) зберуться всі передані аргументи (числа 2 і 5) і запишуться як елементи колекції псевдомасиву arguments.
//*Ця колекція схожа на масив, але насправді є псевдомасивом, тобто:
/*у неї є деякі властивості масивів, наприклад length;
/*у неї є можливість звернутися до елемента за індексом;
/*у неї немає методів для роботи з масивом;
її можна перебирати за допомогою циклів.*/

function foo() {
  const arr = Array.from(arguments); //! за допомогою сутності Array.from можна перетворити псевдомасив в масив.*/
  console.log(Array.isArray(arguments)); //! Метод isArray - перевіряє чи аргумент є масивом, та повертає булевий вираз true or false. */
  console.log("arr", Array.isArray(arr)); // arr true
  // console.log(typeOf Array): - не працює в даному випадку для визначення типу аргументівЖ*/
}
foo(1, 2, 3);
foo(10, 11, 12, 13, 14);

//* Напиши функцію add для складання довільної кількості аргументів (чисел).*/

// const add = function () {}; // метод оголошення функції називається function expretion
// add();

function name(params) {} //-метод оголошення функції funtion declaration
//* різниця полягає в тому що метод funtion declaration дозволяє викликати функцію як до її оголошення так і після, на вдміну при оголошенні функції методом function expretion викликати функцію можливо лише після її оголошення.*/

const add = function () {
  const arr = Array.from(arguments);
  let total = 0;

  for (const item of arr) {
    total += item;
  }
  return total;
};
add(1, 2, 3); //6
add(10, 20, 30, 4, 5); //69
//* передаємо в нашу функцію нефіксовану довільну кількість аргументів і для цього можемо використати нашу сутність arguments

//* Напиши функцію calAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення. Усі аргументи будуть лише числами.*/

function calAverage() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total / arguments.length;
}

console.log(calAverage(1, 2, 3)); //2
console.log(calAverage(10, 12, 31, 5)); //14.5
console.log(calAverage(1, 2, 4, 7, 9, 10)); //8.5
//* Цю задачу вирішили без перетворення псевдомасиву в масив. */

//!Область видимості */
//* Область видимості - це частина програми, в якій змінна або функція доступна для використання. Вона визначає, де змінна або функція може бути доступна в коді. У JavaScript існує дві основні області видимості: глобальна та локальна.
 *
//*Глобальна область видимості - це область видимості, яка охоплює весь код програми. Змінні та функції, о голошені в глобальній області видимості, доступні з будь-якої частини програми.
 *
 //* Локальна область видимості - це область видимості, яка обмежена певною функцією або блоком коду. Змінні та функції, оголошені в локальній області видимості, доступні тільки в межах цієї функції або блоку коду.
 *
 //*У JavaScript існує три типи локальної області видимості:
 *
 * 1. Функціональна область видимості
 * 2. Блочна область видимості
 * 3. Глобальна область видимості

const str = "Hello"; // глобальна змінна- змынна створена за межами функції, доступна в будь-якій частині програми*/
// const str = "Hello";
// function foo() {
//   const msg = "World"; // локальна змінна- змынна створена в тілі функції, доступна тільки в тілі функції
//   console.log(msg); // World
//   function lalala() {
//     const a = "lalala"; // локальна змінна- змынна створена в тілі функції, доступна тільки в тілі функції
//     console.log(a); // lalala
//     console.log(msg);//

//   }
//   console.log(a);

// }
// foo(); // World
// console.log(msg);// ReferenceError: msg is not defined
// // msg - ReferenceError: msg is not defined
// console.log(a); // ReferenceError: a is not defined

//* Стек викликів
//* Порядок виконання

//* Під час виклику функції всередині її тіла можуть викликатися інші функції, а в них інші тощо.

//! JavaScript — однопотокова мова, тобто в одну одиницю часу може виконуватися тільки одна інструкція. Це означає, що вже викликані функції, які не закінчили своє виконання, повинні чекати виконання функцій, викликаних усередині себе, для того щоб продовжити свою роботу.
function fnA() {
  console.log("Log inside fnA function before calling fnB");
  fnB();
  console.log("Log inside fnA function after fnB call");
}

function fnB() {
  console.log("Log inside fnB function");
}

console.log("Log before calling fnA");
fnA();
console.log("Log after calling fnA");

// "Log before calling fnA"
// "Log inside fnA function before calling fnB"
// "Log inside fnB function"
// "Log inside fnA function after fnB call"
// "Log after calling fnA"

//* Стек викликів (call stack) — це структура даних, яка допомагає інтерпретатору відстежувати послідовність і стан викликів функцій у програмі. Він показує, яка функція зараз виконується і яка буде викликана наступною.
//! Стек викликів (call stack) — це структура даних, яка допомагає інтерпретатору відстежувати послідовність і стан викликів функцій у програмі. Він показує, яка функція зараз виконується і яка буде викликана наступною.
function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();

/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */


// function logItems(items) {
//     for(let i = 0; i < items.length; i++) {
//         console.log(`${i + 1} - ${items[i]}`)
//     }
// }



// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);





/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */


// function printInfo(names, phones) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

//     for(let i = 0; i < namesArr.length; i++) {
//         console.log(namesArr[i], phonesArr[i]);
//     }
// }

// printInfo(
//     "Jacob,William,Solomon,Artemis",
//     "89001234567,89001112233,890055566377,890055566300"
//   );

// printInfo(
//     "Alice,Petya,Yura,Katya",
//     "01,02,03,04"
//   );







/**
 * Напиши функцію formatTime(totalMinutes) яка переведе значення
 * totalMinutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;

//     const doubleHours = String(hours).padStart(2, 0);
//     const doubleMinutes = String(minutes).padStart(2, 0);
//     return `${doubleHours}:${doubleMinutes}`;
// }


// console.log(formatTime(70))
// console.log(formatTime(460))
// console.log(formatTime(1441






