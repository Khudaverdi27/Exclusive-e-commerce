import { removeProductFromWishlist } from "./navbar.js";

const products = JSON.parse(sessionStorage.getItem('cartItems')) || [];

const renderProducts = () => {
  const productContainer = document.querySelector(".product-container");
  if (productContainer) {
    productContainer.innerHTML = products.map((item) =>
      `
    <div data-cartId="${item.id}" class="productsContain card-body d-flex justify-content-between align-items-center">
      <div class="productName col-2">
      <div class="imgAndBtn">
      <div class="cancelBtn d-flex-container fs-12 fw-bold bg-light-orange text-white rounded-circle position-absolute">x</div>
      <img class="imgBox imgFluid" src="${item.image}" alt="">
        <span class="fs-14 text-nowrap">${item.name.split(' ').pop()}</span>
      </div>
      
      </div>
      <div class="col-8 d-flex justify-content-around px-4">
        <span data-id="productPrice${item.id}" class="productPrice">$${item.price}</span>
        <input data-id="quantityInput${item.id}" class="quantityInput rounded border border-2 dynamic-input text-center" type="number" name="" value="0" min="0">
      </div>
      <div class="col-2 d-flex justify-content-end">
        <p data-id="subtotalPrice${item.id}" class="subtotalPrice">$0.00</p>
      </div>
    </div>
  `
    )
      .join("");
  }

};
const updateSubtotal = () => {
  products.forEach((item) => {
    const quantity = document.querySelector(
      `.quantityInput[data-id=quantityInput${item.id}]`
    ).value;
    const subtotalPrice = document.querySelector(
      `.subtotalPrice[data-id=subtotalPrice${item.id}]`
    );
    subtotalPrice.textContent = `$${(
      item.price * parseInt(quantity)
    ).toFixed(2)}`;
  });
};

renderProducts();

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
