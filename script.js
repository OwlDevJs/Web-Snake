const environement = document.getElementById("environement");

const apple = document.getElementById("apple");

const snake_part_1 = document.getElementById("snake-part-1");

apple.style.display = "none";

function addSnakePart() {
  environement.innerHTML += `<div class="snake-part-2" id="snake-part-2"></div>`;
  console.log("added");
}

function setApplePosition() {
  if (apple.style.display === "none") {
    apple.style.display = "block";
  }

  let apple_positionX = Math.floor(Math.random() * 100);

  let apple_positionY = Math.floor(Math.random() * 100);

  apple.style.right = `${apple_positionX}%`;

  apple.style.top = `${apple_positionY}%`;
}

function MoveSnakeDown() {
  snake_part_1.style.transform = "translate(0px,2000px)";
  snake_part_1.style.transition = "all 10s ease-in-out";
}

function MoveSnakeRight() {
  snake_part_1.style.transform = "translate(2000px, 0px)";
  snake_part_1.style.transition = "all 10s ease-in-out";
}

addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    MoveSnakeDown();
    //addSnakePart();
    setApplePosition();
  } else if (event.key === "ArrowRight") {
    MoveSnakeRight();
  }
});
