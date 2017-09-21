let trigger = $('#menu-button');
let wrapper = $('.page-menu-wrapper');
var initMenu = () => {
    if(trigger){
        trigger.on('click', function(){
            var that = $(this);
            var menu = that.find('.hamburger-menu-icon'); 
            if (menu.hasClass('open')){
                menu.removeClass('open');
                wrapper.hide();
            }else{
                menu.addClass('open');
                wrapper.show();
                wrapper.on('mousewheel', function(e){
                    e.preventDefault();
                });              
            }
           
            
        });
    }  
};


module.exports = initMenu;