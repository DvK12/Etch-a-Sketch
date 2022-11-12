const grid = document.querySelector("#grid");
for (let i = 0; i < 16; i++) {
  let myDiv = document.createElement("div");
  myDiv.setAttribute("class", "gridElement");
  grid.appendChild(myDiv);
}
