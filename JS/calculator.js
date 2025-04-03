const calIn = document.querySelector(".cal-in");
const calIn2 = document.querySelector(".cal-in2");
const btnPlus = document.querySelector(".button-plus");
const btnMin = document.querySelector(".button-minus");
const btnMno = document.querySelector(".button-mno");
const btnDil = document.querySelector(".button-dil");
const btnRes = document.querySelector(".button-res");
const result = document.querySelector(".cal-result");

let chf = 0;

btnPlus.addEventListener("click", () => (chf = 1));
btnMin.addEventListener("click", () => (chf = 2));
btnMno.addEventListener("click", () => (chf = 3));
btnDil.addEventListener("click", () => (chf = 4));
btnRes.addEventListener("click", calculate);

function calculate() {
  let num1 = parseFloat(calIn.value);
  let num2 = parseFloat(calIn2.value);

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Введіть числа!";
    return;
  }

  let calP = 0;

  if (chf === 1) {
    calP = num1 + num2;
  } else if (chf === 2) {
    calP = num1 - num2;
  } else if (chf === 3) {
    calP = num1 * num2;
  } else if (chf === 4) {
    if (num2 === 0) {
      result.textContent = "Ділення на 0 неможливе!";
      return;
    }
    calP = num1 / num2;
  } else {
    result.textContent = "Оберіть операцію!";
    return;
  }

  result.textContent = calP;
  chf = 0;
}
