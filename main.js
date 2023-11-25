// variabels
let computerChoiseDisplay = document.getElementById("computer-choise");
let userChoiseDisplay = document.getElementById("player-choise");
let resultDisplay = document.getElementById("result");
let possibleChoises = document.querySelectorAll("button");
let userChoise;

possibleChoises.forEach((possibleChoise) =>
  possibleChoise.addEventListener("click", (e) => {
    userChoise = e.target.id;
    userChoiseDisplay.innerHTML = userChoise;
    generateComputerChoise();
    getResult();
    winOrLose();
  })
);
let computerPlay;
function generateComputerChoise() {
  const randomNumber = Math.floor(Math.random() * possibleChoises.length + 1);
  if (randomNumber === 1) {
    computerPlay = "Rock";
  } //first choise
  if (randomNumber === 3) {
    computerPlay = "Scissers";
  } //second choise
  if (randomNumber === 2) {
    computerPlay = "Paper";
  } //therd choise
  computerChoiseDisplay.innerHTML = computerPlay;
}
let result;
function getResult() {
  if (computerPlay === userChoise) {
    result = "Draw!";
  }
  if (computerPlay === "Paper" && userChoise === "Scissers") {
    result = "You Win!";
  }
  if (computerPlay === "Scissers" && userChoise === "Paper") {
    result = "You Lost!";
  }
  if (computerPlay === "Scissers" && userChoise === "Rock") {
    result = "You Win!";
  }
  if (computerPlay === "Rock" && userChoise === "Scissers") {
    result = "You Lost!";
  }
  if (computerPlay === "Rock" && userChoise === "Paper") {
    result = "You Win!";
  }
  if (computerPlay === "Paper" && userChoise === "Rock") {
    result = "You Lost!";
  }
  resultDisplay.innerHTML = result;
}

let resultField = document.getElementById("resultField");

function winOrLose() {
  if (resultDisplay.innerHTML === "You Win!") {
    resultField.classList.add("resultWin");
  } else {
    resultField.classList.remove("resultWin");
  }
  if (resultDisplay.innerHTML === "You Lost!") {
    resultField.classList.add("resultLose");
  } else {
    resultField.classList.remove("resultLose");
  }
  if (resultDisplay.innerHTML === "Draw!") {
    resultField.classList.add("draw");
  } else {
    resultField.classList.remove("draw");
  }
}
