import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}"/>
       </a>
    </li>`;
}).join('');

refs.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
