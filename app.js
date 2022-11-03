const container = document.getElementById("grid-container");
// container.addEventListener('click', mouseOver);
const boxes  = document.querySelectorAll(".grid-element");
//   boxes.addEventListener('click', mouseOver2);
const btn = document.getElementById("clear")

function mouseOver2(){
    boxes.forEach(item => {
    item.style.backgroundColor = "white";
    })
    
 }
 btn.addEventListener("click", mouseOver2);

// function mouseOver(){
//     backgroundColor = "black";
// }
// document.querySelectorAll('.grid-element').forEach(item => {
//     item.addEventListener('mouseover', event => {
//       //handle click
//       item.style.backgroundColor = "black";
//     })
//   })

boxes.forEach(item => {
    item.addEventListener('mouseover', event => {
      //handle click
      item.style.backgroundColor = "black";
    })
  })

console.log("hello")