import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const aboutMe = document.querySelector('.accordion-container');

const addAccordion = () => {
  const accordion = new Accordion(aboutMe, {
    duration: 300,
    collapse: true,
    showMultiple: true,
  });
  accordion.open(0);
};

addAccordion();
