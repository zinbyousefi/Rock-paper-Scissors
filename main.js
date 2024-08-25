const computerDisplay = document.getElementById("computerDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const result = document.getElementById("result");
const ComputerResultScore = document.getElementById("computer-result-score");
const imgComputer = document.getElementById("imgComputer");
const imgPlayer = document.getElementById("imgPlayer");
let playerResultScore = document.getElementById("player-result-score");
const choices = [
  { name: "rock", src: "pics/rock.png" },
  { name: "paper", src: "pics/paper.png" },
  { name: "scissors", src: "pics/scissors.png" },
];
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  choices.forEach((choice) => {
    if (playerChoice === choice.name) {
      imgPlayer.setAttribute("src", choice.src);
    }
  });
  const computerChoice = choices[Math.floor(Math.random() * 3)].name;

  choices.forEach((choice) => {
    if (computerChoice === choice.name) {
      imgComputer.setAttribute("src", choice.src);
    }
  });
  result.innerHTML = "";

  if (playerChoice === "rock" && computerChoice === "scissors") {
    result.innerHTML = "YOU WON ! 🎉";
    playerScore += 1;
    playerResultScore.textContent = playerScore;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    result.innerHTML = "Computer Won !";
    computerScore += 1;
    ComputerResultScore.textContent = computerScore;
  } else if (playerChoice === "rock" && computerChoice === "rock") {
    result.innerHTML = "IT'S A TIE !";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result.innerHTML = "YOU WON ! 🎉";
    playerScore += 1;
    playerResultScore.textContent = playerScore;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    result.innerHTML = "Computer Won !";
    computerScore += 1;
    ComputerResultScore.textContent = computerScore;
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    result.innerHTML = "IT'S A TIE !";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    result.innerHTML = "Computer Won !";
    computerScore += 1;
    ComputerResultScore.textContent = computerScore;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result.innerHTML = "YOU WON ! 🎉";
    playerScore += 1;
    playerResultScore.textContent = playerScore;
  } else {
    result.innerHTML = "IT'S A TIE !";
  }
}
