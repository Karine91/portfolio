const sidebar = document.querySelector('.sidebar');
const blog = document.querySelector('.blog');
const links = sidebar.querySelectorAll('.post-list__link ');
const sidebar_items = sidebar.querySelectorAll('.post-list__item ');
import Timing from './timing';    

const my_timing = new Timing(); 

function animate(options) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        // timeFraction от 0 до 1
        let timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;
        // текущее состояние анимации
        let progress = options.timing(timeFraction);
        options.draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
var body = document.body;
var html = document.documentElement;
function setScroll(n){
    body.scrollTop = n;
    html.scrollTop = n;
}
var spySidebarLinks = function (){
    for(var i=0; i<links.length; i++){
        links[i].addEventListener('click', function(event){
            var _this = this;
            for(var j=0; j<sidebar_items.length; j++){
                sidebar_items[j].classList.remove('active');
            }
            _this.parentElement.classList.add('active');
            var wScroll = window.pageYOffset;
            var id = _this.getAttribute('href');
            var y = document.querySelector(id).getBoundingClientRect().top;
            var delta = y + wScroll;
            animate({
                duration: 1000,
                timing: my_timing.easeOutOct,
                draw: function(progress){
                    var scrollY = wScroll + y*progress; 
                    window.scrollTo(0, scrollY);
                },
            });
            event.preventDefault();   
        });
    }
}; 
    
var spySidebarPosition = function (winScroll){
    if(winScroll >= blog.offsetTop){
        sidebar.classList.add('sidebar_sticky'); 
    }else{
        sidebar.classList.remove('sidebar_sticky'); 
    }
};
function init(scroll){
    if(sidebar){
        spySidebarPosition(scroll);
        return true;
    }
}    

export {
    init as sidebarinit,
    spySidebarLinks as spySidebarLinks,
};