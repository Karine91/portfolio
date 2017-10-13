import Timing from './timing';

const my_timing = new Timing();

let trigger = document.getElementById('menu-button');
let wrapper = document.querySelector('.page-menu-wrapper');
let menuList = document.querySelectorAll('.page-menu__item');
var initMenu = () => {
    if (trigger) {
        trigger.addEventListener('click', function () {
            var that = this;
            var menu = that.querySelector('.hamburger-menu-icon');
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
                wrapper.classList.remove('open');
                wrapper.style.display = "none";
                document.body.style.overflow = "visible";
            } else {
                menu.classList.add('open');
                wrapper.classList.add('open');
                wrapper.style.display = "block";
                document.body.style.overflow = "hidden";
                wrapper.addEventListener('mousewheel', function (e) {
                    e.preventDefault();
                });
            }
            let menuListArray = [].slice.call(menuList);
            menuListArray.forEach(function (element) {
                element.style.opacity = 0;
            });
            let index = 0;
            function each() {
                if (index < menuListArray.length) {
                    let item = menuListArray[index];
                    my_timing.animate({
                        duration: 1000,
                        timing: my_timing.easeInBounce,
                        draw: function (progress) {
                            item.style.opacity = 1 * progress;
                            if (!menu.classList.contains('open')) {
                                my_timing.stopAnimate();
                            }
                        },
                    });

                    index++;
                    setTimeout(each, 200);
                }
            }
            setTimeout(function () {
                each();
            }, 1100);
        });
    }
};

export { initMenu };