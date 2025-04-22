const symbols = ["🌕", "🚀", "🛰️", "🪐", "👨‍🚀", "🌌", "☄️", "🛸"];
let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;

function initGame() {
  const user = localStorage.getItem("currentUser");
  document.getElementById("userDisplay").innerText = user
    ? `Player: ${user}`
    : "Not logged in";

  score = 0;
  cards = [...symbols, ...symbols]
    .sort(() => 0.5 - Math.random())
    .map((symbol, index) => ({
      id: index,
      symbol: symbol,
      matched: false,
    }));

  renderGrid();
  loadScore();
}

function renderGrid() {
  const grid = document.getElementById("cardGrid");
  grid.innerHTML = "";

  cards.forEach((card) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("data-id", card.id);
    div.innerText = "";
    div.addEventListener("click", () => flipCard(div, card));
    grid.appendChild(div);
  });
}

function flipCard(div, card) {
  if (lockBoard || card.matched || div.classList.contains("flipped")) return;

  div.innerText = card.symbol;
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

  const match = firstCard.card.symbol === secondCard.card.symbol;

  if (match) {
    firstCard.card.matched = true;
    secondCard.card.matched = true;
    updateScore();
    setTimeout(() => {
      firstCard.div.style.backgroundColor = "#66bb6a"; // green for match
      secondCard.div.style.backgroundColor = "#66bb6a";
      resetSelection();
    }, 300);
  } else {
    setTimeout(() => {
      firstCard.div.innerText = "";
      secondCard.div.innerText = "";
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

function loadScore() {
  const user = localStorage.getItem("currentUser");
  if (user) {
    const saved = parseInt(localStorage.getItem(`score_${user}`));
    score = isNaN(saved) ? 0 : saved;
    document.getElementById("score").innerText = score;
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
