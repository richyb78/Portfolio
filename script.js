// JavaScript code
const myImg = document.getElementById("myImg");


myImg.addEventListener("click", function() {
  if (myImg.src.endsWith("puter1.jpg")) {
    myImg.src = "Pictures/puter2.jpg";
  } else if (myImg.src.endsWith("puter2.jpg")) {
    myImg.src = "Pictures/puter3.jpg";
  } else if (myImg.src.endsWith("puter3.jpg")) {
    myImg.src = "Pictures/puter1.jpg";
  }
  
});