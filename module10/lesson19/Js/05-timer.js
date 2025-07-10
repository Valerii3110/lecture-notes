/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const startBtn = document.querySelector("button[data-action-start]"); //* отримуємо елемент з сторінки для взаємодії кнопка старт
const stopBtn = document.querySelector("button[data-action-stop]"); //* отримуємо елемент з сторінки для взаємодії кнопка стоп
const clockface = document.querySelector(".clockface"); //* отримуємо елемент куди будемо відображати свій час

class Timer {}

const time = new Timer();
console.log(time);
