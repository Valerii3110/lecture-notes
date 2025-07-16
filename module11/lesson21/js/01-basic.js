//** Основи  запиту
//* - Fetch API -  це метод який інснує в глобальному середовищі window і дає можливість робити запити на сервер.
//* - URL запиту
//* - Вкладка Network
//* - Обробка відповіді response (404 з fech)
//*
//* https://jsonplaceholder.com/todos */

//console.log(fetch("https://jsonplaceholder.com/todos")); //*Promise {<pending>} Метод fetch повертає нам проміс

const list = document.querySelector('.todo-list');

const params = new URLSearchParams({
  _limit: 7,
  _page: 2,
});
//console.log(params);//*URLSearchParams {size: 2}

//fetch('https://jsonplaceholder.typicode.com/todos?_limit=10&_page1') //*__limit -імя парамметру що відноситься до jsonplaceholder, =10 значення параметру

// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
//   .then((res) => {
//     //console.log(res); //* ok: true || false Метод res.json повертає проміс
//     if (!res.ok) {
//       throw new Error('Ooops'); //* catch Error: Ooops
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log('then', data);
//     list.insertAdjacentHTML('beforeend', createMarkup(data));
//   })
//   .catch((error) => {
//     console.log('catch', error);
//   });

// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => {
//     //console.log(res);
//     if (!res.ok) {
//       throw new Error('Ooops'); //* catch Error: Ooops
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log('then', data);
//     list.insertAdjacentHTML('beforeend', createMarkup(data));
//   })
//   .catch((error) => {
//     console.log('catch', error);
//   });

//

//**
//* Всередині функції запит, зовні обробка
//* */

// function foo(url) {
//   return fetch(url).then((result) => {
//     if (!result.ok) {
//       throw new Error(result.status);
//     }
//     return result.json();
//   });
// }

// foo('https://jsonplaceholder.typicode.com/todos')
//   // console.log(foo('https://jsonplaceholder.typicode.com/todos'))
//   .then((data) => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// foo('https://jsonplaceholder.typicode.com/users')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function foo(endpoint) {
//   return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then(
//     (result) => {
//       if (!result.ok) {
//         throw new Error(result.status);
//       }
//       return result.json();
//     }
//   );
// }

// foo('todos')
//   // console.log(foo('https://jsonplaceholder.typicode.com/todos'))
//   .then((data) => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// foo('users')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
