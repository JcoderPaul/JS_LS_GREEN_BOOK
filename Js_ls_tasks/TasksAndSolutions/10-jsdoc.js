import brLine from "./js_border_line.js";

/** ЗАДАЧА 10 - Комментарий перед функцией
 *
 * 1. Объявите функцию с двумя параметрами, значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и вторым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией:
 *  - Текст комментария "Возвращает разницу двух чисел"
 *  - Укажите тип параметров - number
 *  - Укажите тип возвращаемого значения - number
 *  - Опишите возвращаемое значение - "Разница чисел"
 *
 * 4. Вызовите функцию
 */

/**
 * Возвращает разницу двух чисел
 * 
 * @param {number} first 
 * @param {number} second 
 * @returns {number} Разница чисел
 */
function subtraction(first, second) {
        if (typeof first !== 'number' || typeof second !== 'number' || isNaN(first) || isNaN(second)) {
                throw new Error("One or both arguments are not number!");
        }
        return first - second;
}

let res = subtraction(8, 5);
console.log(res);

brLine();

try{
        console.log(subtraction(5, "one"));
} catch(ex) {
        console.log(ex.message);                
}
