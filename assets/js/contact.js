const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");
const contactSendBtn = document.getElementById("contactSendBtn");
const errorMessageName = document.querySelector(".errorMessageName");
const errorMessageEmail = document.querySelector(".errorMessageEmail");
const errorMessagePhone = document.querySelector(".errorMessagePhone");

contactSendBtn.addEventListener("click", () => {
  const nameRegex = /^[a-zA-Z]{4,14}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@mail\.com$/;
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
    errorMessageName.classList.add("d-none");
  }
  if (!isValidPhone) {
    errorMessagePhone.classList.remove("d-none");
  } else {
    errorMessagePhone.classList.add("d-none");
  }
});
