let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;

window.onload = initGame;

async function initGame() {
  const user = localStorage.getItem("currentUser");
  document.getElementById("userDisplay").innerText = user ? `Player: ${user}` : "Not logged in";

  loadScore(); 
  await loadImages(); 
  createCards(); 
}

async function loadImages() {
  const response = await fetch('https://images-api.nasa.gov/search?q=planet&media_type=image');
  const data = await response.json();
  const items = data.collection.items;

  const images = items.slice(0, 8).map(item => item.links[0].href); 
  const all = [...images, ...images].sort(() => 0.5 - Math.random()); 

  cards = all.map((url, index) => ({
    id: index,
    imageUrl: url,
    matched: false,
  }));
}

function createCards() {
  const grid = document.getElementById("cardGrid");
  grid.innerHTML = "";

  cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.dataset.id = card.id;

    const img = document.createElement("img");
    img.src = card.imageUrl;
    img.className = "card-img";
    img.style.visibility = "hidden";

    div.appendChild(img);
    div.addEventListener("click", () => flipCard(div, card, img));
    grid.appendChild(div);
  });
}

function flipCard(div, card, img) {
  if (lockBoard || card.matched || div.classList.contains("flipped")) return;

  img.style.visibility = "visible";
  div.classList.add("flipped");

  if (!firstCard) {
    firstCard = { div, card };
  } else {
    secondCard = { div, card };
    checkMatch();
  }
}

function checkMatch() {
  lockBoard = true;
  const isMatch = firstCard.card.imageUrl === secondCard.card.imageUrl;

  if (isMatch) {
    firstCard.card.matched = true;
    secondCard.card.matched = true;
    addScore();
    setTimeout(() => {
      firstCard.div.style.backgroundColor = "#66bb6a";
      secondCard.div.style.backgroundColor = "#66bb6a";
      clearSelection();
    }, 300);
  } else {
    setTimeout(() => {
      firstCard.div.querySelector("img").style.visibility = "hidden";
      secondCard.div.querySelector("img").style.visibility = "hidden";
      firstCard.div.classList.remove("flipped");
      secondCard.div.classList.remove("flipped");
      clearSelection();
    }, 1000);
  }
}

function clearSelection() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function addScore() {
  score++;
  document.getElementById("score").innerText = score;

  const user = localStorage.getItem("currentUser");
  if (user) {
    localStorage.setItem(`score_${user}`, score);
  }
}

function loadScore() {
  const user = localStorage.getItem("currentUser");
  if (user) {
    const saved = parseInt(localStorage.getItem(`score_${user}`));
    score = isNaN(saved) ? 0 : saved;
  } else {
    score = 0;
  }

  document.getElementById("score").innerText = score;
}

function resetGame() {
  const user = localStorage.getItem("currentUser");
  if (user) {
    localStorage.removeItem(`score_${user}`);
  }

  score = 0;
  firstCard = null;
  secondCard = null;
  lockBoard = false;

  document.getElementById("score").innerText = score;
  initGame();
}
