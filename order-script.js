const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
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
const cartToggle = document.querySelector("#cart-toggle");
const cartPanel = document.querySelector("#cart-panel");
const cartClose = document.querySelector("#cart-close");
const cartBackdrop = document.querySelector("#cart-backdrop");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartTotal = document.querySelector("#cart-total");
const checkoutButton = document.querySelector("#checkout-btn");
const cart = new Map();
const whatsappPhoneNumber = "27713751901";

function setCartOpen(isOpen) {
    cartPanel.hidden = !isOpen;
    cartBackdrop.hidden = !isOpen;
    cartToggle.setAttribute("aria-expanded", isOpen);
}

function renderCart() {
    cartItems.replaceChildren();

    let itemCount = 0;
    let total = 0;

    cart.forEach(function (item, key) {
        itemCount += item.quantity;
        total += item.price * item.quantity;

        const row = document.createElement("li");
        row.className = "cart-item";

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const name = document.createElement("strong");
        name.className = "cart-item-name";
        name.textContent = item.name;

        const price = document.createElement("span");
        price.className = "cart-item-price";
        price.textContent = `R${item.price.toFixed(2)} each`;

        const controls = document.createElement("div");
        controls.className = "cart-item-controls";

        const decreaseButton = document.createElement("button");
        decreaseButton.type = "button";
        decreaseButton.textContent = "−";
        decreaseButton.setAttribute("aria-label", `Decrease ${item.name} quantity`);
        decreaseButton.addEventListener("click", function () {
            if (item.quantity === 1) {
                cart.delete(key);
            } else {
                item.quantity -= 1;
            }
            renderCart();
        });

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;
        quantity.setAttribute("aria-label", "Quantity");

        const increaseButton = document.createElement("button");
        increaseButton.type = "button";
        increaseButton.textContent = "+";
        increaseButton.setAttribute("aria-label", `Increase ${item.name} quantity`);
        increaseButton.addEventListener("click", function () {
            item.quantity += 1;
            renderCart();
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "cart-remove";
        removeButton.textContent = "×";
        removeButton.setAttribute("aria-label", `Remove ${item.name} from cart`);
        removeButton.addEventListener("click", function () {
            cart.delete(key);
            renderCart();
        });

        info.append(name, document.createElement("br"), price);
        controls.append(decreaseButton, quantity, increaseButton, removeButton);
        row.append(info, controls);
        cartItems.append(row);
    });

    cartCount.textContent = itemCount;
    cartTotal.textContent = `R${total.toFixed(2)}`;
    cartEmpty.hidden = itemCount > 0;
    checkoutButton.disabled = itemCount === 0;
}

function addToCart(key, product) {
    const existingItem = cart.get(key);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.set(key, {
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    renderCart();
}

function formatCartPrice(amount) {
    return `R${amount.toFixed(2)}`;
}

cartToggle.addEventListener("click", function () {
    setCartOpen(cartPanel.hidden);
});

cartClose.addEventListener("click", function () {
    setCartOpen(false);
});

cartBackdrop.addEventListener("click", function () {
    setCartOpen(false);
});

checkoutButton.addEventListener("click", function () {
    if (cart.size === 0) {
        return;
    }

    const orderLines = [];
    let total = 0;
    cart.forEach(function (item) {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        orderLines.push(
            `- ${item.name} x${item.quantity} (${formatCartPrice(item.price)} each): ${formatCartPrice(subtotal)}`
        );
    });

    const message = [
        "Hello, I would like to place this order:",
        "",
        ...orderLines,
        "",
        `Total: ${formatCartPrice(total)}`,
        "",
        "Please let me know how to proceed."
    ].join("\n");
    const whatsappURL = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        setCartOpen(false);
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    }
});

orderBtn.addEventListener("click", function () {
    const product = products[currentIndex];
    addToCart(`print-${currentIndex}`, product);
});

let startX = 0;

productImage.addEventListener("pointerdown", function (event) {
    startX = event.clientX;
});
productImage.addEventListener("pointerup", function (event) {
    const difference = startX - event.clientX;


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
orderBtn2.addEventListener("click",function(){
    const product2 = products2[currentIndex2];
    addToCart(`accessory-${currentIndex2}`, {
        name: product2.name2,
        price: product2.price2
    });
});

let startX2 = 0;

productImage2.addEventListener("pointerdown", function (event) {
    startX2 = event.clientX;
});
productImage2.addEventListener("pointerup", function (event) {
    const difference2 = startX2 - event.clientX;


    if (difference2 > 50) {
        nextBtn2.click();
    } else if (difference2 < -50) {
        prevBtn2.click();
    }
}); 