import axios from 'axios';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

export const refs = {
  searchForm: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
};

/* const fetchUsersBtn = document.querySelector('.btn');
const fetchUsersBtnTwo = document.querySelector('.btn-two');

fetchUsersBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(users => {
      // Дані від бекенда
      console.log('limit-sort:', users);
    })
    .catch(error => console.log(error));
});

fetchUsersBtnTwo.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users?_sort=name&_limit=7')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(users => {
      // Дані від бекенда
      console.log('sort-limit:', users);
    })
    .catch(error => console.log(error));
});
 */

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchQuery = e.target.elements['search-text'].value.trim();

  const images = getImagesByQuery(searchQuery);
  /* createGallery(images); */
  console.log(images);

  e.target.reset();
});
