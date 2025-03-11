const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
const cards = document.querySelectorAll(".card-container");

let cardWidth = cards[0].offsetWidth;
let carouselWidth = carousel.offsetWidth;
let index = 0;

window.addEventListener("resize", function () {
  cardWidth = cards[0].offsetWidth;
});

next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -cardWidth + "px)";
  if (track.offsetWidth - index * cardWidth < carouselWidth) {
    next.classList.add("hide");
  }
});

prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -cardWidth + "px)";
});
