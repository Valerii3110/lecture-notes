//** Створення
//* Unix час
//* Методи
//* Різниця часу
//* Date.now   */

// const currentDate = new Date(); //* коли ми створюємо новий екземпляр класу то отримуємо обєкт, проте зараз ми бачимо не зовсім обєкт а його метод String
// console.dir(currentDate); //* Thu Jul 10 2025 13:15:38 GMT+0300 (за східноєвропейським літнім часом)

// const day = currentDate.getDay();
// console.log(day); //* 4 повертає день тижня починаючи з нуля і з неділі (неділя -0, понеділок-1, вівторок-2, середа -3, четверг -4, і т.д)

// const date = currentDate.getDate();
// console.log(date); //* 10  повертає  яке сьогодні число місяця

// const month = currentDate.getMonth();
// console.log(month); //* 6 повертає поточний місяць починаючи  нуля і з січня (січень -0б .., липень-6)

// const year = currentDate.getFullYear();
// console.log(year);//* 2025

// currentDate.setFullYear(2007);//* перезаписуємо дату, зокрема рік
// console.log(currentDate); //* Tue Jul 10 2007 13:39:10 GMT+0300 (за східноєвропейським літнім часом)

//! Метод Date.now */

// console.dir(currentDate.getTime()); //* 1752144690239 повертає кількісь мілісекунд яка прйшла з моменту 01.01.1970р до моменту виклику методу.

// const currentDate = new Date("2007-07-02");
// console.dir(currentDate); //* Mon Jul 02 2007 03:00:00 GMT+0300 (за східноєвропейським літнім часом)

// const currentDate = new Date(0);
// console.dir(currentDate);//* Thu Jan 01 1970 03:00:00 GMT+0300 (за східноєвропейським стандартним часом)
// const currentDate = new Date(175855254555);
// console.dir(currentDate); //* Tue Jul 29 1975 11:40:54 GMT+0300 (за східноєвропейським стандартним часом)

// console.log(Date.now()); //* 1752144690239 повертає кількісь мілісекунд яка прйшла з моменту 01.01.1970р до моменту виклику методу.

//* Різниця часу
const startTime = Date.now();
setTimeout(() => {
  const currentTime = Date.now();
  console.log(currentTime - startTime); //* час через який виконається код
}, 2000);

// console.log("Month: ", date.getMonth());

// console.log("Full year: ", date.getFullYear());

// console.log("Hours: ", date.getHours());

// console.log("Minutes: ", date.getMinutes());

// console.log("Seconds: ", date.getSeconds());

// console.log("Milliseconds: ", date.getMilliseconds());
