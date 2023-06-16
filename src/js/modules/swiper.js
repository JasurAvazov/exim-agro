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
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
	});
}
