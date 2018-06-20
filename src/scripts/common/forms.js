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
                    password: form.password.value,
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
                alertMessage('Ваше сообщение успешно отправлено!');
                form.submit();
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
        },
    };
};

module.exports = Form().init;