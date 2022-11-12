// select all gridElements and then change their width and top padding from js

const grid = document.querySelector("#grid");
const myButton = document.createElement("button");

myButton.textContent =
  "Click me to input how many squares you want on each side";
myButton.addEventListener("click", onButtonClick);
document.body.insertBefore(myButton, grid);

function onButtonClick(e) {
  let numberSquares = window.prompt(
    "Input the number of squares you want, needs to be maximmum 100:"
  );
  if (numberSquares > 100) {
    return;
  } else {
    generateGrid(numberSquares);
  }
}

function getRandomNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}
function randomColor() {
  return `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(
    255
  )})`;
}
function onLeave(e) {
  selectedDiv = e.path[0];
  selectedDiv.style.backgroundColor = "blue";
}

function onEnter(e) {
  selectedDiv = e.path[0];
  selectedDiv.style.backgroundColor = randomColor();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function generateGrid(numberSquares) {
  removeAllChildNodes(grid);
  let percentageSquare = Math.floor(100 / numberSquares);
  for (let i = 0; i < numberSquares * numberSquares; i++) {
    let myDiv = document.createElement("div");
    myDiv.setAttribute("class", "gridElement");

    myDiv.style.width = percentageSquare + "%";
    myDiv.style.paddingTop = percentageSquare / 2 + "%";

    myDiv.addEventListener("mouseenter", onEnter);
    myDiv.addEventListener("mouseleave", onLeave);
    grid.appendChild(myDiv);
  }
}
