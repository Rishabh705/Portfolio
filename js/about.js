const menu_icon = document.querySelector(".icon");
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
