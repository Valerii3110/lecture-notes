//*Об'єктно-орієнтоване програмування (ООП) — це парадигма програмування, в якій програми структуровані як сукупність об'єктів. Ці об’єкти представляють реальні або абстрактні сутності: користувач, магазин, автомобіль тощо. Кожен з об’єктів містить дані (властивості) і методи для взаємодії з ними. */

//! Процедурне програмування */

//**Процедурне програмування — це парадигма програмування, у якій програми структуровані у вигляді набору функцій, які виконують певні дії над даними.

//! Основні концепції процедурного програмування включають:

//* 1. Процедури (функції): Основною одиницею програми є функції. Вони призначені для виконання конкретних завдань. Функції приймають аргументи (вхідні дані), обробляють їх і можуть повертати результат (вихідні дані).
//* 2. Локальні та глобальні змінні: Змінні, що оголошуються в межах функції, є локальними й доступними лише в цій функції. Змінні, оголошені поза функціями, є глобальними й доступними в усій програмі. */

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

//! Класи */
//* Оголошення класу */

//** Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте часто є потреба створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями й методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи.*/

//!Оголошення класу має такий синтаксис:

//*ключове слово class
//* ім’я класу (у прикладі: User)
//* тіло класу у фігурних дужках */

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // User{}

//** Після того як клас було оголошено, можна створити його екземпляр за допомогою спеціального оператора new, поставивши його перед викликом класу. Результатом виклику new User() буде екземпляр класу User. Він буде містити дані і мати поведінку, що описані у класі. */

// const poly = new User();
// console.log(poly); // User{}

//** Для ініціалізації екземпляра класу використовується метод constructor.*/
//! Якщо його не визначити в явному вигляді, то буде створений конструктор за замовчуванням — порожня функція, яка не змінює екземпляр класу. */

// class User {
//   constructor() {
//     console.log("constructor call"); //* "constructor call"
//   }
// }

// const mango = new User();
// console.log(mango); //*  User{}

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// } //* Цей клас User у JavaScript — це шаблон (або "конструктор"), який ти можеш використовувати для створення об'єктів користувачів.*/

// const user1 = new User("Anna", "anna@example.com");
//* Виведе в консоль: Anna anna@example.com Але ⚠️ наразі клас нічого не зберігає — він лише виводить значення, але не записує їх у властивості об'єкта.

//!Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor. */

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // //* Виклик конструктора new User(...) відбувається до оголошення класу. Це призводить до помилки виконання ReferenceError: Cannot access 'User' before initialization, навіть якщо синтаксис виглядає правильним.Класи не піддаються підняттю (hoisting) так, як функції. Їх не можна використовувати до того, як вони оголошені в коді. */
// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name; //
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); //* { name: 'Mango', email: 'mango@mail.com' } Властивості name та email називаються публічними властивостями, оскільки вони є власними властивостями об'єкта-екземпляра.

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

//! Об'єкт параметрів */

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
//** Таким чином, this усередині конструктора посилається на новостворений об'єкт. */

//! Методи класу */
//*Для роботи з властивостями майбутнього екземпляра використовуються методи класу.*/

// //*Методи класу — це функції, які будуть доступні екземпляру в його прототипі. Вони оголошуються в довільному порядку після конструктора. На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними символами. */
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   // Метод getEmail
//   getEmail() {
//     // ...
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     // ...
//   }
// }

//*Для доступу до властивостей у методах використовується ключове слово this, оскільки методи будуть викликані в контексті об'єкта-екземпляра. */

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

//? Після створення екземпляра можна використовувати оголошені методи класу, які будуть звертатися до властивостей об'єкта, що їх викликав. */

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); //* "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); //* "new@mail.com"

//**Прототип екземпляру. Розглянемо для прикладу код класу User, який наразі має такий вигляд:*/

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(User); //* {getEmail: ƒ, changeEmail: ƒ}

// console.log(User.prototype); //* {getEmail: ƒ, changeEmail: ƒ}
// console.log(mango.getEmail()); //* “mango@mail.com”
//** Об'єктно-орієнтоване програмування в JavaScript побудоване на прототипному наслідуванні. Методи класу не стають власними властивостями екземпляра. І це правильно, оскільки, на відміну від значень властивостей, вони не є унікальними. Це одна й та сама функція, яка викликається в контексті різних об'єктів. Немає сенсу копіювати методи для кожного екземпляра, враховуючи, що може існувати багато тисяч екземплярів.

// //! Методи класу додаються до спеціального об'єкта, який зберігається у властивості prototype самого класу. */
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

//** Приватні властивості */
//**  Інкапсуляція — це парадигма ООП, яка передбачає приховування деталей внутрішньої реалізації класу від зовнішнього коду. Інкапсуляція реалізується приватними властивостями та методами, доступ до яких можна отримати тільки всередині класу. */
//** Додаючи до імені властивості на початку символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі є обов'язковим.*/
// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); //* "Mango"
// console.log(mango.#email); //* Uncaught SyntaxError: Private field '#email' must be declared in an enclosing class (at lesson12.js:223:18) Виникне помилка, це приватна властивість

//** Для того щоб отримати або змінити значення приватної властивості використовуються публічні методи. */
// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

//** Приватні методи */

//  // "mango@supermail.com"

//** Додаючи до назви методу на початку символ #, ми робимо його приватним. */

//! Геттери і сеттери */

//* Геттери і сеттери — це спеціальний синтаксис оголошення *
//* Mетодів для взаємодії з властивостями. Геттер і сеттер імітують звичайну публічну властивість класу, але дозволяють взаємодіяти з іншими властивостями зручнішим способом */

// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email
//   get email() {
//     //* Геттер — щоб прочитати #email
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail; //* Сеттер — щоб змінити #email
//   }
// }

//? У прикладі вище оголошені геттер і сеттер email. Щоб оголосити геттер і сеттер, потрібно поставити перед ім'ям властивості відповідні ключові слова — get і set. Всередині цих методів:повертаємо значення приватної властивості #email за допомогою геттера змінюємо її значення за допомогою сеттера */

//! Статичні властивості */

//* Крім публічних і приватних властивостей майбутнього екземпляра, у класі можна оголосити його власні властивості. Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості. Вони корисні для зберігання інформації, що стосується класу.

//* Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static. Статичні властивості можна використовувати як у методах класу, так і поза класом.*/

// class MyClass {
//   static myProp = "value";
// }

// console.log(MyClass.myProp); // "value"

// //**  У екземпляра немає доступу до статичних властивостей класу. */
// class MyClass {
//   static myProp = "value";
// }

// const inst = new MyClass();
// console.log(inst.myProp); //* undefined; myProp — статична властивість, тому вона належить самому класу MyClass, а не його екземплярам.

//! Додамо класу користувача приватну властивість role — його роль, що визначає набір прав, наприклад: адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів будемо зберігати як статичну властивість roles — об'єкт із властивостями. */;
// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
//     basic: "basic",
//   };

//   #email;
//   #role;

//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"
// //* Приклад зміни прав (функціоналу) користувача.
// class MyClass {
//   static b = 5;

//   constructor(value) {
//     this.a = value;
//   }
// }

// const instance = new MyClass(10);
// console.log(instance.b); //* undefined; У даному прикладі, коли ти звертаєшся до instance.b, ти отримаєш undefined, оскільки властивість b у класі MyClass оголошена як статична (static), і вона не доступна на екземплярах класу. Тобто ти не можеш звертатися до instance.b, але можеш звертатися до MyClass.b для отримання значення 5.
// console.log(MyClass.b);//* 5

//**Статичні методи

//* У класі можна оголосити не тільки методи майбутнього екземпляра, а й статичні методи. Статичні методи — це методи, доступні тільки класу. Вони можуть бути публічні та приватні. */
// class MyClass {
//   static myMethod() {
//     console.log("A static method");
//   }
// }

// MyClass.myMethod(); // "A static method"

//* Додамо у клас User: статичну властивість takenEmails для зберігання зайнятих пошт користувачів статичний метод isEmailTaken, який перевіряє, чи доступна пошта
//*Під час ініціалізації екземпляра в конструкторі класу будемо додавати пошту в список зайнятих. */
// class User {
//   static #takenEmails = []; //* приватне СТАТИЧНЕ поле, доступне лише всередині класу,	Зберігає всі зайняті email-и

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email); //*  перевірка, чи email вже зайнятий
//   }

//   #email; //* приватне поле,	доступне лише в методах екземпляра,	Email конкретного користувача

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email); //* додаємо email у список зайнятих
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); //* false - static метод isEmailTaken	викликається на класі, не об'єкті	Перевіряє, чи email вже використано
// console.log(User.isEmailTaken("mango@mail.com")); //* true -- static метод isEmailTaken	викликається на класі, не об'єкті	Перевіряє, чи email вже використано

//! Наслідування класів */

//** Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості й методи іншого класу (батьківського). */
//* Синтаксис */
// class Parent {}

// class Child extends Parent {
//   // ...
// }
//* Приклад */
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com"); //* Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також приватну властивість #email
// console.log(editor); //* ContentEditor { #email: "mango@mail.com" }
// console.log(editor.email); //* "mango@mail.com"

//! Kонструктор дочірнього класу */

//**У конструкторі дочірнього класу необхідно викликати спеціальну функцію super(args) — це псевдонім конструктора батьківського класу. В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне помилка. */
//** Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей. */

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
//* Створюється базовий клас User.
//* Має приватне поле #email, яке недоступне напряму (навіть з дочірнього класу).
//* Має геттер і сетер — через них можна читати та змінювати email.

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email); //* Виклик конструктора батьківського класу User

//     this.posts = params.posts; //* додаткове поле класу-нащадка
//   }
// }
//* Клас ContentEditor успадковує User.
//* У конструкторі викликається super() з params.email, щоб встановити #email.
//* Додається власне поле posts.

// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });//* Створено екземпляр editor.

// console.log(editor); //* ContentEditor {posts: Array(0), #email: 'mango@mail.com'} - editor.email працює, бо є геттер у базовому класі.
// console.log(editor.email); //* "mango@mail.com" -  У консолі ти бачиш #email — браузер лише показує його, але без прямого доступу.

//** Приклад безкінечної  в геттері й сетері email, яка призводить до зависання або краху скрипта.*/
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   access;
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); //* "mango@mail.com"
// console.log(mango.access); //* "superuser"

//! Методи дочірнього класу */

//* Дочірній клас може використовувати методи та властивості батьківського класу. Крім цього, у дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.

//* Уявімо, що вище є оголошення класу User
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });

// console.log(editor); //* { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost("post-1");
// editor.addPost("post-2");
// console.log(editor.posts); //* ['post-1', 'post-2']
//** User — це базовий клас, який має приватну властивість #email.
//* ContentEditor розширює клас User і має власну властивість posts. Клас ContentEditor також має метод addPost, який дозволяє додавати нові повідомлення до posts.
//* Метод addPost — це метод дочірнього класу ContentEditor . Він буде доступний тільки екземплярам ContentEditor */

//! Класи */

// class Car {
//   static qty = 0;
//   static increment() {
//     Car.qty += 1;
//   }
//   #price;
//   constructor(obj) {
//     this.brand = obj.brand;
//     this.model = obj.model;
//     this.#price = obj.price;
//     Car.increment();
//   }
//   getPrice() {
//     return this.#price;
//   }
//   changePrice(newPrice) {
//     this.#price = newPrice;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (this.checkTypeof(newPrice, "number")) {
//       this.#price += newPrice;
//       return;
//     }
//     console.log("Ooops");
//   }
//   #checkType(data, type) {
//     if (typeof data !== type) {
//       return false;
//     }
//     return true;
//   }
// }

// const bmw = new Car({ brand: "BMW", model: "X5", price: 70000 }); //* bmw.constructor()
// const audi = new Car({ brand: "AUDI", model: "Q7", price: 50000 }); //* audi.constructor()
// console.log("bmw", bmw); //* Car {brand: 'BMW', model: 'X5', #price: 70000}
// console.log(bmw.price); //* 70000

// bmw.changePrice(80000);
// console.log(bmw.getPrice()); //* 80000

// console.log("audi", audi); //* audi Car {brand: 'AUDI', model: 'Q7', #price: 50000}
// console.log(audi.getPrice()); //* 50000

//**Наслідування класів

//* -extends
//* Конструктор дочірнього класу (super)
//* Методи дочірнього класу*/

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

//* Зараз в нас проблема в повторюваності коду. При зміні назви змінної потрібно змінювати їх вручну або використовувати наслідуваність  -extends

// class Hero {
//   //*створюємо клас героя
//   constructor(obj) {
//     //* конструктор буде отримувати обєкт, хоча буде отримувати дві властивості(приклад диструктиризації)
//     this.name = obj.name;
//     this.xp = obj.xp;
//   }
//   gainXp(amount) {
//     //* метод для екземпляру класів героїв
//     console.log(`${this.name} recevid ${amount} xp`);
//     this.xp += amount;
//   }
// }
// class Warrior extends Hero {
//   //* створюємо новий клас Warrior який буде наслідувати властивості та методи класу Hero
//   constructor(obj) {
//     super({
//       name: obj.name,
//       xp: obj.xp,
//     }); //* метод super відправить дані класу від якого ми успадковуємосся
//     this.weapon = obj.weapon; //* властивість класу Warrior
//   }
//   attack(amount) {
//     console.log(`${this.name} attacks with ${this.weapon} `);
//   }
// }

// class Mage extends Hero {
//   constructor(obj) {
//     super({
//       name: obj.name,
//       xp: obj.xp,
//     });

//     this.spells = obj.spells;
//   }

//   cast() {
//     console.log(`${this.name} is casting a spell`);
//   }
// }

// const arthas = new Warrior({ name: "Arthas", xp: 1000, weapon: "sword" });
// // arthas.attack();//* Arthas attacks with sword
// console.log(arthas); //* Warrior {name: 'Arthas', xp: 1000, weapon: 'sword'}
// arthas.gainXp(50); //* Arthas recevid 50 xp
// console.log(arthas); //* {name: 'Arthas', xp: 1050, weapon: 'sword'}

// const khadger = new Mage({ name: "khadger", xp: 500, spells: ["fireboll"] });
// khadger.gainXp(200); //* Mage {name: 'khadger', xp: 700, spells: Array(1)}
// khadger.attack(); //* khadger recevid 200 xp
// console.log(khadger); //* Mage {name: 'khadger', xp: 500, spells: Array(1)}

//** Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
//* - email - пошта, рядок
//* - age - вік, число
//* - numberOfPosts - кількість постів, число
//* - topics - масив тем на яких спеціалізується блогер

//* Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

//* - Додай метод getInfo(), який, повертає рядок:
//*    User ${email} is ${age} years old and has ${numPosts} posts.

//* - Додай метод updatePostCount(value), який у параметрі value
//*    приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//   constructor(obj) {
//     this.email = obj.email;
//     this.age = obj.age;
//     this.numberOfPosts = obj.numberOfPosts;
//     this.topics = obj.topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const alice = new Blogger({
//   email: "alcie@gmail.com",
//   age: 25,
//   numberOfPosts: 20,
//   topics: ["sport", "gaming"],
// });

// alice.updatePostCount(10);
// console.log(alice.getInfo()); //* User alcie@gmail.com is 25 years old and has 30 posts

// console.log(alice); //* Blogger {email: 'alcie@gmail.com', age: 25, numberOfPosts: 30, topics: Array(2)}

// const petya = new Blogger({
//   email: "petya@gmail.com",
//   age: 18,
//   numberOfPosts: 10,
//   topics: ["tech", "gaming"],
// });

// console.log(petya.getInfo()); //* User petya@gmail.com is 18 years old and has 10 posts
// console.log(petya);//*Blogger {email: 'petya@gmail.com', age: 18, numberOfPosts: 10, topics: Array(2)}

// ------------------------------------------------- 4

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

// class User {
//     #login;
//     #email;

//     constructor(myLogin, myEmail) {
//         this.#login = myLogin;
//         this.#email = myEmail;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const alice = new User("Alice", "alice@gmail.com")

// alice.email = "superAlice@gmail.com";
// console.log(alice.email);

// alice.login = "SuperPuperAlice";
// console.log(alice.login);

// console.log(alice);
