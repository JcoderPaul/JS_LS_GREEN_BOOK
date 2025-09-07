'use strict';

/* 
Вынесем логику обработки событий, нажатие на кнопку фомы, в отдельную функцию,
т.е. все, что мы делали в прошлом примере, мы оформляем в виде 'универсальной' 
функции.

Теперь чтобы все заработало, нужно внести небольшие изменения в index.html, мы 
должны явно в строке: <button class="button">Change</button>, прописать 'поведение'
т.е. вызвать нашу функцию: onclick="changeClick().
*/

function changeClick(){
        const input = document.querySelector('.input').value;
        if (!input){
                return;
        }
        document.querySelector('.panel').innerText = input;
        document.querySelector('.input').value = '';
}

