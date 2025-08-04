import axios from 'axios';
import { refs } from '../main';
import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

export const getImagesByQuery = query => {
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51625695-85db02b03381982e3fb3bbea7',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (!response)
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      return response;
    })
    .catch(console.log('error'));
};

/* axios
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
 */
