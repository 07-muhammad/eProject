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

// Map

navigator.geolocation.getCurrentPosition((res) => {
    // console.log(res.coords.latitude);
    // console.log(res.coords.longitude);
    
    var map = L.map('map').setView([res.coords.latitude, res.coords.longitude], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

});
