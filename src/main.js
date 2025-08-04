import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();

  const searchQuery = e.target.elements['search-text'].value.trim();
  if (!searchQuery) return;

  showLoader();

  getImagesByQuery(searchQuery)
    .then(images => {
      if (!images) return;
      createGallery(images);
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
      e.target.reset();
    });
});
