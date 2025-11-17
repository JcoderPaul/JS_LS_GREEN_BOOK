/** ЗАДАЧА 71 - Spread Operator
 *
 * 1 - Используя оператор "spread" создайте новый массив. 
 * 2 - Вывод в консоли должен быть таким же как в конце задания.
 * 
 * Для понимания происходящего см.: 
 * - ..\JS_LS\Js_ls_tasks\DOC\RestAndSpredOperatorsOnJS\SpredOperatorOnJavaScript.md
 * - ..\JS_LS\Js_ls_5_operators\DOC\SpreadOperator.md
 */

const a = [1, 2];
const b = [4, 5];
const c = [8, 9, 10];
const d = 11;

/* Код: */
const combinedArray = [0, ...a, 3, ...b, 6, 7, ...c, d];

/* Должно быть на выходе: */
console.log(combinedArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
