/**Контекст виконання функцій
 *
 * Ключове слово this
 * Глобальний контекст
 * Контекст методу об'єкту
 *
 */

/** Глобальний контекст */

// function foo() {
//   console.log(this);
// }
// foo(); /** В момент виклику функції потрапляє або ініціалізується контекст   this*/
/** При виклику функції в несуворому режимі без дерективи "use strict" то посилання this будеина глобальний об'єкт віндовс */

/**Коли функція викликається у суворому режимі  при дерективі "use strict" будемо отримувати undefindet. Що потрапляє в this те що стоїть зліва у функції */

// "use strict";

// function foo() {
//   console.log(this);//undefindet
// }
// foo();

/**Контекст методу об'єку */

// const user = {
//   userName: "Alict",
//   showThis() {
//     console.log(this); //метод обєкту що буде this
//   },
// };
// showThis(); // видає помилку

/** showThis() {
    console.log(this);
  },  цей метод (функція ) був створений  в тілі обєкту user*/

// const user = {
//   userName: "Alict",
//   showThis() {
//     console.log(this); //метод обєкту що буде this
//   },
// };
// user.showThis(); // {userName: 'Alict', showThis: ƒ} this -обєкт в  контесті якого викликаний метод, до якого ми звертаємось

/** Властивості стрілочних функцій */
// const user = {
//   userName: "Alict",
//   showThis: () => {
//     console.log(this); //Window {window: Window, self: Window, document: document, location: Location, customElements: CustomElementRegistry, …
//   },
// };
// user.showThis();
/** 1 Стрілочна функція отримує контекст (this) не в момент свого виклику а в момент створення
 * 2 Контекст (this) вона отримує з батьківського обєкту
 */
// const user = {
//   userName: "Alict",
//   showThis() {
//     console.log(this);
//     const foo = () => {
//       console.log("foo", this); //foo >{userName: 'Alict', showThis: ƒ}
//     };
//     foo();
//   },
// };
// user.showThis(); //{userName: 'Alict', showThis: ƒ}
/**Стрылочні функції не використовують як методи обєкту тому що вини зберігають обєкт на моменті х створенння а не в момент їх виклику */
/** Суворий режим не впливає на стрілочні функції */

/**Контекст методу обєкту але оголошений як зовнішня функція*/

// function showThis() {
//   console.log("this", this); //this Window {window: Window, self: Window, document: document, location: Location, customElements: CustomElementRegistry, …}
// }
// showThis();

// const obj = {
//   userName: "Alice", // ✅ правильний синтаксис: ключ: значення
// console.log("this", this);
// console.log("userName", this.userName);
// };
// console.log(obj);// {userName: "Alice"}

// obj.showUserThis = showThis;

// console.log(obj.showUserThis); //ƒ showThis() {console.log("this", this); посилання функції

// obj.showUserThis(); //  {userName: 'Alice', showUserThis: ƒ} виклик методу (функції), this туди потрапляє контекстомобєкт що викликав цей методб, те що знаходиться зліва від крапки (обєкт  obj)

/**Виклик без контексту але оголошений як метод обєкту */
// const user = {
//   userName: "Petya",
//   showThis() {
//     console.log("this", this); //{userName: 'Petya', showThis: ƒ}
//     console.log("userName", this.userName);

//   },
// };
// //user.showThis();
// const foo = user.showThis;
// console.log(foo); //ƒ showThis() {  console.log("this", this); //{userName: 'Petya', showThis: ƒ}
// foo(); // Window {window: Window, self: Window, document: document, location: Location, customElements: CustomElementRegistry, …} коли викликаємо функцію без привязки до обєкту в несуворому режимі отримуємо посилання на глобальний обєкт віндов

// const user = {
//   userName: "Petya",
//   showThis() {
//     console.log("this", this); //{userName: 'Petya', showThis: ƒ}
//     console.log("userName", this.userName); // в суворому режимі -this undefined,  в несуворому режимі userName undefined
//   },
// };
// //user.showThis();
// const foo = user.showThis;
// console.log(foo);
// foo();

/**Контекст у callback-функції */
// const user = {
//   userName: "Petya",
//   showThis() {
//     console.log("this", this);
//   },
// };

// function foo(callback) {
//   console.log(callback); //ƒ showThis() {console.log("this", this);}
//   callback(); // this Window {window: Window, self: Window, document: document, location: Location, customElements: CustomElementRegistry, …} Методи обєкту втрачають свій контекст коли передаються як коллбек функції
// }
// foo(user.showThis);
// foo(() => console.log("lalala"));

// function foo() {
//   console.log(this.lalala); //undefined
// }
// foo();

// const user = {
//   userName: "Alice",
//   showThis() {
//     console.log(this); //{userName: 'Alice', showThis: ƒ, showName: ƒ}
//   },
//   showName() {
//     console.log(this.userName);
//   },
// };
// // user.showThis();

// // const foo = user.showThis;//undefined
// const foo1 = user.showName;//undefined

// foo1();

// const obj = {
//   name: "Petya",
// };
// console.log(obj.age); //undefined;

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

/**  */

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

// const a = () => {
//   console.log(this);
// };

// function b() {
//   a();
// }

// b.call({ user: "Mango" }); // window у прикладі оголошена стрілочна функція a, яка логує свій this. Функція a була створена в глобальному контексті, де this вказує на window. Хоча ми намагаємось змінити контекст функції b за допомогою call, стрілочна функція a ігнорує цей контекст. Тому при виклику a виведе window.

/**Алгоритм визначення this



Ключове слово this — це одна з найзаплутаніших концепцій для новачка.

Новачки часто підставляють this методом наукового тику доти, доки скрипт не спрацює.



Але все стає значно простішим, коли є простий алгоритм визначення значення this.



Крок 1

Це стрілочна функція?

Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
Якщо відповідь Ні, переходь на Крок 2


Крок 2

Чи використовуються методи call, apply або bind?

Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
Якщо відповідь Ні, переходь на Крок 3


Крок 3

Функція викликається як метод об’єкта object.method?

Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
Якщо відповідь Ні, переходь на Крок 4


Крок 4

Скрипт виконується в суворому режимі?

Якщо відповідь Так, значення this — undefined
Якщо відповідь Ні, значення this — window

 */

/**Прототипи
 * Отже, прототип — це резервне сховище властивостей і методів об'єкта, яке автоматично використовується під час їх пошуку.
 Властивість, яка зберігає посилання на прототип, називається [[Prototype]].*/

/**Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.
 * Метод Object.create(obj) створює новий об'єкт і встановлює йому прототипом obj. Такий новий об'єкт матиме прототип obj і буде успадковувати його властивості. */

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // console.log(parent);
// // console.log(child);
// console.log(parent.isPrototypeOf(child));//true

// const customer = {
//   username: "Jacob",
// };

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

/**Власні і невласні властивості */
/**Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty. */
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]
// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

/**Ланцюжки прототипів

Об'єкт, який виступає прототипом для іншого об'єкта, також може мати свій прототип. Отже, існують ланцюжки прототипів. */
// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

/**Пошук властивостей відбувається до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті:
- Якщо інтерпретатор не знаходить власну властивість, то звертається до властивості [[Prototype]], тобто переходить за посиланням до об'єкта-прототипу, а потім — до прототипу прототипу за ланцюжком.
- Якщо інтерпретатор доходить до кінця ланцюжка і не знаходить властивості з таким ім'ям, то повертається undefined. */
// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined

// const apartment = {
//   rooms: 4,
//   floor: 2,
//   taxFree: false,
// };

// const condo = Object.create(apartment);
// condo.rooms = 3;
// console.log(condo.rooms); //3  Значення при зверненні condo.rooms буде 3, оскільки об'єкт condo має власну властивість rooms, і пошук значення цієї властивості в прототипі не буде здійснюватись.

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child);
// console.log(child.heritage); // => "Irish" — успадковано через ancestor

/**приклади */
// function foo() {
//   console.log(this.lalala); // this → глобальний об’єкт → lalala не існує → undefined
// }
// foo(); // undefined

// const user = {
//   userName: "Alice",

//   showThis() {
//     console.log(this); // this → user
//   },

//   showName() {
//     console.log(this.userName); // this → user → Alice
//   },
// };

// user.showThis(); // this → user, виведе сам об'єкт
// const fooFunc = user.showThis;
// const foo1Func = user.showName;

// fooFunc(); // this → глобальний об'єкт або undefined у strict mode
// foo1Func(); // this → глобальний об'єкт або undefined → помилка, бо this.userName = undefined

// const user = {
//   name: "Alice",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi();

// const stonesShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     console.log(this); //{stones: Array(4), calcTotalPrice: ƒ}

//     const stone = this.stones.find((stone) => stone.name === stoneName);
//     if (!stone) {
//       return `${stoneName} not found`;
//     }
//     return stone ? stone.price * stone.quantity : 0;
//   },
// };

// // Приклад використання:
// console.log(stonesShop.calcTotalPrice("Emerald")); // 5200
// console.log(stonesShop.calcTotalPrice("Sapphire")); //2800
// console.log(stonesShop.calcTotalPrice("Diamond")); // 8100
// console.log(stonesShop.calcTotalPrice("Topaz")); // Topaz not found

// function showThis(a, b) {
//   console.log(a, b);

//   console.log("this", this);
// }
// const obj = {
//   a: 5,
//   b: 10,
// };
// const obj2 = {
//   a: 50,
//   b: 100,
// };
// showThis.call(obj); //{a: 5, b: 10}
// showThis.call(obj2); //{a: 50, b: 100}
// showThis.call(obj, "Alice", 2);
// showThis.call(obj, "Alice", 2, [1, 2, 3]);
// showThis.apply(obj, ["Alice", 2, [1, 2, 3]]);

// function changeColor(paramsnewColor) {
//   console.log("this", this);
//   this.color = newColor;
// }
// const hat = {
//   color: "black",
// };

// const sweater = {
//   color: "green",
// };
// // chengeColor.call(hat, "red");
// // console.log(hat);
// chengeColor.apply(sweater, ["blue"]);
// console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// const changeHatColor = changeColor(newColor) {
// hat.color = newColor;
// }
// changeHatColor("yellow");
// console.log(hat);

// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопок cruiseControle з методами accelerate та decrease

// Приклад використання:
// cruiseControle.accelerate(); // Автомобіль Audi має швидкість 10
// cruiseControle.accelerate(); // Автомобіль Audi має швидкість 20
// cruiseControle.decrease(); // Автомобіль Audi має швидкість 10
// cruiseControle.decrease(); // Автомобіль Audi має швидкість 0

// const cruiseControl = {
//   speed: 0,
//   brand: "Audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(`Автомобіль ${this.brand} має швидкість ${this.speed}`);
//   },
//   decrease() {
//     if (this.speed <= 0) {
//       console.log("Авто зупинилось");
//       return;
//     }

//     this.speed -= 10;
//     console.log(`Автомобіль ${this.brand} гальмує ${this.speed}`);
//   },
// };

// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);

// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SPEED = 60;

// const bmw = {
//   brand: "Bmw",
//   speed: 40,
// };

// const audi = {
//   brand: "Audi",
//   speed: 70,
// };

// function speedSensor(maxSpeed) {
//   // if(this.speed <= maxSpeed) {
//   //     return `Автомобіль ${this.brand} рухаєтсяь з безпечною швидкісю`
//   // }

//   // return `${this.brand} перевищує швидкість`;
//   return this.speed <= maxSpeed
//     ? `Автомобіль ${this.brand} рухаєтсяь з безпечною швидкісю`
//     : `${this.brand} перевищує швидкість`;
// }

// console.log(speedSensor.call(bmw, SPEED));
// console.log(speedSensor.call(audi, SPEED));
