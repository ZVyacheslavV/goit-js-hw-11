import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

export const refs = {
  searchForm: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();

  const searchQuery = e.target.elements['search-text'].value.trim();
  if (!searchQuery) return;

  showLoader();

  getImagesByQuery(searchQuery)
    .then(images => {
      createGallery(images);
      console.log(images);
    })
    .catch(/* error => console.log(error) */)
    .finally(() => {
      hideLoader();
      e.target.reset();
    });
});
