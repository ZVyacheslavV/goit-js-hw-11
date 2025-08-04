import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';

export const createGallery = images => {
  const markup = images.map(
    images
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
      .join('\n')
  );

  const galleryLightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  refs.gallery.innerHTML = markup;
  galleryLightBox.refresh();
};
