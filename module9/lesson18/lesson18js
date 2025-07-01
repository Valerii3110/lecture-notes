//* Деструктирузація об'єктів
// const user = {
//   userName: "Alice",
//   age: 30,
//   //city: "Kyiv" // закоментовано, щоб показати, як працює деструктуризація з відсутніми властивостями
// };
// const city = "Poltava"; // Змінна city, яка не є частиною об'єкта user

// const { userName, age, city = "Dnipro" } = user;
console.log(userName); // "Alice"
console.log(age); // 30
// userName =user.name; // Це спрацює, оскільки userName визначено
// age = user.age; // Це спрацює, оскільки age визначено
city = user.city; //

console.log(city); // undefined, оскільки city не визначено в об'єкті user
//* Якщо city не визначено в об'єкті user, то буде використано значення за замовчуванням "Dnipro"
console.log(city); // "Dnipro", оскільки ми задали значення за замовчуванням
//* Деструктуризація з відсутніми властивостями
const { userName: name, age: years, city: location = "Lviv" } = user;
console.log(name); // "Alice"

const { userName, age, city: userCity } = user; // перейменування властивостей
console.log(userName); // "Alice"
console.log(age); // 30
console.log(userCity); // undefined, оскільки city не визначено в об'єкті user
console.log(location); // "Lviv", оскільки ми задали значення за замовчуванням
//* Деструктуризація з вкладеними об'єктами
// const userDetails = {
//   userName: "Bob",
//   age: 25,
//   address: {
//     city: "Odesa",
//     country: "Ukraine",
//   },
// };
// const {
//   userName: userNameDetails,
//   address: { city: userCityDetails, country },
// } = userDetails;
// console.log(userNameDetails); // "Bob"
// console.log(userCityDetails); // "Odesa"
// console.log(country); // "Ukraine"

// const user = {
//   userName: "Alice",
//   age: 30,
//   //city: "Kyiv" // закоментовано, щоб показати, як працює деструктуризація з відсутніми властивостями
// };
// const {userName, ...rest} = user;// Деструктуризація з використанням оператора розгортання
// console.log(userName); // "Alice"
// console.log(rest); // { age: 30 }, оскільки city не визначено в об'єкті user
// //*Глибинна деструктуризація
// const user = {
//   userName: "Alice",
// skils {
//   html: true,
//   css: true,
//   js: false,
// }
// }
//  const { skils : { html, css, js } } = user;
//   console.log(html);

//  //* Деструктирызацыя масивів
// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest ] = arr;

// console.log(first); // 1
// console.log(second); // 2
// console.log(trid); // 0, оскільки третій елемент не визначено в масиві
// console.log(rest); // [3, 4, 5], оскільки це решта елементів масиву

// //* Деструктуризація в функціях
// const user = {
//   skils: {
//     html: true,
//     css: true,
//     js: false,
//   },

// }
//  function getUserInfo(obj) {
//   console.log(`Ім'я: ${userName}, Вік: ${age}`);
//   console.log(`HTML: ${html}, CSS: ${css}, JS: ${js}`);//

// }
// getUserInfo(user); // Виклик функції з об'єктом user
// //* Деструктуризація в параметрах функції
// // function foo(param) {
// //   console.log(param);//

// // }
// //  foo(); // Виклик функції з об'єктом user
// function foo((userName)) {
//   console.log(userName);//

// }
//  foo(); // Виклик функції з об'єктом user

//  function foo(userName) {
//   console.log(userName);//

// }
//  foo(); // Виклик функції з об'єктом use

//* Hello my nemeis, I knov html, css and js
//*  getUserInfo(user)

console.log(name); // "Alice"
const name = [];
for (const user of users) {
  const { name } = user;
}

const name = [];
for (const user of users) {
  names.push(user.name);
}

const names = users.map(({ names }) => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

//*Дустурктуризація об'єкта для отримання окремих змінних
const user = {
  id: 1,
  username: "hary poter"
  hrofile: {
    firstName: "Harry", 

    lastName: "Potter",
    age: 11,
    address: {
      city: "London",
      country: "UK",
    },

    console.log(`Ім'я: ${firstName}, Прізвище: ${lastName}, Вік: ${age}`);
    