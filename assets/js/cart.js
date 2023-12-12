const products = [
  {
    id: 1,
    productName: "LCD monitor",
    productPrice: 550,
    imgSrc: "assets/images/products/monitor.png",
  },
  {
    id: 2,
    productName: "Gamepad",
    productPrice: 650,
    imgSrc: "assets/images/products/gamepad.png",
  },
];

const updateSubtotal = () => {
  products.forEach((item) => {
    const quantity = document.querySelector(
      `.quantityInput[data-id=quantityInput${item.id}]`
    ).value;
    const subtotalPrice = document.querySelector(
      `.subtotalPrice[data-id=subtotalPrice${item.id}]`
    );
    subtotalPrice.textContent = `$${(
      item.productPrice * parseInt(quantity)
    ).toFixed(2)}`;
  });
};

const renderProducts = () => {
  const productContainer = document.querySelector(".product-container");
  if (productContainer) {
    productContainer.innerHTML = products
      .map(
        (item) => `
    <div class="productsContain card-body d-flex justify-content-between align-items-center">
      <div class="productName col-2">
      <div class="imgAndBtn">
      <div class="cancelBtn">x</div>
      <img class="imgBox" src="${item.imgSrc}" alt="">
      </div>
        <span>${item.productName}</span>
      </div>
      <div class="col-8 d-flex justify-content-around px-4">
        <span data-id="productPrice${item.id}" class="productPrice">$${item.productPrice}</span>
        <input data-id="quantityInput${item.id}" class="quantityInput dynamic-input" type="number" name="" value="0" min="0">
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
