//* Інструменти веброзробки
// * Автоматизація

//* Інструменти автоматизації розробки вебпроєктів — це набір програмних засобів і скриптів, які спрощують та оптимізують рутинні завдання під час процесу розробки вебдодатків. Вони допомагають автоматизувати багато аспектів розробки, зменшуючи час і зусилля, які розробники витрачають на такі завдання
//? Основні завдання, які можуть бути автоматизовані завдяки інструментам автоматизації розробки вебпроєктів, включають такі:
//* 1 Збірка та компіляція коду: Це включає в себе об'єднання та мініфікацію JavaScript і CSS файлів, компіляцію препроцесорів як LESS або SASS в CSS, оптимізацію зображень тощо.
//* Підтримка різних браузерів: Сучасні браузери підтримують різні стандарти і можуть потребувати різних версій коду. Інструменти автоматизації дозволяють генерувати версії коду, які сумісні з різними браузерами, зменшуючи складність тестування та підтримки.
//* Лінтинг (перевірка на помилки) і тестування коду: Інструменти автоматизації можуть перевіряти твій код на наявність помилок, дотримання код-стилю та виконання тестів автоматично під час розробки.
//* Управління залежностями та пакетами: Завдяки таким інструментам, як npm, ти можеш легко встановлювати, оновлювати та видаляти пакети з твого проєкту.
//* Розгортання та виробнича збірка: Інструменти автоматизації допомагають створювати готовий для розгортання виробничий код. Це полегшує розгортання та оновлення твого додатка, дозволяючи швидко впроваджувати зміни та виправлення помилок.
//* Моніторинг і тестування на виробництві: Деякі інструменти автоматизації дозволяють автоматично відслідковувати та аналізувати роботу твого вебдодатка в реальному часі.
//* Генерація документації: З інструментами ти можеш автоматично створювати документацію для свого коду, що полегшує роботу над проєктом команди та його документацію для користувачів.

//! Збірка проєкту з Vite
//! Основні особливості Vite:

//* 1 Швидка розробка: Vite відомий своєю швидкістю завантаження та перезавантаження, що дозволяє розробникам бачити зміни в реальному часі практично миттєво після редагування коду. Це робить процес розробки більш продуктивним.
// 2 Миттєве створення проєкту: Ти можеш створити новий проєкт за допомогою Vite за декілька секунд, завдяки готовому шаблону і швидкому встановленню залежностей.
//* Широкий спектр мов і технологій: Vite підтримує різні мови програмування (такі як JavaScript, TypeScript), CSS і декілька фреймворків, зокрема Vue.js, React і Svelte. Можна вибрати те, що тобі підходить найкраще.
//* Модульна система: Vite використовує сучасну модульну систему ESM, що дозволяє завантажувати модулі за потребою і сприяє ефективному використанню ресурсів.
//* Гаряча заміна модулів (HMR): Vite підтримує гарячу заміну модулів, що дозволяє вносити зміни в код і бачити їх відображення в реальному часі без перезавантаження сторінки.
//* Плагін-система: Розробник може легко розширити функціональність Vite, додаючи плагіни зі спільноти або створюючи власні.
//* Вбудована підтримка CSS і препроцесорів CSS: Vite автоматично обробляє CSS і дозволяє використовувати різні препроцесори, такі як SASS або LESS.

//! Node.js

//* Для того щоб використовувати сучасні інструменти веброзробки, необхідно встановити в операційну систему твого комп’ютера Node.js — легке та ефективне середовище виконання JavaScript поза браузером.
//* Спочатку Node.js створювався як серверне оточення для додатків, але розробники почали використовувати його для створення інструментів, які допомагають автоматизувати виконання локальних завдань. У результаті нова екосистема інструментів, яка виникла навколо Node.js, призвела до трансформації процесу фронтенд-розробки.
//* Щоб встановити останню стабільну версію (LTS):Перейди на офіційну сторінку і завантаж LTS-інсталятор для своєї версії операційної системи: Windows, MacOS і Linux.
//! Починаючи установку, обов'язково простав чек поряд з Automatically install the necessary tools.
//! Якщо попередній етап був пропущений, користувачам Windows інструменти потрібно встановити через консоль вручну. Для цього запусти Powershell від імені адміністратора і інсталюй інструменти в терміналі командою npm install --global --production windows-build-tools
//? Якщо встановлення пройшло успішно, у терміналі буде доступна команда node. Щоб переконатися, що встановлення пройшло успішно, перевір версію, запустивши в консолі таку команду node --version і натиснувши Enter.

//! Пакетний менеджер NPM

//*Щоб використовувати все різноманіття інструментів Node.js, нам необхідна можливість встановлювати їх та керувати ними. Для цього створений NPM (node package manager) — пакетний менеджер Node.js. Він встановлює потрібні інструменти і забезпечує зручний інтерфейс для роботи з ними.
//* NPM сам встановлюється автоматично разом зі встановленням Node.js. Якщо інсталяція пройшла успішно, у терміналі буде доступна команда npm. Щоб переконатися, що встановлення NPM пройшло успішно, перевір версію, запустивши в консолі таку команду npm --version і натиснувши Enter.

//!  Початкове налаштування і конфігурацію npm
//* Щоб встановити ім'я, виконай у терміналі таку команду npm config set init-author-name "YOUR_NAME", підстав замість YOUR_NAME своє ім'я і не загуби лапки.
//* Щоб встановити пошту, виконай у терміналі таку команду npm config set init-author-email "YOUR_EMAIL" , підставивши замість "YOUR_EMAIL" свою пошту. Вкажи пошту, з якою ти реєструвався/-лася на GitHub.

//! Ініціалізація проєкту з Vite
//* Перейди в терміналі до папки, в якій лежатимуть усі проєкти, наприклад, нехай вона називається projects. Це можна зробити командою cd (Change Directory).

//* 1 Відкрий термінал.
//* 2 Використай команду cd для переходу до папки projects. Наприклад:

// cd C:/шлях/до/папки/projects   //* для Windows
// cd /шлях/до/папки/projects     //* для macOS

//* або якщо папка projects знаходиться у твоєму домашньому каталозі (папка користувача):
// cd ~/projects
//! Зверни увагу!
//! Залежно від операційної системи і типу терміналу, в ролі роздільника можуть бути слеши як backslash (\\), так і forward slash (/), тому підбирай під свої умови.
//? Тепер ти знаходишся в каталозі projects і можеш працювати з файлами і папками, які там розташовані.
//* Для користувачів Windows рекомендується, щоб це була папка в корені диска, наприклад, C або D.
//* Для користувачів MacOS місце розташування папки ні на що не впливає.
//* Тепер у терміналі в цій папці виконай команду створення проєкту на базі Vite.
// npm create vite@latest
//* Вводимо команду початку створення проєкту й натискаємо Enter.
//* На наступному кроці система може запитати, чи потрібно встановити пакет create-vite@latest, вводимо символ y (від слова “yes”) і натискаємо Enter.
//* Далі вводимо ім'я папки нашого проєкту, воно може бути довільним, у прикладі це my-vite-project.
//* Тепер стрілками вгору/вниз обираємо стек технологій проєкту, нам необхідний Vanilla, підтверджуємо вибір і натискаємо Enter.
//* Останнім кроком обираємо мову проєкту, у нашому випадку це JavaScript, підтверджуємо Enter. У результаті створюється папка (на ім'я проєкту) з деякими файлами в ній. Переходимо в терміналі в папку проєкту і відкриваємо її в VSCod

// !Файл package.json

//* У результаті ініціалізації каркаса проєкту, крім стандартних файлів для написання коду і файлів налаштувань, створюється ще один важливий файл package.json. Він відстежує залежності проєкту, містить службову інформацію, дає змогу писати npm-скрипти і слугує інструкцією під час створення нового проєкту на основі вже готових налаштувань.
//* Цей файл можна редагувати вручну, наприклад для додавання скриптів. Його також буде автоматично оновлено щоразу при додаванні або видаленні пакетів з проєкту.
//* У нашому package.json поки що є тільки сам збирач vite як залежність і кілька скриптів для запуску середовища розробки й процесу збірки.

//! Встановлення залежностей
//* Наступним кроком після ініціалізації проєкту в терміналі нам потрібно перейти до папки проєкту і встановити його залежності.
//* Для цього виконуємо таку команду, яка встановить усі залежності проєкту:

// npm install
//* або скорочена версія:
// npm i

//* NPM завантажує з реєстру всі залежності, зазначені у файлі package.json у властивостях dependencies (якого в нас ще немає) і devDependencies, і поміщає їх у папку node_modules у корені проєкту, в якій перебуватимуть усі залежності.
//! Папку node_modules ніколи не додають до системи контролю версій (не завантажують в репозиторій на github), у всіх розробників вона буде своя. Під час ініціалізації проєкту Vite було створено файл .gitignore, до якого додано правило, що виключає папку node_modules з переліку того, що необхідно завантажити в репозиторій на github.
//! Зверни увагу на створений файл package-lock.json — це журнал знімків дерева залежностей проєкту. Він гарантує, що команда розробників використовує однакові версії залежностей. NPM автоматично оновлює його при додаванні, видаленні та оновленні пакетів.

//! Запуск сервера розробки
//* У файлі package.json у полі scripts знаходиться список команд проєкту, які можна виконати в терміналі.

// Example of package.json content for reference:
// const packageJson = {
//   name: "my-vite-project",
//   private: true,
//   version: "0.0.0",
//   type: "module",
//   scripts: {
//     dev: "vite",
//     build: "vite build",
//     preview: "vite preview",
//   },
//   devDependencies: {
//     vite: "^4.4.5",
//   },
// };

//* Ім'я властивості (наприклад, “dev”) — це ім'я команди скрипта, який будемо запускати.
//* Значення властивості (наприклад, "vite") — сам скрипт, який необхідно виконати. Тобто поле scripts містить псевдоніми для часто використовуваних команд на проєкті.

//* Для запуску скриптів використовується npm команда run.
// npm run [script-name]//*Замість [script-name] необхідно вказати ім'я скрипта, що запускається, з поля scripts.

//*У нашому проєкті скрипт з ім'ям dev запускає локальний сервер розробки. Це сервер, який запускається на твоєму комп'ютері і дає змогу розробляти й тестувати вебсайти та вебдодатки на локальному пристрої, перед тим як розміщувати їх в інтернеті.

//* Запустимо локальний сервер розробки, виконавши команду: npm run dev
//* Тепер можна подивитися додаток локально за адресою http://localhost:5173. При редагуванні будь-якого з файлів проєкту зміни одразу ж відображаються на екрані.
// * Для того щоб зупинити сервер, тобто перервати процес, перебуваючи в терміналі, необхідно натиснути комбінацію клавіш: Ctrl + C для користувачів Windows; Control + C для користувачів MacOS і Linux

//! Встановлення пакетів

//* Залежність (npm пакет) — це різноманітні утиліти та бібліотеки, що вирішують специфічне завдання. Пакети пишуть самі розробники й діляться ними зі спільнотою. Такий підхід спрощує життя, бо не потрібно винаходити колесо, усі колеса вже давно лежать на полицях реєстру й готові до використання.

//! NPM складається з трьох основних компонентів:

//* 1 Реєстр пакетів (registry) — велика загальнодоступна база даних інструментів розробки (пакетів).
//* 2 Сайт npmjs.com — використовується для пошуку та ознайомлення з документацією пакетів.
//* Інтерфейс командного рядка (CLI) — запускається з терміналу і надає набір команд для роботи з реєстром і пакетами. Дозволяє створювати скрипти для запуску в терміналі.

//? Додамо в проєкт бібліотеку validator.js для валідації рядків, наприклад, введення користувача в поля форми. На сайті npmjs.com на сторінці будь-якої бібліотеки є інструкція зі встановлення та використання.
//* Команда npm install [package-name] або її короткий псевдонім npm i [package-name] встановить бібліотеку як залежність проєкту.
//* Виконуємо команду npm i validator у терміналі в папці проєкту.
//* NPM завантажив validator і помістив його в node_modules — папку, в якій знаходяться всі зовнішні залежності.
//? У файлі package.json з'явилася нова залежність в полі dependencies. Це означає, що validator версії 13.11.0 був встановлений як залежність і готовий до роботи.
//* Пакети постійно оновлюються, отже, твоя версія може відрізнятися.

// const packageJson = {
//   name: "my-vite-project",
//   private: true,
//   version: "0.0.0",
//   type: "module",
//   scripts: {
//     dev: "vite",
//     build: "vite build",
//     preview: "vite preview",
//   },
//   devDependencies: {
//     vite: "^4.4.5",
//   },
//   dependencies: {
//     validator: "^13.11.0",
//   },
// };
// //! Щоб отримати інтерфейс пакета в JavaScript коді, необхідно імпортувати його в будь-який JS-файл проєкту, наприклад у main.js, попередньо видаливши з нього весь код, який там був.
// У файлі main.js
// import validator from "validator";

// console.log(
//   "Is mango@mail.com a valid email?: ",
//   validator.isEmail("mango@mail.com")
// ); // Is mango@mail.com a valid email?: true

// console.log(
//   "Is Mangodogmail.com a valid email?: ",
//   validator.isEmail("Mangodogmail.com")
// ); // Is mango@mail.com a valid email?: false
//* Результатом імпорту бібліотеки validator.js буде об'єкт із методами. Ми детально розберемо синтаксис імпорту трохи пізніше.
//* Запустивши сервер розробки командою npm run dev, у браузері в консолі ми побачимо повідомлення про результат валідації пошти.

//! Видалення пакетів

//* Ми можемо видалити будь-яку залежність командою npm uninstall [package-name] або її коротким псевдонімом npm r [package-name].
//* Так само, як і в разі додавання залежності, після її видалення автоматично змінюється файл package.json.

// {
//   "name": "my-vite-project",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "preview": "vite preview"
//   },
//   "devDependencies": {
//     "vite": "^4.4.5"
//   }
// }

//! Типи залежностей
//* Саме для цього команди npm install і npm uninstall мають два прапорці.
//* --save — вказує, що додається залежність, яка увійде до фінального продукту. Пакет буде встановлений локально, в папку node_modules, і буде доданий запис у поле dependencies в package.json.
//* --save-dev — вказує, що додається залежність розробки, яка не увійде до фінального продукту. Пакет буде встановлений локально, в папку node_modules, і буде доданий запис у поле devDependencies в package.json.
//! Видаляючи пакет, необхідно вказувати правильний прапорець, такий самий, що й для встановлення.

//! Модульність коду */
//* Найважливіші переваги модулів:
//* 1 Підтримка — добре розроблений модуль покликаний максимально зменшити залежність від інших частин коду. Використання модулів дозволяє розширювати функціонал застосунку з мінімальним ризиком порушити його роботу в цілому. Оновлення одного модуля набагато простіше, якщо модуль самодостатній.
//* Простір імен — змінні, що не входять в область видимості функції, є глобальними. Внаслідок цього, як правило, відбувається забруднення простору імен, де повністю непов'язаний код розділяє глобальні змінні. Модулі дозволяють уникнути забруднення простору імен, створюючи окрему область видимості для змінних.
//* Повторне використання — усі розробники копіювали готовий код у нові проєкти, змінюючи його під специфіку проєкту. Але це величезна трата часу. Набагато краще, коли є модуль, який можна повторно використовувати знову і знову, без необхідності знати що-небудь про оточення, в якому він використовується.

//! Модуль — це JavaScript-файл із фрагментом коду, який можна використовувати багато разів. Модуль експортує певні об'єкти, зробивши їх доступними для інших модулів.

function add() {
  return a + b;
}

export default add; //* Де:export default — ключова фраза для експорту;
//*  exportedValue — значення, яке експортується.
//! При підключенні скрипта у файлі HTML потрібно вказати type="module", в інакше використовувати імпорти не можливо. Більше того якщо ми підключаємо наш скрипт ype="module" то атрибут "defer" використовувати не обовязково він буде вмикатись автоматично.
//? Дефолтний експорт з одного файлу може бути лише одна.
//? Якщо у нас дефолтний еспорт то за дефолтом ми будемо експортувати одну сутність

import add from "./"; //* Де: import і from — ключові фрази для імпорту;
//* name — локальна змінна, в яку імпортується значення;
//* **"..."** — відносний шлях до файлу модуля у вигляді рядка.

//* У будь-якому іншому файлі проєкту можна імпортувати значення за замовчуванням.

import makeMessage from "./makeMessage";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
//! Зверни увагу, що ім'я, з яким імпортується значення за замовчуванням, може бути вибрано довільним чином.
de;

//! Іменований експорт

// const user = "AAlice";
// function logger(params) {
//   console.log("logger");
// }

//* Перший спосіб експорту
// export const user = "AAlice";
//  export function logger(params) {
//   console.log("logger");
// }

//* Щоб отримати:
// import { user, logger } from "...."; //* де {user, logger} -імена імпортованих значень
//* "...." шлях звідки вони імпортуються
//* допустимий варіант import add {user, logger} from "...."

//* або
// export { user, logger };
//! з одного іменнованого файлу не потрібно по різних рядочках

//! Якщо виникає необхідність перейменувати іменовані імпорти:
// const user = "Petya";

// import { user as userName, logger } from "....";

// console.log(userName); //* "Petya"

//* Імпорт простору імен (namespace import) — це техніка імпортування всього вмісту модуля як об'єкта з іменем, що представляє простір імен цього модуля. Це означає, що всі іменовані експорти з модуля стають властивостями цього об'єкта. Це зручно, коли потрібно імпортувати багато різних функцій, змінних або класів з модуля, не обираючи їх по одному.

//* Наприклад:
// Module user.js
export const name = "Mango";
export const age = 26;
export const email = "mango@mail.com";

// Your current module
import * as user from "./myModule.js";

console.log(user.name); // "Mango"
console.log(user.age); // 26
console.log(user.email); // "mango@mail.com"
