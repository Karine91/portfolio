const $ = require('jquery');
const slider = require('./common/slider');
const authFlip = require('./common/authorization');
const gmap = require('./common/gmaps.js');
const menu = require('./common/menu.js');
const blur = require('./common/blur.js');
$(document).ready(function(){
    gmap();
    slider();
    authFlip();
    blur();
    menu();
});
