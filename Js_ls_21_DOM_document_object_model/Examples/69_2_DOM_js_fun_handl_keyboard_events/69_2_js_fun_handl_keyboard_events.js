'use strict';

/* Немного улучшим сделанное на прошлом шаге - выделим все в отдельные функции */

/* 'Универсальный' обработчик действий */
function submitForm(){
        const input = document.querySelector('.input').value;
        if (!input){
                return;
        }
        document.querySelector('.panel').innerText = input;
        document.querySelector('.input').value = '';
}

/* Обработчик кликов мышью */
function changeMouseClick(){
        submitForm();
}

/* 
Слушатель нажатия клавишь, чтобы он сработал дополним строку: 
<input class="input" /> в index.html атрибутом 'onkeydown'  
*/
function changeKeyboardInput(event) {
        if (event.code == 'Enter') {
                submitForm();
        }
}

