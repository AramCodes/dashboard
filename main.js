const menuBtn = document.querySelector('.hamburger-menu')
const backBtn = document.querySelector('.back-btn')
const menu = document.querySelector('nav')
 
menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)'
})

backBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)';
})