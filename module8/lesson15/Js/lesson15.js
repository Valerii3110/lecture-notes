/**Спливання подій
 *event.target - елемент, на якому відбулася подія
 *event.currentTarget -  поточний елемент, на якому обробляється подія
 */

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");
// parent.addEventListener("click", onParentClick);
// innerChild.addEventListener("click", onInnerChildClick);
// function onParentClick(event) {
//   console.log("onParentClick target", event.target);
//   console.log(event.target); // eлемент, на якому відбулася подія
// }
// function onChildClick(event) {
//   console.log("onChildClick target");
//   console.log(event.target);
// }
// function onInnerChildClick(event) {
//   // event.stopPropagation(); // зупиняємо спливання події
//   event.stopImmediatePropagation(); // зупиняємо спливання події
//   console.log("onInnerChildClick target", event.target);
//   console.log(event.target);
// }

/** Додавання прослуховувача подій  на кожен елемент
 *
 */

// const container = document.querySelector("#container");
// [...container.children].forEach((box) => {
//   console.log(container);
//   box.addEventListener("click", handleClick);
// });

// function handleClick(event) {
//   const color =
//   console.log("color", color);// отримуємо колір з атрибуту data-color
// }

/**Делегування подій
 *
 */
// const container = document.querySelector("#container");
// [...container.children].forEach((box) => {
//   console.log(container);
//   box.addEventListener("click", handleClick);
// });

// function handleClick(event) {
//   if(!event.target.classList.contains("box")) {
//     return; // перевіряємо, чи клікнули на елемент DIV
//   }
//   console.log(event.currentTarget);// отримуємо елемент, на якому відбулася подія
//   const color = event.target.dataset.color;// отримуємо колір з атрибуту data-color
//   console.log("color", color);// отримуємо колір з атрибуту data-color
//   console.log(color);// отримуємо колір з атрибуту data-color

// }
/**створити картки з товарами */
// const container = document.querySelector(".products");
// function createMarkup(arr) {
//   return arr.map(item =>

//     `<li class="item product-item" data-id="${item.id}">
//       <img src="${item.image}" alt="${item.title}" />
//       <h2>${item.title}</h2>
//       <p>Ціна: ${item.price} </p>
//      </li>
//   )`.join();

// }
//  function handleClick(event) {
//  if (event.currentTarget !== event.target) {
//   return; // перевіряємо, чи клікнули на елемент LI
//  }
//   console.log(event.target);// отримуємо елемент, на якому відбулася подія
//   const parent = event.target.closest(".product-item");// отримуємо батьківський елемент LI
//   console.log(parent);// отримуємо батьківський елемент LI
//   const productId = parent.dataset.id; // отримуємо id товару з атрибуту data-id
//   console.log("productId", productId); // виводимо id товару в консоль
//   const product = products.find((item) => item.id === Number(productId)); // знаходимо товар за id
//   console.log("product", product); // виводимо товар в консоль
// }
// const parent = event.target.closest(".product-item");// отримуємо батьківський елемент LI
