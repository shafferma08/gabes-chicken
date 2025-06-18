const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Simple slider logic
const track = document.querySelector('.slider-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let current = 0;

function updateSlide() {
  track.style.transform = `translateX(-${current * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlide();
});
