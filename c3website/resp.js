burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  document.querySelector('.navlist').classList.toggle('dispalychanger');    
  });
//burger animation
let showMenu = false;
burger.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        burger.classList.add("close");
        // Reset the menu state
        showMenu = true;
    } else {
        burger.classList.remove("close");
        // Reset the menu state
        showMenu = false;
    }
}