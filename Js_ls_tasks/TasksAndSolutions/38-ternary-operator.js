import brLine from "./js_border_line.js";

/** ЗАДАЧА 38 - Тернарный оператор
 *
 * Дано:
 * 
 * function isArrayEmpty(inputArray) {
 *  if (inputArray.length > 0) {
 *    return 'Массив не пустой'
 *  } else {
 *    return 'Массив пустой'
 *  }
 * }
 * 
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 * 2. Перепишите содержимое функции, используя тернарный оператор
 * 3. Замените обычную функцию на стрелочную функцию
 * 
 * Решение:
 */

/* ----- 0 - Вариант убираем else ----- */
function arrayIsEmpty(inputArray) {
  if (inputArray.length > 0) return 'Массив не пустой';

  return 'Массив пустой';
}

console.log(arrayIsEmpty([1, 3]));
console.log(arrayIsEmpty([]));
brLine();

/* ----- 1 - Вариант с явным возвратом ----- */
const isArrayEmpty = (inputArray) => {
  let toReturnIs;
    inputArray.length > 0 ? toReturnIs = 'Массив не пустой' : toReturnIs = 'Массив пустой';
  return toReturnIs;
}

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));
brLine();

/* ----- 2 - Вариант короче и неявнее ----- */
const isEmptyArrNow = (inputArray) => inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой';

console.log(isEmptyArrNow([1, 3]));
console.log(isEmptyArrNow([]));

