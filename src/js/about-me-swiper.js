// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css';


// Initialize Swiper
const aboutMeSwiperContainer = document.getElementById('about-me-swiper-container-id');
const swiper = new Swiper(aboutMeSwiperContainer, {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  loop: true,
  slidesPerView: 2, // Mobile
  direction: 'horizontal',
  navigation: {
    nextEl: '#about-me-swiper-id',
  },
  breakpoints: {
    768: {
      slidesPerView: 3, // Tablet
    },
    1440: {
      slidesPerView: 6, // Desktop
    },
  },
  on: {
    init: function() {
      // Add active class to first visible slide
      updateActiveSlide(this);
    },
    slideChange: function() {
      // Update active slide class when slides change
      updateActiveSlide(this);
    }
  }
});

 // Function to update active slide
 function updateActiveSlide(swiperInstance) {
  // Remove active class from all slides
  const slides = swiperInstance.slides;
  slides.forEach(slide => {
    slide.classList.remove('active-slide');
  });

  // Add active class to the first visible slide
  const activeIndex = swiperInstance.activeIndex;
  const firstVisibleSlide = slides[activeIndex];
  if (firstVisibleSlide) {
    firstVisibleSlide.classList.add('active-slide');
  }
}