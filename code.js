const imgs = [...document.querySelectorAll(".box img")];
const startBtn = document.querySelector(".start button");
const allSpans = [...document.querySelectorAll(".container span")];
const htpBtn = document.querySelector(".start button:nth-of-type(2)");
const exitBtn = document.querySelector(".exit");

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

imgs.forEach((item) => {
  item.addEventListener("click", playerChoice);
});

startBtn.addEventListener("click", initGame);

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
