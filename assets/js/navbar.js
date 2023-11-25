const navbarContainer = document.querySelector('.header-top');

const navbar = () => {
    const div = document.createElement('div');
    div.innerHTML = `
    <!-- top header -->
    <div class="d-flex justify-content-around header-top-content  ">
        <p class="nav text-white fs-14 align-items-center d-inline mt-2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span><a href="#" class=" fw-bold text-white">ShopNow</a></span>
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
            <a class="navbar-brand" href="header.html"><img src="assets/images/logo/Logo.png" alt=""></a>
 
            <div class="collapse show " id="navbarNav">
                <ul class="navbar-nav  mt-1 mb-lg-0 nav-underline crusor-p fs-16 ">
                    <li class="nav-item">
                        <a class="nav-link " href="header.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="singUp.html">Sign up</a>
                    </li>
                </ul>
            </div>
            <!-- input field and icon in navbar -->
            <div class="input-section">
                <form class="d-flex" role="search">
                    <div class="position-relative">
                        <input class="form-control me-2 p-1 bg-solid-secondary position-relative"
                            placeholder="What are you looking for?" type="search" aria-label="Search">
                        <img src="assets/images/svg/searcg-icon.svg" class="position-absolute search-icon crusor-p"
                            alt="">
                    </div>
                    <div class="input-svg d-flex">
                        <img src="assets/images/svg/Wishlist.svg" class="ms-2 crusor-p" alt="">
                        <img src="assets/images/svg/Cart1.svg" class="ms-1 crusor-p" alt="">
                        <button class=" navbar-toggler border-0 fs-16 p-0 shadow-none" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </nav>
    `;

    navbarContainer.appendChild(div);
};

navbar();

export default navbar;
