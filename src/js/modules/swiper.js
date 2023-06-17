import Swiper, { Autoplay, Navigation } from "swiper";

export function init() {
	const about = new Swiper(".about-swiper", {
		modules: [Autoplay],
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		speed: 600,
		breakpoints: {
			992: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 2,
				autoplay: {
					delay: 2500
				}
			},
		},
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		},
	});
	const advantages = new Swiper(".advantages-swiper", {
		modules: [Navigation],
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 600,
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: ".advantages-button-next",
			prevEl: ".advantages-button-prev",
		},
	});
	const news = new Swiper(".news-swiper", {
		slidesPerView: 1,
		speed: 600,
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
		},
	});
	const gallery = new Swiper(".gallery-swiper", {
		modules: [Navigation, Autoplay],
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 600,
		loop: true,
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	const certificates = new Swiper(".certificates-swiper", {
		modules: [Navigation],
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			1300: {
				slidesPerView: 5,
			},
			1100: {
				slidesPerView: 4,
			},
			800: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 2,
			},
		},
		speed: 600,
		navigation: {
			nextEl: ".certificates-button-next",
			prevEl: ".certificates-button-prev",
		},
	});
}
