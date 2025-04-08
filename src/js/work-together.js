import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.work-together-form');
const emailInput = document.querySelector('.work-together-input');
const comentsInput = document.querySelector('.work-together-comments');
const backdrop = document.querySelector('.work-together-backdrop');
const closeBtn = document.querySelector('.work-together-close-button');

// for illustrating message on the page
const modalTitle = document.querySelector('.work-together-modal-title');
const modalSubtitle = document.querySelector('.work-together-modal-subtitle');

// fetch api
const PORTFOLIO_URL = 'https://portfolio-js.b.goit.study/api';

function fetchApi(query, coments) {
  const userData = {
    email: query.value.trim(),
    comment: coments.value.trim(),
  };

  return axios
    .post(`${PORTFOLIO_URL}/requests`, userData)
    .then(response => {
      return response;
    })
    .catch(error => {
      iziToast.error({
        title:
          'Sorry, there are no server response. Please check your data or try again later!',
        position: 'topRight',
        target: '.work-together-section',
        timeout: 5000,
      });
      throw error;
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  fetchApi(emailInput, comentsInput)
    .then(response => {
      if (response.data && response.data.error) {
        iziToast.error({
          title: response.data.error,
          position: 'topRight',
          target: '.work-together-section',
          timeout: 5000,
        });
      } else {
        const { title, message } = response.data;
        modalTitle.innerHTML = title;
        modalSubtitle.innerHTML = message;
        backdrop.classList.add('is-open');
        form.reset();

        function toggleModal() {
          backdrop.classList.remove('is-open');
          document.removeEventListener('keydown', escapeFn);
          backdrop.removeEventListener('click', toggleModal);
          closeBtn.removeEventListener('click', toggleModal);
        }

        const escapeFn = event => {
          if (event.key === 'Escape') {
            if (backdrop.classList.contains('is-open')) {
              toggleModal();
            }
          }
        };

        document.addEventListener('keydown', escapeFn);
        backdrop.addEventListener('click', toggleModal);
        closeBtn.addEventListener('click', toggleModal);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'An error occurred. Please try again later!',
        position: 'topRight',
        target: '.work-together-section',
        timeout: 5000,
      });
    });
});
