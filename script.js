let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart!`);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: ₹${total}`;
}

function toggleCart() {
  const modal = document.getElementById("cartModal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  toggleCart();
}
