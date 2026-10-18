const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');

    console.log(navMenu.className);
});

// Swipe


// assign button with prev and next
const products = [
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172079/pocket-size-small.png",
        name:"Pocket Size Small Print",
        description:"Pocket size print, mainly names ",
        price: 30
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172077/pocket-size-medium.png",
        name:"Pocket Size Medium Print",
        description:"Print Logo or Curved Text",
        price: 50
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172078/chest-size-small.png",
        name:"Chest Size Print(Small)",
        description:"Chest size print 30cmx6cm",
        price: 40
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172086/chest-size-medium.png",
        name:"Chest Size Print(Medium)",
        description:"Chest size printing 30cmx21cm(A4)",
        price: 60
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172078/chest-size-large.png",
        name:"Chest Size Print(large)",
        description:"Chest size printing 30cmx30cm",
        price: 80
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172077/pocket-chest-size.png",
        name:"Pocket and Chest Size Print",
        description:"Pocket size and Chest size(A4) print",
        price: 80
    },
    // Front and Back
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172084/front-back-01.png",
        name:"Mediun Front and Back Print",
        description:"Print medium size front and back ",
        price: 100
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172085/front-back-02.png",
        name:"Pocket Front & Medium Back Print",
        description:"Front pocket and back medium size",
        price: 80
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172082/front-back-03.png",
        name:"Pocket Front & Large Back Print",
        description:"Print pocket at front and large print at back(A4)",
        price: 120
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172088/front-back-04.png",
        name:"Pocket size and Small Print",
        description:"Print pocket size at front and back of your t-shirt",
        price: 60
    },
    
];

let currentIndex = 0;

const productImage= document.querySelector("#product-image");
const productName= document.querySelector("#product-name");
const productDescription= document.querySelector("#product-description");
const productPrice= document.querySelector("#product-price");

const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const orderBtn = document.querySelector(".order-btn");

function showProduct(){
   const product = products[currentIndex];

   productImage.src = product.image;
   productName.textContent = product.name;
   productDescription.textContent = product.description;
   productPrice.textContent = `R${product.price}`;
}

//next button
nextBtn.addEventListener("click",function(){
    currentIndex = (currentIndex + 1) % products.length;
    showProduct();
});

//previous button
prevBtn.addEventListener("click",function(){
    currentIndex=(currentIndex - 1 + products.length )%products.length;
    showProduct();

})
// whatsapp button
orderBtn.addEventListener("click",function(){
    const product = products[currentIndex];

    const phoneNumber = "27713751901";

    const message = 
    `Hey,i would like this order:\n\n` +
    `Product:${product.name}\n` +
    `Description:${product.description}\n` +
    `Price:R${product.price}\n\n` +
    `Please let me know how to proceed.`;

    const whatsappURL = `https://wa.me/${+27713751901}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL,"_blank");
})

let startX = 0;

productImage.addEventListener("pointerdown", function (event) {
    startX = event.clientX;
});
productImage.addEventListener("pointerup", function (event) {
    const difference = startX -  event.clientX;


    if (difference > 50) {
        nextBtn.click();
    } else if (difference < -50) {
        prevBtn.click();
    }
}); 

    

// Coffee mug

const products2 = [
    {
        image2:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792340443/mug_rint.png",
        name2:"Personalised Coffee(White)",
        description2:"We Design and Print any of your choice",
        price2: 100
    },
    {
        image2:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792340470/no-product.png",
        name2:"Personalised Magic Coffee",
        description2:"Color changing coffee mug",
        price2: 150
    }, 
    {
        image2:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792340441/keyholder-sample.png",
        name2:"Personalised Keyholder",
        description2:"Print Both Sides",
        price2: 70
    },
    {
        image2:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792343095/mug_keyholder_img.png",
        name2:"Personalised Coffee Mug + Keyholder",
        description2:"Get A Combo For 2 for only",
        price2: 150
    }, 
];

let currentIndex2 = 0;

const productImage2= document.querySelector("#product-image2");
const productName2= document.querySelector("#product-name2");
const productDescription2= document.querySelector("#product-description2");
const productPrice2= document.querySelector("#product-price2");

const nextBtn2 = document.querySelector("#next-btn2");
const prevBtn2 = document.querySelector("#prev-btn2");
const orderBtn2 = document.querySelector(".order-btn2");

function showProduct2(){
   const product2 = products2[currentIndex2];

   productImage2.src = product2.image2;
   productName2.textContent = product2.name2;
   productDescription2.textContent = product2.description2;
   productPrice2.textContent = `R${product2.price2}`;
}

//next button
nextBtn2.addEventListener("click",function(){
    currentIndex2 = (currentIndex2 + 1) % products2.length;
    showProduct2();
});

//previous button
prevBtn2.addEventListener("click",function(){
    currentIndex2=(currentIndex2 - 1 + products2.length )%products2.length;
    showProduct2();

})
// whatsapp button
orderBtn2.addEventListener("click",function(){
    const product2 = products2[currentIndex2];

    const phoneNumber = "27713751901";

    const message = 
    `Hey,i would like this order:\n\n` +
    `Product2:${product2.name2}\n` +
    `Description2:${product2.description2}\n` +
    `Price2:R${product2.price2}\n\n` +
    `Please let me know how to proceed.`;

    const whatsappURL = `https://wa.me/${+27713751901}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL,"_blank");
})

let startX2 = 0;

productImage2.addEventListener("pointerdown", function (event) {
    startX2 = event.clientX2;
});
productImage2.addEventListener("pointerup", function (event) {
    const difference2 = startX2 -  event.clientX2;


    if (difference2 > 50) {
        nextBtn2.click();
    } else if (difference2 < -50) {
        prevBtn2.click();
    }
}); 