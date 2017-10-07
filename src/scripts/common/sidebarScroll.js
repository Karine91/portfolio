const sidebar = document.querySelector('.sidebar');

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
            var delta = y + wScroll;
            animate({
                duration: 1000,
                timing: my_timing.easeOutOct,
                draw: function (progress) {
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
    }
};


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
};