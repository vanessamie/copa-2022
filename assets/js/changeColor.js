const btnChangeColor = document.querySelector('#btn-color');
  
let bgdColors = ["yellow", "blue", "green"];
let position = 0;

btnChangeColor.addEventListener("click", function (event) {
  position = (position + 1) % bgdColors.length;
  event.target.parentNode.parentNode.parentNode.className = bgdColors[position]
})