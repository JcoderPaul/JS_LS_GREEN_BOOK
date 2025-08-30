/* 
Необходимо извлечь из строки имя и фамилию в отдельные переменные.
Известно, что имя всегда первое в строке, а фамилия последняя. 
*/

const userNameWithNick = 'Duglas aka deep digging Lind';

const userName = userNameWithNick.slice(0, userNameWithNick.indexOf(' ')); // C нулевого до первого пробела
console.log(userName); // Duglas

const userSurename = userNameWithNick.slice(
        userNameWithNick.lastIndexOf(' ') + 1, 
        userNameWithNick.length
); // C позиции последнего пробела + 1 (пробел не нужен), до конца строки
console.log(userSurename); // Lind