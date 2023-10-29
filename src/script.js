const scrollers = document.querySelectorAll(".scroller");
const hamburger = document.getElementById('hamburger');
const navlist = document.querySelector('.navbar .nav-list');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click',toggleMenu);
window.addEventListener('scroll',redesignNavbar);



function toggleMenu(e) {
    if(navlist.style.display == ''){
        navlist.style.display = 'flex';
    } else {
        navlist.style.display = '';
    }
}

function redesignNavbar(){
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  
function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
}
  