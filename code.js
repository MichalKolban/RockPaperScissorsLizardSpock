const imgs = [...document.querySelectorAll(".box img")];
const startBtn = document.querySelector(".start button");

const allSpans = [...document.querySelectorAll(".container span")];

const numbers = {
  win: null,
  draw: null,
  total: null,
  lost: null,
};

const game = {
  playerChoice: null,
  computerChoice: null,
};

function playerChoice() {
  game.playerChoice = this.dataset.option;
  imgs.forEach((item) => {
    item.style.border = "";
  });
  this.style.border = "1px solid black";
}

function computerRandomPick() {
  const computerChoice = imgs[Math.floor(Math.random() * 5)].dataset.option;
  return computerChoice;
}

function checkScore(player, comp) {
  const p = player;
  const c = comp;
  if (p == c) {
    return "draw";
  } else if (
    (p == "rock" && c == "lizard") ||
    (p == "rock" && c == "scissors") ||
    (p == "lizard" && c == "paper") ||
    (p == "lizard" && c == "spock") ||
    (p == "spock" && c == "rock") ||
    (p == "spock" && c == "scissors") ||
    (p == "scissors" && c == "paper") ||
    (p == "scissors" && c == "lizard") ||
    (p == "paper" && c == "rock") ||
    (p == "paper" && c == "spock")
  ) {
    return "win";
  } else {
    return "lost";
  }
}

function printToPage(player, comp, result) {
  allSpans.forEach((item) => {
    item.style.textTransform = "uppercase";
    item.style.fontWeight = "700";
    item.style.letterSpacing = "1px";
  });

  document.querySelector(
    '[data-option="playerChoice"] span'
  ).textContent = player;
  document.querySelector('[data-option="compChoice"] span').textContent = comp;

  document.querySelector(
    '[data-score="total"] span'
  ).textContent = ++numbers.total;

  if (result === "win") {
    document.querySelector('[data-option="matchResult"] span').style.color =
      "green";
    document.querySelector(
      '[data-option="matchResult"] span'
    ).textContent = result;

    document.querySelector(
      '[data-score="win"] span'
    ).textContent = ++numbers.win;
  } else if (result === "lost") {
    document.querySelector('[data-option="matchResult"] span').style.color =
      "red";
    document.querySelector(
      '[data-option="matchResult"] span'
    ).textContent = result;

    document.querySelector(
      '[data-score="lost"] span'
    ).textContent = ++numbers.lost;
  } else {
    document.querySelector('[data-option="matchResult"] span').style.color =
      "gray";
    document.querySelector(
      '[data-option="matchResult"] span'
    ).textContent = result;

    document.querySelector(
      '[data-score="draw"] span'
    ).textContent = ++numbers.draw;
  }
}

function clearGame() {
  imgs.forEach((item) => {
    item.style.border = "";
  });
  game.playerChoice = "";
  game.computerChoice = "";
}

function initGame() {
  if (!game.playerChoice) {
    return alert("Pick one !");
  }
  game.computerChoice = computerRandomPick();
  const gameResult = checkScore(game.playerChoice, game.computerChoice);
  printToPage(game.playerChoice, game.computerChoice, gameResult);
  clearGame();
}

imgs.forEach((item) => {
  item.addEventListener("click", playerChoice);
});

startBtn.addEventListener("click", initGame);

const htpBtn = document.querySelector(".start button:nth-of-type(2)");
const exitBtn = document.querySelector(".exit");

htpBtn.addEventListener("click", function () {
  document.querySelector(".container").classList.add("blur");
  document.querySelector(".fullscreenCover").classList.add("active");
  document.querySelector(".fullscreenCover").style.display = "block";
});

exitBtn.addEventListener("click", () => {
  document.querySelector(".container").classList.remove("blur");
  document.querySelector(".fullscreenCover").classList.remove("active");
  document.querySelector(".fullscreenCover").style.display = "none";
});
