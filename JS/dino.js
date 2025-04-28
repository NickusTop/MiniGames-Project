const cactus = document.querySelector(".cactus");
const dino = document.querySelector(".dinodino");

let cactusLeft = 690;
let dinoBottom = 0;
let isJumping = false;
let gameInterval;
let cactusSpeed = 10;
let gameStarted = false;

document.addEventListener("keydown", handleStartAndJump);

function handleStartAndJump(event) {
  if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
    if (event.code === "Space") {
      event.preventDefault();
    }

    if (event.code === "Space" && !gameStarted) {
      gameStarted = true;
      startGame();
    } else if (event.code === "Space" && !isJumping) {
      isJumping = true;
      jump();
    }
  }
}

function jump() {
  let jumpHeight = 0;
  const jumpUp = setInterval(() => {
    if (jumpHeight >= 120) {
      clearInterval(jumpUp);
      fall();
    } else {
      jumpHeight += 5;
      dinoBottom += 5;
      dino.style.bottom = dinoBottom + "px";
    }
  }, 20);
}

function fall() {
  const fallDown = setInterval(() => {
    if (dinoBottom <= 0) {
      clearInterval(fallDown);
      isJumping = false;
      dinoBottom = 0;
      dino.style.bottom = dinoBottom + "px";
    } else {
      dinoBottom -= 5;
      dino.style.bottom = dinoBottom + "px";
    }
  }, 20);
}

function moveCactus() {
  cactusLeft -= cactusSpeed;

  if (cactusLeft <= -30) {
    cactusLeft = 660;
  }

  cactus.style.left = cactusLeft + "px";

  if (cactusLeft < 100 && cactusLeft > 50 && dinoBottom < 80) {
    gameOver();
  }
}

function startGame() {
  gameInterval = setInterval(moveCactus, 20);
}

function gameOver() {
  clearInterval(gameInterval);
  alert("Game Over! Press OK to Restart.");
  resetGame();
}

function resetGame() {
  cactusLeft = 660;
  dinoBottom = 0;
  isJumping = false;
  dino.style.bottom = "0px";
  cactus.style.left = cactusLeft + "px";
  gameStarted = false;
}
