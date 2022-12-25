// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

const gallery = document.querySelector('.gallery');
gallery.style.listStyle = "none";

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a href="${original}" class="gallery__link"><img src="${preview}" data-source = "${original}" alt="${description}" class="gallery__image"></a></li>`).join('')
gallery.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: `250`,
  captionPosition: `bottom`
});
console.log(galleryItems);
console.log(SimpleLightbox)