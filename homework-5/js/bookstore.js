document.addEventListener("DOMContentLoaded", function() {
    const booksList = document.getElementById("books");
    const cartList = document.getElementById("cart");
    const noBooksMessage = document.getElementById("no-books");
    const removeButton = document.getElementById("remove-book");
    
    const availableBooks = ["Hop on Pop", "Fox in Socks", "The Cat in the Hat", "A Fly Went By"];
    let cart = [];

    function updateCart() {
        cartList.innerHTML = "";
        for (let i = 0; i < cart.length; i++) {
            const li = document.createElement("li");
            li.textContent = cart[i];
            cartList.appendChild(li);
        }
        noBooksMessage.style.display = cart.length ? "none" : "block";
    }

    for (let i = 0; i < availableBooks.length; i++) {
        const li = document.createElement("li");
        li.textContent = availableBooks[i] + " ";
        
        const button = document.createElement("button");
        button.textContent = "+";
        button.setAttribute("data-item", availableBooks[i]);
        button.addEventListener("click", function() {
            cart.push(this.getAttribute("data-item"));
            updateCart();
        });
        
        li.appendChild(button);
        booksList.appendChild(li);
    }

    removeButton.addEventListener("click", function() {
        if (cart.length) {
            cart.pop();
            updateCart();
        }
    });

    updateCart();
});
