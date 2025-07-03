//! Формат JSON
// * Стандарт JSON
// * JSON (JavaScript Object Notation) — сучасний текстовий формат зберігання й передачі структурованих даних у текстовій формі. Саме в цьому форматі дані будуть приходити і відправлятися на сервер, зберігатися в локальному сховищі тощо.
// * Звичайний об'єктоподібний синтаксис JSON дуже зручний. Але JSON — це не об'єкт, а його рядкове відображення. Розгляньте приклад JSON файлу.
/*
{
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
}
*/

//! Синтаксис схожий на об'єкт, за винятком того, що:
// * Ключі — це завжди рядки, обов'язково в подвійних лапках.
// * Значення рядків — також обов'язково в подвійних лапках.
// * Числа можуть бути цілими або десятковими, з десятковою крапкою або без неї, включаючи негативні.
// * Числа та булеві значення true і false записуються так само, як у JavaScript.
// * У JSON немає коми після останньої властивості об'єкта.
// * Значення властивостей може бути спеціальним значенням null, але не може бути undefined.
// * Функції не можна зберігати у JSON, оскільки JSON передбачений лише для даних, а не для методів обробки даних.

//** Перетворення у json */
//! Метод JSON.stringify(value) приймає значення і перетворює його у JSON.
// * Значенням може бути число, буль, null, масив, об'єкт.
// * Рядки — це вже валідний JSON, тому в їх перетворенні немає сенсу.
const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
//* Результат виклику JSON.stringify — це валідний JSON (рядок), який може бути збережений у вебсховище, базу даних або переданий мережею на сервер.

//* Перетворення функцій

//!  Не всі JavaScript об'єкти можуть бути перетворені один в один у JSON.
//* Наприклад, якщо в об'єкта є методи, то при перетворенні вони будуть проігноровані та не потраплять у JSON.
const dogWithMethod = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
  bark() {
    console.log("Woof!");
  },
};

const jsonWithMethod = JSON.stringify(dogWithMethod);
console.log(jsonWithMethod); // '{"name":"Mango","age":3,"isGoodBoy":true}'

//* Також при спробі перетворити функцію у JSON результатом буде undefined.

const jsonFunc = JSON.stringify(() => console.log("Well, this is awkward"));
console.log(jsonFunc); // undefined

//! Парсинг із json

//* Щоб отримати з JSON валідне JavaScript значення, його необхідно розпарсити (parse). Це операція зворотня перетворенню JavaScript об'єкта в json за допомогою методу JSON.stringify(value)

//! Метод JSON.parse(value) приймає json, тобто рядок, і перетворює його у JavaScript дані.
console.log(JSON.parse("5")); // 5
console.log(JSON.parse("false")); // false
console.log(JSON.parse("null")); // null

//* Якщо json описує складний тип даних, наприклад об'єкт, то в результаті отримаємо валідний об'єкт, з яким можна працювати звичайним чином.

const jsonDog = '{"name":"Mango","age":3,"isGoodBoy":true}';

const dogParsed = JSON.parse(jsonDog);
console.log(dogParsed); // {name: "Mango", age: 3, isGoodBoy: true}
console.log(dogParsed.name); // "Mango"

//! Обробка помилок
// * Якщо методу JSON.parse передати невавалідний JSON, він згенерує помилку. Як результат, увесь скрипт впаде, тобто припинить своє виконання, і весь код після місця помилки не виконається.
//* До такого сценарію призведе, наприклад, парсинг рядка.
//! Рядок із символами — це невалідний JSON, адже він не може бути перетворений у валідне JavaScript значення.
const data1 = JSON.parse("Well, this is awkward");
console.log("❌ You won't see this log");
//* Помилка буде і при спробі парсингу невалідного об’єкта, який, наприклад, може прийти з бекенду. У прикладі у властивості username бракує подвійних лапок.
const data2 = JSON.parse('{username: "Mango"}'); // Error
console.log("❌ You won't see this log");

//! Рішення */
//* Для уникнення цього використовується конструкція try...catch, яка дозволяє «ловити» й обробляти помилки виконання скрипта.
try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
}

//* 1 Спочатку виконується код всередині блоку try.
// * 2 Якщо помилки відсутні, блок catch ігнорується й управління передається далі.
//* 3 Якщо в блоці try сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку catch.
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parsing error in try...catch");

//* Змінна error — це об'єкт помилки з інформацією про те, що сталося.
//* У цього об'єкта є кілька корисних властивостей:
//* name — тип помилки. Для помилки парсингу — це SyntaxError.
//* message — повідомлення про деталі помилки.
//* stack — стек викликів функцій на момент помилки. Використовується для налагодження.

//! Детальніше про помилки:
//* У JavaScript код виконується не одразу.
//* Для початку інтерпретатору потрібно прочитати код і дізнатися, чи можливо його взагалі виконати.
//* Фаза інтерпретації, або оцінки (compile time, evaluation time) — підготовка перед виконанням коду: інтерпретатор знаходить синтаксичні помилки, помилки типізації тощо. Отже, код ще не виконується, лише оцінюється.
//* Якщо ця фаза пройшла успішно, це щонайменше означає, що в коді відсутні синтаксичні помилки і його можна запустити для виконання.
//* Фаза виконання (runtime) — скрипт починає виконуватися: виконуються інструкції викликів функцій і оцінювання виразів, відбувається пошук необхідних ідентифікаторів у відповідних областях видимості тощо.
//* Якщо ця фаза проходить успішно, це свідчить про те, що скрипт написаний без явних помилок і виконав свою роботу. На цій фазі можуть бути помилки, пов'язані з відсутніми властивостями та змінними, перетворенням типів тощо, тобто щось, що відбувається тільки під час виконання коду.

//? Спробуй виконати наступний код. */
console.log("This message will not appear in the console");

const value = 5;

//! Вебсховище */

//** Cookie — це маленький фрагмент тексту, який зберігається у браузері. Він допомагає зберігати дані між сесіями: логін, мову, тему, товари в кошику тощо. */
//* ✅ Створити cookie
document.cookie = "username=Valerii"; // буде збережено у браузері

///*Прочитати cookie

console.log(document.cookie); //* username=Valerii
// document.cookie повертає всі cookies у вигляді одного рядка (name=value; name2=value2; ...)

//* 🧹 Видалити cookie

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; //*Щоб видалити куку — вкажи порожнє значення та дату в минулому.

//*⏳ Cookie з часом життя (expires / max-age)

document.cookie = "theme=dark; max-age=3600"; // 1 година
//* або

document.cookie = "theme=dark; expires=Tue, 01 Jul 2025 12:00:00 UTC;";
//* 🌐 Додаткові параметри

document.cookie = "userId=123; path=/; secure; samesite=strict";
//* path=/	доступно для всіх сторінок сайту
//* secure	передається тільки по HTTPS
// samesite=strict	кука не буде передаватися між сайтами (захист)

//? 🛠️ Повний приклад:

// Створення cookie
document.cookie = "username=Valerii; max-age=86400"; // збережеться на 1 день

// Читання всіх cookie
console.log("Cookies: ", document.cookie);

// Видалення cookie
document.cookie = "username=; max-age=0";

//* Вебсховище — це механізм у веббраузерах, який дозволяє вебдодаткам зберігати та отримувати дані на стороні клієнта, тобто на комп'ютері користувача. Щоразу, коли ти змінюєш тему кольорів між світлою і темною, переглядаєш відео, додаєш товар у кошик, відкриваєш або закриваєш сайдбар, популярні вебзастосунки можуть запам'ятовувати стан інтерфейсу і в наступному відвідуванні відновлювати його.

//! 1 Локальне сховище (Local Storage): унікальне для кожного вебдодатку і буде однаковим на кількох вкладках, де вебдодаток відкритий. Дані в локальному сховищі не видаляються, навіть після закриття браузера або вимкнення комп'ютера. Щоб їх видалити, потрібно використовувати JavaScript. Доступ до даних у локальному сховищі можливий з будь-якої вкладки або вікна браузера, пов'язаної з доменом, який створив дані.
//* Доступ до локального сховища можна отримати в об’єкті window:
console.log(window.localStorage); //* Storage {length: 0}
console.log(localStorage); //* Storage {length: 0}

//* Додавання даних
//* Давай додамо пару ключ-значення до локального сховища за допомогою методу setItem(key, value), доступного в об’єкті localStorage:
localStorage.setItem("ui-theme", "light");

//! Це встановить новий запис у сховищі з ключем "ui-theme" і значенням "light". Якщо ти просто викличеш об’єкт localStorage зараз, то побачиш збережені дані.

console.log(localStorage); // Storage {ui-theme: "light", length: 1}

//* Отримання даних */

//* Метод getItem(key) дозволяє зчитати зі сховища запис із ключем key і повертає його значення у JSON форматі.

const savedTheme = localStorage.getItem("ui-theme");
console.log(savedTheme); // "light"

//* Якщо у сховищі відсутній запис з таким ключем, метод повертає null.

const savedItem = localStorage.getItem("key-that-does-not-exist");
console.log(savedItem); // null

//* Якщо значення є примітивним типом, немає потреби його парсити.
//* В іншому випадку, якщо це масив або об'єкт, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object
//* У змінній savedSettings буде рядок, що представляє об'єкт, тому ми розпарсюємо це значення, і у змінній parsedSettings отримуємо повноцінний об'єкт із властивостями.

//* Видалення даних
//! Метод removeItem(key) видаляє зі сховища існуючий запис з ключем key. В результаті своєї роботи він не повертає значення.

localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null

//** Якщо ти хочеш повністю очистити сховище, потрібно викликати метод clear().

localStorage.setItem("ui-theme", "light");
localStorage.setItem("notif-level", "mute");

console.log(localStorage);
// Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

localStorage.clear();
console.log(localStorage); // Storage {length: 0}

//! Операція повного очищення сховища є ризикованою. Вона може порушити записи, створені іншими розробниками проєкту. Краще видаляти лише ті записи, які дійсно не потрібні, не покладаючись на повну очистку даних сховища.

//! 2 Сховище сесії (Session Storage): на відміну від локального сховища, дані у сховищі сесії зберігаються лише протягом одної сесії браузера. Якщо користувач закриє вкладку або браузер, дані будуть видалені. Сховище сесії зручне для зберігання тимчасових даних або станів, які не повинні зберігатися довгий час.
console.log(window.sessionStorage); // Storage {length: 0}

//! Методом setItem(key, value) можна записувати як рядки, так і складні типи даних.

sessionStorage.setItem("user-id", "123");
sessionStorage.setItem(
  "tickets",
  JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
);
console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

//! Методом getItem(key) можна читати записи, використовуючи збережений ключ.

const userId = sessionStorage.getItem("user-id");
console.log(userId); // "123"

const tickets = JSON.parse(sessionStorage.getItem("tickets"));
console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }
//* І звісно, видаляти елементи за ключем і очищати сховище цілком методами removeItem(key) і clear() відповідно.

sessionStorage.removeItem("tickets");
console.log(sessionStorage); // Storage {user-id: '123', length: 1}

sessionStorage.clear();
console.log(sessionStorage); // Storage {length: 0}

//* Кейс: Форма з повідомленням

//*Створимо форму для введення повідомлення.

<form class="feedback-form">
  <textarea name="message"></textarea>
  <button type="submit">Send feedback</button>
</form>;

//* Під час сабміту форми будемо виводити в консоль значення текстового поля та очищати форму.

// const form = document.querySelector(".feedback-form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});

//! Проблема

//* Якщо користувач ввів повідомлення в текстове поле і перезавантажив сторінку, не надіславши форму, під час перезавантаження сторінки введене повідомлення пропадає.

//* Рішення

//* Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення.

//* Для цього використовуємо локальне сховище, щоб зберегти поточне значення текстового поля під час введення.

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});

//* Щоразу, коли змінюється значення поля, тобто відбувається подія "input", ми:

//* використовуємо делегування подій;
//* ловимо подію на формі;
//* використовуємо властивість target для запису поточного значення поля в локальне сховище.

//* Під час сабміту форми будемо очищати збережене значення методом removeItem.

// const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

//* Останнім кроком необхідно додати код читання збереженого повідомлення з локального сховища і встановлення його початковим значенням для текстового поля під час завантаження сторінки.

// const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
// const localStorageKey = "goit-example-message";
textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
//* Кейс: Форма з повідомленням

//* Створимо форму для введення повідомлення.

<form class="feedback-form">
  <textarea name="message"></textarea>
  <button type="submit">Send feedback</button>
</form>;

//* Під час сабміту форми будемо виводити в консоль значення текстового поля та очищати форму.

// const form = document.querySelector(".feedback-form");

// (This block is removed to avoid redeclaration)

//! Проблема

//* Якщо користувач ввів повідомлення в текстове поле і перезавантажив сторінку, не надіславши форму, під час перезавантаження сторінки введене повідомлення пропадає.

//** Рішення

//* Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення.

//* Для цього використовуємо локальне сховище, щоб зберегти поточне значення текстового поля під час введення.

const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// Remove duplicate and incomplete event listener

//* використовуємо властивість target для запису поточного значення поля в локальне сховище.
//* Під час сабміту форми будемо очищати збережене значення методом removeItem.

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
