const $ = require('jquery');
const slider = require('./common/slider');
import {preloader} from './common/preloader';
const authFlip = require('./common/authorization');
const gmap = require('./common/gmaps.js');
const menu = require('./common/menu.js');
const blur = require('./common/blur.js');
const parallaxPage = require('./common/parallaxPage.js');
import {sidebarinit, spySidebarLinks, spyPostScroll} from './common/sidebarScroll.js';
import {arrScroll} from './common/arrowScroll.js';
import {parallaxMain} from './common/parallaxMain.js';

$(document).ready(function(){
    preloader();
    gmap();
    parallaxMain();
    slider();
    authFlip();
    blur();
    menu();
    arrScroll();
    if(sidebarinit()){
        spySidebarLinks();
    }  
});

window.addEventListener('scroll', () =>{
    var wScroll = window.pageYOffset;
    parallaxPage(wScroll);
    sidebarinit(wScroll);
    spyPostScroll(wScroll);
});
