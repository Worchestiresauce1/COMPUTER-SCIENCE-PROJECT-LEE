let cart = JSON.parse(localStorage.getItem("cart")) || [];


function updateCartDisplay() {
 const cartItemsContainer = document.getElementById("cart-items");
 const cartTotal = document.getElementById("cart-total");
 const cartCount = document.getElementById("cart-count");


 cartItemsContainer.innerHTML = "";


 if (cart.length === 0) {
   cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
   cartTotal.textContent = "Total: $0";
   cartCount.textContent = 0;
   return;
 }


 let total = 0;
 cart.forEach((item, home) => {
   const div = document.createElement("div");
   div.classList.add("cart-items");
   div.innerHTML = `
     <p>${item.name} - $${item.price} x ${item.quantity}</p>
     <button onclick="removeFromCart(${home})">Remove</button>
   `;
   cartItemsContainer.appendChild(div);
   total += item.price * item.quantity;
 });


 cartTotal.textContent = "Total: $" + total;
 cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}


function removeFromCart(home) {
 cart.splice(home, 1);
 localStorage.setItem("cart", JSON.stringify(cart));
 updateCartDisplay();
}


document.getElementById("clear-cart").addEventListener("click", () => {
 cart = [];
 localStorage.setItem("cart", JSON.stringify(cart));
 updateCartDisplay();
});


updateCartDisplay();