const formContainer = document.querySelector('.formContainer')
const loginPage = () => {
    if (formContainer) {
        document.getElementById('logIn').addEventListener('click', () => {

            formContainer.innerHTML = `    <div class='mx-1 w-100'><h3 class="ms-3">Log in to Exclusive</h3>
        <p class="ms-3">Enter your details below</p>
        <div class="inputsAndBtns">
            <div class="inputs d-flex flex-column">
                <input type="text" class="borderlessInput my-3" placeholder="Email or Phone Number">
                <input type="text" class="borderlessInput my-3" placeholder="Password">
            </div>
            <div class="d-flex align-items-center justify-content-between container">
                <button class="button createBtn my-1"><a href='#'>Log in</a></button>
                <a class='text-light-orange ' href='#'>Forget Password?</a>
            </div> </div>`
        })
    }

}
loginPage()
export default loginPage
