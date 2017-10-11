const sidebar = document.querySelector('.sidebar');
const sidebar_menu_btn = document.querySelector('.sidebar__menu-btn');

import Timing from './timing';

const my_timing = new Timing();

var body = document.body;
var html = document.documentElement;
function setScroll(n) {
    body.scrollTop = n;
    html.scrollTop = n;
}
var spySidebarLinks = function () {
    const links = sidebar.querySelectorAll('.post-list__link ');
    const sidebar_items = sidebar.querySelectorAll('.post-list__item ');


    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            var _this = this;
            var wScroll = window.pageYOffset;
            var id = _this.getAttribute('href');
            var y = document.querySelector(id).getBoundingClientRect().top;
            my_timing.animate({
                duration: 1000,
                timing: my_timing.easeOutOct,
                draw: function (progress) {
                    sidebar.classList.remove('open');
                    var scrollY = wScroll + y * progress;
                    window.scrollTo(0, scrollY);
                   
                },
            });
            event.preventDefault();
        });
    }

};

var spyPostScroll = function () {
    const post = document.querySelectorAll('.post');
    const arrPost = [].slice.call(post);
    arrPost.forEach(function (element, index) {
        let id = element.getAttribute('id');
        if (element.getBoundingClientRect().top < 10) {
            let otheritems = sidebar.querySelectorAll(`.post-list__link`);
            [].slice.call(otheritems).forEach(function (elem) {
                elem.parentElement.classList.remove('active');
            });
            sidebar.querySelector(`.post-list__link[href="#${id}"]`).parentElement.classList.add('active');
        }
    });
};
var spySidebarPosition = function (winScroll) {
    const blog = document.querySelector('.blog');
    if (winScroll >= blog.offsetTop) {
        sidebar.classList.add('sidebar_sticky');
    } else {
        sidebar.classList.remove('sidebar_sticky');
        if(sidebar.classList.contains('open')){
            sidebar.classList.remove('open');
        }
    }
};
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var menu = function(){
    sidebar_menu_btn.addEventListener('click', function(e){
        e.preventDefault();
        //sidebar.classList.toggle('open');
        if(sidebar.classList.contains('open')){
            console.log('open');
            sidebar.classList.remove('open');
        }else{
            sidebar.classList.add('open');
            console.log('close'); 
        }
    });
  
    sidebar.addEventListener('touchstart', handleTouchStart, false);        
    sidebar.addEventListener('touchmove', handleTouchMove, false);
 
};
var xDown = null;                                                        
var yDown = null;  

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
}                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            sidebar.classList.remove('open'); 
        } else {
            /* right swipe */
            sidebar.classList.add('open'); 
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
}

function init(scroll) {
    if (sidebar) {
        spySidebarPosition(scroll);
        return true;
    }
}

export {
    init as sidebarinit,
    spySidebarLinks as spySidebarLinks,
    spyPostScroll as spyPostScroll,
    menu as sidebarMenu,
};