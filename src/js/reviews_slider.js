import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const reviewsPerSection = determineReviewsCount();
  const totalReviewsToLoad = reviewsPerSection * 6; // 6 секцій
  loadReviews(totalReviewsToLoad);

  const swiperContainer = document.querySelector('.reviews-swiper');
  swiperContainer.addEventListener('scroll', handleScroll);
});

function determineReviewsCount() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return 1;
  } else if (
    window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches
  ) {
    return 2;
  } else {
    return 5;
  }
}

let startIndex = 0;
let allReviewsLoaded = false;

async function loadReviews(reviewsToLoad) {
  const swiperWrapper = document.querySelector('.reviews-list');
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    const reviews = response.data.slice(startIndex, startIndex + reviewsToLoad);

    if (reviews.length === 0) {
      allReviewsLoaded = true;
      return;
    }

    const reviewsAdd = reviews
      .map(
        review => `
        <div class="swiper-slide swiper-slide-reviews">
          <img class="review-img" src="${review.avatar_url}" alt="${review.author}" loading="lazy" />
          <p class="review-name">${review.author}</p>
          <p class="review-text">${review.review}</p>
        </div>
      `
      )
      .join('');

    swiperWrapper.insertAdjacentHTML('beforeend', reviewsAdd);
    initSwiper();

    startIndex += reviewsToLoad;
  } catch (error) {
    swiperWrapper.innerHTML =
      '<div class="reviews-error">Failed to load reviews. Please try again later.</div>';
    const errorElement = document.querySelector('.reviews-error');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            iziToast.error({
              position: 'topRight',
              message: 'Failed to load reviews. Please try again later.',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(errorElement);
  }
}

function handleScroll() {
  const swiperContainer = document.querySelector('.reviews-swiper');
  const scrollPosition =
    swiperContainer.scrollLeft + swiperContainer.offsetWidth;
  const totalWidth = swiperContainer.scrollWidth;

  if (scrollPosition >= totalWidth - 50 && !allReviewsLoaded) {
    const reviewsToLoad = determineReviewsCount();
    loadReviews(reviewsToLoad);
  }
}

function initSwiper() {
  new Swiper('.reviews-swiper', {
    modules: [Navigation, Pagination, Keyboard],
    watchOverflow: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
    },
  });
}
