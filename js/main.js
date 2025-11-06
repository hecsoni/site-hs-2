// Carousel simples
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showSlide(i) {
  const slides = document.querySelectorAll(".testimonial");
  if (i >= slides.length) index = 0;
  if (i < 0) index = slides.length - 1;
  track.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  showSlide(index);
});
prevBtn.addEventListener("click", () => {
  index--;
  showSlide(index);
});
