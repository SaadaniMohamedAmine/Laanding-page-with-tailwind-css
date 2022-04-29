//javascript for the page 
console.log('Landing page with tailwind css') ;

const menuBtn=document.getElementById("menu-button") ;
const mobileMenu=document.getElementById("mobile-menu") ;



//responsive navbar 
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('open') ;
    mobileMenu.classList.toggle('flex') ;
    mobileMenu.classList.toggle('hidden')
})



AOS.init({
    delay: 200,
    duration: 1200,
    once: false,
  });