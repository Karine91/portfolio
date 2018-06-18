let images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    persent_display = document.getElementById('load_perc'),
    preload_circle1 = document.querySelector(".preload-circle-1"),
    preload_circle2 = document.querySelector(".preload-circle-2"),
    preload_circle3 = document.querySelector(".preload-circle-3"),
    preloader = document.getElementById('preloader');
function loadImage(url) {
    return new Promise((resolve, reject) => {
        let image_clone = new Image();
        image_clone.src = url;
        images_loaded_count++;
        let percent = (((100 / images_total_count) * images_loaded_count) << 0);
        persent_display.innerHTML = percent;
        let dasharray1 = 2 * Math.PI * 144 /2;
        let dasharray2 = 2 * Math.PI * 110 /2;
        let dasharray3 = 2 * Math.PI * 80 /2;
        preload_circle1.setAttribute('stroke-dashoffset', dasharray1);
        preload_circle1.setAttribute('stroke-dasharray', dasharray1);
        preload_circle2.setAttribute('stroke-dashoffset', dasharray2);
        preload_circle2.setAttribute('stroke-dasharray', dasharray2);
        preload_circle3.setAttribute('stroke-dashoffset', dasharray3);
        preload_circle3.setAttribute('stroke-dasharray', dasharray3);
        preload_circle3.setAttribute('stroke-dashoffset', (1 - percent/100) * dasharray3);
        if(percent > 40){
            preload_circle2.setAttribute('stroke-dashoffset', (1 - percent/100) * dasharray2); 
        }
        if(percent > 60){
            preload_circle1.setAttribute('stroke-dashoffset', (1 - percent/100) * dasharray1);
        }
        image_clone.onload = resolve;
        image_clone.onerror = resolve;
    });
}
function image_loaded(images) {
    return new Promise((resolve, reject) => {
        let last = Promise.resolve();
        for (var i = 0; i < images_total_count; i++) {
            last = last.then(() => {
               return loadImage(images[images_loaded_count].src);
            });
        }
        last.then(() => {
            setTimeout(() => {
                if (!preloader.classList.contains('preloader_done')) {
                    preloader.classList.add('preloader_done');
                }
            }, 1000);
        });
    });
}

function init() {
    if(preloader){
        image_loaded(images);
    }
}
export {init  as preloader};