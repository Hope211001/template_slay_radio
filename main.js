
/* ----------  PLAY / PAUSE (header uniquement) ---------- */
const playBtnTop = document.getElementById('playBtnTop');
const playIconTop = document.getElementById('playIconTop');
const pauseIconTop = document.getElementById('pauseIconTop');
const equalizers = document.querySelectorAll('.flex.items-end.gap-1 > div');

let isPlaying = false;

function togglePlay() {
    isPlaying = !isPlaying;

    if (isPlaying) {
        playIconTop.classList.add('hidden');
        pauseIconTop.classList.remove('hidden');
        equalizers.forEach(bar => bar.classList.add('animate-equalizer'));
    } else {
        playIconTop.classList.remove('hidden');
        pauseIconTop.classList.add('hidden');
        equalizers.forEach(bar => bar.classList.remove('animate-equalizer'));
    }
}

playBtnTop.addEventListener('click', togglePlay);

/* ----------  TEXT SCROLL PAUSE  ---------- */
const scrollingText = document.querySelector('.scrolling-text');
scrollingText.addEventListener('mouseenter', () => scrollingText.style.animationPlayState = 'paused');
scrollingText.addEventListener('mouseleave', () => scrollingText.style.animationPlayState = 'running');

/* ----------  MOBILE MENU  ---------- */
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMenuBtn');
const menuLinks = document.querySelectorAll('#mobileMenu a');

burgerBtn.addEventListener('click', () => mobileMenu.classList.remove('translate-y-full'));
closeBtn.addEventListener('click', () => mobileMenu.classList.add('translate-y-full'));
menuLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('translate-y-full')));





 // carrousel

const carousel = document.getElementById('carouselMobile') || document.getElementById('carousel');
const dots = document.querySelectorAll('.carousel-dot');

let currentSlide = 0;

function scrollCarousel(direction) {
    const items = carousel.querySelectorAll('.carousel-item');
    currentSlide += direction;

    // Limiter les bornes
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= items.length) currentSlide = items.length - 1;

    scrollToSlide(currentSlide);
}

function scrollToSlide(index) {
    const items = carousel.querySelectorAll('.carousel-item');
    if (items[index]) {
        items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        currentSlide = index;
    }
}

// Mettre à jour les indicateurs lors du scroll
carousel.addEventListener('scroll', () => {
    const items = carousel.querySelectorAll('.carousel-item');
    const scrollLeft = carousel.scrollLeft;
    const itemWidth = items[0].offsetWidth + 16; // largeur + gap
    const newIndex = Math.round(scrollLeft / itemWidth);
    currentSlide = newIndex;

    dots.forEach((dot, index) => {
        if (index === newIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});
