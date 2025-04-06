import { Swiper } from 'swiper';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const list = document.querySelector('.reviews-list');
const placeholder = document.querySelector('.not-found-placeholder');
const btnPrev = document.querySelector('.slider-btn.prev');
const btnNext = document.querySelector('.slider-btn.next');

async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();

    if (data.length === 0) {
      showPlaceholder();
      return;
    }

    renderReviews(data);
    initSwiper();
  } catch (err) {
    showPlaceholder();
    console.error(err);
  }
}

function renderReviews(reviews) {
  const markup = reviews
    .map(
      ({ avatar_url, author, review }) => `
      <li class="swiper-slide">
        <div class="review-author">
          <img src="${avatar_url}" alt="${author}" class="review-avatar" />
          <p class="review-name">${author}</p>
        </div>
        <p class="review-text">${review}</p>
      </li>`
    )
    .join('');
  list.innerHTML = markup;
}

function showPlaceholder() {
  list.style.display = 'none';
  placeholder.hidden = false;
  btnPrev.disabled = true;
  btnNext.disabled = true;
}

function initSwiper() {
  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Keyboard, A11y],
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: '.slider-btn.next',
      prevEl: '.slider-btn.prev',
    },
    keyboard: {
      enabled: true,
    },
    on: {
      slideChange: function () {
        btnPrev.disabled = this.isBeginning;
        btnNext.disabled = this.isEnd;
      },
    },
  });

  btnPrev.disabled = swiper.isBeginning;
  btnNext.disabled = swiper.isEnd;
}

fetchReviews();
