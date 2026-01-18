// ========== MENU MOBILE ==========
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle?.addEventListener('click', () => {
  menu.classList.toggle('active');
  const isOpen = menu.classList.contains('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

// Fechar menu ao clicar em link
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// ========== SCROLL SUAVE ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80; // altura do header
      const top = target.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ========== HEADER SCROLLED ==========
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ========== SCROLLSPY (destaca seção ativa no menu) ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ========== CARROSSEL DE DEPOIMENTOS ==========
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateCarousel() {
  const width = track.querySelector('.testimonial').offsetWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn?.addEventListener('click', () => {
  const total = track.querySelectorAll('.testimonial').length;
  currentIndex = (currentIndex + 1) % total;
  updateCarousel();
});

prevBtn?.addEventListener('click', () => {
  const total = track.querySelectorAll('.testimonial').length;
  currentIndex = (currentIndex - 1 + total) % total;
  updateCarousel();
});

// Auto-play carrossel
setInterval(() => {
  nextBtn?.click();
}, 5000);

// ========== ANIMAÇÕES AOS (Animate On Scroll) ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
    }
  });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
  observer.observe(el);
});

// ========== DELAYS PARA ANIMAÇÕES ==========
document.querySelectorAll('[data-aos-delay]').forEach(el => {
  const delay = el.getAttribute('data-aos-delay');
  el.style.transitionDelay = `${delay}ms`;
});