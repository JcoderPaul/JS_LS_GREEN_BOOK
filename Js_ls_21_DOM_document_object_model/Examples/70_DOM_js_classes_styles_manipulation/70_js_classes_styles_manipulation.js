'use strict';

/* 
Попробуем взаимодействовать с таблицей стилей CSS и добавим динамики в страницу.
Добавим поле с текстом, оно будет менять видимость в зависимости от наших действий.
*/

/* 'Универсальный' обработчик действий */
function submitForm(){
        const input = document.querySelector('.input').value;
        if (!input){
                return;
        }
        document.querySelector('.panel').innerText = input;
        document.querySelector('.input').value = '';
        
        /* 
        В таком варианте, в процессе работы, изменения как бы ложаться сверху не меняя свойства самого класса 
        'notification', это будет работать: 

        document.querySelector('.notification').style.display = 'block';

        см. ..\Js_ls_21_DOM_document_object_model\DOC\CSS_HTML_interaction_interfaces\elementStyleProperty.md

        Но, что если нужно сделать такие замены во многих местах и менять не только свойства отображения, а 
        например шрифт, цвет и т.п.

        Лучше сделать немного по другому. Добавим классу изменения свойств в файле CSS. И обратимся к самому 
        классу. Для наглядности отобразим два варианта добавление и удаление классов (см. структуру строк в 
        index.html и краткое описание свойства): 
        ..\Js_ls_21_DOM_document_object_model\DOC\CSS_HTML_interaction_interfaces\classListProperty.md
        */
        document.querySelector('.notification').classList.add('notification_active'); // Не видна до изменений, видна после
        document.querySelector('.recommendation').classList.remove('recommendation_display'); // Видна до изменений, не видна после

}

/* Обработчик кликов мышью - теоретически без него можно обойтись сразу используя submitForm() */
function changeMouseClick(){
        submitForm();
}

/* 
Слушатель нажатия клавиш, чтобы он сработал дополним строку:
<input class="input" /> в index.html атрибутом 'onkeydown'  
*/
function changeKeyboardInput(event) {
        if (event.code == 'Enter') {
                submitForm();
        }
}

