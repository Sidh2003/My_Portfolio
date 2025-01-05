// Select the side menu element
const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
// Function to open the mobile menu
function openMenu() {
  sideMenu.style.transform = 'translateX(0)'; // Slide menu into view
}

// Function to close the mobile menu
function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)'; // Slide menu out of view
}


window.addEventListener('scroll',()=>{
  if(scrollY >50){
    navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm')
    navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50')
  }
  else{
    navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm')
    navLinks.classList.add ('bg-white','shadow-sm','bg-opacity-50')
  }
})