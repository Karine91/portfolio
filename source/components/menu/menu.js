import './menu.scss';

export default function(array, className){
    var menu = document.createElement("ul");
    menu.className = className;
    var listItems = '';
    array.forEach(function(item) {
        listItems += '<li><a href="'+ item.link +'">' + item.name + '</a></li>';
    });
    menu.innerHTML = listItems;
    return menu;
}