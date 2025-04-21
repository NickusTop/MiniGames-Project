const numberInput = document.getElementById("numberInput");
const guessButton = document.getElementById("guessButton");
const guessResult = document.getElementById("guessResult");

guessButton.addEventListener("click", guessButtonClick);
function guessButtonClick() {
  if (numberInput.value > 10 || numberInput.value < 1) {
    guessResult.textContent = "Максимально від 1 до 10!";
    return;
  }
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let userGuess = parseInt(numberInput.value);
  if (isNaN(userGuess)) {
    resultP.textContent = "Введіть коректне число!";
    return;
  }
  if (userGuess === randomNumber) {
    guessResult.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
    guessResult.style.color = "#039900";
  } else {
    guessResult.textContent = `Ви програли, комп’ютер загадав (${randomNumber})`;
    guessResult.style.color = "#990000";
  }
}
