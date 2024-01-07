import { setStorage } from "./login.js";
import { removeProductFromWishlist } from "./navbar.js";
import loading from "./spinner.js";



export const products = JSON.parse(sessionStorage.getItem('cartItems')) || [];

const cartContainer = document.querySelector(".cartContainer");

if (products.length > 0) {
  cartContainer?.classList.remove('d-none');
} else {
  if (cartContainer) {
    cartContainer.innerHTML = ` <section class=" container my-4 pt-3" >
  <div class="d-flex-container flex-column my-5">
      <p class="fs-2">Your cart is empty :(</p>
      <p>Go to shopping</p>
      <button class="btn bg-light-orange text-white px-5 py-2 my-2" type="button">
      <a  href= "index.html?true"> Back to home page</a>
     </button>
  </div>

</section>

</section>`
  }

}


let counts = {}

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


export const uniqueObjects = findAndRemoveDuplicates(products, 'id');




const renderProducts = () => {
  const productContainer = document.querySelector(".product-container");
  if (productContainer) {
    productContainer.innerHTML = uniqueObjects.map((item) =>
      `
      <div data-cartId="${item?.id}" class="productsContain card-body d-flex justify-content-between align-items-center">
        <div class="productName col-2 crusor-p">
          <div class="position-relative">
            <div class="cancelBtn d-flex-container fs-12 fw-bold bg-light-orange text-white rounded-circle position-absolute">x</div>
            <img class="imgBox crusor-p imgFluid rounded p-1" src="${item?.image}" alt="">
            <span class="fs-14 text-nowrap">${item?.name?.split(' ').pop()}</span>
          </div>
        </div>
        <div class="col-8 d-flex justify-content-around px-4 align-items-center">
          <span data-id="productPrice${item?.id}" class="productPrice ms-4">$${item?.price}</span>
          <div class="d-flex-container border border-1 rounded ms-4">
            <span class="crusor-p border-end d-flex-container fw-bold py-1 px-2 plus-btnn">-</span>
            <input disabled data-id="${item?.id}" class="quantityInput p-1 rounded border-0 dynamic-input text-center count-boxx" type="number" name="" value="1" min="0">
            <span class="crusor-p fw-bold border-start d-flex-container minus-btnn py-1 px-2">+</span>
          </div>
        </div>
        <div class="col-2 d-flex justify-content-end">
          <p data-id="subtotalPrice${item?.id}" class="subtotalPrice m-0">$0.00</p>
        </div>
      </div>
    `
    ).join("");
  }


};
renderProducts();

const ui = {
  minusBtns: document.querySelectorAll('.minus-btnn'),
  plusBtns: document.querySelectorAll('.plus-btnn'),
  countOfValue: document.querySelectorAll('.count-boxx')
}

ui.minusBtns.forEach((minusBtn, index) => {
  minusBtn.addEventListener('click', function () {
    updateCount('decrease', ui.countOfValue[index], true);
  });
  updateCount('decrease', ui.countOfValue[index], true);
});

ui.plusBtns.forEach((plusBtn, index) => {
  plusBtn.addEventListener('click', function () {
    updateCount('increase', ui.countOfValue[index], true);
  });
  updateCount('increase', ui.countOfValue[index], true);
});

export function updateCount(action, inputElement, checkData) {
  if (checkData) {
    const productId = inputElement.getAttribute("data-id")
    const item = uniqueObjects.find(item => item.id === productId);
    if (item) {
      let currentCount = parseInt(inputElement.value);
      inputElement.value = (action === 'increase') ? (currentCount > 0 ? --currentCount : 0) : ++currentCount;
      updateSubtotal(item, currentCount);
      if (currentCount === 0) {
        const deletedItem = (inputElement.closest('.productsContain'));
        loading()
        deleteProduct(deletedItem)
      }

    }
  } else {
    let currentCount = parseInt(inputElement.value);
    inputElement.value = (action === 'decrease') ? (currentCount > 0 ? --currentCount : 0) : ++currentCount;
  }
};




function updateSubtotal(item, quantity) {
  const subtotalPrice = document.querySelector(`.subtotalPrice[data-id=subtotalPrice${item.id}]`);
  subtotalPrice.textContent = `$${(item.price * quantity).toFixed(2)}`;
};

const clickUpdateBtn = () => {
  let total = 0;
  document.querySelectorAll(".subtotalPrice").forEach((subtotal) => {
    total += parseFloat(subtotal.textContent.replace("$", ""));
  });
  subtotalResult.forEach((items) => {
    items.textContent = `$${total.toFixed(2)}`;
  });
}

const updateBtn = document.querySelector(".updateBtn");
const subtotalResult = document.querySelectorAll(".subtotalResult");
if (updateBtn) {
  updateBtn.addEventListener("click", clickUpdateBtn);
}


let boolean = window.location.search.startsWith('?true')

document.getElementById("checkoutFromCart")?.setAttribute("href", `${boolean ? "check-out.html" + "?" + "true" : "sign-Up.html"}`)
document.getElementById("returnShopBtn")?.setAttribute("href", `${boolean ? "index.html" + "?" + "true" : "sign-Up.html"}`)

const deleteProduct = (deletedItemContainer, count) => {
  let productContain = deletedItemContainer

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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        setTimeout(() => {
          location.reload()
        }, 1000)

      } else {
        productContain.querySelector('input').value = count ? count : 1
        productContain.querySelector('.subtotalPrice').textContent = productContain.querySelector('.productPrice').textContent
      }
    });
  }
}

const cancelButtons = document.querySelectorAll(".cancelBtn");

cancelButtons.forEach((cancelBtn) => {
  cancelBtn.addEventListener("click", (e) =>

    deleteProduct(e.target.closest(".productsContain"), e.target.closest(".productsContain").querySelector('input').value))
});

document.querySelector(".proceesBtn")?.addEventListener("click", () => {
  clickUpdateBtn()
  document.querySelectorAll('.subtotalPrice').forEach((cost, index) => {
    let subPrice = parseFloat(cost.textContent.slice(1));

    if (index < uniqueObjects.length) {
      uniqueObjects[index].price = subPrice;
    }
  });
  setStorage("details", JSON.stringify(uniqueObjects))
})




