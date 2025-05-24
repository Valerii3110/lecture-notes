//! Мутоди рядків в JavaScript
//! Метод slice() повертає новий масив, який містить копію частини вихідного масиву.
const user = "Alice Franko";
const str = user.slice(1, 8); //! метод slice() вирізає частину рядка з індексами від 0 до 3 (не включно)
console.log(str); // lice Fr
//! Метод slice() може приймати два аргументи: початковий індекс і кінцевий індекс (не включно).
//! Якщо другий аргумент не вказано, метод slice() повертає всі елементи від початкового індексу до кінця масиву.
console.log(user.slice(1)); // lice Franko
//! Метод slice() також може приймати від'ємні індекси, які вказують на позицію з кінця масиву.

const str2 = user.slice(-5, -1); //! метод slice() вирізає частину рядка з індексами від -5 до -1 (не включно)
console.log(str2); // Frank
const user2 = user.slice(); //! метод slice() без аргументів повертає копію всього рядка
console.log(user2); // Alice Franko

//! Метод tolowerCase() перетворює всі символи рядка на малі літери.
const lowerCaseUser = user.toLowerCase(); //! метод toLowerCase() перетворює всі символи рядка на малі літери.
//* Це корисно для порівняння рядків без урахування регістру.
console.log(lowerCaseUser); // alice franko
//! Метод toUpperCase() перетворює всі символи рядка на великі літери.
const upperCaseUser = user.toUpperCase(); //! метод toUpperCase() перетворює всі символи рядка на великі літери.
console.log(upperCaseUser); // ALICE FRANKO

//!Метод includes() перевіряє, чи містить рядок певний підрядок, який метод отримує в себе як аргумент, і повертає булеве значення.
console.log(user.includes("li")); // true
console.log(user.includes("lalala")); // false
//* Meтод includes() чутливий до регістру, тобто "Alice" і "alice" будуть вважатися різними рядками.
console.log(user.includes("alice")); // false

//! Метод startWith() перевіряє, чи починається рядок з певного підрядка, який метод отримує в себе як аргумент, і повертає булеве значення.
console.log(user.startsWith("Alice")); // true
console.log(user.startsWith("alice")); // false
//* meтод startsWith() також чутливий до регістру, тобто "Alice" і "alice" будуть вважатися різними рядками.
//! Метод endsWith() перевіряє, чи закінчується рядок певним підрядком, який метод отримує в себе як аргумент, і повертає булеве значення.
console.log(user.endsWith("Franko")); // true
console.log(user.endsWith("franko")); // false
//* meтод endsWith() також чутливий до регістру, тобто "Franko" і "franko" будуть вважатися різними рядками.
//! Метод indexOf() повертає перший індекс, за яким знайдено вказаний підрядок у рядку, або -1, якщо підрядок не знайдено.
console.log(user.indexOf("c")); // 2
console.log(user.indexOf("ce")); // 2
console.log(user.indexOf("x")); // -1
console.log(user.indexOf("a")); //! 0-якщо у вихідному рядку є декілька однакових символів, то метод indexOf() поверне індекс першого входження цього символу

//! Метод lastIndexOf() повертає останній індекс, за яким знайдено вказаний підрядок у рядку, або -1, якщо підрядок не знайдено.
console.log(user.lastIndexOf("c")); // 3
logconsole.log(user.lastIndexOf("ce")); // 4
console.log(user.lastIndexOf("x")); // -1
console.log(user.lastIndexOf("a")); //! 6-якщо у вихідному рядку є декілька однакових символів, то метод lastIndexOf() поверне індекс останнього входження цього символу.
//! Метод trim() видаляє пробіли з початку і кінця рядка.
const userWithSpaces = "   Alice Franko   ";
const trimmedUser = userWithSpaces.trim(); //! метод trim() видаляє пробіли з початку і кінця рядка
console.log(trimmedUser); // Alice Franko

//*Форматування посилання
//* Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використай конструкцію if...else.

//let link = "https://my-site.com/about";

if (!link.endsWith("/")) {
  link += "/";
} else {
  console.log(link);
}

//* Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки втому випадку якщо в link є підрядок "my-site"  Використай if...else або тернарний оператор.

let link = "https://mysite.com/about";
if (!link.endsWith("/") && link.includes("my-site")) {
  link += "/";
}

console.log(link);
//*або тернарний оператор
const linkName =
  endsWith(link, "/") && includes(link, "my-site") ? link + "/" : link;

//* Пошук у рядку методом includes()
const blacklistWord1 = "spam";
const blacklistWord2 = "sale";

const string =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a mysite sale!";
const string2 = "Biggest Sale this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaing";

//*console.log(string.includes(blacklistWord1)); // true
//*console.log(string.includes(blacklistWord2)); // true
//*console.log(string3.includes(blacklistWord1)); // false
//*console.log(string2.includes(blacklistWord2)); // true
//*console.log(string2.includes(blacklistWord1)); // false
//*const normString = string.toLowerCase();
//*console.log(normString.includes(blacklistWord1)); // true
//*console.log(normString.includes(blacklistWord2)); // true

//! Цикли for
//* Відлік від 0 до N
//* Зворотній відлік від N до 0
//* Збільшення/зменшення лічильника на 2+
//* Інкремент/декремент
//* Цикли while та do...while

//! Цикли for
//! Цикл for використовується для повторення блоку коду певну кількість разів.

// console.log("befor");
// for (let i = 0; i < 5; i += 1) {
//   console.log(i); // Тут можна виконати будь-які дії з i
//   //* before
//   //* - 0
//   //*- 1
//   //*- 2
//   //*- 3
//   //*- 4
//   //* - 5
//   //* after
// }

// console.log("after");

for (let i = 10; i >= 0; i -= 1) {
  console.log(i); // Тут можна виконати будь-які дії з i
  //* 10
  //* 9
  //* 8
  //* 7
  //* 6
  //* 5
  //* 4
  //* 3
  //* 2
  //* 1
  //* 0
}

const str = "Alice Franko";
for (let i = 0; i < str.length; i += 1) {
  console.log(str[i]); // Тут можна виконати будь-які дії з символами рядка
  if (str[i] === "i") {
    console.log("Found 'i' at index", i); // Виведе індекс символу 'i'
  }
  //* A
  //* l
  //* i
  //* c
  //* e
  //*
  //* F
  //* r
  //* a
  //* n
  //* k
  //* o
  //* Found 'i' at index 2
  break; // Використання break для виходу з циклу
  //* Цикл завершиться після першої ітерації
  //* і виведе лише перший символ рядка "A"
  //* Якщо ви хочете вивести всі символи рядка, видаліть break
  //* або використовуйте continue для пропуску ітерації
}
console.log(str.length); // 5

const blacklistWord2 = "sale";
const string2 = "Biggest Sale this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaing";
function foo(str, blk) {
  return str.toLowerCase().includes(blk);
}
foo(str: any, blk: any) 
console.log(foo(string2)); // true
console.log(foo(string3)); // false

//! Інкремент| Декремент - потрібний для того, щоб змінювати значенння  моєЇ зміної на 1.
//! Декремент - це зменшення значення моєї змінної на 1.
let a =10;
const b= a++;
a++; // Інкремент посфіксний
++a; // Інкремент префіксний
console.log(a); // 11
a--; // Декремент
console.log(a); // 10
//* Якщо ми використовуємо посфіксний інкремент або декремент, то значення змінної буде змінено після того, як буде виконано вираз.
logconsole.log(b); // 10 b = a(10) + 1 = 11
//* Якщо ми використовуємо префіксний інкремент або декремент, то значення змінної буде змінено перед тим, як буде виконано вираз.
const b = ++a; // Префіксний інкремент
console.log(b); // 11 a += 1; b = a(11)

const c= --a; // Префіксний декремент
console.log(c); // 10 a -= 1; c = a(10)
const d = a--; // Посфіксний декремент
console.log(d); // 10 a = 9; d = a(10) - 1

const srt4 = "Alice";
for (let i = 0; i < srt4.length; i ++) {
  console.log(srt4[i]); // Тут можна виконати будь-які дії з символами рядка
  //* A
  //* l
  //* i
  //* c
  //* e
}

//! Цикл while
//* Цикл while використовується для повторення блоку коду, поки умова є істинною.

// console.log("before");
// let condition = 0; // Умова для циклу while
// while (condition < 5) {
//   console.log(condition); // Тут можна виконати будь-які дії з condition
//    condition ++; // Збільшуємо умову на 1
//   //* before
//   //* 0
//   //* 1
//   //* 2
//   //* 3
//   //* 4
//   //* after
  
// }
//* console.log("after");

//! Цикл do...while
//* Цикл do...while виконує блок коду принаймні один раз, а потім перевіряє умову. Якщо умова істинна, цикл повторюється.

//* console.log("before");
//* let advertising = 0; // Умова для циклу while
//* do {
//*   console.log (condition);
//*   condition++; // Збільшуємо умову на 1
//* }   while (a < 6) 

//* console.log("after");

//*Напиши цикл for, який виведе в консоль числа за зростанням від а до в, але тільки якщо число кратне 5.

// const a = 20;
// const b = 100;
// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0) {
//     console.log(i); // Виведе числа, кратні 5
//   }
// }

const a = 20;
const b = 100;
for (let i = a; i <= b; i++) {
  if (!(i % 5)) {
    console.log(i); // Виведе числа, кратні 5
  }
}