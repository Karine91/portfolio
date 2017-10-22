
import Timing from './timing';
var my_timing = new Timing();

var moveLayers = function moveLayers(e) {
    var initX = window.innerWidth / 2 - e.pageX;
    var initY = window.innerHeight / 2 - e.pageY;
    var parallaxContainer = document.getElementById('parallax');
    var layers = parallaxContainer.children;
    [].slice.call(layers).forEach(function (layer, i) {
        var divider = i / 100;
        var positionX = initX * divider;
        var positionY = initY * divider;
        var transformString = 'translate(' + positionX + 'px, ' + positionY + 'px)';
        layer.style.transform = transformString;
    });
};

var moveClouds = function moveClouds() {
    var clouds = document.querySelectorAll('.cloud');
    var clouds2 = document.querySelectorAll('.cloud-group-2 ');
    var interval = 50000;
    [].slice.call(clouds).forEach(function (cloud, i) {
        my_timing.animate({
            duration: interval,
            timing: my_timing.linear,
            draw: function draw(progress) {
                cloud.style.left = progress * 200 + '%';
            },
        });
        setInterval(function () {
            my_timing.animate({
                duration: interval,
                timing: my_timing.linear,
                draw: function draw(progress) {
                    cloud.style.left = progress * 200 + '%';
                },
            });
        }, interval + (i + 1) * 500);
    });
    [].slice.call(clouds2).forEach(function (cloud, i) {
        setTimeout(function () {
            my_timing.animate({
                duration: interval,
                timing: my_timing.linear,
                draw: function draw(progress) {
                    cloud.style.left = progress * 200 + '%';
                },
            });
            setInterval(function () {
                my_timing.animate({
                    duration: interval,
                    timing: my_timing.linear,
                    draw: function draw(progress) {
                        cloud.style.left = progress * 200 + '%';
                    },
                });
            }, interval + (i + 1) * 500);
        }, 25000);
    });
};

function init() {
    var parallaxContainer = document.getElementById('parallax');
    if (parallaxContainer) {
        window.addEventListener('mousemove', moveLayers);
        moveClouds();
    }
}
export { init as parallaxMain };