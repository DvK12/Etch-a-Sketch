const grid = document.querySelector("#grid");

function onLeave(e) {
  selectedDiv = e.path[0];
  selectedDiv.classList.toggle("hovered");
}

function onEnter(e) {
  selectedDiv = e.path[0];
  selectedDiv.classList.toggle("hovered");
}

for (let i = 0; i < 16; i++) {
  let myDiv = document.createElement("div");
  myDiv.setAttribute("class", "gridElement");
  myDiv.addEventListener("mouseenter", onEnter);
  myDiv.addEventListener("mouseleave", onLeave);
  grid.appendChild(myDiv);
}
