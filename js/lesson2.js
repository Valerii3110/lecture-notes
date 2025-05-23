/**Модуль 1 лекція 2 */
/** Перетворення типів числа
 * -Явне перетворення типів
 * -Неявне перетворення типів*/

// 1. Явне перетворення типів
// console.log(Number("5"))// "5" -
// console.log(Number(true))// true - 1
// console.log(Number(false))// false - 0;
// console.log(Number(null))// null - 0
// console.log(Number(undefined))// undefined - NaN;
// console.log(Number("25px"));//-25

//2. Неявне перетворення
//console.log("5" * 2);/ 10;
//console.log("10" - 2);/ 8;
//console.log(5 +  true);/ 6;
//console.log(5 +  false);/ 5;
//console.log("5px" - 2); // NaN

/**Оператори порівняння */
// console.log(5 > 2); // true;
// console.log(5 < 2); // false;
// console.log(5 >= 2); // true;
// console.log(5 <= 2); // false;
// console.log("2" > "12"); //true; - рядки порівнюються за юнікодом посимвольно, числове представлення 2 більше за числове призначення 1 і далі переірка не проходить.

//console.log("4" == 4); // true == -оператор несуворої рівності перевіряє значення, та не перевіряє типи;
//console.log(5 === "5");// false === - оператор суворої рівності перевіряє значення та типи;
//console.log(1 == true); // true;
//console.log(1 === true); // false;
//console.log("0" == false); // true;
//console.log("Alice" < "alice"); // true; - порівняння рядків відбувається за юнікодом, тому "A" < "a" - true, оскільки "A" має менше числове представлення ніж "a";Символ в нижньому регістрі має більше числове представлення ніж символ в верхньому регістрі;

/**Арифметичні функції */
let width = "50px";
// width = Number(width);
// console.log(width); // NaN

/**Метод Number.perseInt */
/**Метод Number.parseInt() приймає 2 аргументи:

Рядок. Якщо аргумент не є рядком, то він буде спочатку перетворений у рядок
Система числення, до якої відноситься рядок (не обов’язковий аргумент, за замовчуванням десяткова система). Наприклад, для десяткової системи буде 10, для шістнадцяткової - 16 тощо..


Метод аналізує рядок зліва направо, видаляючи пробіли на початку і перетворюючи допустимі символи у число до тих пір, поки не зіткнеться з першим недопустимим символом. Після цього аналіз припиняється, і вже перетворене ціле число повертається. 
// console.log(Number.parseInt("5")); // 5 
// console.log(Number.parseInt("5.5"));// 5 
// console.log(Number.parseInt("5cm")); // 5 
// console.log(Number.parseInt("12qwe74"));// 12
// console.log(Number.parseInt("12.46qwe79")); // 12 
// console.log(Number.parseInt("cm5")); // NaN
//  console.log(Number.parseInt("")); // NaN
//  console.log(Number.parseInt("qweqwe")); // NaN
*/
//width = Number.parseInt(width); //
// console.log(width); // 50

let height = "200.53px";
// height = Number.parseInt(height); // 200
// console.log(height); // 200
/**Метщд Number.parseFloat */
/**Метод Number.parseFloat() аналогічний Number.parseInt() з однієї відмінністю: перетворює рядок на число з плаваючою крапкою. 
//console.log(Number.parseFloat("5")); // 5
//console.log(Number.parseFloat("5.5")); // 5.5
//console.log(Number.parseFloat("3.14")); // 3.14
//console.log(Number.parseFloat("5cm")); // 5
//console.log(Number.parseFloat("5.5cm")); // 5.5
//console.log(Number.parseFloat("12qwe74")); // 12
//console.log(Number.parseFloat("12.46qwe79")); // 12.46
/*Якщо перші символи рядка не можуть бути перетворені на число, або рядок порожній чи відсутній, результатом буде значення NaN (Not a Number).
//console.log(Number.parseFloat("cm5")); // NaN
//console.log(Number.parseFloat("")); // NaN
//console.log(Number.parseFloat("qweqwe")); // NaN
*/
// let height = "200.53px";
// height = Number.parseFloat(height); // 200.53
