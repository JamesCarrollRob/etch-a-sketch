
const container = document.getElementById("grid-container");
const btn = document.getElementById("clear")
colorChange = false;

// Clears darkened grid squares
function mouseOver2(){
    boxes.forEach(item => {
    item.style.backgroundColor = "white";
    })
    
 }

 //Adds event listener to the clear button
 btn.addEventListener("click", mouseOver2);

//Function that creates a 16x16 grid
  function createGrid(){
    count = 0;
    for(let i =0; count < 256; i++){
      var gridElement = document.createElement("div");
      gridElement.className = "grid-element";
      
      container.appendChild(gridElement);
      
      count++;
     
    }
    
    console.log(count);
  }
  
  function boxListener(){
    let boxes  = document.querySelectorAll(".grid-element");
  boxes.forEach(item => {
    item.addEventListener('mouseover', event => {
      //handle click
      item.style.backgroundColor = "black";
    })
  }) 
  }

//calls grid function
  createGrid();
  boxListener();

  // function changeColor(){
  //   let boxes  = document.querySelectorAll(".grid-element");
  // boxes.forEach(item => {
  //   item.removeEventListener
  //   item.addEventListener('mouseover', event => {
  //     //handle click
  //     item.style.backgroundColor = "black";
  //   })
  // })
  // }

  // Adds event listener for grid squares
  // if (colorChange != true){
  // let boxes  = document.querySelectorAll(".grid-element");
  // boxes.forEach(item => {
  //   item.addEventListener('mouseover', event => {
  //     //handle click
  //     item.style.backgroundColor = "black";
  //   })
  // }) 
  // } else {
  //   let boxes  = document.querySelectorAll(".grid-element");
  //   boxes.forEach(item => {
  //     removeEventListener('mouseover')
  //   })
  // }
  function changeColor(){
    colorChange = !colorChange;
  }

  let colorOpt = document.getElementById("change-color")
  colorOpt.addEventListener('click', e => {
   changeColor();
    console.log("you clicked the button");
  })



 console.log("hello");