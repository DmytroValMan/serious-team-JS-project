import{A as u,S as m}from"./assets/vendor-D3vwHIVa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const a=document.querySelector(".menu-button"),c=document.querySelector(".nav-list"),l=document.querySelector(".modal-overlay"),f=document.querySelector(".close-button"),p=document.querySelector(".burger-button");document.querySelector(".nav-mob");const y=document.querySelectorAll(".nav-mob .nav-link"),b=document.querySelector(".order-button-mob");a.addEventListener("click",t=>{if(t.preventDefault(),c.classList.contains("menu-visible")){c.classList.remove("menu-visible");return}c.classList.add("menu-visible")});document.addEventListener("click",t=>{!(l.contains(t.target)||a.contains(t.target))&&c.classList.contains("menu-visible")&&c.classList.remove("menu-visible")});p.addEventListener("click",v);f.addEventListener("click",d);function v(){l.classList.add("is-open"),document.body.classList.add("modal-body-lock")}function d(){l.classList.remove("is-open"),document.body.classList.remove("modal-body-lock")}y.forEach(t=>{t.addEventListener("click",n=>{d();const s=t.getAttribute("href"),r=document.querySelector(s);r&&r.scrollIntoView({behavior:"smooth"})})});b.addEventListener("click",t=>{d();const n=document.querySelector("#work-together");n&&n.scrollIntoView({behavior:"smooth"})});const L=document.querySelector(".accordion-container"),g=()=>{new u(L,{duration:300,collapse:!0,showMultiple:!0}).open(0)};g();new m(".swiper",{keyboard:{enabled:!0,onlyInViewport:!0},spaceBetween:100,speed:1e3,mousewheel:{invert:!0},direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"projects-disabled-button"}});document.addEventListener("DOMContentLoaded",function(){new u(".accordion",{duration:300,showMultiple:!0,openOnInit:[]}),document.querySelectorAll(".faq-btn").forEach(t=>{t.addEventListener("click",n=>{const r=n.target.closest(".faq-item").querySelector(".faq-item-text"),e=t.querySelector(".faq-icon");r.style.display=r.style.display==="block"?"none":"block",e.classList.toggle("rotated")})})});
//# sourceMappingURL=index.js.map
