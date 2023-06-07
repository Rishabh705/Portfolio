const menu_icon = document.querySelector(".icon");
console.log(menu_icon.classList);
const nav = document.querySelector(".navlist");
const main = document.querySelector(".main");
function perform() {
    var x = document.getElementById("nl");
    if (x.style.display === "block") {
      x.style.display = "none";
      x.style.padding = 0;
      x.style.zIndex = 1;
      menu_icon.classList.remove("icon_clicked","icon_clicked::before","icon_clicked::after");
    } else {
      x.style.display = "block";
      menu_icon.classList.add("icon_clicked","icon_clicked::before","icon_clicked::after");
    }
  }
main.addEventListener("click", () => {
    var x = document.getElementById("nl");
    if (x.style.display === "block") {
      x.style.display = "none";
      menu_icon.classList.remove("icon_clicked","icon_clicked::before","icon_clicked::after");
    }    
}, false);

//making more stars
const node1 = document.querySelector(".dot"); 
for (let i = 0; i <= 20; i++) {
  const clone1 = node1.cloneNode(true);
  document.querySelector(".star").appendChild(clone1);
}
const node2 = document.querySelector(".dot");
for (let i = 0; i <= 20; i++) {
  const clone2 = node2.cloneNode(true);
  document.querySelector(".star").appendChild(clone2);
}

//positiong the stars
var star = document.querySelector(".star");
var Dots = star.querySelectorAll('.dot');
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
// console.log(winWidth,winHeight);
for (let i = 0; i < Dots.length; i++) {
  
  var dot = Dots[i];
  randomTop = getRandomNumber(0, winHeight);
  randomLeft = getRandomNumber(0, winWidth);
  dot.style.top = randomTop + "px";
  dot.style.left = randomLeft + "px";
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Message control

let fname = document.querySelector('#fname');
console.log(fname);
let lname = document.querySelector('#lname');
console.log(lname);
let email = document.querySelector('.email');
console.log(email);
let txtarea = document.querySelector('.txtarea');
console.log(txtarea);
