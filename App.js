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

let currColor = "purple"; //default color

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
   gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridDim}, 1fr); grid-template-rows: repeat(${gridDim}, 1fr);`);
  for (let x = 1; x <= gridArr; x++) {
    const sect = document.createElement("div");
    sect.classList.add("grid-cell");
   // sect.textContent = x;
    sect.addEventListener("mouseover", cellOverHandler);
    gridContainer.appendChild(sect);
  }
}

// One of the palette functions, to color a square.
function colorMenu(square) {
  if(currColor == "multicolored"){
    let colorR = Math.floor(Math.random() * 255 + 1);
    let colorG = Math.floor(Math.random() * 255 + 1);
    let colorB = Math.floor(Math.random() * 255 + 1);
    square.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
  }
  else if(currColor == "purple"){
    square.style.backgroundColor = '#800080';
  }
  else if (currColor == "black"){
    square.style.backgroundColor = '#000000';
  }
  else{
    square.style.backgroundColor = '#ffffff';
  }
  
}

function colorModes(event) {
  // choose which modes to color
  switch (event.target.style.backgroundColor) {
    case "multicolored":
      colorMenu(this.value);
      break;
    case "default":
      currcolor = "purple"; // revise this
      colorMenu(currColor);
      break;
    case "black":
      currcolor = "black"; //revise this
      colorMenu(currColor);
      break;
    case "clear":
      clearGrid();
      break;
  }
}

function clearGrid(){
    document.querySelectorAll(".grid-cell").forEach(element => {
        element.style.backgroundColor = '#ffffff'
    })
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
 // console.log(event.target);
 currColor = "multicolored";
 
});

clear.addEventListener("click", function (event) {
 // console.log(event.target);
 clearGrid();
});
monoBtn.addEventListener("click", function (event) {
 // console.log(event.target);
 // colorModes(currColor);
 currColor = "black";
});
purple.addEventListener("click", function (event) {
 // console.log(event.target);
 // colorModes(currColor);
 currColor = "purple";
});

genSects(gridDim);
