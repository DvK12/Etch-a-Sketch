// select all gridElements and then change their width and top padding from js

const grid = document.querySelector("#grid");
const myButton = document.createElement("button");

myButton.textContent = "Click to input how many squares you want on each side";
myButton.addEventListener("click", onButtonClick);
document.body.insertBefore(myButton, grid);

function onButtonClick(e) {
  let numberSquares = window.prompt(
    "Input the number of squares you want, needs to be maximum 100:"
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

function onLeave(e) {
  return;
}

function onEnter(e) {
  selectedDiv = e.path[0];
  let opacity = selectedDiv.style.backgroundColor
    .split(",")
    [selectedDiv.style.backgroundColor.split(",").length - 1].slice(0, -1);
  let newOpacity = parseFloat(opacity) + 0.1;

  if (selectedDiv.hasAttribute("black")) {
    selectedDiv.style.backgroundColor = `rgba(0,0,0,1)`;
  } else if (opacity == 0.9) {
    selectedDiv.setAttribute("black");
  } else {
    selectedDiv.style.backgroundColor = `rgba(0,0,0,${Math.min(
      newOpacity,
      1
    )})`;
  }
}
function clearGrid(grid) {
  grid.innerHTML = "";
}
function generateGrid(numberSquares) {
  clearGrid(grid);
  let percentageSquare = Math.round((100 / numberSquares) * 100) / 100;
  for (let i = 0; i < numberSquares * numberSquares; i++) {
    let myDiv = document.createElement("div");
    myDiv.setAttribute("class", "gridElement");

    myDiv.style.width = percentageSquare + "%";
    myDiv.style.paddingTop = percentageSquare / 2 + "%";
    myDiv.style.backgroundColor = "rgba(0,0,0,0)";

    myDiv.addEventListener("mouseenter", onEnter);
    myDiv.addEventListener("mouseleave", onLeave);
    grid.appendChild(myDiv);
  }
}
