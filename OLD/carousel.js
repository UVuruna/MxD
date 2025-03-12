function initializeCarousel(carouselId) {
  const carousel = document.querySelector(carouselId);
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  const track = carousel.querySelector(".track");
  const cards = carousel.querySelectorAll(".card-container");

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
    console.log(carouselWidth)
    console.log(track.offsetWidth - index * cardWidth)
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
}

initializeCarousel("#partners-carousel");
initializeCarousel("#verticles-carousel");