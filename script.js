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


// gallery slide
const images= [
    { src: "https://res.cloudinary.com/txkpxwxm/image/upload/v1791805401/t-shirtprinting-img.png", alt: "Custom printed apparel" },
    { src: "https://res.cloudinary.com/txkpxwxm/image/upload/v1791804949/sublimation-img.png", alt: "Sublimation print example" },
    { src: "https://res.cloudinary.com/txkpxwxm/image/upload/v1791804949/keyholder-img.png", alt: "Personalised key holder" },
    { src: "https://res.cloudinary.com/txkpxwxm/image/upload/v1791804954/printout-img.png", alt: "Printed artwork" },
    { src: "https://res.cloudinary.com/txkpxwxm/image/upload/v1791804950/graphicdesign-img.png", alt: "Graphic design example" },
];

let currentImage = 0;

const galleryImage = document.getElementById("galleryImage");

function showImage() {
    galleryImage.src = images[currentImage].src;
    galleryImage.alt = images[currentImage].alt;
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage();
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage();
}

// Swipe
let startX = 0;
let endX = 0;
galleryImage.addEventListener("pointerdown", function (event) {
    startX = event.clientX;
});
galleryImage.addEventListener("pointerup", function (event) {
    endX = event.clientX;

    let difference = startX - endX;

    if (difference > 50) {
        nextImage();
    }

    if (difference < -50) {
        prevImage();
    }
});