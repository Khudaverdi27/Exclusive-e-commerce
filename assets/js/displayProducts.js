const products = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        discount: 40,
        image: 'assets/images/products/joystick.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 120,
        disPrice: 160,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-fill.svg',
        comments: 88
    },
    {
        id: 2,
        name: 'AK-900 Wired Keyboard',
        discount: 35,
        image: 'assets/images/products/keyboard.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 960,
        disPrice: 1160,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-empty.svg',
        comments: 75
    },
    {
        id: 3,
        name: 'IPS LCD Gaming Monitor',
        discount: 30,
        image: 'assets/images/products/tv.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 370,
        disPrice: 400,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-half-filled.svg',
        comments: 99
    },
    {
        id: 4,
        name: 'S-Series Comfort Chair',
        discount: 25,
        image: 'assets/images/products/chair.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 375,
        disPrice: 400,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-fill.svg',
        comments: 99
    },
    {
        id: 5,
        name: 'S-Series Comfort Chair',
        discount: 25,
        image: 'assets/images/products/chair.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 375,
        disPrice: 400,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-fill.svg',
        comments: 99
    }
];




// products to UI
const sectionContainer = document.getElementById('middleSection-products');

const product = products.map((item) => {
    return `        <div class="products-container "data-id="${item.id}">
<div class="products d-flex-container position-relative">
    <img src=${item.image} alt="">
    <div class="product-icons  position-absolute d-flex justify-content-between w-100">
        <span class="discount-product bg-light-orange text-center text-white fs-12 ms-2">-${item.discount}%</span>
        <div class="me-2">
            <span class="icon-bg-rounded bg-white rounded-circle d-flex-container">
                <img src=${item.imgHeart} alt="">
            </span>
            <span class="icon-bg-rounded bg-white rounded-circle d-flex-container">
                <img src=${item.imgEye} alt="">
            </span>
        </div>
    </div>
    <div class="layer text-white">${item.textLayer}</div>
</div>
<p>${item.name}</p>
<span class="text-danger me-2">$${item.price}</span><span
    class="text-secondary text-decoration-line-through">$${item.disPrice}</span>
<div>
    <span><img src=${item.imgStar} alt=""></span>
    <span><img src=${item.imgStar} alt=""></span>
    <span><img src=${item.imgStar} alt=""></span>
    <span><img src=${item.imgStar} alt=""></span>
    <span><img src=${item.imgEmptyStar} alt=""></span>
    <span class="fs-14">(${item.comments})</span>
</div>
</div>`
}).join("")

sectionContainer.innerHTML = product

export default product