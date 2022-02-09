let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header')


menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
    document.body.classList.toggle('active')
}

window.onscroll = () => {
    if(window.innerWidth < 1200) {
        menu.classList.remove('fa-times')
        navbar.classList.remove('active')
        document.body.classList.remove('active')
    }
}