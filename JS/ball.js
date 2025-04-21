const pole = document.getElementById("pole");
const ball = document.getElementById("ball");

ball.style.left = "0px";
ball.style.top = "0px";

pole.addEventListener("click", poleClick);

function poleClick(event) {
  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;

  let x = event.offsetX - ballWidth / 2;
  let y = event.offsetY - ballHeight / 2;
  if (x < 0) x = 0;
  if (x > pole.clientWidth - ballWidth) x = pole.clientWidth - ballWidth;
  if (y < 0) y = 0;
  if (y > pole.clientHeight - ballHeight) y = pole.clientHeight - ballHeight;
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
}
