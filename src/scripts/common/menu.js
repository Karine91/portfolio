let trigger = $('#menu-button');

var initMenu = () => {
    if(trigger){
        trigger.on('click', function(){
            $(this).find('.hamburger-menu-icon').toggleClass('open');
        });
    }  
};


module.exports = initMenu;