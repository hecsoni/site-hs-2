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

// FAQ accordion
(() => {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const btn = item.querySelector(".faq-pergunta");
    const resp = item.querySelector(".faq-resposta");
    if (!btn || !resp) return;
    btn.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });
})();

// Portfólio simples (slider de imagens)
(() => {
  const track = document.querySelector(".portfolio-track");
  const prev = document.querySelector(".pf-prev");
  const next = document.querySelector(".pf-next");
  if (!track || !prev || !next) return;

  const slides = Array.from(track.querySelectorAll("img"));
  let idx = 0;

  function go(i) {
    if (i >= slides.length) idx = 0;
    else if (i < 0) idx = slides.length - 1;
    else idx = i;
    track.style.transform = `translateX(${-idx * 100}%)`;
  }

  next.addEventListener("click", () => go(idx + 1));
  prev.addEventListener("click", () => go(idx - 1));

  // Swipe básico em mobile
  let startX = 0,
    swiping = false;
  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    swiping = true;
  });
  track.addEventListener("touchmove", (e) => {
    if (!swiping) return;
    const dx = e.touches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      swiping = false;
      go(idx + (dx < 0 ? 1 : -1));
    }
  });
  track.addEventListener("touchend", () => (swiping = false));
})();
