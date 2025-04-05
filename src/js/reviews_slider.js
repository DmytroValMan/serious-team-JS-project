import { Swiper } from 'swiper';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const list = document.querySelector('.reviews-list');
const btnPrev = document.querySelector('.slider-btn.prev');
const btnNext = document.querySelector('.slider-btn.next');

async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    renderReviews(data);
    initSwiper();
  } catch (err) {
    list.innerHTML = `<li class="swiper-slide">Not found</li>`;
    console.error(err);
  }
}

function renderReviews(reviews) {
  const markup = reviews
    .map(
      ({ avatar_url, author, review }) => `
      <li class="swiper-slide">
        <img src="${avatar_url}" alt="${author}" class="review-avatar" />
        <p class="review-author">${author}</p>
        <p class="review-text">${review}</p>
      </li>`
    )
    .join('');
  list.innerHTML = markup;
}

function initSwiper() {
  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Keyboard, A11y],
    slidesPerView: 1,
    spaceBetween: 24,
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

  // Спочатку перевірити кнопки
  btnPrev.disabled = swiper.isBeginning;
  btnNext.disabled = swiper.isEnd;
}

fetchReviews();
