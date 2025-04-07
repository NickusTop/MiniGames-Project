const inputTime = document.getElementById("input-time");
const pTime = document.getElementById("p-time");

inputTime.addEventListener("input", inputSTime);

function inputSTime() {
  let min = parseFloat(inputTime.value);
  const test = min / 60;
  const god = Math.floor(min / 60);
  console.log(test);
}
