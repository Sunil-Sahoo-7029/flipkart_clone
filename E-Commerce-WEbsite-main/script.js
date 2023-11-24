const header = document.querySelector(".Header");
const nav = document.querySelector(".Navbar");
const topOfNav = header.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    nav.style.paddingTop = header.offsetHeight + 2 + "px";
  } else {
    nav.style.paddingTop = 0;
  }
}
// for fixing the navbar at top
window.addEventListener("scroll", fixNav);

//Electronic product slide
const Electronicproduct = [
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/612/612/kzzw5u80/keyboard/multi-device-keyboard/o/2/d/km3322w-km3322w-keyboard-mouse-combo-anti-fade-spill-resistant-original-imagbvyatqteauf2.jpeg?q=70",
    name: "Wireless Mouse & Keyboard",
    price: 169,
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/612/612/l4pxk7k0/usb-gadget/w/z/b/dlk5527c-00-philips-original-imagfjxz3na675mv.jpeg?q=70",
    name: "UPS & Router UPS",
    price: 999,
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70",
    name: "ASUS Monitor",
    price: 14999,
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/612/612/l4pxk7k0/usb-gadget/g/8/v/dlk5526cg-11-philips-original-imagfjxzfsgu7nvu.jpeg?q=70",
    name: "USB Gadgets",
    price: 179,
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/612/612/kgpg5u80/printer/e/e/h/brother-dcp-b7535dw-original-imafwvkzwyjmqkfv.jpeg?q=70",
    name: "Monitors",
    price: 19539,
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
    name: "Top Mirrorless Camera",
    price: 33990,
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/312/312/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
    name: "Monitor",
    price: 8279,
  },
  {
    imgurl:
      "https://rukminim2.flixcart.com/image/200/200/xif0q/projector/r/g/x/o9-pro-zen-automatic-android-24-eo9025-full-hd-egate-original-imagtjpjwjjhyuaj.jpeg?q=70",
    name: "Projector",
    price: 6990,
  },
];

let renderproduct = "";
let cardProductContainer = document.getElementById("cart-product-container");
for (let i = 0; i < Electronicproduct.length; i++) {
  renderproduct += `
       <div class="card-product">
          <div class="border_p">
            <div class="productImageContainer">
            <img src="${Electronicproduct[i].imgurl}">
            </div>
            <h3 class="card-product-name">${Electronicproduct[i].name}</h3>
            <p class="card-product-prise">From &#x20B9;${Electronicproduct[i].price}</p>
          </div>
       </div>
    `;
}

cardProductContainer.innerHTML = renderproduct;

let cardBtnRightEl = document.getElementById("card-btn-right");
let cardBtnLeftEl = document.getElementById("card-btn-left");

cardBtnRightEl.addEventListener("click", function () {
  cardProductContainer.style.transform = "translateX(-51%)";
  cardProductContainer.style.transition = "1s";
  cardBtnRightEl.style.display = "none";
  cardBtnLeftEl.style.display = "block";
});

cardBtnLeftEl.addEventListener("click", function () {
  cardProductContainer.style.transform = "translateX(0%)";
  cardProductContainer.style.transition = "1s";
  cardBtnRightEl.style.display = "block";
  cardBtnLeftEl.style.display = "none";
});

// let cart = [];
// let total = 0;

// function addToCart(productName, price) {
//     cart.push({ name: productName, price: price });
//     total += price;
//     updateCartModal();
// }

// function updateCartModal() {
//     const cartModal = document.getElementById('cartModal');
//     const cartItemsContainer = document.getElementById('cartItems');
//     const totalPriceElement = document.getElementById('totalPrice');

//     // Clear previous cart items
//     cartItemsContainer.innerHTML = '';

//     // Update cart items in the modal
//     cart.forEach(item => {
//         const cartItem = document.createElement('p');
//         cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartItemsContainer.appendChild(cartItem);
//     });

//     // Update total price
//     totalPriceElement.textContent = total.toFixed(2);

//     // Show the cart modal
//     $(cartModal).modal('show');
// }

// // Add click event to the Cart button
// document.getElementById('cartButton').addEventListener('click', function () {
//     updateCartModal();
// });

function addToCart(itemName, itemPrice) {
  alert("Product added to cart!");
  var cartItem = document.createElement("li");
  cartItem.textContent = itemName + " - ₹" + itemPrice;
  document.getElementById("cartItems").appendChild(cartItem);
  updateCartTotal(itemPrice);
}
function updateCartTotal(itemPrice) {
  var currentTotal = parseFloat(
    document.getElementById("cartTotal").textContent
  );
  var newTotal = currentTotal + itemPrice;
  document.getElementById("cartTotal").textContent = newTotal.toFixed(2);
}

// Function to show the "Add to Cart" button
function showAddToCartButton() {
  document.getElementById("addToCartButton").style.display = "block";
}

// Function to hide the "Add to Cart" button
function hideAddToCartButton() {
  document.getElementById("addToCartButton").style.display = "none";
}

