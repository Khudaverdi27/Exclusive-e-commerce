import loginIcon from "./navbar.js";
const formContainer = document.querySelector('.formContainer');

const loginPage = () => {
    if (formContainer) {
        document.getElementById('logIn').addEventListener('click', (event) => {
            event.preventDefault();

            formContainer.innerHTML = `   
            <div class='me-3 w-100 my-2'>
                <h3 class="ms-2">Log in to Exclusive</h3>
                <p class="ms-3">Enter your details below</p>
                <form class="inputsAndBtns" name="form">
                    <div class="inputs d-flex flex-column">
                        <input name="email" type="text" class="borderlessInput mt-3 mb-1 py-2 ps-1" placeholder="Email or Phone Number">
                        <div id="email_error" class='fs-14 text-danger bg-light-red rounded px-2 d-none'>Please fill up your e-mail or phone number</div>
                        <input name="password" type="password" class="borderlessInput mt-3 mb-1 w-100 py-2 ps-1" placeholder="Password">
                        <div id="pass_error" class='fs-14 text-danger bg-light-red rounded px-2 d-none'>It must contain only numbers, lowercase and uppercase letters, and the total number of characters must be at least 8.</div>
                        <div class="d-flex align-items-center justify-content-between container mt-3">
                            <button type='submit' class="button createBtn my-1">Log in</button>
                            <a class='text-light-orange ' href='#'>Forget Password?</a>
                        </div>
                    </div>
                </form>
            </div>`;
            // forum validation
            const selectors = {
                form: document.forms['form'],
                email: document.forms['form']['email'],
                pass: document.forms['form']['password'],
                pass_error: document.getElementById('pass_error'),
                email_error: document.getElementById('email_error')
            };

            selectors.email.addEventListener('input', email_verify);
            selectors.pass.addEventListener('input', pass_verify);

            selectors.form.addEventListener('submit', (e) => {
                e.preventDefault();
                validateForm();
            });

            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

            function validateForm() {

                if (!validateInput(selectors.email, selectors.email_error, emailRegex)) {
                    return // else; 
                }

                if (!validateInput(selectors.pass, selectors.pass_error, passwordRegex)) {
                    return;
                }

                const value = Boolean(true);
                const queryString = new URLSearchParams(value).toString()
                window.location.href = "header.html?" + queryString;

            }

            function validateInput(input, errorElement, regex) {
                if (!regex.test(input.value)) {
                    input.classList.add('border', 'border-danger');
                    errorElement.classList.remove('d-none');
                    input.focus();
                    return false;
                } else {
                    input.classList.remove('border', 'border-danger');
                    errorElement.classList.add('d-none');

                    return true;

                }

            }

            function email_verify() {
                validateInput(selectors.email, selectors.email_error, emailRegex);
            }

            function pass_verify() {
                validateInput(selectors.pass, selectors.pass_error, passwordRegex);
            }
        });
    }
};

loginPage();







export default loginPage
