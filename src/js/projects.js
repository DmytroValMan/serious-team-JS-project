// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css';

const projectsSwiperContainer = document.querySelector('#projects-swiper-container-id');

const swiper = new Swiper(projectsSwiperContainer, {
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
      nextEl: '.projects-btn-next',
      prevEl: '.projects-btn-prev',
    },

});