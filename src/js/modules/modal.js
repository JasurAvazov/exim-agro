export function catalog() {
    const cards = document.querySelectorAll('.catalog__wrapper-card')
    const modal = document.querySelector('.catalog__modal')
    const modalImg = document.querySelector('.catalog__modal-img img')
    const modalTitle = document.querySelector('.catalog__modal-title')
    const modalInfo = document.querySelector('.catalog__modal-info')
    const cardsClose = document.querySelectorAll('.catalog__modal-toggle')
    cards.forEach(cards => {
        cards.addEventListener('click', () => {
            let src = cards.querySelector('.catalog__wrapper-img img').getAttribute('src');
            let title = cards.querySelector('.catalog__wrapper-title').innerHTML;
            let info = cards.querySelector('p').innerHTML;
            modalImg.setAttribute('src', src);
            modalTitle.innerHTML = title;
            modalInfo.innerHTML = info
            modal.classList.add('active')
        });
    });
    cardsClose.forEach(el => {
        el.addEventListener('click', () => {
            modal.classList.remove('active')
        })
    })
}

export function certificates() {
    const cards = document.querySelectorAll('.certificates__card')
    const modal = document.querySelector('.certificates__modal')
    const modalImg = document.querySelector('.certificates__modal-img img')
    const cardsClose = document.querySelectorAll('.certificates__modal-toggle')

    cards.forEach(cards => {
        cards.addEventListener('click', () => {
            let src = cards.querySelector('.certificates__card-img img').getAttribute('src');
            modalImg.setAttribute('src', src);
            modal.classList.add('active')
        });
    });
    cardsClose.forEach(el => {
        el.addEventListener('click', () => {
            modal.classList.remove('active')
        })
    })
}