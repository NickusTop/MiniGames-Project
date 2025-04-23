const stone = document.getElementById("stone");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const stscResult = document.getElementById("stscResult");
const stscP = document.getElementById("stscP");
const aiScore = document.getElementById("ai-score");
const plScore = document.getElementById("pl-score");

let plChoice = 0;
let aiScoreCount = 0;
let plScoreCount = 0;
let varia = "";
let varia2 = "";

stone.addEventListener("click", () => setChoice(1));
scissors.addEventListener("click", () => setChoice(2));
paper.addEventListener("click", () => setChoice(3));

function setChoice(choice) {
  plChoice = choice;
  stscGame();
}

function stscGame() {
  if (plChoice === 0) {
    stscResult.textContent = "Оберіть свій варіант!";
    return;
  }

  let aiChoice = Math.floor(Math.random() * 3) + 1;

  if (plChoice === 1) {
    varia = "Камінь";
  } else if (plChoice === 2) {
    varia = "Ножниці";
  } else if (plChoice === 3) {
    varia = "Папір";
  }

  if (aiChoice === 1) {
    varia2 = "Камінь";
  } else if (aiChoice === 2) {
    varia2 = "Ножниці";
  } else if (aiChoice === 3) {
    varia2 = "Папір";
  }

  stscP.textContent = `Гравець: ${varia}, Комп’ютер: ${varia2}`;

  if (
    (plChoice === 1 && aiChoice === 2) ||
    (plChoice === 2 && aiChoice === 3) ||
    (plChoice === 3 && aiChoice === 1)
  ) {
    stscResult.textContent = "Ви виграли раунд!";
    stscResult.style.color = "#039900";
    stscP.style.marginTop = "26px";
    plScoreCount++;
    plScore.textContent = `Ви - ${plScoreCount}`;
  } else if (plChoice === aiChoice) {
    stscResult.textContent = "Нічия!";
    stscResult.style.color = "#000000";
    stscP.style.marginTop = "26px";
  } else {
    stscResult.textContent = "Комп’ютер виграв раунд!";
    stscResult.style.color = "#990000";
    stscP.style.marginTop = "26px";
    aiScoreCount++;
    aiScore.textContent = `Комп’ютер - ${aiScoreCount}`;
  }

  plChoice = 0;
}
