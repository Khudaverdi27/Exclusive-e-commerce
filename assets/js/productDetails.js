import { getStorage } from "./login.js";

const ui = {
    minusBtn: document.getElementById('minus-btn'),
    plusBtn: document.getElementById('plus-btn'),
    count: document.getElementById('count-box')
}

function updateCount(action) {
    let currentCount = parseInt(ui.count.textContent);

    if (action === 'decrease') {
        ui.count.textContent = currentCount > 0 ? --currentCount : 0;
    } else if (action === 'increase') {
        ui.count.textContent = ++currentCount;
    }
}

if (ui.minusBtn) {
    ui.minusBtn.addEventListener('click', function () {
        updateCount('decrease');
    });
}

if (ui.plusBtn) {
    ui.plusBtn.addEventListener('click', function () {
        updateCount('increase');
    });
}


const detailFromStorage = JSON.parse(getStorage("details")) || [];

document.getElementById("detail--name").textContent = detailFromStorage.name
document.getElementById("detail--title").textContent = detailFromStorage.name
document.getElementById("detail-category").textContent = detailFromStorage.category + "/"
document.getElementById("detail--desc").textContent = detailFromStorage.description
document.getElementById("detail--price").textContent = "$" + detailFromStorage.price + ".00"
document.querySelectorAll(".img-w").forEach(img => {
    img.src = detailFromStorage.image
})
document.querySelectorAll(".slide-img").forEach(img => {
    img.src = detailFromStorage.image
})
const sizeContainer = document.getElementById("sizeContainer");

if (detailFromStorage.size) {
    const sizeHTML = `
    <span class="fs-4">Size:</span>
    <button class="btn btn-sm border border-2 box-btn fw-bold">XS</button>
    <button class="btn btn-sm border border-2 box-btn fw-bold mx-1">S</button>
    <button class="btn btn-sm border border-2 box-btn fw-bold">M</button>
    <button class="btn btn-sm border border-2 box-btn fw-bold mx-1">L</button>
    <button class="btn btn-sm border border-2 box-btn fw-bold">XL</button>
  `;
    sizeContainer.innerHTML = sizeHTML;
} else {
    sizeContainer.innerHTML = "";
}



