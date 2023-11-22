const products = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        discount: '-40%',
        image: 'assets/images/products/joystick.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 120,
        disPrice: "$160",
        imgStar: 'assets/images/svg/star-fill.svg',
        comments: 88
    },
    {
        id: 2,
        name: 'AK-900 Wired Keyboard',
        discount: '-35%',
        image: 'assets/images/products/keyboard.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 960,
        disPrice: "$1160",
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-empty.svg',
        comments: 75
    },
    {
        id: 3,
        name: 'IPS LCD Gaming Monitor',
        discount: '-30%',
        image: 'assets/images/products/tv.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 370,
        disPrice: "$400",
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-half-filled.svg',
        comments: 99
    },
    {
        id: 4,
        name: 'S-Series Comfort Chair',
        discount: '-25%',
        image: 'assets/images/products/chair.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 375,
        disPrice: "$400",
        imgStar: 'assets/images/svg/star-fill.svg',
        comments: 99
    },
    {
        id: 5,
        name: 'S-Series Comfort Chair',
        discount: '-25%',
        image: 'assets/images/products/chair.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 375,
        disPrice: "$400",
        imgStar: 'assets/images/svg/star-fill.svg',
        comments: 99
    }
];
// best product section
const bestProducts = [
    {
        id: 1,
        name: 'Bestselling-Coat',
        image: 'assets/images/products/coat.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 260,
        disPrice: "$360",
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-fill.svg',
        comments: 66
    },
    {
        id: 2,
        name: 'Gucci duffle bag',
        image: 'assets/images/products/bag.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 960,
        disPrice: "$1160",
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-half-filled.svg',
        comments: 65
    },
    {
        id: 3,
        name: 'RGB liquid CPU Cooler',
        image: 'assets/images/products/gammaxx.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 160,
        disPrice: '$170',
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-half-filled.svg',
        comments: 65
    },
    {
        id: 4,
        name: 'Small BookSelf',
        image: 'assets/images/products/shelf.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 360,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-fill.svg',
        comments: 65
    }
];
// our product section
const ourProducts = [
    {
        id: 1,
        name: 'Breed Dry Dog Food',
        image: 'assets/images/products/ourProducts1.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 100,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-empty.svg',
        comments: 35
    },
    {
        id: 2,
        name: 'CANON EOS DSLR Camera',
        image: 'assets/images/products/ourProducts2.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 360,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-empty.svg',
        comments: 95
    },
    {
        id: 3,
        name: 'ASUS FHD Gaming Laptop',
        image: 'assets/images/products/ourProducts3.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 700,
        imgStar: 'assets/images/svg/star-fill.svg',
        comments: 325
    },
    {
        id: 4,
        name: 'Curology Product Set',
        image: 'assets/images/products/ourProducts4.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 500,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-empty.svg',
        comments: 145
    },
    {
        id: 5,
        name: 'Kids Electric Car',
        image: 'assets/images/products/ourProducts5.png',
        discount: 'New',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 960,
        imgStar: 'assets/images/svg/star-fill.svg',
        comments: 65,
        colorSelect: true
    },
    {
        id: 6,
        name: 'Jr. Zoom Soccer Cleats',
        image: 'assets/images/products/ourProducts6.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 1160,
        imgStar: 'assets/images/svg/star-fill.svg',
        comments: 35,
        colorSelect: true
    },
    {
        id: 7,
        name: 'GP11 Shooter USB Gamepad',
        image: 'assets/images/products/ourProducts7.png',
        discount: 'New',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 660,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-half-filled.svg',
        comments: 55,
        colorSelect: true
    },
    {
        id: 8,
        name: 'Quilted Satin Jacket',
        image: 'assets/images/products/ourProducts4.png',
        imgHeart: 'assets/images/svg/heart-small.svg',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 660,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-half-filled.svg',
        comments: 55,
        colorSelect: true
    }

];
// prodtucs to UI
const map = (products) => {

    return products.map((item) => {
        return `        <div class="products-container "data-id="${item.id}">
    <div class="products bg-solid-secondary mx-1 my-2 d-flex-container position-relative">
        <img src=${item.image} alt="">
        <div class="product-icons  position-absolute d-flex ${item.discount ? 'justify-content-between' : 'justify-content-end'} w-100">
<span class="${item.discount ? 'discount-product text-center text-white fs-12 ms-2' : 'd-none'} ${item.disPrice ? 'bg-light-orange' : 'bg-light-green'} ">${item.discount}</span>
            <div class="me-2">
                <span class="mb-1 icon-bg-rounded bg-white rounded-circle d-flex-container">
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
        class="text-secondary text-decoration-line-through">${item.disPrice ? item.disPrice : ''}</span>
    <div class=${item.disPrice ? "d-block" : "d-inline"}>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgEmptyStar ? item.imgEmptyStar : item.imgStar} alt=""></span>
        <span class="fs-14">(${item.comments})</span>
    </div>
    <div class="${item.colorSelect ? "d-block" : "d-none"}">
    <button class="btnColorSelect rounded-circle" type="button"></button>
    <button class="btnColorSelect rounded-circle" type="button"></button>
    </div>
</button>
    </div>`
    }).join("")

}
const sectionContainer = document.getElementById('middleSection-products');
const bestProductContainer = document.getElementById('bestProducts');
const exploreProductsSec = document.getElementById('exploreProductsSec');

// products to product section
const product = map(products)
sectionContainer.innerHTML = product
// products to Best product section
const bestProduct = map(bestProducts)
bestProductContainer.innerHTML = bestProduct
// products to Best product section
const ourProduct = map(ourProducts)
exploreProductsSec.innerHTML = ourProduct





export default map

// category boxex info
const categories = [
    {
        id: 1,
        name: 'Phones',
        image: `
        <g id="Category-CellPhone" clip-path="url(#clip0_1039_868)">
        <path id="Vector" d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M25.6667 7H31.1354" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_3" d="M28 44.0052V44.0305" stroke="" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <line id="Line 8" x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="" stroke-width="2"/>
        </g>
        <defs>
        <clipPath id="clip0_1039_868">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,

    },
    {
        id: 2,
        name: 'Computers',
        image: `
        <g id="Category-Computer" clip-path="url(#clip0_1039_613)">
        <path id="Vector" d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M16.3333 46.6666H39.6667" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_3" d="M21 37.3334V46.6667" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_4" d="M35 37.3334V46.6667" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Line 12" d="M8 32H48" stroke="" stroke-width="2" stroke-linecap="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1039_613">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,

    },
    {
        id: 3,
        name: 'SmartWatch',
        image: `<svg  class="svg" width="56" height="56" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M22 1H8C4.13401 1 1 4.13401 1 8V22C1 25.866 4.13401 29 8 29H22C25.866 29 29 25.866 29 22V8C29 4.13401 25.866 1 22 1Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,

    },
    {
        id: 4,
        name: 'Camera',
        image: `
        <g id="Category-Camera" clip-path="url(#clip0_138_1570)">
        <path id="Vector" d="M11.6667 16.3333H14C15.2377 16.3333 16.4247 15.8416 17.2998 14.9665C18.175 14.0913 18.6667 12.9043 18.6667 11.6666C18.6667 11.0478 18.9125 10.4543 19.3501 10.0167C19.7877 9.57915 20.3812 9.33331 21 9.33331H35C35.6188 9.33331 36.2123 9.57915 36.6499 10.0167C37.0875 10.4543 37.3333 11.0478 37.3333 11.6666C37.3333 12.9043 37.825 14.0913 38.7002 14.9665C39.5753 15.8416 40.7623 16.3333 42 16.3333H44.3333C45.571 16.3333 46.758 16.825 47.6332 17.7001C48.5083 18.5753 49 19.7623 49 21V42C49 43.2377 48.5083 44.4246 47.6332 45.2998C46.758 46.175 45.571 46.6666 44.3333 46.6666H11.6667C10.429 46.6666 9.242 46.175 8.36683 45.2998C7.49167 44.4246 7 43.2377 7 42V21C7 19.7623 7.49167 18.5753 8.36683 17.7001C9.242 16.825 10.429 16.3333 11.6667 16.3333" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M28 37.3333C31.866 37.3333 35 34.1993 35 30.3333C35 26.4673 31.866 23.3333 28 23.3333C24.134 23.3333 21 26.4673 21 30.3333C21 34.1993 24.134 37.3333 28 37.3333Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_138_1570">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
        </svg>`,

    },
    {
        id: 5,
        name: 'HeadPhones',
        image: `
        <g id="Category-Headphone" clip-path="url(#clip0_138_1572)">
        <path id="Vector" d="M16.3334 30.3333H14C11.4227 30.3333 9.33337 32.4227 9.33337 35V42C9.33337 44.5773 11.4227 46.6666 14 46.6666H16.3334C18.9107 46.6666 21 44.5773 21 42V35C21 32.4227 18.9107 30.3333 16.3334 30.3333Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_3" d="M9.33337 35V28C9.33337 23.0493 11.3 18.3013 14.8007 14.8007C18.3014 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6987 11.3 41.1994 14.8007C44.7 18.3013 46.6667 23.0493 46.6667 28V35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_138_1572">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,

    },
    {
        id: 6,
        name: 'Gaming',
        image: `
        <g id="Category-Gamepad" clip-path="url(#clip0_138_1571)">
        <path id="Vector" d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M14 28H23.3333M18.6667 23.3333V32.6666" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_3" d="M35 25.6667V25.6909" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_4" d="M42 30.3333V30.3574" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_138_1571">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,

    }
];

const category = document.querySelector('.category')



const categoryItem = categories.map((item) => {
    return `
    <div class="categoryBoxes d-flex-container flex-column position-relative"> <svg  class="svg" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">${item.image}
<span class="categoryTitle d-block">${item.name}</span>
<div class="layerCategory"></div>
</div>`

}).join('')
category.innerHTML = categoryItem


const posterSection = [
    {
        title1: 'Enhance Your',
        title2: 'Music Experience',
        img: 'assets/images/products/JBL.png',
        value: true
    },
    {
        title1: 'Last Hours',
        title2: 'On sale',
        img: 'assets/images/products/jbl-2.png',
        value: false
    }
]


const posters = (products) => {

    return products.map((item) => {
        return `    <div class="row">
        <div class=" col-lg-6 col-md-12 co-sm-12 bgBlack d-flex justify-content-center flex-column">
        <div class="ms-5 posterSectionContent">
        <div class="${item.value ? "" : "text-center"}">
                <h6 class=" color-light-green my-3">Categories</h6>
                <p class="h1 text-white ">${item.title1} <br>${item.title2} </p>
            </div>
            <div class="${item.value ? "" : "d-none"} d-flex div-timer-section my-5">
                <div
                    class="d-flex-container timer-rounded text-center flex-column rounded-circle bg-white me-3">
                    <span class=" d-flex align-items-center justify-content-center">
                        <span id="" class="days fw-bolder f-size-sm">03</span>
                    </span>
                    <span class="fs-12  f-size-xsm">Days</span>
                </div>
                <div
                    class="d-flex-container timer-rounded text-center flex-column rounded-circle bg-white me-3">
                    <span class=" d-flex align-items-center justify-content-center">
                        <span id="" class="hours fw-bolder f-size-sm">23</span>
                    </span>
                    <span class="fs-12  f-size-xsm">Hours</span>
                </div>
                <div
                    class="d-flex-container timer-rounded text-center flex-column rounded-circle bg-white me-3">
                    <span class=" d-flex align-items-center justify-content-center">
                        <span id="" class="minutes fw-bolder f-size-sm">19</span>
                    </span>
                    <span class="fs-12  me-1 f-size-xsm">Minutes</span>
                </div>
                <div class="d-flex-container timer-rounded text-center flex-column rounded-circle bg-white">
                    <span id="" class="seconds fw-bolder f-size-sm">56</span>
                    <span class="fs-12  f-size-xsm">Seconds</span>
                </div>
            </div>
            <div class=" ${item.value ? "d-none" : "btn-ONposter text-center"}">
                <button class=" btn bg-light-green text-white py-2 px-5">Buy Now</button>
            </div>
        </div>
        </div>
        <div class="col-lg-6 col-md-12 co-sm-12 poster-img d-flex-container"><img class="img-fluid" src="${item.img}" alt="">

        </div>
    </div>`
    }).join("")

}
const posterProduct = posters(posterSection)
document.querySelector('.inner-poster').innerHTML = posterProduct


//navigation
const productsSectionScroll = document.getElementById('middleSection-products');
// scroll with keyboard navigation
window.addEventListener('keydown', (e) => {

    if (e.keyCode === 37) {
        productsSectionScroll.scrollLeft -= 50;
    } else if (e.keyCode === 39) {
        productsSectionScroll.scrollLeft += 50;
    }
});
// scroll with mouse navigation
const leftBtn = document.getElementById('leftBtnArrow')
const rightBtn = document.getElementById('rightBtnArrow')

leftBtn.addEventListener('mousedown', () => {
    productsSectionScroll.scrollLeft -= 50;
})
rightBtn.addEventListener('mousedown', () => {
    productsSectionScroll.scrollLeft += 50;
})