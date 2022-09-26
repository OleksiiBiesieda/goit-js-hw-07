import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(item =>
    `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    alt="${item.description}"
    data-source="${item.original}"
    />
    </a>
    </div>`).join('');

galleryEl.innerHTML = `${markup}`;

var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});
console.log(galleryItems);
