/**
 * Задача 91 - Проверить правильность написания телефонного номера (не используя RegEx).
 * 
 * Дан набор номеров (в виде строки), проверить правильность их написания.
 */

/* Верные */
const rNum1 = '89103235356';
const rNum2 = '+79103235356';
const rNum3 = '+7(910)3235356';
const rNum4 = '+7(910) 323-53-56';
const rNum5 = '  +7(910) 323-53-56  ';

/* НЕ Верные */
const errNum1 = '8910323';
const errNum2 = '+7d910d323-53-56';
const errNum3 = '9+7103235356';
const errNum4 = '89103g235356';

/* Основная задача привести к некоему стандартному виду, заранее известной длинны */
function strIsPhoneNumber(strNum){
        strNum = strNum.trim(); // Шаг 1 - 'Обрезаем' краевые пробелы
        strNum = strNum.replace('+7', '8'); // Шаг 2 - Заменяем +7 на 8
        
        if (!strNum.startsWith('8')){ 
                return false; // Шаг 3 - Если номер не начинается с 8, он не верный
        }
        
        /* Шаг 4 - удаляем пробелы, скобки и дефисы - заменяем их 'отсутствием' */
        strNum = strNum.replaceAll('(', '');
        strNum = strNum.replaceAll(')', '');
        strNum = strNum.replaceAll(' ', '');
        strNum = strNum.replaceAll('-', '');

        if (strNum.length !== 11){ 
                return false; // Шаг 5 - Если после всех 'чисток' длина строки с не ровна 11 - что-то не так
        }

        /* Шаг 6 - У нас может быть 11 символов, но среди них может попасться не число */
        let onlyNum = true;
        for (const char of strNum) {
                if (isNaN(Number(char))){
                        onlyNum = false;
                        break;
                }
        }
        return onlyNum;
}

/* true */
console.log(strIsPhoneNumber(rNum1));  
console.log(strIsPhoneNumber(rNum2));
console.log(strIsPhoneNumber(rNum3));
console.log(strIsPhoneNumber(rNum4));
console.log(strIsPhoneNumber(rNum5));

/* false */
console.log(strIsPhoneNumber(errNum1));
console.log(strIsPhoneNumber(errNum2));
console.log(strIsPhoneNumber(errNum3));
console.log(strIsPhoneNumber(errNum4));