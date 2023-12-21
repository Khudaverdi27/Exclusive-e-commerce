
const formContainer = document.querySelector('.formContainer');
const spinner = document.querySelector('.loader-card')

const createloginUi = () => {
    formContainer.innerHTML = `  
    <div id="snackbar"> 
    </div>

    <div class='me-3  my-2'>
    <h3 class="ms-2">Log in to Exclusive</h3>
    <p class="ms-3">Enter your details below</p>
    <form data-form='login' class="inputsAndBtns" name="form">
        <div class="inputs d-flex flex-column ">
            <div class="my-3">
                <input data-email="emailLogin" name="email" type="text"
                    class="borderlessInput form-control mt-3 mb-1 py-2 ps-1" id="exampleFormControlInput1"
                    placeholder="Email or Phone Number">
            </div>
            <div id="email_error" class='fs-12 text-danger bg-light-red rounded px-2 d-none'>Wrong email or password
            </div>
            <div class="input-group mb-1">
                <input id="inputPassLoginPage" type="password" name="password"
                    class="form-control  borderlessInput py-2 ps-1" placeholder="Password"
                    aria-label="Recipient's Password" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2"> <i id="eyeIconLogin"
                        class="crusor-p fs-5 p-0 text-secondary fa-solid fa-eye-slash"></i></span>
            </div>
            <div id="pass_error" class='fs-12 text-danger bg-light-red rounded px-2 d-none'>Wrong email or password
            </div>
            <div class="d-flex align-items-center justify-content-between container mt-3">
                <button id='createBtn' type='submit' class="button createBtn my-1">Log in</button>
                <a id="forgetPass" class='text-light-orange ' href='#'>Forget Password?</a>
            </div>
        </div>
    </form>
</div>`;
}
export default createloginUi

const loginPage = () => {
    const login = document.getElementById('logIn');
    const createBtn = document.getElementById('createBtn');

    if (login || createBtn) {
        const targetButton = login || createBtn;

        targetButton.addEventListener('click', (event) => {
            event.preventDefault();
            createloginUi()
            showAndHidePassword("eyeIconLogin", "inputPassLoginPage")
            // forum validation
            const selectors = {
                form: document.forms['form'],
                email: document.forms['form']['email'],
                pass: document.forms['form']['password'],
                pass_error: document.getElementById('pass_error'),
                email_error: document.getElementById('email_error')
            };
            selectElement(selectors.form, selectors.email, selectors.email_error, selectors.pass, selectors.pass_error)
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
    return true
}

loginPage();





function selectElement(form, email, email_error, pass, pass_error, nameInput, name_error) {

    const emailRegex = /^(?:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}|[0-9()+-\s]+)$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const nameRegex = /^[a-zA-Z0-9_\-'.()&!*$][a-zA-Z0-9\s_\-'.()&!*$]*[a-zA-Z0-9_\-'.()&!*$]$/;
    if (email) {
        email.addEventListener('input', email_verify);
    }
    if (pass) {
        pass.addEventListener('input', pass_verify);
    }

    if (nameInput) {
        nameInput.addEventListener('input', name_verify);
    }
    let localEmail = getStorage('email')
    let localPass = getStorage('pass')

    if (form) {
        const id = form.getAttribute('data-form');
        if (id == 'login') {
            form.addEventListener('submit', (e) => {
                // 

                e.preventDefault();
                if (localEmail == email.value && localPass == pass.value) {
                    const value = validateForm();
                    if (value) {
                        setSpinner()
                    }
                } else {
                    email_error.classList.remove('d-none')
                    pass_error.classList.remove('d-none')
                }



            });
            document.getElementById('forgetPass').addEventListener('click', () => {
                const snackbar = document.getElementById("snackbar");
                snackbar.className = "show";
                snackbar.innerHTML = `
                ${localEmail ? 'Your login: ' + localEmail : 'Please create account'} <br>
                ${localPass ? 'Your password: ' + localPass : ''}
              `;
                // After 3 seconds, remove the show class from DIV
                setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
            })

        } else {
            document.querySelector('.signBtn').addEventListener('click', (e) => {
                e.preventDefault();
                setStorage('email', (email.value))
                setStorage('pass', (pass.value))
                // sessionStorage.setItem('email', (email.value))
                // sessionStorage.setItem('pass', (pass.value))
                const value = validateForm();
                spinner.classList.remove('d-none')
                setTimeout(() => {
                    spinner.classList.add('d-none')
                    if (value) {
                        createloginUi()
                        formContainer.innerHTML += '<span class="text-success">Your account has been successfully created, please log in.<span/>'
                        const log = loginPage()
                        if (log) {
                            validateForm()
                        }
                    }
                }, 1000)


            })

        }
    }

    function validateForm() {
        if (nameInput) {
            if (!validateInput(nameInput, name_error, nameRegex)) {
                return;// else; 
            }
        }

        if (!validateInput(email, email_error, emailRegex)) {
            return;// else; 
        }

        if (!validateInput(pass, pass_error, passwordRegex)) {
            return;// else; 
        }


        return true
    }

    function setSpinner() {
        const value = Boolean(true);
        const queryString = new URLSearchParams(value).toString()
        spinner.classList.remove('d-none')
        setTimeout(() => {
            spinner.classList.add('d-none')
            window.location.href = "index.html?" + queryString;
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
        validateInput(email, email_error, emailRegex);
    }

    function pass_verify() {
        validateInput(pass, pass_error, passwordRegex);
    }
    function name_verify() {
        validateInput(nameInput, name_error, nameRegex);
    }



}

export const setStorage = (key, value) => {
    sessionStorage.setItem(key, (value))
}
export const getStorage = (key) => {
    return (sessionStorage.getItem(key));
}

// from html
showAndHidePassword('eyeIconAccountPage', 'input-pass-sign')


const uiHtml = {
    form: document.getElementById('form-sign'),
    name: document.getElementById('input-name-sign'),
    name_error: document.getElementById('signName_error'),
    email: document.getElementById('input-email-sign'),
    pass: document.getElementById('input-pass-sign'),
    pass_error: document.getElementById('signPass_error'),
    email_error: document.getElementById('signEmail_error')
}


selectElement(uiHtml.form, uiHtml.email, uiHtml.email_error,
    uiHtml.pass, uiHtml.pass_error, uiHtml.name, uiHtml.name_error)


