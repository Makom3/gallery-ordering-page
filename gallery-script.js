// navmenu hamburder
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');

    console.log(navMenu.className);
});

// image slide
const images= [
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792006944/sub-img04.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792006921/sub-img01.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792006935/sub-img03.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792006946/sub-img02.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792006915/sub-img06.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792006921/sub-img08.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792006931/sub-img05.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792006919/sub-img07.jpg",
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
//  tshirt

const images2= [
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798555/tshirt-img09.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798563/tshirt-img08.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798564/tshirt-img06.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798703/tshirt-img02.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798711/tshirt-img05.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798718/tshirt-img03.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798712/tshirt-img01.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798560/tshirt-img10.jpg",
];

let currentImage2 = 0;

const galleryImage2 = document.getElementById("galleryImage2");

function nextImage2() {
    currentImage2++;
    if (currentImage2 >= images2.length) {
        currentImage2 = 0;
    }

    galleryImage2.src = images2[currentImage2];
}

function prevImage2() {
    currentImage2--;
    if (currentImage2 < 0) {
        currentImage2 = images2.length - 1;
    }
    galleryImage2.src = images2[currentImage2];
}

// smooth scroll
function goToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}