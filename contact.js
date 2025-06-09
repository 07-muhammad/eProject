const toggleBtn = document.getElementById('menu-toggle');
const nav1 = document.getElementById('nav');

toggleBtn.addEventListener('click', () => {
    nav1.classList.toggle('open');
});

const menuToggle = document.getElementById("menu-toggle");
const closeToggle = document.getElementById("close-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.add("open");
});

closeToggle.addEventListener("click", () => {
    nav.classList.remove("open");
});

