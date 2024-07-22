// SHOW MENU
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// validate if the navclose exists 
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink= document.querySelectorAll('.nav__link');
function linkAction(){
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));


// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const header = document.getElementById('header');
    this.scrollY >=50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);



// SCROLL SECTION ACTIVE LINK

// SCROLL REVEAL ANIMATION
