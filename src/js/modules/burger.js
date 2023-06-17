const toggle = document.querySelectorAll(".menu-toggle")
const burger = document.querySelector(".header-burger")
const menu = document.querySelector(".menu")

export function init() {
    toggle.forEach(el => {
        el.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active')
                burger.classList.remove('active')
            }else{
                menu.classList.add('active')
                burger.classList.add('active')
            }
        })
    })
}