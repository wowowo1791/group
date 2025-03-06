const doc_Flowers = document.getElementById("flowers");
const doc_Cart = document.getElementById("cart");
const doc_NoFlowers = document.getElementById("no-flowers");
const flowersList = ["Rose", "Tulip", "Daisy", "Lily"];
const cartStorage = [];

function noFlowersCheck() {
    if(cartStorage.length == 0) {
        doc_NoFlowers.style.display = "block";
    } else {
        doc_NoFlowers.style.display = "none";
    }
    console.log(cartStorage.length);
}
function refreshCart() {
    doc_Cart.innerHTML = "";
    for(let i = 0; i < cartStorage.length; i++) {
        doc_Cart.innerHTML += "<li>" + cartStorage[i] + "</li>";
    }
}
function addItemToCart(item) {
    cartStorage.push(item.target.dataset.name);
    refreshCart();
    noFlowersCheck();
}
function removeItemFromCart() {
    cartStorage.pop();
    refreshCart();
    noFlowersCheck();
}

for(let i = 0; i < flowersList.length; i++) {
    const newList = document.createElement("li");
    newList.innerText = flowersList[i];

    const newButton = document.createElement("button");
    newButton.innerText = "+";
    newButton.dataset.name = flowersList[i];
    newButton.onclick = addItemToCart;

    newList.appendChild(newButton);
    doc_Flowers.appendChild(newList);
}

document.getElementById("remove-flower").onclick = removeItemFromCart;