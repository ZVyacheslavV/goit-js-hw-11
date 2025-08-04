import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';
/* import { refs } from '../main'; */

export const createGallery = images => {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags }) =>
        `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
          </li>`
    )
    .join('\n');

  refs.gallery.innerHTML = markup;

  const galleryLightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  galleryLightBox.refresh();
};

export const showLoader = () => {
  refs.loader.classList.remove('hidden');
};

export const hideLoader = () => {
  refs.loader.classList.add('hidden');
};

export const clearGallery = () => {
  refs.gallery.innerHTML = '<ul class="gallery"></ul>';
};
