const booksList = document.getElementById("books");
const cartList = document.getElementById("cart");
const removeButton = document.getElementById("remove-book");
const noBooksMessage = document.getElementById("no-books");

const books = [
  "Hop on Pop",
  "Fox in Socks",
  "The Cat in the Hat",
  "A Fly Went By",
];

const cart = [];

function updateCart() {
  cartList.innerHTML = "";
  cart.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book;
    cartList.appendChild(li);
  });
  if (cart.length === 0) {
    noBooksMessage.style.display = "block";
  } else {
    noBooksMessage.style.display = "none";
  }
  removeButton.disabled = cart.length === 0;
}

function addBookToCart(event) {
  cart.push(event.target.dataset.name);
  updateCart();
}

function removeBookFromCart() {
  if (cart.length > 0) {
    cart.pop();
    updateCart();
  }
}

books.forEach((book) => {
  const li = document.createElement("li");
  li.textContent = book;
  
  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.dataset.name = book;
  addButton.addEventListener("click", addBookToCart);
  
  li.appendChild(addButton);
  booksList.appendChild(li);
});

removeButton.addEventListener("click", removeBookFromCart);
updateCart();