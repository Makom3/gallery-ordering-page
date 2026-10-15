// navmenu hamburder
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');

    console.log(navMenu.className);
});



// image slide sublimation
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

// keyholder
const images3= [
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792005991/keyholder03.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792005993/keyholder02.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792005991/keyholder01.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792005993/keyholder04.jpg",
];

let currentImage3 = 0;

const galleryImage3 = document.getElementById("galleryImage3");

function nextImage3() {
    currentImage3++;
    if (currentImage3 >= images3.length) {
        currentImage3 = 0;
    }

    galleryImage3.src = images3[currentImage3];
}

function prevImage3() {
    currentImage3--;
    if (currentImage3 < 0) {
        currentImage3 = images3.length - 1;
    }
    galleryImage3.src = images3[currentImage3];
}

// smooth scroll
function goToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// graphic design
const images4= [
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792007366/graphic04.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792007362/graphic05.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792007354/graphic01.png",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792007358/graphic03.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792007361/graphic02.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792007360/graphic06.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792093401/graphic07.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792093406/graphic08.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792093410/graphic09.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792093407/graphic10.jpg",
];

let currentImage4 = 0;

const galleryImage4 = document.getElementById("galleryImage4");

function nextImage4() {
    currentImage4++;
    if (currentImage4 >= images4.length) {
        currentImage4 = 0;
    }

    galleryImage4.src = images4[currentImage4];
}

function prevImage4() {
    currentImage4--;
    if (currentImage4 < 0) {
        currentImage4 = images4.length - 1;
    }
    galleryImage4.src = images4[currentImage4];
}

// smooth scroll
function goToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// vinyl 
const images5= [
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792090896/vinyl01.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792090911/vinyl03.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792090909/vinyl11.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792090898/vinyl09.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792090915/vinyl08.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792090908/vinyl10.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792090913/vinyl05.jpg",
    "https://res.cloudinary.com/txkpxwxm/image/upload/v1792090912/vinyl07.jpg",
];

let currentImage5 = 0;

const galleryImage5 = document.getElementById("galleryImage5");

function nextImage5() {
    currentImage5++;
    if (currentImage5 >= images5.length) {
        currentImage5 = 0;
    }

    galleryImage5.src = images5[currentImage5];
}

function prevImage5() {
    currentImage5--;
    if (currentImage5 < 0) {
        currentImage5 = images5.length - 1;
    }
    galleryImage5.src = images5[currentImage5];
}

// smooth scroll
function goToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}