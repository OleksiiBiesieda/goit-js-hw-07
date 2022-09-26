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

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault(event);
    window.addEventListener('keydown', onEscDown);
    
    const instance = basicLightbox.create(`<img src="${event.target.getAttribute('data-source')}">`);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    } else {
        instance.show();
    }

    function onEscDown(event) {
        if (event.code !== 'Escape') {
            return;
        } else {
            instance.close();
            window.removeEventListener('keydown', onEscDown);
        }
    }
}


console.log(galleryEl);
