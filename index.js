//Sticky navbar
window.onscroll = function(){myScroll()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;    
function myScroll (){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight >= fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
//Toggle menu
function togglemenu() {
    document.getElementById("menu").classList.toggle('active');
}