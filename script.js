let burger = document.querySelector('#burger');
let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.navlist');


burger = addEventListener('click', function run() {
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
    
})