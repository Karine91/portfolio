const skillCircle = document.querySelectorAll('.skill-circle__second');
const skillSection = document.querySelector('.about-right-content');
function beginAnimateSkill(){
    if(skillSection.getBoundingClientRect().top < 10){
        [].slice.call(skillCircle).forEach(function (elem) {
            elem.classList.add('circle-' + elem.getAttribute('data-percent'));
        });
    }
}
function init(){
    if(skillSection){
        beginAnimateSkill();
    }
}
module.exports = init;