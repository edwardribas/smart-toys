// Calling DOM elements
const up = document.querySelector('#up');
const burger = document.querySelector('#burger');
const nav = document.querySelector('nav');
const back = document.querySelector('#back');
const question = document.querySelectorAll('.questions-item');

// Toggle navbar
const toggleNavbar = () => [nav, back].forEach(e => e.classList.toggle('active'));
[burger, back].forEach(i => i.onclick = toggleNavbar);
nav.onclick = e => e.target.classList.contains("link") && toggleNavbar();

// Go to top
up.style.bottom = "-100%";
document.addEventListener("scroll", () => up.style.bottom = scrollY > 500 ? '20px' : '-100%')

// FAQ
question.forEach(q => q.onclick = () => q.classList.toggle('active'));