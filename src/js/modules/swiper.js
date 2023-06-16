import Swiper, { Autoplay } from 'swiper';

const swiper = new Swiper('.about-swiper', {
    modules: [Autoplay],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
