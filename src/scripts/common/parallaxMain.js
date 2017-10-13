
import Timing from './timing';
const my_timing = new Timing();

const moveLayers = e => {
    const initX = window.innerWidth / 2 - e.pageX;
    const initY = window.innerHeight / 2 - e.pageY;
    let parallaxContainer = document.getElementById('parallax');
    const layers = parallaxContainer.children;
    [].slice.call(layers).forEach((layer, i) => {
        const divider = i / 100;
        const positionX = initX * divider;
        const positionY = initY * divider;
        let transformString = `translate(${positionX}px, ${positionY}px)`;
        layer.style.transform = transformString;
    });
};

const moveClouds = () => {
    const clouds = document.querySelectorAll('.cloud');
    const clouds2 = document.querySelectorAll('.cloud-group-2 ');
    const interval = 50000;
    [].slice.call(clouds).forEach((cloud, i) => {
        my_timing.animate({
            duration: interval,
            timing: my_timing.linear,
            draw: function (progress) {
                cloud.style.left = progress * 200 + '%';
            },
        });
        setInterval(() => {
            my_timing.animate({
                duration: interval,
                timing: my_timing.linear,
                draw: function (progress) {
                    cloud.style.left = progress * 200 + '%';
                },
            });
        }, interval + (i + 1) * 500);
    });
    [].slice.call(clouds2).forEach((cloud, i) => {
        setTimeout(() => {
            my_timing.animate({
                duration: interval,
                timing: my_timing.linear,
                draw: function (progress) {
                    cloud.style.left = progress * 200 + '%';
                },
            });
            setInterval(() => {
                my_timing.animate({
                    duration: interval,
                    timing: my_timing.linear,
                    draw: function (progress) {
                        cloud.style.left = progress * 200 + '%';
                    },
                });
            }, interval + (i + 1) * 500);
        }, 25000);
    });
};

function init() {
    let parallaxContainer = document.getElementById('parallax');
    if (parallaxContainer) {
        window.addEventListener('mousemove', moveLayers);
        moveClouds();
    }
}
export { init as parallaxMain };