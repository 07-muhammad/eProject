const toggleBtn = document.getElementById('menu-toggle');
const toggleCloseBtn = document.getElementById('close-toggle');
const nav = document.getElementById('nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.add('open');
});

toggleCloseBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});


let decorProducts = [
  {
    id: "p1",
    Name: "Cherry Blossom",
    category: "Flowers",
    image: "img1.jpg",
    des: "Deligate Petals and Graceful Bloom"
  },
  {
    id: "p2",
    Name: "Mr. Wotton",
    category: "Wedding",
    image: "img3.jpg",
    des: "Noble Person, Shines Forever"
  },
  {
    id: "p3",
    Name: "Golden Decoration",
    category: "Enggagement",
    image: "img2.jpg",
    des: "We Also Serves.."
  },
  {
    id: "p4",
    Name: "Happy Enggaged",
    category: "Birthday",
    image: "img4.jpg",
    des: "Mr. & Mrs. Burlesdon"
  },
  {
    id: "p5",
    Name: "Our Rose Decors",
    category: "Rose Flower",
    image: "img5.jpg",
    des: "Fully Decorated Hall"
  }
];
