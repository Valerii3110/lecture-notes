/**Спливання подій
 *event.target - елемент, на якому відбулася подія
 *event.currentTarget -  поточний елемент, на якому обробляється подія
 */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");
parent.addEventListener("click", onParentClick);
innerChild.addEventListener("click", onInnerChildClick);
function onParentClick(event) {
  console.log("onParentClick target", event.target);
  console.log(event.target); // eлемент, на якому відбулася подія
}
function onChildClick(event) {
  console.log("onChildClick target");
  console.log(event.target);
}
function onInnerChildClick(event) {
  // event.stopPropagation(); // зупиняємо спливання події
  event.stopImmediatePropagation(); // зупиняємо спливання події
  console.log("onInnerChildClick target", event.target);
  console.log(event.target);
}
