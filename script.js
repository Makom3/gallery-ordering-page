const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');

    console.log(navMenu.className);
});


// gallery slide
const images= [
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791805401/t-shirtprinting-img.png",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791804949/sublimation-img.png",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791804949/keyholder-img.png",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791804954/printout-img.png",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791804950/graphicdesign-img.png",
];

let currentImage = 0;

const galleryImage = document.getElementById("galleryImage");

function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }

    galleryImage.src = images[currentImage];
}

function prevImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    galleryImage.src = images[currentImage];
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