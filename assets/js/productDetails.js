
import { updateCount } from "./cart.js";
import { getStorage, setStorage } from "./login.js";
import { setLocale, showSnackbar, updateBadge } from "./navbar.js";

const ui = {
    minusBtn: document.getElementById('minus-btn'),
    plusBtn: document.getElementById('plus-btn'),
    count: document.getElementById('count-box')
}


ui.minusBtn?.addEventListener('click', function () {
    updateCount('decrease', ui.count);

});

ui.plusBtn?.addEventListener('click', function () {
    updateCount('increase', ui.count);

});



const detailFromStorage = JSON.parse(getStorage("details")) || [];

const setElementText = (elementId, text) => document.getElementById(elementId).textContent = text;

const setElementSrc = (selector, src) => document.querySelectorAll(selector).forEach(el => el.src = src);

const sizeContainer = document.getElementById("sizeContainer");

if (sizeContainer) {
    const firstDetail = detailFromStorage[0] || {};
    setElementText("detail--name", firstDetail.name || "");
    setElementText("detail--title", firstDetail.name || "");
    setElementText("detail-category", firstDetail.category + "/");
    setElementText("detail--desc", firstDetail.description || "");
    setElementText("detail--price", "$" + (firstDetail.price || ""));

    setElementSrc(".img-w", firstDetail.image || "");
    setElementSrc(".slide-img", firstDetail.image || "");

    const sizeHTML = firstDetail.size ? `
        <span class="fs-4">Size:</span>
        <button class="btn btn-sm border border-2 box-btn fw-bold">XS</button>
        <button class="btn btn-sm border border-2 box-btn fw-bold mx-1">S</button>
        <button class="btn btn-sm border border-2 box-btn fw-bold">M</button>
        <button class="btn btn-sm border border-2 box-btn fw-bold mx-1">L</button>
        <button class="btn btn-sm border border-2 box-btn fw-bold">XL</button>
    ` : "";

    sizeContainer.innerHTML = sizeHTML;
}


let boolean = window.location.search.startsWith('?true');

const addWish = document.getElementById("addDetailWishlist")
if (!boolean && addWish) {
    addWish.style.cursor = "not-allowed";
    addWish.setAttribute("disabled", true);
    addEventListener("click", () => { showSnackbar("Please sign in") });
} else {
    addWish?.addEventListener("click", () => {
        const hasBgWhiteClass = addWish.classList.contains('bg-white');

        // Toggle background color class
        addWish.classList.remove(hasBgWhiteClass ? 'bg-white' : 'bg-danger');
        addWish.classList.add(hasBgWhiteClass ? 'bg-danger' : 'bg-white');

        setLocale(detailFromStorage, detailFromStorage.id)
        updateBadge()
    })
}




document.getElementById("buyFromDetail")?.setAttribute("href", `${boolean ? "check-out.html" + "?" + "true" : "sign-Up.html"}`)



export const productsToCheckout = (check) => {
    return check.map(product => {
        return `      <div class="d-flex ">
    <div class="box-btn-l d-flex-container">
        <img class=" img-fluid" src="${product.image}">
    </div>
    <div class="d-flex justify-content-between align-items-center w-100 ms-3">
        <h6>${product.name}</h6>
        <span>$${product.price}</span>
    </div>
</div>`
    }).join("")

}

function calcTotalCost(products) {
    if (!products || products.length === 0) {
        return 0;
    }
    const totalSum = products.reduce((sum, product) => {
        if (typeof product.price === 'number') {
            return sum + product.price;
        }
        // if product.price is not a number
        return sum;
    }, 0);

    return totalSum;
}


const total = calcTotalCost(detailFromStorage);

const checkout = productsToCheckout(detailFromStorage)

const checkContainer = document.getElementById("checkout-container");
if (checkContainer) {
    checkContainer.innerHTML = checkout
    document.getElementById("subTotalPrice").textContent = "$" + total
    document.getElementById("totalPrice").textContent = "$" + total
}

const adress = getStorage("adress")
const userName = getStorage("userName")


const checkoutName = document.getElementById("checkoutName");
const checkoutAdress = document.getElementById("checkoutAdress");
const checkoutCity = document.getElementById("checkoutCity");
const checkoutNumber = document.getElementById("checkoutNumber");

const checkoutNameErr = document.getElementById("checkoutNameErr");
const checkoutAdressErr = document.getElementById("checkoutAdressErr");
const checkoutCityErr = document.getElementById("checkoutCityErr");
const checkoutNumErr = document.getElementById("checkoutNumErr");

if (checkoutName && checkoutAdress) {
    checkoutName.value = userName
    checkoutAdress.value = adress
}




const btn = document.querySelector(".place-order");

function validate() {
    const nameRegex = /^[a-zA-Z]{2,25}$/;
    const phoneRegex = /^\d{6,}$/;
    const addressRegex = /^[a-zA-Z0-9\s,'.-]+$/;

    const isValidName = nameRegex.test(checkoutName.value);
    const isValidPhone = phoneRegex.test(checkoutNumber.value);
    const isValidAdress = addressRegex.test(checkoutAdress.value);
    const isValidCity = addressRegex.test(checkoutCity.value);

    if (!isValidName) {
        checkoutNameErr.classList.remove("d-none");
    } else {
        checkoutNameErr.classList.add("d-none");
    }
    if (!isValidAdress) {
        checkoutAdressErr.classList.remove("d-none");
    } else {
        setStorage("adress", checkoutAdress.value)
        checkoutAdressErr.classList.add("d-none");
    }
    if (!isValidCity) {
        checkoutCityErr.classList.remove("d-none");
    } else {
        checkoutCityErr.classList.add("d-none");
    }

    if (!isValidPhone) {
        checkoutNumErr.classList.remove("d-none");
    } else {
        checkoutNumErr.classList.add("d-none");
    }

    // Check if all validations are successful
    const isAllValid = isValidName && isValidAdress && isValidPhone && isValidCity;

    if (isAllValid) {
        setTimeout(() => {
            Swal.fire({
                title: "Thank You!",
                text: "Your order has been received",
                icon: "success",
            });
        }, 5000)
        setTimeout(() => {
            window.location.href = "index.html?true"
        }, 6000)
    }

    return isAllValid;
}



btn?.addEventListener("click", () => {
    const resultValidate = validate()
    if (resultValidate) {
        btn.classList.remove("place-order--default");
        btn.classList.add("place-order--placing");
        setTimeout(() => {
            btn.classList.remove("place-order--placing");
            btn.classList.add("place-order--done");
        }, 4000);
        setTimeout(() => {
            btn.classList.remove("place-order--done");
            btn.classList.add("place-order--default");
        }, 6000);
    }

})

