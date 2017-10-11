let auth = document.getElementById('authorization');
let form = document.getElementById('auth-form');
let front = document.querySelector('.welcome-form__front');
let back = document.querySelector('.welcome-form__back');
let btn = document.getElementById('onmain');

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
function flipBackOnClick(e){
    if(form.classList.contains('active') === true && e.target != form){
        flipFront();
        auth.style.display = "block"; 
    }  
}
function authFlip(){

    auth.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        this.style.display = "none";
        flipBack();

    });

    document.addEventListener('click', flipBackOnClick);
    form.addEventListener('click', function(e){
        e.stopPropagation();
    });
    btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        flipFront();
        auth.style.display = "block"; 
    });
    
}
function authValidate(){
    let form = document.forms['form_auth'];
    let login = form.login.value;
    let password = form['password'].value;
    let robot = form['no_robot'].value;
    let confim_robot = form['confim_robot'].value;
    let popupTxt = document.querySelector('.popup__message');
    let popupWrap = document.querySelector('.popup-wrapper');
    let popupClose = document.querySelector('.popup__close');
    const btnSubmit = document.getElementById('submitAuth');
    btnSubmit.addEventListener('click', function(e){
        e.preventDefault();
        if(!login){
            popupWrap.classList.add('show');
            popupTxt.innerHTML = "Заполните пожалуйста поле";
            document.removeEventListener('click', flipBackOnClick);
        }
    });
   
    popupClose.addEventListener('click', function(e){
        e.preventDefault();
        popupWrap.classList.remove('show');
        setTimeout(function(){
            document.addEventListener('click', flipBackOnClick);
        }, 500);
    });
}

function initFlipAuth(){
    if(auth){
        authFlip();
        authValidate();
    }
}

module.exports = initFlipAuth;
