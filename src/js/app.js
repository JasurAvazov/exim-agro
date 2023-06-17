import * as functions from "./modules/functions.js";
import * as swiper from "./modules/swiper.js";
import * as wrapper from "./modules/wrapper.js";
import * as burger from "./modules/burger.js";
import SmoothScroll from "smoothscroll-for-websites";

SmoothScroll({
    animationTime: 400,
    stepSize: 60,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
});

functions.isWebp();
swiper.init();
wrapper.init();
burger.init();
