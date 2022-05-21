import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.body.querySelector(".gallery");
const markup = galleryItems.map((image) => `<div class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__link" src=${image.preview} data-source=${image.original} alt=${image.description}</a></div>`).join("");
gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", selectItem);
function selectItem(event) {
    event.preventDefault();
    console.log(event.target.nodeName);
    if (event.target.nodeName !== "IMG") {
        return;
    }
        const imageLink = event.target.dataset.source;
        const instance = basicLightbox.create(`
        <img src="${imageLink}",
        width="800" height="600">`)
    instance.show(); 
}; 
