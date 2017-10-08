const slides = document.querySelectorAll('#slider .slider-view__item');
const nextSlide = document.querySelector('.slide-next .slider-preview__image');
const prevSlide = document.querySelector('.slide-prev .slider-preview__image');
const nextLink = document.querySelector('.slider-preview__link_next');
const prevLink = document.querySelector('.slider-preview__link_prev');
const captions = document.querySelectorAll('.caption-wrapper');

let currentSlide = 0;
function getIndex(n){
    return (n+slides.length)%slides.length;
}
function goToSlide(n){
    currentSlide = getIndex(n);
    [].slice.call(slides).forEach((element)=> {
        element.classList.remove('active');
    });
    [].slice.call(captions).forEach((element)=> {
        element.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
    captions[currentSlide].classList.add('active');
}
function changeImagePrev(n){
    let prevInd = getIndex(n);
    let currentImg = slides[prevInd].querySelector('img');
    prevSlide.src = currentImg.getAttribute('src');
}
function changeImageNext(n){
    let nextInd = getIndex(n);
    let currentImg = slides[nextInd].querySelector('img');
    nextSlide.src = currentImg.getAttribute('src');
}
function changePreview(){
    changeImagePrev(currentSlide-1);
    changeImageNext(currentSlide+1);
}
function setupListeners(){
    nextLink.addEventListener('click', (e) =>{
        e.preventDefault();
        goToSlide(++currentSlide);
        changePreview();
    }); 
    prevLink.addEventListener('click', (e) =>{
        e.preventDefault();
        goToSlide(--currentSlide);
        changePreview();
    }); 
}

// function showButtons(){
//     for(var i=0; i<controls.length; i++){
//         controls[i].style.display = 'inline-block';
//     }
// }

function sliderInit(){
    if(slides.length !=0){
        setupListeners();
    }
}

module.exports = sliderInit;