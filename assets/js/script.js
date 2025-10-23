// Grab the button and the nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

// When the button is clicked, toggle the "active" class on the nav
navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
