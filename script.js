const apple = document.getElementById("apple");

const snake = document.getElementById("snake");

let snakeDirection = { x: 0, y: 0 };

let head = { top: 240, left: 490 };

addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    snakeDirection = { x: 0, y: -10 };
  } else if (event.key === "ArrowDown") {
    snakeDirection = { x: 0, y: 10 };
  } else if (event.key === "ArrowRight") {
    snakeDirection = { x: 10, y: 0 };
  } else if (event.key === "ArrowLeft") {
    snakeDirection = { x: -10, y: 0 };
  } else {
    return;
  }
});

addEventListener("load", () => {
  PlaceApple();
});

setInterval(() => {
  CheckGameOver();
  MoveSnake();
  CheckScore();
}, 100);

MoveSnake();

function MoveSnake() {
  head.top += snakeDirection.y;

  head.left += snakeDirection.x;

  snake.style.top = `${head.top}px`;

  snake.style.left = `${head.left}px`;
}

function PlaceApple() {
  let ApplePosition = {
    x: Math.floor(Math.random() * 980),
    y: Math.floor(Math.random() * 480),
  };

  apple.style.top = `${ApplePosition.y}px`;
  apple.style.left = `${ApplePosition.x}px`;
}

function CheckScore() {
  if (CheckOverlap(snake, apple)) {
    PlaceApple();
  }
}

function CheckOverlap(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
    rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top
  );
}

function CheckGameOver() {
  let snakePositionX = parseInt(snake.style.left.split("px")[0]);
  let snakePositionY = parseInt(snake.style.top.split("px")[0]);

  if (snakePositionX >= 980 || snakePositionY >= 480) {
    console.log("Game Over");
  }
}
