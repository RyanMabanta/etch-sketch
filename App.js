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

export default App;
