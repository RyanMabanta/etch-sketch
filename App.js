import React from "react";
import "./styles.css";

let gridDim = document.querySelector("input");
const gridContainer = document.querySelector("#grid-container");
const clear = document.querySelector('#clear');

function genSects(gridDim) {
  let gridArr = gridDim * gridDim;
  for(let x = 0; x <= gridArr; x++){
    onst sect = document.createElement("div");
   sect.classList.add();
   gridContainer.appendChild(sect);
  }
}
function colorMenu(){
  let colorR = Math.floor((Math.random() * 255) + 1);
  let colorG = Math.floor((Math.random() * 255) + 1);
  let colorB = Math.floor((Math.random() * 255) + 1);
  square.style.backgroungColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}
