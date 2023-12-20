const footerContainer = document.querySelector(".footerContainer");

const footer = () => {
    const div = document.createElement("div");

    div.innerHTML = `
     <div class="container fs-14">
        <div class="footerSection row footerRes ">
            <div class="my-4 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3">

                <a href="#">
                    <h5 class="text-white mb-4">Exclusive</h5>
                </a>
                <p><a href="" class="text-white">Subscribe</a></p>
                <p class="text-white">Get 10% off your first order</p>
                <span class="position-relative">
                    <input type="text" placeholder="Enter your email" class=" bg-dark inputEmail ">
                    <span class="iconSend position-absolute"><img src="assets/images/svg/icon-send.svg" alt=""></span>
                </span>
            </div>
            <hr class="borderHr d-block d-sm-none d-md-none d-xl-none d-xxl-none ">
            <div class="my-4 col-sm-6 col-md-6 col-lg-6 col-xl-2 col-xxl-2">

                <h5 class="text-white mb-4">Support</h5>
                <p class="text-white">111 H.Aliyev Avenue, Baku, AZ 1515, Azerbaijan.</p>
                <p class="text-white">exclusive@gmail.com</p>
                <p class="text-white">+994-88-888-99-99</p>

            </div>
            <hr class="borderHr d-block d-md-block d-sm-block d-xl-none d-xxl-none">
            <div class="my-4 col-sm-6 col-md-4 col-lg-4 col-xl-2 col-xxl-2">

                <h5 class="text-white mb-4">Account</h5>
                <p><a class="text-white" href="">My Account</a></p>
                <p><a class="text-white" href="">Login / Register</a></p>
                <p><a class="text-white" href="">Cart</a></p>
                <p><a class="text-white" href="">Wishlist</a></p>
                <p><a class="text-white" href="">Shop</a></p>

            </div>
            <hr class="borderHr d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none ">
            <div class="my-4 col-sm-6 col-md-4 col-lg-4 col-xl-2 col-xxl-2">

                <h5 class="text-white mb-4">Quick Link</h5>
                <p><a class="text-white" href="">Privacy Policy</a></p>
                <p><a class="text-white" href="">Terms Of Use</a></p>
                <p><a class="text-white" href="">FAQ</a></p>
                <p><a class="text-white" href="">Contact</a></p>

            </div>
            <hr class="borderHr d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none ">
            <div class="my-4 col-sm-12 col-md-4 col-xl-3 col-lg-4 col-xl-3 col-xxl-3 ">

                <h5 class="text-white mb-4">Download App</h5>
                <p class="text-light saveApp">Save $3 with App New User Only</p>
                <div class="qrAndStores d-flex  ">
                    <a href=""><img src="assets/images/other/Qr Code (1).png" alt=""></a>
                    <div class="stores d-flex flex-column  gap-2 ms-2">
                        <a href=""><img src="assets/images/icon/download-appstore.png" alt=""></a>
                        <a href=""><img
                                src="assets/images/icon/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo (1).png"
                                alt=""></a>
                    </div>
                </div>
                <div class="socialMedia d-flex gap-4 mt-2">
                    <a href="#"><img src="assets/images/svg/Icon-Facebook.svg" alt=""></a>
                    <a href="#"><img src="assets/images/svg/Icon-Linkedin.svg" alt=""></a>
                    <a href="#"><img src="assets/images/svg/Group (1).svg" alt=""></a>
                    <a href="#"><img src="assets/images/svg/Group (2).svg" alt=""></a>
                </div>
            </div>
            <hr class="borderHr d-none d-md-block col-lg-none d-xl-none">
            </div>
            </div>
            <p class="text-white text-center mt-5"> © Copyright Exclusive 2023. All right reserved</p>`;
    footerContainer.appendChild(div);
};
footer();


