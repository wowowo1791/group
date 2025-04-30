let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;

async function initGame() {
  const user = localStorage.getItem("currentUser");
  document.getElementById("userDisplay").innerText = user
    ? `Player: ${user}`
    : "Not logged in";

  score = 0;
  document.getElementById("score").innerText = score;

  await fetchNasaImages();
  renderGrid();
}

async function fetchNasaImages() {
  const response = await fetch('https://images-api.nasa.gov/search?q=planet&media_type=image');
  const data = await response.json();
  const items = data.collection.items;


  const images = items.slice(0, 8).map(item => item.links[0].href);


  cards = [...images, ...images] 
    .sort(() => 0.5 - Math.random())
    .map((url, index) => ({
      id: index,
      imageUrl: url,
      matched: false,
    }));
}


function renderGrid() {
  const grid = document.getElementById("cardGrid");
  grid.innerHTML = "";

  cards.forEach((card) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("data-id", card.id);

    const img = document.createElement("img");
    img.src = card.imageUrl;
    img.style.visibility = "hidden"; 
    img.classList.add("card-img");

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

  const match = firstCard.card.imageUrl === secondCard.card.imageUrl;

  if (match) {
    firstCard.card.matched = true;
    secondCard.card.matched = true;
    updateScore();
    setTimeout(() => {
      firstCard.div.style.backgroundColor = "#66bb6a";
      secondCard.div.style.backgroundColor = "#66bb6a";
      resetSelection();
    }, 300);
  } else {
    setTimeout(() => {
      firstCard.div.querySelector("img").style.visibility = "hidden";
      secondCard.div.querySelector("img").style.visibility = "hidden";
      firstCard.div.classList.remove("flipped");
      secondCard.div.classList.remove("flipped");
      resetSelection();
    }, 1000);
  }
}

function resetSelection() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function updateScore() {
  score++;
  document.getElementById("score").innerText = score;
  const user = localStorage.getItem("currentUser");
  if (user) {
    localStorage.setItem(`score_${user}`, score);
  }
}

function resetGame() {
  const user = localStorage.getItem("currentUser");
  if (user) {
    localStorage.removeItem(`score_${user}`);
  }
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  score = 0;
  initGame();
}

window.onload = initGame;
