const menu_button = document.querySelector(".menu");
const menu_icon = menu_button.querySelector(".icon");
const nav = document.querySelector(".navlist");
const main = document.querySelector(".container");

menu_button.addEventListener("click", () => {
    nav.classList.toggle("navlist_open");
});

main.addEventListener("click", () => {
    nav.classList.remove("navlist_open");
});

menu_icon.addEventListener("click",()=>{
    menu_icon.classList.add("icon_clicked","icon_clicked::before",".icon_clicked::after");
});