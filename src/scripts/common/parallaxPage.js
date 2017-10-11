var bg = document.querySelector('.header-bg');
var user =  document.querySelector('.hero');
var title = document.querySelector('.header-back-title');

function move(block, windowScroll, strafeAmount){
    var strafe = windowScroll/ -strafeAmount + '%';
    var transformString = 'translate3d(0, '+ strafe +', 0)';
    var style = block.style;

    style.transform = transformString;
    style.webkitTransform = transformString;
}   
function init(wScroll){
    if(user){
        move(bg, wScroll, 45);
        move(user, wScroll, 3);
        move(title, wScroll, 20);
    }  
}

module.exports = init;
