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