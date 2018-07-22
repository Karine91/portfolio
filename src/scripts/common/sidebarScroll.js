var sidebar = document.querySelector('.sidebar');
var sidebar_menu_btn = document.querySelector('.sidebar__menu-btn');

import Timing from './timing';

var my_timing = new Timing();

var body = document.body;
var html = document.documentElement;
function setScroll(n) {
    body.scrollTop = n;
    html.scrollTop = n;
}
var spySidebarLinks = function spySidebarLinks() {
    var links = sidebar.querySelectorAll('.post-list__link ');
    var sidebar_items = sidebar.querySelectorAll('.post-list__item ');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            var _this = this;
            var wScroll = window.pageYOffset;
            var id = _this.getAttribute('href');
            var y = document.querySelector(id).getBoundingClientRect().top;
            my_timing.animate({
                duration: 1000,
                timing: my_timing.easeOutOct,
                draw: function draw(progress) {
                    sidebar.classList.remove('open');
                    var scrollY = wScroll + y * progress;
                    window.scrollTo(0, scrollY);
                },
            });
            event.preventDefault();
        });
    }
};

var spyPostScroll = function spyPostScroll() {
    var post = document.querySelectorAll('.post');
    var arrPost = [].slice.call(post);
    arrPost.forEach(function (element, index) {
        var id = element.getAttribute('id');
        if (element.getBoundingClientRect().top < 10) {
            var otheritems = sidebar.querySelectorAll('.post-list__link');
            [].slice.call(otheritems).forEach(function (elem) {
                elem.parentElement.classList.remove('active');
            });
            sidebar.querySelector('.post-list__link[href="#' + id + '"]').parentElement.classList.add('active');
        }
    });
};
var spySidebarPosition = function spySidebarPosition(winScroll) {
    var blog = document.querySelector('.blog');
    if (window.matchMedia("(max-width: 768px)").matches) {
        if (blog.getBoundingClientRect().top > 0) {
            sidebar.style.display = 'none';
        } else {
            sidebar.style.display = 'block';
        }
    } else {
        sidebar.style.display = 'block';
    }
    if (winScroll >= blog.offsetTop) {
        sidebar.classList.add('sidebar_sticky');
    } else {
        sidebar.classList.remove('sidebar_sticky');
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }
};
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var menu = function menu() {
    sidebar_menu_btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        } else {
            sidebar.classList.add('open');
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
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
            /* left swipe */
            sidebar.classList.remove('open');
        } else {
            /* right swipe */
            sidebar.classList.add('open');
        }
    } else {
        if (yDiff > 0) {
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

export { init as sidebarinit, spySidebarLinks, spyPostScroll, menu as sidebarMenu };