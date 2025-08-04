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

import axios from 'axios';

axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch(error => {
    console.log(error);
  });
