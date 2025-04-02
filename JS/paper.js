const stone = document.getElementById("stone");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const stscResult = document.getElementById("stscResult");
const stscButton = document.getElementById("stscButton");
const aiScore = document.getElementById("ai-score");
const plScore = document.getElementById("pl-score");

let plChoice = 0;
let aiScor = 0;
let plScor = 0;

stone.addEventListener("click", () => setChoice(1));
scissors.addEventListener("click", () => setChoice(2));
paper.addEventListener("click", () => setChoice(3));

function setChoice(choice) {
  plChoice = choice;
}

stscButton.addEventListener("click", stscGame);

function stscGame() {
  if (plChoice === 0) {
    stscResult.textContent = "Оберіть свій варіант!";
    return;
  }

  let aiChoice = Math.floor(Math.random() * 3) + 1;
  console.log(`Гравець: ${plChoice}, Комп’ютер: ${aiChoice}`);

  if (
    (plChoice === 1 && aiChoice === 2) ||
    (plChoice === 2 && aiChoice === 3) ||
    (plChoice === 3 && aiChoice === 1)
  ) {
    stscResult.textContent = "Ви виграли раунд!";
    plScor++;
    plScore.textContent = `Ви - ${plScor}`;
  } else {
    stscResult.textContent = "Комп’ютер виграв раунд!";
    aiScor++;
    aiScore.textContent = `Комп’ютер - ${aiScor}`;
  }

  plChoice = 0;
}
