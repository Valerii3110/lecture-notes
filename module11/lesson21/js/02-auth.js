//**Авторизація запитів з ключами
//* Які бувають:
//* - y query string
//* - y хедерах
//*
//* Для прикладу використщвуємо https://pixabay.com/apidocs/

const API_KEY = '51318694-35374bea804290f3a0783253d';

const list = document.querySelector('.list');

const params = new URLSearchParams({
  key: API_KEY,
  q: 'red rose',
});

fetch(`https://pixabay.com/api/?${params}`)
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
  })
  .catch((error) => {
    console.log('Fetch error:', error);
  });

function createMarkup(arr) {
  return arr
    .map(
      ({ previewURL, tags }) =>
        `<li>
          <img src="${previewURL}" alt="${tags}" width="300" />
        </li>`
    )
    .join('');
}

fetch(`https://pixabay.com/api/?${params}`, {
  headers: {
    Autorization: `Berar-lalalala`,
  },
});
