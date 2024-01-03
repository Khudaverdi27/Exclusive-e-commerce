import { getStorage } from "./login.js";
import { calcTotalCost } from "./productDetails.js";
import loading from "./spinner.js";

const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");
const contactSendBtn = document.getElementById("contactSendBtn");
const errorMessageName = document.querySelector(".errorMessageName");
const errorMessageEmail = document.querySelector(".errorMessageEmail");
const errorMessagePhone = document.querySelector(".errorMessagePhone");
const scriptURL = 'https://script.google.com/macros/s/AKfycbzubCsK4x_HIxCgU0OxPuK20R8ToQXQQ0yZhuYeDAmLoTMFPltSz7yPKOKQShGbK9ww/exec';

const form = document.forms['submit-to-google-sheet'];
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    loading()
    let value = validate()
    if (value) {
      try {
        const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
        if (response.ok) {

          contactSendBtn.textContent = "Message sent successfully!!!";
          contactSendBtn.classList.replace('bg-light-orange', 'bg-success');
          setTimeout(() => {
            contactSendBtn.textContent = "Send Message";
            contactSendBtn.classList.add('bg-light-orange', 'bg-success');
            form.reset();
          }, 3000);
        } else {
          console.error('Error! Status:', response.status);
        }
      } catch (error) {
        console.error('Error!', error.message);
      }
    }

  });
}


function validate() {
  const nameRegex = /^[a-zA-Z]{4,14}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+\d{1,15}$/;

  const inputValue = inputName.value;
  const emailValue = inputEmail.value;
  const phoneValue = inputPhone.value;
  const isValidName = nameRegex.test(inputValue);
  const isValidEmail = emailRegex.test(emailValue);
  const isValidPhone = phoneRegex.test(phoneValue);

  if (!isValidName) {
    errorMessageName.classList.remove("d-none");
  } else {
    errorMessageName.classList.add("d-none");
  }
  if (!isValidEmail) {
    errorMessageEmail.classList.remove("d-none");
  } else {
    errorMessageEmail.classList.add("d-none");
  }

  if (!isValidPhone) {
    errorMessagePhone.classList.remove("d-none");
  } else {
    errorMessagePhone.classList.add("d-none");
  }

  // Return false if any validation fails
  return isValidName && isValidEmail && isValidPhone;
}

const userName = getStorage("userName")
const placeProducts = JSON.parse(getStorage("details"))
const myOrder = document.querySelector(".myOrder")
const element = document.getElementById('hero-section')

const orderTotalcost = calcTotalCost(placeProducts)



const myOrderFunc = () => {
  let html = `    <section class="h-100 gradient-custom mt-5">
  <div class=" py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-10 col-xl-12">
        <div class="card" style="border-radius: 10px;">
          <div class="card-header px-4 py-5">
            <h5 class="text-muted mb-0">Thanks for your Order, <span style="color: #a8729a;">${userName ? userName : "Customer"}</span>!</h5>
          </div>
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0" style="color: #a8729a;">Receipt</p>
              <p class="small text-muted mb-0">Receipt Voucher : 1KAU9-84UIL</p>
            </div>`
  placeProducts?.forEach(data => {

    html += `

                <div class="card shadow-0 border mb-4">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-2 text-center">
                        <img src="${data.image}"
                          class="img-fluid" alt="Phone">
                      </div>
                      <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0">${data.name}</p>
                      </div>
                      <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small">White</p>
                      </div>
                      <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small">Category: ${data.category}</p>
                      </div>
                      <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small">Qty: 1</p>
                      </div>
                      <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small">$${data.price}</p>
                      </div>
                    </div>
                    <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">
                    <div class="row d-flex align-items-center">
                      <div class="col-md-2">
                        <p class="text-muted mb-0 small">Track Order</p>
                      </div>
                      <div class="col-md-10">
                        <div class="progress" style="height: 6px; border-radius: 16px;">
                          <div class="progress-bar" role="progressbar"
                            style="width: 65%; border-radius: 16px; background-color: #a8729a;" aria-valuenow="65"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex justify-content-around mb-1">
                          <p class="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                          <p class="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>       
    `

  });


  html += ` <div class="d-flex justify-content-between pt-2">
  <p class="fw-bold mb-0">Order Details</p>
  <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> $${orderTotalcost}</p>
</div>

<div class="d-flex justify-content-between pt-2">
  <p class="text-muted mb-0">Invoice Number : 788152</p>
  <p class="text-muted mb-0"><span class="fw-bold me-4">Discount</span> $19.00</p>
</div>

<div class="d-flex justify-content-between">
  <p class="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
  <p class="text-muted mb-0"><span class="fw-bold me-4">GST 18%</span> 123</p>
</div>

<div class="d-flex justify-content-between mb-5">
  <p class="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p>
  <p class="text-muted mb-0"><span class="fw-bold me-4">Delivery Charges</span> Free</p>
</div>
</div>
<div class="card-footer border-0 px-4 py-5"
style="background-color: #a8729a; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
<h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
  paid: <span class="h2 mb-0 ms-2">$${orderTotalcost}</span></h5>
</div>
</div>
</div>
</div>
</div>
</section>`
  if (element) {
    element.innerHTML = html
  }

}

if (placeProducts) {
  myOrder.addEventListener("click", myOrderFunc)
} else {
  if (element) {
    myOrder.addEventListener("click", () => {
      element.innerHTML = `  <section class=" container m-top-5 pt-3" >
      <div class="d-flex ">
          <p class="text-secondary me-1 fs-14">Home /</p>
          <p class="text-dark me-1 fs-14">404 Error</p>
      </div>
      <div class="d-flex-container flex-column my-5">
          <p class="fs-2">Your order list is empty :(</p>
          <p>Go to shopping</p>
          <button class="btn bg-light-orange text-white px-5 py-2 my-2" type="button">
          <a  href= "index.html" + "?" + "true"> Back to home page</a>
         </button>
      </div>
  
  </section>
  
  </section>`
    })
  }

}




