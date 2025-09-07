'use strict';

function submitFormByClick(){
        const input = document.querySelector('.input').value;
        if (!input){
                return;
        }
        document.querySelector('.panel').innerText = input;
        document.querySelector('.input').value = '';
        
        const setNoteAttr = document
          .querySelector(".notification")
          .setAttribute("class", "notification notification_active");

        document
          .querySelector(".recommendation")
          .setAttribute("class", "recommendation", "recommendation");
}

function changeKeyboardInput(event) {
        if (event.code == 'Enter') {
                submitForm();
        }
}

/* 1-ый вариант */
console.log(document.querySelector('.one').innerText); // Element 1
console.log(document.querySelector('#two').innerText); // Element 3
console.log(document.querySelector('[userId = "4"]').innerText); // Element 4

/* 2-ой вариант */
const selectorArr = document.querySelectorAll('.one'); // Получаем все подходяцие по селектору элементы
console.log(selectorArr[0].innerText); // Выводим элемент 1-го вхождения
console.log(selectorArr[1].innerText); // Выводим элемент 2-го вхождения

console.log(document.getElementById('two').innerText); // Element 3