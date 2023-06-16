import Swiper, { Autoplay, Navigation } from "swiper";

export function init() {
	const about = new Swiper(".about-swiper", {
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
    const advantages = new Swiper(".advantages-swiper", {
		modules: [Navigation],
		slidesPerView: 4,
		spaceBetween: 30,
		speed: 600,
        navigation: {
            nextEl: '.advantages-button-next',
            prevEl: '.advantages-button-prev',
        },
	});
    const news = new Swiper(".news-swiper", {
		slidesPerView: 3,
		speed: 600,
	});
    const gallery = new Swiper(".gallery-swiper", {
		modules: [Navigation, Autoplay],
		slidesPerView: 4,
        spaceBetween: 30,
		speed: 600,
        loop: true,
        autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
	});
    const certificates = new Swiper(".certificates-swiper", {
		modules: [Navigation],
		slidesPerView: 5,
		spaceBetween: 30,
		speed: 600,
        navigation: {
            nextEl: '.certificates-button-next',
            prevEl: '.certificates-button-prev',
        },
	});
}
