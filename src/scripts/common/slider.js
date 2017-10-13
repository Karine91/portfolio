const slides = document.querySelectorAll('#slider .slider-view__item');
const nextSlide = document.querySelector('.slide-next .slider-preview__image');
const prevSlide = document.querySelector('.slide-prev .slider-preview__image');
const nextLink = document.querySelector('.slider-preview__link_next');
const prevLink = document.querySelector('.slider-preview__link_prev');
const captions = document.querySelectorAll('.caption-wrapper');
const sliderPrevContainer = document.querySelector('.slide-prev');
const sliderNextContainer = document.querySelector('.slide-next');
import Timing from './timing';

const my_timing = new Timing();

let currentSlide = 0;
function getIndex(n) {
    return (n + slides.length) % slides.length;
}
function goToSlide(n) {
    currentSlide = getIndex(n);
    [].slice.call(slides).forEach(element => {
        element.classList.remove('active');
    });
    [].slice.call(captions).forEach(element => {
        element.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
    captions[currentSlide].classList.add('active');
}
let initClone = false;

function changeImagePrev(n) {
    let wrapperClone;
    if (!initClone) {
        wrapperClone = document.createElement('div');
        wrapperClone.classList.add('clone-prev');
        sliderPrevContainer.prepend(wrapperClone);
        initClone = true;
    } else {
        wrapperClone = document.querySelector('.clone-prev');
    }
    let prevInd = getIndex(n);
    let currentImg = slides[prevInd].querySelector('img');
    let wrapper = prevSlide.parentElement;
    let fake = document.createElement('div');
    fake.appendChild(wrapper.cloneNode(true));
    fake.querySelector('img').src = currentImg.getAttribute('src');
    let cloneHtml = fake.innerHTML;
    wrapperClone.innerHTML = cloneHtml;

    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function (progress) {
            wrapperClone.style.top = `${-100 * (1 - progress)}%`;
        },
        callback: function () {
            prevSlide.src = currentImg.getAttribute('src');
            wrapperClone.style.top = "-100%";
        },
    });
    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function (progress) {
            wrapper.style.top = `${100 * progress}%`;
        },
        callback: function () {
            wrapper.style.top = "0";
        },
    });
}
let initCloneNext = false;
function changeImageNext(n) {
    let wrapperClone;
    if (!initCloneNext) {
        wrapperClone = document.createElement('div');
        wrapperClone.classList.add('clone-next');
        sliderNextContainer.prepend(wrapperClone);
        initCloneNext = true;
    } else {
        wrapperClone = document.querySelector('.clone-next');
    }
    let nextInd = getIndex(n);
    let wrapper = nextSlide.parentElement;
    let fake = document.createElement('div');
    fake.appendChild(wrapper.cloneNode(true));
    let currentImg = slides[nextInd].querySelector('img');
    fake.querySelector('img').src = currentImg.getAttribute('src');
    let cloneHtml = fake.innerHTML;
    wrapperClone.innerHTML = cloneHtml;
    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function (progress) {
            wrapperClone.style.top = `${100 * (1 - progress)}%`;
        },
        callback: function () {
            nextSlide.src = currentImg.getAttribute('src');
            wrapperClone.style.top = "100%";
        },
    });
    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function (progress) {
            wrapper.style.top = `${-100 * progress}%`;
        },
        callback: function () {
            wrapper.style.top = "0";
        },
    });
}
function changePreview() {
    changeImagePrev(currentSlide - 1);
    changeImageNext(currentSlide + 1);
}
function setupListeners() {
    nextLink.addEventListener('click', e => {
        e.preventDefault();
        goToSlide(++currentSlide);
        changePreview();
    });
    prevLink.addEventListener('click', e => {
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