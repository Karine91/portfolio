const sidebar = document.querySelector('.sidebar');
const blog = document.querySelector('.blog');
const links = sidebar.querySelectorAll('.post-list__link ');

function spySidebarLinks(winScroll){
    var V = 0.65;
    for(var i=0; i<links.length; i++){
        links[i].addEventListener('click', function(event){
            var id = this.getAttribute('href');
            var y = document.querySelector(id).getBoundingClientRect().top;
            var delta = y - winScroll;
            var start = null;
            //document.body.scrollTop = winScroll + delta;
            requestAnimationFrame(step);
            function step(time) {
              if (start === null) start = time;
              var progress = time - start,
                  r = (y < 0 ? Math.max(winScroll - progress/V, winScroll + y) : Math.min(winScroll + progress/V, winScroll + y));
              window.scrollTo(0,r);
              if (r != winScroll + y) {
                requestAnimationFrame(step);
              }
            } 
            
            event.preventDefault();
        });
    }
} 

function spySidebarPosition(winScroll){
    if(winScroll >= blog.offsetTop){
        sidebar.classList.add('sidebar_sticky'); 
    }else{
        sidebar.classList.remove('sidebar_sticky'); 
    }
}
function init(scroll){
    if(sidebar){
        spySidebarPosition(scroll);
        spySidebarLinks(scroll);
    }
}
module.exports = init;