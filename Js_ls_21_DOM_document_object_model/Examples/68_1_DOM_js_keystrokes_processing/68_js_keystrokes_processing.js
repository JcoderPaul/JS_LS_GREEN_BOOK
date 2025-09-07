'use strict';

document.querySelector('.input').value = 'Input your text';

/* 
Давайте сделаем так, чтобы при нажатии на кнопки 
текст из заполненной формы перешол в текстовую 
панель между формой и логотипом.
*/

/* 
В index.html есть <button class="button">Change</button> - будем ее "слушать" на нажатие.
Мы используем селектор, 'находим кнопку' и добавляем на нее слушатель событий, с описанием
того, что нужно делать после нажатия данной кнопки. 
*/
document.querySelector('.button').addEventListener('click', function(){
        /* 
        В консоли браузера при нажатии мы увидим наш текст: 'Key was presset' 
        и счетчик нажатий. Вид html страницы не изменится. При этом в текущую
        функцию мы можем передавать аргументы event. 
        */
        console.log('Key was presset');
        
        /* Теперь пробуем получить данные из заполненной формы при нажатии кнопки */
        const input = document.querySelector('.input').value;
        console.log(input); // Что вводим в поле формы видим в консоли после нажатия кнопки формы

        /* Нам нужно проверить, что в форму перед нажатием кнопки действительно ввели кокой то текст */
        if (!input){
                return; // No honey - no money
        }
        /* 
        В нашем index.html есть <div class="panel">I love this!</div> 
        вот его внутренний текст мы и заменим введенным в форму. 
        */
        document.querySelector('.panel').innerText = input;
        /* 
        В нашем index.html есть <input class="input" /> - форма ввода с которой мы работаем
        Очистим форму ввода, чтобы после каждого нажатия она преобретала первозданный вид. 
        */
        document.querySelector('.input').value = 'Input your text';
});