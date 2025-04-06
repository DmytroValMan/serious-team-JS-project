import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.work-together-form');
const emailInput = document.querySelector('.work-together-input');
const comentsInput = document.querySelector('.work-together-comments');
const backdrop = document.querySelector('.work-together-backdrop');
const closeBtn = document.querySelector('.work-together-close-button');

// for ilustrating message on the page
const modalTitle = document.querySelector('.work-together-modal-title');
const modalSubtitle = document.querySelector('.work-together-modal-subtitle');

const PORTFOLIO_URL = 'https://portfolio-js.b.goit.study/api';

// fetch api
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
      console.log(error);
      iziToast.error({
        title:
          'Sorry, there are no server response. Please check your data or try again later!',
        position: 'topRight',
        timeout: 5000,
      });
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  fetchApi(emailInput, comentsInput)
    .then(response => {
      const { title, message } = response.data;

      modalTitle.innerHTML = title;
      modalSubtitle.innerHTML = message;
      form.reset();
      backdrop.classList.add('is-open');

      function toggleModal() {
        backdrop.classList.remove('is-open');
        backdrop.removeEventListener('click', toggleModal);
        closeBtn.removeEventListener('click', toggleModal);
      }

      backdrop.addEventListener('click', toggleModal);
      closeBtn.addEventListener('click', toggleModal);
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title:
          'Sorry, there are no server response. Please check your data or try again later!',
        position: 'topRight',
        timeout: 5000,
      });
    });
});
