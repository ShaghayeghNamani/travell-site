const hamburger = document.querySelector('#icon');
const nav = document.querySelector('.nav-mobile');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('bxs-x-circle');
    nav.classList.toggle('active')
})

// hide after click an item 
document.onclick = function(n){
    if(n.target.id !== 'icon' && n.target.id !== 'nav-mobile'){
        hamburger.classList.remove('bx-x');
        nav.classList.remove('active')
    }
}