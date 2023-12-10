const spinner = document.querySelector('.loader-card')
spinner.innerHTML = '<img src="./assets/images/other/loader.gif" class="card-img-top rounded" alt="loading">'

function loading() {
    spinner.classList.remove('d-none')
    setTimeout(() => {
        spinner.classList.add('d-none')
    }, 3000)
}

function showSnackbar(message, message2, timeout) {
    snackbar.className = "show";
    snackbar.innerHTML = `<h6>${message}</h6>`;
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, timeout);
}

export { loading, showSnackbar }