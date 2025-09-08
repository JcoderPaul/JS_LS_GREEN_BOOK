'use strict';

/* Помещаем ключи и значения в хранилище - смотрим панель разработчика */
localStorage.setItem('token', 'qwert');
localStorage.setItem('token_2', 321);
localStorage.setItem('token_3', true);
/* 
В панели разработчика браузера: Application → Storage → Local storage → http://127.0.0.1:5500/ 
Мы видим наши ключи и значения.
*/

/* Извлекаем данные из хранилища */
const token = localStorage.getItem("token");
console.log(token); // qwert
console.log(typeof token); // string

/* !!! ВНИМАНИЕ !!! */
const token_2 = localStorage.getItem("token_2");
console.log(token_2); // 321
console.log(typeof token_2); // string - хотя мы внесли number 

const token_3 = localStorage.getItem("token_3");
console.log(token_3); // true
console.log(typeof token_3); // string - хотя мы внесли bollean

/* Удалить один ключ */
localStorage.removeItem(token_3); // Удалили ключ-значение из хранилища

/* Очистить все */
localStorage.clear();


