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




