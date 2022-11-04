
const container = document.getElementById("grid-container");
const btn = document.getElementById("clear")

// Clears darkened grid squares
function mouseOver2(){
    boxes.forEach(item => {
    item.style.backgroundColor = "white";
    })
    
 }

 //Adds event listener to the clear button
 btn.addEventListener("click", mouseOver2);

// Function that creates a 16x16 grid
  function createGrid(){
    count = 0;
    for(let i =0; count < 16; i++){
      var gridElement = document.createElement("div");
      gridElement.className = "grid-element";
      
      container.appendChild(gridElement);
      
      count++;
     
    }
    
    console.log(count);
  }

// calls grid function
  createGrid();

  // Adds event listener for grid squares
  let boxes  = document.querySelectorAll(".grid-element");
  boxes.forEach(item => {
    item.addEventListener('mouseover', event => {
      //handle click
      item.style.backgroundColor = "black";
    })
  })
console.log("hello")