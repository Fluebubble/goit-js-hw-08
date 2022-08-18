// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
// import Joi from 'joi';

// console.log(Joi);

// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
    .map(item => 
        `        
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`  
    )
    .join("")

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", () => {});

console.log("HI")
const lightBoxImg = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
console.log("HI2")


console.log(galleryItems);
