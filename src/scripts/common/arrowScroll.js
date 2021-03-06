"use strict";

import Timing from './timing';

var arrowDown = document.getElementById('arrow-bottom');
var arrowUp = document.getElementById('arrow-up');
var my_timing = new Timing();

function moveDown() {
    arrowDown.addEventListener('click', function (event) {
        var _this = this;
        var bottom = document.querySelector('.header-content__bottom');
        var winHeight = window.innerHeight;
        var wScroll = window.pageYOffset;
        var y = _this.getBoundingClientRect().top;
        var delta = y + bottom.clientHeight;
        my_timing.animate({
            duration: 1000,
            timing: my_timing.easeOutOct,
            draw: function draw(progress) {
                var scrollY = wScroll + delta * progress;
                window.scrollTo(0, scrollY);
            },
        });
        event.preventDefault();
    });
}
function moveUp() {
    arrowUp.addEventListener('click', function (event) {
        var _this = this;
        var winHeight = window.innerHeight;
        var wScroll = window.pageYOffset;
        var y = _this.getBoundingClientRect().top;
        var delta = wScroll + y;
        my_timing.animate({
            duration: 1000,
            timing: my_timing.easeOutOct,
            draw: function draw(progress) {
                var scrollY = delta * (1 - progress);
                window.scrollTo(0, scrollY);
            },
        });
        event.preventDefault();
    });
}
function init() {
    if (arrowDown) {
        moveDown();
    }
    if (arrowUp) {
        moveUp();
    }
}
export { init as arrScroll };