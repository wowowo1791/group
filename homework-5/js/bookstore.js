const availableBooksList = document.querySelector("#books");
const shoppingCartList = document.querySelector("#cart");
const removeBookButton = document.querySelector("#remove-book");
const noBookMessage = document.querySelector("#no-books");

const availableBooks = [
  "Hop on Pop",
  "Fox in Socks",
  "The Cat in the Hat",
  "A Fly Went By",
];
const shoppingCart = [];

function showShoppingCart() {
  shoppingCartList.innerHTML = "";
  shoppingCart.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book;
    shoppingCartList.appendChild(listItem);
  });
  
  if (shoppingCart.length === 0) {
    noBookMessage.style.display = "block";
  } else {
    noBookMessage.style.display = "none";
  }
  
  removeBookButton.disabled = shoppingCart.length === 0;
}

function addBookToCart(e) {
  shoppingCart.push(e.target.dataset.name);
  showShoppingCart();
}

function removeLastBook() {
  if (shoppingCart.length > 0) {
    shoppingCart.pop();
    showShoppingCart();
  }
}

for (let i = 0; i < availableBooks.length; i++) {
  const bookItem = document.createElement("li");
  bookItem.innerText = availableBooks[i];

  const addButton = document.createElement("button");
  addButton.innerText = "+";
  addButton.dataset.name = availableBooks[i];
  addButton.addEventListener("click", addBookToCart);
  
  bookItem.appendChild(addButton);
  availableBooksList.appendChild(bookItem);
}

removeBookButton.addEventListener("click", removeLastBook);
showShoppingCart();

