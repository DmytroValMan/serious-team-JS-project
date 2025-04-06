document.addEventListener('DOMContentLoaded', function () {
  const coversSection = document.querySelector('.covers');
  const coversList = document.querySelector('.covers-list');

  function checkViewport() {
    const rect = coversSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      coversList.style.animationPlayState = 'running';
    } else {
      coversList.style.animationPlayState = 'paused';
    }
  }

  window.addEventListener('scroll', checkViewport);
  checkViewport();
});
