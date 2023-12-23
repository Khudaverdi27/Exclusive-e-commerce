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
  console.log(counts);
  return uniqueObjects;
}


const uniqueObjects = findAndRemoveDuplicates(products, 'id');
console.log(uniqueObjects);



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
      <div class="col-8 d-flex justify-content-around px-4">
        <span data-id="productPrice${item?.id}" class="productPrice">$${item?.price}</span>
        <input data-id="quantityInput${item?.id}" class="quantityInput rounded border border-2 dynamic-input text-center" type="number" name="" value="0" min="0">
      </div>
      <div class="col-2 d-flex justify-content-end">
        <p data-id="subtotalPrice${item?.id}" class="subtotalPrice">$0.00</p>
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
