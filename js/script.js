// Hero Carousel
let heroImages = [
  'assets/images/hero1.jpg',
  'assets/images/hero2.jpg',
  'assets/images/hero3.jpg'
];
let heroIndex = 0;
const heroBg = document.querySelector('.hero-carousel');
function setHeroBg() {
  if (heroBg) {
    heroBg.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
    heroBg.style.backgroundSize = 'cover';
    heroBg.style.backgroundPosition = 'center';
    heroBg.style.transition = 'background-image 1s ease-in-out';
  }
}
function nextHeroBg() {
  heroIndex = (heroIndex + 1) % heroImages.length;
  setHeroBg();
}
setInterval(nextHeroBg, 5000);
setHeroBg();

// Animated Stats
function animateCounter(el, end) {
  let start = 0;
  let duration = 2000;
  let step = Math.ceil(end / (duration / 16));
  function update() {
    start += step;
    if (start > end) start = end;
    el.textContent = start + (el.dataset.suffix || '');
    if (start < end) requestAnimationFrame(update);
  }
  update();
}
document.querySelectorAll('.animated-counter').forEach(el => {
  animateCounter(el, parseInt(el.dataset.end, 10));
});

// Testimonials Slider
const slider = document.querySelector('.testimonials-slider');
if (slider) {
  let isDown = false;
  let startX, scrollLeft;
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}
// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
} 