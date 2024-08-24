let cartItems = [];
let total = 0;

function addToCart(productName, productPrice) {
    let product = {
        name: productName,
        price: productPrice
    };

    cartItems.push(product);
    total += product.price;

    updateCartUI();
}

function updateCartUI() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    cartItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    // In a real scenario, you would proceed to a checkout page,
    // but for this example, we'll just alert the total.
    alert(`Total: $${total.toFixed(2)}`);
}
