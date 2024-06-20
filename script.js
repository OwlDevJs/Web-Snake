const apple = document.getElementById("apple");

const snakeHead = document.getElementById("snake");

const environement = document.getElementById("environement");

let snakeDirection = { x: 0, y: 0 };

let head = { top: 240, left: 490 };

let snake = [snakeHead]

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

  for (let i = snake.length - 1; i >= 0; i--) { 

    snake[i].style.top = `${head.top - i*20}px`;
  
    snake[i].style.left = `${head.left - i*20}px`;
  }

 
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
  if (CheckOverlap(snakeHead, apple)) {
    console.log("Apple eaten");
    let newSnake = document.createElement("div");
    newSnake.classList.add("snake");
    newSnake.style.top = `${head.top}px`;
    newSnake.style.left = `${head.left}px`;
    snake.push(newSnake);
    environement.appendChild(newSnake);
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
  let snakePositionX = parseInt(snakeHead.style.left.split("px")[0]);
  let snakePositionY = parseInt(snakeHead.style.top.split("px")[0]);

  if (snakePositionX >= 980 || snakePositionY >= 480) {
    console.log("Game Over");
  }
}
