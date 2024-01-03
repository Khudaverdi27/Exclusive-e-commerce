import { uniqueObjects } from "./cart.js";
import { products, ourProducts, bestProducts, map, productsByIndex } from "./displayProducts.js";
import loading from "./spinner.js";

const navbarContainer = document.querySelector('.header-top');
let boolean = window.location.search.startsWith('?true');

const navbar = () => {
    if (navbarContainer) {
        navbarContainer.innerHTML = `
    <!-- top header -->
    <div class="d-flex justify-content-around header-top-content  ">
    <p class="nav text-white fs-14 align-items-center d-inline mt-2">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span><a href="${boolean ? " index.html" + "?" + "true" : "sign-Up.html"}"
                class=" fw-bold text-white">ShopNow</a></span>
    </p>
    <ul class="nav nav-tabs border-0">
        <li class="nav-item dropdown fs-14 toaster">
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
        <a class="navbar-brand mb-2 ms-2" href=${boolean ? "index.html" + "?" + "true" : "index.html"}><img
                src="assets/images/logo/Logo.png" alt=""></a>

        <div class=" " id="navbarNav">
            <ul class="navbar-nav navbarDesktop mt-1 mb-lg-0 nav-underline crusor-p fs-16 ">
                <li class="nav-item">
                    <a class="nav-link " href=${boolean ? "index.html" + "?" + "true" : "index.html"}>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=${boolean ? "contact.html" + "?" + "true" : "contact.html"
            }>Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=${boolean ? "about.html" + "?" + "true" : "about.html"}>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=${boolean ? "sign-Up.html" + "?" + "true" : "sign-Up.html"}>Sign
                        up</a>
                </li>
            </ul>

            <div class="offcanvas offcanvas-start navbar-responsive bg-linear h-100" tabindex="-1"
                id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <a class="navbar-brand ms-4" href=${boolean ? "index.html" + "?" + "true" : "index.html"}><img
                            src="assets/images/logo/Logo.png" alt=""></a>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <ul class="navbar-nav mt-1 mb-lg-0 nav-underline crusor-p fs-5 ">
                            <li class="nav-item">
                                <a class="nav-link" href=${boolean ? "index.html" + "?" + "true" : "index.html"}>Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=${boolean ? "contact.html" + "?" + "true"
                : "contact.html"}>Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=${boolean ? "about.html" + "?" + "true" : "about.html"
            }>About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=${boolean ? "sign-Up.html" + "?" + "true"
                : "sign-Up.html"}>Sign
                                    up</a>
                            </li>
                        </ul>

                    </div>
                    <div>
                        <ul class="list-group left-navbar toaster">
                            <li class="list-group-item border-0 ">
                                <a class="d-flex justify-content-between link-underline-light text-solid-secondary"
                                    href="#">Woman’s
                                    Fashion
                                    <img class="left-navbar-icons" src="assets/images/svg/arrowRight.svg"
                                        alt="">
                                </a>
                            </li>
                            <li class="list-group-item border-0 ">
                                <a class="d-flex justify-content-between link-underline-light text-solid-secondary"
                                    href="#">Men’s
                                    Fashion
                                    <img class="left-navbar-icons" src="assets/images/svg/arrowRight.svg"
                                        alt="">
                                </a>
                            </li>
                            <li class="list-group-item border-0 ">
                                <a class="link-underline-light text-solid-secondary" href="#">Electronics

                                </a>
                            </li>
                            <li class="list-group-item border-0 ">
                                <a class="link-underline-light text-solid-secondary" href="#">Home & Lifestyle

                                </a>
                            </li>
                            <li class="list-group-item border-0 ">
                                <a class="link-underline-light text-solid-secondary" href="#">Medicine

                                </a>
                            </li>
                            <li class="list-group-item border-0 ">
                                <a class="link-underline-light text-solid-secondary" href="#">Sports & Outdoor

                                </a>
                            </li>
                            <li class="list-group-item border-0 ">
                                <a class="link-underline-light text-solid-secondary" href="#">Baby’s & Toys

                                </a>
                            </li>
                            <li class="list-group-item border-0 ">
                                <a class="link-underline-light text-solid-secondary" href="#">Groceries & Pets

                                </a>
                            </li>
                            <li class="list-group-item border-0 ">
                                <a class="link-underline-light text-solid-secondary" href="#">Health & Beauty

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- input field and icon in navbar -->
        <div class="input-section ">
            <div class="d-flex justify-content-between align-items-center" role="search">
                <div class="input-group">
                    <input id="searchInput" type="search"
                        class="form-control srch-input bg-solid-secondary border border-end-0"
                        placeholder="What are you looking for?" aria-label="Search"
                        aria-describedby="basic-addon2">
                    <span class="input-group-text bg-solid-secondary " id="basic-addon2"><img id="search-icon"
                            src="assets/images/svg/searcg-icon.svg" class="search-icon crusor-p" </span>
                </div>

                <div class="input-svg d-flex justify-content-between position-relative">
                    <a href=${boolean ? "wishlist.html" + "?" + "true" : "sign-Up.html"}>
                        <span
                            class="position-absolute top-0 mt-1 translate-middle badge badge-wishlist rounded-pill bg-danger ${boolean ?
                "d-block" : "d-none"}">0</span>
                        <img src="assets/images/svg/Wishlist.svg" class="ms-1 crusor-p" alt="">
                    </a>
                    <a href=${boolean ? "cart.html" + "?" + "true" : "sign-Up.html"}>
                    <span
                    class="position-absolute top-0 mt-1 translate-middle badge badge-cart rounded-pill bg-danger ${boolean ?
                "d-block" : "d-none"}">0</span>
                        <img src="assets/images/svg/Cart1.svg" class="mx-2  crusor-p" alt="">
                    </a>
                    <a class="${boolean ? "d-block" : "d-none"}" href='#'><img
                            src="assets/images/svg/user.svg" class="userIcon  crusor-p" alt=""></a>

                    <div id="profile-dropdown" class="card border-0 card-dropdown position-absolute d-none"
                        style="width: 15rem;">
                        <div class="card-body rounded bg-linear p-3">
                            <a href=${boolean ? "account.html" + "?" + "true" : "sign-Up.html"}>
                                <div class="d-flex ">
                                    <figure ><img src="./assets/images/svg/user-dropdown.svg" alt=""></figure>
                                    <span class="fs-14 ms-2 ps-2">Manage My Account</span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="d-flex myOrder">
                                    <figure class="me-4"><img src="./assets/images/svg/Group-order.svg" alt="">
                                    </figure>
                                    <span class="fs-14 ps-1">My Order</span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="d-flex">
                                    <figure class="me-4"><img src="./assets/images/svg/icon-cancel.svg" alt="">
                                    </figure>
                                    <span class="fs-14 ">My Cancellations</span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="d-flex">
                                    <figure class="me-4"><img src="./assets/images/svg/Icon-Reviews.svg" alt="">
                                    </figure>
                                    <span class="fs-14 ">My Reviews</span>
                                </div>
                                <a href="#">
                                    <div id="logoutProfile" class="d-flex">
                                        <figure class="me-4"><img src="./assets/images/svg/Icon-logout.svg"
                                                alt=""></figure>
                                        <span class="fs-14 ">Logout</span>
                                    </div>
                                </a>
                        </div>
                    </div>
                    <button class="ms-2 navbar-toggler border-0 fs-3 p-0 shadow-none" type="button"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
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
    const dropdown = document.getElementById('profile-dropdown');
    const userIcon = document.querySelector('.userIcon');

    userIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // This line ensures that the click event is forwarded to other listeners.
        dropdown.classList.toggle('d-none');
    });

    document.querySelector('body').addEventListener('click', () => {
        dropdown.classList.add('d-none');
    });


    document.getElementById('logoutProfile').addEventListener('click', () => {
        loading()
        setTimeout(() => {
            window.location.href = "sign-Up.html"
        }, 1000)

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
            <a  href= ${boolean ? "index.html" + "?" + "true" : "index.html"}> Back to home page</a>
           </button>
        </div>

    </section>

</section>`;
        productsByIndex(result, '.products-container', true)
    }

}
document.getElementById('search-icon').addEventListener('click', searchArrays);
document.getElementById('searchInput').addEventListener('keypress', (e) => e.key === 'Enter' && searchArrays());


export const changePath = () => {
    const currentPage = document.querySelector('.currentPage');
    const arrivingPage = document.querySelector('.arrivingPage');
    const previousPageURL = document.referrer;

    if (previousPageURL.endsWith('.html') || previousPageURL.endsWith('.html?true')) {
        const { pathname } = new URL(previousPageURL);
        const match = pathname.match(/\/([^\/]+)\.html/);

        if (arrivingPage && currentPage && match) {
            let result = match[1].replace(/^./, match[1][0].toUpperCase());
            result = result === "Index" ? "Home" : result === "ProductDetails" ? "Details" : result;
            arrivingPage.textContent = currentPage.textContent.trim() !== result.trim() ? `${result} / ` : '/';
        }
    }
}

changePath();



export const updateBadge = () => {
    document.querySelector('.badge-wishlist').textContent = existingData.length;
    document.querySelector('.badge-cart').textContent = uniqueObjects.length
}


let existingData = JSON.parse(sessionStorage.getItem('sendToWishlist')) || [];
export let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
const snackbar = document.getElementById("snackbar");
updateBadge();

export const setLocale = (data, id, attr) => {

    const isItemInWishlist = existingData.some(item => item.id === id);
    // const isItemCart = cartItems.some(item => item.id === id);

    if (!attr) {

        if (!isItemInWishlist) {
            addProductToList(data);
        } else {
            removeProductFromWishlist(id);
        }

        updateBadge();
    } else {
        addProductToList(data, attr);

    }

}

export const addProductToList = (data, attr) => {
    if (!attr) {
        existingData.push(data);
        updateStorage("Product is added to wishlist");
    } else {
        cartItems.push(data);
        updateStorage("Product is added to cart", attr);

    }

}

export const removeProductFromWishlist = (id, attr) => {

    if (!attr) {

        existingData = existingData.filter(item => item.id !== id);
        updateStorage("Product is removed from wishlist");
    }
    else {
        cartItems = cartItems.filter(item => item.id !== id);
        updateStorage("Product is removed from cart", attr);
    }

}



export const updateStorage = (message, attr) => {
    if (!attr) {

        sessionStorage.setItem('sendToWishlist', JSON.stringify(existingData));
        showSnackbar(message);
    } else {
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        showSnackbar(message);
    }

}

export const showSnackbar = (message) => {

    if (snackbar) {
        snackbar.className = "show";
        snackbar.innerHTML = `<h6>${message}</h6>`;
        setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
    }

}






