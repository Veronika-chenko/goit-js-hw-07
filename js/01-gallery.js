import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//////////////////////
const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
galleryEl.addEventListener('click', setModal);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
        </div>`;
    })
    .join('');
}


function setModal(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`
    );
    instance.show();
    console.log(evt.target);
}

document.addEventListener('keydown', onEscKeyPress);

function onEscKeyPress(evt) {
    const isEscape = evt.code === 'Escape';
    const onOpenModal = document.querySelector('.basicLightbox');

    if (!onOpenModal) {
        return;
    }
    if (isEscape) {
        onOpenModal.remove();
    }
}