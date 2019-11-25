import { mainScrollFunction } from "./modules/manipulationDOM.js"

mainScrollFunction();

$('.menu-icon').on('click', () => {
    var menuItems = document.getElementById("menu-items");
    console.log(menuItems);
    if (menuItems.style.display === "block" || null) {
      menuItems.style.display = "none";
    } else {
      menuItems.style.display = "block";
    }
})