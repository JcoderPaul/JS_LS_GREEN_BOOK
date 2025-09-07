'use strict';

/* 
Взаимодействие с атрибутами HTML элементов, например в строке
<input class="input" onkeydown="changeKeyboardInput(event)"/> 
есть атрибут 'class' и 'onkeydown' и конечно с ними мы можем
взаимодействовать.
*/

function submitFormByClick(){
        const input = document.querySelector('.input').value;
        if (!input){
                return;
        }
        document.querySelector('.panel').innerText = input;
        document.querySelector('.input').value = '';

        /* Получаем атрибут по CSS селектору */
        let getRecommendAttr = document
          .querySelector(".recommendation")
          .getAttribute("class");
        /* 
        После заполнения формы и клика мышью в консоли браузера видим: 
                recommendation_display recommendation
        это содержимое атрибута 'class' строки:
                <div class="recommendation_display recommendation">Enter text for change!</div>
        */
        console.log(getRecommendAttr);

        /* Мы так же можем установить атрибут - сделаем, чтобы это работало как в прошлом примере */
        const setNoteAttr = document
          .querySelector(".notification")
          .setAttribute("class", "notification notification_active"); // В даном случае мы добавляем класс в атрибут 'перезаписывая' его

        document
          .querySelector(".recommendation")
          .setAttribute("class", "recommendation", "recommendation");

        /* Зададим дополнительный атрибут и тут же его вернем в консоль */  
        document
          .querySelector(".recommendation")
          .setAttribute("userId", "1");  
        
        getRecommendAttr = document
          .querySelector(".recommendation")
          .getAttribute("userId");
        console.log(getRecommendAttr);  
}

function changeKeyboardInput(event) {
        if (event.code == 'Enter') {
                submitForm();
        }
}

