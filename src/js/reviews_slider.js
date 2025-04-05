const list = document.querySelector('.reviews-list');
const btnPrev = document.querySelector('.slider-btn.prev');
const btnNext = document.querySelector('.slider-btn.next');
const card = document.querySelector('.review-card');
const gap = 24;

function updateButtons() {
  const scrollLeft = list.scrollLeft;
  const maxScroll = list.scrollWidth - list.clientWidth;
  btnPrev.disabled = scrollLeft <= 0;
  btnNext.disabled = scrollLeft >= maxScroll - 1;
}

btnNext.addEventListener('click', () => {
  list.scrollBy({ left: card.offsetWidth + gap, behavior: 'smooth' });
  setTimeout(updateButtons, 300);
});

btnPrev.addEventListener('click', () => {
  list.scrollBy({ left: -(card.offsetWidth + gap), behavior: 'smooth' });
  setTimeout(updateButtons, 300);
});

list.addEventListener('scroll', updateButtons);

window.addEventListener('load', updateButtons);
