const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');

    console.log(navMenu.className);
});

// Swipe



// direct to watsapp
// const orderBtn = document.querySelector(".order-btn");

// orderBtn.onclick = function(){
//         const phoneNumber= "27713751901"; 
//         const message= "hi, i would like to order this shirt.";


// const whatsappURL=`https://wa.me/${27713751901}=${encodeURIComponent(message)}`;
//      window.open(whatsappURL,"_blank");
// };

// assign button with prev and next
const products = [
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172079/pocket-size-small.png",
        name:"Pocket Size Small Print",
        description:"Small pocket size print, mainly names and letters",
        price: 30
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172077/pocket-size-medium.png",
        name:"Pocket Size Medium Print",
        description:"Medium sized print fit for logos and 2 lined name tag",
        price: 50
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172078/chest-size-small.png",
        name:"Chest Size Print(Small)",
        description:"Chest size printing 30cm width x 6cm height",
        price: 40
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172086/chest-size-medium.png",
        name:"Chest Size Print(Medium)",
        description:"Chest size printing 30cm width x 21cm height(A4)",
        price: 60
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172078/chest-size-large.png",
        name:"Chest Size Print(large)",
        description:"Chest size printing 30cm width x 30cm height",
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
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172077/pocket-chest-size.png",
        name:"Mediun Front and Back Print",
        description:"Print medium size at front and back of your t-shirt",
        price: 80
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172077/pocket-chest-size.png",
        name:"Pocket Front & Medium Back Print",
        description:"Print pocket size at front and medium size print at back(30cmx7cm)",
        price: 80
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172077/pocket-chest-size.png",
        name:"Pocket Front & Large Back Print",
        description:"Print pocket sied at front and large size print at back(A4)",
        price: 120
    },
    {
        image:"https://res.cloudinary.com/txkpxwxm/image/upload/v1792172077/pocket-chest-size.png",
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

    const whatsappURL = `https://wa.me/${27713751901}?text=${encodeURIComponent(message)}`;

    window.open(whatsappRUL,"_blank");
})

let startX = 0;

productImage.addEventListener("pointerdown", function (event) {
    startX = event.clientX;
});
productImage.addEventListener("pointerup", function (event) {
    const difference = startXv-  event.clientX;


    if (difference > 50) {
        nextBtn.click();
    } else if (difference < -50) {
        prevBtn.click();
    }
}); 

    


// gfhfgjj
// const products = [
//     {
//         image: "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798712/tshirt-img01.jpg",
//         name: "Black T-shirt",
//         description: "A stylish black T-shirt.",
//         price: 150
//     },
//     {
//         image: "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798711/tshirt-img05.jpg",
//         name: "Personalized Mug",
//         description: "A custom mug with your own design.",
//         price: 80
//     },
//     {
//         image: "https://res.cloudinary.com/txkpxwxm/image/upload/v1791798555/tshirt-img09.jpg",
//         name: "Custom Keyholder",
//         description: "A personalized keyholder.",
//         price: 40
//     }
// ];

// let currentIndex = 0;

// // Select HTML elements
// const productImage = document.querySelector("#product-image");
// const productName = document.querySelector("#product-name");
// const productDescription = document.querySelector("#product-description");
// const productPrice = document.querySelector("#product-price");

// const nextBtn = document.querySelector("#next-btn");
// const prevBtn = document.querySelector("#prev-btn");
// const orderBtn = document.querySelector(".order-btn");

// // Display the selected product
// function showProduct() {
//     const product = products[currentIndex];

//     productImage.src = product.image;
//     productName.textContent = product.name;
//     productDescription.textContent = product.description;
//     productPrice.textContent = `R${product.price}`;
// }

// // Next button
// nextBtn.onclick = function () {
//     currentIndex = (currentIndex + 1) % products.length;
//     showProduct();
// };

// // Previous button
// prevBtn.onclick = function () {
//     currentIndex =
//         (currentIndex - 1 + products.length) % products.length;

//     showProduct();
// };

// // WhatsApp order button
// orderBtn.onclick = function () {
//     const product = products[currentIndex];

//     const phoneNumber = "27713751901"; 
//     const message =
//         `Hi! I would like to order:\n\n` +
//         `Product: ${product.name}\n` +
//         `Description: ${product.description}\n` +
//         `Price: R${product.price}`;

//     const whatsappURL = `https://wa.me/${27713751901}?text=${encodeURIComponent(message)}`;

//     window.open(whatsappURL, "_blank");
// };

// // Show the first product when the page loads
// showProduct();