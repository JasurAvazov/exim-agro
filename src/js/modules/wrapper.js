const btns = document.querySelectorAll('.catalog__tabs-btn')
const lists = document.querySelectorAll('.catalog__wrapper')

export function init(){
    btns.forEach(el => {
        el.addEventListener('click', () => {
            btns.forEach(remove => remove.classList.remove('active'))
            lists.forEach(remove => remove.classList.remove('active'))
            let attribute = el.getAttribute('value')
            const list = document.getElementById('catalog'+attribute)
            list.classList.add('active')
            el.classList.add('active')
        })
    })
}