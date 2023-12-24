import { removeProductFromWishlist } from "./navbar.js";


export const products = JSON.parse(sessionStorage.getItem('cartItems')) || [];

let counts = {}
const findCount = (key) => {
  return ((counts[key]))
}
function findAndRemoveDuplicates(array, property) {
  const uniqueObjects = [];
  array.forEach(obj => {
    const key = obj[property];
    counts[key] = (counts[key] || 0) + 1;
    if (counts[key] === 1) {
      uniqueObjects.push(obj);
    }
  });

  return uniqueObjects;
}


const uniqueObjects = findAndRemoveDuplicates(products, 'id');




const renderProducts = () => {
  const productContainer = document.querySelector(".product-container");
  if (productContainer) {
    productContainer.innerHTML = uniqueObjects.map((item) =>
      `
    <div data-cartId="${item?.id}"${findCount(item.id)} class="productsContain card-body d-flex justify-content-between align-items-center">
      <div class="productName col-2">
      <div class="imgAndBtn">
      <div class="cancelBtn d-flex-container fs-12 fw-bold bg-light-orange text-white rounded-circle position-absolute">x</div>
      <img class="imgBox imgFluid rounded p-1" src="${item?.image}" alt="">
        <span class="fs-14 text-nowrap">${item?.name?.split(' ').pop()}</span>
      </div>
      
      </div>
      <div class="col-8 d-flex justify-content-around px-4 align-items-center">
      <span data-id="productPrice${item?.id}" class="productPrice ms-4">$${item?.price}</span>
      <div class="d-flex-container border border-1 rounded ms-4"> 
      <span id="plus-btn" class=" crusor-p border-end d-flex-container fw-bold py-1 px-2">-</span> 
          <input id="count-box" data-id="quantityInput${item?.id}"
              class="quantityInput p-1 rounded border-0  dynamic-input text-center" type="number" name="" value="0"
              min="0">
              <span id="minus-btn" class="crusor-p fw-bold border-start d-flex-container  py-1 px-2">+</span>
          </span>
      </div>
  </div>
      <div class="col-2 d-flex justify-content-end">
        <p data-id="subtotalPrice${item?.id}" class="subtotalPrice m-0">$0.00</p>
      </div>
    </div>
  `
    )
      .join("");

  }

};


const updateSubtotal = () => {
  uniqueObjects.forEach((item) => {
    let quantityInput = document.querySelector(`.quantityInput[data-id=quantityInput${item.id}]`);

    if (quantityInput) {

      let quantity = findCount(item.id) || 0;
      quantityInput.value = quantity;
      const subtotalPrice = document.querySelector(`.subtotalPrice[data-id=subtotalPrice${item.id}]`);
      subtotalPrice.textContent = `$${(item.price * parseInt(quantity)).toFixed(2)}`;
    }
  });
};




renderProducts();
updateSubtotal();


document.querySelectorAll(".quantityInput").forEach((element) => {
  element.addEventListener("input", updateSubtotal);
});

const updateBtn = document.querySelector(".updateBtn");
const subtotalResult = document.querySelectorAll(".subtotalResult");
if (updateBtn) {
  updateBtn.addEventListener("click", () => {
    updateSubtotal();
    let total = 0;
    document.querySelectorAll(".subtotalPrice").forEach((subtotal) => {
      total += parseFloat(subtotal.textContent.replace("$", ""));
    });

    subtotalResult.forEach((items) => {
      items.textContent = `$${total.toFixed(2)}`;
    });
  });
}

let boolean = window.location.search.startsWith('?true')

document.getElementById("checkoutFromCart")?.setAttribute("href", `${boolean ? "check-out.html" + "?" + "true" : "sign-Up.html"}`)
document.getElementById("returnShopBtn")?.setAttribute("href", `${boolean ? "index.html" + "?" + "true" : "sign-Up.html"}`)



const cancelButtons = document.querySelectorAll(".cancelBtn");

cancelButtons.forEach((cancelBtn) => {
  cancelBtn.addEventListener("click", (event) => {
    const productContain = event.target.closest(".productsContain");
    if (productContain) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const cartId = productContain.getAttribute("data-cartId");
          removeProductFromWishlist(cartId, cartId)
          productContain.classList.add("d-none");
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  });
});
