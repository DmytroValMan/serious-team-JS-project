// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    spaceBetween: 100,
    speed: 1000,

    mousewheel: {
        invert: true,
    },

    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'disabled-button'
    },

});