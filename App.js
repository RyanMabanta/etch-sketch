import "./styles.css";

/*****
 * Group all the global DOM selectors up here.
 *****/

const rangeSlide = document.querySelector("#size-alter");
const sizeDisplay = document.querySelector(".show-size");
const gridContainer = document.querySelector(".grid");
const clear = document.querySelector("button.clear");
const randColBtn = document.querySelector("button.multicolored");
const monoBtn = document.querySelector("button.black");
const purple = document.querySelector("button.default");

// And then any global values...
let gridDim = rangeSlide.value;

/***
 * This is the handler function that we'll assign to each
 *   grid cell.
 */
const cellOverHandler = (event) => {
  colorMenu(event.target);
};
/***
 * The function that will generate our grid. It expects
 *   a number, and generates the grid from that.
 */
function genSects(gridDim) {
  // First, empty the current grid out.
  gridContainer.innerHTML = "";
  // Show what we'll be generating...
  sizeDisplay.textContent = `${gridDim}x${gridDim}`;
  // The grid is a square! :D
  let gridArr = gridDim * gridDim;
  // This will generate our cells, assign the class, and
  //   add our event listener.
  for (let x = 1; x <= gridArr; x++) {
    const sect = document.createElement("div");
    sect.classList.add("grid-cell");
    sect.textContent = x;
    sect.addEventListener("mouseover", cellOverHandler);
    gridContainer.appendChild(sect);
  }
}

// One of the palette functions, to color a square.
function colorMenu(square) {
  let colorR = Math.floor(Math.random() * 255 + 1);
  let colorG = Math.floor(Math.random() * 255 + 1);
  let colorB = Math.floor(Math.random() * 255 + 1);
  square.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

function colorModes(event) {
  // choose which modes to color
  switch (event.target.style.backgroundColor) {
    case "default":
      color = "purple"; // revise this
      break;
    case "black":
      color = "black"; //revise this
      break;
    case "multicolor":
      colorMenu(this.value);
      break;
  }
}

rangeSlide.addEventListener("change", function (event) {
  gridDim = Number(event.target.value);
  genSects(gridDim);
});
purple.addEventListener("mouseover", function () {
  //  clearcheck();
  purple.classList.add("checked");
  status = "default";
});
randColBtn.addEventListener("click", function (event) {
  console.log(event.target);
});

genSects(gridDim);
