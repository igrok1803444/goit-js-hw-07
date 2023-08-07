import { galleryItems } from './gallery-items.js';
// Change code below this line
//пошук елементів
const galleryList = document.querySelector('.gallery');
//розмітка галереї 
const galleryTemplate = galleryItems.map(({ description, original, preview }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');
 
galleryList.insertAdjacentHTML('beforeend', galleryTemplate);
//lightbox
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });
