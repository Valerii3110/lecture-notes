//* Приклад: Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

//* Поради:

//*Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
//*Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
//* Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
//* Поверни totalSalary як результат

function countTotalSalary(salaries) {
  let totalSalary = 0;
   const salaryValyes = Object.values(salaries);
   for (const salary of salaryValyes) {
     totalSalary +=salary
     
   }
   return totalSalary;
}

//! Масиви об'єктів
//* Іноді потрібно зберігати колекцію об'єктів, наприклад, список користувачів або товарів.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  }
];
//* Для перебору такого масиву використовується стандартний цикл for...of.
//* У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів. Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.
//* Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» (див. тему Об’єкти. Доступ до властивостей через крапку), оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення.

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }

//! Пошук об'єкта за значенням властивості

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }

//! Колекція значень властивості
//* Типова задача під час роботи з колекцією об'єктів — це отримання масиву всіх значень певної властивості об'єктів. Наприклад, взяти з масиву об'єктів, які описують книги, усі назви або рейтинг.
//?Для цього необхідно:
//? Створити новий порожній масив для зберігання значень властивостей.Перебрати масив об'єктів у циклі.
//? На кожній ітерації додати в новий масив значення необхідної властивості.
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
];

const titles = [];

for (const book of books) {
	titles.push(book.title)
}

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

//* Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      return products[i].price * products[i].quantity;
    }
  }

  return `Товар "${productName}" не знайдено!`;
}

//! Методи об'єкта/
//* Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними. Якщо значення властивості — це функція, така властивість називається методом об'єкта.
const obj = {
	method(value) {
		console.log(`I'm a method with ${value}!`);
	}
};

obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!"
//* Метод — це звичайна функція, оголошена як властивість об'єкта (див. приклад вище), а не як окрема змінна (див. перший приклад у розділі).
//! Для звернення до методу об'єкта використовується стандартний синтаксис із крапкою.
//* Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».
// ✅ Логічно й синтаксично згруповані сутності
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Це метод об'єкта
  getBooks() {
    return "Returning all books";
  },
  // Це метод об'єкта
  addBook(bookName) {
		return `Adding book ${bookName}`;
  },
};

// Виклики методів
bookShelf.getBooks(); // поверне "Returning all books"
bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"

//* До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.
const atTheOldToad = {
  potions: [], // Масив для зберігання зілля

  getPotions() {
    return "List of all available potions";// Повертає список усіх доступних зілля
  },

  addPotion(potionName) {
    return `Adding ${potionName}`;// Додає зілля до інвентарю
  }
};

//! Доступ до властивостей об'єкта
//*Методи використовуються для роботи з властивостями об'єкта та їх змінних.

//* Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this.
//* Ключове слово this — це контекст виконання функції.
const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    console.log(this);
  },
};

bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}
//* Коли метод викликається, this вказує на об'єкт, з якого він був викликаний. У нашому випадку це bookShelf.
//* Якщо метод викликається з об'єкта, то this вказує на цей об'єкт. Якщо метод викликається без об'єкта, то this буде undefined або вказуватиме на глобальний об'єкт (window в браузері).

//! Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.

const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]
//* Якщо потрібно отримати доступ до властивості об'єкта, яка зберігається в змінній, то використовуємо синтаксис обчислювальних властивостей (computed properties).
const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks(propName) {
    return this[propName];
  }
};
console.log(bookShelf.getBooks("books")); // ["The Last Kingdom", "The Mist"]

//* Об'єкт atTheOldToad має наступні властивості: potions — масив рядків, з назвами зілль getPotions() — метод, який повертає рядок "List of all available potions"Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return "List of all available potions";
  },
};
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
atTheOldToad.getPotions = function() {
  return this.potions;
};

// Виклик методу
console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]

//* Selection deleted
🤝

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
⌄
⌄
⌄
⌄
⌄
⌄
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    this.potions.push(newPotion);
  },

  getTotalPrice() {
    let totalPrice = 0;

    for (const potion of this.potions) {
      totalPrice += potion.price;
    }

    return totalPrice;
  }
};
//* Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.Об'єкт atTheOldToad має наступні властивості: potions — масив рядків, з назвами зілль getPotions() — метод, який повертає значення властивості potions addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    this.potions.push(newPotion);
  },

  getTotalPrice() {
    let totalPrice = 0;

    for (const potion of this.potions) {
      totalPrice += potion.price;
    }

    return totalPrice;
  }
};

//* Об'єкт atTheOldToad має наступні властивості:potions — масив об'єктів зілль getPotions() — метод, який повертає значення властивості potions updatePotionName() — метод, який приймає два параметра рядків oldName і newName. Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
         return;
      }
     
    }
  },
};

//* Перебір об'єктів
//* Іноді потрібно перебрати всі властивості об'єкта, щоб виконати певні дії з кожною з них. Для цього використовують цикл for...in.
const feedback ={
  good: 3
  neutral: 5,
  bad: 10,
}
// let total =0;
// for (const key in feedback) {
//   console.log(key); // "good", "neutral", "bad"
//   console.log(feedback[key]); // 3, 5, 10
//   total += feedback[key];//
// }
// console.log(total); // 18

// const keys = Object.keys(feedback);// Отримуємо масив ключів об'єкта
// let total = 0;
// console.log(keys); // ["good", "neutral", "bad"]
// for (const key of keys) {
//   console.log(key); // "good", "neutral", "bad"
//   console.log(feedback[key]); // 3, 5, 10
//   total += feedback[key];
// }
// const values = Object.values(feedback);// Отримуємо масив значень об'єкта
// let total = 0;
// console.log(values); // [3, 5, 10]
// for (const value of values) {
//   console.log(value); // 3, 5, 10
//   total += value;
// }
// log(total); // 18

const animal = {
  legd: 4
} 
const dog = Object.create(animal); // Створюємо об'єкт dog, який наслідує властивості від animal
console.log(dog.legd); // 4, успадковане від animal

dog.name = "Buddy"; // Додаємо властивість name до об'єкта dog
// for (const key in dog) {
//   console.log(key); // "name", "legd"
//   console.log(dog[key]); // "Buddy", 4
//   if (!dog.hasOwnProperty(key)) {
//     console.log(`Ця властивість успадкована: ${key}`);//
//   } else {
//     console.log(dog[key]);// "Buddy"
//     console.log(`Ця властивість власна: ${key}`);//
//   }
// }

// const keys = Object.keys(dog); // Отримуємо масив ключів об'єкта dog
// for (const key of keys) {
//   console.log(dog[key]); // "Buddy", 4
  
// }

const user = {
  name:"Alic",
  age: 20,
  hobby:"html",
  premium: true,
}
user.mood = "happy",
user.hobbies = "skydaiving",
user.premium = false,

const keys = Object.keys(user)://
for(const key of keys) {
  console.log(`${user} ${keys}`);
  
}