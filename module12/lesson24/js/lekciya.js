//** Створення та обробка проміксу
//* Клас Promise
//* resolve
//* then, catch, finally */

const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  setTimeout(() => {
    if (random > 0.5) {
      resolve("✅ Успіх!");
    } else {
      reject("❌ Помилка: випадкове число менше або дорівнює 0.5");
    }
  }, 1000);
});

promise
  .then((res) => console.log("Результат:", res))
  .catch((err) => console.error("Помилка:", err));
