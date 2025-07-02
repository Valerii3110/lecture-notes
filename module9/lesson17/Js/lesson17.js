// const LS_KEY = "Array of names";
// const names = [' Alice', `Kate`, "Emma"];
// const link = document.querySelector("a");
// link.addEventListener("click",(event) =>  )

//*LocalStorage
// Збереження
// Чому треба використовувати метод JSON.stringify*/
// console.log(window);
// localStorage.setItem(LS_KEY, JSON.stringify(names)); //

//* Читання
// //* Чому треба використовувати метод JSON.parse/

// const value = localStorage.getItem(LS_KEY);
// console.log(velue);

// //* Видалення */
// //localStorage.removeItem(LS_KEY)
// localStorage.clear(); //

//* localStorage не може зберігати функції*/
// function add(a, bparams) {
//   return a + b;

// }

// localStorage.setItem("foo", add);
// const foo = JSON.parse(localStorage.getItem("foo"));
// console.log(foo);

// const calc = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };

// localStorage.setItem("foo", JSON.stringify(calc));
// const velue = localStorage.getItem("foo");
// console.log(JSON.parse(velue));

// const STORAGE_KEY = "feedback-msg";
// const form = document;

//* Отримання значення зі сховища
//* Якщо там щось було, оновлюємо DOM */

// function populateTextarea() {
//   const savedMassege = localStorage.getItem(STORAGE_KEY);
//   if (savedMassege) {
//   }
// }
