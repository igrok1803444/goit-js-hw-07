import { galleryItems } from './gallery-items.js';
// Change code below this line
//пошук елементів
const galleryList = document.querySelector('.gallery');
//слухачі подій
galleryList.addEventListener('click', showLargeImage);
//розмітка галереї 
const galleryTemplate = galleryItems.map(({ description, original, preview }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');
 
galleryList.insertAdjacentHTML('beforeend', galleryTemplate);

//функція для слухача подій 
function showLargeImage(event) {
    if (event.target.nodeName !== 'IMG') {
        return
    }
    event.preventDefault();
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}"/>
    </div>
`)
    instance.show();
    galleryList.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            instance.close()
            galleryList.removeEventListener('keydown', showLargeImage)
        }
    })
}



