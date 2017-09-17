const auth = document.getElementById('authorization');
const form = document.getElementById('auth-form');
const front = document.querySelector('.welcome-form__front');
const back = document.querySelector('.welcome-form__back');
const btn = document.getElementById('onmain');

function flipFront(){
    form.style.transform = "rotateY(0deg)";
    form.classList.remove('active');
    back.style.pointerEvents = "none";
    front.style.pointerEvents = "auto";
}
function flipBack(){
    form.style.transform = "rotateY(180deg)";
    front.style.pointerEvents = "none";
    back.style.pointerEvents = "auto";
    form.classList.add('active');
}
function authFlip(){

    auth.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        flipBack();
    });
    document.addEventListener('click', function(e){
        if(form.classList.contains('active') === true && e.target != form){
            flipFront(); 
        }  
    });
    form.addEventListener('click', function(e){
        e.stopPropagation();
    });
    btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        flipFront();
    });
    
}
function initFlipAuth(){
    if(auth){
        authFlip();
    }
}

module.exports = initFlipAuth;
