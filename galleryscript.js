const images= [
    "img/sub-img01.jpg",
    "img/sub-img02.jpg",
    "img/sub-img03.jpg",
    "img/sub-img04.jpg",
    "img/sub-img05.jpg",
    "img/sub-img06.jpg",
    "img/sub-img07.jpg",
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
    "img/tshirt-img01.jpg",
    "img/tshirt-img02.jpg",
    "img/tshirt-img03.jpg",
    "img/tshirt-img04.jpg",
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
