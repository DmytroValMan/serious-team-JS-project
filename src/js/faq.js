import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function() {
  new Accordion('.accordion', {
    duration: 300,
    showMultiple: true,
    elementClass: 'faq-ac',      
    triggerClass: 'faq-ac-trigger', 
    panelClass: 'faq-ac-panel',    
    activeClass: 'is-active'
  });
});

