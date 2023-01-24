const grid = document.getElementById("grid");
const centerImage = document.getElementById("center-image");
const body = document.getElementById("body");
function makeLarge(gridPosX, gridPosY, direction) {
  var columnSizes, rowSizes;
  columnSizes = ["22.5%", "22.5%", "22.5%"];
  rowSizes = ["22.5%", "22.5%", "22.5%"];
  columnSizes[gridPosX - 1] = "45%";
  rowSizes[gridPosY - 1] = "45%";
  body.classList.add("background-white");
  body.classList.remove("background-black");
  grid.style.gridTemplateColumns = columnSizes.join(" ");
  grid.style.gridTemplateRows = rowSizes.join(" ");
  if (parseInt(gridPosX) != 2) {
    centerImage.classList.add("left-right");
  } else if (parseInt(gridPosY) != 2) {
    centerImage.classList.add("top-bottom");
  }
}

// SMOOTH GRID SHAPE ANIMATION:
// 1. remove grid-shaper in js
// 2. change 2 shape variables with js
// 3. change grid-shaper with the variables
// 4. add grid-shaper again in js

// need to update grid-shaper to animate the variable change?

function makeNormal() {
  grid.style.gridTemplateColumns = "30% 30% 30%";
  grid.style.gridTemplateRows = "30% 30% 30%";
  body.classList.remove("background-white");
  body.classList.add("background-black");
  centerImage.classList.remove("top-bottom", "left-right");
}

function backgroundColor(color) {
  document.style.backgroundColor = "white";
}
