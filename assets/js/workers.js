import { getStorage, setStorage } from "./login.js";
import { showSnackbar } from "./navbar.js";

const workers = [
  {
    id: 1,
    imgSrc: "assets/images/other/worker1.png",
    name: "Will Smith",
    position: "Founder & Chairman",
    socaialIcon1: "assets/images/svg/Group (4).svg",
    socaialIcon2: "assets/images/svg/Group (3).svg",
    socaialIcon3: "assets/images/svg/Icon-Linkedin (1).svg",
  },
  {
    id: 2,
    imgSrc: "assets/images/other/worker3.png",
    name: "Emma Watson",
    position: "Product Designer",
    socaialIcon1: "assets/images/svg/Group (4).svg",
    socaialIcon2: "assets/images/svg/Group (3).svg",
    socaialIcon3: "assets/images/svg/Icon-Linkedin (1).svg",
  },
  {
    id: 3,
    imgSrc: "assets/images/other/worker2.png",
    name: "Tom Cruise",
    position: "Managing Director",
    socaialIcon1: "assets/images/svg/Group (4).svg",
    socaialIcon2: "assets/images/svg/Group (3).svg",
    socaialIcon3: "assets/images/svg/Icon-Linkedin (1).svg",
  },
];

const worker = workers
  .map((item) => {
    return `<div class=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mx-auto text-center mt-5 ">
    <div class="workersImages">
    <img src="${item.imgSrc}" class="workersImages img-fluid w-100 h-100" alt="">
    </div>
  
    <h3>${item.name}</h3>
    <p>${item.position}</p>
    <div class="socialIcons">
    <a href=""><img src="${item.socaialIcon1}" alt=""></a>
    <a href=""><img src="${item.socaialIcon2}" alt=""></a>
    <a href=""><img src="${item.socaialIcon3}" alt=""></a>
    </div>
    </div>
    `;
  })
  .join("");

const workersCards = document.querySelector(".rowContainer");
if (workersCards) {
  workersCards.innerHTML = worker;
}

const userName = getStorage("userName");
const email = getStorage("email");
const surName = getStorage("surName");
const pass = getStorage("pass");
const adress = getStorage("adress");

const loginedUser = document.querySelector(".loginedUserName");
loginedUser ? loginedUser.textContent = userName : ""

const accountName = document.getElementById("nameArea")
const accountSurname = document.getElementById("surnameArea");
const accountMail = document.getElementById("mailArea");
const accountAdress = document.getElementById("adressArea");
const accountcurrPass = document.getElementById("currPassArea");
const accountNewPass = document.getElementById("newPassArea");
const confrimPass = document.getElementById("confrimPassArea");

const accountNameErr = document.getElementById("accountNameErr");
const accountSurnameErr = document.getElementById("accountSurnameErr");
const accountAdressErr = document.getElementById("accountAdressErr");
const accountMailErr = document.getElementById("accountMailErr");
const accountCurrPassErr = document.getElementById("accountCurrPassErr");
const accountNewPassErr = document.getElementById("accountNewPassErr");
const accountConfrimPassErr = document.getElementById("accountConfrimPassErr");


if (accountName && accountMail && accountSurname) {
  accountName.value = userName;
  accountMail.value = email;
  accountSurname.value = surName;
  accountAdress.value = adress;
}

const btn = document.querySelector(".savechangesBtn");
const cancelAccount = document.querySelector(".cancelAccount");
const editingInput = document.querySelector(".editingInput");
const snackbar = document.getElementById("snackbar");


document.getElementById('forgetPass')?.addEventListener('click', () => {
  if (snackbar) {
    showSnackbar(`${pass ? `Your password: ${pass}` : 'No password create account'}`);
  }

})
document.getElementById("MyProfile")?.addEventListener('click', () => {

  editingInput.classList.remove("d-none")
})

document.addEventListener("click", (e) => {
  if (!e.target.closest('.editingInput') && !e.target.closest('.MyProfile')) {
    editingInput?.classList.add("d-none")
  }
})



function validateAccount() {
  const nameRegex = /^[a-zA-Z]{2,25}$/;
  const addressRegex = /^[a-zA-Z0-9\s,'.-]+$/;
  const emailRegex = /^(?:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}|[0-9()+-\s]+)$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const isValidName = nameRegex.test(accountName.value);
  const isValidSurName = nameRegex.test(accountSurname.value);
  const isValidEmail = emailRegex.test(accountMail.value);
  const isValidAdress = addressRegex.test(accountAdress.value);
  const isValidNewPass = passwordRegex.test(accountNewPass.value);



  if (!isValidName) {
    accountNameErr.classList.remove("d-none");
  } else {
    setStorage("userName", accountName.value)
    accountNameErr.classList.add("d-none");
  }
  if (!isValidSurName) {
    accountSurnameErr.classList.remove("d-none");
  } else {
    setStorage("surName", accountSurname.value)
    accountSurnameErr.classList.add("d-none");
  }
  if (!isValidEmail) {
    accountMailErr.classList.remove("d-none");
  } else {
    setStorage("email", accountMail.value)
    accountMailErr.classList.add("d-none");
  }

  if (!isValidAdress) {
    accountAdressErr.classList.remove("d-none");
  } else {

    setStorage("adress", accountAdress.value)
    accountAdressErr.classList.add("d-none");
  }
  if (pass !== accountcurrPass.value) {
    accountCurrPassErr.classList.remove("d-none");
  } else {
    accountCurrPassErr.classList.add("d-none");
  }
  if (!isValidNewPass) {
    accountNewPassErr.classList.remove("d-none");
  } else {
    accountNewPassErr.classList.add("d-none");
    setStorage("newpass", accountNewPass.value)
  }
  if (accountNewPass.value !== confrimPass.value) {
    accountConfrimPassErr.classList.remove("d-none");
  } else {
    accountConfrimPassErr.classList.add("d-none");
  }

  // Check if all validations are successful
  const isAllValid = isValidName && isValidAdress && isValidSurName && isValidEmail && isValidNewPass && accountNewPass.value == confrimPass.value
  if (isAllValid) {
    Swal.fire({
      title: "Good job!",
      text: "All changes are saved",
      icon: "success"
    });
    loginedUser.textContent = accountName.value
  }

  return isAllValid;
}

btn?.addEventListener("click", validateAccount)
cancelAccount?.addEventListener("click", () => {
  accountName.value = ""
  accountSurname.value = ""
  accountMail.value = ""
  accountAdress.value = ""
  accountcurrPass.value = ""
  accountNewPass.value = ""
  confrimPass.value = ""
})