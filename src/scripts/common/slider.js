var slides = document.querySelectorAll('#slider .slider-view__item');
var nextSlide = document.querySelector('.slide-next .slider-preview__image');
var prevSlide = document.querySelector('.slide-prev .slider-preview__image');
var nextLink = document.querySelector('.slider-preview__link_next');
var prevLink = document.querySelector('.slider-preview__link_prev');
var captions = document.querySelectorAll('.caption-wrapper');
var sliderPrevContainer = document.querySelector('.slide-prev');
var sliderNextContainer = document.querySelector('.slide-next');
import Timing from './timing';

var my_timing = new Timing();

var currentSlide = 0;
function getIndex(n) {
    return (n + slides.length) % slides.length;
}
function goToSlide(n) {
    currentSlide = getIndex(n);
    [].slice.call(slides).forEach(function (element) {
        element.classList.remove('active');
    });
    [].slice.call(captions).forEach(function (element) {
        element.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
    captions[currentSlide].classList.add('active');
}
var initClone = false;

function changeImagePrev(n) {
    var wrapperClone = void 0;
    if (!initClone) {
        wrapperClone = document.createElement('div');
        wrapperClone.classList.add('clone-prev');
        sliderPrevContainer.prepend(wrapperClone);
        initClone = true;
    } else {
        wrapperClone = document.querySelector('.clone-prev');
    }
    var prevInd = getIndex(n);
    var currentImg = slides[prevInd].querySelector('img');
    var wrapper = prevSlide.parentElement;
    var fake = document.createElement('div');
    fake.appendChild(wrapper.cloneNode(true));
    fake.querySelector('img').src = currentImg.getAttribute('src');
    var cloneHtml = fake.innerHTML;
    wrapperClone.innerHTML = cloneHtml;

    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function draw(progress) {
            wrapperClone.style.top = -100 * (1 - progress) + '%';
        },
        callback: function callback() {
            prevSlide.src = currentImg.getAttribute('src');
            wrapperClone.style.top = "-100%";
        },
    });
    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function draw(progress) {
            wrapper.style.top = 100 * progress + '%';
        },
        callback: function callback() {
            wrapper.style.top = "0";
        },
    });
}
var initCloneNext = false;
function changeImageNext(n) {
    var wrapperClone = void 0;
    if (!initCloneNext) {
        wrapperClone = document.createElement('div');
        wrapperClone.classList.add('clone-next');
        sliderNextContainer.prepend(wrapperClone);
        initCloneNext = true;
    } else {
        wrapperClone = document.querySelector('.clone-next');
    }
    var nextInd = getIndex(n);
    var wrapper = nextSlide.parentElement;
    var fake = document.createElement('div');
    fake.appendChild(wrapper.cloneNode(true));
    var currentImg = slides[nextInd].querySelector('img');
    fake.querySelector('img').src = currentImg.getAttribute('src');
    var cloneHtml = fake.innerHTML;
    wrapperClone.innerHTML = cloneHtml;
    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function draw(progress) {
            wrapperClone.style.top = 100 * (1 - progress) + '%';
        },
        callback: function callback() {
            nextSlide.src = currentImg.getAttribute('src');
            wrapperClone.style.top = "100%";
        },
    });
    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function draw(progress) {
            wrapper.style.top = -100 * progress + '%';
        },
        callback: function callback() {
            wrapper.style.top = "0";
        },
    });
}
function changePreview() {
    changeImagePrev(currentSlide - 1);
    changeImageNext(currentSlide + 1);
}
function setupListeners() {
    nextLink.addEventListener('click', function (e) {
        e.preventDefault();
        goToSlide(++currentSlide);
        changePreview();
    });
    prevLink.addEventListener('click', function (e) {
        e.preventDefault();
        goToSlide(--currentSlide);
        changePreview();
    });
}

function sliderInit() {
    if (slides.length != 0) {
        setupListeners();
    }
}

export { sliderInit };