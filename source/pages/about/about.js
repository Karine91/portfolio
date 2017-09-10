import 'normalize.css';
import './about.scss';

import createMenu from '../../components/menu/menu';
var menu = createMenu([{ name: 'Главная', link: "index.html" },{ name: 'Обо мне', link: "about.html"}, {name: 'Мои работы', link: "my-works.html"}, {name: 'Блог', link: "blog.html"}], 'menu');
document.body.insertBefore(menu, document.body.firstElementChild);

console.log('in about.js');