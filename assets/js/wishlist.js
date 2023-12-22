import { bestProducts, productsByIndex } from "./displayProducts.js";
import { addProductToWishlist, removeProductFromWishlist } from './navbar.js'
const wishListCount = document.getElementById('wishlist-title')

let wishProducts = JSON.parse(sessionStorage.getItem('sendToWishlist')) || [];
wishProducts.forEach(element => {
    element.imgEye = "assets/images/svg/icon-delete.svg"
    element.imgEmptyStar = ""
    element.imgStar = ""
});
if (wishListCount) {
    wishListCount.textContent = `Wishlist (${wishProducts.length})`

}

let boolean = window.location.search.startsWith('?true');

const wishlistMap = (products) => {

    return products.map((item) => {

        return `        <div class="products-container "data-id="${item.id}">
    <div class="products  bg-solid-secondary mx-1 my-2 d-flex-container position-relative">
    <a class="showDetails" href="${boolean ? "productDetails.html" + "?" + "true" : "sign-Up.html"}"><img class="img-fluid w-100 h-100 object-fit-cover" src=${item.image} alt=""></a> 
        <div class="product-icons  position-absolute d-flex ${item.discount ? 'justify-content-between' : 'justify-content-end'} w-100">
<span class="${item.discount ? 'discount-product text-center text-white fs-12 ms-2' : 'd-none'} ${item.disPrice ? 'bg-light-orange' : ''} ">${item.discount}</span>
            <div class="me-2">
                <span data-bs-toggle=${item.imgStar ? "modal" : "false"} data-bs-target="#staticBackdrop" class="mb-1 icon-bg-rounded bg-white rounded-circle d-flex-container  ${item.imgStar ? "showItem" : "actionDelete"}">
                 <img src=${item.iconDelete ? item.iconDelete : item.imgEye} alt="img">
                </span>

                <!-- Modal -->
                <div class="modal fade mt-5 " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-solid-secondary">
        <h1 class="modal-title fs-5 " id="staticBackdropLabel ">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex-container py-5">
      <img class="img-modal w-50 h-50" src="" alt="img">
      </div>
      <div class="modal-footer bg-solid-secondary" >
      <p class="product-desc text-center  text-wrap" ></p>
    </div>
    </div>
  </div>
</div>
            </div>
        </div>
        <div data-cart="addCart" id="addCart" class="layer text-white addCart">${item.textLayer}</div>
    </div>
    <p class="mb-0">${item.name}</p>
    <span class="text-danger me-2">$${item.price}</span><span
        class="text-secondary text-decoration-line-through">${item.disPrice ? item.disPrice : ''}</span>
        <div class=${item.imgStar ? "d-block" : "d-none"}>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgEmptyStar ? item.imgEmptyStar : item.imgStar} alt=""></span>
        <span class="fs-14">(${item.comments})</span>
    </div>
    </div>`

    }).join("")


}


const wishListContainer = document.getElementById('wishListContainer');
const recommendProducts = document.getElementById('recommendProducts');


// products to product section
const product = wishlistMap(wishProducts);
const recommendProduct = wishlistMap(bestProducts);
document.addEventListener("DOMContentLoaded", () => {

})
if (wishListContainer) {
    if (wishProducts.length > 0) {

        wishListContainer.innerHTML = product
    } else {
        wishListContainer.innerHTML = "<h1>Wishlist is empty</h1>"
    }



}
if (recommendProducts) {
    recommendProducts.innerHTML = recommendProduct;

}



const deleteProduct = () => {
    document.querySelectorAll('.products-container .actionDelete').forEach((deletIcon) => {
        deletIcon.addEventListener('click', () => {
            const deletedId = deletIcon.closest('.products-container').getAttribute('data-id');
            removeProductFromWishlist(deletedId);
            location.reload();
        });
    });
};

deleteProduct();

productsByIndex(wishProducts, '.products-container', false)
productsByIndex(bestProducts, '.products-container', false)

document.getElementById("cartFromWish")?.addEventListener("click", () => {
    wishProducts.forEach(wish => {
        addProductToWishlist(wish, true)
    })
})