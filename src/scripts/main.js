document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll('[data-tab-question]');
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click',abreouFechaResposta)
    }
})
class MobileNavBar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        
    }
    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
        });
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();


function abreouFechaResposta(elemento){
    const classe = 'curiosidades__list__item--is-open';
    console.log(elemento);
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}
