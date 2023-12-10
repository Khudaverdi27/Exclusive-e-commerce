import { products, ourProducts, bestProducts, map } from "./displayProducts.js";
import showSnackbar from './spinner.js'


const navbarContainer = document.querySelector('.header-top');
let boolean = window.location.search.startsWith('?true');

const navbar = () => {
    if (navbarContainer) {
        navbarContainer.innerHTML = `
    <!-- top header -->
    <div class="d-flex justify-content-around header-top-content  ">
        <p class="nav text-white fs-14 align-items-center d-inline mt-2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span><a href="${boolean ? "header.html" + "?" + "true" : "sign-Up.html"}" class=" fw-bold text-white">ShopNow</a></span>
        </p>
        <ul class="nav nav-tabs border-0">
            <li class="nav-item dropdown fs-14">
                <a class="nav-link dropdown-toggle text-white border-0" data-bs-toggle="dropdown" href="#"
                    role="button" aria-expanded="false">English</a>
                <ul class="dropdown-menu fs-14 p-0">
                    <li><a class="dropdown-item p-0" href="#">Turkish</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg bg-white border-bottom">
        <div class=" container-fluid d-flex justify-content-around">
            <a class="navbar-brand" href= ${boolean ? "header.html" + "?" + "true" : "header.html"}><img src="assets/images/logo/Logo.png" alt=""></a>
 
            <div class="collapse show " id="navbarNav">
                <ul class="navbar-nav  mt-1 mb-lg-0 nav-underline crusor-p fs-16 ">
                    <li class="nav-item">
                        <a class="nav-link " href= ${boolean ? "header.html" + "?" + "true" : "header.html"}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href= ${boolean ? "contact.html" + "?" + "true" : "contact.html"}>Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href= ${boolean ? "about.html" + "?" + "true" : "about.html"}>About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href= ${boolean ? "sign-Up.html" + "?" + "true" : "sign-Up.html"}>Sign up</a>
                    </li>
                </ul>
            </div>
            <!-- input field and icon in navbar -->
            <div class="input-section ">
                <div class="d-flex justify-content-between" role="search">
                    <div class="position-relative">
                        <input id="searchInput" class="srch-input form-control me-2 p-1 bg-solid-secondary position-relative"
                            placeholder="What are you looking for?" type="search" aria-label="Search">
                        <img id="search-icon" src="assets/images/svg/searcg-icon.svg" class="position-absolute search-icon crusor-p"
                            alt="">
                    </div>
                    <div class="input-svg d-flex justify-content-between position-relative">
                    <a href= ${boolean ? "wishlist.html" + "?" + "true" : "sign-Up.html"}>
                    <span class="position-absolute top-0 mt-1 translate-middle badge badge-wishlist rounded-pill bg-danger ${boolean ? "d-block" : "d-none"}">0</span>
                    <img src="assets/images/svg/Wishlist.svg" class="ms-1 crusor-p" alt="">
                    </a>
                        <a href= ${boolean ? "cart.html" + "?" + "true" : "sign-Up.html"}>
                        <img src="assets/images/svg/Cart1.svg" class="mx-2  crusor-p" alt="">
                        </a>
                        <a class="${boolean ? "d-block" : "d-none"}" href='#'><img src="assets/images/svg/user.svg" class="userIcon  crusor-p" alt=""></a>
                        
                        <div id="profile-dropdown" class="card border-0 card-dropdown position-absolute d-none" style="width: 15rem;">
                        <div class="card-body rounded bg-linear p-3">
                            <a href="#">
                                <div class="d-flex ">
                                    <figure><img src="./assets/images/svg/user-dropdown.svg" alt=""></figure>
                                    <span class="fs-14 ms-2 ps-2">Manage My Account</span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="d-flex">
                                    <figure class="me-4"><img src="./assets/images/svg/Group-order.svg" alt=""></figure>
                                    <span class="fs-14 ps-1">My Order</span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="d-flex">
                                    <figure class="me-4"><img src="./assets/images/svg/icon-cancel.svg" alt=""></figure>
                                    <span class="fs-14 ">My Cancellations</span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="d-flex">
                                    <figure class="me-4"><img src="./assets/images/svg/Icon-Reviews.svg" alt=""></figure>
                                    <span class="fs-14 ">My Reviews</span>
                                </div>
                                <a href="#">
                                    <div id="logoutProfile" class="d-flex">
                                        <figure class="me-4"><img src="./assets/images/svg/Icon-logout.svg" alt=""></figure>
                                        <span class="fs-14 ">Logout</span>
                                    </div>
                                </a>
                        </div>
                    </div>
                        <button class="ms-2 navbar-toggler border-0 fs-3 p-0 shadow-none" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;
    }


    // profile dropdown
    document.querySelector('.userIcon').addEventListener('click', () => {
        const dropdown = document.getElementById('profile-dropdown');
        if (dropdown.classList.contains('d-none')) {

            dropdown.classList.remove('d-none');
        } else {
            dropdown.classList.add('d-none');
        }
    });
    document.getElementById('logoutProfile').addEventListener('click', () => {
        const spinner = document.querySelector('.loader-card')
        spinner.style.top = '4%'
        spinner.classList.remove('d-none')

        setTimeout(() => {
            spinner.classList.add('d-none')
            window.location.href = "sign-Up.html"
            boolean = false
            navbar()
        }, 3000)

    });

};


navbar();
function searchArrays() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const result = [];

    const allProducts = [...products, ...ourProducts, ...bestProducts];

    allProducts.forEach(item => {
        if (item.name.toLowerCase().includes(searchInput) && searchInput != '') {
            result.push(item);
        }
    });

    const heroSection = document.getElementById('hero-section')
    const product = map(result);

    if (heroSection) {

        heroSection.classList.add('m-top-10', 'mb-5', 'd-flex-container', 'flex-wrap',)


        heroSection.innerHTML = product ? product :
            `    <section class=" container" >
        <div class="d-flex ">
            <p class="text-secondary me-1 fs-14">Home /</p>
            <p class="text-dark me-1 fs-14">404 Error</p>
        </div>
        <div class="d-flex-container flex-column my-5">
            <p class="fs-error">404 Not Found</p>
            <p>Your visited page not found. You may go home page.</p>
            <button class="btn bg-light-orange text-white px-5 py-2 my-2" type="button">
            <a  href= ${boolean ? "header.html" + "?" + "true" : "header.html"}> Back to home page</a>
           </button>
        </div>

    </section>

</section>`;
    }

}
document.getElementById('search-icon').addEventListener('click', searchArrays);
document.getElementById('searchInput').addEventListener('keypress', (e) => e.key === 'Enter' && searchArrays());

const previousPageURL = document.referrer;
if (previousPageURL.endsWith('.html')) {
    const { pathname } = new URL(previousPageURL);
    const start = pathname.slice(0, 14);
    const end = pathname.slice(-5);
    const startIndex = pathname.indexOf(start) + start.length;
    const endIndex = pathname.indexOf(end);

    const currentPage = document.querySelector('.currentPage');
    const arrivingPage = document.querySelector('.arrivingPage');

    if (arrivingPage && currentPage && startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
        const resultPath = pathname.substring(startIndex, endIndex);
        let result = resultPath.charAt(0).toUpperCase() + resultPath.slice(1);

        if (result === 'Header') {
            result = '/ Home';
        } else if (result === 'ProductDetails') {
            result = 'Details /';
        }

        if (currentPage.textContent.trim() !== result.trim()) {
            arrivingPage.textContent = `${result} / `;
        } else {
            arrivingPage.textContent = '/';
        }
    }

}

let existingData = JSON.parse(sessionStorage.getItem('sendToWishlist')) || [];
const snackbar = document.getElementById("snackbar");
updateBadge();

function setLocale(data, id) {
    const isItemInWishlist = existingData.some(item => item.id === id);

    if (!isItemInWishlist) {
        addProductToWishlist(data);
    } else {
        removeProductFromWishlist(id);
    }

    updateBadge();
}

function addProductToWishlist(data) {
    existingData.push(data);
    updateSessionStorageAndShowSnackbar("Product is added to wishlist");
}

function removeProductFromWishlist(id) {
    existingData = existingData.filter(item => item.id !== id);
    updateSessionStorageAndShowSnackbar("Product is removed from wishlist", 4000);
}

function updateSessionStorageAndShowSnackbar(message, timeout = 3000) {
    sessionStorage.setItem('sendToWishlist', JSON.stringify(existingData));
    showSnackbar(message, timeout);
}



function updateBadge() {
    document.querySelector('.badge-wishlist').textContent = existingData.length;
}





export default setLocale



