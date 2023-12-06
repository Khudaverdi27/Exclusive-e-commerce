const spinner = document.querySelector('.loader-card')
spinner.innerHTML = '<img src="./assets/images/other/loader.gif" class="card-img-top rounded" alt="loading">'

export default function loading() {
    spinner.classList.remove('d-none')
    setTimeout(() => {
        spinner.classList.add('d-none')
    }, 3000)
}