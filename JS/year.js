const yearInput = document.getElementById("yearInput");
const buttonInput = document.getElementById("buttonInput");
const resultP = document.getElementById("result");
const yearValue = yearInput.value;

buttonInput.addEventListener("click", clickButton);

function clickButton() {
  const yearValue = parseInt(yearInput.value);

  if (isNaN(yearValue)) {
    resultP.textContent = "Введіть коректний рік!";
    return;
  }

  if ((yearValue % 4 === 0 && yearValue % 100 !== 0) || yearValue % 400 === 0) {
    resultP.textContent = "Ви народилися у високосний рік!";
    resultP.style.color = "#039900";
  } else {
    resultP.textContent = "Ви народилися не у високосний рік!";
    resultP.style.color = "#990000";
  }
}
