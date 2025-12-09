
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

/* ----------  petite lib « multi-carousel »  ---------- */
function initCarousels() {
    document.querySelectorAll('.carousel-container').forEach(carousel => {
        carousel.addEventListener('scroll', () => updateDots(carousel));
    });
}

function scrollCarousel(btn, direction) {
    const id = btn.dataset.target;
    const carousel = document.getElementById(id);
    const items = carousel.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 16;   // + gap
    carousel.scrollBy({ left: direction * itemWidth, behavior: 'smooth' });
}

function scrollToSlide(id, index) {
    const carousel = document.getElementById(id);
    const items = carousel.querySelectorAll('.carousel-item');
    if (items[index]) {
        items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        updateDots(carousel, index);
    }
}

function updateDots(carousel, forcedIndex) {
    const id = carousel.id;
    const items = carousel.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll(`.${id.replace('Carousel', '')}-dot`); // artist-dot / shop-dot
    const scrollLeft = carousel.scrollLeft;
    const itemWidth = items[0].offsetWidth + 16;
    const index = forcedIndex !== undefined ? forcedIndex : Math.round(scrollLeft / itemWidth);

    dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

/* lancer au chargement */
document.addEventListener('DOMContentLoaded', initCarousels);