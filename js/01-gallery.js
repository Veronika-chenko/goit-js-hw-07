import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//////////////////////
const galleryEl = document.querySelector('.gallery');

const galleryList = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
        </div>`;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryList);

//////////////////////////////////////////

galleryEl.addEventListener('click', evt => {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${evt.target.closest('img').dataset.source}" width="800" height="600">`
    );

    instance.show();

    console.log(evt.target);
})
