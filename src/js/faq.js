import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function() {
  new Accordion('.accordion', {
    duration: 300,    
    showMultiple: true, 
    openOnInit: [],    
  });
  
  document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const faqItem = event.target.closest('.faq-item');
      const text = faqItem.querySelector('.faq-item-text');
      const icon = button.querySelector('.faq-icon');

      text.style.display = (text.style.display === 'block') ? 'none' : 'block';

      icon.classList.toggle('rotated');
    });
  });
});