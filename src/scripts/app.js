const $ = require('jquery');
import {sliderInit} from './common/slider';
import {preloader} from './common/preloader';
const forms = require('./common/forms');
const gmap = require('./common/gmaps.js');
import {initMenu}  from './common/menu.js';
const blur = require('./common/blur.js');
const parallaxPage = require('./common/parallaxPage.js');
import {sidebarinit, spySidebarLinks, spyPostScroll, sidebarMenu} from './common/sidebarScroll.js';
import {arrScroll} from './common/arrowScroll.js';
import {parallaxMain} from './common/parallaxMain.js';
import {ajaxValidate} from './common/validation.js';
const skillAnimate = require('./common/skills.js');

$(document).ready(function(){
    preloader();
    gmap();
    parallaxMain();
    sliderInit();
    forms();
    blur();
    initMenu();
    arrScroll();
    if(sidebarinit()){
        spySidebarLinks();
        sidebarMenu();
    }  
});

window.addEventListener('scroll', () =>{
    var wScroll = window.pageYOffset;
    parallaxPage(wScroll);
    sidebarinit(wScroll);
    spyPostScroll(wScroll);
    skillAnimate();
});
