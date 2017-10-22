var Form = function Form() {
    var auth = document.getElementById('authorization');
    var form = document.getElementById('auth-form');
    var front = document.querySelector('.welcome-form__front');
    var back = document.querySelector('.welcome-form__back');
    var btn = document.getElementById('onmain');

    function flipFront() {
        form.style.transform = "rotateY(0deg)";
        form.classList.remove('active');
        back.style.pointerEvents = "none";
        front.style.pointerEvents = "auto";
    }
    function flipBack() {
        form.style.transform = "rotateY(180deg)";
        front.style.pointerEvents = "none";
        back.style.pointerEvents = "auto";
        form.classList.add('active');
    }
    function flipBackOnClick(e) {
        if (form.classList.contains('active') === true && e.target != form) {
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
        form.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            flipFront();
            auth.style.display = "block";
        });
    }
    var popupTxt = document.querySelector('.popup__message');
    var popupWrap = document.querySelector('.popup-wrapper');
    var popupClose = document.querySelector('.popup__close');

    function alertEmptyField() {
        popupWrap.classList.add('show');
        popupTxt.innerHTML = "Заполните пожалуйста все поля";
        if (auth) {
            document.removeEventListener('click', flipBackOnClick);
        }
    }
    function authValidate() {
        var form = document.forms['form_auth'];
        var login = form.login;
        var password = form['password'];
        var robot = form['no_robot'];
        var confim_robot = form['confim_robot'];
        var btnSubmit = document.getElementById('submitAuth');

        function alertNoRobot() {
            popupWrap.classList.add('show');
            popupTxt.innerHTML = "Роботам тут не место!";
            document.removeEventListener('click', flipBackOnClick);
        }
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
                alertEmptyField();
            }
            if (!login.value && !password.value) {
                alertEmptyField();
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
                alertNoRobot();
                return false;
            }
            return true;
        }
        btnSubmit.addEventListener('click', function (e) {
            e.preventDefault();
            if (validate()) {
                form.submit();
            }
        });
    }
    if (popupClose) {
        popupClose.addEventListener('click', function (e) {
            e.preventDefault();
            popupWrap.classList.remove('show');
            if (auth) {
                setTimeout(function () {
                    document.addEventListener('click', flipBackOnClick);
                }, 500);
            }
        });
    }

    var contactForm = document.forms['contact_form'];
    function validationContactForm() {
        var form = contactForm;
        var name = form['name'];
        var email = form['email'];
        var message = form['message'];
        var btnSubmit = document.getElementById('btnSubmit');
        var btnReset = document.getElementById('btnReset');
        function alertSuccess() {
            popupWrap.classList.add('show');
            popupTxt.innerHTML = "Ваше сообщение успешно отправлено!";
        }

        function validate() {
            if (!email.value && !message.value && !name.value) {
                alertEmptyField();
                email.classList.add('form__input_error');
                message.classList.add('form__input_error');
                name.classList.add('form__input_error');
                return false;
            }
            if (!email.value || !message.value || !name.value) {
                alertEmptyField();
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
                alertSuccess();
                form.submit();
            }
        });
        btnReset.addEventListener('click', function (e) {
            e.preventDefault();
            form.reset();
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