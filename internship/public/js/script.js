const btnMobileMenu = document.getElementById('btn-mobilemenu');
const btnMobileMenuClose = document.getElementById('btn-mobilemenuclose');
const mobileMenu = document.getElementById('mobilemenu');
const cardWebDesign = document.getElementById('card-webdesign');
const cardAppDevelopment = document.getElementById('card-appdevelopment');
const cardGraphicDesign = document.getElementById('card-graphicdesign');
const cardConsulting = document.getElementById('card-consulting');
const mediaQuery = window.matchMedia( "(max-width: 764px)" );


btnMobileMenu.addEventListener('click', () => {
    btnMobileMenu.classList.toggle('hidden');
    btnMobileMenuClose.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
});

btnMobileMenuClose.addEventListener('click', () => {
    btnMobileMenu.classList.toggle('hidden');
    btnMobileMenuClose.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
});


cardWebDesign.addEventListener('click', () => {
    if(mediaQuery.matches){
        cardAppDevelopment.classList.toggle('mt-32');
        cardGraphicDesign.classList.toggle('mt-60');
        cardConsulting.classList.toggle('mt-84');
    }

    
});
   
        
    

