/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений используя оператор typeof
 */

const strVar = "test";
const intVar = 12;
const boolVar = true;
const nullVar = null;
let unDefVar;

const objIt = {
        objName: "Malcolm",
        objAge: 21 
}

const arrOfNumber = [3, 5, 12, 5];

console.log(typeof strVar);
console.log(typeof intVar);
console.log(typeof boolVar);
console.log(typeof nullVar);
console.log(typeof unDefVar);
console.log(typeof objIt);
console.log(typeof arrOfNumber);