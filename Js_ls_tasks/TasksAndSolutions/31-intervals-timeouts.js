import brLine from "./js_border_line.js";

/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

function prnMsg(msg) { 
        console.log(`Message number ${msg}`)
}

/* 1 - Вариант первый - setTimeout */
for (let msg = 1; msg <= 5; msg++) {
        setTimeout(() => prnMsg(msg), 1000 * msg * 2);            
}

/* Дадим задержку 11 сек., дождемся окончания вывода 5-и собщений и выведем в консоль разделительную линию */
setTimeout(() => brLine(), 11000);
/* Что бы не перемешивать результат вывода в консоль первого цикла и второго см. ниже, запустим второй цикл через 12 сек.*/

/* 2 - Вариант второй - setInterval и clearInterval */
setTimeout(() => {
        for (let msg = 1; msg <= 5; msg++) {
                const toScreenMsg = setInterval(() => prnMsg(msg), 1000 * msg * 2); // выводим сообщение
                setTimeout(() => clearInterval(toScreenMsg), 1000 * msg * 2.1); // чистим Id интервала на 100 мс. позже
        }
}, 12000); 
/* ^ 
Если задержи не делать, то интерпретатор пробежит код, запустит его и у 
нас получиться вывод кучи сообщений из всех циклов сразу один за другим.
А мы хотим красиво - первые 5-ть сообщений, отчеркнули, следующие пять и
т.д.  
*/

setTimeout(() => brLine(), 23500);

/* 3 - Вариант третий - проще, короче, с глобальной переменной */
let i = 1;
setTimeout(() => {
        const msgToScreen = setInterval(() => console.log("Message number " + i++), 2000)
        setTimeout(() => clearInterval(msgToScreen), 10500);
}, 24000);

