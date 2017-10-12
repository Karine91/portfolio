export default class Timing{
    constructor(){
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
    linear(timeFraction) {
        return timeFraction;
    }
    easeInQuad(timeFraction) {
        return Math.pow(timeFraction, 2);
    }
    easeInOct(timeFraction) {
        return Math.pow(timeFraction, 4);
    }
    easeInCirc(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
    }
    easeInBack(timeFraction) {
        var x = 1.5;
        return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
    }
    easeInBounce(timeFraction) {
        for (var a = 0, b = 1, result; ; a += b, b /= 2) {
            if (timeFraction >= (7 - 4 * a) / 11) {
                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
            }
        }
    }
    easeInElastic(timeFraction) {
        var x = 1.5;
        return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
    }
    makeEaseOut(timing) {
        return function(timeFraction) {
            return 1 - timing(1 - timeFraction);
        };
    }
    makeEaseInOut(timing) {
        return function(timeFraction) {
            if (timeFraction < .5)
                return timing(2 * timeFraction) / 2;
            else
                return (2 - timing(2 * (1 - timeFraction))) / 2;
        };
    }
    animate(options) {
        let start = performance.now();
        let idAnimate = requestAnimationFrame(function animate(time) {
            // timeFraction от 0 до 1
            let timeFraction = (time - start) / options.duration;
            if (timeFraction > 1) timeFraction = 1;
            // текущее состояние анимации
            let progress = options.timing(timeFraction);
            options.draw(progress);
            if (timeFraction < 1) {
                idAnimate = requestAnimationFrame(animate);
            }else{
                if(options.callback){
                    options.callback();
                }
            }
        });
        this.idAnimate = idAnimate;
    }
    stopAnimate(){
        cancelAnimationFrame(this.idAnimate);
    }
}
