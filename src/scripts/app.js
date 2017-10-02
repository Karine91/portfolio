const $ = require('jquery');
const slider = require('./common/slider');
const authFlip = require('./common/authorization');
const gmap = require('./common/gmaps.js');
const menu = require('./common/menu.js');
const blur = require('./common/blur.js');
const parallaxPage = require('./common/parallaxPage.js');
const scrollSidebar = require('./common/sidebarScroll.js');
$(document).ready(function(){
    gmap();
    slider();
    authFlip();
    blur();
    menu();
});

window.addEventListener('scroll', () =>{
    var wScroll = window.pageYOffset;
    parallaxPage(wScroll);
    scrollSidebar(wScroll);
});
