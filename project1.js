/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}


if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')

   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')

   this.scrollY >= 50 ? header.classList.add('scroll-header') 
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp) 
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

})


sr.reveal(`.home__data, .home__images`)
sr.reveal(`.home__title`, {origin: 'left'})
sr.reveal(`.home__lamp`, {origin: 'top', delay: 600})


sr.reveal('.container', {
    origin: 'right',   
    distance: '80px', 
    duration: 3000,   
    delay: 500,     
    opacity: 0,       
    scale: 0.8       
});

sr.reveal('.header', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 3000,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.home__bg', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 3000,   // How long the animation takes (in milliseconds)
    delay: 600,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.home__content', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 3500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.button', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 1000,   // How long the animation takes (in milliseconds)
    delay: 3000,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.section__subtitle', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 500,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.about__board', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.about__description', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.about__sign', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});




sr.reveal('.cats__grid', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});




sr.reveal('.cat__photo', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});



//-----------------SERVICES SECTION----------------------





sr.reveal('.menu__board ', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.plate ', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.food-img', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__food-grid', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__banner', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__subtitle', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.food-item', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.food-name', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__paper-bg ', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.drinks__board', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.call-hint', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});



sr.reveal('.contact__telephone', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.section__title', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.contact__container', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal(' .contact__map img', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.contact__map', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 800,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.contact__details', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 1000,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});



sr.reveal('.contact__right-column', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 1000,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});



sr.reveal('.contact__link img', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 1000,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.footer__container', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.footer__title', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 800,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.footer__logo', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.footer__email', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});




sr.reveal('.section__footer', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});
