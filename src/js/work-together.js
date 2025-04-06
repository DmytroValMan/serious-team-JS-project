import axios from 'axios';

const form = document.querySelector('.work-together-form');
const emailInput = document.querySelector('.work-together-input');
const comentsInput = document.querySelector('.work-together-comments');
const backdrop = document.querySelector('.work-together-backdrop');
const closeBtn = document.querySelector('.work-together-close-button');

const portfolioUrl = 'https://portfolio-js.b.goit.study/api';

// fetch api
function fetchApi(query, comment) {
  return axios
    .post(portfolioUrl, {
      email: query.value.trim(),
      comment: comment,
    })
    .than(response => {
      response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  backdrop.classList.add('is-open');

  closeBtn.addEventListener('click', function toggleModal() {
    modal.classList.remove('is-open');
  });
});
