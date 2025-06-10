// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace);

// function foo() {
//   console.log(this);
// }

// foo(); // window

// "use strict";

// function foo() {
//   console.log(this);
// }

// foo(); // undefined

// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   },
// };

// user.showThis(); // {username: "Poly", showThis: ƒ}

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"
// 1. Створили об'єкт user з властивістю username
// 2. Об'єкту user методу showContext присвоїли значення функції showThis. Зверни увагу, що це не виклик — немає ()
// 3. Тепер викликаємо метод showContext, у якому знаходиться посилання на функцію showThis, тобто ми викликаємо функцію в контексті об'єкта. this вказуватиме на поточний об'єкт, у якому здійснюється виклик

// Цей приклад ілюструє, що контекст виконання функції (this) визначається в момент її виклику, а не в момент оголошення.

// "use strict";

// const book = {
//   updateAuthor(newAuthor) {
//     // ...
//   },
// };

// book.updateAuthor("Jacob");
// console.log(book);//
// {updateAuthor: ƒ}
// updateAuthor
// :
// ƒ updateAuthor(newAuthor)
// [[Prototype]]
// :
// Object

// const book = {
//   updateTitle(newTitle) {
//     // ...
//   },
// };

// const update = book.updateTitle;

// update("Lord Of The Rings");
// console.log(this); //Window {window: Window, self: Window, document: document, location: Location, customElements: CustomElementRegistry, …}

// Метод call дозволяє викликати функцію в контексті об'єкта, навіть якщо функція не є методом цього об'єкта, а також передає функції певні аргументи.

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
//   room: 27,
// };

// const poly = {
//   username: "Poly",
//   room: 191,
// };

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// function showName() {
//   console.log(this.name);
// }

// const user = {
//   name: "Alice",
// };

// showName.call(user));
// Метод call слід викликати на функції, передаючи аргументом об'єкт, який буде встановлювати контекст (this) для цієї функції. У цьому випадку showName є функцією, і ми встановлюємо контекстом об'єкт user, щоб вона могла отримати доступ до його властивості name.

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = "John";
// const context = {
//   person: "Alice",
// };

// greet.call(context, "Bob");//Функція greet виводить "Hello, Bob!", де "Bob" — це значення name, і "I am Alice", де "Alice" — це значення this.person, встановлене в контексті.

// Метод apply()

// Метод apply є аналогом методу call. Відмінність у тому, що в методі apply() синтаксис передачі аргументів вимагає масиву, навіть якщо аргументи функції — це окремі значення.

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
//   room: 27,
// };

// const poly = {
//   username: "Poly",
//   room: 191,
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// Метод bind() і втрата контексту

// Методи call і apply викликають функцію «на місці», тобто одразу.

// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.

// Для виклику методу bind використовується function.bind(context), де function — це функція, для якої треба створити прив'язану версію, context — це об'єкт, який потрібно встановити як новий контекст (значення this) для цієї функції.

// "use strict";

// const customer = {
//   username: "Jacob",
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello;

// greet(); // TypeError: Cannot read properties of undefined (reading 'username')
// 1/ Зберегли посилання на метод sayHello у змінну greet
// 2. При виклику greet() контекст втрачено, функція викликається в глобальному контексті, тому значення this буде undefined

// При спробі звернутися до властивості this.username під час виклику функції greet(), виникає помилка, оскільки undefined — це навіть не об'єкт

// Це можна виправити, прив'язавши контекст за допомогою методу bind.

// "use strict";

// const customer = {
//   username: "Jacob",
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"

// Коли ми використовуємо bind(), ми створюємо нову функцію greet. Ця нова функція завжди матиме правильний контекст і може використовувати властивість username об'єкта customer.

// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice",
// };

// const greet = sayHello.bind(user);

// greet("Hello"); // Hello, Alice!
// Метод bind створює нову функцію greet, прив'язану до об'єкта user як контексту. Після цього, коли функція greet викликається з аргументом "Hello", вона виводить рядок "Hello, Alice!", де this.name вказує на властивість name об'єкта user.

// "use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();//Функція logBookCount викликається через метод bind, який прив'язує контекст до об'єкта { books: 724 }. Після того, як функція showBooks викликається, вона викликає метод logBookCount з контекстом { books: 724 }, і тому виводиться значення властивості books цього контексту, тобто 724.

// "use strict";

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books); //Cannot read properties of undefined (reading 'books')Функція showBooks викликається з аргументом library.logBookCount, який є методом об'єкта library. Коли в тілі showBooks викликається callback(), тобто метод logBookCount без прив’язаного контексту, то значенням this у суворому режимі буде undefined. Відповідно спроба знайти на ньому властивість books викличе помилку.
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount);

// "use strict";

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount.bind(library));//Код showBooks(library.logBookCount.bind(library)) використовує метод bind для прив'язки контексту library до функції logBookCount перед передачею її в якості колбека функції showBooks. Таким чином, контекст буде збережений і функція logBookCount буде викликана з правильним контекстом і виведе значення властивості books об'єкта library.

// Стрілочні функції

// Контекст усередині стрілочної функції визначається місцем її оголошення, а не виклику.

// Це означає, що this усередині стрілки посилається на контекст батьківської області видимості, в якій вона була оголошена, і ніколи не змінюється.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

//Навіть якщо присвоїти посилання на стрілочну функцію у властивість об'єкта і викликати її в контексті цього об'єкта, this усе одно буде посилатися на об'єкт, який функція запам'ятала в момент її оголошення

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// Стрілочні функції також ігнорують наявність суворого режиму.

// Якщо стрілка була оголошена в глобальному контексті, то this у ній буде містити посилання на window, незалежно від того, чи виконується скрипт у суворому режимі.

// "use strict";

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}
// Стрілкові функції запам'ятовують контекст під час оголошення з батьківської області видимості.

// На відміну від звичайних функцій, змінити значення this усередині стрілки після її оголошення неможливо. Це означає, що методи call, apply і bind не впливають на значення this у стрілках.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis.call({ username: "Mango" }); // this in showThis: window
// showThis.apply({ username: "Mango" }); // this in showThis: window

// const boundShowThis = showThis.bind({ username: "Mango" });
// boundShowThis(); // this in showThis: window

/**Що треба запам’ятати про this у стрілочних функціях?

1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.*/

const a = () => {
  console.log(this);
};

function b() {
  a();
}

b.call({ user: "Mango" });
