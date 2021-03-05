function initGame() {
    if (!game.playerChoice) {
      return alert("Pick one !");
    }
    game.computerChoice = computerRandomPick();
    const gameResult = checkScore(game.playerChoice, game.computerChoice);
    printToPage(game.playerChoice, game.computerChoice, gameResult);
    clearGame();
  }

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
  
  function clearGame() {
    imgs.forEach((item) => {
      item.style.border = "";
    });
    game.playerChoice = "";
    game.computerChoice = "";
  }

