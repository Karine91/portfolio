function ajax(){
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', "/api/test.txt");
    xhr.send();
    xhr.addEventListener('load', ()=>{
        if (xhr.status != 200) {
            // обработать ошибку
            alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
          } else {
            // вывести результат
            alert( xhr.response); // responseText -- текст ответа.
          }
    });
}

function init(){
   
}

export {
    init as ajaxValidate,
};
