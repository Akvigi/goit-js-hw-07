import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery")
const listItems = galleryItems.map(item => 
  `<li><a class="gallery__link" href=${item.original}><img src=${item.preview} class="gallery__image" data-source=${item.original} alt=${item.description}></a></li>`
).join("")
// galleryList.append(...listItems)
galleryList.insertAdjacentHTML("beforeend", listItems);
function eventImg(e) {
    e.preventDefault()
    const { target: itemImg } = e;
    if (e.target.nodeName !== "IMG") {
        return
     }
        const instance = basicLightbox.create(`
                <div class="modal">
                    <img src=${itemImg.dataset.source}>
                </div>`,
        )
        instance.show()
        function pressEsc (e) {
        if (e.key === "Escape") {
                instance.close();
            }
        }
        document.addEventListener("keydown", pressEsc)
    }

galleryList.addEventListener("click", eventImg)

console.log(galleryItems);