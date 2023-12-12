
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
                    <div class="inputs d-flex flex-column position-relative">
                        <input name="email" type="text" class="borderlessInput mt-3 mb-1 py-2 ps-1" placeholder="Email or Phone Number">
                        <div id="email_error" class='fs-12 text-danger bg-light-red rounded px-2 d-none'>Please fill up your e-mail or phone number</div>
                        <input id="inputPassLoginPage" name="password" type="password" class="borderlessInput mt-1 mb-1 w-100 py-2 ps-1" placeholder="Password">
                        <i id="eyeIconLogin" class="position-absolute fs-5 text-secondary fa-solid fa-eye-slash"></i>
                        <div id="pass_error" class='fs-12 text-danger bg-light-red rounded px-2 d-none'>Must be only numbers, lowercase and uppercase letters, and total  characters at least 8.</div>
                        <div class="d-flex align-items-center justify-content-between container mt-3">
                            <button type='submit' class="button createBtn my-1">Log in</button>
                            <a class='text-light-orange ' href='#'>Forget Password?</a>
                        </div>
                    </div>
                </form>
            </div>`;
            showAndHidePassword("eyeIconLogin", "inputPassLoginPage")
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

                const spinner = document.querySelector('.loader-card')
                spinner.classList.remove('d-none')
                setTimeout(() => {
                    spinner.classList.add('d-none')
                    window.location.href = "header.html?" + queryString;
                }, 3000)



            }
            // form input class changes
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


function showAndHidePassword(eyeIconId, passInputId) {
    const icon = document.getElementById(eyeIconId);
    const inputPass = document.getElementById(passInputId);
    if (icon) {
        icon.addEventListener('click', () => {
            const isPassword = inputPass.type === "password";
            inputPass.type = isPassword ? "text" : "password";

            const removeClass = isPassword ? 'fa-eye-slash' : 'fa-eye';
            const addClass = isPassword ? 'fa-eye' : 'fa-eye-slash';

            icon.classList.remove('fa-solid', removeClass);
            icon.classList.add('fa-solid', addClass);
        });
    }

}



// from html
showAndHidePassword('eyeIconAccountPage', 'passInputAccountPage')

loginPage();
