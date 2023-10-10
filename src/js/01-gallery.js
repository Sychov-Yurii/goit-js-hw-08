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
refs.addEventListener('click', handlerClick); 

function handlerClick(evt){
    evt.preventDefault();
    
    if (!evt.target.classList.contains('gallery__image')) {
     return   
    }
    const imageDescription = evt.target.alt;
    const galleryItem = galleryItems.find(({description}) => description === imageDescription);

    const lightbox = new SimpleLightbox(`
    <div class="gallery__image">
        <img src="${galleryItem.original}" width="900" alt="${galleryItem.description}">
    </div>`);

lightbox.open();
document.addEventListener("keydown", handlerKey)
function handlerKey(evt) {
    if (evt.code === 'Escape') {
     lightbox.close();
    }
 }
}