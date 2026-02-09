const gallery = document.getElementById("gallery");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");
const body = document.body;


const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=250",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=250",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=250",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=400&h=250", // fixed 4th image
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=400&h=250",
  "https://images.unsplash.com/photo-1531177073127-57f6f45eabf5?auto=format&fit=crop&w=400&h=250"
];


images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Image ${index+1}`;
  gallery.appendChild(img);


  img.addEventListener("click", () => {
    body.style.background = `url(${src}) center/cover no-repeat`;
  });
});


const scrollAmount = 300;
leftBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
rightBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
});


let isDown = false;
let startX, scrollLeft;

gallery.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});
gallery.addEventListener("mouseleave", () => isDown = false);
gallery.addEventListener("mouseup", () => isDown = false);
gallery.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  gallery.scrollLeft = scrollLeft - (x - startX) * 2;
});
