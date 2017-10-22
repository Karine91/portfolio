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
        },
    }, {
        key: "easeInQuad",
        value: function easeInQuad(timeFraction) {
            return Math.pow(timeFraction, 2);
        },
    }, {
        key: "easeInOct",
        value: function easeInOct(timeFraction) {
            return Math.pow(timeFraction, 4);
        },
    }, {
        key: "easeInCirc",
        value: function easeInCirc(timeFraction) {
            return 1 - Math.sin(Math.acos(timeFraction));
        },
    }, {
        key: "easeInBack",
        value: function easeInBack(timeFraction) {
            var x = 1.5;
            return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
        },
    }, {
        key: "easeInBounce",
        value: function easeInBounce(timeFraction) {
            for (var a = 0, b = 1, result;; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
                }
            }
        },
    }, {
        key: "easeInElastic",
        value: function easeInElastic(timeFraction) {
            var x = 1.5;
            return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
        },
    }, {
        key: "makeEaseOut",
        value: function makeEaseOut(timing) {
            return function (timeFraction) {
                return 1 - timing(1 - timeFraction);
            };
        },
    }, {
        key: "makeEaseInOut",
        value: function makeEaseInOut(timing) {
            return function (timeFraction) {
                if (timeFraction < .5) return timing(2 * timeFraction) / 2;else return (2 - timing(2 * (1 - timeFraction))) / 2;
            };
        },
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
        },
    }, {
        key: "stopAnimate",
        value: function stopAnimate() {
            cancelAnimationFrame(this.idAnimate);
        },
    }]);

    return Timing;
}();

export default Timing;