const toggleBtn = document.getElementById('menu-toggle');
const toggleCloseBtn = document.getElementById('close-toggle');
const nav = document.getElementById('nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.add('open');
});

toggleCloseBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});
