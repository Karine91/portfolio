/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Timing = function () {
    function Timing() {
        _classCallCheck(this, Timing);

        this.easeOutQuad = this.makeEaseOut(this.easeInQuad);
        this.easeOutOct = this.makeEaseOut(this.easeInOct);
        this.easeOutCirc = this.makeEaseOut(this.easeInCirc);
        this.easeOutBack = this.makeEaseOut(this.easeInBack);
        this.easeOutBounce = this.makeEaseOut(this.easeInBounce);
        this.easeOutElastic = this.makeEaseOut(this.easeInElastic);
        this.easeInOutQuad = this.makeEaseInOut(this.easeInQuad);
        this.easeInOutOct = this.makeEaseInOut(this.easeInOct);
        this.easeInOutCirc = this.makeEaseInOut(this.easeInCirc);
        this.easeInOutBack = this.makeEaseInOut(this.easeInBack);
        this.easeInOutBounce = this.makeEaseInOut(this.easeInBounce);
        this.easeInOutElastic = this.makeEaseInOut(this.easeInElastic);
        this.idAnimate = 1;
    }

    _createClass(Timing, [{
        key: "linear",
        value: function linear(timeFraction) {
            return timeFraction;
        }
    }, {
        key: "easeInQuad",
        value: function easeInQuad(timeFraction) {
            return Math.pow(timeFraction, 2);
        }
    }, {
        key: "easeInOct",
        value: function easeInOct(timeFraction) {
            return Math.pow(timeFraction, 4);
        }
    }, {
        key: "easeInCirc",
        value: function easeInCirc(timeFraction) {
            return 1 - Math.sin(Math.acos(timeFraction));
        }
    }, {
        key: "easeInBack",
        value: function easeInBack(timeFraction) {
            var x = 1.5;
            return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
        }
    }, {
        key: "easeInBounce",
        value: function easeInBounce(timeFraction) {
            for (var a = 0, b = 1, result;; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
                }
            }
        }
    }, {
        key: "easeInElastic",
        value: function easeInElastic(timeFraction) {
            var x = 1.5;
            return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
        }
    }, {
        key: "makeEaseOut",
        value: function makeEaseOut(timing) {
            return function (timeFraction) {
                return 1 - timing(1 - timeFraction);
            };
        }
    }, {
        key: "makeEaseInOut",
        value: function makeEaseInOut(timing) {
            return function (timeFraction) {
                if (timeFraction < .5) return timing(2 * timeFraction) / 2;else return (2 - timing(2 * (1 - timeFraction))) / 2;
            };
        }
    }, {
        key: "animate",
        value: function animate(options) {
            var start = performance.now();
            var idAnimate = requestAnimationFrame(function animate(time) {
                // timeFraction от 0 до 1
                var timeFraction = (time - start) / options.duration;
                if (timeFraction > 1) timeFraction = 1;
                // текущее состояние анимации
                var progress = options.timing(timeFraction);
                options.draw(progress);
                if (timeFraction < 1) {
                    idAnimate = requestAnimationFrame(animate);
                } else {
                    if (options.callback) {
                        options.callback();
                    }
                }
            });
            this.idAnimate = idAnimate;
        }
    }, {
        key: "stopAnimate",
        value: function stopAnimate() {
            cancelAnimationFrame(this.idAnimate);
        }
    }]);

    return Timing;
}();

/* harmony default export */ __webpack_exports__["a"] = (Timing);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_slider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_preloader__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_menu_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_sidebarScroll_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_arrowScroll_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_parallaxMain_js__ = __webpack_require__(13);


var forms = __webpack_require__(4);
var gmap = __webpack_require__(5);

var blur = __webpack_require__(8);
var pollyfills = __webpack_require__(9);
var parallaxPage = __webpack_require__(10);



var skillAnimate = __webpack_require__(14);

document.addEventListener('DOMContentLoaded', function () {
    pollyfills();
    Object(__WEBPACK_IMPORTED_MODULE_1__common_preloader__["a" /* preloader */])();
    gmap();
    Object(__WEBPACK_IMPORTED_MODULE_5__common_parallaxMain_js__["a" /* parallaxMain */])();
    Object(__WEBPACK_IMPORTED_MODULE_0__common_slider__["a" /* sliderInit */])();
    forms();
    blur();
    Object(__WEBPACK_IMPORTED_MODULE_2__common_menu_js__["a" /* initMenu */])();
    Object(__WEBPACK_IMPORTED_MODULE_4__common_arrowScroll_js__["a" /* arrScroll */])();
    if (Object(__WEBPACK_IMPORTED_MODULE_3__common_sidebarScroll_js__["b" /* sidebarinit */])()) {
        Object(__WEBPACK_IMPORTED_MODULE_3__common_sidebarScroll_js__["d" /* spySidebarLinks */])();
        Object(__WEBPACK_IMPORTED_MODULE_3__common_sidebarScroll_js__["a" /* sidebarMenu */])();
    }
});

window.addEventListener('scroll', function () {
    var wScroll = window.pageYOffset;
    parallaxPage(wScroll);
    Object(__WEBPACK_IMPORTED_MODULE_3__common_sidebarScroll_js__["b" /* sidebarinit */])(wScroll);
    Object(__WEBPACK_IMPORTED_MODULE_3__common_sidebarScroll_js__["c" /* spyPostScroll */])(wScroll);
    skillAnimate();
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sliderInit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timing__ = __webpack_require__(0);
var slides = document.querySelectorAll('#slider .slider-view__item');
var nextSlide = document.querySelector('.slide-next .slider-preview__image');
var prevSlide = document.querySelector('.slide-prev .slider-preview__image');
var nextLink = document.querySelector('.slider-preview__link_next');
var prevLink = document.querySelector('.slider-preview__link_prev');
var captions = document.querySelectorAll('.caption-wrapper');
var sliderPrevContainer = document.querySelector('.slide-prev');
var sliderNextContainer = document.querySelector('.slide-next');


var my_timing = new __WEBPACK_IMPORTED_MODULE_0__timing__["a" /* default */]();

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
        }
    });
    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function draw(progress) {
            wrapper.style.top = 100 * progress + '%';
        },
        callback: function callback() {
            wrapper.style.top = "0";
        }
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
        }
    });
    my_timing.animate({
        duration: 500,
        timing: my_timing.linear,
        draw: function draw(progress) {
            wrapper.style.top = -100 * progress + '%';
        },
        callback: function callback() {
            wrapper.style.top = "0";
        }
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



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
var images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    persent_display = document.getElementById('load_perc'),
    preload_circle1 = document.querySelector(".preload-circle-1"),
    preload_circle2 = document.querySelector(".preload-circle-2"),
    preload_circle3 = document.querySelector(".preload-circle-3"),
    preloader = document.getElementById('preloader');
function loadImage(url) {
    return new Promise(function (resolve, reject) {
        var image_clone = new Image();
        image_clone.src = url;
        images_loaded_count++;
        var percent = 100 / images_total_count * images_loaded_count << 0;
        persent_display.innerHTML = percent;
        var dasharray1 = 2 * Math.PI * 144 / 2;
        var dasharray2 = 2 * Math.PI * 110 / 2;
        var dasharray3 = 2 * Math.PI * 80 / 2;
        preload_circle1.setAttribute('stroke-dashoffset', dasharray1);
        preload_circle1.setAttribute('stroke-dasharray', dasharray1);
        preload_circle2.setAttribute('stroke-dashoffset', dasharray2);
        preload_circle2.setAttribute('stroke-dasharray', dasharray2);
        preload_circle3.setAttribute('stroke-dashoffset', dasharray3);
        preload_circle3.setAttribute('stroke-dasharray', dasharray3);
        preload_circle3.setAttribute('stroke-dashoffset', (1 - percent / 100) * dasharray3);
        if (percent > 40) {
            preload_circle2.setAttribute('stroke-dashoffset', (1 - percent / 100) * dasharray2);
        }
        if (percent > 60) {
            preload_circle1.setAttribute('stroke-dashoffset', (1 - percent / 100) * dasharray1);
        }
        image_clone.onload = resolve;
        image_clone.onerror = resolve;
    });
}
function image_loaded(images) {
    return new Promise(function (resolve, reject) {
        var last = Promise.resolve();
        for (var i = 0; i < images_total_count; i++) {
            last = last.then(function () {
                return loadImage(images[images_loaded_count].src);
            });
        }
        last.then(function () {
            setTimeout(function () {
                if (!preloader.classList.contains('preloader_done')) {
                    preloader.classList.add('preloader_done');
                }
            }, 1000);
        });
    });
}

function init() {
    if (preloader) {
        image_loaded(images);
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var Form = function Form() {
    var auth = document.getElementById('authorization');
    var formCard = document.getElementById('auth-form');
    var form = document.getElementById('formAuthorize');
    var front = document.querySelector('.welcome-form__front');
    var back = document.querySelector('.welcome-form__back');
    var btn = document.getElementById('onmain');
    var ERROR = 1;
    var POPUP_WRAP_SELECTOR = '.popup-wrapper';
    var POPUP_MSG_SELECTOR = '.popup__message';
    var POPUP_CLOSE_SELECTOR = '.popup__close';

    function flipFront() {
        formCard.style.transform = "rotateY(0deg)";
        formCard.classList.remove('active');
        back.style.pointerEvents = "none";
        front.style.pointerEvents = "auto";
    }
    function flipBack() {
        formCard.style.transform = "rotateY(180deg)";
        front.style.pointerEvents = "none";
        back.style.pointerEvents = "auto";
        formCard.classList.add('active');
    }
    function flipBackOnClick(e) {
        if (formCard.classList.contains('active') === true && e.target != formCard && !e.target.closest(POPUP_WRAP_SELECTOR)) {
            flipFront();
            auth.style.display = "block";
        }
    }
    function authFlip() {

        auth.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.style.display = "none";
            flipBack();
        });

        document.addEventListener('click', flipBackOnClick);
        formCard.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            flipFront();
            auth.style.display = "block";
        });
    }
    var popupTxt = document.querySelector(POPUP_MSG_SELECTOR);
    var popupWrap = document.querySelector(POPUP_WRAP_SELECTOR);
    var popupClose = document.querySelector(POPUP_CLOSE_SELECTOR);

    function alertMessage(message, isError) {
        if (isError === ERROR) {
            popupTxt.classList.add('error');
        }
        popupWrap.classList.add('show');
        popupTxt.innerHTML = message;
        setTimeout(closePopup, 3000);
    }
    function authValidate() {
        var formCard = document.forms['form_auth'];
        var login = formCard['username'];
        var password = formCard['password'];
        var robot = formCard['no_robot'];
        var confim_robot = formCard['confim_robot'];
        var btnSubmit = document.getElementById('submitAuth');

        login.addEventListener('keydown', function () {
            if (login.value) {
                login.classList.remove('form__input_error');
            }
        });
        password.addEventListener('keydown', function () {
            if (password.value) {
                password.classList.remove('form__input_error');
            }
        });
        function validate() {
            if (!login.value || !password.value) {
                alertMessage('Заполните пожалуйста все поля');
            }
            if (!login.value && !password.value) {
                alertMessage('Заполните пожалуйста все поля');
                login.classList.add('form__input_error');
                password.classList.add('form__input_error');
                return false;
            }
            if (!login.value) {
                login.classList.add('form__input_error');
                return false;
            }
            if (!password.value) {
                password.classList.add('form__input_error');
                return false;
            }
            if (robot.checked == false || confim_robot.value == 0 || confim_robot.checked == false) {
                alertMessage('Роботам тут не место!', ERROR);
                return false;
            }
            return true;
        }
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validate()) {
                var data = {
                    username: form.username.value,
                    password: form.password.value
                };
                sendData('/api/user', data).then(function (response) {
                    window.location.replace("/admin");
                }).catch(function (err) {
                    console.warn(err.status + err.message);
                    alertMessage(err.message, ERROR);
                });
            }
        });
    }
    function closePopup(e) {
        e && e.preventDefault();
        popupWrap.classList.remove('show');
        popupTxt.classList.remove('error');
    }
    if (popupClose) {
        popupClose.addEventListener('click', closePopup);
    }

    var contactForm = document.forms['contact_form'];
    function validationContactForm() {
        var form = contactForm;
        var name = form['name'];
        var email = form['email'];
        var message = form['message'];
        var btnSubmit = document.getElementById('btnSubmit');
        var btnReset = document.getElementById('btnReset');

        function validate() {
            if (!email.value && !message.value && !name.value) {
                alertMessage('Заполните пожалуйста все поля');
                email.classList.add('form__input_error');
                message.classList.add('form__input_error');
                name.classList.add('form__input_error');
                return false;
            }
            if (!email.value || !message.value || !name.value) {
                alertMessage('Заполните пожалуйста все поля');
            }
            if (!email.value) {
                email.classList.add('form__input_error');
                return false;
            }
            if (!message.value) {
                message.classList.add('form__input_error');
                return false;
            }
            if (!name.value) {
                name.classList.add('form__input_error');
                return false;
            }
            return true;
        }

        email.addEventListener('keydown', function () {
            if (email.value) {
                email.classList.remove('form__input_error');
            }
        });
        name.addEventListener('keydown', function () {
            if (name.value) {
                name.classList.remove('form__input_error');
            }
        });
        message.addEventListener('keydown', function () {
            if (message.value) {
                message.classList.remove('form__input_error');
            }
        });
        btnSubmit.addEventListener('click', function (e) {
            e.preventDefault();
            if (validate()) {
                var data = {
                    name: name.value,
                    email: email.value,
                    message: message.value
                };
                sendData('/api/contact', data).then(function (response) {
                    alertMessage(response.message);
                }).catch(function (err) {
                    console.warn(err.status + err.message);
                    alertMessage(err.message, ERROR);
                });
            }
        });
        btnReset.addEventListener('click', function (e) {
            e.preventDefault();
            form.reset();
        });
    }

    function sendData(url, data) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));

            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;
                if (xhr.status != 200) {
                    reject(JSON.parse(xhr.responseText));
                } else {
                    resolve(JSON.parse(xhr.responseText));
                }
            };
        });
    }

    return {
        init: function init() {
            if (auth) {
                authFlip();
                authValidate();
            }
            if (contactForm) {
                validationContactForm();
            }
        }
    };
};

module.exports = Form().init;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var loadGoogleMapsAPI = __webpack_require__(6);
var gmap = document.getElementById('map');

/*global createMap google:true*/

function createMap() {
    var pos = { lat: 48.125988, lng: 37.855483 };
    var map = new google.maps.Map(gmap, {
        center: pos,
        zoom: 14,
        styles: [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#bdbdbd"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dadada"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c9c9c9"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#61dac9"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }]
    });
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: "assets/images/map_marker.svg"
    });
}

function initMap() {
    if (gmap) {
        loadGoogleMapsAPI({ key: "AIzaSyC8YfKYzYCvNpiV1UDFK2_jlHkmxe8tue8", language: "ru" }).then(function (googleMaps) {
            createMap();
        }).catch(function (err) {
            console.error(err);
        });
    }
}
module.exports = initMap;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

var OPTIONS_KEYS = ['client', 'key', 'language', 'region', 'v']

module.exports = function(options) {
  options = options || {}

  return new Promise(function(resolve, reject) {
    // Exit if not running inside a browser.
    if (typeof window === 'undefined') {
      return reject(
        new Error('Can only load the Google Maps API in the browser')
      )
    }

    // Reject the promise after a timeout.
    var timeoutId = setTimeout(function() {
      window[CALLBACK_NAME] = function() {} // Set the on load callback to a no-op.
      reject(new Error('Could not load the Google Maps API'))
    }, options.timeout || 10000)

    // Hook up the on load callback.
    window[CALLBACK_NAME] = function() {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
      resolve(window.google.maps)
      delete window[CALLBACK_NAME]
    }

    // Prepare the `script` tag to be inserted into the page.
    var scriptElement = document.createElement('script')
    var params = ['callback=' + CALLBACK_NAME]
    OPTIONS_KEYS.forEach(function(key) {
      if (options[key]) {
        params.push(key + '=' + options[key])
      }
    })
    if (options.libraries && options.libraries.length) {
      params.push('libraries=' + options.libraries.join(','))
    }
    scriptElement.src =
      'https://maps.googleapis.com/maps/api/js?' + params.join('&')

    // Insert the `script` tag.
    document.body.appendChild(scriptElement)
  })
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timing__ = __webpack_require__(0);


var my_timing = new __WEBPACK_IMPORTED_MODULE_0__timing__["a" /* default */]();

var trigger = document.getElementById('menu-button');
var wrapper = document.querySelector('.page-menu-wrapper');
var menuList = document.querySelectorAll('.page-menu__item');
var initMenu = function initMenu() {
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
            var menuListArray = [].slice.call(menuList);
            menuListArray.forEach(function (element) {
                element.style.opacity = 0;
            });
            var index = 0;
            function each() {
                if (index < menuListArray.length) {
                    var item = menuListArray[index];
                    my_timing.animate({
                        duration: 1000,
                        timing: my_timing.easeInBounce,
                        draw: function draw(progress) {
                            item.style.opacity = 1 * progress;
                            if (!menu.classList.contains('open')) {
                                my_timing.stopAnimate();
                            }
                        }
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



/***/ }),
/* 8 */
/***/ (function(module, exports) {

var blur = function () {
    var wrapper = document.querySelector('.contacts-form'),
        form = document.querySelector('.blur');
    return {
        set: function set() {
            var windowWidth = document.querySelector('.section-content_testimonials').offsetWidth,
                windowHeight = document.querySelector('.section-content_testimonials').offsetHeight,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                imgWidth = 2000,
                imgHeight = 1358;
            var imageRatio = imgWidth / imgHeight;
            var coverRatio = windowWidth / windowHeight;
            var coverWidth, coverHeight, scale;
            if (imageRatio >= coverRatio) {
                coverHeight = windowHeight;
                scale = coverHeight / imgHeight;
                coverWidth = imgWidth * scale;
            } else {
                coverWidth = windowWidth;
                scale = coverWidth / imgWidth;
                coverHeight = imgHeight * scale;
            }

            var blurCss = form.style;
            blurCss.backgroundSize = coverWidth + 'px ' + coverHeight + 'px';
            blurCss.backgroundPosition = posLeft + 'px ' + posTop + 'px';
        }
    };
}();

function init() {
    if (document.querySelector('.blur') != null) {
        blur.set();
        window.addEventListener('resize', function () {
            blur.set();
        });
    }
}

module.exports = init;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var pollyfills = function pollyfills() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }
      return null;
    };
  }
  var e = Element.prototype;
  var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
  !matches ? e.matches = e.matchesSelector = function matches(selector) {
    var matches = document.querySelectorAll(selector);
    var th = this;
    return Array.prototype.some.call(matches, function (e) {
      return e === th;
    });
  } : e.matches = e.matchesSelector = matches;
};

module.exports = pollyfills;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var bg = document.querySelector('.header-bg');
var user = document.querySelector('.hero');
var title = document.querySelector('.header-back-title');

function move(block, windowScroll, strafeAmount) {
    var strafe = windowScroll / -strafeAmount + '%';
    var transformString = 'translate3d(0, ' + strafe + ', 0)';
    var style = block.style;

    style.transform = transformString;
    style.webkitTransform = transformString;
}
function init(wScroll) {
    if (user) {
        move(bg, wScroll, 45);
        move(user, wScroll, 3);
        move(title, wScroll, 20);
    }
}

module.exports = init;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return spySidebarLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return spyPostScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timing__ = __webpack_require__(0);
var sidebar = document.querySelector('.sidebar');
var sidebar_menu_btn = document.querySelector('.sidebar__menu-btn');



var my_timing = new __WEBPACK_IMPORTED_MODULE_0__timing__["a" /* default */]();

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
                }
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



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timing__ = __webpack_require__(0);




var arrowDown = document.getElementById('arrow-bottom');
var arrowUp = document.getElementById('arrow-up');
var my_timing = new __WEBPACK_IMPORTED_MODULE_0__timing__["a" /* default */]();

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
            }
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
            }
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


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timing__ = __webpack_require__(0);



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

var animateClouds = function animateClouds(cloud, interval) {
    var my_timing = new __WEBPACK_IMPORTED_MODULE_0__timing__["a" /* default */]();
    my_timing.animate({
        duration: interval,
        timing: my_timing.linear,
        draw: function draw(progress) {
            cloud.style.transform = 'translateX(' + progress * 200 + '%)';
        }
    });
};

var moveClouds = function moveClouds() {
    var clouds = document.querySelectorAll('.cloud');
    var clouds2 = document.querySelectorAll('.cloud-group-2 ');
    var interval = 50000;
    [].slice.call(clouds).forEach(function (cloud, i) {
        animateClouds(cloud, interval);
        setInterval(function () {
            animateClouds(cloud, interval);
        }, interval + (i + 1) * 500);
    });
    [].slice.call(clouds2).forEach(function (cloud, i) {
        setTimeout(function () {
            animateClouds(cloud, interval);
            setInterval(function () {
                animateClouds(cloud, interval);
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


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var skillCircle = document.querySelectorAll('.skill-circle__second');
var skillSection = document.querySelector('.about-right-content');
function beginAnimateSkill() {
    if (skillSection.getBoundingClientRect().top < 10) {
        [].slice.call(skillCircle).forEach(function (elem) {
            elem.classList.add('circle-' + elem.getAttribute('data-percent'));
        });
    }
}
function init() {
    if (skillSection) {
        beginAnimateSkill();
    }
}
module.exports = init;

/***/ })
/******/ ]);