const auth = document.getElementById('authorization');
const form = document.getElementById('auth-form');

function authFlip(){

    auth.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        form.style.transform = "rotateY(180deg)";
        form.classList.add('active');
    });
    document.addEventListener('click', function(e){
        if(form.classList.contains('active') === true && e.target != form){
            console.log(form.classList.contains('active'));
            console.log(form.classList);
            form.style.transform = "rotateY(0deg)";
            form.classList.remove('active');
        }  
    });
    form.addEventListener('click', function(e){
        e.stopPropagation();
    });
    
}
function initFlipAuth(){
    if(auth){
        authFlip();
    }
}

module.exports = initFlipAuth;
