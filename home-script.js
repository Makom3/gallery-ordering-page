const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function closeNavigation() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
}

hamburger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNavigation);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeNavigation();
    }
});

const heroSlides = document.querySelectorAll('.hero-image .hero-slide');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (heroSlides.length > 1 && !prefersReducedMotion.matches) {
    let activeHeroSlide = 0;

    window.setInterval(function () {
        heroSlides[activeHeroSlide].classList.remove('active');
        activeHeroSlide = (activeHeroSlide + 1) % heroSlides.length;
        heroSlides[activeHeroSlide].classList.add('active');
    }, 3500);
}