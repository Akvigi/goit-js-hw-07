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
    // if (e.target.nodeName !== "IMG") {
    //     return
    //  }
    if (itemImg.dataset.source) {
        const instance = basicLightbox.create(`
            <div class="modal">
                <img src=${itemImg.dataset.source}>
            </div>`
        ).show()
        // }
        // const instance = basicLightbox.create(`
        //         <div class="modal">
        //             <img src=${itemImg.dataset.source}>
        //         </div>`,
        //     { closable: true, onShow: () => { addEventListener("keydown", pressEsc) }, onClose: () => { pressEsc(e) } }
        // ).show()
        // function pressEsc (e) {
        // if (e.code === "Escape") {
        //         instance.close();
        //     }
        // }
        // document.addEventListener("keydown", pressEsc)
    }
    
    // function pressEsc (e) {
    //     const openedM = document.querySelector(".modal")
    //     if (e.code === "Escape") {
    //         instance.close();
    //   }
}
galleryList.addEventListener("click", eventImg)
// document.addEventListener("keydown", pressEsc)
console.log(galleryItems);