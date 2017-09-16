'use strict';

import 'normalize.css';
import './index.scss';
require('../../components/fonts/fonts.css');
import '../../components/basic.scss';
require( '../../components/sprite/symbol/_sprite_socials.scss');

import createMenu from '../../components/menu/menu';
var menu = createMenu([{ name: 'Главная', link: "index.html" },{ name: 'Обо мне', link: "about.html"}, {name: 'Мои работы', link: "my-works.html"}, {name: 'Блог', link: "blog.html"}], 'menu');
document.body.insertBefore(menu, document.body.firstElementChild);

