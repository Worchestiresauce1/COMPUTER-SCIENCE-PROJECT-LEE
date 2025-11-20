// Product list
const products = [
 { id: 1, name: "T-Shirt", price: 15 },
 { id: 2, name: "Shoes", price: 45 },
 { id: 3, name: "Hat", price: 10 },
 { id: 4, name: "Bag", price: 30 }
];


let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();


// Add to cart button
document.querySelectorAll(".add-to-cart").forEach((button, home) => {
 button.addEventListener("click", () => {
   const product = products[home];
                                                                                                                                                                                                                                                                                                                                
   // check if already in cart
   let existing = cart.find(item => item.id === product.id);
   if (existing) {
     existing.quantity += 1;
   } else {
     cart.push({ ...product, quantity: 1 });
   }


   localStorage.setItem("cart", JSON.stringify(cart));
   updateCartCount();
   alert(`${product.name} added to cart!`);
 });
});


function updateCartCount() {
 document.getElementById("cart-count").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}



