import "./styles.css";

let gridDim = document.querySelector("input");
const gridContainer = document.querySelector("#grid-container");
const clear = document.querySelector('#clear');
const randColBtn = document.querySelector("#multicolored");
const monoBtn = document.querySelector("#black");
const purple = document.querySelector('#default');

function genSects(gridDim) {
  let gridArr = gridDim * gridDim;
  for(let x = 0; x <= gridArr; x++){
    onst sect = document.createElement("div");
   sect.classList.add();
   gridContainer.appendChild(sect);
  }
}
function colorMenu(square){
  let colorR = Math.floor((Math.random() * 255) + 1);
  let colorG = Math.floor((Math.random() * 255) + 1);
  let colorB = Math.floor((Math.random() * 255) + 1)
  square.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}
const rangeSlide = document.querySelector('#size-alter');
const sizeDisplay = document.querySelector('#number-mark');
purple.addEventListener('mouseover', function () {
  clearcheck();
  purple.classList.add('checked');
  status = "default";
});
randColBtn.addEventListener('click', function() {
  
})
