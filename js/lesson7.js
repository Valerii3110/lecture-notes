//* Обє'кти |
//* Створення обєкта
//* Вкладені властивості
//* Доступ до властивостей через крапку
//* Доступ до вкладених властивостей
//* Додавання властивостей */

// const playlist = ['My playlist', 5, true];
//? Oб'єкт - дає можливість зберегти до кожного значенння додати якусь описову властивість
//? Об'єкти - це колекції властивостей, які складаються з ключів і значень.
//? Ключі - це рядки, які використовуються для доступу до значень.
//? Значення можуть бути будь-якого типу, включаючи інші об'єкти, масиви, функції тощо.
//? Об'єкти створюються за допомогою фігурних дужок {} або конструктора Object().
//? Властивості між собою розділяються комою.

//* Приклад об'єкта:
const playlist = {
  name: "My playlist", //* -властивість об'єкту
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavorite: true,
};
console.log(playlist);

//? Щоб отримати доступ до властивосте  й об'єкта, використовують крапкову нотацію або квадратні дужки.
//* Доступ до властивостей об'єкта
//! Існує два способи отримання доступу до властивостей об'єкта: через крапку та через квадратні дужки.
//! Перший спосіб отримати доступ до властивості об'єкта — це синтаксис objectName.key.
//* На місце звернення буде повернуте значення властивості з таким ключем. Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.
//* Здебільшого синтаксис «через крапку» використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.
//* Приклад:
console.log(playlist.name);
console.log(playlist.rating);
console.log(playlist(tracks));
//* В 99% випадкыв ми знаємо ключ властивостей

//! Доступ до вкладених властивостей
//* Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».Значення властивості — це вкладений об’єкт.
//? Якщо необхідно отримати значення країни користувача, записуємо user.location.country, де:
//? user.location — це звернення (шлях) до об'єкта у властивості location,
//? user.location.country — звернення до властивості country в цьому об'єкті.
//! Тобто «крапка» вказує наступну вкладеність.

//! Значення властивості — це масив.
//* Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде: ****user.hobbies

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]
//*Отримати доступ до елементів масиву можна через квадратні дужки та індекс: user.hobbies[0];

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"
//* Також можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості length: user.hobbies.length;

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

//! Другий спосіб отримати доступ до властивості об'єкта — це синтаксис objectName[”key”].
//* Бувають випадки коли ім'я ключа заздалегіть нам не відоме
//* Схоже на звернення до елемента масиву з відмінністю. Відмінність полягає в тому, що в квадратних дужках зазначається не індекс елемента, а рядок з ключем (ім’ям властивості).
//* Синтаксис «квадратних дужок» використовується значно рідше. Як правило, у випадках, коли ім'я властивості заздалегідь не відоме або воно зберігається у змінній і її поточне значення ми не знаємо, наприклад, як значення параметра функції, ябо надходить від користувача, ми не знаємо який ключ він хоче отримати з нашого об'єкту, саме в таких випадках ми використовуємо синтаксис квадратних дужок, в усіх інших випадках використовуєм синтаксис через крапку.

const key = "rating";
console.log(playlist["rating"]); //5

//* На місце звернення буде повернуто значення властивості з таким ім'ям.
//* Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.
console.log(playlist["lalala"]); //undefined

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book["genres"]); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

//! Зміна значення властивостей
//* Після того як об'єкт створений, значення його властивостей можна змінити.

//* Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.
// playlist.name = "New playlist"; // "New playlist"

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

//! Додавання властивостей
//* Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.
//! Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.
// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// const obj = {
//   userName: "Alise",
//   skils: {
//     html: true,
//     css: true,
//     js: false
//   }
//   numbers; [10, 20, 30]
// }

// console.log(obj.skils.css);
// console.log(obj.numbers[1]);

//* Аналогічним чином ми можемо перезаписувати значення:
// obj.skils.js = true;
//* Об'єкти
//* Тип даних за посиланням
//* Масиви і функцції - це об'єкти

//  const arr = [1, 2, 3];
//  arr.lalala = "tototo";
//  console.log(arr);

// function foo() {
//   console.log("lalala");

// }
//  foo.lalala = "tototo"
//  console.dir(foo);// console.dir - дозволяє побачити властивості функції в консолі.

//  const a = [1, 2, 3];// http://mycomputer/arr1
//  const b = a;// http://mycomputer/arr1
//  console.log(a === b); //true масиви порівнюються за посиланням

//  const a = {x: 1, y: 2};// http://mycomputer/arr1
//  const b = a;// http://mycomputer/arr1

// console.log("a", a);// a>(x: 1, y: 2)
// console.log("b", b);// b>(x: 1, y: 2)
// console.log(a === b); //true обєкти  порівнюються за посиланням, аналогічно масивам

// const a = {x: 1, y: 2}; // http://mycomputer/arr1
// const b = {x: 1, y: 2}; // http://mycomputer/arr2
// console.log(a === b);//false два одинакові обєкти не дорівнюють один одному, бо порінюються за посиланням.

// const obj = {
//   userName: "Alise",
//   skils: {
//     html: true,
//     css: true,
//     js: false
//   }
//   numbers; [10, 20, 30]
// }

//! Короткі властивості
//! Обчислювальні властивості

//* Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.

//* Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

// const userName = "Alice";
// const age: 25;
// const obj = {
//   userName: userName,
//   age: age,
// }

// console.log(obj);// {userNme: "Alice", age: 25}

//! Короткі властивості
//* Якщо в  об'єкті ім'я ключа і ім'я змінної значенню якої присвоюється цей ключ, мають однакове ім'я, можемо скористатись коротким синтаксесом.

// const obj = {
//   userName,
//   age,
// }

// console.log(obj);// {userNme: "Alice", age: 25}

// //* Приклад
// function foo(name, age) {
//   return {
//     name,
//     age
//   }
// }

//? Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його.

//! Обчислювальні властивості

// const inputName = "color";
// const obj {
//   inputName: "red",

// }
// console.log(obj);// {inputName: "red"}

//* або

// const inputName = "color";
// const obj {
//   [inputName]: "red",

// }
// console.log(obj);// {color: "red"}

//* Перебір об'єктів
//* Цикл for...in
//* Метод Object.keys
//* Метод Object.values

//* Іноді потрібно перебрати всі властивості об'єкта, щоб виконати певні дії з кожною з них. Для цього використовують цикл for...in.

// const feedback ={
//   good: 3
//   neutral: 5,
//   bad: 10,
// }

// let total =0;

// for (const key in feedback) {// в змінній key будуть зберігатися  ключі  об'єкту feedback, на кожному проходжені мого обєкту створювати змінну key і зберігати в неї імя мого ключа /

//   console.log(key); // "good", "neutral", "bad"(ключі властивостей)
//   console.log(feedback[key]); // 3, 5, 10
//   console.log(feedback.key);// undefined тому що властивість key відсутня в обєкті feedback

//   total += feedback[key];// 3+5+10
// }
// console.log(total); // 18

//* Глобальна сутність Object.

// const keys = Object.keys(feedback);// Отримуємо масив ключів об'єкта feedback
// let total = 0;
// console.log(keys); // ["good", "neutral", "bad"]
// for (const key of keys) {
//   console.log(key); // "good", "neutral", "bad"
//   console.log(feedback[key]); // 3, 5, 10
//   total += feedback[key];
// }

// const values = Object.values(feedback);// Отримуємо масив значень об'єкта feedback

// for(const item of values){
//   console.log(item);//[3, 5, 10]-масив значень об'єкту
//   total += item;

// }
// console.log(total); // 18

// const animal = {
//   legs: 4
// }
// const dog = Object.create(animal); // Створюємо об'єкт dog, який наслідує властивості від animal
// console.log(dog.legd); // 4, успадковане від animal

// dog.name = "Patron"; // Додаємо властивість name до об'єкта dog

// for (const key in dog) {
//   console.log(key); // "name", "legs"- ключі обєкту
//   console.log(dog[key]); // "Patron", 4 -значення обєкту
//       //dog.hasOwenProperty("name") - чи належить цей ключ моему обєкту
//   if (dog.hasOwnProperty(key)) {//.hasOwenProperty (name: "Patron")
//     console.log(dog[key]);// "Patron"

//   }
// }

// const keys = Object.keys(dog); // Отримуємо ключi тільки власного обєкту
// console.log(keys);//[name]

// for (const key of keys) {
//   console.log(dog[key]); // Patron

// }

//* Напиши скрипт, який для об'єкта user, послідовно:
//* додає поле mood із значенням "happy"
//* замінює значення hobby на "skydiving"
//* замінює значення premium на fale
//* виводить вміст обєкту user у форматі ключ: значення використовуючи Object.keys та for...of

// const user = {
//   name: "Alice",
//   age: 20,
//   hobby: "html",
//   premium: true,
// }

//  user.mood.: "happy",
//  user.hobby: "skydiving",
//  user.premium: false,

//  console.log(user);//   name: "Alice",
//  age: 20,
//  hobby: "skydaiving",
//  mood.: "happy",
//  premium: false,
// const keys = Object.keys(user);// ["name", "age", "hobby", "premium", "moodd"]
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);//name: "Alice",
//   //  age: 20,
//   //  hobby: "skydaiving",
//   //  mood.: "happy",
//   //  premium: false,

//? якщо є декілька масивів

// const user = {
//   name: "Alice",
//   age: 20,
//   hobby: "html",
//   premium: true,
// }

// const user1 = {
//   name: "Petya",
//   age: 25,
//   hobby: "htmlcss",
//   premium: true,
// }

// function foo(obj) {
//   obj.mood = "happy",
//   obj.hobby = "skydaiving",

// const keys = Object.keys(obj):
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);//name: "Alice",
//   //  age: 20,
//   //  hobby: "skydaiving",
//   //  mood.: "happy",
//   //  premium: false,

// }
// }

// foo(user);
// foo(user1)

// //* У нас обєкт, де зберігаються зарплати нашої команди. Напишіть скрипт який робить підсумування всіх зарплат і зберіжіть результат у змінній sum. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries - {
//   Alice: 160,
//   Yura: 130,
//   Petya: 100
// }

// function summa(obj) {
//   let sum = 0;
//   const velues = Object.velues(obj);
//   console.log(velues); // [160, 130, 100]
//    for(const velue of velues) {
//      sum += velue;
//    }
//   return sum;

// }

// summa(salaries);
// console.log(summa(salaries)); //390
// document.body.innerHTML = summa(salaries)
