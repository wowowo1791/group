let cards = [];
let first = null;
let second = null;
let locked = false;
let score = 0;

window.onload = startGame;

function startGame() {
  showUser();
  loadScore();
  fetchImages().then(setupBoard);
}

function showUser() {
  const user = localStorage.getItem("currentUser");
  document.getElementById("userDisplay").innerText = user ? `Player: ${user}` : "Not logged in";
}

async function fetchImages() {
  const res = await fetch('https://images-api.nasa.gov/search?q=planet&media_type=image');
  const data = await res.json();
  const images = data.collection.items.slice(0, 8).map(item => item.links[0].href);
  const shuffled = [...images, ...images].sort(() => Math.random() - 0.5);

  cards = shuffled.map((url, i) => ({
    id: i,
    imageUrl: url,
    matched: false,
  }));
}

function setupBoard() {
  const grid = document.getElementById("cardGrid");
  grid.innerHTML = "";

  cards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.dataset.id = card.id;

    const img = document.createElement("img");
    img.src = card.imageUrl;
    img.className = "card-img";
    img.style.visibility = "hidden";

    cardDiv.appendChild(img);
    cardDiv.onclick = () => handleFlip(cardDiv, card, img);
    grid.appendChild(cardDiv);
  });
}

function handleFlip(cardDiv, card, img) {
  if (locked || card.matched || cardDiv.classList.contains("flipped")) return;

  img.style.visibility = "visible";
  cardDiv.classList.add("flipped");

  if (!first) {
    first = { cardDiv, card };
  } else {
    second = { cardDiv, card };
    checkForMatch();
  }
}

function checkForMatch() {
  locked = true;

  const match = first.card.imageUrl === second.card.imageUrl;

  if (match) {
    first.card.matched = true;
    second.card.matched = true;
    updateScore();
    highlightMatch();
  } else {
    hideCards();
  }
}

function highlightMatch() {
  setTimeout(() => {
    first.cardDiv.style.backgroundColor = "#66bb6a";
    second.cardDiv.style.backgroundColor = "#66bb6a";
    resetFlip();
  }, 300);
}

function hideCards() {
  setTimeout(() => {
    first.cardDiv.querySelector("img").style.visibility = "hidden";
    second.cardDiv.querySelector("img").style.visibility = "hidden";
    first.cardDiv.classList.remove("flipped");
    second.cardDiv.classList.remove("flipped");
    resetFlip();
  }, 1000);
}

function resetFlip() {
  first = null;
  second = null;
  locked = false;
}

function updateScore() {
  score++;
  document.getElementById("score").innerText = score;

  const user = localStorage.getItem("currentUser");
  if (user) {
    localStorage.setItem(`score_${user}`, score);
  }
}


function loadScore() {
  const user = localStorage.getItem("currentUser");
  score = user ? parseInt(localStorage.getItem(`score_${user}`)) || 0 : 0;
  document.getElementById("score").innerText = score;
}


function resetGame() {
  const user = localStorage.getItem("currentUser");
  if (user) localStorage.removeItem(`score_${user}`);

  score = 0;
  first = null;
  second = null;
  locked = false;

  document.getElementById("score").innerText = score;
  startGame();
}
