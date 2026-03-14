let cart = [];

function addToCart(product){

cart.push(product);

updateCart();

}

function updateCart(){

document.getElementById("cartCount").innerText = cart.length;

let cartItems = document.getElementById("cartItems");

cartItems.innerHTML = "";

cart.forEach(item => {

let li = document.createElement("li");

li.textContent = item;

cartItems.appendChild(li);

});

}