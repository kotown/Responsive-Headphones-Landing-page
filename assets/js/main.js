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


// SCROLL UP 


const scrollUP= ()=>{
  const scrollup= document.getElementById('scroll-up');
  this.scrollY >=200?scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll');
}   
window.addEventListener('scroll', scrollUP);

// SCROLL SECTION ACTIVE LINK

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.add("active-link");
    } else {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// SCROLL REVEAL ANIMATION


const sr = ScrollReveal({
  distance:'60px',
  duration: 2500,
  delay:400,
  // reset: true,
  
})


sr.reveal('.home__header,.section__title',{delay: 600})
sr.reveal('.home__footer',{delay:700})
sr.reveal('.home__img',{delay:900,origin:'top'})
sr.reveal('.sponsor__img,.products__card,.footer__logo,.footer__content,.footer__copy',{origin:'top',interval:100})
sr.reveal('.specs__data,.discount__animate',{origin:'left',interval:100})
sr.reveal('.specs__img,.discount__img',{origin:'right'})
sr.reveal('.case__img',{origin:'top'})
sr.reveal('.case__data')