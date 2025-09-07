'use strict';

/* C помощью данного скрипта добавим элементы в нашу index.html */

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

/* 1-ый вариант - создаем пока не активный элемент */
const newElement = document.createElement('button'); // Мы создали элемент с тегом button
newElement.setAttribute('user-id', 1); // Добавили в нее некий аргумент
newElement.classList.add('button'); // Добавили в элемент css класс button
newElement.innerText = 'Press here!'

/* Находим <div class="test"></div> в index.html и добавляем элемент - и видим его на стр. */
document.querySelector('.test').appendChild(newElement); 

/* И в консоли браузера в разделе Elements мы видим:
        <div class="test">
                <button user-id="1" class="button">Press here!</button>
        </div> 
*/

/* 2-ой вариант - немного шаблонизации */
const panelText = 'Can press button?';
const panelClass = 'button';
const anotherElement = document.createElement('div');
anotherElement.classList.add('panel');

anotherElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;

/* Находим <div class="test_two"></div> в index.html и добавляем элемент - и видим его на стр. */
document.querySelector('.test_two').appendChild(anotherElement);

/* И в консоли браузера в разделе Elements мы видим:
        <div class="test_two">
                <div class="panel">
                        <button class="button">Can press button?</button>
                </div>
        </div>

Хотя, если мы захотим посмотреть стандартный код страницы мы увидим, все те же неизменные:

        <div class="test"></div>
        <div class="test_two"></div>
*/